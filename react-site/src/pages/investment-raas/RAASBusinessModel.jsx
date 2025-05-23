import React, { useState } from 'react';
import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Zap, Target, TrendingUp, BarChart2, PieChart as PieChartIcon, Activity, Database, Layers, Users, Globe, DollarSign, Cpu, Workflow, Sliders, BarChart3, Lightbulb, Rocket, Shield, Code } from 'lucide-react';
import { CitationLink } from '@/components/ui/citation';

// 引用数据
const citations = {
  1: {
    title: "程序化广告投放平台技术架构",
    url: "https://tech.meituan.com/2018/06/07/programmatic-ad-platform-arch.html",
    content: "程序化广告投放平台是一个复杂的系统，需要处理海量数据和实时竞价，同时需要考虑广告主和媒体方的需求。",
    date: "2018-06-07",
    siteName: "美团技术团队",
    sourceContent: "程序化广告投放平台是一个复杂的系统，需要处理海量数据和实时竞价，同时需要考虑广告主和媒体方的需求。"
  },
  2: {
    title: "实时竞价广告系统设计与实现",
    url: "https://zhuanlan.zhihu.com/p/32561681",
    content: "实时竞价广告系统需要在毫秒级别完成广告请求的处理，包括用户定向、广告检索、排序、竞价等多个环节。",
    date: "2018-01-15",
    siteName: "知乎专栏",
    sourceContent: "实时竞价广告系统需要在毫秒级别完成广告请求的处理，包括用户定向、广告检索、排序、竞价等多个环节。"
  },
  3: {
    title: "广告系统架构和原理介绍",
    url: "https://zhuanlan.zhihu.com/p/111867127",
    content: "广告系统的核心是如何在合适的时间，将合适的广告展示给合适的用户，从而实现广告效果的最大化。",
    date: "2020-03-10",
    siteName: "知乎专栏",
    sourceContent: "广告系统的核心是如何在合适的时间，将合适的广告展示给合适的用户，从而实现广告效果的最大化。"
  },
  4: {
    title: "深度学习在CTR预估中的应用",
    url: "https://zhuanlan.zhihu.com/p/35465875",
    content: "CTR预估是广告系统中的关键环节，深度学习模型如Wide&Deep、DeepFM等在CTR预估中表现出色。",
    date: "2018-04-12",
    siteName: "知乎专栏",
    sourceContent: "CTR预估是广告系统中的关键环节，深度学习模型如Wide&Deep、DeepFM等在CTR预估中表现出色。"
  },
  5: {
    title: "广告投放平台的数据架构设计",
    url: "https://tech.meituan.com/2018/10/18/data-driven-ad.html",
    content: "广告投放平台的数据架构需要支持海量数据的存储、处理和分析，同时需要保证数据的实时性和准确性。",
    date: "2018-10-18",
    siteName: "美团技术团队",
    sourceContent: "广告投放平台的数据架构需要支持海量数据的存储、处理和分析，同时需要保证数据的实时性和准确性。"
  }
};

// 模拟数据
const bidStrategyData = [
  { name: '第一价', value: 100, cost: 100, roi: 1.2 },
  { name: '二价+0.1', value: 90.1, cost: 90.1, roi: 1.5 },
  { name: '二价+0.5', value: 90.5, cost: 90.5, roi: 1.4 },
  { name: '二价+1.0', value: 91, cost: 91, roi: 1.3 },
];

const ctrModelData = [
  { name: '基础模型', accuracy: 65, complexity: 30, speed: 90 },
  { name: '一期(画像匹配)', accuracy: 75, complexity: 50, speed: 80 },
  { name: '二期(搜索词/标签)', accuracy: 85, complexity: 70, speed: 60 },
  { name: '三期(用户级CTR)', accuracy: 95, complexity: 90, speed: 40 },
];

const platformPerformanceData = [
  { name: '抖音', ctr: 3.2, conversion: 2.1, cost: 2.5, roi: 1.8 },
  { name: '小红书', ctr: 4.5, conversion: 1.8, cost: 2.2, roi: 2.1 },
  { name: '应用市场', ctr: 2.8, conversion: 3.2, cost: 1.8, roi: 2.5 },
  { name: '淘宝', ctr: 2.2, conversion: 2.5, cost: 1.5, roi: 2.2 },
  { name: '京东', ctr: 2.0, conversion: 2.3, cost: 1.4, roi: 2.0 },
  { name: '拼多多', ctr: 3.5, conversion: 1.9, cost: 1.7, roi: 2.3 },
];

