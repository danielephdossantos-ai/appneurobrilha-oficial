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
import { TrilhaPlanoVisual } from "@/components/planos/TrilhaPlanoVisual";


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
        <div className="space-y-5">
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

          <RotinaDiaria
            childId={childId}
            itensHoje={itens.filter((i) => i.dia_semana === hoje)}
            onToggle={alternar}
          />

          <div className="flex gap-2 overflow-x-auto pb-1">
            {Array.from({ length: plano.semanas_totais }, (_, i) => i + 1).map((wk) => (
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
              itens={itens} 
              onToggle={alternar} 
              tipo="alfa" 
            />
          </div>


          <p className="text-xs text-muted-foreground text-center">
            As aulas de hoje também aparecem na agenda de estudo da criança.
          </p>
        </div>
      )}
    </Shell>
  );
}
