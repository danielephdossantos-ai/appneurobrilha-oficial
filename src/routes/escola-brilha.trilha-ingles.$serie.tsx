import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/core/store";
import { getLessonsBySerie } from "@/escola-brilha/ingles-lessons-index";
import { DiplomaBrilha } from "@/components/DiplomaBrilha";
import type { MascotePersonagem } from "@/escola-brilha/mascotes-personagens";

/**
 * Trilha visual estilo Duolingo para as aulas de Inglês.
 * Usa o registry LESSONS (não BNCC) — mesma UX das outras trilhas.
 */

const SERIES_LABEL: Record<string, string> = {
  "1ano": "1º Ano",
  "2ano": "2º Ano",
  "3ano": "3º Ano",
  "4ano": "4º Ano",
  "5ano": "5º Ano",
  "6ano": "6º Ano",
  "7ano": "7º Ano",
  "8ano": "8º Ano",
  "9ano": "9º Ano",
};

const MASCOTE = {
  slug: "ingles-ben",
  nome: "Ben",
  papel: "Professor de Inglês",
  personalidade: "amigável e curioso",
  imagem: "/placeholder.svg",
  corPrimaria: "#fde68a",
  corSecundaria: "#0ea5e9",
};

const TEMA = { emoji: "🇺🇸", nome: "Inglês" };

export const Route = createFileRoute("/escola-brilha/trilha-ingles/$serie")({
  head: ({ params }) => ({
    meta: [
      { title: `Trilha Inglês ${SERIES_LABEL[params.serie] ?? params.serie} — Escola Brilha` },
      { name: "description", content: "Trilha visual de aprendizagem de Inglês." },
    ],
  }),
  component: TrilhaIngles,
});

