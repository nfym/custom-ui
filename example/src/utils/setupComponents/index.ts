/*
 * @Description: 导出全局组件
 * @Date: 2023-09-07 17:36:41
 * @LastEditTime: 2024-04-25 18:13:14
 */
import type { App } from 'vue'
import setupAntComponent from './antComponent'
import setupCustomComponent from './customComponent'
import setupAntIcon from './antIcon'
export default function setupComponents(app: App) {
  // 全局注册自定义组件
  setupCustomComponent(app)

  // 全局注册 antd 组件库组件
  setupAntComponent(app)

  setupAntIcon(app)
}
