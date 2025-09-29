# Figma 설정 가이드 - Nemoa AI Landing Page

## 🚀 Figma 프로젝트 설정

### 1. 새 Figma 파일 생성
1. **Figma** 열기
2. **"New file"** 클릭
3. **"Untitled"** → **"Nemoa AI Landing Page"**로 변경

### 2. 아트보드 생성
**3개의 아트보드를 생성하세요:**

#### 데스크톱 아트보드
- **이름**: "Desktop - 1440px"
- **크기**: 1440px × 1024px
- **위치**: (0, 0)

#### 태블릿 아트보드
- **이름**: "Tablet - 768px"
- **크기**: 768px × 1024px
- **위치**: (1500, 0)

#### 모바일 아트보드
- **이름**: "Mobile - 375px"
- **크기**: 375px × 812px
- **위치**: (3000, 0)

---

## 🎨 디자인 시스템 설정

### 1. 컬러 스타일 생성
**Styles 패널에서 다음 컬러들을 생성하세요:**

#### Primary Colors
- **Primary Black**: `#1B1B1B`
- **Mint Green**: `#A6F0D3`
- **White**: `#FFFFFF`
- **Warm White**: `#FDFCF9`
- **Warning Yellow**: `#FFC107`

#### Gradient Colors
- **Brand Gradient**: `#A6F0D3` → `#FFFFFF` (135deg)

### 2. 텍스트 스타일 생성
**Text 스타일을 생성하세요:**

#### Headings
- **Brand Title**: Pretendard, 56px, 900 weight
- **Hero Title**: Pretendard, 56px, 700 weight
- **Section Title**: Pretendard, 40px, 700 weight
- **Card Title**: Pretendard, 20px, 700 weight

#### Body Text
- **Body Text**: Pretendard, 16px, 400 weight
- **Small Text**: Pretendard, 14px, 400 weight

### 3. 그림자 스타일 생성
**Effect 스타일을 생성하세요:**

- **Card Shadow**: `0 4px 12px rgba(0, 0, 0, 0.1)`
- **Hover Shadow**: `0 8px 24px rgba(0, 0, 0, 0.15)`

---

## 📐 그리드 시스템 설정

### 1. 12컬럼 그리드 생성
**각 아트보드에 그리드를 설정하세요:**

#### 데스크톱 (1440px)
- **Columns**: 12
- **Gutter**: 24px
- **Margin**: 24px

#### 태블릿 (768px)
- **Columns**: 6
- **Gutter**: 16px
- **Margin**: 16px

#### 모바일 (375px)
- **Columns**: 4
- **Gutter**: 12px
- **Margin**: 12px

---

## 🧩 컴포넌트 라이브러리 생성

### 1. 기본 컴포넌트 생성

#### Button Components
**Button Primary**
- **배경**: Mint Green
- **텍스트**: Primary Black
- **패딩**: 14px 28px
- **둥근 모서리**: 8px
- **폰트**: 16px, 700 weight

**Button Secondary**
- **배경**: 투명
- **텍스트**: Mint Green
- **테두리**: Mint Green, 2px
- **패딩**: 14px 28px
- **둥근 모서리**: 8px
- **폰트**: 16px, 700 weight

#### Card Components
**Card Basic**
- **배경**: White
- **패딩**: 32px 20px
- **둥근 모서리**: 12px
- **그림자**: Card Shadow

**Card Mint**
- **배경**: Mint Green
- **패딩**: 32px 20px
- **둥근 모서리**: 12px
- **그림자**: Card Shadow

**Card Warm**
- **배경**: Warm White
- **패딩**: 24px
- **둥근 모서리**: 8px

#### Icon Components
**Icon Large** (96px × 96px)
**Icon Medium** (52px × 52px)
**Icon Small** (24px × 24px)

### 2. 섹션 컴포넌트 생성

#### Hero Section
- **배경**: Primary Black
- **레이아웃**: 2-column (6:6)
- **높이**: 100vh

#### Pain Points Section
- **배경**: Warm White
- **레이아웃**: 3-column
- **패딩**: 80px 0

#### Solutions Section
- **배경**: Mint Green
- **레이아웃**: 4-column
- **패딩**: 80px 0

---

