import React, { useState } from "react";
import { ALL_SKILLS } from "./data/skills/mock-data";
import { MasteryNode } from "./data/skills/types";
import { LearningMap } from "./components/pedagogical/LearningMap";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, GraduationCap, Map as MapIcon, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

const App = () => {
  const [mastery, setMastery] = useState<Record<string, MasteryNode>>({
    "lp-p1-01": { 
      skillId: "lp-p1-01", 
      status: "dominado", 
      progress: 1.0, 
      lastAttempt: new Date() 
    },
    "lp-1-01": { 
      skillId: "lp-1-01", 
      status: "em_progresso", 
      progress: 0.45, 
      lastAttempt: new Date() 
    }
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-bold text-xl tracking-tight">NeuroPedagógico</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-white shadow-sm flex items-center gap-2">
              <MapIcon className="w-4 h-4" /> Mapa
            </button>
            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:bg-white/50 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Currículo
            </button>
            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:bg-white/50 flex items-center gap-2">
              <BarChart className="w-4 h-4" /> Desempenho
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Sua Jornada de Aprendizado</h2>
          <p className="text-slate-600">Baseado na BNCC com adaptação neurocognitiva em tempo real.</p>
        </div>

        <Tabs defaultValue="map" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList className="bg-slate-200">
              <TabsTrigger value="map">Visualização em Mapa</TabsTrigger>
              <TabsTrigger value="list">Lista de Habilidades</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2">
              <Card className="py-2 px-4 shadow-sm flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium">Perfil: Neurotípico</span>
              </Card>
            </div>
          </div>

          <TabsContent value="map" className="mt-0">
            <Card className="border-none shadow-none bg-transparent">
              <LearningMap 
                skills={ALL_SKILLS} 
                mastery={mastery} 
                onSkillClick={(s) => console.log("Skill selected:", s.title)}
              />
            </Card>
          </TabsContent>

          <TabsContent value="list">
            <div className="grid gap-4">
              {ALL_SKILLS.map(skill => (
                <Card key={skill.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div>
                    <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded border mb-1 inline-block">
                      {skill.bnccCode}
                    </span>
                    <h4 className="font-bold text-slate-900">{skill.title}</h4>
                    <p className="text-xs text-slate-500">{skill.grade} • {skill.estimatedTime} min</p>
                  </div>
                  <div className="text-right">
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full font-medium",
                      mastery[skill.id]?.status === "dominado" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
                    )}>
                      {mastery[skill.id]?.status || "Não iniciado"}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default App;
