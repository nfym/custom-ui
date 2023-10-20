/*
 * @Description: 随便加个模块验证 import.meta.glob() 自动导入模块路由配置
 * @Date: 2023-09-07 15:20:42
 * @LastEditTime: 2023-09-18 11:35:57
 */
import type { AppRouteRecordRaw } from '@/router/type'
const utilsDemo: AppRouteRecordRaw = {
  path: '/utilsDemo',
  name: 'UtilsDemo',
  component: () => import('@/components/basicLayout/Index.vue'),
  redirect: '/utilsDemo/index',
  meta: {
    isMenu: true,
    hideChildrenInMenu: true,
    icon: 'iconname',
    title: '工具方法',
    menuOrderNo: 0
  },
  children: [
    {
      path: 'index',
      name: 'UtilsDemoIndex',
      component: () => import('@/views/utilsDemo/Index.vue'),
      meta: {
        isMenu: false
      }
    },
    {
      path: 'log',
      name: 'Log',
      component: () => import('@/views/utilsDemo/bom/LogDemo.vue'),
      meta: {
        isMenu: false
      }
    }
  ]
}

export default utilsDemo
