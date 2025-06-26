import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adiciona o caminho base para o deploy no GitHub Pages
  base: '/meuprimeirorepositorio/'
})