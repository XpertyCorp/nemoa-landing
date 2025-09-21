<template>
  <section class="process">
    <div class="container">
      <h2>의뢰 절차</h2>
      <div class="steps">
        <div class="step" v-for="(step, index) in steps" :key="index">
          <div class="icon">{{ index + 1 }}</div>
          <p>{{ step }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        '문의 접수',
        '요구사항 분석',
        '샘플 테스트',
        '견적 확정',
        '작업 개시'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.process {
  background: $color-black;
  color: $color-white;
  padding: 80px 0;
  text-align: center;
  .steps {
    display: flex;
    gap: 24px;
    margin-top: 40px;
    .step {
      flex: 1;
      .icon {
        background: $color-mint;
        color: $color-black;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 auto 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }
    }
  }
}
</style>