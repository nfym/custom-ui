/**
 * @description 生成随机id
 * @param {number} length
 * @param {string} chars
 */
export function uuid(length: number, chars: any) {
  chars =
    chars || "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  length = length || 8;
  let result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
