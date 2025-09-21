// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Netlify 표준 설정
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        // SCSS 전처리기 설정 없음
      }
    }
  }
})
