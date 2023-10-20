import type { AppRouteRecordRaw } from '@/router/type'
const componentsDemo: AppRouteRecordRaw = {
  path: '/componentsDemo',
  name: 'ComponentsDemo',
  component: () => import('@/components/basicLayout/Index.vue'),
  redirect: '/componentsDemo/index',
  meta: {
    isMenu: true,
    hideChildrenInMenu: false,
    icon: 'iconname',
    title: '组件',
    menuOrderNo: 1
  },
  children: [
    {
      path: 'index',
      name: 'ComponentsDemoIndex',
      component: () => import('@/views/componentsDemo/Index.vue'),
      meta: {
        isMenu: true,
        title: '样式块'
      }
    }
  ]
}

export default componentsDemo
