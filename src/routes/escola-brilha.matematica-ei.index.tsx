import { createFileRoute, Link } from "@tanstack/react-router";
import { cursosMatematicaEI } from "@/escola-brilha/curso-matematica-ei/registry";
import { useAppState } from "@/core/store";

export const Route = createFileRoute("/escola-brilha/matematica-ei/")({
  head: () => ({
    meta: [
      { title: "Códice de Matemática — Educação Infantil" },
      {
        name: "description",
        content:
          "Trilha de matemática para Maternal, Pré I e Pré II. Contagem, formas, cores e comparação por percepção.",
      },
      { property: "og:title", content: "Códice de Matemática — Educação Infantil" },
      {
        property: "og:description",
        content: "Matemática lúdica pra crianças de 3 a 5 anos.",
      },
    ],
  }),
  component: TrilhaMatematicaEI,
});

function TrilhaMatematicaEI() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Link to="/" className="text-white/80 text-sm">◂ Voltar</Link>
        <header className="text-center mt-3 mb-6">
          <p className="text-yellow-300 font-bold text-xs tracking-wider">
            EDUCAÇÃO INFANTIL · BNCC
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-2">
            Códice da Matemática
          </h1>
          <p className="text-white/80 mt-2 text-sm max-w-xl mx-auto">
            Contar, comparar, ver formas e cores — a base que a criança usa a vida inteira.
          </p>
        </header>

        <div className="grid gap-6">
          {cursosMatematicaEI.map((curso) => {
            const total = curso.unidades.reduce((a, u) => a + u.aulas.length, 0);
            const concluidas = readList(curso.slug, childId);
            const feitas = concluidas.length;
            const completo = feitas >= total && total > 0;
            const aulasFlat = curso.unidades.flatMap((u) => u.aulas.map((a) => ({ aula: a, unidade: u })));

            return (
              <div
                key={curso.slug}
                className="rounded-3xl p-5 shadow-xl border-2 border-white/15"
                style={{
                  background: `linear-gradient(160deg, ${curso.corSecundaria}, ${curso.corPrimaria})`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 grid place-items-center overflow-hidden shrink-0">
                    <img src={curso.mascoteUrl} alt="" className="w-14 h-14 object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-white/80 font-black">
                      {curso.serieLabel}
                    </p>
                    <h3 className="text-lg font-black leading-tight">{curso.titulo}</h3>
                    <p className="text-[11px] text-white/85 mt-0.5">
                      {feitas}/{total} aulas · {completo ? "concluído ✓" : `${curso.unidades.length} unidade(s)`}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-3xl bg-black/25 p-4">
                  <div className="space-y-2">
                    {curso.unidades.map((u) => (
                      <div key={u.slug} className="pt-3">
                        <div className="text-center mb-3">
                          <div className="inline-block bg-black/40 rounded-full px-4 py-1 text-xs uppercase tracking-wider font-bold text-yellow-300">
                            Unidade {u.numero ?? ""}
                          </div>
                          <div className="text-sm font-bold mt-1">{u.titulo}</div>
                        </div>
                        <div className="space-y-4">
                          {u.aulas.map((a, i) => {
                            const flatIdx = aulasFlat.findIndex((x) => x.aula.slug === a.slug);
                            const align = flatIdx % 2 === 0 ? "justify-start" : "justify-end";
                            const feito = concluidas.includes(a.slug);
                            return (
                              <div key={a.slug} className={`flex ${align} px-6`}>
                                <Link
                                  to="/escola-brilha/matematica-ei/$serie/$aula"
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
                                    <div className="text-[9px] opacity-70 mt-0.5">Aula {i + 1}</div>
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
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-white/60 text-center mt-6">
          Próximas semanas e níveis (Pré I e Pré II) chegam em breve.
        </p>
      </div>
    </div>
  );
}

function storageKey(cursoSlug: string, childId: string | null) {
  return `eb.ei.mat.concluidas.${cursoSlug}${childId ? "." + childId : ""}`;
}

function readList(cursoSlug: string, childId: string | null): string[] {
  try {
    if (typeof window === "undefined") return [];
    const raw =
      localStorage.getItem(storageKey(cursoSlug, childId)) ??
      localStorage.getItem(`eb.ei.mat.concluidas.${cursoSlug}`);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}
