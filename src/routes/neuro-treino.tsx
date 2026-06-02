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

// Mundos (backgrounds)
import worldDino from "@/assets/neuro-treino/worlds/dinossauros.jpg";
import worldMinecraft from "@/assets/neuro-treino/worlds/minecraft.jpg";
import worldCarros from "@/assets/neuro-treino/worlds/carros.jpg";
import worldFazenda from "@/assets/neuro-treino/worlds/fazendinha.jpg";
import worldEspaco from "@/assets/neuro-treino/worlds/espaco.jpg";
import worldAnimais from "@/assets/neuro-treino/worlds/animais.jpg";
import worldHerois from "@/assets/neuro-treino/worlds/herois.jpg";
import worldArte from "@/assets/neuro-treino/worlds/arte.jpg";
import worldMusica from "@/assets/neuro-treino/worlds/musica.jpg";
import worldPrincesas from "@/assets/neuro-treino/worlds/princesas.jpg";
import worldTrens from "@/assets/neuro-treino/worlds/trens.jpg";
import worldRobos from "@/assets/neuro-treino/worlds/robos.jpg";
import worldVeiculos from "@/assets/neuro-treino/worlds/veiculos.jpg";
import worldOceano from "@/assets/neuro-treino/worlds/oceano.jpg";
import worldFloresta from "@/assets/neuro-treino/worlds/floresta.jpg";
import worldCastelo from "@/assets/neuro-treino/worlds/castelo.jpg";
import worldDefault from "@/assets/neuro-treino/worlds/default.jpg";


// Ícones por categoria (v2 - ilustrações premium 2D)
import icSonsIniciais from "@/assets/neuro-treino/icons/v2/sons-iniciais.png";
import icMotorzinho from "@/assets/neuro-treino/icons/v2/motorzinho-dos-sons.png";
import icRimas from "@/assets/neuro-treino/icons/v2/rimas.png";
import icPedacinhos from "@/assets/neuro-treino/icons/v2/pedacinhos-da-palavra.png";
import icOndeEsta from "@/assets/neuro-treino/icons/v2/onde-esta.png";
import icSeqPadrao from "@/assets/neuro-treino/icons/v2/sequencia-e-padrao.png";
import icCadePar from "@/assets/neuro-treino/icons/v2/cade-o-par.png";
import icFocoTotal from "@/assets/neuro-treino/icons/v2/foco-total.png";
import icLabSom from "@/assets/neuro-treino/icons/v2/labirinto-do-som.png";
import icFocoSust from "@/assets/neuro-treino/icons/v2/foco-sustentado.png";
import icRastreio from "@/assets/neuro-treino/icons/v2/rastreamento-sacadico.png";
import icMosaico from "@/assets/neuro-treino/icons/v2/mosaico-de-formas.png";
import icSeqCores from "@/assets/neuro-treino/icons/v2/sequencia-de-cores.png";
import icSimetria from "@/assets/neuro-treino/icons/v2/simetria.png";
import icDecoracao from "@/assets/neuro-treino/icons/v2/decoracao-criativa.png";
import icOnomatopeias from "@/assets/neuro-treino/icons/v2/onomatopeias-animadas.png";
import icRitmoSopro from "@/assets/neuro-treino/icons/v2/ritmo-e-sopro.png";
import icSonsCorpo from "@/assets/neuro-treino/icons/v2/paromatopeias-corpo.png";
import icTracado from "@/assets/neuro-treino/icons/v2/tracado-letras.png";
import icCaminhoPontos from "@/assets/neuro-treino/icons/v2/caminho-dos-pontos.png";
import icLabPrecisao from "@/assets/neuro-treino/icons/v2/labirinto-precisao.png";
import icTriagem from "@/assets/neuro-treino/icons/v2/triagem-categorias.png";
import icExpressao from "@/assets/neuro-treino/icons/v2/expressao-emocao.png";

const ICONS: Record<CategoriaSlug, string> = {
  "sons-iniciais": icSonsIniciais,
  "motorzinho-dos-sons": icMotorzinho,
  "rimas": icRimas,
  "pedacinhos-da-palavra": icPedacinhos,
  "onde-esta": icOndeEsta,
  "sequencia-e-padrao": icSeqPadrao,
  "cade-o-par": icCadePar,
  "foco-total": icFocoTotal,
  "labirinto-do-som": icLabSom,
  "foco-sustentado": icFocoSust,
  "rastreamento-sacadico": icRastreio,
  "mosaico-de-formas": icMosaico,
  "sequencia-de-cores": icSeqCores,
  "simetria": icSimetria,
  "decoracao-criativa": icDecoracao,
  "onomatopeias-animadas": icOnomatopeias,
  "ritmo-e-sopro": icRitmoSopro,
  "paromatopeias-corpo": icSonsCorpo,
  "tracado-letras": icTracado,
  "caminho-dos-pontos": icCaminhoPontos,
  "labirinto-precisao": icLabPrecisao,
  "triagem-categorias": icTriagem,
  "expressao-emocao": icExpressao,
};

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

