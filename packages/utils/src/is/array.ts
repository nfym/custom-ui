/**
 *  是否 Array
 */
export function isArray(value: any): value is Array<any> {
  if (Array.isArray) return Array.isArray(value)

  return value instanceof Array
}

/**
 *  是否类数组结构
 *```
 * // isArrayLike([1, 2, 3]) => true
 * // isArrayLike(document.body.children) => true
 * // isArrayLike('abc') => true
 * // isArrayLike(Function) => false
 * ```
 */
export function isArrayLike(value: any): boolean {
  return value !== null && typeof value !== 'function' && isFinite(value.length)
}
