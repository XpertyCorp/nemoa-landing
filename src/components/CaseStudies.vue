<template>
  <section class="case-studies">
    <div class="container">
      <h2>고객 사례</h2>
      <div class="cases">
        <div class="case">
          <h3>웹툰 플랫폼 번역 외주, A사</h3>
          <p>Nemoa AI 의 <strong>텍스트 클리닝</strong> 솔루션 적용하여, 현지화 기간 단축 및 비용 절감</p>
          <!--
          <div class="images">
            <img src="@/assets/images/case1-before.jpg" alt="Before" />
            <img src="@/assets/images/case1-after.jpg" alt="After" />
          </div>
          -->
        </div>
        <div class="case">
          <h3>종이책 유통 출판, B사</h3>
          <p><strong>Nemoa AI</strong> 솔루션 적용으로, 해외 만화 한국어 번역판 출시 일정 단축</p>
          <!--
          <div class="images">
            <img src="@/assets/images/case2-before.jpg" alt="Before" />
            <img src="@/assets/images/case2-after.jpg" alt="After" />
          </div>
          -->
        </div> 
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CaseStudies"
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.case-studies {
  padding: 80px 0;
  .cases {
    display: flex;
    gap: 24px;
    margin-top: 40px;
    .case {
      flex: 1;
      background: $color-white;
      padding: 20px;
      border-radius: 8px;
      .images {
        display: flex;
        gap: 12px;
        margin-top: 16px;
        img {
          width: 50%;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>