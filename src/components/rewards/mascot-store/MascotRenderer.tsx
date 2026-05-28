import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MascotData } from './catalog';

// Local high-quality assets
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
  // Use unique local assets for primary spots (these were already called "beautiful")
  'heroi-flecha': heroiLightning,
  'heroi-morcego': heroiShadow,
  'heroi-ferro': heroiFire,
  'heroi-capitao': heroiSky,
  'menino-urso': bearHug,
  'menino-cao': dogPipo,
  'menino-gato': catLuna,
  'menino-dino': dinoRex,
  'prin-neve': princesaNana,
  'prin-cinderela': fadaNuvem,
  'heroina-maravilha': heroinaEstela,
  'fant-panda': pandaPandi,
  'pet-pinguim': penguinPingu,
  'fant-unicornio': unicornUni,
  'prof-cientista': robotBip,
  'menino-leao': astroLeo,
  'prin-malevola': fadaLisa,
  'menino-tigre': foxFoxy,

  // Using a more reliable image source for diverse, high-quality cartoon characters
  'heroi-aranha': 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Hero
  'heroi-hulk': 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png', // Strong
  'heroi-lobo': 'https://cdn-icons-png.flaticon.com/512/3135/3135780.png', // Wolf-like hero
  'menino-dragao': 'https://cdn-icons-png.flaticon.com/512/616/616430.png', // Cute Dragon
  'prof-medico': 'https://cdn-icons-png.flaticon.com/512/2302/2302910.png', // Doctor
  'prof-bombeiro': 'https://cdn-icons-png.flaticon.com/512/2302/2302830.png', // Fireman
  'prof-policial': 'https://cdn-icons-png.flaticon.com/512/2302/2302834.png', // Police
  'prof-professor': 'https://cdn-icons-png.flaticon.com/512/2302/2302852.png', // Teacher
  'prof-jogador': 'https://cdn-icons-png.flaticon.com/512/2302/2302826.png', // Player
  'prin-rapunzel': 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', // Princess
  'prin-ariel': 'https://cdn-icons-png.flaticon.com/512/3135/3135802.png', // Mermaid
  'prin-moana': 'https://cdn-icons-png.flaticon.com/512/3135/3135784.png', // Islander
  'heroina-alerquina': 'https://cdn-icons-png.flaticon.com/512/3135/3135728.png', // Heroine
  'heroina-gato': 'https://cdn-icons-png.flaticon.com/512/3135/3135752.png', // Catgirl (Cute)
  'heroina-viuva': 'https://cdn-icons-png.flaticon.com/512/3135/3135764.png', // Heroine
  'fant-gatinha': 'https://cdn-icons-png.flaticon.com/512/616/616432.png', // Kawaii Cat
  'fant-coelhinha': 'https://cdn-icons-png.flaticon.com/512/616/616444.png', // Kawaii Bunny
  'pet-cao': 'https://cdn-icons-png.flaticon.com/512/616/616408.png', // Cute Dog
  'pet-gato': 'https://cdn-icons-png.flaticon.com/512/616/616430.png', // Cute Cat
  'pet-urso': 'https://cdn-icons-png.flaticon.com/512/616/616412.png', // Teddy Bear
  'pet-panda': 'https://cdn-icons-png.flaticon.com/512/616/616422.png', // Panda
  'pet-coelho': 'https://cdn-icons-png.flaticon.com/512/616/616440.png', // Rabbit
  'pet-dino': 'https://cdn-icons-png.flaticon.com/512/616/616416.png', // Dino
  'pet-raposa': 'https://cdn-icons-png.flaticon.com/512/616/616426.png', // Fox
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
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: mascot.category.includes('meninas') 
            ? 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: isHovered ? [1, 1.2, 1] : [1, 1.05, 1],
          opacity: isHovered ? 0.8 : 0.4,
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Mascot Image */}
      <motion.img
        src={src || bearHug}
        alt={mascot.name}
        className="relative z-10 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
        style={{ width: size, height: size }}
        animate={{
          y: isHovered ? [0, -15, 0] : [0, -8, 0],
          rotate: isClicked ? [0, -10, 10, -5, 0] : 0,
          scale: isClicked ? [1, 1.15, 1] : isHovered ? 1.1 : 1,
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 0.6 },
          scale: { duration: 0.3 },
        }}
      />

      {/* Ground shadow */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-[50%] bg-black/10 blur-md"
        style={{ width: size * 0.6, height: size * 0.08 }}
        animate={{
          scaleX: isHovered ? [1, 1.15, 1] : [1, 0.9, 1],
          opacity: isHovered ? 0.4 : 0.2,
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Sparkles on click */}
      <AnimatePresence>
        {isClicked && (
          <div className="absolute inset-0 pointer-events-none">
            {['✨', '⭐', '🌟', '💖'].map((emoji, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  x: (Math.random() - 0.5) * size,
                  y: (Math.random() - 0.5) * size,
                }}
                transition={{ duration: 0.8 }}
                className="absolute left-1/2 top-1/2 text-2xl"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MascotRenderer;
