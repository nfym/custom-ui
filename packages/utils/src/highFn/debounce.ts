/**
 *
 * @param fn
 * @param wait
 * @returns
 */
// @ts-nocheck
function debounce(fn: Function, wait: number) {
  /**
   function sayLove(name) {
    return name;
  }
  debounce(sayLove, 200)('xuxiaoxi');
   */

  let timer: any = null;
  return function () {
    let context = this;
    let args = arguments;
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

export default debounce;
