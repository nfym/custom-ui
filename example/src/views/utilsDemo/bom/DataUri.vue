<template>
  <comp-content-layout title="datauri 相关方法" :breadcrumb="breadcrumb">
    <div :class="`${prefix.b()}`">
      <UiButton
        @click="
          () =>
            DataUri.imageToDataUri(
              'https://picsum.photos/200/300',
              (err, uri) => {
                console.log(err, uri)
                datauriStr = uri
              }
            )
        "
      >
        imageToDataUri
      </UiButton>
      <UiButton
        @click="
          () => {
            blob = DataUri.dataUriToBlob(datauriStr)
            console.log(blob)
          }
        "
      >
        dataUriToBlob
      </UiButton>

      <UiButton @click="() => DataUri.downloadBlob(blob, 'file')">
        downloadBlob
      </UiButton>

      <span style="white-space: normal; overflow-wrap: break-word">
        {{ datauriStr }}
      </span>
    </div>
  </comp-content-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DataUri'
})

import { ref } from 'vue'
import { DataUri } from '@custom-ui/utils'
import { usePrefix } from '@custom-ui/hooks'
import { UiButton } from '@custom-ui/components'
const prefix = usePrefix('utils-bom-datauri-demo')

const breadcrumb = [
  {
    goto: { name: 'UtilsDemo' },
    label: '工具方法'
  },
  {
    label: 'datauri'
  }
]

console.log('🚀 ~ DataUri:', DataUri)

const datauriStr = ref()
const blob = ref()
</script>

<style scoped lang="less">
@prefix-cls: ~'utils-bom-datauri-demo';

.@{prefix-cls} {
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: @gray-1;
  border-radius: 0.5rem;
}
</style>
