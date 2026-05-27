
import React from 'react';
import { motion } from 'framer-motion';
import { MascotData, SkinType, HairColor } from './catalog';

interface MascotRendererProps {
  mascot: MascotData;
  size?: number;
  animation?: 'idle' | 'bounce' | 'wave';
  emotion?: 'happy' | 'blink' | 'wink';
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
  none: 'transparent',
};

export const MascotRenderer: React.FC<MascotRendererProps> = ({ 
  mascot, 
  size = 200, 
  animation = 'idle',
  emotion = 'happy'
}) => {
  const isHuman = mascot.type === 'human';
  
  // Animation variants
  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const blinkAnimation = {
    scaleY: [1, 0.1, 1],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatDelay: 3
    }
  };

  const renderHuman = () => {
    const skin = SKIN_COLORS[mascot.skin || 'light'];
    const hair = HAIR_COLORS[mascot.hairColor || 'none'];
    
    return (
      <svg viewBox="0 0 200 200" width={size} height={size} className="drop-shadow-lg">
        {/* Shadow */}
        <ellipse cx="100" cy="180" rx="40" ry="10" fill="rgba(0,0,0,0.1)" />
        
        {/* Costume/Body */}
        <motion.path 
          d="M60 180 Q100 120 140 180 Z" 
          fill={getCostumeColor(mascot.costume)} 
          animate={animation === 'bounce' ? bounceAnimation : {}}
        />
        
        {/* Head */}
        <motion.g animate={animation === 'bounce' ? bounceAnimation : {}}>
          {/* Hair back */}
          {mascot.hairColor !== 'none' && (
            <circle cx="100" cy="85" r="48" fill={hair} />
          )}
          
          <circle cx="100" cy="90" r="45" fill={skin} stroke="#E5C19A" strokeWidth="1" />
          
          {/* Face details */}
          <g transform="translate(100, 90)">
            {/* Eyes */}
            <motion.g animate={blinkAnimation}>
              <circle cx="-15" cy="-5" r="6" fill="#000" />
              <circle cx="-13" cy="-7" r="2" fill="#fff" />
              <circle cx="15" cy="-5" r="6" fill="#000" />
              <circle cx="17" cy="-7" r="2" fill="#fff" />
            </motion.g>
            
            {/* Mouth */}
            <path d="M-10 15 Q0 25 10 15" fill="none" stroke="#D32F2F" strokeWidth="3" strokeLinecap="round" />
            
            {/* Cheeks */}
            <circle cx="-25" cy="10" r="5" fill="#FF80AB" fillOpacity="0.4" />
            <circle cx="25" cy="10" r="5" fill="#FF80AB" fillOpacity="0.4" />
          </g>

          {/* Costume Accessories */}
          {renderAccessories(mascot.costume)}
          
          {/* Hair front */}
          {mascot.hairColor !== 'none' && (
             <path d="M55 90 Q100 40 145 90 Q100 70 55 90" fill={hair} />
          )}
        </motion.g>
      </svg>
    );
  };

  const renderAnimal = () => {
    return (
      <svg viewBox="0 0 200 200" width={size} height={size} className="drop-shadow-lg">
        <ellipse cx="100" cy="180" rx="40" ry="10" fill="rgba(0,0,0,0.1)" />
        <motion.g animate={animation === 'bounce' ? bounceAnimation : {}}>
          <text x="50%" y="60%" textAnchor="middle" fontSize="100" dy=".3em">
            {getAnimalEmoji(mascot.id)}
          </text>
        </motion.g>
      </svg>
    );
  };

  return (
    <div className="flex items-center justify-center p-4">
      {isHuman ? renderHuman() : renderAnimal()}
    </div>
  );
};

// Helpers
function getCostumeColor(costume?: string) {
  switch (costume) {
    case 'lightning': return '#FFEB3B';
    case 'shadow': return '#455A64';
    case 'fire': return '#F44336';
    case 'sky': return '#2196F3';
    case 'dinosaur': return '#4CAF50';
    case 'lion': return '#FFA000';
    case 'bear': return '#795548';
    case 'tiger': return '#FF9800';
    case 'doctor': return '#E1F5FE';
    case 'firefighter': return '#D32F2F';
    case 'police': return '#1A237E';
    case 'teacher': return '#7E57C2';
    case 'pink-princess': return '#F06292';
    case 'enchanted-princess': return '#9C27B0';
    case 'sun-princess': return '#FBC02D';
    case 'night-princess': return '#1A237E';
    case 'light-hero': return '#FFF176';
    case 'energy-hero': return '#00BCD4';
    case 'phoenix-hero': return '#FF5722';
    case 'star-hero': return '#3F51B5';
    case 'unicorn': return '#E1BEE7';
    case 'cat': return '#BDBDBD';
    case 'rabbit': return '#FAFAFA';
    case 'panda-suit': return '#212121';
    default: return '#90CAF9';
  }
}

function renderAccessories(costume?: string) {
  switch (costume) {
    case 'lightning':
      return <path d="M90 30 L110 50 L100 50 L120 70" stroke="#FFD600" strokeWidth="4" fill="none" transform="translate(0, -40)" />;
    case 'pink-princess':
    case 'enchanted-princess':
    case 'sun-princess':
    case 'night-princess':
      return <path d="M80 50 L100 30 L120 50 Z" fill="#FFD600" />;
    case 'dinosaur':
      return <path d="M80 50 Q100 20 120 50" fill="#2E7D32" />;
    case 'doctor':
      return <circle cx="100" cy="50" r="10" fill="#CFD8DC" />;
    case 'firefighter':
      return <path d="M70 60 Q100 30 130 60 Z" fill="#D32F2F" />;
    default:
      return null;
  }
}

function getAnimalEmoji(id: string) {
  switch (id) {
    case 'cachorrinho': return '🐶';
    case 'gatinho': return '🐱';
    case 'ursinho-animal': return '🐻';
    case 'panda-animal': return '🐼';
    case 'coelhinho': return '🐰';
    case 'dino-baby': return '🦖';
    case 'raposinha': return '🦊';
    case 'pinguim': return '🐧';
    default: return '🐾';
  }
}
