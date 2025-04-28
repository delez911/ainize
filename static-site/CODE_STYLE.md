# CSi.DAO 静态站点项目编码规范

## 一、技术选型
- 前端：HTML5、CSS3、JavaScript
- 构建工具：Vite
- 样式管理：Tailwind CSS、PostCSS、Autoprefixer
- 版本控制：Git

## 二、目录结构
```
static-site/
├── package.json           # 依赖与脚本
├── vite.config.js         # Vite配置
├── index.html             # 主页面
├── techco_claude.html     # Claude页面
├── techco_gemini.html     # Gemini页面
├── public/                # 静态资源
│   ├── css/               # 样式文件
│   │   └── styles.css     # 主样式文件
│   ├── js/                # JavaScript文件
│   │   └── main.js        # 主脚本文件
│   └── data/              # 数据文件
│       ├── sections.json  # 章节配置
│       └── sections/      # 章节内容HTML文件
└── node_modules/          # 依赖包
```

## 三、文件职责
- `package.json`：依赖与脚本管理
- `vite.config.js`：Vite 构建配置
- `index.html`：主页面，基本结构和引用
- `public/css/styles.css`：所有样式统一管理
- `public/js/main.js`：负责加载和渲染章节内容
- `public/data/sections.json`：章节配置信息
- `public/data/sections/`：各章节的HTML内容文件

## 四、代码风格
- 文件命名：全部小写，单词间用连字符（-）
- 变量命名：JS 使用 camelCase，CSS 使用 kebab-case
- 组件开发：单一职责原则，每个组件只做一件事
- 提交规范：Conventional Commits 格式

## 五、样式管理
- 所有样式统一在 `public/css/styles.css` 中管理
- 使用 PostCSS 和 Autoprefixer 保证兼容性
- 避免内联样式，保持HTML结构简洁

## 六、内容管理
- 所有章节内容以独立HTML文件存放在 `public/data/sections/` 目录
- 章节配置信息统一在 `public/data/sections.json` 中管理
- 通过JavaScript动态加载章节内容，实现内容与结构分离

## 七、构建与开发流程
- 启动开发环境：`npm run dev`
- 生产构建：`npm run build`
- 预览生产构建：`npm run preview`
- 清理构建：`npm run clean`

## 八、部署要求
- Node.js >= 14.0.0
- npm >= 6.0.0
- 仅支持现代浏览器（ES6+）

## 九、最佳实践
- 内容与结构分离，便于维护和更新
- 样式集中管理，保持一致性
- 充分利用 Vite 热更新和构建优化能力
- 所有依赖和脚本均在 `package.json` 明确声明

## 十、添加新章节流程
1. 在 `public/data/sections/` 目录创建新的HTML内容文件
2. 在 `public/data/sections.json` 中添加新章节的配置信息
3. 无需修改JavaScript代码，系统会自动加载新章节

## 十一、多页面管理
- 每个HTML页面（如index.html、techco_claude.html等）均为独立页面
- 在 `vite.config.js` 的 `rollupOptions.input` 中配置多入口
- 每个页面可以使用相同的样式和脚本，也可以根据需要使用不同的资源

---
如需进一步细化，可将本规范补充进 `README.md` 或创建专门的文档目录。