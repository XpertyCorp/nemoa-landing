// Figma API를 사용한 상세 디자인 정보 추출 스크립트
const axios = require('axios');
const fs = require('fs');

// Figma API 설정
const FIGMA_API_BASE = 'https://api.figma.com/v1';
const FIGMA_FILE_KEY = 'xoFhSvqge1OUX58CAeDXe5';
const FIGMA_TOKEN = 'YOUR_FIGMA_TOKEN'; // 실제 토큰으로 교체 필요

const headers = {
  'X-Figma-Token': FIGMA_TOKEN,
  'Content-Type': 'application/json'
};

// RGB를 HEX로 변환
function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// 노드에서 색상 정보 추출
function extractColorsFromNode(node, colors = new Set()) {
  if (node.fills && Array.isArray(node.fills)) {
    node.fills.forEach(fill => {
      if (fill.type === 'SOLID' && fill.color) {
        const hex = rgbToHex(fill.color.r, fill.color.g, fill.color.b);
        colors.add(hex);
      } else if (fill.type === 'GRADIENT_LINEAR' && fill.gradientStops) {
        fill.gradientStops.forEach(stop => {
          if (stop.color) {
            const hex = rgbToHex(stop.color.r, stop.color.g, stop.color.b);
            colors.add(hex);
          }
        });
      }
    });
  }
  
  if (node.children) {
    node.children.forEach(child => extractColorsFromNode(child, colors));
  }
  
  return colors;
}

// 노드에서 폰트 정보 추출
function extractTypographyFromNode(node, typography = []) {
  if (node.type === 'TEXT' && node.style) {
    typography.push({
      name: node.name,
      fontFamily: node.style.fontFamily,
      fontSize: node.style.fontSize,
      fontWeight: node.style.fontWeight,
      lineHeight: node.style.lineHeight,
      letterSpacing: node.style.letterSpacing,
      textAlign: node.style.textAlignHorizontal,
      characters: node.characters
    });
  }
  
  if (node.children) {
    node.children.forEach(child => extractTypographyFromNode(child, typography));
  }
  
  return typography;
}

// 노드에서 레이아웃 정보 추출
function extractLayoutFromNode(node, layouts = []) {
  if (node.absoluteBoundingBox) {
    layouts.push({
      name: node.name,
      type: node.type,
      width: node.absoluteBoundingBox.width,
      height: node.absoluteBoundingBox.height,
      x: node.absoluteBoundingBox.x,
      y: node.absoluteBoundingBox.y,
      cornerRadius: node.cornerRadius,
      paddingLeft: node.paddingLeft,
      paddingRight: node.paddingRight,
      paddingTop: node.paddingTop,
      paddingBottom: node.paddingBottom,
      fills: node.fills,
      strokes: node.strokes,
      effects: node.effects
    });
  }
  
  if (node.children) {
    node.children.forEach(child => extractLayoutFromNode(child, layouts));
  }
  
  return layouts;
}

// 특정 섹션 찾기
function findSection(node, sectionName) {
  if (node.name && node.name.toLowerCase().includes(sectionName.toLowerCase())) {
    return node;
  }
  
  if (node.children) {
    for (const child of node.children) {
      const found = findSection(child, sectionName);
      if (found) return found;
    }
  }
  
  return null;
}

