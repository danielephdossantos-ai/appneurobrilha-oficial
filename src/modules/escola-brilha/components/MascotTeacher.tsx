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
  // Pip é azul (#38BDF8) e Pipa é rosa (#F472B6)
  const mascotColor = type === 'pip' ? '#38BDF8' : '#F472B6';
  
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 right-0 z-50 pointer-events-none flex gap-4 pr-10"
      style={{ height: '25vh' }}
    >
      <div className="flex items-end gap-2">
        <MascotImage type="pipa" isSpeaking={isSpeaking && type === 'pipa'} />
        <MascotImage type="pip" isSpeaking={isSpeaking && type === 'pip'} />
      </div>
    </motion.div>
  );
};

const MascotImage: React.FC<{ type: 'pip' | 'pipa', isSpeaking: boolean }> = ({ type, isSpeaking }) => {
  const mascotColor = type === 'pip' ? '#38BDF8' : '#F472B6';
  return (
    <div className="relative flex flex-col items-center justify-end h-full">
      <motion.div
        animate={isSpeaking ? {
          y: [0, -10, 0],
          scale: [1, 1.05, 1]
        } : {}}
        transition={{ repeat: Infinity, duration: 0.6 }}
        className="w-24 h-32 md:w-32 md:h-44 relative"
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
  );
};
