/*
 * @Description: 点击导航刷新当前页面
 * @Date: 2023-09-18 14:17:00
 * @LastEditTime: 2023-09-18 14:27:29
 */
import { nextTick, ref } from 'vue'

const isRouterAlive = ref(true)
export default function useReload() {
  async function reload() {
    isRouterAlive.value = false
    await nextTick()
    isRouterAlive.value = true
  }

  return { isRouterAlive, reload }
}
