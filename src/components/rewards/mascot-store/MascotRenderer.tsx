
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

// --- Standardized Visual DNA Components (Premium Style) ---

const Eye = ({ color = "#4A90E2", isHovered = false, isBlinking = false }) => (
  <g className="eye">
    {/* Eye Socket */}
    <motion.circle 
      r="22" 
      fill="white" 
      stroke="#1A1A40" 
      strokeWidth="2.5" 
      animate={isBlinking ? { scaleY: 0.1 } : { scaleY: 1 }}
    />
    
    {!isBlinking && (
      <>
        {/* Iris */}
        <motion.circle 
          r="13" 
          fill={color} 
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        />
        {/* Pupil */}
        <circle r="7" fill="#1A1A40" />
        {/* Highlights - The "Premium Sparkle" DNA */}
        <circle cx="6" cy="-6" r="6" fill="white" fillOpacity="1" />
        <circle cx="-4" cy="4" r="3" fill="white" fillOpacity="0.6" />
      </>
    )}
  </g>
);

const StandardFace = ({ mascot, isHovered, isClicked }: { mascot: MascotData, isHovered: boolean, isClicked: boolean }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const eyeColor = mascot.details?.eyeColor || "#4A90E2";

  // Natural blinking
  React.useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    };
    const interval = setInterval(() => {
      if (Math.random() > 0.7) blink();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <g transform="translate(100, 95)">
      {/* Blushing - Kawaii style */}
      <motion.ellipse 
        cx="-45" cy="18" rx="12" ry="6" 
        fill="#FF9AA2" 
        fillOpacity="0.4"
        animate={isHovered ? { opacity: 0.6, scale: 1.1 } : { opacity: 0.4, scale: 1 }}
      />
      <motion.ellipse 
        cx="45" cy="18" rx="12" ry="6" 
        fill="#FF9AA2" 
        fillOpacity="0.4"
        animate={isHovered ? { opacity: 0.6, scale: 1.1 } : { opacity: 0.4, scale: 1 }}
      />

      {/* Eyes */}
      <motion.g 
        animate={{ 
          y: isHovered ? [0, -2, 0] : 0 
        }} 
        transition={{ 
          y: { duration: 0.5, repeat: Infinity }
        }}
      >
        <g transform="translate(-35, -5)">
          <Eye color={eyeColor} isHovered={isHovered} isBlinking={isBlinking} />
        </g>
        <g transform="translate(35, -5)">
          <Eye color={eyeColor} isHovered={isHovered} isBlinking={isBlinking} />
        </g>
      </motion.g>

      {/* Mouth - Kawaii / Disney Jr Style */}
      <motion.path 
        d={isClicked || isHovered ? "M-12 28 Q0 48 12 28" : "M-8 32 Q0 40 8 32"}
        fill={isClicked || isHovered ? "#FF5252" : "none"} 
        stroke="#1A1A40" 
        strokeWidth="4" 
        strokeLinecap="round"
        animate={isClicked ? { scale: 1.2 } : { scale: 1 }}
      />
      {isClicked && (
        <circle cx="0" cy="38" r="4" fill="#FFB6C1" opacity="0.5" />
      )}
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
    y: [0, -12, 0],
    rotate: [0, 1, 0, -1, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
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

    return (
      <g>
        <defs>
          <linearGradient id={`bodyGrad-${mascot.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="black" stopOpacity="0.05" />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* The Body - Squishy "Bean" shape */}
        <motion.path 
          d="M50 190 Q100 135 150 190 Q100 225 50 190" 
          fill={secondaryColor} 
          stroke="#1A1A40" 
          strokeWidth="3.5"
          animate={isHovered ? { scaleX: 1.05 } : { scaleX: 1 }}
        />
        <path d="M50 190 Q100 135 150 190 Q100 225 50 190" fill={`url(#bodyGrad-${mascot.id})`} />

        {/* Arms - Cute rounded nubs */}
        <motion.ellipse 
          cx="45" cy="165" rx="14" ry="18" 
          fill={mascot.type === 'human' ? color : secondaryColor} 
          stroke="#1A1A40" strokeWidth="3.5"
          animate={isHovered ? { rotate: [-10, 10, -10] } : {}} 
          style={{ originX: '45px', originY: '155px' }}
        />
        <motion.ellipse 
          cx="155" cy="165" rx="14" ry="18" 
          fill={mascot.type === 'human' ? color : secondaryColor} 
          stroke="#1A1A40" strokeWidth="3.5"
          animate={isHovered ? { rotate: [10, -10, 10] } : {}} 
          style={{ originX: '155px', originY: '155px' }}
        />

        {/* Head - Large, soft-cornered rounded shape */}
        <motion.rect 
          x="30" y="20" width="140" height="140" rx="70" 
          fill={color} 
          stroke="#1A1A40" 
          strokeWidth="3.5" 
          animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
        />
        <rect x="30" y="20" width="140" height="140" rx="70" fill={`url(#bodyGrad-${mascot.id})`} />

        {/* Specific Type Details */}
        {mascot.type === 'human' && mascot.hairColor !== 'none' && (
          <g>
            {/* Hair with better volume and texture */}
            <path 
              d="M30 85 Q30 20 100 20 Q170 20 170 85 Q135 60 100 65 Q65 60 30 85" 
              fill={HAIR_COLORS[mascot.hairColor || 'brown']} 
              stroke="#1A1A40" strokeWidth="3.5"
            />
            {/* Hair highlight */}
            <path d="M60 40 Q100 30 140 40" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
          </g>
        )}

        {mascot.type === 'animal' && (
          <g>
             {mascot.costume === 'dog' && (
              <>
                <motion.ellipse cx="40" cy="70" rx="18" ry="40" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3.5" transform="rotate(-15, 40, 70)" animate={isHovered ? { rotate: [-20, -10, -20] } : {}} />
                <motion.ellipse cx="160" cy="70" rx="18" ry="40" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3.5" transform="rotate(15, 160, 70)" animate={isHovered ? { rotate: [20, 10, 20] } : {}} />
              </>
            )}
            {mascot.costume === 'bear' && (
              <>
                <motion.circle cx="50" cy="40" r="28" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3.5" animate={isHovered ? { scale: 1.1 } : {}} />
                <motion.circle cx="150" cy="40" r="28" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3.5" animate={isHovered ? { scale: 1.1 } : {}} />
                <circle cx="50" cy="40" r="14" fill="white" fillOpacity="0.2" />
                <circle cx="150" cy="40" r="14" fill="white" fillOpacity="0.2" />
              </>
            )}
            {mascot.costume === 'cat' && (
              <>
                <motion.path d="M35 30 L75 70 L30 85 Z" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3.5" animate={isHovered ? { rotate: [-5, 5, -5] } : {}} />
                <motion.path d="M165 30 L125 70 L170 85 Z" fill={secondaryColor} stroke="#1A1A40" strokeWidth="3.5" animate={isHovered ? { rotate: [5, -5, 5] } : {}} />
              </>
            )}
            {mascot.costume === 'dino' && (
              <g>
                {[60, 100, 140].map((x, i) => (
                  <motion.path 
                    key={i}
                    d={`M${x-15} 25 L${x} -5 L${x+15} 25`} 
                    fill={secondaryColor} stroke="#1A1A40" strokeWidth="3.5" 
                    animate={isHovered ? { y: [-2, 2, -2] } : {}}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </g>
            )}
            {mascot.costume === 'unicorn' && (
              <g transform="translate(100, 15)">
                <path d="M-15 15 L0 -45 L15 15 Z" fill="#FFEB3B" stroke="#1A1A40" strokeWidth="3.5" />
                {/* Spiral on horn */}
                <path d="M-10 0 Q0 -5 10 -10 M-8 -15 Q0 -20 8 -25" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
              </g>
            )}
            {/* Animal Snout - Premium roundness */}
            <g transform="translate(100, 128)">
              <ellipse cx="0" cy="0" rx="28" ry="20" fill="white" fillOpacity="0.4" stroke="#1A1A40" strokeWidth="2" />
              <motion.path 
                d="M-6 -4 Q0 0 6 -4" 
                fill="none" 
                stroke="#1A1A40" 
                strokeWidth="3.5" 
                strokeLinecap="round"
                animate={isHovered ? { y: 2 } : {}}
              />
              <circle cx="0" cy="-6" r="6" fill="#1A1A40" />
            </g>
          </g>
        )}

        {mascot.type === 'robot' && (
          <g>
            <rect x="85" y="0" width="30" height="30" rx="5" fill="#1A1A40" />
            <motion.circle 
              cx="100" cy="0" r="10" 
              fill="#FF5252"
              animate={{ 
                fill: ["#FF5252", "#FFFF00", "#FF5252"],
                scale: [1, 1.2, 1]
              }} 
              transition={{ duration: 1, repeat: Infinity }}
            />
            {/* Robot ears/antennas */}
            <rect x="20" y="70" width="15" height="40" rx="5" fill="#1A1A40" />
            <rect x="165" y="70" width="15" height="40" rx="5" fill="#1A1A40" />
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
        viewBox="0 0 200 220" 
        width={size} 
        height={size * 1.1} 
        className="drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)] transition-transform duration-300"
        style={{ transform: isClicked ? 'scale(1.1) rotate(3deg)' : 'scale(1)' }}
      >
        {/* Shadow */}
        <motion.ellipse 
          cx="100" cy="210" rx="60" ry="8" 
          fill="rgba(26,26,64,0.15)" 
          animate={isHovered ? { rx: 75, opacity: 0.25 } : { rx: 60, opacity: 0.15 }}
        />
        
        {/* Mascot Body & Face */}
        <motion.g 
          animate={floatAnim}
          whileHover={{ scale: 1.05 }}
        >
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
            animate={{ opacity: 1, scale: 1.5, y: -80 }}
            exit={{ opacity: 0 }}
            className="absolute text-4xl pointer-events-none z-50"
          >
            {['✨', '💖', '⭐', '🌈', '🍭'][Math.floor(Math.random() * 5)]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function getCostumeColor(costume?: string) {
  const colors: Record<string, string> = {
    superhero: '#FF5252',
    scientist: '#4FC3F7',
    astronaut: '#B0BEC5',
    fairy: '#F48FB1',
    princess: '#CE93D8',
    dino: '#9CCC65',
    dog: '#FFB74D',
    cat: '#90A4AE',
    bear: '#A1887F',
    robot: '#78909C',
    unicorn: '#F06292',
    penguin: '#37474F',
    monster: '#AB47BC',
    default: '#64B5F6'
  };
  return colors[costume || 'default'];
}

function renderAccessory(mascot: MascotData) {
  const acc = mascot.details?.accessory;
  if (!acc) return null;

  switch (acc) {
    case 'lightning-bolt':
      return (
        <motion.g 
          transform="translate(140, 160)"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path d="M0 0 L15 20 L5 20 L20 45" fill="#FFEB3B" stroke="#1A1A40" strokeWidth="3" />
        </motion.g>
      );
    case 'glasses':
      return (
        <g transform="translate(100, 95)">
          <circle cx="-35" cy="-5" r="25" fill="none" stroke="#1A1A40" strokeWidth="4.5" />
          <circle cx="35" cy="-5" r="25" fill="none" stroke="#1A1A40" strokeWidth="4.5" />
          <line x1="-10" y1="-5" x2="10" y2="-5" stroke="#1A1A40" strokeWidth="4.5" />
        </g>
      );
    case 'helmet':
      return (
        <g>
          <circle cx="100" cy="90" r="85" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="4" strokeDasharray="15 8" opacity="0.6" />
          <motion.path 
            d="M50 40 Q100 15 150 40" 
            fill="none" 
            stroke="white" 
            strokeWidth="5" 
            opacity="0.4"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </g>
      );
    case 'tiara':
      return (
        <g transform="translate(100, 25)">
          <path d="M-30 10 L-15 -15 L0 5 L15 -15 L30 10 Z" fill="#FFD54F" stroke="#1A1A40" strokeWidth="3.5" />
          <circle cx="0" cy="5" r="6" fill="#FF5252" stroke="#1A1A40" strokeWidth="2.5" />
        </g>
      );
    default:
      return null;
  }
}
