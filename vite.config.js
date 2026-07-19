import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project site: https://mortadha-dev1.github.io/porfolio/
  base: '/porfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
