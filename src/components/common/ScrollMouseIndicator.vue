<template>
  <div class="scroll-mouse-indicator">
    <div class="mouse-icon">
      <font-awesome-icon :icon="['fas', 'computer-mouse']" />
    </div>
    <div class="scroll-text">{{ $t('header.seeMore') }}</div>
  </div>
</template>

<style scoped lang="scss">
.scroll-mouse-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  > .mouse-icon {
    font-size: 1.875rem;
    color: $black-300-color;
    animation: moveUpDown 1.45s infinite alternate ease-in-out;
  }
  > .scroll-text {
    font-size: 0.875rem;
    margin-top: 1.25rem;
    color: $black-300-color;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(15px);
  }
}
</style>
