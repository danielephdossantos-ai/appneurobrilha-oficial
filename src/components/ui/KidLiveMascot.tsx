import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/utils';
import { useAppState } from '@/core/store';
import { useMascot } from '@/contexts/MascotContext';
import pipMascot from '@/assets/pip-mascot.png';
import { Award, Puzzle } from 'lucide-react';

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

    return pipMascot;
  };

  const mascotImage = getMascotImage();

  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-56 h-56',
    xl: 'w-72 h-72',
    '2xl': 'w-96 h-96',
  };

  const getEmotionStyles = () => {
    switch (emotion) {
      case 'happy': return 'animate-bounce-gentle';
      case 'excited': return 'animate-celebrate';
      case 'sleeping': return 'animate-yawn opacity-80';
      case 'thinking': return 'animate-float-thinking';
      case 'proud': return 'scale-110';
      case 'waving': return 'animate-wave';
      case 'blinking': return 'animate-blink';
      default: return '';
    }
  };

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${emotion}-${mascotImage}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className={cn(
            "relative flex items-center justify-center overflow-visible",
            sizes[size],
            getEmotionStyles()
          )}
        >
          {/* Símbolo de Quebra-cabeça Luminoso no Peito (apenas para o Pip) */}
          {isPip && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="relative w-1/4 h-1/4 translate-y-2">
                <Puzzle 
                  className="w-full h-full text-sun animate-glow-puzzle fill-sun/20" 
                  strokeWidth={3}
                />
              </div>
            </div>
          )}

          {/* Selo Mascote Oficial */}
          {isPip && showBadge && (
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: -15 }}
              className="absolute -top-2 -right-4 bg-sun text-primary font-black text-[10px] px-2 py-1 rounded-lg border-2 border-primary shadow-soft z-20 flex items-center gap-1 uppercase"
            >
              <Award className="w-3 h-3" />
              Mascote Oficial
            </motion.div>
          )}

          <img
            src={mascotImage}
            alt="Pip - O Guardião dos Desafios"
            className="w-full h-full object-contain drop-shadow-2xl select-none pointer-events-none"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>
      
      {message && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white px-6 py-3 rounded-2xl border-2 border-primary/20 shadow-soft relative max-w-xs"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-primary/20 rotate-45" />
          <p className="text-primary font-bold text-center text-sm md:text-base">{message}</p>
        </motion.div>
      )}
    </div>
  );
};

export default LiveMascot;
