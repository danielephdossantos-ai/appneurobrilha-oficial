import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Check, Play, AlertCircle } from 'lucide-react';
import { cn } from '@/utils/utils';
import { NodeTrilha } from '@/lib/trilha-unificada';

interface TrilhaVisualProps {
  nodes: NodeTrilha[];
  onNodeClick: (node: NodeTrilha) => void;
}

export const TrilhaVisual: React.FC<TrilhaVisualProps> = ({ nodes, onNodeClick }) => {
  return (
    <div className="relative py-10 px-4 flex flex-col items-center overflow-x-hidden">
      {/* Linha conectora de fundo */}
      <div className="absolute top-0 bottom-0 w-2 bg-slate-200/50 rounded-full left-1/2 -translate-x-1/2 z-0" />
      
      <div className="relative z-10 flex flex-col gap-12 w-full max-w-md">
        {nodes.map((node, index) => {
          const isLeft = index % 2 === 0;
          const status = node.status;
          
          return (
            <div 
              key={node.id} 
              className={cn(
                "flex items-center w-full",
                isLeft ? "flex-row" : "flex-row-reverse"
              )}
            >
              {/* Espaçador lateral */}
              <div className="flex-1" />
              
              {/* O Nó da Trilha */}
              <motion.button
                whileHover={status !== 'bloqueado' ? { scale: 1.1 } : {}}
                whileTap={status !== 'bloqueado' ? { scale: 0.95 } : {}}
                onClick={() => onNodeClick(node)}
                disabled={status === 'bloqueado'}
                className={cn(
                  "relative w-20 h-20 rounded-full border-4 shadow-xl flex items-center justify-center transition-all duration-300",
                  status === 'bloqueado' && "bg-slate-300 border-slate-400 cursor-not-allowed opacity-70",
                  status === 'disponivel' && "bg-blue-500 border-white",
                  status === 'concluido' && "bg-emerald-500 border-white",
                  status === 'falta' && "bg-rose-500 border-white"
                )}
              >
                {status === 'bloqueado' && <Lock className="w-8 h-8 text-slate-500" />}
                {status === 'disponivel' && <Play className="w-8 h-8 text-white fill-current" />}
                {status === 'concluido' && <Check className="w-10 h-10 text-white" strokeWidth={4} />}
                {status === 'falta' && <AlertCircle className="w-8 h-8 text-white" />}
                
                {/* Badge do Dia */}
                <div className={cn(
                  "absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-black shadow-md",
                  status === 'bloqueado' ? "bg-slate-400 text-white" : "bg-white text-slate-800"
                )}>
                  {node.diaNumero}
                </div>
              </motion.button>
              
              {/* Label do Nó */}
              <div className={cn(
                "flex-1 px-4 text-sm font-black uppercase tracking-wider",
                isLeft ? "text-left" : "text-right",
                status === 'bloqueado' ? "text-slate-400" : "text-slate-700"
              )}>
                {status === 'concluido' ? "Concluído!" : `Dia ${node.diaNumero}`}
                {status === 'falta' && <div className="text-[10px] text-rose-500">Pendente</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
