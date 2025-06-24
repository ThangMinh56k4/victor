<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'
import { AppButton } from '@/components/common'

const { t } = useI18n()

defineOptions({
  name: 'AboutMe',
})

const downloadCv = () => {
  alert(t('aboutMe.downloadCvMessage'))
}
</script>

<template>
  <section class="about-me">
    <img src="@/assets/images/icon.png" alt="" class="img" />
    <div class="info">
      <h1 class="title">{{ $t('aboutMe.title') }}</h1>
      <p class="description">{{ $t('aboutMe.description') }}</p>
      <AppButton class="button" @click="downloadCv"
        >{{ $t('aboutMe.downloadCv') }} <DownloadIcon
      /></AppButton>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-me {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
  justify-items: center;
  > .img {
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
  > .info > .title {
    @include page-title;
  }
  > .info > .description {
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 400;
  }
  > .info > .button {
    margin-top: 2rem;
  }
}
</style>
