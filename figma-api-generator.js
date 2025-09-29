// Figma REST API를 사용한 자동 파일 생성
// Node.js 환경에서 실행

const axios = require('axios');

// Figma API 설정
const FIGMA_API_BASE = 'https://api.figma.com/v1';
const FIGMA_TOKEN = 'YOUR_FIGMA_TOKEN'; // 실제 토큰으로 교체 필요

// API 헤더 설정
const headers = {
  'X-Figma-Token': FIGMA_TOKEN,
  'Content-Type': 'application/json'
};

// 새 파일 생성
async function createFigmaFile() {
  try {
    const response = await axios.post(
      `${FIGMA_API_BASE}/files`,
      {
        name: 'Nemoa AI Landing Page',
        description: '웹툰 현지화 플랫폼을 위한 완전한 랜딩 페이지 디자인 시스템'
      },
      { headers }
    );
    
    return response.data.file.key;
  } catch (error) {
    console.error('파일 생성 실패:', error.response.data);
    throw error;
  }
}

// 아트보드 생성
async function createArtboards(fileKey) {
  const artboards = [
    {
      name: 'Desktop - 1440px',
      width: 1440,
      height: 1024,
      backgroundColor: '#FFFFFF'
    },
    {
      name: 'Tablet - 768px',
      width: 768,
      height: 1024,
      backgroundColor: '#FFFFFF'
    },
    {
      name: 'Mobile - 375px',
      width: 375,
      height: 812,
      backgroundColor: '#FFFFFF'
    }
  ];
  
  for (const artboard of artboards) {
    try {
      await axios.post(
        `${FIGMA_API_BASE}/files/${fileKey}/nodes`,
        {
          nodes: [{
            type: 'FRAME',
            name: artboard.name,
            size: { x: artboard.width, y: artboard.height },
            fills: [{
              type: 'SOLID',
              color: { r: 1, g: 1, b: 1 }
            }]
          }]
        },
        { headers }
      );
    } catch (error) {
      console.error(`아트보드 생성 실패 (${artboard.name}):`, error.response.data);
    }
  }
}

// 컬러 스타일 생성
async function createColorStyles(fileKey) {
  const colors = {
    'Primary Black': '#1B1B1B',
    'Mint Green': '#A6F0D3',
    'White': '#FFFFFF',
    'Warm White': '#FDFCF9',
    'Warning Yellow': '#FFC107'
  };
  
  for (const [name, value] of Object.entries(colors)) {
    try {
      await axios.post(
        `${FIGMA_API_BASE}/files/${fileKey}/styles`,
        {
          name: name,
          styleType: 'FILL',
          paints: [{
            type: 'SOLID',
            color: hexToRgb(value)
          }]
        },
        { headers }
      );
    } catch (error) {
      console.error(`컬러 스타일 생성 실패 (${name}):`, error.response.data);
    }
  }
}

// 텍스트 스타일 생성
async function createTextStyles(fileKey) {
  const textStyles = [
    { name: 'Brand Title', fontSize: 56, fontWeight: 900 },
    { name: 'Hero Title', fontSize: 56, fontWeight: 700 },
    { name: 'Section Title', fontSize: 40, fontWeight: 700 },
    { name: 'Card Title', fontSize: 20, fontWeight: 700 },
    { name: 'Body Text', fontSize: 16, fontWeight: 400 },
    { name: 'Small Text', fontSize: 14, fontWeight: 400 }
  ];
  
  for (const style of textStyles) {
    try {
      await axios.post(
        `${FIGMA_API_BASE}/files/${fileKey}/styles`,
        {
          name: style.name,
          styleType: 'TEXT',
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          fontFamily: 'Pretendard'
        },
        { headers }
      );
    } catch (error) {
      console.error(`텍스트 스타일 생성 실패 (${style.name}):`, error.response.data);
    }
  }
}

// 컴포넌트 생성
async function createComponents(fileKey) {
  const components = [
    {
      name: 'Button Primary',
      type: 'COMPONENT',
      size: { x: 120, y: 48 },
      fills: [{ type: 'SOLID', color: { r: 0.651, g: 0.941, b: 0.827 } }],
      cornerRadius: 8
    },
    {
      name: 'Button Secondary',
      type: 'COMPONENT',
      size: { x: 120, y: 48 },
      fills: [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }],
      cornerRadius: 8,
      strokes: [{ type: 'SOLID', color: { r: 0.651, g: 0.941, b: 0.827 } }]
    },
    {
      name: 'Card Basic',
      type: 'COMPONENT',
      size: { x: 300, y: 200 },
      fills: [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }],
      cornerRadius: 12
    },
    {
      name: 'Card Mint',
      type: 'COMPONENT',
      size: { x: 300, y: 200 },
      fills: [{ type: 'SOLID', color: { r: 0.651, g: 0.941, b: 0.827 } }],
      cornerRadius: 12
    }
  ];
  
  for (const component of components) {
    try {
      await axios.post(
        `${FIGMA_API_BASE}/files/${fileKey}/nodes`,
        {
          nodes: [component]
        },
        { headers }
      );
    } catch (error) {
      console.error(`컴포넌트 생성 실패 (${component.name}):`, error.response.data);
    }
  }
}

// 헥스 컬러를 RGB로 변환
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : null;
}

// 메인 실행 함수
async function generateNemoaFigmaFile() {
  try {
    console.log('Figma 파일 생성 중...');
    
    // 1. 새 파일 생성
    const fileKey = await createFigmaFile();
    console.log(`파일 생성 완료: ${fileKey}`);
    
    // 2. 아트보드 생성
    await createArtboards(fileKey);
    console.log('아트보드 생성 완료');
    
    // 3. 컬러 스타일 생성
    await createColorStyles(fileKey);
    console.log('컬러 스타일 생성 완료');
    
    // 4. 텍스트 스타일 생성
    await createTextStyles(fileKey);
    console.log('텍스트 스타일 생성 완료');
    
    // 5. 컴포넌트 생성
    await createComponents(fileKey);
    console.log('컴포넌트 생성 완료');
    
    console.log(`Figma 파일이 성공적으로 생성되었습니다!`);
    console.log(`파일 URL: https://www.figma.com/file/${fileKey}`);
    
  } catch (error) {
    console.error('파일 생성 중 오류 발생:', error);
  }
}

// 실행
if (require.main === module) {
  generateNemoaFigmaFile();
}

module.exports = {
  generateNemoaFigmaFile,
  createFigmaFile,
  createArtboards,
  createColorStyles,
  createTextStyles,
  createComponents
};

