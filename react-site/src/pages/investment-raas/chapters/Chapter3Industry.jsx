import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const sections = [
  { id: 'section-3-1', label: '3.1 平台技术架构概览' },
  { id: 'section-3-2', label: '3.2 关键智能体集群' },
  { id: 'section-3-3', label: '3.3 数据中台能力' },
  { id: 'section-3-4', label: '3.4 AI原生Agent系统运作机制' },
];

const tabs32 = [
  { value: 'tab-3-2-1', label: '3.2.1 出价与预算' },
  { value: 'tab-3-2-2', label: '3.2.2 人群定向' },
  { value: 'tab-3-2-3', label: '3.2.3 创意素材' },
  { value: 'tab-3-2-4', label: '3.2.4 跨渠道投放' },
  { value: 'tab-3-2-5', label: '3.2.5 效果追踪' },
];

const Chapter3Industry = () => {
  const [activeSection, setActiveSection] = useState('section-3-1');
  const [tab32, setTab32] = useState('tab-3-2-1');

  // 侧边导航点击切换section
  const handleNavClick = (id) => {
    setActiveSection(id);
    if (id === 'section-3-2') setTab32('tab-3-2-1');
  };

  return (
    <section id="chapter3" className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Side Nav */}
          <aside className="w-full md:w-64 bg-white shadow-lg p-4 space-y-2">
            <h1 className="text-xl font-bold text-amber-600 mb-6 border-b pb-2 border-amber-300">RaaS方案第三章导航</h1>
            <nav>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-amber-100 hover:text-amber-700 ${activeSection === s.id ? 'bg-amber-500 text-white' : ''}`}
                  onClick={e => { e.preventDefault(); handleNavClick(s.id); }}
                >
                  {s.label}
                </a>
              ))}
              {/* 3.2 子导航 */}
              {activeSection === 'section-3-2' && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-amber-200 pl-2">
                  {tabs32.map(tab => (
                    <a
                      key={tab.value}
                      href={`#${tab.value}`}
                      className={`block py-1.5 px-2 text-sm rounded hover:bg-amber-50 hover:text-amber-600 ${tab32 === tab.value ? 'bg-amber-100 text-amber-600 font-semibold' : ''}`}
                      onClick={e => { e.preventDefault(); setTab32(tab.value); }}
                    >
                      {tab.label}
                    </a>
                  ))}
                </div>
              )}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 md:p-10 overflow-y-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-neutral-900">第三章：AI原生与Agent驱动的RaaS平台核心技术架构与模块</h1>
              <p className="mt-2 text-lg text-neutral-600">RaaS（Result-as-a-Service）平台的效能和价值承诺，已从传统的自动化和初级智能，跃迁至一个以大语言模型（LLMs）、多模态模型及高级多Agent系统为核心驱动的AI原生新代际。本章将深入剖析平台在这一新代际下的核心技术架构、关键智能体（Agent）集群、数据中台能力，以及这些先进AI技术如何协同运作，实现"结果即服务"的商业模式，并特别关注其在"券"经济下的游戏与商户券投流商业代际中的创新应用。</p>
            </header>

            {/* Section 3.1 */}
            {activeSection === 'section-3-1' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>3.1 平台技术架构概览：迈向大模型与Agent驱动的AI原生新代际</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>数智投流平台的设计理念彻底拥抱AI原生，其技术架构的核心已不再是简单的规则引擎或孤立的机器学习模型，而是<strong>一个由大模型赋能、多Agent协同驱动的智能化、自主化生态系统</strong>。平台构建于先进的微服务架构和云原生技术栈之上，并以数据驱动作为其核心运作原则，旨在实现前所未有的投放效率、结果精准度和持续进化能力。</p>
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-semibold text-neutral-800 mb-3">核心架构特点（新代际）</h3>
                      <ul className="list-disc list-inside space-y-2 text-neutral-700">
                        <li><strong>AI原生与大模型驱动 (AI-Native & LLM-Powered)：</strong>平台的核心决策与执行逻辑由大语言模型、多模态大模型及一系列专用AI模型驱动。这些模型不仅用于预测（如CTR/CVR），更深度参与理解（用户意图、市场动态、创意内涵）、生成（个性化素材、策略方案）、推理（因果分析、优化路径）和规划（任务分解、Agent协同）。</li>
                        <li><strong>多Agent协同系统 (Multi-Agent System, MAS)：</strong>取代传统的模块化功能堆砌，平台的核心业务流程由一个包含多个专业智能体（Agent）的系统来执行。具备自主规划、委托式执行、工具使用、以及与其他Agent通信协作的能力。这标志着从RPA式的自动化向真正Agentic Workflow的代际转变。</li>
                        <li><strong>数据驱动与持续进化 (Data-Driven & Continuous Evolution)：</strong>数据不仅用于训练模型，更是Agent学习和进化的食粮。通过元学习Agent和反思机制，实现Agent能力的持续自我优化和对新模式的快速适应。</li>
                        <li><strong>云原生与微服务支撑 (Cloud-Native & Microservices Support)：</strong>云计算平台提供的弹性资源、容器化、编排、服务网格等技术，为大模型的高效部署与推理、多Agent系统的稳定运行与按需扩展提供了坚实的基础设施保障。</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-semibold text-neutral-800 mb-3">架构图示意（新代际）</h3>
                      <p className="text-neutral-700 mb-4">（理想情况下，此处应为一张动态的、可交互的架构图。由于HTML限制，此处用文字描述结合简化示意图呈现。）</p>
                      <p className="text-neutral-600 italic mb-4">平台新代际架构包含感知与交互层、认知与决策核心层、执行与行动层、反思与进化层及基础支撑层。各层级包含不同智能体集群，通过数据中台与模型服务平台进行交互与协同工作，由大模型赋能核心智能。</p>
                      <div className="border border-dashed border-amber-400 p-4 rounded-lg bg-amber-50">
                        <h4 className="text-lg font-medium text-amber-700 mb-2">核心层级与智能体集群（简化示意）</h4>
                        <div className="space-y-3">
                          <div className="diagram-box">感知与交互层 (数据采集Agent, 用户/客户交互Agent)</div>
                          <div className="diagram-arrow">↓</div>
                          <div className="diagram-box">认知与决策核心层 (中央策略Agent, 用户理解Agent, 预测评估Agent, 创意智能Agent) <span className="text-sm text-amber-600">(大模型赋能)</span></div>
                          <div className="diagram-arrow">↓</div>
                          <div className="diagram-box">执行与行动层 (出价预算Agent集群, 多渠道投放Agent, 效果追踪Agent)</div>
                          <div className="diagram-arrow">↑ ↓</div>
                          <div className="diagram-box">反思与进化层 (反思优化Agent, 元学习Agent)</div>
                          <div className="diagram-arrow">↑</div>
                          <div className="diagram-box">基础支撑层 (数据中台, 模型即服务平台, 工具与API集成)</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-semibold text-neutral-800 mb-3">核心技术栈（新代际示例）</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-700">
                        <div>
                          <h4 className="font-medium text-neutral-800">AI/ML/LLM:</h4>
                          <ul className="list-disc list-inside ml-4 text-sm">
                            <li>TensorFlow, PyTorch, LangChain, LlamaIndex</li>
                            <li>Hugging Face Transformers, OpenAI API, Google Gemini API</li>
                            <li>多模态模型 (CLIP, DALL-E, Stable Diffusion, Sora-like)</li>
                            <li>强化学习库 (Ray RLlib), AutoML框架</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-neutral-800">Agent框架与技术:</h4>
                          <ul className="list-disc list-inside ml-4 text-sm">
                            <li>AutoGen, CrewAI, AgentVerse</li>
                            <li>Actor Model (Akka), Semantic Kernel</li>
                            <li>Agentic Workflow编排工具</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-neutral-800">大数据与流处理:</h4>
                          <ul className="list-disc list-inside ml-4 text-sm">
                            <li>Kafka, Flink, Spark, Hadoop Ecosystem</li>
                            <li>ClickHouse, Doris</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-neutral-800">云计算与容器化:</h4>
                          <ul className="list-disc list-inside ml-4 text-sm">
                            <li>AWS/Azure/GCP/阿里云/腾讯云</li>
                            <li>Docker, Kubernetes, Istio/Linkerd, Serverless</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-neutral-800">数据库:</h4>
                          <ul className="list-disc list-inside ml-4 text-sm">
                            <li>PostgreSQL, MongoDB, Cassandra, HBase</li>
                            <li>Redis, Aerospike</li>
                            <li>Vector Databases (Pinecone, Milvus, Weaviate)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-neutral-800">任务调度与编程语言:</h4>
                          <ul className="list-disc list-inside ml-4 text-sm">
                            <li>Airflow, Argo Workflows, Kubeflow Pipelines</li>
                            <li>Python (主导), Scala, Go, Java</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Section 3.2 - Tabs */}
            {activeSection === 'section-3-2' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>3.2 关键智能体集群与核心技术详解</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs value={tab32} onValueChange={setTab32} className="w-full">
                      <TabsList className="mb-4">
                        {tabs32.map(tab => (
                          <TabsTrigger key={tab.value} value={tab.value} className="whitespace-nowrap">
                            {tab.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {/* Tab Contents */}
                      <TabsContent value="tab-3-2-1">
                        <Card className="mb-4 agent-card">
                          <CardHeader>
                            <CardTitle>3.2.1 智能出价与预算分配Agent集群</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-neutral-700">该Agent集群是确保ROI最大化的核心，负责在动态的竞价环境中，以最优成本获取最有价值的曝光机会，并高效管理广告预算。</p>
                            <div className="agent-card p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-neutral-800">核心能力与Agent职责：</h4>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-neutral-700 text-sm">
                                <li><strong>竞价环境感知Agent:</strong> 持续监控各媒体平台的实时竞价环境（竞争激烈程度、市场价格波动等）。技术：实时数据流分析，机器学习预测，大模型辅助理解。</li>
                                <li><strong>出价决策Agent:</strong> 毫秒级内生成最优出价。技术：基于"二价探测"思想的智能Bid Shading，动态出价模型，自动化出价策略。</li>
                                <li><strong>Pacing与预算控制Agent:</strong> 确保预算在投放周期内平稳、有效地消耗。技术：先进Pacing算法（PID, MPC），强化学习探索，大模型辅助权衡。</li>
                                <li><strong>跨平台预算协同Agent:</strong> 全局预算优化分配，确保整体ROI最大化。技术：多目标优化算法。</li>
                              </ul>
                            </div>
                            <div className="agent-card p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-neutral-800">Agent协同方式：</h4>
                              <p className="text-neutral-700 text-sm">感知Agent传递市场洞察给决策Agent和Pacing Agent。决策Agent根据信息和策略指导生成出价。Pacing Agent调控决策Agent的积极性。所有行为和结果被记录供反思和元学习Agent分析优化。</p>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="tab-3-2-2">
                        <Card className="mb-4 agent-card">
                          <CardHeader>
                            <CardTitle>3.2.2 人群精准定向与动态扩展Agent</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-neutral-700">该Agent（或Agent集群）的核心职责是深度理解目标用户，实现精准的人群定向，并通过智能扩展技术持续发现高潜力新用户，为RaaS"结果"的达成提供高质量的流量基础。</p>
                            <div className="agent-card p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-neutral-800">核心能力与Agent职责：</h4>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-neutral-700 text-sm">
                                <li><strong>用户理解与洞察Agent:</strong> 整合多源数据，利用大模型（特别是多模态模型）构建深层用户画像，理解用户长期兴趣、短期意图、潜在需求等。</li>
                                <li><strong>精准定向策略生成Agent:</strong> 基于用户洞察和RaaS目标，自动生成或辅助生成最优定向策略组合。</li>
                                <li><strong>Lookalike与新客拓展Agent:</strong> 基于高价值种子用户，利用先进Lookalike算法模型智能寻找并触达相似高潜力新客户。</li>
                                <li><strong>ID Mapping与跨域识别服务 (工具):</strong> 依赖高效、合规的ID Mapping服务来构建统一用户视图。</li>
                                <li><strong>动态创意适配Agent (与创意智能Agent协同):</strong> 根据用户画像和情境，调用创意智能Agent或DCO引擎，实时组合和展示最相关的广告素材。</li>
                              </ul>
                            </div>
                            <div className="agent-card p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-neutral-800">Agent协同方式：</h4>
                              <p className="text-neutral-700 text-sm">用户理解Agent提供基础洞察。策略Agent制定大方向。精准定向策略生成Agent细化定向包。Lookalike Agent拓展新客。效果由追踪Agent监控，反思Agent评估，反馈给用户理解和策略Agent优化。</p>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="tab-3-2-3">
                        <Card className="mb-4 agent-card">
                          <CardHeader>
                            <CardTitle>3.2.3 创意素材智能生成与优选Agent集群</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-neutral-700">该Agent集群利用AIGC（特别是多模态大模型）的强大能力，实现广告素材的高效、规模化、个性化生成，并通过智能测试和迭代机制，持续优选出最能驱动RaaS"结果"的创意内容。"券"作为一种重要的营销载体，其设计、文案及与商品的组合也纳入本Agent集群的智能化范畴。</p>
                            <Alert variant="warning" className="my-3">
                              <AlertTitle>“券”经济新代际</AlertTitle>
                              <AlertDescription>
                                平台将“券”（折扣券、现金券、体验券、游戏币/道具券、会员体验券、邀请码等）视为核心转化驱动力。通过“一切实惠以券代之”的策略，提供明确、可追踪的优惠机会，极大增强广告吸引力和转化效率。平台型产品（如京东、美团的优惠券，游戏内购的虚拟币/道具/会员卡）的推广，也是这种“券”逻辑的延伸。
                              </AlertDescription>
                            </Alert>
                            <div className="agent-card p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-neutral-800">核心能力与Agent职责：</h4>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-neutral-700 text-sm">
                                <li><strong>创意需求理解与规划Agent:</strong> 基于RaaS目标、产品/服务信息（含"券"信息）、用户画像，利用大模型生成详细创意简报。</li>
                                <li><strong>多模态素材生成Agent:</strong> 核心AIGC执行者，利用多模态大模型自动化、规模化生成文案、图片、短视频、互动素材，包括"券"的视觉设计与信息融合。</li>
                                <li><strong>动态创意优化（DCO）执行Agent:</strong> 根据实时用户画像和情境，智能组合创意元素，动态展示最相关的优惠信息、适用商品、附近可用门店等（尤其针对"券"类广告）。</li>
                                <li><strong>A/B测试与素材优选Agent:</strong> 设计和执行科学的A/B测试（或MAB实验），验证不同创意版本、AIGC策略、DCO规则的效果，智能评估和筛选最佳方案。</li>
                                <li><strong>创意效果分析与迭代Agent (常与反思Agent协同):</strong> 监控素材效果，分析衰减规律，提炼优化洞察，指导素材生成Agent迭代创新。专门分析各类"券"的吸引力、核销路径和对RaaS"结果"的贡献。</li>
                              </ul>
                            </div>
                            <div className="agent-card p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-neutral-800">Agent协同方式：</h4>
                              <p className="text-neutral-700 text-sm">需求理解Agent规划 {'→'} 素材生成Agent产出 {'→'} A/B测试Agent验证 {'→'} DCO执行Agent个性化组合 {'→'} 效果分析Agent/反思Agent反馈，形成闭环优化。</p>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="tab-3-2-4">
                        <Card className="mb-4 agent-card">
                          <CardHeader>
                            <CardTitle>3.2.4 跨渠道投放与管理Agent</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-neutral-700">该Agent（或Agent集群）是RaaS平台策略的最终执行者，负责将经过智能决策的广告活动高效、准确地部署到广泛的媒体渠道，并进行持续的监控和管理。它彻底取代了传统的RPA脚本，进化为具备一定理解、适应和自主操作能力的智能体。</p>
                            <div className="agent-card p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-neutral-800">核心能力与Agent职责：</h4>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-neutral-700 text-sm">
                                <li><strong>多渠道投放指令解析与执行Agent:</strong> 智能解析来自策略Agent或广告主的投放指令，并转化为针对不同媒体平台的具体操作序列。</li>
                                <li><strong>API渠道自动化投放Agent:</strong> 通过与主流媒体平台的官方Marketing API深度集成，自动化执行广告活动全链路操作。</li>
                                <li><strong>Web Agent（UI Agent）辅助非API渠道投放:</strong> 采用先进的Web Agent技术（基于视觉与DOM的界面理解、任务规划与自主导航、人机协同）辅助在缺乏API的媒体平台进行投放。</li>
                                <li><strong>投放状态监控与预警Agent:</strong> 实时监控广告活动状态，当出现异常或达到预设阈值时，自动触发预警并通知相关Agent或人工运营。</li>
                                <li><strong>多账户统一管理与协同Agent:</strong> 支持广告主或代理商统一管理多个媒体平台上的广告账户，协调跨账户操作。</li>
                              </ul>
                            </div>
                            <div className="agent-card p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-neutral-800">Agent协同方式：</h4>
                              <p className="text-neutral-700 text-sm">投放执行Agent接收策略Agent指令，调用API渠道Agent或Web Agent执行。状态监控Agent持续反馈状态。所有执行数据由效果追踪Agent记录，反思Agent分析。</p>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="tab-3-2-5">
                        <Card className="mb-4 agent-card">
                          <CardHeader>
                            <CardTitle>3.2.5 效果追踪、归因与反作弊Agent集群</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-neutral-700">该Agent集群是RaaS模式"结果"可衡量、可信赖的守护者，负责精准追踪用户行为、科学评估各环节贡献，并智能识别和抵御广告作弊，确保每一份投入都导向真实有效的业务成果。</p>
                            <div className="agent-card p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-neutral-800">核心能力与Agent职责：</h4>
                              <ul className="list-disc list-inside ml-4 space-y-1 text-neutral-700 text-sm">
                                <li><strong>全链路多触点行为追踪Agent:</strong> 通过SDK/Pixel、S2S对接及ID Mapping服务，实时、准确、全面地采集用户从首次广告触达到最终RaaS"结果"的完整行为链路数据。</li>
                                <li><strong>智能归因分析Agent:</strong> 运用科学归因模型（支持DDA，探索因果推断），智能评估不同广告触点对最终RaaS"结果"的贡献价值，特别关注"券"的归因。</li>
                                <li><strong>投放-转化闭环反馈与优化Agent (与反思Agent协同):</strong> 将归因分析结果和RaaS"结果"实时达成情况，转化为可行动的优化洞察，反馈给相关Agent驱动系统迭代。</li>
                                <li><strong>ROI与RaaS结果监控及报告Agent:</strong> 提供实时、透明、可视化的ROI/ROAS监控，利用大模型辅助生成自然语言报告摘要和核心洞察。</li>
                                <li><strong>高级反作弊与流量甄别Agent:</strong> 构建主动式、多层次智能反作弊体系，有效识别和过滤无效流量、机器人点击、刷单/刷券行为等，具备进化能力。</li>
                              </ul>
                            </div>
                            <div className="agent-card p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-neutral-800">Agent协同方式：</h4>
                              <p className="text-neutral-700 text-sm">行为追踪Agent提供基础数据。归因Agent分析结果反馈给策略和优化Agent。反作弊Agent实时过滤无效流量，共享作弊模式信息提升整体防御。</p>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Section 3.3 */}
            {activeSection === 'section-3-3' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>3.3 数据中台能力 (Data Platform Capabilities) - Agent智能的基石</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-700">强大的数据中台是支撑整个多Agent系统高效运作、实现智能化和自动化的核心基石。它不仅提供数据，更提供数据驱动的"智能服务"，为各个Agent的感知、认知、决策和行动提供燃料和导航。</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">数据采集与实时处理层</h4>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-neutral-700">
                          <li>智能数据采集Agent (自动、高效、合规)</li>
                          <li>实时数据流处理引擎 (Flink, Spark Streaming)</li>
                          <li>特征工程平台与特征存储 (Feature Store)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">数据存储与管理层</h4>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-neutral-700">
                          <li>数据湖 (HDFS, S3, Delta Lake)</li>
                          <li>数据仓库 (ClickHouse, Snowflake, BigQuery)</li>
                          <li>向量数据库 (Pinecone, Milvus - 支持语义搜索)</li>
                          <li>知识图谱 (结构化背景知识与推理依据)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">数据治理与安全层</h4>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-neutral-700">
                          <li>元数据管理与数据血缘</li>
                          <li>数据质量监控与自动化修复</li>
                          <li>数据安全与隐私计算 (联邦学习, 安全多方计算)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">数据服务与AI赋能层</h4>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-neutral-700">
                          <li>统一数据服务API与SDK</li>
                          <li>模型即服务 (MaaS - 大模型封装与调用)</li>
                          <li>洞察即服务 (Insight-as-a-Service)</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-4 text-neutral-600 italic">数据中台不再仅仅是数据的"仓库"，而是进化为Agent的"智能伙伴"，全面赋能Agent集群的自主运作和持续进化。</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Section 3.4 */}
            {activeSection === 'section-3-4' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>3.4 AI原生Agent系统在RaaS中的核心运作机制</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-700">RaaS平台的AI原生特性，核心体现在其由**大模型赋能的多Agent协同系统**上。这套系统彻底改变了传统广告投放的逻辑，从基于规则和简单模型的自动化，进化为具备自主规划、学习、反思和协同能力的智能化新范式。</p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">委托式任务执行与自主规划</h4>
                        <p className="text-sm text-neutral-700">广告主通过自然语言或界面向**中央策略Agent**提出高级RaaS目标。Agent利用大模型理解并分解任务，委派给专业Agent执行。</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">专业Agent的分工与协作</h4>
                        <p className="text-sm text-neutral-700">策略Agent、投放Agent、素材Agent集群、出价与预算Agent集群、效果追踪与归因Agent、以及核心的**反思Agent**协同工作。Agent间通过标准化消息格式和通信协议（A2A）形成高效Agentic Workflow。</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">工具使用与环境交互</h4>
                        <p className="text-sm text-neutral-700">Agent具备调用外部API、内部服务、代码执行环境、Web Agent（UI操作）等多种"工具"的能力，与外部环境交互。MCP等技术辅助Agent理解和遵守工具使用规则。</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">自我学习与进化机制</h4>
                        <p className="text-sm text-neutral-700">所有Agent的决策和结果被记录，用于持续训练和优化内置AI模型。特定Agent采用强化学习框架自主进化。**元学习Agent**扮演"教练"角色，观察和优化整个多Agent系统的学习能力和协作模式。</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">自我反思与调整</h4>
                        <p className="text-sm text-neutral-700">**反思Agent**是智能迭代的关键，分析成功与失败，生成优化建议，指导短期调整、中期优化和长期进化，驱动整个投放策略框架和Agent行为模式的深层变革。</p>
                      </div>
                    </div>
                    <p className="mt-4 text-amber-700 font-semibold">这与传统的、依赖大量人工规则配置和简单机器学习模型辅助的投放系统，以及仅能执行固定流程的RPA技术，形成了根本的代际差异。</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default Chapter3Industry; 