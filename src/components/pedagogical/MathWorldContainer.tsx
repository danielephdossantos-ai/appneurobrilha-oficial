
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MathGenerator } from '../../core/adaptive/MathGenerator';
import { MathActivity } from '../../data/math/activities';
import { NeuroProfile } from '../../core/neuro/engine';

interface MathWorldContainerProps {
  worldId: string;
  profile?: NeuroProfile;
  onExit: () => void;
}

export const MathWorldContainer: React.FC<MathWorldContainerProps> = ({ 
  worldId, 
  profile = 'Neurotipico',
  onExit 
}) => {
  const [currentActivity, setCurrentActivity] = useState<MathActivity | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState<null | 'success' | 'error'>(null);

  useEffect(() => {
    loadNextActivity();
  }, [worldId]);

  const loadNextActivity = () => {
    const activity = MathGenerator.generateActivity(worldId, profile, Math.floor(score / 5) + 1);
    setCurrentActivity(activity);
    setShowFeedback(null);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(s => s + 1);
      setShowFeedback('success');
      setTimeout(loadNextActivity, 1500);
    } else {
      setShowFeedback('error');
      setTimeout(() => setShowFeedback(null), 1000);
    }
  };

  if (!currentActivity) return null;

  return (
    <div className="bg-white rounded-[3.5rem] p-12 shadow-2xl min-h-[600px] flex flex-col relative overflow-hidden">
      {/* Background decoration based on world */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
      
      <header className="flex justify-between items-center mb-12 relative z-10">
        <div>
          <button onClick={onExit} className="text-indigo-400 font-bold flex items-center gap-2 hover:text-indigo-600 transition-colors mb-2">
            ← Voltar para Mundos
          </button>
          <h2 className="text-4xl font-black text-indigo-950 capitalize">{currentActivity.world.replace('-', ' ')}</h2>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-amber-100 px-6 py-2 rounded-2xl font-black text-amber-600 flex items-center gap-2">
            ⭐ {score}
          </div>
          <div className="bg-indigo-600 px-6 py-2 rounded-2xl font-black text-white">
            Nível {currentActivity.difficulty}
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentActivity.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="text-center w-full max-w-2xl"
          >
            <h3 className="text-3xl font-bold text-indigo-900 mb-4">{currentActivity.title}</h3>
            <p className="text-xl text-gray-500 mb-12 font-medium">{currentActivity.instruction}</p>

            <MathActivityRenderer 
              activity={currentActivity} 
              onAnswer={handleAnswer} 
              showFeedback={showFeedback}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Reward / Feedback Overlay */}
      <AnimatePresence>
        {showFeedback === 'success' && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-50 bg-white/60 backdrop-blur-sm"
          >
            <div className="text-center">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="text-9xl mb-4"
              >
                🎉
              </motion.div>
              <p className="text-4xl font-black text-emerald-500">Incrível!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MathActivityRenderer = ({ activity, onAnswer, showFeedback }: any) => {
  const { type, data } = activity;

  switch (type) {
    case 'counting':
      return (
        <div className="space-y-12">
          <div className="flex flex-wrap justify-center gap-6">
            {Array.from({ length: data.items }).map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-7xl cursor-pointer p-4 bg-rose-50 rounded-3xl"
              >
                🍎
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            {data.options.map((opt: number) => (
              <button
                key={opt}
                disabled={showFeedback !== null}
                onClick={() => onAnswer(opt === data.items)}
                className={`w-24 h-24 rounded-3xl text-3xl font-black transition-all ${
                  showFeedback === 'success' && opt === data.items
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white border-4 border-indigo-100 text-indigo-600 hover:border-indigo-400'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      );
    
    case 'shapes':
      return (
        <div className="space-y-12">
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
             {/* Mock objects for finding shape */}
             {['circle', 'square', 'triangle', 'circle', 'star', 'circle'].map((shape, i) => (
               <motion.button
                 key={i}
                 whileHover={{ scale: 1.05 }}
                 onClick={() => onAnswer(shape === data.targetShape)}
                 className={`aspect-square rounded-3xl flex items-center justify-center text-5xl bg-blue-50 border-4 border-transparent hover:border-blue-300`}
               >
                 {shape === 'circle' ? '🔵' : shape === 'square' ? '🟦' : shape === 'triangle' ? '🔺' : '⭐'}
               </motion.button>
             ))}
          </div>
        </div>
      );

    default:
      return (
        <div className="p-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 font-bold">Atividade do tipo {type} em desenvolvimento...</p>
          <button onClick={() => onAnswer(true)} className="mt-4 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold">Simular Acerto</button>
        </div>
      );
  }
};
