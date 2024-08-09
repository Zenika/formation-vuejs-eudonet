import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const host = process.env.PUBLIC_DNS || 'localhost'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host,
    proxy: {
      '/rest': {
        target: `http://${host}:4000/`,
        secure: false,
      },
      '/posters': {
        target: `http://${host}:4000/posters/`,
        prependPath: false,
        secure: false,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
