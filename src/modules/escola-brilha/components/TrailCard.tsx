import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { AreaType, Trail } from '../types/school';
import { BookOpen, Calculator, Beaker, Palette, Activity, Lightbulb } from 'lucide-react';

const AreaIcons: Record<AreaType, React.ReactNode> = {
  linguagem: <BookOpen className="text-blue-500" />,
  matematica: <Calculator className="text-orange-500" />,
  ciencias: <Beaker className="text-green-500" />,
  artes: <Palette className="text-pink-500" />,
  coordenacao_motora: <Activity className="text-purple-500" />,
  logica: <Lightbulb className="text-amber-500" />
};

interface TrailCardProps {
  trail: Trail;
  onClick: (trail: Trail) => void;
}

export const TrailCard: React.FC<TrailCardProps> = ({ trail, onClick }) => {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-blue-200 overflow-hidden"
      onClick={() => onClick(trail)}
    >
      <div className={`h-2 w-full bg-gradient-to-r ${getAreaGradient(trail.area)}`} />
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold text-slate-800">{trail.title}</CardTitle>
        <div className="p-2 bg-slate-50 rounded-lg">
          {AreaIcons[trail.area]}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 capitalize">{trail.area.replace('_', ' ')}</span>
            <span className="font-bold text-blue-600">{trail.progress}%</span>
          </div>
          <Progress value={trail.progress} className="h-2" />
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
              {trail.missions.length} Missões
            </Badge>
            <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
              BNCC Ativa
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

function getAreaGradient(area: AreaType): string {
  switch (area) {
    case 'linguagem': return 'from-blue-400 to-blue-600';
    case 'matematica': return 'from-orange-400 to-orange-600';
    case 'ciencias': return 'from-green-400 to-green-600';
    case 'artes': return 'from-pink-400 to-pink-600';
    case 'coordenacao_motora': return 'from-purple-400 to-purple-600';
    case 'logica': return 'from-amber-400 to-amber-600';
    default: return 'from-slate-400 to-slate-600';
  }
}
