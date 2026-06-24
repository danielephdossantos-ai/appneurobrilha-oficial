import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMascot } from "@/contexts/MascotContext";
import pipImg from "@/assets/pip-mascot.png";
import pipaImg from "@/assets/pip-girl-mascot.png";

interface MascotTeacherProps {
  type: "pip" | "pipa";
  isSpeaking: boolean;
}

/**
 * Padrão visual obrigatório Escola Brilha:
 * - Apenas o mascote selecionado pela criança aparece.
 * - Pipa (menina) no canto inferior ESQUERDO.
 * - Pip (azul) no canto inferior DIREITO.
 */
export const MascotTeacher: React.FC<MascotTeacherProps> = ({ isSpeaking }) => {
  const { activeMascot } = useMascot();

  // Determina qual mascote exibir com base na escolha da criança
  // Se não houver mascote ativo ou se for um mascote genérico, usamos Pip/Pipa como fallback
  const selectedMascot = activeMascot?.mascot?.name?.toLowerCase();
  const isPipa = selectedMascot === "pipa";
  const isPip = selectedMascot === "pip" || !isPipa; // Default to Pip if not Pipa

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 pointer-events-none flex justify-between items-end px-2 sm:px-6">
      <AnimatePresence mode="wait">
        {isPipa ? (
          <MascotImage key="pipa" src={pipaImg} alt="Pipa" speaking={isSpeaking} side="left" />
        ) : (
          <div key="spacer-left" className="w-28 sm:w-40 md:w-48" />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isPip ? (
          <MascotImage key="pip" src={pipImg} alt="Pip" speaking={isSpeaking} side="right" />
        ) : (
          <div key="spacer-right" className="w-28 sm:w-40 md:w-48" />
        )}
      </AnimatePresence>
    </div>
  );
};

const MascotImage: React.FC<{
  src: string;
  alt: string;
  speaking: boolean;
  side: "left" | "right";
}> = ({ src, alt, speaking }) => (
  <motion.img
    src={src}
    alt={alt}
    initial={{ y: 120, opacity: 0 }}
    animate={
      speaking ? { y: [0, -8, 0], opacity: 1, scale: [1, 1.04, 1] } : { y: 0, opacity: 1, scale: 1 }
    }
    exit={{ y: 120, opacity: 0 }}
    transition={
      speaking ? { repeat: Infinity, duration: 0.7, ease: "easeInOut" } : { duration: 0.4 }
    }
    style={{ transformOrigin: "bottom center" }}
    className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)] select-none"
    draggable={false}
  />
);
