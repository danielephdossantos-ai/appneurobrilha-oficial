import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Component, ReactNode, useState, useEffect } from "react";
import { AlertCircle, Palette, Play, Sparkles as SparklesIcon, CheckCircle2, XCircle } from "lucide-react";
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
    nome: "Fala e Som",
    emoji: "🗣️",
    cor: "from-coral/25 to-coral/5",
    atividades: ["Sons Iniciais","Motorzinho dos Sons","Rimas","Pedacinhos da Palavra"],
  },
  {
    nome: "Funções Executivas",
    emoji: "🧠",
    cor: "from-primary/20 to-primary/5",
    atividades: ["Onde Está","Sequência e Padrão","Cadê o Par","Foco Total","Labirinto do Som"],
  },
  {
    nome: "Atenção avançada",
    emoji: "👁️",
    cor: "from-sky/30 to-sky/5",
    atividades: ["Foco Sustentado","Rastreamento Sacádico"],
  },
  {
    nome: "Regulação emocional",
    emoji: "💚",
    cor: "from-success/20 to-success/5",
    atividades: ["Respira Flor","Termômetro dos Sentimentos","Cantinho da Calma","Como Eu Estou"],
  },
  {
    nome: "Oficina Criativa",
    emoji: "🎨",
    cor: "from-lilac/30 to-lilac/5",
    atividades: ["Mosaico de Formas", "Sequência de Cores", "Simetria", "Decoração Criativa"],
  },
];

function Treino() {
  const { activeChild, addCoins } = useAppState();
  const [selectedCategory, setSelectedCategory] = useState<string>("Sons Iniciais");
  const [selectedAtividade, setSelectedAtividade] = useState<NeuroActivity | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { gainExperience, gainAffinity } = useMascot();

  const handleSelectAtividade = (nome: string, categoria: string) => {
    const activities = NEURO_ACTIVITIES[categoria];
    if (activities) {
      // Pega uma atividade aleatória da categoria ou baseada no nome
      const activity = activities.find(a => a.title === nome) || activities[0];
      setSelectedAtividade(activity);
      setIsAnswered(false);
      setIsCorrect(null);
    }
  };

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    
    const correct = option === selectedAtividade?.content.target;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      toast.success("Parabéns!", { description: "Você acertou o som!" });
    } else {
      toast.error("Ops!", { description: "Tente ouvir o som novamente com o Pip." });
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

  return (
    <Shell>
      <PageHeader emoji="🧠" title="Neuro-Treino" subtitle="Reforço terapêutico que sustenta o aprendizado escolar" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {grupos.map((g) => (
              <section key={g.nome}>
                <h2 className="text-lg mb-3 flex items-center gap-2">{g.emoji} {g.nome}</h2>
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-3`}>
                  {g.atividades.map((a) => (
                    <button 
                      key={a} 
                      onClick={() => handleSelectAtividade(a, g.nome)}
                      className={`text-left rounded-2xl p-4 bg-gradient-to-br ${g.cor} border-2 transition-all min-h-[110px] ${
                        selectedAtividade?.title === a ? 'border-primary shadow-glow scale-105' : 'border-border shadow-soft hover:shadow-glow'
                      }`}
                    >
                      <div className="font-extrabold">{a}</div>
                      <div className="text-xs text-muted-foreground mt-1">Toque para começar</div>
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <Card className="mt-8 bg-white/80 border-2 border-primary/10 min-h-[400px] flex flex-col">
            <h3 className="font-extrabold mb-6 flex items-center gap-2 text-primary p-4 border-b border-primary/5">
              <SparklesIcon size={20} className="text-sun" />
              {selectedAtividade ? `Desafio: ${selectedAtividade.title}` : 'Escolha um desafio acima!'}
            </h3>
            
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              {!selectedAtividade ? (
                <div className="text-center space-y-4">
                   <div className="h-32 w-32 rounded-full bg-primary/5 flex items-center justify-center mx-auto">
                      <Play className="text-primary/20" size={48} />
                   </div>
                   <p className="text-muted-foreground font-bold italic">O Pip está esperando você escolher um treino para começar!</p>
                </div>
              ) : (
                <div className="w-full max-w-2xl mx-auto space-y-8">
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-black text-primary uppercase tracking-tight">{selectedAtividade.content.prompt}</p>
                    <p className="text-muted-foreground font-medium">{selectedAtividade.description}</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {selectedAtividade.content.options.map((option, idx) => (
                      <motion.button
                        key={option}
                        whileHover={!isAnswered ? { scale: 1.05 } : {}}
                        whileTap={!isAnswered ? { scale: 0.95 } : {}}
                        onClick={() => handleAnswer(option)}
                        disabled={isAnswered}
                        className={cn(
                          "aspect-square rounded-3xl border-4 flex flex-col items-center justify-center gap-3 transition-all",
                          !isAnswered ? "bg-white border-primary/10 hover:border-primary shadow-soft" :
                          option === selectedAtividade.content.target ? "bg-success/20 border-success shadow-glow" :
                          isCorrect === false && option !== selectedAtividade.content.target ? "bg-muted border-transparent opacity-50" : "bg-white border-primary/10"
                        )}
                      >
                        <span className="text-6xl">{selectedAtividade.content.images?.[idx]}</span>
                        <span className="font-black text-xs uppercase tracking-widest">{option}</span>
                        {isAnswered && option === selectedAtividade.content.target && (
                          <CheckCircle2 className="text-success absolute -top-2 -right-2 bg-white rounded-full" size={32} />
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {isAnswered && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center pt-4">
                      {isCorrect ? (
                        <div className="flex flex-col items-center gap-4">
                          <p className="text-success font-black text-xl flex items-center gap-2">
                            <CheckCircle2 /> MUITO BEM! VOCÊ ACERTOU!
                          </p>
                          <button 
                            onClick={handleConcluir}
                            className="bg-success text-white px-12 py-4 rounded-2xl font-black shadow-kid [--shadow-color:oklch(var(--success-dark))] hover:scale-105 transition-all uppercase tracking-widest"
                          >
                            Resgatar Recompensa
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-4">
                          <p className="text-destructive font-black text-xl flex items-center gap-2">
                            <XCircle /> QUASE LÁ! VAMOS TENTAR DE NOVO?
                          </p>
                          <button 
                            onClick={() => { setIsAnswered(false); setIsCorrect(null); }}
                            className="bg-primary text-white px-12 py-4 rounded-2xl font-black shadow-kid [--shadow-color:oklch(var(--primary-dark))] hover:scale-105 transition-all uppercase tracking-widest"
                          >
                            Tentar Outra Vez
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </Card>
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
