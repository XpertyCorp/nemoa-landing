<template>
  <section class="pain-points">
    <div class="container">
      <h2>글로벌 독자를 만나기 전, 이런 문제 겪고 있지 않으신가요?</h2>
      <div class="points">
        <div class="point">
          <div class="icon speed-icon">⏱️</div>
          <h3>속도</h3>
          <p>수작업 번역·식자, 하루 몇 회차가 한계</p>
        </div>
        <div class="point">
          <div class="icon file-icon">
            <div class="format-icons">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" class="psd-icon" />
              <img src="@/assets/images/icon_clip.svg" alt="Clip Studio Paint" class="clip-icon" />
            </div>
          </div>
          <h3>포맷</h3>
          <p>PSD·CLIP 등 무거운 레이어 파일 필수</p>
        </div>
        <div class="point">
          <div class="icon cost-icon">💰</div>
          <h3>비용</h3>
          <p>인건비와 시간 소모로 인한 부담</p>
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
  background: $color-warmwhite;
  padding: 80px 0;
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
  .points {
    display: flex;
    gap: 24px;
    justify-content: center;
    .point {
      background: $color-white;
      padding: 32px 20px;
      border-radius: 12px;
      text-align: center;
      flex: 1;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }
      
      .icon {
        font-size: 2.5rem;
        margin-bottom: 16px;
        display: block;
        
        .format-icons {
          display: flex;
          gap: 12px;
          justify-content: center;
          align-items: center;
          
          .psd-icon {
            width: 52px;
            height: 52px;
            min-width: 52px;
            min-height: 52px;
            max-width: 52px;
            max-height: 52px;
            object-fit: contain;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
            transition: transform 0.3s ease;
            
            &:hover {
              transform: scale(1.1);
            }
          }
          
          .clip-icon {
            width: 60px;
            height: 60px;
            min-width: 60px;
            min-height: 60px;
            max-width: 60px;
            max-height: 60px;
            object-fit: contain;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
            transition: transform 0.3s ease;
            
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
      
      h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: $color-black;
        margin: 0 0 12px 0;
        min-height: 1.5rem; // 제목 높이 고정
      }
      
      p {
        font-size: 0.95rem;
        color: #666;
        line-height: 1.5;
        margin: 0;
        min-height: 2.25rem; // 2줄 높이로 고정
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 768px) {
  .pain-points {
    padding: 60px 0;
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 32px;
    }
    
    .points {
      flex-direction: column;
      gap: 16px;
      
      .point {
        padding: 24px 16px;
        
        .icon {
          font-size: 2rem;
          margin-bottom: 12px;
          
          .format-icons {
            gap: 8px;
            
            .psd-icon {
              width: 36px; // 52px * 0.7
              height: 36px; // 52px * 0.7
              min-width: 36px;
              min-height: 36px;
              max-width: 36px;
              max-height: 36px;
            }
            
            .clip-icon {
              width: 42px; // 60px * 0.7
              height: 42px; // 60px * 0.7
              min-width: 42px;
              min-height: 42px;
              max-width: 42px;
              max-height: 42px;
            }
          }
        }
        
        h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
          min-height: 1.3rem; // 모바일 제목 높이 고정
        }
        
        p {
          font-size: 0.9rem;
          min-height: 2rem; // 모바일에서도 높이 고정
        }
      }
    }
  }
}
</style>