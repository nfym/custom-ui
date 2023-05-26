const toString = Object.prototype.toString

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
