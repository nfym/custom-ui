/**
 * 获取数据类型，返回结果为 Number、String、Object、Array 等
 * @param value
 * @returns
 */
function getRawType(value: unknown) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

export default getRawType;
