import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, CheckCircle, AlertTriangle, Activity, CreditCard } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const mockMetrics = {
  active_users_24h: 1240,
  retention_rate: 85.4,
  avg_progress: 62,
  total_activities_today: 5432,
  critical_errors: 2,
  system_performance_ms: 120
};

const activityData = [
  { name: 'Seg', count: 4200 },
  { name: 'Ter', count: 5100 },
  { name: 'Qua', count: 4800 },
  { name: 'Qui', count: 6100 },
  { name: 'Sex', count: 5500 },
  { name: 'Sab', count: 3200 },
  { name: 'Dom', count: 2800 },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Painel Administrativo</h1>
          <p className="text-slate-500">Visão geral do sistema e métricas críticas</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-600">Sistema Online</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Usuários Ativos (24h)" value={mockMetrics.active_users_24h.toString()} icon={<Users className="text-blue-500" />} change="+12%" />
        <MetricCard title="Taxa de Retenção" value={`${mockMetrics.retention_rate}%`} icon={<TrendingUp className="text-green-500" />} change="+2.4%" />
        <MetricCard title="Atividades Realizadas" value={mockMetrics.total_activities_today.toLocaleString()} icon={<CheckCircle className="text-purple-500" />} change="+18%" />
        <MetricCard title="Erros Críticos" value={mockMetrics.critical_errors.toString()} icon={<AlertTriangle className="text-red-500" />} change="-50%" trend="down" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-4 bg-white border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="text-blue-500" size={20} /> Atividades Diárias
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="p-4 bg-white border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CreditCard className="text-indigo-500" size={20} /> Performance do Sistema (ms)
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData.map(d => ({ ...d, ms: 100 + Math.random() * 50 }))}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis hide domain={[0, 200]} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="ms" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1', strokeWidth: 2, r: 4, stroke: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickAction title="Gestão de Usuários" description="Acessar base completa de perfis" icon={<Users />} />
        <QuickAction title="Gestão BNCC" description="Configurar habilidades e objetivos" icon={<CheckCircle />} />
        <QuickAction title="Configurações de Planos" description="Gerenciar assinaturas e acessos" icon={<CreditCard />} />
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, icon, change, trend = 'up' }: any) => (
  <Card className="bg-white border-slate-200">
    <CardContent className="pt-6">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {change}
        </span>
      </div>
      <div>
        <p className="text-sm text-slate-500 font-medium mb-1">{title}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
      </div>
    </CardContent>
  </Card>
);

const QuickAction = ({ title, description, icon }: any) => (
  <Card className="cursor-pointer hover:border-blue-400 hover:shadow-sm transition-all bg-white border-slate-200">
    <CardContent className="pt-6 flex items-start gap-4">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">{icon}</div>
      <div>
        <h3 className="font-bold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </CardContent>
  </Card>
);
