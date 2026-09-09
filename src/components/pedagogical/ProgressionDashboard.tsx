import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Calculator,
  PenTool,
  Lightbulb,
  Brain,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { supabase } from "@/database/supabase/client";

interface Activity {
  id: string;
  titulo: string;
  serie: string;
  domain: string;
  nivel_dificuldade: string;
}

interface Trail {
  id: string;
  name: string;
  serie: string;
  description: string;
}

export const ProgressionDashboard = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState("Educação Infantil");

  const levels = [
    "Educação Infantil",
    "1º Ano",
    "2º Ano",
    "3º Ano",
    "4º Ano",
    "5º Ano",
    "6º Ano",
    "7º Ano",
    "8º Ano",
    "9º Ano",
  ];

  const domains = [
    { id: "alfabetizacao", label: "Alfabetização", icon: PenTool, color: "text-blue-500" },
    { id: "matematica", label: "Matemática", icon: Calculator, color: "text-green-500" },
    { id: "leitura", label: "Leitura", icon: BookOpen, color: "text-purple-500" },
    { id: "interpretacao", label: "Interpretação", icon: Lightbulb, color: "text-yellow-500" },
    { id: "coordenacao", label: "Coordenação", icon: Brain, color: "text-red-500" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: actData } = await supabase
        .from("pedagogical_activities_base")
        .select("id, titulo, serie, domain, nivel_dificuldade");

      const { data: trailData } = await supabase
        .from("learning_trails")
        .select("id, name, serie, description");

      if (actData) setActivities(actData as Activity[]);
      if (trailData) setTrails(trailData as Trail[]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredActivities = activities.filter((a) => a.serie === selectedLevel);
  const filteredTrails = trails.filter((t) => t.serie === selectedLevel);

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            Progressão Pedagógica NeuroBrilha
          </h1>
          <p className="text-slate-500">Acompanhe a evolução do aprendizado em todos os níveis.</p>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedLevel === level
                ? "bg-indigo-600 text-white shadow-lg scale-105"
                : "bg-white text-slate-600 hover:bg-slate-100 border"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Atividades por Domínio</CardTitle>
              <CardDescription>Nível atual: {selectedLevel}</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={domains[0].id} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto p-1 bg-slate-100">
                  {domains.map((domain) => (
                    <TabsTrigger key={domain.id} value={domain.id} className="py-2">
                      <domain.icon className={`w-4 h-4 mr-2 ${domain.color}`} />
                      <span className="hidden md:inline">{domain.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                {domains.map((domain) => (
                  <TabsContent key={domain.id} value={domain.id} className="mt-4 space-y-3">
                    {filteredActivities.filter((a) => a.domain === domain.id).length > 0 ? (
                      filteredActivities
                        .filter((a) => a.domain === domain.id)
                        .map((activity) => (
                          <div
                            key={activity.id}
                            className="flex items-center justify-between p-3 bg-white border rounded-lg hover:border-indigo-300 transition-colors group cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-full bg-slate-50 ${domain.color}`}>
                                <domain.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="font-medium text-slate-800">{activity.titulo}</p>
                                <Badge
                                  variant="outline"
                                  className="text-[10px] uppercase font-bold"
                                >
                                  {activity.nivel_dificuldade}
                                </Badge>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                          </div>
                        ))
                    ) : (
                      <div className="text-center py-10 text-slate-400 italic bg-white border border-dashed rounded-lg">
                        Nenhuma atividade cadastrada para este domínio no {selectedLevel}.
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none">
              <CardHeader>
                <CardTitle className="text-lg">Próximo Passo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-100 text-sm mb-4">
                  A criança está pronta para avançar para{" "}
                  {levels[levels.indexOf(selectedLevel) + 1] || "o próximo nível"}.
                </p>
                <Progress value={75} className="h-2 bg-indigo-900/20" />
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Neuro-Sugestão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 text-sm">
                  Focar em atividades de{" "}
                  <strong>{domains[Math.floor(Math.random() * domains.length)].label}</strong> para
                  equilibrar o desenvolvimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-sm h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-500" />
                Trilhas Sugeridas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredTrails.length > 0 ? (
                filteredTrails.map((trail) => (
                  <div
                    key={trail.id}
                    className="p-4 border rounded-xl space-y-2 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-slate-800">{trail.name}</h3>
                    <p className="text-xs text-slate-500">{trail.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] text-slate-600 font-bold"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                      <button className="text-xs font-bold text-indigo-600 hover:underline">
                        Começar
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-slate-400 italic border border-dashed rounded-lg">
                  Crie uma trilha personalizada para este nível.
                </div>
              )}

              <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm font-medium hover:border-indigo-300 hover:text-indigo-500 transition-all flex items-center justify-center gap-2">
                <PenTool className="w-4 h-4" />
                Customizar Trilha
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
