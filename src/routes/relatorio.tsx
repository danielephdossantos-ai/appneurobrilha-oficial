import React, { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { Download, BrainCircuit, BarChart3 } from "lucide-react";
import { ParentalEngine } from "@/core/parental/engine";
import { CognitiveDashboard } from "@/modules/neuro-engine/components/CognitiveDashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VirtualizedList } from "@/components/ui/VirtualizedList";

// Lazy load heavy analytics component
const NeuroAnalyticsDashboard = lazy(() => import("@/modules/analytics/components/NeuroAnalyticsDashboard"));

export const Route = createFileRoute("/relatorio")({
  component: Relatorio,
});

function Relatorio() {
  const { activeChild } = useAppState();
  if (!activeChild) return <Shell><p>Selecione uma criança.</p></Shell>;

  const engineReport = ParentalEngine.generateDailyReport({}, { current: "feliz" });

  const semanas = [12, 18, 24, 30, 28, 35, 42];

  return (
    <Shell>
      <PageHeader emoji="📊" title="Relatório de Evolução" subtitle={`Últimos 30 dias · ${activeChild.nome}`} />

      <div className="flex justify-end mb-4">
        <button className="btn-tap rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold flex items-center gap-1.5">
          <Download className="h-4 w-4" /> Exportar PDF
        </button>
      </div>

      <Tabs defaultValue="neuro" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="cognitive" className="flex items-center gap-2">
            <BrainCircuit className="h-4 w-4" /> Perfil Clínico
          </TabsTrigger>
          <TabsTrigger value="neuro" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" /> Analytics Avançado
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cognitive">
          <CognitiveDashboard childId={activeChild.id} />
        </TabsContent>

        <TabsContent value="neuro">
          <Suspense fallback={<div className="p-8 text-center text-slate-400 animate-pulse">Carregando analytics...</div>}>
            <NeuroAnalyticsDashboard childId={activeChild.id} />
          </Suspense>
        </TabsContent>
      </Tabs>



      <Card className="mb-4 bg-primary/5 border-primary/20">
        <div className="flex items-center gap-2 mb-3">
          <BrainCircuit className="h-5 w-5 text-primary" />
          <h3 className="font-extrabold">Observação Pedagógica (IA)</h3>
        </div>
        <p className="text-sm leading-relaxed italic text-muted-foreground">
          "{engineReport.observation}"
        </p>
        <div className="mt-3 flex gap-4 text-xs font-bold">
          <div className="flex flex-col">
            <span className="text-muted-foreground uppercase">Habilidades:</span>
            <span>+{engineReport.skillsGained} BNCC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground uppercase">Humor médio:</span>
            <span className="capitalize">{engineReport.mood}</span>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="font-extrabold mb-3 text-slate-800">Histórico de Nível</h3>
        <VirtualizedList
          height={200}
          items={[
            { d: "12/05", t: "Português subiu para nível 2 — 5 acertos seguidos" },
            { d: "08/05", t: "Matemática subiu para nível 3 — completou ciclo CRA" },
            { d: "01/05", t: "Tempo de atenção ajustado para 12 min — pediu pausa" },
            // Simulando histórico maior para demonstrar a virtualização
            ...Array(20).fill(null).map((_, i) => ({ 
              d: `${20-i}/04`, 
              t: `Progresso contínuo em habilidades executivas ${i+1}` 
            }))
          ]}
          renderItem={(h, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 mb-2">
              <span className="font-mono text-slate-400 text-xs mt-1 shrink-0">{h.d}</span>
              <span className="font-medium text-slate-700 text-sm leading-tight">{h.t}</span>
            </div>
          )}
          estimateSize={60}
          itemClassName="px-1"
        />
      </Card>
    </Shell>
  );
}
