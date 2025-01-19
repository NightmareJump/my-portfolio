import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/',  // 这里填你的仓库名
  plugins: [react()],
})
