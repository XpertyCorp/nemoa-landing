<template>
  <transition name="page">
    <slot />
  </transition>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.page-enter-active, .page-leave-active {
  position: fixed;
  inset: 0;
  background: $color-mint;
  z-index: 9998;
  animation: pageSwipe 0.6s forwards;
}
@keyframes pageSwipe {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0); }
  100% { transform: translateX(100%); }
}
</style>