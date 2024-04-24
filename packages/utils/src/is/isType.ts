/**
 * 是否为指定的数据类型
 * @param value unknown
 * @param type string
 * @demo isType(3, 'Number') => true
 * @demo isType([1, 2, 3],'Array') => true
 * @demo isType('abc','String') => true
 * @return boolean
 */
export default function isType(value: unknown, type: string) {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}
