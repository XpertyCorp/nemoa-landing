# Nemoa AI Landing Page - Figma 디자인 스펙

## 🎨 전체 디자인 시스템

### 컬러 팔레트
- **Primary Black**: `#1B1B1B` - 메인 배경, 텍스트
- **Mint Green**: `#A6F0D3` - 브랜드 컬러, CTA 버튼
- **White**: `#FFFFFF` - 카드 배경, 텍스트
- **Warm White**: `#FDFCF9` - 섹션 배경
- **Warning Yellow**: `#FFC107` - 경고 메시지

### 타이포그래피
- **Primary Font**: Pretendard (한글 최적화)
- **Secondary Font**: Inter (영문)
- **Brand Title**: 56px, 900 weight, Gradient (Mint → White)
- **Hero Title**: 56px, 700 weight
- **Section Title**: 40px, 700 weight
- **Card Title**: 20px, 700 weight
- **Body Text**: 16px, 400 weight
- **Small Text**: 14px, 400 weight

### 레이아웃
- **Container Width**: 1200px (데스크톱)
- **Gutter**: 24px
- **Grid System**: 12-column grid
- **Breakpoints**: 768px (모바일), 1024px (태블릿)

---

## 📱 페이지 구조 (상단부터 하단까지)

### 1. Hero Section
**배경**: `#1B1B1B` (검은색)
**레이아웃**: 2-column grid (6:6)

#### 좌측 텍스트 영역
- **Brand Title**: "Nemoa" (56px, Gradient)
- **Hero Title**: "네모 속 이야기를, 함께 모아" (56px, 흰색)
- **Subtitle**: "AI의 속도와 사람의 섬세함으로..." (20px, 회색)
- **CTA Buttons**: 
  - Primary: "무료 샘플 테스트 신청" (민트 배경, 검은 텍스트)
  - Secondary: "맞춤 견적 문의" (투명 배경, 민트 테두리)

#### 우측 비주얼 영역
- **Cut Frame**: 2x2 그리드 (120px x 120px 각각)
  - Cut 1: "원본 이미지" (민트 배경)
  - Cut 2: "클리닝 비디오" (민트 배경)
  - Cut 3: "번역 비디오" (민트 배경)
  - Cut 4: "식자 비디오" (민트 배경)
- **Speech Bubble**: "텍스트 클리닝부터..." (흰 배경, 검은 텍스트)

#### 하단 경고 메시지
- **배경**: 노란색 반투명 (rgba(255, 193, 7, 0.1))
- **테두리**: 노란색 (rgba(255, 193, 7, 0.3))
- **텍스트**: "⚠️ 창작 생태계 보호를 위해..." (15px, 노란색)

### 2. Pain Points Section
**배경**: `#FDFCF9` (따뜻한 흰색)
**레이아웃**: 3-column grid

#### 섹션 제목
- "글로벌 독자를 만나기 전, 이런 문제 겪고 있지 않으신가요?" (40px, 중앙 정렬)

#### 3개 카드
**카드 배경**: `#FFFFFF` (흰색)
**카드 그림자**: `0 4px 12px rgba(0, 0, 0, 0.1)`
**카드 패딩**: 32px 20px
**카드 둥근 모서리**: 12px

1. **속도 카드**
   - 아이콘: ⏱️ (2.5rem)
   - 제목: "속도" (20px, 700 weight)
   - 설명: "수작업 번역·식자, 하루 몇 회차가 한계" (16px)

2. **포맷 카드**
   - 아이콘: PSD + CLIP Studio 아이콘 (52px + 60px)
   - 제목: "포맷" (20px, 700 weight)
   - 설명: "PSD·CLIP 등 무거운 레이어 파일 필수" (16px)

3. **비용 카드**
   - 아이콘: 💰 (2.5rem)
   - 제목: "비용" (20px, 700 weight)
   - 설명: "인건비와 시간 소모로 인한 부담" (16px)

### 3. Solution Cards Section
**배경**: `#A6F0D3` (민트 그린)
**레이아웃**: 4-column grid

#### 섹션 제목
- "네모아가 해결합니다" (40px, 검은색, 중앙 정렬)

