# Nemoa Landing Page v1.0

## 📅 백업 일시
- **생성일**: 2025-09-19 오후 5:43
- **버전**: v1.0 (첫 번째 완성 버전)

## 🎯 주요 기능

### 1. Hero Section
- **브랜드 타이틀**: "Nemoa" 메인 타이틀
- **서브 타이틀**: "네모 속 이야기를, 함께 모아"
- **CTA 버튼**: 무료 샘플 테스트 신청, 맞춤 견적 문의
- **저작권 경고**: 화면 하단 중앙에 위치한 경고 문구

### 2. Pain Points Section
- **3개 카드**: 속도, 포맷, 비용 문제점 제시
- **아이콘**: 각 카드별 적절한 이모지/이미지 아이콘
- **포맷 카드**: PSD, CLIP Studio 아이콘 포함

### 3. Solution Cards Section
- **4개 솔루션**: 단일 이미지 지원, AI+Human 협업, 대용량 처리, 파격 가성비
- **아이콘**: PNG/JPG, AI+Human, 서버 처리, 비용 비교 SVG 아이콘
- **반응형 레이아웃**: 데스크톱/모바일 대응

### 4. Workflow Section
- **4단계 프로세스**: 텍스트 추출(OCR), 텍스트 클리닝, 번역, 텍스트 식자
- **줄바꿈**: 특정 텍스트에 `<br>` 태그 적용

### 5. Comparison Table Section
- **2개 카드**: 기존 프로세스 vs Nemoa AI
- **비용 아이콘**: 
  - 좌측: 💰 + ↗ (비용 상승)
  - 우측: 💰 + ↘ (비용 절감)
- **파일 아이콘**: Adobe Photoshop CC, JPG SVG 아이콘

### 6. Case Studies Section
- **2개 케이스**: Before/After 이미지 비교
- **반응형 그리드**: 데스크톱/모바일 대응

### 7. Process Steps Section
- **4단계**: 상담 → 샘플 제작 → 계약 → 본격 작업
- **아이콘**: 각 단계별 적절한 이모지

### 8. Final CTA Section
- **최종 액션**: "지금 바로! 네모아AI 와 함께, 글로벌 독자를 만나보세요"

## 🛠 기술 스택
- **프레임워크**: Vue.js 3 (Composition API)
- **빌드 도구**: Vite
- **스타일링**: SCSS
- **아이콘**: SVG, 이모지
- **반응형**: CSS Grid, Flexbox

## 📁 프로젝트 구조
```
nemoa-landing-v1.0/
├── src/
│   ├── components/
│   │   ├── HeroSection.vue
│   │   ├── PainPoints.vue
│   │   ├── SolutionCards.vue
│   │   ├── Workflow.vue
│   │   ├── ComparisonTable.vue
│   │   ├── CaseStudies.vue
│   │   ├── ProcessSteps.vue
│   │   └── FinalCTA.vue
│   ├── assets/
│   │   ├── images/ (SVG 아이콘들)
│   │   └── styles/
│   │       └── variables.scss
│   ├── App.vue
│   └── main.js
├── package.json
├── vite.config.js
└── index.html
```

## 🎨 주요 스타일 특징
- **컬러 팔레트**: 검정, 흰색, 민트 그린, 노란색 (경고)
- **타이포그래피**: 반응형 폰트 크기
- **레이아웃**: CSS Grid 기반 반응형 디자인
- **애니메이션**: CSS 키프레임 애니메이션

## 🚀 실행 방법
```bash
cd nemoa-landing-v1.0
npm install
npm run dev
```

## 📝 주요 수정 사항
- SCSS 모듈 시스템 설정
- Vue 컴포넌트 구조화
- 반응형 디자인 구현
- SVG 아이콘 통합
- 비용 비교 아이콘 커스터마이징
- 저작권 경고 문구 추가

---
**이 버전은 Nemoa AI 랜딩 페이지의 첫 번째 완성 버전입니다.**

