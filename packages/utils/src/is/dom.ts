import isType from './isType'

export function isWindow(value: any): value is Window {
  return typeof window !== 'undefined' && isType(value, 'Window')
}

// export function isElement(value: unknown): value is Element {
//   return isObject(value) && !!value.tagName
// }
/**
 * 判断是否HTML元素
 * @return {Boolean} 是否HTML元素
 */
export function isElement(o: any): boolean {
  return o instanceof Element || o instanceof HTMLDocument
}

export const isServer = typeof window === 'undefined'

export const isClient = !isServer
