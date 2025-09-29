# Figma Assets 가이드 - Nemoa AI Landing Page

## 🎨 아이콘 및 이미지 리소스

### 1. 로컬 SVG 아이콘들
**프로젝트 내 아이콘 파일들:**

#### 포맷 아이콘
- **PNG 아이콘**: `src/assets/images/icon-png.svg`
- **JPG 아이콘**: `src/assets/images/icon-jpg.svg`
- **JPG 아이콘 (비교용)**: `src/assets/images/icon-jpg_2.svg`
- **CLIP Studio 아이콘**: `src/assets/images/icon_clip.svg`

#### 솔루션 아이콘
- **AI+Human 협업**: `src/assets/images/icon-ai-human.svg`
- **서버 처리**: `src/assets/images/icon-server-processing.svg`
- **비용 비교**: `src/assets/images/icon-cost-comparison.svg`

### 2. 외부 아이콘들
**온라인에서 가져올 수 있는 아이콘들:**

#### Adobe 아이콘
- **Photoshop CC**: `https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg`
- **크기**: 24px × 24px (비교 테이블용)

#### 이모지 아이콘
- **속도**: ⏱️ (2.5rem)
- **비용**: 💰 (2.5rem)
- **경고**: ⚠️ (16.5px)

---

## 🖼️ 이미지 가이드라인

### 1. 아이콘 크기 규칙
**일관된 크기 사용:**

#### 데스크톱
- **큰 아이콘**: 96px × 96px (솔루션 카드)
- **중간 아이콘**: 52px × 52px (PSD 아이콘)
- **작은 아이콘**: 24px × 24px (비교 테이블)
- **특수 아이콘**: 60px × 60px (CLIP 아이콘)

#### 모바일
- **큰 아이콘**: 67px × 67px (96px × 0.7)
- **중간 아이콘**: 36px × 36px (52px × 0.7)
- **작은 아이콘**: 17px × 17px (24px × 0.7)
- **특수 아이콘**: 42px × 42px (60px × 0.7)

### 2. 아이콘 스타일
**일관된 스타일 적용:**

#### 그림자 효과
- **Drop Shadow**: `0 2px 4px rgba(0, 0, 0, 0.1)`
- **Hover 효과**: `scale(1.1)`

#### 정렬
- **수평 정렬**: 중앙
- **수직 정렬**: 중앙
- **간격**: 8px (PNG + JPG 아이콘)

---

## 🎨 Figma에서 아이콘 사용하기

### 1. SVG 아이콘 가져오기
**로컬 SVG 파일을 Figma로 가져오는 방법:**

1. **Figma** → **"Import"** 클릭
2. **SVG 파일 선택** (위 경로에서)
3. **"Import"** 클릭
4. **컴포넌트로 변환** (우클릭 → "Create Component")

### 2. 온라인 아이콘 가져오기
**외부 아이콘을 Figma로 가져오는 방법:**

1. **Figma** → **"Import"** 클릭
2. **URL 입력** (위 URL들)
3. **"Import"** 클릭
4. **컴포넌트로 변환**

### 3. 이모지 아이콘 사용
**이모지를 아이콘으로 사용하는 방법:**

1. **Text 도구** 선택
2. **이모지 입력** (⏱️, 💰, ⚠️)
3. **폰트 크기 조정**
4. **컴포넌트로 변환**

---

## 🧩 컴포넌트 라이브러리 구성

### 1. 아이콘 컴포넌트
**다양한 크기의 아이콘 컴포넌트 생성:**

#### Icon Large (96px)
- PNG 아이콘
- JPG 아이콘
- AI+Human 아이콘
- 서버 처리 아이콘
- 비용 비교 아이콘

#### Icon Medium (52px)
- PSD 아이콘
- CLIP Studio 아이콘

#### Icon Small (24px)
- PSD 아이콘 (비교용)
- JPG 아이콘 (비교용)

### 2. 버튼 컴포넌트
**다양한 버튼 스타일:**

