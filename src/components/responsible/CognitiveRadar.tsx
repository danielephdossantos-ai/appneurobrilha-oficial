
import React from 'react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface CognitiveRadarProps {
  data: { label: string; value: number; fullMark: number }[];
}

export const CognitiveRadar: React.FC<CognitiveRadarProps> = ({ data }) => {
  return (
    <Card className="col-span-1 md:col-span-2 overflow-hidden border-none shadow-sm bg-gradient-to-br from-white to-slate-50">
      <CardHeader>
        <CardTitle className="text-lg">Perfil Neurocognitivo</CardTitle>
        <CardDescription>Análise das funções executivas e cognitivas</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] flex items-center justify-center p-0">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis dataKey="label" tick={{ fill: '#64748b', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Lucas"
              dataKey="value"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.6}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
