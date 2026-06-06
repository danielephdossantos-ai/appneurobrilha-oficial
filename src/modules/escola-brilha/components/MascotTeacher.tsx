import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MascotTeacherProps {
  type: 'pip' | 'pipa';
  isSpeaking: boolean;
  expression?: 'happy' | 'thinking' | 'explaining' | 'celebrating';
}

export const MascotTeacher: React.FC<MascotTeacherProps> = ({ 
  type, 
  isSpeaking, 
  expression = 'happy' 
}) => {
  // Use unique colors or visual markers for each mascot
  const mascotColor = type === 'pip' ? '#4FD1C5' : '#F6AD55';
  
  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-10 left-10 z-50 pointer-events-none"
      style={{ height: '35vh' }}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-end">
        {/* Simplified Mascot Representation - To be replaced with actual SVG/Images */}
        <motion.div
          animate={isSpeaking ? {
            scale: [1, 1.02, 1],
            rotate: [0, 1, -1, 0]
          } : {}}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="w-48 h-64 relative"
        >
          {/* Main Body */}
          <div 
            className="w-full h-full rounded-t-full relative shadow-lg"
            style={{ backgroundColor: mascotColor }}
          >
            {/* Eyes */}
            <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>

            {/* Mouth */}
            <motion.div 
              animate={isSpeaking ? { height: [4, 12, 4] } : { height: 4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 w-8 bg-white rounded-full"
            />
          </div>
          
          {/* Label */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm font-bold text-sm">
            {type === 'pip' ? 'PIP' : 'PIPA'}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
