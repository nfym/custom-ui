import type { AppRouteRecordRaw } from '@/router/type'
const uiDemo: AppRouteRecordRaw = {
  path: '/uiDemo',
  name: 'UiDemo',
  component: () => import('@/components/basicLayout/Index.vue'),
  redirect: '/uiDemo/index',
  meta: {
    isMenu: true,
    hideChildrenInMenu: false,
    icon: 'iconname',
    title: '样式效果',
    menuOrderNo: 1
  },
  children: [
    {
      path: 'index',
      name: 'UiDemoIndex',
      component: () => import('@/views/uiDemo/Index.vue'),
      meta: {
        isMenu: true,
        title: '样式效果'
      }
    },
    {
      path: 'vue',
      name: 'UiDemoVueComponents',
      component: () => import('@/views/uiDemo/vueComp/Index.vue'),
      meta: {
        isMenu: false,
        isFullContainer: true
      }
    }
  ]
}

export default uiDemo
