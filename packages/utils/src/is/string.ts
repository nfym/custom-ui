import { isType } from './isType'
/**
 *  判断是不是 String
 */
export function isString(value: unknown): value is string {
  return isType(value, 'String')
}

/**
 *  判断是不是数字型的字符串
 * @demo isIntegerKey('a'); // false
 * @demo isIntegerKey('0'); // true
 * @demo isIntegerKey('011'); // false
 * @demo isIntegerKey('11'); // true
 * @demo isIntegerKey('-11'); // false
 * @demo isIntegerKey(11); // false
 * @demo isIntegerKey('NaN'); // false
 */
export const isIntegerKey = (key: string): boolean =>
  isString(key) &&
  key !== 'NaN' &&
  key[0] !== '-' &&
  '' + parseInt(key, 10) === key

/**
 *  判断是不是数字型的字符串
 * @ 例子
 */
export function isPercentage(val: any): val is string {
  return typeof val === 'string' && val.slice(-1) === '%'
}
