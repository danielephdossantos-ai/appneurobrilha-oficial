import React, { useState, useEffect } from 'react';
import { useMascot } from '@/contexts/MascotContext';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/utils';
import { useLocation } from '@tanstack/react-router';

export const MascotGlobalContainer: React.FC = () => {
  const { activeMascot, isLoading } = useMascot();
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [emotion, setEmotion] = useState<'happy' | 'thinking' | 'excited' | 'sleeping' | 'proud'>('happy');
  const location = useLocation();

  useEffect(() => {
    // Reagir a mudanças de rota
    if (location.pathname === '/') {
      setCurrentMessage("Bem-vindo de volta! Vamos brilhar hoje?");
      setEmotion('happy');
    } else if (location.pathname.includes('neuro')) {
      setCurrentMessage("Hora de treinar seu super cérebro!");
      setEmotion('thinking');
    } else if (location.pathname.includes('escola')) {
      setCurrentMessage("O que vamos aprender hoje?");
      setEmotion('happy');
    }
    
    const timer = setTimeout(() => setCurrentMessage(null), 5000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading || !activeMascot) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2 pointer-events-none">
      <AnimatePresence>
        {currentMessage && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white p-4 rounded-2xl shadow-xl border-2 border-primary/20 max-w-[200px] pointer-events-auto"
          >
            <p className="text-sm font-bold text-primary text-center leading-tight">
              {currentMessage}
            </p>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-b-2 border-r-2 border-primary/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        layout
        className={cn(
          "pointer-events-auto cursor-pointer relative",
          isMinimized ? "opacity-50 hover:opacity-100" : ""
        )}
        onClick={() => setIsMinimized(!isMinimized)}
      >
        <div className={cn(
          "transition-all duration-300",
          isMinimized ? "w-12 h-12" : "w-32 h-32"
        )}>
           {/* SVG Mascote Pip / Active Mascote */}
           <div className={cn(
             "w-full h-full bg-primary rounded-full relative shadow-lg flex items-center justify-center border-4 border-white overflow-hidden",
             emotion === 'happy' ? 'animate-bounce-gentle' : ''
           )}>
              {/* Se tiver imagem, usa imagem, senão usa o Pip base */}
              {activeMascot.mascot.image_url && !activeMascot.mascot.image_url.includes('dicebear') ? (
                <img src={activeMascot.mascot.image_url} alt={activeMascot.mascot.name} className="w-full h-full object-cover" />
              ) : (
                <div className="relative w-full h-full p-2 flex items-center justify-center">
                   <div className="w-3/4 h-3/4 bg-white/20 rounded-full relative">
                      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full" />
                      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full" />
                      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-4 h-2 border-b-2 border-white rounded-full" />
                   </div>
                </div>
              )}

              {/* Badges de Level */}
              {!isMinimized && (
                <div className="absolute bottom-0 inset-x-0 bg-primary/80 py-0.5">
                   <p className="text-[10px] font-black text-white text-center">NV {activeMascot.level}</p>
                </div>
              )}
           </div>
        </div>
      </motion.div>
    </div>
  );
};
