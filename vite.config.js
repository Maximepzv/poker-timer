import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ include: /\.(js|jsx|ts|tsx)$/ })],
  server: {
    hmr: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@views': path.resolve(__dirname, 'src/views/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@app': path.resolve(__dirname, 'src/'),
      '@public': path.resolve(__dirname, 'public/'),
    },
  },
})