export { default as getType } from './getType'
export { default as isType } from './isType'
export { default as isEmpty } from './isEmpty'
export { isEqual, equals } from './isEqual'

export {
  isNumber,
  isNumeric,
  isInteger,
  isDecimal,
  isPositive,
  isNegative,
  isEven,
  isOdd
} from './number'

export { isString, isIntegerKey, isPercentage } from './string'

export {
  isNull,
  isUnNull,
  isUnDef,
  isDef,
  isDefAndUnNull,
  isNil,
  isBoolean,
  isPrimitive
} from './primitive'

export { isArray, isArrayLike } from './array'

export {
  isObject,
  isObjectLike,
  isObjectOnly,
  isPrototype,
  isRegExp,
  isDate,
  isError,
  isPromise
} from './object'

export { isFunction, isArguments, isAsyncLike, isAsync } from './function'

export { isFormData, isDataUrl } from './bom'
export {
  isWindow,
  isElement,
  isHTMLElement,
  isInputElement,
  isServer,
  isClient
} from './dom'
