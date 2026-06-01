import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Component, ReactNode, useState, useEffect } from "react";
import { AlertCircle, Play, Sparkles as SparklesIcon, CheckCircle2, XCircle, Brain, Target, Star, ArrowLeft, Heart } from "lucide-react";
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

const grupos = [
  {
    nome: "Atenção Super Focada",
    emoji: "🎯",
    cor: "from-amber-400 to-amber-200",
    corTexto: "text-amber-950",
    atividades: NEURO_ACTIVITIES["Atenção Super Focada"].map(a => a.title),
    icone: <Target className="w-12 h-12" />
  },
  {
    nome: "Memória de Elefante",
    emoji: "🧠",
    cor: "from-purple-400 to-purple-200",
    corTexto: "text-purple-950",
    atividades: NEURO_ACTIVITIES["Memória de Elefante"].map(a => a.title),
    icone: <Brain className="w-12 h-12" />
  },
  {
    nome: "Sons Iniciais",
    emoji: "🗣️",
    cor: "from-coral/25 to-coral/5",
    atividades: NEURO_ACTIVITIES["Sons Iniciais"].map(a => a.title),
    icone: <Play className="w-12 h-12" />
  },
  {
    nome: "Motorzinho dos Sons",
    emoji: "⚙️",
    cor: "from-primary/20 to-primary/5",
    atividades: NEURO_ACTIVITIES["Motorzinho dos Sons"].map(a => a.title),
    icone: <Play className="w-12 h-12" />
  },
  {
    nome: "Rimas",
    emoji: "🎵",
    cor: "from-sky/30 to-sky/5",
    atividades: NEURO_ACTIVITIES["Rimas"].map(a => a.title),
    icone: <Play className="w-12 h-12" />
  },
  {
    nome: "Regulação emocional",
    emoji: "💚",
    cor: "from-success/20 to-success/5",
    atividades: ["Respira Flor","Termômetro dos Sentimentos","Cantinho da Calma","Como Eu Estou"],
    icone: <Heart className="w-12 h-12" />
  },
];

