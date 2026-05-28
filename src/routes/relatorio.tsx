import { createFileRoute } from "@tanstack/react-router";
import React, { useMemo, useEffect, useState } from "react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { 
  Brain, Lightbulb, AlertCircle, Info, CheckCircle2, TrendingUp, TrendingDown, Minus
} from "lucide-react";
import { ReportGenerator } from "@/modules/neuro-engine/engine/ReportGenerator";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/relatorio")({
  component: RelatorioPremium,
});

function RelatorioPremium() {
  const { activeChild } = useAppState();
  const [anamnesis, setAnamnesis] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (!activeChild?.id) return;
      const { data } = await supabase
        .from("child_anamnesis")
        .select("*")
        .eq("child_id", activeChild.id)
        .maybeSingle();
      
      setAnamnesis(data);
      setLoading(false);
    }
    loadData();
  }, [activeChild?.id]);

  const report = useMemo(() => {
    if (!activeChild || !anamnesis) return null;
    return ReportGenerator.generate(anamnesis.internal_profile, activeChild.nome);
  }, [activeChild, anamnesis]);

  if (loading) return <Shell><div className="p-10 text-center">Carregando análise...</div></Shell>;

  if (!activeChild || !anamnesis) {
    return (
      <Shell>
        <PageHeader emoji="📊" title="Relatório de Evolução" subtitle="Análise do Desenvolvimento" />
        <Card className="text-center py-10">
          <p className="text-muted-foreground mb-4">A anamnese ainda não foi concluída para gerar o relatório.</p>
          <button 
            onClick={() => window.location.href = `/anamnese/${activeChild?.id || 'nova'}`}
            className="btn-tap px-6 py-2 bg-primary text-white rounded-xl font-bold"
          >
            Realizar Anamnese
          </button>
        </Card>
      </Shell>
    );
  }

  const COLORS = {
    adequate: "#10b981", // Emerald-500
    developing: "#f59e0b", // Amber-500
    attention: "#ef4444", // Red-500
  };

  const STATUS_LABELS = {
    adequate: "Adequado",
    developing: "Em desenvolvimento",
    attention: "Precisa de atenção"
  };

  return (
    <Shell>
      <div className="max-w-4xl mx-auto space-y-6 pb-20">
        <PageHeader 
          emoji="📊" 
          title="Análise do Desenvolvimento" 
          subtitle={`Perfil Neuro-Adaptativo · ${activeChild.nome}`} 
        />

        {/* 1. Visão Geral (Humanizada) */}
        <Card className="bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-indigo-600 p-2 rounded-lg text-white"><Brain className="w-5 h-5" /></div>
            <h3 className="text-xl font-bold text-indigo-900">Visão Geral</h3>
          </div>
          <p className="text-indigo-800 leading-relaxed font-medium italic">
            "{report?.summary}"
          </p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 2. Gráfico de Barras Premium */}
          <Card className="min-h-[400px]">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <BarChart className="w-5 h-5 text-primary" /> Perfil de Desenvolvimento
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={report?.scores} layout="vertical" margin={{ left: 20, right: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis 
                    dataKey="label" 
                    type="category" 
                    tick={{ fontWeight: 600, fontSize: 12 }}
                    width={100}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 shadow-xl rounded-xl border border-slate-100">
                            <p className="font-bold text-slate-800">{data.label}</p>
                            <p className="text-sm font-bold" style={{ color: COLORS[data.status as keyof typeof COLORS] }}>
                              {STATUS_LABELS[data.status as keyof typeof STATUS_LABELS]}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                    {report?.scores.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[entry.status as keyof typeof COLORS]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-4 justify-center text-[10px] font-bold uppercase tracking-wider">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#10b981]" /> Adequado</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#f59e0b]" /> Em desenvolvimento</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ef4444]" /> Atenção</div>
            </div>
          </Card>

          {/* 3. Pontos Fortes e Atenção */}
          <div className="space-y-6">
            <Card className="border-emerald-100 bg-emerald-50/30">
              <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Pontos Fortes
              </h3>
              <ul className="space-y-3">
                {report?.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-emerald-900 text-sm">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="border-amber-100 bg-amber-50/30">
              <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Pontos de Atenção
              </h3>
              <ul className="space-y-3">
                {report?.attentionPoints.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-amber-900 text-sm">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* 4. Recomendações Inteligentes */}
        <Card className="bg-slate-900 text-white border-slate-800 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary p-2 rounded-lg"><Lightbulb className="w-5 h-5 text-white" /></div>
            <h3 className="text-xl font-bold">Recomendações NeuroBrilha</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {report?.recommendations.map((r, i) => (
              <div key={i} className="p-4 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-3">
                <div className="text-2xl">💡</div>
                <p className="text-sm font-medium">{r}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* 5. Rodapé Profissional */}
        <div className="p-6 bg-slate-100 rounded-3xl border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="bg-slate-200 p-3 rounded-full text-slate-500"><Info className="w-6 h-6" /></div>
            <div className="space-y-2">
              <h4 className="font-bold text-slate-800">Orientação Profissional</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Este relatório é gerado por inteligência pedagógica baseada no desempenho e anamnese dentro do ambiente digital. Se houver dúvidas ou se você observar comportamentos persistentes fora do app, <strong>recomendamos buscar avaliação com um profissional especializado</strong> (psicólogo, neurologista ou fonoaudiólogo).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
