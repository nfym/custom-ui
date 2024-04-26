/*
 * @Description: 全局注册自定义组件
 * @Date: 2024-04-25 18:11:30
 */
import type { App } from 'vue'

import CompContentLayout from 'components/pageDetailLayout/Index.vue'

export default function setupCustomComponent(app: App) {
  app.component('CompContentLayout', CompContentLayout)
}
