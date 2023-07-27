import isType from './isType'

export function isString(value: unknown): value is string {
  return isType(value, 'String')
}

// isIntegerKey 判断是不是数字型的字符串
export const isIntegerKey = (key: string) =>
  isString(key) &&
  key !== 'NaN' &&
  key[0] !== '-' &&
  '' + parseInt(key, 10) === key
// 例子:
// isIntegerKey('a'); // false
// isIntegerKey('0'); // true
// isIntegerKey('011'); // false
// isIntegerKey('11'); // true
// isIntegerKey('-11'); // false
// isIntegerKey(11); // false
// isIntegerKey('NaN'); // false
