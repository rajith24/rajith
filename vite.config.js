import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {

    base: "/rajith/",
    plugins: [react()],
    server: 'server/server.js',
    // server: {

    //   proxy: {
    //     "^/api": {
    //       target: env.VITE_PORT,
    //       changeOrigin: true,
    //       secure: false,
    //       withCredentials: true,
    //       rewrite: (path) => path.replace(/^\/api/, ``),
    //     },
    //     port: env.VITE_PORT,
    //   },
    // },
    build: {
      outDir: 'dist',
      assetsDir: '',
      sourcemap: false,
      minify: true,
      chunkSizeWarningLimit: 10000000, // Set your preferred limit in bytes
    }
  }
})
