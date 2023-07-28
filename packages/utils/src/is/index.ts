import getType from './getType'
import isType from './isType'

import { isNil } from './primitive'
import { isObject, isPrototype } from './object'
import { isArrayLike } from './array'
import { isFunction } from './function'

export { default as getType } from './getType'
export { default as isType } from './isType'
export {
  isNumber,
  isInteger,
  isDecimal,
  isPositive,
  isNegative,
  isEven,
  isOdd
} from './number'
export { isString, isIntegerKey } from './string'
export {
  isNull,
  isUnNull,
  isUnDef,
  isDef,
  isDefAndUnNull,
  isNil,
  isBoolean,
  isPrimitive
} from './primitive'
export { isArray, isArrayLike } from './array'
export {
  isObject,
  isObjectLike,
  isPrototype,
  isRegExp,
  isDate,
  isError
} from './object'
export { isFunction, isArguments, isAsyncLike, isAsync } from './function'

export function isPromise<T = any>(value: unknown): value is Promise<T> {
  return (
    isType(value, 'Promise') &&
    isObject(value) &&
    isFunction(value.then) &&
    isFunction(value.catch)
  )
}

/**
 * @Description: 是否为空
 * @param {any} value
 */
export function isEmpty(value: any): boolean {
  /**
   * isEmpty(null) => true
   * isEmpty() => true
   * isEmpty(true) => true
   * isEmpty(1) => true
   * isEmpty([1, 2, 3]) => false
   * isEmpty('abc') => false
   * isEmpty({ a: 1 }) => false
   */
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
