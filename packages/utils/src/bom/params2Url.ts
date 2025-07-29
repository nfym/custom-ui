/**
 * @Description: 参数拼接url
 */
export function params2Url(uri: string, params: any) {
  const paramsArray: any[] = []
  Object.keys(params).forEach(
    (key) => params[key] && paramsArray.push(`${key}=${params[key]}`)
  )
  if (uri.search(/\?/) === -1) {
    uri += `?${paramsArray.join('&')}`
  } else {
    uri += `&${paramsArray.join('&')}`
  }
  return uri
}
