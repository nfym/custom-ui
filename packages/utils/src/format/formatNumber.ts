/** 
 * @Description: 数据展示处理
 */

type Data = number | string | null;

/**
 * @description: 数据展示处理, 保留小数位
 * @param data
 * @param num 指定保留几位小数
 */
export const setFloat = (data: Data, num = 4) => {
  return data || data === 0
    ? +(Math.round(+data * Math.pow(10, num)) / Math.pow(10, num)).toFixed(num)
    : data;
};

/**
 * @description: 数据展示处理, 格式化为百分比
 * @param data
 * @param num 指定保留几位小数
 * @param mini 为 true 时处理小数据显示成 <0.01%
 */
export const setPercentage = (data: Data, num = 2, mini = false) => {
  if (!data) return "";
  if (+(data || 0) === 0) return "0%";
  if (+(data || 0) < 0.0001 && mini) return "<0.01%";
  
  return Math.round(+data * Math.pow(10, num + 2)) / Math.pow(10, num) + "%";
};