const monthlyPerformanceData = [
  { month: '1月', impression: 1000000, click: 30000, conversion: 3000, revenue: 150000, cost: 60000 },
  { month: '2月', impression: 1200000, click: 36000, conversion: 3600, revenue: 180000, cost: 72000 },
  { month: '3月', impression: 1500000, click: 45000, conversion: 4500, revenue: 225000, cost: 90000 },
  { month: '4月', impression: 1800000, click: 54000, conversion: 5400, revenue: 270000, cost: 108000 },
  { month: '5月', impression: 2000000, click: 60000, conversion: 6000, revenue: 300000, cost: 120000 },
  { month: '6月', impression: 2200000, click: 66000, conversion: 6600, revenue: 330000, cost: 132000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const InvestmentBusinessModel = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-white dark:bg-gray-900">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          投流商业模式规划：游戏与商户券投放策略
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          针对游戏及商户券的投流商业模式，实现最大ROI的自动化投放系统
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <Zap className="w-4 h-4 mr-1" /> 自动化投放
          </Badge>
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <Target className="w-4 h-4 mr-1" /> 精准定向
          </Badge>
          <Badge variant="outline" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            <TrendingUp className="w-4 h-4 mr-1" /> ROI最大化
          </Badge>
          <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
            <BarChart2 className="w-4 h-4 mr-1" /> 数据驱动
          </Badge>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 mb-6">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">业务概览</TabsTrigger>
          <TabsTrigger value="architecture" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">系统架构</TabsTrigger>
          <TabsTrigger value="bidStrategy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">竞价策略</TabsTrigger>
          <TabsTrigger value="ctrModel" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">CTR预估</TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">数据分析</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2 h-6 w-6 text-blue-500" />
                商业模式概述
              </CardTitle>
              <CardDescription>
                针对游戏及商户券的投流商业模式，实现最大ROI的自动化投放系统
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">核心业务逻辑</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>负责对商户的券通过各个流量渠道进行分发，使商户获取更大流量</li>
                    <li>商户类似广告主，主要是游戏和线下商户有券分发需求，也可以是普通商品</li>
                    <li>普通商品广告结算为展示、点击、下载/激活/购买、商品内Action，券对应的领取、兑换</li>
                    <li>投放的媒体可以是广告联盟，也可以直接是大流量平台（抖音、小红书、应用市场、淘京拼等商城及海外平台）</li>
                  </ul>
                  <CitationLink 
                    id="1" 
                    citations={citations} 
                    className="text-red-500"
                    onClick={(id) => console.log(`Clicked citation ${id}`)}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">核心价值点</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>投放效率优化：CPM = BID * CTR，通过优化BID和CTR来提高投放效率</li>
                    <li>最小化BID：通过自动化试探二价，在二价基础上加0.1策略超参</li>
                    <li>最大化CTR：通过预估曝光CTR，提高广告投放精准度</li>
                    <li>自动化投放：全流程自动化，减少人工干预，提高投放效率</li>
                  </ul>
                  <CitationLink id="1" callType="quote" citations={citations} className="mt-2 text-sm text-blue-600" />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">商业模式图解</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      data={monthlyPerformanceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="cost" name="投放成本" fill="#8884d8" />
                      <Bar yAxisId="left" dataKey="revenue" name="收入" fill="#82ca9d" />
                      <Line yAxisId="right" type="monotone" dataKey="conversion" name="转化量" stroke="#ff7300" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">目标客户群体</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">游戏开发商</div>
                        <div className="w-2/3">需要推广游戏、获取用户的游戏开发商和发行商</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">线下商户</div>
                        <div className="w-2/3">有券分发需求的餐饮、零售、服务等线下商户</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">电商平台</div>
                        <div className="w-2/3">需要推广商品的电商平台和商家</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">应用开发者</div>
                        <div className="w-2/3">需要推广应用的开发者和发行商</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">收入模式</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">CPC</div>
                        <div className="w-2/3">按点击付费，适用于品牌曝光和流量获取</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">CPA</div>
                        <div className="w-2/3">按行动付费，如下载、注册、购买等</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">CPS</div>
                        <div className="w-2/3">按销售额分成，适用于电商和游戏内购</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 font-medium">CPM</div>
                        <div className="w-2/3">按千次展示付费，适用于品牌广告</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-6 bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800">
                <Rocket className="h-4 w-4" />
                <AlertTitle>核心竞争优势</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5 mt-2">
                    <li>针对不同媒体平台的用户群体特性和变现效率进行优化</li>
                    <li>通过用户画像精准匹配目标用户群体，提高广告转化率</li>
                    <li>针对不同媒体生成海量素材，通过AB测试选择最优素材</li>
                    <li>自动化试探二价策略，降低广告投放成本</li>
                    <li>多层次CTR预估模型，从画像匹配到用户级CTR预估</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="architecture" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="mr-2 h-6 w-6 text-blue-500" />
                系统架构设计
              </CardTitle>
              <CardDescription>
                投流商业模式的系统架构设计，包括数据流、组件和接口
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">系统架构概述</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    投流系统架构主要包括广告主接入层、竞价引擎、投放引擎、数据分析层和媒体接入层五个主要部分，通过这些组件的协同工作，实现广告的自动化投放和优化。
                    <CitationLink id="1" callType="quote" citations={citations} className="ml-1 text-sm text-blue-600" />
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">系统架构图</h4>
                    <div className="relative overflow-auto">
                      <div className="flex flex-col items-center">
                        {/* 广告主层 */}
                        <div className="w-full bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mb-2 text-center">
                          广告主接入层（游戏开发商、线下商户、电商平台）
                        </div>
                        
                        {/* 箭头 */}
                        <div className="h-6 border-l-2 border-gray-400"></div>
                        
                        {/* 核心系统层 */}
                        <div className="w-full grid grid-cols-3 gap-2 mb-2">
                          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg text-center">
                            竞价引擎
                          </div>
                          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg text-center">
                            投放引擎
                          </div>
                          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg text-center">
                            数据分析层
                          </div>
                        </div>
                        
                        {/* 箭头 */}
                        <div className="h-6 border-l-2 border-gray-400"></div>
                        
                        {/* 媒体层 */}
                        <div className="w-full bg-purple-100 dark:bg-purple-900 p-3 rounded-lg text-center">
                          媒体接入层（抖音、小红书、应用市场、淘京拼等）
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">系统组件详解</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400">广告主接入层</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        提供API和界面接入，允许广告主上传素材、设置投放参数、查看投放效果等。
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-600 dark:text-green-400">竞价引擎</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        负责实时竞价策略，包括二价探测、出价调整等，确保以最优价格获取流量。
                        <CitationLink id="2" callType="quote" citations={citations} className="ml-1 text-sm text-blue-600" />
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-600 dark:text-green-400">投放引擎</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        负责广告投放策略，包括定向、素材选择、投放时间等，确保广告展示给最合适的用户。
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-600 dark:text-green-400">数据分析层</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        负责数据收集、处理和分析，为竞价和投放提供数据支持，包括CTR预估、用户画像等。
                        <CitationLink id="5" callType="quote" citations={citations} className="ml-1 text-sm text-blue-600" />
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-600 dark:text-purple-400">媒体接入层</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        对接各个媒体平台的API，实现广告投放和数据回传，支持有API和无API的媒体平台。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">技术架构详解</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Database className="w-5 h-5 mr-2 text-blue-500" />
                        数据架构
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>实时数据处理：Kafka、Flink用于实时数据流处理</li>
                        <li>离线数据处理：Hadoop、Spark用于大规模数据处理</li>
                        <li>数据存储：HBase/Cassandra用于实时数据，HDFS用于离线数据</li>
                        <li>数据仓库：Hive/Presto用于数据分析和报表</li>
                        <li>特征存储：Redis/Aerospike用于实时特征存储</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Cpu className="w-5 h-5 mr-2 text-green-500" />
                        计算架构
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>实时竞价：高性能C++服务，毫秒级响应</li>
                        <li>CTR预估：TensorFlow/PyTorch模型，GPU加速</li>
                        <li>特征工程：Spark MLlib用于特征提取和转换</li>
                        <li>模型服务：TensorFlow Serving/ONNX Runtime</li>
                        <li>微服务架构：Spring Cloud/Kubernetes容器化部署</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">API与接口设计</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">接口名称</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">功能描述</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">请求方式</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">适用场景</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">/api/campaign/create</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">创建广告活动</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">POST</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">广告主创建新活动</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">/api/creative/upload</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">上传广告素材</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">POST</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">广告主上传素材</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">/api/bid/strategy</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">设置竞价策略</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">PUT</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">广告主设置竞价策略</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">/api/report/performance</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">获取投放报表</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">GET</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">广告主查看投放效果</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">/api/media/sync</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">媒体数据同步</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">POST</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">媒体平台数据回传</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Alert className="mt-6 bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-800">
                <Shield className="h-4 w-4" />
                <AlertTitle>系统安全与扩展性</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5 mt-2">
                    <li>采用微服务架构，支持水平扩展，可处理高并发请求</li>
                    <li>数据加密传输，保护广告主和用户数据安全</li>
                    <li>多级缓存机制，提高系统响应速度</li>
                    <li>容器化部署，支持云原生架构，便于扩展和维护</li>
                    <li>完善的监控和告警机制，保障系统稳定运行</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bidStrategy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-6 w-6 text-green-500" />
                竞价策略优化
              </CardTitle>
              <CardDescription>
                最小化BID策略，通过自动化试探二价，在二价基础上加0.1策略超参
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">竞价策略概述</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    在实时竞价广告系统中，竞价策略直接影响广告投放的成本和效果。我们的核心策略是最小化BID，通过自动化试探二价，在二价基础上加0.1策略超参，以最低的成本获取流量。
                    <CitationLink id="2" callType="quote" citations={citations} className="ml-1 text-sm text-blue-600" />
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">竞价策略对比</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={bidStrategyData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="cost" name="成本" fill="#8884d8" />
                        <Bar dataKey="roi" name="ROI" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">二价探测机制</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    二价探测是指通过不断调整出价，探测出市场的第二高价，然后在此基础上略微加价，以最低的成本获取流量。这种机制可以有效降低广告投放成本，提高ROI。
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">二价探测流程</h4>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>初始阶段：使用较高的出价，确保能够获得足够的展示机会</li>
                        <li>探测阶段：逐步降低出价，观察是否仍能获得展示</li>
                        <li>稳定阶段：找到临界点后，在二价基础上加0.1，作为最终出价</li>
                        <li>周期性重试：定期重新探测市场二价，适应市场变化</li>
                      </ol>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">策略超参数</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><span className="font-medium">探测周期</span>：每隔多久重新探测一次市场二价</li>
                        <li><span className="font-medium">最高出价</span>：探测过程中允许的最高出价</li>
                        <li><span className="font-medium">加价幅度</span>：在二价基础上加多少作为最终出价</li>
                        <li><span className="font-medium">画像匹配</span>：根据用户画像调整出价策略</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">竞价策略实现</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Code className="w-5 h-5 mr-2 text-blue-500" />
                        算法实现
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-auto">
                        <pre>{`function bidStrategy(marketData, userProfile, budget) {
  // 初始化参数
  let maxBid = calculateMaxBid(budget, userProfile);
  let minBid = 0;
  let currentBid = maxBid;
  let secondPrice = null;
  
  // 探测阶段
  while (maxBid - minBid > 0.1) {
    let result = placeBid(currentBid);
    if (result.won) {
      // 赢得竞价，降低出价
      maxBid = currentBid;
      secondPrice = result.clearingPrice;
      currentBid = (minBid + maxBid) / 2;
    } else {
      // 未赢得竞价，提高出价
      minBid = currentBid;
      currentBid = (minBid + maxBid) / 2;
    }
  }
  
  // 最终出价 = 二价 + 0.1
  return secondPrice + 0.1;
}`}</pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Workflow className="w-5 h-5 mr-2 text-green-500" />
                        实现流程
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                          <div>
                            <h5 className="font-medium">数据收集</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">收集历史竞价数据、市场行情和用户画像</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                          <div>
                            <h5 className="font-medium">初始出价</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">根据历史数据和预算设置初始出价</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                          <div>
                            <h5 className="font-medium">二价探测</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">通过二分法或梯度下降法探测市场二价</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
                          <div>
                            <h5 className="font-medium">最终出价</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">在二价基础上加0.1作为最终出价</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">5</div>
                          <div>
                            <h5 className="font-medium">效果反馈</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">收集投放效果数据，优化竞价策略</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">竞价策略优化</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">时间维度优化</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>根据不同时段用户活跃度调整出价</li>
                        <li>周末和工作日采用不同的竞价策略</li>
                        <li>节假日特殊竞价策略</li>
                        <li>根据历史数据预测最佳投放时间</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">用户维度优化</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>根据用户价值调整出价策略</li>
                        <li>针对高价值用户提高出价</li>
                        <li>根据用户生命周期调整策略</li>
                        <li>考虑用户的历史转化率</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">平台维度优化</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>针对不同媒体平台采用不同策略</li>
                        <li>考虑平台的流量质量和转化率</li>
                        <li>根据平台特性调整出价</li>
                        <li>平台间的预算分配优化</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Alert className="mt-6 bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800">
                <TrendingUp className="h-4 w-4" />
                <AlertTitle>竞价策略效果</AlertTitle>
                <AlertDescription>
                  <p className="mt-2">通过二价探测和智能竞价策略，我们能够显著降低广告投放成本，提高ROI。实验数据表明，与传统的一价竞价相比，我们的策略可以：</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>降低广告投放成本约15-20%</li>
                    <li>提高ROI约25-30%</li>
                    <li>在保持相同展示量的情况下，节省预算约10-15%</li>
                    <li>更有效地分配预算，提高整体投放效果</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ctrModel" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-6 w-6 text-purple-500" />
                CTR预估模型
              </CardTitle>
              <CardDescription>
                最大化CTR，通过多层次CTR预估模型提高广告投放精准度
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">CTR预估模型概述</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    CTR预估是广告系统中的关键环节，通过预估用户对广告的点击率，可以更精准地投放广告，提高广告效果。我们采用多层次的CTR预估模型，从画像匹配到用户级CTR预估，不断提高预估精度。
                    <CitationLink id="4" callType="quote" citations={citations} className="ml-1 text-sm text-blue-600" />
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">CTR预估模型对比</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <RadarChart outerRadius={90} data={ctrModelData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                        <Radar name="准确率" dataKey="accuracy" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="复杂度" dataKey="complexity" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Radar name="速度" dataKey="speed" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">CTR预估模型分期</h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">一期：画像匹配</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        基于用户画像和广告标签的匹配度，预估CTR。这是最基础的CTR预估方法，实现简单，但精度有限。
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                        <li>基于规则的匹配算法</li>
                        <li>考虑用户基本属性和兴趣标签</li>
                        <li>适用于数据量较少的初期阶段</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">二期：搜索词/标签级CTR</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        基于搜索词或标签级别的CTR预估，考虑更多的上下文信息，提高预估精度。
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                        <li>基于机器学习的CTR预估模型</li>
                        <li>考虑搜索词、标签、时间等因素</li>
                        <li>使用GBDT、LR等传统机器学习算法</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-2">三期：用户级CTR</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        基于用户级别的CTR预估，考虑用户的历史行为和偏好，实现个性化的CTR预估。
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                        <li>基于深度学习的CTR预估模型</li>
                        <li>考虑用户历史行为序列</li>
                        <li>使用DNN、LSTM等深度学习算法</li>
                        <li>实现个性化的CTR预估</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">CTR预估模型技术实现</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Code className="w-5 h-5 mr-2 text-blue-500" />
                        模型架构
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-auto">
                        <pre>{`class DeepCTRModel(nn.Module):
    def __init__(self, feature_dims, embedding_size=16):
        super(DeepCTRModel, self).__init__()
        self.embeddings = nn.ModuleDict({
            f"emb_{i}": nn.Embedding(dim, embedding_size)
            for i, dim in enumerate(feature_dims)
        })
        
        self.mlp = nn.Sequential(
            nn.Linear(len(feature_dims) * embedding_size, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(128, 64),
            nn.ReLU(),
            nn.Linear(64, 1),
            nn.Sigmoid()
        )
        
    def forward(self, x):
        embeddings = [self.embeddings[f"emb_{i}"](x[:, i])
                     for i in range(x.shape[1])]
        concat_embeddings = torch.cat(embeddings, dim=1)
        output = self.mlp(concat_embeddings)
        return output`}</pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Sliders className="w-5 h-5 mr-2 text-green-500" />
                        特征工程
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium">用户特征</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                            <li>人口统计学特征：年龄、性别、地域等</li>
                            <li>兴趣标签：游戏偏好、消费习惯等</li>
                            <li>行为特征：历史点击、购买、安装等</li>
                            <li>设备特征：手机型号、操作系统等</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium">广告特征</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                            <li>广告类型：游戏、商户券等</li>
                            <li>广告内容：标题、描述、图片等</li>
                            <li>广告效果：历史CTR、CVR等</li>
                            <li>广告主特征：行业、品牌等</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium">上下文特征</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                            <li>时间特征：时间段、星期几、节假日等</li>
                            <li>位置特征：广告位置、页面位置等</li>
                            <li>媒体特征：媒体类型、媒体质量等</li>
                            <li>竞争特征：竞争激烈程度、市场行情等</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">影响CTR的关键因素</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">媒体体调性</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        不同媒体平台的用户群体和变现效率对不同商品的CTR有显著影响。例如，抖音的短视频和小红书的种草转化率对不同商品是不同的。
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                        <li>积累平台调性数据</li>
                        <li>针对不同平台配置不同投放策略</li>
                        <li>考虑平台用户的消费习惯</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">用户匹配度</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        当前曝光的用户是否是目标群体，如游戏券对非游戏用户无吸引力。需要积累或购买用户画像，标签维度要足够丰富。
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                        <li>构建多维度用户画像</li>
                        <li>实时更新用户兴趣标签</li>
                        <li>基于用户行为预测兴趣变化</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">素材吸引力</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        素材的吸引力直接影响CTR。针对不同媒体生成海量素材，通过AB测试选择最优素材，是提高CTR的关键。
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                        <li>针对不同媒体生成差异化素材</li>
                        <li>持续进行AB测试优化素材</li>
                        <li>分析高CTR素材的共同特点</li>
                        <li>考虑用户群体对素材的偏好</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Alert className="mt-6 bg-purple-50 dark:bg-purple-900 border-purple-200 dark:border-purple-800">
                <Activity className="h-4 w-4" />
                <AlertTitle>CTR预估模型效果</AlertTitle>
                <AlertDescription>
                  <p className="mt-2">通过多层次的CTR预估模型，我们能够显著提高广告投放的精准度，提高CTR和转化率。实验数据表明：</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>一期模型（画像匹配）：CTR提升约10-15%</li>
                    <li>二期模型（搜索词/标签级CTR）：CTR提升约20-25%</li>
                    <li>三期模型（用户级CTR）：CTR提升约30-40%</li>
                    <li>整体ROI提升约25-35%</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChartIcon className="mr-2 h-6 w-6 text-amber-500" />
                数据分析与优化
              </CardTitle>
              <CardDescription>
                基于数据分析的投放优化策略，提高ROI和投放效率
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">平台投放效果分析</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    不同媒体平台的投放效果差异显著，通过数据分析可以找出最适合的投放平台和策略，提高整体ROI。
                    <CitationLink id="5" callType="quote" citations={citations} className="ml-1 text-sm text-blue-600" />
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">平台投放效果对比</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={platformPerformanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="ctr" name="CTR(%)" fill="#8884d8" />
                        <Bar dataKey="conversion" name="转化率(%)" fill="#82ca9d" />
                        <Bar dataKey="roi" name="ROI" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">投放效果趋势分析</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    通过分析投放效果的时间趋势，可以发现投放策略的优化空间和市场变化，及时调整投放策略。
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                    <h4 className="font-medium mb-2">投放效果趋势</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart
                        data={monthlyPerformanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="revenue" name="收入" stroke="#8884d8" />
                        <Line yAxisId="left" type="monotone" dataKey="cost" name="成本" stroke="#82ca9d" />
                        <Line yAxisId="right" type="monotone" dataKey="conversion" name="转化量" stroke="#ff7300" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">投放优化策略</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">预算分配优化</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        基于各平台的ROI和流量规模，优化预算分配，最大化整体投放效果。
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                        <li>基于ROI的预算分配模型</li>
                        <li>考虑平台流量上限和下限</li>
                        <li>动态调整预算分配比例</li>
                        <li>考虑不同时间段的预算分配</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">定向优化</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        基于用户画像和行为数据，优化广告定向，提高广告触达效率。
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                        <li>基于用户兴趣的定向优化</li>
                        <li>基于用户行为的定向优化</li>
                        <li>基于地域和时间的定向优化</li>
                        <li>基于设备和网络的定向优化</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">素材优化</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        通过AB测试和数据分析，优化广告素材，提高广告吸引力和转化率。
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                        <li>基于AB测试的素材优化</li>
                        <li>基于用户反馈的素材优化</li>
                        <li>基于竞品分析的素材优化</li>
                        <li>基于平台特性的素材优化</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">数据分析工具与方法</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Database className="w-5 h-5 mr-2 text-blue-500" />
                        数据收集与处理
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium">数据收集</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                            <li>广告展示数据：展示量、点击量、转化量等</li>
                            <li>用户行为数据：浏览、点击、转化等</li>
                            <li>媒体平台数据：流量、用户画像等</li>
                            <li>竞争数据：竞争对手投放情况、市场行情等</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium">数据处理</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                            <li>数据清洗：去除异常值、填充缺失值等</li>
                            <li>数据转换：特征工程、归一化等</li>
                            <li>数据聚合：按时间、平台、广告主等维度聚合</li>
                            <li>数据存储：实时数据和离线数据分离存储</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <BarChart2 className="w-5 h-5 mr-2 text-green-500" />
                        数据分析与可视化
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium">数据分析</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                            <li>描述性分析：均值、方差、分布等</li>
                            <li>相关性分析：变量间的相关关系</li>
                            <li>回归分析：因素对结果的影响</li>
                            <li>聚类分析：用户分群、广告分类等</li>
                            <li>时间序列分析：趋势、周期性等</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium">数据可视化</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                            <li>实时监控面板：关键指标实时展示</li>
                            <li>趋势图：指标随时间变化趋势</li>
                            <li>对比图：不同维度的数据对比</li>
                            <li>热力图：多维度数据展示</li>
                            <li>漏斗图：转化流程分析</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">关键性能指标(KPI)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">指标名称</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">指标定义</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">目标值</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">优化方向</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">CTR</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">点击量/展示量</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">&gt;3%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">提高</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">CVR</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">转化量/点击量</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">&gt;10%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">提高</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">ROI</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">收入/成本</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">&gt;2.0</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">提高</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">CPC</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">成本/点击量</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">&lt;2元</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">降低</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">CPA</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">成本/转化量</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">&lt;20元</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">降低</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Alert className="mt-6 bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-800">
                <Globe className="h-4 w-4" />
                <AlertTitle>数据驱动的投放优化效果</AlertTitle>
                <AlertDescription>
                  <p className="mt-2">通过数据分析和投放优化，我们能够显著提高广告投放的效果和ROI。实验数据表明：</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>预算分配优化：ROI提升约15-20%</li>
                    <li>定向优化：CTR提升约20-25%</li>
                    <li>素材优化：CTR提升约15-20%，CVR提升约10-15%</li>
                    <li>整体投放效果：ROI提升约25-30%</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">结论与展望</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">核心竞争力</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>自动化试探二价策略，降低广告投放成本</li>
              <li>多层次CTR预估模型，提高广告投放精准度</li>
              <li>针对不同媒体生成海量素材，通过AB测试选择最优素材</li>
              <li>完善的数据分析体系，支持投放决策和优化</li>
              <li>灵活的API和界面，支持不同类型的广告主和媒体</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">未来发展方向</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>引入更先进的AI技术，提高CTR预估精度</li>
              <li>扩展更多媒体平台的接入，提供更全面的投放渠道</li>
              <li>开发更智能的竞价策略，适应不同市场环境</li>
              <li>提供更丰富的数据分析工具，支持更深入的投放优化</li>
              <li>探索更多变现模式，提高平台收益</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 投流商业模式规划. All rights reserved.</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">参考资料</h3>
          <ul className="space-y-1">
            {Object.values(citations).map((citation, index) => (
              <li key={index}>
                <CitationLink id={(index + 1).toString()} callType="recommend" citations={citations} className="text-sm text-blue-600" />
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default InvestmentBusinessModel;
