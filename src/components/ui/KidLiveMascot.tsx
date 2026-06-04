import React from 'react';

import { cn } from '@/utils/utils';
import { useAppState } from '@/core/store';
import { useMascot } from '@/contexts/MascotContext';
import lumiMascot from '@/assets/pip-mascot.png';
import lumiDinossauros from '@/assets/pip-dinossauros.png';
import lumiEspaco from '@/assets/pip-espaco.png';
import lumiArte from '@/assets/pip-arte.png';
import lumiAnimais from '@/assets/pip-animais.png';
import lumiMusica from '@/assets/pip-musica.png';
import lumiFazendinha from '@/assets/pip-fazendinha.png';
import lumiSuperHerois from '@/assets/pip-super-herois.png';
import lumaPrincesas from '@/assets/pip-princesas.png';
import lumiMinecraft from '@/assets/pip-minecraft.png';
import lumiCarros from '@/assets/pip-carros.png';
import lumiTrens from '@/assets/pip-trens.png';
import lumiRobos from '@/assets/pip-robos.png';
import lumiVeiculos from '@/assets/pip-veiculos.png';

export const LUMI_SKINS: Record<string, string> = {
  dinossauros: lumiDinossauros,
  espaco: lumiEspaco,
  arte: lumiArte,
  animais: lumiAnimais,
  musica: lumiMusica,
  fazendinha: lumiFazendinha,
  'super-herois': lumiSuperHerois,
  princesas: lumaPrincesas,
  minecraft: lumiMinecraft,
  carros: lumiCarros,
  trens: lumiTrens,
  robos: lumiRobos,
  veiculos: lumiVeiculos,
};


type Emotion = 'happy' | 'thinking' | 'excited' | 'sleeping' | 'proud' | 'waving' | 'blinking';

interface LiveMascotProps {
  emotion?: Emotion;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  message?: string;
  showBadge?: boolean;
}

const LiveMascot = ({ emotion = 'happy', size = 'md', className, message, showBadge = true }: LiveMascotProps) => {
  const { activeChild } = useAppState();
  const { activeMascot } = useMascot();

  const isLumi = !activeMascot || activeMascot.mascot.name === 'Lumi' || activeMascot.mascot.name === 'Pip';

  const getMascotImage = () => {
    if (!isLumi) {
      return activeMascot?.mascot.image_url || lumiMascot;
    }

    const firstHyperfocus = activeChild?.hyperfocus_list?.[0];
    const skins = activeMascot?.mascot.skins;

    if (firstHyperfocus && skins && skins[firstHyperfocus]) {
      return skins[firstHyperfocus];
    }

    if (firstHyperfocus && LUMI_SKINS[firstHyperfocus]) {
      return LUMI_SKINS[firstHyperfocus];
    }

    return lumiMascot;
  };

  const mascotImage = getMascotImage();

  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48', // Aumentado de 40 para 48
    lg: 'w-64 h-64', // Aumentado de 56 para 64
    xl: 'w-80 h-80', // Aumentado de 72 para 80
    '2xl': 'w-[450px] h-[450px]', // Aumentado significativamente
  };


  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
        <div
          className={cn(
            "relative flex items-center justify-center overflow-visible",
            sizes[size]
          )}
        >
          {/* Expressões faciais via filtros ou sobreposições se necessário */}
          {/* Para um visual Disney/Pixar premium, focamos no drop-shadow e no glow do puzzle */}
          

          <img
            src={mascotImage}
            alt="Lumi - O Guardião dos Desafios"
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] select-none pointer-events-none"
            draggable={false}
          />
        </div>
      
      {message && (
        <div
          className="bg-white px-8 py-5 rounded-[2rem] border-4 border-primary/30 shadow-kid relative max-w-sm"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-t-4 border-l-4 border-primary/30 rotate-45" />
          <p className="text-primary font-black text-center text-lg md:text-xl leading-snug">{message}</p>
        </div>
      )}
    </div>
  );
};

export default LiveMascot;

