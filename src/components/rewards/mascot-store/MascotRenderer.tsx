
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
    <circle r="18" fill="white" />
    {/* Iris */}
    <motion.circle 
      r="10" 
      fill={color} 
      animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
    />
    {/* Pupil */}
    <circle r="5" fill="#1A1A40" />
    {/* Highlights */}
    <circle cx="5" cy="-5" r="5" fill="white" fillOpacity="0.9" />
    <circle cx="-3" cy="3" r="2" fill="white" fillOpacity="0.5" />
  </g>
);

const StandardFace = ({ mascot, isHovered, isClicked }: { mascot: MascotData, isHovered: boolean, isClicked: boolean }) => {
  const eyeColor = mascot.details?.eyeColor || "#4A90E2";
  
  return (
    <g transform="translate(100, 95)">
      {/* Blushing */}
      <circle cx="-40" cy="15" r="12" fill="#FFB6C1" fillOpacity="0.4" />
      <circle cx="40" cy="15" r="12" fill="#FFB6C1" fillOpacity="0.4" />

      {/* Eyes */}
      <motion.g animate={{ scaleY: [1, 1, 1, 0.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
        <g transform="translate(-28, -5)">
          <Eye color={eyeColor} isHovered={isHovered} />
        </g>
        <g transform="translate(28, -5)">
          <Eye color={eyeColor} isHovered={isHovered} />
        </g>
      </motion.g>

      {/* Mouth */}
      <motion.path 
        d={isClicked || isHovered ? "M-12 25 Q0 45 12 25" : "M-10 30 Q0 38 10 30"}
        fill="none" 
        stroke="#1A1A40" 
        strokeWidth="5" 
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

    // Standard "Premium Cartoon" Body: Rounded, clean shapes
    switch (mascot.type) {
      case 'human':
        return (
          <g>
            {/* Body/Shirt */}
            <path d="M50 185 Q100 140 150 185 Q100 210 50 185" fill={secondaryColor} />
            {/* Arms */}
            <motion.circle cx="45" cy="165" r="10" fill={color} animate={isHovered ? { x: [-2, 2, -2] } : {}} />
            <motion.circle cx="155" cy="165" r="10" fill={color} animate={isHovered ? { x: [2, -2, 2] } : {}} />
            {/* Head */}
            <circle cx="100" cy="90" r="65" fill={color} />
            {/* Hair */}
            {mascot.hairColor !== 'none' && (
              <g>
                <path d="M35 90 Q35 25 100 25 Q165 25 165 90" fill={HAIR_COLORS[mascot.hairColor || 'brown']} />
                <path d="M35 80 Q100 40 165 80 Q100 65 35 80" fill={HAIR_COLORS[mascot.hairColor || 'brown']} />
              </g>
            )}
          </g>
        );
      case 'animal':
        return (
          <g>
            {/* Body */}
            <circle cx="100" cy="150" r="45" fill={secondaryColor} />
            {/* Ears/Details based on costume */}
            {mascot.costume === 'dog' && (
              <>
                <ellipse cx="50" cy="70" rx="15" ry="30" fill={secondaryColor} transform="rotate(-15, 50, 70)" />
                <ellipse cx="150" cy="70" rx="15" ry="30" fill={secondaryColor} transform="rotate(15, 150, 70)" />
              </>
            )}
            {mascot.costume === 'bear' && (
              <>
                <circle cx="55" cy="45" r="22" fill={secondaryColor} />
                <circle cx="145" cy="45" r="22" fill={secondaryColor} />
              </>
            )}
            {mascot.costume === 'cat' && (
              <>
                <path d="M40 40 L75 80 L35 90 Z" fill={secondaryColor} />
                <path d="M160 40 L125 80 L165 90 Z" fill={secondaryColor} />
              </>
            )}
            {mascot.costume === 'penguin' && (
              <>
                <circle cx="100" cy="140" r="35" fill="white" />
                <path d="M30 140 Q10 160 30 180" fill={secondaryColor} />
                <path d="M170 140 Q190 160 170 180" fill={secondaryColor} />
              </>
            )}
            {mascot.costume === 'monster' && (
              <>
                <path d="M40 40 L50 70 M150 40 L160 70" stroke={secondaryColor} strokeWidth="10" strokeLinecap="round" />
                <circle cx="60" cy="40" r="10" fill={secondaryColor} />
                <circle cx="140" cy="40" r="10" fill={secondaryColor} />
              </>
            )}
            {/* Head */}
            <circle cx="100" cy="95" r="65" fill={secondaryColor} />
            {/* White belly/face for some animals */}
            {(mascot.costume === 'penguin' || mascot.costume === 'panda') && (
               <circle cx="100" cy="110" r="50" fill="white" fillOpacity="0.15" />
            )}
            {/* Snout */}
            {['dog', 'bear', 'cat', 'dino'].includes(mascot.costume || '') && (
              <g>
                <ellipse cx="100" cy="125" rx="20" ry="15" fill="white" fillOpacity="0.2" />
                <circle cx="100" cy="120" r="6" fill="#1A1A40" />
              </g>
            )}
          </g>
        );
      case 'robot':
        return (
          <g>
            {/* Body */}
            <rect x="65" y="130" width="70" height="50" rx="15" fill={secondaryColor} />
            {/* Head */}
            <rect x="50" y="50" width="100" height="85" rx="25" fill={secondaryColor} />
            {/* Antenna */}
            <line x1="100" y1="50" x2="100" y2="25" stroke="#1A1A40" strokeWidth="4" />
            <circle cx="100" cy="20" r="8" fill="#FF5252">
              <animate attributeName="fill" values="#FF5252;#FFEB3B;#FF5252" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
        );
      default:
        return <circle cx="100" cy="100" r="70" fill={secondaryColor} />;
    }
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
      return <path d="M100 145 L115 165 L105 165 L120 185" fill="#FFEB3B" stroke="#1A1A40" strokeWidth="2" />;
    case 'glasses':
      return (
        <g transform="translate(100, 95)" opacity="0.8">
          <circle cx="-28" cy="-5" r="22" fill="none" stroke="#1A1A40" strokeWidth="3" />
          <circle cx="28" cy="-5" r="22" fill="none" stroke="#1A1A40" strokeWidth="3" />
          <line x1="-6" y1="-5" x2="6" y2="-5" stroke="#1A1A40" strokeWidth="3" />
        </g>
      );
    case 'helmet':
      return <circle cx="100" cy="90" r="75" fill="none" stroke="white" strokeWidth="3" strokeDasharray="12 6" opacity="0.6" />;
    case 'tiara':
      return <path d="M75 40 L100 15 L125 40 Z" fill="#FFD54F" stroke="#1A1A40" strokeWidth="2" />;
    default:
      return null;
  }
}
