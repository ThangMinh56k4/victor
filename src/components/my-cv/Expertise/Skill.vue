<script setup lang="ts">
import { defineOptions, defineProps, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  TypescriptIcon,
  MongodbIcon,
  MySQLIcon,
  PrismaIcon,
  NuxtjsIcon,
  FirebaseIcon,
} from '@/components/icons'
import { TECHNICAL_SKILLS } from '@/constants'
import type { Skill } from '@/types'

const { tm } = useI18n()

defineOptions({
  name: 'MySkill',
  components: {
    TypescriptIcon,
    MongodbIcon,
    MySQLIcon,
    PrismaIcon,
    NuxtjsIcon,
    FirebaseIcon,
  },
  inheritAttrs: false,
})

const professionalSkills = computed<Skill[]>(() => {
  return tm('professionalSkills.skills').map((skill: Skill) => ({
    label: skill.label,
    icon: skill.icon,
    isUseComponent: skill.isUseComponent || false,
    value: skill.value,
  }))
})

const technicalSkills = computed<Skill[]>(() => {
  return Object.entries(TECHNICAL_SKILLS).map(([, value]: [string, Skill]) => ({
    label: value.label,
    icon: value.icon,
    isUseComponent: value.isUseComponent || false,
    value: value.value,
  }))
})
</script>

<template>
  <table class="my-skill">
    <tr>
      <th>{{ tm('technicalSkills.title') }}</th>
    </tr>
    <tr v-for="(skill, index) in technicalSkills" :key="index">
      <td>
        <div class="item">
          <div class="check">
            <font-awesome-icon :icon="['fas', 'check']" class="icon" />
          </div>
          <div class="tag">
            <component :is="skill.icon" v-if="skill.isUseComponent" class="icon" />
            <font-awesome-icon v-else :icon="skill.icon" class="icon" />
            <span class="name">{{ skill.label }}</span>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th>{{ tm('professionalSkills.title') }}</th>
    </tr>
    <tr v-for="(skill, index) in professionalSkills" :key="index">
      <td>
        <div class="item">
          <div class="check">
            <font-awesome-icon :icon="['fas', 'check']" class="icon" />
          </div>
          <div class="tag">
            <component :is="skill.icon" v-if="skill.isUseComponent" class="icon" />
            <font-awesome-icon v-else :icon="skill.icon" class="icon" />
            <span class="name">{{ skill.label }}</span>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
.my-skill {
  width: 100%;
  > tr > th {
    font-weight: 700;
    text-align: center;
    font-size: 1.25rem;
  }
  > tr > th,
  > tr > td {
    background: $white-transparent-10-color;
    padding: 0.625rem;
    color: $white-color;
  }
  > tr:first-child > th {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }
  > tr:last-child > td {
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
  > tr > td > .item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.125rem;
  }
  > tr > td > .item > .check {
    position: relative;
    margin-right: 0.5rem;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(50%);
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 0.25rem;
      border: 1px solid $white-color;
      background-color: transparent;
    }
  }
  > tr > td > .item > .check > .icon {
    width: 1.5rem;
    height: 1.5rem;
    transform: scale(0.8);
    opacity: 0;
    animation: pulseCheck 1.5s ease-in-out infinite;
    transform-origin: center;
    color: $white-color;
  }
  > tr > td > .item > .tag {
    background-color: transparent;
    color: $white-color;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  > tr > td > .item > .tag > .icon {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
  > tr > td > .item > .tag > .name {
    font-weight: 500;
    text-transform: capitalize;
  }
  @keyframes pulseCheck {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.7;
    }
  }
}
</style>
