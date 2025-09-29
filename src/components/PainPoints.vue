<template>
  <section class="pain-points">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">글로벌 독자를 만나기 전,<br>이런 문제 겪고 있지 않으신가요?</h2>
        <p class="section-subtitle">웹툰 현지화 과정에서 마주치는 주요 어려움들</p>
      </div>
      
      <div class="points-grid">
        <div class="point-card">
          <div class="point-icon">
            <div class="icon-wrapper speed-icon">
              <span class="icon-emoji">⏱️</span>
            </div>
          </div>
          <div class="point-content">
            <h3 class="point-title">속도</h3>
            <p class="point-description">수작업 번역·식자, 하루 몇 회차가 한계</p>
          </div>
        </div>
        
        <div class="point-card">
          <div class="point-icon">
            <div class="icon-wrapper format-icon">
              <div class="format-icons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" class="psd-icon" />
                <img src="@/assets/images/icon_clip.svg" alt="Clip Studio Paint" class="clip-icon" />
              </div>
            </div>
          </div>
          <div class="point-content">
            <h3 class="point-title">포맷</h3>
            <p class="point-description">PSD·CLIP 등 무거운 레이어 파일 필수</p>
          </div>
        </div>
        
        <div class="point-card">
          <div class="point-icon">
            <div class="icon-wrapper cost-icon">
              <span class="icon-emoji">💰</span>
            </div>
          </div>
          <div class="point-content">
            <h3 class="point-title">비용</h3>
            <p class="point-description">인건비와 시간 소모로 인한 부담</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PainPoints"
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.pain-points {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 120px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23a6f0d3" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23a6f0d3" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23a6f0d3" opacity="0.05"/><circle cx="10" cy="60" r="0.5" fill="%23a6f0d3" opacity="0.05"/><circle cx="90" cy="40" r="0.5" fill="%23a6f0d3" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .section-header {
    text-align: center;
    margin-bottom: 80px;

    .section-title {
      font-size: 48px;
      font-weight: 700;
      color: $color-black;
      margin: 0 0 20px 0;
      line-height: 1.2;
    }

    .section-subtitle {
      font-size: 20px;
      color: #666;
      margin: 0;
      font-weight: 400;
    }
  }

  .points-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .point-card {
    background: $color-white;
    border-radius: 24px;
    padding: 48px 32px;
    text-align: center;
    position: relative;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(166, 240, 211, 0.1);
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, $color-mint 0%, #7dd3a0 100%);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);

      &::before {
        transform: scaleX(1);
      }

      .point-icon .icon-wrapper {
        transform: scale(1.1);
      }
    }

    .point-icon {
      margin-bottom: 32px;

      .icon-wrapper {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        position: relative;

        &.speed-icon {
          background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
          box-shadow: 0 8px 24px rgba(255, 107, 107, 0.3);
        }

        &.format-icon {
          background: linear-gradient(135deg, #4ecdc4 0%, #6dd5ed 100%);
          box-shadow: 0 8px 24px rgba(78, 205, 196, 0.3);
        }

        &.cost-icon {
          background: linear-gradient(135deg, #ffd93d 0%, #ffed4e 100%);
          box-shadow: 0 8px 24px rgba(255, 217, 61, 0.3);
        }

        .icon-emoji {
          font-size: 32px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .format-icons {
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: center;

          .psd-icon {
            width: 32px;
            height: 32px;
            object-fit: contain;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
            transition: transform 0.3s ease;

            &:hover {
              transform: scale(1.1);
            }
          }

          .clip-icon {
            width: 36px;
            height: 36px;
            object-fit: contain;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
            transition: transform 0.3s ease;

            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }

    .point-content {
      .point-title {
        font-size: 24px;
        font-weight: 700;
        color: $color-black;
        margin: 0 0 16px 0;
        line-height: 1.2;
      }

      .point-description {
        font-size: 16px;
        color: #666;
        line-height: 1.6;
        margin: 0;
        font-weight: 400;
      }
    }
  }
}

@media (max-width: 1024px) {
  .pain-points {
    padding: 100px 0;

    .section-header .section-title {
      font-size: 40px;
    }

    .points-grid {
      grid-template-columns: 1fr;
      gap: 32px;
      max-width: 600px;
    }

    .point-card {
      padding: 40px 24px;
    }
  }
}

@media (max-width: 768px) {
  .pain-points {
    padding: 80px 0;

    .section-header {
      margin-bottom: 60px;

      .section-title {
        font-size: 32px;
      }

      .section-subtitle {
        font-size: 18px;
      }
    }

    .point-card {
      padding: 32px 20px;

      .point-icon .icon-wrapper {
        width: 64px;
        height: 64px;

        .icon-emoji {
          font-size: 24px;
        }

        .format-icons {
          .psd-icon {
            width: 24px;
            height: 24px;
          }

          .clip-icon {
            width: 28px;
            height: 28px;
          }
        }
      }

      .point-content {
        .point-title {
          font-size: 20px;
        }

        .point-description {
          font-size: 15px;
        }
      }
    }
  }
}
</style>