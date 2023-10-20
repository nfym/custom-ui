<!--
 * @Description: 系统 logo & 标题
 * @Date: 2023-09-08 11:21:45
 * @LastEditTime: 2023-09-15 14:24:22
-->
<script lang="ts" setup>
import { ref } from 'vue'
import { useSwitchPage } from '@custom-ui/hooks'

const prefixCls = ref('app-logo')
const switchPage = useSwitchPage()

function goHome(): void {
  switchPage({ name: 'UtilsDemo' })
}
</script>

<template>
  <section :class="prefixCls">
    <div :class="`${prefixCls}__click-area`" @click="goHome">
      <img :class="`${prefixCls}__logo`" src="/logo.svg" alt="system_logo" />
      <div :class="`${prefixCls}__title`">
        <span>Custom UI</span>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@prefix-cls: ~'app-logo';

.@{prefix-cls} {
  min-width: 16rem;

  &__click-area {
    display: inline-flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
  }

  &__logo {
    width: 2rem;
    height: 2rem;
  }

  &__title {
    margin-left: 0.5rem;
    color: @text-title;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
}
</style>
