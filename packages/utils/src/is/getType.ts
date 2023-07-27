/**
 * 获取数据原始类型
 * @param value
 * @returns
 */
function getRawType(value: unknown) {
  return Object.prototype.toString.call(value).slice(8, -1)
}

export default getRawType
