<script setup lang="ts">
import { defineOptions, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { DotIcon, CodeIcon } from '@/components/icons'

defineOptions({
  name: 'WhatIDo',
  components: {
    DotIcon,
    CodeIcon,
  },
})

const { tm } = useI18n()

interface whatIDoPoint {
  heading: string
  description: string
  icon: string
}

const whatIDoPoints = computed<whatIDoPoint[]>(() => {
  return tm('whatIDo.points').map((point: whatIDoPoint) => ({
    heading: point.heading,
    description: point.description,
    icon: point.icon,
  }))
})
</script>

<template>
  <section class="what-i-do">
    <h1 class="title">{{ $t('whatIDo.title') }}</h1>
    <div class="list">
      <div v-for="(point, index) in whatIDoPoints" :key="index" class="skill">
        <component :is="point.icon" class="icon" />
        <h3 class="title">{{ point.heading }}</h3>
        <p class="text">{{ point.description }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.what-i-do {
  > .title {
    @include page-title;
    text-align: center;
  }
  > .list {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 1.5rem;
    // @include mediaquery-down('2xl') {
    //   grid-template-columns: repeat(2, minmax(1fr, 1fr));
    // }
  }
  > .list > .skill {
    background-color: $white-color;
    padding: 2.25rem 1.25rem;
    border-radius: 0.75rem;
    box-shadow: $box-shadow;
    border: 1px solid $primary-color;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  > .list > .skill:hover {
    transform: translateY(-5px);
    box-shadow: $box-shadow-lg;
  }
  > .list > .skill > .title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  > .list > .skill > .text {
    font-size: 1rem;
    line-height: 1.6;
    color: $text-color;
  }
}
</style>
