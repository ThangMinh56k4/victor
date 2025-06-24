<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({
  name: 'AppButton',
})
</script>

<template>
  <button class="app-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.app-button {
  border-radius: 1.25rem;
  background-color: $primary-color;
  opacity: 0.9;
  color: $white-color;
  padding: 9px 29.61px 9px 30.83px;
  font-size: 1rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: $primary-100-color;
    opacity: 1;
    box-shadow: $box-shadow;
  }
}
</style>
