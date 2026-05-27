
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

export const MascotRenderer: React.FC<MascotRendererProps> = ({ 
  mascot, 
  size = 200, 
  animation = 'idle',
  interactive = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // --- Animation Variants ---
  const floatAnim = {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
  };

  const breatheAnim = {
    scale: [1, 1.02, 1],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
  };

  const blinkAnim = {
    scaleY: [1, 1, 1, 0.1, 1],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }
  };


  const handleClick = () => {
    if (!interactive) return;
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  // --- Rendering Logic ---

  const renderFace = (isHuman: boolean) => {
    const eyeColor = mascot.details?.eyeColor || "#000";
    
    return (
      <g transform="translate(100, 100)">
        {/* Blushing Cheeks */}
        <circle cx="-35" cy="15" r="10" fill="#FFB6C1" fillOpacity="0.5" />
        <circle cx="35" cy="15" r="10" fill="#FFB6C1" fillOpacity="0.5" />

        {/* Eyes Container */}
        <motion.g animate={blinkAnim}>
          {/* Left Eye */}
          <g transform="translate(-25, -10)">
            <circle r="15" fill="#fff" />
            <motion.circle 
              r="8" 
              fill={eyeColor} 
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            />
            <circle cx="4" cy="-4" r="4" fill="#fff" fillOpacity="0.8" />
            <circle cx="-2" cy="2" r="1.5" fill="#fff" fillOpacity="0.5" />
          </g>
          {/* Right Eye */}
          <g transform="translate(25, -10)">
            <circle r="15" fill="#fff" />
            <motion.circle 
              r="8" 
              fill={eyeColor} 
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            />
            <circle cx="4" cy="-4" r="4" fill="#fff" fillOpacity="0.8" />
            <circle cx="-2" cy="2" r="1.5" fill="#fff" fillOpacity="0.5" />
          </g>
        </motion.g>

        {/* Mouth */}
        <motion.path 
          d={isClicked || isHovered ? "M-15 20 Q0 40 15 20" : "M-10 25 Q0 35 10 25"}
          fill="none" 
          stroke="#4A148C" 
          strokeWidth="4" 
          strokeLinecap="round" 
          animate={isClicked ? { scale: 1.2 } : { scale: 1 }}
        />
      </g>
    );
  };

  const renderHuman = () => {
    const skin = SKIN_COLORS[mascot.skin || 'light'];
    const hair = HAIR_COLORS[mascot.hairColor || 'none'];
    
    return (
      <motion.g animate={floatAnim}>
        {/* Body */}
        <path d="M60 180 Q100 130 140 180 Q100 200 60 180" fill={getCostumeColor(mascot.costume)} />
        
        {/* Arms */}
        <motion.path 
          d="M55 155 Q35 165 45 185" 
          stroke={getCostumeColor(mascot.costume)} 
          strokeWidth="12" 
          strokeLinecap="round" 
          animate={isHovered ? { rotate: [0, -20, 0] } : {}}
        />
        <motion.path 
          d="M145 155 Q165 165 155 185" 
          stroke={getCostumeColor(mascot.costume)} 
          strokeWidth="12" 
          strokeLinecap="round"
          animate={isHovered ? { rotate: [0, 20, 0] } : {}}
        />

        {/* Head Base */}
        <circle cx="100" cy="95" r="55" fill={skin} />
        
        {/* Hair Back */}
        {mascot.hairColor !== 'none' && (
           <path d="M45 95 Q45 40 100 40 Q155 40 155 95" fill={hair} />
        )}

        {renderFace(true)}

        {/* Hair Front/Bangs */}
        {mascot.hairColor !== 'none' && (
           <path d="M45 85 Q100 50 155 85 Q100 70 45 85" fill={hair} />
        )}

        {/* Accessories */}
        {renderAccessory(mascot)}
      </motion.g>
    );
  };

  const renderAnimal = () => {
    const color = getCostumeColor(mascot.costume);
    return (
      <motion.g animate={floatAnim}>
        {/* Body */}
        <circle cx="100" cy="140" r="50" fill={color} />
        
        {/* Head */}
        <circle cx="100" cy="90" r="60" fill={color} />
        
        {/* Ears */}
        {mascot.costume === 'dog' && (
          <>
            <ellipse cx="50" cy="70" rx="15" ry="30" fill={color} transform="rotate(-20, 50, 70)" />
            <ellipse cx="150" cy="70" rx="15" ry="30" fill={color} transform="rotate(20, 150, 70)" />
          </>
        )}
        {mascot.costume === 'cat' && (
          <>
            <path d="M50 50 L70 80 L40 90 Z" fill={color} />
            <path d="M150 50 L130 80 L160 90 Z" fill={color} />
          </>
        )}
        {mascot.costume === 'bear' && (
          <>
            <circle cx="60" cy="50" r="20" fill={color} />
            <circle cx="140" cy="50" r="20" fill={color} />
          </>
        )}
        {mascot.costume === 'dino' && (
          <path d="M60 40 L80 60 L100 40 L120 60 L140 40" fill="#388E3C" />
        )}

        {renderFace(false)}
        
        {/* Snout for animals */}
        <ellipse cx="100" cy="115" rx="15" ry="10" fill="#fff" fillOpacity="0.3" />
        <circle cx="100" cy="110" r="5" fill="#333" />
      </motion.g>
    );
  };

  const renderRobot = () => {
    return (
      <motion.g animate={floatAnim}>
        {/* Body */}
        <rect x="60" y="120" width="80" height="60" rx="15" fill="#B0BEC5" />
        <rect x="75" y="140" width="50" height="20" rx="5" fill="#546E7A" />
        
        {/* Head */}
        <rect x="55" y="55" width="90" height="75" rx="20" fill="#CFD8DC" />
        
        {/* Eyes (glowy) */}
        <g transform="translate(100, 90)">
          <circle cx="-25" r="12" fill="#00D1FF" fillOpacity="0.3">
            <animate attributeName="fillOpacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="-25" r="6" fill="#00D1FF" />
          <circle cx="25" r="12" fill="#00D1FF" fillOpacity="0.3">
            <animate attributeName="fillOpacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="25" r="6" fill="#00D1FF" />
        </g>
        
        {/* Antenna */}
        <line x1="100" y1="55" x2="100" y2="35" stroke="#546E7A" strokeWidth="4" />
        <circle cx="100" cy="30" r="6" fill="#FF5252">
           <animate attributeName="fill" values="#FF5252;#FFEB3B;#FF5252" dur="1s" repeatCount="indefinite" />
        </circle>
      </motion.g>
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
        className="drop-shadow-2xl transition-transform duration-300"
        style={{ transform: isClicked ? 'scale(1.1) rotate(5deg)' : 'scale(1)' }}
      >
        {/* Global Shadow */}
        <ellipse cx="100" cy="190" rx="50" ry="10" fill="rgba(0,0,0,0.1)" />
        
        {/* Back Accessories (Wings, etc.) */}
        <AnimatePresence>
          {mascot.details?.backAccessory === 'wings' && (
            <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
              <path d="M40 100 Q-20 60 40 140" fill="#E1BEE7" fillOpacity="0.7" />
              <path d="M160 100 Q220 60 160 140" fill="#E1BEE7" fillOpacity="0.7" />
            </motion.g>
          )}
        </AnimatePresence>

        {mascot.type === 'human' && renderHuman()}
        {mascot.type === 'animal' && renderAnimal()}
        {mascot.type === 'robot' && renderRobot()}
      </svg>
      
      {/* Reaction Particles */}
      <AnimatePresence>
        {isClicked && (
          <motion.div 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -50 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 text-2xl font-bold text-yellow-500 pointer-events-none"
          >
            ✨ {mascot.personality === 'Brincalhão e carinhoso' ? '❤' : '⭐'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Helper Functions ---

function getCostumeColor(costume?: string) {
  switch (costume) {
    case 'superhero': return '#E91E63';
    case 'scientist': return '#4FC3F7';
    case 'astronaut': return '#ECEFF1';
    case 'fairy': return '#F06292';
    case 'princess': return '#BA68C8';
    case 'dino': return '#4CAF50';
    case 'dog': return '#FFB74D';
    case 'cat': return '#90A4AE';
    case 'bear': return '#A1887F';
    case 'robot': return '#CFD8DC';
    case 'unicorn': return '#F8BBD0';
    default: return '#90CAF9';
  }
}

function renderAccessory(mascot: MascotData) {
  const acc = mascot.details?.accessory;
  if (!acc) return null;

  switch (acc) {
    case 'lightning-bolt':
      return <path d="M95 140 L110 160 L100 160 L115 180" fill="#FFEB3B" stroke="#FBC02D" strokeWidth="2" />;
    case 'glasses':
      return (
        <g transform="translate(100, 90)">
          <circle cx="-25" r="18" fill="none" stroke="#333" strokeWidth="3" />
          <circle cx="25" r="18" fill="none" stroke="#333" strokeWidth="3" />
          <line x1="-7" y1="0" x2="7" y2="0" stroke="#333" strokeWidth="3" />
        </g>
      );
    case 'helmet':
      return <circle cx="100" cy="95" r="65" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="10 5" />;
    case 'tiara':
      return <path d="M75 55 L100 35 L125 55 Z" fill="#FFD54F" stroke="#FBC02D" />;
    default:
      return null;
  }
}