## 📱 반응형 디자인 구현

### 1. 데스크톱 레이아웃 (1440px)
- **Hero Section**: 2-column (6:6)
- **Pain Points**: 3-column
- **Solutions**: 4-column
- **Workflow**: 4-column
- **Comparison**: 2-column
- **Case Studies**: 3-column
- **Process Steps**: 3-column

### 2. 태블릿 레이아웃 (768px)
- **Hero Section**: 1-column
- **Pain Points**: 1-column
- **Solutions**: 2-column
- **Workflow**: 2-column
- **Comparison**: 1-column
- **Case Studies**: 2-column
- **Process Steps**: 2-column

### 3. 모바일 레이아웃 (375px)
- **모든 섹션**: 1-column
- **패딩**: 16px
- **폰트 크기**: 20% 감소

---

## 🎯 페이지 구성 단계

### 1단계: Hero Section
1. **배경**: Primary Black 설정
2. **좌측 텍스트 영역**:
   - Brand Title (Gradient 적용)
   - Hero Title
   - Subtitle
   - CTA Buttons
3. **우측 비주얼 영역**:
   - Cut Frame (2×2 그리드)
   - Speech Bubble
4. **하단 경고 메시지**:
   - Warning Box

### 2단계: Pain Points Section
1. **배경**: Warm White 설정
2. **섹션 제목**: 중앙 정렬
3. **3개 카드**:
   - 속도 카드 (⏱️ 아이콘)
   - 포맷 카드 (PSD + CLIP 아이콘)
   - 비용 카드 (💰 아이콘)

### 3단계: Solutions Section
1. **배경**: Mint Green 설정
2. **섹션 제목**: 중앙 정렬
3. **4개 카드**:
   - 단일 이미지 지원 (PNG + JPG)
   - AI+Human 협업
   - 대용량 처리
   - 파격 가성비

### 4단계: 나머지 섹션들
1. **Workflow Section** (4단계 프로세스)
2. **Comparison Section** (기존 vs 네모아)
3. **Case Studies Section** (성공 사례)
4. **Process Steps Section** (시작하기)
5. **Final CTA Section** (최종 CTA)

---

## 🔧 Figma 플러그인 추천

### 필수 플러그인
1. **Figma to Code** - 코드 생성
2. **Auto Layout** - 자동 레이아웃
3. **Stark** - 접근성 검사
4. **Content Reel** - 더미 데이터

### 선택 플러그인
1. **Figma to HTML** - HTML 변환
2. **Figma to CSS** - CSS 변환
3. **Figma to React** - React 컴포넌트 생성

---

## 📋 체크리스트

### 설정 완료
- [ ] Figma 파일 생성
- [ ] 아트보드 3개 생성
- [ ] 컬러 스타일 생성
- [ ] 텍스트 스타일 생성
- [ ] 그림자 스타일 생성
- [ ] 그리드 시스템 설정

### 컴포넌트 완료
- [ ] Button 컴포넌트 생성
- [ ] Card 컴포넌트 생성
- [ ] Icon 컴포넌트 생성
- [ ] Section 컴포넌트 생성

### 페이지 완료
- [ ] Hero Section 구현
- [ ] Pain Points Section 구현
- [ ] Solutions Section 구현
- [ ] Workflow Section 구현
- [ ] Comparison Section 구현
- [ ] Case Studies Section 구현
- [ ] Process Steps Section 구현
- [ ] Final CTA Section 구현

### 반응형 완료
- [ ] 데스크톱 레이아웃 완성
- [ ] 태블릿 레이아웃 완성
- [ ] 모바일 레이아웃 완성

---

## 🎨 디자인 팁

### 1. 일관성 유지
- 동일한 컴포넌트 재사용
- 일관된 간격과 패딩 사용
- 통일된 폰트 크기와 색상 사용

### 2. 접근성 고려
- 충분한 색상 대비 확보
- 적절한 폰트 크기 사용
- 명확한 버튼과 링크 구분

### 3. 사용자 경험
- 명확한 정보 계층 구조
- 직관적인 네비게이션
- 빠른 로딩을 위한 최적화

이 가이드를 따라 Figma에서 완벽한 디자인을 구현하세요! 🚀
