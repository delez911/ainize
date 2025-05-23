import { defineConfig } from 'vite'
import path from 'path'
const domains = [
  'www.ainize.space',
  'ainize.space',
  'ainize.xyz',
  'www.ainize.xyz'
];

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        techco_claude: path.resolve(__dirname, 'techco_claude.html'),
        techco_gemini: path.resolve(__dirname, 'techco_gemini.html')
      }
    }
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
