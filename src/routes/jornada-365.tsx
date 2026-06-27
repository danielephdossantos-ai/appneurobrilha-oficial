import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { Lock, ClipboardList, Loader2, Star, Volume2, VolumeX } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/database/supabase/client";
import { useEffect, useRef } from "react";
import { useHiperfoco } from "@/context/HiperfocoContext";
import { cn } from "@/utils/utils";
import { usePEIAutoGenerate } from "@/modules/pei/usePEIAutoGenerate";
import { useMascot } from "@/contexts/MascotContext";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";

import { DinoWorld } from "@/components/worlds/DinoWorld";

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

type WorldKey =
  | "dinossauros" | "minecraft" | "carros" | "fazendinha" | "espaco"
  | "animais" | "herois" | "arte" | "musica" | "princesas" | "trens"
  | "robos" | "veiculos" | "oceano" | "floresta" | "castelo" | "default";

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

const WORLD_THEME: Record<WorldKey, { image: string; accent: string }> = {
  dinossauros: { image: worldDino,      accent: "ring-amber-300/70" },
  minecraft:   { image: worldMinecraft, accent: "ring-emerald-300/70" },
  carros:      { image: worldCarros,    accent: "ring-orange-300/70" },
  fazendinha:  { image: worldFazenda,   accent: "ring-lime-300/70" },
  espaco:      { image: worldEspaco,    accent: "ring-fuchsia-300/70" },
  animais:     { image: worldAnimais,   accent: "ring-amber-300/70" },
  herois:      { image: worldHerois,    accent: "ring-yellow-300/70" },
  arte:        { image: worldArte,      accent: "ring-pink-300/70" },
  musica:      { image: worldMusica,    accent: "ring-violet-300/70" },
  princesas:   { image: worldPrincesas, accent: "ring-pink-300/70" },
  trens:       { image: worldTrens,     accent: "ring-sky-300/70" },
  robos:       { image: worldRobos,     accent: "ring-cyan-300/70" },
  veiculos:    { image: worldVeiculos,  accent: "ring-sky-300/70" },
  oceano:      { image: worldOceano,    accent: "ring-cyan-300/70" },
  floresta:    { image: worldFloresta,  accent: "ring-violet-300/70" },
  castelo:     { image: worldCastelo,   accent: "ring-pink-300/70" },
  default:     { image: worldDefault,   accent: "ring-white/70" },
};

function WorldBackground({ world }: { world: WorldKey }) {
  const theme = WORLD_THEME[world];
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-900">
      <img
        src={theme.image}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/55 pointer-events-none" />
    </div>
  );
}

