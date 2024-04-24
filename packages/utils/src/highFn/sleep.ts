/**
 *  异步版本 让 async 内部程序等待一定时间后再执行
 * @param milliseconds
 * ```ts
 * const demo = async () => {
 *  console.log(1);
 *  await sleep(500);
 *  console.log(2);
 *  console.log(3);
 * }
 * ```
 */
export async function sleep(milliseconds: number): Promise<unknown> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

/**
 *  同步版本 让内部程序等待一定时间后再执行
 * @param milliseconds
 * ```ts
 * const printNums = () => {
 *   console.log(1);
 *   sleepSync(500);
 *   console.log(2);
 *   console.log(3);
 * };
 * ```
 */
export function sleepSync(ms: number): void {
  const end = new Date().getTime() + ms
  while (new Date().getTime() < end) {
    /* do nothing */
  }
}
