import React from 'react';
import { motion } from 'framer-motion';
import pipImg from '@/assets/pip-mascot.png';
import pipaImg from '@/assets/pip-girl-mascot.png';

interface MascotTeacherProps {
  type: 'pip' | 'pipa';
  isSpeaking: boolean;
}

/**
 * Padrão visual obrigatório Escola Brilha:
 * - Pipa (menina) SEMPRE no canto inferior ESQUERDO
 * - Pip (azul) SEMPRE no canto inferior DIREITO
 * - Ambos sempre visíveis. O que está "falando" anima.
 */
export const MascotTeacher: React.FC<MascotTeacherProps> = ({ type, isSpeaking }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 pointer-events-none flex justify-between items-end px-2 sm:px-6">
      <MascotImage src={pipaImg} alt="Pipa" speaking={isSpeaking && type === 'pipa'} side="left" />
      <MascotImage src={pipImg} alt="Pip" speaking={isSpeaking && type === 'pip'} side="right" />
    </div>
  );
};

const MascotImage: React.FC<{
  src: string;
  alt: string;
  speaking: boolean;
  side: 'left' | 'right';
}> = ({ src, alt, speaking, side }) => (
  <motion.img
    src={src}
    alt={alt}
    initial={{ y: 120, opacity: 0 }}
    animate={
      speaking
        ? { y: [0, -8, 0], opacity: 1, scale: [1, 1.04, 1] }
        : { y: 0, opacity: 1, scale: 1 }
    }
    transition={
      speaking
        ? { repeat: Infinity, duration: 0.7, ease: 'easeInOut' }
        : { duration: 0.4 }
    }
    style={{ transformOrigin: 'bottom center' }}
    className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)] select-none"
    draggable={false}
  />
);
