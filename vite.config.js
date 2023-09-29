import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://rajith24.github.io/rajith",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000000, // Set your preferred limit in bytes
  },
})
