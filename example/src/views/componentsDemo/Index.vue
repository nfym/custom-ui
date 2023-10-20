<template>
  <main :class="prefix.b()">
    <header :class="prefix.be('title')">组件库</header>
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
  &__title {
    color: @text-title;
    font-weight: 600;
    font-size: 1rem;
  }
}
</style>
