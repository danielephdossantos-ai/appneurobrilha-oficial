import React from 'react';

import { cn } from '@/utils/utils';
import { useAppState } from '@/core/store';

import pipMascot from '@/assets/pip-mascot.png';
import pipDinossauros from '@/assets/pip-dinossauros.png';
import pipEspaco from '@/assets/pip-espaco.png';
import pipArte from '@/assets/pip-arte.png';
import pipAnimais from '@/assets/pip-animais.png';
import pipMusica from '@/assets/pip-musica.png';
import pipFazendinha from '@/assets/pip-fazendinha.png';
import pipSuperHerois from '@/assets/pip-super-herois.png';
import pipPrincesas from '@/assets/pip-princesas.png';
import pipMinecraft from '@/assets/pip-minecraft.png';
import pipCarros from '@/assets/pip-carros.png';
import pipTrens from '@/assets/pip-trens.png';
import pipRobos from '@/assets/pip-robos.png';
import pipVeiculos from '@/assets/pip-veiculos.png';

export const PIP_SKINS: Record<string, string> = {
  dinossauros: pipDinossauros,
  espaco: pipEspaco,
  arte: pipArte,
  animais: pipAnimais,
  musica: pipMusica,
  fazendinha: pipFazendinha,
  'super-herois': pipSuperHerois,
  princesas: pipPrincesas,
  minecraft: pipMinecraft,
  carros: pipCarros,
  trens: pipTrens,
  robos: pipRobos,
  veiculos: pipVeiculos,
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

  // REGRA OFICIAL NEUROBRILHA: apenas Pip ou Pipa aparecem no app.
  // Ignoramos qualquer outro mascote selecionado (inclui robôs antigos).
  const getMascotImage = () => {
    const firstHyperfocus = activeChild?.hyperfocus_list?.[0];
    if (firstHyperfocus && PIP_SKINS[firstHyperfocus]) {
      return PIP_SKINS[firstHyperfocus];
    }
    return pipMascot;
  };

  const mascotImage = getMascotImage();

  const sizes = {
    sm: 'w-12 h-12 md:w-16 md:h-16',
    md: 'w-20 h-20 md:w-24 md:h-24',
    lg: 'w-28 h-28 md:w-32 md:h-32',
    xl: 'w-36 h-36 md:w-48 md:h-48',
    '2xl': 'w-52 h-52 md:w-64 md:h-64',
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
            alt="Pip - O Guardião dos Desafios"
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