// ============== MUNDOS ==============

type WorldKey = "dinossauros" | "minecraft" | "carros" | "fazendinha" | "espaco" | "animais" | "herois" | "arte" | "musica" | "princesas" | "trens" | "robos" | "veiculos" | "oceano" | "floresta" | "castelo" | "default";

function mapHiperfocoToWorld(label?: string | null): WorldKey {
  if (!label) return "default";
  const l = label.toLowerCase();
  if (l.includes("dino")) return "dinossauros";
  if (l.includes("minecraft") || l.includes("bloco")) return "minecraft";
  if (l.includes("trem")) return "trens";
  if (l.includes("rob")) return "robos";
  if (l.includes("princ")) return "princesas";
  if (l.includes("music") || l.includes("músic")) return "musica";
  if (l.includes("arte") || l.includes("pint") || l.includes("desenh")) return "arte";
  if (l.includes("carro") || l.includes("auto") || l.includes("pista")) return "carros";
  if (l.includes("veíc") || l.includes("veic") || l.includes("aviã") || l.includes("avia") || l.includes("barco")) return "veiculos";
  if (l.includes("fazend") || l.includes("campo")) return "fazendinha";
  if (l.includes("espac") || l.includes("espaç") || l.includes("galá") || l.includes("gala") || l.includes("astro")) return "espaco";
  if (l.includes("animal") || l.includes("bicho")) return "animais";
  if (l.includes("her") || l.includes("super")) return "herois";
  if (l.includes("ocean") || l.includes("mar") || l.includes("peix")) return "oceano";
  if (l.includes("flores") || l.includes("fada") || l.includes("encant")) return "floresta";
  if (l.includes("castel") || l.includes("drag")) return "castelo";
  return "default";
}

const WORLD_THEME: Record<WorldKey, { image: string; accent: string; trailColor: string; name: string }> = {
  dinossauros: { image: worldDino,      accent: "ring-amber-300/70",   trailColor: "border-amber-200",   name: "Mundo Jurassic" },
  minecraft:   { image: worldMinecraft, accent: "ring-emerald-300/70", trailColor: "border-emerald-200", name: "Mundo Bloco" },
  carros:      { image: worldCarros,    accent: "ring-orange-300/70",  trailColor: "border-yellow-200",  name: "Mundo Pista" },
  fazendinha:  { image: worldFazenda,   accent: "ring-lime-300/70",    trailColor: "border-amber-300",   name: "Mundo Campo" },
  espaco:      { image: worldEspaco,    accent: "ring-fuchsia-300/70", trailColor: "border-fuchsia-200", name: "Mundo Galáctico" },
  animais:     { image: worldAnimais,   accent: "ring-amber-300/70",   trailColor: "border-orange-200",  name: "Mundo Safári" },
  herois:      { image: worldHerois,    accent: "ring-yellow-300/70",  trailColor: "border-yellow-100",  name: "Mundo Heróis" },
  arte:        { image: worldArte,      accent: "ring-pink-300/70",    trailColor: "border-pink-200",    name: "Mundo Arte" },
  musica:      { image: worldMusica,    accent: "ring-violet-300/70",  trailColor: "border-violet-200",  name: "Mundo Música" },
  princesas:   { image: worldPrincesas, accent: "ring-pink-300/70",    trailColor: "border-pink-100",    name: "Mundo Encantado" },
  trens:       { image: worldTrens,     accent: "ring-sky-300/70",     trailColor: "border-sky-200",     name: "Mundo Trilhos" },
  robos:       { image: worldRobos,     accent: "ring-cyan-300/70",    trailColor: "border-cyan-200",    name: "Mundo Robótico" },
  veiculos:    { image: worldVeiculos,  accent: "ring-sky-300/70",     trailColor: "border-sky-100",     name: "Mundo Aventura" },
  oceano:      { image: worldOceano,    accent: "ring-cyan-300/70",    trailColor: "border-cyan-200",    name: "Mundo Oceano" },
  floresta:    { image: worldFloresta,  accent: "ring-violet-300/70",  trailColor: "border-violet-200",  name: "Floresta Encantada" },
  castelo:     { image: worldCastelo,   accent: "ring-pink-300/70",    trailColor: "border-pink-200",    name: "Castelo Mágico" },
  default:     { image: worldDefault,   accent: "ring-white/70",       trailColor: "border-white",       name: "Mundo Encantado" },
};

