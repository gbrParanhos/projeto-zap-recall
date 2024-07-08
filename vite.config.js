import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  base: '',
  build: {
    outDir: '../dist', // saída para a pasta dist na raiz do projeto
    emptyOutDir: true,
  },
  server: {
    open: 'index.html', // abrir o index.html da pasta public
  },
})
