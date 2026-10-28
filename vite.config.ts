import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages serves this repo from /allaboutjess/.
  // Keep local development at / so the existing preview URL still works.
  base: process.env.GITHUB_ACTIONS ? '/allaboutjess/' : '/',
  plugins: [react()],
})
