<!--
 * @Description: 页面主体容器
 * @Date: 2023-09-08 17:54:06
 * @LastEditTime: 2024-04-26 10:03:29
-->
<template>
  <main
    :class="[
      `${prefixCls}__container`,
      isFullContainer && `${prefixCls}__container-full`
    ]"
  >
    <div :class="`${prefixCls}__content`">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const prefixCls = ref('basic-layout')
const route = useRoute()

// full 内容，无padding
const isFullContainer = computed(() => route.meta?.isFullContainer)
</script>
<style scoped lang="less">
@prefix-cls: ~'basic-layout';

.@{prefix-cls}__container {
  display: flex;
  min-width: 80rem;
  height: calc(100vh - 4rem);
  min-height: @layoutContainerMinHeight;
  padding: 1.5rem 2rem 2rem;
}

.@{prefix-cls}__content {
  position: relative;
  width: 100%;
  min-width: 77rem;
  background-color: @gray-1;
  border-radius: 1rem;
}

.@{prefix-cls}__container-full {
  padding: 0;

  .@{prefix-cls}__content {
    background-color: @container-background;
  }
}
</style>
