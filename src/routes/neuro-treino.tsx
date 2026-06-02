import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { Component, ReactNode, useMemo } from "react";
import { AlertCircle, Coffee, Sparkles, Lock, Star } from "lucide-react";
import { useAppState } from "@/core/store";
import { useNeuroAdaptive } from "@/hooks/useNeuroAdaptive";
import { CATEGORIAS, GRUPOS, VARIATIONS, type CategoriaSlug } from "@/data/neuro-treino/variations";
import { useHiperfoco } from "@/context/HiperfocoContext";
import LiveMascot from "@/components/ui/KidLiveMascot";
import { cn } from "@/utils/utils";

class NeuroTreinoErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: any) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error: Error) { return { hasError: true, error }; }
  componentDidCatch(error: Error, errorInfo: any) { console.error("NeuroTreinoErrorBoundary:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <Shell>
          <div className="flex flex-col items-center justify-center p-8 text-center bg-destructive/5 rounded-3xl border-2 border-dashed border-destructive/20">
            <AlertCircle className="h-16 w-16 text-destructive mb-4" />
            <h2 className="text-2xl font-bold text-destructive">Erro no Neuro-Treino</h2>
            <p className="text-muted-foreground mt-2 mb-6"><b>Erro:</b> {this.state.error?.message}</p>
          </div>
        </Shell>
      );
    }
    return this.props.children;
  }
}

export const Route = createFileRoute("/neuro-treino")({
  component: () => (
    <NeuroTreinoErrorBoundary>
      <NeuroTreinoShell />
    </NeuroTreinoErrorBoundary>
  ),
});

function NeuroTreinoShell() {
  const location = useLocation();
  return location.pathname === "/neuro-treino" ? <Treino /> : <Outlet />;
}

// ============== MUNDOS (cenários vivos por hiperfoco) ==============

type WorldKey = "dinossauros" | "minecraft" | "carros" | "fazendinha" | "espaco" | "animais" | "herois" | "default";

function mapHiperfocoToWorld(label?: string | null): WorldKey {
  if (!label) return "default";
  const l = label.toLowerCase();
  if (l.includes("dino")) return "dinossauros";
  if (l.includes("minecraft") || l.includes("bloco")) return "minecraft";
  if (l.includes("carro") || l.includes("auto") || l.includes("veíc") || l.includes("veic") || l.includes("trem") || l.includes("pista")) return "carros";
  if (l.includes("fazend") || l.includes("campo")) return "fazendinha";
  if (l.includes("espac") || l.includes("espaç") || l.includes("galá") || l.includes("gala") || l.includes("astro")) return "espaco";
  if (l.includes("animal") || l.includes("bicho")) return "animais";
  if (l.includes("her") || l.includes("super")) return "herois";
  return "default";
}

const WORLD_THEME: Record<WorldKey, { gradient: string; trail: string; accent: string; name: string }> = {
  dinossauros: { gradient: "from-emerald-900 via-emerald-700 to-amber-600", trail: "decoration-amber-300", accent: "ring-amber-300/60", name: "Mundo Jurassic" },
  minecraft:   { gradient: "from-sky-700 via-emerald-600 to-stone-600",    trail: "decoration-stone-200", accent: "ring-emerald-300/60", name: "Mundo Bloco" },
  carros:      { gradient: "from-slate-800 via-slate-700 to-orange-500",   trail: "decoration-yellow-300", accent: "ring-orange-300/60", name: "Mundo Pista" },
  fazendinha:  { gradient: "from-amber-200 via-lime-300 to-green-500",     trail: "decoration-amber-700", accent: "ring-lime-400/60",    name: "Mundo Campo" },
  espaco:      { gradient: "from-indigo-950 via-purple-900 to-fuchsia-700",trail: "decoration-fuchsia-300",accent: "ring-fuchsia-300/60", name: "Mundo Galáctico" },
  animais:     { gradient: "from-amber-400 via-orange-400 to-rose-400",    trail: "decoration-white",     accent: "ring-amber-300/60",   name: "Mundo Safári" },
  herois:      { gradient: "from-red-700 via-blue-700 to-yellow-400",      trail: "decoration-yellow-200",accent: "ring-yellow-300/60",  name: "Mundo Heróis" },
  default:     { gradient: "from-sky-400 via-violet-400 to-pink-400",      trail: "decoration-white",     accent: "ring-white/60",       name: "Mundo Personalizado" },
};

