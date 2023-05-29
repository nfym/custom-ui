/**
 *
 * @param fn
 * @param delay
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function throttle(fn: Function, delay: number) {
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

export default throttle
