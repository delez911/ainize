import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'
import fs from 'fs'

// 读取HTML文件内容的函数
function loadHtmlFile(filePath) {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    return fs.readFileSync(fullPath, 'utf8')
  } catch (error) {
    console.error(`Error loading HTML file: ${filePath}`, error)
    return ''
  }
}

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'CSi.DAO - 碳硅自主协同网络科技',
          sections: [
            { 
              id: 'overview',
              title: '1. 公司概述',
              content: loadHtmlFile('src/components/overview/overview.html')
            },
            {
              id: 'market',
              title: '2. 市场机会',
              content: loadHtmlFile('src/components/market/market.html')
            },
            {
              id: 'business',
              title: '3. 商业模式',
              content: loadHtmlFile('src/components/business/business.html')
            },
            {
              id: 'structure',
              title: '4. 公司结构与利益相关者',
              content: loadHtmlFile('src/components/structure/structure.html')
            },
            {
              id: 'technology',
              title: '5. 技术架构',
              content: loadHtmlFile('src/components/technology/technology.html')
            },
            {
              id: 'development',
              title: '6. 发展规划',
              content: loadHtmlFile('src/components/development/development.html')
            }
          ]
        }
      }
    })
  ]
}) 