function WorldBackground({ world }: { world: WorldKey }) {
  const theme = WORLD_THEME[world];

  return (
    <div className={cn("absolute inset-0 -z-10 bg-gradient-to-br overflow-hidden", theme.gradient)}>
      {/* Camadas decorativas por mundo */}
      {world === "dinossauros" && (
        <>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-emerald-950/80 to-transparent" />
          <div className="absolute bottom-4 left-10 text-7xl animate-[float_6s_ease-in-out_infinite] drop-shadow-2xl">🦕</div>
          <div className="absolute bottom-10 right-12 text-6xl animate-[float_8s_ease-in-out_infinite] drop-shadow-2xl" style={{ animationDelay: "1.5s" }}>🦖</div>
          <div className="absolute top-16 right-1/4 text-4xl animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: "0.8s" }}>🌴</div>
          <div className="absolute top-1/3 left-8 text-5xl animate-[float_7s_ease-in-out_infinite]">🌋</div>
        </>
      )}
      {world === "minecraft" && (
        <>
          <div className="absolute top-8 left-10 w-24 h-12 bg-white/80 rounded-sm animate-[drift_30s_linear_infinite]" />
          <div className="absolute top-20 right-1/4 w-32 h-14 bg-white/70 rounded-sm animate-[drift_45s_linear_infinite]" style={{ animationDelay: "5s" }} />
          <div className="absolute top-40 left-1/3 w-20 h-10 bg-white/60 rounded-sm animate-[drift_60s_linear_infinite]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-[repeating-linear-gradient(90deg,#3b8a3b_0_48px,#2f6f2f_48px_96px)]" />
          <div className="absolute bottom-32 left-1/4 text-5xl">🧱</div>
          <div className="absolute bottom-24 right-1/3 text-5xl">🟩</div>
        </>
      )}
      {world === "carros" && (
        <>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-slate-900" />
          <div className="absolute bottom-20 left-0 right-0 h-2 bg-[repeating-linear-gradient(90deg,#facc15_0_40px,transparent_40px_80px)]" />
          <div className="absolute bottom-28 left-0 text-5xl animate-[zoom_6s_linear_infinite]">🏎️</div>
          <div className="absolute bottom-8 left-0 text-4xl animate-[zoom_9s_linear_infinite]" style={{ animationDelay: "2s" }}>🚗</div>
          <div className="absolute top-10 right-10 text-5xl">🏁</div>
        </>
      )}
      {world === "fazendinha" && (
        <>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-700/80 to-transparent" />
          <div className="absolute top-10 right-16 text-7xl animate-[spin_12s_linear_infinite] drop-shadow-xl">🌾</div>
          <div className="absolute bottom-6 left-12 text-6xl animate-[float_5s_ease-in-out_infinite]">🐄</div>
          <div className="absolute bottom-10 right-20 text-5xl animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: "1s" }}>🐔</div>
          <div className="absolute top-1/3 left-1/4 text-5xl">🌻</div>
          <div className="absolute top-16 left-10 text-6xl animate-[spin_20s_linear_infinite]">🌬️</div>
        </>
      )}
      {world === "espaco" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20%_30%,white,transparent),radial-gradient(2px_2px_at_70%_60%,white,transparent),radial-gradient(1px_1px_at_40%_80%,white,transparent),radial-gradient(2px_2px_at_85%_20%,white,transparent)] opacity-80 animate-pulse" />
          <div className="absolute top-16 right-20 text-7xl animate-[spin_30s_linear_infinite] drop-shadow-[0_0_30px_rgba(255,200,255,0.6)]">🪐</div>
          <div className="absolute bottom-16 left-16 text-6xl animate-[float_5s_ease-in-out_infinite]">🧑‍🚀</div>
          <div className="absolute top-1/3 left-10 text-5xl animate-[float_7s_ease-in-out_infinite]">🚀</div>
          <div className="absolute bottom-20 right-12 text-5xl animate-[spin_40s_linear_infinite]">🌕</div>
        </>
      )}
      {world === "animais" && (
        <>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-700/70 to-transparent" />
          <div className="absolute bottom-8 left-10 text-6xl animate-[float_6s_ease-in-out_infinite]">🦁</div>
          <div className="absolute bottom-10 right-14 text-6xl animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: "1s" }}>🐘</div>
          <div className="absolute top-20 right-1/3 text-5xl animate-[float_5s_ease-in-out_infinite]">🦒</div>
        </>
      )}
      {world === "herois" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_40%)]" />
          <div className="absolute top-16 left-12 text-7xl animate-[float_5s_ease-in-out_infinite] drop-shadow-2xl">🦸</div>
          <div className="absolute bottom-12 right-16 text-6xl animate-[float_7s_ease-in-out_infinite]">⚡</div>
          <div className="absolute top-1/3 right-1/4 text-5xl animate-pulse">💥</div>
        </>
      )}
      {world === "default" && (
        <>
          <div className="absolute top-10 left-12 w-32 h-16 bg-white/70 rounded-full blur-sm animate-[drift_40s_linear_infinite]" />
          <div className="absolute top-32 right-1/4 w-40 h-20 bg-white/60 rounded-full blur-sm animate-[drift_55s_linear_infinite]" />
          <div className="absolute bottom-20 left-1/3 text-6xl animate-[float_6s_ease-in-out_infinite]">🌈</div>
          <div className="absolute bottom-10 right-12 text-5xl animate-[float_8s_ease-in-out_infinite]">✨</div>
          <div className="absolute top-1/2 left-10 text-5xl animate-[float_5s_ease-in-out_infinite]">🎈</div>
        </>
      )}

      {/* overlay para legibilidade */}
      <div className="absolute inset-0 bg-black/15" />
    </div>
  );
}

