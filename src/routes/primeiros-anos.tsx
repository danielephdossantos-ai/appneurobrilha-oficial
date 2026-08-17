import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { CheckCircle2, Circle, RefreshCw, Sparkles, BookOpenCheck } from "lucide-react";
import {
  DIAS_LABEL,
  ETAPA_LABEL,
  diaSemanaHoje,
  etapaPorIdade,
  semanaAtual,
  type EtapaPrimeirosAnos,
} from "@/modules/primeiros-anos/builder";
import {
  carregarItensDaSemana,
  carregarPlano,
  contarProgresso,
  gerarESalvar,
  marcarItem,
  sincronizarAgendaDoDia,
  type ItemSalvo,
  type PlanoSalvo,
} from "@/modules/primeiros-anos/persist";
import { RotinaDiaria } from "@/components/literacy/RotinaDiaria";

export const Route = createFileRoute("/primeiros-anos")({
  head: () => ({
    meta: [
      { title: "Primeiros Anos — Plano de Alfabetização | Neuro Brilha" },
      {
        name: "description",
        content:
          "Plano anual de alfabetização de 3 a 6 anos: 40 semanas com Ler com Aurora, Códice de Português, Matemática Kawaii, Biblioteca Encantada e inglês oral, sem repetir aula.",
      },
      { property: "og:title", content: "Primeiros Anos — Plano de Alfabetização" },
      {
        property: "og:description",
        content: "O ano letivo da alfabetização montado automaticamente para cada idade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrimeirosAnosPage,
});

function PrimeirosAnosPage() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;
  const idade = activeChild?.idade ?? 5;

  const [loading, setLoading] = useState(true);
  const [gerando, setGerando] = useState(false);
  const [plano, setPlano] = useState<PlanoSalvo | null>(null);
  const [itens, setItens] = useState<ItemSalvo[]>([]);
  const [progresso, setProgresso] = useState({ total: 0, concluidas: 0 });
  const [semana, setSemana] = useState(1);

  const hoje = diaSemanaHoje();
  const etapa: EtapaPrimeirosAnos = etapaPorIdade(idade);

  const recarregar = useCallback(
    async (wk: number) => {
      if (!childId) return;
      const [lista, prog] = await Promise.all([
        carregarItensDaSemana(childId, wk),
        contarProgresso(childId),
      ]);
      setItens(lista);
      setProgresso(prog);
      void sincronizarAgendaDoDia(
        childId,
        lista.filter((i) => i.dia_semana === hoje),
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
      let p = await carregarPlano(childId);
      if (!p) {
        try {
          setGerando(true);
          await gerarESalvar({ childId, idade });
          p = await carregarPlano(childId);
        } catch {
          /* mostra o botão manual se falhar */
        } finally {
          setGerando(false);
        }
      }
      setPlano(p);
      if (p) {
        const wk = semanaAtual(p.gerado_em, p.semanas_totais);
        setSemana(wk);
        await recarregar(wk);
      }
      setLoading(false);
    })();
  }, [childId, idade, recarregar]);

  async function gerar() {
    if (!childId) return;
    setGerando(true);
    try {
      await gerarESalvar({ childId, idade });
      const p = await carregarPlano(childId);
      setPlano(p);
      setSemana(1);
      await recarregar(1);
      toast.success("Plano de alfabetização criado! Já está na rotina da criança.");
    } catch (e: any) {
      toast.error(e?.message ?? "Não deu para criar o plano agora.");
    } finally {
      setGerando(false);
    }
  }

  async function alternar(item: ItemSalvo) {
    await marcarItem(item.id, !item.concluido);
    setItens((prev) => prev.map((i) => (i.id === item.id ? { ...i, concluido: !i.concluido } : i)));
    setProgresso((p) => ({ ...p, concluidas: p.concluidas + (item.concluido ? -1 : 1) }));
  }

  const porDia = useMemo(() => {
    const mapa = new Map<number, ItemSalvo[]>();
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
        emoji="🌱"
        title="Primeiros Anos"
        subtitle="Plano anual de alfabetização · 3 a 6 anos"
      />

      {!childId ? (
        <Card className="text-center">
          <p className="font-bold">Escolha uma criança primeiro.</p>
          <Link to="/" className="text-primary font-bold underline">
            Voltar ao início
          </Link>
        </Card>
      ) : loading ? (
        <Card className="text-center font-bold">
          {gerando ? "Montando o ano de alfabetização…" : "Carregando o plano…"}
        </Card>
      ) : !plano ? (
        <Card className="text-center space-y-3">
          <Sparkles className="h-10 w-10 mx-auto text-primary" />
          <h2 className="text-xl font-black">Montar a alfabetização de {activeChild?.nome}</h2>
          <p className="text-sm text-muted-foreground">
            40 semanas, 5 dias por semana, com as trilhas de {ETAPA_LABEL[etapa]} — sem repetir aula.
          </p>
          <button
            onClick={gerar}
            disabled={gerando}
            className="btn-tap rounded-2xl bg-primary text-primary-foreground px-6 py-3 font-black disabled:opacity-60"
          >
            {gerando ? "Montando…" : "Criar plano de alfabetização"}
          </button>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="bg-primary/10 border-primary/30">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="min-w-0">
                <div className="text-xs font-black uppercase tracking-wider text-muted-foreground">
                  {ETAPA_LABEL[(plano.etapa as EtapaPrimeirosAnos) ?? etapa] ?? plano.etapa}
                </div>
                <div className="text-lg font-black">
                  {progresso.concluidas} de {progresso.total} aulas feitas
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
            {plano.motivo && (
              <p className="text-xs text-muted-foreground mt-2">{plano.motivo}</p>
            )}
          </Card>

          {/* Atividades Diretas (Migradas do Neuro-Treino) */}
          <section className="space-y-4">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
              Atividades de Apoio
            </h2>
            <div className="grid gap-3">
              {/* My First English */}
              <Link
                to="/escola-brilha/ingles-ei"
                className="group block rounded-2xl overflow-hidden border-2 border-purple-200 dark:border-purple-900/60 shadow-sm hover:shadow transition-all active:scale-[0.99]"
              >
                <div className="p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-xl">🇺🇸</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Inglês · Ed. Infantil</div>
                    <div className="font-black text-white text-base leading-tight">My First English</div>
                  </div>
                  <div className="text-white/90 group-hover:translate-x-1 transition">→</div>
                </div>
              </Link>

              {/* Matemática Kawaii */}
              <Link
                to="/escola-brilha/matematica-ei"
                className="group block rounded-2xl overflow-hidden border-2 border-emerald-200 dark:border-emerald-900/60 shadow-sm hover:shadow transition-all active:scale-[0.99]"
              >
                <div className="p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #10B981, #2563EB)" }}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-xl">🔢</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Matemática · Ed. Infantil</div>
                    <div className="font-black text-white text-base leading-tight">Matemática Kawaii</div>
                  </div>
                  <div className="text-white/90 group-hover:translate-x-1 transition">→</div>
                </div>
              </Link>

              {/* Ler com Aurora */}
              <Link
                to="/neuro-treino/ler-com-aurora"
                className="group block rounded-2xl overflow-hidden border-2 border-amber-200 dark:border-amber-900/60 shadow-sm hover:shadow transition-all active:scale-[0.99]"
              >
                <div className="p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #f59e0b, #7c3aed)" }}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-xl">🔤</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Especial · Pré II + 1º Ano</div>
                    <div className="font-black text-white text-base leading-tight">Ler com Aurora</div>
                  </div>
                  <div className="text-white/90 group-hover:translate-x-1 transition">→</div>
                </div>
              </Link>

              {/* Histórias por nível leitor */}
              <Link
                to="/biblioteca-alfa"
                className="group block rounded-2xl overflow-hidden border-2 border-rose-200 dark:border-rose-900/60 shadow-sm hover:shadow transition-all active:scale-[0.99]"
              >
                <div className="p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #f43f5e, #f59e0b)" }}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-xl">📚</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Leitura Graduada</div>
                    <div className="font-black text-white text-base leading-tight">Histórias por nível leitor</div>
                  </div>
                  <div className="text-white/90 group-hover:translate-x-1 transition">→</div>
                </div>
              </Link>

              {/* Biblioteca Encantada */}
              <Link
                to="/escola-brilha/biblioteca-encantada"
                className="group block rounded-2xl overflow-hidden border-2 border-emerald-200 dark:border-emerald-900/60 shadow-sm hover:shadow transition-all active:scale-[0.99]"
              >
                <div className="p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)" }}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-xl">🗣️</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Comunicação Funcional</div>
                    <div className="font-black text-white text-base leading-tight">Biblioteca Encantada</div>
                  </div>
                  <div className="text-white/90 group-hover:translate-x-1 transition">→</div>
                </div>
              </Link>

              {/* Alfabetização Brilha */}
              <Link
                to="/alfabetizacao"
                className="group block rounded-2xl overflow-hidden border-2 border-pink-200 dark:border-pink-900/60 shadow-sm hover:shadow transition-all active:scale-[0.99]"
              >
                <div className="p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-xl">🅰️</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Consciência Fonológica</div>
                    <div className="font-black text-white text-base leading-tight">Alfabetização Brilha</div>
                  </div>
                  <div className="text-white/90 group-hover:translate-x-1 transition">→</div>
                </div>
              </Link>

              {/* Trilha da Leitura (Dislexia) */}
              <Link
                to="/escola-brilha/dislexia"
                className="group block rounded-2xl overflow-hidden border-2 border-orange-200 dark:border-orange-900/60 shadow-sm hover:shadow transition-all active:scale-[0.99]"
              >
                <div className="p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #7c3aed, #f97316)" }}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-xl">🎧</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Programa Clínico · Dislexia</div>
                    <div className="font-black text-white text-base leading-tight">Trilha da Leitura</div>
                  </div>
                  <div className="text-white/90 group-hover:translate-x-1 transition">→</div>
                </div>
              </Link>

              {/* Contar com Pip (Matemática Terapêutica) */}
              <Link
                to="/escola-brilha/contar-com-pip"
                className="group block rounded-2xl overflow-hidden border-2 border-sky-200 dark:border-sky-900/60 shadow-sm hover:shadow transition-all active:scale-[0.99]"
              >
                <div className="p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-xl">🔢</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none mb-1">Discalculia · Senso Numérico</div>
                    <div className="font-black text-white text-base leading-tight">Contar com Pip</div>
                  </div>
                  <div className="text-white/90 group-hover:translate-x-1 transition">→</div>
                </div>
              </Link>

              {/* Trilhas EI (Português e Campos) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  to="/escola-brilha/trilha/$serie/$disc"
                  params={{ serie: "educacao-infantil", disc: "portugues" }}
                  className="group block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-sm border-2 border-emerald-100/20"
                  style={{ background: "linear-gradient(135deg, #059669, #06b6d4)" }}
                >
                  <div className="text-[10px] uppercase tracking-widest opacity-85 leading-none mb-1">Trilha Duolingo</div>
                  <div className="text-base leading-tight">Português EI</div>
                </Link>
                <Link
                  to="/escola-brilha/trilha/$serie/$disc"
                  params={{ serie: "educacao-infantil", disc: "default" }}
                  className="group block rounded-2xl p-4 text-white font-black active:scale-[0.98] shadow-sm border-2 border-violet-100/20"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #f472b6)" }}
                >
                  <div className="text-[10px] uppercase tracking-widest opacity-85 leading-none mb-1">Campos de Experiência</div>
                  <div className="text-base leading-tight">Educação Infantil</div>
                </Link>
              </div>
            </div>
          </section>

          <hr className="border-border border-t-2" />

          <section className="space-y-4">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
              Agenda do Dia (Plano Sequencial)
            </h2>
            <RotinaDiaria
              childId={childId}
              itensHoje={itens.filter((i) => i.dia_semana === hoje)}
              onToggle={alternar}
            />
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
                Calendário Semanal
              </h2>
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar max-w-[60%]">
                {Array.from({ length: plano.semanas_totais }, (_, i) => i + 1).map((wk) => (
                  <button
                    key={wk}
                    onClick={() => {
                      setSemana(wk);
                      void recarregar(wk);
                    }}
                    className={`btn-tap shrink-0 rounded-lg w-8 h-8 text-xs font-black border-2 transition-all ${
                      semana === wk
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary/50"
                    }`}
                  >
                    {wk}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {Array.from({ length: dias }, (_, i) => i + 1).map((dia) => {
                const lista = porDia.get(dia) ?? [];
                const ehHoje = dia === hoje;
                return (
                  <section key={dia}>
                    <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${ehHoje ? "bg-primary animate-pulse" : "bg-muted-foreground/30"}`} />
                      {DIAS_LABEL[dia]}
                      {ehHoje && " · Hoje"}
                    </h3>
                    {lista.length === 0 ? (
                      <Card className="text-sm text-muted-foreground italic py-3 bg-muted/20 border-dashed">Dia livre 🌿</Card>
                    ) : (
                      <div className="space-y-2">
                        {lista.map((item) => (
                          <Card
                            key={item.id}
                            className={`flex items-center gap-3 p-3 border-2 transition-all ${ehHoje ? "border-primary/20 shadow-sm" : "border-border"} ${
                              item.concluido ? "opacity-50 grayscale-[0.5]" : ""
                            }`}
                          >
                            <button
                              onClick={() => alternar(item)}
                              aria-label={item.concluido ? "Desmarcar aula" : "Marcar como feita"}
                              className="btn-tap shrink-0"
                            >
                              {item.concluido ? (
                                <CheckCircle2 className="h-6 w-6 text-primary" />
                              ) : (
                                <Circle className="h-6 w-6 text-muted-foreground/40" />
                              )}
                            </button>
                            <Link to={item.rota} className="flex-1 min-w-0">
                              <div className="text-[10px] font-black uppercase tracking-widest text-primary leading-none mb-1 flex items-center gap-1.5">
                                <BookOpenCheck className="h-3 w-3" />
                                {item.trilha_label}
                                {item.fase ? ` · ${item.fase}` : ""}
                              </div>
                              <div className="font-bold text-sm truncate">{item.titulo}</div>
                            </Link>
                            <Pill className="text-[10px] px-2 py-0.5">{item.minutos}m</Pill>
                          </Card>
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </section>

          <p className="text-[10px] font-bold text-muted-foreground/60 text-center uppercase tracking-widest pt-4">
            Plano de Alfabetização Baseado em Evidências · NeuroBrilha 2026
          </p>
        </div>
      )}
    </Shell>
  );
}
      )}
    </Shell>
  );
}
