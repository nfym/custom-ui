import { isType } from './isType'
import { isFunction } from './function'

export interface ObjectType<T> {
  [key: string | symbol]: T
}

/**
 * 是否对象类型，包括object、array、function, 剔除了 null
 *
 * ```ts
 * // isObject({}) => true
 * // isObject([1, 2, 3]) => true
 * // isObject(Function) => true
 * // isObject(null) => false
 * ```
 */
export function isObject<T = any>(value: any): value is T {
  const type = typeof value
  return (value !== null && type === 'object') || type === 'function'
}

/**
 *  是否对象类型，包括object、array, 剔除了 null 和 function
 *
 * ```ts
 * // isObjectLike({}) => true
 * // isObjectLike([1, 2, 3]) => true
 * // isObjectLike(Function) => false
 * // isObjectLike(null) => false
 * ```
 */
export function isObjectLike(value: any): value is ObjectType<any> {
  return value !== null && typeof value === 'object'
}

/**
 *  是否对象类型，包括object, 剔除了array、 null 和 function
 *
 * ```ts
 * // isObjectLike({}) => true
 * // isObjectLike([1, 2, 3]) => false
 * // isObjectLike(Function) => false
 * // isObjectLike(null) => false
 * ```
 */
export function isObjectOnly(value: any): value is ObjectType<any> {
  return value !== null && isType(value, 'Object')
}

export function isPrototype(value: any): boolean {
  const Ctor = value && value.constructor
  const proto =
    (typeof Ctor === 'function' && Ctor.prototype) || Object.prototype
  return value === proto
}

export function isRegExp(value: unknown): value is RegExp {
  return isType(value, 'RegExp')
}

export function isDate(value: unknown): value is Date {
  return isType(value, 'Date')
}

export function isError(value: any): value is Error {
  return isType(value, 'Error')
}

export function isPromise<T = any>(value: unknown): value is Promise<T> {
  return (
    isType(value, 'Promise') &&
    isObject(value) &&
    isFunction(value.then) &&
    isFunction(value.catch)
  )
}
// TODO isMap isSet isWeakMap isWeakSet
