import { createFileRoute, Link } from "@tanstack/react-router";
import { cursosEI } from "@/escola-brilha/curso-portugues-ei/registry";

/**
 * Trilha inicial do Códice de Português - Educação Infantil.
 * Mostra as 3 séries (Maternal, Pré I, Pré II) como cards gigantes.
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

        <div className="grid gap-5 sm:grid-cols-3">
          {cursosEI.map((c) => {
            const aula = c.unidades[0]?.aulas[0];
            return (
              <div
                key={c.slug}
                className="rounded-3xl p-5 shadow-xl border-2 border-white/20"
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
                </div>

                <div className="mt-4 rounded-2xl bg-black/30 p-3">
                  <p className="text-xs text-white/70 mb-1">
                    Unidade 1 · {c.unidades[0]?.titulo}
                  </p>
                  {aula && (
                    <Link
                      to="/escola-brilha/portugues-ei/$serie/$aula"
                      params={{ serie: c.serie, aula: aula.slug }}
                      className="mt-2 flex items-center justify-between rounded-xl bg-white text-slate-800 px-3 py-2 font-bold active:scale-95 transition"
                    >
                      <span>
                        {aula.icone} {aula.titulo}
                      </span>
                      <span className="text-purple-600">▶</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
