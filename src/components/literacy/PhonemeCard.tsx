import React from "react";
import { motion } from "framer-motion";
import { PhonemeData } from "@/data/literacy/phonemes";

interface PhonemeCardProps {
  phoneme: PhonemeData;
  onPlaySound: (sound: string) => void;
  onComplete: () => void;
  isTEA?: boolean;
}

export const PhonemeCard: React.FC<PhonemeCardProps> = ({
  phoneme,
  onPlaySound,
  onComplete,
  isTEA,
}) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPlaySound(phoneme.sound)}
        className="w-48 h-48 bg-indigo-100 rounded-full flex items-center justify-center cursor-pointer border-8 border-white shadow-lg relative overflow-hidden"
      >
        <span className="text-8xl font-black text-indigo-600">{phoneme.letter}</span>
        <div className="absolute bottom-0 w-full bg-indigo-500/20 py-1 text-center text-xs font-bold text-indigo-700">
          Clique para ouvir
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
        <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm">
          <h3 className="text-sm font-bold text-slate-400 uppercase mb-2">Exemplo</h3>
          <div className="flex items-center gap-4">
            <img
              src={phoneme.imageUrl}
              alt={phoneme.example}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <p className="text-2xl font-bold text-slate-700">{phoneme.example}</p>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-100 shadow-sm">
          <h3 className="text-sm font-bold text-indigo-400 uppercase mb-2">Como falar</h3>
          <p className="text-lg text-indigo-700 leading-relaxed italic">
            "{phoneme.articulatoryHint}"
          </p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onComplete}
        className="mt-8 px-12 py-4 bg-green-500 text-white rounded-full font-bold text-xl shadow-lg hover:bg-green-600 transition-colors"
      >
        Eu aprendi! 🌟
      </motion.button>
    </div>
  );
};
