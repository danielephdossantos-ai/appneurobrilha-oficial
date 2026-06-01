import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Component, ReactNode, useState, useEffect } from "react";
import { 
  AlertCircle, 
  Play, 
  Sparkles as SparklesIcon, 
  CheckCircle2, 
  XCircle, 
  Brain, 
  Target, 
  Star, 
  ArrowLeft, 
  Heart, 
  Volume2, 
  Smile, 
  Sparkles, 
  Activity,
  Mic,
  Move,
  Pencil
} from "lucide-react";
import { useAppState } from "@/core/store";
import { PipPedagogicalGuidance } from "@/components/rewards/PipPedagogicalGuidance";
import { useMascot } from "@/contexts/MascotContext";
import { toast } from "sonner";
import { cn } from "@/utils/utils";
import { NEURO_ACTIVITIES, NeuroActivity } from "@/data/neuro-treino/activities";
import { motion, AnimatePresence } from "framer-motion";

class NeuroTreinoErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) { return { hasError: true, error }; }
  componentDidCatch(error: Error, errorInfo: any) { console.error("NeuroTreinoErrorBoundary:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <Shell>
          <div className="flex flex-col items-center justify-center p-8 text-center bg-destructive/5 rounded-3xl border-2 border-dashed border-destructive/20">
            <AlertCircle className="h-16 w-16 text-destructive mb-4" />
            <h2 className="text-2xl font-bold text-destructive">Erro no Neuro-Treino</h2>
            <p className="text-muted-foreground mt-2 mb-6"><b>Erro:</b> {this.state.error?.message}</p>
          </div>
        </Shell>
      );
    }
    return this.props.children;
  }
}

export const Route = createFileRoute("/neuro-treino")({
  component: () => (
    <NeuroTreinoErrorBoundary>
      <Treino />
    </NeuroTreinoErrorBoundary>
  ),
});

const clinicaCategorias = [
  {
    id: 'atencao',
    nome: "Atenção Super Focada",
    cor: "bg-amber-400 border-amber-500",
    corTexto: "text-amber-950",
    icone: <Target className="w-10 h-10" />,
    atividades: NEURO_ACTIVITIES["Atenção Super Focada"] || []
  },
  {
    id: 'memoria',
    nome: "Memória de Elefante",
    cor: "bg-purple-400 border-purple-500",
    corTexto: "text-purple-950",
    icone: <Brain className="w-10 h-10" />,
    atividades: NEURO_ACTIVITIES["Memória de Elefante"] || []
  },
  {
    id: 'sons_iniciais',
    nome: "Sons Iniciais",
    cor: "bg-sky-400 border-sky-500",
    corTexto: "text-sky-950",
    icone: <Volume2 className="w-10 h-10" />,
    atividades: NEURO_ACTIVITIES["Sons Iniciais"] || []
  },
  {
    id: 'motorzinho',
    nome: "Motorzinho dos Sons",
    cor: "bg-emerald-400 border-emerald-500",
    corTexto: "text-emerald-950",
    icone: <Activity className="w-10 h-10" />,
    atividades: NEURO_ACTIVITIES["Motorzinho dos Sons"] || []
  },
  {
    id: 'rimas',
    nome: "Rimas Divertidas",
    cor: "bg-pink-400 border-pink-500",
    corTexto: "text-pink-950",
    icone: <SparklesIcon className="w-10 h-10" />,
    atividades: NEURO_ACTIVITIES["Rimas Divertidas"] || []
  },
  {
    id: 'regulacao',
    nome: "Regulação Emocional",
    cor: "bg-rose-400 border-rose-500",
    corTexto: "text-rose-950",
    icone: <Smile className="w-10 h-10" />,
    atividades: NEURO_ACTIVITIES["Regulação Emocional"] || []
  },
];

