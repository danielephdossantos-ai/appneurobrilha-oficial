/**
 * Painel Pedagógico para a Família
 * ---------------------------------
 * Visão simples e objetiva para pais/responsáveis, com linguagem clara,
 * sem jargão técnico. Reúne:
 *   • habilidades dominadas
 *   • habilidades em desenvolvimento
 *   • habilidades que precisam de revisão
 *   • tempo de estudo
 *   • evolução semanal
 *   • evolução mensal
 *   • disciplinas mais fortes
 *   • disciplinas com maior dificuldade
 *   • recomendações de estudo
 *
 * Fonte única: MotorPedagogico (trilhas + revisão + progresso) +
 * StudentProgressService (tempo/atividades).
 */

import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Trophy,
  Sprout,
  RefreshCw,
  Clock,
  CalendarDays,
  Calendar,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotorPedagogico, type TrilhaDisciplina, type Recomendacao } from "@/escola-brilha/motor";
import { StudentProgressService, type StudentProgress } from "@/services/progress/StudentProgress";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  childId: string;
  studentName: string;
}

interface EvolucaoPonto {
  rotulo: string;
  concluidas: number;
}

function formatarTempo(seg: number): string {
  if (seg < 60) return `${seg}s`;
  const min = Math.round(seg / 60);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h}h` : `${h}h ${m}min`;
}

function iniciodoDia(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function diasAtras(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return iniciodoDia(d);
}

export function PainelPedagogicoFamilia({ childId, studentName }: Props) {
  const [trilhas, setTrilhas] = useState<TrilhaDisciplina[]>([]);
  const [resumo, setResumo] = useState<Awaited<
    ReturnType<typeof StudentProgressService.resumo>
  > | null>(null);
  const [registros, setRegistros] = useState<StudentProgress[]>([]);
  const [revisoes, setRevisoes] = useState<Recomendacao[]>([]);
  const [proximaSugestao, setProximaSugestao] = useState<{
    codigo: string;
    titulo: string;
    disciplina: string;
  } | null>(null);
  const [historico, setHistorico] = useState<Array<{ em: string }>>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;
    (async () => {
      setCarregando(true);
      try {
        const [ts, res, regs, revs, prox, hist] = await Promise.all([
          MotorPedagogico.trilhas.todas(childId),
          StudentProgressService.resumo(childId),
          StudentProgressService.listByChild(childId),
          MotorPedagogico.revisao.recomendar(childId),
          MotorPedagogico.recomendacoes.proximaMissao(childId),
          supabase
            .from("escola_progresso")
            .select("ultima_visita_em, updated_at")
            .eq("child_id", childId)
            .limit(500)
            .then((r) => (r.data ?? []) as Array<{ ultima_visita_em: string | null; updated_at: string | null }>),
        ]);
        if (!ativo) return;
        setTrilhas(ts);
        setResumo(res);
        setRegistros(regs);
        setRevisoes(revs);
        setProximaSugestao(
          prox
            ? {
                codigo: prox.aula.codigo,
                titulo: prox.aula.titulo,
                disciplina: prox.aula.disciplina ?? "",
              }
            : null,
        );
        setHistorico(
          hist
            .map((r) => ({ em: r.ultima_visita_em || r.updated_at || "" }))
            .filter((r) => !!r.em),
        );
      } finally {
        if (ativo) setCarregando(false);
      }
    })();
    return () => {
      ativo = false;
    };
  }, [childId]);

  // Agregações derivadas
  const agregado = useMemo(() => {
    const dominadas = trilhas.reduce((acc, t) => acc + t.concluidas, 0);
    const emDesenvolvimento = trilhas.reduce((acc, t) => acc + t.emAndamento, 0);
    const pendentes = trilhas.reduce((acc, t) => acc + t.pendentes, 0);
    const total = trilhas.reduce((acc, t) => acc + t.totalHabilidades, 0);
    const revisao = revisoes.length;

    const disciplinasFortes = [...trilhas]
      .filter((t) => t.totalHabilidades > 0)
      .sort((a, b) => b.evolucaoPercentual - a.evolucaoPercentual)
      .slice(0, 3);

    const disciplinasDificeis = [...trilhas]
      .filter((t) => t.totalHabilidades > 0 && (t.emAndamento > 0 || t.pendentes > 0))
      .sort((a, b) => a.evolucaoPercentual - b.evolucaoPercentual)
      .slice(0, 3);

    return {
      dominadas,
      emDesenvolvimento,
      pendentes,
      total,
      revisao,
      disciplinasFortes,
      disciplinasDificeis,
    };
  }, [trilhas, revisoes]);

  // Evolução semanal (últimos 7 dias)
  const evolucaoSemanal: EvolucaoPonto[] = useMemo(() => {
    const dias = Array.from({ length: 7 }, (_, i) => diasAtras(6 - i));
    return dias.map((d) => {
      const proximoDia = new Date(d);
      proximoDia.setDate(proximoDia.getDate() + 1);
      const count = historico.filter((h) => {
        const t = new Date(h.em).getTime();
        return t >= d.getTime() && t < proximoDia.getTime();
      }).length;
      const rot = d.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
      return { rotulo: rot, concluidas: count };
    });
  }, [historico]);

  // Evolução mensal (últimas 4 semanas)
  const evolucaoMensal: EvolucaoPonto[] = useMemo(() => {
    const semanas = Array.from({ length: 4 }, (_, i) => ({
      inicio: diasAtras(7 * (4 - i) - 1),
      fim: diasAtras(7 * (3 - i) - 1),
    }));
    return semanas.map((s, idx) => {
      const count = historico.filter((h) => {
        const t = new Date(h.em).getTime();
        return t >= s.inicio.getTime() && t < s.fim.getTime();
      }).length;
      return { rotulo: `Sem ${idx + 1}`, concluidas: count };
    });
  }, [historico]);

  const recomendacoes = useMemo(() => {
    const recs: Array<{ icone: string; titulo: string; texto: string; acao?: React.ReactNode }> =
      [];

    if (agregado.revisao > 0) {
      recs.push({
        icone: "🔁",
        titulo: `${agregado.revisao} habilidade${agregado.revisao > 1 ? "s" : ""} para revisar`,
        texto:
          "A memória fica mais forte quando a criança revisa depois de alguns dias. Reserve 10 minutos para uma revisão rápida.",
      });
    }

    if (proximaSugestao) {
      recs.push({
        icone: "🎯",
        titulo: `Próxima missão sugerida: ${proximaSugestao.titulo}`,
        texto: `Continua na sequência oficial da BNCC${
          proximaSugestao.disciplina ? ` em ${proximaSugestao.disciplina}` : ""
        }.`,
        acao: (
          <Link
            to="/escola-brilha/$codigo"
            params={{ codigo: proximaSugestao.codigo }}
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            Abrir missão <ArrowRight className="h-3 w-3" />
          </Link>
        ),
      });
    }

    if (agregado.disciplinasDificeis[0]) {
      const d = agregado.disciplinasDificeis[0];
      recs.push({
        icone: "💪",
        titulo: `Apoiar em ${d.disciplina}`,
        texto: `${studentName} está com ${d.evolucaoPercentual}% de progresso nessa área. Pequenas sessões de 5 a 10 minutos por dia ajudam muito.`,
      });
    }

    if (agregado.disciplinasFortes[0] && agregado.disciplinasFortes[0].evolucaoPercentual >= 40) {
      const f = agregado.disciplinasFortes[0];
      recs.push({
        icone: "⭐",
        titulo: `Comemorar o desempenho em ${f.disciplina}`,
        texto: `Reconhecer o esforço aumenta a motivação. Elogie de forma específica: "Vi que você não desistiu em ${f.disciplina}!"`,
      });
    }

    if (recs.length === 0) {
      recs.push({
        icone: "🌱",
        titulo: "Comece uma nova missão",
        texto: "Ainda não temos dados suficientes. Explore uma primeira missão para começarmos a acompanhar a evolução.",
      });
    }
    return recs;
  }, [agregado, proximaSugestao, studentName]);

  if (carregando) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-sm text-slate-500">
          Carregando painel pedagógico…
        </CardContent>
      </Card>
    );
  }

  const tempoSeg = resumo?.tempoEstudadoSeg ?? 0;
  const atividades = resumo?.atividadesConcluidas ?? 0;

  return (
    <div className="space-y-6">
      {/* Cabeçalho amigável */}
      <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-6 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-90">
          <BookOpen className="h-4 w-4" /> Painel pedagógico da família
        </div>
        <h2 className="text-2xl md:text-3xl font-black mt-1 leading-tight">
          Como {studentName} está aprendendo
        </h2>
        <p className="text-sm md:text-base opacity-95 mt-2">
          Uma visão simples do que já foi aprendido, o que está em andamento e como vocês podem
          apoiar em casa. Sem jargão técnico.
        </p>
      </div>

      {/* Cards de habilidades */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ResumoCard
          icone={<Trophy className="h-6 w-6 text-emerald-600" />}
          cor="emerald"
          titulo="Já domina bem"
          valor={agregado.dominadas}
          descricao={`de ${agregado.total} habilidades — o que já pode usar com autonomia.`}
        />
        <ResumoCard
          icone={<Sprout className="h-6 w-6 text-amber-600" />}
          cor="amber"
          titulo="Está aprendendo"
          valor={agregado.emDesenvolvimento}
          descricao="habilidades em desenvolvimento — precisando de prática guiada."
        />
        <ResumoCard
          icone={<RefreshCw className="h-6 w-6 text-rose-600" />}
          cor="rose"
          titulo="Hora de revisar"
          valor={agregado.revisao}
          descricao="conteúdos indicados para uma revisão rápida antes que a criança esqueça."
        />
      </div>

      {/* Tempo e evolução */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="h-4 w-4 text-slate-500" /> Tempo estudado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-slate-900">{formatarTempo(tempoSeg)}</div>
            <p className="text-sm text-slate-600 mt-1">
              Total dedicado ao estudo até agora. Foram {atividades} atividade
              {atividades === 1 ? "" : "s"} concluída{atividades === 1 ? "" : "s"}.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingUp className="h-4 w-4 text-slate-500" /> Registros por criança
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-slate-900">{registros.length}</div>
            <p className="text-sm text-slate-600 mt-1">
              Habilidades já visitadas em pelo menos uma sessão de estudo.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Evolução semanal + mensal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EvolucaoCard
          icone={<CalendarDays className="h-4 w-4 text-slate-500" />}
          titulo="Evolução semanal"
          dica="Quantas atividades a criança fez em cada dia dos últimos 7 dias."
          pontos={evolucaoSemanal}
        />
        <EvolucaoCard
          icone={<Calendar className="h-4 w-4 text-slate-500" />}
          titulo="Evolução mensal"
          dica="Comparativo entre as últimas 4 semanas."
          pontos={evolucaoMensal}
        />
      </div>

      {/* Disciplinas fortes / difíceis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Trophy className="h-4 w-4 text-emerald-500" /> Áreas mais fortes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {agregado.disciplinasFortes.length === 0 ? (
              <p className="text-sm text-slate-500">
                Ainda estamos conhecendo os pontos fortes. Continue explorando!
              </p>
            ) : (
              agregado.disciplinasFortes.map((t) => (
                <DisciplinaBarra key={t.disciplina} trilha={t} tom="emerald" />
              ))
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4 text-amber-500" /> Onde precisa de apoio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {agregado.disciplinasDificeis.length === 0 ? (
              <p className="text-sm text-slate-500">
                Nenhuma dificuldade marcante no momento. Continuem assim!
              </p>
            ) : (
              agregado.disciplinasDificeis.map((t) => (
                <DisciplinaBarra key={t.disciplina} trilha={t} tom="amber" />
              ))
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recomendações */}
      <Card className="border-2 border-indigo-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Lightbulb className="h-4 w-4 text-indigo-500" /> Recomendações de estudo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recomendacoes.map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100"
            >
              <div className="text-2xl leading-none">{r.icone}</div>
              <div className="flex-1">
                <div className="font-bold text-slate-900 text-sm">{r.titulo}</div>
                <p className="text-sm text-slate-700 leading-relaxed mt-0.5">{r.texto}</p>
                {r.acao && <div className="mt-2">{r.acao}</div>}
              </div>
            </div>
          ))}
          <p className="text-xs text-slate-500 pt-2">
            Dica: pequenas sessões diárias (10 a 15 minutos) rendem mais do que uma única sessão
            longa por semana.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------
// Subcomponentes visuais
// ---------------------------------------------------------------------

function ResumoCard({
  icone,
  titulo,
  valor,
  descricao,
  cor,
}: {
  icone: React.ReactNode;
  titulo: string;
  valor: number;
  descricao: string;
  cor: "emerald" | "amber" | "rose";
}) {
  const cores = {
    emerald: "border-emerald-200 bg-emerald-50",
    amber: "border-amber-200 bg-amber-50",
    rose: "border-rose-200 bg-rose-50",
  } as const;
  return (
    <div className={`rounded-2xl border-2 p-5 ${cores[cor]}`}>
      <div className="flex items-center gap-2">
        {icone}
        <div className="text-xs font-black uppercase tracking-widest text-slate-600">{titulo}</div>
      </div>
      <div className="text-4xl font-black text-slate-900 mt-2">{valor}</div>
      <p className="text-sm text-slate-700 mt-1 leading-snug">{descricao}</p>
    </div>
  );
}

function EvolucaoCard({
  icone,
  titulo,
  dica,
  pontos,
}: {
  icone: React.ReactNode;
  titulo: string;
  dica: string;
  pontos: EvolucaoPonto[];
}) {
  const max = Math.max(1, ...pontos.map((p) => p.concluidas));
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          {icone} {titulo}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2 h-32">
          {pontos.map((p, i) => {
            const alt = Math.round((p.concluidas / max) * 100);
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="text-xs font-bold text-slate-600">{p.concluidas}</div>
                <div className="w-full bg-slate-100 rounded-lg relative overflow-hidden h-full flex items-end">
                  <div
                    className="w-full bg-gradient-to-t from-indigo-500 to-sky-400 rounded-lg transition-all"
                    style={{ height: `${Math.max(4, alt)}%` }}
                  />
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase">{p.rotulo}</div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-slate-500 mt-3">{dica}</p>
      </CardContent>
    </Card>
  );
}

function DisciplinaBarra({
  trilha,
  tom,
}: {
  trilha: TrilhaDisciplina;
  tom: "emerald" | "amber";
}) {
  const cor =
    tom === "emerald"
      ? "from-emerald-500 to-teal-500"
      : "from-amber-500 to-orange-500";
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-bold text-slate-800">{trilha.disciplina}</span>
        <span className="text-xs font-bold text-slate-600">
          {trilha.concluidas}/{trilha.totalHabilidades} habilidades ·{" "}
          {trilha.evolucaoPercentual}%
        </span>
      </div>
      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${cor} rounded-full transition-all`}
          style={{ width: `${trilha.evolucaoPercentual}%` }}
        />
      </div>
    </div>
  );
}