#### Button Primary
- **배경**: Mint Green (#A6F0D3)
- **텍스트**: Primary Black (#1B1B1B)
- **패딩**: 14px 28px
- **둥근 모서리**: 8px

#### Button Secondary
- **배경**: 투명
- **텍스트**: Mint Green (#A6F0D3)
- **테두리**: Mint Green, 2px
- **패딩**: 14px 28px
- **둥근 모서리**: 8px

### 3. 카드 컴포넌트
**다양한 카드 스타일:**

#### Card Basic
- **배경**: White (#FFFFFF)
- **패딩**: 32px 20px
- **둥근 모서리**: 12px
- **그림자**: Card Shadow

#### Card Mint
- **배경**: Mint Green (#A6F0D3)
- **패딩**: 32px 20px
- **둥근 모서리**: 12px
- **그림자**: Card Shadow

#### Card Warm
- **배경**: Warm White (#FDFCF9)
- **패딩**: 24px
- **둥근 모서리**: 8px

---

## 📐 레이아웃 가이드라인

### 1. 그리드 시스템
**일관된 그리드 사용:**

#### 데스크톱 (1440px)
- **컬럼**: 12개
- **간격**: 24px
- **여백**: 24px

#### 태블릿 (768px)
- **컬럼**: 6개
- **간격**: 16px
- **여백**: 16px

#### 모바일 (375px)
- **컬럼**: 4개
- **간격**: 12px
- **여백**: 12px

### 2. 간격 규칙
**일관된 간격 사용:**

#### 섹션 간격
- **데스크톱**: 80px
- **태블릿**: 60px
- **모바일**: 40px

#### 카드 간격
- **데스크톱**: 24px
- **태블릿**: 16px
- **모바일**: 12px

#### 텍스트 간격
- **제목과 본문**: 12px
- **본문과 버튼**: 24px
- **버튼 간격**: 16px

---

## 🎯 특별한 디자인 요소

### 1. 그라데이션
**브랜드 타이틀용 그라데이션:**

- **방향**: 135deg
- **시작 색상**: Mint Green (#A6F0D3)
- **끝 색상**: White (#FFFFFF)
- **적용**: Brand Title 텍스트

### 2. 그림자 효과
**카드용 그림자:**

#### 기본 그림자
- **X**: 0px
- **Y**: 4px
- **Blur**: 12px
- **Spread**: 0px
- **색상**: rgba(0, 0, 0, 0.1)

#### 호버 그림자
- **X**: 0px
- **Y**: 8px
- **Blur**: 24px
- **Spread**: 0px
- **색상**: rgba(0, 0, 0, 0.15)

### 3. 애니메이션 효과
**Figma에서 구현할 수 있는 효과:**

#### 페이드 인
- **Opacity**: 0 → 1
- **Duration**: 0.6s
- **Easing**: ease

#### 슬라이드 업
- **Y**: 40px → 0px
- **Duration**: 0.6s
- **Easing**: ease

#### 스케일
- **Scale**: 0.8 → 1
- **Duration**: 0.3s
- **Easing**: ease

---

## 📋 체크리스트

### 아이콘 준비
- [ ] PNG 아이콘 가져오기
- [ ] JPG 아이콘 가져오기
- [ ] AI+Human 아이콘 가져오기
- [ ] 서버 처리 아이콘 가져오기
- [ ] 비용 비교 아이콘 가져오기
- [ ] PSD 아이콘 가져오기
- [ ] CLIP Studio 아이콘 가져오기

### 컴포넌트 생성
- [ ] 아이콘 컴포넌트 생성
- [ ] 버튼 컴포넌트 생성
- [ ] 카드 컴포넌트 생성
- [ ] 섹션 컴포넌트 생성

### 스타일 적용
- [ ] 컬러 스타일 적용
- [ ] 텍스트 스타일 적용
- [ ] 그림자 스타일 적용
- [ ] 그라데이션 스타일 적용

### 레이아웃 구현
- [ ] 그리드 시스템 설정
- [ ] 간격 규칙 적용
- [ ] 반응형 레이아웃 구현

이 가이드를 따라 Figma에서 완벽한 디자인을 구현하세요! 🎨
