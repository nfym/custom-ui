<template>
  <router-view v-if="isRouterAlive" />
</template>

<script setup lang="ts">
defineOptions({ name: 'App' })

import * as Util from '@custom-ui/utils'
import * as Components from '@custom-ui/components'
import { useReload } from '@custom-ui/hooks'

console.log('🚀 ~ packages/utils:', Util)
console.log('🚀 ~ packages/components:', Components)
const { isRouterAlive } = useReload()
</script>
