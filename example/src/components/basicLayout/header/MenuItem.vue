<template>
  <span :class="`${prefixCls}`">{{ title }}</span>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'ItemContent',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  setup(props) {
    const prefixCls = ref('menu-item-content')
    const icon = computed(() => props.item?.icon)
    const title = computed(() => props.item?.title)

    return { prefixCls, icon, title }
  }
})
</script>

<style lang="less" scoped>
@prefix-cls: ~'menu-item-content';

.@{prefix-cls} {
  display: flex;
  align-items: center;

  &__icon {
    margin-right: 8px;
    font-size: 1.5rem;
  }
}
</style>
