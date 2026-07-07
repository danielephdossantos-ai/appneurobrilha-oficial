import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getCurso, listAulasFlat } from "@/escola-brilha/curso-v4/registry";

/**
 * Trilha do Curso v4.1 — estilo Duolingo.
 * Aluno vê o mapa completo (motivação), mas só a próxima aula fica
 * desbloqueada. Progresso mora em localStorage por enquanto (depois
 * vai pro Supabase quando a estrutura estabilizar).
 *
 * Modo revisão: adicionar ?livre=1 na URL destrava tudo (para você e
 * eu revisarmos sem precisar "jogar" as anteriores).
 */
export const Route = createFileRoute("/escola-brilha/curso/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Curso ${params.slug} — Escola Brilha` },
      { name: "description", content: "Trilha de aprendizagem gamificada." },
    ],
  }),
  component: TrilhaCurso,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-white bg-[#0d1f55]">
      Curso não encontrado.
    </div>
  ),
});

const CHAVE_PROGRESSO = (slug: string) => `eb.v4.progresso.${slug}`;

function TrilhaCurso() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const curso = getCurso(slug);
  const aulas = listAulasFlat(slug);
  const [concluidas, setConcluidas] = useState<Set<string>>(new Set());
  // Admin/testador: TODAS as aulas ficam destravadas por padrão.
  // Pra simular experiência real do aluno, adicione ?aluno=1 na URL.
  const [modoLivre, setModoLivre] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    // aluno=1 força fluxo travado; caso contrário admin fica sempre livre
    setModoLivre(!params.has("aluno"));
    try {
      const raw = localStorage.getItem(CHAVE_PROGRESSO(slug));
      if (raw) setConcluidas(new Set(JSON.parse(raw)));
    } catch {
      /* ignore */
    }
  }, [slug]);

  if (!curso) {
    return (
      <div className="min-h-screen grid place-items-center text-white bg-[#0d1f55]">
        Curso não encontrado.
      </div>
    );
  }

  const proximoIdx = aulas.findIndex((a) => !concluidas.has(a.slug));

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: `linear-gradient(180deg, ${curso.corSecundaria}, #0a1642)`,
      }}
    >
      <header className="sticky top-0 z-10 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/escola-brilha" className="text-sm text-white/70 hover:text-white">
            ← Escola Brilha
          </Link>
          <div className="text-xs text-white/60">
            {concluidas.size} / {aulas.length} aulas
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 pb-4">
          <div className="text-xs uppercase tracking-wider text-amber-300">
            {curso.disciplina} · {curso.ano}
          </div>
          <h1 className="text-3xl font-black">{curso.titulo}</h1>
          <p className="text-sm text-white/70 mt-1">{curso.descricao}</p>
          {modoLivre && (
            <div className="mt-3 inline-block bg-amber-400 text-[#0d1f55] text-xs font-bold px-3 py-1 rounded-full">
              🔓 Modo admin — todas as aulas destravadas (use ?aluno=1 pra simular aluno)
            </div>
          )}
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-10">
        {curso.unidades.map((u) => (
          <section key={u.slug}>
            <div className="text-center mb-6">
              <div className="text-xs uppercase text-white/50">Unidade {u.numero}</div>
              <h2 className="text-2xl font-bold" style={{ color: u.corTema }}>
                {u.titulo}
              </h2>
              <div className="text-sm text-white/60">{u.subtitulo}</div>
            </div>

            {u.aulas.length === 0 && (
              <div className="text-center text-white/50 py-8 border border-dashed border-white/20 rounded-xl">
                🚧 Aulas em produção. Volte em breve!
              </div>
            )}

            <div className="space-y-6">
              {u.aulas.map((a, i) => {
                const flatIdx = aulas.findIndex((x) => x.slug === a.slug);
                const concluida = concluidas.has(a.slug);
                const desbloqueada = modoLivre || flatIdx === proximoIdx || concluida;
                const eProxima = flatIdx === proximoIdx && !concluida;
                const align = i % 2 === 0 ? "justify-start" : "justify-end";
                return (
                  <div key={a.slug} className={`flex ${align}`}>
                    <button
                      disabled={!desbloqueada}
                      onClick={() =>
                        navigate({
                          to: "/escola-brilha/aula-v4/$curso/$aula",
                          params: { curso: slug, aula: a.slug },
                          search: modoLivre ? { livre: "1" } : undefined,
                        })
                      }
                      className={`group relative w-40 h-40 rounded-full grid place-items-center transition ${
                        desbloqueada
                          ? "bg-gradient-to-br from-amber-300 to-amber-500 text-[#0d1f55] shadow-xl hover:scale-105"
                          : "bg-white/10 text-white/40 cursor-not-allowed"
                      } ${eProxima ? "ring-4 ring-amber-300 animate-pulse" : ""}`}
                    >
                      <div className="text-center px-3">
                        <div className="text-4xl">{a.iconeTrilha}</div>
                        <div className="text-xs font-bold mt-1 leading-tight">
                          {a.titulo}
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
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
