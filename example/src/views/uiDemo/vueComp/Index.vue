<!--
 * @Description: vue 组件 demo
 * @Date: 2024-12-06 10:05:28
-->
<template>
  <comp-content-layout title="datauri 相关方法" :breadcrumb="breadcrumb">
    <div :class="`${prefix.b()}`">
      <UIRing :segments="segments"></UIRing>
      <UIRing :size="100" :stroke-width="20" :segments="segments"></UIRing>

      <UILighCard></UILighCard>
    </div>
  </comp-content-layout>
</template>

<script setup lang="ts">
defineOptions({ name: 'VueComponentsSDemo' })
import { ref } from 'vue'
import { usePrefix } from '@custom-ui/hooks'
import { UIRing, UILighCard } from '@custom-ui/components'

const prefix = usePrefix('uiDemo-vue-demo')
const breadcrumb = [
  {
    goto: { name: 'UiDemo' },
    label: '样式效果'
  },
  {
    label: 'vue组件'
  }
]

const segments = ref([
  {
    color: '#335cff',
    percentage: 10
  },
  {
    color: '#7d32e5',
    percentage: 30
  },
  {
    color: 'orange',
    percentage: 60
  }
])
</script>

<style scoped lang="less">
@prefix-cls: ~'uiDemo-vue-demo';

.@{prefix-cls} {
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: @gray-1;
  border-radius: 0.5rem;
}
</style>
