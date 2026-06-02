import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Component, ReactNode, useState, useRef, useEffect } from "react";
import { AlertCircle, Play, HelpCircle, Coffee } from "lucide-react";
import { useAppState } from "@/core/store";
import { PipPedagogicalGuidance } from "@/components/rewards/PipPedagogicalGuidance";
import { useNeuroAdaptive } from "@/hooks/useNeuroAdaptive";
import { FloatingActivityControls } from "@/components/activities/FloatingActivityControls";
import { toast } from "sonner";

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
    nome: "Oficina Criativa",
    emoji: "🎨",
    cor: "from-lilac/30 to-lilac/5",
    atividades: ["Mosaico de Formas", "Sequência de Cores", "Simetria", "Decoração Criativa"],
  },
];

function Treino() {
  useAppState(); // garante contexto da criança ativa
  const [selectedAtividade, setSelectedAtividade] = useState<string | null>(null);
  const { registerPerformance, requestHelp, adjustment, metrics } = useNeuroAdaptive();
  const startRef = useRef<number>(Date.now());

  useEffect(() => {
    if (selectedAtividade) startRef.current = Date.now();
  }, [selectedAtividade]);

  const handleConcluir = (isCorrect: boolean) => {
    const elapsed = (Date.now() - startRef.current) / 1000;
    registerPerformance(isCorrect, elapsed);
    toast.success(isCorrect ? "Missão concluída! +1 estrela" : "Tudo bem, vamos tentar de novo!");
    setSelectedAtividade(null);
  };

  const handleAjuda = () => {
    requestHelp();
    toast.info("Pip vai te dar uma dica! 💡");
  };

  return (
    <Shell>
      <PageHeader emoji="🧠" title="Neuro-Treino" subtitle="Reforço terapêutico que sustenta o aprendizado escolar" />

      {adjustment.suggestBreak && (
        <Card className="mb-4 bg-sun/15 border-sun/30 flex items-center gap-3">
          <Coffee className="h-6 w-6 text-sun" />
          <div className="flex-1">
            <div className="font-bold">Que tal uma pausinha?</div>
            <div className="text-sm text-muted-foreground">Detectei sinais de cansaço. Respira fundo 🌿</div>
          </div>
        </Card>
      )}

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
                      onClick={() => setSelectedAtividade(a)}
                      className={`text-left rounded-2xl p-4 bg-gradient-to-br ${g.cor} border-2 transition-all min-h-[110px] ${
                        selectedAtividade === a ? 'border-primary shadow-glow scale-105' : 'border-border shadow-soft hover:shadow-glow'
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

          <Card className="mt-8 bg-success/10 border-success/20">
            <h3 className="font-extrabold mb-2 flex items-center gap-2 text-success">
              <Play size={20} fill="currentColor" />
              Atividade em Foco: {selectedAtividade || 'Respira Flor'}
            </h3>
            <div className="grid place-items-center py-12">
              <div className="h-32 w-32 rounded-full bg-success/30 animate-pulse" style={{ animationDuration: "4s" }} />
              <p className="mt-6 text-center text-lg font-bold text-success/80">Inspira… segura… expira… 🌸</p>
              <div className="mt-8 flex gap-3 flex-wrap justify-center">
                <button
                  onClick={() => handleConcluir(true)}
                  disabled={!selectedAtividade}
                  className="bg-success text-white px-8 py-3 rounded-xl font-black shadow-lg hover:opacity-90 transition-all uppercase tracking-widest text-sm disabled:opacity-50"
                >
                  Concluir Missão
                </button>
                <button
                  onClick={handleAjuda}
                  disabled={!selectedAtividade}
                  className="bg-muted text-foreground px-4 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-muted/70 disabled:opacity-50"
                >
                  <HelpCircle size={16} /> Preciso de ajuda
                </button>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Precisão: {Math.round(metrics.performance.accuracyRate * 100)}% · Fadiga: {Math.round(metrics.fatigue.fatigueLevel * 100)}%
              </div>
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
      <FloatingActivityControls
        onSkip={selectedAtividade ? () => { toast.info("Vamos direto pra missão! 🚀"); } : undefined}
        onChange={selectedAtividade ? () => setSelectedAtividade(null) : undefined}
      />
    </Shell>
  );
}
