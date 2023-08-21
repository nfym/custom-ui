<template>
  <div :class="prefixCls">
    test-comp
    <p>测试引入组件使用路径别名问题</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TestComp',
  setup() {
    const prefixCls = ref('test-comp')

    return { prefixCls }
  }
})
</script>

<style scoped>
.test-comp {
  color: red;
}
</style>
