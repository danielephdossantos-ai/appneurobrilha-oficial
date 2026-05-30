import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/utils';
import pipMascot from '@/assets/pip-mascot.png';

type Emotion = 'happy' | 'thinking' | 'excited' | 'sleeping' | 'proud';

interface LiveMascotProps {
  emotion?: Emotion;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  message?: string;
}

const LiveMascot = ({ emotion = 'happy', size = 'md', className, message }: LiveMascotProps) => {
  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
  };

  const getEmotionStyles = () => {
    switch (emotion) {
      case 'happy': return 'animate-bounce-gentle';
      case 'excited': return 'animate-celebrate';
      case 'sleeping': return 'animate-yawn opacity-80';
      case 'thinking': return 'animate-pulse';
      case 'proud': return 'scale-110';
      default: return '';
    }
  };

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={emotion}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className={cn(
            "relative rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-4 border-primary/30 shadow-inner",
            sizes[size],
            getEmotionStyles()
          )}
        >
          {/* Ilustração simplificada do mascote (Brainy) */}
          <div className="relative w-full h-full p-4 flex items-center justify-center">
             <div className="w-full h-full bg-primary rounded-full relative shadow-lg">
                {/* Olhos */}
                <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-foreground rounded-full" />
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-foreground rounded-full" />
                
                {/* Boca/Expressão baseada na emoção */}
                {emotion === 'happy' && (
                  <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-8 h-4 border-b-4 border-foreground rounded-full" />
                )}
                {emotion === 'thinking' && (
                   <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-6 h-1 bg-foreground rounded-full" />
                )}
                {emotion === 'excited' && (
                  <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-8 h-8 bg-sun rounded-full border-4 border-foreground" />
                )}
                {emotion === 'sleeping' && (
                  <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 flex gap-1">
                    <span className="text-xs font-bold">z</span>
                    <span className="text-sm font-bold">Z</span>
                  </div>
                )}
                
                {/* Brilho */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-white/30 rounded-full" />
             </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {message && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white px-6 py-3 rounded-2xl border-2 border-primary/20 shadow-soft relative"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-primary/20 rotate-45" />
          <p className="text-primary font-bold text-center">{message}</p>
        </motion.div>
      )}
    </div>
  );
};

export default LiveMascot;
