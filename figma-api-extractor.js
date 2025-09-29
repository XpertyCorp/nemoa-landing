// Figma API를 사용한 디자인 정보 추출 스크립트
// Node.js 환경에서 실행

const axios = require('axios');
const fs = require('fs');

// Figma API 설정
const FIGMA_API_BASE = 'https://api.figma.com/v1';
const FIGMA_FILE_KEY = 'xoFhSvqge1OUX58CAeDXe5'; // URL에서 추출한 파일 키
const FIGMA_TOKEN = 'YOUR_FIGMA_TOKEN'; // 실제 토큰으로 교체 필요

// API 헤더 설정
const headers = {
  'X-Figma-Token': FIGMA_TOKEN,
  'Content-Type': 'application/json'
};

// 색상 정보 추출
function extractColors(styles) {
  const colors = {};
  Object.entries(styles).forEach(([key, style]) => {
    if (style.styleType === 'FILL' && style.paints) {
      style.paints.forEach(paint => {
        if (paint.type === 'SOLID' && paint.color) {
          const hex = rgbToHex(paint.color.r, paint.color.g, paint.color.b);
          colors[key] = {
            name: style.name,
            hex: hex,
            rgb: paint.color
          };
        }
      });
    }
  });
  return colors;
}

// 폰트 정보 추출
function extractTypography(styles) {
  const typography = {};
  Object.entries(styles).forEach(([key, style]) => {
    if (style.styleType === 'TEXT') {
      typography[key] = {
        name: style.name,
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        letterSpacing: style.letterSpacing
      };
    }
  });
  return typography;
}

// 컴포넌트 정보 추출
function extractComponents(components) {
  const componentInfo = {};
  Object.entries(components).forEach(([key, component]) => {
    componentInfo[key] = {
      name: component.name,
      description: component.description,
      width: component.absoluteBoundingBox?.width,
      height: component.absoluteBoundingBox?.height,
      fills: component.fills,
      strokes: component.strokes,
      effects: component.effects
    };
  });
  return componentInfo;
}

// 노드 정보 추출 (색상, 폰트, 크기 등)
function extractNodeInfo(node, depth = 0) {
  const info = {
    name: node.name,
    type: node.type,
    width: node.absoluteBoundingBox?.width,
    height: node.absoluteBoundingBox?.height,
    x: node.absoluteBoundingBox?.x,
    y: node.absoluteBoundingBox?.y,
    fills: node.fills,
    strokes: node.strokes,
    effects: node.effects,
    style: node.style,
    characters: node.characters,
    fontSize: node.style?.fontSize,
    fontFamily: node.style?.fontFamily,
    fontWeight: node.style?.fontWeight,
    lineHeight: node.style?.lineHeight,
    letterSpacing: node.style?.letterSpacing,
    textAlignHorizontal: node.style?.textAlignHorizontal,
    textAlignVertical: node.style?.textAlignVertical,
    paddingLeft: node.paddingLeft,
    paddingRight: node.paddingRight,
    paddingTop: node.paddingTop,
    paddingBottom: node.paddingBottom,
    cornerRadius: node.cornerRadius,
    children: []
  };

  // 자식 노드들 재귀적으로 처리
  if (node.children) {
    node.children.forEach(child => {
      info.children.push(extractNodeInfo(child, depth + 1));
    });
  }

  return info;
}

