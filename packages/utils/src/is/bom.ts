export function isFormData(val: unknown) {
  return typeof FormData !== 'undefined' && val instanceof FormData
}

export function isDataUrl(url: string) {
  const prefix = 'data:'
  return url.substr(0, prefix.length) === prefix
}

// TODO isTypedArray
