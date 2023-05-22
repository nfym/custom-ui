/**
 * @description 存在 Unicode 码点大于0xFFFF的字符时， 使用 for of 获取字符数
 * @param str
 * @return {number}
 */
function charLength(str: string): number {
  let length = 0;

  for (let _char of str) {
    length += 1;
  }

  return length;
}

export default charLength;
