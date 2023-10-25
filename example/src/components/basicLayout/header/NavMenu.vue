<!--
 * @Description: 顶部导航
 * @Date: 2023-09-18 09:44:44
 * @LastEditTime: 2023-09-18 14:58:29
-->
<template>
  <section :class="prefixCls">
    <a-menu
      v-model:selectedKeys="current"
      mode="horizontal"
      @click="handleMenuClick"
    >
      <template v-for="item in menus">
        <a-menu-item v-if="item.meta.hideChildrenInMenu" :key="item.name">
          <ItemContent :item="item.meta" />
        </a-menu-item>

        <a-sub-menu v-else :key="item.name">
          <template #title>
            <ItemContent :item="item.meta" />
          </template>

          <template v-for="subItem in item.children">
            <a-menu-item v-if="subItem.meta?.isMenu" :key="subItem.name">
              <ItemContent :item="subItem.meta" />
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSwitchPage, useReload } from '@custom-ui/hooks'
import { router } from '@/router'
import { useRoute } from 'vue-router'
import ItemContent from './MenuItem.vue'

interface MenuClickOption {
  key: string
}

const prefixCls = ref('menu')
const switchPage = useSwitchPage()
const { reload } = useReload()
const route = useRoute()

const routes = router.getRoutes()
const regExpPath = /^\/\w+(?=\/)/
// 过滤掉子路由，得到一级路由
const menus = routes.filter(
  (routeItem) => !regExpPath.test(routeItem.path) && routeItem.meta.isMenu
)

// 计算当前导航项
const current = computed({
  get: () => {
    // 系统异常页面
    if (router.currentRoute.value.name === 'Error') {
      return []
    }

    // 获取路由一级路径
    const path = regExpPath.exec(router.currentRoute.value.path)
    if (!path) return []

    const currentMenu = menus.find((item) => item.path === path[0])
    if (!currentMenu) {
      return [router.currentRoute.value.name]
    }

    // 路由模块下的所有子路由都不添加为子菜单,直接返回父路由菜单name
    if (currentMenu.meta.hideChildrenInMenu) {
      return [currentMenu.name]
    }

    // 模块下的子菜单页面
    if (router.currentRoute.value.meta.isMenu) {
      return [router.currentRoute.value.name]
    }

    // 模块下的的其他非子菜单页面, 返回父路由菜单name
    return [router.currentRoute.value.matched[0].name]
  },
  set: () => {
    //
  }
})

// 点击目录操作
async function handleMenuClick(option: MenuClickOption) {
  const rootRoute = route.matched.find((item) => item.name === option.key)
  if (rootRoute && [rootRoute.redirect, rootRoute.path].includes(route.path)) {
    // 刷新当前目录
    reload()
  }

  switchPage({ name: option.key })
}
</script>

<style scoped lang="less">
@prefix-cls: ~'menu';

.@{prefix-cls} {
  width: calc(100vw - 23.5rem);
}

:deep(.ant-menu) {
  height: 4rem;
  color: @text-color-secondary;
  font-size: 1rem;
  line-height: 4rem;
  background: @gray-1; // clear gray-3
  border-bottom: 1px solid @gray-1; // clear f0f0f0

  // 菜单项的高亮下划线
  .ant-menu-item::after,
  .ant-menu-submenu::after {
    border-bottom: none;
  }
}

:deep(.ant-menu .ant-menu-item-selected) {
  font-weight: bold;
  border-bottom: none;
}

:deep(.ant-menu .ant-menu-item-active) {
  background-color: transparent;
}

:deep(.ant-menu .ant-menu-submenu-selected) {
  background-color: transparent;
}
</style>
