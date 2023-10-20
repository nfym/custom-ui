import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import setupGlobDirectives from './directives'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)
  setupGlobDirectives(app)

  app.mount('#app')
}

bootstrap()
