/*
 * @Description: vue 路由相关的类型声明
 * @Date: 2023-09-18 11:31:57
 * @LastEditTime: 2023-09-18 14:48:42
 */
import type { RouteRecordRaw, RouteMeta } from 'vue-router'

export interface AppRouteRecordRaw
  extends Omit<RouteRecordRaw, 'meta' | 'children'> {
  meta: RouteMeta // meta 改为必需属性
  children?: AppRouteRecordRaw[]
}
