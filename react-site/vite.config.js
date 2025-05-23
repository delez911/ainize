import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const domains = [
  'www.aizine.space',
  'aizine.space',
  'aizine.xyz',
  'www.aizine.xyz'
];
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public',
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    allowedHosts: domains,
    hmr: {
      overlay: false
    }
  }
})
