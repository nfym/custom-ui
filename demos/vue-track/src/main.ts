import { createApp } from 'vue'
import App from './App.vue'
import setupGlobDirectives from '@/directives'

async function bootstrap() {
  const app = createApp(App)
  setupGlobDirectives(app)
  app.mount('#app')
}

bootstrap()
