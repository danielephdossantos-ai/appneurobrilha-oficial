import React, { useState } from "react";
import { motion } from "framer-motion";

interface WordAssociationProps {
  word: string;
  syllables: string[];
  imageUrl: string;
  options: string[];
  onComplete: () => void;
  isTDAH?: boolean;
}

export const WordAssociation: React.FC<WordAssociationProps> = ({
  word,
  imageUrl,
  options,
  onComplete,
  isTDAH,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    if (option === word) {
      setFeedback("success");
      setTimeout(onComplete, 1500);
    } else {
      setFeedback("error");
      setTimeout(() => {
        setFeedback(null);
        setSelected(null);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        layoutId="word-image"
        className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
      >
        <img src={imageUrl} alt="Word target" className="w-full h-full object-cover" />
      </motion.div>

      <div className="text-2xl font-bold text-slate-700 mb-4">Qual é o nome desta imagem?</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {options.map((option, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect(option)}
            className={`p-6 rounded-2xl text-2xl font-bold transition-all shadow-md
                       ${
                         selected === option
                           ? feedback === "success"
                             ? "bg-green-500 text-white"
                             : "bg-red-500 text-white"
                           : "bg-white text-slate-700 hover:bg-indigo-50 border-2 border-slate-100 hover:border-indigo-200"
                       }`}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {isTDAH && feedback === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-600 font-bold flex items-center gap-2"
        >
          <span>🌟 +10 Pontos de Foco!</span>
        </motion.div>
      )}
    </div>
  );
};
