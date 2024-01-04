import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mockData from 'vite-plugin-mock-data';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mockData({ mockRoutesDir: './mock' })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
})
