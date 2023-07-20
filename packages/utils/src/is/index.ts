// const toString = Object.prototype.toString
export { default as getRawType } from './getRawType'
export { default as isType } from './isType'
export { default as isPrimitive } from './isPrimitive'

export function isNull(value: unknown): value is null {
  return value === null
}

export function isDef<T = unknown>(value?: T): value is T {
  return typeof value !== 'undefined'
}

export function isUndefined<T = unknown>(value?: T): value is T {
  return value === undefined
}

export default {
  isNull
}
