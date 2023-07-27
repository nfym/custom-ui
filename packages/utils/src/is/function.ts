import isType from './isType'

export function isFunction(value: unknown) {
  return typeof value === 'function'
}

/**
 * 是否是参数类型
 */
export function isArguments(value: any): boolean {
  return isType(value, 'Arguments')
}
