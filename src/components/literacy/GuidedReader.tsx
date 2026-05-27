
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GuidedReaderProps {
  text: string;
  highlightedSyllables: string[];
  audioUrl: string;
  onComplete: () => void;
  isDyslexic?: boolean;
}

export const GuidedReader: React.FC<GuidedReaderProps> = ({ 
  text, 
  highlightedSyllables, 
  onComplete,
  isDyslexic 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = text.split(' ');

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="flex flex-col items-center gap-12 py-8">
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl text-center">
        {words.map((word, i) => {
          const isActive = i === currentIndex;
          return (
            <motion.span
              key={i}
              animate={{ 
                scale: isActive ? 1.2 : 1,
                color: isActive ? '#4f46e5' : '#94a3b8',
                backgroundColor: isActive ? '#e0e7ff' : 'transparent'
              }}
              className={`text-4xl font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer
                         ${isActive ? 'shadow-sm' : ''}`}
              onClick={() => setCurrentIndex(i)}
            >
              {word}
            </motion.span>
          );
        })}
      </div>

      <div className="flex items-center gap-6 mt-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-2xl shadow-sm disabled:opacity-30"
          disabled={currentIndex === 0}
        >
          ←
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="w-24 h-24 bg-indigo-600 text-white rounded-full flex items-center justify-center text-3xl shadow-xl hover:bg-indigo-700 transition-colors"
        >
          {currentIndex === words.length - 1 ? '✓' : '→'}
        </motion.button>
      </div>

      <div className="text-slate-400 text-sm italic">
        Dica: Siga a cor azul para ler a frase.
      </div>
    </div>
  );
};
