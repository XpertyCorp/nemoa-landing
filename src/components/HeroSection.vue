<template>
  <section class="hero">
    <div class="container">
      <!-- 좌측 텍스트 영역 -->
      <div class="text-col">
        <h1 class="brand-title">Nemoa</h1>
        <h2 class="hero-title">네모 속 이야기를, 함께 모아</h2>
        <p class="hero-subtitle">
          AI의 속도와 사람의 섬세함으로 완성하는 웹툰 현지화<br />
          PSD 없이, PNG·JPG 단일 이미지로 1일 1만장 이상 처리
        </p>
        <div class="cta-group">
          <button class="btn-primary">무료 샘플 테스트 신청</button>
          <button class="btn-secondary">맞춤 견적 문의</button>
        </div>
      </div>

      <!-- 우측 비주얼 영역 -->
      <div class="visual-col">
        <div class="cut-frame">
          <div class="cut cut1">"원본 이미지"</div>
          <div class="cut cut2">"클리닝 비디오"</div>
          <div class="cut cut3">"번역 비디오"</div>
          <div class="cut cut4">"식자 비디오"</div>
        </div>
        <div class="speech-bubble">텍스트 클리닝부터, 번역, 식자까지 Nemoa로 한번에!</div>
      </div>
    </div>
    
    <!-- 저작권 경고 문구 - 화면 최하단 중앙 -->
    <div class="copyright-warning">
      <p><span class="warning-icon">⚠️</span>창작 생태계 보호를 위해, 저작권을 보유하지 않은 개인 및 단체에게는 서비스를 제공하지 않습니다.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.hero {
  background-color: $color-black;
  color: $color-white;
  display: flex;
  align-items: center;
  min-height: 100vh;
  position: relative;

  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: $gutter;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 $gutter;
    align-items: center;
  }

  .text-col {
    grid-column: span 6;

    .brand-title {
      font-family: $font-main;
      font-size: 3.5rem;
      font-weight: 900;
      margin: 0 0 20px 0;
      background: linear-gradient(135deg, $color-mint 0%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 0 30px rgba(166, 240, 211, 0.3);
      letter-spacing: -0.02em;
    }

    .hero-title {
      font-family: $font-main;
      font-size: 56px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 20px;
    }

    .hero-subtitle {
      font-size: 20px;
      line-height: 1.5;
      margin-bottom: 32px;
      color: #eaeaea;
    }

    .cta-group {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;

      .btn-primary {
        background-color: $color-mint;
        color: $color-black;
        padding: 14px 28px;
        border-radius: 8px;
        font-weight: 700;
        border: none;
        cursor: pointer;
      }

      .btn-secondary {
        background-color: transparent;
        color: $color-mint;
        padding: 14px 28px;
        border-radius: 8px;
        font-weight: 700;
        border: 2px solid $color-mint;
        cursor: pointer;
      }
    }

  }

  .copyright-warning {
    background: rgba(255, 193, 7, 0.1);
    border: 1.5px solid rgba(255, 193, 7, 0.3);
    border-radius: 9px;
    padding: 18px 30px;
    margin: 0 auto;
    width: fit-content;
    max-width: 90%;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);

    p {
      margin: 0;
      font-size: 15px;
      color: #ffc107;
      text-align: center;
      font-weight: 500;
      line-height: 1.4;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      white-space: nowrap;
    }

    .warning-icon {
      font-size: 16.5px;
      flex-shrink: 0;
    }
  }

  .visual-col {
    grid-column: span 6;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cut-frame {
      display: grid;
      grid-template-columns: repeat(2, 120px);
      grid-template-rows: repeat(2, 120px);
      gap: 12px;
      margin-bottom: 20px;

      .cut {
        background-color: $color-mint;
        opacity: 0;
        animation: gather 1s forwards;
      }

      .cut1 { animation-delay: 0.1s; }
      .cut2 { animation-delay: 0.3s; }
      .cut3 { animation-delay: 0.5s; }
      .cut4 { animation-delay: 0.7s; }
    }

    .speech-bubble {
      background: $color-white;
      color: $color-black;
      padding: 12px 16px;
      border-radius: 12px;
      position: relative;
      font-size: 16px;
      max-width: 240px;
      text-align: center;

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 20px;
        border-width: 10px;
        border-style: solid;
        border-color: $color-white transparent transparent transparent;
      }
    }
  }
}

@keyframes gather {
  from {
    transform: scale(0.8) translateY(20px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .hero .container {
    grid-template-columns: repeat(6, 1fr);
  }
  .hero .text-col,
  .hero .visual-col {
    grid-column: span 6;
    text-align: center;
  }
  
  .hero .text-col .brand-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
  }
  .hero .cta-group {
    flex-direction: column;
    align-items: center;
  }
  
  .hero .text-col .brand-title {
    font-size: 2.5rem;
  }
  
  .hero .copyright-warning {
    bottom: 30px;
    padding: 12px 24px;
    max-width: 95%;
    
    p {
      font-size: 13.5px;
      gap: 6px;
      text-align: center;
      justify-content: center;
      white-space: nowrap;
    }
    
    .warning-icon {
      font-size: 15px;
    }
  }
}
</style>