function WorldBackground({ world }: { world: WorldKey }) {
  const theme = WORLD_THEME[world];
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900 pointer-events-none">
      {/* mundo principal cobrindo todo o container da trilha (sem bandas vazias) */}
      <img
        src={theme.image}
        alt={theme.name}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />
      {/* gradiente para legibilidade da trilha */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
      {/* brilhos suaves */}
      <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_15%_25%,white,transparent),radial-gradient(1.5px_1.5px_at_75%_55%,white,transparent),radial-gradient(1px_1px_at_45%_80%,white,transparent),radial-gradient(2px_2px_at_85%_15%,white,transparent)] opacity-50 animate-pulse" />
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

  const trail = useMemo(() => {
    const flat: { slug: CategoriaSlug; grupo: string; grupoEmoji: string }[] = [];
    GRUPOS.forEach((g) => g.slugs.forEach((s) => flat.push({ slug: s, grupo: g.nome, grupoEmoji: g.emoji })));
    return flat;
  }, []);

  return (
    <Shell>
      <div className="relative min-h-[calc(100vh-6rem)] -mx-4 -my-2 px-4 py-6 rounded-3xl overflow-hidden">
        <WorldBackground world={world} />

        {/* Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl px-5 py-3 shadow-xl">
            <div className="text-white/95 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> {theme.name}
            </div>
            <div className="text-white font-black text-2xl drop-shadow-lg">
              {hiperfoco ? <>{hiperfoco.emoji} {hiperfoco.label}</> : "Escolha um hiperfoco"}
            </div>
          </div>

          <Link
            to="/neuro-treino/configurar"
            className="rounded-xl bg-white text-primary px-4 py-2 text-sm font-extrabold hover:scale-105 transition-all shadow-xl"
          >
            {hiperfoco ? "Trocar mundo" : "Escolher mundo"}
          </Link>
        </div>

        {adjustment.suggestBreak && (
          <div className="relative z-10 mb-6 bg-white/95 backdrop-blur rounded-2xl border-2 border-sun/40 px-4 py-3 flex items-center gap-3 shadow-xl">
            <Coffee className="h-6 w-6 text-sun" />
            <div className="flex-1">
              <div className="font-bold">Que tal uma pausinha?</div>
              <div className="text-sm text-muted-foreground">Detectei sinais de cansaço. Respira fundo 🌿</div>
            </div>
          </div>
        )}

        {/* TRILHA + MASCOTE */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
          <div className="relative">
            <Trail trail={trail} theme={theme} hiperfocoLabel={hiperfoco?.label ?? null} />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-5 shadow-2xl">
              <div className="text-center text-white font-black text-lg mb-2 drop-shadow">PIP, seu guia</div>
              <div className="animate-[float_4s_ease-in-out_infinite]">
                <LiveMascot emotion="excited" size="lg" />
              </div>
              <div className="mt-4 bg-white/95 rounded-2xl px-4 py-3 text-center text-sm font-bold text-primary">
                Toque numa medalha para começar a fase! ⭐
              </div>
              <div className="mt-4 text-xs text-white/95 text-center drop-shadow">
                Precisão <b>{Math.round(metrics.performance.accuracyRate * 100)}%</b> · Fadiga <b>{Math.round(metrics.fatigue.fatigueLevel * 100)}%</b>
              </div>
              <Link
                to="/loja-mascotes"
                className="mt-4 block text-center text-xs font-extrabold text-white bg-primary/90 hover:bg-primary rounded-xl py-2 transition-colors shadow"
              >
                Trocar look do PIP
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @keyframes float   { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes breathe {
          0%   { transform: scale(1.02) translate3d(0,0,0); }
          25%  { transform: scale(1.05) translate3d(-1.2%, -0.8%, 0); }
          50%  { transform: scale(1.07) translate3d(0.8%, 0.6%, 0); }
          75%  { transform: scale(1.04) translate3d(1.2%, -0.4%, 0); }
          100% { transform: scale(1.02) translate3d(0,0,0); }
        }
        @keyframes shimmerWorld {
          0%   { background-position: -50% 50%; opacity: 0.0; }
          40%  { opacity: 0.55; }
          100% { background-position: 150% 50%; opacity: 0.0; }
        }
        @keyframes glow    { 0%,100% { box-shadow: 0 0 22px rgba(255,255,255,0.55); } 50% { box-shadow: 0 0 44px rgba(255,255,255,0.9); } }
        @keyframes pulseRing { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(1.4); opacity: 0; } }
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
  // padrão zig-zag estilo Duolingo (serpentina): -2,-1,0,1,2,1,0,-1...
  const OFFSETS = [0, 1, 2, 1, 0, -1, -2, -1];
  let lastGrupo = "";
  // primeiro nó disponível (estilo Duolingo: 1º é "START", resto bloqueado pelo tema do app)
  const currentIndex = 0;

  return (
    <div className="relative mx-auto w-full max-w-[460px] flex flex-col items-center pb-16 pt-2">
      {trail.map((item, idx) => {
        const c = CATEGORIAS[item.slug];
        const offset = OFFSETS[idx % OFFSETS.length];
        const showGrupo = item.grupo !== lastGrupo;
        lastGrupo = item.grupo;

        const isCurrent = idx === currentIndex;
        const isLocked = idx > currentIndex + 2; // bloqueia mais à frente, estilo Duolingo
        const isDone = idx < currentIndex;

        return (
          <div key={item.slug} className="relative w-full flex flex-col items-center">
            {showGrupo && (
              <div className="w-full my-5 flex items-center gap-3">
                <div className="flex-1 h-[2px] bg-white/70 rounded-full" />
                <div className="bg-white text-primary font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-lg border-2 border-white">
                  {item.grupoEmoji} {item.grupo}
                </div>
                <div className="flex-1 h-[2px] bg-white/70 rounded-full" />
              </div>
            )}

            <div
              className="relative my-3 transition-transform"
              style={{ transform: `translateX(${offset * 38}px)` }}
            >
              {/* Balão START flutuante no nó atual */}
              {isCurrent && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 animate-[float_2.4s_ease-in-out_infinite]">
                  <div className="relative bg-white text-primary font-black text-xs px-4 py-1.5 rounded-full shadow-xl border-2 border-primary/20 uppercase tracking-widest">
                    Começar
                    <span className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-r-2 border-b-2 border-primary/20" />
                  </div>
                </div>
              )}

              <Link
                to="/neuro-treino/$slug"
                params={{ slug: item.slug }}
                onClick={(e) => {
                  if (isLocked) {
                    e.preventDefault();
                    return;
                  }
                  console.error("[Neuro-Treino] clique na trilha", {
                    slug: item.slug,
                    nome: c?.nome,
                    variacoesLocais: VARIATIONS[item.slug]?.length ?? 0,
                    hiperfocoAtivo: hiperfocoLabel,
                  });
                }}
                className={cn(
                  "group relative block focus:outline-none",
                  isLocked && "pointer-events-auto cursor-not-allowed",
                )}
                aria-disabled={isLocked}
              >
                {/* Sombra base 3D estilo Duolingo */}
                <div
                  className={cn(
                    "absolute inset-x-2 bottom-0 h-[88%] rounded-full",
                    isLocked ? "bg-slate-500/60" : isDone ? "bg-amber-700" : "bg-primary/80",
                    "translate-y-[6px] blur-[1px]",
                  )}
                  aria-hidden
                />

                {/* Botão circular 3D */}
                <div
                  className={cn(
                    "relative w-[92px] h-[92px] rounded-full grid place-items-center overflow-hidden",
                    "border-[5px] border-white",
                    "transition-transform duration-200 group-hover:-translate-y-0.5 active:translate-y-[3px]",
                    isLocked
                      ? "bg-gradient-to-b from-slate-300 to-slate-400 grayscale opacity-90"
                      : isDone
                        ? "bg-gradient-to-b from-amber-300 to-amber-500"
                        : "bg-gradient-to-b from-white to-white/85",
                    !isLocked && "shadow-[0_8px_0_rgba(0,0,0,0.18),0_14px_22px_rgba(0,0,0,0.25)]",
                    !isLocked && theme.accent,
                    !isLocked && "ring-4",
                  )}
                >
                  {isLocked ? (
                    <Lock className="h-9 w-9 text-white drop-shadow" />
                  ) : (
                    <img
                      src={ICONS[item.slug]}
                      alt={c.nome}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="w-[78%] h-[78%] object-contain drop-shadow-md select-none pointer-events-none"
                      draggable={false}
                    />
                  )}

                  {isDone && (
                    <div className="absolute -top-1 -right-1 bg-amber-400 text-white rounded-full w-8 h-8 grid place-items-center border-[3px] border-white shadow-lg z-10">
                      <Star className="h-4 w-4 fill-white" />
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        );
      })}

      <div className="mt-10 mx-auto bg-white/90 text-primary rounded-full px-5 py-2 font-black flex items-center gap-2 shadow-xl border-2 border-white">
        <Lock className="h-4 w-4" /> Mais mundos em breve
      </div>
    </div>
  );
}
