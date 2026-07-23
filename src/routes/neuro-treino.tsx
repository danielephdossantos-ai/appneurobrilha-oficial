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
import { SensoryPanel } from "@/components/neuro-treino/SensoryPanel";

// Ícones por categoria (v2 - ilustrações premium 2D)
import { url as icSonsIniciais } from "@/assets/neuro-treino/icons/v2/sons-iniciais.png.asset.json";
import { url as icMotorzinho } from "@/assets/neuro-treino/icons/v2/motorzinho-dos-sons.png.asset.json";
import { url as icRimas } from "@/assets/neuro-treino/icons/v2/rimas.png.asset.json";
import { url as icPedacinhos } from "@/assets/neuro-treino/icons/v2/pedacinhos-da-palavra.png.asset.json";
import { url as icOndeEsta } from "@/assets/neuro-treino/icons/v2/onde-esta.png.asset.json";
import { url as icSeqPadrao } from "@/assets/neuro-treino/icons/v2/sequencia-e-padrao.png.asset.json";
import { url as icCadePar } from "@/assets/neuro-treino/icons/v2/cade-o-par.png.asset.json";



import { url as icMosaico } from "@/assets/neuro-treino/icons/v2/mosaico-de-formas.png.asset.json";
import { url as icSeqCores } from "@/assets/neuro-treino/icons/v2/sequencia-de-cores.png.asset.json";


import { url as icOnomatopeias } from "@/assets/neuro-treino/icons/v2/onomatopeias-animadas.png.asset.json";
import { url as icRitmoSopro } from "@/assets/neuro-treino/icons/v2/ritmo-e-sopro.png.asset.json";
import { url as icSonsCorpo } from "@/assets/neuro-treino/icons/v2/paromatopeias-corpo.png.asset.json";
import { url as icTracado } from "@/assets/neuro-treino/icons/v2/tracado-letras.png.asset.json";


import { url as icTriagem } from "@/assets/neuro-treino/icons/v2/triagem-categorias.png.asset.json";
import { url as icExpressao } from "@/assets/neuro-treino/icons/v2/expressao-emocao.png.asset.json";
import { url as icConscienciaFono } from "@/assets/neuro-treino/icons/v2/consciencia-fonologica.png.asset.json";
import { url as icDiscriminacaoAuditiva } from "@/assets/neuro-treino/icons/v2/discriminacao-auditiva.png.asset.json";
import { url as icArticulacaoSons } from "@/assets/neuro-treino/icons/v2/articulacao-sons.png.asset.json";
import { url as icVocabularioSemantico } from "@/assets/neuro-treino/icons/v2/vocabulario-semantico.png.asset.json";
import { url as icNomeacaoRapida } from "@/assets/neuro-treino/icons/v2/nomeacao-rapida.png.asset.json";
import { url as icToqueSequencia } from "@/assets/neuro-treino/icons/v2/toque-sequencia.png.asset.json";
import { url as icRitmoBatidas } from "@/assets/neuro-treino/icons/v2/ritmo-batidas.png.asset.json";
import { url as icCopiarFigura } from "@/assets/neuro-treino/icons/v2/copiar-figura.png.asset.json";
import { url as icAlvoMovel } from "@/assets/neuro-treino/icons/v2/alvo-movel.png.asset.json";
import { url as icAcharDiferente } from "@/assets/neuro-treino/icons/v2/achar-diferente.png.asset.json";
import { url as icMemoriaVisual } from "@/assets/neuro-treino/icons/v2/memoria-visual.png.asset.json";
import { url as icReacaoRapida } from "@/assets/neuro-treino/icons/v2/reacao-rapida.png.asset.json";
import { url as icSeguirInstrucao } from "@/assets/neuro-treino/icons/v2/seguir-instrucao.png.asset.json";
import { url as icLetraSom } from "@/assets/neuro-treino/icons/v2/letra-som.png.asset.json";
import { url as icPalavraImagem } from "@/assets/neuro-treino/icons/v2/palavra-imagem.png.asset.json";
import { url as icFormandoPalavras } from "@/assets/neuro-treino/icons/v2/formando-palavras.png.asset.json";
import { url as icLeituraPalavras } from "@/assets/neuro-treino/icons/v2/leitura-palavras.png.asset.json";
import { url as icCompletarLetra } from "@/assets/neuro-treino/icons/v2/completar-letra.png.asset.json";

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
  
  
  "mosaico-de-formas": icMosaico,
  "sequencia-de-cores": icSeqCores,
  
  
  "onomatopeias-animadas": icOnomatopeias,
  "ritmo-e-sopro": icRitmoSopro,
  "paromatopeias-corpo": icSonsCorpo,
  "tracado-letras": icTracado,
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

        {/* ── MODO SENSORIAL ──────────────────────────────────────── */}
        <SensoryPanel />

        <div className="space-y-5">
          {/* ── COMUNICAÇÃO FUNCIONAL · Biblioteca Encantada ─────── */}
          <Link
            to="/escola-brilha/biblioteca-encantada"
            className="group block rounded-3xl overflow-hidden border-2 border-emerald-200 dark:border-emerald-900/60 shadow hover:shadow-lg transition"
          >
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-2xl">
                🗣️
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                  Comunicação Funcional · PECS / TEACCH / Denver
                </div>
                <div className="font-black text-white text-base leading-tight">
                  Biblioteca Encantada · 60 aulas
                </div>
                <div className="text-xs text-white/85">
                  Do apontar ao contar histórias · rotina visual + trocas
                </div>
              </div>
              <div className="text-white/90 group-hover:translate-x-1 transition text-xl">
                →
              </div>
            </div>
          </Link>

          {/* ── TRILHA DA LEITURA · programa clínico dislexia ───── */}
          <Link
            to="/escola-brilha/dislexia"
            className="group block rounded-3xl overflow-hidden border-2 border-orange-200 dark:border-orange-900/60 shadow hover:shadow-lg transition"
          >
            <div className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-500 p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-2xl">
                🎧
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                  Programa Clínico · Dislexia
                </div>
                <div className="font-black text-white text-base leading-tight">
                  Trilha da Leitura · Orton-Gillingham
                </div>
                <div className="text-xs text-white/85">
                  Multissensorial · 8 fases · começa pelo ouvido
                </div>
              </div>
              <div className="text-white/90 group-hover:translate-x-1 transition text-xl">
                →
              </div>
            </div>
          </Link>

          {/* ── MATEMÁTICA TERAPÊUTICA · Discalculia ───────────────── */}
          <Link
            to="/escola-brilha/contar-com-pip"
            className="group block rounded-3xl overflow-hidden border-2 border-sky-200 dark:border-sky-900/60 shadow hover:shadow-lg transition"
          >
            <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur grid place-items-center shrink-0 text-2xl">
                🔢
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                  Matemática Terapêutica · Discalculia
                </div>
                <div className="font-black text-white text-base leading-tight">
                  Contar com Pip · Senso Numérico
                </div>
                <div className="text-xs text-white/85">
                  Subitizing · Numicon · reta numérica · 8 fases
                </div>
              </div>
              <div className="text-white/90 group-hover:translate-x-1 transition text-xl">
                →
              </div>
            </div>
          </Link>






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
