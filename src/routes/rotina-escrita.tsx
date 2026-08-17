import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell, PageHeader } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { supabase } from "@/database/supabase/client";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import { toast } from "sonner";
import {
  Bell,
  BellRing,
  Clock,
  Pencil,
  Save,
  Volume2,
  NotebookPen,
  PenLine,
  Mic,
  MessageCircle,
  Check,
  Sparkles,
  RefreshCw,
  Target,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import {
  ROTINA_ESCRITA_CATEGORY,
  ROTINA_ESCRITA_TOPIC,
  ROTINA_DEFAULT_TIME,
  ROTINA_DEFAULT_WEEKDAYS,
  DIAS_CURTOS,
  DIAS_LONGOS,
  SEMANAS_ESCRITA,
  semanaAtual,
  fraseDoDia,
} from "@/lib/rotina-escrita";
import { oralidadeDaSemana } from "@/lib/rotina-oralidade";
import { SEMANAS_ESCRITA_2ANO } from "@/lib/rotina-escrita-2ano";
import { SEMANAS_ESCRITA_3ANO } from "@/lib/rotina-escrita-3ano";
import { SEMANAS_ESCRITA_4ANO } from "@/lib/rotina-escrita-4ano";
import { 
  getEscritaStatus, 
  updateEscritaProgresso, 
  type EscritaStatus,
  type TipoLetra 
} from "@/lib/motor-escrita.functions";
import { MOTOR_PEDAGOGICO } from "@/lib/motor-pedagogico-data";
import { gerarAtividadeEscritaIA } from "@/lib/professor-mentor-escrita.functions";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

export const Route = createFileRoute("/rotina-escrita")({

  head: () => ({
    meta: [
      { title: "Rotina de Escrita Diária — Neuro Brilha Kids" },
      {
        name: "description",
        content:
          "Rotina diária de caderno, lousa e ditado para crianças de 6 anos, com horário editável pela família e lembrete no celular.",
      },
      { property: "og:title", content: "Rotina de Escrita Diária — Neuro Brilha Kids" },
      {
        property: "og:description",
        content: "Caderno, lousa e ditado todos os dias, com lembrete no celular dos pais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    serie:
      search.serie === "4"
        ? ("4" as const)
        : search.serie === "3"
          ? ("3" as const)
          : search.serie === "2"
            ? ("2" as const)
            : ("1" as const),
  }),
  component: RotinaEscrita,
});

type Rotina = {
  id?: string;
  weekdays: number[];
  time: string;
  inicio: string; // yyyy-mm-dd — começo do ano letivo
};

function hojeISO() {
  return new Date().toISOString().slice(0, 10);
}

function RotinaEscrita() {
  const { serie } = Route.useSearch();
  const queryClient = useQueryClient();
  const { activeChild } = useAppState();
  
  const fetchStatus = useServerFn(getEscritaStatus);
  const { data: status, isLoading: loadingStatus } = useQuery({
    queryKey: ["escrita-status", activeChild?.id],
    queryFn: () => fetchStatus({ data: { childId: activeChild?.id || "" } }),
    enabled: !!activeChild?.id
  });

  const updateProgressoFn = useServerFn(updateEscritaProgresso);
  const mutation = useMutation({
    mutationFn: (vars: { acerto: boolean, tipoLetra: "imprensa" | "cursiva" }) => 
      updateProgressoFn({ data: { childId: activeChild?.id || "", ...vars } }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["escrita-status", activeChild?.id] });
    }
  });

  const gerarIAFn = useServerFn(gerarAtividadeEscritaIA);
  const { 
    data: atividadeIA, 
    refetch: refetchIA, 
    isFetching: gerandoIA 
  } = useQuery({
    queryKey: ["atividade-escrita-ia", activeChild?.id],
    queryFn: () => gerarIAFn({ data: { childId: activeChild?.id || "" } }),
    enabled: !!activeChild?.id,
    staleTime: 1000 * 60 * 60, // 1 hora de cache
  });

  const semanas =
    serie === "4"
      ? SEMANAS_ESCRITA_4ANO
      : serie === "3"
        ? SEMANAS_ESCRITA_3ANO
        : serie === "2"
          ? SEMANAS_ESCRITA_2ANO
          : SEMANAS_ESCRITA;

  const push = usePushNotifications(activeChild?.id ?? null);
  const [rotina, setRotina] = useState<Rotina>({
    weekdays: ROTINA_DEFAULT_WEEKDAYS,
    time: ROTINA_DEFAULT_TIME,
    inicio: hojeISO(),
  });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [semanaManual, setSemanaManual] = useState<number | null>(null);
  const [feitos, setFeitos] = useState<Record<string, boolean>>({});


  useEffect(() => {
    if (!activeChild?.id) return;
    let cancel = false;
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from("study_agenda")
        .select("id, time_of_day, weekdays, exam_date")
        .eq("child_id", activeChild.id)
        .eq("category", ROTINA_ESCRITA_CATEGORY)
        .maybeSingle();
      if (cancel) return;
      if (data) {
        const wd = Array.isArray((data as any).weekdays)
          ? ((data as any).weekdays as number[])
          : ROTINA_DEFAULT_WEEKDAYS;
        setRotina({
          id: data.id,
          weekdays: wd,
          time: data.time_of_day ?? ROTINA_DEFAULT_TIME,
          inicio: (data as any).exam_date ?? hojeISO(),
        });
      }
      setLoading(false);
    })();
    return () => {
      cancel = true;
    };
  }, [activeChild?.id]);

  // marcações do dia (local, por criança)
  const chaveDia = `nb_escrita_${activeChild?.id ?? "x"}_${hojeISO()}`;
  useEffect(() => {
    try {
      const raw = localStorage.getItem(chaveDia);
      setFeitos(raw ? JSON.parse(raw) : {});
    } catch {
      setFeitos({});
    }
  }, [chaveDia]);

  function marcar(k: string) {
    setFeitos((f) => {
      const next = { ...f, [k]: !f[k] };
      try {
        localStorage.setItem(chaveDia, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  const nSemana =
    semanaManual ?? Math.min(semanas.length, semanaAtual(new Date(`${rotina.inicio}T00:00:00`)));
  const sem = useMemo(
    () => semanas[Math.min(semanas.length, Math.max(1, nSemana)) - 1],
    [semanas, nSemana],
  );
  const frase = fraseDoDia(sem);

  async function salvarRotina(next: Rotina) {
    if (!activeChild?.id) return;
    const payload: any = {
      child_id: activeChild.id,
      category: ROTINA_ESCRITA_CATEGORY,
      topic: ROTINA_ESCRITA_TOPIC,
      description: "Caderno, lousa e ditado — 15 minutos por dia.",
      time_of_day: next.time,
      weekdays: next.weekdays,
      exam_date: next.inicio,
      completed: false,
    };
    const res = next.id
      ? await supabase
          .from("study_agenda")
          .update(payload)
          .eq("id", next.id)
          .select("id")
          .maybeSingle()
      : await supabase.from("study_agenda").insert(payload).select("id").maybeSingle();
    if (res.error) {
      toast.error("Não consegui salvar a rotina.");
      return;
    }
    setRotina({ ...next, id: res.data?.id ?? next.id });
    setEditing(false);
    toast.success("Rotina salva! Vamos lembrar todos os dias.");
  }

  function toggleDia(d: number) {
    setRotina((r) => {
      const has = r.weekdays.includes(d);
      const wd = has ? r.weekdays.filter((x) => x !== d) : [...r.weekdays, d].sort();
      return { ...r, weekdays: wd };
    });
  }

  if (!activeChild) {
    return (
      <Shell>
        <PageHeader emoji="✏️" title="Rotina de Escrita" subtitle="Escolha uma criança primeiro" />
        <Link
          to="/"
          className="btn-tap rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold inline-block"
        >
          Voltar para a home
        </Link>
      </Shell>
    );
  }

  return (
    <Shell>
      <PageHeader
        emoji="✏️"
        title={`Rotina de Escrita Diária · ${serie}º ano`}
        subtitle={`${activeChild.nome} · Semana ${nSemana} de ${semanas.length} · ${sem.foco}`}
      />

      {/* Seletor de Etapa Pedagógica (Motor) */}
      {status && (
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-3">
            {MOTOR_PEDAGOGICO.map((etapa) => {
              const isCurrent = status.nivel_atual === etapa.nivel;
              const isPast = status.nivel_atual > etapa.nivel;
              return (
                <div 
                  key={etapa.nivel}
                  className={`flex-shrink-0 w-64 p-4 rounded-3xl border-2 transition-all ${
                    isCurrent ? "border-primary bg-primary/5 shadow-md scale-[1.02]" : 
                    isPast ? "border-green-500/30 bg-green-50/50" : "border-muted bg-muted/20 opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      isCurrent ? "bg-primary text-primary-foreground" : 
                      isPast ? "bg-green-500 text-white" : "bg-muted-foreground text-white"
                    }`}>
                      ETAPA {etapa.nivel}
                    </span>
                    {isPast ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : isCurrent ? (
                      <div className="text-[10px] font-bold text-primary animate-pulse">EM PROGRESSO</div>
                    ) : null}
                  </div>
                  <div className="text-sm font-black uppercase leading-tight mb-2">
                    {etapa.titulo}
                  </div>
                  <div className="space-y-1">
                    {etapa.objetivos.slice(0, 3).map((obj, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <div className={`h-1 w-1 rounded-full ${isCurrent ? 'bg-primary' : 'bg-muted-foreground'}`} />
                        {obj}
                      </div>
                    ))}
                    {etapa.objetivos.length > 3 && (
                      <div className="text-[9px] text-muted-foreground/70 italic">+ {etapa.objetivos.length - 3} itens</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}


      <div className="flex gap-2 mb-4">
        {(["1", "2", "3", "4"] as const).map((s2) => (
          <Link
            key={s2}
            to="/rotina-escrita"
            search={{ serie: s2 }}
            className={`btn-tap rounded-xl px-3 py-2 text-sm font-black ${
              serie === s2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {s2}º ano
          </Link>
        ))}
      </div>


      {/* Horário + notificação */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0d1f55] to-[#1a3a8c] text-white p-5 shadow-xl mb-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-white/70 text-xs font-black uppercase tracking-wider">
              Horário da escrita
            </div>
            <div className="text-2xl font-black leading-tight mt-1 flex items-center gap-2">
              <Clock className="h-5 w-5" /> {rotina.time}
            </div>
            <div className="text-white/80 text-sm mt-1">
              {rotina.weekdays.length
                ? rotina.weekdays.map((d) => DIAS_LONGOS[d].slice(0, 3)).join(", ")
                : "Nenhum dia selecionado — edite para começar."}
            </div>
          </div>
          <button
            onClick={() => setEditing((e) => !e)}
            className="btn-tap rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 px-3 py-2 text-sm font-black flex items-center gap-1"
          >
            <Pencil className="h-4 w-4" /> {editing ? "Fechar" : "Editar"}
          </button>
        </div>

        {editing && (
          <div className="mt-4 space-y-3">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-white/70 mb-2">
                Dias
              </div>
              <div className="flex gap-2 flex-wrap">
                {DIAS_CURTOS.map((l, i) => {
                  const on = rotina.weekdays.includes(i);
                  return (
                    <button
                      key={i}
                      onClick={() => toggleDia(i)}
                      title={DIAS_LONGOS[i]}
                      className={`h-10 w-10 rounded-full font-black text-sm transition-all ${
                        on
                          ? "bg-[#FFC93C] text-[#0d1f55] shadow-md scale-105"
                          : "bg-white/10 text-white/70 border border-white/25"
                      }`}
                    >
                      {l}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-white/70 mb-2">
                  Horário
                </div>
                <input
                  type="time"
                  value={rotina.time}
                  onChange={(e) => setRotina((r) => ({ ...r, time: e.target.value }))}
                  className="rounded-xl bg-white text-[#0d1f55] font-black px-3 py-2 text-lg"
                />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-white/70 mb-2">
                  Início do ano letivo
                </div>
                <input
                  type="date"
                  value={rotina.inicio}
                  onChange={(e) => setRotina((r) => ({ ...r, inicio: e.target.value }))}
                  className="rounded-xl bg-white text-[#0d1f55] font-black px-3 py-2"
                />
              </div>
            </div>
            <button
              onClick={() => salvarRotina(rotina)}
              disabled={loading}
              className="btn-tap w-full rounded-xl bg-[#FFC93C] text-[#0d1f55] font-black px-4 py-3 flex items-center justify-center gap-2"
            >
              <Save className="h-4 w-4" /> Salvar rotina do ano todo
            </button>
          </div>
        )}

        <div className="mt-4 rounded-2xl bg-white/10 border border-white/20 p-3 flex items-center gap-3">
          {push.permission === "granted" ? (
            <>
              <BellRing className="h-5 w-5 text-[#FFC93C]" />
              <div className="text-sm">
                <div className="font-black">Lembrete ligado neste celular</div>
                <div className="text-white/70 text-xs">
                  Avisamos na hora combinada, todos os dias escolhidos.
                </div>
              </div>
            </>
          ) : push.permission === "unsupported" ? (
            <div className="text-sm text-white/70">
              Este celular não permite notificações. Use no Chrome ou Safari.
            </div>
          ) : (
            <>
              <Bell className="h-5 w-5" />
              <div className="flex-1 text-sm">
                <div className="font-black">Ativar lembrete neste celular</div>
                <div className="text-white/70 text-xs">
                  Para lembrar a família da escrita de {activeChild.nome}.
                </div>
              </div>
              <button
                onClick={() => push.request()}
                className="btn-tap rounded-lg bg-[#FFC93C] text-[#0d1f55] font-black px-3 py-1.5 text-sm"
              >
                Ativar
              </button>
            </>
          )}
        </div>
      </div>

      {/* Professor Mentor IA */}
      <section className="mb-8 p-6 rounded-[40px] bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] border-4 border-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sparkles className="h-20 w-20 text-primary" />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-white">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-black text-[#1E293B] leading-tight flex items-center gap-2">
              Professor Mentor IA
              <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase tracking-widest font-black">Beta</span>
            </h2>
            <p className="text-sm font-bold text-slate-500">Missão Personalizada de Hoje</p>
          </div>
        </div>

        {gerandoIA ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="relative">
              <RefreshCw className="h-12 w-12 text-primary animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 bg-primary rounded-full animate-ping" />
              </div>
            </div>
            <p className="mt-4 font-black text-slate-600 animate-pulse">
              Consultando plano pedagógico...
            </p>
          </div>
        ) : atividadeIA ? (
          <div className="space-y-4 relative z-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-[32px] p-5 border-2 border-primary/10 shadow-sm">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Target className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-orange-600 uppercase tracking-wider mb-0.5">Foco Pedagógico</div>
                    <div className="text-sm font-black text-slate-800">{atividadeIA.habilidade_foco}</div>
                  </div>
                </div>
                {atividadeIA.from_library && (
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-green-100 border border-green-200" title="Atividade validada da Biblioteca Pedagógica">
                    <Sparkles className="h-3 w-3 text-green-600" />
                    <span className="text-[9px] font-black text-green-700 uppercase tracking-tighter">Biblioteca Viva</span>
                  </div>
                )}
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 mb-4 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Missão</span>
                </div>
                <div className="text-lg font-black text-slate-800 leading-snug">
                  {atividadeIA.comando}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    stopSpeaking();
                    speakChunked(atividadeIA.audio_instrucao, { rate: 0.72 });
                  }}
                  className="w-full py-4 rounded-2xl bg-primary text-white font-black text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/25 btn-tap transition-all hover:scale-[1.02]"
                >
                  <Volume2 className="h-6 w-6" />
                  Ouvir Instrução
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      stopSpeaking();
                      speakChunked(atividadeIA.conteudo, { rate: 0.65 });
                    }}
                    className="flex-1 py-3 rounded-2xl bg-white border-2 border-primary text-primary font-black text-sm flex items-center justify-center gap-2 btn-tap"
                  >
                    <Mic className="h-4 w-4" />
                    Ouvir Conteúdo
                  </button>
                  
                  <button
                    onClick={() => refetchIA()}
                    className="px-4 py-3 rounded-2xl bg-slate-100 text-slate-500 font-black text-sm flex items-center justify-center btn-tap"
                    title="Pedir outra atividade"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {atividadeIA.conteudo && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="text-center mb-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Registro do Mentor</span>
                  </div>
                  
                  <div className="text-center p-6 bg-primary/5 rounded-[32px] border-2 border-dashed border-primary/20 mb-4">
                    <span className="text-3xl font-black text-primary tracking-wider select-none">
                      {atividadeIA.conteudo}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-[10px] font-black text-slate-500 text-center mb-1">COMO FOI O DESEMPENHO?</div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => mutation.mutate({ acerto: true, tipoLetra: status?.pref_letra === 'cursiva' ? 'cursiva' : 'imprensa' })}
                        className="flex-1 py-3 rounded-2xl bg-green-500 text-white font-black flex items-center justify-center gap-2 btn-tap shadow-lg shadow-green-500/20"
                      >
                        <ThumbsUp className="h-4 w-4" />
                        Sucesso
                      </button>
                      <button
                        onClick={() => mutation.mutate({ acerto: false, tipoLetra: status?.pref_letra === 'cursiva' ? 'cursiva' : 'imprensa' })}
                        className="flex-1 py-3 rounded-2xl bg-orange-500 text-white font-black flex items-center justify-center gap-2 btn-tap shadow-lg shadow-orange-500/20"
                      >
                        <ThumbsDown className="h-4 w-4" />
                        Dificuldade
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-start gap-3 px-2">
              <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[10px]">💡</span>
              </div>
              <div className="text-[11px] font-bold text-slate-500 leading-relaxed italic">
                Dica para pais: {atividadeIA.dica_pedagogica}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-sm font-bold text-slate-500 mb-4">Selecione uma criança para começar o Mentor IA.</p>
          </div>
        )}
      </section>

      {/* Navegação de semana */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <button
          onClick={() => setSemanaManual(Math.max(1, nSemana - 1))}
          className="btn-tap rounded-xl bg-muted px-3 py-2 font-bold text-sm"
        >
          ← Semana {Math.max(1, nSemana - 1)}
        </button>
        <div className="text-xs font-black uppercase tracking-wider text-muted-foreground text-center">
          Semana {nSemana}
        </div>
        <button
          onClick={() => setSemanaManual(Math.min(semanas.length, nSemana + 1))}
          className="btn-tap rounded-xl bg-muted px-3 py-2 font-bold text-sm"
        >
          Semana {Math.min(semanas.length, nSemana + 1)} →
        </button>
      </div>


      {/* 1. Caderno */}
      <BlocoCard
        icone={<NotebookPen className="h-5 w-5" />}
        titulo="1. Caderno — frase do dia"
        cor="bg-primary/10"
        feito={!!feitos.caderno}
        onMarcar={() => marcar("caderno")}
      >
        <FraseGrande texto={frase} />
        <p className="text-sm text-muted-foreground mt-3">
          A criança copia a frase no caderno com letra de imprensa e depois inventa uma frase
          própria usando uma palavra da semana.
        </p>
      </BlocoCard>

      {/* 2. Lousa */}
      <BlocoCard
        icone={<PenLine className="h-5 w-5" />}
        titulo="2. Lousa — frase da semana"
        cor="bg-petal/20"
        feito={!!feitos.lousa}
        onMarcar={() => marcar("lousa")}
      >
        <FraseGrande texto={sem.fraseSemana} destaque />
        <div className="mt-3">
          <div className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-2">
            Palavras da semana
          </div>
          <div className="flex flex-wrap gap-2">
            {sem.palavrasLousa.map((p) => (
              <button
                key={p}
                onClick={() => {
                  stopSpeaking();
                  speakChunked(p, { rate: 0.72 });
                }}
                className="btn-tap rounded-xl bg-background border-2 border-primary/30 px-3 py-2 font-black text-lg flex items-center gap-1.5"
              >
                <Volume2 className="h-4 w-4 text-primary" /> {p}
              </button>
            ))}
          </div>
        </div>
      </BlocoCard>

      {/* 3. Ditado */}
      <BlocoCard
        icone={<Mic className="h-5 w-5" />}
        titulo="3. Ditado — o app fala, a criança escreve"
        cor="bg-sun/25"
        feito={!!feitos.ditado}
        onMarcar={() => marcar("ditado")}
      >
        <Ditado itens={sem.ditado} />
      </BlocoCard>

      {/* 4. Rascunho — inventar e passar a limpo */}
      <BlocoCard
        icone={<Pencil className="h-5 w-5" />}
        titulo="4. Rascunho — inventar e passar a limpo"
        cor="bg-coral/20"
        feito={!!feitos.rascunho}
        onMarcar={() => marcar("rascunho")}
      >
        <p className="text-sm text-muted-foreground mb-4">
          A criança rabisca a ideia numa folha (pode ter erro!), lê em voz alta para um adulto e só
          depois passa a limpo no caderno. Isso ensina que escrever é reescrever.
        </p>
        
        <div className="flex gap-2">
          <button 
            onClick={() => mutation.mutate({ acerto: true, tipoLetra: status?.pref_letra === "cursiva" ? "cursiva" : "imprensa" })}
            disabled={mutation.isPending}
            className="flex-1 btn-tap rounded-xl bg-green-500 text-white font-black py-2 text-sm flex items-center justify-center gap-2"
          >
            <Check className="h-4 w-4" /> Concluí com sucesso
          </button>
          <button 
            onClick={() => mutation.mutate({ acerto: false, tipoLetra: status?.pref_letra === "cursiva" ? "cursiva" : "imprensa" })}
            disabled={mutation.isPending}
            className="flex-1 btn-tap rounded-xl bg-orange-500 text-white font-black py-2 text-sm flex items-center justify-center gap-2"
          >
            Ainda com dificuldade
          </button>
        </div>
      </BlocoCard>

      {/* Preferências de Escrita (Pais) */}
      <div className="rounded-3xl bg-white border-2 border-primary/20 p-5 shadow-sm mb-6">
        <div className="text-sm font-black uppercase tracking-wider text-primary mb-3">
          Preferência de Escrita
        </div>
        <div className="flex gap-2">
          {(["imprensa", "cursiva", "ambas"] as TipoLetra[]).map((t) => (
            <button
              key={t}
              onClick={async () => {
                if (!activeChild?.id) return;
                await (supabase as any).from("child_escrita_status").upsert({
                  child_id: activeChild.id,
                  pref_letra: t
                });
                queryClient.invalidateQueries({ queryKey: ["escrita-status", activeChild.id] });
                toast.success(`Preferência alterada para: ${t}`);
              }}
              className={`flex-1 btn-tap rounded-xl py-2 px-3 text-xs font-black capitalize transition-all ${
                status?.pref_letra === t 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {t === "ambas" ? "Ambas" : `Letra ${t}`}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-muted-foreground mt-3 leading-tight italic">
          * A escrita cursiva será introduzida progressivamente a partir da Etapa 7. 
          A criança não deve ser obrigada a usar cursiva se não estiver pronta.
        </p>
      </div>


      {/* 5. Conversa e oralidade */}
      <BlocoCard
        icone={<MessageCircle className="h-5 w-5" />}
        titulo="5. Conversa e oralidade — falar antes de escrever"
        cor="bg-petal/25"
        feito={!!feitos.oralidade}
        onMarcar={() => marcar("oralidade")}
      >
        <Oralidade semana={nSemana} />
      </BlocoCard>

      <div className="rounded-2xl bg-muted p-4 text-sm text-muted-foreground mt-6 mb-8">
        <strong className="text-foreground">Para a família:</strong> são 15 minutos por dia, com
        papel e lápis de verdade, mais 5 minutos de conversa. O app avisa na hora combinada — é só
        sentar junto e acompanhar.
      </div>
    </Shell>
  );
}

function FraseGrande({ texto, destaque }: { texto: string; destaque?: boolean }) {
  return (
    <button
      onClick={() => {
        stopSpeaking();
        speakChunked(texto, { rate: 0.72 });
      }}
      className={`w-full text-left rounded-2xl px-4 py-4 font-black text-2xl leading-snug flex items-start gap-3 ${
        destaque
          ? "bg-primary text-primary-foreground"
          : "bg-background border-2 border-dashed border-primary/40"
      }`}
    >
      <Volume2 className="h-6 w-6 shrink-0 mt-1 opacity-80" />
      <span>{texto}</span>
    </button>
  );
}

function Ditado({ itens }: { itens: { palavra: string; dica: string }[] }) {
  const [i, setI] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const item = itens[i];

  function falarPalavra() {
    stopSpeaking();
    speakChunked(item.palavra, { rate: 0.62 });
  }
  function falarDica() {
    stopSpeaking();
    speakChunked(item.dica, { rate: 0.78 });
  }

  return (
    <div>
      <div className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-2">
        Palavra {i + 1} de {itens.length}
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={falarPalavra}
          className="btn-tap rounded-2xl bg-primary text-primary-foreground px-4 py-4 font-black text-lg flex items-center justify-center gap-2"
        >
          <Volume2 className="h-5 w-5" /> Ouvir a palavra
        </button>
        <button
          onClick={falarDica}
          className="btn-tap rounded-2xl bg-background border-2 border-primary/30 px-4 py-3 font-bold flex items-center justify-center gap-2"
        >
          💡 Ouvir a dica
        </button>
        <button
          onClick={() => setMostrar((m) => !m)}
          className="btn-tap rounded-2xl bg-muted px-4 py-2 text-sm font-bold"
        >
          {mostrar ? "Esconder resposta" : "Mostrar resposta (só depois de escrever)"}
        </button>
        {mostrar && (
          <div className="rounded-2xl bg-success/15 px-4 py-3 text-center">
            <div className="text-2xl font-black tracking-wide">{item.palavra}</div>
            <div className="text-xs text-muted-foreground mt-1">{item.dica}</div>
          </div>
        )}
      </div>
      <div className="flex justify-between gap-2 mt-3">
        <button
          disabled={i === 0}
          onClick={() => {
            setI((v) => Math.max(0, v - 1));
            setMostrar(false);
          }}
          className="btn-tap rounded-xl bg-muted px-3 py-2 text-sm font-bold disabled:opacity-40"
        >
          ← Anterior
        </button>
        <button
          disabled={i >= itens.length - 1}
          onClick={() => {
            setI((v) => Math.min(itens.length - 1, v + 1));
            setMostrar(false);
          }}
          className="btn-tap rounded-xl bg-muted px-3 py-2 text-sm font-bold disabled:opacity-40"
        >
          Próxima →
        </button>
      </div>
    </div>
  );
}

function BlocoCard({
  icone,
  titulo,
  cor,
  feito,
  onMarcar,
  children,
}: {
  icone: React.ReactNode;
  titulo: string;
  cor: string;
  feito: boolean;
  onMarcar: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className={`rounded-3xl p-4 mb-4 shadow-soft ${cor}`}>
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="font-extrabold flex items-center gap-2">
          <span className="text-primary">{icone}</span> {titulo}
        </h2>
        <button
          onClick={onMarcar}
          className={`btn-tap h-9 w-9 rounded-full grid place-items-center border-2 ${
            feito
              ? "bg-success text-success-foreground border-success"
              : "bg-background border-muted-foreground/30"
          }`}
          aria-label="Marcar como feito"
        >
          <Check className="h-5 w-5" />
        </button>
      </div>
      {children}
    </section>
  );
}

function Oralidade({ semana }: { semana: number }) {
  const o = oralidadeDaSemana(semana);
  const itens: { emoji: string; titulo: string; texto: string; falar: string }[] = [
    {
      emoji: "🗣️",
      titulo: "Roda de conversa",
      texto: o.perguntaRoda,
      falar: o.perguntaRoda,
    },
    {
      emoji: "📖",
      titulo: "Reconto",
      texto: o.reconto,
      falar: o.reconto,
    },
    {
      emoji: "🎤",
      titulo: "Entrevista",
      texto: o.entrevista.join("  •  "),
      falar: o.entrevista.join(". "),
    },
    {
      emoji: "🖼️",
      titulo: "Apresentação",
      texto: o.apresentacao,
      falar: o.apresentacao,
    },
  ];

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-3">
        A oralidade é a base da alfabetização. Antes de escrever, a criança precisa ouvir,
        argumentar, recontar e montar a frase falando. Faça um item por dia, sentado junto — exija{" "}
        <strong className="text-foreground">frases completas</strong>, não só “sim” e “não”.
      </p>
      <div className="rounded-2xl bg-background/70 px-4 py-3 mb-3">
        <div className="text-xs font-black uppercase tracking-wider text-muted-foreground">
          Tema da semana
        </div>
        <div className="font-black text-lg">{o.tema}</div>
      </div>
      <div className="space-y-2">
        {itens.map((it) => (
          <button
            key={it.titulo}
            onClick={() => {
              stopSpeaking();
              speakChunked(it.falar, { rate: 0.78 });
            }}
            className="w-full text-left rounded-2xl bg-background border-2 border-primary/20 px-4 py-3 flex items-start gap-3"
          >
            <span className="text-2xl shrink-0">{it.emoji}</span>
            <span className="flex-1">
              <span className="block font-extrabold">{it.titulo}</span>
              <span className="block text-sm text-muted-foreground">{it.texto}</span>
            </span>
            <Volume2 className="h-4 w-4 shrink-0 mt-1 text-primary" />
          </button>
        ))}
      </div>
    </div>
  );
}
