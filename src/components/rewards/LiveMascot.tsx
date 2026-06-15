import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MascotEmotion } from "@/engines/reward-engine/reward-system";
import { cn } from "@/utils/utils";

interface LiveMascotProps {
  emotion: MascotEmotion;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const emotionMap: Record<MascotEmotion, string> = {
  happy: "😊",
  calm: "😌",
  sleepy: "😴",
  excited: "🤩",
  focused: "🧐",
  proud: "🥳",
};

const emotionColors: Record<MascotEmotion, string> = {
  happy: "bg-yellow-100 border-yellow-200",
  calm: "bg-blue-100 border-blue-200",
  sleepy: "bg-indigo-100 border-indigo-200",
  excited: "bg-orange-100 border-orange-200",
  focused: "bg-green-100 border-green-200",
  proud: "bg-purple-100 border-purple-200",
};

export const LiveMascot: React.FC<LiveMascotProps> = ({
  emotion = "happy",
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: "w-16 h-16 text-2xl",
    md: "w-32 h-32 text-5xl",
    lg: "w-48 h-48 text-7xl",
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={cn(
        "relative flex items-center justify-center rounded-full border-4 shadow-sm",
        emotionColors[emotion],
        sizeClasses[size],
        className,
      )}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={emotion}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {emotionMap[emotion]}
        </motion.span>
      </AnimatePresence>

      {/* Halo de calma/foco suave */}
      {emotion === "calm" && (
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400/20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};
