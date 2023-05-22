/**
 * 对象转url参数
 * @param {*} data
 * @param {*} isPrefix
 */

// export const obj2url = (data: any, isPrefix?: boolean) => {
//   let prefix = isPrefix ? "?" : "";

//   let _result = [];
//   for (let key in data) {
//     let value = data[key];
//     // 去掉为空的参数
//     if (["", undefined, null].includes(value)) {
//       continue;
//     }
//     if (value.constructor === Array) {
//       value.forEach((_value) => {
//         _result.push(
//           encodeURIComponent(key) + "[]=" + encodeURIComponent(_value)
//         );
//       });
//     } else {
//       _result.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
//     }
//   }

//   return _result.length ? prefix + _result.join("&") : "";
// };

// export default obj2url;

// export function params2Url(uri: string, params: any) {
//   const paramsArray: any[] = []
//   Object.keys(params).forEach(
//     (key) => params[key] && paramsArray.push(`${key}=${params[key]}`)
//   )
//   if (uri.search(/\?/) === -1) {
//     uri += `?${paramsArray.join('&')}`
//   } else {
//     uri += `&${paramsArray.join('&')}`
//   }
//   return uri
// }
