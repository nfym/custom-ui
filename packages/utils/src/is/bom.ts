export function isFormData(val: unknown) {
  return typeof FormData !== 'undefined' && val instanceof FormData
}
