<template>
  <div class="logo-animation" v-if="show">
    <div class="square sq1"></div>
    <div class="square sq2"></div>
    <div class="square sq3"></div>
    <div class="square sq4"></div>
    <h1 class="logo-text">네모아</h1>
  </div>
</template>

<script>
export default {
  name: "LogoAnimation",
  data() {
    return { show: true }
  },
  mounted() {
    setTimeout(() => { this.show = false }, 2000)
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.logo-animation {
  position: fixed;
  inset: 0;
  background: $color-black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .square {
    width: 40px; height: 40px;
    background: $color-mint;
    position: absolute;
    animation: moveToCenter 0.8s forwards;
  }
  .sq1 { top: 10%; left: 10%; animation-delay: 0s; }
  .sq2 { top: 10%; right: 10%; animation-delay: 0.1s; }
  .sq3 { bottom: 10%; left: 10%; animation-delay: 0.2s; }
  .sq4 { bottom: 10%; right: 10%; animation-delay: 0.3s; }
  .logo-text {
    color: $color-white;
    font-size: 48px;
    opacity: 0;
    animation: fadeIn 0.8s forwards 1s;
  }
}
@keyframes moveToCenter {
  to { top: 50%; left: 50%; transform: translate(-50%, -50%); }
}
</style>