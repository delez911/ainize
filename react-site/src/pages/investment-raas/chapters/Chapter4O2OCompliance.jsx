import React, { useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MapPin, ShoppingCart, BarChart2, Target, Users, TrendingUp, Clock, Zap, Briefcase } from 'lucide-react';

const Chapter4O2OCompliance = () => {
    useEffect(() => {
        // 初始化图表
        setTimeout(() => {
          initCharts();
        }, 100);
      }, []);
    
    const initCharts = () => {
        // O2O转化漏斗图表
        if (window.Chart && document.getElementById('o2oFunnelChart')) {
            const ctx3 = document.getElementById('o2oFunnelChart').getContext('2d');
            new window.Chart(ctx3, {
              type: 'bar',
              data: {
                labels: ['广告曝光', '券码领取', '到店咨询', '实际核销', '复购转化'],
                datasets: [{
                  label: '转化数量',
                  data: [10000, 3200, 1800, 1200, 480],
                  backgroundColor: 'rgba(2, 132, 199, 0.8)',
                  borderColor: 'rgb(2, 132, 199)',
                  borderWidth: 1
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: 'O2O线上领券-线下核销转化漏斗'
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
      
          // LBS用户分布图表
          if (window.Chart && document.getElementById('o2oLbsChart')) {
            const ctx4 = document.getElementById('o2oLbsChart').getContext('2d');
            new window.Chart(ctx4, {
              type: 'bar',
              data: {
                labels: ['早餐时段', '午餐时段', '下午茶', '晚餐时段', '夜宵时段'],
                datasets: [{
                  label: '商务区',
                  data: [15, 85, 45, 70, 25],
                  backgroundColor: 'rgba(2, 132, 199, 0.8)'
                }, {
                  label: '住宅区',
                  data: [40, 35, 20, 65, 45],
                  backgroundColor: 'rgba(34, 197, 94, 0.8)'
                }, {
                  label: '商业区',
                  data: [25, 60, 55, 80, 35],
                  backgroundColor: 'rgba(251, 191, 36, 0.8)'
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: 'LBS场景下不同时段券敏感用户分布'
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
    };
    return (
        <section id="o2o" className="content-section pt-16 -mt-16 mb-12">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-sky-600 mb-3 flex items-center gap-2">
                <ShoppingCart className="h-8 w-8" />
                O2O/本地生活服务：以"AI Agent驱动的有效核销"与"价值券化门店引流"为核心的RaaS方案
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">O2O及本地生活服务行业的核心是将线上流量引导至线下实体门店消费。本节将阐述平台如何通过AI Agent驱动并以"价值券化"为核心机制，解决行业痛点，交付线下经营成果。</p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-sky-700 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    场景特点与核心痛点
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">❗</span>
                      <div>
                        <strong>线上曝光与线下转化断层：</strong>效果追踪难，"领而不核"普遍。
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">❗</span>
                      <div>
                        <strong>地理位置（LBS）高度敏感：</strong>服务半径有限，精准触达难。
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">❗</span>
                      <div>
                        <strong>门店客流不均，坪效待提升：</strong>闲时客流不足，新店推广难。
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">❗</span>
                      <div>
                        <strong>优惠券/团购营销效率与体验平衡：</strong>过度依赖低价，核销率难提升。
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">❗</span>
                      <div>
                        <strong>营销预算有限，极度ROI导向，中小商户专业能力匮乏。</strong>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">❗</span>
                      <div>
                        <strong>素材需突出人设、场景感、即时性价值。</strong>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-sky-700 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    平台能力适配与RaaS"结果"定义（AI Agent与价值券化驱动）
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-md font-semibold text-sky-600 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        AI Agent赋能的LBS精准定向与场景化营销
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">
                        <span className="font-semibold text-sky-700">能力：</span>
                        <span className="badge bg-sky-100 text-sky-700">LBS场景分析Agent</span>支持多层次地理位置定向，结合时间、天气、用户历史行为等，利用大模型理解用户在特定LBS场景下的即时消费意图。例如，向饭点时位于餐饮街区的用户推送"午市特惠套餐券"。
                      </p>
                      <p className="font-semibold mt-2 mb-1 text-sky-700">RaaS"结果"：</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>有效到店核销/消费 (Effective In-Store Redemption/Consumption)：</strong> 用户通过线上广告引导（领取"即时优惠券"、"团购体验券"等），实际到店完成核销或消费。结算方式：有效CPR或CPS。</li>
                        <li><strong>有效门店引流/到访 (Effective Store Traffic/Visit)：</strong> 用户实际到店咨询/体验。通过"到店咨询即享小礼品券"追踪。结算方式：有效CPV。</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-md font-semibold text-sky-600 flex items-center gap-2">
                        <BarChart2 className="h-4 w-4" />
                        Agent驱动的O2O数据闭环与"结果"可衡量
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">
                        <span className="font-semibold text-sky-700">能力：</span>
                        <span className="badge bg-sky-100 text-sky-700">O2O数据整合Agent</span>通过唯一核销码、API对接等打通线上线下数据链路。所有"价值券"的发放、领取、核销状态均被精确追踪。
                      </p>
                      <p className="font-semibold mt-2 mb-1 text-sky-700">RaaS"结果"：</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>有效销售线索获取 (Effective Sales Lead Generation)：</strong> 用户提交的有效咨询表单（通过"免费试听课体验券"激励）或电话呼入（追踪"优惠咨询专属码"）。结算方式：CPL。</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-md font-semibold text-sky-600 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        AI Agent赋能的本地化、场景化创意与DCO
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">
                        <span className="font-semibold text-sky-700">能力：</span>
                        <span className="badge bg-sky-100 text-sky-700">本地化创意生成Agent</span>利用多模态大模型，根据用户地理位置、场景动态生成或组合展示本地相关优惠信息（如"XX路店专享折扣券"）、门店特色、距离提示等。
                      </p>
                      <p className="font-semibold mt-2 mb-1 text-sky-700">RaaS"结果"：</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>提升特定时段/服务项目的上座率/预约量：</strong> <strong>策略Agent</strong>指导<strong>投放Agent</strong>精准推送"闲时半价券"或"新品尝鲜折扣券"，以"价值券"核销数量或预约量增长为"结果"。</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-md font-semibold text-sky-600 flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        面向中小商户的Agent辅助与成本优化
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">
                        <span className="font-semibold text-sky-700">能力：</span>
                        平台提供简洁易用的操作界面，并由<span className="badge bg-sky-100 text-sky-700">智能投放助手Agent</span>为中小商户提供策略建议、预算规划和创意模板推荐。<span className="badge bg-sky-100 text-sky-700">智能出价Agent</span>和<span className="badge bg-sky-100 text-sky-700">Pacing与预算管理Agent</span>严格控制成本。
                      </p>
                      <p className="font-semibold mt-2 mb-1 text-sky-700">RaaS"结果"：</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>平台致力于在约定成本内，通过AI Agent智能辅助，为O2O商户带来约定数量的、可验证的线下经营"结果"。</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-sky-700 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    典型成效：某连锁轻食餐饮品牌案例
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">客户面临工作日午餐时段后客流锐减的痛点。通过RaaS合作，约定以"下午14:00-17:00时段，通过广告引导核销的'下午茶优惠套餐券'数量"为核心结果。平台<strong>LBS场景分析Agent</strong>精准定向写字楼周边白领人群。<strong>策略Agent</strong>制定了集中推送策略。<strong>本地化创意生成Agent</strong>利用DCO动态生成"XX大厦专享：下午茶第二杯半价券"等创意。合作10天后，<strong>反思Agent</strong>的数据分析显示，试点门店该时段优惠套餐券核销数量提升63%，有效带动闲时营收。</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="chart-container h-80 md:h-96">
                          <canvas id="o2oFunnelChart"></canvas>
                          <p className="text-center text-sm text-gray-500 mt-2">图表3: O2O线上领券-线下核销转化漏斗 (示例)</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="chart-container h-80 md:h-96">
                          <canvas id="o2oLbsChart"></canvas>
                          <p className="text-center text-sm text-gray-500 mt-2">图表4: LBS场景下不同时段"券敏感"用户分布 (示例)</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">上述图表数据为示意。图表旨在说明AI Agent在优化O2O转化路径和精准触达本地用户方面的潜力。</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </section>
    );
}

export default Chapter4O2OCompliance;