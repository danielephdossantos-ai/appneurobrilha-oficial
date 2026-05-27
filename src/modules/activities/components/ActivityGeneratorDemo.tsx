import React, { useState, useEffect } from 'react';
import { ActivityProceduralService } from '../../pedagogy-engine/services/ActivityProceduralService';
import { GeneratedActivity } from '../../pedagogy-engine/types/generator';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';

const ActivityGeneratorDemo = () => {
  const [difficulty, setDifficulty] = useState(0.5);
  const [activities, setActivities] = useState<GeneratedActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<GeneratedActivity | null>(null);

  const generateNewSet = () => {
    const service = ActivityProceduralService.getInstance();
    const domains = ['linguistics', 'math', 'cognitive', 'motor', 'perception'];
    const newActivities = service.generateSession(domains, difficulty, 5);
    setActivities(newActivities);
    setSelectedActivity(newActivities[0]);
  };

  useEffect(() => {
    generateNewSet();
  }, [difficulty]);

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
        <div className="w-full md:w-1/2">
          <label className="text-sm font-medium mb-2 block">Dificuldade Adaptativa: {(difficulty * 100).toFixed(0)}%</label>
          <Slider 
            value={[difficulty * 100]} 
            onValueChange={(val) => setDifficulty(val[0] / 100)} 
            max={100} 
            step={10}
          />
        </div>
        <Button onClick={generateNewSet} variant="default" className="w-full md:w-auto">
          Gerar Novas Atividades
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-slate-700">Atividades Geradas</h3>
          {activities.map((act) => (
            <Card 
              key={act.id} 
              className={`cursor-pointer transition-all hover:border-blue-400 ${selectedActivity?.id === act.id ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setSelectedActivity(act)}
            >
              <CardContent className="p-3">
                <div className="flex justify-between items-start mb-1">
                  <Badge variant="outline" className="text-[10px] uppercase">
                    {act.metadata.domain}
                  </Badge>
                  <span className="text-[10px] text-slate-400">#{act.metadata.seed}</span>
                </div>
                <p className="text-sm font-semibold">{act.title}</p>
                <p className="text-xs text-slate-500 line-clamp-1">{act.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="md:col-span-2">
          {selectedActivity ? (
            <Card className="h-full border-2 border-blue-200 shadow-lg bg-white overflow-hidden">
              <CardHeader className="bg-blue-500 text-white p-6">
                <div className="flex justify-between items-center">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/40">
                    {selectedActivity.metadata.domain.toUpperCase()}
                  </Badge>
                  <span className="text-sm opacity-80">Nível: {selectedActivity.difficulty.toFixed(1)}</span>
                </div>
                <CardTitle className="mt-2 text-2xl">{selectedActivity.title}</CardTitle>
                <p className="text-blue-50 opacity-90">{selectedActivity.instruction}</p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[300px]">
                <div className="bg-slate-50 w-full p-6 rounded-2xl border-2 border-dashed border-slate-200">
                  <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Conteúdo Procedural</h4>
                  <pre className="text-sm text-slate-700 overflow-auto max-h-[200px]">
                    {JSON.stringify(selectedActivity.content, null, 2)}
                  </pre>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                    <p className="text-[10px] text-green-600 font-bold uppercase mb-1">Perfil Sensorial</p>
                    <p className="text-xs text-green-800">Visual: {selectedActivity.sensoryProfile.visualStimulus}</p>
                    <p className="text-xs text-green-800">Motor: {selectedActivity.sensoryProfile.motorComplexity}</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <p className="text-[10px] text-purple-600 font-bold uppercase mb-1">Neuro-Ajustes</p>
                    <p className="text-xs text-purple-800">Redução de Distração: Ativada</p>
                    <p className="text-xs text-purple-800">Reforço Auditivo: Disponível</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400 italic">
              Selecione uma atividade para visualizar os dados procedurais
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityGeneratorDemo;
