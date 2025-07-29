/**
 * @Description: 删除对象属性
 */
export function omit(
  obj: Record<string, string>,
  keys: string[]
): Record<string, string> {
  return Object.keys(obj)
    .filter((k) => !keys.includes(k))
    .map((k) => ({ [k]: obj[k] }))
    .reduce((res, o) => Object.assign(res, o), {})
}
