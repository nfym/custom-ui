import { createApp } from 'vue'
import App from './App.vue'
import setupRoute from './router'
import setupComponent from './utils/setupComponents'

import '@/styles/index.less'

async function bootstrap() {
  const app = createApp(App)

  // 注册组件
  setupComponent(app)

  // 注册路由
  setupRoute(app)

  app.mount('#app')
}

bootstrap()
