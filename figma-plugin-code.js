// Figma Plugin: Nemoa AI Landing Page Generator
// 이 코드를 Figma Plugin으로 사용할 수 있습니다

// 플러그인 메뉴 생성
figma.showUI(__html__, { width: 400, height: 600 });

// 컬러 팔레트 정의
const colors = {
  primaryBlack: { r: 0.106, g: 0.106, b: 0.106 },
  mintGreen: { r: 0.651, g: 0.941, b: 0.827 },
  white: { r: 1, g: 1, b: 1 },
  warmWhite: { r: 0.992, g: 0.988, b: 0.976 },
  warningYellow: { r: 1, g: 0.757, b: 0.027 }
};

// 텍스트 스타일 생성
function createTextStyle(name, fontSize, fontWeight, fontFamily = "Pretendard") {
  const textStyle = figma.createTextStyle();
  textStyle.name = name;
  textStyle.fontSize = fontSize;
  textStyle.fontWeight = fontWeight;
  textStyle.fontName = { family: fontFamily, style: "Regular" };
  return textStyle;
}

// 컬러 스타일 생성
function createColorStyle(name, color) {
  const colorStyle = figma.createPaintStyle();
  colorStyle.name = name;
  colorStyle.paints = [{
    type: "SOLID",
    color: color
  }];
  return colorStyle;
}

// 버튼 컴포넌트 생성
function createButtonComponent(name, backgroundColor, textColor, isPrimary = true) {
  const button = figma.createComponent();
  button.name = name;
  
  // 배경 설정
  button.fills = [{
    type: "SOLID",
    color: backgroundColor
  }];
  
  // 크기 설정
  button.resize(120, 48);
  
  // 둥근 모서리
  button.cornerRadius = 8;
  
  // 텍스트 추가
  const text = figma.createText();
  text.characters = isPrimary ? "무료 샘플 테스트 신청" : "맞춤 견적 문의";
  text.fontSize = 16;
  text.fontWeight = 700;
  text.fills = [{
    type: "SOLID",
    color: textColor
  }];
  
  // 텍스트 중앙 정렬
  text.x = (button.width - text.width) / 2;
  text.y = (button.height - text.height) / 2;
  
  button.appendChild(text);
  
  return button;
}

// 카드 컴포넌트 생성
function createCardComponent(name, backgroundColor, padding = 32) {
  const card = figma.createComponent();
  card.name = name;
  
  // 배경 설정
  card.fills = [{
    type: "SOLID",
    color: backgroundColor
  }];
  
  // 크기 설정
  card.resize(300, 200);
  
  // 둥근 모서리
  card.cornerRadius = 12;
  
  // 그림자 효과
  card.effects = [{
    type: "DROP_SHADOW",
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 4 },
    radius: 12,
    spread: 0
  }];
  
  return card;
}

// 아이콘 컴포넌트 생성
function createIconComponent(name, size = 96) {
  const icon = figma.createComponent();
  icon.name = name;
  
  // 크기 설정
  icon.resize(size, size);
  
  // 배경 설정 (임시)
  icon.fills = [{
    type: "SOLID",
    color: colors.mintGreen
  }];
  
  return icon;
}

// 섹션 컴포넌트 생성
function createSectionComponent(name, backgroundColor, height = 400) {
  const section = figma.createComponent();
  section.name = name;
  
  // 배경 설정
  section.fills = [{
    type: "SOLID",
    color: backgroundColor
  }];
  
  // 크기 설정
  section.resize(1200, height);
  
  return section;
}

// 메인 함수
function generateNemoaLandingPage() {
  // 1. 컬러 스타일 생성
  Object.entries(colors).forEach(([name, color]) => {
    createColorStyle(name, color);
  });
  
  // 2. 텍스트 스타일 생성
  createTextStyle("Brand Title", 56, 900);
  createTextStyle("Hero Title", 56, 700);
  createTextStyle("Section Title", 40, 700);
  createTextStyle("Card Title", 20, 700);
  createTextStyle("Body Text", 16, 400);
  createTextStyle("Small Text", 14, 400);
  
  // 3. 버튼 컴포넌트 생성
  createButtonComponent("Button Primary", colors.mintGreen, colors.primaryBlack, true);
  createButtonComponent("Button Secondary", colors.white, colors.mintGreen, false);
  
  // 4. 카드 컴포넌트 생성
  createCardComponent("Card Basic", colors.white);
  createCardComponent("Card Mint", colors.mintGreen);
  createCardComponent("Card Warm", colors.warmWhite);
  
  // 5. 아이콘 컴포넌트 생성
  createIconComponent("Icon Large", 96);
  createIconComponent("Icon Medium", 52);
  createIconComponent("Icon Small", 24);
  
  // 6. 섹션 컴포넌트 생성
  createSectionComponent("Hero Section", colors.primaryBlack, 600);
  createSectionComponent("Pain Points Section", colors.warmWhite, 400);
  createSectionComponent("Solutions Section", colors.mintGreen, 400);
  createSectionComponent("Workflow Section", colors.white, 400);
  createSectionComponent("Comparison Section", colors.warmWhite, 400);
  createSectionComponent("Case Studies Section", colors.white, 400);
  createSectionComponent("Process Steps Section", colors.mintGreen, 400);
  createSectionComponent("Final CTA Section", colors.primaryBlack, 400);
  
  // 7. 아트보드 생성
  const desktopArtboard = figma.createFrame();
  desktopArtboard.name = "Desktop - 1440px";
  desktopArtboard.resize(1440, 1024);
  desktopArtboard.fills = [{
    type: "SOLID",
    color: colors.white
  }];
  
  const tabletArtboard = figma.createFrame();
  tabletArtboard.name = "Tablet - 768px";
  tabletArtboard.resize(768, 1024);
  tabletArtboard.fills = [{
    type: "SOLID",
    color: colors.white
  }];
  
  const mobileArtboard = figma.createFrame();
  mobileArtboard.name = "Mobile - 375px";
  mobileArtboard.resize(375, 812);
  mobileArtboard.fills = [{
    type: "SOLID",
    color: colors.white
  }];
  
  // 8. 그리드 설정
  desktopArtboard.layoutGrids = [{
    pattern: "COLUMNS",
    sectionSize: 1,
    visible: true,
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    gutterSize: 24,
    alignment: "CENTER",
    count: 12,
    offset: 24
  }];
  
  tabletArtboard.layoutGrids = [{
    pattern: "COLUMNS",
    sectionSize: 1,
    visible: true,
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    gutterSize: 16,
    alignment: "CENTER",
    count: 6,
    offset: 16
  }];
  
  mobileArtboard.layoutGrids = [{
    pattern: "COLUMNS",
    sectionSize: 1,
    visible: true,
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    gutterSize: 12,
    alignment: "CENTER",
    count: 4,
    offset: 12
  }];
  
  figma.notify("Nemoa AI Landing Page 디자인 시스템이 생성되었습니다!");
}

// UI 이벤트 처리
figma.ui.onmessage = (msg) => {
  if (msg.type === 'generate') {
    generateNemoaLandingPage();
  }
};

// 플러그인 시작
generateNemoaLandingPage();

