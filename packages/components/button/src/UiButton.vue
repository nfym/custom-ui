<template>
  <button :class="prefixCls" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { test } from '@custom-ui/utils'

const prefixCls = ref('ui-button')

function clickHandler() {
  test()
}
</script>

<style scoped>
.ui-button {
  line-height: 1.4;
  background-color: transparent;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  box-shadow: 0 2px #00000004;
  transform: scale(1);
  cursor: pointer;
  transition: 0.3s;
}
</style>
