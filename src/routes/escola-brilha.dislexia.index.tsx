import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { trilhaDislexia } from "@/escola-brilha/dislexia/registry";
import { Ear, BookOpen, CheckCircle2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/escola-brilha/dislexia/")({
  head: () => ({
    meta: [
      { title: "Trilha da Leitura · Orton-Gillingham — Neuro Brilha" },
      {
        name: "description",
        content:
          "Programa clínico multissensorial para dislexia. 8 fases, do som à leitura fluente, com Pip.",
      },
      { property: "og:title", content: "Trilha da Leitura · Orton-Gillingham" },
      {
        property: "og:description",
        content: "Programa clínico multissensorial para dislexia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DislexiaIndex,
});

// Metadata das fases (só as ativas têm aulas por enquanto)
const FASES: Record<
  number,
  { nome: string; icon: typeof Ear; color: string; bg: string; border: string; accent: string }
> = {
  1: {
    nome: "Fase 1 · Consciência Fonológica",
    icon: Ear,
    color: "text-orange-600",
    bg: "from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20",
    border: "border-orange-200 dark:border-orange-800",
    accent: "bg-orange-500",
  },
  2: {
    nome: "Fase 2 · Vogais + Correspondência",
    icon: BookOpen,
    color: "text-fuchsia-600",
    bg: "from-fuchsia-50 to-fuchsia-100/50 dark:from-fuchsia-950/30 dark:to-fuchsia-900/20",
    border: "border-fuchsia-200 dark:border-fuchsia-800",
    accent: "bg-fuchsia-500",
  },
};

function DislexiaIndex() {
  const trilha = trilhaDislexia;
  const concluidas = getConcluidas();

  // Agrupa aulas por fase mantendo a ordem
  const fases = new Map<number, typeof trilha.aulas>();
  for (const aula of trilha.aulas) {
    if (!fases.has(aula.fase)) fases.set(aula.fase, []);
    fases.get(aula.fase)!.push(aula);
  }

  return (
    <Shell>
      <div className="pb-8">
        {/* ── CABEÇALHO CLÍNICO ─────────────────────────────────── */}
        <div className="relative rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-5 shadow-xl">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 50%)",
            }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                Programa Clínico · Dislexia
              </span>
            </div>
            <h1 className="text-2xl font-black text-white">{trilha.titulo}</h1>
            <p className="text-sm text-slate-300 mt-1">{trilha.descricao}</p>
          </div>
        </div>

        {/* ── FASES (cada fase = um grupo, igual Neuro Treino) ── */}
        <div className="space-y-5">
          {Array.from(fases.entries()).map(([faseNum, aulas]) => {
            const cfg = FASES[faseNum];
            const Icon = cfg?.icon ?? Sparkles;
            return (
              <section
                key={faseNum}
                className={`rounded-3xl border ${cfg?.border ?? "border-border"} overflow-hidden shadow-sm`}
              >
                <div
                  className={`bg-gradient-to-r ${cfg?.bg ?? "from-muted to-muted/50"} px-4 py-3 flex items-center gap-2 border-b ${cfg?.border ?? "border-border"}`}
                >
                  <div className={cfg?.color ?? "text-primary"}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2
                      className={`font-black text-sm ${cfg?.color ?? "text-foreground"} uppercase tracking-wider`}
                    >
                      {cfg?.nome ?? `Fase ${faseNum}`}
                    </h2>
                    <div className="text-xs text-muted-foreground">
                      {aulas.length} aulas
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-card">
                  {aulas.map((aula) => {
                    const feita = concluidas.includes(aula.slug);
                    return (
                      <Link
                        key={aula.slug}
                        to="/escola-brilha/dislexia/$aula"
                        params={{ aula: aula.slug }}
                        className="group relative bg-background hover:bg-accent/30 border-2 border-border hover:border-primary/30 rounded-2xl p-2 flex flex-col items-center text-center transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                      >
                        <div className="absolute top-1.5 right-1.5">
                          <div
                            className={`w-5 h-5 rounded-full ${feita ? "bg-emerald-500" : cfg?.accent ?? "bg-primary"} flex items-center justify-center`}
                          >
                            {feita ? (
                              <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                            ) : (
                              <span className="text-[9px] font-black text-white">
                                {String(aula.numero).padStart(2, "0")}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="w-28 h-28 sm:w-32 sm:h-32 grid place-items-center rounded-2xl">
                          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-100 to-fuchsia-100 dark:from-orange-950/40 dark:to-fuchsia-950/40 grid place-items-center overflow-hidden p-2">
                            {getAulaImagem(aula) ? (
                              <img
                                src={getAulaImagem(aula)!}
                                alt={aula.titulo}
                                className="w-full h-full object-contain drop-shadow-md"
                                loading="lazy"
                              />
                            ) : (
                              <span className="text-5xl">
                                {aula.fone ? aula.fone.replaceAll("/", "") : "🎧"}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="mt-1 font-bold text-[11px] leading-tight text-foreground line-clamp-2">
                          {aula.titulo}
                        </div>
                        <div className="text-[9px] text-muted-foreground line-clamp-1 mt-0.5">
                          {aula.objetivo}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}

function getConcluidas(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("eb.dislexia.concluidas") ?? "[]");
  } catch {
    return [];
  }
}