function TrilhaIngles() {
  const { serie } = Route.useParams();
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const [concluidas, setConcluidas] = useState<Set<string>>(new Set());
  const [modoLivre, setModoLivre] = useState(true);
  const [showDiploma, setShowDiploma] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setModoLivre(!params.has("aluno"));
  }, []);

  const aulas = useMemo(() => getLessonsBySerie(serie), [serie]);

  useEffect(() => {
    if (!activeChild?.id) return;
    (async () => {
      const { data } = await supabase
        .from("escola_progresso")
        .select("codigo_bncc, concluida")
        .eq("child_id", activeChild.id);
      const map = new Set<string>();
      for (const r of (data ?? []) as Array<{ codigo_bncc: string; concluida: boolean | null }>) {
        if (r.concluida) map.add(r.codigo_bncc.toUpperCase());
      }
      setConcluidas(map);
    })();
  }, [activeChild?.id]);

  const proximoIdx = aulas.findIndex((l) => !concluidas.has(l.slug.toUpperCase()));
  const totalConcluidas = aulas.filter((l) => concluidas.has(l.slug.toUpperCase())).length;
  const tudoConcluido = aulas.length > 0 && totalConcluidas >= aulas.length;
  const serieLabel = SERIES_LABEL[serie] ?? serie;

  const mascoteDiploma: MascotePersonagem = {
    id: MASCOTE.slug,
    nome: MASCOTE.nome,
    img: MASCOTE.imagem,
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ background: `linear-gradient(180deg, ${MASCOTE.corSecundaria}, #0a1642)` }}
    >
      <header className="sticky top-0 z-10 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/escola-brilha" className="text-sm text-white/70 hover:text-white">
            ← Escola Brilha
          </Link>
          <div className="text-xs text-white/60">
            {totalConcluidas} / {aulas.length} aulas
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 pb-4 flex items-center gap-3">
          <div className="h-16 w-16 rounded-2xl bg-white/10 grid place-items-center text-4xl">
            {TEMA.emoji}
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-300">
              {serieLabel} · {MASCOTE.papel}
            </div>
            <h1 className="text-2xl font-black">
              {TEMA.emoji} My First English Adventure
            </h1>
            <p className="text-xs text-white/70 mt-0.5">Com {MASCOTE.nome} — {MASCOTE.personalidade}.</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {aulas.length === 0 ? (
          <div className="text-center border border-dashed border-white/20 rounded-xl p-8 text-white/70">
            🚧 Ainda não temos aulas escritas. Volte em breve!
          </div>
        ) : (
          <div className="space-y-6">
            {aulas.map((l, i) => {
              const cod = l.slug.toUpperCase();
              const concluida = concluidas.has(cod);
              const desbloqueada = modoLivre || i === proximoIdx || concluida;
              const eProxima = i === proximoIdx && !concluida;
              const align = i % 2 === 0 ? "justify-start" : "justify-end";
              return (
                <div key={l.slug} className={`flex ${align}`}>
                  <button
                    disabled={!desbloqueada}
                    onClick={() =>
                      navigate({
                        to: "/escola-brilha/ingles-v1/$curso/$aula",
                        params: { curso: `ingles-${serie}`, aula: l.slug },
                      })
                    }
                    className={`group relative w-40 h-40 rounded-full grid place-items-center transition ${
                      desbloqueada
                        ? "text-[#0d1f55] shadow-xl hover:scale-105"
                        : "bg-white/10 text-white/40 cursor-not-allowed"
                    } ${eProxima ? "ring-4 ring-amber-300 animate-pulse" : ""}`}
                    style={
                      desbloqueada
                        ? {
                            background: `linear-gradient(135deg, ${MASCOTE.corPrimaria}, #fde68a)`,
                          }
                        : undefined
                    }
                  >
                    <div className="text-center px-3">
                      <div className="text-4xl">{TEMA.emoji}</div>
                      <div className="text-[11px] font-bold mt-1 leading-tight line-clamp-3">
                        {l.meta.coverTitle || l.meta.unitLabel}
                      </div>
                    </div>
                    {concluida && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 grid place-items-center text-white text-lg">
                        ✓
                      </div>
                    )}
                    {!desbloqueada && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/20 grid place-items-center">
                        🔒
                      </div>
                    )}
                  </button>
                </div>
              );
            })}

            <section className="pt-6">
              <div className="text-center mb-4">
                <div className="text-xs uppercase text-amber-300 tracking-widest">
                  Grande Conquista
                </div>
                <h2 className="text-2xl font-black">🎓 Diploma de Inglês</h2>
              </div>
              <button
                type="button"
                disabled={!(modoLivre || tudoConcluido)}
                onClick={() => setShowDiploma(true)}
                className={`block w-full rounded-2xl p-6 text-center transition ${
                  modoLivre || tudoConcluido
                    ? "bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 text-[#1a0d3d] font-black shadow-2xl hover:scale-[1.02]"
                    : "bg-white/5 text-white/50 border border-dashed border-white/20 cursor-not-allowed"
                }`}
              >
                <div className="text-5xl mb-2">{modoLivre || tudoConcluido ? "🏅" : "🔒"}</div>
                <div className="text-lg">
                  {modoLivre || tudoConcluido
                    ? `Ver meu Diploma com ${MASCOTE.nome}!`
                    : "Trancado — termine todas as aulas pra ganhar"}
                </div>
                {!(modoLivre || tudoConcluido) && (
                  <div className="mt-3 max-w-xs mx-auto">
                    <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-amber-400 transition-all"
                        style={{
                          width: `${Math.round((totalConcluidas / aulas.length) * 100)}%`,
                        }}
                      />
                    </div>
                    <div className="text-xs mt-1">
                      {totalConcluidas} de {aulas.length} aulas
                    </div>
                  </div>
                )}
              </button>
            </section>
          </div>
        )}
      </main>

      {showDiploma && (
        <DiplomaBrilha
          aluno={activeChild?.nome ?? "Pequeno Explorador"}
          titulo="Inglês"
          curso={`Inglês — ${serieLabel}`}
          descricao={`Por concluir todas as aulas de Inglês do ${serieLabel} ao lado de ${MASCOTE.nome}, com muita curiosidade e coragem.`}
          mascote={mascoteDiploma}
          onFechar={() => setShowDiploma(false)}
        />
      )}
    </div>
  );
}
