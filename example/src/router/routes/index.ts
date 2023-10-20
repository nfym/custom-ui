/*
 * @Description:
 * @Date: 2023-09-07 10:07:42
 * @LastEditTime: 2023-09-18 11:19:56
 */
import type { RouteRecordRaw } from 'vue-router'
export { basicRoutes } from './basic'

// import.meta.glob() 直接引入 modules 下所有的路由模块
const modules: Recordable<{ default: RouteRecordRaw }> = import.meta.glob(
  './modules/*.ts',
  {
    eager: true
  }
)
export const modulesRoutes: RouteRecordRaw[] = []

// 加入到路由集合中
for (const key in modules) {
  const module = modules[key].default
  const index: number = module?.meta?.menuOrderNo as number
  modulesRoutes[index] = module
}
