
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  stars: number;
  coins: number;
}

export const RewardBadge: React.FC<Props> = ({ stars, coins }) => {
  return (
    <motion.div 
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      className="flex flex-col items-center text-center p-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[3rem] shadow-2xl border-8 border-white text-white"
    >
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1, repeat: 2 }}
        className="text-8xl mb-6"
      >
        🌟
      </motion.div>
      <h3 className="text-4xl font-black mb-2 uppercase tracking-tight">Incrível!</h3>
      <p className="text-xl font-bold opacity-90 mb-8">Você arrasou nessa atividade!</p>
      
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-1">⭐</span>
          <span className="text-2xl font-bold">+{stars}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-1">🪙</span>
          <span className="text-2xl font-bold">+{coins}</span>
        </div>
      </div>
    </motion.div>
  );
};
