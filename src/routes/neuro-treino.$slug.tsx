import { createFileRoute, Link, useNavigate, Navigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowDown,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight,
  ArrowUp,
  ChevronRight,
  Hand,
  Mic,
  MicOff,
  RotateCcw,
  Sparkles,
  Star,
  Volume2,
  VolumeX,
  X,
  Zap,
  CheckCircle2,
  Play,
  Pause,
} from "lucide-react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { toast } from "sonner";
import { useNavigationStore, useBackNavigation } from "@/lib/navigation-context";
import {
  CATEGORIAS,
  VARIATIONS,
  MOTORZINHO_BANK,
  type CategoriaSlug,
  type MotorzinhoTag,
  type ShapeType,
  type MosaicoPiece,
  range,
} from "@/data/neuro-treino/variations";
import { QUEBRA_CABECA_MAGICO_VARS, CONSTRUTOR_DE_FORMAS_VARS, ESTUDIO_ARTE_CONTORNO_VARS } from "@/data/neuro-treino/variations-extended";

import { objetoImg, emojiImg, ilustracao, semEmoji } from "@/data/neuro-treino/objetos";
import { RenderEmoji } from "@/components/neuro-treino/RenderEmoji";
import { getElementoImg } from "@/data/hiperfocos-img";
import { useHiperfoco } from "@/context/HiperfocoContext";
import { useAppState } from "@/core/store";
import { applyHiperfoco, pickElemento, pipFraseAcerto, pipFraseIncentivo } from "@/data/hiperfocos";
import { usePipVoice } from "@/hooks/usePipVoice";
import { useSpeechMatcher } from "@/hooks/useSpeechMatcher";
import { getCheckpoints as getLetterCheckpoints } from "@/data/neuro-treino/stroke-checkpoints";
import { useSensoryProfile } from "@/hooks/useSensoryProfile";
import { useNeuroAdaptive } from "@/hooks/useNeuroAdaptive";
import { getNeuroSkillInfo } from "@/data/neuro-treino/skill-map";
import { useAbaPrompting } from "@/hooks/useAbaPrompting";
import { sanitizarFalaMascote } from "@/lib/sanitizar-fala-mascote";

import { PROMPT_HINTS } from "@/services/neuro-treino/promptingEngine";
import { buildAdaptiveUIState } from "@/engines/neuro-engine/adaptation-utils";

// Filtra variações por escala de dificuldade adaptativa (0.1..1.0).
// - Se a variação carrega payload.nivel (1|2|3), filtra por teto: <0.4 => 1, <0.75 => <=2, senão todas.
// - Além disso, aplica um teto de índice (bancos costumam estar ordenados fácil→difícil).
function filterByDifficulty<T extends { payload?: any }>(list: T[], scale: number): T[] {
  if (!list?.length) return list;
  const s = Math.max(0.1, Math.min(1, scale));
  const nivelCap = s < 0.4 ? 1 : s < 0.75 ? 2 : 3;
  const byNivel = list.filter((v) => {
    const n = v?.payload?.nivel;
    return typeof n === "number" ? n <= nivelCap : true;
  });
  const ceiling = Math.max(3, Math.ceil(byNivel.length * s));
  const capped = byNivel.slice(0, ceiling);
  return capped.length >= 3 ? capped : byNivel.length ? byNivel : list;
}
import { url as soproCarro } from "@/assets/neuro-treino/sopro/carro.png.asset.json";
import { url as soproVela } from "@/assets/neuro-treino/sopro/vela.png.asset.json";
import { url as soproBalao } from "@/assets/neuro-treino/sopro/balao.png.asset.json";
import { url as soproMoinho } from "@/assets/neuro-treino/sopro/moinho.png.asset.json";
import { url as soproBarco } from "@/assets/neuro-treino/sopro/barco.png.asset.json";
import { url as soproBolha } from "@/assets/neuro-treino/sopro/bolha.png.asset.json";

export const Route = createFileRoute("/neuro-treino/$slug")({
  component: NeuroAtividade,
});

