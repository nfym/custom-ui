/**
 * 是否 Array
 */
export function isArray(value: any): value is Array<any> {
  return value && Array.isArray(value)
}

/**
 * 是否类数组结构
 */
export function isArrayLike(value: any): boolean {
  /**
   * isArrayLike([1, 2, 3]) => true
   * isArrayLike(document.body.children) => true
   * isArrayLike('abc') => true
   * isArrayLike(Function) => false
   */
  return value !== null && typeof value !== 'function' && isFinite(value.length)
}
