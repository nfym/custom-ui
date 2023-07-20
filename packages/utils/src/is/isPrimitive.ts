/**
 * 是否为 Number、String、symbol、boolean 数据类型
 * @param value unknown
 * @return boolean
 */
export default function isPrimitive(value: unknown) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
