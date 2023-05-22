/**
 * @Description: 返回限制在 lower 和 upper 之间的值
 * @param {*} value
 * @param {*} min
 * @param {*} max
 */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  }
  return value;
}
