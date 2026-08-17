import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useAppState } from "@/core/store";
import { MundoTrilha } from "@/components/worlds/MundoTrilha";
import { Brain, BookOpen, Calculator, CheckCircle2, Lock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getJornadaDoDia } from "@/lib/jornada/motor-jornada";
import { motion } from "framer-motion";

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
    queryFn: () => getJornadaDoDia({ data: { childId: activeChild!.id } }),
    enabled: !!activeChild?.id,
  });

  if (!activeChild) return null;

  return (
    <MundoTrilha fallbackClass="bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-900">
      <div className="max-w-2xl mx-auto px-4 pb-20">
        <header className="py-8 text-center">
          <Link to="/" className="text-white/60 hover:text-white text-sm mb-4 inline-block">
            ← Voltar para a Cidade
          </Link>
          <h1 className="text-4xl font-black text-white drop-shadow-lg">Minha Jornada</h1>
          <p className="text-purple-200 font-bold mt-2 uppercase tracking-widest text-xs">
            Dia {jornada?.dia || 1} · Nível 1
          </p>
        </header>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="space-y-12 py-10">
            {jornada?.missoes.map((missao, i) => {
              const Icon = missao.icon === "Brain" ? Brain : missao.icon === "Calculator" ? Calculator : BookOpen;
              const isLocked = i > 0 && !jornada.missoes[i-1].concluida;
              const align = i % 2 === 0 ? "justify-start" : "justify-end";

              return (
                <motion.div 
                  key={missao.codigo}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${align}`}
                >
                  <button
                    disabled={isLocked}
                    onClick={() => navigate({ to: "/escola-brilha/$codigo", params: { codigo: missao.codigo } })}
                    className={`
                      relative group w-48 h-48 rounded-[3rem] flex flex-col items-center justify-center transition-all
                      ${isLocked ? 'bg-white/5 border-2 border-dashed border-white/20 grayscale' : 'bg-gradient-to-br from-purple-500 to-indigo-600 border-4 border-white shadow-2xl hover:scale-105 active:scale-95'}
                    `}
                  >
                    <div className="bg-white/20 p-4 rounded-3xl mb-3">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-center px-4">
                      <div className="text-[10px] font-black uppercase tracking-tighter text-white/70 mb-1">
                        {missao.categoria}
                      </div>
                      <div className="text-sm font-black text-white leading-tight">
                        {missao.titulo}
                      </div>
                    </div>

                    {missao.concluida && (
                      <div className="absolute -top-3 -right-3 bg-green-500 rounded-full p-2 border-4 border-white shadow-lg">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                    )}
                    {isLocked && (
                      <div className="absolute inset-0 bg-black/40 rounded-[3rem] flex items-center justify-center">
                        <Lock className="w-10 h-10 text-white/50" />
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
