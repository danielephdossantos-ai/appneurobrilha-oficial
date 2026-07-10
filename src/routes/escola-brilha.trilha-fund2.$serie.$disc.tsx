import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useAppState } from "@/core/store";
import { UNIDADES_6ANO } from "@/escola-brilha/curso-v4/geografia-6ano/dados-fund2";
import { UNIDADES_7ANO } from "@/escola-brilha/curso-v4/geografia-7ano/dados-fund2";
import { UNIDADES_8ANO } from "@/escola-brilha/curso-v4/geografia-8ano/dados-fund2";


import { CertificadoFund2 } from "@/escola-brilha/curso-v4/geografia-6ano/CertificadoFund2";

/**
 * Trilha visual estilo Duolingo para Fundamental 2 (6º–9º ano).
 * Reutiliza a estética zigue-zague das séries iniciais, mas em paleta
 * acadêmica escura (grafite + ciano) do PlayerGeoV2.
 * As unidades continuam abrindo no PlayerGeoV2 já existente.
 */

type UnidadeTrilha = {
  slug: string;
  titulo: string;
  habilidade: string;
  concluidaKey: string; // chave localStorage
};

const SERIES_LABEL: Record<string, string> = {
  "6ano": "6º Ano",
  "7ano": "7º Ano",
  "8ano": "8º Ano",
  "9ano": "9º Ano",
};

const DISC_LABEL: Record<string, string> = {
  geografia: "Geografia",
};

/** Rotas de player por (serie, disc). */
function playerRoute(serie: string, disc: string): string | null {
  if (serie === "6ano" && disc === "geografia") return "/escola-brilha/geo-6ano/$unidade";
  if (serie === "7ano" && disc === "geografia") return "/escola-brilha/geo-7ano/$unidade";
  if (serie === "8ano" && disc === "geografia") return "/escola-brilha/geo-8ano/$unidade";
  return null;
}


/** Dataset de unidades para cada (serie, disc). */
function loadUnidades(serie: string, disc: string): UnidadeTrilha[] {
  if (serie === "6ano" && disc === "geografia") {
    return UNIDADES_6ANO.map((u) => ({
      slug: u.slug,
      titulo: u.titulo,
      habilidade: u.habilidade,
      concluidaKey: `fund2:6ano:geografia:${u.slug}`,
    }));
  }
  if (serie === "7ano" && disc === "geografia") {
    return UNIDADES_7ANO.map((u) => ({
      slug: u.slug,
      titulo: u.titulo,
      habilidade: u.habilidade,
      concluidaKey: `fund2:7ano:geografia:${u.slug}`,
    }));
  }
  if (serie === "8ano" && disc === "geografia") {
    return UNIDADES_8ANO.map((u) => ({
      slug: u.slug,
      titulo: u.titulo,
      habilidade: u.habilidade,
      concluidaKey: `fund2:8ano:geografia:${u.slug}`,
    }));
  }

  return [];
}


export const Route = createFileRoute("/escola-brilha/trilha-fund2/$serie/$disc")({
  head: ({ params }) => ({
    meta: [
      { title: `Trilha ${DISC_LABEL[params.disc] ?? params.disc} — ${SERIES_LABEL[params.serie] ?? params.serie}` },
      { name: "description", content: "Trilha visual acadêmica do Fundamental 2." },
    ],
  }),
  component: TrilhaFund2,
});

