import React, { useState, useEffect } from "react";
import { useMascot } from "@/contexts/MascotContext";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/utils";
import { useLocation } from "@tanstack/react-router";
import { useAppState } from "@/core/store";
import { PipPedagogicalSystem } from "@/engines/pedagogical-engine/PipPedagogicalSystem";
import KidLiveMascot from "@/components/ui/KidLiveMascot";

export const MascotGlobalContainer: React.FC = () => {
  const { activeMascot, isLoading } = useMascot();
  const { activeChild } = useAppState();
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [emotion, setEmotion] = useState<any>("happy");
  const location = useLocation();

  useEffect(() => {
    if (!activeChild) return;

    // Reagir a mudanças de rota com o PipPedagogicalSystem
    if (location.pathname === "/") {
      setCurrentMessage("Bem-vindo de volta! Vamos brilhar hoje?");
      setEmotion("happy");
    } else {
      const guidance = PipPedagogicalSystem.getEncouragement(activeChild);
      setCurrentMessage(guidance.text);
      setEmotion(guidance.emotion);
    }

    const timer = setTimeout(() => setCurrentMessage(null), 5000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Esconde mascote global em telas que já mostram Pip + Pipa fixos (Escola Brilha)
  
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
          isMinimized ? "opacity-50 hover:opacity-100" : "",
        )}
        onClick={() => setIsMinimized(!isMinimized)}
      >
        <div className={cn("transition-all duration-300", isMinimized ? "w-16 h-16" : "w-32 h-32")}>
          <KidLiveMascot
            emotion={emotion}
            size={isMinimized ? "sm" : "md"}
            className="cursor-pointer"
          />

          {/* Badge de Nível Flutuante */}
          {!isMinimized && (
            <div className="absolute -bottom-2 right-4 bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-white shadow-lg">
              LV {activeMascot.level}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
