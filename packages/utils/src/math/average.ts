/**
 *  计算数组平均值
 */
export function average(arr: number[]): number {
  return arr.reduce((a, b) => a + b) / arr.length
}
