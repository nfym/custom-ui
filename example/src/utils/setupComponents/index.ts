/*
 * @Description: 导出全局组件
 * @Date: 2023-09-07 17:36:41
 * @LastEditTime: 2023-09-07 18:14:44
 */
import type { App } from 'vue'
import setupAntComponent from './antComponent'
// import setupGlobalComponent from './globalComponent'
export default function setupComponents(app: App) {
  // 全局注册自定义组件
  // setupGlobalComponent(app)

  // 全局注册 antd 组件库组件
  setupAntComponent(app)
}
