import { defineConfig, loadEnv,searchForWorkspaceRoot  } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {

    base: "/rajith/",
    plugins: [react()],
    server: {
      // Specify the custom server entry point
      fs: {
        // Make sure to use the correct path to your server file
        allow: [
          searchForWorkspaceRoot(process.cwd()),
          path.resolve(__dirname, 'server.cjs')],
      },
    },
    // server: 'server/server.js',
    // server: {

    //   proxy: {
    //     '/api': 'http://localhost:3001'
        // "^/api": {
        //   target: env.VITE_PORT,
        //   changeOrigin: true,
        //   secure: false,
        //   withCredentials: true,
        //   rewrite: (path) => path.replace(/^\/api/, ``),
        // },
        // port: env.VITE_PORT,
    //   },
    // },
    build: {
      rollupOptions: {
        // Add the custom server entry point to the input options
        input: {
          main: path.resolve(__dirname, 'src/main.jsx'), // Replace with your main entry file
          server: path.resolve(__dirname, 'server.cjs'), // Add your custom server entry file here
        },
      },
      outDir: 'dist',
      sourcemap: true,
      minify: true,
      chunkSizeWarningLimit: 10000000, // Set your preferred limit in bytes
    }
  }
})
