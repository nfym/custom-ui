export function isFormData(val: unknown): boolean {
  return typeof FormData !== 'undefined' && val instanceof FormData
}

export function isDataUrl(url: string): boolean {
  const prefix = 'data:'
  return url.substr(0, prefix.length) === prefix
}

/*
 * Determine if an object is a Buffer
 */
export function isBuffer(val: any): boolean {
  return (
    val != null &&
    val.constructor != null &&
    typeof val.constructor.isBuffer === 'function' &&
    val.constructor.isBuffer(val)
  )
}
