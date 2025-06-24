<script setup lang="ts">
import { defineOptions } from 'vue'
import {
  GopageImg,
  GostreamImg,
  AzoomImg,
  NalImg,
  TekupImg,
  vinhUniversityImg,
  PiconImg,
} from '@/assets/images'

defineOptions({
  name: 'AppImage',
})

const { type } = defineProps<{
  type: 'gopage' | 'gostream' | 'azoom' | 'nal' | 'tekup' | 'vinhUniversity' | 'picon'
}>()

const images = {
  gopage: GopageImg,
  gostream: GostreamImg,
  azoom: AzoomImg,
  nal: NalImg,
  tekup: TekupImg,
  vinhUniversity: vinhUniversityImg,
  picon: PiconImg,
}
</script>

<template>
  <img :src="images[type]" alt="App Image" class="app-image" />
</template>

<style lang="scss" scoped>
.app-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
