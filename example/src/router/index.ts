/*
 * @Description: 创建路由
 * @Date: 2023-09-06 16:21:03
 * @LastEditTime: 2023-09-18 10:08:04
 */
import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes, modulesRoutes } from './routes'
import { DEPLOY_BASE_URL } from '../../build/constant'
import type { App } from 'vue'

// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
  history:
    import.meta.env.MODE === 'development'
      ? createWebHistory()
      : createWebHistory(DEPLOY_BASE_URL),
  // 应该添加到路由器的初始路由列表。
  routes: [...basicRoutes, ...modulesRoutes]
  // 是否应该禁止尾部斜杠。默认 false
  // strict: true
})

// 配置路由器
export default function setupRouter(app: App<Element>) {
  app.use(router)
}
