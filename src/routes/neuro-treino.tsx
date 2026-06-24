import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { Component, ReactNode, useEffect } from "react";
import {
  AlertCircle,
  Coffee,
  Brain,
  Mic,
  Dumbbell,
  Eye,
  BookOpen,
  Sparkles,
  Zap,
  
} from "lucide-react";

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


import icTriagem from "@/assets/neuro-treino/icons/v2/triagem-categorias.png";
import icExpressao from "@/assets/neuro-treino/icons/v2/expressao-emocao.png";
import icConscienciaFono from "@/assets/neuro-treino/icons/v2/consciencia-fonologica.png";
import icDiscriminacaoAuditiva from "@/assets/neuro-treino/icons/v2/discriminacao-auditiva.png";
import icArticulacaoSons from "@/assets/neuro-treino/icons/v2/articulacao-sons.png";
import icVocabularioSemantico from "@/assets/neuro-treino/icons/v2/vocabulario-semantico.png";
import icNomeacaoRapida from "@/assets/neuro-treino/icons/v2/nomeacao-rapida.png";
import icToqueSequencia from "@/assets/neuro-treino/icons/v2/toque-sequencia.png";
import icRitmoBatidas from "@/assets/neuro-treino/icons/v2/ritmo-batidas.png";
import icCopiarFigura from "@/assets/neuro-treino/icons/v2/copiar-figura.png";
import icAlvoMovel from "@/assets/neuro-treino/icons/v2/alvo-movel.png";
import icAcharDiferente from "@/assets/neuro-treino/icons/v2/achar-diferente.png";
import icMemoriaVisual from "@/assets/neuro-treino/icons/v2/memoria-visual.png";
import icReacaoRapida from "@/assets/neuro-treino/icons/v2/reacao-rapida.png";
import icSeguirInstrucao from "@/assets/neuro-treino/icons/v2/seguir-instrucao.png";
import icLetraSom from "@/assets/neuro-treino/icons/v2/letra-som.png";
import icPalavraImagem from "@/assets/neuro-treino/icons/v2/palavra-imagem.png";
import icFormandoPalavras from "@/assets/neuro-treino/icons/v2/formando-palavras.png";
import icLeituraPalavras from "@/assets/neuro-treino/icons/v2/leitura-palavras.png";
import icCompletarLetra from "@/assets/neuro-treino/icons/v2/completar-letra.png";

const ICONS: Partial<Record<CategoriaSlug, string>> = {
  "sons-iniciais": icSonsIniciais,
  "motorzinho-dos-sons": icMotorzinho,
  rimas: icRimas,
  "pedacinhos-da-palavra": icPedacinhos,
  "consciencia-fonologica": icConscienciaFono,
  "consciencia-silabica": icPedacinhos,
  "compreensao-leitora": icLeituraPalavras,
  "onde-esta": icOndeEsta,
  "sequencia-e-padrao": icSeqPadrao,
  "cade-o-par": icCadePar,
  "foco-total": icFocoTotal,
  "labirinto-do-som": icLabSom,
  "foco-sustentado": icFocoSust,
  "rastreamento-sacadico": icRastreio,
  "mosaico-de-formas": icMosaico,
  "sequencia-de-cores": icSeqCores,
  simetria: icSimetria,
  "decoracao-criativa": icDecoracao,
  "onomatopeias-animadas": icOnomatopeias,
  "ritmo-e-sopro": icRitmoSopro,
  "paromatopeias-corpo": icSonsCorpo,
  "tracado-letras": icTracado,
  "labirinto-precisao": icLabPrecisao,
  "triagem-categorias": icTriagem,
  "expressao-emocao": icExpressao,
  "discriminacao-auditiva": icDiscriminacaoAuditiva,
  "articulacao-sons": icArticulacaoSons,
  "vocabulario-semantico": icVocabularioSemantico,
  "nomeacao-rapida": icNomeacaoRapida,
  "toque-sequencia": icToqueSequencia,
  "ritmo-batidas": icRitmoBatidas,
  "copiar-figura": icCopiarFigura,
  "alvo-movel": icAlvoMovel,
  "achar-diferente": icAcharDiferente,
  "memoria-visual": icMemoriaVisual,
  "reacao-rapida": icReacaoRapida,
  "seguir-instrucao": icSeguirInstrucao,
  "letra-som": icLetraSom,
  "palavra-imagem": icPalavraImagem,
  "formando-palavras": icFormandoPalavras,
  "leitura-palavras": icLeituraPalavras,
  "completar-letra": icCompletarLetra,
};

