import type { RouteRecordRaw } from 'vue-router'
// 根路由
const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/home'
}

const HomeRoute: RouteRecordRaw = {
  path: '/home',
  name: 'Home',
  redirect: '/utilsDemo/index'
}

// 404
const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'ErrorPage',
  component: () => import('@/components/basicLayout/Index.vue'),
  children: [
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('@/views/system/exception/Error.vue')
    }
  ]
}

// 不要任何权限的基本路由
export const basicRoutes: RouteRecordRaw[] = [
  RootRoute,
  HomeRoute,
  PAGE_NOT_FOUND_ROUTE
]
