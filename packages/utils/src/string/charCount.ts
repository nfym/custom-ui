/**
 * @description 获取字符串中指定字符的个数
 * @param str
 * @param char
 * @returns
 */
const charCount = (str: string, char: string) => str.split(char).length - 1;

export default charCount;
