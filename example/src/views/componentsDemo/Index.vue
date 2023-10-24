<template>
  <main :class="prefix.b()">
    <header :class="prefix.be('page-title')">组件库</header>

    <div :class="prefix.be('page-desc')">常用组件整理</div>
  </main>
</template>

<script setup lang="ts">
defineOptions({ name: 'ComponentsDemo' })

import { usePrefix } from '@custom-ui/hooks'
const prefix = usePrefix('components-demo')
</script>

<style scoped lang="less">
@prefix-cls: ~'components-demo';

.@{prefix-cls} {
  &__page-title {
    margin-bottom: 1.5rem;
    color: #142140;
    font-weight: 600;
    font-size: 1.875rem;
    letter-spacing: 0.05rem;
  }

  &__page-desc {
    margin-bottom: 1.5rem;
  }
}
</style>
