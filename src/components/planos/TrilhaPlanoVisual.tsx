import { motion } from "framer-motion";
import { CheckCircle2, Lock, Star, ChevronRight } from "lucide-react";
import { DIAS_LABEL, diaSemanaHoje } from "@/modules/primeiros-anos/builder";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

interface TrilhaItem {
  id: string;
  dia_semana: number;
  titulo: string;
  rota: string;
  concluido: boolean;
  trilha_label: string;
  emoji?: string;
  minutos: number;
}

interface Props {
  itens: TrilhaItem[];
  onToggle?: (item: any) => void;
  tipo: "alfa" | "neuro";
}

export function TrilhaPlanoVisual({ itens, onToggle, tipo }: Props) {
  const hoje = diaSemanaHoje();
  const navigate = useNavigate();

  // Agrupar itens por dia
  const diasDisponiveis = Array.from(new Set(itens.map((i) => i.dia_semana))).sort((a, b) => a - b);

  const handleItemClick = (item: TrilhaItem) => {
    if (item.dia_semana > hoje) {
      toast.info(`Esta aula abrirá na ${DIAS_LABEL[item.dia_semana]}! 🔒`);
      return;
    }
    navigate({ to: item.rota });
  };

  return (
    <div className="relative py-10 flex flex-col items-center">
      {/* Linha conectora central */}
      <div className="absolute top-0 bottom-0 w-2 bg-slate-200 dark:bg-slate-800 rounded-full left-1/2 -translate-x-1/2 z-0" />

      <div className="relative z-10 w-full max-w-sm space-y-16">
        {diasDisponiveis.map((dia, idx) => {
          const itensDoDia = itens.filter((i) => i.dia_semana === dia);
          const trancado = dia > hoje;
          const ehHoje = dia === hoje;
          const concluido = itensDoDia.every((i) => i.concluido);
          
          // Zigue-zague
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={dia}
              className={`flex w-full items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Espaçador para o zigue-zague */}
              <div className="flex-1" />

              {/* Ícone da Missão do Dia */}
              <div className="relative">
                <motion.button
                  whileHover={!trancado ? { scale: 1.1 } : {}}
                  whileTap={!trancado ? { scale: 0.95 } : {}}
                  onClick={() => handleItemClick(itensDoDia[0])}
                  className={`
                    relative w-24 h-24 rounded-full border-4 flex items-center justify-center shadow-lg transition-all
                    ${trancado 
                      ? "bg-slate-300 border-slate-400 text-slate-500 grayscale cursor-not-allowed" 
                      : ehHoje 
                        ? "bg-sun border-white text-sun-foreground ring-8 ring-sun/20" 
                        : concluido
                          ? "bg-emerald-500 border-emerald-600 text-white"
                          : "bg-primary border-white text-primary-foreground"
                    }
                  `}
                >
                  {trancado ? (
                    <Lock className="w-10 h-10" />
                  ) : concluido ? (
                    <CheckCircle2 className="w-12 h-12" />
                  ) : (
                    <Star className={`w-12 h-12 ${ehHoje ? "animate-pulse" : ""}`} />
                  )}

                  {/* Badge de quantidade de aulas */}
                  {!trancado && itensDoDia.length > 1 && (
                    <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-black rounded-full w-7 h-7 flex items-center justify-center border-2 border-white">
                      {itensDoDia.length}
                    </div>
                  )}
                </motion.button>

                {/* Nome do Dia */}
                <div className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap`}>
                  <span className={`text-sm font-black uppercase tracking-widest ${ehHoje ? "text-sun-foreground bg-sun px-3 py-1 rounded-full" : "text-muted-foreground"}`}>
                    {DIAS_LABEL[dia]}
                    {ehHoje && " · Hoje"}
                  </span>
                </div>
              </div>

              {/* Conteúdo / Info lateral */}
              <div className={`flex-1 px-4 ${isLeft ? "text-left" : "text-right"}`}>
                <div className={`max-w-[140px] ${isLeft ? "" : "ml-auto"}`}>
                  <h3 className={`text-sm font-black leading-tight ${trancado ? "text-slate-400" : "text-slate-900 dark:text-white"}`}>
                    {itensDoDia[0].titulo}
                  </h3>
                  <div className="text-[10px] font-bold text-muted-foreground mt-1 uppercase">
                    {itensDoDia[0].trilha_label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
