import React from "react";
import { motion } from "framer-motion";

interface MascotProps {
  phrase?: string;
  mood?: "happy" | "thinking" | "celebrating" | "calm";
  size?: "sm" | "md" | "lg";
}

export const MascotEarlyChildhood = ({ phrase, mood = "happy", size = "md" }: MascotProps) => {
  const sizes = {
    sm: "w-24 h-24 text-4xl",
    md: "w-40 h-40 text-6xl",
    lg: "w-60 h-60 text-8xl",
  };

  const getEmoji = () => {
    switch (mood) {
      case "celebrating":
        return "🥳";
      case "thinking":
        return "🤔";
      case "calm":
        return "🧘";
      default:
        return "🦁";
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: mood === "celebrating" ? [0, 10, -10, 0] : 0,
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        className={`${sizes[size]} bg-white rounded-full shadow-2xl border-8 border-indigo-100 flex items-center justify-center relative`}
      >
        <span className="drop-shadow-sm">{getEmoji()}</span>

        {mood === "celebrating" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            className="absolute -top-4 -right-4 bg-yellow-400 text-white p-2 rounded-full text-2xl"
          >
            ✨
          </motion.div>
        )}
      </motion.div>

      {phrase && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white px-6 py-4 rounded-3xl shadow-xl border-2 border-indigo-50 relative"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-indigo-50 rotate-45" />
          <p className="text-indigo-900 font-bold text-center text-lg">{phrase}</p>
        </motion.div>
      )}
    </div>
  );
};
