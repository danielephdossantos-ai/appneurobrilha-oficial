import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/utils';
import { useAppState } from '@/core/store';
import { useMascot } from '@/contexts/MascotContext';
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
import { Puzzle } from 'lucide-react';

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

  const isPip = !activeMascot || activeMascot.mascot.name === 'Pip';

  const getMascotImage = () => {
    if (!isPip) {
      return activeMascot?.mascot.image_url || pipMascot;
    }

    const firstHyperfocus = activeChild?.hyperfocus_list?.[0];
    const skins = activeMascot?.mascot.skins;

    if (firstHyperfocus && skins && skins[firstHyperfocus]) {
      return skins[firstHyperfocus];
    }

    if (firstHyperfocus && PIP_SKINS[firstHyperfocus]) {
      return PIP_SKINS[firstHyperfocus];
    }

    return pipMascot;
  };

  const mascotImage = getMascotImage();

  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48', // Aumentado de 40 para 48
    lg: 'w-64 h-64', // Aumentado de 56 para 64
    xl: 'w-80 h-80', // Aumentado de 72 para 80
    '2xl': 'w-[450px] h-[450px]', // Aumentado significativamente
  };

  const getEmotionStyles = () => {
    switch (emotion) {
      case 'sleeping': return 'opacity-80';
      case 'proud': return 'scale-110';
      default: return '';
    }
  };

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <div
        key={`${emotion}-${mascotImage}`}
        className={cn(
          "relative flex items-center justify-center overflow-visible",
          sizes[size],
          getEmotionStyles()
        )}
      >
        {/* Expressões faciais via filtros ou sobreposições se necessário */}
        {/* Para um visual Disney/Pixar premium, focamos no drop-shadow e no glow do puzzle */}
        
        {/* Símbolo de Quebra-cabeça Luminoso no Peito (apenas para o Pip) */}
        {isPip && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="relative w-1/5 h-1/5 translate-y-4">
              <Puzzle 
                className="w-full h-full text-sun fill-sun/40 drop-shadow-[0_0_15px_oklch(var(--sun))]" 
                strokeWidth={3}
              />
            </div>
          </div>
        )}

        <img
          src={mascotImage}
          alt="Pip - O Guardião dos Desafios"
          className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] select-none pointer-events-none"
          draggable={false}
        />
      </div>
      
      {message && (
        <div className="bg-white px-8 py-5 rounded-[2rem] border-4 border-primary/30 shadow-kid relative max-w-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-t-4 border-l-4 border-primary/30 rotate-45" />
          <p className="text-primary font-black text-center text-lg md:text-xl leading-snug">{message}</p>
        </div>
      )}
    </div>
  );
};

export default LiveMascot;

