import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { useState, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getTrilhaPipeline } from "@/lib/trilha-unificada.functions";
import { TrilhaVisual } from "@/components/trilha/TrilhaVisual";
import { HubDiario } from "@/components/trilha/HubDiario";
import { NodeTrilha, Aula } from "@/lib/trilha-unificada";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";

export const Route = createFileRoute("/trilha")({
  head: () => ({
    meta: [
      { title: "Minha Trilha Mágica — Neuro Brilha Kids" },
      {
        name: "description",
        content: "Acompanhe seu progresso diário e libere novos desafios!",
      },
    ],
  }),
  component: TrilhaPage,
});

function TrilhaPage() {
  const { activeChild } = useAppState();
  const getTrilha = useServerFn(getTrilhaPipeline);
  const [nodes, setNodes] = useState<NodeTrilha[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNode, setSelectedNode] = useState<NodeTrilha | null>(null);

  useEffect(() => {
    if (activeChild?.id) {
      loadTrilha();
    }
  }, [activeChild?.id]);

  async function loadTrilha() {
    if (!activeChild?.id) return;
    setLoading(true);
    try {
      const data = await getTrilha({ data: { childId: activeChild.id } });
      setNodes(data);
    } catch (error) {
      console.error("Erro ao carregar trilha:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleNodeClick = (node: NodeTrilha) => {
    if (node.status === 'bloqueado') return;
    setSelectedNode(node);
  };

  const handleAulaClick = (aula: Aula) => {
    // A navegação acontece via Link no componente HubDiario
    // Mas podemos registrar aqui que a aula foi iniciada se necessário
    console.log("Iniciando aula:", aula.titulo);
  };

  return (
    <Shell>
      <div className="min-h-screen bg-slate-50/50 -mt-6 -mx-4 pb-20 overflow-x-hidden">
        {/* Header da Trilha */}
        <div className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white px-6 pt-12 pb-24 rounded-b-[3rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full -ml-20 -mb-20 blur-2xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-blue-200 text-xs font-black uppercase tracking-[0.2em] mb-2">
              <Sparkles className="w-4 h-4" /> Pipeline do Aluno
            </div>
            <h1 className="text-4xl font-black mb-2">Minha Trilha</h1>
            <p className="text-blue-100 font-bold opacity-90 max-w-xs leading-tight">
              Uma nova aventura todos os dias para {activeChild?.nome || 'você'}! 🚀
            </p>
          </div>
        </div>

        {/* Status Card */}
        <div className="px-6 -mt-12 relative z-20">
          <div className="bg-white rounded-3xl p-4 shadow-xl border-2 border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                📅
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Hoje
                </div>
                <div className="font-black text-slate-800">
                  {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
                </div>
              </div>
            </div>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-xs font-black shadow-lg">
              DIA {nodes.filter(n => n.status === 'concluido').length + 1}
            </div>
          </div>
        </div>

        {/* Trilha Visual */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <span className="font-black text-slate-400 uppercase tracking-widest text-xs">Construindo seu caminho...</span>
          </div>
        ) : (
          <TrilhaVisual nodes={nodes} onNodeClick={handleNodeClick} />
        )}

        {/* Hub do Dia (Modal) */}
        <AnimatePresence>
          {selectedNode && (
            <HubDiario 
              node={selectedNode} 
              onClose={() => setSelectedNode(null)} 
              onAulaClick={handleAulaClick}
            />
          )}
        </AnimatePresence>
      </div>
    </Shell>
  );
}
