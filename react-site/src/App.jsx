import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import RAASBusinessModel from './pages/RAASBusinessModel';

const documentTypes = [
  {
    id: 1,
    title: "投流商业模式规划-RAAS",
    description: "了解项目的整体规划与目标",
    icon: "📚",
    link: "/overview"
  },
  {
    id: 2,
    title: "商业计划书",
    description: "详细的项目商业规划与市场分析",
    icon: "📊",
    link: "/business-plan"
  },
  {
    id: 3,
    title: "技术白皮书",
    description: "核心技术架构与实现方案",
    icon: "⚡",
    link: "/tech-whitepaper"
  },
  {
    id: 4,
    title: "开发文档",
    description: "API文档与开发指南",
    icon: "💻",
    link: "/dev-docs"
  },
  {
    id: 5,
    title: "设计规范",
    description: "UI/UX设计指南与组件库",
    icon: "🎨",
    link: "/design-system"
  },
  {
    id: 6,
    title: "项目路线图",
    description: "未来发展规划与里程碑",
    icon: "🗺️",
    link: "/roadmap"
  }
]

const projects = [
  {
    id: 1,
    name: "游戏与商户券智能自动化投流-RAAS",
    description: "智能对话与任务处理系统",
    icon: "🤖",
    status: "进行中",
    lastUpdated: "2024-03-20"
  },
  {
    id: 2,
    name: "区块链钱包",
    description: "安全的多链数字资产管理",
    icon: "💎",
    status: "规划中",
    lastUpdated: "2024-03-19"
  },
  {
    id: 3,
    name: "元宇宙社交平台",
    description: "3D虚拟社交与互动体验",
    icon: "🌐",
    status: "概念阶段",
    lastUpdated: "2024-03-18"
  }
]

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
              <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">创意项目文档中心</h1>
                <p className="text-lg text-gray-600">探索我们的项目系列文档，从概览到技术细节</p>
              </header>

              <div className="space-y-12">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* 项目标题区域 */}
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-start space-x-4">
                        <span className="text-4xl">{project.icon}</span>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h2>
                          <p className="text-gray-600 mb-3">{project.description}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <span className="px-3 py-1 bg-gray-100 rounded-full">{project.status}</span>
                            <span>更新于 {project.lastUpdated}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 文档类型网格 */}
                    <div className="p-6 bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {documentTypes.map((doc) => (
                          <a
                            key={doc.id}
                            href={`/projects/${project.id}${doc.link}`}
                            className="block p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-102"
                          >
                            <div className="flex items-start space-x-3">
                              <span className="text-3xl">{doc.icon}</span>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{doc.title}</h3>
                                <p className="text-sm text-gray-600">{doc.description}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        } />
        <Route path="/projects/1/overview" element={<RAASBusinessModel />} />
      </Routes>
    </Router>
  )
}

export default App
