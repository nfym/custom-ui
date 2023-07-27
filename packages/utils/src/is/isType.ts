/**
 * 是否为指定的数据类型
 * @param value unknown
 * @param type string
 * @return boolean
 */
export default function isType(value: unknown, type: string) {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}