function NeuroAtividade() {
  const { slug } = Route.useParams() as { slug: CategoriaSlug };
  const navigate = useNavigate();
  const { handleBack, context } = useBackNavigation();
  const setNavContext = useNavigationStore(s => s.setContext);
  const [showSessionModal, setShowSessionModal] = useState(false);
  const isSessionMode = context?.originCategory === "meu-plano" && !!context.sessionActivities;
  const { hiperfoco } = useHiperfoco();
  const { activeChild } = useAppState();
  const { speak, stop, isSpeaking } = usePipVoice();
  const [voiceOn, setVoiceOn] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("pip:voice") !== "off";
  });

  const [index, setIndex] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Núcleo adaptativo: métricas, ajuste, registro em activity_logs
  const { adjustment, metrics, registerPerformance, requestHelp } = useNeuroAdaptive();
  const startedAtRef = useRef<number>(Date.now());
  const breakToastFiredRef = useRef<boolean>(false);
  // Hierarquia ABA de prompting por habilidade (nível 1..4)
  const skillInfo = useMemo(() => getNeuroSkillInfo(slug), [slug]);
  const aba = useAbaPrompting(activeChild?.id, skillInfo.skillCode);

  const meta = CATEGORIAS[slug];
  const rawVars = VARIATIONS[slug];
  const adaptiveUI = useMemo(
    () =>
      buildAdaptiveUIState(
        {
          visualComplexity: adjustment.visualComplexity,
          stimuliReduction: adjustment.stimuliReduction,
          interfaceSimplification: adjustment.interfaceSimplification,
          difficultyScale: adjustment.difficultyScale,
          audioAdaptation: adjustment.audioAdaptation,
          animationIntensity: adjustment.animationIntensity,
          maxInformationDensity: adjustment.maxInformationDensity,
        },
        activeChild?.diagnostico ? String(activeChild.diagnostico) : "Tipico",
      ),
    [adjustment, activeChild?.diagnostico],
  );
  // Filtragem por dificuldade adaptativa
  const vars = useMemo(
    () => (rawVars ? filterByDifficulty(rawVars, adjustment.difficultyScale) : rawVars),
    [rawVars, adjustment.difficultyScale],
  );

  useEffect(() => {
    setIndex(0);
    setError(null);
    setIsLoading(true);

    try {
      console.error("[Neuro-Treino] carregando sessão", {
        categoryId: slug,
        hiperfoco: hiperfoco?.label ?? null,
        metaEncontrada: Boolean(meta),
        quantidadeVariacoes: vars?.length ?? 0,
        difficultyScale: adjustment.difficultyScale,
        stimuliReduction: adjustment.stimuliReduction,
      });

      if (!meta || !vars) {
        throw new Error(`Dados não encontrados para a categoria: ${slug}`);
      }

      if (vars.length === 0) {
        throw new Error(`Categoria ${slug} retornou 0 variações.`);
      }

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 250);

      return () => clearTimeout(timer);
    } catch (err: any) {
      console.error("[Neuro-Treino] erro ao carregar atividade", {
        categoryId: slug,
        hiperfoco: hiperfoco?.label ?? null,
        meta,
        vars,
        erro: err,
      });
      setError(err.message || "Falha ao carregar atividade");
      setIsLoading(false);
    }
  }, [slug, meta, vars, hiperfoco?.label, adjustment.difficultyScale, adjustment.stimuliReduction]);

  // ⚠️ TODOS os hooks devem ficar ANTES dos early returns
  const hasData = Boolean(meta && vars && vars.length > 0);
  const safeIndex = hasData ? index % vars!.length : 0;
  const variation = hasData ? vars![safeIndex] : null;
  const seed = variation ? `${slug}:${variation.id}` : slug;
  const elemento = (hiperfoco && pickElemento) ? pickElemento(hiperfoco, seed) : "";
  const instrucaoTematica =
    (hiperfoco && meta && applyHiperfoco) ? applyHiperfoco(meta.instrucao, hiperfoco, seed) : (meta?.instrucao || "");
  const nomeCrianca = activeChild?.nome?.split(" ")[0] || "";

  // Timestamp por questão para medir tempo de resposta
  useEffect(() => {
    startedAtRef.current = Date.now();
  }, [variation?.id]);

  // Alerta de pausa quando o núcleo indica fadiga
  useEffect(() => {
    const needsBreak = adjustment.suggestBreak || metrics.fatigue.needForBreak;
    if (needsBreak && !breakToastFiredRef.current) {
      breakToastFiredRef.current = true;
      toast("Que tal uma pausa curtinha? 💧✨", {
        description: "Respira, bebe água e volta quando estiver pronto.",
        duration: 6000,
      });
    }
    if (!needsBreak) breakToastFiredRef.current = false;
  }, [adjustment.suggestBreak, metrics.fatigue.needForBreak]);

  const narracao = useMemo(() => {
    if (!variation || !instrucaoTematica) return "";
    const p: any = variation.payload ?? {};
    const extra = p.letra
      ? ` A letra é ${p.letra}.`
      : p.palavra
        ? ` A palavra é ${p.palavra}.`
        : p.alvo
          ? ` Procure ${p.alvo}.`
          : p.target
            ? ` Procure ${p.target}.`
            : "";
    const saud = nomeCrianca ? `${nomeCrianca}, ` : "";
    const base = `${saud}${instrucaoTematica}${extra}`;
    
    // Importando sanitização dinamicamente ou usando a importada
    return import.meta.env.DEV ? base : base; // Fallback se necessário, mas vamos usar a função
  }, [variation, instrucaoTematica, nomeCrianca]);

  const narracaoSanitizada = useMemo(() => {
    return sanitizarFalaMascote(narracao, nomeCrianca);
  }, [narracao, nomeCrianca]);






  useEffect(() => {
    if (!voiceOn || !narracaoSanitizada) return;
    if (slug === "motorzinho-dos-sons") return;
    if (isLoading || error) return;
    const t = setTimeout(() => {
      speak(narracaoSanitizada);
    }, 250);
    return () => {
      clearTimeout(t);
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [narracaoSanitizada, voiceOn, slug, isLoading, error]);


  // ===== Early returns (depois de todos os hooks) =====
  if (!hiperfoco && !["quebra-cabeca-magico", "construtor-de-formas", "estudio-arte-contorno"].includes(slug)) {
    return <Navigate to="/neuro-treino/configurar" search={{ next: slug }} />;
  }

  if (isLoading) {
    return (
      <Shell>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mb-4" />
          <h2 className="text-xl font-bold text-muted-foreground">
            Preparando treino personalizado...
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Aplicando hiperfoco: {hiperfoco?.label || "Padrão"}
          </p>
        </div>
      </Shell>
    );
  }

  if (error || !meta || !vars || !variation) {
    return (
      <Shell>
        <Card className="text-center p-8">
          <div className="bg-destructive/10 text-destructive rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-2xl font-extrabold mb-2">Ops! Algo deu errado</h2>
          <p className="text-muted-foreground mb-6">
            {error || "Atividade não encontrada no banco de dados."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <RotateCcw size={18} /> Tentar Novamente
            </button>
            <button
              onClick={() => navigate({ to: "/neuro-treino" })}
              className="bg-muted text-muted-foreground px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <ArrowLeft size={18} /> Voltar ao Painel
            </button>
          </div>
        </Card>
      </Shell>
    );
  }

  const toggleVoice = () => {
    setVoiceOn((v) => {
      const next = !v;
      if (typeof window !== "undefined") {
        localStorage.setItem("pip:voice", next ? "on" : "off");
      }
      if (!next) stop();
      return next;
    });
  };

  const replay = () => {
    if (!voiceOn) return;
    stop();
    speak(narracao);
  };

  const onConcluir = (correto: boolean) => {
    // Tempo de resposta desta questão (segundos)
    const responseTimeSec = Math.max(0.1, (Date.now() - startedAtRef.current) / 1000);
    const activityId = variation ? `${slug}:${variation.id}` : slug;
    // Persiste em activity_logs + child_skill_mastery, atualiza núcleo adaptativo
    // e recebe o novo estado ABA de prompting.
    void registerPerformance(correto, responseTimeSec, activityId, skillInfo).then((next) => {
      aba.applyLocal(next);
    });
    // Reinicia cronômetro pra próxima resposta
    startedAtRef.current = Date.now();

    if (correto) {
      setAcertos((a) => a + 1);
      const frase = hiperfoco ? pipFraseAcerto(hiperfoco) : "Muito bem! Você conseguiu! ⭐";
      toast.success(frase);
      if (voiceOn) speak(`${nomeCrianca ? nomeCrianca + ", " : ""}${frase}`);
    } else {
      const frase = hiperfoco ? pipFraseIncentivo(hiperfoco) : "Continue tentando! Você consegue! ✨";
      toast(frase);
      if (voiceOn) speak(frase);
    }
    
    // Se completou a série de variações desta atividade (index atinge vars.length - 1 ou similar)
    // No Neuro-Treino, as sessões costumam ter um fim definido. 
    // Vamos disparar o modal de próxima atividade quando index for múltiplo de 5 ou chegar no fim das variações
    const isActivityFinished = (index + 1) >= Math.min(vars.length, 5);
    
    if (isActivityFinished && isSessionMode) {
      setTimeout(() => setShowSessionModal(true), 1200);
    } else if (!isActivityFinished) {
      setTimeout(() => setIndex((i) => i + 1), 900);
    }

  };

  // Marca "pulei" como pedido de ajuda (registra no log e sinaliza dificuldade)
  const onSkip = () => {
    const activityId = variation ? `${slug}:${variation.id}` : slug;
    requestHelp(activityId);
    setIndex((i) => i + 1);
  };


  return (
    <Shell>
      {/* ── CABEÇALHO ENXUGADO ────────────────────────────────── */}
      <div className="flex items-center justify-center gap-3 mb-4">
        {slug !== "motorzinho-dos-sons" && (
          <button
            onClick={replay}
            disabled={!voiceOn || isSpeaking}
            className="flex items-center gap-2 text-xs font-black rounded-full bg-primary/10 border border-primary/30 px-4 py-2 hover:bg-primary/20 disabled:opacity-50 transition-all shadow-sm active:scale-95"
          >
            <Volume2 size={16} className={isSpeaking ? "animate-pulse" : ""} />
            {isSpeaking ? "OUVINDO..." : "OUVIR PIP"}
          </button>
        )}
      </div>

      {/* ÁREA CENTRALIZADA AUTOMATICAMENTE */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-[65vh] w-full overflow-hidden">
        <div className="w-full max-w-screen-md mx-auto px-2">
          <Card className={`bg-gradient-to-br ${meta.cor} border-2 shadow-2xl rounded-[2.5rem] overflow-hidden`}>
            <div className="p-4 md:p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
              <MechanicRenderer
                slug={slug}
                variation={variation}
                onConcluir={onConcluir}
                promptLevel={aba.level}
                key={variation.id}
              />
            </div>
          </Card>
        </div>
      </div>

      {/* PROGRESSO E INFOS (RODAPÉ DISCRETO) */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          <span>{meta.nome}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <span>Exercício {(index % vars.length) + 1} de {vars.length}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <span className="text-success inline-flex items-center gap-1">
            <Star size={10} className="fill-current" /> {acertos}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (!handleBack(navigate)) {
                navigate({ to: "/neuro-treino" });
              }
            }}
            className="flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} /> Sair
          </button>
          
          <button
            onClick={toggleVoice}
            className={`flex items-center gap-1 text-[9px] font-black uppercase tracking-tighter rounded-full border px-2 py-0.5 transition ${voiceOn ? "bg-success/10 border-success/40 text-success" : "bg-muted border-border text-muted-foreground"}`}
          >
            Voz {voiceOn ? "ON" : "OFF"}
          </button>
        </div>
      </div>


      <div className="mt-4 flex justify-end">
        <button
          onClick={onSkip}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted font-bold hover:bg-muted/70"
        >
          Pular <ChevronRight size={16} />
        </button>
      </div>

      <SessionModal
        isOpen={showSessionModal}
        onClose={() => setShowSessionModal(false)}
        context={context}
        setNavContext={setNavContext}
        navigate={navigate}
      />
    </Shell>
  );
}

function SessionModal({ isOpen, onClose, context, setNavContext, navigate }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card border-2 border-primary/20 w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="text-center py-4">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-success/30">
            <CheckCircle2 size={48} className="text-success" />
          </div>
          <h2 className="text-2xl font-black mb-2">Missão Cumprida! ⭐</h2>
          <p className="text-muted-foreground mb-8">
            Você brilhou nesta atividade! Vamos para a próxima?
          </p>
          
          <div className="space-y-3">
            <button
              onClick={() => {
                const nextIdx = (context?.sessionIndex || 0) + 1;
                const nextSlug = context?.sessionActivities?.[nextIdx];
                
                if (nextSlug) {
                  setNavContext({
                    ...context,
                    sessionIndex: nextIdx
                  });
                  onClose();
                  navigate({ to: `/neuro-treino/${nextSlug}` });
                } else {
                  onClose();
                  toast.success("Rotina de hoje concluída! Parabéns! 🌟");
                  navigate({ to: "/neuro-treino" });
                }
              }}
              className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg"
            >
              <Play size={24} fill="currentColor" /> CONTINUAR
            </button>
            
            <button
              onClick={() => {
                onClose();
                navigate({ to: "/neuro-treino" });
              }}
              className="w-full bg-muted text-muted-foreground py-3 rounded-2xl font-bold flex items-center justify-center gap-2"
            >
              <Pause size={18} /> Pausar Sessão
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ====================================================================
// Renderizador — escolhe a mecânica única conforme a categoria
// ====================================================================
function MechanicRenderer({
  slug,
  variation,
  onConcluir,
  promptLevel,
}: {
  slug: CategoriaSlug;
  variation: any;
  onConcluir: (c: boolean) => void;
  promptLevel: import("@/services/neuro-treino/promptingEngine").PromptLevel;
}) {
  switch (slug) {
    case "sons-iniciais":
      return <SonsIniciais p={variation.payload} onDone={onConcluir} />;
    case "motorzinho-dos-sons":
      return <Motorzinho p={variation.payload} onDone={onConcluir} />;
    case "consciencia-fonologica":
      return <ConscienciaFonologica p={variation.payload} onDone={onConcluir} />;
    case "consciencia-silabica":
      return <ConscienciaSilabica p={variation.payload} onDone={onConcluir} />;
    case "compreensao-leitora":
      return <CompreensaoLeitora p={variation.payload} onDone={onConcluir} />;
    case "rimas":
      return <Rimas p={variation.payload} onDone={onConcluir} />;
    case "pedacinhos-da-palavra":
      return <Pedacinhos p={variation.payload} onDone={onConcluir} />;
    case "foco-sustentado":
    case "onde-esta":
      return <VigilanteNoturno p={variation.payload} onDone={onConcluir} />;

    case "sequencia-e-padrao":
      return <SequenciaPadrao p={variation.payload} onDone={onConcluir} />;
    case "cade-o-par":
      return <CadeOPar p={variation.payload} onDone={onConcluir} />;
    case "mosaico-de-formas":
      return <Mosaico p={variation.payload} onDone={onConcluir} />;
    case "sequencia-de-cores":
      return <SequenciaCores p={variation.payload} onDone={onConcluir} />;
    case "onomatopeias-animadas":
      return <Onomatopeias p={variation.payload} onDone={onConcluir} />;
    case "ritmo-e-sopro":
      return <RitmoSopro p={variation.payload} onDone={onConcluir} />;
    case "paromatopeias-corpo":
      return <SonsCorpo p={variation.payload} onDone={onConcluir} />;
    case "tracado-letras":
      return <TracadoLetras p={variation.payload} onDone={onConcluir} promptLevel={promptLevel} />;
    case "triagem-categorias":
      return <TriagemCategorias p={variation.payload} onDone={onConcluir} />;
    case "expressao-emocao":
      return <ExpressaoEmocao p={variation.payload} onDone={onConcluir} />;
    // FONO CLÍNICO
    case "discriminacao-auditiva":
      return <DiscriminacaoAuditiva p={variation.payload} onDone={onConcluir} />;
    case "articulacao-sons":
      return <ArticulacaoSons p={variation.payload} onDone={onConcluir} promptLevel={promptLevel} />;
    case "vocabulario-semantico":
      return <VocabularioSemantico p={variation.payload} onDone={onConcluir} />;
    case "nomeacao-rapida":
      return <NomeacaoRapida p={variation.payload} onDone={onConcluir} promptLevel={promptLevel} />;
    // COORDENAÇÃO MOTORA
    case "toque-sequencia":
      return <ToqueSequencia p={variation.payload} onDone={onConcluir} />;
    case "ritmo-batidas":
      return <RitmoBatidas p={variation.payload} onDone={onConcluir} />;
    case "copiar-figura":
      return <CopiarFigura p={variation.payload} onDone={onConcluir} />;
    case "alvo-movel":
      return <AlvoMovel p={variation.payload} onDone={onConcluir} />;
    // ATENÇÃO & CONCENTRAÇÃO
    case "achar-diferente":
      return <AcharDiferente p={variation.payload} onDone={onConcluir} />;
    case "memoria-visual":
      return <MemoriaVisual p={variation.payload} onDone={onConcluir} />;
    case "reacao-rapida":
      return <ReacaoRapida p={variation.payload} onDone={onConcluir} />;
    case "seguir-instrucao":
      return <SeguirInstrucao p={variation.payload} onDone={onConcluir} />;
    // ALFABETIZAÇÃO
    case "letra-som":
      return <LetraSom p={variation.payload} onDone={onConcluir} />;
    case "palavra-imagem":
      return <PalavraImagem p={variation.payload} onDone={onConcluir} />;
    case "formando-palavras":
      return <FormandoPalavras p={variation.payload} onDone={onConcluir} />;
    case "leitura-palavras":
      return <LeituraPalavras p={variation.payload} onDone={onConcluir} />;
    case "completar-letra":
      return <CompletarLetra p={variation.payload} onDone={onConcluir} />;
    case "ordem-inversa":
      return <OrdemInversa p={variation.payload} onDone={onConcluir} />;
    case "sinal-verde-vermelho":
      return <SinalVerdeVermelho p={variation.payload} onDone={onConcluir} />;
    // FASE 3B
    case "pares-sonoros":
      return <ParesSonoros p={variation.payload} onDone={onConcluir} />;
    case "sequencia-auditiva":
      return <SequenciaAuditiva p={variation.payload} onDone={onConcluir} />;
    // FASE 3C
    case "banquete-dos-dinos":
      return <BanqueteDinos p={variation.payload} onDone={onConcluir} />;
    case "trem-numerico":
      return <TremNumerico p={variation.payload} onDone={onConcluir} />;
    // FASE 3D
    case "troca-troca-regras":
      return <TrocaRegras p={variation.payload} onDone={onConcluir} />;
    // FASE 3F
    case "ponte-de-blocos":
      return <PonteBlocos p={variation.payload} onDone={onConcluir} />;
    // FASE 4 - Oficina Criativa
    case "quebra-cabeca-magico":
      return <QuebraCabecaMagico p={variation.payload} onDone={onConcluir} />;
    case "construtor-de-formas":
      return <ConstrutorDeFormas p={variation.payload} onDone={onConcluir} />;
    case "estudio-arte-contorno":
      return <EstudioArteContorno p={variation.payload} onDone={onConcluir} />;
    default:
      return (
        <div className="text-center p-8 bg-background/50 rounded-3xl border-2 border-dashed border-muted-foreground/30">
          <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-bold text-muted-foreground">Mecânica não encontrada</h3>
          <p className="text-sm text-muted-foreground/70">A categoria "{slug}" não pôde ser renderizada.</p>
        </div>
      );
  }
}

// ============== 1. Sons Iniciais ==============
function SonsIniciais({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const hoverCls = sens.reduceMotion ? "hover:border-primary" : "hover:border-primary hover:scale-105";
  const imgSize = sens.largerTargets
    ? "w-28 h-28 md:w-32 md:h-32"
    : "w-24 h-24 md:w-28 md:h-28";
  const emojiSize = sens.largerTargets ? "w-28 h-28" : "w-24 h-24";
  return (
    <div className="text-center">
      <div className="text-7xl font-black text-primary mb-6">{p.letra}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((o: any, i: number) => {
          const img = objetoImg(o.nome);
          return (
            <button
              key={i}
              onClick={() => onDone(o.nome === p.correctName)}
              className={`bg-card border-2 border-border rounded-2xl p-4 transition-all flex flex-col items-center gap-2 ${hoverCls}`}
            >
              {img ? (
                <img
                  src={img}
                  alt={o.nome}
                  width={128}
                  height={128}
                  loading="lazy"
                  className={`${imgSize} object-contain drop-shadow-md`}
                />
              ) : (
                <RenderEmoji e={o.emoji} label={o.nome} className={emojiSize} />
              )}
              <div className="font-bold text-sm">{o.nome}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}


// ============== Consciência Fonológica (5 sub-tarefas, padrão 2D) ==============
function ConscienciaFonologica({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const hoverCls = sens.reduceMotion ? "hover:border-primary" : "hover:border-primary hover:scale-105";
  const imgSize = sens.largerTargets ? "w-28 h-28 md:w-32 md:h-32" : "w-24 h-24 md:w-28 md:h-28";
  const headers: Record<string, string> = {
    inicial: `Qual começa com a letra ${p.letra}?`,
    final: `Qual termina com a letra ${p.letra}?`,
    silabas: `Qual palavra tem ${p.n} pedacinhos?`,
    rima: `Qual palavra rima com ${p.palavra}?`,
    juncao: `Junte os pedacinhos: ${(p.partes || []).join(" + ")}`,
  };
  const tipoLabel: Record<string, string> = {
    inicial: "Som Inicial",
    final: "Som Final",
    silabas: "Sílabas",
    rima: "Rima",
    juncao: "Junção",
  };

  return (
    <div className="text-center">
      <div className="inline-block px-4 py-1 mb-3 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider">
        {tipoLabel[p.tipo] || p.tipo}
      </div>
      <div className="text-2xl md:text-3xl font-black mb-6 text-foreground">{headers[p.tipo]}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((o: any, i: number) => {
          const img = objetoImg(o.nome);
          return (
            <button
              key={i}
              onClick={() => onDone(o.nome === p.correctName)}
              className={`bg-card border-2 border-border rounded-2xl p-4 transition-all flex flex-col items-center gap-2 ${hoverCls}`}
            >
              {img ? (
                <img
                  src={img}
                  alt={o.nome}
                  width={128}
                  height={128}
                  loading="lazy"
                  className={`${imgSize} object-contain drop-shadow-md`}
                />
              ) : (
                <div className={`${imgSize} grid place-items-center rounded-xl bg-muted text-2xl font-black text-muted-foreground`}>
                  {o.nome.slice(0, 2)}
                </div>
              )}

              <div className="font-bold text-sm">{o.nome}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============== Consciência Silábica (4 sub-tarefas, padrão 2D) ==============
function ConscienciaSilabica({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const hoverCls = sens.reduceMotion ? "hover:border-primary" : "hover:border-primary hover:scale-105";
  const imgSize = sens.largerTargets ? "w-28 h-28 md:w-32 md:h-32" : "w-24 h-24 md:w-28 md:h-28";
  const headers: Record<string, string> = {
    contar: `Qual palavra tem ${p.n} pedacinhos?`,
    inicial: `Qual começa com a sílaba ${p.silaba}?`,
    final: `Qual termina com a sílaba ${p.silaba}?`,
    formar: `Junte as sílabas: ${(p.partes || []).join(" + ")}`,
  };
  const tipoLabel: Record<string, string> = {
    contar: "Contar Sílabas",
    inicial: "Sílaba Inicial",
    final: "Sílaba Final",
    formar: "Formar Palavra",
  };

  return (
    <div className="text-center">
      <div className="inline-block px-4 py-1 mb-3 rounded-full bg-coral/15 text-coral text-xs font-extrabold uppercase tracking-wider">
        {tipoLabel[p.tipo] || p.tipo}
      </div>
      <div className="text-2xl md:text-3xl font-black mb-6 text-foreground">{headers[p.tipo]}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((o: any, i: number) => {
          const img = objetoImg(o.nome);
          return (
            <button
              key={i}
              onClick={() => onDone(o.nome === p.correctName)}
              className={`bg-card border-2 border-border rounded-2xl p-4 transition-all flex flex-col items-center gap-2 ${hoverCls}`}
            >
              {img ? (
                <img
                  src={img}
                  alt={o.nome}
                  width={128}
                  height={128}
                  loading="lazy"
                  className={`${imgSize} object-contain drop-shadow-md`}
                />
              ) : (
                <div className={`${imgSize} grid place-items-center rounded-xl bg-muted text-2xl font-black text-muted-foreground`}>
                  {o.nome.slice(0, 2)}
                </div>
              )}

              <div className="font-bold text-sm">{o.nome}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============== Compreensão Leitora (literal / inferencial / interpretativa) ==============
function CompreensaoLeitora({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const hoverCls = sens.reduceMotion ? "hover:border-primary" : "hover:border-primary hover:scale-[1.02]";
  const optPad = sens.largerTargets ? "px-5 py-5 text-lg" : "px-4 py-3";
  const badgeSize = sens.largerTargets ? "w-9 h-9 text-base" : "w-7 h-7 text-sm";
  const tipoLabel: Record<string, string> = {
    literal: "Pergunta Literal",
    inferencial: "Pergunta Inferencial",
    interpretativa: "Pergunta Interpretativa",
  };

  const tipoCor: Record<string, string> = {
    literal: "bg-sky-100 text-sky-700",
    inferencial: "bg-violet-100 text-violet-700",
    interpretativa: "bg-amber-100 text-amber-700",
  };
  const nivelLabel = ["", "Nível 1 · Iniciante", "Nível 2 · Intermediário", "Nível 3 · Avançado"];
  const textoClasse =
    p.nivel === 1
      ? "text-2xl md:text-3xl leading-snug"
      : p.nivel === 2
        ? "text-lg md:text-xl leading-relaxed"
        : "text-base md:text-lg leading-relaxed";

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-wrap items-center gap-2 mb-3 justify-center">
        <span
          className={`inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${tipoCor[p.tipo] || "bg-muted text-muted-foreground"}`}
        >
          {tipoLabel[p.tipo] || p.tipo}
        </span>
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-700">
          {nivelLabel[p.nivel] || `Nível ${p.nivel}`}
        </span>
      </div>

      <div
        className={`bg-card border-2 border-border rounded-2xl p-5 mb-5 font-bold text-foreground ${textoClasse}`}
      >
        {p.texto}
      </div>

      <div className="text-xl md:text-2xl font-black mb-4 text-center text-foreground">
        {p.pergunta}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {p.opcoes.map((op: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(i === p.correta)}
            className={`text-left bg-card border-2 border-border rounded-2xl ${optPad} transition-all font-bold text-foreground ${hoverCls}`}
          >
            <span className={`inline-flex items-center justify-center ${badgeSize} rounded-full bg-primary/10 text-primary font-black mr-2`}>
              {String.fromCharCode(65 + i)}
            </span>
            {op}
          </button>

        ))}
      </div>
    </div>
  );
}

// ============== 2. Motorzinho dos Sons (Clínico Fono + Voz IA + Mic) ==============
function Motorzinho({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const press = sens.reduceMotion ? "" : "active:scale-95";
  const pulseCls = sens.reduceMotion ? "" : "animate-pulse";
  const imgSize = sens.largerTargets ? "w-56 h-56 sm:w-64 sm:h-64" : "w-48 h-48 sm:w-56 sm:h-56";
  const ctaPad = sens.largerTargets ? "px-12 py-7 text-2xl" : "px-10 py-6 text-xl";
  const micPad = sens.largerTargets ? "px-10 py-6 text-xl" : "px-8 py-5 text-lg";
  const { hiperfoco } = useHiperfoco();
  const { activeChild } = useAppState();
  const nome = activeChild?.nome?.split(" ")[0] || "amigão";


  const tag: MotorzinhoTag = (() => {
    const id = hiperfoco?.id;
    if (id === "minecraft") return "minecraft";
    if (id === "dinossauros") return "dinossauros";
    if (id === "herois") return "herois";
    return "geral";
  })();

  const bank = MOTORZINHO_BANK[tag];
  const item = bank[(p.bankIndex ?? 0) % bank.length];

  const { speak, isSpeaking } = usePipVoice();
  const { listen, isListening, supported: micSupported } = useSpeechMatcher();

  const [phase, setPhase] = useState<"idle" | "demo" | "your-turn" | "listening" | "result">(
    "idle",
  );
  const [lastTranscript, setLastTranscript] = useState<string>("");
  const [lastMatched, setLastMatched] = useState<boolean | null>(null);

  // PIP demonstra: "P, P, P, P... princesa!"
  const fraseDemo = `${item.texto_prolongado.replace(/\s+/g, ", ")}... ${item.palavra_alvo}!`;
  const fraseAbertura = `Vamos ligar o motorzinho, ${nome}? Escuta a professora: ${fraseDemo} Agora é a sua vez!`;

  const iniciarDemo = async () => {
    setPhase("demo");
    setLastTranscript("");
    setLastMatched(null);
    await speak(fraseAbertura);
    setPhase("your-turn");
  };

  const ouvirCrianca = async () => {
    setPhase("listening");
    const res = await listen(item.palavra_alvo, { timeoutMs: 7000 });
    setLastTranscript(res.transcript);
    setLastMatched(res.matched);
    setPhase("result");
    if (res.matched) {
      await speak(`Boa, ${nome}! Você falou ${item.palavra_alvo} certinho!`);
    } else if (res.transcript) {
      await speak(`Quase, ${nome}! Vamos tentar de novo. ${item.palavra_alvo}.`);
    } else {
      await speak(`Não consegui te ouvir. Aperta o microfone e fala ${item.palavra_alvo}.`);
    }
  };

  const pipMsg = (() => {
    if (phase === "idle") return `Vamos ligar o motorzinho, ${nome}?`;
    if (phase === "demo")
      return `Escuta a professora falando o som da letra ${item.letra_fonema}...`;
    if (phase === "your-turn")
      return `Agora é a sua vez, ${nome}! Aperta o microfone e fala: ${item.palavra_alvo}`;
    if (phase === "listening") return `Tô te ouvindo... fala alto: ${item.palavra_alvo}!`;
    if (lastMatched) return `Boa, ${nome}! Falou ${item.palavra_alvo} certinho!`;
    return `Quase! Vamos repetir o som "${item.letra_fonema}" e a palavra ${item.palavra_alvo}.`;
  })();

  return (
    <div className="text-center">
      <div className="flex items-start gap-3 mb-6 text-left">
        <div className="shrink-0">
          {ilustracao(undefined, hiperfoco?.id === "minecraft" ? "CREEPER" : "LEÃO") ? (
            <img
              src={ilustracao(undefined, hiperfoco?.id === "minecraft" ? "CREEPER" : "LEÃO")}
              className="w-16 h-16 object-contain"
              alt=""
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30" />
          )}
        </div>
        <div className="relative bg-card border-2 border-primary/30 rounded-2xl px-4 py-3 shadow-sm flex-1">
          <div className="absolute -left-2 top-4 w-3 h-3 bg-card border-l-2 border-b-2 border-primary/30 rotate-45" />
          <div className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
            PIP – Professora {isSpeaking && <Volume2 size={12} className={pulseCls} />}
          </div>
          <p className="text-base font-bold text-foreground">{pipMsg}</p>
        </div>
      </div>

      {/* Área central: imagem GRANDE em primeiro plano (a criança não lê — associa pela imagem) + som da letra */}
      <div className="min-h-[280px] flex flex-col items-center justify-center mb-6 gap-4">
        <div className="relative">
          <RenderEmoji
            e={item.imagem_url_ou_emoji}
            label={item.palavra_alvo}
            className={`${imgSize} drop-shadow-2xl animate-fade-in`}
          />
          {(phase === "your-turn" || phase === "listening") && (
            <div className={`absolute -inset-3 rounded-full border-4 border-primary/40 ${pulseCls} pointer-events-none`} />
          )}
        </div>
        <div className="text-7xl sm:text-8xl font-black text-coral select-none leading-none tracking-wide">
          {item.letra_fonema}
          <span className="text-2xl sm:text-3xl text-muted-foreground ml-2">
            {item.texto_prolongado.toLowerCase()}
          </span>
        </div>
        {phase === "result" && lastTranscript && (
          <div
            className={`text-sm font-bold px-3 py-1 rounded-full ${lastMatched ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}
          >
            Você disse: "{lastTranscript}"
          </div>
        )}
      </div>

      {/* Aviso se mic não suportado */}
      {!micSupported && phase === "your-turn" && (
        <div className="mb-4 text-xs text-muted-foreground bg-muted/50 rounded-lg p-2 max-w-md mx-auto flex items-center gap-2 justify-center">
          <AlertCircle size={14} /> Seu navegador não suporta reconhecimento de voz. Use Chrome,
          Edge ou Safari.
        </div>
      )}

      {/* Botões da fase */}
      {phase === "idle" && (
        <button
          onClick={iniciarDemo}
          disabled={isSpeaking}
          className={`bg-gradient-to-br from-coral to-coral/80 text-white ${ctaPad} rounded-full font-black shadow-xl ${press} border-4 border-white inline-flex items-center gap-3 disabled:opacity-60`}
        >
          <Sparkles size={28} /> LIGAR MOTORZINHO
        </button>
      )}

      {phase === "demo" && (
        <div className={`text-sm font-bold text-primary ${pulseCls} flex items-center justify-center gap-2`}>
          <Volume2 size={16} /> Professora falando...
        </div>
      )}

      {(phase === "your-turn" || phase === "result") && (
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={ouvirCrianca}
            disabled={isListening || isSpeaking || !micSupported}
            className={`bg-gradient-to-br from-primary to-primary/80 text-primary-foreground ${micPad} rounded-full font-black shadow-xl ${press} border-4 border-white inline-flex items-center gap-3 disabled:opacity-60`}
          >
            <Mic size={22} /> {phase === "result" ? "Falar de novo" : "Minha vez de falar"}
          </button>
          <button
            onClick={() => speak(fraseDemo)}
            disabled={isSpeaking || isListening}
            className="bg-muted text-foreground px-5 py-3 rounded-xl font-bold inline-flex items-center gap-2 disabled:opacity-60"
          >
            <Volume2 size={16} /> Ouvir de novo
          </button>
          {phase === "result" && (
            <button
              onClick={() => onDone(Boolean(lastMatched))}
              className={`px-8 py-3 rounded-xl font-black shadow-lg text-white ${lastMatched ? "bg-success" : "bg-coral"}`}
            >
              {lastMatched ? "Mandei bem! ⭐" : "Próximo"}
            </button>
          )}
        </div>
      )}

      {phase === "listening" && (
        <div className={`inline-flex items-center gap-3 bg-primary/10 border-2 border-primary text-primary px-6 py-4 rounded-full font-black ${pulseCls}`}>
          <MicOff size={22} /> Ouvindo... fala agora!
        </div>
      )}
    </div>
  );
}

// ============== 3. Rimas ==============

function Rimas({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const hoverCls = sens.reduceMotion ? "hover:border-coral" : "hover:border-coral hover:scale-105";
  const palavraImg = sens.largerTargets ? "w-24 h-24" : "w-20 h-20";
  const optImg = sens.largerTargets ? "w-20 h-20" : "w-16 h-16";
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Que palavra rima com</div>
      <div className="text-5xl font-black text-coral mb-6 flex items-center justify-center gap-4">
        {p.palavra}
        {objetoImg(p.palavra) && (
          <img src={objetoImg(p.palavra)} className={`${palavraImg} object-contain drop-shadow-sm`} />
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((o: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(o === p.correta)}
            className={`bg-card border-2 border-border rounded-xl py-6 px-4 font-black text-xl transition-all flex flex-col items-center gap-2 ${hoverCls}`}
          >
            {objetoImg(o) && <img src={objetoImg(o)} className={`${optImg} object-contain`} />}
            <span>{o}</span>
          </button>
        ))}
      </div>
    </div>
  );
}


// ============== 4. Pedacinhos da Palavra ==============
function Pedacinhos({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [claps, setClaps] = useState(0);
  const palavraImg = sens.largerTargets ? "w-24 h-24" : "w-20 h-20";
  const silabaCls = sens.largerTargets ? "px-6 py-3 text-lg" : "px-4 py-2";
  const btnCls = sens.largerTargets ? "px-14 py-10" : "px-12 py-8";
  const btnPress = sens.reduceMotion ? "" : "active:scale-95";
  return (
    <div className="text-center">
      <div className="text-5xl font-black mb-4 flex items-center justify-center gap-4">
        {p.palavra}
        {objetoImg(p.palavra) && (
          <img src={objetoImg(p.palavra)} className={`${palavraImg} object-contain drop-shadow-sm`} />
        )}
      </div>
      <div className="flex justify-center gap-2 mb-6">
        {p.silabas.map((s: string, i: number) => (
          <div
            key={i}
            className={`${silabaCls} rounded-xl font-bold ${i < claps ? "bg-success text-white" : "bg-muted"}`}
          >
            {s}
          </div>
        ))}
      </div>
      <button
        onClick={() => setClaps((c) => c + 1)}
        className={`bg-coral text-white ${btnCls} rounded-2xl shadow-lg ${btnPress} mb-4 flex items-center gap-3 mx-auto`}
      >
        <Hand size={sens.largerTargets ? 48 : 40} />
        <span className="text-2xl font-black">BATER PALMA</span>
      </button>

      <div className="text-muted-foreground mb-4">
        Palmas: <b>{claps}</b>
      </div>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setClaps(0)}
          className="bg-muted px-4 py-2 rounded-xl font-bold flex items-center gap-1"
        >
          <RotateCcw size={14} /> Recomeçar
        </button>
        <button
          onClick={() => onDone(claps === p.total)}
          className="bg-success text-white px-6 py-2 rounded-xl font-bold"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

// ============== 5. Onde Está ==============
function OndeEsta({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const cols = Math.ceil(Math.sqrt(p.grid.length));
  const alvoSize = sens.largerTargets ? "w-24 h-24" : "w-20 h-20";
  const hoverCls = sens.reduceMotion ? "hover:border-primary" : "hover:border-primary hover:scale-105";
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Encontre:</div>
      <div className="mb-4 flex justify-center">
        <RenderEmoji e={p.alvo} className={alvoSize} />
      </div>
      <div
        className="grid gap-2 mx-auto"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, maxWidth: cols * 72 }}
      >
        {p.grid.map((e: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(i === p.correctIndex)}
            className={`aspect-square p-1.5 bg-card border-2 border-border rounded-lg transition-all flex items-center justify-center ${hoverCls}`}
          >
            <RenderEmoji e={e} className="w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ============== 6. Sequência e Padrão ==============
function SequenciaPadrao({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  
  // Real randomness for sequence and patterns: 
  // We can shuffle the options to ensure the correct answer isn't always in the same place
  const shuffledOpts = useMemo(() => {
    return [...p.opts].sort(() => Math.random() - 0.5);
  }, [p.opts]);

  const seqSize = sens.largerTargets ? "w-24 h-24" : "w-20 h-20";
  const optSize = sens.largerTargets ? "w-28 h-28 md:w-32 md:h-32" : "w-24 h-24 md:w-28 md:h-28";
  const imgSize = sens.largerTargets ? "w-20 h-20" : "w-16 h-16";
  const hoverCls = sens.reduceMotion ? "hover:border-primary" : "hover:border-primary hover:scale-110 active:scale-95";

  return (
    <div className="text-center w-full max-w-2xl mx-auto space-y-8">
      <div className="bg-white/60 backdrop-blur-md rounded-[3rem] p-8 border-4 border-primary/10 shadow-xl">
        <div className="text-[10px] font-black uppercase tracking-widest text-primary/50 mb-6">
          QUAL VEM DEPOIS?
        </div>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {p.seq.map((s: string, i: number) => (
            <div
              key={i}
              className={`${seqSize} flex items-center justify-center bg-white rounded-[2rem] border-2 border-primary/5 shadow-md animate-in zoom-in duration-300`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <RenderEmoji e={s} className={imgSize} />
            </div>
          ))}
          <div className={`${seqSize} flex items-center justify-center bg-primary/5 rounded-[2rem] border-4 border-dashed border-primary/20 animate-pulse`}>
            <span className="text-primary/30 text-5xl font-black">?</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
        {shuffledOpts.map((o: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(o === p.next)}
            className={`${optSize} flex flex-col items-center justify-center bg-white border-4 border-transparent rounded-[2.5rem] transition-all shadow-xl hover:border-primary/30 ${hoverCls} active:shadow-sm`}
          >
            <RenderEmoji e={o} className={imgSize} />
            <div className="mt-2 w-8 h-1 bg-primary/10 rounded-full" />
          </button>
        ))}
      </div>
    </div>
  );
}




// ============== 7. Cadê o Par ==============
function CadeOPar({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const maxW = sens.largerTargets ? "max-w-lg" : "max-w-md";
  const qSize = sens.largerTargets ? "text-4xl" : "text-3xl";
  const cards = useMemo(() => {
    const dup = [...p.pares, ...p.pares].map((v, i) => ({ v, i, id: Math.random() }));
    return dup.sort(() => Math.random() - 0.5);
  }, [p]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  useEffect(() => {
    if (matched.length === p.pares.length) setTimeout(() => onDone(true), 400);
  }, [matched.length]);
  const handleClick = (idx: number) => {
    if (flipped.length === 2 || flipped.includes(idx) || matched.includes(cards[idx].v)) return;
    const next = [...flipped, idx];
    setFlipped(next);
    if (next.length === 2) {
      if (cards[next[0]].v === cards[next[1]].v) {
        setMatched((m) => [...m, cards[next[0]].v]);
        setTimeout(() => setFlipped([]), 500);
      } else setTimeout(() => setFlipped([]), 900);
    }
  };
  return (
    <div className={`grid grid-cols-3 sm:grid-cols-4 gap-4 ${maxW} mx-auto p-4 bg-white/40 backdrop-blur-sm rounded-[2.5rem] border-4 border-white shadow-xl`}>


      {cards.map((c, i) => {
        const show = flipped.includes(i) || matched.includes(c.v);
        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`aspect-square rounded-xl border-2 transition-all flex items-center justify-center p-2 ${show ? "bg-card border-primary" : "bg-gradient-to-br from-primary/30 to-primary/10 border-border"}`}
          >
            {show ? (
              <RenderEmoji e={c.v} className="w-full h-full" />
            ) : (
              <span className={`${qSize} text-primary/70 font-black`}>?</span>
            )}
          </button>
        );
      })}
    </div>
  );
}


// ============== 10. Vigilante Noturno (Foco Sustentado) ==============
function VigilanteNoturno({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  
  // Aleatoriedade real e densidade adaptativa
  const speedMul = sens.lowStim ? 1.6 : 1;
  const press = sens.reduceMotion ? "" : "active:scale-90 active:brightness-90 transition-all";
  const errorRing = sens.softColors ? "ring-amber-400 bg-amber-100/40" : "ring-destructive bg-destructive/10";
  const btnSize = sens.largerTargets ? "w-28 h-28 md:w-32 md:h-32" : "w-24 h-24 md:w-28 md:h-28";

  
  const [capturados, setCapturados] = useState<number[]>([]); 
  const [erros, setErros] = useState(0);
  const [piscarErro, setPiscarErro] = useState<number | null>(null);

  // Layout aleatório real para cada item vindo do banco
  const layout = useMemo(() => {
    return p.itens.map((_: any, i: number) => {
      return {
        topPct: 15 + Math.random() * 70, // Evitar topo/fundo extremo
        delay: Math.random() * 4,        // Atraso aleatório real
        reverse: Math.random() > 0.5,    // Sentido aleatório real
        dur: (p.flutuarMs / 1000) * (0.8 + Math.random() * 0.4) * speedMul, // Duração variável
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.itens, speedMul]);

  const alvoNome = p.alvo.nome;
  const alvosIdx = p.itens
    .map((it: any, i: number) => (it.nome === alvoNome ? i : -1))
    .filter((x: number) => x >= 0);
  const faltam = alvosIdx.length - capturados.length;

  useEffect(() => {
    if (faltam === 0 && alvosIdx.length > 0) {
      const t = setTimeout(() => onDone(erros <= alvosIdx.length), 700);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faltam]);

  const tocar = (i: number) => {
    if (capturados.includes(i)) return;
    const certa = p.itens[i].nome === alvoNome;
    if (certa) {
      setCapturados((c) => [...c, i]);
    } else {
      setErros((e) => e + 1);
      setPiscarErro(i);
      setTimeout(() => setPiscarErro(null), 400);
    }
  };


  return (
    <div className="space-y-4">
      <style>{`
        @keyframes foco-walk {
          0%   { transform: translateX(-110%) }
          50%  { transform: translateX(110%) }
          100% { transform: translateX(-110%) }
        }
        @keyframes foco-walk-rev {
          0%   { transform: translateX(110%) }
          50%  { transform: translateX(-110%) }
          100% { transform: translateX(110%) }
        }
      `}</style>

      <div className="bg-gradient-to-br from-violet/20 to-violet/5 border-2 border-violet/30 rounded-2xl p-4 text-center">
        <div className="text-xs uppercase text-muted-foreground mb-1">
          Toque em todos os <b>{p.alvo.nome}</b> que passarem
        </div>
        <div className="flex items-center justify-center gap-2 mt-1">
          <RenderEmoji e={p.alvo.emoji} className="w-12 h-12" />
          <div className="text-xl font-black">Faltam {faltam}/{alvosIdx.length}</div>
        </div>
      </div>

      <div className="relative w-full h-[440px] rounded-3xl border-4 border-sky-300 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 overflow-hidden shadow-inner">
        {/* nuvenzinhas (SVG cartoon) */}
        {[
          { top: "6%", left: "4%", scale: 1 },
          { top: "12%", left: "65%", scale: 1.3 },
          { top: "30%", left: "30%", scale: 0.9 },
          { top: "55%", left: "78%", scale: 1.1 },
        ].map((c, i) => (
          <svg
            key={i}
            viewBox="0 0 120 60"
            className="absolute pointer-events-none"
            style={{
              top: c.top,
              left: c.left,
              width: `${120 * c.scale}px`,
              height: `${60 * c.scale}px`,
              opacity: 0.92,
            }}
          >
            <g fill="white">
              <ellipse cx="35" cy="40" rx="28" ry="18" />
              <ellipse cx="65" cy="32" rx="30" ry="22" />
              <ellipse cx="92" cy="42" rx="22" ry="16" />
              <ellipse cx="55" cy="46" rx="34" ry="14" />
            </g>
          </svg>
        ))}
        {p.itens.map((item: any, i: number) => {
          const L = layout[i];
          const pego = capturados.includes(i);
          const erro = piscarErro === i;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${L.topPct}%`,
                left: 0,
                width: "100%",
                animation: `${L.reverse ? "foco-walk-rev" : "foco-walk"} ${L.dur}s ease-in-out ${L.delay}s infinite`,
              }}
            >
              <button
                disabled={pego}
                onClick={() => tocar(i)}
                className={`${btnSize} flex items-center justify-center ${press} transition drop-shadow-lg ${
                  pego
                    ? "opacity-30 grayscale"
                    : erro
                      ? `ring-4 rounded-full ${errorRing}`
                      : ""
                }`}
              >
                <RenderEmoji e={item.emoji} className="w-full h-full" />
              </button>
            </div>
          );
        })}
      </div>


      <div className="text-center text-sm text-muted-foreground">
        ✓ {capturados.length}/{alvosIdx.length} · ✕ enganos {erros}
      </div>
    </div>
  );
}


// ============== 12. Mosaico de Formas — tangram com SVG real ==============

/** Renders a geometric shape at the given coordinates in an SVG */
function ShapeEl({
  shape,
  x,
  y,
  w,
  h,
  color,
  opacity = 1,
  stroke,
  strokeDash,
}: {
  shape: ShapeType;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  opacity?: number;
  stroke?: string;
  strokeDash?: string;
}) {
  const commonProps = {
    fill: color,
    opacity,
    stroke: stroke ?? "none",
    strokeWidth: stroke ? 2 : 0,
    strokeDasharray: strokeDash,
  };
  switch (shape) {
    case "triangle-up":
      return (
        <polygon points={`${x + w / 2},${y} ${x},${y + h} ${x + w},${y + h}`} {...commonProps} />
      );
    case "triangle-down":
      return <polygon points={`${x},${y} ${x + w},${y} ${x + w / 2},${y + h}`} {...commonProps} />;
    case "triangle-left":
      return (
        <polygon points={`${x + w},${y} ${x + w},${y + h} ${x},${y + h / 2}`} {...commonProps} />
      );
    case "triangle-right":
      return <polygon points={`${x},${y} ${x},${y + h} ${x + w},${y + h / 2}`} {...commonProps} />;
    case "circle":
      return <ellipse cx={x + w / 2} cy={y + h / 2} rx={w / 2} ry={h / 2} {...commonProps} />;
    case "trapezoid": {
      const ind = Math.round(w * 0.15);
      return (
        <polygon
          points={`${x + ind},${y} ${x + w - ind},${y} ${x + w},${y + h} ${x},${y + h}`}
          {...commonProps}
        />
      );
    }
    default:
      return <rect x={x} y={y} width={w} height={h} rx={4} {...commonProps} />;
  }
}

/** Small piece card preview — renders the shape centred in a square SVG */
function PieceCard({
  piece,
  state,
  onClick,
}: {
  piece: MosaicoPiece;
  state: "idle" | "selected" | "wrong" | "placed";
  onClick: () => void;
}) {
  const { effective: sens } = useSensoryProfile();
  const pad = 10;
  const size = sens.largerTargets ? 92 : 72;
  const inner = size - pad * 2;
  const selectedScale = sens.reduceMotion ? "" : "scale-110";
  const idleHover = sens.reduceMotion ? "border-white/70" : "border-white/70 hover:scale-105 active:scale-95";
  const wrongRing = sens.softColors ? "ring-amber-400 border-amber-300" : "ring-red-500 border-red-400";
  const wrongShake = sens.reduceMotion ? "" : "animate-[wiggle_0.4s_ease]";

  const ringCls =
    state === "selected"
      ? `ring-4 ring-[#0d1f55] border-[#0d1f55] ${selectedScale} shadow-xl`
      : state === "wrong"
        ? `ring-4 ${wrongRing} ${wrongShake}`
        : state === "placed"
          ? "opacity-30 cursor-default"
          : idleHover;

  return (
    <button
      onClick={onClick}
      disabled={state === "placed"}
      className={`flex flex-col items-center gap-1 rounded-2xl border-[3px] p-1.5 shadow-md transition-all bg-white/90 ${ringCls}`}
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="shrink-0">
        <ShapeEl shape={piece.shape} x={pad} y={pad} w={inner} h={inner} color={piece.color} />
      </svg>
      <span className="text-[9px] font-black uppercase tracking-wide text-[#0d1f55]/70 leading-tight pb-0.5">
        {piece.label}
      </span>
    </button>
  );
}


function Mosaico({
  p,
  onDone,
}: {
  p: {
    figura: string;
    emoji: string;
    viewW: number;
    viewH: number;
    pieces: MosaicoPiece[];
    distractors: MosaicoPiece[];
  };
  onDone: (ok: boolean) => void;
}) {
  const correctIds = useMemo(() => new Set(p.pieces.map((pc) => pc.id)), [p.pieces]);

  // Shuffle pieces + distractors once
  const allBank = useMemo(() => {
    const arr = [...p.pieces, ...p.distractors];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [p.pieces, p.distractors]);

  const [placed, setPlaced] = useState<Set<number>>(new Set());
  const [selected, setSelected] = useState<number | null>(null);
  const [wrongId, setWrongId] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const handlePieceTap = (piece: MosaicoPiece) => {
    if (done) return;
    if (placed.has(piece.id)) return;

    if (correctIds.has(piece.id)) {
      // Correct piece!
      const next = new Set(placed).add(piece.id);
      setPlaced(next);
      setSelected(null);
      if (next.size === p.pieces.length) {
        setDone(true);
        setTimeout(() => onDone(true), 900);
      }
    } else {
      // Distractor
      setWrongId(piece.id);
      setTimeout(() => setWrongId(null), 450);
    }
  };

  const progress = placed.size / p.pieces.length;

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* ── MODELO REFERÊNCIA ── */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-amber-200 rounded-[2.5rem] p-4 shadow-xl shrink-0">
          <div className="text-[10px] font-black uppercase tracking-widest text-amber-700 text-center mb-3">
            MODELO — {p.emoji} {p.figura}
          </div>
          <div className="flex justify-center p-2 bg-white/40 rounded-3xl">
            <svg
              viewBox={`0 0 ${p.viewW} ${p.viewH}`}
              style={{
                width: 140,
                height: 140 * (p.viewH / p.viewW),
              }}
              className="drop-shadow-sm"
            >
              {p.pieces.map((pc) => (
                <ShapeEl
                  key={pc.id}
                  shape={pc.shape}
                  x={pc.x}
                  y={pc.y}
                  w={pc.w}
                  h={pc.h}
                  color={pc.color}
                />
              ))}
              {p.pieces.map((pc) => (
                <ShapeEl
                  key={`o${pc.id}`}
                  shape={pc.shape}
                  x={pc.x}
                  y={pc.y}
                  w={pc.w}
                  h={pc.h}
                  color="none"
                  stroke="rgba(0,0,0,0.1)"

                />
              ))}
            </svg>
          </div>
        </div>

        {/* ── ÁREA DE MONTAGEM ── */}
        <div className="relative w-full max-w-sm bg-white border-8 border-sky-100 rounded-[3rem] p-6 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
          <div className="absolute top-4 left-0 right-0 text-[10px] font-black uppercase tracking-widest text-sky-400 text-center z-10">
            MONTE AQUI!
          </div>
          
          <svg
            viewBox={`0 0 ${p.viewW} ${p.viewH}`}
            className="w-full h-full drop-shadow-md"
          >
            {/* Ghost outlines for unplaced */}
            {p.pieces
              .filter((pc) => !placed.has(pc.id))
              .map((pc) => (
                <ShapeEl
                  key={`ghost-${pc.id}`}
                  shape={pc.shape}
                  x={pc.x}
                  y={pc.y}
                  w={pc.w}
                  h={pc.h}
                  color="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeDash="4 2"
                  opacity={0.8}
                />
              ))}
            {/* Placed pieces */}
            {p.pieces
              .filter((pc) => placed.has(pc.id))
              .map((pc) => (
                <g key={`placed-${pc.id}`} className="animate-in zoom-in duration-300">
                  <ShapeEl shape={pc.shape} x={pc.x} y={pc.y} w={pc.w} h={pc.h} color={pc.color} />
                  <ShapeEl
                    shape={pc.shape}
                    x={pc.x}
                    y={pc.y}
                    w={pc.w}
                    h={pc.h}
                    color="none"
                    stroke="rgba(255,255,255,0.3)"

                  />
                </g>
              ))}
            {/* Celebration sparkles when done */}
            {done && (
              <g className="animate-bounce">
                <text x={p.viewW / 2} y={p.viewH / 2} textAnchor="middle" fontSize="30" dominantBaseline="central">
                  ⭐
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* ── BARRA DE PROGRESSO ── */}
      <div className="w-full max-w-md flex items-center gap-4 px-4">
        <div className="flex-1 h-4 bg-white/50 backdrop-blur-sm rounded-full overflow-hidden border-2 border-white shadow-inner">
          <div
            className="h-full bg-primary rounded-full transition-all duration-700 shadow-glow-sm"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="text-xs font-black text-primary/70 tabular-nums">
          {placed.size}/{p.pieces.length}
        </span>
      </div>

      {/* ── BANCO DE PEÇAS ── */}
      {!done && (
        <div className="w-full max-w-xl bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-6 border-2 border-white/60">
          <div className="text-[10px] font-black text-primary/50 text-center mb-4 uppercase tracking-widest">
            ESCOLHA AS PEÇAS PARA COMPLETAR!
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {allBank.map((piece) => (
              <PieceCard
                key={piece.id}
                piece={piece}
                state={placed.has(piece.id) ? "placed" : wrongId === piece.id ? "wrong" : "idle"}
                onClick={() => handlePieceTap(piece)}
              />
            ))}
          </div>
        </div>
      )}

      {done && (
        <div className="w-full max-w-md py-6 rounded-[2rem] bg-success/20 text-success font-black text-2xl text-center border-4 border-success/40 animate-in zoom-in shadow-xl">
          INCRIÍVEL! VOCÊ CONSEGUIU! 🎉
        </div>
      )}
    </div>
  );
}


// ============== 13. Sequência de Cores ==============
function SequenciaCores({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  
  // Aleatoriedade real: se não houver um "next" e "options" fixos no payload,
  // ou se quisermos forçar variedade, podemos re-embaralhar aqui.
  // Como o payload vem do variations.ts, vamos confiar no motor de lá,
  // mas garantir que as opções visuais sejam apresentadas de forma clara.

  const seqSize = sens.largerTargets ? "w-16 h-16" : "w-12 h-12";
  const optSize = sens.largerTargets ? "w-20 h-20 md:w-24 md:h-24" : "w-16 h-16 md:w-20 md:h-20";
  const hover = sens.reduceMotion ? "" : "hover:scale-110 active:scale-95";

  return (
    <div className="text-center w-full max-w-lg mx-auto">
      <div className="bg-white/50 backdrop-blur-sm rounded-[2rem] p-6 mb-8 border-2 border-primary/10 shadow-inner">
        <div className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-4">
          QUAL COR VEM DEPOIS?
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {p.sequencia.map((c: string, i: number) => (
            <div 
              key={i} 
              className={`${seqSize} rounded-2xl shadow-md border-2 border-white animate-in fade-in slide-in-from-bottom-2 duration-300`} 
              style={{ background: c, animationDelay: `${i * 100}ms` }} 
            />
          ))}
          <div className={`${seqSize} rounded-2xl border-4 border-dashed border-primary/30 flex items-center justify-center font-black text-primary/40 bg-primary/5 animate-pulse`}>
            ?
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {useMemo(() => [...p.options].sort(() => Math.random() - 0.5), [p.options]).map((c: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(c === p.next)}
            className={`${optSize} rounded-[2rem] shadow-xl ${hover} transition-all border-4 border-white active:shadow-inner`}
            style={{ background: c }}
          />
        ))}
      </div>

    </div>
  );
}





// ============== 16. Onomatopeias Animadas ==============
// Som textual + opções com ilustrações premium 2D (padrão Sons Iniciais)
function Onomatopeias({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const hover = sens.reduceMotion ? "hover:border-coral" : "hover:border-coral hover:scale-105";
  const imgSize = sens.largerTargets ? "w-28 h-28 md:w-32 md:h-32" : "w-24 h-24 md:w-28 md:h-28";
  return (
    <div className="text-center w-full max-w-2xl mx-auto">
      <div className="inline-block bg-white/80 backdrop-blur-md border-8 border-coral/20 rounded-[3rem] px-12 py-8 mb-10 shadow-2xl animate-in zoom-in duration-500">
        <div className="text-[10px] font-black uppercase text-coral/60 tracking-[0.2em] mb-3 flex items-center justify-center gap-2">
          <Volume2 size={16} /> QUAL ELEMENTO FAZ O SOM?
        </div>
        <div className="text-6xl font-black text-coral drop-shadow-sm">{p.som}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {p.options.map((o: any, i: number) => {
          const img = ilustracao(o.emoji, o.nome);
          return (
            <button
              key={i}
              onClick={() => onDone(o.nome === p.correctName)}
              className={`bg-white border-4 border-transparent rounded-[2.5rem] p-6 transition-all flex flex-col items-center gap-3 shadow-xl hover:border-coral/30 hover:shadow-coral/10 ${hover} active:shadow-inner`}
            >

              {img ? (
                <img
                  src={img}
                  alt={o.nome}
                  width={128}
                  height={128}
                  loading="lazy"
                  className={`${imgSize} object-contain drop-shadow-md`}
                />
              ) : (
                <RenderEmoji e={o.emoji} label={o.nome} className={imgSize} />
              )}
              <div className="font-bold text-xs">{o.nome}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}


// ============== 17. Ritmo e Sopro Visual (Microfone real) ==============
// A criança sopra/faz o som no microfone — o volume captado anima a cena (carrinho anda,
// vela apaga, balão sobe...). Sem botão "SOPRE AQUI": é a voz/sopro real que move tudo.
function RitmoSopro({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const press = sens.reduceMotion ? "" : "active:scale-95";
  const pulseCls = sens.reduceMotion ? "" : "animate-pulse";
  const ctaPad = sens.largerTargets ? "px-12 py-6 text-xl" : "px-10 py-5 text-lg";
  const [micOn, setMicOn] = useState(false);
  const [level, setLevel] = useState(0); // 0..1 volume instantâneo
  const [progress, setProgress] = useState(0); // 0..100
  const [erro, setErro] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const startedAtRef = useRef<number>(0);
  const blowMsRef = useRef<number>(0); // tempo acumulado soprando
  const lastTickRef = useRef<number>(0);
  const doneRef = useRef(false);

  const meta = p.holdSeconds * 1000; // ms necessários soprando

  const stop = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    audioCtxRef.current?.close().catch(() => {});
    audioCtxRef.current = null;
    analyserRef.current = null;
  };

  useEffect(() => () => stop(), []);

  const iniciar = async () => {
    setErro(null);
    doneRef.current = false;
    blowMsRef.current = 0;
    setProgress(0);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
      });
      streamRef.current = stream;
      const AC: typeof AudioContext =
        (window as any).AudioContext || (window as any).webkitAudioContext;
      const ctx = new AC();
      audioCtxRef.current = ctx;
      const src = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 1024;
      src.connect(analyser);
      analyserRef.current = analyser;
      setMicOn(true);
      startedAtRef.current = performance.now();
      lastTickRef.current = performance.now();

      const data = new Uint8Array(analyser.fftSize);
      const tick = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteTimeDomainData(data);
        // RMS
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          const v = (data[i] - 128) / 128;
          sum += v * v;
        }
        const rms = Math.sqrt(sum / data.length); // 0..~1
        const lvl = Math.min(1, rms * 4); // ganho
        setLevel(lvl);

        const now = performance.now();
        const dt = now - lastTickRef.current;
        lastTickRef.current = now;
        const threshold = 0.12; // limiar de sopro/voz
        if (lvl > threshold) {
          blowMsRef.current += dt * Math.min(2, lvl / threshold);
        } else {
          blowMsRef.current = Math.max(0, blowMsRef.current - dt * 0.3);
        }
        const pct = Math.min(100, (blowMsRef.current / meta) * 100);
        setProgress(pct);
        if (pct >= 100 && !doneRef.current) {
          doneRef.current = true;
          stop();
          setMicOn(false);
          setTimeout(() => onDone(true), 600);
          return;
        }
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    } catch (e: any) {
      setErro("Não consegui acessar o microfone. Permita o uso para soprar.");
    }
  };

  return (
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1 flex items-center justify-center gap-1">
        <Mic size={12} /> Sopre ou faça o som no microfone
      </div>
      <div className="text-4xl font-black text-coral mb-2">{p.silaba}</div>
      <div className="text-sm font-bold text-foreground mb-4">{p.instrucao}</div>

      <div className="mx-auto max-w-md mb-4">
        <CenaSopro cena={p.cena} progress={progress} level={level} />
      </div>

      {/* Medidor de volume */}
      <div className="mx-auto max-w-md mb-2">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 flex items-center justify-between">
          <span>Volume do sopro</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-sun via-coral to-primary transition-[width] duration-75"
            style={{ width: `${Math.min(100, level * 100)}%` }}
          />
        </div>
        <div className="h-2 bg-muted/60 rounded-full overflow-hidden mt-1">
          <div className="h-full bg-success transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {erro && (
        <div className="text-xs text-coral bg-coral/10 rounded-lg p-2 max-w-md mx-auto flex items-center gap-2 justify-center mb-3">
          <AlertCircle size={14} /> {erro}
        </div>
      )}

      {!micOn ? (
        <button
          onClick={iniciar}
          className={`bg-gradient-to-br from-primary to-primary/80 text-primary-foreground ${ctaPad} rounded-full font-black shadow-xl ${press} border-4 border-white inline-flex items-center gap-3`}
        >
          <Mic size={22} /> Ligar microfone
        </button>
      ) : (
        <div className={`inline-flex items-center gap-3 bg-primary/10 border-2 border-primary text-primary px-6 py-3 rounded-full font-black ${pulseCls}`}>
          <Mic size={20} /> Ouvindo... sopre agora!
        </div>
      )}

    </div>
  );
}

// Cenas animadas (imagens 2D) pela força do sopro
function CenaSopro({ cena, progress, level }: { cena: string; progress: number; level: number }) {
  const p = Math.min(100, progress);
  switch (cena) {
    case "carro":
      return (
        <div className="relative h-44 bg-gradient-to-b from-sky-100 to-emerald-100 rounded-2xl overflow-hidden border-2 border-border">
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-emerald-300/60" />
          <img
            src={soproCarro}
            alt="Carrinho"
            loading="lazy"
            className="absolute bottom-4 w-24 h-24 object-contain transition-all duration-150 drop-shadow-md"
            style={{ left: `${4 + p * 0.78}%` }}
          />
          <div className="absolute top-2 right-3 text-[10px] font-bold text-emerald-700">
            → Chegada
          </div>
        </div>
      );
    case "vela": {
      const flameOpacity = Math.max(0, 1 - p / 100);
      const flameScale = Math.max(0.2, 1 - p / 130);
      const sway = (level - 0.2) * 12;
      return (
        <div className="relative h-44 bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl overflow-hidden border-2 border-border flex items-end justify-center pb-2">
          <div className="relative">
            <img src={soproVela} alt="Vela" loading="lazy" className="w-32 h-32 object-contain" />
            {/* máscara para "apagar" a chama: cobre a parte de cima quando p sobe */}
            <div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-amber-50 to-transparent transition-all duration-150"
              style={{
                height: `${p * 0.45}%`,
                opacity: 1 - flameOpacity * 0.4,
                transform: `translateX(${sway}px)`,
              }}
            />
          </div>
          {p >= 100 && (
            <div className="absolute inset-x-0 top-2 text-center text-lg font-black text-emerald-600">
              Apagou!
            </div>
          )}
        </div>
      );
    }
    case "balao":
      return (
        <div className="relative h-52 bg-gradient-to-b from-sky-200 to-sky-50 rounded-2xl overflow-hidden border-2 border-border">
          <img
            src={soproBalao}
            alt="Balão"
            loading="lazy"
            className="absolute left-1/2 -translate-x-1/2 w-24 h-28 object-contain transition-all duration-150 drop-shadow-md"
            style={{
              bottom: `${4 + p * 0.78}%`,
              transform: `translateX(-50%) translateX(${(level - 0.3) * 14}px)`,
            }}
          />
        </div>
      );
    case "moinho": {
      const angle = p * 7.2;
      return (
        <div className="relative h-52 bg-gradient-to-b from-sky-100 to-emerald-100 rounded-2xl overflow-hidden border-2 border-border flex items-center justify-center">
          <img
            src={soproMoinho}
            alt="Moinho"
            loading="lazy"
            className="w-40 h-40 object-contain transition-transform duration-100"
            style={{ transform: `rotate(${angle}deg)` }}
          />
        </div>
      );
    }
    case "barco":
      return (
        <div className="relative h-44 bg-gradient-to-b from-sky-200 to-sky-400 rounded-2xl overflow-hidden border-2 border-border">
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-blue-600/70" />
          <img
            src={soproBarco}
            alt="Barco"
            loading="lazy"
            className="absolute bottom-6 w-24 h-24 object-contain transition-all duration-150 drop-shadow-md"
            style={{ left: `${4 + p * 0.78}%` }}
          />
        </div>
      );
    case "bolha": {
      const scale = 0.3 + (p / 100) * 1.1;
      return (
        <div className="relative h-52 bg-gradient-to-b from-pink-50 to-violet-100 rounded-2xl overflow-hidden border-2 border-border flex items-center justify-center">
          <img
            src={soproBolha}
            alt="Bolha"
            loading="lazy"
            className="w-40 h-40 object-contain transition-transform duration-100"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      );
    }
    default:
      return null;
  }
}

// ============== 18. Sons do Corpo / Paromatopeias ==============
// Mecânica única: som textual → escolher ação (texto + emoji)
function SonsCorpo({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const hover = sens.reduceMotion ? "hover:border-coral" : "hover:border-coral hover:scale-105";
  const imgSize = sens.largerTargets ? "w-20 h-20" : "w-16 h-16";
  return (
    <div className="text-center">
      <div className="text-xs uppercase text-muted-foreground tracking-widest mb-1 flex items-center justify-center gap-1">
        <Volume2 size={12} /> Ouça
      </div>
      <div className="text-5xl font-black text-coral mb-6">"{p.som}"</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.opts.map((o: string, i: number) => {
          const limpo = semEmoji(o);
          const parts = o.trim().split(/\s+/);
          const emoji = parts[0];
          return (
            <button
              key={i}
              onClick={() => onDone(o === p.correta)}
              className={`bg-card border-2 border-border rounded-xl py-5 px-3 font-bold text-lg transition-all flex flex-col items-center gap-2 ${hover}`}
            >
              <RenderEmoji e={emoji} label={limpo} className={imgSize} />
              <span>{limpo}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}


// ============== 19. Colorir a Letra ==============
// Letra oca grande + paleta de 12 cores (6 de cada lado). Criança escolhe cor e toca na letra para pintar.
const CORES_ESQ = [
  { nome: "Rosa",     hex: "#ec4899" },
  { nome: "Vermelho", hex: "#ef4444" },
  { nome: "Laranja",  hex: "#f97316" },
  { nome: "Amarelo",  hex: "#facc15" },
  { nome: "Verde",    hex: "#22c55e" },
  { nome: "Azul",     hex: "#3b82f6" },
];
const CORES_DIR = [
  { nome: "Roxo",    hex: "#a855f7" },
  { nome: "Ciano",   hex: "#06b6d4" },
  { nome: "Marrom",  hex: "#92400e" },
  { nome: "Preto",   hex: "#0f172a" },
  { nome: "Cinza",   hex: "#94a3b8" },
  { nome: "Pêssego", hex: "#fdba74" },
];

function TracadoLetras({ p, onDone, promptLevel }: any) {
  const [cor, setCor] = useState<string>(CORES_ESQ[0].hex);
  const [nomeCor, setNomeCor] = useState<string>(CORES_ESQ[0].nome);
  const [strokes, setStrokes] = useState<{ d: string; cor: string }[]>([]);
  const [drawing, setDrawing] = useState(false);
  const [checkpointIdx, setCheckpointIdx] = useState(0);
  const [foraDaLetra, setForaDaLetra] = useState(false);
  const [erroOrdem, setErroOrdem] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const clipId = `letra-clip-${p.letra}`;

  const checkpoints = useMemo(
    () => getLetterCheckpoints(p.letra),
    [p.letra],
  );
  const totalCheckpoints = checkpoints.length;
  const proximoCP = checkpoints[checkpointIdx];

  const escolher = (c: { nome: string; hex: string }) => {
    setCor(c.hex);
    setNomeCor(c.nome);
  };

  const getPt = (e: React.PointerEvent) => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const r = svg.getBoundingClientRect();
    return {
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    };
  };

  const dist = (a: { x: number; y: number }, b: { x: number; y: number }) =>
    Math.hypot(a.x - b.x, a.y - b.y);

  const validarPonto = (pt: { x: number; y: number }) => {
    // Se ainda faltam checkpoints, verificar se atingiu o próximo (raio 18).
    if (checkpointIdx >= totalCheckpoints) return;
    if (dist(pt, proximoCP) <= 18) {
      setCheckpointIdx((i) => i + 1);
      setErroOrdem(false);
    } else {
      // Pulou pra um checkpoint mais adiante = erro de ordem.
      for (let j = checkpointIdx + 1; j < totalCheckpoints; j++) {
        if (dist(pt, checkpoints[j]) <= 12) {
          setErroOrdem(true);
          return;
        }
      }
    }
  };

  const onDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    setDrawing(true);
    const pt = getPt(e);
    setStrokes((s) => [...s, { d: `M ${pt.x} ${pt.y}`, cor }]);
    validarPonto(pt);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drawing) return;
    const pt = getPt(e);
    // Detectar saída da letra (fora do bounding box aproximado)
    const foraX = pt.x < 15 || pt.x > 85;
    const foraY = pt.y < 10 || pt.y > 90;
    setForaDaLetra(foraX || foraY);
    setStrokes((s) => {
      const copy = s.slice();
      const last = copy[copy.length - 1];
      copy[copy.length - 1] = { ...last, d: `${last.d} L ${pt.x} ${pt.y}` };
      return copy;
    });
    validarPonto(pt);
  };
  const onUp = () => setDrawing(false);
  const limpar = () => {
    setStrokes([]);
    setCheckpointIdx(0);
    setForaDaLetra(false);
    setErroOrdem(false);
  };

  const completou = checkpointIdx >= totalCheckpoints;
  const acertouOrdem = completou && !erroOrdem;
  const progresso = Math.round((checkpointIdx / totalCheckpoints) * 100);

  useEffect(() => {
    if (completou) {
      setTimeout(() => onDone(acertouOrdem), 1000);
    }
  }, [completou, acertouOrdem, onDone]);


  const { effective: sens } = useSensoryProfile();
  const bolinhaSize = sens.largerTargets ? "w-12 h-12 md:w-14 md:h-14" : "w-10 h-10 md:w-12 md:h-12";
  const selectedScale = sens.reduceMotion ? "" : "scale-110";
  const hoverScale = sens.reduceMotion ? "" : "hover:scale-110";
  const Bolinha = ({ c }: { c: { nome: string; hex: string } }) => (
    <button
      onClick={() => escolher(c)}
      aria-label={c.nome}
      className={`${bolinhaSize} rounded-full border-4 transition-transform ${
        cor === c.hex ? `border-slate-900 ${selectedScale}` : "border-white"
      } shadow-md ${hoverScale}`}
      style={{ background: c.hex }}
    />
  );

  // Prompt ABA: quanto menor promptLevel, mais dicas visuais.
  const mostrarNumeros = promptLevel <= 3;
  const mostrarSetaProxima = promptLevel <= 2;
  const mostrarMaoGuia = promptLevel <= 1;

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Letra e Desenho Central */}
        <div
          className="bg-white border-8 border-sky-100 rounded-[3rem] p-4 shadow-2xl relative overflow-hidden"
          style={{ width: "100%", maxWidth: 420 }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            className="w-full touch-none select-none drop-shadow-sm"
            style={{ cursor: "crosshair" }}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
          >
            <defs>
              <clipPath id={clipId}>
                <text
                  x={50}
                  y={54}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={108}
                  fontWeight={900}
                  fontFamily='"Nunito","Quicksand","Comic Sans MS",system-ui,sans-serif'
                >
                  {p.letra}
                </text>
              </clipPath>
            </defs>

            {/* Letra-guia de fundo */}
            <text
              x={50}
              y={54}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={108}
              fontWeight={900}
              fontFamily='"Nunito","Quicksand","Comic Sans MS",system-ui,sans-serif'
              fill="#f8fafc"
              stroke="#e2e8f0"
              strokeWidth={1.5}
              strokeDasharray="3 3"
            >
              {p.letra}
            </text>

            {/* Tinta (Traçado do usuário) */}
            <g clipPath={`url(#${clipId})`}>
              {strokes.map((s, i) => (
                <path
                  key={i}
                  d={s.d}
                  stroke={s.cor}
                  strokeWidth={20}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              ))}
            </g>

            {/* Checkpoints ABA */}
            {mostrarNumeros &&
              checkpoints.map((cp, i) => {
                const feito = i < checkpointIdx;
                const atual = i === checkpointIdx;
                return (
                  <g key={i} className="transition-all duration-300">
                    <circle
                      cx={cp.x}
                      cy={cp.y}
                      r={atual ? 6 : 4}
                      fill={feito ? "#10b981" : atual ? "#f59e0b" : "#cbd5e1"}
                      stroke="white"
                      strokeWidth={1}
                    />
                    {atual && (
                      <circle
                        cx={cp.x}
                        cy={cp.y}
                        r={8}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth={1}
                        className="animate-ping"
                      />
                    )}
                  </g>
                );
              })}

            {/* Seta/Dica ABA */}
            {mostrarSetaProxima && !completou && (
              <circle
                cx={proximoCP.x}
                cy={proximoCP.y}
                r={10}
                fill="none"
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="4 2"
              >
                <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Guia física (mão) */}
            {mostrarMaoGuia && !completou && (
              <text x={proximoCP.x + 8} y={proximoCP.y - 8} fontSize={12} className="animate-bounce">
                👆
              </text>
            )}
          </svg>

          {/* Info embaixo da letra */}
          <div className="flex items-center justify-between px-4 py-3 bg-sky-50/50 rounded-2xl mt-4">
            <div className="font-black text-2xl tracking-tighter text-slate-800">
              <span style={{ color: cor }}>{p.letra}</span>
              <span>{p.palavra.slice(p.letra.length)}</span>
            </div>
            <div className="text-4xl drop-shadow-sm">{p.emoji}</div>
          </div>
          
          <button
            onClick={limpar}
            className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-sm active:scale-90 transition-all"
            aria-label="Limpar"
          >
            <RotateCcw size={20} className="text-slate-600" />
          </button>
        </div>
      </div>

      {/* Paleta de Cores Horizontal (Embaixo) */}
      <div className="w-full max-w-md flex flex-wrap justify-center gap-3 p-4 bg-white/40 backdrop-blur-sm rounded-[2rem] border-2 border-white/50">
        {[...CORES_ESQ, ...CORES_DIR].map((c) => (
          <button
            key={c.hex}
            onClick={() => escolher(c)}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-4 transition-all shadow-md active:scale-90 ${
              cor === c.hex ? "border-slate-800 scale-110 rotate-3" : "border-white hover:scale-105"
            }`}
            style={{ background: c.hex }}
            title={c.nome}
          />
        ))}
      </div>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-4">
        <button
          onClick={() => {
            if (acertouOrdem) {
              toast.success(`Letra ${p.letra} traçada na ordem certa! 🎨`);
              onDone(true);
            } else {
              toast(`Ainda faltam alguns pontos! Siga a ordem dos números.`);
              onDone(false);
            }
          }}
          disabled={!completou && checkpointIdx === 0}
          className="flex-1 py-4 bg-success text-white font-black text-xl rounded-[2rem] shadow-xl hover:shadow-success/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:scale-100"
        >
          TERMINEI! ✨
        </button>
      </div>

      {/* Mensagens de Feedback */}
      {foraDaLetra && (
        <div className="px-4 py-2 bg-amber-100 border-2 border-amber-300 text-amber-800 rounded-full text-xs font-black animate-bounce">
          FIQUE DENTRO DA LETRA! ✋
        </div>
      )}
      {erroOrdem && (
        <div className="px-4 py-2 bg-rose-100 border-2 border-rose-300 text-rose-800 rounded-full text-xs font-black">
          SIGA OS NÚMEROS NA ORDEM! 🔢
        </div>
      )}
    </div>
  );
}






// ============== 22. Triagem de Categorias ==============
// Mecânica única: arrastar itens para caixas; valida ao colocar todos
function TriagemCategorias({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [assigned, setAssigned] = useState<Record<number, string>>({}); // itemIndex → caixaName
  const [dragging, setDragging] = useState<number | null>(null);
  const drop = (caixa: string) => {
    if (dragging === null) return;
    setAssigned((a) => ({ ...a, [dragging]: caixa }));
    setDragging(null);
  };
  useEffect(() => {
    if (Object.keys(assigned).length === p.itens.length) {
      const acertou = p.itens.every((it: any, i: number) => assigned[i] === it.cat);
      onDone(acertou);
    }
  }, [assigned]);
  const itemSize = sens.largerTargets ? "w-20 h-20" : "w-16 h-16";
  const slotEmoji = sens.largerTargets ? "w-12 h-12" : "w-10 h-10";
  return (
    <div className="text-center">
      <div className="flex gap-3 justify-center mb-4 flex-wrap">
        {p.itens.map((it: any, i: number) => {
          if (assigned[i]) return null;
          return (
            <div
              key={i}
              draggable
              onDragStart={() => setDragging(i)}
              className={`p-2 bg-card border-2 border-border rounded-xl cursor-grab active:cursor-grabbing ${itemSize} flex items-center justify-center`}
            >
              <RenderEmoji e={it.e} className="w-full h-full" />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {p.caixas.map((c: any) => (
          <div
            key={c.nome}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => drop(c.nome)}
            className="min-h-[140px] bg-lilac/10 border-2 border-dashed border-lilac rounded-2xl p-3"
          >
            <div className="font-black mb-2 flex items-center justify-center gap-2">
              <RenderEmoji e={c.emoji} label={c.nome} className={slotEmoji} />
              {c.nome}
            </div>
            <div className="flex flex-wrap gap-1 justify-center">
              {p.itens.map((it: any, i: number) => {
                if (assigned[i] !== c.nome) return null;
                return <RenderEmoji key={i} e={it.e} className={slotEmoji} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============== 23. Expressão e Emoção ==============
function ExpressaoEmocao({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const emojiSize = sens.largerTargets ? "w-24 h-24" : "w-20 h-20";
  const hover = sens.reduceMotion ? "hover:border-lilac" : "hover:border-lilac hover:scale-105";
  return (
    <div className="text-center">
      <div className="bg-card border-2 border-border rounded-2xl p-6 mb-6">
        <div className="text-xs uppercase text-muted-foreground mb-2">Situação</div>
        <div className="text-xl font-bold">{semEmoji(p.cena)}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.opts.map((o: string, i: number) => {
          const limpo = semEmoji(o);
          const emoji = o.trim().split(/\s+/)[0];
          return (
            <button
              key={i}
              onClick={() => onDone(o === p.correta)}
              className={`bg-card border-2 border-border rounded-2xl py-6 px-3 font-black text-lg ${hover} transition-all flex flex-col items-center gap-2`}
            >
              <RenderEmoji e={emoji} label={limpo} className={emojiSize} />
              <span>{limpo}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ================================================================
// NOVOS MECÂNICOS CLÍNICOS
// ================================================================

// ── FONO CLÍNICO ──────────────────────────────────────────────

// 24. DISCRIMINAÇÃO AUDITIVA — par mínimo: vê/ouve palavra → escolhe figura
function DiscriminacaoAuditiva({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [escolhida, setEscolhida] = useState<string | null>(null);
  const handleClick = (palavra: string) => {
    if (escolhida) return;
    setEscolhida(palavra);
    setTimeout(() => onDone(palavra === p.correta), 700);
  };
  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-20 h-20" : "w-16 h-16";
  return (
    <div className="text-center space-y-6">
      <div className="bg-gradient-to-br from-rose/20 to-rose/5 border-2 border-rose/30 rounded-3xl p-6">
        <div className="text-xs uppercase text-muted-foreground mb-1">Ouça e escolha</div>
        <div className="text-4xl font-black tracking-wide text-rose-600">{p.pista}</div>
        <div className="text-sm text-muted-foreground mt-2">Qual figura tem o nome certo?</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {p.ordem.map((palavra: string, i: number) => {
          const emoji = p.ordem[i] === p.par1 ? p.emoji1 : p.emoji2;
          const certa = palavra === p.correta;
          const bg =
            escolhida === palavra
              ? certa
                ? "border-success bg-success/10"
                : errorBg
              : "border-border bg-card hover:border-rose/60";
          return (
            <button
              key={i}
              onClick={() => handleClick(palavra)}
              className={`rounded-3xl border-2 p-5 flex flex-col items-center gap-3 transition-all font-black text-lg ${bg}`}
            >
              <RenderEmoji e={emoji} label={palavra} className={imgSize} />
              <span>{palavra}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}


// 25. ARTICULAÇÃO DE SONS — SIMPLES, sem exigir perfeição.
// Criança aperta o mic, vê as sílabas acendendo uma a uma enquanto fala.
// Detecta SOM no microfone (volume), não palavras → reconhece na hora.
// Sempre celebra. Sem reconhecimento de voz que demora e frustra.
function ArticulacaoSons({ p, onDone, promptLevel }: any) {
  const { effective: sens } = useSensoryProfile();
  const { speak } = usePipVoice();
  const { listen, isListening, supported } = useSpeechMatcher();
  const press = sens.reduceMotion ? "" : "active:scale-95";
  const pulseCls = sens.reduceMotion ? "" : "animate-pulse";
  const scaleCls = sens.reduceMotion ? "" : "scale-110";
  const emojiSize = sens.largerTargets ? "w-32 h-32" : "w-28 h-28";
  const palavra: string = p.palavra;
  const silabas: string[] = p.silabas;

  const [acesas, setAcesas] = useState<Set<number>>(new Set());
  const [feedback, setFeedback] = useState(
    supported
      ? "Toque no microfone e fale a palavra 🎤"
      : "Seu aparelho não reconhece voz — tentaremos por volume",
  );
  const [tentativas, setTentativas] = useState(0);
  const [done, setDone] = useState(false);
  const [celebrar, setCelebrar] = useState(false);
  const [ultimaSim, setUltimaSim] = useState<number | null>(null);

  const PRAISES = ["Muito bem! 🌟", "Isso aí! 👏", "Mandou bem! 💪", "Você arrasou! ✨"];

  // Dicas ABA
  const mostrarSilabas = promptLevel <= 3;
  const modeloAudio = promptLevel <= 2;
  const guiaFala = promptLevel <= 1;

  useEffect(() => {
    if (modeloAudio && !done) {
      // Fala a palavra devagar antes de a criança tentar
      const t = setTimeout(() => speak(palavra), 400);
      return () => clearTimeout(t);
    }
  }, [modeloAudio, palavra, done, speak]);

  const celebrarPalavra = () => {
    setAcesas(new Set(silabas.map((_, i) => i)));
    setCelebrar(true);
    setFeedback(PRAISES[Math.floor(Math.random() * PRAISES.length)]);
    setDone(true);
    setTimeout(() => onDone(true), 1400);
  };

  const gravar = async () => {
    if (done || isListening) return;
    setFeedback("Estou ouvindo... fale a palavra 🎧");
    setAcesas(new Set());
    setTentativas((n) => n + 1);

    const result = await listen(palavra, { timeoutMs: 5000 });
    setUltimaSim(result.similarity);

    if (result.matched) {
      // Acende sílabas em sequência antes de celebrar
      silabas.forEach((_, i) => {
        setTimeout(() => {
          setAcesas((prev) => {
            const n = new Set(prev);
            n.add(i);
            return n;
          });
        }, i * 300);
      });
      setTimeout(celebrarPalavra, silabas.length * 300 + 200);
    } else {
      const sim = Math.round(result.similarity * 100);
      const transcricao = result.transcript || "(não entendi)";
      setFeedback(
        supported
          ? `Ouvi "${transcricao}" (${sim}%). Tenta de novo devagar 🎯`
          : "Seu navegador não reconheceu — tenta de novo",
      );
      // 3 erros = considera errado e avança
      if (tentativas >= 2) {
        setDone(true);
        setTimeout(() => onDone(false), 1200);
      }
    }
  };

  return (
    <div className="text-center space-y-5">
      <div className={`flex justify-center transition-transform ${celebrar ? scaleCls : ""}`}>
        <RenderEmoji
          e={p.emoji}
          className={`${emojiSize} ${celebrar ? "drop-shadow-[0_0_25px_rgba(244,63,94,0.6)]" : ""}`}
        />
      </div>
      {mostrarSilabas && (
        <div className="text-4xl font-black tracking-widest flex justify-center gap-2">
          {silabas.map((s, i) => {
            const acesa = acesas.has(i);
            return (
              <span
                key={i}
                className={`px-3 py-1 rounded-xl transition-all duration-300 ${
                  celebrar
                    ? `bg-rose-100 text-rose-600 ${sens.reduceMotion ? "" : "scale-125"} ${pulseCls}`
                    : acesa
                      ? `bg-emerald-100 text-emerald-700 ${sens.reduceMotion ? "" : "scale-125"}`
                      : "text-muted-foreground/50"
                }`}
              >
                {s}
              </span>
            );
          })}
        </div>
      )}
      <div className="bg-card border-2 border-rose/20 rounded-2xl p-4">
        <div className="text-xs uppercase text-muted-foreground">Fale a palavra</div>
        <div className="text-4xl font-black text-rose-600">{palavra}</div>
        {modeloAudio && (
          <button
            onClick={() => speak(palavra)}
            className="mt-2 text-xs font-bold rounded-full bg-rose-500/10 border border-rose-500/30 px-3 py-1"
          >
            🔊 Ouvir como se fala
          </button>
        )}
      </div>
      <div className="min-h-[2.5rem] text-base font-bold text-rose-700">{feedback}</div>
      {ultimaSim !== null && !done && (
        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all"
            style={{ width: `${Math.round(ultimaSim * 100)}%` }}
          />
        </div>
      )}
      {guiaFala && !done && (
        <div className="text-xs text-muted-foreground">
          Dica: fale devagar, uma sílaba de cada vez.
        </div>
      )}
      <button
        onClick={gravar}
        disabled={done || isListening || !supported}
        className={`w-full py-5 rounded-3xl text-white font-black text-xl ${press} transition-all shadow-lg disabled:opacity-60 flex items-center justify-center gap-3 ${isListening ? `bg-emerald-500 ${pulseCls}` : "bg-rose-500"}`}
      >
        <Mic className="w-7 h-7" />
        {done ? "Muito bem!" : isListening ? "Ouvindo..." : "Falar 🎤"}
      </button>
      {!supported && (
        <div className="text-xs text-amber-600">
          Seu navegador não permite reconhecimento de voz. Use Chrome, Edge ou Safari recentes.
        </div>
      )}
    </div>
  );
}
function VocabularioSemantico({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [selecionado, setSelecionado] = useState<string | null>(null);
  
  const shuffledItens = useMemo(() => {
    return [...p.itens].sort(() => Math.random() - 0.5);
  }, [p.itens]);

  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-28 h-28" : "w-24 h-24";
  
  const handleClick = (item: string) => {
    if (selecionado) return;
    setSelecionado(item);
    setTimeout(() => onDone(item === p.intruso), 800);
  };

  return (
    <div className="space-y-10 text-center w-full max-w-2xl mx-auto">
      <div className="bg-white/60 backdrop-blur-md border-4 border-white/80 rounded-[3rem] py-10 px-6 shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-2">Grupo</div>
        <div className="text-4xl font-black text-primary mb-2 tracking-tight">{p.grupo}</div>
        <div className="text-sm font-bold text-muted-foreground/60">Qual NÃO pertence a este grupo?</div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {shuffledItens.map((item: string, i: number) => {
          const emoji = item.trim().split(/\s+/)[0];
          const nome = item.replace(emoji, "").trim();
          const certo = item === p.intruso;
          const bg =
            selecionado === item
              ? certo
                ? "border-success bg-success/10 scale-105"
                : `${errorBg} scale-95 opacity-50`
              : selecionado && certo
                ? "border-success bg-success/10"
                : "border-white bg-white/80 hover:border-primary/20 hover:scale-105 active:scale-95";
          
          return (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className={`rounded-[2.5rem] border-4 p-8 flex flex-col items-center gap-4 transition-all shadow-xl ${bg}`}
            >
              <RenderEmoji e={emoji} label={nome} className={imgSize} />
              <span className="font-black text-lg tracking-tight text-slate-700">{nome}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
}


// 27. NOMEAÇÃO RÁPIDA — RAN clínico: fala em ordem uma sequência de figuras.
// Mede itens/segundo (automaticidade). Fallback: toque em ordem, se sem voz.
function NomeacaoRapida({ p, onDone, promptLevel }: any) {
  const { effective: sens } = useSensoryProfile();
  const { speak } = usePipVoice();
  const { listen, isListening, supported } = useSpeechMatcher();
  const pulseCls = sens.reduceMotion ? "" : "animate-pulse";
  const cellSize = sens.largerTargets ? "w-20 h-20 md:w-24 md:h-24" : "w-16 h-16 md:w-20 md:h-20";

  // Monta sequência RAN: 12 itens DIVERSOS (RAN clássico usa figuras variadas)
  const bancoItens: { emoji: string; nome: string }[] = useMemo(() => {
    // Preferir bank vindo no payload (itens distintos com emojis diferentes)
    if (Array.isArray(p.bank) && p.bank.length > 0) {
      return p.bank as { emoji: string; nome: string }[];
    }
    // Fallback antigo: alvo + 3 distratores (mesmo emoji apenas se bank ausente)
    return [
      { emoji: p.emoji, nome: p.nome },
      ...(p.opts as string[])
        .filter((n) => n !== p.nome)
        .slice(0, 3)
        .map((n) => ({ emoji: p.emoji, nome: n })),
    ];
  }, [p]);

  const sequencia: { emoji: string; nome: string }[] = useMemo(() => {
    // Se já veio um bank com 12+ itens, usa direto (mantém variedade)
    if (Array.isArray(p.bank) && p.bank.length >= 12) {
      return (p.bank as { emoji: string; nome: string }[]).slice(0, 12);
    }
    const out: { emoji: string; nome: string }[] = [];
    for (let i = 0; i < 12; i++) out.push(bancoItens[i % bancoItens.length]);
    // Baralha levemente sem duplicar consecutivos
    for (let i = 1; i < out.length; i++) {
      if (out[i].nome === out[i - 1].nome) {
        const swap = out.findIndex((x, j) => j > i && x.nome !== out[i - 1].nome);
        if (swap > -1) [out[i], out[swap]] = [out[swap], out[i]];
      }
    }
    return out;
  }, [bancoItens, p]);

  const [idx, setIdx] = useState(0);
  const [inicio, setInicio] = useState<number | null>(null);
  const [erros, setErros] = useState(0);
  const [modo, setModo] = useState<"idle" | "correndo" | "done">("idle");
  const [transcricoes, setTranscricoes] = useState<string[]>([]);

  const mostrarNomes = promptLevel <= 3;
  const modeloAudio = promptLevel <= 2;
  const semVoz = !supported;

  const iniciar = () => {
    setIdx(0);
    setErros(0);
    setTranscricoes([]);
    setInicio(Date.now());
    setModo("correndo");
    if (modeloAudio) speak(sequencia[0].nome);
  };

  const proximo = () => {
    if (idx + 1 >= sequencia.length) {
      setModo("done");
      const dur = (Date.now() - (inicio ?? Date.now())) / 1000;
      const ips = sequencia.length / Math.max(dur, 0.1);
      const acertou = erros <= 2 && ips >= 0.6; // 0.6 itens/s ≈ ritmo funcional mínimo
      setTimeout(() => onDone(acertou), 800);
    } else {
      setIdx((i) => i + 1);
      if (modeloAudio) speak(sequencia[idx + 1].nome);
    }
  };

  const ouvir = async () => {
    if (modo !== "correndo" || isListening) return;
    const alvo = sequencia[idx].nome;
    const r = await listen(alvo, { timeoutMs: 3500 });
    setTranscricoes((t) => [...t, r.transcript || "-"]);
    if (r.matched) {
      proximo();
    } else {
      setErros((e) => e + 1);
      // Continua no mesmo item — pede pra falar de novo
    }
  };

  const tocouItem = (i: number) => {
    if (semVoz && modo === "correndo" && i === idx) proximo();
  };

  const dur = inicio ? ((modo === "done" ? Date.now() : Date.now()) - inicio) / 1000 : 0;
  const ips = idx > 0 ? idx / Math.max(dur, 0.1) : 0;

  return (
    <div className="text-center space-y-4">
      <div className="text-sm font-bold text-muted-foreground">
        {semVoz
          ? "Toque nas figuras EM ORDEM (esquerda→direita, cima→baixo)"
          : "Fale o nome de cada figura EM ORDEM, o mais rápido que conseguir"}
      </div>

      <div className="grid grid-cols-6 gap-2 justify-items-center bg-white/60 border-2 border-amber/30 rounded-2xl p-3">
        {sequencia.map((it, i) => {
          const feito = i < idx;
          const atual = i === idx && modo === "correndo";
          return (
            <button
              key={i}
              onClick={() => tocouItem(i)}
              disabled={!semVoz}
              className={`${cellSize} rounded-xl border-2 flex flex-col items-center justify-center p-1 transition-all ${
                feito
                  ? "border-emerald-400 bg-emerald-50 opacity-70"
                  : atual
                    ? `border-amber-500 bg-amber-50 ${pulseCls}`
                    : "border-slate-200 bg-white"
              }`}
            >
              <RenderEmoji e={it.emoji} label={it.nome} className="w-8 h-8 md:w-10 md:h-10" />
              {mostrarNomes && (
                <span className="text-[10px] font-bold mt-1">{it.nome}</span>
              )}
            </button>
          );
        })}
      </div>

      {modo === "correndo" && (
        <div className="text-xs text-muted-foreground">
          Item {idx + 1}/{sequencia.length} · erros: {erros} ·{" "}
          {dur > 0 ? `${ips.toFixed(1)} itens/s` : ""}
        </div>
      )}

      <div className="flex gap-2 justify-center">
        {modo === "idle" && (
          <button
            onClick={iniciar}
            className="bg-amber-500 text-white font-black px-6 py-3 rounded-full shadow-md"
          >
            Começar
          </button>
        )}
        {modo === "correndo" && !semVoz && (
          <button
            onClick={ouvir}
            disabled={isListening}
            className={`bg-rose-500 text-white font-black px-6 py-3 rounded-full shadow-md flex items-center gap-2 ${isListening ? pulseCls : ""}`}
          >
            <Mic className="w-5 h-5" /> {isListening ? "Ouvindo..." : "Falar"}
          </button>
        )}
      </div>

      {modo === "done" && (
        <div className="text-sm font-bold text-emerald-600">
          Concluído! {sequencia.length} figuras em {dur.toFixed(1)}s ({ips.toFixed(2)} itens/s) ·
          {erros} erro{erros === 1 ? "" : "s"}
        </div>
      )}

      {!supported && modo === "idle" && (
        <div className="text-xs text-amber-600">
          Voz indisponível — usaremos toque em ordem para medir velocidade.
        </div>
      )}
    </div>
  );
}


// ── COORDENAÇÃO MOTORA ──────────────────────────────────────

// 28. TOQUE EM SEQUÊNCIA — pontos em ordem, voz fala o item, fundo temático
const TS_BG: Record<string, string> = {
  ceu: "bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50 border-sky-300",
  grama: "bg-gradient-to-b from-sky-100 via-emerald-100 to-emerald-200 border-emerald-300",
  selva: "bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-500 border-emerald-600",
  espaco: "bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-900 border-indigo-700",
  fazenda: "bg-gradient-to-b from-amber-100 via-yellow-100 to-lime-200 border-amber-300",
  oceano: "bg-gradient-to-b from-cyan-200 via-sky-300 to-blue-500 border-blue-600",
};
const TS_BG_DECOR: Record<string, string[]> = {
  ceu: ["☁️", "☁️", "☀️"],
  grama: ["🌳", "🌸", "🦋"],
  selva: ["🌴", "🌿", "🐒"],
  espaco: ["⭐", "✨", "🪐"],
  fazenda: ["🌾", "🌻", "🚜"],
  oceano: ["🐚", "🐟", "🌊"],
};
function ToqueSequencia({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const { speak } = usePipVoice();
  const [proximoIdx, setProximoIdx] = useState(0);
  const [acertos, setAcertos] = useState<string[]>([]);
  const ordem: string[] = p.ordem;
  const proximo = ordem[proximoIdx];
  const escuro = p.bg === "espaco";

  const labelDe = (id: string) =>
    p.pontos.find((pt: any) => pt.id === id)?.label ?? id;

  const handlePonto = (pt: any) => {
    if (pt.id !== proximo) return;
    const novos = [...acertos, pt.id];
    setAcertos(novos);
    speak(pt.label);
    if (novos.length === ordem.length) {
      setTimeout(() => onDone(true), 600);
    } else setProximoIdx(proximoIdx + 1);
  };

  const renderConteudo = (label: string) => {
    if (p.tipo === "imagem") {
      return <RenderEmoji label={label} className="w-12 h-12" />;
    }
    return <span className="font-black text-2xl">{label}</span>;
  };

  return (
    <div className="space-y-4">
      <div className={`text-center text-sm font-bold ${escuro ? "text-white" : "text-muted-foreground"}`}>
        {p.categoria}
        {p.embaralhado ? (
          <span className="ml-1 text-amber-600">· nível difícil (embaralhado)</span>
        ) : (
          <span className="ml-1 text-emerald-600">· em ordem</span>
        )}
        <div className="mt-1">
          toque{" "}
          {p.tipo === "imagem" ? (
            <span className="inline-flex items-center gap-1 align-middle">
              <RenderEmoji label={labelDe(proximo)} className="w-7 h-7 inline-block" />
              <span className="text-emerald-600 font-black">{labelDe(proximo)}</span>
            </span>
          ) : (
            <span className="text-emerald-600 text-xl">{labelDe(proximo)}</span>
          )}
        </div>
      </div>
      <div
        className={`relative border-2 rounded-3xl overflow-hidden ${TS_BG[p.bg] ?? TS_BG.grama}`}
        style={{ height: 320 }}
      >
        {/* Decoração de fundo */}
        {(TS_BG_DECOR[p.bg] ?? []).map((d, i) => (
          <span
            key={i}
            className="absolute text-3xl opacity-40 select-none pointer-events-none"
            style={{ left: `${10 + i * 30}%`, top: `${i % 2 ? 70 : 8}%` }}
          >
            {d}
          </span>
        ))}
        {p.pontos.map((pt: any) => {
          const feito = acertos.includes(pt.id);
          const ativo = pt.id === proximo;
          return (
            <button
              key={pt.id}
              onClick={() => handlePonto(pt)}
              style={{ left: `${pt.x}%`, top: `${pt.y}%`, transform: "translate(-50%,-50%)" }}
              className={`absolute ${sens.largerTargets ? "w-20 h-20" : "w-16 h-16"} rounded-2xl border-3 flex items-center justify-center transition-all shadow-lg${sens.reduceMotion ? "" : " active:scale-90"}
                ${feito ? `bg-emerald-500 text-white border-emerald-600 opacity-80${sens.reduceMotion ? "" : " scale-90"}` : ativo ? `bg-white border-emerald-500 text-emerald-700 ring-4 ring-emerald-300/50${sens.reduceMotion ? "" : " scale-110 animate-pulse"}` : "bg-white/90 border-white text-slate-700"}`}
              aria-label={pt.label}
            >
              {renderConteudo(pt.label)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 29. RITMO DE BATIDAS — exibe padrão, usuário reproduz tocando
// 29. RITMO DE BATIDAS — tambor: criança bate N vezes conforme o comando
function RitmoBatidas({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const { speak } = usePipVoice();
  const [fase, setFase] = useState<"demo" | "vezDela" | "done">("demo");
  const [pulseDemo, setPulseDemo] = useState(false);
  const [contagem, setContagem] = useState(0);
  const [feedback, setFeedback] = useState<"ok" | "erro" | null>(null);
  const audioRef = useRef<AudioContext | null>(null);

  const tocarSom = () => {
    if (sens.reduceSound) return;
    try {
      if (!audioRef.current) {
        audioRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(sens.softColors ? 0.3 : 0.6, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch {}
  };

  // Demo: narra o comando e bate o tambor N vezes
  useEffect(() => {
    if (fase !== "demo") return;
    speak(p.comando);
    let cancelado = false;
    const inicio = 1100;
    for (let k = 0; k < p.batidas; k++) {
      setTimeout(() => {
        if (cancelado) return;
        setPulseDemo(true);
        tocarSom();
        setTimeout(() => setPulseDemo(false), 180);
      }, inicio + k * 550);
    }
    const total = inicio + p.batidas * 550 + 400;
    const t = setTimeout(() => {
      if (!cancelado) setFase("vezDela");
    }, total);
    return () => {
      cancelado = true;
      clearTimeout(t);
    };
  }, [fase, p.batidas, p.comando]);

  const bater = () => {
    if (fase !== "vezDela" || feedback) return;
    const nova = contagem + 1;
    setContagem(nova);
    tocarSom();
    speak(String(nova));
    if (nova === p.batidas) {
      setFeedback("ok");
      setTimeout(() => {
        speak("Mandou bem!");
        onDone(true);
      }, 700);
    } else if (nova > p.batidas) {
      setFeedback("erro");
      setTimeout(() => {
        speak("Quase! Vamos tentar de novo.");
        onDone(false);
      }, 700);
    }
  };

  return (
    <div className="space-y-5 text-center">
      <div className="rounded-3xl border-2 border-amber-300 bg-gradient-to-b from-amber-50 to-orange-100 p-5">
        <div className="text-2xl font-black text-amber-800 mb-1">{p.comando}</div>
        <div className="text-sm text-amber-700 font-bold">
          {fase === "demo" && "Escute o ritmo..."}
          {fase === "vezDela" && `Sua vez! ${contagem} / ${p.batidas}`}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={bater}
          disabled={fase !== "vezDela" || !!feedback}
          aria-label="Tambor"
          className={`relative ${sens.largerTargets ? "w-52 h-52" : "w-44 h-44"} rounded-full border-8 ${sens.softColors ? "border-amber-600 bg-gradient-to-b from-amber-400 to-amber-600" : "border-amber-700 bg-gradient-to-b from-red-500 to-red-700"} shadow-2xl flex items-center justify-center transition-all
            ${pulseDemo && !sens.reduceMotion ? "scale-110 ring-8 ring-amber-300" : pulseDemo ? "ring-8 ring-amber-300" : ""}
            ${fase === "vezDela" && !feedback ? (sens.reduceMotion ? "cursor-pointer" : "active:scale-90 hover:scale-105 cursor-pointer animate-pulse") : ""}
            ${feedback === "ok" ? "ring-8 ring-emerald-400" : ""}
            ${feedback === "erro" ? (sens.softColors ? "ring-8 ring-amber-400" : "ring-8 ring-rose-400") : ""}`}
        >
          <span className="text-7xl drop-shadow-lg">🥁</span>
        </button>
      </div>

      {/* Bolinhas indicando quantas batidas */}
      <div className="flex gap-2 justify-center">
        {Array.from({ length: p.batidas }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full border-2 transition-all ${
              i < contagem ? `bg-emerald-500 border-emerald-600${sens.reduceMotion ? "" : " scale-110"}` : "border-amber-400 bg-amber-100"
            }`}
          />
        ))}
      </div>

      {feedback && (
        <div className={`text-2xl font-black ${feedback === "ok" ? "text-success" : sens.softColors ? "text-amber-600" : "text-destructive"}`}>
          {feedback === "ok" ? "Perfeito! 🎉" : "Vamos de novo!"}
        </div>
      )}
    </div>
  );
}

// 30. COPIAR FIGURA — criança desenha por cima da figura real (tracing com dedo)
function CopiarFigura({ p, onDone }: any) {
  const img = emojiImg(p.emoji) ?? objetoImg(p.nome);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const pixelsRef = useRef(0);
  const [progresso, setProgresso] = useState(0);
  const [feito, setFeito] = useState(false);
  const META = 1400; // pixels desenhados pra considerar "copiou"

  useEffect(() => {
    speakOnceRef.current = false;
  }, []);
  const speakOnceRef = useRef(false);
  useEffect(() => {
    if (!speakOnceRef.current) {
      speakOnceRef.current = true;
      try {
        window.speechSynthesis?.cancel();
        const u = new SpeechSynthesisUtterance(
          `Desenhe a ${p.nome.toLowerCase()} com o dedo!`,
        );
        u.lang = "pt-BR";
        u.rate = 0.95;
        window.speechSynthesis?.speak(u);
      } catch {}
    }
  }, [p.nome]);

  const pos = (e: React.PointerEvent) => {
    const c = canvasRef.current!;
    const r = c.getBoundingClientRect();
    return {
      x: ((e.clientX - r.left) / r.width) * c.width,
      y: ((e.clientY - r.top) / r.height) * c.height,
    };
  };

  const start = (e: React.PointerEvent) => {
    if (feito) return;
    drawing.current = true;
    last.current = pos(e);
  };
  const move = (e: React.PointerEvent) => {
    if (!drawing.current || feito) return;
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    const cur = pos(e);
    const prev = last.current!;
    ctx.strokeStyle = p.cor;
    ctx.lineWidth = 16;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(prev.x, prev.y);
    ctx.lineTo(cur.x, cur.y);
    ctx.stroke();
    const dx = cur.x - prev.x;
    const dy = cur.y - prev.y;
    pixelsRef.current += Math.hypot(dx, dy);
    last.current = cur;
    const pct = Math.min(100, (pixelsRef.current / META) * 100);
    setProgresso(pct);
    if (pct >= 100 && !feito) {
      setFeito(true);
      try {
        const u = new SpeechSynthesisUtterance("Que linda figura! Mandou bem!");
        u.lang = "pt-BR";
        window.speechSynthesis?.speak(u);
      } catch {}
      setTimeout(() => onDone(true), 900);
    }
  };
  const end = () => {
    drawing.current = false;
    last.current = null;
  };
  const limpar = () => {
    const c = canvasRef.current;
    if (!c) return;
    c.getContext("2d")!.clearRect(0, 0, c.width, c.height);
    pixelsRef.current = 0;
    setProgresso(0);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Modelo flutuante discreto */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-3 border-4 border-slate-200 shadow-xl flex flex-col items-center">
          <div className="text-[9px] font-black text-slate-400 mb-1">MODELO</div>
          {img ? (
            <img src={img} alt={p.nome} className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-sm" />
          ) : (
            <div className="text-4xl">{p.emoji}</div>
          )}
        </div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-black" style={{ color: p.cor }}>
          {p.nome}
        </div>
        <div className="text-xs font-bold text-muted-foreground">
          Desenhe por cima com o dedo! 👆
        </div>
      </div>

      {/* Área de Desenho Maximale */}
      <div
        className="relative bg-white rounded-[3rem] border-8 border-dashed shadow-2xl p-2 touch-none select-none w-full max-w-lg aspect-square"
        style={{ borderColor: p.cor + "40" }}
      >
        {/* Fantasma de fundo */}
        {img ? (
          <img
            src={img}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain p-8 opacity-10 pointer-events-none"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10 pointer-events-none">
            {p.emoji}
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerLeave={end}
          className="relative w-full h-full touch-none cursor-crosshair rounded-[2.5rem]"
        />
        
        <button
          onClick={limpar}
          disabled={feito}
          className="absolute bottom-4 left-4 bg-slate-100 hover:bg-slate-200 rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-md active:scale-90 transition-all disabled:opacity-50"
          aria-label="Limpar"
        >
          <RotateCcw size={24} className="text-slate-600" />
        </button>
      </div>

      {/* Progresso e Finalização */}
      <div className="w-full max-w-md space-y-4 px-4">
        <div className="h-4 rounded-full bg-slate-100 border-2 border-white overflow-hidden shadow-inner">
          <div
            className="h-full transition-all duration-300 rounded-full shadow-glow-sm"
            style={{ width: `${progresso}%`, background: p.cor }}
          />
        </div>

        <button
          onClick={() => {
            setFeito(true);
            onDone(true);
          }}
          disabled={feito || progresso < 30}
          className="w-full py-5 rounded-[2.5rem] text-white font-black text-xl shadow-2xl active:scale-95 disabled:opacity-40 transition-all"
          style={{ background: p.cor }}
        >
          TERMINEI! ✨
        </button>
      </div>
    </div>
  );
}


// 31. ALVO MÓVEL — bichinho do banco se move pela tela, criança toca (tempo livre, sem voz)
function AlvoMovel({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  // Em low-stim: velocidade -40% (anti-dispraxia/TDC)
  const velocidade = sens.lowStim ? p.velocidade * 0.6 : p.velocidade;
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [round, setRound] = useState(1);
  const [tocou, setTocou] = useState(false);
  const animRef = useRef<number | undefined>(undefined);
  const img = emojiImg(p.emoji) ?? objetoImg(p.nome);

  // Silencia qualquer voz enquanto a atividade roda
  useEffect(() => {
    try {
      window.speechSynthesis?.cancel();
    } catch {}
    const id = setInterval(() => {
      try {
        window.speechSynthesis?.cancel();
      } catch {}
    }, 400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let t = Math.random() * 10;
    const move = () => {
      t += 0.012 * velocidade;
      setPos({ x: 50 + 38 * Math.cos(t), y: 50 + 32 * Math.sin(t * 1.3) });
      animRef.current = requestAnimationFrame(move);
    };
    animRef.current = requestAnimationFrame(move);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [round, velocidade]);

  const handleToque = () => {
    if (tocou) return;
    setTocou(true);
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (round >= p.rounds) {
      setTimeout(() => onDone(true), 400);
    } else {
      setTimeout(() => {
        setTocou(false);
        setRound((r) => r + 1);
      }, 350);
    }
  };

  // Fundo mais calmo no low-stim
  const bgClass = sens.softColors
    ? "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
    : "bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50 border-emerald-200";
  // Alvo maior pra TDC / motor fino
  const btnSize = sens.largerTargets ? "w-32 h-32" : "w-24 h-24";
  const imgSize = sens.largerTargets ? "w-28 h-28" : "w-20 h-20";
  const emojiSize = sens.largerTargets ? "w-24 h-24" : "w-16 h-16";
  const press = sens.reduceMotion ? "" : " active:scale-90 transition-transform";

  return (
    <div className="space-y-3 text-center">
      <div className="text-sm text-muted-foreground font-bold">
        Toque no {p.nome.toLowerCase()} — Rodada {round} / {p.rounds}
      </div>
      <div
        className={`relative border-4 rounded-3xl overflow-hidden touch-none ${bgClass}`}
        style={{ height: 360 }}
      >
        <button
          onClick={handleToque}
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: "translate(-50%,-50%)",
          }}
          className={`absolute rounded-full bg-white/70 backdrop-blur shadow-xl flex items-center justify-center ring-4 ${btnSize}${press}`}
        >
          {img ? (
            <img src={img} alt={p.nome} draggable={false} className={`${imgSize} object-contain`} />
          ) : (
            <RenderEmoji e={p.emoji} className={emojiSize} />
          )}
        </button>
      </div>
    </div>
  );
}

// ── ATENÇÃO & CONCENTRAÇÃO ────────────────────────────────────

// 32. ACHAR O DIFERENTE — grade com um item diferente
function AcharDiferente({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [selecionado, setSelecionado] = useState<number | null>(null);
  const handleClick = (idx: number) => {
    if (selecionado !== null) return;
    setSelecionado(idx);
    setTimeout(() => onDone(idx === p.posAlvo), 600);
  };
  const cols = p.colunas ?? 3;
  const errBorder = sens.softColors ? "border-amber-400" : "border-destructive";
  const errBg = sens.softColors ? "bg-amber-100 dark:bg-amber-900/30" : "bg-destructive/20";
  const emojiSize = sens.largerTargets ? "w-14 h-14" : "w-10 h-10";
  return (
    <div className="space-y-4">
      <div className="text-center text-sm text-muted-foreground font-bold">
        Encontre o elemento diferente!
      </div>
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {p.grid.map((emoji: string, i: number) => {
          const certa = i === p.posAlvo;
          const isPick = selecionado === i;
          const bg =
            isPick
              ? certa
                ? `bg-success/20 border-success${sens.reduceMotion ? "" : " scale-110"}`
                : `${errBg} ${errBorder}`
              : selecionado !== null && certa
                ? "bg-success/20 border-success"
                : `bg-card border-border hover:border-violet/50${sens.reduceMotion ? "" : " hover:scale-105"}`;
          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`rounded-xl border-2 p-1 flex items-center justify-center transition-all ${bg}`}
            >
              <RenderEmoji e={emoji} className={emojiSize} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 33. MEMÓRIA VISUAL — flash de grade colorida, depois reproduzir
function MemoriaVisual({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  // Em low-stim: +50% no tempo de memorização (alívio de fadiga cognitiva)
  const tempoBase = Math.max(3000, (p.flashMs ?? 2000) * (sens.lowStim ? 1.5 : 1));
  const [fase, setFase] = useState<"mostrar" | "reproduzir" | "done">("mostrar");
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [restante, setRestante] = useState(Math.round(tempoBase / 1000));
  const [revisoes, setRevisoes] = useState(0); // quantas vezes voltou pra ver
  const maxRevisoes = 3;

  // Countdown só na fase de mostrar; expira sozinho ou avança pelo botão.
  useEffect(() => {
    if (fase !== "mostrar") return;
    setRestante(Math.round(tempoBase / 1000));
    const iv = setInterval(() => {
      setRestante((r) => {
        if (r <= 1) {
          clearInterval(iv);
          setFase("reproduzir");
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(iv);
  }, [fase, tempoBase]);

  const verDeNovo = () => {
    if (revisoes >= maxRevisoes) return;
    setRevisoes((n) => n + 1);
    setSelecionados([]);
    setFase("mostrar");
  };

  const handleCor = (cor: string) => {
    if (fase !== "reproduzir" || selecionados.length >= p.grid.length) return;
    const novos = [...selecionados, cor];
    setSelecionados(novos);
    if (novos.length === p.grid.length) {
      const correto = novos.every((c, idx) => c === p.grid[idx]);
      setFeedback(correto);
      setTimeout(() => onDone(correto), 800);
    }
  };

  const cores = [...new Set<string>(p.grid)];
  return (
    <div className="space-y-4 text-center">
      {fase === "mostrar" ? (
        <div className="space-y-3">
          <div className="text-sm font-bold text-muted-foreground">
            Memorize as cores! ({restante}s)
          </div>
          <div className="flex gap-2 justify-center items-center flex-wrap mx-auto">
            {p.grid.map((cor: string, i: number) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="text-xs font-black text-muted-foreground">{i + 1}</div>
                <div
                  className="w-14 h-14 rounded-full border-2 border-white/30 shadow"
                  style={{ backgroundColor: cor }}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => setFase("reproduzir")}
            className={`px-5 py-2 rounded-xl bg-violet text-white font-bold shadow${sens.reduceMotion ? "" : " active:scale-95"}`}
          >
            Estou pronto! ➜
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="text-sm font-bold">
            Posição {selecionados.length + 1}/{p.grid.length}
          </div>
          <div className="flex gap-2 justify-center items-center flex-wrap mx-auto">
            {p.grid.map((_: any, i: number) => {
              const ativo = i === selecionados.length;
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className={`text-xs font-black ${ativo ? "text-emerald-600" : "text-muted-foreground"}`}>{i + 1}</div>
                  <div
                    className={`${sens.largerTargets ? "w-16 h-16" : "w-14 h-14"} rounded-full border-2 border-dashed ${ativo ? "border-emerald-500 ring-2 ring-emerald-300/50" : "border-muted-foreground"}`}
                    style={{ backgroundColor: selecionados[i] ?? "transparent" }}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            {cores.map((cor, i) => (
              <button
                key={i}
                onClick={() => handleCor(cor)}
                className={`${sens.largerTargets ? "w-16 h-16" : "w-14 h-14"} rounded-xl border-2 border-white/30 transition-all shadow${sens.reduceMotion ? "" : " active:scale-90"}`}
                style={{ backgroundColor: cor }}
              />
            ))}
          </div>
          {feedback === null && (
            <button
              onClick={verDeNovo}
              disabled={revisoes >= maxRevisoes}
              className={`px-4 py-2 rounded-xl bg-amber-500 text-white font-bold shadow disabled:opacity-40${sens.reduceMotion ? "" : " active:scale-95"}`}
            >
              ↺ Ver de novo {revisoes > 0 ? `(${revisoes}/${maxRevisoes})` : ""}
            </button>
          )}
        </div>
      )}
      {feedback !== null && (
        <div className={`text-2xl font-black ${feedback ? "text-success" : sens.softColors ? "text-amber-600" : "text-destructive"}`}>
          {feedback ? "Incrível!" : "Quase!"}
        </div>
      )}
    </div>
  );
}

// 34. REAÇÃO RÁPIDA — Go / No-Go
function ReacaoRapida({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  // Janela mínima anti-impulsividade: ignora cliques nos primeiros 250ms
  const MIN_RESPONSE_MS = 250;
  // Em modo low-stim, intervalo 50% maior para reduzir pressão
  const intervaloMs = sens.lowStim
    ? Math.round(p.intervaloMs * 1.5)
    : p.intervaloMs;

  const [idx, setIdx] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [feedbackLocal, setFeedbackLocal] = useState<"ok" | "erro" | null>(null);
  const [tempo, setTempo] = useState(intervaloMs);
  const [travado, setTravado] = useState(false);
  const startRef = useRef(0);

  useEffect(() => {
    setTempo(intervaloMs);
    setFeedbackLocal(null);
    setTravado(false);
    startRef.current = Date.now();
    const iv = setInterval(() => {
      const rest = intervaloMs - (Date.now() - startRef.current);
      if (rest <= 0) {
        clearInterval(iv);
        proximo(false);
      } else {
        setTempo(rest);
      }
    }, 80);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, intervaloMs]);

  const proximo = (acerto: boolean) => {
    if (travado) return;
    setTravado(true);
    if (acerto) setAcertos((a) => a + 1);
    setFeedbackLocal(acerto ? "ok" : "erro");
    setTimeout(() => {
      if (idx < p.seq.length - 1) setIdx((i) => i + 1);
      else {
        const finalAcertos = acertos + (acerto ? 1 : 0);
        onDone(finalAcertos >= Math.ceil(p.seq.length * 0.6));
      }
    }, 1100);
  };

  const onClick = (certa: boolean) => {
    // Anti-impulsividade: clique antes da janela mínima é descartado
    if (Date.now() - startRef.current < MIN_RESPONSE_MS) return;
    proximo(certa);
  };

  const round = p.seq[idx] ?? p.seq[0];
  const pct = Math.max(0, Math.min(100, (tempo / intervaloMs) * 100));
  const dangerColor = sens.softColors ? "bg-amber-500" : "bg-destructive";
  const emojiSize = sens.largerTargets ? "w-20 h-20" : "w-16 h-16";
  const press = sens.reduceMotion ? "" : " active:scale-95";

  return (
    <div className="text-center space-y-5">
      <div className="bg-gradient-to-br from-violet/20 to-violet/5 border-2 border-violet/30 rounded-2xl p-4">
        <div className="text-xs uppercase text-muted-foreground mb-1">Toque rápido em</div>
        <div className="flex items-center justify-center gap-2">
          <RenderEmoji e={round.alvo.emoji} className="w-12 h-12" />
          <div className="text-2xl font-black">{round.alvo.nome}</div>
        </div>
      </div>

      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className={`h-full transition-[width] duration-75 ${pct > 40 ? "bg-success" : pct > 15 ? "bg-amber-500" : dangerColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${round.grade.length}, 1fr)` }}
      >
        {round.grade.map((item: any, i: number) => {
          const certa = item.nome === round.alvo.nome;
          const bg =
            feedbackLocal && certa
              ? "border-success bg-success/15"
              : feedbackLocal === "erro" && !certa
                ? "border-border bg-card opacity-50"
                : `border-border bg-card hover:border-violet/50${press}`;
          return (
            <button
              key={i}
              disabled={travado}
              onClick={() => onClick(certa)}
              className={`rounded-2xl border-2 p-3 flex items-center justify-center transition-all ${bg}`}
            >
              <RenderEmoji e={item.emoji} className={emojiSize} />
            </button>
          );
        })}
      </div>

      <div className="text-sm text-muted-foreground">
        {idx + 1} / {p.seq.length} · acertos {acertos}
      </div>
    </div>
  );
}

// 35. SEGUIR INSTRUÇÃO — lê instrução, toca item correto
function SeguirInstrucao({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-20 h-20" : "w-14 h-14";
  const handleClick = (item: string) => {
    if (selecionado) return;
    setSelecionado(item);
    setTimeout(() => onDone(item === p.correta), 600);
  };
  return (
    <div className="space-y-5">
      <div className="bg-gradient-to-br from-violet/20 to-violet/5 border-2 border-violet/30 rounded-3xl p-6 text-center">
        <div className="text-xs uppercase text-muted-foreground mb-2">Instrução</div>
        <div className="text-2xl font-black">{p.instrucao}</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {p.itens.map((item: string, i: number) => {
          const certa = item === p.correta;
          const bg =
            selecionado === item
              ? certa
                ? "border-success bg-success/10"
                : errorBg
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-border bg-card hover:border-violet/50";
          return (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className={`rounded-2xl border-2 p-4 font-bold flex flex-col items-center gap-2 transition-all ${bg}`}
            >
              <RenderEmoji e={item} className={imgSize} />
            </button>
          );
        })}
      </div>
    </div>
  );
}


// ── ALFABETIZAÇÃO ─────────────────────────────────────────────

// 36. LETRA-SOM — fonema → escolher imagem
function LetraSom({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const shuffledImgs = useMemo(() => {
    return [...p.imagens].sort(() => Math.random() - 0.5);
  }, [p.imagens]);

  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-28 h-28" : "w-24 h-24";

  const handleClick = (nome: string) => {
    if (selecionado) return;
    setSelecionado(nome);
    setTimeout(() => onDone(nome === p.correta), 800);
  };

  return (
    <div className="space-y-10 text-center w-full max-w-2xl mx-auto">
      <div className="bg-white/60 backdrop-blur-md border-4 border-white/80 rounded-[3rem] py-10 px-6 shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-4">Qual começa com...</div>
        <div className="text-8xl font-black text-primary tracking-tighter drop-shadow-sm">{p.fonema}</div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {shuffledImgs.map((img: { e: string; n: string }, i: number) => {
          const certa = img.n === p.correta;
          const bg =
            selecionado === img.n
              ? certa
                ? "border-success bg-success/10 scale-105"
                : `${errorBg} scale-95 opacity-50`
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-white bg-white/80 hover:border-primary/20 hover:scale-105 active:scale-95";
          
          return (
            <button
              key={i}
              onClick={() => handleClick(img.n)}
              className={`rounded-[2.5rem] border-4 p-8 flex flex-col items-center gap-4 transition-all shadow-xl ${bg}`}
            >
              <RenderEmoji e={img.e} label={img.n} className={imgSize} />
              <span className="font-black text-lg tracking-tight text-slate-700">{img.n}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}



// 37. PALAVRA-IMAGEM — ver imagem, escolher palavra correta
function PalavraImagem({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [selecionado, setSelecionado] = useState<string | null>(null);
  
  const shuffledOpts = useMemo(() => {
    return [...p.opts].sort(() => Math.random() - 0.5);
  }, [p.opts]);

  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-44 h-44" : "w-36 h-36";
  const optPad = sens.largerTargets ? "py-8 text-2xl" : "py-6 text-xl";

  const handleClick = (opt: string) => {
    if (selecionado) return;
    setSelecionado(opt);
    setTimeout(() => onDone(opt === p.correta), 800);
  };

  return (
    <div className="space-y-10 text-center w-full max-w-2xl mx-auto">
      <div className="bg-white/60 backdrop-blur-md border-4 border-white/80 rounded-[3rem] py-12 flex items-center justify-center shadow-2xl animate-in fade-in zoom-in duration-500">
        <RenderEmoji e={p.emoji} className={`${imgSize} drop-shadow-2xl`} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {shuffledOpts.map((opt: string, i: number) => {
          const certa = opt === p.correta;
          const bg =
            selecionado === opt
              ? certa
                ? "border-success bg-success/10 scale-105"
                : `${errorBg} scale-95 opacity-50`
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-white bg-white/80 hover:border-primary/20 hover:scale-105 active:scale-95";
          
          return (
            <button
              key={i}
              onClick={() => handleClick(opt)}
              className={`rounded-[2.5rem] border-4 ${optPad} font-black tracking-tight transition-all shadow-xl ${bg}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}


// 38. FORMANDO PALAVRAS — tocar sílabas em ordem
function FormandoPalavras({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [sequencia, setSequencia] = useState<string[]>([]);
  const [erro, setErro] = useState(false);
  const errorTxt = sens.softColors ? "text-amber-600" : "text-destructive";
  const pulseCls = sens.reduceMotion ? "" : "animate-pulse";
  const press = sens.reduceMotion ? "" : "active:scale-95";
  const btnPad = sens.largerTargets ? "px-8 py-6 text-2xl" : "px-6 py-4 text-xl";

  const handleSilaba = (sil: string) => {
    if (erro || sequencia.length >= p.silabas.length) return;
    const esperada = p.silabas[sequencia.length];
    
    if (sil !== esperada) {
      setErro(true);
      setTimeout(() => {
        setErro(false);
        setSequencia([]);
      }, 800);
      return;
    }
    
    const nova = [...sequencia, sil];
    setSequencia(nova);
    if (nova.length === p.silabas.length) {
      setTimeout(() => onDone(true), 800);
    }
  };


  return (
    <div className="space-y-5 text-center">
      <div className="bg-gradient-to-br from-amber/15 to-amber/5 border-2 border-amber/20 rounded-3xl p-4 min-h-[72px] flex items-center justify-center">
        <div
          className={`text-4xl font-black tracking-widest transition-all ${erro ? `${errorTxt} ${pulseCls}` : sequencia.length === p.silabas.length ? "text-success" : "text-foreground"}`}
        >
          {sequencia.length === 0 ? "..." : sequencia.join("") || "..."}
        </div>
      </div>
      <div className="flex gap-4 flex-wrap justify-center py-4">
        {useMemo(() => [...p.embaralhadas].sort(() => Math.random() - 0.5), [p.embaralhadas]).map((sil: string, i: number) => {
          const usada =
            sequencia.join("").includes(sil) &&
            sequencia.some((s) => s === sil && sequencia.indexOf(s) < sequencia.length);
          return (
            <button
              key={i}
              onClick={() => handleSilaba(sil)}
              className={`min-w-[80px] ${btnPad} rounded-[2rem] border-4 font-black transition-all shadow-lg ${press}
                ${usada ? "border-muted bg-muted/20 text-muted-foreground scale-90 opacity-40" : "border-white bg-white hover:border-amber/40 hover:scale-110 active:scale-90 text-amber-900"}`}
            >
              {sil}
            </button>
          );
        })}
      </div>

      <div className="text-sm text-muted-foreground">
        {sequencia.length} / {p.silabas.length} sílabas
      </div>
    </div>
  );
}


// 39. LEITURA DE PALAVRAS — lê palavra, escolhe emoji correto
function LeituraPalavras({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [selecionado, setSelecionado] = useState<string | null>(null);
  
  const shuffledOpts = useMemo(() => {
    return [...p.opts].sort(() => Math.random() - 0.5);
  }, [p.opts]);

  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-28 h-28" : "w-24 h-24";
  const btnPad = sens.largerTargets ? "py-8" : "py-6";

  const handleClick = (e: string) => {
    if (selecionado) return;
    setSelecionado(e);
    setTimeout(() => onDone(e === p.emoji_certo), 700);
  };

  return (
    <div className="space-y-10 text-center w-full max-w-2xl mx-auto">
      <div className="bg-white/60 backdrop-blur-md border-4 border-white/80 rounded-[3rem] py-12 shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-4">Leia e encontre</div>
        <div className="text-6xl font-black tracking-[0.15em] text-primary">{p.palavra}</div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {shuffledOpts.map((e: string, i: number) => {
          const certa = e === p.emoji_certo;
          const bg =
            selecionado === e
              ? certa
                ? "border-success bg-success/10 scale-105"
                : `${errorBg} scale-95 opacity-50`
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-white bg-white/80 hover:border-primary/20 hover:scale-105 active:scale-95";
          return (
            <button
              key={i}
              onClick={() => handleClick(e)}
              className={`rounded-[2.5rem] border-4 ${btnPad} flex items-center justify-center transition-all shadow-xl ${bg}`}
            >
              <RenderEmoji e={e} className={imgSize} />
            </button>
          );
        })}
      </div>
    </div>
  );
}



// 40. COMPLETAR LETRA — palavra com lacuna, escolher letra certa
function CompletarLetra({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-28 h-28" : "w-24 h-24";
  const btnPad = sens.largerTargets ? "py-7 text-4xl" : "py-5 text-3xl";
  const handleClick = (letra: string) => {
    if (selecionado) return;
    setSelecionado(letra);
    setTimeout(() => onDone(letra === p.letra), 700);
  };
  return (
    <div className="space-y-5 text-center">
      <div className="flex justify-center mb-2">
        <RenderEmoji e={p.emoji} className={imgSize} />
      </div>
      <div className="bg-gradient-to-br from-amber/20 to-amber/5 border-2 border-amber/30 rounded-3xl p-6">
        <div className="text-xs uppercase text-muted-foreground mb-2">Complete a palavra</div>
        <div className="text-4xl font-black tracking-widest">
          {p.palavra.split("").map((c: string, i: number) => (
            <span
              key={i}
              className={
                c === "_" && selecionado
                  ? "text-amber-700 border-b-4 border-amber-700"
                  : c === "_"
                    ? "text-muted-foreground border-b-4 border-border"
                    : ""
              }
            >
              {c === "_" ? (selecionado ?? "_") : c}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {p.opts.map((letra: string, i: number) => {
          const certa = letra === p.letra;
          const bg =
            selecionado === letra
              ? certa
                ? "border-success bg-success/10 text-success"
                : errorBg
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-border bg-card hover:border-amber/60";
          return (
            <button
              key={i}
              onClick={() => handleClick(letra)}
              className={`rounded-2xl border-2 ${btnPad} font-black transition-all ${bg}`}
            >
              {letra}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============== FASE 3A - NOVAS MECÂNICAS ==============

// 41. ORDEM INVERSA — Memorizar e clicar de trás pra frente
function OrdemInversa({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const { hiperfoco } = useHiperfoco();
  const [fase, setFase] = useState<"mostrar" | "reproduzir">("mostrar");
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const [itensFinal, setItensFinal] = useState<string[]>([]);
  const [ordemFinal, setOrdemFinal] = useState<string[]>([]);
  const [countdown, setCountdown] = useState(0);

  // Inicializar itens com hiperfoco se disponível
  useEffect(() => {
    let baseItens = p.itens;
    if (hiperfoco && hiperfoco.elementos && hiperfoco.elementos.length > 0) {
      // Usar elementos do hiperfoco para substituir os itens se houver o suficiente
      const hElems = [...hiperfoco.elementos].sort(() => Math.random() - 0.5);
      if (hElems.length >= p.itens.length) {
        baseItens = hElems.slice(0, p.itens.length);
      }
    }
    setItensFinal(baseItens);
    setOrdemFinal([...baseItens].reverse());
    setCountdown(Math.round(p.flashMs / 1000) + 1);
  }, [p.itens, hiperfoco]);

  useEffect(() => {
    if (fase !== "mostrar") return;
    const t = setTimeout(() => setFase("reproduzir"), p.flashMs);
    const iv = setInterval(() => setCountdown((c) => Math.max(0, c - 1)), 1000);
    return () => {
      clearTimeout(t);
      clearInterval(iv);
    };
  }, [fase, p.flashMs]);

  const handleItem = (item: string) => {
    if (fase !== "reproduzir") return;
    const novos = [...selecionados, item];
    setSelecionados(novos);
    
    if (novos.length === itensFinal.length) {
      const correto = novos.every((val, idx) => val === ordemFinal[idx]);
      setTimeout(() => onDone(correto), 600);
    }
  };

  const btnSize = sens.largerTargets ? "w-24 h-24 text-5xl" : "w-16 h-16 text-4xl";

  if (itensFinal.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto py-6">
      {fase === "mostrar" ? (
        <div className="space-y-8 animate-in fade-in zoom-in duration-500 text-center">
          <div className="bg-white/60 backdrop-blur-md rounded-[3rem] p-8 border-4 border-primary/10 shadow-xl">
            <div className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] mb-8">
              MEMORIZE A ORDEM! 🧠
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {itensFinal.map((it: string, i: number) => (
                <div key={i} className="flex flex-col items-center gap-3 animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 200}ms` }}>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary border-2 border-white shadow-sm">
                    {i + 1}
                  </div>
                  <div className={`${btnSize} bg-white rounded-[2rem] shadow-2xl border-4 border-primary/5 flex items-center justify-center`}>
                    <RenderEmoji e={it} className="w-16 h-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-48 h-2 bg-white/50 rounded-full overflow-hidden border border-white">
              <div 
                className="h-full bg-primary transition-all duration-1000 ease-linear"
                style={{ width: `${(countdown / (p.flashMs / 1000)) * 100}%` }}
              />
            </div>
            <div className="text-xs font-black text-primary uppercase tracking-widest">
              Sua vez em {countdown}s...
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-10 text-center animate-in fade-in duration-500">
          <div className="bg-primary/5 rounded-[2rem] p-6 border-2 border-dashed border-primary/20">
            <div className="text-sm font-black text-primary uppercase tracking-[0.15em] mb-6">
              AGORA TOQUE DE TRÁS PARA FRENTE! 🔄
            </div>
            
            {/* Slots de resposta */}
            <div className="flex justify-center gap-4">
              {itensFinal.map((_: any, i: number) => (
                <div
                  key={i}
                  className={`${sens.largerTargets ? "w-20 h-20" : "w-16 h-16"} rounded-[1.5rem] border-4 border-dashed transition-all duration-300 ${
                    selecionados[i] ? "border-success bg-success/10 scale-105" : "border-primary/20 bg-white/50"
                  } flex items-center justify-center shadow-inner`}
                >
                  {selecionados[i] && (
                    <div className="animate-in zoom-in duration-300">
                      <RenderEmoji e={selecionados[i]} className="w-10 h-10" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Teclado de opções (realmente aleatório no render) */}
          <div className="flex flex-wrap justify-center gap-4">
            {useMemo(() => [...itensFinal].sort(() => Math.random() - 0.5), [itensFinal]).map((it: string, i: number) => {
              const jaUsado = selecionados.includes(it);
              return (
                <button
                  key={i}
                  disabled={jaUsado}
                  onClick={() => handleItem(it)}
                  className={`${btnSize} bg-white rounded-[2rem] shadow-xl border-4 border-white transition-all ${
                    jaUsado 
                      ? "opacity-20 grayscale scale-90 cursor-default" 
                      : "hover:scale-110 active:scale-90 hover:border-primary/20 active:shadow-inner"
                  }`}
                >
                  <RenderEmoji e={it} className="w-12 h-12" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}


// 42. SINAL VERDE VERMELHO — Go/No-Go rápido
function SinalVerdeVermelho({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [index, setIndex] = useState(-1); // -1 = standby
  const [fase, setFase] = useState<"ready" | "show" | "wait">("ready");
  const [feedback, setFeedback] = useState<"hit" | "miss" | "wrong" | null>(null);
  const [acertos, setAcertos] = useState(0);
  const timerRef = useRef<any>(null);
  const clickedRef = useRef(false);

  const total = p.seq.length;

  const proximo = (idx: number) => {
    if (idx >= total) {
      // Fim do jogo: calcular se passou no critério
      // No Go/No-Go clínico, a criança precisa de alta precisão (geralmente >80%)
      const score = (acertos / total);
      onDone(score >= 0.8);
      return;
    }

    setIndex(idx);
    setFase("show");
    setFeedback(null);
    clickedRef.current = false;

    const current = p.seq[idx];

    // Tempo de exibição do sinal
    timerRef.current = setTimeout(() => {
      // Se era verde e não clicou = miss
      if (current.tipo === "verde" && !clickedRef.current) {
        setFeedback("miss");
      }
      // Se era vermelho e não clicou = hit (acerto por inibição)
      if (current.tipo === "vermelho" && !clickedRef.current) {
        setAcertos(a => a + 1);
        setFeedback("hit");
      }
      
      setFase("wait");
      
      // Intervalo entre estímulos
      timerRef.current = setTimeout(() => proximo(idx + 1), p.intervaloMs);
    }, current.displayMs);
  };

  const handleAction = () => {
    if (fase !== "show" || clickedRef.current) return;
    clickedRef.current = true;
    clearTimeout(timerRef.current);

    const current = p.seq[index];
    if (current.tipo === "verde") {
      setAcertos(a => a + 1);
      setFeedback("hit");
    } else {
      setFeedback("wrong"); // Clicou no vermelho = erro de comissão
    }

    setFase("wait");
    timerRef.current = setTimeout(() => proximo(index + 1), p.intervaloMs);
  };

  const btnSize = sens.largerTargets ? "w-64 h-64" : "w-48 h-48";

  return (
    <div className="space-y-8 text-center py-6 min-h-[300px] flex flex-col items-center justify-center">
      {fase === "ready" ? (
        <div className="space-y-4">
          <div className="text-xl font-black text-primary">Pronto?</div>
          <button
            onClick={() => proximo(0)}
            className="px-10 py-4 bg-primary text-white rounded-full font-black shadow-xl hover:scale-110 active:scale-95 transition-all"
          >
            VAMOS COMEÇAR!
          </button>
        </div>
      ) : (
        <div className="relative">
          {/* Indicador de progresso */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-1">
             {range(total).map((i: number) => (
               <div key={i} className={`w-2 h-2 rounded-full ${i <= index ? 'bg-primary' : 'bg-muted'}`} />
             ))}
          </div>

          <button
            onPointerDown={handleAction}
            className={`
              ${btnSize} rounded-full flex items-center justify-center text-8xl shadow-2xl transition-all duration-100
              ${fase === "show" ? 'scale-105 active:scale-90' : 'scale-90 opacity-20'}
              ${fase === "show" && p.seq[index].tipo === "verde" ? 'bg-emerald-500 ring-8 ring-emerald-300' : ''}
              ${fase === "show" && p.seq[index].tipo === "vermelho" ? 'bg-rose-500 ring-8 ring-rose-300' : ''}
              ${fase === "wait" && feedback === "hit" ? 'bg-success/50 ring-4 ring-success' : ''}
              ${fase === "wait" && feedback === "wrong" ? 'bg-destructive/50 ring-4 ring-destructive' : ''}
              ${fase === "wait" && feedback === "miss" ? 'bg-amber-500/50 ring-4 ring-amber-300' : 'bg-slate-200'}
            `}
          >
            {fase === "show" ? (
              <RenderEmoji e={p.seq[index].emoji} />
            ) : (
              feedback === "hit" ? "✅" : feedback === "wrong" ? "❌" : feedback === "miss" ? "❓" : "⚪"
            )}
          </button>
          
          <div className="mt-6 text-sm font-bold text-muted-foreground uppercase tracking-widest">
            {fase === "show" ? "TOQUE RÁPIDO!" : "ESPERE..."}
          </div>
        </div>
      )}
    </div>
  );
}

// ============== NOVAS MECÂNICAS IMPLEMENTADAS ==============

// 43. PARES SONOROS
function ParesSonoros({ p, onDone }: any) {
  const { speak } = usePipVoice();
  const [virados, setVirados] = useState<number[]>([]);
  const [paresEncontrados, setParesEncontrados] = useState<string[]>([]);
  const [cartas, setCartas] = useState<any[]>([]);

  useEffect(() => {
    const double = [...p.sons, ...p.sons].sort(() => Math.random() - 0.5);
    // Adicionar variabilidade de volume baseada no nível (progressão sonora segura)
    const volBase = p.nivel === 1 ? 1.0 : p.nivel === 2 ? 0.8 : 0.6;
    setCartas(double.map((s, i) => ({ id: i, som: s, volume: volBase })));

  }, [p.sons]);

  const handleCarta = (idx: number) => {
    if (virados.length === 2 || virados.includes(idx) || paresEncontrados.includes(cartas[idx].som)) return;
    
    speak(cartas[idx].som, { volume: cartas[idx].volume });
    const novos = [...virados, idx];

    setVirados(novos);

    if (novos.length === 2) {
      const c1 = cartas[novos[0]];
      const c2 = cartas[novos[1]];
      if (c1.som === c2.som) {
        setParesEncontrados((prev: string[]) => [...prev, c1.som]);
        setVirados([]);
        if (paresEncontrados.length + 1 === p.numPares) {
          setTimeout(() => onDone(true), 1000);
        }
      } else {
        setTimeout(() => setVirados([]), 1500);
      }
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
      {cartas.map((c, i) => {
        const isVirada = virados.includes(i) || paresEncontrados.includes(c.som);
        return (
          <button
            key={i}
            onClick={() => handleCarta(i)}
            className={`h-32 rounded-3xl border-4 transition-all flex items-center justify-center ${isVirada ? 'bg-white border-primary shadow-inner' : 'bg-primary/20 border-primary/40 shadow-lg'}`}
          >
            {isVirada ? <RenderEmoji e={c.som} className="w-16 h-16" /> : <div className="text-4xl">🔔</div>}
          </button>
        );
      })}
    </div>
  );
}

// 44. SEQUÊNCIA AUDITIVA
function SequenciaAuditiva({ p, onDone }: any) {
  const { speak } = usePipVoice();
  const [fase, setFase] = useState<"ouvir" | "repetir">("ouvir");
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const [tocandoIdx, setTocandoIdx] = useState(-1);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= p.seq.length) {
        clearInterval(interval);
        setTocandoIdx(-1);
        setTimeout(() => setFase("repetir"), 500);
        return;
      }
      setTocandoIdx(i);
      // Adicionar variabilidade de volume baseada no nível
      const vol = p.nivel === 1 ? 1.0 : p.nivel === 2 ? 0.8 : 0.6;
      speak(p.seq[i], { volume: vol });

      i++;
    }, 1200);
    return () => clearInterval(interval);
  }, [p.seq, speak]);

  const handleItem = (som: string) => {
    if (fase !== "repetir") return;
    const novos = [...selecionados, som];
    setSelecionados(novos);
    if (novos.length === p.seq.length) {
      const correto = novos.every((v, idx) => v === p.seq[idx]);
      setTimeout(() => onDone(correto), 600);
    }
  };

  return (
    <div className="text-center py-8 space-y-8">
      <div className="text-xl font-black text-primary uppercase">{fase === "ouvir" ? "OUÇA COM ATENÇÃO!" : "AGORA REPITA!"}</div>
      <div className="flex justify-center gap-4">
        {p.seq.map((s: any, i: number) => (
          <div key={i} className={`w-20 h-20 rounded-2xl border-4 flex items-center justify-center transition-all ${tocandoIdx === i ? 'bg-yellow-100 border-yellow-400 scale-110' : 'bg-white border-border'}`}>
             {tocandoIdx === i && <RenderEmoji e={s} className="w-12 h-12" />}
             {fase === "repetir" && selecionados[i] && <RenderEmoji e={selecionados[i]} className="w-12 h-12" />}
          </div>
        ))}
      </div>
      {fase === "repetir" && (
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {Array.from(new Set(p.seq)).map((s: any, i: number) => (
            <button key={i} onClick={() => handleItem(s as string)} className="w-24 h-24 bg-card rounded-3xl border-2 border-border shadow-md hover:scale-105 active:scale-95 flex items-center justify-center text-4xl">
              <RenderEmoji e={s as string} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 45. BANQUETE DOS DINOS
function BanqueteDinos({ p, onDone }: any) {
  const options = useMemo(() => {
    // p.opts já vem do builder, mas vamos garantir 3 opções reais
    const base = p.opts || [];
    if (!base.includes(p.qtd)) base.push(p.qtd);
    return [...new Set(base)].sort((a: any, b: any) => a - b);
  }, [p.opts, p.qtd]);

  return (
    <div className="py-8 text-center space-y-10 w-full">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="text-[10rem] md:text-[12rem] animate-bounce-slow drop-shadow-2xl">
          {p.dino}
        </div>
        
        <div className="bg-white/60 backdrop-blur-md p-8 rounded-[3rem] border-4 border-white/80 shadow-2xl flex flex-wrap justify-center gap-3 max-w-[320px] min-h-[150px] items-center">
          {range(p.qtd).map((i: number) => (
            <div key={i} className="animate-in zoom-in duration-300" style={{ animationDelay: `${i * 50}ms` }}>
              <RenderEmoji e={p.comida} className="w-12 h-12" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {options.map((opt: any, i: number) => (
          <button 
            key={i} 
            onClick={() => onDone(opt === p.qtd)} 
            className="w-24 h-24 bg-white rounded-[2rem] border-4 border-primary/10 text-5xl font-black text-primary hover:bg-primary/5 hover:scale-110 active:scale-95 transition-all shadow-xl"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}


// 46. TREM NUMÉRICO
function TremNumerico({ p, onDone }: any) {


  const correct = p.seq[p.buracos[0]];
  const options = useMemo(() => {
    const wrong1 = correct + 1;
    const wrong2 = correct - 1 > 0 ? correct - 1 : correct + 2;
    return [correct, wrong1, wrong2].sort(() => Math.random() - 0.5);
  }, [correct]);

  return (
    <div className="py-10 flex flex-col items-center gap-8 w-full">
      <div className="flex items-center gap-3 overflow-x-auto pb-6 max-w-full px-4 scrollbar-hide">
        <div className="text-7xl drop-shadow-lg flex-shrink-0">🚂</div>
        {p.seq.map((n: number, i: number) => {
          const isBuraco = p.buracos.includes(i);
          return (
            <div 
              key={i} 
              className={`w-24 h-28 rounded-2xl border-4 flex-shrink-0 flex items-center justify-center text-4xl font-black shadow-md transition-all
                ${isBuraco 
                  ? 'bg-primary/5 border-dashed border-primary/30 text-primary/20 animate-pulse' 
                  : 'bg-white border-primary/20 text-primary'}`}
            >
              {isBuraco ? "?" : n}
            </div>
          );
        })}
      </div>
      
      <div className="flex gap-4 flex-wrap justify-center">
        {options.map((val, idx) => (
          <button 
            key={idx} 
            onClick={() => onDone(val === correct)} 
            className="w-24 h-24 bg-white hover:bg-primary/5 text-primary rounded-[2rem] border-4 border-primary/10 text-4xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}


// 47. TROCA-TROCA DE REGRAS
function TrocaRegras({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const [regra, setRegra] = useState(p.regras[0]);
  const [round, setRound] = useState(0);
  const [acertosLocais, setAcertosLocais] = useState(0);
  const [alvo, setAlvo] = useState<any>(null);
  const [opts, setOpts] = useState<any[]>([]);

  const gerarRound = () => {
    const r = p.regras[Math.floor(Math.random() * p.regras.length)];
    setRegra(r);
    const cores = ["🔴", "🔵", "🟢", "🟡"];
    const formas = ["🔺", "🟦", "🟢", "⭐"];
    const items = range(4).map((i: number) => ({ 
      cor: cores[i], 
      forma: formas[(i + 1) % 4] 
    }));
    setAlvo(items[Math.floor(Math.random() * items.length)]);
    setOpts([...items].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    gerarRound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpt = (o: any) => {
    const match = regra === "cor" ? o.cor === alvo.cor : o.forma === alvo.forma;
    const novosAcertos = acertosLocais + (match ? 1 : 0);
    setAcertosLocais(novosAcertos);
    
    if (round + 1 >= p.rounds) {
      onDone(novosAcertos >= p.rounds * 0.8);
    } else {
      setRound((r: number) => r + 1);
      gerarRound();
    }
  };

  if (!alvo) return null;


  return (
    <div className="py-6 text-center space-y-10 w-full max-w-lg mx-auto">
      <div className="inline-block px-10 py-4 rounded-[2rem] bg-primary text-white font-black text-2xl animate-in zoom-in duration-300 shadow-xl border-4 border-white">
        REGRA: {regra === "cor" ? "COR 🎨" : "FORMA 📐"}
      </div>

      <div className="bg-white/60 backdrop-blur-md p-10 rounded-[4rem] inline-block border-4 border-white shadow-2xl animate-pulse">
        <div className="text-8xl flex gap-6">
          <span>{alvo.cor}</span>
          <span>{alvo.forma}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
        {opts.map((o, i) => (
          <button 
            key={i} 
            onClick={() => handleOpt(o)} 
            className="p-8 bg-white rounded-[2.5rem] border-4 border-white shadow-xl hover:scale-110 active:scale-90 transition-all flex gap-4 justify-center text-6xl hover:border-primary/20"
          >
            <span>{o.cor}</span>
            <span>{o.forma}</span>
          </button>
        ))}
      </div>
      
      <div className="text-xs font-black text-white/50 uppercase tracking-widest">
        Rodada {round + 1} de {p.rounds}
      </div>
    </div>
  );
}


// 48. PONTE DE BLOCOS
function PonteBlocos({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const press = sens.reduceMotion ? "" : "active:scale-90 hover:scale-105";

  return (
    <div className="py-10 text-center space-y-12 w-full max-w-xl mx-auto">
      <div className="flex items-center justify-center gap-2">
        {/* Pilar Esquerdo */}
        <div className="h-24 w-12 bg-slate-300 rounded-t-2xl shadow-inner border-r-4 border-slate-400"></div>
        
        {/* Área da Ponte (Target) */}
        <div className="flex-1 max-w-[200px] h-20 border-4 border-dashed border-white/80 rounded-[2rem] flex items-center justify-center bg-white/20 animate-pulse">
           <div className="text-6xl opacity-20 grayscale">{p.target}</div>
        </div>
        
        {/* Pilar Direito */}
        <div className="h-24 w-12 bg-slate-300 rounded-t-2xl shadow-inner border-l-4 border-slate-400"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {p.opts.map((o: any, i: number) => (
          <button 
            key={i} 
            onClick={() => onDone(o === p.target)} 
            className={`w-28 h-28 bg-white rounded-[2.5rem] shadow-xl transition-all text-6xl flex items-center justify-center border-4 border-white/50 ${press}`}
          >
            {o}
          </button>
        ))}
      </div>
      
      <div className="text-sm font-black text-white/60 uppercase tracking-widest">
        Escolha o bloco para completar a ponte!
      </div>
    </div>
  );
}

// 49. QUEBRA-CABEÇA MÁGICO (Jigsaw Real)
function QuebraCabecaMagico({ p, onDone }: any) {
  const total = p.pecas || 4;
  const cols = total > 4 ? 3 : 2;
  const rows = Math.ceil(total / cols);
  
  const [pecasEncaixadas, setPecasEncaixadas] = useState<number[]>([]);
  
  // Gerar peças embaralhadas iniciais (somente as que não foram encaixadas)
  const [pecasDisponiveis, setPecasDisponiveis] = useState<number[]>(() => 
    range(total).sort(() => Math.random() - 0.5)
  );

  const handleSnap = (idx: number) => {
    if (pecasEncaixadas.includes(idx)) return;
    
    const novasEncaixadas = [...pecasEncaixadas, idx];
    setPecasEncaixadas(novasEncaixadas);
    setPecasDisponiveis(prev => prev.filter(pIdx => pIdx !== idx));
    
    if (novasEncaixadas.length === total) {
      setTimeout(() => onDone(true), 1000);
    }
  };

  return (
    <div className="py-6 text-center space-y-12 w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Moldura / Silhueta do Quebra-Cabeça */}
      <div 
        className="relative bg-slate-100 rounded-[2rem] border-8 border-white shadow-2xl overflow-hidden"
        style={{ 
          width: 320, 
          height: 320,
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {range(total).map((idx) => {
          const isEncaixada = pecasEncaixadas.includes(idx);
          return (
            <div 
              key={idx}
              className="relative border border-slate-200/50 flex items-center justify-center overflow-hidden"
            >
              {/* Silhueta (fantasma) */}
              {!isEncaixada && (
                <div className="opacity-10 grayscale scale-110 pointer-events-none">
                  <RenderPiece emoji={p.emoji} idx={idx} total={total} cols={cols} rows={rows} size={320} />
                </div>
              )}
              
              {/* Peça encaixada com animação */}
              <AnimatePresence>
                {isEncaixada && (
                  <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0"
                  >
                    <RenderPiece emoji={p.emoji} idx={idx} total={total} cols={cols} rows={rows} size={320} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Banco de Peças Recortadas */}
      <div className="flex flex-wrap justify-center gap-6 bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border-4 border-white shadow-xl min-h-[140px] w-full max-w-2xl">
        {pecasDisponiveis.map((idx) => (
          <motion.div
            key={idx}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={1}
            onDragEnd={(_, info) => {
              // Lógica de Snap simplificada: se soltar perto da área central
              // Em um app real usaríamos ref da moldura e coordenadas, 
              // aqui simulamos por intenção de arraste ou proximidade.
              // Para UX de criança, qualquer drop bem sucedido snapamos a peça correta se houver tracking.
              // Simplificando: como as peças são únicas, se o usuário arrastar o suficiente "para cima", snapamos.
              if (info.offset.y < -100) {
                handleSnap(idx);
              }
            }}
            whileTap={{ scale: 1.1, zIndex: 50 }}
            className="w-24 h-24 bg-white rounded-2xl shadow-lg border-2 border-primary/10 flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
          >
             <RenderPiece emoji={p.emoji} idx={idx} total={total} cols={cols} rows={rows} size={96} isThumbnail />
          </motion.div>
        ))}
      </div>

      <div className="text-sm font-black text-white/60 uppercase tracking-widest animate-pulse">
        Arraste as peças para o lugar correto!
      </div>
    </div>
  );
}

function RenderPiece({ emoji, idx, total, cols, rows, size, isThumbnail }: any) {
  const col = idx % cols;
  const row = Math.floor(idx / cols);
  const w = size / cols;
  const h = size / rows;
  
  return (
    <div 
      className="relative overflow-hidden flex items-center justify-center"
      style={{ width: isThumbnail ? size : '100%', height: isThumbnail ? size : '100%' }}
    >
      <div 
        style={{ 
          transform: isThumbnail 
            ? `scale(${cols}) translate(${-(col * 100 / cols) + (cols-1)*12.5}%, ${-(row * 100 / rows) + (rows-1)*12.5}%)` 
            : `scale(${cols}) translate(${-(col * 100 / cols) + (cols-1)*12.5}%, ${-(row * 100 / rows) + (rows-1)*12.5}%)`,
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <RenderEmoji e={emoji} className={size > 100 ? "w-64 h-64" : "w-48 h-48"} />
      </div>
    </div>
  );
}

// 50. CONSTRUTOR DE FORMAS — montagem real com formas geométricas
type FormaPeca = {
  tipo: "quadrado" | "retangulo" | "circulo" | "triangulo";
  x: number;
  y: number;
  w: number;
  h: number;
  cor: string;
  nome: string;
};

const BLUEPRINTS: Record<string, FormaPeca[]> = {
  CASA: [
    { tipo: "triangulo", x: 10, y: 8, w: 80, h: 32, cor: "#EF4444", nome: "TELHADO" },
    { tipo: "quadrado", x: 20, y: 40, w: 60, h: 50, cor: "#FBBF24", nome: "PAREDE" },
    { tipo: "retangulo", x: 42, y: 62, w: 16, h: 28, cor: "#92400E", nome: "PORTA" },
    { tipo: "circulo", x: 25, y: 46, w: 14, h: 14, cor: "#38BDF8", nome: "JANELA" },
  ],
  ROBÔ: [
    { tipo: "circulo", x: 46, y: 4, w: 8, h: 8, cor: "#F472B6", nome: "ANTENA" },
    { tipo: "quadrado", x: 32, y: 14, w: 36, h: 30, cor: "#38BDF8", nome: "CABEÇA" },
    { tipo: "retangulo", x: 28, y: 46, w: 44, h: 34, cor: "#6366F1", nome: "CORPO" },
    { tipo: "retangulo", x: 12, y: 48, w: 12, h: 26, cor: "#94A3B8", nome: "BRAÇO" },
    { tipo: "circulo", x: 34, y: 82, w: 12, h: 12, cor: "#334155", nome: "RODA" },
  ],
  CARRO: [
    { tipo: "retangulo", x: 12, y: 44, w: 76, h: 24, cor: "#EF4444", nome: "LATARIA" },
    { tipo: "quadrado", x: 30, y: 24, w: 34, h: 22, cor: "#38BDF8", nome: "VIDRO" },
    { tipo: "circulo", x: 22, y: 66, w: 18, h: 18, cor: "#334155", nome: "RODA" },
    { tipo: "circulo", x: 60, y: 66, w: 18, h: 18, cor: "#334155", nome: "RODA" },
  ],
  TREM: [
    { tipo: "circulo", x: 20, y: 6, w: 16, h: 16, cor: "#CBD5E1", nome: "FUMAÇA" },
    { tipo: "quadrado", x: 14, y: 30, w: 32, h: 32, cor: "#22C55E", nome: "CABINE" },
    { tipo: "retangulo", x: 48, y: 40, w: 40, h: 22, cor: "#F97316", nome: "VAGÃO" },
    { tipo: "circulo", x: 20, y: 64, w: 16, h: 16, cor: "#334155", nome: "RODA" },
    { tipo: "circulo", x: 60, y: 64, w: 16, h: 16, cor: "#334155", nome: "RODA" },
  ],
  FLOR: [
    { tipo: "circulo", x: 40, y: 10, w: 20, h: 20, cor: "#F472B6", nome: "PÉTALA" },
    { tipo: "circulo", x: 20, y: 26, w: 20, h: 20, cor: "#F472B6", nome: "PÉTALA" },
    { tipo: "circulo", x: 60, y: 26, w: 20, h: 20, cor: "#F472B6", nome: "PÉTALA" },
    { tipo: "circulo", x: 40, y: 26, w: 20, h: 20, cor: "#FBBF24", nome: "MIOLO" },
    { tipo: "retangulo", x: 46, y: 46, w: 8, h: 44, cor: "#22C55E", nome: "CAULE" },
  ],
  PALHAÇO: [
    { tipo: "triangulo", x: 30, y: 4, w: 40, h: 20, cor: "#6366F1", nome: "CHAPÉU" },
    { tipo: "circulo", x: 26, y: 24, w: 48, h: 48, cor: "#FDE68A", nome: "ROSTO" },
    { tipo: "circulo", x: 44, y: 42, w: 12, h: 12, cor: "#EF4444", nome: "NARIZ" },
    { tipo: "retangulo", x: 38, y: 60, w: 24, h: 8, cor: "#DB2777", nome: "BOCA" },
  ],
};

function FormaSVG({ f, opacity = 1, dashed = false }: { f: FormaPeca; opacity?: number; dashed?: boolean }) {
  const stroke = dashed ? "#94A3B8" : "rgba(0,0,0,0.15)";
  const common = {
    fill: dashed ? "none" : f.cor,
    stroke,
    strokeWidth: dashed ? 1.5 : 1,
    strokeDasharray: dashed ? "4 3" : undefined,
    opacity,
  } as any;
  if (f.tipo === "circulo") {
    return <ellipse cx={f.x + f.w / 2} cy={f.y + f.h / 2} rx={f.w / 2} ry={f.h / 2} {...common} />;
  }
  if (f.tipo === "triangulo") {
    return <polygon points={`${f.x + f.w / 2},${f.y} ${f.x + f.w},${f.y + f.h} ${f.x},${f.y + f.h}`} {...common} />;
  }
  return <rect x={f.x} y={f.y} width={f.w} height={f.h} rx={2} {...common} />;
}

function MiniForma({ f, size = 56 }: { f: FormaPeca; size?: number }) {
  const norm: FormaPeca = { ...f, x: 6, y: 6, w: 88, h: 88 };
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <FormaSVG f={norm} />
    </svg>
  );
}

function ConstrutorDeFormas({ p, onDone }: any) {
  const blueprint: FormaPeca[] = BLUEPRINTS[p?.item as string] || BLUEPRINTS.CASA;
  const extras = Math.min(4, p?.pecasExtras ?? 0);

  const [colocadas, setColocadas] = useState<number[]>([]);
  const [erro, setErro] = useState<number | null>(null);
  const [bandeja] = useState(() => {
    const reais = blueprint.map((f, i) => ({ key: `r${i}`, slot: i, f }));
    const distratores = Array.from({ length: extras }).map((_, i) => {
      const base = blueprint[i % blueprint.length];
      const tipos: FormaPeca["tipo"][] = ["quadrado", "circulo", "triangulo", "retangulo"];
      const tipo = tipos[(i + 2) % tipos.length];
      return {
        key: `d${i}`,
        slot: -1,
        f: { ...base, tipo, cor: "#A1A1AA", nome: "?" } as FormaPeca,
      };
    });
    return [...reais, ...distratores].sort(() => Math.random() - 0.5);
  });

  const proximoSlot = colocadas.length;

  const tentar = (item: { key: string; slot: number }) => {
    if (item.slot === proximoSlot) {
      const next = [...colocadas, item.slot];
      setColocadas(next);
      if (next.length === blueprint.length) setTimeout(() => onDone(true), 1400);
    } else {
      setErro(item.key as any);
      setTimeout(() => setErro(null), 500);
    }
  };

  const alvo = blueprint[proximoSlot];

  return (
    <div className="py-4 w-full max-w-3xl mx-auto flex flex-col items-center gap-8">
      <div className="text-center">
        <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Construa</div>
        <div className="text-2xl font-black text-primary">{p?.item || "CASA"}</div>
      </div>

      {/* Mesa de montagem */}
      <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] bg-white/70 backdrop-blur-xl rounded-[3rem] border-4 border-white shadow-2xl overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {blueprint.map((f, i) =>
            colocadas.includes(i) ? null : <FormaSVG key={`g${i}`} f={f} dashed opacity={i === proximoSlot ? 1 : 0.35} />
          )}
          {colocadas.map((i) => (
            <g key={`c${i}`} className="animate-in zoom-in duration-300">
              <FormaSVG f={blueprint[i]} />
            </g>
          ))}
        </svg>
        {alvo && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-black uppercase whitespace-nowrap">
            Falta: {alvo.nome}
          </div>
        )}
      </div>

      {/* Bandeja de peças */}
      <div className="flex flex-wrap justify-center gap-4 bg-white/40 backdrop-blur-md p-6 rounded-[2.5rem] border-4 border-white shadow-xl w-full">
        {bandeja.map((item) => {
          const usada = colocadas.includes(item.slot) && item.slot >= 0;
          return (
            <button
              key={item.key}
              disabled={usada}
              onClick={() => tentar(item)}
              className={`w-20 h-20 rounded-3xl bg-white shadow-lg border-4 flex items-center justify-center transition-all ${
                usada
                  ? "opacity-25 scale-90 border-success/40"
                  : erro === (item.key as any)
                    ? "border-destructive scale-90"
                    : "border-white hover:scale-105 active:scale-95"
              }`}
            >
              <MiniForma f={item.f} size={52} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 51. ESTÚDIO DE ARTE — desenho livre
const PALETA_LIVRE = [
  "#000000", "#6B7280", "#FFFFFF", "#EF4444", "#F97316", "#F59E0B",
  "#FACC15", "#A3E635", "#22C55E", "#10B981", "#14B8A6", "#06B6D4",
  "#0EA5E9", "#3B82F6", "#6366F1", "#8B5CF6", "#A855F7", "#D946EF",
  "#EC4899", "#F43F5E", "#F87171", "#FDA4AF", "#92400E", "#78350F",
];

const PINCEIS = [
  { id: "lapis", nome: "Lápis", icone: "✏️", largura: 3 },
  { id: "caneta", nome: "Caneta", icone: "🖊️", largura: 8 },
  { id: "pincel", nome: "Pincel", icone: "🖌️", largura: 18 },
  { id: "marcador", nome: "Marcador", icone: "🖍️", largura: 32 },
];

function EstudioArteContorno({ onDone }: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cor, setCor] = useState("#3B82F6");
  const [pincel, setPincel] = useState(PINCEIS[1]);
  const [borracha, setBorracha] = useState(false);
  const desenhando = useRef(false);
  const [temTraco, setTemTraco] = useState(false);

  const ctxOf = () => canvasRef.current?.getContext("2d") || null;

  useEffect(() => {
    const ctx = ctxOf();
    if (!ctx || !canvasRef.current) return;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }, []);

  const pos = (e: any) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const cx = e.touches?.[0]?.clientX ?? e.clientX;
    const cy = e.touches?.[0]?.clientY ?? e.clientY;
    return {
      x: ((cx - rect.left) / rect.width) * canvas.width,
      y: ((cy - rect.top) / rect.height) * canvas.height,
    };
  };

  const start = (e: any) => {
    const ctx = ctxOf();
    if (!ctx) return;
    desenhando.current = true;
    const { x, y } = pos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    move(e);
  };

  const move = (e: any) => {
    if (!desenhando.current) return;
    const ctx = ctxOf();
    if (!ctx) return;
    const { x, y } = pos(e);
    ctx.strokeStyle = borracha ? "#FFFFFF" : cor;
    ctx.lineWidth = borracha ? 36 : pincel.largura;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
    if (!temTraco) setTemTraco(true);
  };

  const stop = () => {
    desenhando.current = false;
  };

  const limpar = () => {
    const ctx = ctxOf();
    if (!ctx || !canvasRef.current) return;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setTemTraco(false);
  };

  return (
    <div className="py-4 w-full max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Estúdio de Arte</div>
        <div className="text-xl font-black text-primary">Desenhe o que você quiser!</div>
      </div>

      <div className="bg-white rounded-[2.5rem] border-8 border-white shadow-2xl overflow-hidden">
        <canvas
          ref={canvasRef}
          width={700}
          height={520}
          onMouseDown={start}
          onMouseMove={move}
          onMouseUp={stop}
          onMouseLeave={stop}
          onTouchStart={start}
          onTouchMove={move}
          onTouchEnd={stop}
          className="w-full h-auto touch-none cursor-crosshair block"
        />
      </div>

      {/* Ferramentas */}
      <div className="flex flex-wrap justify-center gap-3">
        {PINCEIS.map((b) => (
          <button
            key={b.id}
            onClick={() => {
              setPincel(b);
              setBorracha(false);
            }}
            className={`px-4 py-2 rounded-2xl font-black text-sm shadow-md border-4 transition-all flex items-center gap-2 ${
              !borracha && pincel.id === b.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-white text-primary border-white hover:scale-105"
            }`}
          >
            <span className="text-lg">{b.icone}</span>
            {b.nome}
          </button>
        ))}
        <button
          onClick={() => setBorracha(true)}
          className={`px-4 py-2 rounded-2xl font-black text-sm shadow-md border-4 transition-all ${
            borracha ? "bg-primary text-primary-foreground border-primary" : "bg-white text-primary border-white hover:scale-105"
          }`}
        >
          🧽 Borracha
        </button>
        <button
          onClick={limpar}
          className="px-4 py-2 rounded-2xl font-black text-sm shadow-md border-4 bg-white text-destructive border-white hover:scale-105"
        >
          🗑️ Limpar
        </button>
      </div>

      {/* 24 cores */}
      <div className="grid grid-cols-8 sm:grid-cols-12 gap-2 bg-white/50 backdrop-blur-md p-4 rounded-[2rem] border-4 border-white shadow-xl">
        {PALETA_LIVRE.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCor(c);
              setBorracha(false);
            }}
            aria-label={`Cor ${c}`}
            style={{ background: c }}
            className={`aspect-square rounded-full shadow-md border-4 transition-transform ${
              cor === c && !borracha ? "border-primary scale-110" : "border-white hover:scale-105"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => onDone(true)}
          disabled={!temTraco}
          className="px-8 py-4 rounded-[2rem] bg-success text-success-foreground font-black text-lg shadow-xl disabled:opacity-40 hover:scale-105 transition-transform"
        >
          ✅ Terminei meu desenho
        </button>
      </div>
    </div>
  );
}



