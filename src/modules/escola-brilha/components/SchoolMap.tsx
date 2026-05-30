import React from 'react';
import { TrailCard } from './TrailCard';
import { TrailService } from '../services/TrailService';
import { AreaType } from '../types/school';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const SchoolMap: React.FC = () => {
  const allTrails = TrailService.getAllTrails();
  
  const areas: AreaType[] = ['linguagem', 'matematica', 'ciencias', 'artes', 'coordenacao_motora', 'logica'];

  return (
    <div className="space-y-8 p-6 bg-slate-50 min-h-screen">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Escola Brilha</h1>
        <p className="text-slate-500 text-lg">Sua jornada de aprendizado divertida e personalizada!</p>
      </header>

      <Tabs defaultValue="todas" className="w-full">
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

        <TabsContent value="todas">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTrails.map(trail => (
              <TrailCard key={trail.id} trail={trail} onClick={() => console.log('Trail selected:', trail.id)} />
            ))}
          </div>
        </TabsContent>

        {areas.map(area => (
          <TabsContent key={area} value={area}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TrailService.getTrailsByArea(area).map(trail => (
                <TrailCard key={trail.id} trail={trail} onClick={() => console.log('Trail selected:', trail.id)} />
              ))}
              {TrailService.getTrailsByArea(area).length === 0 && (
                <div className="col-span-full py-12 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 italic">Novas aventuras de {area.replace('_', ' ')} em breve!</p>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
