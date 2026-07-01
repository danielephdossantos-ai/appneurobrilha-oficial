import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, BookOpen, CheckCircle2, ChevronDown, ChevronRight, Lock } from "lucide-react";
import { Shell } from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/core/store";
import { listAulas } from "@/escola-brilha/registry";
import { RevisoesRecomendadas } from "@/escola-brilha/RevisoesRecomendadas";
import { MasteryBadge, type NivelDominio } from "@/escola-brilha/MasteryBadge";



export const Route = createFileRoute("/escola-brilha/")({
  head: () => ({
    meta: [
      { title: "Escola Brilha — Aulas por série e disciplina" },
      {
        name: "description",
        content:
          "Catálogo BNCC organizado por série (Educação Infantil ao 9º Ano) e disciplina. Cada aula escrita à mão, pedagogia de verdade.",
      },
    ],
  }),
  component: EscolaBrilhaCatalogo,
});

type HabRow = { codigo: string; titulo: string; ano: string; componente: string };

// Ordem oficial das séries no catálogo.
const SERIES_ORDEM = [
  "Educação Infantil",
  "1º Ano",
  "2º Ano",
  "3º Ano",
  "4º Ano",
  "5º Ano",
  "6º Ano",
  "7º Ano",
  "8º Ano",
  "9º Ano",
] as const;
type Serie = (typeof SERIES_ORDEM)[number];

// Expande "X ao Y Ano" para cada série que ele cobre.
function expandirAno(ano: string): Serie[] {
  const a = (ano || "").trim();
  if (!a) return [];
  const direto = SERIES_ORDEM.find((s) => s === a);
  if (direto) return [direto];
  if (a === "Educação Infantil") return ["Educação Infantil"];
  // padrões "1º ao 5º Ano", "6º ao 9º Ano", etc.
  const m = a.match(/(\d)[ºo]?\s*ao\s*(\d)[ºo]?\s*Ano/i);
  if (m) {
    const ini = parseInt(m[1], 10);
    const fim = parseInt(m[2], 10);
    const out: Serie[] = [];
    for (let i = ini; i <= fim; i++) {
      const label = `${i}º Ano` as Serie;
      if (SERIES_ORDEM.includes(label)) out.push(label);
    }
    return out;
  }
  return []; // Ensino Médio e outros ficam de fora conforme escopo
}

