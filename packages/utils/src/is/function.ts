import { isType } from './isType'

export function isFunction(value: unknown): boolean {
  return typeof value === 'function'
}

/**
 *  检查 value 是否是一个类 arguments 对象
 * ```
 *  // isArguments(function() { return arguments; }());
 * ```
 */
export function isArguments(value: unknown): boolean {
  return isType(value, 'Arguments')
}

export function isAsyncLike<T>(obj: any): obj is Promise<T> {
  return typeof obj === 'object' && obj.then && typeof obj.then === 'function'
}

export function isAsync<T>(obj: unknown): obj is Promise<T> {
  return obj != null && (obj instanceof Promise || isAsyncLike(obj))
}
