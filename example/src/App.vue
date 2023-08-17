<template>
  <h1>随便看看</h1>
  <UiButton>btn</UiButton>
  <TestComp></TestComp>
</template>

<script setup lang="ts">
import { test } from '@custom-ui/utils'
import { UiButton } from '@custom-ui/components'
import TestComp from './components/TestComp.vue'
// import TestComp from '@/components/TestComp.vue'

test()
</script>
