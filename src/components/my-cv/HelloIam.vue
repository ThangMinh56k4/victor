<script setup lang="ts">
import { defineOptions } from 'vue'

import { LanguageSwitcher, ScrollMouseIndicator } from '@/components/common'
import { SOCIALS } from '@/constants'

defineOptions({
  name: 'HelloIam',
  components: {
    LanguageSwitcher,
    ScrollMouseIndicator,
  },
})
</script>

<template>
  <div class="hello-iam">
    <LanguageSwitcher class="lang" />
    <div class="content">
      <div class="description">
        <div class="hi">{{ $t('header.hello') }}</div>
        <div class="info">
          <h1 class="name">{{ $t('header.name') }}</h1>
          <h2 class="role">{{ $t('header.role') }}</h2>
        </div>
        <ul class="contact">
          <li>
            <font-awesome-icon :icon="['fas', 'envelope']" />
            thangminh56k4@gmail.com
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'phone']" />
            {{ $t('header.numberPhone') }}
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            {{ $t('header.address') }}
          </li>
        </ul>
        <div class="socials">
          <a
            v-for="social in SOCIALS"
            :key="social.value"
            :href="social.url"
            class="link"
            target="_blank"
          >
            <font-awesome-icon :icon="social.icon" />
          </a>
        </div>
      </div>
      <div class="avatar">
        <img src="@/assets/images/avatar.jpg" alt="Avatar" />
      </div>
    </div>
    <ScrollMouseIndicator class="scroll" />
  </div>
</template>

<style lang="scss" scoped>
.hello-iam {
  width: 100%;
  height: 100vh;
  position: relative;
  &::after {
    @include after-background-cover('@/assets/images/thumbnail-bg.jpg');
    filter: blur(4px);
    opacity: 0.4;
  }
  > .lang {
    position: absolute;
    top: 2rem;
    right: 4rem;
    z-index: 10;
  }
  > .content {
    width: auto;
    height: 100%;
    max-width: $max-width-content;
    margin: 0 auto;
    padding: 2rem 4rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include mediaquery-down('2xl') {
      padding: 2rem;
      justify-content: center;
      gap: 1rem;
    }
  }
  > .content > .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
  }
  > .content > .description > .hi {
    display: inline-flex;
    padding: 6px 30.03px 6px 30px;
    font-size: 0.875rem;
    color: $white-color;
    background-color: $primary-color;
    border-radius: 20px 20px 20px 0px;
    opacity: 0.8;
    font-weight: 700;
    line-height: 1.5;
  }
  > .content > .description > .info {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
  > .content > .description > .info > .name {
    font-size: 3.75rem;
    font-weight: 600;
  }
  > .content > .description > .info > .role {
    font-size: 1.625rem;
    font-weight: 700;
  }
  > .content > .description > .socials {
    display: flex;
    gap: 2.375rem;
    font-size: 1.5rem;
    padding: 1.5rem;
  }
  > .content > .description > .socials > .link {
    color: inherit;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: $primary-color;
    }
  }
  > .content > .description > .contact {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.125rem;
    color: $text-color;
    list-style: none;
    padding-left: 0;
  }
  > .content > .description > .contact > li {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-weight: 500;
    font-size: 0.875rem;
  }
  > .content > .description > .contact > li > svg {
    font-size: 0.875rem;
  }
  > .content > .avatar {
    flex-shrink: 0;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: 20px solid rgba(0, 0, 0, 0.07);
    overflow: hidden;
    position: relative;
    transition: all 0.5s ease-in-out;
    &:hover {
      border-color: $primary-color;
    }
  }
  > .content > .avatar > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.09);
      filter: brightness(1.1);
    }
  }
  > .scroll {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
}
</style>
