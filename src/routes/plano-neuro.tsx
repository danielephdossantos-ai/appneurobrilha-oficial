import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  CalendarDays,
  Clock,
  Sparkles,
  CheckCircle2,
  Circle,
  BellRing,
  Bell,
  RefreshCw,
  Brain,
  Play,
  History,
  Info,
} from "lucide-react";
import { DIAS_LABEL, diaSemanaHoje, semanaAtualNeuro } from "@/modules/neuro-plano/builder";
import {
  carregarHorariosNeuro,
  carregarItensNeuro,
  carregarPlanoNeuro,
  contarProgressoNeuro,
  gerarESalvarNeuro,
  marcarItemNeuro,
  salvarHorarioNeuro,
  sincronizarAgendaNeuro,
  type HorarioNeuro,
  type ItemNeuroSalvo,
  type PlanoNeuroSalvo,
} from "@/modules/neuro-plano/persist";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { useNavigationStore } from "@/lib/navigation-context";
import { useNavigate } from "@tanstack/react-router";
import { TrilhaPlanoVisual } from "@/components/planos/TrilhaPlanoVisual";


export const Route = createFileRoute("/plano-neuro")({
  head: () => ({
    meta: [
      { title: "Plano Neuro — rotina de Neuro Treino da criança" },
      {
        name: "description",
        content:
          "As atividades do Neuro Treino indicadas pela anamnese, já organizadas em rotina semanal, salvas no sistema e na agenda com horário editável e lembretes.",
      },
      { property: "og:title", content: "Plano Neuro — Neuro Brilha Kids" },
      {
        property: "og:description",
        content: "Rotina automática de Neuro Treino gerada pela anamnese da criança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanoNeuroPage,
});

function PlanoNeuroPage() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;
  const { permission, request } = usePushNotifications(childId);
  const navigate = useNavigate();
  const setNavContext = useNavigationStore((s) => s.setContext);

  const [loading, setLoading] = useState(true);
  const [gerando, setGerando] = useState(false);
  const [plano, setPlano] = useState<PlanoNeuroSalvo | null>(null);
  const [itens, setItens] = useState<ItemNeuroSalvo[]>([]);
  const [horarios, setHorarios] = useState<HorarioNeuro[]>([]);
  const [progresso, setProgresso] = useState({ total: 0, concluidas: 0 });
  const [semana, setSemana] = useState(1);

  const hoje = diaSemanaHoje();

  const recarregar = useCallback(
    async (wk: number) => {
      if (!childId) return;
      const [lista, prog, hrs] = await Promise.all([
        carregarItensNeuro(childId, wk),
        contarProgressoNeuro(childId),
        carregarHorariosNeuro(childId),
      ]);
      setItens(lista);
      setProgresso(prog);
      setHorarios(hrs);
      const horaHoje = hrs.find((h) => h.dia_semana === hoje)?.hora ?? "16:00";
      void sincronizarAgendaNeuro(
        childId,
        lista.filter((i) => i.dia_semana === hoje),
        horaHoje,
      );
    },
    [childId, hoje],
  );

  useEffect(() => {
    if (!childId) {
      setLoading(false);
      return;
    }
    (async () => {
      setLoading(true);
      const p = await carregarPlanoNeuro(childId);
      setPlano(p);
      if (p) {
        const wk = semanaAtualNeuro(p.gerado_em, p.semanas);
        setSemana(wk);
        await recarregar(wk);
      }
      setLoading(false);
    })();
  }, [childId, recarregar]);

  async function gerar() {
    if (!childId) return;
    setGerando(true);
    try {
      await gerarESalvarNeuro(childId);
      const p = await carregarPlanoNeuro(childId);
      setPlano(p);
      setSemana(1);
      await recarregar(1);
      toast.success("Plano Neuro criado! A rotina já está salva na agenda.");
    } catch (e: any) {
      toast.error(e?.message ?? "Não deu para criar o plano agora.");
    } finally {
      setGerando(false);
    }
  }

  async function alternar(item: ItemNeuroSalvo) {
    await marcarItemNeuro(item.id, !item.concluido);
    setItens((prev) => prev.map((i) => (i.id === item.id ? { ...i, concluido: !i.concluido } : i)));
    setProgresso((p) => ({ ...p, concluidas: p.concluidas + (item.concluido ? -1 : 1) }));
  }

  const handleStartSession = () => {
    if (!itens || itens.length === 0) return;

    const itensHoje = itens.filter((i) => i.dia_semana === hoje && !i.concluido);

    if (itensHoje.length === 0) {
      toast.info("Você já concluiu todas as missões de hoje! ✨");
      return;
    }

    const slugs = itensHoje.map((i) => i.slug);

    setNavContext({
      originRoute: "/plano-neuro",
      originModule: "neuro-treino",
      originCategory: "meu-plano",
      sessionActivities: slugs,
      sessionIndex: 0,
      timestamp: Date.now(),
    });

    navigate({ to: `/neuro-treino/${slugs[0]}` });
  };

  async function mudarHora(dia: number, hora: string) {
    if (!childId) return;
    const atual = horarios.find((h) => h.dia_semana === dia);
    setHorarios((prev) => {
      const outros = prev.filter((h) => h.dia_semana !== dia);
      return [...outros, { dia_semana: dia, hora, lembrete: atual?.lembrete ?? true }].sort(
        (a, b) => a.dia_semana - b.dia_semana,
      );
    });
    await salvarHorarioNeuro(childId, dia, hora, atual?.lembrete ?? true);
  }

  async function alternarLembrete(dia: number) {
    if (!childId) return;
    const atual = horarios.find((h) => h.dia_semana === dia);
    const novo = !(atual?.lembrete ?? true);
    setHorarios((prev) => prev.map((h) => (h.dia_semana === dia ? { ...h, lembrete: novo } : h)));
    await salvarHorarioNeuro(childId, dia, atual?.hora ?? "16:00", novo);
  }

  const porDia = useMemo(() => {
    const mapa = new Map<number, ItemNeuroSalvo[]>();
    for (const i of itens) {
      const arr = mapa.get(i.dia_semana) ?? [];
      arr.push(i);
      mapa.set(i.dia_semana, arr);
    }
    return mapa;
  }, [itens]);

  const dias = plano?.dias_por_semana ?? 5;
  const pct = progresso.total ? Math.round((progresso.concluidas / progresso.total) * 100) : 0;

  return (
    <Shell>
      <PageHeader
        emoji="🧠"
        title="Plano Neuro"
        subtitle="As aulas do Neuro Treino que a anamnese indicou, em rotina diária"
      />

      {!childId ? (
        <Card className="text-center">
          <p className="font-bold">Escolha uma criança primeiro.</p>
          <Link to="/" className="text-primary font-bold underline">
            Voltar ao início
          </Link>
        </Card>
      ) : loading ? (
        <Card className="text-center font-bold">Carregando o plano…</Card>
      ) : !plano ? (
        <Card className="text-center space-y-3">
          <Sparkles className="h-10 w-10 mx-auto text-primary" />
          <h2 className="text-xl font-black">Montar o Plano Neuro de {activeChild?.nome}</h2>
          <p className="text-sm text-muted-foreground">
            Vamos usar o resultado da anamnese para organizar as atividades REAIS do Neuro-Treino 
            em uma rotina semanal prática (3 a 6 anos). 
          </p>
          <button
            onClick={gerar}
            disabled={gerando}
            className="btn-tap rounded-2xl bg-primary text-primary-foreground px-6 py-3 font-black disabled:opacity-60"
          >
            {gerando ? "Montando…" : "Criar plano neuro"}
          </button>
        </Card>
      ) : (
        <div className="space-y-5">
          <Card className="bg-primary/10 border-primary/30">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-muted-foreground">
                  Plano de {plano.semanas} semanas · {plano.sessoes_por_dia} sessões/dia
                </div>
                <div className="text-lg font-black">
                  {progresso.concluidas} de {progresso.total} sessões feitas
                </div>
              </div>
              <button
                onClick={gerar}
                disabled={gerando}
                title="Refazer o plano"
                className="btn-tap rounded-xl bg-background border-2 border-primary/30 px-3 py-2 font-bold flex items-center gap-1.5"
              >
                <RefreshCw className="h-4 w-4" /> Refazer
              </button>
            </div>
            <div className="h-3 rounded-full bg-background overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
              />
            </div>
          </Card>

          {/* Removido o botão duplicado de COMEÇAR MISSÃO, pois agora ele está integrado na TrilhaPlanoVisual */}


          <div className="flex gap-2 overflow-x-auto pb-1">
            {Array.from({ length: plano.semanas }, (_, i) => i + 1).map((wk) => (
              <button
                key={wk}
                onClick={() => {
                  setSemana(wk);
                  void recarregar(wk);
                }}
                className={`btn-tap shrink-0 rounded-lg w-10 h-10 font-bold border-2 ${
                  semana === wk
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border"
                }`}
              >
                {wk}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[40px] border-2 border-slate-200/50 dark:border-slate-800/50 overflow-hidden shadow-inner">
            <TrilhaPlanoVisual 
              itens={itens.map(i => ({
                ...i,
                trilha_label: i.grupo,
                titulo: `${i.emoji} ${i.nome}`
              }))} 
              onToggle={alternar} 
              tipo="neuro" 
            />
          </div>


          <Card className="space-y-3">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              <h2 className="font-black">Horário da rotina (a mãe edita)</h2>
            </div>
            {permission !== "granted" && (
              <button
                onClick={request}
                className="btn-tap w-full rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold flex items-center justify-center gap-2"
              >
                <BellRing className="h-4 w-4" /> Ativar lembretes no celular
              </button>
            )}
            <div className="space-y-2">
              {Array.from({ length: dias }, (_, i) => i + 1).map((dia) => {
                const h = horarios.find((x) => x.dia_semana === dia);
                return (
                  <div key={dia} className="flex items-center gap-3">
                    <span className="w-12 font-black">{DIAS_LABEL[dia]}</span>
                    <input
                      type="time"
                      value={h?.hora ?? "16:00"}
                      onChange={(e) => mudarHora(dia, e.target.value)}
                      className="flex-1 rounded-xl border-2 border-border bg-background px-3 py-2 font-bold"
                      aria-label={`Horário de ${DIAS_LABEL[dia]}`}
                    />
                    <button
                      onClick={() => alternarLembrete(dia)}
                      aria-label={`Lembrete de ${DIAS_LABEL[dia]}`}
                      className={`btn-tap rounded-xl border-2 p-2 ${
                        h?.lembrete ?? true
                          ? "bg-primary/15 border-primary/40 text-primary"
                          : "bg-background border-border text-muted-foreground"
                      }`}
                    >
                      {h?.lembrete ?? true ? (
                        <BellRing className="h-5 w-5" />
                      ) : (
                        <Bell className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              As sessões de hoje também aparecem na agenda da criança e nos lembretes diários.
            </p>
          </Card>
        </div>
      )}
    </Shell>
  );
}
