import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import globalTrack from './globalTrack'
import setupGlobDirectives from './directives'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)
  app.use(globalTrack)
  setupGlobDirectives(app)

  app.mount('#app')
}

bootstrap()