// Ícone do grupo clínico
const GROUP_CONFIG: Record<
  string,
  { icon: ReactNode; color: string; bg: string; border: string; accent: string }
> = {
  "Fono Clínico": {
    icon: <Mic className="h-5 w-5" />,
    color: "text-rose-600",
    bg: "from-rose-50 to-rose-100/50 dark:from-rose-950/30 dark:to-rose-900/20",
    border: "border-rose-200 dark:border-rose-800",
    accent: "bg-rose-500",
  },
  "Coordenação Motora": {
    icon: <Dumbbell className="h-5 w-5" />,
    color: "text-emerald-600",
    bg: "from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800",
    accent: "bg-emerald-500",
  },
  "Atenção & Concentração": {
    icon: <Eye className="h-5 w-5" />,
    color: "text-violet-600",
    bg: "from-violet-50 to-violet-100/50 dark:from-violet-950/30 dark:to-violet-900/20",
    border: "border-violet-200 dark:border-violet-800",
    accent: "bg-violet-500",
  },
  Alfabetização: {
    icon: <BookOpen className="h-5 w-5" />,
    color: "text-amber-600",
    bg: "from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20",
    border: "border-amber-200 dark:border-amber-800",
    accent: "bg-amber-500",
  },
  "Fala e Som": {
    icon: <Sparkles className="h-5 w-5" />,
    color: "text-sky-600",
    bg: "from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20",
    border: "border-sky-200 dark:border-sky-800",
    accent: "bg-sky-500",
  },
  "Funções Executivas": {
    icon: <Brain className="h-5 w-5" />,
    color: "text-purple-600",
    bg: "from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20",
    border: "border-purple-200 dark:border-purple-800",
    accent: "bg-purple-500",
  },
  "Oficina Criativa": {
    icon: <Zap className="h-5 w-5" />,
    color: "text-orange-600",
    bg: "from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20",
    border: "border-orange-200 dark:border-orange-800",
    accent: "bg-orange-500",
  },
};

class NeuroTreinoErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: any) {
    console.error("NeuroTreinoErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <Shell>
          <div className="flex flex-col items-center justify-center p-8 text-center bg-destructive/5 rounded-3xl border-2 border-dashed border-destructive/20">
            <AlertCircle className="h-16 w-16 text-destructive mb-4" />
            <h2 className="text-2xl font-bold text-destructive">Erro no Neuro-Treino</h2>
            <p className="text-muted-foreground mt-2 mb-6">
              <b>Erro:</b> {this.state.error?.message}
            </p>
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
      /* ignore */
    }
  }, []);

  const precisao = Math.round(metrics.performance.accuracyRate * 100);
  const fadiga = Math.round(metrics.fatigue.fatigueLevel * 100);

  return (
    <Shell>
      <div className="pb-8">
        {/* ── CABEÇALHO CONSULTÓRIO ──────────────────────────────── */}
        <div className="relative rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-5 shadow-xl">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 50%)",
            }}
          />
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                    Consultório Digital
                  </span>
                </div>
                <h1 className="text-2xl font-black text-white">Neuro-Treino</h1>
                {hiperfoco && (
                  <div className="mt-1 inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                    <Sparkles className="h-3 w-3 text-amber-400" />
                    <span className="text-xs text-amber-300 font-bold">{hiperfoco.label}</span>
                  </div>
                )}
              </div>
              <Link
                to="/neuro-treino/configurar"
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl px-3 py-2 transition-all border border-white/10"
              >
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                {hiperfoco ? "Hiperfoco" : "Configurar"}
              </Link>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div className="bg-white/8 rounded-2xl px-3 py-2.5 border border-white/10">
                <div className="text-xs text-slate-400 mb-0.5">Precisão</div>
                <div className="flex items-end gap-1.5">
                  <span className="text-xl font-black text-white">{precisao}%</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/10 mb-1 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-emerald-400 transition-all"
                      style={{ width: `${precisao}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white/8 rounded-2xl px-3 py-2.5 border border-white/10">
                <div className="text-xs text-slate-400 mb-0.5">Energia</div>
                <div className="flex items-end gap-1.5">
                  <span className="text-xl font-black text-white">{100 - fadiga}%</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/10 mb-1 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-sky-400 transition-all"
                      style={{ width: `${100 - fadiga}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── AVISO DE PAUSA ──────────────────────────────────────── */}
        {adjustment.suggestBreak && (
          <div className="mb-5 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border-2 border-amber-200 dark:border-amber-800 px-4 py-3 flex items-center gap-3 shadow-sm">
            <Coffee className="h-5 w-5 text-amber-600 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="font-bold text-amber-900 dark:text-amber-200 text-sm">
                Que tal uma pausinha?
              </div>
              <div className="text-xs text-amber-700 dark:text-amber-400">
                Detectei sinais de cansaço. Respira fundo.
              </div>
            </div>
          </div>
        )}





        <div className="space-y-5">
          {GRUPOS.map((g) => {
            const cfg = GROUP_CONFIG[g.nome];
            return (
              <section
                key={g.nome}
                className={`rounded-3xl border ${cfg?.border ?? "border-border"} overflow-hidden shadow-sm`}
              >
                {/* Cabeçalho do grupo */}
                <div
                  className={`bg-gradient-to-r ${cfg?.bg ?? "from-muted to-muted/50"} px-4 py-3 flex items-center gap-2 border-b ${cfg?.border ?? "border-border"}`}
                >
                  <div className={`${cfg?.color ?? "text-primary"}`}>
                    {cfg?.icon ?? <Sparkles className="h-5 w-5" />}
                  </div>
                  <div>
                    <h2
                      className={`font-black text-sm ${cfg?.color ?? "text-foreground"} uppercase tracking-wider`}
                    >
                      {g.nome}
                    </h2>
                    <div className="text-xs text-muted-foreground">
                      {g.slugs.length} atividades · {g.slugs.length * 30} variações
                    </div>
                  </div>
                </div>

                {/* Grid de cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-card">
                  {g.slugs.map((slug) => {
                    const c = CATEGORIAS[slug];
                    const iconSrc = ICONS[slug];
                    const varCount = VARIATIONS[slug]?.length ?? 0;

                    return (
                      <Link
                        key={slug}
                        to="/neuro-treino/$slug"
                        params={{ slug }}
                        className="group relative bg-background hover:bg-accent/30 border-2 border-border hover:border-primary/30 rounded-2xl p-2 flex flex-col items-center text-center transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                      >
                        {/* Indicador de variações */}
                        {varCount > 0 && (
                          <div className="absolute top-1.5 right-1.5">
                            <div
                              className={`w-5 h-5 rounded-full ${cfg?.accent ?? "bg-primary"} flex items-center justify-center`}
                            >
                              <span className="text-[9px] font-black text-white">{varCount}</span>
                            </div>
                          </div>
                        )}

                        {/* Ícone GRANDE — foco visual para a criança */}
                        <div className="w-28 h-28 sm:w-32 sm:h-32 grid place-items-center rounded-2xl">
                          <img
                            src={iconSrc ?? ""}
                            alt={c?.nome ?? slug}
                            loading="lazy"
                            width={128}
                            height={128}
                            className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                            draggable={false}
                          />
                        </div>

                        <div className="mt-1 font-bold text-[10px] leading-tight text-muted-foreground line-clamp-1">
                          {c?.nome ?? slug}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}
