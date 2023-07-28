import isType from './isType'

/**
 * 是否 number 类型
 */
export function isNumber(value: unknown): value is number {
  return isType(value, 'Number')
}

/**
 * 是否数值，包括数字类型和数值字符串
 */
export const isNumeric = (value: any) =>
  !Array.isArray(value) && value - parseFloat(value) + 1 >= 0

/**
 * 是否整数
 */
export const isInteger = Number.isInteger
  ? Number.isInteger
  : function (num: unknown): boolean {
      return isNumber(num) && num % 1 === 0
    }

/**
 * 是否小数
 */
export function isDecimal(num: unknown): boolean {
  return isNumber(num) && num % 1 !== 0
}

/**
 * 是否正数
 */
export function isPositive(num: unknown): boolean {
  return isNumber(num) && num > 0
}

/**
 * 是否负数
 */
export function isNegative(num: unknown): boolean {
  return isNumber(num) && num < 0
}

/**
 * 是否偶数
 */
export function isEven(num: unknown): boolean {
  return isNumber(num) && num % 2 === 0
}

/**
 * 是否奇数
 */
export function isOdd(num: unknown): boolean {
  return isNumber(num) && num % 2 !== 0
}
