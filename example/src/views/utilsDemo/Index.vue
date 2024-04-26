<template>
  <main :class="prefix.b()">
    <UiScrollbar view-style="padding:1rem">
      <header :class="prefix.be('page-header')">
        <div :class="prefix.be('page-title')">工具方法</div>
        <div :class="prefix.be('page-desc')">常用工具方法整理</div>
      </header>

      <section :class="prefix.be('page-body')">
        <a-row :gutter="[24, 24]">
          <a-col v-for="(item, index) in utilsDemo" :key="item.name" :span="8">
            <div :class="prefix.be('card')">
              <header
                :class="[
                  prefix.be('card-header'),
                  {
                    [prefix.bem('card-header', 'bg-light')]: index % 2 !== 0
                  }
                ]"
              >
                <div :class="prefix.be('card-header-title')">
                  {{ item.name }}
                </div>
                <img
                  :class="prefix.be('card-header-icon')"
                  :src="getImageUrl(item.icon)"
                />
              </header>

              <main :class="prefix.be('card-body')">
                <UiScrollbar wrap-style="padding: 1rem">
                  <a-row :gutter="[0, 8]">
                    <div
                      v-for="demo in item.list"
                      :key="demo.routeName"
                      :class="prefix.be('card-body-item')"
                      @click="toDetail(demo.routeName)"
                    >
                      {{ demo.name }}
                    </div>
                  </a-row>
                </UiScrollbar>
              </main>
            </div>
          </a-col>
        </a-row>
      </section>
    </UiScrollbar>
  </main>
</template>

<script setup lang="ts">
defineOptions({ name: 'UtilsDemo' })

import { ref } from 'vue'
import { usePrefix, useSwitchPage } from '@custom-ui/hooks'
import { getImageUrl } from '@/utils/util'
import { UiScrollbar } from '@custom-ui/components'

const prefix = usePrefix('utils-bom')
const switchPage = useSwitchPage()

const utilsDemo = ref([
  {
    name: 'Is',
    icon: 'icon/code.svg',
    list: [{ routeName: 'Log', name: 'log' }]
  },
  {
    name: 'Bom',
    icon: 'icon/book.svg',
    list: [{ routeName: 'Log', name: 'log' }]
  },
  {
    name: '开发',
    icon: 'icon/edit.svg',
    list: [{ routeName: 'Log', name: 'log' }]
  },
  {
    name: '开发',
    icon: 'icon/edit.svg',
    list: [{ routeName: 'Log', name: 'log' }]
  }
])

function toDetail(routeName) {
  switchPage(routeName)
}
</script>

<style scoped lang="less">
@prefix-cls: ~'utils-bom';

.@{prefix-cls} {
  height: calc(100vh - 4rem - 3.5rem);
  min-height: @pageContentMinHeight;

  &__page-header {
    .@{prefix-cls}__page-title {
      margin-bottom: 0.5rem;
      color: #142140;
      font-weight: 600;
      font-size: 1.25rem;
      letter-spacing: 0.05rem;
    }

    .@{prefix-cls}__page-desc {
      margin-bottom: 1rem;
    }
  }

  &__page-body {
    // padding: 1rem;
  }

  &__card {
    border-radius: 0.25rem;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 2px 17px 0 #f3f5fa;
  }

  &__card-header {
    position: relative;
    padding: 1.5rem;
    background: linear-gradient(314deg, #e8f0ff 0%, #cdddff 100%);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &__card-header--bg-light {
    background: linear-gradient(270deg, #fff, #e8f4ff 100%);
  }

  &__card-header-title {
    color: #142140;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: 0.025rem;
  }

  &__card-header-icon {
    position: absolute;
    right: 1.5rem;
    bottom: 0;
    width: 4.25rem;
    max-width: 100%;
    height: auto;
  }

  &__card-body {
    height: 12rem;
  }

  &__card-body-item {
    width: 100%;
    padding: 0.75rem;
    background: #fafafb;
    border-radius: 0.25rem;
  }

  // &__card-footer {
  //   height: 2rem;
  //   padding: 0 1rem;
  //   line-height: 2rem;
  //   background: linear-gradient(270deg, #fff, #e8f4ff 100%);
  //   border-radius: 0 0 4px 4px;
  // }
}
</style>
