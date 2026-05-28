import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MascotData } from './catalog';

// Helper component for creating premium SVG mascots
const PremiumMascotSVG = ({ mascot, size, isHovered, isClicked }: { mascot: MascotData, size: number, isHovered: boolean, isClicked: boolean }) => {
  // Logic to determine colors and features based on mascot ID/category
  const getColorScheme = () => {
    if (mascot.category.includes('meninos-herois')) return { primary: '#4F46E5', secondary: '#818CF8', accent: '#F59E0B' };
    if (mascot.category.includes('meninas-princesas')) return { primary: '#EC4899', secondary: '#F472B6', accent: '#FDE68A' };
    if (mascot.category.includes('bichinhos')) return { primary: '#F97316', secondary: '#FB923C', accent: '#FEF3C7' };
    if (mascot.category.includes('profissoes')) return { primary: '#06B6D4', secondary: '#22D3EE', accent: '#E0F2FE' };
    return { primary: '#6366F1', secondary: '#818CF8', accent: '#C7D2FE' };
  };

  const colors = getColorScheme();
  
  // Custom features based on ID
  const isSuperHero = mascot.category.includes('herois') || mascot.category.includes('heroinas');
  const isAnimal = mascot.category.includes('animais') || mascot.category.includes('bichinhos');
  const isPrincess = mascot.category.includes('princesas');

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-xl"
    >
      {/* Body/Head Base */}
      <motion.ellipse 
        cx="100" cy="110" rx="60" ry="70" 
        fill={colors.primary} 
        animate={{ rx: isHovered ? 62 : 60, ry: isHovered ? 72 : 70 }}
      />
      
      {/* Face Area */}
      <ellipse cx="100" cy="115" rx="50" ry="55" fill="white" fillOpacity="0.15" />

      {/* Eyes (Premium Style: Large, Expressive) */}
      <g>
        {/* Left Eye */}
        <motion.g animate={{ scaleY: isClicked ? 0.1 : 1 }}>
          <circle cx="75" cy="105" r="15" fill="#1A1A40" />
          <circle cx="80" cy="98" r="5" fill="white" /> {/* Reflection */}
          <circle cx="70" cy="110" r="2" fill="white" fillOpacity="0.5" />
        </motion.g>
        
        {/* Right Eye */}
        <motion.g animate={{ scaleY: isClicked ? 0.1 : 1 }}>
          <circle cx="125" cy="105" r="15" fill="#1A1A40" />
          <circle cx="120" cy="98" r="5" fill="white" /> {/* Reflection */}
          <circle cx="130" cy="110" r="2" fill="white" fillOpacity="0.5" />
        </motion.g>
      </g>

      {/* Cheeks */}
      <circle cx="60" cy="125" r="8" fill="#FFB6C1" fillOpacity="0.4" />
      <circle cx="140" cy="125" r="8" fill="#FFB6C1" fillOpacity="0.4" />

      {/* Mouth */}
      <motion.path 
        d={isHovered ? "M 85 140 Q 100 155 115 140" : "M 90 145 Q 100 150 110 145"} 
        stroke="#1A1A40" 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none"
      />

      {/* Accessories based on type */}
      {isSuperHero && (
        <g>
          <path d="M 40 80 L 160 80 L 150 60 L 50 60 Z" fill={colors.accent} /> {/* Hero Mask/Band */}
          <path d="M 100 40 L 110 60 L 90 60 Z" fill={colors.accent} /> {/* Hero Emblem/Top */}
        </g>
      )}

      {isAnimal && (
        <g>
          {/* Ears */}
          <circle cx="50" cy="60" r="20" fill={colors.secondary} />
          <circle cx="150" cy="60" r="20" fill={colors.secondary} />
          <circle cx="50" cy="60" r="12" fill="#FEE2E2" />
          <circle cx="150" cy="60" r="12" fill="#FEE2E2" />
        </g>
      )}

      {isPrincess && (
        <g>
          {/* Crown/Tiara */}
          <path d="M 70 50 L 85 30 L 100 50 L 115 30 L 130 50 Z" fill={colors.accent} />
          <circle cx="100" cy="25" r="5" fill="#FDE68A" />
        </g>
      )}
      
      {/* Interactive Sparkle effect */}
      {isClicked && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <path d="M 20 20 L 30 30 M 170 20 L 160 30 M 20 180 L 30 170 M 170 180 L 160 170" stroke="gold" strokeWidth="2" />
        </motion.g>
      )}
    </svg>
  );
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

      {/* Premium SVG Mascot */}
      <motion.div
        className="relative z-10"
        animate={{
          y: isHovered ? [0, -15, 0] : [0, -8, 0],
          rotate: isClicked ? [0, -10, 10, -5, 0] : isHovered ? [0, 2, -2, 0] : 0,
          scale: isClicked ? [1, 1.15, 1] : isHovered ? 1.1 : 1,
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: isClicked ? 0.6 : 4, repeat: isHovered ? Infinity : 0 },
          scale: { duration: 0.3 },
        }}
      >
        <PremiumMascotSVG mascot={mascot} size={size} isHovered={isHovered} isClicked={isClicked} />
      </motion.div>

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
