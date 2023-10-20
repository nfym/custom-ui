<!--
 * @Description: 页面主体容器
 * @Date: 2023-09-08 17:54:06
 * @LastEditTime: 2023-09-11 11:01:56
-->
<template>
  <main
    :class="[
      `${prefixCls}__container`,
      isFullContainer && `${prefixCls}__container-full`
    ]"
  >
    <div
      :class="[
        `${prefixCls}__content`,
        isFullContent && `${prefixCls}__content-full`
      ]"
    >
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </main>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'CompContent',
  setup() {
    const prefixCls = ref('basic-layout')
    const route = useRoute()

    // full 内容，无padding
    const isFullContainer = computed(() => route.meta?.isFullContainer)
    const isFullContent = computed(() => route.meta?.isFullContent)

    return { prefixCls, isFullContainer, isFullContent }
  }
})
</script>
<style scoped lang="less">
@prefix-cls: ~'basic-layout';
@containerPadding: 2rem;
@contentPadding: 1.5rem;

.@{prefix-cls}__container {
  display: flex;
  min-width: 80rem;
  height: calc(100vh - 4rem);
  min-height: 37.5rem;
  padding: @containerPadding;
  background-color: @container-background;
}

.@{prefix-cls}__container-full {
  padding: 0;
}

.@{prefix-cls}__content {
  position: relative;
  width: 100%;
  min-width: 77rem;
  padding: @contentPadding;
  background-color: @gray-1;
  border-radius: @contentPadding;
}

.@{prefix-cls}__content-full {
  padding: 0;
}
</style>
