import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";
import {
  Play,
  Pause,
  CheckCircle2,
  Lock,
  ClipboardList,
  Loader2,
  Calendar,
  Trophy,
  Sparkles,
  Star,
} from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/database/supabase/client";
// Pedagogical engine logic removed for rebuild
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
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

export const Route = createFileRoute("/jornada-365")({
  component: Jornada,
});

const CATEGORY_ROUTES: Record<string, string> = {
  "neuro-treino": "/neuro-treino",
  
};

type WorldKey =
  | "dinossauros" | "minecraft" | "carros" | "fazendinha" | "espaco" | "animais"
  | "herois" | "arte" | "musica" | "princesas" | "trens" | "robos" | "veiculos"
  | "oceano" | "floresta" | "castelo" | "default";

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

const WORLD_THEME: Record<WorldKey, { image: string; accent: string; name: string }> = {
  dinossauros: { image: worldDino,      accent: "ring-amber-300/70",   name: "Mundo Jurassic" },
  minecraft:   { image: worldMinecraft, accent: "ring-emerald-300/70", name: "Mundo Bloco" },
  carros:      { image: worldCarros,    accent: "ring-orange-300/70",  name: "Mundo Pista" },
  fazendinha:  { image: worldFazenda,   accent: "ring-lime-300/70",    name: "Mundo Campo" },
  espaco:      { image: worldEspaco,    accent: "ring-fuchsia-300/70", name: "Mundo Galáctico" },
  animais:     { image: worldAnimais,   accent: "ring-amber-300/70",   name: "Mundo Safári" },
  herois:      { image: worldHerois,    accent: "ring-yellow-300/70",  name: "Mundo Heróis" },
  arte:        { image: worldArte,      accent: "ring-pink-300/70",    name: "Mundo Arte" },
  musica:      { image: worldMusica,    accent: "ring-violet-300/70",  name: "Mundo Música" },
  princesas:   { image: worldPrincesas, accent: "ring-pink-300/70",    name: "Mundo Encantado" },
  trens:       { image: worldTrens,     accent: "ring-sky-300/70",     name: "Mundo Trilhos" },
  robos:       { image: worldRobos,     accent: "ring-cyan-300/70",    name: "Mundo Robótico" },
  veiculos:    { image: worldVeiculos,  accent: "ring-sky-300/70",     name: "Mundo Aventura" },
  oceano:      { image: worldOceano,    accent: "ring-cyan-300/70",    name: "Mundo Oceano" },
  floresta:    { image: worldFloresta,  accent: "ring-violet-300/70",  name: "Floresta Encantada" },
  castelo:     { image: worldCastelo,   accent: "ring-pink-300/70",    name: "Castelo Mágico" },
  default:     { image: worldDefault,   accent: "ring-white/70",       name: "Mundo Encantado" },
};

function WorldBackground({ world }: { world: WorldKey }) {
  const theme = WORLD_THEME[world];
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
      <img
        src={theme.image}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-70"
        loading="lazy"
      />
      <img
        src={theme.image}
        alt={theme.name}
        className="absolute inset-0 w-full h-full object-contain object-center animate-[breathe_18s_ease-in-out_infinite]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.25)_50%,transparent_70%)] bg-[length:250%_250%] animate-[shimmerWorld_14s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_15%_25%,white,transparent),radial-gradient(1.5px_1.5px_at_75%_55%,white,transparent),radial-gradient(1px_1px_at_45%_80%,white,transparent),radial-gradient(2px_2px_at_85%_15%,white,transparent)] opacity-60 animate-pulse pointer-events-none" />
    </div>
  );
}

