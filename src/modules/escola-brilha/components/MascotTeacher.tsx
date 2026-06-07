import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMascot } from '@/contexts/MascotContext';
import pipImg from '@/assets/pip-mascot.png';
import pipaImg from '@/assets/pip-girl-mascot.png';

interface MascotTeacherProps {
  type: 'pip' | 'pipa';
  isSpeaking: boolean;
  size?: 'large' | 'medium' | 'mentor';
}

/**
 * Padrão visual Escola Brilha:
 * - Interface A: Pipa na esquerda, Pip na direita.
 * - Interface B/C/Modern: Mascote posicionado à direita para dar espaço ao conteúdo.
 */
export const MascotTeacher: React.FC<MascotTeacherProps> = ({ isSpeaking, size = 'large' }) => {
  const { activeMascot } = useMascot();
  
  const selectedMascot = activeMascot?.mascot?.name?.toLowerCase();
  const isPipa = selectedMascot === 'pipa';
  const isPip = selectedMascot === 'pip' || !isPipa; 

  return (
    <div className={`fixed bottom-0 left-0 w-full z-40 pointer-events-none flex ${size === 'large' ? 'justify-between' : 'justify-end'} items-end px-2 sm:px-6`}>
      {size === 'large' && (
        <AnimatePresence mode="wait">
          {isPipa ? (
            <MascotImage 
              key="pipa-left"
              src={pipaImg} 
              alt="Pipa" 
              speaking={isSpeaking} 
              side="left" 
              size={size}
            />
          ) : (
            <div key="spacer-left" className="w-28 sm:w-40 md:w-48" />
          )}
        </AnimatePresence>
      )}

      <div className="flex items-end gap-2">
        <AnimatePresence mode="wait">
          {size !== 'large' && isPipa ? (
             <MascotImage 
              key="pipa-right"
              src={pipaImg} 
              alt="Pipa" 
              speaking={isSpeaking} 
              side="right" 
              size={size}
            />
          ) : isPip ? (
            <MascotImage 
              key="pip-right"
              src={pipImg} 
              alt="Pip" 
              speaking={isSpeaking} 
              side="right" 
              size={size}
            />
          ) : (
            <div key="spacer-right" className={size === 'mentor' ? "w-16 sm:w-20" : "w-28 sm:w-40 md:w-48"} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const MascotImage: React.FC<{
  src: string;
  alt: string;
  speaking: boolean;
  side: 'left' | 'right';
  size: 'large' | 'medium' | 'mentor';
}> = ({ src, alt, speaking, size }) => {
  const sizeClasses = {
    large: 'w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48',
    medium: 'w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36',
    mentor: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-80'
  };

  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ y: 120, opacity: 0 }}
      animate={
        speaking
          ? { y: [0, -8, 0], opacity: 1, scale: [1, 1.04, 1] }
          : { y: 0, opacity: 1, scale: 1 }
      }
      exit={{ y: 120, opacity: 0 }}
      transition={
        speaking
          ? { repeat: Infinity, duration: 0.7, ease: 'easeInOut' }
          : { duration: 0.4 }
      }
      style={{ transformOrigin: 'bottom center' }}
      className={`${sizeClasses[size]} object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)] select-none`}
      draggable={false}
    />
  );
};
