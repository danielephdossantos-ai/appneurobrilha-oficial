import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Lock, Trophy } from "lucide-react";
import { cn } from "@/utils/utils";
import { useAppState } from "@/core/store";

// Pip (menino)
import pipEgg from "@/assets/pip-egg.png";
import pipHatching from "@/assets/pip-hatching.png";
import pipBaby from "@/assets/pip-baby.png";
import pipMascot from "@/assets/pip-mascot.png";

// Pipa (menina)
import pipaEgg from "@/assets/pipa-egg.png";
import pipaHatching from "@/assets/pipa-hatching.png";
import pipaBaby from "@/assets/pipa-baby.png";
import pipaMascot from "@/assets/pip-girl-mascot.png";

type StageKey = "ovo" | "nascendo" | "bebe" | "crianca";

interface Stage {
  key: StageKey;
  name: string;
  description: string;
  minCoins: number;
  imagePip: string;
  imagePipa: string;
}

const STAGES: Stage[] = [
  {
    key: "ovo",
    name: "Ovo Mágico",
    description: "Tudo começa aqui! Um ovo cheio de potencial esperando pra nascer.",
    minCoins: 0,
    imagePip: pipEgg,
    imagePipa: pipaEgg,
  },
  {
    key: "nascendo",
    name: "Nascendo",
    description: "O ovo está rachando! O grande momento da chegada ao mundo.",
    minCoins: 50,
    imagePip: pipHatching,
    imagePipa: pipaHatching,
  },
  {
    key: "bebe",
    name: "Bebê",
    description: "Pequenininho, fofinho e curioso. Começando a explorar tudo!",
    minCoins: 200,
    imagePip: pipBaby,
    imagePipa: pipaBaby,
  },
  {
    key: "crianca",
    name: "Guardião dos Desafios",
    description: "Forma completa! Pronto para enfrentar qualquer aventura ao seu lado.",
    minCoins: 500,
    imagePip: pipMascot,
    imagePipa: pipaMascot,
  },
];

type MascotChoice = "pip" | "pipa";

