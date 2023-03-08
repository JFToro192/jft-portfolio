import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/jft-portfolio/',
  plugins: [vue()],
  build: {
    target: 'esnext'
  }
})