// ============== TRILHA ==============

function Treino() {
  useAppState();
  const { adjustment, metrics } = useNeuroAdaptive();
  const { hiperfoco } = useHiperfoco();
  const world = mapHiperfocoToWorld(hiperfoco?.label);
  const theme = WORLD_THEME[world];

  // Achata todas as categorias em uma trilha única, mantendo agrupamento por seção
  const trail = useMemo(() => {
    const flat: { slug: CategoriaSlug; grupo: string; grupoEmoji: string }[] = [];
    GRUPOS.forEach((g) => g.slugs.forEach((s) => flat.push({ slug: s, grupo: g.nome, grupoEmoji: g.emoji })));
    return flat;
  }, []);

  return (
    <Shell>
      <div className="relative min-h-[calc(100vh-6rem)] -mx-4 -my-2 px-4 py-6 rounded-3xl overflow-hidden">
        <WorldBackground world={world} />

        {/* Header do mundo */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-5 py-3 shadow-lg">
            <div className="text-white/90 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> {theme.name}
            </div>
            <div className="text-white font-black text-2xl drop-shadow">
              {hiperfoco ? <>{hiperfoco.emoji} {hiperfoco.label}</> : "Escolha um hiperfoco"}
            </div>
          </div>

          <Link
            to="/neuro-treino/configurar"
            className="rounded-xl bg-white text-primary px-4 py-2 text-sm font-extrabold hover:scale-105 transition-all shadow-lg"
          >
            {hiperfoco ? "Trocar mundo" : "Escolher mundo"}
          </Link>
        </div>

        {adjustment.suggestBreak && (
          <div className="relative z-10 mb-6 bg-white/90 backdrop-blur rounded-2xl border-2 border-sun/40 px-4 py-3 flex items-center gap-3 shadow-lg">
            <Coffee className="h-6 w-6 text-sun" />
            <div className="flex-1">
              <div className="font-bold">Que tal uma pausinha?</div>
              <div className="text-sm text-muted-foreground">Detectei sinais de cansaço. Respira fundo 🌿</div>
            </div>
          </div>
        )}

        {/* TRILHA + MASCOTE GUIA */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
          <div className="relative">
            <Trail trail={trail} theme={theme} hiperfocoLabel={hiperfoco?.label ?? null} />
          </div>

          {/* PIP guia fixo ao lado */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-5 shadow-xl">
              <div className="text-center text-white font-black text-lg mb-2 drop-shadow">PIP, seu guia</div>
              <div className="animate-[float_4s_ease-in-out_infinite]">
                <LiveMascot emotion="excited" size="lg" />
              </div>
              <div className="mt-4 bg-white/95 rounded-2xl px-4 py-3 text-center text-sm font-bold text-primary">
                Toque numa medalha para começar a fase! ⭐
              </div>
              <div className="mt-4 text-xs text-white/90 text-center">
                Precisão <b>{Math.round(metrics.performance.accuracyRate * 100)}%</b> · Fadiga <b>{Math.round(metrics.fatigue.fatigueLevel * 100)}%</b>
              </div>
              <Link
                to="/loja-mascotes"
                className="mt-4 block text-center text-xs font-extrabold text-white bg-primary/80 hover:bg-primary rounded-xl py-2 transition-colors"
              >
                Trocar look do PIP
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* keyframes locais */}
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes drift { 0% { transform: translateX(-10vw); } 100% { transform: translateX(110vw); } }
        @keyframes zoom  { 0% { transform: translateX(-15vw) scale(1); } 100% { transform: translateX(115vw) scale(1.05); } }
        @keyframes glow  { 0%,100% { box-shadow: 0 0 24px rgba(255,255,255,0.6); } 50% { box-shadow: 0 0 48px rgba(255,255,255,0.9); } }
      `}</style>
    </Shell>
  );
}

function Trail({
  trail,
  theme,
  hiperfocoLabel,
}: {
  trail: { slug: CategoriaSlug; grupo: string; grupoEmoji: string }[];
  theme: typeof WORLD_THEME[WorldKey];
  hiperfocoLabel: string | null;
}) {
  let lastGrupo = "";
  return (
    <div className="relative flex flex-col items-stretch gap-2 pb-12">
      {trail.map((item, idx) => {
        const c = CATEGORIAS[item.slug];
        const side = idx % 2 === 0 ? "left" : "right";
        const showGrupo = item.grupo !== lastGrupo;
        lastGrupo = item.grupo;

        return (
          <div key={item.slug} className="relative">
            {showGrupo && (
              <div className="my-4 flex items-center gap-3">
                <div className="flex-1 h-px bg-white/40" />
                <div className="bg-white/20 backdrop-blur border border-white/40 text-white font-black px-4 py-1.5 rounded-full text-sm drop-shadow">
                  {item.grupoEmoji} {item.grupo}
                </div>
                <div className="flex-1 h-px bg-white/40" />
              </div>
            )}

            {/* Linha pontilhada conectando à próxima medalha */}
            {idx < trail.length - 1 && (
              <div
                className={cn(
                  "absolute left-1/2 top-24 h-16 border-l-4 border-dashed -translate-x-1/2 opacity-70",
                  theme.trail.replace("decoration-", "border-")
                )}
              />
            )}

            <div className={cn("flex w-full", side === "left" ? "justify-start pl-4 md:pl-16" : "justify-end pr-4 md:pr-16")}>
              <Link
                to="/neuro-treino/$slug"
                params={{ slug: item.slug }}
                onClick={() => {
                  console.error("[Neuro-Treino] clique na trilha", {
                    slug: item.slug,
                    nome: c?.nome,
                    variacoesLocais: VARIATIONS[item.slug]?.length ?? 0,
                    hiperfocoAtivo: hiperfocoLabel,
                  });
                }}
                className="group relative block"
              >
                {/* Medalha redonda 3D */}
                <div
                  className={cn(
                    "relative w-28 h-28 md:w-32 md:h-32 rounded-full grid place-items-center",
                    "bg-gradient-to-br from-white via-white to-white/70",
                    "border-[6px] border-white shadow-[0_12px_24px_rgba(0,0,0,0.35),inset_0_-6px_12px_rgba(0,0,0,0.15)]",
                    "ring-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                    theme.accent,
                  )}
                  style={{ animation: "glow 3s ease-in-out infinite" }}
                >
                  <span className="text-5xl md:text-6xl drop-shadow-md select-none">{c.emoji}</span>

                  {/* Estrela de fase */}
                  <div className="absolute -top-2 -right-2 bg-amber-400 text-white rounded-full w-9 h-9 grid place-items-center border-4 border-white shadow-lg">
                    <Star className="h-4 w-4 fill-white" />
                  </div>
                </div>

                {/* Etiqueta */}
                <div className="mt-3 max-w-[180px] mx-auto text-center bg-white/95 rounded-2xl px-3 py-2 shadow-lg border-2 border-white">
                  <div className="font-black text-sm text-primary leading-tight">{c.nome}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{VARIATIONS[item.slug]?.length || 0} fases</div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}

      {/* Fim da trilha */}
      <div className="mt-8 mx-auto bg-white/20 backdrop-blur border border-white/40 rounded-full px-5 py-2 text-white font-black flex items-center gap-2">
        <Lock className="h-4 w-4" /> Mais mundos em breve
      </div>
    </div>
  );
}
