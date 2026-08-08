import React from "react";

import { cn } from "@/utils/utils";
import { useMascot } from "@/contexts/MascotContext";
import { url as pipaMascot } from "@/assets/pip-girl-mascot.png.asset.json";
import { useAppState } from "@/core/store";
import { useMascotStage } from "@/lib/mascot-stage";

import { url as pipMascot } from "@/assets/pip-mascot.png.asset.json";
import { url as pipEgg } from "@/assets/pip-egg.png.asset.json";
import { url as pipHatching } from "@/assets/pip-hatching.png.asset.json";
import { url as pipBaby } from "@/assets/pip-baby.png.asset.json";
import { url as pipaEgg } from "@/assets/pipa-egg.png.asset.json";
import { url as pipaHatching } from "@/assets/pipa-hatching.png.asset.json";
import { url as pipaBaby } from "@/assets/pipa-baby.png.asset.json";
import { url as pipDinossauros } from "@/assets/pip-dinossauros.png.asset.json";
import { url as pipEspaco } from "@/assets/pip-espaco.png.asset.json";
import { url as pipArte } from "@/assets/pip-arte.png.asset.json";
import { url as pipAnimais } from "@/assets/pip-animais.png.asset.json";
import { url as pipMusica } from "@/assets/pip-musica.png.asset.json";
import { url as pipFazendinha } from "@/assets/pip-fazendinha.png.asset.json";
import { url as pipSuperHerois } from "@/assets/pip-super-herois.png.asset.json";
import { url as pipPrincesas } from "@/assets/pip-princesas.png.asset.json";
import { url as pipMinecraft } from "@/assets/pip-minecraft.png.asset.json";
import { url as pipCarros } from "@/assets/pip-carros.png.asset.json";
import { url as pipTrens } from "@/assets/pip-trens.png.asset.json";
import { url as pipRobos } from "@/assets/pip-robos.png.asset.json";
import { url as pipVeiculos } from "@/assets/pip-veiculos.png.asset.json";
import { getStarterMascot } from "@/components/pip/EggHatchCinematic";


export const PIP_SKINS: Record<string, string> = {
  dinossauros: pipDinossauros,
  espaco: pipEspaco,
  arte: pipArte,
  animais: pipAnimais,
  musica: pipMusica,
  fazendinha: pipFazendinha,
  "super-herois": pipSuperHerois,
  princesas: pipPrincesas,
  minecraft: pipMinecraft,
  carros: pipCarros,
  trens: pipTrens,
  robos: pipRobos,
  veiculos: pipVeiculos,
};

type Emotion = "happy" | "thinking" | "excited" | "sleeping" | "proud" | "waving" | "blinking";

interface LiveMascotProps {
  emotion?: Emotion;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  message?: string;
  showBadge?: boolean;
}

const LiveMascot = ({
  emotion = "happy",
  size = "md",
  className,
  message,
  showBadge = true,
}: LiveMascotProps) => {
  const { activeChild } = useAppState();
  const stage = useMascotStage(activeChild?.id);

  // REGRA OFICIAL NEUROBRILHA: A criança pode alternar entre seus mascotes desbloqueados.
  // A Cidade do Pip suporta Pip, Pipa e novos amigos da loja.
  let activeMascot: any;
  try {
    activeMascot = useMascot().activeMascot;
  } catch {
    activeMascot = null;
  }
  
  const activeMascotName = activeMascot?.mascot?.name?.toLowerCase();
  
  // Se não tiver um mascote ativo no BD (ex: logo após anamnese), usa a escolha salva no localStorage
  const starterChoice = getStarterMascot(activeChild?.id);
  const isPipa = activeMascotName === "pipa" || (!activeMascotName && starterChoice === "pipa");
  const isDino = activeMascotName === "dino";
  const isRobo = activeMascotName === "robo";
  const isUnicornio = activeMascotName === "unicórnio" || activeMascotName === "unicornio";

  // Mapeamento de imagens por mascote e estágio
  const stageImages: Record<string, string> = isPipa
    ? { ovo: pipaEgg, nascendo: pipaHatching, bebe: pipaBaby, crianca: pipaMascot }
    : isDino
    ? { ovo: pipEgg, nascendo: pipHatching, bebe: pipBaby, crianca: "https://vjhzsqpzhxqyvxz.supabase.co/storage/v1/object/public/assets/mascot-dino.png" } // Fallback para URLs se não houver asset local
    : isRobo
    ? { ovo: pipEgg, nascendo: pipHatching, bebe: pipBaby, crianca: "https://vjhzsqpzhxqyvxz.supabase.co/storage/v1/object/public/assets/mascot-robo.png" }
    : isUnicornio
    ? { ovo: pipEgg, nascendo: pipHatching, bebe: pipBaby, crianca: "https://vjhzsqpzhxqyvxz.supabase.co/storage/v1/object/public/assets/mascot-unicorn.png" }
    : { ovo: pipEgg, nascendo: pipHatching, bebe: pipBaby, crianca: pipMascot };
  
  const mascotImage = stageImages[stage] || stageImages.crianca;



  const sizes = {
    sm: "w-12 h-12 md:w-16 md:h-16",
    md: "w-20 h-20 md:w-24 md:h-24",
    lg: "w-28 h-28 md:w-32 md:h-32",
    xl: "w-36 h-36 md:w-48 md:h-48",
    "2xl": "w-52 h-52 md:w-64 md:h-64",
  };

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <div
        className={cn("relative flex items-center justify-center overflow-visible", sizes[size])}
      >
        {/* Expressões faciais via filtros ou sobreposições se necessário */}
        {/* Para um visual Disney/Pixar premium, focamos no drop-shadow e no glow do puzzle */}

        <img
          src={mascotImage}
          alt={isPipa ? "Pipa - A Guardiã dos Desafios" : "Pip - O Guardião dos Desafios"}
          className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {message && (
        <div className="bg-white px-8 py-5 rounded-[2rem] border-4 border-primary/30 shadow-kid relative max-w-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-t-4 border-l-4 border-primary/30 rotate-45" />
          <p className="text-primary font-black text-center text-lg md:text-xl leading-snug">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default LiveMascot;