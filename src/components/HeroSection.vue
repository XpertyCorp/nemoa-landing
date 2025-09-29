<template>
  <section class="hero">
    <div class="container">
      <!-- 메인 콘텐츠 영역 -->
      <div class="hero-content">
        <!-- 브랜드 타이틀 -->
        <div class="brand-section">
          <h1 class="brand-title">NEMOA</h1>
          <div class="brand-subtitle">웹툰 현지화의 새로운 기준</div>
        </div>

        <!-- 메인 타이틀 -->
        <h2 class="main-title">네모 속 이야기를,<br>함께 모아</h2>
        
        <!-- 서브타이틀 -->
        <p class="hero-description">
          AI의 속도와 사람의 섬세함으로 완성하는 웹툰 현지화<br>
          PSD 없이, PNG·JPG 단일 이미지로 1일 1만장 이상 처리
        </p>

        <!-- CTA 버튼들 -->
        <div class="cta-buttons">
          <button class="btn-primary">
            <span class="btn-text">무료 샘플 테스트 신청</span>
            <span class="btn-icon">→</span>
          </button>
          <button class="btn-secondary">
            <span class="btn-text">맞춤 견적 문의</span>
            <span class="btn-icon">→</span>
          </button>
        </div>

        <!-- 특징 하이라이트 -->
        <div class="features-highlight">
          <div class="feature-item">
            <span class="feature-number">1일</span>
            <span class="feature-label">1만장 처리</span>
          </div>
          <div class="feature-item">
            <span class="feature-number">1/10</span>
            <span class="feature-label">비용 절감</span>
          </div>
          <div class="feature-item">
            <span class="feature-number">PNG/JPG</span>
            <span class="feature-label">단일 이미지</span>
          </div>
        </div>
      </div>

      <!-- 비주얼 영역 -->
      <div class="hero-visual">
        <div class="visual-container">
          <!-- 웹툰 컷 프레임들 -->
          <div class="webtoon-cuts">
            <div class="cut-item cut-1">
              <div class="cut-image"></div>
              <div class="cut-label">원본</div>
            </div>
            <div class="cut-item cut-2">
              <div class="cut-image"></div>
              <div class="cut-label">클리닝</div>
            </div>
            <div class="cut-item cut-3">
              <div class="cut-image"></div>
              <div class="cut-label">번역</div>
            </div>
            <div class="cut-item cut-4">
              <div class="cut-image"></div>
              <div class="cut-label">식자</div>
            </div>
          </div>
          
          <!-- 프로세스 화살표 -->
          <div class="process-arrows">
            <div class="arrow arrow-1">→</div>
            <div class="arrow arrow-2">→</div>
            <div class="arrow arrow-3">→</div>
          </div>
        </div>
        
        <!-- 설명 말풍선 -->
        <div class="description-bubble">
          <div class="bubble-content">
            <span class="bubble-icon">✨</span>
            <span class="bubble-text">텍스트 클리닝부터 번역, 식자까지<br>Nemoa로 한번에!</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 저작권 경고 문구 -->
    <div class="copyright-warning">
      <div class="warning-content">
        <span class="warning-icon">⚠️</span>
        <span class="warning-text">창작 생태계 보호를 위해, 저작권을 보유하지 않은 개인 및 단체에게는 서비스를 제공하지 않습니다.</span>
      </div>
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
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: $color-white;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px $gutter 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    min-height: 100vh;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .brand-section {
    .brand-title {
      font-family: $font-main;
      font-size: 4rem;
      font-weight: 900;
      margin: 0 0 8px 0;
      background: linear-gradient(135deg, $color-mint 0%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.02em;
      line-height: 1;
    }

    .brand-subtitle {
      font-size: 18px;
      color: $color-mint;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  }

  .main-title {
    font-family: $font-main;
    font-size: 64px;
    font-weight: 700;
    line-height: 1.1;
    margin: 0;
    color: $color-white;
  }

  .hero-description {
    font-size: 20px;
    line-height: 1.6;
    color: #e0e0e0;
    margin: 0;
  }

  .cta-buttons {
    display: flex;
    gap: 20px;
    margin-top: 8px;

    button {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 16px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      .btn-text {
        z-index: 2;
        position: relative;
      }

      .btn-icon {
        z-index: 2;
        position: relative;
        transition: transform 0.3s ease;
      }

      &:hover .btn-icon {
        transform: translateX(4px);
      }
    }

    .btn-primary {
      background: linear-gradient(135deg, $color-mint 0%, #7dd3a0 100%);
      color: $color-black;
      box-shadow: 0 8px 32px rgba(166, 240, 211, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 40px rgba(166, 240, 211, 0.4);
      }
    }

    .btn-secondary {
      background: transparent;
      color: $color-white;
      border: 2px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: $color-mint;
        color: $color-mint;
      }
    }
  }

  .features-highlight {
    display: flex;
    gap: 40px;
    margin-top: 16px;

    .feature-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .feature-number {
        font-size: 32px;
        font-weight: 900;
        color: $color-mint;
        line-height: 1;
        margin-bottom: 4px;
      }

      .feature-label {
        font-size: 14px;
        color: #b0b0b0;
        font-weight: 500;
      }
    }
  }

  .hero-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .visual-container {
      position: relative;
      margin-bottom: 40px;
    }

    .webtoon-cuts {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 20px;

      .cut-item {
        width: 140px;
        height: 140px;
        position: relative;
        opacity: 0;
        animation: fadeInUp 0.8s ease forwards;

        .cut-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, $color-mint 0%, #7dd3a0 100%);
          border-radius: 16px;
          position: relative;
          overflow: hidden;

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 8px;
          }
        }

        .cut-label {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 14px;
          font-weight: 600;
          color: $color-mint;
          text-align: center;
        }

        &.cut-1 { animation-delay: 0.1s; }
        &.cut-2 { animation-delay: 0.3s; }
        &.cut-3 { animation-delay: 0.5s; }
        &.cut-4 { animation-delay: 0.7s; }
      }
    }

    .process-arrows {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 300px;

      .arrow {
        font-size: 24px;
        color: $color-mint;
        opacity: 0;
        animation: fadeIn 0.5s ease forwards;
        animation-delay: 1s;
      }
    }

    .description-bubble {
      background: rgba(255, 255, 255, 0.95);
      color: $color-black;
      padding: 20px 24px;
      border-radius: 20px;
      position: relative;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      max-width: 280px;
      text-align: center;

      .bubble-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        .bubble-icon {
          font-size: 20px;
        }

        .bubble-text {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }
      }

      &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent rgba(255, 255, 255, 0.95) transparent;
      }
    }
  }

  .copyright-warning {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 193, 7, 0.1);
    border: 1px solid rgba(255, 193, 7, 0.3);
    border-radius: 12px;
    padding: 16px 24px;
    backdrop-filter: blur(10px);

    .warning-content {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      color: #ffc107;
      font-weight: 500;
      text-align: center;
      white-space: nowrap;

      .warning-icon {
        font-size: 16px;
        flex-shrink: 0;
      }
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .hero .container {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  .hero .main-title {
    font-size: 48px;
  }

  .hero .features-highlight {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero .container {
    padding: 60px $gutter 100px;
  }

  .hero .brand-section .brand-title {
    font-size: 3rem;
  }

  .hero .main-title {
    font-size: 40px;
  }

  .hero .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero .features-highlight {
    flex-direction: column;
    gap: 20px;
  }

  .hero .webtoon-cuts {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    .cut-item {
      width: 120px;
      height: 120px;
    }
  }

  .hero .copyright-warning {
    bottom: 20px;
    padding: 12px 20px;
    max-width: 90%;

    .warning-content {
      font-size: 13px;
      white-space: normal;
      text-align: center;
    }
  }
}
</style>