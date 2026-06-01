import React from 'react';
import { motion } from 'framer-motion';
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
  'super-heroinas': pipPrincesas, // Usando princesas como base para heroinas por enquanto
  princesas: pipPrincesas,
  minecraft: pipMinecraft,
  carros: pipCarros,
  trens: pipTrens,
  robos: pipRobos,
  veiculos: pipVeiculos,
  monstros: pipDinossauros, // Usando dinos como base para monstros
};


type Emotion = 'happy' | 'thinking' | 'excited' | 'sleeping' | 'proud' | 'waving' | 'blinking';

interface LiveMascotProps {
  emotion?: Emotion;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  message?: string;
  showBadge?: boolean;
  overrideImage?: string;
}

const LiveMascot = ({ emotion = 'happy', size = 'md', className, message, showBadge = true, overrideImage }: LiveMascotProps) => {
  const { activeChild } = useAppState();
  const { activeMascot } = useMascot();

  const isPip = !activeMascot || activeMascot.mascot.name === 'Pip';
  const currentLevel = activeMascot?.level || 1;

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

  const mascotImage = overrideImage || getMascotImage();

  // Evolution Scale and Style Logic based on level
  const getEvolutionStyle = () => {
    if (!isPip) return { scale: 1, filter: 'none' };

    if (currentLevel >= 100) return { scale: 1.3, filter: 'drop-shadow(0 0 20px rgba(255,215,0,0.6)) saturate(1.5)' }; // Lendário
    if (currentLevel >= 50) return { scale: 1.25, filter: 'drop-shadow(0 0 15px rgba(255,215,0,0.4))' }; // Guardião
    if (currentLevel >= 35) return { scale: 1.2, filter: 'none' }; // Mestre
    if (currentLevel >= 20) return { scale: 1.15, filter: 'none' }; // Aprendiz
    if (currentLevel >= 10) return { scale: 1.1, filter: 'none' }; // Explorador
    if (currentLevel >= 5) return { scale: 0.9, filter: 'none' }; // Pip Bebê
    return { scale: 0.85, filter: 'none' }; // Baby/Egg phase
  };

  const evolutionStyle = getEvolutionStyle();

  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-80 h-80',
    '2xl': 'w-[450px] h-[450px]',
  };

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
        <motion.div
          animate={{
            scale: evolutionStyle.scale,
            filter: evolutionStyle.filter
          }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className={cn(
            "relative flex items-center justify-center overflow-visible",
            sizes[size]
          )}
        >
          {/* Evolution Aura for High Levels */}
          {currentLevel >= 50 && isPip && (
            <div className="absolute inset-0 bg-sun/20 blur-[60px] rounded-full animate-pulse" />
          )}
          
          <img
            src={mascotImage}
            alt="Pip - O Guardião dos Desafios"
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] select-none pointer-events-none relative z-10"
            draggable={false}
          />
        </motion.div>
      
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

