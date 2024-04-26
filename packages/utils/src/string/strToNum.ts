export function strToNum(str: string): number | null {
  const ret = parseFloat(str)
  return Number.isNaN(ret) ? null : ret
}
