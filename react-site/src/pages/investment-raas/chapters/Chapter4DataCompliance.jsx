import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, MapPin, ShoppingCart, Target, Users, TrendingUp, BarChart3, PieChart, LineChart, Activity } from 'lucide-react';
import Chapter4EcommerceCompliance from './Chapter4EcommerceCompliance';
import Chapter4GameCompliance from './Chapter4GameCompliance';
import Chapter4O2OCompliance from './Chapter4O2OCompliance';

const Chapter4DataCompliance = () => {
  const [activeSection, setActiveSection] = useState('game');
  
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* 侧边导航 */}
        <aside className="w-full md:w-64 bg-slate-800 text-slate-100 p-4 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
          <Card className="bg-slate-700 border-slate-600">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-white text-center md:text-left">
                <Activity className="inline-block w-6 h-6 mr-2" />
                RaaS行业方案
              </CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                <button
                  onClick={() => scrollToSection('game')}
                  className={`w-full text-left flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white ${
                    activeSection === 'game' ? 'bg-sky-600 text-white' : ''
                  }`}
                >
                  <Gamepad2 className="w-4 h-4 mr-2" />
                  游戏行业
                </button>
                <button
                  onClick={() => scrollToSection('o2o')}
                  className={`w-full text-left flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white ${
                    activeSection === 'o2o' ? 'bg-sky-600 text-white' : ''
                  }`}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  O2O/本地生活
                </button>
                <button
                  onClick={() => scrollToSection('ecommerce')}
                  className={`w-full text-left flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white ${
                    activeSection === 'ecommerce' ? 'bg-sky-600 text-white' : ''
                  }`}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  电商/跨境商户
                </button>
              </nav>
              <div className="mt-8 pt-6 text-center text-xs text-slate-400 border-t border-slate-600">
                <p>数智投流平台</p>
                <p>&copy; 2025</p>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* 主要内容区域 */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          {/* 介绍部分 */}
          <Card className="mb-10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-sky-600 flex items-center">
                <Target className="w-8 h-8 mr-3" />
                数智投流RaaS解决方案：典型应用场景
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-600 leading-relaxed">
                本应用旨在交互式展示数智投流平台在游戏、O2O/本地生活服务以及电商/跨境商户三大典型行业的下一代RaaS（结果即服务）解决方案。我们将深入探讨各行业的核心痛点，并阐述平台如何凭借其AI原生架构、多Agent协作系统以及创新的"价值券化"商业逻辑，通过智能化、结果导向的RaaS模式交付可衡量的业务"结果"。传统的投放模式依赖人工经验与简单的机器学习规则，而我们的平台则全面拥抱大模型与Agent技术，通过AI原生设计重构投放的每一个环节，实现从策略规划、创意生成、智能出价到效果归因与自我进化的全链路智能闭环。
              </p>
            </CardContent>
          </Card>

          {/* 游戏行业部分 */}
          <section id="game" className="mb-12">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-sky-600 flex items-center">
                  <Gamepad2 className="w-8 h-8 mr-3" />
                  游戏行业：以"AI Agent驱动的有效用户激活"与"价值券化LTV提升"为核心的RaaS方案
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  游戏行业广告投放竞争激烈，用户获取成本（CAC）持续攀升。本节将阐述平台如何通过AI Agent驱动并以"价值券化"为核心机制的下一代RaaS解决方案，应对行业挑战并交付核心业务成果。
                </p>

                <Card className="bg-slate-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-sky-700 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      场景特点与核心痛点
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="bg-red-50 border-red-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md font-semibold text-red-700">用户LTV高度分化</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-red-600">少量核心付费用户贡献绝大部分收入，精准识别和获取高LTV潜力用户是ROI最大化的核心。</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-red-50 border-red-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md font-semibold text-red-700">营销节奏快，素材消耗迅速</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-red-600">产品更新迭代快，营销活动频繁。广告素材（尤其视频）生命周期短，用户易审美疲劳，对素材持续创新和高频迭代要求高。</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-red-50 border-red-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md font-semibold text-red-700">渠道多样化与效果差异</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-red-600">用户分散，不同类型游戏的目标用户和最佳获取渠道各不相同。</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-red-50 border-red-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md font-semibold text-red-700">投放目标多元且动态变化</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-red-600">不同发展阶段和游戏类型，核心KPI不同（用户规模、留存、付费率、ARPU、特定事件达成等）。</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-red-50 border-red-200 md:col-span-2">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md font-semibold text-red-700">数据孤岛与归因复杂性</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-red-600">游戏内行为数据、付费数据与广告投放数据分散，难以整合进行全链路分析和精准归因。</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-sky-700 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      平台能力适配与RaaS"结果"定义（AI Agent与价值券化驱动）
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-md font-semibold text-sky-600">AI Agent赋能的高价值用户识别与LTV预测及管理</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">
                          <span className="font-semibold text-sky-700">能力：</span>AI原生平台利用
                          <Badge variant="secondary" className="mx-1">用户画像构建Agent</Badge>
                          整合多维数据，构建动态、精细的游戏玩家画像。
                          <Badge variant="secondary" className="mx-1">LTV预测Agent</Badge>
                          预测用户长期价值。
                          <Badge variant="secondary" className="mx-1">策略Agent</Badge>
                          设计以LTV为核心的RaaS增长策略。
                          <Badge variant="secondary" className="mx-1">用户生命周期管理Agent</Badge>
                          通过"价值券"（如"专属回馈券"）提升用户活跃与付费。
                        </p>
                        <div className="bg-sky-50 p-3 rounded-lg">
                          <p className="font-semibold text-sky-700 mb-2">RaaS"结果"：</p>
                          <ul className="space-y-1 text-sm">
                            <li><strong>有效用户激活：</strong> 完成关键行为（如新手引导、次留）的高质量用户。通过"新手福利券"追踪。结算方式：有效CPA。</li>
                            <li><strong>用户付费转化：</strong> 新增用户首付或达约定付费金额。通过"首充特权券"追踪。结算方式：CPP或ROAS。</li>
                            <li><strong>提升用户LTV：</strong> 提升用户长期平均贡献。通过"忠诚度积分加速券"等提升。结算方式：与LTV增长挂钩。</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-md font-semibold text-sky-600">Agent驱动的高频智能素材生成与优化</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">
                          <span className="font-semibold text-sky-700">能力：</span>
                          <Badge variant="secondary" className="mx-1">多模态素材生成Agent</Badge>
                          利用AIGC技术快速产出多样化创意。
                          <Badge variant="secondary" className="mx-1">创意择优Agent</Badge>
                          结合A/B测试和
                          <Badge variant="secondary" className="mx-1">反思Agent</Badge>
                          分析筛选最佳素材。
                          <Badge variant="secondary" className="mx-1">个性化创意编排Agent</Badge>
                          驱动DCO，动态组合游戏特色与"福利券"信息。
                        </p>
                        <div className="bg-sky-50 p-3 rounded-lg">
                          <p className="font-semibold text-sky-700 mb-2">RaaS"结果"：</p>
                          <ul className="space-y-1 text-sm">
                            <li><strong>特定游戏内事件达成：</strong> 用户完成特定游戏内行为（如参与活动、购买礼包）。通过"活动参与加速券"激励。结算方式：CPE。</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-sky-700 flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      典型成效：某二次元策略卡牌手游案例
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 leading-relaxed">
                      客户在新游上线初期面临获客成本高、付费转化不理想的挑战。通过RaaS合作，约定以"完成新手引导且次日留存的用户数"和"首月ROAS"为核心结果。平台<Badge variant="outline">策略Agent</Badge>制定了以"有效激活+首月ROAS"为核心的RaaS方案，并将"新手限定福利券"作为提升激活质量的关键抓手。最终有效激活用户数超出目标15%，首月ROAS提升了47%，有效CPA降低了25%，"新手限定福利券"领取率75%，通过福利券激活的用户次日留存率较平均水平提升18%。
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="h-80 relative">
                        <canvas id="gameUserTypeChart"></canvas>
                      </div>
                      <p className="text-center text-sm text-slate-500 mt-2">图表1: 不同用户类型关键指标对比 (示例)</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="h-80 relative">
                        <canvas id="gameRoiChart"></canvas>
                      </div>
                      <p className="text-center text-sm text-slate-500 mt-2">图表2: AI Agent驱动的多渠道ROI贡献 (示例)</p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-sm text-slate-500">上述图表数据为示意，实际应用中将基于真实投放数据生成。图表展示了AI Agent在优化用户结构和提升渠道投放效率方面的潜力。</p>
              </CardContent>
            </Card>
          </section>
          <Chapter4GameCompliance />
          <Chapter4O2OCompliance />
          <Chapter4EcommerceCompliance />

        </main>
        </div>
    </div>);
}

export default Chapter4DataCompliance;