import { createFileRoute, Link } from "@tanstack/react-router";
import { cursosInglesEI } from "@/escola-brilha/curso-ingles-ei/registry";

/**
 * Índice do Inglês EI — versão inicial simples.
 * Semana 1 do Maternal já está no ar; demais semanas/séries entram sob
 * demanda para revisão cena por cena.
 */
export const Route = createFileRoute("/escola-brilha/ingles-ei/")({
  head: () => ({
    meta: [
      { title: "Inglês EI — Escola Brilha" },
      {
        name: "description",
        content: "Trilha de inglês oral para 3 a 6 anos com música, imitação e brincadeira.",
      },
    ],
  }),
  component: IndiceInglesEI,
});

function IndiceInglesEI() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-fuchsia-900 to-pink-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Link to="/" className="text-white/80 text-sm">◂ Voltar</Link>
        <header className="text-center mt-3 mb-6">
          <p className="text-yellow-300 font-bold text-xs tracking-wider">
            EDUCAÇÃO INFANTIL · MÉTODO SPEB
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-2">My First English</h1>
          <p className="text-white/80 mt-2 text-sm max-w-xl mx-auto">
            Ouvir, imitar, brincar. Sem leitura — só oralidade e imagens.
          </p>
        </header>

        <div className="grid gap-4">
          {cursosInglesEI.map((curso) => {
            const total = curso.unidades.reduce((a, u) => a + u.aulas.length, 0);
            return (
              <div
                key={curso.slug}
                className="rounded-3xl p-5 shadow-xl border-2 border-white/15"
                style={{
                  background: `linear-gradient(160deg, ${curso.corSecundaria}, ${curso.corPrimaria})`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 grid place-items-center overflow-hidden shrink-0">
                    <img src={curso.mascoteUrl} alt="" className="w-14 h-14 object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-white/90 font-black">
                      {curso.serieLabel}
                    </p>
                    <h2 className="text-xl font-black leading-tight">{curso.titulo}</h2>
                    <p className="text-[11px] text-white/85 mt-0.5">
                      {total} aulas · {curso.unidades.length} semana(s)
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {curso.unidades.map((u) => (
                    <div key={u.slug} className="rounded-2xl bg-black/25 p-3">
                      <div className="text-[10px] uppercase tracking-wider font-black text-yellow-300">
                        {u.titulo}
                      </div>
                      {u.subtitulo && (
                        <div className="text-xs text-white/80 mt-0.5">{u.subtitulo}</div>
                      )}
                      <div className="mt-3 grid gap-2">
                        {u.aulas.map((a, i) => (
                          <Link
                            key={a.slug}
                            to="/escola-brilha/ingles-ei/$serie/$aula"
                            params={{ serie: curso.serie, aula: a.slug }}
                            className="flex items-center gap-3 rounded-xl bg-white/15 hover:bg-white/25 px-3 py-2 transition"
                          >
                            <span className="text-2xl">{a.icone ?? "🎧"}</span>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-black">
                                Dia {i + 1} · {a.titulo}
                              </div>
                              {a.subtitulo && (
                                <div className="text-[11px] text-white/80">{a.subtitulo}</div>
                              )}
                            </div>
                            <span className="text-lg">▸</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-white/60">
          Semana 1 do Maternal disponível. Semanas 2–4 e Pré I / Pré II entram após validação cena por cena.
        </p>
      </div>
    </div>
  );
}
