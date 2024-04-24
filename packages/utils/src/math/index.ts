export { average } from './average'
export { clamp } from './clamp'

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m
}

export function random(lower: number, upper: number): number {
  if (upper == null) {
    upper = lower == null ? 1 : lower
    lower = 0
  } else if (upper < lower) {
    const tmp = lower
    lower = upper
    upper = tmp
  }
  return Math.floor(Math.random() * (upper - lower + 1) + lower)
}

// TODO inRange(number, [start=0], end) 检查 n 是否在 start 与 end 之间
