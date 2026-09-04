const WATERMARK_CHUNK_SIZE = 30
const VS_BMP_BASE = 0xfe00
const VS_BMP_END = 0xfe0f
const VS_SUPPLEMENT_BASE = 0xe0100
const VS_SUPPLEMENT_END = 0xe01ef
const VS_BMP_COUNT = 16

/**
 * 将一个字节映射为不可见的 Unicode 变体选择符
 * @param byte 0–255 的字节值
 */
const byteToVariationSelector = (byte: number): string => {
  return byte < VS_BMP_COUNT
    ? String.fromCodePoint(VS_BMP_BASE + byte)
    : String.fromCodePoint(VS_SUPPLEMENT_BASE + byte - VS_BMP_COUNT)
}

/**
 * 将变体选择符码点还原为字节；不是水印字符则返回 null
 * @param codePoint Unicode 码点
 */
const variationSelectorToByte = (codePoint: number): number | null => {
  if (codePoint >= VS_BMP_BASE && codePoint <= VS_BMP_END) {
    return codePoint - VS_BMP_BASE
  }
  if (codePoint >= VS_SUPPLEMENT_BASE && codePoint <= VS_SUPPLEMENT_END) {
    return codePoint - VS_SUPPLEMENT_BASE + VS_BMP_COUNT
  }
  return null
}

/**
 * 按固定间隔随机选取嵌入位置（按 Unicode 码点计）
 * @param text 原文
 */
const pickEmbedIndexes = (text: string): number[] => {
  const chars = [...text]
  const length = chars.length
  const indexes: number[] = []

  if (length === 0) {
    return indexes
  }

  if (length <= WATERMARK_CHUNK_SIZE) {
    indexes.push(Math.floor(Math.random() * length))
    return indexes
  }

  for (let i = 0; i < length; i += WATERMARK_CHUNK_SIZE) {
    const span = Math.min(WATERMARK_CHUNK_SIZE, length - i)
    indexes.push(i + Math.floor(Math.random() * span))
  }

  return indexes
}

/**
 * 将 UTF-8 字节解码为字符串，非法序列返回 null
 * @param bytes 水印字节
 */
const decodeWatermarkBytes = (bytes: number[]): string | null => {
  if (!bytes.length) {
    return null
  }

  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(
      Uint8Array.from(bytes)
    )
  } catch {
    return null
  }
}

/**
 * 将水印文本以不可见变体选择符的形式嵌入原文
 * @param text 原文
 * @param watermark 水印文本
 */
export const embedTextWatermark = (text: string, watermark: string): string => {
  if (!text || !watermark) {
    return text
  }

  const chars = [...text]
  const watermarkBytes = new TextEncoder().encode(watermark)
  const indexes = pickEmbedIndexes(text)

  indexes.forEach((index) => {
    let char = chars[index]
    watermarkBytes.forEach((byte) => {
      char += byteToVariationSelector(byte)
    })
    chars[index] = char
  })

  return chars.join('')
}

/**
 * 从带水印文本中解析出水印
 * @param text 可能带有不可见水印的文本
 * @returns 解析出的水印；没有有效水印时返回 null
 */
export const decodeTextWatermark = (text: string): string | null => {
  if (!text) {
    return null
  }

  const counts = new Map<string, number>()
  const currentBytes: number[] = []

  const flush = () => {
    const watermark = decodeWatermarkBytes(currentBytes)
    currentBytes.length = 0
    if (!watermark) {
      return
    }
    counts.set(watermark, (counts.get(watermark) ?? 0) + 1)
  }

  for (const char of text) {
    const byte = variationSelectorToByte(char.codePointAt(0) ?? 0)
    if (byte === null) {
      flush()
      continue
    }
    currentBytes.push(byte)
  }
  flush()

  if (!counts.size) {
    return null
  }

  let result: string | null = null
  let maxCount = 0
  counts.forEach((count, watermark) => {
    if (count > maxCount) {
      maxCount = count
      result = watermark
    }
  })

  return result
}
