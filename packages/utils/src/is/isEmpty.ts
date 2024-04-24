import { getType } from './getType'
import { isNil } from './primitive'
import { isArrayLike } from './array'
import { isPrototype } from './object'
/**
 *  是否为空
 * @param {any} value
 * ```ts
 * // isEmpty(null) => true
 * // isEmpty() => true
 * // isEmpty(true) => true
 * // isEmpty(1) => true
 * // isEmpty([1, 2, 3]) => false
 * // isEmpty('abc') => false
 * // isEmpty({ a: 1 }) => false
 * ```
 */
export function isEmpty(value: any): boolean {
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
