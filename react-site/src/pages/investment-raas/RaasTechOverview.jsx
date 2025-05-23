import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './RaasTechOverview.css';

// 注册 Chart.js 组件
Chart.register(...registerables);

const RaasTechOverview = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const riskData = {
        labels: ['RaaS', 'SaaS', 'MaaS'],
        datasets: [
          {
            label: '客户承担风险',
            data: [20, 80, 70],
            backgroundColor: 'rgba(56, 189, 248, 0.6)',
            borderColor: 'rgba(56, 189, 248, 1)',
            borderWidth: 1,
            borderRadius: 6,
          },
          {
            label: '服务商承担风险',
            data: [80, 20, 30],
            backgroundColor: 'rgba(20, 184, 166, 0.6)',
            borderColor: 'rgba(20, 184, 166, 1)',
            borderWidth: 1,
            borderRadius: 6,
          }
        ]
      };

      const riskConfig = {
        type: 'bar',
        data: riskData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: '不同模式下风险承担对比 (示意)',
              font: { size: 16, weight: 'bold'},
              color: '#334155'
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += context.parsed.y + '%';
                  }
                  return label;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: {
                display: true,
                text: '风险承担比例 (%)',
                font: { size: 14 },
                color: '#475569'
              },
              grid: {
                color: 'rgba(203, 213, 225, 0.5)'
              },
              ticks: {
                color: '#475569'
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#475569'
              }
            }
          },
          animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
          }
        }
      };

      chartInstance.current = new Chart(chartRef.current, riskConfig);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="raas-container">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-center space-x-6">
          <a href="#definition" onClick={(e) => scrollToSection(e, '#definition')} className="text-teal-600 hover:text-teal-800 font-medium">RaaS 定义</a>
          <a href="#core-value" onClick={(e) => scrollToSection(e, '#core-value')} className="text-teal-600 hover:text-teal-800 font-medium">核心价值</a>
          <a href="#business-logic" onClick={(e) => scrollToSection(e, '#business-logic')} className="text-teal-600 hover:text-teal-800 font-medium">商业逻辑</a>
          <a href="#comparison" onClick={(e) => scrollToSection(e, '#comparison')} className="text-teal-600 hover:text-teal-800 font-medium">模式对比</a>
        </div>
      </nav>

      <section id="definition" className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">RaaS：结果即服务</h1>
          <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto">
            RaaS（Result as a Service）是一种先进的、以结果为中心的服务计费与商业合作模型。广告主不再为过程或资源付费，而是为双方基于业务目标共同约定且可清晰量化的最终业务成果付费。
          </p>
          <p className="text-md md:text-lg max-w-3xl mx-auto text-teal-100">
            它旨在通过AI原生架构、全链路智能调度技术及深度数据洞察，打造一个<strong className="font-semibold text-white">结果导向</strong>、自动优化、高ROI的智能投流服务，是广告技术发展和市场对价值回归的必然趋势。
          </p>
        </div>
      </section>

      <section id="core-value" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="section-title">RaaS 的核心价值</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="icon-placeholder">客</div>
              <h3 className="text-2xl font-semibold mb-3 text-teal-700">对客户（广告主）</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong className="font-medium">✓ 降低风险，预算可控：</strong>付费与实际业务成果挂钩，共担效果风险。</li>
                <li><strong className="font-medium">✓ 专注核心业务：</strong>无需深陷复杂投放细节，聚焦主业发展。</li>
                <li><strong className="font-medium">✓ 价值透明，易于衡量：</strong>投入产出清晰可见，效果易评估。</li>
                <li><strong className="font-medium">✓ 获取增长伙伴：</strong>服务商成为共同为业务增长负责的伙伴。</li>
              </ul>
            </div>
            <div className="card">
              <div className="icon-placeholder">服</div>
              <h3 className="text-2xl font-semibold mb-3 text-teal-700">对服务商</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong className="font-medium">✓ 证明核心价值：</strong>以可衡量的成果赢得市场与客户深度信任。</li>
                <li><strong className="font-medium">✓ 驱动技术创新：</strong>结果导向促进服务商持续优化与创新。</li>
                <li><strong className="font-medium">✓ 建立竞争壁垒：</strong>围绕结果交付构建难以复制的核心能力。</li>
                <li><strong className="font-medium">✓ 实现客户共赢：</strong>客户获益则平台获益，形成利益共同体。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="business-logic" className="py-16 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="section-title">RaaS 的商业逻辑</h2>
          <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed">
              RaaS模式的商业逻辑核心在于以 <strong className="text-teal-600 font-semibold">ROI（投资回报率）</strong>或双方约定的 <strong className="text-teal-600 font-semibold">"结果"</strong> 为最终驱动力。它通过先进的技术赋能（如人工智能、大数据分析、自动化工具、程序化购买）和持续的效率优化，高效连接广告主对业务成果的真实需求与媒体平台的海量流量资源。其根本目标是实现"效率驱动的资源优化配置"，并由服务商承担主要的 <strong className="text-teal-600 font-semibold">"效果保证责任"</strong>。这要求服务商具备从深刻理解客户业务、精准预测市场动态、自动化内容生成、智能化策略制定、多平台高效投放到科学效果归因和持续优化迭代的全链路服务能力，成为一个能够为客户业务增长负责的智能商业引擎。
            </p>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="section-title">RaaS 与 SaaS/MaaS 的主要区别</h2>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-12 overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr>
                  <th className="table-header w-1/4">特征维度</th>
                  <th className="table-header w-1/4">RaaS (结果即服务)</th>
                  <th className="table-header w-1/4">SaaS (软件即服务)</th>
                  <th className="table-header w-1/4">MaaS (媒体/资源即服务)</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="table-cell font-medium">付费依据</td>
                  <td className="table-cell">按可量化的、预先约定的业务成果（如CPA, CPS, ROI, 有效激活数，核销数）结算</td>
                  <td className="table-cell">按功能模块/用户数量/使用时长等订阅付费，购买的是"工具"或"能力"的使用权</td>
                  <td className="table-cell">按购买的媒体资源（如CPM, CPC）或固定服务费付费，购买的是"过程"或"资源"</td>
                </tr>
                <tr>
                  <td className="table-cell font-medium">风险承担</td>
                  <td className="table-cell"><strong className="text-teal-600">服务商共担或主要承担效果风险</strong>，若未达成约定结果，服务商可能无法获得足额报酬</td>
                  <td className="table-cell">客户主要承担使用工具后的最终效果风险，工具本身不保证结果</td>
                  <td className="table-cell">客户主要承担媒体资源采买后的投放效果风险</td>
                </tr>
                <tr>
                  <td className="table-cell font-medium">客户参与</td>
                  <td className="table-cell">极简参与，客户主要提供业务目标、预算和必要的数据支持</td>
                  <td className="table-cell">客户深度参与，需要自行学习和运营工具以达成目标</td>
                  <td className="table-cell">客户需参与媒体选择、策略制定，或对代理商的执行过程进行管理</td>
                </tr>
                <tr>
                  <td className="table-cell font-medium">平台/服务商责任</td>
                  <td className="table-cell">对最终业务"结果"负责，提供端到端的全链路服务和效果保障</td>
                  <td className="table-cell">提供稳定、可用的工具或平台，确保其功能正常</td>
                  <td className="table-cell">提供媒体资源对接、基础投放执行或策略建议，不直接对最终业务结果负责</td>
                </tr>
                <tr>
                  <td className="table-cell font-medium">客户关系</td>
                  <td className="table-cell">增长伙伴/效果伙伴，共同为业务增长负责，利益高度绑定</td>
                  <td className="table-cell">工具/技术供应商，客户是产品的使用者</td>
                  <td className="table-cell">媒体/资源供应商或执行代理，是相对松散的甲乙方关系</td>
                </tr>
                <tr>
                  <td className="table-cell font-medium">技术与能力要求</td>
                  <td className="table-cell">对服务商技术、预测、执行、运营、风控等综合能力要求极高</td>
                  <td className="table-cell">对客户有一定的学习和使用门槛，对服务商主要是产品研发和维护能力</td>
                  <td className="table-cell">对服务商主要是媒体关系和基础运营能力，对客户则需要一定的媒体理解能力</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-center mb-6 text-teal-700">风险承担对比</h3>
          <div className="chart-container bg-white p-4 rounded-xl shadow-lg">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 bg-slate-200 text-slate-600">
        <p>&copy; 2024 RaaS模式解读。保留所有权利。</p>
      </footer>
    </div>
  );
};

export default RaasTechOverview;
