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
  // Local high-quality assets
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

  // Beautiful Avataaars & Big Ears (Modern, Soft, Child-friendly)
  'heroi-aranha': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Spider&backgroundColor=b6e3f4',
  'heroi-hulk': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Hulk&backgroundColor=c0aede',
  'heroi-lobo': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Wolf&backgroundColor=d1d4f9',
  'menino-dragao': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Dragon&backgroundColor=b6e3f4',
  'prof-medico': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Doctor&backgroundColor=ffdfbf',
  'prof-bombeiro': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fireman&backgroundColor=ffd5dc',
  'prof-policial': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Police&backgroundColor=c0aede',
  'prof-professor': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher&backgroundColor=d1d4f9',
  'prof-jogador': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Player&backgroundColor=b6e3f4',
  'prin-rapunzel': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rapunzel&backgroundColor=ffdfbf',
  'prin-ariel': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ariel&backgroundColor=ffd5dc',
  'prin-moana': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Moana&backgroundColor=c0aede',
  'heroina-alerquina': 'https://api.dicebear.com/7.x/avataaars/svg?seed=Harley&backgroundColor=d1d4f9',
  'heroina-gato': 'https://api.dicebear.com/7.x/avataaars/svg?seed=CatGirl&backgroundColor=b6e3f4',
  'heroina-viuva': 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlackWidow&backgroundColor=ffdfbf',
  'fant-gatinha': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Kitty&backgroundColor=ffd5dc',
  'fant-coelhinha': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Bunny&backgroundColor=c0aede',
  'pet-cao': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Dog&backgroundColor=d1d4f9',
  'pet-gato': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Cat&backgroundColor=b6e3f4',
  'pet-urso': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Bear&backgroundColor=ffdfbf',
  'pet-panda': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Panda&backgroundColor=ffd5dc',
  'pet-coelho': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Rabbit&backgroundColor=c0aede',
  'pet-dino': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Dino&backgroundColor=d1d4f9',
  'pet-raposa': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Fox&backgroundColor=b6e3f4',
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
