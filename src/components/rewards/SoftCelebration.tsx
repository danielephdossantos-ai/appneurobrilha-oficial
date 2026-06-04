import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Coins, Trophy } from 'lucide-react';
import { LumiPedagogicalGuidance } from './LumiPedagogicalGuidance';

interface SoftCelebrationProps {
  isVisible: boolean;
  type: 'stars' | 'coins' | 'achievement';
  amount?: number;
  message?: string;
  onComplete: () => void;
}

export const SoftCelebration: React.FC<SoftCelebrationProps> = ({
  isVisible,
  type,
  amount,
  message,
  onComplete
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.5, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onAnimationComplete={() => {
              setTimeout(onComplete, 3000);
            }}
            className="bg-white p-8 rounded-[3rem] shadow-2xl flex flex-col items-center space-y-6 max-w-sm w-full border-4 border-primary/10"
          >
            <LumiPedagogicalGuidance stage="celebration" className="scale-125 mb-4" />
            
            <div className="bg-primary/10 p-4 rounded-full">
              {type === 'stars' && <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />}
              {type === 'coins' && <Coins className="w-12 h-12 text-orange-400" />}
              {type === 'achievement' && <Trophy className="w-12 h-12 text-purple-400" />}
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 text-center">
              {message || (type === 'achievement' ? 'Nova Conquista!' : 'Muito Bem!')}
            </h3>
            
            {amount && (
              <div className="text-4xl font-black text-primary">
                +{amount}
              </div>
            )}
            
            <p className="text-slate-500 text-center font-bold">
              Cada desafio te deixa mais forte!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
