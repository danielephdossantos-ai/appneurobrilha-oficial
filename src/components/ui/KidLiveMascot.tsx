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
            "relative rounded-full flex items-center justify-center overflow-visible",
            sizes[size],
            getEmotionStyles()
          )}
        >
          <img
            src={pipMascot}
            alt="Pip - O Guardião dos Desafios"
            className="w-full h-full object-contain drop-shadow-xl select-none pointer-events-none"
            draggable={false}
          />
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
