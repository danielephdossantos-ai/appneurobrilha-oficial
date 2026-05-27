import React from "react";
import { useCognitiveMemory } from "../hooks/useCognitiveMemory";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis 
} from "recharts";
import { Brain, Target, Zap, Clock, Smile } from "lucide-react";

interface CognitiveDashboardProps {
  childId: string;
}

export const CognitiveDashboard: React.FC<CognitiveDashboardProps> = ({ childId }) => {
  const { profile, history, isLoadingProfile, isLoadingHistory } = useCognitiveMemory(childId);

  if (isLoadingProfile || isLoadingHistory) {
    return <div className="p-8 text-center">Carregando perfil cognitivo...</div>;
  }

  // Prepare radar chart data
  const latestScores = history.length > 0 ? history[history.length - 1] : null;
  const radarData = [
    { subject: "Atenção", value: latestScores?.attention_score || 0 },
    { subject: "Linguagem", value: latestScores?.language_score || 0 },
    { subject: "Memória", value: latestScores?.memory_score || 0 },
    { subject: "Coordenação", value: latestScores?.coordination_score || 0 },
    { subject: "Autonomia", value: latestScores?.autonomy_score || 0 },
    { subject: "Matemática", value: latestScores?.math_score || 0 },
  ];

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">
        <Brain className="h-6 w-6" />
        Memória Cognitiva Persistente
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-50/50 border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              Tempo Médio de Foco
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round((profile?.avg_focus_time || 0) / 60)} min</div>
            <p className="text-xs text-muted-foreground">Baseado nas últimas atividades</p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50/50 border-amber-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              Velocidade de Resposta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(profile?.avg_response_speed || 0)}ms</div>
            <p className="text-xs text-muted-foreground">Tempo de reação cognitiva</p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50/50 border-emerald-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4 text-emerald-500" />
              Evolução Pedagógica
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(profile?.pedagogical_evolution_score || 0)}%</div>
            <Progress value={profile?.pedagogical_evolution_score || 0} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Histórico Longitudinal</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={history}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="recorded_at" 
                  tickFormatter={(val) => new Date(val).toLocaleDateString()} 
                />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="attention_score" name="Atenção" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="reading_score" name="Leitura" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="math_score" name="Matemática" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Perfil de Habilidades</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Pontuação"
                  dataKey="value"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Habilidades Dominadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {profile?.mastered_skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {skill}
                </span>
              ))}
              {(!profile?.mastered_skills || profile.mastered_skills.length === 0) && (
                <p className="text-sm text-muted-foreground italic">Nenhuma habilidade dominada ainda.</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-md">Pontos de Atenção (Frágeis)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {profile?.fragile_skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                  {skill}
                </span>
              ))}
              {(!profile?.fragile_skills || profile.fragile_skills.length === 0) && (
                <p className="text-sm text-muted-foreground italic">Nenhuma fragilidade identificada.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
