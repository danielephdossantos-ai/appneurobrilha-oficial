
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MascotData, SkinType, HairColor } from './catalog';

interface MascotRendererProps {
  mascot: MascotData;
  size?: number;
  animation?: 'idle' | 'bounce' | 'wave' | 'happy';
  interactive?: boolean;
}

const SKIN_COLORS: Record<SkinType, string> = {
  white: '#FFE0BD',
  brown: '#8D5524',
  light: '#FFDBAC',
  dark: '#3C2E23',
  none: 'transparent',
};

const HAIR_COLORS: Record<HairColor, string> = {
  blonde: '#F5D45E',
  black: '#2C2C2C',
  red: '#C65D3B',
  brown: '#5D4037',
  none: 'transparent',
};

// --- Standardized Visual DNA Components ---

const Eye = ({ color = "#4A90E2", isHovered = false }) => (
  <g className="eye">
    {/* Eye Socket */}
    <circle r="18" fill="white" stroke="#1A1A40" strokeWidth="2" />
    {/* Iris */}
    <motion.circle 
      r="10" 
      fill={color} 
      animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
    />
    {/* Pupil */}
    <circle r="5" fill="#1A1A40" />
    {/* Highlights - The "Sparkle" DNA */}
    <circle cx="5" cy="-5" r="5" fill="white" fillOpacity="0.9" />
    <circle cx="-3" cy="3" r="2" fill="white" fillOpacity="0.5" />
  </g>
);

const StandardFace = ({ mascot, isHovered, isClicked }: { mascot: MascotData, isHovered: boolean, isClicked: boolean }) => {
  const eyeColor = mascot.details?.eyeColor || "#4A90E2";
  
  return (
    <g transform="translate(100, 95)">
      {/* Blushing - Consistent across all */}
      <circle cx="-45" cy="15" r="10" fill="#FFB6C1" fillOpacity="0.4" />
      <circle cx="45" cy="15" r="10" fill="#FFB6C1" fillOpacity="0.4" />

      {/* Eyes */}
      <motion.g 
        animate={{ 
          scaleY: [1, 1, 1, 0.1, 1],
          y: isHovered ? [0, -2, 0] : 0 
        }} 
        transition={{ 
          scaleY: { duration: 3, repeat: Infinity, times: [0, 0.9, 0.92, 0.95, 1] },
          y: { duration: 0.5, repeat: Infinity }
        }}
      >
        <g transform="translate(-32, -5)">
          <Eye color={eyeColor} isHovered={isHovered} />
        </g>
        <g transform="translate(32, -5)">
          <Eye color={eyeColor} isHovered={isHovered} />
        </g>
      </motion.g>

      {/* Mouth - Kawaii style */}
      <motion.path 
        d={isClicked || isHovered ? "M-10 25 Q0 40 10 25" : "M-8 28 Q0 35 8 28"}
        fill="none" 
        stroke="#1A1A40" 
        strokeWidth="4" 
        strokeLinecap="round"
        animate={isClicked ? { scale: 1.2 } : { scale: 1 }}
      />
    </g>
  );
};

