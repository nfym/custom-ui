<template>
  <main :class="prefix.b()">
    <header :class="prefix.be('title')">工具方法</header>
  </main>
</template>

<script setup lang="ts">
defineOptions({ name: 'UtilsDemo' })

import { usePrefix } from '@custom-ui/hooks'
const prefix = usePrefix('utils-bom')
</script>

<style scoped lang="less">
@prefix-cls: ~'utils-bom';

.@{prefix-cls} {
  &__title {
    color: @text-title;
    font-weight: 600;
    font-size: 1rem;
  }
}
</style>
