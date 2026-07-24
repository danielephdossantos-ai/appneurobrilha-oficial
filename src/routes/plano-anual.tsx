import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell, PageHeader } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { supabase } from "@/database/supabase/client";
import {
  gerarPlanoAnual,
  idadeParaSerie,
  type PlanoAnualGerado,
  type FonteBloco,
} from "@/modules/plano-anual/generator";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Brain, Heart, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/plano-anual")({
  head: () => ({
    meta: [
      { title: "Plano Anual — Neuro Brilha Kids" },
      {
        name: "description",
        content:
          "Currículo anual da criança de 3 a 7 anos, com Escola Brilha, Neuro Treino e Brilha Vida priorizados pela anamnese.",
      },
      { property: "og:title", content: "Plano Anual — Neuro Brilha Kids" },
      {
        property: "og:description",
        content: "20 min por dia, 5 dias por semana, 40 semanas — no ritmo da criança.",
      },
    ],
  }),
  component: PlanoAnualPage,
});

const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex"];

const FONTE_META: Record<
  FonteBloco,
  { label: string; icon: typeof GraduationCap; cor: string; bg: string }
> = {
  escola_brilha: {
    label: "Escola Brilha",
    icon: GraduationCap,
    cor: "text-[#6D28D9]",
    bg: "bg-[#EDE9FE] border-[#C4B5FD]",
  },
  neuro_treino: {
    label: "Neuro Treino",
    icon: Brain,
    cor: "text-[#B45309]",
    bg: "bg-[#FEF3C7] border-[#FCD34D]",
  },
  brilha_vida: {
    label: "Brilha Vida",
    icon: Heart,
    cor: "text-[#BE185D]",
    bg: "bg-[#FCE7F3] border-[#F9A8D4]",
  },
};

function PlanoAnualPage() {
  const { activeChild } = useAppState();
  const [risk, setRisk] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [semana, setSemana] = useState(1);

  useEffect(() => {
    if (!activeChild?.id) {
      setLoading(false);
      return;
    }
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from("anamnese_v2" as any)
        .select("risk_levels")
        .eq("child_id", activeChild.id)
        .maybeSingle();
      setRisk((data as any)?.risk_levels ?? null);
      setLoading(false);
    })();
  }, [activeChild?.id]);

  const plano = useMemo<PlanoAnualGerado | null>(() => {
    if (!activeChild) return null;
    return gerarPlanoAnual({
      idade: Number(activeChild.idade ?? 5),
      serie: activeChild.serie,
      risk: risk ?? undefined,
    });
  }, [activeChild, risk]);

  if (!activeChild) {
    return (
      <Shell>
        <PageHeader emoji="📅" title="Plano Anual" subtitle="Escolha uma criança primeiro" />
        <Link
          to="/"
          className="btn-tap rounded-xl bg-primary text-primary-foreground px-4 py-2 font-bold inline-block"
        >
          Voltar para a home
        </Link>
      </Shell>
    );
  }

  if (loading || !plano) {
    return (
      <Shell>
        <PageHeader emoji="📅" title="Plano Anual" subtitle="Gerando o plano..." />
        <div className="animate-pulse rounded-2xl bg-muted h-40" />
      </Shell>
    );
  }

  const idade = plano.idade;
  const serie = idadeParaSerie(idade);
  const semanaBlocos = plano.blocos.filter((b) => b.semana === semana);
  const porDia: Record<number, typeof plano.blocos> = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  for (const b of semanaBlocos) porDia[b.dia_semana].push(b);

  return (
    <Shell>
      <PageHeader
        emoji="📅"
        title="Plano Anual"
        subtitle={`${activeChild.nome} · ${idade} anos · ${serie}`}
      />

      {/* Resumo */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0d1f55] to-[#1a3a8c] text-white p-5 shadow-xl mb-5">
        <div className="flex items-start gap-3">
          <Calendar className="h-6 w-6 mt-1 text-[#FFC93C]" />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-black uppercase tracking-wider text-white/70">
              Currículo de 40 semanas
            </div>
            <div className="text-2xl font-black">
              {plano.minutos_por_dia} min/dia · {plano.dias_por_semana} dias/semana
            </div>
            <div className="text-sm text-white/80 mt-1 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#FFC93C]" />
              {plano.base_anamnese.tem_anamnese
                ? `Prioridade: ${plano.base_anamnese.prioridades
                    .map((p) => FONTE_META[p].label)
                    .join(" → ")}`
                : "Anamnese ainda não realizada — usando plano padrão."}
            </div>
          </div>
        </div>
      </div>

      {/* Seletor de semana */}
      <div className="mb-3 text-xs font-black uppercase tracking-wider text-muted-foreground">
        Semana
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
        {Array.from({ length: plano.semanas_totais }).map((_, i) => {
          const n = i + 1;
          const on = n === semana;
          return (
            <button
              key={n}
              onClick={() => setSemana(n)}
              className={`min-w-[44px] h-11 rounded-xl font-black text-sm transition-all border-2 ${
                on
                  ? "bg-[#0d1f55] text-white border-[#0d1f55] shadow"
                  : "bg-card text-foreground border-border"
              }`}
            >
              {n}
            </button>
          );
        })}
      </div>

      {/* Grade da semana */}
      <div className="space-y-4">
        {DIAS.map((label, idx) => {
          const dia = idx + 1;
          const blocos = porDia[dia] ?? [];
          return (
            <motion.div
              key={dia}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className="rounded-2xl bg-card border border-border p-4 shadow-sm"
            >
              <div className="flex items-baseline justify-between mb-3">
                <div className="font-black text-lg">{label}</div>
                <div className="text-xs text-muted-foreground">
                  {blocos.reduce((s, b) => s + b.minutos, 0)} min
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {blocos.map((b, i) => {
                  const meta = FONTE_META[b.fonte];
                  const Icon = meta.icon;
                  return (
                    <Link
                      key={i}
                      to={b.rota}
                      className={`rounded-xl border-2 ${meta.bg} p-3 flex items-start gap-2 active:scale-[0.98] transition-transform`}
                    >
                      <Icon className={`h-5 w-5 shrink-0 mt-0.5 ${meta.cor}`} />
                      <div className="min-w-0 flex-1">
                        <div className={`text-[10px] font-black uppercase tracking-wider ${meta.cor}`}>
                          {meta.label} · {b.minutos} min
                          {b.prioridade === 1 && " · ★"}
                        </div>
                        <div className="font-black text-sm leading-tight truncate">{b.titulo}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">
                          {b.descricao}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Shell>
  );
}
