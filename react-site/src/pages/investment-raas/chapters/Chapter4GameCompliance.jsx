import React, { useEffect } from 'react';

const Chapter4GameCompliance = () => {

    useEffect(() => {
      // 初始化图表
      setTimeout(() => {
        initCharts();
      }, 100);
    }, []);
  
    const initCharts = () => {
      // 游戏用户类型对比图表
      if (window.Chart && document.getElementById('gameUserTypeChart')) {
        const ctx1 = document.getElementById('gameUserTypeChart').getContext('2d');
        new window.Chart(ctx1, {
          type: 'bar',
          data: {
            labels: ['高价值付费用户', '中等付费用户', '免费活跃用户', '流失用户'],
            datasets: [{
              label: 'LTV (生命周期价值)',
              data: [850, 280, 45, 8],
              backgroundColor: 'rgba(2, 132, 199, 0.8)',
              borderColor: 'rgb(2, 132, 199)',
              borderWidth: 1
            }, {
              label: '留存率 (%)',
              data: [78, 52, 35, 12],
              backgroundColor: 'rgba(34, 197, 94, 0.8)',
              borderColor: 'rgb(34, 197, 94)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: '不同用户类型关键指标对比'
              }
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
  
      // 游戏ROI分布图表
      if (window.Chart && document.getElementById('gameRoiChart')) {
        const ctx2 = document.getElementById('gameRoiChart').getContext('2d');
        new window.Chart(ctx2, {
          type: 'doughnut',
          data: {
            labels: ['信息流广告', '视频广告', '搜索广告', '社交媒体', '再营销'],
            datasets: [{
              data: [35, 28, 18, 12, 7],
              backgroundColor: [
                'rgba(2, 132, 199, 0.8)',
                'rgba(34, 197, 94, 0.8)',
                'rgba(251, 191, 36, 0.8)',
                'rgba(239, 68, 68, 0.8)',
                'rgba(147, 51, 234, 0.8)'
              ]
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'AI Agent驱动的多渠道ROI贡献分布'
              }
            }
          }
        });
      }
    };
    
    return (
        <section id="game" class="content-section pt-16 -mt-16 mb-12">
            <div class="p-6 bg-white rounded-lg shadow-md">
                <h2 class="text-3xl font-bold text-sky-600 mb-3">🎮 游戏行业：以“AI Agent驱动的有效用户激活”与“价值券化LTV提升”为核心的RaaS方案</h2>
                <p class="text-gray-600 mb-6">游戏行业广告投放竞争激烈，用户获取成本（CAC）持续攀升。本节将阐述平台如何通过AI Agent驱动并以“价值券化”为核心机制的下一代RaaS解决方案，应对行业挑战并交付核心业务成果。</p>

                <h3>场景特点与核心痛点</h3>
                <div class="grid md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h4 class="text-red-700">用户LTV高度分化</h4>
                        <p>少量核心付费用户贡献绝大部分收入，精准识别和获取高LTV潜力用户是ROI最大化的核心。</p>
                    </div>
                    <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h4 class="text-red-700">营销节奏快，素材消耗迅速</h4>
                        <p>产品更新迭代快，营销活动频繁。广告素材（尤其视频）生命周期短，用户易审美疲劳，对素材持续创新和高频迭代要求高。</p>
                    </div>
                    <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h4 class="text-red-700">渠道多样化与效果差异</h4>
                        <p>用户分散，不同类型游戏的目标用户和最佳获取渠道各不相同。</p>
                    </div>
                    <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h4 class="text-red-700">投放目标多元且动态变化</h4>
                        <p>不同发展阶段和游戏类型，核心KPI不同（用户规模、留存、付费率、ARPU、特定事件达成等）。</p>
                    </div>
                    <div class="bg-red-50 p-4 rounded-lg border border-red-200 md:col-span-2">
                        <h4 class="text-red-700">数据孤岛与归因复杂性</h4>
                        <p>游戏内行为数据、付费数据与广告投放数据分散，难以整合进行全链路分析和精准归因。</p>
                    </div>
                </div>

                <h3>平台能力适配与RaaS“结果”定义（AI Agent与价值券化驱动）</h3>
                
                <h4>AI Agent赋能的高价值用户识别与LTV预测及管理</h4>
                <p class="mb-2"><span class="font-semibold text-sky-700">能力：</span>AI原生平台利用<span class="badge bg-sky-100 text-sky-700">用户画像构建Agent</span>整合多维数据，构建动态、精细的游戏玩家画像。<span class="badge bg-sky-100 text-sky-700">LTV预测Agent</span>预测用户长期价值。<span class="badge bg-sky-100 text-sky-700">策略Agent</span>设计以LTV为核心的RaaS增长策略。<span class="badge bg-sky-100 text-sky-700">用户生命周期管理Agent</span>通过“价值券”（如“专属回馈券”）提升用户活跃与付费。</p>
                <p class="font-semibold mt-2 mb-1 text-sky-700">RaaS“结果”：</p>
                <ul>
                    <li><strong>有效用户激活 (Effective User Activation)：</strong> 完成关键行为（如新手引导、次留）的高质量用户。通过“新手福利券”追踪。结算方式：有效CPA。</li>
                    <li><strong>用户付费转化 (User Monetization Conversion)：</strong> 新增用户首付或达约定付费金额。通过“首充特权券”追踪。结算方式：CPP或ROAS。</li>
                    <li><strong>提升用户LTV (Improvement of User LTV)：</strong> 提升用户长期平均贡献。通过“忠诚度积分加速券”等提升。结算方式：与LTV增长挂钩。</li>
                </ul>

                <h4>Agent驱动的高频智能素材生成与优化</h4>
                <p class="mb-2"><span class="font-semibold text-sky-700">能力：</span><span class="badge bg-sky-100 text-sky-700">多模态素材生成Agent</span>利用AIGC技术快速产出多样化创意。<span class="badge bg-sky-100 text-sky-700">创意择优Agent</span>结合A/B测试和<span class="badge bg-sky-100 text-sky-700">反思Agent</span>分析筛选最佳素材。<span class="badge bg-sky-100 text-sky-700">个性化创意编排Agent</span>驱动DCO，动态组合游戏特色与“福利券”信息。</p>
                <p class="font-semibold mt-2 mb-1 text-sky-700">RaaS“结果”：</p>
                <ul>
                    <li><strong>特定游戏内事件达成 (In-Game Event Achievement)：</strong> 用户完成特定游戏内行为（如参与活动、购买礼包）。通过“活动参与加速券”激励。结算方式：CPE。</li>
                </ul>

                <h4>多Agent协同的智能渠道组合与预算优化</h4>
                <p class="mb-2"><span class="font-semibold text-sky-700">能力：</span><span class="badge bg-sky-100 text-sky-700">策略Agent</span>规划跨渠道预算与投放节奏。<span class="badge bg-sky-100 text-sky-700">竞价环境感知Agent</span>监控竞价态势。<span class="badge bg-sky-100 text-sky-700">智能出价Agent</span>基于“二价探测”与LTV预估动态出价。<span class="badge bg-sky-100 text-sky-700">Pacing与预算管理Agent</span>利用MCP技术控制预算消耗。<span class="badge bg-sky-100 text-sky-700">反思Agent</span>评估ROI并协同优化。<span class="badge bg-sky-100 text-sky-700">再营销Agent</span>精准触达高潜力用户。<span class="badge bg-sky-100 text-sky-700">元学习Agent</span>全局监控与学习，实现系统自我进化。</p>
                <p class="font-semibold mt-2 mb-1 text-sky-700">RaaS“结果”：</p>
                <ul>
                    <li>平台致力于在约定成本内，通过多Agent高效协作，为游戏带来约定数量的、符合质量标准的各类“结果”。</li>
                </ul>
                
                <h3>典型成效：某二次元策略卡牌手游案例</h3>
                <p>客户在新游上线初期面临获客成本高、付费转化不理想的挑战。通过RaaS合作，约定以“完成新手引导且次日留存的用户数”和“首月ROAS”为核心结果。平台**策略Agent**制定了以“有效激活+首月ROAS”为核心的RaaS方案，并将“新手限定福利券”作为提升激活质量的关键抓手。**用户画像构建Agent**精准定位二次元高兴趣人群，并指导**Lookalike拓展Agent**寻找高付费潜力相似用户。**多模态素材生成Agent**快速迭代视频素材，由**创意择优Agent**通过A/B测试筛选。**智能出价Agent**与**Pacing与预算管理Agent**紧密协作。**反思Agent**在3周内推动了12轮微调。最终有效激活用户数超出目标15%，首月ROAS提升了47%，有效CPA降低了25%，“新手限定福利券”领取率75%，通过福利券激活的用户次日留存率较平均水平提升18%。</p>

                <div class="grid md:grid-cols-2 gap-6 mt-8">
                    <div class="chart-container h-80 md:h-96 max-w-lg">
                        <canvas id="gameUserTypeChart"></canvas>
                        <p class="text-center text-sm text-gray-500 mt-2">图表1: 不同用户类型关键指标对比 (示例)</p>
                    </div>
                    <div class="chart-container h-80 md:h-96 max-w-lg">
                        <canvas id="gameRoiChart"></canvas>
                        <p class="text-center text-sm text-gray-500 mt-2">图表2: AI Agent驱动的多渠道ROI贡献 (示例)</p>
                    </div>
                </div>
                <p class="text-sm text-gray-500 mt-4">上述图表数据为示意，实际应用中将基于真实投放数据生成。图表展示了AI Agent在优化用户结构和提升渠道投放效率方面的潜力。</p>
            </div>
        </section>);
}

export default Chapter4GameCompliance; 