function EscolaBrilhaCatalogo() {
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const [habilidades, setHabilidades] = useState<HabRow[]>([]);
  const [progresso, setProgresso] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState<"disponiveis" | "todas">("disponiveis");
  const [serieAberta, setSerieAberta] = useState<Serie | null>(null);
  const [discAberta, setDiscAberta] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("bncc_habilidades")
        .select("codigo_bncc, titulo, ano, disciplina")
        .order("codigo_bncc")
        .limit(2000);
      const rows: HabRow[] = (data ?? []).map((r) => ({
        codigo: r.codigo_bncc,
        titulo: r.titulo ?? r.codigo_bncc,
        ano: r.ano ?? "",
        componente: r.disciplina ?? "",
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
  const escritasSet = useMemo(() => new Set(aulasEscritas.map((a) => a.codigo)), [aulasEscritas]);

  // Agrupa: Série -> Disciplina -> [habilidades]
  const arvore = useMemo(() => {
    const tree: Record<Serie, Record<string, HabRow[]>> = {} as any;
    for (const s of SERIES_ORDEM) tree[s] = {};
    for (const h of habilidades) {
      if (filtro === "disponiveis" && !escritasSet.has(h.codigo)) continue;
      const series = expandirAno(h.ano);
      for (const s of series) {
        const disc = h.componente || "Outros";
        (tree[s][disc] ||= []).push(h);
      }
    }
    // ordena habilidades por código dentro de cada disciplina
    for (const s of SERIES_ORDEM) {
      for (const d of Object.keys(tree[s])) {
        tree[s][d].sort((a, b) => a.codigo.localeCompare(b.codigo));
      }
    }
    return tree;
  }, [habilidades, filtro, escritasSet]);

  const contarSerie = (s: Serie) =>
    Object.values(arvore[s]).reduce((acc, arr) => acc + arr.length, 0);

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
              Catálogo por série e disciplina
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
              {aulasEscritas.length === 1 ? "" : "s"} · {habilidades.length} habilidades BNCC
            </span>
          </div>
          <p className="text-sm text-[#0d1f55] leading-relaxed">
            Toque numa série para ver as disciplinas, e numa disciplina para ver as habilidades BNCC.
          </p>
        </div>

        {/* Revisões automáticas recomendadas */}
        <RevisoesRecomendadas childId={activeChild?.id} />

        {/* Filtro */}

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFiltro("disponiveis")}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${
              filtro === "disponiveis"
                ? "bg-[#0d1f55] text-white"
                : "bg-white text-[#0d1f55]/60 border border-[#0d1f55]/15"
            }`}
          >
            Disponíveis
          </button>
          <button
            onClick={() => setFiltro("todas")}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${
              filtro === "todas"
                ? "bg-[#0d1f55] text-white"
                : "bg-white text-[#0d1f55]/60 border border-[#0d1f55]/15"
            }`}
          >
            Todas
          </button>
        </div>

        {loading ? (
          <div className="text-[#0d1f55]/60 text-sm text-center py-10">Carregando…</div>
        ) : (
          <div className="space-y-2">
            {SERIES_ORDEM.map((serie) => {
              const disciplinas = Object.keys(arvore[serie]).sort((a, b) => a.localeCompare(b));
              const total = contarSerie(serie);
              const aberta = serieAberta === serie;
              return (
                <div key={serie} className="rounded-2xl bg-white border-2 border-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => {
                      setSerieAberta(aberta ? null : serie);
                      setDiscAberta(null);
                    }}
                    className="w-full flex items-center gap-3 p-4 active:scale-[0.995]"
                  >
                    <div className="h-11 w-11 rounded-xl bg-[#4C9EFF]/15 text-[#4C9EFF] grid place-items-center shrink-0">
                      {aberta ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-base font-black text-[#0d1f55]">{serie}</div>
                      <div className="text-[11px] text-[#0d1f55]/60">
                        {disciplinas.length} disciplina{disciplinas.length === 1 ? "" : "s"} ·{" "}
                        {total} habilidade{total === 1 ? "" : "s"}
                      </div>
                    </div>
                  </button>

                  {aberta && (
                    <div className="border-t border-[#0d1f55]/10 bg-[#F7F9FF] p-2 space-y-2">
                      {disciplinas.length === 0 && (
                        <div className="text-[#0d1f55]/50 text-xs text-center py-6">
                          Nenhuma aula {filtro === "disponiveis" ? "disponível" : ""} nesta série ainda.
                        </div>
                      )}
                      {disciplinas.map((disc) => {
                        const lista = arvore[serie][disc];
                        const chave = `${serie}::${disc}`;
                        const discAtiva = discAberta === chave;
                        return (
                          <div key={disc} className="rounded-xl bg-white border border-[#0d1f55]/10 overflow-hidden">
                            <button
                              onClick={() => setDiscAberta(discAtiva ? null : chave)}
                              className="w-full flex items-center gap-3 p-3 active:scale-[0.995]"
                            >
                              <div className="h-9 w-9 rounded-lg bg-[#9B6CFF]/15 text-[#9B6CFF] grid place-items-center shrink-0">
                                {discAtiva ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </div>
                              <div className="flex-1 text-left">
                                <div className="text-sm font-black text-[#0d1f55]">{disc}</div>
                                <div className="text-[10px] text-[#0d1f55]/55 font-black uppercase tracking-widest">
                                  {lista.length} habilidade{lista.length === 1 ? "" : "s"}
                                </div>
                              </div>
                            </button>

                            {discAtiva && (
                              <div className="border-t border-[#0d1f55]/10 p-2 space-y-2">
                                {lista.map((h) => {
                                  const disponivel = escritasSet.has(h.codigo);
                                  const concluida = progresso[h.codigo];
                                  const Card = (
                                    <div
                                      className={`rounded-xl border-2 p-3 flex items-center gap-3 ${
                                        disponivel
                                          ? "bg-white border-white shadow-sm active:scale-[0.99]"
                                          : "bg-white/60 border-[#0d1f55]/10 opacity-70"
                                      }`}
                                    >
                                      <div
                                        className={`h-10 w-10 rounded-lg grid place-items-center shrink-0 ${
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
                                          {h.codigo}
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
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Shell>
  );
}
