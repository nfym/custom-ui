/**
 *  获取数据原始类型
 * @param value
 * @return string
 */
export function getType(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1)
}