export const MascotRenderer: React.FC<MascotRendererProps> = ({ 
  mascot, 
  size = 200, 
  animation = 'idle',
  interactive = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
  };

  const handleClick = () => {
    if (!interactive) return;
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  const getBaseColor = () => {
    if (mascot.type === 'human') return SKIN_COLORS[mascot.skin || 'light'];
    return getCostumeColor(mascot.costume);
  };

  const renderBody = () => {
    const color = getBaseColor();
    const secondaryColor = getCostumeColor(mascot.costume);

    // Standardized Shapes: All mascots follow the "Bean Body + Large Head" logic
    return (
      <g>
        {/* Soft Side Shadow (Global DNA) */}
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
          </linearGradient>
        </defs>

        {/* The Body - Standardized "Pear" shape */}
        <path 
          d="M60 185 Q100 145 140 185 Q100 215 60 185" 
          fill={secondaryColor} 
          stroke="#1A1A40" 
          strokeWidth="3"
        />
        <path d="M60 185 Q100 145 140 185 Q100 215 60 185" fill="url(#bodyGradient)" />

        {/* Arms - Cute rounded nubs */}
        <motion.circle 
          cx="55" cy="165" r="12" 
          fill={mascot.type === 'human' ? color : secondaryColor} 
          stroke="#1A1A40" strokeWidth="3"
          animate={isHovered ? { x: [-3, 3, -3] } : {}} 
        />
        <motion.circle 
          cx="145" cy="165" r="12" 
          fill={mascot.type === 'human' ? color : secondaryColor} 
          stroke="#1A1A40" strokeWidth="3"
          animate={isHovered ? { x: [3, -3, 3] } : {}} 
        />

        {/* Head - Standardized large rounded square/circle */}
        <rect 
          x="35" y="25" width="130" height="130" rx="60" 
          fill={color} 
          stroke="#1A1A40" 
          strokeWidth="3" 
        />
        <rect x="35" y="25" width="130" height="130" rx="60" fill="url(#bodyGradient)" />

        {/* Specific Type Details */}
        {mascot.type === 'human' && mascot.hairColor !== 'none' && (
          <g>
            <path 
              d="M35 85 Q35 25 100 25 Q165 25 165 85 Q100 65 35 85" 
              fill={HAIR_COLORS[mascot.hairColor || 'brown']} 
              stroke="#1A1A40" strokeWidth="3"
            />
          </g>
        )}

        {mascot.type === 'animal' && (
          <g>
             {mascot.costume === 'dog' && (
              <>
                <ellipse cx="45" cy="70" rx="15" ry="35" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3" transform="rotate(-15, 45, 70)" />
                <ellipse cx="155" cy="70" rx="15" ry="35" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3" transform="rotate(15, 155, 70)" />
              </>
            )}
            {mascot.costume === 'bear' && (
              <>
                <circle cx="55" cy="40" r="22" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3" />
                <circle cx="145" cy="40" r="22" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3" />
              </>
            )}
            {mascot.costume === 'cat' && (
              <>
                <path d="M40 35 L70 70 L30 80 Z" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3" />
                <path d="M160 35 L130 70 L170 80 Z" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3" />
              </>
            )}
            {mascot.costume === 'dino' && (
              <g>
                <path d="M80 25 L100 5 L120 25" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3" />
                <path d="M50 40 L30 20 L60 50" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3" />
                <path d="M150 40 L170 20 L140 50" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3" />
              </g>
            )}
            {/* Snout for animals */}
            <ellipse cx="100" cy="125" rx="22" ry="16" fill="white" fillOpacity="0.3" stroke="#1A1A40" strokeWidth="2" />
            <circle cx="100" cy="120" r="5" fill="#1A1A40" />
          </g>
        )}

        {mascot.type === 'robot' && (
          <g>
            <rect x="90" y="5" width="20" height="25" fill="#1A1A40" />
            <circle cx="100" cy="5" r="8" fill="#FF5252">
              <animate attributeName="fill" values="#FF5252;#FFEB3B;#FF5252" dur="1s" repeatCount="indefinite" />
            </circle>
          </g>
        )}
      </g>
    );
  };

  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <svg 
        viewBox="0 0 200 200" 
        width={size} 
        height={size} 
        className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)] transition-transform duration-300"
        style={{ transform: isClicked ? 'scale(1.1) rotate(3deg)' : 'scale(1)' }}
      >
        {/* Shadow */}
        <ellipse cx="100" cy="195" rx="60" ry="8" fill="rgba(26,26,64,0.1)" />
        
        {/* Mascot Body & Face */}
        <motion.g animate={floatAnim}>
          {renderBody()}
          <StandardFace mascot={mascot} isHovered={isHovered} isClicked={isClicked} />
          {renderAccessory(mascot)}
        </motion.g>
      </svg>
      
      {/* Interactive Sparkles */}
      <AnimatePresence>
        {isClicked && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1.2, y: -60 }}
            exit={{ opacity: 0 }}
            className="absolute text-3xl pointer-events-none"
          >
            {['✨', '💖', '⭐', '🌈'][Math.floor(Math.random() * 4)]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function getCostumeColor(costume?: string) {
  const colors: Record<string, string> = {
    superhero: '#FF5252',
    scientist: '#00BCD4',
    astronaut: '#90A4AE',
    fairy: '#F06292',
    princess: '#BA68C8',
    dino: '#8BC34A',
    dog: '#FFB74D',
    cat: '#78909C',
    bear: '#8D6E63',
    robot: '#CFD8DC',
    unicorn: '#F48FB1',
    penguin: '#263238',
    monster: '#9C27B0',
    default: '#81D4FA'
  };
  return colors[costume || 'default'];
}

function renderAccessory(mascot: MascotData) {
  const acc = mascot.details?.accessory;
  if (!acc) return null;

  switch (acc) {
    case 'lightning-bolt':
      return (
        <motion.path 
          d="M100 150 L115 170 L105 170 L120 190" 
          fill="#FFEB3B" 
          stroke="#1A1A40" 
          strokeWidth="3" 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      );
    case 'glasses':
      return (
        <g transform="translate(100, 95)">
          <circle cx="-32" cy="-5" r="22" fill="none" stroke="#1A1A40" strokeWidth="4" />
          <circle cx="32" cy="-5" r="22" fill="none" stroke="#1A1A40" strokeWidth="4" />
          <line x1="-10" y1="-5" x2="10" y2="-5" stroke="#1A1A40" strokeWidth="4" />
        </g>
      );
    case 'helmet':
      return (
        <g>
          <circle cx="100" cy="90" r="75" fill="none" stroke="white" strokeWidth="4" strokeDasharray="10 5" opacity="0.5" />
          <path d="M60 40 Q100 20 140 40" fill="none" stroke="white" strokeWidth="4" opacity="0.3" />
        </g>
      );
    case 'tiara':
      return (
        <g transform="translate(100, 35)">
          <path d="M-25 0 L0 -25 L25 0 Z" fill="#FFD54F" stroke="#1A1A40" strokeWidth="3" />
          <circle cx="0" cy="-25" r="5" fill="#FF5252" stroke="#1A1A40" strokeWidth="2" />
        </g>
      );
    default:
      return null;
  }
}
