/**
 *
 * @param fn
 * @param wait
 * @returns
 */
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-types
function debounce(fn: Function, wait: number) {
  /**
   function sayLove(name) {
    return name;
  }
  debounce(sayLove, 200)('xuxiaoxi');
   */

  let timer: any = null
  return function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

export default debounce
