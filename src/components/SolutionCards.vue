<template>
  <section class="solution">
    <div class="container">
      <h2>네모아가 해결합니다</h2>
      <div class="cards">
        <div class="card" v-for="(item, index) in solutions" :key="index">
          <div class="icon" :class="item.iconClass">
            <template v-if="index === 0">
              <img :src="item.icon1" alt="PNG" class="format-icon" />
              <img :src="item.icon2" alt="JPG" class="format-icon" />
            </template>
            <template v-else>
              <img :src="getIconSrc(item)" :alt="item.title" class="solution-icon" />
            </template>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
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
          desc: 'PNG·JPG 등 단일 이미지로 작업' 
        },
        { 
          iconClass: 'ai-icon',
          iconSrc: iconAiHuman,
          title: 'AI+Human 협업', 
          desc: '속도와 품질의 완벽 균형' 
        },
        { 
          iconClass: 'volume-icon',
          iconSrc: iconServerProcessing,
          title: '대용량 처리', 
          desc: '1일 1만 장(컷) 이상 처리' 
        },
        { 
          iconClass: 'cost-icon',
          iconSrc: iconCostComparison,
          title: '파격 가성비', 
          desc: '기존 대비 1/10 비용' 
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;

.solution {
  background: $color-mint;
  padding: 80px 0;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: $color-black;
    margin-bottom: 40px;
  }
  
  .cards {
    display: flex;
    gap: 24px;
    margin-top: 40px;
    
    .card {
      background: $color-white;
      padding: 32px 20px;
      border-radius: 12px;
      flex: 1;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }
      
      .icon {
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        div {
          transition: transform 0.3s ease;
          
          img {
            transition: transform 0.3s ease;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          }
        }
        
        .format-icon {
          width: 96px;
          height: 96px;
          margin: 0 8px;
        }
        .solution-icon {
          width: 96px;
          height: 96px;
          object-fit: contain;
        }
      }
      
      &:hover .icon div {
        transform: scale(1.1);
      }
      
      h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: $color-black;
        margin-bottom: 12px;
      }
      
      p {
        font-size: 0.95rem;
        color: #666;
        line-height: 1.5;
        margin: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .solution {
    padding: 60px 0;
    
    h2 {
      font-size: 2rem;
      margin-bottom: 32px;
    }
    
    .cards {
      flex-direction: column;
      gap: 16px;
      
      .card {
        padding: 24px 16px;
        
        h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