#### 4개 카드
**카드 배경**: `#FFFFFF` (흰색)
**카드 그림자**: `0 4px 12px rgba(0, 0, 0, 0.1)`
**카드 패딩**: 32px 20px
**카드 둥근 모서리**: 12px

1. **단일 이미지 지원 카드**
   - 아이콘: PNG + JPG 아이콘 (96px x 2개)
   - 제목: "단일 이미지 지원" (20px, 700 weight)
   - 설명: "PNG·JPG 등 단일 이미지로 작업" (16px)

2. **AI+Human 협업 카드**
   - 아이콘: AI+Human 일러스트 (96px)
   - 제목: "AI+Human 협업" (20px, 700 weight)
   - 설명: "속도와 품질의 완벽 균형" (16px)

3. **대용량 처리 카드**
   - 아이콘: 서버 처리 일러스트 (96px)
   - 제목: "대용량 처리" (20px, 700 weight)
   - 설명: "1일 1만 장(컷) 이상 처리" (16px)

4. **파격 가성비 카드**
   - 아이콘: 비용 비교 일러스트 (96px)
   - 제목: "파격 가성비" (20px, 700 weight)
   - 설명: "기존 대비 1/10 비용" (16px)

### 4. Workflow Section
**배경**: `#FFFFFF` (흰색)
**레이아웃**: 4-column grid

#### 섹션 제목
- "4단계 간편 프로세스" (40px, 중앙 정렬)

#### 4개 프로세스 카드
**카드 배경**: `#FDFCF9` (따뜻한 흰색)
**카드 패딩**: 24px
**카드 둥근 모서리**: 8px

1. **텍스트 클리닝**
   - 제목: "텍스트 클리닝" (18px, 700 weight)
   - 설명: "대사·SFX 삭제<br>말풍선 삭제(선택)" (14px)

2. **텍스트 추출(OCR)**
   - 제목: "텍스트 추출(OCR)" (18px, 700 weight)
   - 설명: "이미지 속 텍스트를 추출하여<br>편집 가능한 문서로 제공" (14px)

3. **텍스트 번역**
   - 제목: "텍스트 번역" (18px, 700 weight)
   - 설명: "AI 기반 다국어 번역" (14px)

4. **텍스트 식자**
   - 제목: "텍스트 식자" (18px, 700 weight)
   - 설명: "원본 스타일을 반영해<br>번역 텍스트 배치" (14px)

### 5. Comparison Table Section
**배경**: `#FDFCF9` (따뜻한 흰색)
**레이아웃**: 2-column grid

#### 섹션 제목
- "기존 방식 vs 네모아" (40px, 중앙 정렬)

#### 좌측 카드 (기존 방식)
**카드 배경**: `#FFFFFF` (흰색)
**카드 제목**: "기존 방식" (24px, 700 weight)
**카드 패딩**: 32px

**특징들:**
1. **파일 요구사항**: PSD 아이콘 + "PSD·CLIP 등 레이어 포맷 필수"
2. **비용**: 💰↗ (돈가방 + 위쪽 빨간 화살표) + "1회차당 수십만원 이상"

#### 우측 카드 (네모아)
**카드 배경**: `#A6F0D3` (민트 그린)
**카드 제목**: "네모아" (24px, 700 weight)
**카드 패딩**: 32px

**특징들:**
1. **파일 요구사항**: JPG 아이콘 + "PNG·JPG 단일 이미지만으로 가능"
2. **비용**: 💰↘ (돈가방 + 아래쪽 초록 화살표) + "1회차당 가격 1/5 이하"

### 6. Case Studies Section
**배경**: `#FFFFFF` (흰색)
**레이아웃**: 3-column grid

#### 섹션 제목
- "성공 사례" (40px, 중앙 정렬)

#### 3개 사례 카드
**카드 배경**: `#FDFCF9` (따뜻한 흰색)
**카드 패딩**: 24px
**카드 둥근 모서리**: 8px

1. **웹툰 A**
   - 제목: "웹툰 A" (18px, 700 weight)
   - 설명: "1일 1만장 처리 완료" (14px)

2. **웹툰 B**
   - 제목: "웹툰 B" (18px, 700 weight)
   - 설명: "비용 80% 절감" (14px)

