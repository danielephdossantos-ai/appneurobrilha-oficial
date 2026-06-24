import React from "react";
import { motion } from "framer-motion";

interface SpeechBubbleProps {
  text: string;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text }) => {
  // Logic to enforce limits or warn during development
  const wordCount = text.split(" ").length;
  if (wordCount > 15) {
    console.warn(`Speech too long: ${wordCount} words. Limit is 15.`);
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: -20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-white p-4 rounded-3xl shadow-xl z-50 border-4 border-blue-100"
    >
      <p className="text-xl md:text-2xl font-bold text-center text-gray-800 leading-tight">
        {text}
      </p>

      {/* Triangle pointer */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-white" />
    </motion.div>
  );
};
