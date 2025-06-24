<script setup lang="ts">
import { defineOptions, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { AppImage } from '@/components/common'
import type { Education, WorkExperience } from '@/types'

const { tm } = useI18n()

defineOptions({
  name: 'MyExperience',
  components: {
    AppImage,
  },
})

const educationItems = computed<Education[]>(() => {
  return tm('education.items').map((item: Education) => ({
    name: item.name,
    major: item.major,
    degree: item.degree,
    image: item.image,
    url: item.url,
    time: item.time,
    location: item.location,
    academicPerformance: item.academicPerformance,
  }))
})

const workExperienceItems = computed<WorkExperience[]>(() => {
  return tm('workExperience.items').map((item: WorkExperience) => ({
    name: item.name,
    role: item.role,
    image: item.image,
    time: item.time,
    location: item.location,
  }))
})
</script>

<template>
  <table class="my-experience">
    <tr>
      <th>{{ tm('education.title') }}</th>
    </tr>
    <tr v-for="(education, index) in educationItems" :key="index">
      <td>
        <div class="item">
          <a :href="education.url" target="_blank">
            <AppImage :type="education.image" class="image" />
          </a>
          <div class="content">
            <div class="wrap">
              <h3 class="name">{{ education.name }}</h3>
              <span class="location">
                <font-awesome-icon :icon="['fas', 'location-dot']" class="icon" />
                {{ education.location }}</span
              >
            </div>
            <div class="wrap">
              <span class="major">{{ education.major }}</span>
              <span class="degree">{{ education.degree }}</span>
            </div>
            <div class="wrap">
              <font-awesome-icon :icon="['fas', 'calendar']" class="icon" />
              <span>{{ education.time }}</span>
            </div>
            <div class="wrap">
              <font-awesome-icon :icon="['fas', 'graduation-cap']" class="icon" />
              <span>{{ education.academicPerformance }}</span>
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th>{{ tm('workExperience.title') }}</th>
    </tr>
    <tr v-for="(workExperience, index) in workExperienceItems" :key="index">
      <td>
        <div class="item">
          <a :href="workExperience.url" target="_blank">
            <AppImage :type="workExperience.image" class="image" />
          </a>
          <div class="content">
            <div class="wrap">
              <h3 class="name">{{ workExperience.name }}</h3>
              <span class="location">
                <font-awesome-icon :icon="['fas', 'location-dot']" class="icon" />
                {{ workExperience.location }}</span
              >
            </div>
            <div class="wrap">
              <font-awesome-icon :icon="['fas', 'calendar']" class="icon" />
              <span>{{ workExperience.time }}</span>
            </div>
            <div class="wrap">
              <span class="role">{{ workExperience.role }}</span>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
.my-experience {
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
    gap: 1rem;
  }
  > tr > td > .item > a > .image {
    width: 120px;
    height: 120px;
    border-radius: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      box-shadow: $box-shadow;
    }
  }
  > tr > td > .item > .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  > tr > td > .item > .content > .wrap > .name {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }
  > tr > td > .item > .content > .wrap {
    display: flex;
    gap: 0.5rem;
    font-size: 0.875rem;
  }
  > tr > td > .item > .content > .wrap > .major {
    font-weight: 600;
    font-size: 1.25rem;
  }
  > tr > td > .item > .content > .wrap > .location {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: 500;
    color: $black-300-color;
  }
  > tr > td > .item > .content > .wrap > .degree {
    font-weight: 500;
    color: $black-300-color;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    background-color: $white-color;
  }
  > tr > td > .item > .content > .wrap > .role {
    font-weight: 500;
    color: $black-300-color;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    background-color: $white-color;
  }
  > tr > td > .item > .content > .wrap > .icon {
    font-size: 1rem;
  }
}
</style>
