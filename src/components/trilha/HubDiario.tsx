import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { NodeTrilha, Aula } from '@/lib/trilha-unificada';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { useNavigationStore } from '@/lib/navigation-context';

interface HubDiarioProps {
  node: NodeTrilha;
  onClose: () => void;
  onAulaClick: (aula: Aula) => void;
}

export const HubDiario: React.FC<HubDiarioProps> = ({ node, onClose, onAulaClick }) => {
  const todasConcluidas = node.aulasDoDia.every(a => a.concluida);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <div className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden border-4 border-white shadow-2xl relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-1">
            Missão do Dia {node.diaNumero}
          </div>
          <h2 className="text-2xl font-black">Hub de Atividades</h2>
          
          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-bold">
            <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
              <Clock className="w-3 h-3" /> 15-20 min
            </span>
            <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3" /> {node.aulasDoDia.length} Aulas
            </span>
          </div>
        </div>
        
        {/* Lista de Aulas */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {node.aulasDoDia.map((aula, idx) => (
            <Link
              key={aula.id}
              to={aula.path as any}
              onClick={() => {
                useNavigationStore.getState().setContext({
                  originRoute: "/trilha",
                  originModule: "trilha",
                  timestamp: Date.now(),
                });
                onAulaClick(aula);
              }}
              className={cn(
                "flex items-center gap-4 p-4 rounded-3xl border-2 transition-all active:scale-[0.98]",
                aula.concluida 
                  ? "bg-emerald-50 border-emerald-200 opacity-80" 
                  : "bg-slate-50 border-slate-200 hover:border-blue-400"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner",
                aula.tipo === 'neuro-treino' ? "bg-purple-100" : "bg-emerald-100"
              )}>
                {aula.tipo === 'neuro-treino' ? '🧠' : '📚'}
              </div>
              
              <div className="flex-1">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  {aula.tipo}
                </div>
                <div className="font-black text-slate-800">{aula.titulo}</div>
              </div>
              
              {aula.concluida ? (
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-white fill-current ml-1" />
                </div>
              )}
            </Link>
          ))}
        </div>
        
        {/* Footer / Ação de Conclusão */}
        <div className="p-6 pt-0">
          {todasConcluidas ? (
            <div className="bg-emerald-500 text-white p-4 rounded-2xl text-center font-black flex items-center justify-center gap-2">
              <CheckCircle2 className="w-6 h-6" /> TUDO FEITO POR HOJE! 🌟
            </div>
          ) : (
            <p className="text-center text-xs font-bold text-slate-500 italic">
              Conclua todas as aulas para liberar o próximo dia!
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
