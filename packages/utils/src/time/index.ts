/**
 *
 * @desc 是否为闰年
 */

export function isLeapYear(year: number) {
  if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
    return true
  }
  return false
}

/**
 * @desc 获取指定日期月份的总天数
 */
export function monthDays(time: Date) {
  time = new Date(time)
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  return new Date(year, month, 0).getDate()
}