// 메인 추출 함수
async function extractDetailedDesign() {
  try {
    console.log('🔍 Figma 상세 디자인 정보 추출 중...');
    
    // 파일 정보 가져오기
    const fileResponse = await axios.get(
      `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}`,
      { headers }
    );
    
    const file = fileResponse.data;
    console.log('✅ 파일 정보 로드 완료');
    
    // 페이지 정보 추출
    const pages = file.document.children;
    console.log(`📄 페이지 수: ${pages.length}`);
    
    const extractedData = {
      file: {
        name: file.name,
        lastModified: file.lastModified,
        version: file.version
      },
      pages: {},
      colors: new Set(),
      typography: [],
      layouts: [],
      sections: {}
    };
    
    // 각 페이지 처리
    for (const page of pages) {
      console.log(`📋 페이지 처리 중: ${page.name}`);
      
      // 색상 추출
      const pageColors = extractColorsFromNode(page);
      pageColors.forEach(color => extractedData.colors.add(color));
      
      // 타이포그래피 추출
      const pageTypography = extractTypographyFromNode(page);
      extractedData.typography.push(...pageTypography);
      
      // 레이아웃 추출
      const pageLayouts = extractLayoutFromNode(page);
      extractedData.layouts.push(...pageLayouts);
      
      // 페이지별 데이터 저장
      extractedData.pages[page.name] = {
        name: page.name,
        children: page.children.map(child => ({
          name: child.name,
          type: child.type,
          width: child.absoluteBoundingBox?.width,
          height: child.absoluteBoundingBox?.height,
          x: child.absoluteBoundingBox?.x,
          y: child.absoluteBoundingBox?.y
        }))
      };
      
      // 주요 섹션 찾기
      const heroSection = findSection(page, 'hero');
      const painPointsSection = findSection(page, 'pain');
      const solutionSection = findSection(page, 'solution');
      const workflowSection = findSection(page, 'workflow');
      const comparisonSection = findSection(page, 'comparison');
      
      if (heroSection) {
        extractedData.sections.hero = {
          colors: Array.from(extractColorsFromNode(heroSection)),
          typography: extractTypographyFromNode(heroSection),
          layout: extractLayoutFromNode(heroSection)
        };
        console.log('🎯 Hero Section 발견');
      }
      
      if (painPointsSection) {
        extractedData.sections.painPoints = {
          colors: Array.from(extractColorsFromNode(painPointsSection)),
          typography: extractTypographyFromNode(painPointsSection),
          layout: extractLayoutFromNode(painPointsSection)
        };
        console.log('🎯 Pain Points Section 발견');
      }
      
      if (solutionSection) {
        extractedData.sections.solution = {
          colors: Array.from(extractColorsFromNode(solutionSection)),
          typography: extractTypographyFromNode(solutionSection),
          layout: extractLayoutFromNode(solutionSection)
        };
        console.log('🎯 Solution Section 발견');
      }
    }
    
    // Set을 Array로 변환
    extractedData.colors = Array.from(extractedData.colors);
    
    // 결과 저장
    fs.writeFileSync('figma-detailed-data.json', JSON.stringify(extractedData, null, 2));
    
    // 웹페이지 구현용 CSS 생성
    generateImplementationCSS(extractedData);
    
    console.log('✅ 상세 디자인 추출 완료!');
    console.log(`📊 추출된 정보:`);
    console.log(`   - 색상: ${extractedData.colors.length}개`);
    console.log(`   - 타이포그래피: ${extractedData.typography.length}개`);
    console.log(`   - 레이아웃 요소: ${extractedData.layouts.length}개`);
    console.log(`   - 섹션: ${Object.keys(extractedData.sections).length}개`);
    
    return extractedData;
    
  } catch (error) {
    console.error('❌ Figma API 오류:', error.response?.data || error.message);
    throw error;
  }
}

// 웹페이지 구현용 CSS 생성
function generateImplementationCSS(data) {
  let css = `/* Figma에서 추출한 디자인 시스템 CSS */\n\n`;
  
  // 색상 변수
  css += `:root {\n`;
  data.colors.forEach((color, index) => {
    css += `  --color-${index + 1}: ${color};\n`;
  });
  css += `}\n\n`;
  
  // 주요 색상 정의
  const mainColors = {
    primary: data.colors[0] || '#1B1B1B',
    secondary: data.colors[1] || '#A6F0D3',
    background: data.colors[2] || '#FFFFFF',
    text: data.colors[3] || '#1B1B1B'
  };
  
  css += `/* 주요 색상 */\n`;
  css += `.color-primary { color: ${mainColors.primary}; }\n`;
  css += `.color-secondary { color: ${mainColors.secondary}; }\n`;
  css += `.bg-primary { background-color: ${mainColors.primary}; }\n`;
  css += `.bg-secondary { background-color: ${mainColors.secondary}; }\n\n`;
  
  // 타이포그래피 스타일
  css += `/* Typography Styles */\n`;
  data.typography.forEach((style, index) => {
    if (style.fontFamily && style.fontSize) {
      css += `.text-style-${index + 1} {\n`;
      css += `  font-family: '${style.fontFamily}';\n`;
      css += `  font-size: ${style.fontSize}px;\n`;
      css += `  font-weight: ${style.fontWeight || 400};\n`;
      if (style.lineHeight) css += `  line-height: ${style.lineHeight};\n`;
      if (style.letterSpacing) css += `  letter-spacing: ${style.letterSpacing}px;\n`;
      css += `}\n\n`;
    }
  });
  
  // 섹션별 스타일
  Object.entries(data.sections).forEach(([sectionName, sectionData]) => {
    css += `/* ${sectionName} Section */\n`;
    css += `.${sectionName}-section {\n`;
    if (sectionData.colors.length > 0) {
      css += `  background-color: ${sectionData.colors[0]};\n`;
    }
    css += `}\n\n`;
  });
  
  fs.writeFileSync('figma-implementation.css', css);
  console.log('📄 웹페이지용 CSS가 figma-implementation.css에 생성되었습니다.');
}

// 실행
if (require.main === module) {
  extractDetailedDesign()
    .then(result => {
      console.log('🎉 Figma 디자인 추출 완료!');
    })
    .catch(error => {
      console.error('❌ 추출 실패:', error.message);
    });
}

module.exports = { extractDetailedDesign };
