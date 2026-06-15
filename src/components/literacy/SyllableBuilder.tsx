import React, { useState } from "react";
import { motion } from "framer-motion";

interface SyllableBuilderProps {
  syllable: string;
  parts: string[];
  onComplete: () => void;
  isDyslexic?: boolean;
}

export const SyllableBuilder: React.FC<SyllableBuilderProps> = ({
  syllable,
  parts,
  onComplete,
  isDyslexic,
}) => {
  const [selectedParts, setSelectedParts] = useState<string[]>([]);

  const handlePartClick = (part: string) => {
    if (selectedParts.length < parts.length) {
      const newSelected = [...selectedParts, part];
      setSelectedParts(newSelected);

      if (newSelected.join("") === syllable) {
        setTimeout(onComplete, 1000);
      } else if (newSelected.length === parts.length) {
        setTimeout(() => setSelectedParts([]), 1000); // Erro: reseta
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <div className="flex gap-4 min-h-[100px] items-center">
        {parts.map((_, i) => (
          <div
            key={i}
            className={`w-24 h-24 rounded-2xl border-4 border-dashed border-slate-200 flex items-center justify-center text-4xl font-black
                       ${selectedParts[i] ? "bg-indigo-500 border-indigo-600 text-white border-solid" : "bg-slate-50"}`}
          >
            {selectedParts[i]}
          </div>
        ))}
      </div>

      <div className="text-xl font-medium text-slate-500">
        Toque nas letras para formar:{" "}
        <span className="font-black text-indigo-600 underline">{syllable}</span>
      </div>

      <div className="flex gap-4">
        {parts
          .sort(() => Math.random() - 0.5)
          .map((part, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handlePartClick(part)}
              className="w-20 h-20 bg-white border-b-8 border-slate-200 rounded-2xl flex items-center justify-center text-3xl font-black text-slate-700 shadow-md hover:border-indigo-200"
            >
              {part}
            </motion.button>
          ))}
      </div>

      {selectedParts.length === parts.length && selectedParts.join("") === syllable && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1.2 }} className="text-4xl">
          🎉 PARABÉNS!
        </motion.div>
      )}
    </div>
  );
};
