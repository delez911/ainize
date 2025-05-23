import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';


// Chosen Palette: Calm Harmony Neutrals
// Application Structure Plan: The SPA now uses a Tabs-based navigation (styled like shadcn/ui Tabs) to switch between five main sections: "三大浪潮", "平台融合", "核心价值", "未来展望", and "我们的邀请". Each section's content is presented within a main Card (styled like shadcn/ui Card). The "三大浪潮" section further contains three nested, expandable Cards. This structure provides a unified, professional look, promoting clarity and ease of exploration. Content is left-aligned within cards.
// Visualization & Content Choices:
// - Navigation: Tabs (TabsList, TabsTrigger). Goal: Navigate. Interaction: Click TabTrigger to show corresponding TabsContent. Method: React state, Tailwind CSS mimicking shadcn/ui.
// - Sections (TabsContent): Each section is a Card. Goal: Inform. Method: React components, Tailwind.
// - Three Waves Section: Main Card containing three nested, expandable Cards. Goal: Inform, Compare. Interaction: Click to expand/collapse sub-card details. Method: React components, Tailwind, JS state for expansion.
// - Platform Integration Section: Main Card with textual explanation and list. Goal: Explain. Method: React component, Tailwind.
// - Core Values Section: Main Card with three nested Cards for values. Goal: Inform, Emphasize. Method: React components, Tailwind.
// - Future Outlook Section: Main Card with a list of outlook points, each styled as a small card-like item. Goal: Inform, Inspire. Method: React components, Tailwind.
// - Invitation Section: Prominent Card for call to action. Goal: Engage. Method: React component, Tailwind.
// - All textual content is from the source. No external data. No SVG/Mermaid. Emojis used for icons.
// CONFIRMATION: NO SVG graphics used. NO Mermaid JS used.

// --- shadcn/ui inspired components (built with Tailwind CSS) ---

// --- Application Specific Components ---

