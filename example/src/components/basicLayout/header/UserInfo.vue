<template>
  <div :class="`${prefixCls}`">
    <a-dropdown
      v-if="userInfo.username"
      placement="bottomRight"
      :overlay-class-name="`${prefixCls}__dropdown`"
    >
      <div :class="`${prefixCls}__click-area`">
        <img :src="getImageUrl('avatar.svg')" alt="" />
        <span :title="userInfo.username" :class="[`${prefixCls}__username`]">
          {{ userInfo.username }}
        </span>
      </div>

      <template #overlay>
        <a-menu @click="handleClickMenu">
          <a-menu-item
            v-for="(menu, index) in menus"
            :key="index"
            :class="`${prefixCls}__li`"
          >
            {{ menu.title }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSwitchPage } from '@custom-ui/hooks'
import { getImageUrl } from 'utils/util'

interface UserInfo {
  username: string
}

const prefixCls = ref('header-user-info')
const switchPage = useSwitchPage()

const userInfo = ref<UserInfo>({
  username: 'admin'
})

// 点击个人中心
const handleClickPersonalCenter = () => {
  switchPage({ name: 'PersonalCenter' })
}

// 登出
async function logout() {
  // window.localStorage.clear()
  switchPage({ name: 'Login' })
}

const menus = [
  { action: () => handleClickPersonalCenter(), title: '个人中心', icon: '' },
  { action: () => logout(), title: '退出登录', icon: '' }
]

function handleClickMenu({ key }: { key: number }) {
  menus[key].action()
}
</script>
<style lang="less" scoped>
@prefix-cls: ~'header-user-info';

.@{prefix-cls} {
  display: inline-flex;
  align-items: center;

  &__click-area {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    cursor: pointer;
  }

  &__click-area:hover {
    background-color: @gray-4;
  }

  & > img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  &__username {
    display: inline-block;
    max-width: 6rem;
    margin-left: 0.5rem;
    color: @gray-8;
  }
}
</style>
