<template>
  <section class="workflow">
    <div class="container">
      <h2>현지화 워크플로우</h2>
      <div class="steps">
        <div class="step" v-for="(step, index) in steps" :key="index">
          <div class="number">{{ index + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p v-html="step.desc"></p>
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
        { title: '텍스트 클리닝', desc: '대사·SFX 삭제(기본)<br>말풍선 삭제(선택)' },
        { title: '텍스트 추출(OCR)', desc: '이미지 속 텍스트를 추출하여<br>편집 가능한 문서로 제공' },
        { title: '텍스트 번역', desc: 'AI 기반 다국어 번역' },
        { title: '텍스트 식자', desc: '원본 스타일을 반영해<br>번역 텍스트 배치' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.workflow {
  padding: 80px 0;
  .steps {
    display: flex;
    gap: 24px;
    .step {
      flex: 1;
      text-align: center;
      .number {
        background: $color-mint;
        color: $color-black;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }
    }
  }
}
</style>