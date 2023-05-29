/**
 * @description 存在 Unicode 码点大于0xFFFF的字符时， 使用 for of 获取字符数
 * @param str
 * @return {number}
 */
function charLength(str: string): number {
  let length = 0

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _char of str) {
    length += 1
  }

  return length
}

export default charLength
