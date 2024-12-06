<template>
  <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">
    <circle
      v-for="(circle, index) in circleSegments"
      :key="index"
      :cx="size / 2"
      :cy="size / 2"
      :r="radius"
      fill="none"
      :stroke="circle.stroke"
      :stroke-width="strokeWidth"
      :stroke-dasharray="circle.strokeDasharray"
      :stroke-dashoffset="circle.strokDashoffset"
    />
  </svg>
</template>

<script setup lang="tsx">
import { ref, computed } from 'vue'

defineOptions({ name: 'UiRing' })
const props = defineProps({
  size: { type: Number, default: 100 },
  strokeWidth: { type: Number, default: 10 },
  segments: {
    type: Array<{
      color: string
      percentage: number
    }>,
    default: () => []
  }
})

const radius = ref((props.size - props.strokeWidth) / 2) // 半径
const circumference = 2 * Math.PI * radius.value // 圆周长
let dashOffset = 0 // 每段的起始位置偏移

const circleSegments = computed(() => {
  const circles: any[] = []

  props.segments.forEach((segment) => {
    const { color, percentage } = segment
    const segmentLength = (percentage / 100) * circumference // 当前段的长度
    const gap = circumference - segmentLength // 间隙部分

    circles.push({
      stroke: color,
      percentage: percentage,
      strokeDasharray: `${segmentLength} ${gap}`,
      strokDashoffset: -dashOffset
    })

    dashOffset += segmentLength // 更新下一段的偏移量
  })
  return circles
})
</script>
