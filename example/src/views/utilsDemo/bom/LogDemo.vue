<template>
  <comp-content-layout title="log 信息打印相关方法" :breadcrumb="breadcrumb">
    <div :class="`${prefix.b()}`">
      <UiButton @click="showLogC">log 文本颜色</UiButton>
      <UiButton @click="showLogT">标签样式 log</UiButton>
      <UiButton @click="showLogN">胶囊样式 log</UiButton>
    </div>
  </comp-content-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LogDemo'
})
import { logN, logT, logC } from '@custom-ui/utils'
import { usePrefix } from '@custom-ui/hooks'
import { UiButton } from '@custom-ui/components'
const prefix = usePrefix('utils-bom-log-demo')

const breadcrumb = [
  {
    goto: { name: 'UtilsDemo' },
    label: '工具方法'
  },
  {
    label: 'Log'
  }
]

function showLogC() {
  logC.primary('logC.primary message')
  logC.success('logC.success message')
  logC.info('logC.info message')
  logC.warning('logC.warning message')
  logC.error('logC.error message')
}

function showLogT() {
  logT.primary('logT.primary VERSION v1.0.0')
  logT.success('logT.success VERSION v1.0.0')
  logT.info('logT.info VERSION v1.0.0')
  logT.warning('logT.warning VERSION v1.0.0')
  logT.error('logT.error VERSION v1.0.0')
}

function showLogN() {
  logN.primary('接口', 'https://api.juejin.cn/user_api/v1/user/get_info_pack', {
    code: 200,
    msg: 'success',
    data: {
      user_basic: {
        student_status: 0
      }
    }
  })
  logN.success('接口', 'https://api.juejin.cn/user_api/v1/user/get_info_pack', {
    code: 200,
    msg: 'success',
    data: {
      user_basic: {
        student_status: 0
      }
    }
  })
  logN.info('接口', 'https://api.juejin.cn/user_api/v1/user/get_info_pack', {
    code: 200,
    msg: 'success',
    data: {
      user_basic: {
        student_status: 0
      }
    }
  })
  logN.warning('接口', 'https://api.juejin.cn/user_api/v1/user/get_info_pack', {
    code: 200,
    msg: 'success',
    data: {
      user_basic: {
        student_status: 0
      }
    }
  })
  logN.error('接口', 'https://api.juejin.cn/user_api/v1/user/get_info_pack', {
    code: 0,
    msg: 'fail'
  })
}
</script>

<style scoped lang="less">
@prefix-cls: ~'utils-bom-log-demo';

.@{prefix-cls} {
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: @gray-1;
  border-radius: 0.5rem;
}
</style>
