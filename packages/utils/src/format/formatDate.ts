/**
 * @description 时间格式化
 * @param time
 * @param format
 * @demo
 * @returns
 */
function formatDate(time: number, format = 'YY-MM-DD hh:mm:ss') {
  /**
   * formatDate(new Date().getTime()); //2021-11-12 10:05:30
   * formatDate(new Date().getTime(), 'YY年MM月DD日'); //2021年11月12日
   * formatDate(new Date().getTime(), '今天是YY/MM/DD hh:mm:ss'); //今天是2021/11/12
   */

  const date = new Date(time)

  const year = date.getFullYear(),
    month = date.getMonth() + 1, //月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds()
  // eslint-disable-next-line prefer-spread
  const preArr = Array.apply(null, Array(10)).map(function (elem, index) {
    console.log('🚀 ~ file: formatDate.ts:25 ~ preArr ~ elem:', elem)
    return '0' + index
  })

  const newTime = format
    .replace(/YY/g, String(year))
    .replace(/MM/g, String(preArr[month] || month))
    .replace(/DD/g, String(preArr[day] || day))
    .replace(/hh/g, String(preArr[hour] || hour))
    .replace(/mm/g, String(preArr[min] || min))
    .replace(/ss/g, String(preArr[sec] || sec))

  return newTime
}

export default formatDate
