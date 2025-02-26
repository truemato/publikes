// ui/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  // ここで明示的に root を指定
  root: __dirname,
  plugins: [react()],

  // 出力先などを調整したい場合
  build: {
    // outDir: '../dist', // 親階層に出力する例
    // rollupOptions: { ... }
  }
})