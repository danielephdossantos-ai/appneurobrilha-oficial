import { createFileRoute, Link } from "@tanstack/react-router";
import { cursoLerComAurora } from "@/escola-brilha/curso-ler-com-aurora/aulas";

/**
 * Trilha Duolingo do curso "Ler com Aurora — Fase 1".
 * 20 missões destravadas (modo teste), agrupadas por semana.
 * Mostra streak diário salvo em localStorage.
 */
export const Route = createFileRoute("/escola-brilha/ler-com-aurora/")({
  head: () => ({
    meta: [
      { title: "Ler com Aurora — Fase 1 · Escola Brilha" },
      {
        name: "description",
        content:
          "20 missões diárias de 15 minutos que ensinam consciência fonológica — a base científica da leitura. Para Pré II e 1º Ano.",
      },
    ],
  }),
  component: TrilhaLerComAurora,
});

function loadConcluidas(): Set<string> {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem("eb.ler-aurora.concluidas") : null;
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function TrilhaLerComAurora() {
  const c = cursoLerComAurora;
  const concluidas = loadConcluidas();
  const aulasFlat = c.unidades.flatMap((u) => u.aulas);
  const total = aulasFlat.length;
  const feitas = aulasFlat.filter((a) => concluidas.has(a.slug)).length;
  const progresso = Math.round((feitas / total) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500 via-orange-600 to-purple-800 text-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Link to="/" className="text-white/80 text-sm">◂ Voltar</Link>

        <header className="text-center mt-3 mb-6">
          <p className="text-yellow-200 font-bold text-xs tracking-wider">
            CURSO ESPECIAL · CIÊNCIA DA LEITURA
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-1">Ler com Aurora</h1>
          <p className="text-yellow-100 text-sm mt-1">Fase 1 · Consciência Fonológica</p>
          <p className="text-white/80 text-sm mt-3 max-w-xl mx-auto">
            {c.descricao}
          </p>
        </header>

        <div className="rounded-2xl bg-black/30 backdrop-blur p-4 mb-6">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span>Progresso</span>
            <span>{feitas} / {total} missões</span>
          </div>
          <div className="h-3 rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-300 to-lime-400"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>

        <div className="rounded-2xl bg-amber-300/90 text-amber-950 px-4 py-2 text-xs font-bold text-center mb-6">
          🔓 Modo teste: todas as 20 missões destravadas
        </div>

        <div className="space-y-6">
          {c.unidades.map((u) => (
            <div key={u.slug}>
              <div className="text-center mb-3">
                <div className="inline-block bg-black/40 rounded-full px-4 py-1 text-[11px] uppercase tracking-wider font-bold text-yellow-300">
                  {u.titulo}
                </div>
                <div className="text-xs text-white/80 mt-1 italic">
                  Medalha: {u.subtitulo}
                </div>
              </div>

              <div className="space-y-4">
                {u.aulas.map((a, i) => {
                  const flatIdx = aulasFlat.findIndex((x) => x.slug === a.slug);
                  const align = flatIdx % 2 === 0 ? "justify-start" : "justify-end";
                  const feito = concluidas.has(a.slug);
                  return (
                    <div key={a.slug} className={`flex ${align} px-6`}>
                      <Link
                        to="/escola-brilha/ler-com-aurora/$aula"
                        params={{ aula: a.slug }}
                        className="group relative w-32 h-32 rounded-full grid place-items-center shadow-xl active:scale-95 transition"
                        style={{
                          background: `linear-gradient(135deg, ${c.corPrimaria}, #fde68a)`,
                          color: c.corSecundaria,
                        }}
                      >
                        <div className="text-center px-2">
                          <div className="text-3xl">{a.icone}</div>
                          <div className="text-[10px] font-black mt-1 leading-tight line-clamp-3">
                            {a.titulo}
                          </div>
                          <div className="text-[9px] opacity-70 mt-0.5">
                            Missão {flatIdx + 1}/20
                          </div>
                        </div>
                        {feito && (
                          <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 grid place-items-center text-white text-sm">
                            ✓
                          </div>
                        )}
                        {i === 0 && flatIdx === 0 && !feito && (
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] bg-lime-400 text-emerald-950 rounded-full px-2 py-0.5 font-black shadow">
                            COMECE AQUI
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

        <div className="mt-10 rounded-2xl bg-black/30 p-4 text-xs text-white/80">
          <p className="font-bold text-yellow-200 mb-1">📚 Sobre esta fase</p>
          <p>
            Baseado em Heggerty, PNA-MEC (2019) e National Reading Panel. A
            criança aprende a <b>ouvir</b> os sons da língua — pré-requisito
            científico para decifrar letras. Ao completar as 20 missões, ela
            está pronta para a <b>Fase 2 — Ver as letras</b>.
          </p>
        </div>
      </div>
    </div>
  );
}
