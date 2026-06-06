import React from 'react';
import { motion } from 'framer-motion';

interface LessonHeaderProps {
  progress: number;
  missionName: string;
  field?: string;
}

const FIELD_LABELS: Record<string, string> = {
  escuta_fala: 'Escuta, Fala, Pensamento e Imaginação',
  espacos_tempos: 'Espaços, Tempos e Relações',
  corpo_gestos: 'Corpo, Gestos e Movimentos',
  tracos_sons: 'Traços, Sons, Cores e Formas',
  eu_outro_nos: 'O Eu, o Outro e o Nós',
};

export const LessonHeader: React.FC<LessonHeaderProps> = ({ progress, missionName, field }) => {
  return (
    <div className="fixed top-0 left-0 w-full p-4 z-50 bg-white/80 backdrop-blur-sm border-b-2 border-blue-100">
      <div className="max-w-xl mx-auto flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
              {field ? FIELD_LABELS[field] : 'Escola Brilha'}
            </span>
            <span className="text-lg font-black text-blue-600 leading-tight">
              {missionName}
            </span>
          </div>
          <span className="text-sm font-black text-blue-400 mb-1">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-4 w-full bg-blue-50 rounded-full overflow-hidden border-2 border-blue-100">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
