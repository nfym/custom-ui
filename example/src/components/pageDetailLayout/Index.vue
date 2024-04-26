<!--
 * @Description: 详情页面布局
 * @Date: 2024-04-25 18:09:26
-->
<template>
  <header :class="`${prefixCls}__head`">
    <section :class="`${prefixCls}__head-left`">
      <ArrowLeftOutlined
        v-if="goto && allowBackPage"
        :class="`${prefixCls}__arrow-left`"
        @click="switchPage(goto)"
      />
      <span :class="`${prefixCls}__title`">{{ title }}</span>

      <a-breadcrumb>
        <a-breadcrumb-item v-for="item in breadcrumb" :key="item.label">
          <template v-if="item.goto">
            <a @click="switchPage(item.goto)">{{ item.label }}</a>
          </template>
          <template v-else>
            <span>
              {{ item.label }}
            </span>
          </template>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </section>
    <section class="global-flex-center">
      <slot name="layoutRight"></slot>
    </section>
  </header>

  <section
    :class="[
      `${prefixCls}__content`,
      { [`${prefixCls}__content-default`]: !customPadding }
    ]"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { RouteLocationNamedRaw } from 'vue-router'
import { useSwitchPage } from '@custom-ui/hooks'
import { SwitchPage } from '@custom-ui/constants'

export interface ContentLayoutProps {
  title: string
  breadcrumb: { label: string; goto?: RouteLocationNamedRaw | SwitchPage }[]
  allowBackPage?: boolean
  customPadding?: boolean
}

const prefixCls = ref('content-layout')
const switchPage = useSwitchPage()

const props = withDefaults(defineProps<ContentLayoutProps>(), {
  allowBackPage: true
})

const goto = computed(() => {
  const prePage = props.breadcrumb[props.breadcrumb.length - 2]
  return prePage?.goto
})
</script>

<style scoped lang="less">
@prefix-cls: ~'content-layout';

.@{prefix-cls} {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    padding: 0 2rem;
    font-weight: 600;
    background-color: @gray-1;
  }

  &__head-left {
    display: flex;
  }

  &__arrow-left {
    margin-right: 0.75rem;
    color: #1f1f1f;
    font-weight: 600;
    font-size: 1.25rem;
  }

  &__title {
    margin-right: 1rem;
    color: #1f1f1f;
    font-size: 1.25rem;
    line-height: 1;
  }

  &__content {
    box-sizing: border-box;
    height: calc(100vh - 4rem - 3.5rem);
    min-height: 37.5rem;
    background-color: @container-background;
  }

  &__content-default {
    padding: 1rem 2rem 2rem;
  }
}
</style>
