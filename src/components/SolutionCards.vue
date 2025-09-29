<template>
  <section class="solution">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">네모아가 해결합니다</h2>
        <p class="section-subtitle">AI와 사람의 협업으로 완성하는 웹툰 현지화 솔루션</p>
      </div>
      
      <div class="solutions-grid">
        <div class="solution-card" v-for="(item, index) in solutions" :key="index">
          <div class="card-header">
            <div class="solution-icon" :class="item.iconClass">
              <template v-if="index === 0">
                <div class="format-icons">
                  <img :src="item.icon1" alt="PNG" class="format-icon" />
                  <img :src="item.icon2" alt="JPG" class="format-icon" />
                </div>
              </template>
              <template v-else>
                <img :src="getIconSrc(item)" :alt="item.title" class="solution-image" />
              </template>
            </div>
            <div class="icon-badge" :class="item.badgeClass">
              <span class="badge-text">{{ item.badge }}</span>
            </div>
          </div>
          
          <div class="card-content">
            <h3 class="solution-title">{{ item.title }}</h3>
            <p class="solution-description">{{ item.desc }}</p>
            <div class="solution-features">
              <span class="feature-tag" v-for="feature in item.features" :key="feature">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import iconPng from '@/assets/images/icon-png.svg'
import iconJpg from '@/assets/images/icon-jpg.svg'
import iconAiHuman from '@/assets/images/icon-ai-human.svg'
import iconServerProcessing from '@/assets/images/icon-server-processing.svg'
import iconCostComparison from '@/assets/images/icon-cost-comparison.svg'

export default {
  methods: {
    getIconSrc(item) {
      return item.iconSrc || '';
    }
  },
  data() {
    return {
      solutions: [
        { 
          iconClass: 'image-icon',
          icon1: iconPng,
          icon2: iconJpg,
          title: '단일 이미지 지원', 
          desc: 'PNG·JPG 등 단일 이미지로 작업',
          badge: 'NEW',
          badgeClass: 'badge-new',
          features: ['PNG 지원', 'JPG 지원', '간편 업로드']
        },
        { 
          iconClass: 'ai-icon',
          iconSrc: iconAiHuman,
          title: 'AI+Human 협업', 
          desc: '속도와 품질의 완벽 균형',
          badge: 'HOT',
          badgeClass: 'badge-hot',
          features: ['AI 자동화', '인간 검수', '품질 보장']
        },
        { 
          iconClass: 'volume-icon',
          iconSrc: iconServerProcessing,
          title: '대용량 처리', 
          desc: '1일 1만 장(컷) 이상 처리',
          badge: 'FAST',
          badgeClass: 'badge-fast',
          features: ['고속 처리', '클라우드 기반', '확장 가능']
        },
        { 
          iconClass: 'cost-icon',
          iconSrc: iconCostComparison,
          title: '파격 가성비', 
          desc: '기존 대비 1/10 비용',
          badge: 'SAVE',
          badgeClass: 'badge-save',
          features: ['80% 절감', '투명한 가격', '무료 샘플']
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.solution {
  background: linear-gradient(135deg, $color-mint 0%, #7dd3a0 100%);
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
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
      color: rgba(27, 27, 27, 0.8);
      margin: 0;
      font-weight: 400;
    }
  }

  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .solution-card {
    background: $color-white;
    border-radius: 24px;
    padding: 40px;
    position: relative;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, $color-mint 0%, #7dd3a0 100%);
    }

    &:hover {
      transform: translateY(-12px);
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.15);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 32px;

      .solution-icon {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: all 0.3s ease;

        &.image-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
        }

        &.ai-icon {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          box-shadow: 0 8px 24px rgba(240, 147, 251, 0.3);
        }

        &.volume-icon {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          box-shadow: 0 8px 24px rgba(79, 172, 254, 0.3);
        }

        &.cost-icon {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          box-shadow: 0 8px 24px rgba(67, 233, 123, 0.3);
        }

        .format-icons {
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: center;

          .format-icon {
            width: 32px;
            height: 32px;
            object-fit: contain;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          }
        }

        .solution-image {
          width: 48px;
          height: 48px;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }
      }

      .icon-badge {
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;

        &.badge-new {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        &.badge-hot {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        &.badge-fast {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }

        &.badge-save {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          color: white;
        }
      }
    }

    .card-content {
      .solution-title {
        font-size: 24px;
        font-weight: 700;
        color: $color-black;
        margin: 0 0 16px 0;
        line-height: 1.2;
      }

      .solution-description {
        font-size: 16px;
        color: #666;
        line-height: 1.6;
        margin: 0 0 24px 0;
        font-weight: 400;
      }

      .solution-features {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .feature-tag {
          background: rgba(166, 240, 211, 0.1);
          color: $color-black;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid rgba(166, 240, 211, 0.2);
        }
      }
    }

    &:hover .solution-icon {
      transform: scale(1.1);
    }
  }
}

@media (max-width: 1024px) {
  .solution {
    padding: 100px 0;

    .section-header .section-title {
      font-size: 40px;
    }

    .solutions-grid {
      grid-template-columns: 1fr;
      gap: 32px;
      max-width: 600px;
    }

    .solution-card {
      padding: 32px 24px;
    }
  }
}

@media (max-width: 768px) {
  .solution {
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

    .solution-card {
      padding: 24px 20px;

      .card-header {
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;

        .solution-icon {
          width: 64px;
          height: 64px;

          .format-icons .format-icon {
            width: 24px;
            height: 24px;
          }

          .solution-image {
            width: 36px;
            height: 36px;
          }
        }
      }

      .card-content {
        text-align: center;

        .solution-title {
          font-size: 20px;
        }

        .solution-description {
          font-size: 15px;
        }

        .solution-features {
          justify-content: center;
        }
      }
    }
  }
}
</style>
