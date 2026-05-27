import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MascotData } from './catalog';

import heroiLightning from '@/assets/mascots/heroi-lightning.png';
import heroiShadow from '@/assets/mascots/heroi-shadow.png';
import heroiFire from '@/assets/mascots/heroi-fire.png';
import heroiSky from '@/assets/mascots/heroi-sky.png';
import fadaLisa from '@/assets/mascots/fada-lisa.png';
import princesaNana from '@/assets/mascots/princesa-nana.png';
import heroinaEstela from '@/assets/mascots/heroina-estela.png';
import fadaNuvem from '@/assets/mascots/fada-nuvem.png';
import dogPipo from '@/assets/mascots/dog-pipo.png';
import catLuna from '@/assets/mascots/cat-luna.png';
import bearHug from '@/assets/mascots/bear-hug.png';
import dinoRex from '@/assets/mascots/dino-rex.png';
import pandaPandi from '@/assets/mascots/panda-pandi.png';
import foxFoxy from '@/assets/mascots/fox-foxy.png';
import penguinPingu from '@/assets/mascots/penguin-pingu.png';
import unicornUni from '@/assets/mascots/unicorn-uni.png';
import robotBip from '@/assets/mascots/robot-bip.png';
import astroLeo from '@/assets/mascots/astro-leo.png';

const MASCOT_IMAGES: Record<string, string> = {
  'heroi-lightning': heroiLightning,
  'heroi-shadow': heroiShadow,
  'heroi-fire': heroiFire,
  'heroi-sky': heroiSky,
  'fada-lisa': fadaLisa,
  'princesa-nana': princesaNana,
  'heroina-estela': heroinaEstela,
  'fada-nuvem': fadaNuvem,
  'dog-pipo': dogPipo,
  'cat-luna': catLuna,
  'bear-hug': bearHug,
  'dino-rex': dinoRex,
  'panda-pandi': pandaPandi,
  'fox-foxy': foxFoxy,
  'penguin-pingu': penguinPingu,
  'unicorn-uni': unicornUni,
  'robot-bip': robotBip,
  'astro-leo': astroLeo,
};

interface MascotRendererProps {
  mascot: MascotData;
  size?: number;
  animation?: 'idle' | 'bounce' | 'wave' | 'happy';
  interactive?: boolean;
}

export const MascotRenderer: React.FC<MascotRendererProps> = ({
  mascot,
  size = 200,
  interactive = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const src = MASCOT_IMAGES[mascot.id];

  const handleClick = () => {
    if (!interactive) return;
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 700);
  };

  if (!src) {
    return (
      <div
        className="flex items-center justify-center rounded-3xl bg-muted text-4xl"
        style={{ width: size, height: size }}
      >
        ✨
      </div>
    );
  }

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: size, height: size * 1.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role={interactive ? 'button' : undefined}
    >
      {/* Soft glow halo */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,182,193,0.45) 0%, rgba(186,200,255,0.25) 45%, transparent 70%)',
        }}
        animate={{
          scale: isHovered ? [1, 1.15, 1] : [1, 1.05, 1],
          opacity: isHovered ? 0.9 : 0.55,
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Ground shadow */}
      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-[50%] bg-[rgba(26,26,64,0.18)] blur-[3px]"
        style={{ width: size * 0.55, height: size * 0.06 }}
        animate={{
          scaleX: isHovered ? [1, 1.1, 1] : [1, 0.95, 1],
          opacity: isHovered ? 0.35 : 0.25,
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Mascot image with floating animation */}
      <motion.img
        src={src}
        alt={mascot.name}
        loading="lazy"
        draggable={false}
        className="relative z-10 object-contain drop-shadow-[0_18px_22px_rgba(26,26,64,0.22)]"
        style={{
          width: size,
          height: size,
          cursor: interactive ? 'pointer' : 'default',
        }}
        animate={{
          y: isHovered ? [0, -10, 0] : [0, -6, 0],
          rotate: isClicked ? [0, -6, 6, -3, 0] : 0,
          scale: isClicked ? [1, 1.12, 1] : isHovered ? 1.05 : 1,
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 0.6 },
          scale: { duration: 0.3 },
        }}
      />

      {/* Sparkles on click */}
      <AnimatePresence>
        {isClicked && (
          <>
            {['✨', '💖', '⭐', '🌟', '🌈'].map((emoji, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.4, 1.4, 0.8],
                  x: Math.cos((i * Math.PI * 2) / 5) * size * 0.5,
                  y: Math.sin((i * Math.PI * 2) / 5) * size * 0.5,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute z-20 text-3xl pointer-events-none"
                style={{ left: '50%', top: '50%' }}
              >
                {emoji}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MascotRenderer;
