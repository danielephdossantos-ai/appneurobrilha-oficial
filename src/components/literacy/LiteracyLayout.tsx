
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LITERACY_SYSTEM } from '@/data/literacy';
import { NeuroProfile } from '@/engines/adaptive-engine/engine';

interface LiteracyLayoutProps {
  children: React.ReactNode;
  profile?: NeuroProfile;
  title: string;
  onBack?: () => void;
}

export const LiteracyLayout: React.FC<LiteracyLayoutProps> = ({ 
  children, 
  profile, 
  title,
  onBack 
}) => {
  const isDyslexic = profile === 'Dislexia';
  const isTEA = profile === 'TEA';
  const isTDAH = profile === 'TDAH';

  const adaptation = isDyslexic ? LITERACY_SYSTEM.adaptations.dyslexia : 
                   isTEA ? LITERACY_SYSTEM.adaptations.tea : 
                   isTDAH ? LITERACY_SYSTEM.adaptations.tdah : null;


  return (
    <div className={`min-h-screen bg-slate-50 p-4 md:p-8 ${isDyslexic ? 'font-dyslexic' : ''}`}
         style={{
           fontFamily: isDyslexic ? 'OpenDyslexic, sans-serif' : 'inherit',
           letterSpacing: isDyslexic ? '0.15em' : 'normal'
         }}>
      <header className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors"
          >
            ←
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-900">{title}</h1>
        </div>
        <div className="flex gap-2">
          {isTEA && <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Modo Previsível</span>}
          {isDyslexic && <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Fonte Acessível</span>}
          {isTDAH && <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Recompensas Rápidas</span>}
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: isTEA ? 0.8 : 0.4 }}
            className={`bg-white rounded-3xl shadow-xl p-6 md:p-10 border-4 border-indigo-50 
                       ${isTEA ? 'border-blue-100' : ''}
                       ${isTDAH ? 'border-green-100' : ''}`}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer / Progression */}
      <footer className="max-w-4xl mx-auto mt-8 flex justify-center gap-4">
        <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-indigo-500"
            initial={{ width: 0 }}
            animate={{ width: '45%' }}
            transition={{ duration: 1 }}
          />
        </div>
      </footer>
    </div>
  );
};