function Treino() {
  const { activeChild, addCoins } = useAppState();
  const coins = activeChild?.coins || 0;
  const [catAtiva, setCatAtiva] = useState<string | null>(null);
  const [atvAtiva, setAtvAtiva] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const { gainExperience, gainAffinity } = useMascot();

  // Estados para mecânicas específicas
  const [nivelAcao, setNivelAcao] = useState(0);
  const [interagindo, setInteragindo] = useState(false);

  const handleSelectAtividade = (activity: NeuroActivity) => {
    setSelectedAtividade(activity);
    setIsAnswered(false);
    setIsCorrect(null);
    setNivelAcao(0);
    setInteragindo(false);
  };

  const handleAcaoInterativa = () => {
    if (!selectedAtividade) return;
    setInteragindo(true);
    let progresso = 0;
    
    // Simulador de captação de áudio/esforço (Sopro da Vela/Controle de Voz)
    const interval = setInterval(() => {
      progresso += 20; // Incremento simulando o esforço contínuo
      setNivelAcao(progresso);
      if (progresso >= 100) {
        clearInterval(interval);
        setInteragindo(false);
        handleAnswer(selectedAtividade.content.target);
        
        if (selectedAtividade.type === 'microfone') {
          toast.success('Parabéns!', {
            description: 'Você controlou o ar perfeitamente e completou o desafio! 🎂✨',
            icon: <CheckCircle2 className="text-emerald-500" />
          });
        }
      }
    }, 300);
  };

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    
    const correct = option === selectedAtividade?.content.target || selectedAtividade?.type === 'interaction' || selectedAtividade?.type === 'microfone' || selectedAtividade?.type === 'tracado' || selectedAtividade?.type === 'emocional';
    
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      toast.success("Excelente!", { 
        description: "Missão cumprida com sucesso!",
        icon: <CheckCircle2 className="text-emerald-500" />
      });
    } else {
      toast.error("Tente novamente!", { 
        description: "O Pip está aqui para te ajudar.",
        icon: <XCircle className="text-rose-500" />
      });
    }
  };

  const handleConcluir = () => {
    gainExperience(30);
    gainAffinity(10);
    addCoins(100);
    toast.success("Recompensa Coletada!", {
      description: "Você ganhou +30 XP e 100 BrilhoCoins!",
      icon: <SparklesIcon className="text-sun" />
    });
    setSelectedAtividade(null);
    setIsAnswered(false);
  };

  const categoriaSelecionada = grupos.find(g => g.nome === selectedCategory);
  const atividadesDaCategoria = selectedCategory ? NEURO_ACTIVITIES[selectedCategory] || [] : [];

  return (
    <Shell>
      {/* HUD Superior Premium - Cabeçalho da Clínica Digital */}
      <div className="flex justify-between items-center bg-white px-8 py-5 rounded-[2.5rem] shadow-xl border-b-4 border-slate-100 mb-10 max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform">
        <div className="flex items-center gap-4">
          <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600 border border-indigo-100 shadow-sm">
            <Brain className="w-8 h-8 animate-pulse" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-indigo-900 tracking-tight block leading-none">NEURO-TREINO</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Módulo Clínico Cognitivo</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500 text-white font-black px-5 py-2.5 rounded-2xl text-xs shadow-md flex items-center gap-3 border-b-4 border-emerald-700 active:translate-y-1 active:border-b-0 transition-all">
            <span className="tracking-widest">SESSÃO ATIVA</span>
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-ping" />
          </div>
          <div className="bg-amber-100 text-amber-900 font-black px-6 py-3 rounded-2xl border-2 border-amber-200 flex items-center gap-3 shadow-sm">
            <div className="bg-amber-400 p-1.5 rounded-full shadow-inner">
              <Star size={16} fill="currentColor" />
            </div>
            <span className="text-lg">{coins} <span className="text-xs opacity-60 uppercase">BrilhoCoins</span></span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {!selectedCategory ? (
              <motion.div 
                key="categorias"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {grupos.map((g) => (
                  <button
                    key={g.nome}
                    onClick={() => setSelectedCategory(g.nome)}
                    className={cn(
                      "group relative p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center gap-5 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl border-b-[10px] border-black/10 overflow-hidden",
                      g.cor, g.corTexto
                    )}
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-2 -translate-y-2">
                       {g.icone}
                    </div>
                    <div className="bg-white/95 p-5 rounded-3xl shadow-xl text-slate-800 transform group-hover:rotate-6 transition-transform">
                      {g.icone}
                    </div>
                    <span className="text-xl font-black tracking-tight leading-tight uppercase max-w-[150px]">
                      {g.nome}
                    </span>
                    <div className="mt-2 bg-black/5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-60">
                      Ver Missões
                    </div>
                  </button>
                ))}
              </motion.div>
            ) : !selectedAtividade ? (
              <motion.div 
                key="atividades"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="group flex items-center gap-3 text-slate-500 font-black hover:text-indigo-600 transition-all bg-white px-6 py-3 rounded-2xl shadow-sm border-2 border-slate-100"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
                  VOLTAR PARA CATEGORIAS
                </button>

                <div className={cn(
                  "p-8 rounded-[2.5rem] flex items-center justify-between border-b-[8px] border-black/10 shadow-xl overflow-hidden relative",
                  categoriaSelecionada?.cor, categoriaSelecionada?.corTexto
                )}>
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="bg-white/90 p-4 rounded-[2rem] text-slate-800 shadow-lg">
                      {categoriaSelecionada?.icone}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tighter">{selectedCategory}</h3>
                      <p className="text-xs font-bold opacity-70 uppercase tracking-widest">Escolha sua missão terapêutica</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {atividadesDaCategoria.map((atv) => (
                    <motion.div 
                      key={atv.id}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-[3rem] border-2 border-slate-100 p-8 shadow-lg hover:shadow-2xl transition-all group flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 font-black px-4 py-2 rounded-full text-[10px] uppercase tracking-widest shadow-sm">
                            <Star size={12} fill="currentColor" /> {atv.type}
                          </span>
                        </div>
                        <h4 className="text-2xl font-black text-slate-800 tracking-tight leading-tight">{atv.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed bg-slate-50 p-4 rounded-2xl border border-dashed border-slate-200">
                          {atv.therapeuticGoal}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => handleSelectAtividade(atv)}
                        className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-[2rem] shadow-xl shadow-indigo-100 border-b-8 border-indigo-900 transition-all active:scale-95 active:border-b-0 flex items-center justify-center gap-3 text-lg group"
                      >
                        <Play className="fill-current group-hover:scale-110 transition-transform" size={20} />
                        INICIAR TREINO
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="game-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[4rem] p-10 border-2 border-slate-100 shadow-2xl relative overflow-hidden"
              >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                
                <button 
                  onClick={() => setSelectedAtividade(null)}
                  className="absolute top-8 left-8 p-3 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-colors text-slate-600"
                >
                  <ArrowLeft size={24} />
                </button>

                <div className="text-center mb-12 mt-4">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-4 block">
                    {selectedAtividade.category} • Missão {selectedAtividade.id}
                  </span>
                  <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter max-w-2xl mx-auto leading-tight">
                    {selectedAtividade.content.prompt}
                  </h3>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-50/50 border border-indigo-100 rounded-3xl text-sm font-bold text-indigo-700">
                    <AlertCircle size={18} /> {selectedAtividade.description}
                  </div>
                </div>

                {/* Diferentes Tipos de Atividade */}
                <div className="flex flex-col items-center justify-center min-h-[300px]">
                  {selectedAtividade.type === 'microfone' ? (
                    <div className="space-y-8 w-full max-w-md">
                      <div className="flex justify-center">
                        <div className={cn(
                          "w-48 h-48 rounded-full flex items-center justify-center text-7xl transition-all transform",
                          interagindo ? "scale-110 bg-indigo-100" : "bg-slate-50"
                        )}>
                          {interagindo ? (
                             <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }}>
                               🎤
                             </motion.div>
                          ) : "🕯️"}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-4 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-200">
                          <motion.div 
                            className="h-full bg-indigo-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${nivelAcao}%` }}
                          />
                        </div>
                        <p className="text-center text-xs font-black text-slate-400 uppercase tracking-widest">
                          {interagindo ? "Assoprando..." : "Pressione para começar o sopro"}
                        </p>
                      </div>
                      <button 
                        onMouseDown={handleAcaoInterativa}
                        onMouseUp={() => setInteragindo(false)}
                        onTouchStart={handleAcaoInterativa}
                        onTouchEnd={() => setInteragindo(false)}
                        className={cn(
                          "w-full py-6 rounded-[2.5rem] font-black text-xl transition-all shadow-xl flex items-center justify-center gap-4",
                          interagindo ? "bg-indigo-600 text-white" : "bg-white border-4 border-indigo-600 text-indigo-600"
                        )}
                      >
                        <Mic size={28} /> {interagindo ? "CONTINUE ASSOPRANDO!" : "SEGURE PARA ASSOPRAR"}
                      </button>
                    </div>
                  ) : selectedAtividade.type === 'tracado' ? (
                    <div className="space-y-8 w-full max-w-md">
                       <div className="aspect-square bg-slate-50 rounded-[3rem] border-4 border-dashed border-slate-200 flex items-center justify-center relative overflow-hidden group">
                          <span className="text-9xl text-slate-100 font-black pointer-events-none">A</span>
                          <motion.div 
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            onDrag={() => setNivelAcao(prev => Math.min(100, prev + 2))}
                            className="w-16 h-16 bg-indigo-600 rounded-full shadow-2xl cursor-pointer flex items-center justify-center text-white"
                          >
                            <Pencil size={24} />
                          </motion.div>
                       </div>
                       <div className="space-y-4">
                          <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-indigo-500" animate={{ width: `${nivelAcao}%` }} />
                          </div>
                          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-widest">Contorno: {Math.round(nivelAcao)}%</p>
                       </div>
                       {nivelAcao >= 100 && !isAnswered && (
                         <button 
                           onClick={() => handleAnswer(selectedAtividade.content.target)}
                           className="w-full bg-emerald-500 text-white font-black py-6 rounded-3xl shadow-xl hover:bg-emerald-600 transition-all uppercase tracking-widest"
                         >
                           Finalizar Desenho ✨
                         </button>
                       )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
                      {selectedAtividade.content.options.map((option, idx) => (
                        <motion.button
                          key={option}
                          whileHover={!isAnswered ? { scale: 1.05, y: -5 } : {}}
                          whileTap={!isAnswered ? { scale: 0.95 } : {}}
                          onClick={() => handleAnswer(option)}
                          disabled={isAnswered}
                          className={cn(
                            "aspect-square rounded-[3rem] border-4 flex flex-col items-center justify-center gap-4 transition-all relative overflow-hidden group",
                            !isAnswered ? "bg-white border-slate-100 hover:border-indigo-400 shadow-xl" :
                            option === selectedAtividade.content.target ? "bg-emerald-50 border-emerald-500 shadow-glow" :
                            isCorrect === false && option !== selectedAtividade.content.target ? "bg-slate-100 border-transparent opacity-30 grayscale" : "bg-white border-slate-100"
                          )}
                        >
                          <span className="text-7xl drop-shadow-2xl group-hover:scale-110 transition-transform">
                            {selectedAtividade.content.images?.[idx]}
                          </span>
                          <span className="font-black text-xs uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors">
                            {option}
                          </span>
                          {isAnswered && option === selectedAtividade.content.target && (
                            <div className="absolute top-4 right-4 bg-emerald-500 text-white p-2 rounded-full shadow-lg border-2 border-white">
                              <CheckCircle2 size={16} />
                            </div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>

                {isAnswered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="mt-12 flex flex-col items-center gap-6"
                  >
                    {isCorrect ? (
                      <>
                        <div className="flex items-center gap-4 text-emerald-600 font-black text-3xl animate-bounce">
                           <SparklesIcon size={40} /> MISSÃO CUMPRIDA!
                        </div>
                        <button 
                          onClick={handleConcluir}
                          className="bg-emerald-500 hover:bg-emerald-600 text-white px-20 py-8 rounded-[2.5rem] font-black shadow-2xl border-b-[12px] border-emerald-800 hover:scale-105 transition-all uppercase tracking-[0.2em] text-2xl flex items-center gap-4"
                        >
                          COLETAR PRÊMIO <Star fill="currentColor" />
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-4 text-rose-500 font-black text-2xl">
                           <AlertCircle size={32} /> QUASE CONSEGUIMOS!
                        </div>
                        <button 
                          onClick={() => { setIsAnswered(false); setIsCorrect(null); setNivelAcao(0); }}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-[2rem] font-black shadow-xl border-b-8 border-indigo-900 transition-all uppercase tracking-widest text-lg"
                        >
                          Tentar Novamente 🚀
                        </button>
                      </>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <PipPedagogicalGuidance 
              stage={selectedAtividade ? 'explanation' : 'idle'} 
              className="animate-in fade-in slide-in-from-right-4 shadow-2xl rounded-[3rem]" 
            />
            
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
               <div className="flex items-center gap-3 text-indigo-900 font-black uppercase tracking-tighter">
                  <Heart className="text-rose-500" fill="currentColor" />
                  <span>Dica Clínica</span>
               </div>
               <p className="text-xs font-bold text-slate-500 leading-relaxed italic">
                 "O estímulo visual associado ao motor fortalece as sinapses do pequeno gênio. Continue incentivando!"
               </p>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
