import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

interface LessonHeaderProps {
  progress: number;
  missionName: string;
  field?: string;
  stepIndex?: number;
  totalSteps?: number;
  xp?: number;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({
  progress,
  stepIndex = 0,
  totalSteps = 0,
  xp = 100,
}) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50 p-3 sm:p-4">
      <div className="max-w-xl mx-auto flex items-center gap-3">
        {/* Back button */}
        <button
          onClick={() => navigate({ to: '/escola-brilha' })}
          className="shrink-0 w-11 h-11 rounded-full bg-violet-500 hover:bg-violet-600 text-white flex items-center justify-center shadow-lg active:scale-95 transition"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-6 h-6" strokeWidth={3} />
        </button>

        {/* Progress bar */}
        <div className="flex-1 h-5 bg-white rounded-full overflow-hidden border-2 border-violet-200 shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="h-full bg-gradient-to-r from-yellow-300 to-yellow-400"
          />
        </div>

        {/* Step counter */}
        {totalSteps > 0 && (
          <span className="shrink-0 text-xs font-black text-violet-600 bg-white px-2 py-1 rounded-full border-2 border-violet-200 shadow-sm">
            {stepIndex + 1}/{totalSteps}
          </span>
        )}

        {/* Star */}
        <div className="shrink-0 w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
          <Star className="w-6 h-6 text-white fill-white" />
        </div>
        
        {/* XP Counter */}
        <div className="shrink-0 flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border-2 border-yellow-200 shadow-sm">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-black text-yellow-600">{xp} XP</span>
        </div>
      </div>
    </div>
  );
};
