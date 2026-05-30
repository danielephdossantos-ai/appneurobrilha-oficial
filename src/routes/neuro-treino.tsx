import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Component, ReactNode } from "react";
import { AlertCircle } from "lucide-react";

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
];

function Treino() {
  return (
    <Shell>
      <PageHeader emoji="🧠" title="Neuro-Treino" subtitle="Reforço terapêutico que sustenta o aprendizado escolar" />

      <div className="space-y-6">
        {grupos.map((g) => (
          <section key={g.nome}>
            <h2 className="text-lg mb-3 flex items-center gap-2">{g.emoji} {g.nome}</h2>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-3`}>
              {g.atividades.map((a) => (
                <button key={a} className={`text-left rounded-2xl p-4 bg-gradient-to-br ${g.cor} border border-border shadow-soft hover:shadow-glow transition-all min-h-[110px]`}>
                  <div className="font-extrabold">{a}</div>
                  <div className="text-xs text-muted-foreground mt-1">Toque para começar</div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Card className="mt-8 bg-success/10">
        <h3 className="font-extrabold mb-2">💚 Respira Flor (preview)</h3>
        <div className="grid place-items-center py-8">
          <div className="h-32 w-32 rounded-full bg-success/30 animate-pulse" style={{ animationDuration: "4s" }} />
          <p className="mt-4 text-center text-muted-foreground">Inspira… segura… expira… 🌸</p>
        </div>
      </Card>
    </Shell>
  );
}
