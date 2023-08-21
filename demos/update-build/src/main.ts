import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

async function bootstrap() {
  const app = createApp(App)
  app.use(router)

  window.addEventListener(
    'error',
    (event: ErrorEvent) => {
      // 过滤js error
      const target = event.target || event.srcElement
      const isElementTarget =
        target instanceof HTMLScriptElement ||
        target instanceof HTMLLinkElement ||
        target instanceof HTMLImageElement
      if (!isElementTarget) return false

      window.alert('项目更新了，引入原来资源错误')
    },
    true
  )

  app.mount('#app')
}

bootstrap()
