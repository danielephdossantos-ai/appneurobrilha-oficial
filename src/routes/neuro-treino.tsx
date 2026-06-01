import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Component, ReactNode, useState, useEffect } from "react";
import { AlertCircle, Play, Sparkles as SparklesIcon, CheckCircle2, XCircle, Brain, Target, Star, ArrowLeft, Heart, Volume2, Smile, Sparkles, Activity } from "lucide-react";
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
    id: 'atencao',
    nome: "Atenção Super Focada",
    emoji: "🎯",
    cor: "bg-amber-400 border-amber-500",
    corTexto: "text-amber-950",
    atividades: NEURO_ACTIVITIES["Atenção Super Focada"].map(a => a.title),
    icone: <Target className="w-10 h-10" />
  },
  {
    id: 'memoria',
    nome: "Memória de Elefante",
    emoji: "🧠",
    cor: "bg-purple-400 border-purple-500",
    corTexto: "text-purple-950",
    atividades: NEURO_ACTIVITIES["Memória de Elefante"].map(a => a.title),
    icone: <Brain className="w-10 h-10" />
  },
  {
    id: 'sons_iniciais',
    nome: "Sons Iniciais",
    emoji: "🗣️",
    cor: "bg-sky-400 border-sky-500",
    corTexto: "text-sky-950",
    atividades: NEURO_ACTIVITIES["Sons Iniciais"].map(a => a.title),
    icone: <Volume2 className="w-10 h-10" />
  },
  {
    id: 'motorzinho',
    nome: "Motorzinho dos Sons",
    emoji: "⚙️",
    cor: "bg-emerald-400 border-emerald-500",
    corTexto: "text-emerald-950",
    atividades: NEURO_ACTIVITIES["Motorzinho dos Sons"].map(a => a.title),
    icone: <Activity className="w-10 h-10" />
  },
  {
    id: 'rimas',
    nome: "Rimas",
    emoji: "🎵",
    cor: "bg-pink-400 border-pink-500",
    corTexto: "text-pink-950",
    atividades: NEURO_ACTIVITIES["Rimas"].map(a => a.title),
    icone: <Sparkles className="w-10 h-10" />
  },
  {
    id: 'regulacao',
    nome: "Regulação emocional",
    emoji: "💚",
    cor: "bg-rose-400 border-rose-500",
    corTexto: "text-rose-950",
    atividades: ["Respira Flor","Termômetro dos Sentimentos","Cantinho da Calma","Como Eu Estou"],
    icone: <Smile className="w-10 h-10" />
  },
];

function Treino() {
  const { activeChild, addCoins } = useAppState();
  const coins = activeChild?.coins || 0;
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
      {/* Barra Superior de Pontuação - Estilo Premium Gamificado */}
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
                    className={`p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md border-b-8 border-black/10 ${g.cor} ${g.corTexto}`}
                  >
                    <div className="bg-white/90 p-4 rounded-2xl shadow-inner text-slate-800">
                      {g.icone}
                    </div>
                    <span className="text-xl font-black tracking-wide leading-tight uppercase">{g.nome}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <button 
                  onClick={() => { setSelectedCategory(null); setSelectedAtividade(null); }}
                  className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 mb-6 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" /> Voltar para os Treinos
                </button>

                <div className={`p-4 rounded-2xl mb-8 flex items-center gap-3 border-b-4 border-black/10 ${categoriaSelecionada?.cor} ${categoriaSelecionada?.corTexto}`}>
                  <div className="bg-white/80 p-2 rounded-xl text-slate-800">
                    {categoriaSelecionada?.icone}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wide">{selectedCategory}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {grupos.find(g => g.nome === selectedCategory)?.atividades.map((a) => (
                    <div 
                      key={a}
                      className={cn(
                        "bg-white rounded-[28px] border-2 border-slate-100 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group",
                        selectedAtividade?.title === a && "border-primary ring-2 ring-primary/20"
                      )}
                    >
                      <div>
                        <span className="inline-block bg-indigo-600 text-white font-black px-5 py-1.5 rounded-full text-sm tracking-wide shadow-sm mb-4 transform group-hover:scale-105 transition-transform">
                          {a}
                        </span>
                        <p className="text-slate-500 font-bold text-xs mb-4 uppercase tracking-widest">Toque para começar a missão!</p>
                        
                        <div className="bg-slate-50 p-4 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center min-h-[100px]">
                           <Play className="text-indigo-200" size={40} fill="currentColor" />
                        </div>
                      </div>
                      <button 
                        onClick={() => handleSelectAtividade(a, selectedCategory)}
                        className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-2xl shadow-lg border-b-4 border-indigo-900 transition-all active:scale-95 text-lg"
                      >
                        Jogar Missão
                      </button>
                    </div>
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
                <div className="bg-white rounded-[28px] p-8 border-2 border-slate-100 shadow-xl">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-black text-indigo-900 mb-2 uppercase tracking-tighter">{selectedAtividade.content.prompt}</h3>
                    <div className="inline-block px-6 py-2 bg-indigo-50 rounded-full text-sm font-black text-indigo-400 uppercase tracking-widest">
                      {selectedAtividade.description}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                    {selectedAtividade.content.options.map((option, idx) => (
                      <motion.button
                        key={option}
                        whileHover={!isAnswered ? { scale: 1.08, rotate: idx % 2 === 0 ? 2 : -2 } : {}}
                        whileTap={!isAnswered ? { scale: 0.92 } : {}}
                        onClick={() => handleAnswer(option)}
                        disabled={isAnswered}
                        className={cn(
                          "aspect-square rounded-[2.5rem] border-4 flex flex-col items-center justify-center gap-4 transition-all relative",
                          !isAnswered ? "bg-slate-50 border-slate-200 hover:border-indigo-400 shadow-sm" :
                          option === selectedAtividade.content.target ? "bg-emerald-50 border-emerald-500 shadow-glow scale-105 z-10" :
                          isCorrect === false && option !== selectedAtividade.content.target ? "bg-slate-100 border-transparent opacity-40 grayscale" : "bg-white border-slate-200"
                        )}
                      >
                        <span className="text-7xl drop-shadow-lg">{selectedAtividade.content.images?.[idx]}</span>
                        <span className="font-black text-xs uppercase tracking-widest">{option}</span>
                        {isAnswered && option === selectedAtividade.content.target && (
                          <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-2 rounded-full shadow-lg border-4 border-white animate-bounce">
                            <CheckCircle2 size={24} />
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {isAnswered && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center pt-10">
                      {isCorrect ? (
                        <div className="flex flex-col items-center gap-6">
                          <p className="text-emerald-600 font-black text-3xl flex items-center gap-3 animate-bounce">
                            <CheckCircle2 size={32} /> INCRÍVEL! VOCÊ CONSEGUIU!
                          </p>
                          <button 
                            onClick={handleConcluir}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-16 py-6 rounded-[2rem] font-black shadow-lg border-b-8 border-emerald-800 hover:scale-105 transition-all uppercase tracking-widest text-xl flex items-center gap-3"
                          >
                            RESGATAR PREMIAÇÃO ⭐
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-6">
                          <p className="text-rose-600 font-black text-2xl flex items-center gap-3">
                            <XCircle size={32} /> QUASE LÁ! VAMOS TENTAR DE NOVO?
                          </p>
                          <button 
                            onClick={() => { setIsAnswered(false); setIsCorrect(null); }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-16 py-6 rounded-[2rem] font-black shadow-lg border-b-8 border-indigo-900 hover:scale-105 transition-all uppercase tracking-widest text-xl"
                          >
                            Tentar Outra Vez
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
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
