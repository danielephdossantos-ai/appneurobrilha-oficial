import React from 'react';

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
}

const LiveMascot = ({ emotion = 'happy', size = 'md', className, message, showBadge = true }: LiveMascotProps) => {
  const { activeChild } = useAppState();
  const { activeMascot } = useMascot();

  const isPip = !activeMascot || activeMascot.mascot.name === 'Pip';

  const getMascotImage = () => {
    // 1. Verificar se há uma skin específica selecionada na loja
    const activeSkinUrl = (activeChild?.flags as any)?.active_skin_url;
    if (activeSkinUrl) return activeSkinUrl;

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


  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
        <div
          className={cn(
            "relative flex items-center justify-center overflow-visible",
            sizes[size]
          )}
        >
          {/* Efeito de Aura da Fantasia */}
          {(activeChild?.flags as any)?.active_skin_color && (
            <div 
              className="absolute inset-0 blur-3xl opacity-20 rounded-full animate-pulse"
              style={{ backgroundColor: (activeChild?.flags as any).active_skin_color }}
            />
          )}

          <img
            src={mascotImage}
            alt="Pip - O Guardião dos Desafios"
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] select-none pointer-events-none relative z-10"
            draggable={false}
            style={{ filter: (activeChild?.flags as any)?.active_skin_filter || 'none' }}
          />

          {/* Símbolo da Fantasia no Peito (Estilo Tom Gato) */}
          {(activeChild?.flags as any)?.active_skin_logo && (
            <div 
              className={cn(
                "absolute z-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl border-4 transform translate-y-4 md:translate-y-8",
                size === 'sm' ? 'w-6 h-6 text-[8px]' : 
                size === 'md' ? 'w-10 h-10 text-xs' : 
                size === 'lg' ? 'w-14 h-14 text-lg' : 
                size === 'xl' ? 'w-18 h-18 text-2xl' : 'w-24 h-24 text-4xl'
              )}
              style={{ 
                borderColor: (activeChild?.flags as any).active_skin_secondary || '#eee',
                color: (activeChild?.flags as any).active_skin_color
              }}
            >
              <span className="font-black">{(activeChild?.flags as any).active_skin_logo}</span>
            </div>
          )}
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

