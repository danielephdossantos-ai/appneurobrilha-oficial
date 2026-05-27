import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useNeuroAnalytics } from '../hooks/useNeuroAnalytics';
import { Brain, TrendingUp, Heart, Target, Zap, AlertCircle } from 'lucide-react';

interface NeuroAnalyticsDashboardProps {
  childId: string;
}

export const NeuroAnalyticsDashboard: React.FC<NeuroAnalyticsDashboardProps> = ({ childId }) => {
  const { data, insights, loading } = useNeuroAnalytics(childId);

  if (loading || !data) {
    return <div className="p-8 text-center">Carregando análise neuroeducacional...</div>;
  }

  const radarData = [
    { subject: 'Atenção', A: data.cognitiveRadar.attention },
    { subject: 'Memória', A: data.cognitiveRadar.memory },
    { subject: 'Executivo', A: data.cognitiveRadar.executive },
    { subject: 'Linguagem', A: data.cognitiveRadar.language },
    { subject: 'Matemática', A: data.cognitiveRadar.math },
    { subject: 'Autonomia', A: data.cognitiveRadar.autonomy },
  ];

  const emotionalData = [
    { name: 'Engajamento', value: data.emotionalMap.engagement, color: '#4ade80' },
    { name: 'Calma', value: data.emotionalMap.calm, color: '#60a5fa' },
    { name: 'Alegria', value: data.emotionalMap.joy, color: '#facc15' },
    { name: 'Frustração', value: data.emotionalMap.frustration, color: '#f87171' },
  ];

  const executiveData = [
    { name: 'Controle Inibitório', score: data.executiveFunctions.inhibitoryControl },
    { name: 'Memória de Trabalho', score: data.executiveFunctions.workingMemory },
    { name: 'Flexibilidade', score: data.executiveFunctions.cognitiveFlexibility },
  ];

  return (
    <div className="space-y-6 p-4 md:p-8 bg-slate-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Análise Neuroeducacional</h1>
          <p className="text-slate-500">Monitoramento em tempo real do desenvolvimento cognitivo</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 flex items-center gap-3">
            <Zap className="text-amber-500" />
            <div>
              <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Status Atual</p>
              <p className="font-bold text-green-600">Alta Performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Automáticos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((insight) => (
          <Card key={insight.id} className={`border-l-4 ${
            insight.type === 'positive' ? 'border-l-green-500' : 
            insight.type === 'warning' ? 'border-l-amber-500' : 'border-l-blue-500'
          }`}>
            <CardContent className="pt-4 flex gap-3">
              <div className={`p-2 rounded-full h-fit ${
                insight.type === 'positive' ? 'bg-green-100 text-green-600' : 
                insight.type === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {insight.type === 'positive' ? <TrendingUp size={18} /> : 
                 insight.type === 'warning' ? <AlertCircle size={18} /> : <Brain size={18} />}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">{insight.message}</p>
                <p className="text-xs text-slate-400 mt-1 capitalize">{insight.category} • agora</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Cognitivo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="text-purple-500" /> Radar Cognitivo
            </CardTitle>
            <CardDescription>Distribuição de habilidades por domínio</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <Radar
                  name="Criança"
                  dataKey="A"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Evolução Semanal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-blue-500" /> Evolução de Desempenho
            </CardTitle>
            <CardDescription>Progresso semanal das atividades finalizadas</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.weekly}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Mapa Emocional */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="text-pink-500" /> Perfil de Engajamento
            </CardTitle>
            <CardDescription>Distribuição do estado emocional durante o aprendizado</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center justify-around h-[300px]">
            <div className="w-full h-full max-w-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={emotionalData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {emotionalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-4 md:mt-0">
              {emotionalData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <div>
                    <p className="text-xs text-slate-500">{item.name}</p>
                    <p className="font-bold">{item.value}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Progresso Executivo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="text-orange-500" /> Funções Executivas
            </CardTitle>
            <CardDescription>Capacidade de autorregulação e organização</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={executiveData} layout="vertical">
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  width={120}
                  tick={{ fill: '#64748b', fontSize: 11 }}
                />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={20}>
                  {executiveData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#f97316', '#0ea5e9', '#6366f1'][index % 3]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Evolução BNCC */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Conformidade BNCC (Educação Infantil)</CardTitle>
            <CardDescription>Progresso nos campos de experiência definidos pela base curricular</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.bnccProgress.map((item) => (
                <div key={item.competence} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-700 font-medium">{item.competence}</span>
                    <span className="text-slate-500">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className="bg-indigo-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
