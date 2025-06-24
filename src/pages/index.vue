<script setup lang="ts">
import { defineOptions } from 'vue'
import { HelloIam, AboutMe, WhatIDo, FeaturedProjects, MyExpertise } from '@/components/my-cv'
import { SOCIALS } from '@/constants'

defineOptions({
  name: 'MyCV',
  components: {
    HelloIam,
    AboutMe,
    WhatIDo,
    FeaturedProjects,
    MyExpertise,
  },
})

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="my-cv">
    <HelloIam class="section -full" />
    <AboutMe class="section" />
    <WhatIDo class="section" />
    <FeaturedProjects class="section -full" />
    <div class="section -full -custom">
      <MyExpertise />
    </div>
    <footer class="footer">
      <button class="button" @click="scrollTop">
        <font-awesome-icon :icon="['fas', 'arrow-up']" class="icon" />
      </button>
      <div class="top">
        <h1 class="name">{{ $t('footer.name') }}</h1>
        <ul class="socials">
          <li v-for="social in SOCIALS" :key="social.value">
            <a :href="social.url" class="link" target="_blank">
              <font-awesome-icon :icon="social.icon" />
            </a>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <p>{{ $t('footer.copyright', { year: 2025 }) }}</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.my-cv {
  width: auto;
  height: 100%;
  min-width: $min-width-content;
  display: flex;
  flex-direction: column;
  > .section:not(.-full) {
    width: fit-content;
    max-width: $max-width-content;
    margin: 0 auto;
    padding: 6rem 4rem 3.75rem;
    @include mediaquery-down('2xl') {
      padding: 4rem 2rem;
    }
  }
  > .section.-custom {
    background-color: $primary-color;
  }
  > .footer {
    background-color: $black-100-color;
    color: $white-color;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    @include mediaquery-down('2xl') {
      padding: 2rem 4rem;
    }
  }
  > .footer > .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: $max-width-content;
    padding: 0 4rem;
  }
  > .footer > .top > .name {
    font-size: 1.5rem;
    font-weight: bold;
  }
  > .footer > .top > .socials {
    display: flex;
    gap: 2.375rem;
    font-size: 1.5rem;
  }
  > .footer > .top > .socials > li > a {
    color: inherit;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: $primary-color;
    }
  }
  > .footer > .bottom {
    margin-top: 1rem;
  }
  > .footer > .bottom > p {
    margin: 0;
  }
  > .footer > .button {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $white-color;
    color: $text-color;
    border: none;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      box-shadow: $box-shadow;
      background-color: $primary-100-color;
      color: $white-color;
    }
  }
  > .footer > .button > .icon {
    font-size: 1.25rem;
  }
}
</style>
