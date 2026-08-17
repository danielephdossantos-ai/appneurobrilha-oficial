import { MundoBar, useMundoFundo } from "@/components/worlds/MundoTrilha";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAppState } from "@/core/store";
import { obterPipelineHibrido, type PipelineNode } from "@/lib/pipeline-builder";
import { useNavigationStore } from "@/lib/navigation-context";
import { motion } from "framer-motion";
import { Lock, Check, Play } from "lucide-react";

export const Route = createFileRoute("/trilha-unificada")({
  head: () => ({
    meta: [
      { title: "Minha Jornada — NeuroBrilha" },
      { name: "description", content: "Sua trilha personalizada de aprendizagem." },
    ],
  }),
  component: TrilhaUnificada,
});

function TrilhaUnificada() {
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const [nodes, setNodes] = useState<PipelineNode[]>([]);
  const [loading, setLoading] = useState(true);
  const fundoMundo = useMundoFundo("mundo-puzzle"); // Tema padrão para a trilha unificada

  useEffect(() => {
    if (!activeChild?.id) return;
    
    const load = async () => {
      const data = await obterPipelineHibrido(activeChild.id);
      setNodes(data);
      setLoading(false);
    };
    
    load();
  }, [activeChild?.id]);

  const handleNodeClick = (node: PipelineNode) => {
    if (node.status === "bloqueado") return;

    useNavigationStore.getState().setContext({
      originRoute: "/trilha-unificada",
      originModule: "escola-brilha",
      timestamp: Date.now(),
    });

    if (node.tipo === "neuro") {
      navigate({ to: "/neuro-treino/$slug", params: { slug: node.codigo } });
    } else {
      navigate({ to: "/escola-brilha/$codigo", params: { codigo: node.codigo } });
    }
  };

  return (
    <div 
      className="min-h-screen text-white overflow-x-hidden"
      style={fundoMundo.style}
    >
      <MundoBar />
      
      <header className="pt-8 pb-4 px-6 text-center">
        <h1 className="text-3xl font-black drop-shadow-lg">Minha Jornada</h1>
        <p className="text-white/80 font-medium">1 missão de cada vez para brilhar mais!</p>
      </header>

      <main className="max-w-md mx-auto px-6 py-12 relative">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-12 relative">
            {/* Linha conectora */}
            <div className="absolute top-0 bottom-0 w-2 bg-white/20 rounded-full left-1/2 -translate-x-1/2 -z-10" />

            {nodes.map((node, index) => {
              const isLeft = index % 2 === 0;
              const isConcluido = node.status === "concluido";
              const isAtual = node.status === "atual";
              
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center w-full ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                >
                  <button
                    onClick={() => handleNodeClick(node)}
                    disabled={node.status === "bloqueado"}
                    className={`
                      w-24 h-24 rounded-full border-4 flex items-center justify-center transition-all relative
                      ${isConcluido ? "bg-emerald-500 border-emerald-300 shadow-emerald-500/50" : ""}
                      ${isAtual ? "bg-amber-400 border-amber-200 shadow-amber-400/50 scale-110 z-10 animate-bounce" : ""}
                      ${node.status === "bloqueado" ? "bg-gray-600/50 border-gray-500/30 grayscale" : ""}
                    `}
                  >
                    {isConcluido && <Check className="w-12 h-12 text-white" />}
                    {isAtual && <Play className="w-12 h-12 text-white fill-white" />}
                    {node.status === "bloqueado" && <Lock className="w-8 h-8 text-white/50" />}
                    
                    {/* Badge do Tipo */}
                    <div className="absolute -top-2 -right-2 bg-indigo-600 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border border-white/20">
                      {node.tipo}
                    </div>
                  </button>

                  <div className={`flex-1 px-4 ${isLeft ? "text-left" : "text-right"}`}>
                    <h3 className={`font-black text-lg ${node.status === "bloqueado" ? "text-white/40" : "text-white"}`}>
                      {node.titulo}
                    </h3>
                    <p className="text-xs text-white/60 font-medium uppercase tracking-wider">
                      {node.codigo}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
