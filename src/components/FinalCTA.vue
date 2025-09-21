<template>
  <section class="final-cta">
    <div class="container">
      <h2>네모 속 이야기를, 함께 모아</h2>
      <p>지금 바로! 네모아와 함께, 글로벌 독자를 만나보세요</p>
      <div class="cta-group">
        <button class="btn-primary">무료 샘플 테스트 신청</button>
        <button class="btn-secondary">맞춤 견적 문의</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FinalCTA"
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.final-cta {
  background: $color-mint;
  color: $color-black;
  padding: 80px 0;
  text-align: center;
  .cta-group {
    margin-top: 24px;
    display: flex;
    gap: 16px;
    justify-content: center;
    .btn-primary {
      background: $color-black;
      color: $color-white;
      padding: 14px 28px;
      border-radius: 8px;
      font-weight: bold;
      border: none;
    }
    .btn-secondary {
      background: transparent;
      color: $color-black;
      padding: 14px 28px;
      border-radius: 8px;
      font-weight: bold;
      border: 2px solid $color-black;
    }
  }
}
</style>