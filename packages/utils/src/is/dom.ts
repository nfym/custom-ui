import isType from './isType'
import { getTagName } from '../dom/element'

export function isWindow(value: any): value is Window {
  return typeof window !== 'undefined' && isType(value, 'Window')
}

/**
 * 判断是否 DOM 元素
 */
export function isElement(elem: any): boolean {
  return elem instanceof Element || elem instanceof HTMLDocument
}

// Determines whether a node is an HTML node
export function isHTMLElement(elem: any): elem is HTMLElement {
  try {
    // Using W3 DOM2 (works for FF, Opera and Chrome)
    return elem instanceof HTMLElement
  } catch (e) {
    // Browsers not supporting W3 DOM2 don't have HTMLElement and
    // an exception is thrown and we end up here. Testing some
    // properties that all elements have (works on IE7)
    return (
      typeof elem === 'object' &&
      elem.nodeType === 1 &&
      typeof elem.style === 'object' &&
      typeof elem.ownerDocument === 'object'
    )
  }
}

export function isInputElement(elem: any): boolean {
  const elemTagName = getTagName(elem)
  if (elemTagName === 'input') {
    const type = elem.getAttribute('type')
    if (
      type == null ||
      ['text', 'password', 'number', 'email', 'search', 'tel', 'url'].includes(
        type
      )
    ) {
      return true
    }
  }
  return false
}

export const isServer = typeof window === 'undefined'

export const isClient = !isServer
