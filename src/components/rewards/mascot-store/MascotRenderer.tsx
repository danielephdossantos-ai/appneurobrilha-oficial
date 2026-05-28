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

  // Soft, cute "Kawaii" style for the rest - guaranteed to be friendly and not scary
  'heroi-aranha': 'https://img.icons8.com/kawaii/200/spider-man.png',
  'heroi-hulk': 'https://img.icons8.com/kawaii/200/hulk.png',
  'heroi-lobo': 'https://img.icons8.com/kawaii/200/wolf.png',
  'menino-dragao': 'https://img.icons8.com/kawaii/200/dragon.png',
  'prof-medico': 'https://img.icons8.com/kawaii/200/doctor.png',
  'prof-bombeiro': 'https://img.icons8.com/kawaii/200/fireman.png',
  'prof-policial': 'https://img.icons8.com/kawaii/200/police.png',
  'prof-professor': 'https://img.icons8.com/kawaii/200/teacher.png',
  'prof-jogador': 'https://img.icons8.com/kawaii/200/football-player.png',
  'prin-rapunzel': 'https://img.icons8.com/kawaii/200/princess.png',
  'prin-ariel': 'https://img.icons8.com/kawaii/200/mermaid.png',
  'prin-moana': 'https://img.icons8.com/kawaii/200/moana.png',
  'heroina-alerquina': 'https://img.icons8.com/kawaii/200/harley-quinn.png',
  'heroina-gato': 'https://img.icons8.com/kawaii/200/catwoman.png',
  'heroina-viuva': 'https://img.icons8.com/kawaii/200/black-widow.png',
  'fant-gatinha': 'https://img.icons8.com/kawaii/200/cat.png',
  'fant-coelhinha': 'https://img.icons8.com/kawaii/200/rabbit.png',
  'pet-cao': 'https://img.icons8.com/kawaii/200/dog.png',
  'pet-gato': 'https://img.icons8.com/kawaii/200/cat.png',
  'pet-urso': 'https://img.icons8.com/kawaii/200/bear.png',
  'pet-panda': 'https://img.icons8.com/kawaii/200/panda.png',
  'pet-coelho': 'https://img.icons8.com/kawaii/200/rabbit.png',
  'pet-dino': 'https://img.icons8.com/kawaii/200/dinosaur.png',
  'pet-raposa': 'https://img.icons8.com/kawaii/200/fox.png',
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
