/**
 * 节流
 * @param fn
 * @param delay
 */
export function throttle<T extends []>(
  fn: (...args: T) => void,
  delay = 60
): (...args: T) => void {
  let flag = true

  return (...args: any) => {
    if (flag) {
      flag = false
      fn(...args)

      setTimeout(() => {
        flag = true
      }, delay)
    }
  }
}
