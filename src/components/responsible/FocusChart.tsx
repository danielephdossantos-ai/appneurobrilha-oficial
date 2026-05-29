
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { FocusSession } from "@/data/responsible/mock-data";

interface FocusChartProps {
  sessions: FocusSession[];
}

export const FocusChart: React.FC<FocusChartProps> = ({ sessions }) => {
  const data = sessions.map(s => ({
    day: s.timestamp.split('-')[2],
    minutes: s.durationMinutes,
    focus: Math.round(s.focusLevel * 100),
    mode: s.sensoryMode
  }));

  const getBarColor = (mode: string) => {
    switch (mode) {
      case 'hiperfoco': return '#8b5cf6';
      case 'foco': return '#3b82f6';
      case 'calmante': return '#10b981';
      case 'baixa-estimulacao': return '#f59e0b';
      default: return '#6366f1';
    }
  };

  return (
    <Card className="border-none shadow-sm overflow-hidden h-full">
      <CardHeader>
        <CardTitle className="text-lg">Tempo de Foco</CardTitle>
        <CardDescription>Distribuição de tempo por modo sensorial</CardDescription>
      </CardHeader>
      <CardContent className="h-[250px] p-0 pr-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              label={{ value: 'Dia', position: 'insideBottom', offset: -5, fontSize: 10 }}
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              cursor={{ fill: '#f8fafc' }}
            />
            <Bar dataKey="minutes" radius={[4, 4, 0, 0]} barSize={24}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.mode)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap gap-3 mt-4 px-6 justify-center">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
            <div className="h-2 w-2 rounded-full bg-violet-500" /> Hiperfoco
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
            <div className="h-2 w-2 rounded-full bg-blue-500" /> Foco
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
            <div className="h-2 w-2 rounded-full bg-emerald-500" /> Calmante
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
            <div className="h-2 w-2 rounded-full bg-amber-500" /> Baixa Estimulação
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
