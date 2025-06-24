<script setup lang="ts">
import { defineOptions, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { AppImage } from '@/components/common'
import type { FeaturedProject } from '@/types'

defineOptions({
  name: 'FeaturedProjects',
  components: {
    Splide,
    SplideSlide,
    AppImage,
  },
})

const splidePptions = {
  type: 'loop',
  perPage: 2,
  autoplay: true,
  arrows: false,
  gap: '1.5rem',
  // Breakpoints for responsive design
  breakpoints: {
    1200: {
      perPage: 1,
    },
  },
}

const { tm } = useI18n()

const featuredProjects = computed<FeaturedProject[]>(() => {
  return tm('featuredProjects.projects').map((project: FeaturedProject) => ({
    title: project.title,
    description: project.description,
    url: project.url,
    image: project.image,
    tags: project.tags,
    role: project.role,
    teamSize: project.teamSize,
    time: project.time,
  }))
})
</script>

<template>
  <div class="featured-project">
    <div class="project-content">
      <h1 class="title">{{ $t('featuredProjects.title') }}</h1>
      <Splide
        :options="splidePptions"
        aria-label="My Favorite Projects Carousel"
        class="project-slider"
      >
        <SplideSlide v-for="(project, index) in featuredProjects" :key="index">
          <div class="project-item">
            <h3 class="title">{{ project.title }}</h3>
            <p class="role">{{ project.role }}</p>
            <p class="description">{{ project.description }}</p>
            <div class="wrapper">
              <AppImage :type="project.image" class="image" />
              <div class="box">
                <ul class="tags">
                  <li v-for="(tag, tagIndex) in project.tags" :key="tagIndex">
                    {{ tag }}
                  </li>
                </ul>
                <p class="team-size">
                  <font-awesome-icon :icon="['fas', 'users']" class="icon" /> {{ project.teamSize }}
                </p>
                <p class="time">
                  <font-awesome-icon :icon="['fas', 'calendar']" class="icon" />
                  {{ project.time }}
                </p>
                <div class="link">
                  <font-awesome-icon :icon="['fas', 'link']" class="icon" />
                  <a v-if="project.url" :href="project.url" target="_blank">
                    {{ project.url }}
                  </a>
                  <span v-else>{{ $t('featuredProjects.private') }}</span>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.featured-project {
  position: relative;
  &::after {
    @include after-background-cover();
    filter: blur(4px);
    opacity: 0.375;
  }
  > .project-content {
    max-width: $max-width-content;
    margin: 0 auto;
    padding: 4rem 4rem 2rem;
  }
  > .project-content > .title {
    @include page-title();
    text-align: center;
  }
  > .project-content > .splide.project-slider {
    padding: 0;
  }
}
.featured-project
  > .project-content
  > .splide.project-slider
  > :deep(.splide__track .splide__slide .project-item) {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: transparent;
  border-radius: 0.75rem;
  height: 400px;
  > .title {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  > .role {
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    color: $black-200-color;
  }
  > .description {
    font-size: 1rem;
    line-height: 1.2;
    height: 2.5rem;
    @include truncate-multiline(2);
  }
  > .wrapper {
    display: flex;
    gap: 1.5rem;
  }
  > .wrapper > .image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: $box-shadow;
    border-radius: 1rem;
    flex-shrink: 0;
  }
  > .wrapper > .box {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  > .wrapper > .box > .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  > .wrapper > .box > .tags > li {
    background-color: $primary-color;
    color: $white-color;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
  }
  > .wrapper > .box > .team-size,
  > .wrapper > .box > .time,
  > .wrapper > .box > .link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: $black-200-color;
  }
  > .wrapper > .box > .team-size > .icon,
  > .wrapper > .box > .time > .icon,
  > .wrapper > .box > .link > .icon {
    width: 1.5rem;
  }
}
</style>