function Jornada() {
  const { activeChild } = useAppState();
  const { activeMascot } = useMascot();
  const { hiperfoco } = useHiperfoco();
  const navigate = useNavigate();
  const world = mapHiperfocoToWorld(hiperfoco?.label);
  const theme = WORLD_THEME[world];

  // PEI gera o plano em segundo plano — o pai não dispara nada.
  const pei = usePEIAutoGenerate({
    childId: activeChild?.id ?? null,
    anamneseCompleta: !!activeChild?.anamnese_completa,
  });

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

  const hojeISO = new Date().toISOString().slice(0, 10);
  const { data: aulaHoje } = useQuery({
    queryKey: ["pei-aula-hoje", activeChild?.id, hojeISO],
    queryFn: async () => {
      if (!activeChild) return null;
      const { data } = await supabase
        .from("pei_aulas")
        .select("id, atividades, status")
        .eq("child_id", activeChild.id)
        .eq("data_prevista", hojeISO)
        .maybeSingle();
      return data;
    },
    enabled: !!activeChild,
  });

  // Redireciona automaticamente pra anamnese:
  // - 1ª vez (anamnese ainda não preenchida)
  // - A cada 2 meses (anamnese vencida)
  const precisaAnamnese =
    !!activeChild &&
    (!activeChild.anamnese_completa || pei.anamneseVencida);

  useEffect(() => {
    if (precisaAnamnese && activeChild) {
      navigate({ to: "/anamnese/$childId", params: { childId: activeChild.id }, replace: true });
    }
  }, [precisaAnamnese, activeChild?.id]);

  if (!activeChild)
    return (
      <Shell>
        <p>Selecione uma criança.</p>
      </Shell>
    );

  if (precisaAnamnese) {
    return (
      <Shell>
        <div className="flex flex-col items-center justify-center p-20 text-center">
          <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
          <p className="text-muted-foreground">Abrindo anamnese de {activeChild.nome}…</p>
        </div>
      </Shell>
    );
  }


  if (loadingJourney) {
    return (
      <Shell>
        <div className="flex flex-col items-center justify-center p-20 text-center">
          <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
        </div>
      </Shell>
    );
  }

  const currentDay = journeyState?.current_day || 1;
  const { speak, stop, speaking, supported } = useDeviceTTS("pt-BR");

  const nome = activeChild.nome?.split(" ")[0] ?? "amiguinho";
  const tema = hiperfoco?.label ? ` no mundo de ${hiperfoco.label}` : "";
  const greeting = `Olá ${nome}! Hoje é o dia ${currentDay} da sua jornada${tema}. Vamos brincar e aprender juntos?`;

  // Saudação automática ao abrir (browsers podem bloquear sem interação prévia — botão Ouvir é o fallback).
  useEffect(() => {
    if (!supported) return;
    const t = setTimeout(() => speak(greeting, { rate: 0.95 }), 600);
    return () => {
      clearTimeout(t);
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supported, currentDay, activeChild.id]);

  const speakDay = (day: number) =>
    speak(`Dia ${day}${tema}. Vamos começar a atividade de hoje!`, { rate: 0.95 });


  const abrirAulaHoje = async () => {
    const blocos = (aulaHoje?.atividades as Array<{ payload?: { aula_id?: string } }> | null) ?? [];
    const aulaId = blocos.find((b) => b?.payload?.aula_id)?.payload?.aula_id;
    if (aulaHoje && aulaHoje.status === "disponivel") {
      await supabase.from("pei_aulas").update({ status: "em_andamento" }).eq("id", aulaHoje.id);
    }
    if (aulaId) {
      navigate({ to: "/escola-brilha/db/$aulaId", params: { aulaId } });
    } else {
      navigate({ to: "/escola-brilha" });
    }
  };

  return (
    <Shell>
      <div className="relative min-h-[calc(100vh-6rem)] -mx-4 -my-2 px-4 py-6 rounded-3xl overflow-hidden">
        {world === "dinossauros" ? <DinoWorld /> : <WorldBackground world={world} />}

        {/* Trilha */}
        <div className="relative z-10">
          <DayTrail currentDay={currentDay} theme={theme} onSpeakDay={speakDay} onOpenToday={abrirAulaHoje} />
        </div>

        {/* Botão Ouvir flutuante */}
        {supported && (
          <button
            type="button"
            onClick={() => (speaking ? stop() : speak(greeting, { rate: 0.95 }))}
            aria-label={speaking ? "Parar leitura" : "Ouvir"}
            className="fixed bottom-24 left-3 z-30 sm:bottom-28 sm:left-6 h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-[0_8px_24px_rgba(0,0,0,0.35)] active:scale-95"
          >
            {speaking ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </button>
        )}

        {/* Mascote da criança — flutua no canto, sem cobrir trilha */}
        {activeMascot?.mascot?.image_url && (
          <div className="pointer-events-none fixed bottom-24 right-3 z-20 sm:bottom-28 sm:right-6">
            <img
              src={activeMascot.mascot.image_url}
              alt={activeMascot.mascot.name ?? "Mascote"}
              className="w-20 h-20 sm:w-28 sm:h-28 object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]"
            />
          </div>
        )}
      </div>
    </Shell>
  );
}

// ===== TRILHA DE 365 DIAS — sem textos técnicos, sem animações =====

function DayTrail({
  currentDay,
  theme,
  onSpeakDay,
  onOpenToday,
}: {
  currentDay: number;
  theme: (typeof WORLD_THEME)[WorldKey];
  onSpeakDay?: (day: number) => void;
  onOpenToday?: () => void;
}) {
  const OFFSETS = [0, 1, 2, 1, 0, -1, -2, -1];
  const totalDays = 365;
  const currentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      currentRef.current?.scrollIntoView({ behavior: "auto", block: "center" });
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

        return (
          <div key={day} className="relative w-full flex flex-col items-center">
            <div
              ref={isCurrent ? currentRef : null}
              className="relative my-2"
              style={{ transform: `translateX(${offset * 60}px)` }}
            >
              <button
                type="button"
                disabled={isLocked}
                onClick={() => {
                  if (isLocked) return;
                  if (isCurrent) {
                    onOpenToday?.();
                    return;
                  }
                  if (isDone) return;
                }}
                className={cn(
                  "group relative block focus:outline-none",
                  isLocked && "cursor-not-allowed",
                )}
                aria-label={`Dia ${day}`}
              >
                <div
                  className={cn(
                    "absolute inset-x-2 bottom-0 h-[88%] rounded-full",
                    isLocked ? "bg-slate-500/60" : isDone ? "bg-amber-700" : "bg-primary/80",
                    "translate-y-[6px] blur-[1px]",
                  )}
                  aria-hidden
                />

                <div
                  className={cn(
                    "relative w-[156px] h-[156px] rounded-full grid place-items-center overflow-hidden",
                    "border-[8px] border-white",
                    isLocked
                      ? "bg-gradient-to-b from-slate-300 to-slate-400 grayscale opacity-90"
                      : isDone
                        ? "bg-gradient-to-b from-amber-300 to-amber-500"
                        : "bg-gradient-to-b from-white to-white/85",
                    !isLocked && "shadow-[0_10px_0_rgba(0,0,0,0.18),0_18px_28px_rgba(0,0,0,0.25)]",
                    !isLocked && theme.accent,
                    !isLocked && "ring-4",
                  )}
                >
                  {isLocked ? (
                    <Lock className="h-12 w-12 text-white drop-shadow" />
                  ) : isDone ? (
                    <Star className="h-14 w-14 text-white fill-white drop-shadow" />
                  ) : (
                    <div className="text-6xl font-black text-primary leading-none">{day}</div>
                  )}
                </div>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
