import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Shell, PageHeader } from "@/components/Layout";
import { Component, ReactNode, useEffect } from "react";
import { AlertCircle, Coffee, Sparkles } from "lucide-react";
import { useAppState } from "@/core/store";
import { useNeuroAdaptive } from "@/hooks/useNeuroAdaptive";
import { CATEGORIAS, GRUPOS, VARIATIONS, type CategoriaSlug } from "@/data/neuro-treino/variations";
import { useHiperfoco } from "@/context/HiperfocoContext";

// Ícones por categoria (v2 - ilustrações premium 2D)
import icSonsIniciais from "@/assets/neuro-treino/icons/v2/sons-iniciais.png";
import icMotorzinho from "@/assets/neuro-treino/icons/v2/motorzinho-dos-sons.png";
import icRimas from "@/assets/neuro-treino/icons/v2/rimas.png";
import icPedacinhos from "@/assets/neuro-treino/icons/v2/pedacinhos-da-palavra.png";
import icOndeEsta from "@/assets/neuro-treino/icons/v2/onde-esta.png";
import icSeqPadrao from "@/assets/neuro-treino/icons/v2/sequencia-e-padrao.png";
import icCadePar from "@/assets/neuro-treino/icons/v2/cade-o-par.png";
import icFocoTotal from "@/assets/neuro-treino/icons/v2/foco-total.png";
import icLabSom from "@/assets/neuro-treino/icons/v2/labirinto-do-som.png";
import icFocoSust from "@/assets/neuro-treino/icons/v2/foco-sustentado.png";
import icRastreio from "@/assets/neuro-treino/icons/v2/rastreamento-sacadico.png";
import icMosaico from "@/assets/neuro-treino/icons/v2/mosaico-de-formas.png";
import icSeqCores from "@/assets/neuro-treino/icons/v2/sequencia-de-cores.png";
import icSimetria from "@/assets/neuro-treino/icons/v2/simetria.png";
import icDecoracao from "@/assets/neuro-treino/icons/v2/decoracao-criativa.png";
import icOnomatopeias from "@/assets/neuro-treino/icons/v2/onomatopeias-animadas.png";
import icRitmoSopro from "@/assets/neuro-treino/icons/v2/ritmo-e-sopro.png";
import icSonsCorpo from "@/assets/neuro-treino/icons/v2/paromatopeias-corpo.png";
import icTracado from "@/assets/neuro-treino/icons/v2/tracado-letras.png";
import icCaminhoPontos from "@/assets/neuro-treino/icons/v2/caminho-dos-pontos.png";
import icLabPrecisao from "@/assets/neuro-treino/icons/v2/labirinto-precisao.png";
import icTriagem from "@/assets/neuro-treino/icons/v2/triagem-categorias.png";
import icExpressao from "@/assets/neuro-treino/icons/v2/expressao-emocao.png";
import icConscienciaFono from "@/assets/neuro-treino/icons/v2/consciencia-fonologica.png";

const ICONS: Record<CategoriaSlug, string> = {
  "sons-iniciais": icSonsIniciais,
  "motorzinho-dos-sons": icMotorzinho,
  "rimas": icRimas,
  "pedacinhos-da-palavra": icPedacinhos,
  "consciencia-fonologica": icConscienciaFono,
  "onde-esta": icOndeEsta,
  "sequencia-e-padrao": icSeqPadrao,
  "cade-o-par": icCadePar,
  "foco-total": icFocoTotal,
  "labirinto-do-som": icLabSom,
  "foco-sustentado": icFocoSust,
  "rastreamento-sacadico": icRastreio,
  "mosaico-de-formas": icMosaico,
  "sequencia-de-cores": icSeqCores,
  "simetria": icSimetria,
  "decoracao-criativa": icDecoracao,
  "onomatopeias-animadas": icOnomatopeias,
  "ritmo-e-sopro": icRitmoSopro,
  "paromatopeias-corpo": icSonsCorpo,
  "tracado-letras": icTracado,
  "caminho-dos-pontos": icCaminhoPontos,
  "labirinto-precisao": icLabPrecisao,
  "triagem-categorias": icTriagem,
  "expressao-emocao": icExpressao,
};

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
      <NeuroTreinoShell />
    </NeuroTreinoErrorBoundary>
  ),
});

function NeuroTreinoShell() {
  const location = useLocation();
  return location.pathname === "/neuro-treino" ? <Treino /> : <Outlet />;
}

function Treino() {
  useAppState();
  const { adjustment, metrics } = useNeuroAdaptive();
  const { hiperfoco } = useHiperfoco();

  // Limpa caches antigos do sistema de mundos do neuro-treino
  // (que foi movido para a Jornada 365) para evitar redirecionamentos fantasma.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const STALE_KEYS = [
      "neuroTreino:world",
      "neuroTreino:trilha",
      "neuroTreino:trail",
      "neuroTreino:lastRoute",
      "neuroTreino:redirect",
      "neuro-treino:world",
      "neuro-treino:trilha",
      "neuro-treino:redirect",
      "currentWorld",
      "lastJourneyRoute",
    ];
    try {
      STALE_KEYS.forEach((k) => {
        window.localStorage.removeItem(k);
        window.sessionStorage.removeItem(k);
      });
    } catch {
      // ignore
    }
  }, []);

  return (
    <Shell>
      <PageHeader
        title="Neuro-Treino"
        subtitle={hiperfoco ? `Hiperfoco: ${hiperfoco.label}` : "Escolha as atividades"}
      />

      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-muted-foreground font-bold">
          Precisão <b className="text-foreground">{Math.round(metrics.performance.accuracyRate * 100)}%</b>
          {" · "}Fadiga <b className="text-foreground">{Math.round(metrics.fatigue.fatigueLevel * 100)}%</b>
        </div>
        <Link
          to="/neuro-treino/configurar"
          className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-extrabold hover:scale-105 transition-all shadow"
        >
          {hiperfoco ? "Trocar hiperfoco" : "Escolher hiperfoco"}
        </Link>
      </div>

      {adjustment.suggestBreak && (
        <div className="mb-6 bg-card rounded-2xl border-2 border-sun/40 px-4 py-3 flex items-center gap-3 shadow">
          <Coffee className="h-6 w-6 text-sun" />
          <div className="flex-1">
            <div className="font-bold">Que tal uma pausinha?</div>
            <div className="text-sm text-muted-foreground">Detectei sinais de cansaço. Respira fundo.</div>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {GRUPOS.map((g) => (
          <section key={g.nome}>
            <div className="flex items-center gap-2 mb-3 px-1">
              <Sparkles className="h-4 w-4 text-primary" />
              <h2 className="font-black text-lg uppercase tracking-wider">
                {g.nome}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {g.slugs.map((slug) => {
                const c = CATEGORIAS[slug];
                return (
                  <Link
                    key={slug}
                    to="/neuro-treino/$slug"
                    params={{ slug }}
                    onClick={() => {
                      console.error("[Neuro-Treino] clique categoria", {
                        slug,
                        nome: c?.nome,
                        variacoesLocais: VARIATIONS[slug]?.length ?? 0,
                        hiperfocoAtivo: hiperfoco?.label ?? null,
                      });
                    }}
                    className="group bg-card border-2 border-border rounded-3xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 transition-all"
                  >
                    <div className="w-20 h-20 grid place-items-center mb-2">
                      <img
                        src={ICONS[slug]}
                        alt={c.nome}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="w-full h-full object-contain drop-shadow group-hover:scale-105 transition-transform"
                        draggable={false}
                      />
                    </div>
                    <div className="font-extrabold text-sm leading-tight">{c.nome}</div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  );
}
