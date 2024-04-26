/**
 *  获取字符串中指定字符的个数
 * @param str
 * @param char
 * @returns
 */
export function charCount(str: string, char: string): number {
  return str.split(char).length - 1
}
