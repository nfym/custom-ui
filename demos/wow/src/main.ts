import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'
import 'wow.js/css/libs/animate.css'
import '@/styles/global.css'

async function bootstrap() {
  const app = createApp(App)
  app.mount('#app')
}

bootstrap()
