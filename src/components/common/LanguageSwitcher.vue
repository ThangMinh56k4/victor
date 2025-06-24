<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { LANGUAGE_OPTIONS, SESSION_STORAGE_KEY } from '@/constants'
import { setSessionStorage } from '@/utils/storage'

const { locale } = useI18n()

const language = computed(() => {
  const key = locale.value as keyof typeof LANGUAGE_OPTIONS

  return LANGUAGE_OPTIONS[key] ?? LANGUAGE_OPTIONS['en']
})

const changeLocale = (lang: string) => {
  locale.value = lang
  setSessionStorage(SESSION_STORAGE_KEY.lang, lang)
  document.documentElement.setAttribute('lang', lang)
}
</script>

<template>
  <div class="lang-switcher">
    <div class="current">
      <span :class="[language.icon]"></span>
      <span class="label"> {{ language.label }} </span>
    </div>
    <div class="list">
      <div
        v-for="lang in LANGUAGE_OPTIONS"
        :key="lang.value"
        :class="['item', { '-active': lang.value === locale }]"
        @click="changeLocale(lang.value)"
      >
        <span :class="[lang.icon, 'icon']"></span>
        <span class="label"> {{ lang.label }} </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lang-switcher {
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 170px;
  border-radius: 0.75rem;

  > .current {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 0.75rem;
    background-color: $white-color;
    border-radius: 0.75rem;
    transition: all 0.3s ease-in-out;

    > span {
      font-size: 1.2rem;
      font-weight: 500;

      &.fi {
        font-size: 1.5em;
        line-height: 1;
      }
    }
  }

  > .list {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: $white-color;
    border-radius: 0 0 0.75rem 0.75rem;
    z-index: 10;
    width: 100%;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition:
      opacity 0.3s ease-in-out,
      max-height 0.4s ease-in-out,
      visibility 0.4s ease-in-out;
    transition-delay: 0.05s;
    > .item {
      display: flex;
      align-items: center;
      padding: 0.75rem 0.75rem;
      gap: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: $gray-color;
      }

      > .label {
        font-size: 1.2rem;
        font-weight: 500;
      }

      > .fi {
        font-size: 1.5em;
        line-height: 1;
      }
    }
    > .item.-active > .label {
      color: $black-700-color;
      cursor: not-allowed;
    }
  }
}

.lang-switcher:hover {
  box-shadow: $box-shadow;
  > .current {
    border-radius: 0.75rem 0.75rem 0 0;
    border-bottom: 1.5px solid $black-100-color;
  }

  > .list {
    opacity: 1;
    visibility: visible;
    max-height: 500px;
    pointer-events: auto;
    transition-delay: 0s;
  }
}
</style>