function Jornada() {
  const { activeChild } = useAppState();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const { hiperfoco } = useHiperfoco();
  const world = mapHiperfocoToWorld(hiperfoco?.label);
  const theme = WORLD_THEME[world];

  const { data: journeyState, isLoading: loadingJourney } = useQuery({
    queryKey: ["child-journey", activeChild?.id],
    queryFn: async () => {
      if (!activeChild) return null;
      const { data, error } = await supabase
        .from("child_journey")
        .select("*")
        .eq("child_id", activeChild.id)
        .maybeSingle();
      if (error) throw error;
      if (!data) {
        const { data: created } = await supabase
          .from("child_journey")
          .insert({ child_id: activeChild.id, current_day: 1, last_completed_day: 0 })
          .select()
          .single();
        return created;
      }
      return data;
    },
    enabled: !!activeChild,
  });

  const { data: activities = [], isLoading: loadingActivities } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const { data, error } = await supabase.from("activities").select("*");
      if (error) throw error;
      return data;
    },
  });

  const advanceDay = useMutation({
    mutationFn: async () => {
      if (!activeChild || !journeyState) throw new Error("no-journey");
      const nextDay = Math.min((journeyState.current_day || 1) + 1, 365);
      const { error } = await supabase
        .from("child_journey")
        .update({
          current_day: nextDay,
          last_completed_day: journeyState.current_day || 1,
          updated_at: new Date().toISOString(),
        })
        .eq("child_id", activeChild.id);
      if (error) throw error;
      return nextDay;
    },
    onSuccess: (nextDay) => {
      queryClient.invalidateQueries({ queryKey: ["child-journey", activeChild?.id] });
      toast.success(`Dia concluído! Bem-vindo ao Dia ${nextDay} 🌟`);
    },
    onError: () => toast.error("Não foi possível avançar o dia."),
  });

  if (!activeChild)
    return (
      <Shell>
        <p>Selecione uma criança.</p>
      </Shell>
    );

  if (!activeChild.anamnese_completa) {
    return (
      <Shell>
        <div className="flex flex-col items-center text-center p-12 py-16 bg-gradient-to-b from-muted/50 to-background border-2 border-dashed border-border rounded-3xl">
          <div className="h-20 w-20 rounded-full bg-warning/10 flex items-center justify-center mb-6">
            <Lock className="h-10 w-10 text-warning" />
          </div>
          <h2 className="text-2xl font-extrabold mb-4">Jornada bloqueada</h2>
          <p className="text-muted-foreground max-w-md mb-8">
            Para criar a jornada de 365 dias para <strong>{activeChild.nome}</strong>, precisamos
            primeiro concluir a anamnese pedagógica.
          </p>
          <Link
            to="/anamnese/$childId"
            params={{ childId: activeChild.id }}
            className="btn-tap rounded-2xl bg-primary text-primary-foreground px-8 py-4 font-bold text-lg flex items-center gap-2 shadow-glow"
          >
            <ClipboardList className="h-5 w-5" /> Fazer Anamnese Agora
          </Link>
        </div>
      </Shell>
    );
  }

  if (loadingJourney || loadingActivities) {
    return (
      <Shell>
        <div className="flex flex-col items-center justify-center p-20 text-center">
          <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
          <p className="font-bold">Calculando sua rota pedagógica...</p>
        </div>
      </Shell>
    );
  }

  const currentDay = journeyState?.current_day || 1;
  const blocks: any[] = []; // PedagogyEngine.generateDailyRoutine(currentDay, activeChild, activities);
  const progress = Math.min(Math.round(((currentDay - 1) / 365) * 100), 100);

  const handleStart = (block: (typeof blocks)[number]) => {
    if (block.category === "pausa") {
      setActiveBlockId(block.id);
      return;
    }
    const route = CATEGORY_ROUTES[block.category];
    if (route) navigate({ to: route });
    else setActiveBlockId(block.id);
  };

  return (
    <Shell>
      <div className="relative min-h-[calc(100vh-6rem)] -mx-4 -my-2 px-4 py-6 rounded-3xl overflow-hidden">
        <WorldBackground world={world} />

        {/* Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl px-5 py-3 shadow-xl">
            <div className="text-white/95 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> {theme.name} · Jornada 365
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

        {/* Progresso */}
        <div className="relative z-10 mb-6 bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl px-5 py-3 shadow-xl">
          <div className="flex items-center justify-between mb-2 text-white">
            <div className="font-bold flex items-center gap-2 drop-shadow">
              <Calendar className="h-4 w-4" />
              Dia {currentDay} de 365
            </div>
            <div className="text-xs font-extrabold bg-white/95 text-primary rounded-full px-3 py-0.5">
              {progress}%
            </div>
          </div>
          <div className="h-3 rounded-full bg-white/30 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-success to-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* TRILHA 365 DIAS */}
          <DayTrail currentDay={currentDay} theme={theme} />

          {/* SIDE: roteiro de hoje + mascote */}
          <aside className="space-y-4">
            <div className="bg-white/95 backdrop-blur rounded-3xl p-4 shadow-2xl border border-white">
              <div className="font-black text-primary text-sm uppercase tracking-wider mb-3">
                Roteiro do Dia {currentDay}
              </div>
              <div className="space-y-2">
                {blocks.map((b, i) => (
                  <button
                    key={i}
                    onClick={() => handleStart(b)}
                    className={cn(
                      "w-full rounded-2xl p-3 flex items-center gap-3 border-2 text-left transition-all",
                      b.status === "now"
                        ? "border-primary bg-primary/5"
                        : b.status === "done"
                          ? "border-success/30 bg-success/5"
                          : "border-border bg-card opacity-80"
                    )}
                  >
                    <div
                      className={cn(
                        "h-10 w-10 rounded-xl grid place-items-center shrink-0",
                        b.category === "neuro-treino"
                          ? "bg-coral/20 text-coral"
                          : b.category === "escola-brilha"
                            ? "bg-sky/20 text-sky"
                            : "bg-success/20 text-success"
                      )}
                    >
                      {b.status === "done" ? (
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      ) : b.status === "now" ? (
                        <Play className="h-4 w-4 fill-current" />
                      ) : (
                        <Pause className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-sm truncate">{b.title}</div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase">
                        {b.dur} min · {b.category}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => advanceDay.mutate()}
                disabled={advanceDay.isPending || currentDay >= 365}
                className="btn-tap mt-4 w-full rounded-2xl bg-gradient-to-r from-success to-primary text-primary-foreground px-4 py-3 font-bold flex items-center justify-center gap-2 shadow-glow disabled:opacity-50"
              >
                {advanceDay.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trophy className="h-4 w-4" />
                )}
                {currentDay >= 365 ? "Completa!" : "Concluir Dia"}
              </button>
            </div>

            <div className="hidden lg:block bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-4 shadow-2xl text-center">
              <div className="animate-[float_4s_ease-in-out_infinite]">
                <LiveMascot emotion="excited" size="md" />
              </div>
              <div className="mt-2 text-xs font-bold text-white drop-shadow">
                Toque no dia atual para começar!
              </div>
            </div>
          </aside>
        </div>
      </div>

      {activeBlockId && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm p-4 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
          <div className="max-w-md w-full">
            <div className="text-6xl mb-6">🌬️</div>
            <h2 className="text-3xl font-black mb-2">Hora da Pausa</h2>
            <p className="text-muted-foreground mb-8">
              Respire fundo. Inspire... segure... e solte devagar.
            </p>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-8">
              <div className="h-full bg-primary animate-progress-loading" />
            </div>
            <button
              onClick={() => setActiveBlockId(null)}
              className="btn-tap w-full rounded-2xl bg-primary/10 text-primary p-4 font-bold"
            >
              Pronto, voltar
            </button>
          </div>
        </div>
      )}

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
        @keyframes progress-loading { 0% { width: 0%; } 100% { width: 100%; } }
        .animate-progress-loading { animation: progress-loading 3s ease-out forwards; }
      `}</style>
    </Shell>
  );
}

// ===== TRILHA DE 365 DIAS =====

function DayTrail({
  currentDay,
  theme,
}: {
  currentDay: number;
  theme: typeof WORLD_THEME[WorldKey];
}) {
  const OFFSETS = [0, 1, 2, 1, 0, -1, -2, -1];
  const totalDays = 365;
  const currentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Foca no dia atual ao montar
    const t = setTimeout(() => {
      currentRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
    return () => clearTimeout(t);
  }, [currentDay]);

  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="relative mx-auto w-full max-w-[460px] flex flex-col items-center pb-16 pt-2">
      {days.map((day) => {
        const idx = day - 1;
        const offset = OFFSETS[idx % OFFSETS.length];
        const isCurrent = day === currentDay;
        const isDone = day < currentDay;
        const isLocked = day > currentDay;
        const showMilestone = day % 7 === 0; // marco semanal

        return (
          <div key={day} className="relative w-full flex flex-col items-center">
            {day === 1 && (
              <div className="w-full my-4 flex items-center gap-3">
                <div className="flex-1 h-[2px] bg-white/70 rounded-full" />
                <div className="bg-white text-primary font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-lg border-2 border-white">
                  🚀 Início da Jornada
                </div>
                <div className="flex-1 h-[2px] bg-white/70 rounded-full" />
              </div>
            )}

            <div
              ref={isCurrent ? currentRef : null}
              className="relative my-2 transition-transform"
              style={{ transform: `translateX(${offset * 38}px)` }}
            >
              {isCurrent && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 animate-[float_2.4s_ease-in-out_infinite]">
                  <div className="relative bg-white text-primary font-black text-xs px-4 py-1.5 rounded-full shadow-xl border-2 border-primary/20 uppercase tracking-widest">
                    Começar
                    <span className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-r-2 border-b-2 border-primary/20" />
                  </div>
                </div>
              )}

              <button
                type="button"
                disabled={isLocked}
                onClick={() => {
                  if (isLocked || isDone) return;
                  // ao clicar no dia atual, leva pra primeira atividade (neuro-treino)
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={cn(
                  "group relative block focus:outline-none",
                  isLocked && "cursor-not-allowed"
                )}
                aria-label={`Dia ${day}`}
              >
                <div
                  className={cn(
                    "absolute inset-x-2 bottom-0 h-[88%] rounded-full",
                    isLocked ? "bg-slate-500/60" : isDone ? "bg-amber-700" : "bg-primary/80",
                    "translate-y-[6px] blur-[1px]"
                  )}
                  aria-hidden
                />

                <div
                  className={cn(
                    "relative w-[78px] h-[78px] rounded-full grid place-items-center overflow-hidden",
                    "border-[5px] border-white",
                    "transition-transform duration-200 group-hover:-translate-y-0.5 active:translate-y-[3px]",
                    isLocked
                      ? "bg-gradient-to-b from-slate-300 to-slate-400 grayscale opacity-90"
                      : isDone
                        ? "bg-gradient-to-b from-amber-300 to-amber-500"
                        : "bg-gradient-to-b from-white to-white/85",
                    !isLocked && "shadow-[0_8px_0_rgba(0,0,0,0.18),0_14px_22px_rgba(0,0,0,0.25)]",
                    !isLocked && theme.accent,
                    !isLocked && "ring-4"
                  )}
                >
                  {isLocked ? (
                    <div className="flex flex-col items-center">
                      <Lock className="h-5 w-5 text-white drop-shadow" />
                      <div className="text-[10px] font-black text-white/90 mt-0.5">{day}</div>
                    </div>
                  ) : isDone ? (
                    <div className="flex flex-col items-center">
                      <Star className="h-5 w-5 text-white fill-white drop-shadow" />
                      <div className="text-[11px] font-black text-white mt-0.5">{day}</div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="text-[10px] font-extrabold text-primary/70 uppercase tracking-wider">Dia</div>
                      <div className="text-2xl font-black text-primary leading-none">{day}</div>
                    </div>
                  )}
                </div>
              </button>
            </div>

            {showMilestone && day < totalDays && (
              <div className="w-full my-3 flex items-center gap-3">
                <div className="flex-1 h-[2px] bg-white/50 rounded-full" />
                <div className="bg-white/95 text-primary font-extrabold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider shadow border border-white">
                  ⭐ Semana {Math.floor(day / 7)}
                </div>
                <div className="flex-1 h-[2px] bg-white/50 rounded-full" />
              </div>
            )}
          </div>
        );
      })}

      <div className="mt-10 mx-auto bg-white/90 text-primary rounded-full px-5 py-2 font-black flex items-center gap-2 shadow-xl border-2 border-white">
        <Trophy className="h-4 w-4" /> Fim da Jornada 365
      </div>
    </div>
  );
}
