<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="__layout">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.__layout {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
