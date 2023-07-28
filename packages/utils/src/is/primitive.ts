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
 *  @description 检查 value 是否是 null 或者 undefined
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
export function isDefAndUnNull(val: unknown): val is null | undefined {
  return isDef(val) && isUnNull(val)
}

export function isBoolean(value: unknown): value is boolean {
  return isType(value, 'Boolean')
}

/**
 * 是否为 Number、String、symbol、boolean、null、undefined 等原始数据类型
 * @param value unknown
 * @return boolean
 */
export function isPrimitive(value: unknown) {
  return (
    value === null ||
    value === undefined ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' || // ES6 symbol
    typeof value === 'boolean'
  )
}

// TODO isSymbol isSymbol(Symbol.iterator) => true;
