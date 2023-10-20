<script setup lang="ts">
defineOptions({
  name: 'LogDemo'
})
import { logN, logT, logC } from '@custom-ui/utils'
import { UiButton } from '@custom-ui/components'

function clickHandler() {
  logC.primary('logC primary message')
  logC.success('logC success message')
  logC.info('logC info message')
  logC.warning('logC warning message')
  logC.error('logC error message')

  logT.primary('VERSION v1.0.0')
  logT.success('VERSION v1.0.0')
  logT.info('VERSION v1.0.0')
  logT.warning('VERSION v1.0.0')
  logT.error('VERSION v1.0.0')

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

<template>
  <UiButton @click="clickHandler">log</UiButton>
</template>