function TrilhaFund2() {
  const { serie, disc } = Route.useParams();
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const unidades = useMemo(() => loadUnidades(serie, disc), [serie, disc]);
  const [concluidas, setConcluidas] = useState<Set<string>>(new Set());
  const [modoLivre] = useState(true); // Fund2 é dashboard acadêmico: todas as unidades sempre navegáveis
  const [showDiploma, setShowDiploma] = useState(false);
  const rotaPlayer = playerRoute(serie, disc);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    void params;
    // hydrate progresso local
    const set = new Set<string>();
    for (const u of unidades) {
      if (window.localStorage.getItem(u.concluidaKey) === "1") set.add(u.slug);
    }
    setConcluidas(set);
  }, [unidades]);

  const totalConcluidas = unidades.filter((u) => concluidas.has(u.slug)).length;
  const proximoIdx = unidades.findIndex((u) => !concluidas.has(u.slug));
  const tudoConcluido = unidades.length > 0 && totalConcluidas >= unidades.length;
  const serieLabel = SERIES_LABEL[serie] ?? serie;
  const discLabel = DISC_LABEL[disc] ?? disc;

  return (
    <div
      className="min-h-screen text-slate-100"
      style={{
        background:
          "radial-gradient(ellipse at top, #0e2a4a 0%, #050b1a 55%, #020617 100%)",
      }}
    >
      <header className="sticky top-0 z-10 backdrop-blur bg-slate-950/70 border-b border-cyan-500/20">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/escola-brilha" className="text-xs text-cyan-300/80 hover:text-cyan-200 font-mono uppercase tracking-widest">
            ← Escola Brilha
          </Link>
          <div className="text-[10px] font-mono text-cyan-300/80 uppercase tracking-widest">
            {totalConcluidas} / {unidades.length} unidades
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 pb-4 flex items-center gap-3">
          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-500/30 to-indigo-600/30 border border-cyan-400/40 grid place-items-center text-2xl shadow-inner">
            🛰️
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-300">
              {serieLabel} · Fundamental 2
            </div>
            <h1 className="text-xl font-serif font-bold text-slate-100 leading-tight">
              Dashboard {discLabel}
            </h1>
            <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
              Trilha analítica · {unidades.length} unidades acadêmicas
            </p>
          </div>
        </div>
        {/* barra de progresso */}
        <div className="max-w-2xl mx-auto px-4 pb-3">
          <div className="h-1 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all"
              style={{
                width: unidades.length ? `${(totalConcluidas / unidades.length) * 100}%` : "0%",
              }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {unidades.length === 0 && (
          <div className="text-center border border-dashed border-cyan-500/30 rounded-xl p-8 text-slate-400 bg-slate-950/40">
            <div className="text-4xl mb-2">🚧</div>
            <p className="text-sm">
              As unidades de <strong className="text-cyan-300">{discLabel} — {serieLabel}</strong> estão em produção.
            </p>
            <p className="text-xs text-slate-500 mt-1">Em breve novas trilhas acadêmicas.</p>
          </div>
        )}

        {unidades.length > 0 && (
          <div className="relative space-y-8">
            {/* linha guia central */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500/40 via-cyan-500/10 to-transparent"
            />
            {unidades.map((u, i) => {
              const concluida = concluidas.has(u.slug);
              const desbloqueada = modoLivre || i === proximoIdx || concluida;
              const eProxima = i === proximoIdx && !concluida;
              const align = i % 2 === 0 ? "justify-start pl-2" : "justify-end pr-2";
              return (
                <div key={u.slug} className={`relative flex ${align}`}>
                  <button
                    disabled={!desbloqueada || !rotaPlayer}
                    onClick={() => {
                      if (!rotaPlayer) return;
                      // marca visita como concluída localmente (leve — só para trilha)
                      if (typeof window !== "undefined") {
                        window.localStorage.setItem(u.concluidaKey, "1");
                      }
                      navigate({ to: rotaPlayer, params: { unidade: u.slug } });
                    }}
                    className={`group relative w-44 rounded-2xl px-4 py-4 text-left transition border ${
                      desbloqueada
                        ? "bg-slate-900/80 border-cyan-500/40 text-slate-100 shadow-[0_0_30px_-10px_rgba(34,211,238,0.6)] hover:border-cyan-400 hover:-translate-y-0.5"
                        : "bg-slate-950/50 border-slate-800 text-slate-500 cursor-not-allowed"
                    } ${eProxima ? "ring-2 ring-amber-300/70 shadow-[0_0_35px_-8px_rgba(251,191,36,0.6)]" : ""}`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div
                        className={`h-8 w-8 rounded-lg grid place-items-center text-xs font-mono font-black ${
                          concluida
                            ? "bg-emerald-500 text-slate-950"
                            : desbloqueada
                            ? "bg-cyan-500 text-slate-950"
                            : "bg-slate-800 text-slate-500"
                        }`}
                      >
                        {concluida ? "✓" : String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="text-[9px] font-mono uppercase tracking-widest text-cyan-300/80 truncate">
                        {u.habilidade}
                      </div>
                    </div>
                    <div className="text-sm font-serif font-bold leading-tight line-clamp-3">
                      {u.titulo}
                    </div>
                    {eProxima && (
                      <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-amber-300">
                        ▸ Próxima missão
                      </div>
                    )}
                    {!desbloqueada && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-800 border border-slate-700 grid place-items-center text-slate-500 text-xs">
                        🔒
                      </div>
                    )}
                  </button>
                </div>
              );
            })}

            {/* Diploma final */}
            <section className="pt-8">
              <div className="text-center mb-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-300">
                  Certificação Final
                </div>
                <h2 className="text-xl font-serif font-bold mt-1">
                  🎓 Mestre em {discLabel} — {serieLabel}
                </h2>
              </div>
              <button
                type="button"
                disabled={!(modoLivre || tudoConcluido)}
                onClick={() => setShowDiploma(true)}
                className={`block w-full rounded-2xl p-6 text-center transition border ${
                  modoLivre || tudoConcluido
                    ? "bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 border-amber-300 text-slate-900 font-black shadow-2xl hover:scale-[1.01]"
                    : "bg-slate-900/60 border-dashed border-slate-700 text-slate-500 cursor-not-allowed"
                }`}
              >
                <div className="text-4xl mb-1">{modoLivre || tudoConcluido ? "🏅" : "🔒"}</div>
                <div className="text-base font-serif">
                  {modoLivre || tudoConcluido
                    ? "Emitir Certificado Acadêmico"
                    : "Trancado — conclua todas as unidades"}
                </div>
                {!(modoLivre || tudoConcluido) && (
                  <div className="mt-3 max-w-xs mx-auto">
                    <div className="bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-amber-400 transition-all"
                        style={{
                          width: `${Math.round((totalConcluidas / unidades.length) * 100)}%`,
                        }}
                      />
                    </div>
                    <div className="text-[10px] font-mono mt-1 uppercase tracking-widest">
                      {totalConcluidas} de {unidades.length} unidades
                    </div>
                  </div>
                )}
              </button>
            </section>
          </div>
        )}
      </main>

      {showDiploma && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 overflow-auto">
          <div className="max-w-3xl mx-auto p-4">
            <div className="flex justify-end mb-3">
              <button
                type="button"
                onClick={() => setShowDiploma(false)}
                className="text-cyan-300 hover:text-cyan-200 text-sm font-mono uppercase tracking-widest"
              >
                ← Voltar à trilha
              </button>
            </div>
            <CertificadoFund2
              nome={activeChild?.nome ?? "Estudante"}
              titulo={`Mestre em ${discLabel}`}
              disciplina={discLabel}
              ano={serieLabel}
            />
          </div>
        </div>
      )}
    </div>
  );
}
