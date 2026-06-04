import React, { useEffect, useState } from 'react';
import { TrailCard } from './TrailCard';
import { TrailService } from '../services/TrailService';
import { AreaType, Trail } from '../types/school';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { LessonFlow } from './LessonFlow';
import { Mission } from '../types/school';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';


export const SchoolMap: React.FC = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeArea, setActiveArea] = useState<'todas' | AreaType>('todas');
  const [selectedTrail, setSelectedTrail] = useState<Trail | null>(null);
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  const alunoId = 'demo-student-123';
  
  const areas: AreaType[] = ['linguagem', 'matematica', 'ciencias', 'artes', 'coordenacao_motora', 'logica'];

  useEffect(() => {
    const loadTrails = async () => {
      setLoading(true);
      try {
        const allTrails = await TrailService.getAllTrails(alunoId);
        setTrails(allTrails);
      } catch (error) {
        console.error('Error loading trails:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTrails();
  }, [alunoId]);

  if (activeLesson) {
    return (
      <div className="bg-slate-50 min-h-screen py-12">
        <LessonFlow 
          skillCode={activeLesson} 
          alunoId={alunoId} 
          onComplete={() => {
            setActiveLesson(null);
            // Reload trails to update lock status
            const loadTrails = async () => {
              setLoading(true);
              const allTrails = await TrailService.getAllTrails(alunoId);
              setTrails(allTrails);
              // Update selected trail if it exists
              if (selectedTrail) {
                const updated = allTrails.find(t => t.id === selectedTrail.id);
                if (updated) setSelectedTrail(updated);
              }
              setLoading(false);
            };
            loadTrails();
          }}
          onExit={() => setActiveLesson(null)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 bg-slate-50 min-h-screen">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Escola Brilha</h1>
        <p className="text-slate-500 text-lg">Sua jornada de aprendizado divertida e personalizada!</p>
      </header>

      {selectedTrail ? (
        <div className="space-y-6 max-w-4xl mx-auto">
          <Button variant="ghost" onClick={() => setSelectedTrail(null)} className="mb-4">
            ← Voltar para o mapa
          </Button>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-black text-slate-800">{selectedTrail.title}</h2>
            <Badge variant="secondary" className="px-4 py-1">{selectedTrail.progress}% Concluído</Badge>
          </div>
          
          <div className="space-y-4">
            {selectedTrail.missions.map((mission: Mission) => (
              <Card 
                key={mission.id} 
                className={`transition-all ${mission.status === 'locked' ? 'opacity-50' : 'hover:shadow-md cursor-pointer'}`}
                onClick={() => mission.status !== 'locked' && setActiveLesson(mission.id)}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${
                      mission.status === 'completed' ? 'bg-green-100 text-green-600' : 
                      mission.status === 'available' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {mission.status === 'locked' ? <Lock className="w-5 h-5" /> : mission.order + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-800">{mission.title}</h4>
                      <p className="text-sm text-slate-500">{mission.description}</p>
                    </div>
                  </div>
                  {mission.status !== 'locked' && (
                    <Button variant="outline" className="rounded-full gap-2">
                      {mission.status === 'completed' ? 'Refazer' : 'Começar'} <Play className="w-4 h-4 fill-current" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Tabs defaultValue="todas" className="w-full" onValueChange={(v) => setActiveArea(v as any)}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white p-1 shadow-sm border border-slate-200 h-auto flex-wrap justify-center">
              <TabsTrigger value="todas" className="px-6 py-2">Todas</TabsTrigger>
              {areas.map(area => (
                <TabsTrigger key={area} value={area} className="px-6 py-2 capitalize">
                  {area.replace('_', ' ')}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeArea} className="mt-0">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <Skeleton key={i} className="h-64 w-full rounded-2xl" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTrails.map(trail => (
                  <TrailCard 
                    key={trail.id} 
                    trail={trail} 
                    onClick={() => setSelectedTrail(trail)} 
                  />
                ))}
                {filteredTrails.length === 0 && (
                  <div className="col-span-full py-12 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 italic">
                      Novas aventuras de {activeArea === 'todas' ? 'estudo' : activeArea.replace('_', ' ')} em breve!
                    </p>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};