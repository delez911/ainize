import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Chapter1Overview from './chapters/Chapter1Overview';
import Chapter2Tech from './chapters/Chapter2Tech';
import Chapter3Industry from './chapters/Chapter3Industry';
import Chapter4DataCompliance from './chapters/Chapter4DataCompliance';
import Chapter5Operation from './chapters/Chapter5Operation';
import Chapter6Future from './chapters/Chapter6Future';
import Chapter7Conclusion from './chapters/Chapter7Conclusion';

const RaasInfoInteraction = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartElement = document.getElementById('riskComparisonChart');
    if (chartElement) {
      // Destroy previous chart instance if exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      const riskData = {
        labels: ['RaaS', 'SaaS', 'MaaS'],
        datasets: [
          {
            label: '客户承担风险',
            data: [20, 80, 70],
            backgroundColor: 'rgba(56, 189, 248, 0.7)',
            borderColor: 'rgba(56, 189, 248, 1)',
            borderWidth: 1,
            borderRadius: 6,
          },
          {
            label: '服务商承担风险',
            data: [80, 20, 30],
            backgroundColor: 'rgba(20, 184, 166, 0.7)',
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
                  if (label) { label += ': '; }
                  if (context.parsed.y !== null) { label += context.parsed.y + '%'; }
                  return label;
                }
              }
            },
            legend: {
              labels: { color: '#475569' }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: { display: true, text: '风险承担比例 (%)', font: { size: 14 }, color: '#475569'},
              grid: { color: 'rgba(203, 213, 225, 0.5)'},
              ticks: { color: '#475569'}
            },
            x: {
              grid: { display: false },
              ticks: { color: '#475569'}
            }
          },
          animation: { duration: 1000, easing: 'easeInOutQuart' }
        }
      };
      chartRef.current = new Chart(chartElement, riskConfig);
    }

    // Initialize first tab
    const firstTabButton = document.querySelector('#chapter3 .tab-button');
    if (firstTabButton) {
      firstTabButton.click();
    }

    // Add smooth scroll behavior
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navHeight = document.querySelector('nav').offsetHeight;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      });
    });

    // Cleanup: destroy chart instance
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-center space-x-6">
          <a href="#chapter1" className="text-teal-600 hover:text-teal-800 font-medium">模式概述</a>
          <a href="#chapter2" className="text-teal-600 hover:text-teal-800 font-medium">技术方案</a>
          <a href="#chapter3" className="text-teal-600 hover:text-teal-800 font-medium">行业方案</a>
          <a href="#chapter4" className="text-teal-600 hover:text-teal-800 font-medium">模式基石</a>
          <a href="#chapter5" className="text-teal-600 hover:text-teal-800 font-medium">实施运营</a>
          <a href="#chapter6" className="text-teal-600 hover:text-teal-800 font-medium">技术前瞻</a>
          <a href="#chapter7" className="text-teal-600 hover:text-teal-800 font-medium">结语</a>
        </div>
      </nav>

      <Chapter1Overview />
      <Chapter2Tech />
      <Chapter3Industry />
      <Chapter4DataCompliance />
      <Chapter5Operation />
      <Chapter6Future />
      <Chapter7Conclusion />

      <footer className="text-center py-8 bg-slate-200 text-slate-600">
        <p>&copy; 2024 RaaS模式深度解读。保留所有权利。</p>
      </footer>
    </div>
  );
};

export default RaasInfoInteraction;