// RGB를 HEX로 변환
function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// 메인 추출 함수
async function extractFigmaDesign() {
  try {
    console.log('Figma 디자인 정보 추출 중...');
    
    // 1. 파일 정보 가져오기
    const fileResponse = await axios.get(
      `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}`,
      { headers }
    );
    
    const file = fileResponse.data;
    console.log('파일 정보 로드 완료');
    
    // 2. 스타일 정보 추출
    const stylesResponse = await axios.get(
      `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}/styles`,
      { headers }
    );
    
    const styles = stylesResponse.data.meta.styles;
    console.log('스타일 정보 로드 완료');
    
    // 3. 컴포넌트 정보 추출
    const componentsResponse = await axios.get(
      `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}/components`,
      { headers }
    );
    
    const components = componentsResponse.data.meta.components;
    console.log('컴포넌트 정보 로드 완료');
    
    // 4. 페이지별 노드 정보 추출
    const pages = file.document.children;
    const pageInfo = {};
    
    pages.forEach(page => {
      console.log(`페이지 처리 중: ${page.name}`);
      pageInfo[page.name] = extractNodeInfo(page);
    });
    
    // 5. 색상 정보 추출
    const colors = extractColors(styles);
    console.log('색상 정보 추출 완료');
    
    // 6. 타이포그래피 정보 추출
    const typography = extractTypography(styles);
    console.log('타이포그래피 정보 추출 완료');
    
    // 7. 컴포넌트 정보 추출
    const componentInfo = extractComponents(components);
    console.log('컴포넌트 정보 추출 완료');
    
    // 8. 결과 정리
    const result = {
      file: {
        name: file.name,
        lastModified: file.lastModified,
        version: file.version
      },
      colors: colors,
      typography: typography,
      components: componentInfo,
      pages: pageInfo,
      extractedAt: new Date().toISOString()
    };
    
    // 9. JSON 파일로 저장
    fs.writeFileSync('figma-design-data.json', JSON.stringify(result, null, 2));
    console.log('디자인 데이터가 figma-design-data.json에 저장되었습니다.');
    
    // 10. 웹페이지 구현용 CSS 생성
    generateWebCSS(colors, typography, componentInfo);
    
    return result;
    
  } catch (error) {
    console.error('Figma API 오류:', error.response?.data || error.message);
    throw error;
  }
}

// 웹페이지 구현용 CSS 생성
function generateWebCSS(colors, typography, components) {
  let css = `/* Figma에서 추출한 디자인 시스템 CSS */\n\n`;
  
  // 색상 변수
  css += `:root {\n`;
  Object.entries(colors).forEach(([key, color]) => {
    css += `  --color-${key.toLowerCase().replace(/\s+/g, '-')}: ${color.hex};\n`;
  });
  css += `}\n\n`;
  
  // 타이포그래피 스타일
  css += `/* Typography Styles */\n`;
  Object.entries(typography).forEach(([key, style]) => {
    css += `.${key.toLowerCase().replace(/\s+/g, '-')} {\n`;
    css += `  font-family: '${style.fontFamily}';\n`;
    css += `  font-size: ${style.fontSize}px;\n`;
    css += `  font-weight: ${style.fontWeight};\n`;
    if (style.lineHeight) css += `  line-height: ${style.lineHeight};\n`;
    if (style.letterSpacing) css += `  letter-spacing: ${style.letterSpacing}px;\n`;
    css += `}\n\n`;
  });
  
  // 컴포넌트 스타일
  css += `/* Component Styles */\n`;
  Object.entries(components).forEach(([key, component]) => {
    css += `.${component.name.toLowerCase().replace(/\s+/g, '-')} {\n`;
    if (component.width) css += `  width: ${component.width}px;\n`;
    if (component.height) css += `  height: ${component.height}px;\n`;
    css += `}\n\n`;
  });
  
  fs.writeFileSync('figma-extracted-styles.css', css);
  console.log('웹페이지용 CSS가 figma-extracted-styles.css에 생성되었습니다.');
}

// 실행
if (require.main === module) {
  extractFigmaDesign()
    .then(result => {
      console.log('✅ Figma 디자인 추출 완료!');
      console.log(`📊 추출된 정보:`);
      console.log(`   - 색상: ${Object.keys(result.colors).length}개`);
      console.log(`   - 타이포그래피: ${Object.keys(result.typography).length}개`);
      console.log(`   - 컴포넌트: ${Object.keys(result.components).length}개`);
      console.log(`   - 페이지: ${Object.keys(result.pages).length}개`);
    })
    .catch(error => {
      console.error('❌ 추출 실패:', error.message);
    });
}

module.exports = {
  extractFigmaDesign,
  extractColors,
  extractTypography,
  extractComponents,
  extractNodeInfo
};
