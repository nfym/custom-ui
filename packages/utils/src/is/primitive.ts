import isType from './isType'

export function isNull(value: unknown): value is null {
  return value === null
}

export function isUnNull(val: unknown): val is null {
  return !isNull(val)
}

export function isDef<T = unknown>(value?: T): value is T {
  return typeof value !== 'undefined'
}

export function isUnDef<T = unknown>(value?: T): value is T {
  return value === undefined
}
/**
 *  null 或者 undefined
 */
export function isNil(value: any): value is null | undefined {
  /**
   * isNil(null) => true
   * isNil() => true
   */
  return value === null || value === undefined
}

/**
 * 已经定义（非 undefined ），且非 null
 */
export function isUnNullAndisDef(val: unknown): val is null | undefined {
  return isDef(val) && isUnNull(val)
}

export function isBoolean(value: unknown): value is boolean {
  return isType(value, 'Boolean')
}

/**
 * 是否为 Number、String、symbol、boolean 等数据类型
 * @param value unknown
 * @return boolean
 */
export function isPrimitive(value: unknown) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

export function isRegExp(value: unknown): value is RegExp {
  return isType(value, 'RegExp')
}

export function isDate(value: unknown): value is Date {
  return isType(value, 'Date')
}
