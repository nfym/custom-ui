<template>
  <div class="container">
    <!-- 方块盒子 -->
    <div ref="cardRef1" class="item"></div>
    <!-- 方块盒子 -->
    <div ref="cardRef2" class="item"></div>
    <!-- 方块盒子 -->
    <div ref="cardRef3" class="item"></div>
  </div>
</template>

<script setup lang="ts">
import { useLightCard } from './use-light-card'

const { cardRef: cardRef1 } = useLightCard()
const { cardRef: cardRef2 } = useLightCard({
  light: {
    color: '#ffffff',
    width: 100
  }
})
const { cardRef: cardRef3 } = useLightCard({
  light: {
    color: 'yellow'
  }
})
</script>

<style scoped lang="less">
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 200px;
  background: black;

  .item {
    position: relative;
    width: 125px;
    height: 125px;
    background: #1c1c1f;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
