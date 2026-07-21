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
          "Trilhas de matemática para Maternal, Pré I e Pré II. Contagem, formas, cores e comparação por percepção.",
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

        <div className="grid gap-4">
          {cursosMatematicaEI.map((curso) => {
            const total = curso.unidades.reduce((a, u) => a + u.aulas.length, 0);
            const concluidas = countConcluidas(curso.slug, childId);
            const completo = concluidas >= total && total > 0;
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
                      {concluidas}/{total} aulas · {completo ? "concluído ✓" : `${curso.unidades.length} semana(s)`}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2">
                  {curso.unidades.map((u) => (
                    <div key={u.slug}>
                      <div className="text-center my-2">
                        <div className="inline-block bg-black/30 rounded-full px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-yellow-300">
                          {u.titulo}
                        </div>
                      </div>
                      <div className="grid gap-2">
                        {u.aulas.map((a) => {
                          const feito = concluidas > 0 && isConcluida(curso.slug, childId, a.slug);
                          return (
                            <Link
                              key={a.slug}
                              to="/escola-brilha/matematica-ei/$serie/$aula"
                              params={{ serie: curso.serie, aula: a.slug }}
                              className="flex items-center gap-3 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-3 active:scale-[0.98] transition"
                            >
                              <div className="text-2xl">{a.icone}</div>
                              <div className="flex-1 min-w-0">
                                <div className="font-black text-sm leading-tight">{a.titulo}</div>
                                <div className="text-[10px] text-white/70">
                                  {a.duracaoMin} min · {a.bncc.join(" · ")}
                                </div>
                              </div>
                              <div className="shrink-0 text-white/80">
                                {feito ? "✓" : "▸"}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
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

function countConcluidas(cursoSlug: string, childId: string | null): number {
  return readList(cursoSlug, childId).length;
}

function isConcluida(cursoSlug: string, childId: string | null, aulaSlug: string): boolean {
  return readList(cursoSlug, childId).includes(aulaSlug);
}
