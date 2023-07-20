/**
 * 是否为 Number、String、symbol、boolean 数据类型
 * @param value unknown
 * @param type string
 * @return boolean
 */
export default function isType(value: unknown, type: string) {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}
