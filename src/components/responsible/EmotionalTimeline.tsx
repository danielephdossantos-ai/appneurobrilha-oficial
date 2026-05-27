
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { EmotionalHistoryEntry } from "../../data/responsible/mock-data";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface EmotionalTimelineProps {
  history: EmotionalHistoryEntry[];
}

export const EmotionalTimeline: React.FC<EmotionalTimelineProps> = ({ history }) => {
  const chartData = history.map(entry => ({
    time: new Date(entry.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    intensity: Math.round(entry.intensity * 100),
    emotion: entry.emotion
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-slate-100 rounded-lg shadow-lg">
          <p className="text-xs font-bold text-slate-500 mb-1">{label}</p>
          <p className="text-sm font-semibold capitalize text-primary">
            Estado: {payload[0].payload.emotion}
          </p>
          <p className="text-xs text-slate-400">Intensidade: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-1 md:col-span-2 border-none shadow-sm overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">Evolução Emocional</CardTitle>
        <CardDescription>Variações de humor e engajamento durante as atividades</CardDescription>
      </CardHeader>
      <CardContent className="h-[250px] p-0 pr-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="intensity" 
              stroke="#ec4899" 
              fillOpacity={1} 
              fill="url(#colorIntensity)" 
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
