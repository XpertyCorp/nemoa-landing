<template>
  <div id="app">
    <LogoAnimation />
    <div class="main-content">
      <HeroSection />
      <PainPoints />
      <SolutionCards />
      <Workflow />
      <ComparisonTable />
      <CaseStudies />
      <ProcessSteps />
      <FinalCTA />
    </div>
  </div>
</template>

<script>
import LogoAnimation from './components/LogoAnimation.vue'
import HeroSection from './components/HeroSection.vue'
import PainPoints from './components/PainPoints.vue'
import SolutionCards from './components/SolutionCards.vue'
import Workflow from './components/Workflow.vue'
import ComparisonTable from './components/ComparisonTable.vue'
import CaseStudies from './components/CaseStudies.vue'
import ProcessSteps from './components/ProcessSteps.vue'
import FinalCTA from './components/FinalCTA.vue'

export default {
  name: 'App',
  components: {
    LogoAnimation,
    HeroSection,
    PainPoints,
    SolutionCards,
    Workflow,
    ComparisonTable,
    CaseStudies,
    ProcessSteps,
    FinalCTA
  }
}
</script>

<style lang="scss">
@use "@/assets/styles/variables.scss" as *;

body {
  margin: 0;
  font-family: $font-main;
  background: $color-white;
}

// 전역 container 스타일
.container {
  max-width: $container-width;
  margin: 0 auto;
  padding: 0 $gutter;
}
</style>