<!--
 * @Description: 系统异常页面 403、404 等
 * @Date: 2023-09-06 17:09:25
 * @LastEditTime: 2023-09-11 14:31:57
-->
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSwitchPage } from '@custom-ui/hooks'
import { getImageUrl } from '@/utils/util'

export default defineComponent({
  name: 'ErrorPage',
  setup() {
    const prefixCls = ref('error')
    const switchPage = useSwitchPage()

    function randomNum(minNum: number, maxNum: number) {
      return parseInt(`${Math.random() * (maxNum - minNum + 1) + minNum}`, 10)
    }

    const imgIndex = ref(randomNum(0, 10))
    function setImgIndex() {
      imgIndex.value = randomNum(0, 10)
    }

    return {
      prefixCls,
      getImageUrl,
      backHome: () => {
        switchPage({ name: 'Home' })
      },
      imgIndex,
      setImgIndex
    }
  }
})
</script>

<template>
  <section :class="[prefixCls]">
    <div>
      <img
        :src="getImageUrl(`404/404_${imgIndex}.svg`)"
        :data-img-index="imgIndex"
        alt="404"
        @click="setImgIndex"
      />
      <div :class="`${prefixCls}__msg`">
        <span>抱歉，您访问的页面不存在！</span>
        <br />
        <span>访问链接可能错误，或者该页面已被删除。</span>
        <a-button type="link" @click="backHome">前往首页</a-button>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@prefix-cls: ~'error';

.@{prefix-cls} {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &__msg {
    color: @gray-7;
    line-height: 1.5rem;
    text-align: center;
  }
}
</style>
