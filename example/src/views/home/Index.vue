<template>
  <main>
    <h1>example home</h1>
    <UiButton>btn</UiButton>
    <TestComp></TestComp>
  </main>
</template>

<script setup lang="ts">
defineOptions({ name: 'ExampleHome' })

import { UiButton } from '@custom-ui/components'
import TestComp from '@/components/TestComp.vue'
</script>
