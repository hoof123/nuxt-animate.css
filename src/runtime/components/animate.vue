<script setup lang="ts">

import { ref } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'

// props
interface Props {

    animation: string,
    delay: string,
    duration: string,
    repeat: string,
    scroll: boolean,
}

const props = defineProps<Props>()

// const props = defineProps(['animation', 'delay', 'duration', 'repeat', 'scroll'])

// observer options
const root: any = ref(null)
const rootMargin = '0px'
const threshold: number[] = buildthresholdlist()

// target
const target = ref(null)
const isVisible = ref(false)
const isScroll = ref(props.scroll)

// threshold list
function buildthresholdlist (): number[] {
  const thresholds: number[] = []
  const numsteps = 20
  for (let i = 1.0; i <= numsteps; i++) {
    const ratio = i / numsteps
    thresholds.push(ratio)
  }
  thresholds.push(0)
  return thresholds
}

// observer function
function onIntersectionObserver ([{ isIntersecting }]: any): void {
  isVisible.value = isIntersecting
}

</script>

<template>
  <div ref="target" v-intersection-observer="[onIntersectionObserver, {root, rootMargin, threshold}]" class="animate__animated" :class="[isScroll ? [isVisible ? props.animation : ''] : props.animation, [props.delay], [props.duration], [props.repeat]]" :style="[isScroll ? [isVisible ? {'visibility': 'visible'} : { 'visibility': 'hidden'}] : '']">
    <slot />
  </div>
</template>
