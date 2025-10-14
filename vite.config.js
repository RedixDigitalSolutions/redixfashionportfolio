import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/redixfashionportfolio/',
  publicDir: 'public', // Explicitly set public directory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true // Ensure public files are copied
  }
})