export function PipEvolution() {
  const { activeChild } = useAppState();
  const [mascot, setMascot] = useState<MascotChoice>("pip");

  const totalEarned = activeChild?.total_earned ?? 0;

  const currentStageIndex = useMemo(() => {
    let idx = 0;
    for (let i = 0; i < STAGES.length; i++) {
      if (totalEarned >= STAGES[i].minCoins) idx = i;
    }
    return idx;
  }, [totalEarned]);

  const currentStage = STAGES[currentStageIndex];
  const nextStage = STAGES[currentStageIndex + 1];
  const coinsToNext = nextStage ? Math.max(0, nextStage.minCoins - totalEarned) : 0;
  const progress = nextStage
    ? Math.min(
        100,
        ((totalEarned - currentStage.minCoins) / (nextStage.minCoins - currentStage.minCoins)) *
          100,
      )
    : 100;

  const themeFrom = mascot === "pip" ? "from-sky-100" : "from-pink-100";
  const themeTo = mascot === "pip" ? "to-cyan-50" : "to-rose-50";
  const themeAccent = mascot === "pip" ? "bg-sky-500" : "bg-pink-500";
  const themeText = mascot === "pip" ? "text-sky-600" : "text-pink-600";

  return (
    <section
      className={cn(
        "relative rounded-[2.5rem] p-6 md:p-10 shadow-xl border-4 border-primary/10 overflow-hidden bg-gradient-to-br",
        themeFrom,
        themeTo,
      )}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full text-primary font-black uppercase tracking-widest text-[10px] mb-2">
            <Sparkles size={12} className="text-sun" />
            Linha do Tempo da Evolução
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-primary">
            Veja o {mascot === "pip" ? "Pip" : "a Pipa"} crescer com você!
          </h2>
          <p className="text-muted-foreground mt-1">
            Cada conquista faz seu mascote evoluir. Comece do ovo e chegue ao Guardião dos Desafios.
          </p>
        </div>

        {/* Mascot toggle */}
        <div className="inline-flex bg-white/80 backdrop-blur rounded-full p-1 shadow-md self-start md:self-center">
          <button
            onClick={() => setMascot("pip")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-black transition-all",
              mascot === "pip" ? "bg-sky-500 text-white shadow-md" : "text-sky-600 hover:bg-sky-50",
            )}
          >
            Pip
          </button>
          <button
            onClick={() => setMascot("pipa")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-black transition-all",
              mascot === "pipa"
                ? "bg-pink-500 text-white shadow-md"
                : "text-pink-600 hover:bg-pink-50",
            )}
          >
            Pipa
          </button>
        </div>
      </div>

      {/* Current stage spotlight */}
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 items-center mb-10 bg-white/70 backdrop-blur rounded-3xl p-6 shadow-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${mascot}-${currentStage.key}`}
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.7, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative w-40 h-40 md:w-52 md:h-52 mx-auto"
          >
            <div className={cn("absolute inset-0 rounded-full blur-2xl opacity-50", themeAccent)} />
            <img
              src={mascot === "pip" ? currentStage.imagePip : currentStage.imagePipa}
              alt={currentStage.name}
              className="relative w-full h-full object-contain drop-shadow-2xl"
              width={1024}
              height={1024}
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        <div className="text-center md:text-left">
          <span className={cn("text-[10px] font-black uppercase tracking-[0.2em]", themeText)}>
            Estágio atual · {currentStageIndex + 1} de {STAGES.length}
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-primary mt-1">{currentStage.name}</h3>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto md:mx-0">
            {currentStage.description}
          </p>

          {/* Progress to next */}
          {nextStage ? (
            <div className="mt-5 max-w-md mx-auto md:mx-0">
              <div className="flex items-center justify-between text-xs font-bold text-primary/70 mb-1">
                <span>Próximo: {nextStage.name}</span>
                <span>{coinsToNext} 💰 pra evoluir</span>
              </div>
              <div className="h-3 bg-primary/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={cn("h-full rounded-full", themeAccent)}
                />
              </div>
            </div>
          ) : (
            <div className="mt-5 inline-flex items-center gap-2 bg-sun/20 text-primary font-black px-4 py-2 rounded-full text-sm">
              <Trophy size={16} className="text-sun" />
              Evolução completa!
            </div>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STAGES.map((stage, i) => {
          const unlocked = i <= currentStageIndex;
          const isCurrent = i === currentStageIndex;
          return (
            <motion.div
              key={stage.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative bg-white rounded-3xl p-4 text-center border-4 transition-all",
                isCurrent
                  ? mascot === "pip"
                    ? "border-sky-400 shadow-lg scale-105"
                    : "border-pink-400 shadow-lg scale-105"
                  : "border-primary/10",
                !unlocked && "opacity-60",
              )}
            >
              <div className="relative w-24 h-24 mx-auto mb-3 flex items-center justify-center">
                <img
                  src={mascot === "pip" ? stage.imagePip : stage.imagePipa}
                  alt={stage.name}
                  className={cn(
                    "w-full h-full object-contain drop-shadow-xl transition-all",
                    !unlocked && "grayscale",
                  )}
                  width={512}
                  height={512}
                  loading="lazy"
                />
                {!unlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/40 rounded-full backdrop-blur-sm">
                    <Lock className="text-primary/70" size={24} />
                  </div>
                )}
              </div>
              <span className={cn("text-[9px] font-black uppercase tracking-widest", themeText)}>
                Fase {i + 1}
              </span>
              <h4 className="text-sm font-black text-primary leading-tight mt-1">{stage.name}</h4>
              <p className="text-[10px] text-muted-foreground mt-1">
                {stage.minCoins === 0 ? "Inicial" : `${stage.minCoins} 💰`}
              </p>
              {isCurrent && (
                <div
                  className={cn(
                    "absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] font-black text-white uppercase tracking-wider",
                    themeAccent,
                  )}
                >
                  Você está aqui
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default PipEvolution;
