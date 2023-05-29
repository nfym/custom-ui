// 异步版本
/**
 * @description 让 async 内部程序等待一定时间后再执行
 * @param milliseconds
 * @returns
 */
const sleep = async (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

// const asyncPrintNums = async () => {
//   console.log(1);
//   await sleep(500);
//   console.log(2);
//   console.log(3);
// };

// 同步版本
export const sleepSync = (ms: number) => {
  const end = new Date().getTime() + ms
  while (new Date().getTime() < end) {
    /* do nothing */
  }
}

// const printNums = () => {
//   console.log(1);
//   sleepSync(500);
//   console.log(2);
//   console.log(3);
// };

export default sleep