const ExpandableContentCard = ({ icon, title, summary, details, titleAs = 'h3', titleClassName = "text-xl font-semibold text-sky-700 !mb-1" }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card className="bg-gray-50 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setIsExpanded(!isExpanded)}>
            <CardHeader>
                <CardTitle as={titleAs} className={titleClassName} icon={icon}>{title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <CardDescription>{summary}</CardDescription>
                {isExpanded && (
                    <div className="mt-4 text-sm text-gray-700 bg-gray-100 p-4 rounded-md border border-gray-200">
                        {details}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

const WavesSectionContent = () => (
    <Card className="bg-transparent shadow-none border-none">
        <CardHeader className="text-center">
            <CardTitle as="h2" className="text-3xl font-bold text-gray-800 !mb-4">三大“代际”浪潮</CardTitle>
            <CardDescription className="text-gray-600 mb-8 max-w-3xl mx-auto">
                在数字广告的浩瀚星空中，技术的每一次革新都如同一颗新星的升起，照亮行业前行的道路。我们经历了从简单的CPM、CPC付费，到SaaS、MaaS工具化赋能的时代。今天，我们正站在一个全新的历史交汇点，见证并推动三大“代际”浪潮的融合，它们共同定义了下一代广告价值的核心。
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
                <ExpandableContentCard
                    icon="⚡️"
                    title="RaaS模式的代际跃迁"
                    summary="从“过程付费”到“结果付费”的根本性转变，广告主不再为不确定的中间环节买单，而是直接为可量化、可信赖的业务成果付费。这标志着广告服务从工具提供者向“增长共同体”的演进。"
                    details={<p>RaaS (Result as a Service) 模式的核心在于将服务方的报酬与客户获得的、可衡量的、预先约定的业务成果直接挂钩。广告主为实际达成的业务目标（如用户激活、订单转化、券核销等）付费，而非仅仅为广告的展示或点击付费。这种模式降低了客户风险，使预算可控，并让客户能更专注于核心业务。</p>}
                />
                <ExpandableContentCard
                    icon="🎟️"
                    title="游戏与商户券投流的商业代际革新"
                    summary="以“券（广义）”为核心的商业逻辑，将广告从“广而告之”的单向传播，升级为向用户精准传递“优惠实惠”的双向价值交换。“券”作为一种可追踪、可归因、强激励的“结果”载体，极大地提升了用户互动和最终转化效率。这种模式将广告的本质从“曝光的艺术”转变为“转化的科学”。"
                    details={<p>无论是游戏内的虚拟货币/道具、会员体验券，还是电商的折扣券、现金券，亦或是O2O服务的到店体验券，“券”都扮演着关键角色。它不仅是优惠的载体，更是效果追踪和归因分析的重要抓手，使广告效果更加透明和可衡量，从而更好地服务于RaaS模式下对“结果”的承诺。</p>}
                />
                <ExpandableContentCard
                    icon="🤖"
                    title="大模型与Agent技术的代际引领"
                    summary="传统的基于简单机器学习和自动化脚本的投放方式正在被颠覆。我们拥抱AI原生架构，通过集成大型语言模型（LLM）、多模态大模型以及先进的Agentic Workflow，构建智能体驱动的投流新范式。这不再是简单的“自动化”，而是赋予系统“智能化”——具备自主规划、委托式执行、复杂工具调用、动态适应、自我反思与持续进化的能力。"
                    details={<p>智能体（Agent）能够理解复杂指令，自主规划并执行多步骤任务，调用模型组合（MCP）或与其他应用自主协同（A2A Agents）。这种AI原生架构使得广告投放能够更智能地适应动态变化的市场环境，并从经验中学习进化，持续提升效果。</p>}
                />
            </div>
        </CardContent>
    </Card>
);

const IntegrationSectionContent = () => (
    <Card>
        <CardHeader className="text-center">
            <CardTitle as="h2" icon="🔗" className="text-3xl font-bold text-gray-800 !mb-0 justify-center">平台融合：智能驱动的“结果”交付</CardTitle>
        </CardHeader>
        <CardContent className="max-w-3xl mx-auto text-left">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">本商业技术书系统阐述了我们的数智投流平台如何深度融合这三大代际趋势，以RaaS模式为核心，通过AI原生智能体架构，为游戏、电商、O2O等领域的广告主高效交付“券”所承载的各类业务“结果”。</p>
            <p className="text-gray-600 mb-4">我们深入剖析了平台在以下关键环节的运作机制：</p>
            <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start"><span className="text-sky-700 mr-2 text-xl">💡</span> <span className="font-semibold text-sky-700">智能策略生成：</span>基于对市场和用户数据的深度理解，由策略Agent进行投放策略的规划与编排。</li>
                <li className="flex items-start"><span className="text-sky-700 mr-2 text-xl">💰</span> <span className="font-semibold text-sky-700">动态竞价与Pacing控制：</span>竞价环境感知Agent持续监控市场，出价决策Agent结合“二价探测”思想智能出价，Pacing管理Agent确保预算高效平稳消耗。</li>
                <li className="flex items-start"><span className="text-sky-700 mr-2 text-xl">🎨</span> <span className="font-semibold text-sky-700">千人千面的素材创制与择优：</span>素材生成Agent利用多模态大模型辅助创意生产，素材择优Agent（与反思Agent配合）筛选最佳素材组合。</li>
                <li className="flex items-start"><span className="text-sky-700 mr-2 text-xl">🌐</span> <span className="font-semibold text-sky-700">跨平台资源协同与ROI最优路径：</span>反思Agent评审每轮投放效果，并与策略Agent协同，发现跨平台资源的最优配置和ROI提升路径。</li>
                <li className="flex items-start"><span className="text-sky-700 mr-2 text-xl">🔗</span> <span className="font-semibold text-sky-700">全链路“结果”归因：</span>通过精密的ID Mapping和数据分析，确保RaaS模式下“结果”的可衡量与可信赖。</li>
            </ul>
            <p className="text-gray-700">整个过程由多Agent系统协同运作，并由元学习Agent进行全局优化和知识沉淀，实现前所未有的投放效率和效果确定性。</p>
        </CardContent>
    </Card>
);

const ValueItemDisplayCard = ({ icon, title, description }) => (
    <Card className="bg-gray-50 text-left">
        <CardHeader className="items-center text-center pb-2">
             <span className="text-3xl mb-2 inline-block">{icon}</span>
            <CardTitle as="h4" className="text-lg font-semibold text-sky-700 !mb-0">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center pt-2">
            <CardDescription>{description}</CardDescription>
        </CardContent>
    </Card>
);

const ValuesSectionContent = () => (
     <Card className="bg-transparent shadow-none border-none">
        <CardHeader className="text-center">
             <CardTitle as="h2" icon="🏆" className="text-3xl font-bold text-gray-800 !mb-4 justify-center">核心价值：共创共赢</CardTitle>
            <CardDescription className="text-gray-600 mb-8 max-w-3xl mx-auto">
                我们坚信，这种融合了RaaS的商业智慧、“券”经济的转化魔力、以及大模型与Agent技术的认知智能的全新广告模式，其核心价值在于为生态各方带来前所未有的机遇。
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <ValueItemDisplayCard
                    icon="🛡️"
                    title="对客户：确定性增长与风险解放"
                    description="广告主获得了前所未有的结果可预测性和成本可控性，可以将更多精力聚焦于核心业务创新。"
                />
                <ValueItemDisplayCard
                    icon="⚙️"
                    title="对服务商：技术壁垒与价值共生"
                    description="唯有掌握AI原生技术并深刻理解商业本质的服务商，才能在这一新代际中持续领先，与客户共同成长。"
                />
                <ValueItemDisplayCard
                    icon="🌍"
                    title="对生态：效率革命与信任升级"
                    description="它将极大提升广告资源的配置效率，减少价值链条中的信息不对称和资源浪费，重塑广告主、平台与用户之间的信任关系。"
                />
            </div>
            <p className="text-left text-gray-600 mt-10 max-w-3xl mx-auto">当然，通往这个智能驱动的“结果”交付网络的道路充满探索。例如，“结果”定义的持续精细化与标准化、多Agent系统的协同效率与鲁棒性、大模型生成内容的可控性与合规性、以及在日益强调数据隐私的环境下如何平衡个性化与保护，这些都是我们需要不断攻克的课题。</p>
        </CardContent>
    </Card>
);

const OutlookItemDisplay = ({icon, title, description}) => (
    <Card className="bg-gray-50 w-full">
        <CardContent className="!p-4">
            <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 text-2xl mt-1">{icon}</span>
                <div className="text-left">
                    <CardTitle as="h5" className="text-md font-semibold text-sky-600 !mb-1">{title}</CardTitle>
                    <CardDescription className="!text-sm">{description}</CardDescription>
                </div>
            </div>
        </CardContent>
    </Card>
);

const OutlookSectionContent = () => (
    <Card className="bg-transparent shadow-none border-none">
        <CardHeader className="text-center">
            <CardTitle as="h2" icon="🔭" className="text-3xl font-bold text-gray-800 !mb-4 justify-center">未来展望：矢志不渝</CardTitle>
            <CardDescription className="text-gray-600 mb-8 max-w-3xl mx-auto">
                展望未来，我们的数智投流平台将矢志不渝地致力于以下方向，引领RaaS模式的持续进化与价值创造。
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="max-w-3xl mx-auto space-y-4">
                <OutlookItemDisplay
                    icon="✨"
                    title="深化大模型与Agent技术的融合应用"
                    description="打造更加聪慧、自主、能够进行复杂推理和长期规划的智能体集群，实现从“结果”交付到“增长策略”制定的跃迁。"
                />
                <OutlookItemDisplay
                    icon="🏷️"
                    title="拓展“券”的应用边界与场景创新"
                    description="探索“券”在更多新兴媒体（如元宇宙、智能终端）和更多商业场景（如订阅经济、共享出行）中的创新应用，持续放大其作为“结果”催化剂的效能。"
                />
                <OutlookItemDisplay
                    icon="🤝"
                    title="推动RaaS模式的行业渗透与标准建立"
                    description="与合作伙伴共同推动RaaS理念的普及，参与构建更透明、更高效的“结果”衡量与交易标准。"
                />
                <OutlookItemDisplay
                    icon="🔒"
                    title="坚守数据伦理与合规底线"
                    description="在技术创新的同时，始终将用户隐私保护和数据安全置于最高优先级，构建负责任、可信赖的AI广告生态。"
                />
            </div>
        </CardContent>
    </Card>
);

const InvitationSectionContent = () => (
    <Card className="bg-sky-600 text-white text-center">
        <CardHeader>
            <CardTitle as="h2" icon="🚀" className="text-3xl font-bold !text-white !mb-2 justify-center">RaaS的星辰大海，已然呈现</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-lg leading-relaxed mb-8 text-sky-50">它不再仅仅是一种商业模式的迭代，更是一场由AI原生技术驱动的、以“结果”为终极度量的价值创造革命。我们诚挚邀请所有洞察先机、勇于拥抱变革的广告主与生态伙伴，与我们携手，共同驾驭这三大代际浪潮，用智能重塑广告的无限可能，共创一个真正为增长负责、为价值付费的广告新未来！</p>
            <button className="bg-white text-sky-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
                加入我们，共创未来
            </button>
        </CardContent>
    </Card>
);

const Footer = () => {
    const [currentYear] = useState(new Date().getFullYear());
    return (
        <footer className="bg-gray-800 text-white py-8 mt-16">
            <div className="container mx-auto px-4 text-center text-sm">
                <p>&copy; {currentYear} 数智投流平台. 保留所有权利.</p>
                <p>以RaaS模式重塑广告价值</p>
            </div>
        </footer>
    );
};

const Chapter7Conclusion = () => {
    const [activeSection, setActiveSection] = useState('waves3');
    const mainContentRef = useRef(null);

    const navItems = [
        { id: 'waves3', label: '三大浪潮', Icon: () => <WavesSectionContent /> },
        { id: 'integration', label: '平台融合', Icon: () => <IntegrationSectionContent /> },
        { id: 'values', label: '核心价值', Icon: () => <ValuesSectionContent /> },
        { id: 'outlook', label: '未来展望', Icon: () => <OutlookSectionContent /> },
        { id: 'invitation', label: '我们的邀请', Icon: () => <InvitationSectionContent /> },
    ];
    
    const handleTabChange = (newSection) => {
        setActiveSection(newSection);
        // Scroll to top of main content area for better UX on tab change
        mainContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
         // Or scroll window if tabs are at the very top
        const sectionElement = document.getElementById(newSection + "-tab-content"); // Assuming TabsContent has an ID
        if (sectionElement) {
             const headerOffset = 80; // Approximate height of sticky header
             const elementPosition = sectionElement.getBoundingClientRect().top;
             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth'});
        }
    };

    useEffect(() => {
        const handlePopState = () => {
            const hash = window.location.hash.substring(1);
            if (hash && navItems.find(item => item.id === hash)) {
                setActiveSection(hash);
            } else if (navItems.length > 0) {
                setActiveSection(navItems[0].id);
                 history.replaceState(null, null, `#${navItems[0].id}`);
            }
        };

        handlePopState(); // Initial load
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);
    return (
      <section id="chapter7" className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title">第7章：结语：RaaS——重塑广告价值，共创增长未来</h2>
          <div className="antialiased bg-gray-100 text-gray-800 min-h-screen flex flex-col">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-bold text-sky-700">RaaS与智能体共振</h1>
                        </div>
                    </div>
                </div>
            </header>
            
            <Tabs defaultValue={activeSection} value={activeSection} onValueChange={handleTabChange} className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-8">
                    {navItems.map(item => (
                        <TabsTrigger key={item.id} value={item.id} className="w-full data-[state=active]:bg-sky-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">
                            {item.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <main ref={mainContentRef}>
                    {navItems.map(item => (
                        <TabsContent key={item.id} value={item.id} id={`${item.id}-tab-content`} className="mt-2 outline-none ring-0 focus:ring-0">
                            <item.Icon />
                        </TabsContent>
                    ))}
                </main>
            </Tabs>
            <Footer />
        </div>
        </div>
    </section>

    );
};

export default Chapter7Conclusion;
