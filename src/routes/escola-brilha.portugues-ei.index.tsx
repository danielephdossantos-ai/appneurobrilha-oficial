import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { cursosEI } from "@/escola-brilha/curso-portugues-ei/registry";
import type { CursoEI } from "@/escola-brilha/curso-portugues-ei/types";

/**
 * Trilha do Códice de Português - Educação Infantil.
 * Mostra 3 séries (Maternal, Pré I, Pré II). Ao selecionar uma série,
 * abre trilha estilo Duolingo com TODAS as aulas para teste/acesso livre.
 */
export const Route = createFileRoute("/escola-brilha/portugues-ei/")({
  head: () => ({
    meta: [
      { title: "Códice de Português — Educação Infantil" },
      {
        name: "description",
        content:
          "Trilhas de língua portuguesa para Maternal, Pré I e Pré II. Escuta, ritmo, oralidade e imaginação (BNCC).",
      },
    ],
  }),
  component: TrilhaEIPortugues,
});

function TrilhaEIPortugues() {
  const [serieAberta, setSerieAberta] = useState<string | null>(null);
  const cursoAtivo = cursosEI.find((c) => c.slug === serieAberta) ?? null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-fuchsia-900 to-pink-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="text-white/80 text-sm">
          ◂ Voltar
        </Link>
        <header className="text-center mt-3 mb-8">
          <p className="text-yellow-300 font-bold text-sm tracking-wider">
            EDUCAÇÃO INFANTIL · BNCC
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-2">
            Códice de Língua Portuguesa
          </h1>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            Escutar, falar, brincar com sons e imaginar. Três trilhas que
            crescem com a criança.
          </p>
        </header>

        {!cursoAtivo && (
          <div className="grid gap-5 sm:grid-cols-3">
            {cursosEI.map((c) => {
              const totalAulas = c.unidades.reduce((a, u) => a + u.aulas.length, 0);
              return (
                <button
                  key={c.slug}
                  onClick={() => setSerieAberta(c.slug)}
                  className="rounded-3xl p-5 shadow-xl border-2 border-white/20 text-left active:scale-95 transition"
                  style={{
                    background: `linear-gradient(160deg, ${c.corSecundaria}, ${c.corPrimaria})`,
                  }}
                >
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-white/10 grid place-items-center overflow-hidden">
                      <img src={c.mascoteUrl} alt="mascote" className="w-20 h-20 object-contain" />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-wider text-white/80 font-bold">
                      {c.serieLabel}
                    </p>
                    <h2 className="text-xl font-black mt-1">{c.titulo}</h2>
                    <p className="text-white/80 text-sm mt-2 min-h-[60px]">
                      {c.descricao}
                    </p>
                    <div className="mt-3 inline-block bg-black/30 rounded-full px-3 py-1 text-xs font-bold">
                      {totalAulas} aulas · Abrir trilha ▶
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {cursoAtivo && (
          <TrilhaSerie curso={cursoAtivo} onVoltar={() => setSerieAberta(null)} />
        )}
      </div>
    </div>
  );
}

function TrilhaSerie({ curso, onVoltar }: { curso: CursoEI; onVoltar: () => void }) {
  const key = `eb.ei.pt.concluidas.${curso.slug}`;
  const concluidas = new Set<string>(
    (() => {
      try {
        const raw = typeof window !== "undefined" ? localStorage.getItem(key) : null;
        return raw ? (JSON.parse(raw) as string[]) : [];
      } catch {
        return [];
      }
    })(),
  );

  // Achatar todas as aulas mantendo ordem + numeração global
  const aulasFlat = curso.unidades.flatMap((u) =>
    u.aulas.map((a) => ({ aula: a, unidade: u })),
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onVoltar}
          className="text-white/80 text-sm bg-black/30 rounded-full px-3 py-1"
        >
          ◂ Trocar série
        </button>
        <div className="text-right">
          <div className="text-xs text-white/70">{curso.serieLabel}</div>
          <div className="text-lg font-black">{curso.titulo}</div>
        </div>
        <img
          src={curso.mascoteUrl}
          alt={curso.titulo}
          className="w-14 h-14 object-contain"
        />
      </div>

      <div className="rounded-2xl bg-amber-300/90 text-amber-950 px-4 py-2 text-xs font-bold text-center mb-6">
        🔓 Modo teste: todas as aulas destravadas
      </div>

      <div className="space-y-2">
        {curso.unidades.map((u) => (
          <div key={u.slug} className="pt-4">
            <div className="text-center mb-3">
              <div className="inline-block bg-black/40 rounded-full px-4 py-1 text-xs uppercase tracking-wider font-bold text-yellow-300">
                Unidade {u.numero}
              </div>
              <div className="text-sm font-bold mt-1">{u.titulo}</div>
            </div>
            <div className="space-y-4">
              {u.aulas.map((a, i) => {
                const flatIdx = aulasFlat.findIndex((x) => x.aula.slug === a.slug);
                const align = flatIdx % 2 === 0 ? "justify-start" : "justify-end";
                const feito = concluidas.has(a.slug);
                return (
                  <div key={a.slug} className={`flex ${align} px-6`}>
                    <Link
                      to="/escola-brilha/portugues-ei/$serie/$aula"
                      params={{ serie: curso.serie, aula: a.slug }}
                      className="group relative w-32 h-32 rounded-full grid place-items-center shadow-xl active:scale-95 transition"
                      style={{
                        background: `linear-gradient(135deg, ${curso.corPrimaria}, #fde68a)`,
                        color: curso.corSecundaria,
                      }}
                    >
                      <div className="text-center px-2">
                        <div className="text-3xl">{a.icone}</div>
                        <div className="text-[10px] font-black mt-1 leading-tight line-clamp-3">
                          {a.titulo}
                        </div>
                        <div className="text-[9px] opacity-70 mt-0.5">
                          Aula {i + 1}
                        </div>
                      </div>
                      {feito && (
                        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 grid place-items-center text-white text-sm">
                          ✓
                        </div>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
