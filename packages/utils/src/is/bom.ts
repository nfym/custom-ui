export function isFormData(val: unknown): boolean {
  return typeof FormData !== 'undefined' && val instanceof FormData
}

export function isDataUrl(url: string): boolean {
  const prefix = 'data:'
  return url.substr(0, prefix.length) === prefix
}
