import ResizeObserver from 'resize-observer-polyfill'

// 自定义HTML元素
type CustomizedHTMLElement<T> = HTMLElement & T

export type ResizableElement = CustomizedHTMLElement<{
  __resizeListeners__: Array<(...args: unknown[]) => unknown>
  __ro__: ResizeObserver
}>

const isServer = typeof window === 'undefined'

const resizeHandler = function (entries: ResizeObserverEntry[]) {
  for (const entry of entries) {
    const listeners =
      (entry.target as ResizableElement).__resizeListeners__ || []
    if (listeners.length) {
      listeners.forEach((fn) => {
        fn()
      })
    }
  }
}

export const addResizeListener = function (
  element: ResizableElement,
  fn: (...args: unknown[]) => unknown
): void {
  // 如果不是页面应用就返回
  if (isServer) return
  if (!element) return
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = []
    element.__ro__ = new ResizeObserver(resizeHandler)
    element.__ro__.observe(element)
  }
  element.__resizeListeners__.push(fn)
}

export const removeResizeListener = function (
  element: ResizableElement,
  fn: (...args: unknown[]) => unknown
): void {
  if (!element || !element.__resizeListeners__) return
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1)
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect()
  }
}
