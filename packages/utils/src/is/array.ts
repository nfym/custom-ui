/**
 * @description 是否 Array
 */
export function isArray(value: any): value is Array<any> {
  return value && Array.isArray(value)
}

/**
 * @description 是否类数组结构
 * @demo isArrayLike([1, 2, 3]) => true
 * @demo isArrayLike(document.body.children) => true
 * @demo isArrayLike('abc') => true
 * @demo isArrayLike(Function) => false
 */
export function isArrayLike(value: any): boolean {
  return value !== null && typeof value !== 'function' && isFinite(value.length)
}
