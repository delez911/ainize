import React, { useState, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; // 引入Tabs组件
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'; // 假设 Card 组件也来自 ui

const Chapter5Operation = () => {
  const sectionsData = {
    section5_1: '5.1 RaaS与“券”化投流',
    section5_2: '5.2 AI原生与Agent智能',
    section5_3: '5.3 可扩展性与未来演进',
  };
  const sectionKeys = Object.keys(sectionsData);

  const [activeSection, setActiveSection] = useState('section5_1');
  const [openAgentCards, setOpenAgentCards] = useState({});
  const [activeEvolutionTab, setActiveEvolutionTab] = useState('evolution_current');
  const currentYear = new Date().getFullYear();

  const sectionRefs = useRef({}); // 用于存储对各内容区域DOM元素的引用

  // 当 activeSection 改变时，滚动到对应的区域
  
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const toggleAgentDetails = (cardId) => {
    setOpenAgentCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const showEvolutionTab = (tabId) => {
    setActiveEvolutionTab(tabId);
  };

  // Agent 卡片配置 (与之前相同)
  const agentCardsConfig = [
    { id: 'strategyAgent', title: '策略Agent (Strategy Agent)', details: [
        '职责：作为投放任务的“总指挥”或“项目经理”，负责深度理解广告主的RaaS目标。结合市场洞察、用户画像和历史投放数据，进行顶层策略规划和任务编排。',
        '能力：调用大模型进行市场分析、竞争态势评估、用户行为趋势预测。制定整合营销策略，分解宏观RaaS目标为子任务，并智能分配给执行Agent群。'
      ]
    },
    { id: 'adExecutionAgent', title: '投放执行Agent群 (Ad Execution Agent Swarm)', details: [
        '一组协同工作的专业Agent，负责具体投放策略的精细化执行。',
      ],
      subList: [
        '竞价环境感知Agent：“市场侦察兵”，持续监控竞价环境，提供实时情报。',
        '出价决策Agent：“精算出价师”，基于“二价探测”思想和强化学习模型，动态计算并执行最优出价。',
        'Pacing算法与预算管理Agent：“预算管家”，智能控制预算消耗节奏，平衡当前与未来机会。'
      ]
    },
    { id: 'creativeAgent', title: '创意Agent群 (Creative Agent Swarm)', details: [
        '负责广告素材的全生命周期智能化管理。',
      ],
      subList: [
        '素材生成Agent：“创意工匠”，利用AIGC技术，自动化、规模化、个性化生成多样素材初稿。',
        '素材择优Agent：“创意品鉴师”，与反思Agent协同，通过A/B测试、DCO引擎及数据分析，智能筛选、组合和优化创意。'
      ]
    },
    { id: 'reflectionAgent', title: '反思与优化Agent (Reflection & Optimization Agent)', details: [
        '职责：作为系统的“首席复盘官”和“持续改进顾问”，对投放过程、数据结果、成本效益及各执行Agent表现进行全面回顾与深度分析。',
        '能力：运用高级归因模型评估各要素贡献。识别瓶颈和优化空间，发现跨平台协同最佳路径，为策略Agent和元学习Agent提供优化建议。'
      ]
    },
    { id: 'metaLearningAgent', title: '元学习Agent (Meta-Learning Agent)', details: [
        '职责：作为整个Agent系统的“进化总工程师”或“学习加速器”，监控、记录和分析所有其他Agent的行为、决策、学习过程及其长期效果。',
        '能力：通过元学习算法，从海量历史经验中学习如何调整其他Agent的学习策略、模型参数或协作方式。驱动Agent群体进行更高效的自我进化和快速适应性调整。'
      ]
    }
  ];

  return (
    <section id="chapter5" className="py-16">
      <header className="bg-sky-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center">第五章：技术先进性总结</h1>
          <p className="text-center text-sky-200 mt-1">引领RaaS、场景投流及AI智能的代际跨越</p>
        </div>
      </header>

      {/* 使用 Tabs 组件作为主导航 */}
      <Tabs value={activeSection} onValueChange={handleSectionChange} className="sticky top-0 z-40 bg-white shadow-sm">
            <TabsList className="flex justify-center space-x-2 sm:space-x-4 py-3 overflow-x-auto">
            {sectionKeys.map((key) => (
                <TabsTrigger
                key={key}
                value={key}
                className="nav-button whitespace-nowrap text-sm sm:text-base px-3 py-2 font-medium rounded-md transition-colors duration-150 data-[state=active]:bg-sky-600 data-[state=active]:text-white text-slate-700 hover:bg-sky-100 hover:text-sky-700"
                >
                {sectionsData[key]}
                </TabsTrigger>
            ))}
            </TabsList>
        {/* 第一个主要部分 */}
        <TabsContent value="section5_1" ref={el => sectionRefs.current['section5_1'] = el} id="section5_1" className="outline-none ring-0 focus:ring-0">
            <h2 className="text-2xl font-semibold text-sky-700 mb-6 border-b-2 border-sky-200 pb-2">5.1 RaaS模式与“券”化投流的商业代际领先：从过程付费到结果共创</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <p className="mb-4 text-slate-700 leading-relaxed">传统的广告投放模式，无论是SaaS的工具订阅还是MaaS的资源采买，广告主往往仍需为过程和不确定的效果承担主要风险。本平台所倡导的RaaS模式，则标志着向“为结果付费”的根本性转变，构成了广告商业模式的代际领先。</p>
            
                <h3 className="text-xl font-semibold text-sky-600 mt-6 mb-4">5.1.1 “券”经济下的商业投流代际革新：以用户实惠驱动高效转化</h3>
                <p className="mb-4 text-slate-700 leading-relaxed">本平台深刻洞察到，在数字营销时代，单纯的“广而告之”已难以高效触动用户，而直接给予用户“优惠实惠”则能极大地提升转化效率和用户感知价值。我们创新性地将“券”作为连接广告主与用户的核心价值载体和“结果”的度量衡，引领了商业投流的代际革新：</p>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-lg font-medium text-slate-700 mb-1">1. 广告即实惠，转化新范式：</h4>
                        <p className="text-slate-600 leading-relaxed ml-4">我们将广告的核心诉求从“信息传递”升级为“价值交付”。用户接收到的不再仅仅是品牌信息，更是一次明确的优惠机会、一项可感知的实际利益。这种模式直接降低了用户的决策门槛，将潜在兴趣迅速转化为实际行动，从而显著提升广告的转化效率。传统广告依赖创意和曝光频次来影响用户心智，转化链路长且不确定；而“广告即实惠”的模式，通过前置利益点，将广告转化为一种即时激励，大大缩短了转化路径。</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-slate-700 mb-1">2. 万物皆可“券”，追踪更精准，结果更明确：</h4>
                        <p className="text-slate-600 leading-relaxed ml-4">平台将一切可量化的商业利益“券”化，使其成为可追踪、可归因、可优化的标准化“结果”单元。这种“券”可以是广义的，其核心是为用户提供明确的、可获取的价值凭证，具体形式包括但不限于：</p>
                        <ul className="list-disc list-inside ml-8 space-y-1 text-slate-600 mt-2">
                            <li><strong>电商平台/O2O服务</strong>：折扣券（如8折券）、现金抵扣券（如满100减20）、免运费券、服务体验券（如免费体验一次SPA）、会员体验卡（如7天视频会员）、商家联合促销券（如A店消费送B店优惠券）。例如，京东的“京豆”可抵现、美团的“外卖红包”、饿了么的“超级会员日”等均是“券”化思维的体现。</li>
                            <li><strong>游戏应用/订阅服务</strong>：游戏内虚拟货币/道具兑换码（如“新手礼包码”含100钻石）、高级功能试用券（如“7天高级版免费试用”）、会员月度/季度订阅体验券（如“首月1元体验会员”）、好友邀请码（邀请成功双方均可获得奖励）、内购折扣券（如特定道具购买8折）。</li>
                            <li><strong>内容平台/知识付费</strong>：课程优惠券（如“指定课程立减50元”）、付费内容阅读券（如“3篇付费文章免费阅读”）、社群入场券（如“限时免费加入VIP社群”）、电子书兑换码。</li>
                            <li><strong>品牌互动/用户增长</strong>：签到积分兑换券、参与活动抽奖券、新品试用申请资格券、用户调研参与感谢券等。</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed ml-4 mt-2">通过“券”的生成、发放、领取、核销、使用等全生命周期行为追踪，平台能够更精准地衡量广告效果，确保RaaS模式下的“结果”真实可信，为广告主提供清晰的ROI回报。这种精细化的追踪能力是传统展示广告或点击广告难以比拟的。</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-slate-700 mb-1">3. 场景化“券”应用，激发即时需求：</h4>
                        <p className="text-slate-600 leading-relaxed ml-4">结合LBS（基于位置的服务）、用户实时场景与意图分析（例如，通过分析用户正在浏览的内容、搜索的关键词、或当前所处的时间和环境），平台能够智能推送与用户当前需求高度相关的“券”。例如：</p>
                        <ul className="list-disc list-inside ml-8 space-y-1 text-slate-600 mt-2">
                            <li>向正在办公区附近且临近午餐时间的用户推送周边餐厅的“午市套餐优惠券”。</li>
                            <li>向正在浏览游戏攻略或观看游戏直播的用户推送该游戏的“新版本礼包兑换码”。</li>
                            <li>向在旅游APP上搜索特定目的地的用户推送该地酒店或景点的“早鸟折扣券”。</li>
                            <li>向在母婴论坛活跃的用户推送“纸尿裤品牌优惠券”。</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed ml-4 mt-2">这种场景化的“券”投放，能够有效激发用户的即时消费或互动意愿，将潜在需求转化为实际行动。</p>
                    </div>
                </div>
                <p className="mt-4 text-slate-700 font-medium leading-relaxed">这种以“券”为核心的商业投流模式，不仅通过前置利益点提升了广告的直接转化效果，更通过价值交付增强了用户互动和品牌好感度，是RaaS理念在商业实践中的重要体现，标志着从“曝光逻辑”到“价值交换逻辑”的商业代际转变。</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-sky-600 mb-4">5.1.2 RaaS模式的技术对比优势：AI原生赋能下的代际飞跃</h3>
                <p className="mb-6 text-slate-700 leading-relaxed">本平台的RaaS模式之所以能够实现代际领先，其背后是AI原生技术架构和高级Agent智能系统的强力支撑。这使得我们在与传统DSP、一般SaaS/MaaS方案的对比中，展现出全方位的技术优势：</p>
                <div className="table-responsive shadow-md rounded-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider sm:w-1/4">技术维度</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider sm:w-1/4">传统DSP/一般SaaS/MaaS方案</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider sm:w-1/4">本平台（RaaS模式，AI原生与Agent智能驱动）</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider sm:w-1/4">核心优势解读 (RaaS与AI Agent驱动)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="hover:bg-stone-50 transition-colors duration-150">
                                <td className="px-4 py-4 whitespace-normal text-sm font-medium text-slate-900">投放策略生成</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600">依赖人工经验配置或固化的规则引擎；策略调整滞后，难以适应动态市场。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>AI大模型驱动的策略自动生成与Agent智能编排及强化学习持续优化</strong>；能够基于实时数据反馈，动态调整和生成最优的受众+素材+时间+预算组合策略，由策略Agent自主规划与执行。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>结果导向的自主智能决策</strong>：AI Agent直接为最终“结果”负责，通过强化学习不断探索和优化能最大化ROI的策略，实现从“人治”到“AI自治”的跨越。</td>
                            </tr>
                            <tr className="hover:bg-stone-50 transition-colors duration-150">
                                <td className="px-4 py-4 whitespace-normal text-sm font-medium text-slate-900">广告素材处理</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600">人工设计为主，或依赖基础模板；素材更新频率低，创意迭代慢，易产生审美疲劳。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>AIGC（多模态大模型）驱动的多模态素材自动化、规模化、个性化生成与管理</strong>；素材生成Agent支持图文、短视频、互动 playable ads 等；结合DCO技术与素材择优Agent，实现千人千面的实时创意组合与高频迭代。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>创意生产力与效果的革命</strong>：大幅降低创意生产成本和周期，通过AI生成与智能择优确保创意始终保持高吸引力和高转化率，直接服务于“结果”达成。</td>
                            </tr>
                            <tr className="hover:bg-stone-50 transition-colors duration-150">
                                <td className="px-4 py-4 whitespace-normal text-sm font-medium text-slate-900">用户理解与定向</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600">依赖静态标签包或宽泛的人群分类；用户画像更新不及时，难以实现深度个性化。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>多源数据融合的动态用户画像构建与实时分层，辅以Agent智能分析</strong>；整合第一/二/三方数据，运用AI算法进行深度用户行为分析、兴趣聚类、意图识别和LTV预测；支持ID Mapping技术打通跨平台用户识别。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>精准触达“结果贡献者”</strong>：通过更全面、动态、精准的用户理解及Agent的持续洞察，确保广告资源聚焦于最有可能产生约定“结果”的高价值用户，避免预算浪费。</td>
                            </tr>
                            <tr className="hover:bg-stone-50 transition-colors duration-150">
                                <td className="px-4 py-4 whitespace-normal text-sm font-medium text-slate-900">出价与成本控制</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600">多采用固定出价、手动调价或基于简单模型的eCPM/eCPC出价；易造成BID浪费或错失良机。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>Agent赋能的智能BID优化与Pacing控制</strong>；竞价环境感知Agent、出价决策Agent（基于“二价探测”思想）与Pacing及预算管理Agent协同工作，结合ROI/CPA目标，实现成本效益最大化。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>每一分钱为“结果”负责</strong>：Agent以达成约定“结果”的成本最优为目标，而非单纯追求低CPM或高胜率，最大化广告主的投资回报。</td>
                            </tr>
                            <tr className="hover:bg-stone-50 transition-colors duration-150">
                                <td className="px-4 py-4 whitespace-normal text-sm font-medium text-slate-900">多平台管理</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600">依赖媒体SDK或RPA脚本，各平台账户独立操作，数据割裂，管理复杂，难以协同优化。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>基于Agentic Workflow的跨平台统一智能调度与管理</strong>；通过标准化适配器与媒体API直连，结合UI(Web) Agent处理复杂交互；实现跨渠道预算智能分配、策略协同和数据整合，远超传统RPA的灵活性与智能性。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>全局视野下的“结果”最优化</strong>：Agent打破平台壁垒，从整体“结果”出发，动态调配资源至最高效渠道，实现1+1 &gt; 2的协同效应。</td>
                            </tr>
                            <tr className="hover:bg-stone-50 transition-colors duration-150">
                                <td className="px-4 py-4 whitespace-normal text-sm font-medium text-slate-900">效果归因与衡量</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600">普遍采用Last-click（末次点击）等单一归因模型，难以准确评估各触点贡献。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>多触点归因（MTA）模型与全链路数据追踪，结合反思Agent进行深度归因</strong>；支持Shapley值、位置加权、数据驱动等多种科学归因模型，清晰衡量不同要素对最终“结果”的真实贡献。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>“结果”的真实性与可信度保障</strong>：科学归因确保对“结果”的衡量公平、准确，为RaaS模式下的按效付费提供坚实基础，并指导Agent进行后续优化。</td>
                            </tr>
                            <tr className="hover:bg-stone-50 transition-colors duration-150">
                                <td className="px-4 py-4 whitespace-normal text-sm font-medium text-slate-900">核心商业逻辑</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600">售卖工具（SaaS）、资源（MaaS）或过程服务；广告主仍需承担主要效果风险。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>以CPM = BID × CTR公式的极致优化为技术路径，通过AI Agent全链路赋能，实现“结果即服务”</strong>；服务商与广告主共担风险，共同致力于最大化ROI，交付可量化的业务成果。</td>
                                <td className="px-4 py-4 whitespace-normal text-sm text-slate-600"><strong>风险共担，价值共创的智能伙伴</strong>：从根本上改变了广告主与服务商的合作关系，将服务商的利益与广告主的“结果”深度绑定，并通过高度智能化的Agent系统确保“结果”的达成。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-6 text-slate-700 leading-relaxed">这些技术优势的综合体现，使得本平台在RaaS模式下，能够为广告主提供远超传统方案的价值确定性、成本效益和增长潜力。</p>
            </div>
        </TabsContent>

        {/* 第二个主要部分 */}
        <TabsContent value="section5_2" ref={el => sectionRefs.current['section5_2'] = el} id="section5_2" className="outline-none ring-0 focus:ring-0">
            <h2 className="text-2xl font-semibold text-sky-700 mb-6 border-b-2 border-sky-200 pb-2">5.2 AI原生与Agent智能的代际突破：重塑投流全链路</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <p className="mb-6 text-slate-700 leading-relaxed">本平台的核心竞争力不仅在于单点技术的领先，更在于构建了一个<strong>AI原生、以高级Agent智能为核心</strong>的全新投流范式。这代表了从传统“自动化”（如RPA）和简单机器学习到“自主智能（Autonomous Intelligence）”的代际突破，通过大模型赋能和复杂的Agentic Workflow，实现了广告投放全链路的智能化重塑，彻底改写了传统投流的逻辑。</p>

                <h3 className="text-xl font-semibold text-sky-600 mt-6 mb-4">5.2.1 AI原生架构：大模型赋能新范式</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed">
                    <li><strong>从规则引擎/简单机器学习到大模型驱动</strong>：传统投流系统或依赖人工经验配置的规则引擎，或采用针对特定任务的简单机器学习模型。本平台全面拥抱大语言模型（LLM）、多模态大模型等先进AI技术，将其作为智能决策和内容生成的基础设施，深度融入用户理解、意图预测、内容生成、策略制定等各个环节。这使得系统具备了更强的泛化能力、理解复杂语境的能力和创造性。</li>
                    <li><strong>多模态大模型赋能创意生产</strong>：特别是在广告素材处理方面，平台利用多模态大模型（如结合文本、图像、视频理解与生成能力）驱动素材生成Agent，能够自动化、规模化、个性化地产出高质量、高相关性的广告创意，克服了传统创意生产在效率、成本和个性化程度上的瓶颈。</li>
                    <li><strong>AI原生设计理念</strong>：平台的各项功能和服务从设计之初就以AI能力为基础进行构建，将AI视为系统的“第一性原理”，而非对现有流程的简单AI化“补丁”。这使得AI能够更深入地参与和主导决策过程，释放其最大潜力，实现真正的AI原生智能。</li>
                </ul>

                <h3 className="text-xl font-semibold text-sky-600 mt-8 mb-4">5.2.2 Agentic Workflow：构建自主进化的智能投放系统</h3>
                <p className="mb-4 text-slate-700 leading-relaxed">本平台超越了传统的RPA（机器人流程自动化）的局限——RPA本质上是预定义规则的自动化执行，缺乏适应性和学习能力。我们构建了基于<strong>Agentic Workflow</strong>的复杂智能系统。该系统由多个各具专长、能够通过工具调用和自主学习进行协同工作的智能Agent组成，它们具备自主规划、委托执行、工具调用、持续学习和自我反思的能力，形成一个能够自主进化的投放“生命体”。</p>
                
                <div className="mb-6">
                    <h4 className="text-lg font-medium text-slate-700 mb-2">核心Agentic特性：</h4>
                    <ul className="list-decimal list-inside space-y-2 text-slate-600 leading-relaxed ml-4">
                        <li><strong>委托式任务执行 (Delegation-style Task Execution)</strong>：上层Agent（如策略Agent）可以将复杂RaaS目标分解为一系列子任务，并智能地将这些子任务委托给具备相应专业能力的下层Agent（如出价Agent、创意Agent）执行。</li>
                        <li><strong>自主规划与决策 (Self-Planning & Decision Making)</strong>：各Agent能根据其被赋予的目标和当前环境信息（来自感知Agent或数据中枢），自主规划达成目标的行动路径和关键决策点，而非简单执行固定脚本。</li>
                        <li><strong>多样化工具调用 (Versatile Tool Usage)</strong>：Agent能够根据任务需求，智能选择并调用一系列“工具”，这些工具可以是内部的算法模块（如CTR预估模型）、数据分析函数、外部的第三方API（如媒体平台API、天气API）、甚至是专门设计的UI(Web) Agent（用于与缺乏标准API的平台进行更智能、更具适应性的交互，而非RPA的脆弱界面操作）。Agent间的工具调用和协作可能采用MCP（Multi-Party Computation）或A2A（Agent-to-Agent）等技术，确保数据安全和高效协同。</li>
                        <li><strong>持续学习与进化 (Continuous Learning & Evolution)</strong>：Agent通过与广告环境的持续交互（如竞价、投放、获取反馈）和对结果数据的分析，不断学习和优化自身的行为策略和决策模型。强化学习是实现这一能力的关键技术。</li>
                        <li><strong>自我反思与改进 (Self-Reflection & Refinement)</strong>：系统设有专门的机制或Agent（如反思Agent），对已完成的投放任务、策略执行过程和最终“结果”进行多维度、深层次的反思和评估。识别成功经验和失败教训，提出改进建议，并将这些“学到的知识”反馈给其他Agent或元学习Agent，驱动整个系统的迭代优化。</li>
                    </ul>
                </div>

                <h4 className="text-lg font-medium text-slate-700 mb-3">多Agent协同系统架构示例：</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agentCardsConfig.map(card => (
                    <div 
                      key={card.id}
                      className="agent-card bg-sky-50 p-4 rounded-lg shadow hover:shadow-xl cursor-pointer border border-sky-200" 
                      onClick={() => toggleAgentDetails(card.id)}
                    >
                      <h5 className="text-md font-semibold text-sky-700 mb-1 flex justify-between items-center">
                        {card.title}
                        <span 
                          className="text-xs text-sky-500 transform transition-transform duration-300"
                          style={{ transform: openAgentCards[card.id] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        >
                          &#9662;
                        </span>
                      </h5>
                      {openAgentCards[card.id] && (
                        <div className="agent-details text-sm text-slate-600 leading-relaxed mt-2">
                          {card.details.map((detail, index) => (
                            <p key={index} className={index > 0 ? "mt-1" : ""}>{detail}</p>
                          ))}
                          {card.subList && (
                            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                              {card.subList.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-sky-600 mt-8 mb-4">5.2.3 智能化能力闭环与协同增效</h3>
                <p className="mb-4 text-slate-700 leading-relaxed">本平台的核心竞争力不仅在于单点技术的领先，更在于通过上述AI原生架构和高级Agent智能系统，构建了一个从“策略生成 → 智能执行 → 数据归因 → 持续优化与进化”的完整、高效的智能化闭环。</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed">
                    <li><strong>事件驱动的实时反馈与学习</strong>：每一次用户互动和“结果”数据都会实时反馈，驱动Agent和模型进行即时调整。</li>
                    <li><strong>策略与执行的自主智能</strong>：AI大模型和各司其职的Agent共同构成了投放决策的核心，实现了高度的自主性和智能化。</li>
                    <li><strong>多模型与多Agent协同</strong>：不同类型的AI模型和智能Agent通过共享数据、传递信号、协同决策，共同完成复杂的RaaS任务，产生1+1 &gt; 2的系统效应。</li>
                    <li><strong>“自然流量 + 付费流量”的独特协同增效</strong>：在Agent智能的加持下，平台能更深度地整合分析广告主第一方数据与付费广告数据，实现更精准的用户洞察和投放优化。</li>
                </ul>
                <p className="mt-4 text-slate-700 leading-relaxed">这个由AI原生技术和高级Agent智能驱动的闭环系统，确保了平台的投放决策始终基于最新的数据、最深刻的洞察和最智能的策略，并通过持续的自我学习和进化，不断逼近RaaS“结果”的最大化，真正实现了从“经验驱动”到“AI自主智能驱动”的代际跨越。</p>
            </div>
        </TabsContent>

        {/* 第三个主要部分 */}
        <TabsContent value="section5_3" ref={el => sectionRefs.current['section5_3'] = el} id="section5_3" className="outline-none ring-0 focus:ring-0">
            <h2 className="text-2xl font-semibold text-sky-700 mb-6 border-b-2 border-sky-200 pb-2">5.3 可扩展性与未来演进：迈向智能“结果交付网络”</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="mb-6 text-slate-700 leading-relaxed">本平台在架构设计之初就充分考虑了系统的可扩展性、兼容性与未来技术的演进方向，以确保能够持续适应快速变化的市场需求、不断涌现的新兴媒体与广告形式，并引领RaaS模式和AI Agent技术在广告领域的未来发展。</p>
                
                {/* 内部的演进标签页逻辑保持不变，因为它们是 section5_3 内部的UI */}
                <div className="mb-6">
                    <div className="flex flex-wrap -mx-2 mb-4 justify-center">
                        <button 
                          className={`evolution-tab-button mx-1 mb-2 px-4 py-2 rounded-md hover:bg-sky-600 transition-colors duration-150 text-sm ${
                            activeEvolutionTab === 'evolution_current' 
                              ? 'active bg-sky-500 text-white' 
                              : 'bg-slate-200 text-slate-700 hover:text-white'
                          }`}
                          onClick={() => showEvolutionTab('evolution_current')}
                        >
                          一、现阶段技术能力与基础
                        </button>
                        <button 
                           className={`evolution-tab-button mx-1 mb-2 px-4 py-2 rounded-md hover:bg-sky-600 transition-colors duration-150 text-sm ${
                            activeEvolutionTab === 'evolution_mid_term' 
                              ? 'active bg-sky-500 text-white' 
                              : 'bg-slate-200 text-slate-700 hover:text-white'
                          }`}
                          onClick={() => showEvolutionTab('evolution_mid_term')}
                        >
                          二、中期演进规划 (6-18个月)
                        </button>
                        <button 
                           className={`evolution-tab-button mx-1 mb-2 px-4 py-2 rounded-md hover:bg-sky-600 transition-colors duration-150 text-sm ${
                            activeEvolutionTab === 'evolution_long_term' 
                              ? 'active bg-sky-500 text-white' 
                              : 'bg-slate-200 text-slate-700 hover:text-white'
                          }`}
                          onClick={() => showEvolutionTab('evolution_long_term')}
                        >
                          三、长期技术愿景与目标 (18-36个月+)
                        </button>
                    </div>

                    <div id="evolution_current" className={`evolution-tab-content ${activeEvolutionTab === 'evolution_current' ? 'block' : 'hidden'}`}>
                        <h4 className="text-lg font-medium text-slate-700 mb-3">一、 现阶段技术能力与基础 (Current Capabilities & Foundation)：</h4>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed">
                            <li><strong>稳定的多渠道覆盖与自动化执行</strong>：已实现对国内外主流广告平台的稳定API接入和基于智能UI Agent的辅助投放能力，支持跨渠道的自动化广告管理与数据同步。</li>
                            <li><strong>核心AI大模型与Agent的初步应用</strong>：已上线并应用了包括三阶段CTR/CVR预估模型、基于“二价探测”理念的BID优化引擎（由出价决策Agent等驱动）、基础的DCO能力（由创意Agent群支持）以及多维度用户画像构建系统。</li>
                            <li><strong>标准化的数据处理与ID Mapping能力</strong>：建立了统一的数据接入、清洗、ETL流程和初步的ID Mapping技术，能够整合多源数据，构建基础的用户视图。</li>
                            <li><strong>行业定制化探索</strong>：已针对游戏、电商、O2O等重点行业，积累了初步的“结果”定义经验和定制化画像标签，并开始训练针对特定行业的Agent行为模式。</li>
                            <li><strong>AI原生与微服务架构</strong>：平台基于云原生和微服务理念构建，具备良好的水平扩展能力和模块（包括Agent服务）独立迭代的基础。</li>
                        </ul>
                    </div>
                    <div id="evolution_mid_term" className={`evolution-tab-content ${activeEvolutionTab === 'evolution_mid_term' ? 'block' : 'hidden'}`}>
                        <h4 className="text-lg font-medium text-slate-700 mb-3">二、 中期演进规划 (Mid-Term Evolution: 6-18个月)：</h4>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed">
                            <li><strong>垂直行业RaaS解决方案与Agent能力的深化</strong>：针对游戏、电商、O2O/本地生活及医美等新兴领域进行深度优化和专业Agent训练。</li>
                            <li><strong>私有化DMP模块与第一方数据赋能增强</strong>：构建更强大的客户私有数据管理与分析模块，强化“自然流量+付费流量”协同。</li>
                            <li><strong>商户自定义Agent行为与策略编排框架</strong>：允许客户通过低代码或可视化方式微调Agent行为，实现人机协同。</li>
                            <li><strong>AIGC在创意生产中的深度融合与Agent驱动</strong>：全面提升AIGC应用水平，由素材生成Agent主导，实现高质量、大规模自动化内容生产。</li>
                            <li><strong>隐私计算技术的初步应用与Agent的合规交互</strong>：引入联邦学习等PETs，确保Agent数据分析与决策的隐私合规。</li>
                        </ul>
                    </div>
                    <div id="evolution_long_term" className={`evolution-tab-content ${activeEvolutionTab === 'evolution_long_term' ? 'block' : 'hidden'}`}>
                        <h4 className="text-lg font-medium text-slate-700 mb-3">三、 长期技术愿景与目标 (Long-Term Vision & Goals: 18-36个月及以后)：</h4>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed">
                            <li><strong>构建全自动“智能投流大脑”与高级Agent生态系统</strong>：实现具备高级推理、复杂任务分解、跨领域知识迁移及完全自主优化能力的“投流大脑”。</li>
                            <li><strong>打造“投流CoT（Chain of Thought）系统”与Agent的可解释性交互</strong>：深度整合LLM、Vision等，使Agent能通过“思考链”分析问题、制定方案并解释决策。</li>
                            <li><strong>引领新兴广告生态的RaaS实践与Agent的场景适应性</strong>：布局CTV、IGA、音频广告、DOOH、元宇宙等新兴场景的RaaS模式与Agent适应性训练。</li>
                            <li><strong>构建开放的、由Agent驱动的“结果交付网络”（RDN）</strong>：模块化核心能力，通过API/SDK赋能生态伙伴，共建“结果”流通网络。</li>
                            <li><strong>成为隐私优先的广告技术领导者，构建负责任的Agent系统</strong>：引领隐私计算技术应用，确保Agent系统行为符合伦理规范。</li>
                        </ul>
                    </div>
                </div>
                <p className="mt-6 text-slate-700 leading-relaxed">通过这样一条清晰且富有雄心的技术演进路径，我们的数智投流平台致力于不仅在当前保持RaaS模式和AI Agent应用的技术领先，更能持续引领行业的创新与发展，最终实现用智能重塑广告价值的宏伟愿景。</p>
            </div>
        </TabsContent>
      </Tabs>

      <footer className="bg-slate-800 text-slate-300 py-8 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; <span id="currentYear">{currentYear}</span> 数智投流平台. 版权所有.</p>
          <p className="text-sm text-slate-400 mt-1">技术驱动增长，结果定义价值</p>
        </div>
      </footer>
    </section>
  );
};

export default Chapter5Operation;