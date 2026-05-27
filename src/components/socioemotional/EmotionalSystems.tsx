
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIOEMOTIONAL_SYSTEM } from '../../data/socioemotional';

export const EmotionalCheckIn = ({ onSelect }: { onSelect: (id: string) => void }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[3.5rem] shadow-2xl border-4 border-white max-w-2xl mx-auto">
      <h2 className="text-3xl font-black text-indigo-900 text-center mb-10">
        {SOCIOEMOTIONAL_SYSTEM.dailyCheckIn.title}
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {SOCIOEMOTIONAL_SYSTEM.emotions.map((emotion) => (
          <motion.button
            key={emotion.id}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(emotion.id)}
            className="flex flex-col items-center gap-3 p-6 rounded-[2.5rem] transition-all border-4 border-transparent hover:border-white shadow-lg"
            style={{ backgroundColor: `${emotion.color}20` }}
          >
            <span className="text-6xl mb-2">{emotion.mascot}</span>
            <span className="font-bold text-indigo-900 text-lg">{emotion.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export const BreathingExercise = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: 3,
          ease: "easeInOut"
        }}
        onAnimationComplete={() => onComplete()}
        className="w-48 h-48 bg-teal-400 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(45,212,191,0.5)]"
      >
        <span className="text-white font-black text-2xl uppercase tracking-tighter">Respire</span>
      </motion.div>
      <p className="mt-12 text-teal-700 font-bold text-xl animate-pulse">Siga o círculo...</p>
    </div>
  );
};
