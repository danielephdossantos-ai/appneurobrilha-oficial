
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/utils';

interface LearningMapProps {
  currentStage: number;
  totalStages: number;
  completedStages: number[];
  onStageClick?: (stage: number) => void;
}

export const LearningMap: React.FC<LearningMapProps> = ({
  currentStage,
  totalStages,
  completedStages,
  onStageClick
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto p-12 overflow-hidden bg-sky-50 rounded-[3rem] border-8 border-white shadow-inner">
      {/* Caminho Curvilíneo Suave */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
        <path
          d="M 50 200 Q 200 100 400 200 T 750 200"
          fill="none"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="20 20"
          className="opacity-50"
        />
      </svg>

      <div className="relative flex justify-between items-center h-48">
        {Array.from({ length: totalStages }).map((_, i) => {
          const stageNum = i + 1;
          const isCompleted = completedStages.includes(stageNum);
          const isCurrent = currentStage === stageNum;
          const isLocked = !isCompleted && !isCurrent;

          return (
            <motion.button
              key={stageNum}
              whileHover={!isLocked ? { scale: 1.1 } : {}}
              whileTap={!isLocked ? { scale: 0.9 } : {}}
              onClick={() => !isLocked && onStageClick?.(stageNum)}
              className={cn(
                "relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-colors shadow-lg",
                isCompleted ? "bg-green-400 text-white" : 
                isCurrent ? "bg-primary text-white ring-4 ring-primary/30" : 
                "bg-slate-200 text-slate-400 grayscale"
              )}
            >
              {stageNum}
              
              {isCurrent && (
                <motion.div
                  layoutId="current-marker"
                  className="absolute -top-12"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="bg-white text-primary text-xs px-2 py-1 rounded-lg shadow-sm font-black whitespace-nowrap border border-primary/20">
                    VOCÊ ESTÁ AQUI
                  </div>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
