import { isString } from './string'
import { isObjectLike } from './object'
import { isArrayLike } from './array'
/**
 * @Description: 两个数据是否相同
 * @param {any} value
 * @param {any} other
 */
export function isEqual(value: any, other: any): boolean {
  if (value === other) {
    return true
  }
  if (!value || !other) {
    return false
  }
  if (isString(value) || isString(other)) {
    return false
  }
  if (isArrayLike(value) || isArrayLike(other)) {
    if (value.length !== other.length) {
      return false
    }
    let rst = true
    for (let i = 0; i < value.length; i++) {
      rst = isEqual(value[i], other[i])
      if (!rst) {
        break
      }
    }
    return rst
  }
  if (isObjectLike(value) || isObjectLike(other)) {
    const valueKeys = Object.keys(value)
    const otherKeys = Object.keys(other)
    if (valueKeys.length !== otherKeys.length) {
      return false
    }
    let rst = true
    for (let i = 0; i < valueKeys.length; i++) {
      rst = isEqual(value[valueKeys[i]], other[valueKeys[i]])
      if (!rst) {
        break
      }
    }
    return rst
  }
  return false
}

/**
 * @Description: 两个数据是否相同,不依赖其他函数，来自https://www.30secondsofcode.org/js/s/equals/
 */
export const equals = (a: any, b: any): boolean => {
  if (a === b) return true

  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()

  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b

  if (a.prototype !== b.prototype) return false

  const keys = Object.keys(a)
  if (keys.length !== Object.keys(b).length) return false

  return keys.every((k) => equals(a[k], b[k]))
}
