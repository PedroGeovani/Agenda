import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy:{
      '/api': {
          target: 'https://6679b7a718a459f639512c41.mockapi.io/agenda/v1',
          ws: true,
          changeOrigin: true,
        },
    }
  }

})
