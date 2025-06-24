<script setup lang="ts">
import { defineOptions } from 'vue'
import MyExperience from './Experience.vue'
import MySkill from './Skill.vue'

defineOptions({
  name: 'MyExpertise',
  components: {
    MyExperience,
    MySkill,
  },
})
</script>

<template>
  <div class="my-expertise">
    <MySkill />
    <MyExperience />
  </div>
</template>

<style lang="scss" scoped>
.my-expertise {
  max-width: $max-width-content;
  margin: 0 auto;
  padding: 6rem 4rem 3.75rem;
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 1.5rem;
}
</style>
