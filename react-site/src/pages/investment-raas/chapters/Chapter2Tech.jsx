import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Chapter2Tech = () => (
  <section id="chapter2" className="py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-neutral-900 mb-4">第2章：RaaS系统架构与核心能力</h2>
      <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">本章将详细介绍RaaS平台的系统架构、核心技术能力与关键模块。内容涵盖AI原生架构、智能体（Agent）体系、数据中台、券投流引擎、全链路归因与风控、开放API生态等，阐述如何通过技术创新实现"结果"驱动的高效投流与服务能力升级。</p>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-sky-700 flex items-center"><span className="mr-2">🧠</span>2.1 AI原生架构与智能体体系</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 mb-3">
              <li>大模型驱动的智能体（Agent）体系，支持"结果"目标分解、任务自助规划与执行。</li>
              <li>多Agent协同：投流Agent、归因Agent、风控Agent、创意Agent等分工协作。</li>
              <li>Agent可调用平台API、数据服务、模型推理、外部工具，具备自学习与自我进化能力。</li>
              <li>支持多行业、多场景的"结果"定义与策略自动适配。</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-sky-700 flex items-center"><span className="mr-2">📊</span>2.2 数据中台与全链路数据能力</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 mb-3">
              <li>统一多源异构数据接入与治理，构建高质量数据资产。</li>
              <li>实时/离线数据流处理，支持大规模数据分析与建模。</li>
              <li>用户画像、行为序列、归因贡献、LTV预测等多维数据能力。</li>
              <li>数据安全、隐私合规与权限管理。</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-sky-700 flex items-center"><span className="mr-2">🎫</span>2.3 券投流引擎与智能分发</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 mb-3">
              <li>支持多类型"券"投流（激活码、优惠券、体验券等），灵活配置"结果"目标。</li>
              <li>智能分发与动态定价，基于用户画像与实时反馈优化投放。</li>
              <li>多渠道协同（广告、社交、内容、线下等），提升"券"核销与转化效率。</li>
              <li>券生命周期管理与效果追踪。</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-sky-700 flex items-center"><span className="mr-2">🛡️</span>2.4 全链路归因与风控体系</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 mb-3">
              <li>多触点归因（ID Mapping、路径分析）、科学KPI分配。</li>
              <li>实时风控与反作弊，保障"结果"真实性与数据安全。</li>
              <li>第三方验证与效果校准。</li>
              <li>风险预警与应急响应机制。</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-sky-700 flex items-center"><span className="mr-2">🔌</span>2.5 开放API与生态协同</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 mb-3">
              <li>标准化API接口，支持客户/合作伙伴系统集成。</li>
              <li>开放SDK与开发者工具，促进生态共建。</li>
              <li>多方数据协同与隐私保护。</li>
              <li>支持行业定制与灵活扩展。</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-sky-700 flex items-center"><span className="mr-2">🚀</span>2.6 技术创新驱动的服务能力升级</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 mb-3">
              <li>AI算法持续进化，驱动"结果"优化与自动化运营。</li>
              <li>智能创意生成与内容个性化。</li>
              <li>自动化投流、A/B测试与策略自适应。</li>
              <li>行业知识库沉淀与智能推荐。</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Chapter2Tech; 