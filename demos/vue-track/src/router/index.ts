import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const basicRouters: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/TestDirectives.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: basicRouters
})

export default router