function Treino() {
  const { activeChild, addCoins, coins } = useAppState();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAtividade, setSelectedAtividade] = useState<NeuroActivity | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { gainExperience, gainAffinity } = useMascot();

  const handleSelectAtividade = (nome: string, categoria: string) => {
    const activities = NEURO_ACTIVITIES[categoria];
    if (activities) {
      const activity = activities.find(a => a.title === nome);
      if (activity) {
        setSelectedAtividade(activity);
        setIsAnswered(false);
        setIsCorrect(null);
        return;
      }
    }
    
    // Fallback para atividades simples não mapeadas no data
    setSelectedAtividade({
      id: "simple-" + nome,
      title: nome,
      category: categoria,
      description: "Prática terapêutica de " + nome,
      difficulty: 1,
      type: "interaction",
      content: {
        prompt: "Vamos praticar " + nome + "?",
        target: "Sim",
        options: ["Sim", "Depois"],
        images: ["✅", "⏰"]
      }
    });
    setIsAnswered(false);
    setIsCorrect(null);
  };

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    
    const correct = option === selectedAtividade?.content.target;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      toast.success("Parabéns!", { 
        description: "Você acertou! Ganhou +15 Pontos!",
        icon: <CheckCircle2 className="text-emerald-500" />
      });
    } else {
      toast.error("Quase!", { 
        description: "Tente ouvir o som novamente com o Pip.",
        icon: <XCircle className="text-rose-500" />
      });
    }
  };

  const handleConcluir = () => {
    if (!isCorrect) {
      toast.error("Complete o desafio primeiro!");
      return;
    }
    gainExperience(30);
    gainAffinity(10);
    addCoins(100);
    toast.success("Missão Cumprida!", {
      description: "Sua mente está mais forte! Ganhou +30 XP e 100 BrilhoCoins!",
      icon: <SparklesIcon className="text-sun" />
    });
    setSelectedAtividade(null);
    setIsAnswered(false);
  };

  const categoriaSelecionada = grupos.find(g => g.nome === selectedCategory);

  return (
    <Shell>
      <div className="flex justify-between items-center bg-white px-6 py-4 rounded-2xl shadow-sm border-2 border-slate-100 mb-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-indigo-500 animate-pulse" />
          <span className="text-2xl font-black text-indigo-900 tracking-wide uppercase">NeuroTreino</span>
        </div>
        <div className="bg-amber-400 text-amber-950 font-black px-6 py-2 rounded-full border-b-4 border-amber-600 flex items-center gap-2 shadow-md">
          ⭐ {coins} BRILHOCOINS
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {!selectedCategory ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4">
                {grupos.map((g) => (
                  <button
                    key={g.nome}
                    onClick={() => setSelectedCategory(g.nome)}
                    className={`p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg border-b-8 border-black/10 bg-gradient-to-br ${g.cor} ${g.corTexto || 'text-primary'}`}
                  >
                    <div className="bg-white/80 p-4 rounded-full shadow-inner text-indigo-950">
                      {g.icone}
                    </div>
                    <span className="text-xl font-black uppercase tracking-tight">{g.nome}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <button 
                  onClick={() => { setSelectedCategory(null); setSelectedAtividade(null); }}
                  className="flex items-center gap-2 text-primary font-bold bg-white px-6 py-3 rounded-2xl shadow-sm hover:bg-primary/5 transition-colors border-2 border-primary/10"
                >
                  <ArrowLeft className="w-5 h-5" /> Voltar para os Treinos
                </button>

                <div className={`p-6 rounded-3xl shadow-md flex items-center gap-4 bg-gradient-to-r ${categoriaSelecionada?.cor} ${categoriaSelecionada?.corTexto || 'text-primary'}`}>
                  <div className="bg-white/50 p-3 rounded-2xl">
                    {categoriaSelecionada?.icone}
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">{selectedCategory}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {grupos.find(g => g.nome === selectedCategory)?.atividades.map((a) => (
                    <button 
                      key={a} 
                      onClick={() => handleSelectAtividade(a, selectedCategory)}
                      className={cn(
                        "p-6 rounded-[2rem] border-4 flex flex-col justify-between transition-all text-left min-h-[160px]",
                        selectedAtividade?.title === a 
                          ? "bg-primary text-white border-primary shadow-glow scale-[1.02]" 
                          : "bg-white border-primary/5 hover:border-primary/20 shadow-soft"
                      )}
                    >
                      <div>
                         <div className="flex items-center justify-between mb-3">
                           <span className={cn(
                             "font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest",
                             selectedAtividade?.title === a ? "bg-white/20 text-white" : "bg-primary/5 text-primary"
                           )}>
                             ⭐ +50 Pontos
                           </span>
                           <div className={cn(
                             "p-2 rounded-xl",
                             selectedAtividade?.title === a ? "bg-white/10" : "bg-primary/5"
                           )}>
                             <Play size={16} fill="currentColor" />
                           </div>
                         </div>
                         <h4 className="text-xl font-black uppercase tracking-tight leading-none mb-2">{a}</h4>
                         <p className={cn(
                           "text-xs font-bold opacity-70 italic",
                           selectedAtividade?.title === a ? "text-white/80" : "text-muted-foreground"
                         )}>
                           Toque para começar esta missão!
                         </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <AnimatePresence>
            {selectedAtividade && (
              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-12"
              >
                <Card className="bg-white/90 border-4 border-primary/10 rounded-[3rem] min-h-[450px] flex flex-col shadow-2xl overflow-hidden">
                  <h3 className="font-black text-2xl mb-2 flex items-center gap-3 text-primary p-8 bg-primary/5 border-b border-primary/10">
                    <SparklesIcon size={28} className="text-sun animate-spin-slow" />
                    DESAFIO: {selectedAtividade.title}
                  </h3>
                  
                  <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12">
                      <div className="w-full max-w-2xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                          <p className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter leading-none">{selectedAtividade.content.prompt}</p>
                          <div className="inline-block px-6 py-2 bg-primary/5 rounded-full text-sm font-black text-primary/60 uppercase tracking-widest border border-primary/10">
                            {selectedAtividade.description}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          {selectedAtividade.content.options.map((option, idx) => (
                            <motion.button
                              key={option}
                              whileHover={!isAnswered ? { scale: 1.08, rotate: idx % 2 === 0 ? 2 : -2 } : {}}
                              whileTap={!isAnswered ? { scale: 0.92 } : {}}
                              onClick={() => handleAnswer(option)}
                              disabled={isAnswered}
                              className={cn(
                                "aspect-square rounded-[2.5rem] border-4 flex flex-col items-center justify-center gap-4 transition-all relative",
                                !isAnswered ? "bg-white border-primary/10 hover:border-primary shadow-kid hover:shadow-glow" :
                                option === selectedAtividade.content.target ? "bg-success/20 border-success shadow-glow scale-105 z-10" :
                                isCorrect === false && option !== selectedAtividade.content.target ? "bg-muted/50 border-transparent opacity-40 grayscale" : "bg-white border-primary/10"
                              )}
                            >
                              <span className="text-7xl drop-shadow-lg">{selectedAtividade.content.images?.[idx]}</span>
                              <span className="font-black text-xs uppercase tracking-widest">{option}</span>
                              {isAnswered && option === selectedAtividade.content.target && (
                                <div className="absolute -top-4 -right-4 bg-success text-white p-2 rounded-full shadow-lg border-4 border-white animate-bounce">
                                  <CheckCircle2 size={24} />
                                </div>
                              )}
                            </motion.button>
                          ))}
                        </div>

                        {isAnswered && (
                          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center pt-8">
                            {isCorrect ? (
                              <div className="flex flex-col items-center gap-6">
                                <p className="text-success font-black text-3xl flex items-center gap-3 animate-bounce">
                                  <SparklesIcon /> INCRÍVEL! VOCÊ CONSEGUIU!
                                </p>
                                <button 
                                  onClick={handleConcluir}
                                  className="bg-success text-white px-16 py-6 rounded-[2rem] font-black shadow-kid [--shadow-color:oklch(var(--success-dark))] hover:scale-110 transition-all uppercase tracking-widest text-xl flex items-center gap-3"
                                >
                                  RESGATAR PREMIAÇÃO <SparklesIcon />
                                </button>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center gap-6">
                                <p className="text-destructive font-black text-2xl flex items-center gap-3">
                                  <XCircle /> QUASE LÁ! TENTE OUVIR O PIP...
                                </p>
                                <button 
                                  onClick={() => { setIsAnswered(false); setIsCorrect(null); }}
                                  className="bg-primary text-white px-16 py-6 rounded-[2rem] font-black shadow-kid [--shadow-color:oklch(var(--primary-dark))] hover:scale-105 transition-all uppercase tracking-widest text-xl"
                                >
                                  Tentar de Novo
                                </button>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <PipPedagogicalGuidance 
              stage={selectedAtividade ? 'explanation' : 'idle'} 
              className="animate-in fade-in slide-in-from-right-4" 
            />
          </div>
        </div>
      </div>
    </Shell>
  );
}
