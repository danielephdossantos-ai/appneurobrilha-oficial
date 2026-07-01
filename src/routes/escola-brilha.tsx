import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, BookOpen, CheckCircle2, Lock } from "lucide-react";
import { Shell } from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/core/store";
import { listAulas, hasAula } from "@/escola-brilha/registry";

export const Route = createFileRoute("/escola-brilha")({
  head: () => ({
    meta: [
      { title: "Escola Brilha — Aulas de verdade" },
      {
        name: "description",
        content:
          "Aulas escritas com carinho, uma por uma, seguindo a BNCC. Sem gerador automático, sem enrolação — só ensino de verdade.",
      },
    ],
  }),
  component: EscolaBrilhaCatalogo,
});

type HabRow = { codigo: string; titulo: string; ano: string; componente: string };

function EscolaBrilhaCatalogo() {
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const [habilidades, setHabilidades] = useState<HabRow[]>([]);
  const [progresso, setProgresso] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState<string>("disponiveis");

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("bncc_habilidades")
        .select("codigo_bncc, titulo, ano, disciplina")
        .order("codigo_bncc")
        .limit(2000);
      const rows: HabRow[] = (data ?? []).map((r) => ({
        codigo: r.codigo_bncc,
        titulo: r.titulo,
        ano: r.ano,
        componente: r.disciplina,
      }));
      setHabilidades(rows);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!activeChild?.id) return;
    (async () => {
      const { data } = await supabase
        .from("escola_progresso")
        .select("codigo_bncc, concluida")
        .eq("child_id", activeChild.id);
      const map: Record<string, boolean> = {};
      for (const r of data ?? []) map[r.codigo_bncc] = !!r.concluida;
      setProgresso(map);
    })();
  }, [activeChild?.id]);

  const aulasEscritas = listAulas();
  const escritasSet = new Set(aulasEscritas.map((a) => a.codigo));

  const lista =
    filtro === "disponiveis"
      ? habilidades.filter((h) => escritasSet.has(h.codigo))
      : habilidades;

  return (
    <Shell>
      <div className="max-w-3xl mx-auto pb-24">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate({ to: "/" })}
            className="h-10 w-10 rounded-xl bg-white/80 grid place-items-center active:scale-95 shadow-sm"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5 text-[#0d1f55]" />
          </button>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#0d1f55]/55">
              Aulas de verdade
            </div>
            <h1 className="text-2xl font-black text-[#0d1f55]">Escola Brilha</h1>
          </div>
        </div>

        {/* Info */}
        <div className="rounded-2xl bg-gradient-to-br from-[#4C9EFF]/15 to-[#9B6CFF]/15 border-2 border-[#4C9EFF]/25 p-4 mb-4">
          <div className="flex items-center gap-2 text-[#4C9EFF] mb-1">
            <BookOpen className="h-4 w-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              {aulasEscritas.length} aula{aulasEscritas.length === 1 ? "" : "s"} escrita
              {aulasEscritas.length === 1 ? "" : "s"} · {habilidades.length} habilidades BNCC no
              currículo
            </span>
          </div>
          <p className="text-sm text-[#0d1f55] leading-relaxed">
            Cada aula é escrita à mão, com pedagogia de verdade. Estamos construindo uma por uma —
            volte sempre pra ver o que há de novo.
          </p>
        </div>

        {/* Filtro */}
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setFiltro("disponiveis")}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${
              filtro === "disponiveis"
                ? "bg-[#0d1f55] text-white"
                : "bg-white text-[#0d1f55]/60 border border-[#0d1f55]/15"
            }`}
          >
            Disponíveis ({aulasEscritas.length})
          </button>
          <button
            onClick={() => setFiltro("todas")}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${
              filtro === "todas"
                ? "bg-[#0d1f55] text-white"
                : "bg-white text-[#0d1f55]/60 border border-[#0d1f55]/15"
            }`}
          >
            Todas ({habilidades.length})
          </button>
        </div>

        {/* Lista */}
        {loading ? (
          <div className="text-[#0d1f55]/60 text-sm text-center py-10">Carregando…</div>
        ) : lista.length === 0 ? (
          <div className="text-[#0d1f55]/60 text-sm text-center py-10">
            Nenhuma aula ainda nesse filtro.
          </div>
        ) : (
          <div className="space-y-2">
            {lista.slice(0, 200).map((h) => {
              const disponivel = escritasSet.has(h.codigo);
              const concluida = progresso[h.codigo];
              const Card = (
                <div
                  className={`rounded-2xl border-2 p-4 flex items-center gap-3 ${
                    disponivel
                      ? "bg-white border-white shadow-sm active:scale-[0.99]"
                      : "bg-white/60 border-[#0d1f55]/10 opacity-70"
                  }`}
                >
                  <div
                    className={`h-11 w-11 rounded-xl grid place-items-center shrink-0 ${
                      concluida
                        ? "bg-[#22C55E] text-white"
                        : disponivel
                          ? "bg-[#FFC93C] text-[#0d1f55]"
                          : "bg-[#0d1f55]/10 text-[#0d1f55]/40"
                    }`}
                  >
                    {concluida ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : disponivel ? (
                      <BookOpen className="h-5 w-5" />
                    ) : (
                      <Lock className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#0d1f55]/55">
                      {h.codigo} · {h.ano} · {h.componente}
                    </div>
                    <div className="text-sm font-black text-[#0d1f55] leading-tight line-clamp-2">
                      {h.titulo}
                    </div>
                  </div>
                </div>
              );
              return disponivel ? (
                <Link
                  key={h.codigo}
                  to="/escola-brilha/$codigo"
                  params={{ codigo: h.codigo }}
                >
                  {Card}
                </Link>
              ) : (
                <div key={h.codigo}>{Card}</div>
              );
            })}
          </div>
        )}
      </div>
    </Shell>
  );
}
