<template>
  <section class="comparison">
    <div class="container">
      <h2>가성비 비교</h2>
      <p class="subtitle">기존 방식과 네모아의 차이를 한눈에 확인하세요</p>
      
      <div class="comparison-cards">
        <!-- 기존 방식 카드 -->
        <div class="comparison-card existing">
          <div class="card-header">
            <h3>기존 프로세스<br><span class="sub-text"></span></h3>
            <div class="price-tag high">노동집약(느림) / 고비용 / 레이어 포맷 필수 / 비효율</div>
          </div>
          <div class="features">
            <div class="feature">
              <div class="feature-icon">🐌</div>
              <div class="feature-content">
                <h4>처리 속도</h4>
                <p>1회차당 3~4일 소요 / 1인 프리랜서 기준</p>
                <p>(작업자별 편차 존재)</p>
              </div>
            </div>
            <div class="feature">
              <div class="feature-icon cost-up">
                <span class="money-icon">💰</span>
                <span class="arrow-up">↗</span>
              </div>
              <div class="feature-content">
                <h4>비용</h4>
                <p>1회차당 수십만원 이상</p>
                <p>(개인, 업체에 따라 다름)</p>
              </div>
            </div>
            <div class="feature">
              <div class="feature-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" style="width: 24px; height: 24px; object-fit: contain;" />
              </div>
              <div class="feature-content">
                <h4>파일 요구사항</h4>
                <p>PSD·CLIP 등 레이어 포맷 필수</p>
                <p></p>
              </div>
            </div>
            <div class="feature">
              <div class="feature-icon">⚠️</div>
              <div class="feature-content">
                <h4>품질 보장</h4>
                <p>작업자, 업체별 편차 존재</p>
              </div>
            </div>
          </div>
        </div>

        <!-- VS 표시 -->
        <div class="vs-divider">
          <div class="vs-text">VS</div>
        </div>

        <!-- 네모아 카드 -->
        <div class="comparison-card nemoa">
          <div class="card-header">
            <h3>Nemoa AI</h3>
            <div class="price-tag low">대용량 처리(빠름) / 저비용 / 단일이미지 포맷 / 가성비</div>
            <div class="badge">추천</div>
          </div>
          <div class="features">
            <div class="feature">
              <div class="feature-icon">🚀</div>
              <div class="feature-content">
                <h4>처리 속도</h4>
                <p>1일 100회차 이상 / 단위 처리량 기준</p>
                <span class="improvement">300~400배 빠름</span>
              </div>
            </div>
            <div class="feature">
              <div class="feature-icon cost-down">
                <span class="money-icon">💰</span>
                <span class="arrow-down">↘</span>
              </div>
              <div class="feature-content">
                <h4>비용</h4>
                <p>1회차당 가격 1/5 이하</p>
                <span class="improvement">80% 이상 절감</span>
              </div>
            </div>
            <div class="feature">
              <div class="feature-icon">
                <img src="@/assets/images/icon-jpg_2.svg" alt="JPG" style="width: 42px; height: 42px; object-fit: contain;" />
              </div>
              <div class="feature-content">
                <h4>파일 요구사항</h4>
                <p>PNG·JPG 단일 이미지만으로 가능</p>
                <span class="improvement">간편함</span>
              </div>
            </div>
            <div class="feature">
              <div class="feature-icon">✅</div>
              <div class="feature-content">
                <h4>품질 보장</h4>
                <p>100% AI+전문 검수</p>
                <span class="improvement">일관성</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ComparisonTable"
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.comparison {
  background: $color-warmwhite;
  padding: 80px 0;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: $color-black;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 60px;
  }
  
  .comparison-cards {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 40px;
    align-items: start;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .comparison-card {
    background: $color-white;
    border-radius: 20px;
    padding: 40px 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    &.existing {
      border: 2px solid #e0e0e0;
    }
    
    &.nemoa {
      border: 2px solid $color-mint;
      background: linear-gradient(135deg, $color-white 0%, lighten($color-mint, 30%) 100%);
    }
  }
  
  .card-header {
    text-align: center;
    margin-bottom: 30px;
    position: relative;
    
    h3 {
      font-size: 1.8rem;
      margin-bottom: 10px;
      color: $color-black;
      
      .sub-text {
        font-size: 0.9rem;
        color: #666;
        font-weight: normal;
      }
    }
    
    .price-tag {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 0.9rem;
      
      &.high {
        background: #ffebee;
        color: #d32f2f;
      }
      
      &.low {
        background: $color-mint;
        color: $color-black;
      }
    }
    
    .badge {
      position: absolute;
      top: -10px;
      right: -10px;
      background: #ff6b6b;
      color: white;
      padding: 6px 12px;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: bold;
      transform: rotate(15deg);
    }
  }
  
  .vs-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    
    .vs-text {
      background: $color-black;
      color: $color-white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }
  
  .features {
    .feature {
      display: flex;
      align-items: flex-start;
      margin-bottom: 25px;
      text-align: left;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      .feature-icon {
        font-size: 2rem;
        margin-right: 15px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        
        &.cost-up, &.cost-down {
          flex-direction: row;
          gap: 4px;
          width: 70px;
          height: 48px;
          
          .money-icon {
            font-size: 1.8rem;
          }
          
          .arrow-up, .arrow-down {
            font-size: 1.6rem;
            font-weight: bold;
            line-height: 1;
            align-self: center;
          }
          
          .arrow-up {
            color: #ff4444;
          }
          
          .arrow-down {
            color: #4CAF50;
          }
        }
      }
      
      .feature-content {
        flex: 1;
        
        h4 {
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: $color-black;
        }
        
        p {
          color: #666;
          margin-bottom: 5px;
          font-size: 0.95rem;
        }
        
        .improvement {
          display: inline-block;
          background: $color-mint;
          color: $color-black;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: bold;
        }
      }
    }
  }
  
  // 반응형 디자인
  @media (max-width: 768px) {
    .comparison-cards {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    
    .vs-divider {
      order: -1;
      height: auto;
      
      .vs-text {
        width: 50px;
        height: 50px;
        font-size: 1rem;
      }
    }
    
    .comparison-card {
      padding: 30px 20px;
    }
    
    h2 {
      font-size: 2rem;
    }
  }
}
</style>