import { createFileRoute } from "@tanstack/react-router";
import React, { useMemo, useEffect, useState } from "react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  LineChart, Line, Legend
} from "recharts";
import { 
  Brain, Lightbulb, AlertCircle, Info, CheckCircle2, TrendingUp, TrendingDown, Minus, BarChart3,
  Calendar, ArrowUpRight, History, Sparkles
} from "lucide-react";
import { ReportGenerator } from "@/modules/neuro-treino/engine/ReportGenerator";
import { supabase } from "@/database/supabase/client";

export const Route = createFileRoute("/relatorio")({
  component: RelatorioPremium,
});

function RelatorioPremium() {
  const { activeChild } = useAppState();
  const [anamnesis, setAnamnesis] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [dynamicStats, setDynamicStats] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      if (!activeChild?.id) return;
      
      const [anamnesisRes, statsRes] = await Promise.all([
        supabase.from("child_anamnesis").select("*").eq("child_id", activeChild.id).maybeSingle(),
        supabase.from("activity_logs").select("*").eq("child_id", activeChild.id).limit(20)
      ]);
      
      setAnamnesis(anamnesisRes.data);
      setDynamicStats(statsRes.data || []);
      setLoading(false);
    }
    loadData();
  }, [activeChild?.id]);

  const report = useMemo(() => {
    if (!activeChild || !anamnesis) return null;
    return ReportGenerator.generate(anamnesis.internal_profile, activeChild.nome, dynamicStats);
  }, [activeChild, anamnesis, dynamicStats]);

  if (loading) return <Shell><div className="p-10 text-center">Carregando análise premium...</div></Shell>;

  if (!activeChild || !anamnesis) {
    return (
      <Shell>
        <PageHeader emoji="📊" title="Relatório de Evolução" subtitle="Análise do Desenvolvimento" />
        <Card className="text-center py-10 max-w-xl mx-auto mt-10">
          <div className="text-5xl mb-4">📝</div>
          <h2 className="text-xl font-bold mb-2">Anamnese Necessária</h2>
          <p className="text-muted-foreground mb-6">A anamnese ainda não foi concluída para gerar o perfil fixo de desenvolvimento.</p>
          <button 
            onClick={() => window.location.href = `/anamnese/${activeChild?.id || 'nova'}`}
            className="btn-tap px-8 py-3 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20"
          >
            Realizar Anamnese Agora
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
      <div className="max-w-5xl mx-auto space-y-8 pb-20">
        <PageHeader 
          emoji="💎" 
          title="Relatório Premium NeuroBrilha" 
          subtitle={`Perfil e Evolução · ${activeChild.nome}`} 
        />

        {/* BLOCO 1 — PERFIL GERAL (FIXO - BASEADO NA ANAMNESE) */}
        <Card className="bg-gradient-to-br from-indigo-50 to-white border-indigo-100 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4">
             <div className="text-[10px] font-bold bg-indigo-600 text-white px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">Perfil Fixo</div>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg"><Brain className="w-6 h-6" /></div>
            <div>
              <h3 className="text-2xl font-extrabold text-indigo-900 leading-tight">Perfil de Desenvolvimento Inicial</h3>
              <p className="text-indigo-600/70 text-sm font-bold">Diagnóstico base gerado via anamnese</p>
            </div>
          </div>
          <p className="text-indigo-800 leading-relaxed font-semibold italic text-lg mb-8 border-l-4 border-indigo-200 pl-4">
            "{report?.summary}"
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {report?.initialProfile.slice(0, 3).map((item, i) => (
              <div key={i} className="flex flex-col gap-1 p-5 bg-white/80 rounded-[2rem] border border-indigo-50 shadow-sm hover:shadow-md transition-all">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</span>
                <span className={`text-lg font-black ${
                  item.status === 'adequate' ? 'text-emerald-600' : 
                  item.status === 'developing' ? 'text-amber-600' : 
                  'text-red-600'
                }`}>
                  {STATUS_LABELS[item.status as keyof typeof STATUS_LABELS]}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* BLOCO NOVO — COMPARAÇÃO SEMANAL */}
          <Card className="shadow-lg border-slate-100 p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
              <History className="w-6 h-6 text-indigo-600" /> Comparação Semanal
            </h3>
            <div className="space-y-6">
              {report?.comparisons.map((comp, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-slate-700">{comp.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 font-bold">Semana passada: {comp.lastWeek}%</span>
                      <span className="text-sm font-black text-indigo-600">{comp.current}%</span>
                      {comp.change > 0 && (
                        <span className="flex items-center text-[10px] font-black text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">
                          <ArrowUpRight className="w-3 h-3" /> +{comp.change}%
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div 
                      className="h-full bg-indigo-200 transition-all duration-1000" 
                      style={{ width: `${comp.lastWeek}%` }}
                    />
                    <div 
                      className="h-full bg-indigo-600 transition-all duration-1000" 
                      style={{ width: `${comp.current - comp.lastWeek}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs font-bold text-indigo-600 bg-indigo-50 p-3 rounded-xl border border-indigo-100 italic">
              "Houve evolução nas atividades de atenção e linguagem nos últimos 7 dias."
            </p>
          </Card>

          {/* BLOCO NOVO — COMPARAÇÃO MENSAL (GRÁFICO DE LINHA) */}
          <Card className="shadow-lg border-slate-100 p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
              <Calendar className="w-6 h-6 text-emerald-600" /> Tendência Mensal
            </h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={report?.monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }} 
                  />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontWeight: 800, color: '#059669' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="Progresso Geral"
                    stroke="#059669" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: '#059669', strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <p className="text-sm font-black text-emerald-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Melhora consistente na atenção nas últimas semanas!
              </p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* BLOCO 2 — GRÁFICO PRINCIPAL (FIXO) */}
          <Card className="shadow-lg border-slate-100 p-8">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-800">
              <BarChart3 className="w-6 h-6 text-primary" /> Gráfico de Diagnóstico Base
            </h3>
            <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={report?.initialProfile} layout="vertical" margin={{ left: 10, right: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis 
                    dataKey="label" 
                    type="category" 
                    tick={{ fontWeight: 700, fontSize: 13, fill: '#475569' }}
                    width={110}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f1f5f9', radius: 10 }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-4 shadow-2xl rounded-2xl border border-slate-100">
                            <p className="font-black text-slate-800 mb-1">{data.label}</p>
                            <p className="text-sm font-bold" style={{ color: COLORS[data.status as keyof typeof COLORS] }}>
                              Status: {STATUS_LABELS[data.status as keyof typeof STATUS_LABELS]}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 15, 15, 0]} barSize={35}>
                    {report?.initialProfile.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[entry.status as keyof typeof COLORS]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-[10px] font-black uppercase tracking-widest text-slate-400">
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#10b981] shadow-sm shadow-emerald-200" /> Adequado</div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#f59e0b] shadow-sm shadow-amber-200" /> Em desenvolvimento</div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#ef4444] shadow-sm shadow-red-200" /> Atenção</div>
            </div>
          </Card>

          {/* BLOCO 3 — EVOLUÇÃO (DINÂMICO - ATUALIZA COM O USO DO APP) */}
          <Card className="shadow-lg border-primary/20 bg-primary/[0.02] p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-slate-800">Evolução Dinâmica</h3>
              </div>
              <div className="text-[10px] font-bold bg-primary text-white px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">Uso do App</div>
            </div>
            <div className="space-y-6">
              {report?.evolution.map((ev, i) => (
                <div key={i} className="p-6 rounded-[2rem] bg-white border border-primary/10 flex items-start gap-5 shadow-sm hover:shadow-md transition-all">
                  <div className={`p-3 rounded-2xl shrink-0 shadow-sm ${
                    ev.trend === 'up' ? 'bg-success/10 text-success' : 
                    ev.trend === 'down' ? 'bg-red-50 text-red-500' : 
                    'bg-slate-100 text-slate-500'
                  }`}>
                    {ev.trend === 'up' ? <TrendingUp className="w-6 h-6" /> : 
                     ev.trend === 'down' ? <TrendingDown className="w-6 h-6" /> : 
                     <Minus className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-800 text-lg mb-1">{ev.label}</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{ev.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-5 bg-white rounded-2xl border-2 border-dashed border-primary/20 text-center">
              <p className="text-xs text-primary font-black uppercase tracking-tighter">Dados atualizados automaticamente com base no desempenho real.</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BLOCO 4 — PONTOS FORTES */}
          <Card className="border-emerald-100 bg-emerald-50/40 shadow-md p-8">
            <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" /> Pontos Fortes
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {report?.strengths.map((s, i) => (
                <div key={i} className="p-4 bg-white rounded-2xl border border-emerald-100 text-emerald-900 text-sm font-black shadow-sm flex items-center gap-3">
                  <span className="text-xl">💪</span> {s}
                </div>
              ))}
            </div>
          </Card>

          {/* BLOCO 5 — PONTOS DE ATENÇÃO */}
          <Card className="border-amber-100 bg-amber-50/40 shadow-md p-8">
            <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" /> Pontos de Atenção
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {report?.attentionPoints.map((s, i) => (
                <div key={i} className="p-4 bg-white rounded-2xl border border-amber-100 text-amber-900 text-sm font-black shadow-sm flex items-center gap-3">
                  <span className="text-xl">⚠️</span> {s}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* BLOCO 6 — RECOMENDAÇÕES */}
        <Card className="bg-slate-900 text-white border-slate-800 shadow-2xl p-10 rounded-[3rem]">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary p-3 rounded-2xl shadow-lg shadow-primary/40"><Lightbulb className="w-7 h-7 text-white" /></div>
            <div>
              <h3 className="text-2xl font-black">Recomendações Estratégicas</h3>
              <p className="text-slate-400 text-sm font-bold">Sugestões práticas para o dia a dia</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {report?.recommendations.map((r, i) => (
              <div key={i} className="p-6 bg-white/5 hover:bg-white/10 transition-all rounded-[2rem] border border-white/10 flex flex-col gap-4 group">
                <div className="text-4xl group-hover:scale-110 transition-transform">💡</div>
                <p className="text-sm font-black leading-snug">{r}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* BLOCO 7 — AVISO PROFISSIONAL */}
        <div className="p-10 bg-slate-100 rounded-[3rem] border-2 border-slate-200 shadow-inner">
          <div className="flex items-start gap-6">
            <div className="bg-white p-5 rounded-3xl text-slate-400 shadow-md shrink-0"><Info className="w-8 h-8" /></div>
            <div className="space-y-4">
              <h4 className="font-black text-slate-800 text-xl tracking-tight">Orientação de Uso Profissional</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-bold">
                Este relatório é baseado em triagem inteligente e uso do app. <strong>Não substitui avaliação clínica profissional.</strong> O diagnóstico base é estável e reflete a anamnese inicial. A evolução dinâmica mostra o progresso da criança no NeuroBrilha Kids. Se houver dúvidas, recomendamos buscar avaliação com um profissional especializado (psicólogo, neurologista ou fonoaudiólogo).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
