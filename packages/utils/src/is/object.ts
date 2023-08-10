import isType from './isType'

export interface ObjectType<T> {
  [key: string | symbol]: T
}

/**
 * 是否对象类型，包括object、array、function, 剔除了 null
 */
export function isObject<T = any>(value: any): value is T {
  /**
   * isObject({}) => true
   * isObject([1, 2, 3]) => true
   * isObject(Function) => true
   * isObject(null) => false
   */
  const type = typeof value
  return (value !== null && type === 'object') || type === 'function'
}

/**
 * @description: 是否对象类型，包括object、array, 剔除了 null 和 function
 */
export function isObjectLike(value: any): value is ObjectType<any> {
  /**
   * isObjectLike({}) => true
   * isObjectLike([1, 2, 3]) => true
   * isObjectLike(Function) => false
   * isObjectLike(null) => false
   */
  return value !== null && typeof value === 'object'
}

/**
 * @description: 是否对象类型，包括object, 剔除了array、 null 和 function
 */
export function isObjectOnly(value: any): value is ObjectType<any> {
  /**
   * isObjectLike({}) => true
   * isObjectLike([1, 2, 3]) => false
   * isObjectLike(Function) => false
   * isObjectLike(null) => false
   */
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
// TODO isMap isSet isWeakMap isWeakSet
