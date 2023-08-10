import getType from './getType'
import { isNil } from './primitive'
import { isArrayLike } from './array'
import { isPrototype } from './object'
/**
 * @description: 是否为空
 * @param {any} value
 * @demo isEmpty(null) => true
 * @demo isEmpty() => true
 * @demo isEmpty(true) => true
 * @demo isEmpty(1) => true
 * @demo isEmpty([1, 2, 3]) => false
 * @demo isEmpty('abc') => false
 * @demo isEmpty({ a: 1 }) => false
 */
export default function isEmpty(value: any): boolean {
  const hasOwnProperty = Object.prototype.hasOwnProperty
  if (isNil(value)) {
    return true
  }
  if (isArrayLike(value)) {
    return !value.length
  }
  const type = getType(value)
  if (type === 'Map' || type === 'Set') {
    return !value.size
  }
  if (isPrototype(value)) {
    return !Object.keys(value).length
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false
    }
  }
  return true
}
