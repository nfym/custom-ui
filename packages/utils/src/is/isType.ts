export default function isType(value: unknown, type: string) {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}
