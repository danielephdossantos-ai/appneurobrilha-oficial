
import React from 'react';
import { 
  Clock, 
  Heart, 
  Target, 
  ShieldCheck,
  BarChart2,
  Bell
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillProgress } from "./SkillProgress";
import { FocusChart } from "./FocusChart";
import { EmotionalTimeline } from "./EmotionalTimeline";
import { CognitiveRadar } from "./CognitiveRadar";
import { RoutineManager } from "./RoutineManager";
import { PedagogicalAlerts } from "./PedagogicalAlerts";
import { DashboardHeader } from "./DashboardHeader";
import { ParentalControlSettings } from "./ParentalControlSettings";
import { mockResponsibleData } from "@/data/responsible/mock-data";



export const ParentDashboard = () => {
  const data = mockResponsibleData;

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 space-y-8">
      <DashboardHeader 
        studentName={data.studentName} 
        grade={data.grade} 
        childId="demo-child-id" 
      />

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200">
          <TabsTrigger value="overview" className="rounded-lg">Geral</TabsTrigger>
          <TabsTrigger value="pedagogical" className="rounded-lg">Pedagógico</TabsTrigger>
          <TabsTrigger value="cognitive" className="rounded-lg">Cognitivo</TabsTrigger>
          <TabsTrigger value="emotional" className="rounded-lg">Emocional</TabsTrigger>
          <TabsTrigger value="settings" className="rounded-lg">Controle Parental</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard 
              title="Tempo de Foco" 
              value="18min" 
              trend="+12%" 
              icon={<Clock className="text-blue-500" />} 
            />
            <StatsCard 
              title="Engajamento" 
              value="85%" 
              trend="+5%" 
              icon={<Heart className="text-pink-500" />} 
            />
            <StatsCard 
              title="Habilidades BNCC" 
              value="12/24" 
              trend="+2 este mês" 
              icon={<Target className="text-purple-500" />} 
            />
            <StatsCard 
              title="Alertas de Atenção" 
              value="3" 
              trend="Baixo" 
              icon={<ShieldCheck className="text-green-500" />} 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-primary" />
                  Evolução do Foco e Atenção
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FocusChart sessions={data.focusSessions} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-500" />
                  Alertas Pedagógicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PedagogicalAlerts alerts={data.alerts} childId="demo-child-id" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pedagogical">
          <SkillProgress skills={data.skills} />
        </TabsContent>

        <TabsContent value="cognitive">
          <CognitiveRadar data={data.cognitiveStats} />
        </TabsContent>

        <TabsContent value="emotional">
          <EmotionalTimeline history={data.emotionalHistory} />
        </TabsContent>

        <TabsContent value="settings">
          <ParentalControlSettings />
        </TabsContent>

      </Tabs>
    </div>
  );
};

const StatsCard = ({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: React.ReactNode }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardContent className="pt-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h4 className="text-2xl font-bold text-slate-900 mt-1">{value}</h4>
          <p className="text-xs font-semibold text-green-600 mt-1">{trend}</p>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);