3. **웹툰 C**
   - 제목: "웹툰 C" (18px, 700 weight)
   - 설명: "품질 향상 확인" (14px)

### 7. Process Steps Section
**배경**: `#A6F0D3` (민트 그린)
**레이아웃**: 3-column grid

#### 섹션 제목
- "시작하기" (40px, 중앙 정렬)

#### 3개 단계 카드
**카드 배경**: `#FFFFFF` (흰색)
**카드 패딩**: 24px
**카드 둥근 모서리**: 8px

1. **1단계**
   - 제목: "1단계" (18px, 700 weight)
   - 설명: "문의하기" (14px)

2. **2단계**
   - 제목: "2단계" (18px, 700 weight)
   - 설명: "샘플 테스트" (14px)

3. **3단계**
   - 제목: "3단계" (18px, 700 weight)
   - 설명: "서비스 시작" (14px)

### 8. Final CTA Section
**배경**: `#1B1B1B` (검은색)
**레이아웃**: 중앙 정렬

#### CTA 내용
- **제목**: "지금 시작하세요" (40px, 흰색)
- **설명**: "무료 샘플 테스트로 경험해보세요" (20px, 회색)
- **버튼**: "무료 샘플 테스트 신청" (민트 배경, 검은 텍스트)

---

## 📱 반응형 디자인

### 모바일 (768px 이하)
- **Hero Section**: 1-column 레이아웃
- **Pain Points**: 1-column 레이아웃
- **Solution Cards**: 1-column 레이아웃
- **Workflow**: 1-column 레이아웃
- **Comparison Table**: 1-column 레이아웃
- **Case Studies**: 1-column 레이아웃
- **Process Steps**: 1-column 레이아웃

### 태블릿 (1024px 이하)
- **Hero Section**: 1-column 레이아웃
- **Pain Points**: 1-column 레이아웃
- **Solution Cards**: 2-column 레이아웃
- **Workflow**: 2-column 레이아웃
- **Comparison Table**: 1-column 레이아웃
- **Case Studies**: 2-column 레이아웃
- **Process Steps**: 2-column 레이아웃

---

## 🎨 Figma 설정 가이드

### 1. 아트보드 설정
- **데스크톱**: 1440px x 1024px
- **태블릿**: 768px x 1024px
- **모바일**: 375px x 812px

### 2. 그리드 시스템
- **Column Count**: 12
- **Gutter**: 24px
- **Margin**: 24px

### 3. 컴포넌트 생성
- **Button Primary**: 민트 배경, 검은 텍스트
- **Button Secondary**: 투명 배경, 민트 테두리
- **Card**: 흰 배경, 그림자, 둥근 모서리
- **Icon**: 96px x 96px, 중앙 정렬

### 4. 스타일 가이드
- **컬러 스타일**: 위의 컬러 팔레트 사용
- **텍스트 스타일**: 위의 타이포그래피 사용
- **그림자 스타일**: `0 4px 12px rgba(0, 0, 0, 0.1)`

---

## 📋 체크리스트

### 필수 요소
- [ ] 모든 섹션의 레이아웃 구현
- [ ] 컬러 팔레트 적용
- [ ] 타이포그래피 스타일 적용
- [ ] 아이콘 및 일러스트 배치
- [ ] 반응형 레이아웃 구현
- [ ] 컴포넌트 라이브러리 생성

### 선택 요소
- [ ] 애니메이션 효과 추가
- [ ] 호버 효과 추가
- [ ] 그라데이션 효과 추가
- [ ] 그림자 효과 추가

---

## 🔗 참고 자료

### 아이콘 파일 위치
- `src/assets/images/icon-png.svg`
- `src/assets/images/icon-jpg.svg`
- `src/assets/images/icon-ai-human.svg`
- `src/assets/images/icon-server-processing.svg`
- `src/assets/images/icon-cost-comparison.svg`
- `src/assets/images/icon_clip.svg`

### 외부 아이콘
- PSD 아이콘: `https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg`
- JPG 아이콘: `src/assets/images/icon-jpg_2.svg`

이 스펙을 기반으로 Figma에서 디자인을 재구성하시면 됩니다! 🎨
