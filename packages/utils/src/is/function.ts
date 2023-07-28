import isType from './isType'

export function isFunction(value: unknown) {
  return typeof value === 'function'
}

/**
 * @description 检查 value 是否是一个类 arguments 对象
 * @demo isArguments(function() { return arguments; }());
 */
export function isArguments(value: any): boolean {
  return isType(value, 'Arguments')
}

export function isAsyncLike<T>(obj: any): obj is Promise<T> {
  return typeof obj === 'object' && obj.then && typeof obj.then === 'function'
}

export function isAsync<T>(obj: any): obj is Promise<T> {
  return obj != null && (obj instanceof Promise || isAsyncLike(obj))
}
