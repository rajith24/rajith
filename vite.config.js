import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/rajith/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 10000000, // Set your preferred limit in bytes
  },
})
