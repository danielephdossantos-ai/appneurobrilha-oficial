import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppState } from "@/core/store";
import { cn } from "@/utils/utils";

export const CoinDisplay: React.FC<{ className?: string }> = ({ className }) => {
  const { activeChild } = useAppState();

  if (!activeChild) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl border-2 border-yellow-400/30 shadow-sm",
        className,
      )}
    >
      <motion.div
        animate={{
          rotateY: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-2xl"
      >
        🪙
      </motion.div>
      <div className="flex flex-col">
        <span className="text-[10px] font-black text-yellow-600 uppercase tracking-widest leading-none">
          BrilhoCoins
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeChild.coins}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-lg font-black text-primary leading-none"
          >
            {activeChild.coins || 0}
          </motion.span>
        </AnimatePresence>
      </div>

      {activeChild.earned_today > 0 && (
        <div className="ml-2 pl-2 border-l border-yellow-400/20">
          <div className="text-[8px] font-black text-muted-foreground uppercase tracking-tighter">
            Hoje
          </div>
          <div className="text-xs font-black text-success">+{activeChild.earned_today}</div>
        </div>
      )}
    </div>
  );
};
