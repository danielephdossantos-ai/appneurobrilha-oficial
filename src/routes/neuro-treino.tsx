import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Component, ReactNode } from "react";
import { AlertCircle, Coffee, Sparkles } from "lucide-react";
import { useAppState } from "@/core/store";
import { PipPedagogicalGuidance } from "@/components/rewards/PipPedagogicalGuidance";
import { useNeuroAdaptive } from "@/hooks/useNeuroAdaptive";
import { CATEGORIAS, GRUPOS, VARIATIONS } from "@/data/neuro-treino/variations";
import { useHiperfoco } from "@/context/HiperfocoContext";

class NeuroTreinoErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: any) { super(props); this.state = { hasError: false, error: null }; }
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

function Treino() {
  useAppState();
  const { adjustment, metrics } = useNeuroAdaptive();

  return (
    <Shell>
      <PageHeader emoji="🧠" title="Neuro-Treino" subtitle="Cada caixinha abre uma atividade exclusiva com 30 variações" />

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
        <div className="lg:col-span-3 space-y-6">
          {GRUPOS.map((g) => (
            <section key={g.nome}>
              <h2 className="text-lg mb-3 flex items-center gap-2 font-extrabold">{g.emoji} {g.nome}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {g.slugs.map((slug) => {
                  const c = CATEGORIAS[slug];
                  return (
                    <Link
                      key={slug}
                      to="/neuro-treino/$slug"
                      params={{ slug }}
                      className={`text-left rounded-2xl p-4 bg-gradient-to-br ${g.cor} border-2 border-border shadow-soft hover:shadow-glow hover:scale-105 transition-all min-h-[120px] flex flex-col`}
                    >
                      <div className="text-3xl mb-1">{c.emoji}</div>
                      <div className="font-extrabold">{c.nome}</div>
                      <div className="text-xs text-muted-foreground mt-1">{VARIATIONS[slug].length} variações</div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}

          <Card className="bg-muted/30">
            <div className="text-sm text-muted-foreground">
              Precisão: <b>{Math.round(metrics.performance.accuracyRate * 100)}%</b> · Fadiga: <b>{Math.round(metrics.fatigue.fatigueLevel * 100)}%</b>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <PipPedagogicalGuidance stage="idle" />
          </div>
        </div>
      </div>
    </Shell>
  );
}
