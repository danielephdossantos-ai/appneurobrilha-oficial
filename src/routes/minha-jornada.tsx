import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useAppState } from "@/core/store";
import { MundoTrilha } from "@/components/worlds/MundoTrilha";
import { Brain, BookOpen, Calculator, CheckCircle2, Lock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getJornadaDoDia } from "@/lib/jornada/motor-jornada";
import { motion } from "framer-motion";
import { useNavigationStore } from "@/lib/navigation-context";

export const Route = createFileRoute("/minha-jornada")({
  head: () => ({
    meta: [
      { title: "Minha Jornada — NeuroBrilha Kids" },
      { name: "description", content: "Sua jornada diária de aprendizado unificada." },
    ],
  }),
  component: MinhaJornada,
});

function MinhaJornada() {
  const { activeChild } = useAppState();
  const navigate = useNavigate();

  const { data: jornada, isLoading } = useQuery({
    queryKey: ["jornada-diaria", activeChild?.id],
    queryFn: () => getJornadaDoDia({ data: { childId: activeChild!.id, dia: 1 } }),
    enabled: !!activeChild?.id,
  });

  if (!activeChild) return null;

  const handleStartMission = (codigo: string) => {
    // Salvar contexto de navegação para retorno automático
    useNavigationStore.getState().setContext({
      originRoute: "/minha-jornada",
      originModule: "minha-jornada",
      originParams: {},
      timestamp: Date.now(),
    });

    navigate({ to: "/escola-brilha/$codigo", params: { codigo } });
  };

  return (
    <MundoTrilha fallbackClass="bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-900">
      <div className="max-w-2xl mx-auto px-4 pb-24">
        <header className="py-8 text-center">
          <Link to="/" className="text-white/60 hover:text-white text-sm mb-4 inline-block transition-colors">
            ← Voltar para a Cidade
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-black text-white drop-shadow-2xl">Minha Jornada</h1>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
              <span className="text-amber-300 text-lg">✨</span>
              <span className="text-white font-black uppercase tracking-widest text-[10px]">
                Missão do Dia {jornada?.dia || 1}
              </span>
            </div>
          </div>
        </header>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white"></div>
            <p className="text-white/50 font-bold animate-pulse">Preparando suas missões...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-16 py-8">
            {jornada?.missoes.map((missao, i) => {
              const icons = { Brain, Calculator, BookOpen };
              const Icon = icons[missao.icon as keyof typeof icons] || BookOpen;
              const isLocked = i > 0 && !jornada.missoes[i-1].concluida;
              
              // Z-pattern for Duolingo style
              const offset = i % 2 === 0 ? "md:mr-32" : "md:ml-32";

              return (
                <motion.div 
                  key={missao.codigo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`w-full flex justify-center ${offset}`}
                >
                  <button
                    disabled={isLocked}
                    onClick={() => handleStartMission(missao.codigo)}
                    className={`
                      relative group w-44 h-44 sm:w-52 sm:h-52 rounded-[3.5rem] flex flex-col items-center justify-center transition-all duration-300
                      ${isLocked 
                        ? 'bg-black/20 border-4 border-dashed border-white/10 grayscale cursor-not-allowed' 
                        : missao.concluida
                          ? 'bg-gradient-to-br from-emerald-400 to-teal-600 border-4 border-white shadow-[0_10px_0_rgb(5,150,105)]'
                          : 'bg-gradient-to-br from-purple-500 to-indigo-600 border-4 border-white shadow-[0_10px_0_rgb(79,70,229)] hover:scale-105 active:translate-y-[4px] active:shadow-[0_6px_0_rgb(79,70,229)]'
                      }
                    `}
                  >
                    <div className={`${isLocked ? 'bg-white/5' : 'bg-white/20'} p-5 rounded-[2rem] mb-3 transition-colors`}>
                      <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${isLocked ? 'text-white/20' : 'text-white'}`} />
                    </div>
                    
                    <div className="text-center px-4">
                      <div className={`text-[9px] font-black uppercase tracking-widest mb-1 ${isLocked ? 'text-white/20' : 'text-white/70'}`}>
                        {missao.categoria}
                      </div>
                      <div className={`text-sm sm:text-base font-black leading-tight ${isLocked ? 'text-white/20' : 'text-white'}`}>
                        {missao.titulo}
                      </div>
                    </div>

                    {missao.concluida && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-3 -right-3 bg-emerald-500 rounded-full p-2.5 border-4 border-white shadow-lg"
                      >
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </motion.div>
                    )}
                    
                    {isLocked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Lock className="w-12 h-12 text-white/10" />
                      </div>
                    )}

                    {!isLocked && !missao.concluida && (
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white text-indigo-900 px-4 py-1 rounded-full text-[10px] font-black uppercase whitespace-nowrap shadow-lg animate-bounce">
                        Começar Agora!
                      </div>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </MundoTrilha>
  );
}
