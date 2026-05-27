
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SkillProgressData } from "../../data/responsible/mock-data";

interface SkillProgressProps {
  skills: SkillProgressData[];
}

export const SkillProgress: React.FC<SkillProgressProps> = ({ skills }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'dominado': return 'bg-green-100 text-green-700 border-green-200';
      case 'em-progresso': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'revisao-necessaria': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ');
  };

  return (
    <Card className="border-none shadow-sm h-full">
      <CardHeader>
        <CardTitle className="text-lg">Domínio por Habilidade</CardTitle>
        <CardDescription>Progresso curricular baseado na BNCC</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.skillId} className="space-y-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{skill.skillCode}</span>
                  <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${getStatusColor(skill.status)}`}>
                    {getStatusLabel(skill.status)}
                  </Badge>
                </div>
                <h4 className="text-sm font-semibold text-slate-700">{skill.name}</h4>
              </div>
              <span className="text-sm font-bold text-slate-900">{skill.mastery}%</span>
            </div>
            <Progress value={skill.mastery} className="h-2" />
            <p className="text-[10px] text-slate-400 text-right">Última atividade: {new Date(skill.lastActivity).toLocaleDateString('pt-BR')}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
