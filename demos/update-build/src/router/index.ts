import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const basicRouters: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Index.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('@/views/other/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: basicRouters
})

router.beforeEach((to, from, next) => {
  window.pluginWebUpdateNotice_.checkUpdate()
  next()
})

export default router
