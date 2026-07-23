import { createFileRoute, Link, useNavigate, Navigate } from "@tanstack/react-router";
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
} from "lucide-react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { toast } from "sonner";
import {
  CATEGORIAS,
  VARIATIONS,
  MOTORZINHO_BANK,
  type CategoriaSlug,
  type MotorzinhoTag,
  type ShapeType,
  type MosaicoPiece,
} from "@/data/neuro-treino/variations";
import { objetoImg, emojiImg, ilustracao, semEmoji } from "@/data/neuro-treino/objetos";
import { RenderEmoji } from "@/components/neuro-treino/RenderEmoji";
import { getElementoImg } from "@/data/hiperfocos-img";
import { useHiperfoco } from "@/context/HiperfocoContext";
import { useAppState } from "@/core/store";
import { applyHiperfoco, pickElemento, pipFraseAcerto, pipFraseIncentivo } from "@/data/hiperfocos";
import { usePipVoice } from "@/hooks/usePipVoice";
import { useSpeechMatcher } from "@/hooks/useSpeechMatcher";
import { useSensoryProfile } from "@/hooks/useSensoryProfile";
import { useNeuroAdaptive } from "@/hooks/useNeuroAdaptive";
import { getNeuroSkillInfo } from "@/data/neuro-treino/skill-map";
import { useAbaPrompting } from "@/hooks/useAbaPrompting";
import { PROMPT_HINTS } from "@/services/neuro-treino/promptingEngine";

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
  const elemento = hiperfoco ? pickElemento(hiperfoco, seed) : "";
  const instrucaoTematica =
    hiperfoco && meta ? applyHiperfoco(meta.instrucao, hiperfoco, seed) : "";
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
    return `${saud}${instrucaoTematica}${extra}`;
  }, [variation, instrucaoTematica, nomeCrianca]);


  useEffect(() => {
    if (!voiceOn || !narracao) return;
    if (slug === "motorzinho-dos-sons") return;
    if (isLoading || error) return;
    const t = setTimeout(() => {
      speak(narracao);
    }, 250);
    return () => {
      clearTimeout(t);
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [narracao, voiceOn, slug, isLoading, error]);

  // ===== Early returns (depois de todos os hooks) =====
  if (!hiperfoco) {
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
            Aplicando hiperfoco: {hiperfoco.label}
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
      const frase = pipFraseAcerto(hiperfoco);
      toast.success(frase);
      if (voiceOn) speak(`${nomeCrianca ? nomeCrianca + ", " : ""}${frase}`);
    } else {
      const frase = pipFraseIncentivo(hiperfoco);
      toast(frase);
      if (voiceOn) speak(frase);
    }
    setTimeout(() => setIndex((i) => i + 1), 900);
  };

  // Marca "pulei" como pedido de ajuda (registra no log e sinaliza dificuldade)
  const onSkip = () => {
    const activityId = variation ? `${slug}:${variation.id}` : slug;
    requestHelp(activityId);
    setIndex((i) => i + 1);
  };


  return (
    <Shell>
      <div className="flex items-center justify-between gap-3 mb-2">
        <Link
          to="/neuro-treino"
          className="flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={16} /> Voltar
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleVoice}
            title={voiceOn ? "Desligar voz da PIP" : "Ligar voz da PIP"}
            className={`flex items-center gap-1 text-xs font-bold rounded-full border px-3 py-1 transition ${voiceOn ? "bg-success/10 border-success/40 text-success" : "bg-muted border-border text-muted-foreground"}`}
          >
            {voiceOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
            Voz {voiceOn ? "ON" : "OFF"}
          </button>
          <Link
            to="/neuro-treino/configurar"
            search={{ next: slug }}
            className="flex items-center gap-1 text-xs font-bold rounded-full bg-primary/10 border border-primary/30 px-3 py-1 hover:bg-primary/20"
          >
            {hiperfoco.label} <span className="text-primary">· trocar</span>
          </Link>
        </div>
      </div>
      <PageHeader title={meta.nome} subtitle={instrucaoTematica} />

      {slug !== "motorzinho-dos-sons" && (
        <div className="mb-3 flex items-center gap-2 justify-center">
          <button
            onClick={replay}
            disabled={!voiceOn || isSpeaking}
            className="flex items-center gap-2 text-xs font-bold rounded-full bg-primary/10 border border-primary/30 px-3 py-1 hover:bg-primary/20 disabled:opacity-50"
          >
            <Volume2 size={14} className={isSpeaking ? "animate-pulse" : ""} />
            {isSpeaking ? "PIP falando..." : "Ouvir PIP de novo"}
          </button>
        </div>
      )}

      <div className="flex items-center justify-between mb-4 text-sm font-bold">
        <span className="text-muted-foreground">
          Exercício {(index % vars.length) + 1} de {vars.length}
        </span>
        <span className="text-success inline-flex items-center gap-1">
          <Star size={14} className="fill-current" /> {acertos}
        </span>
      </div>

      {/* Chip de nível de ajuda ABA (fading de prompting) */}
      {activeChild && !aba.loading && (
        <div className="mb-3 flex items-center justify-between rounded-2xl bg-card border-2 border-primary/20 px-3 py-2 text-xs">
          <div className="flex items-center gap-2">
            <Hand size={14} className="text-primary" />
            <span className="font-black uppercase tracking-wider text-primary">
              Ajuda: {aba.label}
            </span>
          </div>
          <span className="text-muted-foreground truncate max-w-[60%] text-right">
            {aba.hint}
          </span>
        </div>
      )}
      {aba.mastery.achieved && (
        <div className="mb-3 rounded-2xl bg-success/10 border-2 border-success/40 px-3 py-2 text-xs font-bold text-success text-center">
          🎓 Habilidade dominada — pronta para avançar!
        </div>
      )}

      {slug !== "motorzinho-dos-sons" && !adjustment.stimuliReduction && (
        <div className="mb-3 rounded-2xl bg-card border-2 border-dashed border-primary/30 px-4 py-2 text-sm text-center flex items-center justify-center gap-3">
          <img
            src={getElementoImg(elemento)}
            alt={elemento}
            className="w-10 h-10 object-contain drop-shadow-sm"
          />
          <div>
            <span className="font-bold text-primary">{elemento}</span>
            <span className="text-muted-foreground"> está aqui treinando com você!</span>
          </div>
        </div>
      )}


      <Card className={`bg-gradient-to-br ${meta.cor} border-2`}>
        <MechanicRenderer
          slug={slug}
          variation={variation}
          onConcluir={onConcluir}
          promptLevel={aba.level}
          key={variation.id}
        />
      </Card>

      <div className="mt-4 flex justify-end">
        <button
          onClick={onSkip}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted font-bold hover:bg-muted/70"
        >
          Pular <ChevronRight size={16} />
        </button>
      </div>
    </Shell>
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
    case "onde-esta":
      return <OndeEsta p={variation.payload} onDone={onConcluir} />;
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
  const seqSize = sens.largerTargets ? "w-24 h-24" : "w-20 h-20";
  const optSize = sens.largerTargets ? "w-28 h-28" : "w-24 h-24";
  const imgSize = sens.largerTargets ? "w-20 h-20" : "w-16 h-16";
  const hoverCls = sens.reduceMotion ? "hover:border-primary" : "hover:border-primary hover:scale-110";
  return (
    <div className="text-center">
      <div className="flex justify-center gap-3 mb-6 items-center">
        {p.seq.map((s: string, i: number) => (
          <div
            key={i}
            className={`${seqSize} flex items-center justify-center bg-card rounded-2xl border shadow-sm`}
          >
            <RenderEmoji e={s} className={imgSize} />
          </div>
        ))}
        <span className="text-primary text-6xl font-black">?</span>
      </div>
      <div className="flex justify-center gap-3">
        {p.opts.map((o: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(o === p.next)}
            className={`${optSize} flex items-center justify-center bg-card border-2 border-border rounded-2xl transition-all shadow-md ${hoverCls}`}
          >
            <RenderEmoji e={o} className={imgSize} />
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
    <div className={`grid grid-cols-4 gap-3 ${maxW} mx-auto`}>

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


// ============== 10. Foco Sustentado ==============
function FocoSustentado({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const speedMul = sens.lowStim ? 1.6 : 1; // mais lento = menos estímulo
  const press = sens.reduceMotion ? "" : "active:scale-90";
  const errorRing = sens.softColors ? "ring-amber-400 bg-amber-100/40" : "ring-destructive bg-destructive/10";
  const btnSize = sens.largerTargets ? "w-28 h-28 md:w-32 md:h-32" : "w-24 h-24 md:w-28 md:h-28";
  const [capturados, setCapturados] = useState<number[]>([]); // índices de alvos pegos
  const [erros, setErros] = useState(0);
  const [piscarErro, setPiscarErro] = useState<number | null>(null);


  // Layout fixo por atividade: faixa vertical + sentido + atraso para cada item.
  const layout = useMemo(() => {
    return p.itens.map((_: any, i: number) => {
      const seed = i * 17 + 3;
      const rnd = (n: number) => (Math.sin(seed * n) + 1) / 2;
      return {
        topPct: 6 + rnd(1.3) * 78,        // faixa vertical
        delay: rnd(2.7) * 2.5,             // atraso inicial
        reverse: rnd(3.1) > 0.5,           // sentido (vai/volta invertido)
        dur: p.flutuarMs / 1000 + rnd(4.3) * 1.2,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const alvoNome = p.alvo.nome;
  const alvosIdx = p.itens
    .map((it: any, i: number) => (it.nome === alvoNome ? i : -1))
    .filter((x: number) => x >= 0);
  const faltam = alvosIdx.length - capturados.length;

  // Conclui quando todos os alvos foram capturados.
  useEffect(() => {
    if (faltam === 0) {
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
      setTimeout(() => setPiscarErro(null), 350);
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
                animation: `${L.reverse ? "foco-walk-rev" : "foco-walk"} ${L.dur * speedMul}s ease-in-out ${L.delay}s infinite`,
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
    <div className="space-y-4">
      {/* ── MODELO REFERÊNCIA ── */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-3">
        <div className="text-[10px] font-black uppercase tracking-widest text-amber-700 text-center mb-2">
          Modelo — {p.emoji} {p.figura}
        </div>
        <div className="flex justify-center">
          <svg
            viewBox={`0 0 ${p.viewW} ${p.viewH}`}
            style={{
              width: Math.min(180, p.viewW),
              height: Math.min(180, p.viewW) * (p.viewH / p.viewW),
            }}
            className="drop-shadow"
          >
            {/* All pieces fully coloured */}
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
            {/* Subtle outlines */}
            {p.pieces.map((pc) => (
              <ShapeEl
                key={`o${pc.id}`}
                shape={pc.shape}
                x={pc.x}
                y={pc.y}
                w={pc.w}
                h={pc.h}
                color="none"
                stroke="rgba(0,0,0,0.15)"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* ── BARRA DE PROGRESSO ── */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="text-xs font-bold text-muted-foreground tabular-nums">
          {placed.size}/{p.pieces.length}
        </span>
      </div>

      {/* ── ÁREA DE MONTAGEM ── */}
      <div className="bg-card border-2 border-primary/20 rounded-2xl p-3">
        <div className="text-[10px] font-black uppercase tracking-widest text-primary text-center mb-2">
          Monte aqui!
        </div>
        <div className="flex justify-center">
          <svg
            viewBox={`0 0 ${p.viewW} ${p.viewH}`}
            style={{
              width: "100%",
              maxWidth: Math.min(300, p.viewW * 1.5),
              aspectRatio: `${p.viewW}/${p.viewH}`,
            }}
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
                  color="#e2e8f0"
                  stroke="#94a3b8"
                  strokeDash="8 5"
                  opacity={0.7}
                />
              ))}
            {/* Placed pieces */}
            {p.pieces
              .filter((pc) => placed.has(pc.id))
              .map((pc) => (
                <g key={`placed-${pc.id}`}>
                  <ShapeEl shape={pc.shape} x={pc.x} y={pc.y} w={pc.w} h={pc.h} color={pc.color} />
                  <ShapeEl
                    shape={pc.shape}
                    x={pc.x}
                    y={pc.y}
                    w={pc.w}
                    h={pc.h}
                    color="none"
                    stroke="rgba(255,255,255,0.4)"
                  />
                </g>
              ))}
            {/* Celebration sparkles when done */}
            {done && (
              <>
                <text
                  x={p.viewW / 2}
                  y={p.viewH / 2 - 10}
                  textAnchor="middle"
                  fontSize="32"
                  opacity="0.9"
                >
                  ⭐
                </text>
                <text
                  x={p.viewW / 2}
                  y={p.viewH / 2 + 30}
                  textAnchor="middle"
                  fontSize="14"
                  fill="#0d1f55"
                  fontWeight="bold"
                >
                  Incrível!
                </text>
              </>
            )}
          </svg>
        </div>
      </div>

      {/* ── BANCO DE PEÇAS (embaralhado) ── */}
      {!done && (
        <div>
          <div className="text-[10px] font-bold text-muted-foreground text-center mb-2 uppercase tracking-wide">
            Toque na peça que pertence à figura!
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center">
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
        <div className="w-full py-4 rounded-2xl bg-success/15 text-success font-black text-xl text-center border-2 border-success/30">
          🎉 Figura montada! Arrasou!
        </div>
      )}
    </div>
  );
}

// ============== 13. Sequência de Cores ==============
function SequenciaCores({ p, onDone }: any) {
  const { effective: sens } = useSensoryProfile();
  const seqSize = sens.largerTargets ? "w-16 h-16" : "w-12 h-12";
  const optSize = sens.largerTargets ? "w-20 h-20" : "w-16 h-16";
  const hover = sens.reduceMotion ? "" : "hover:scale-110";
  return (
    <div className="text-center">
      <div className="flex justify-center gap-2 mb-6">
        {p.sequencia.map((c: string, i: number) => (
          <div key={i} className={`${seqSize} rounded-lg shadow`} style={{ background: c }} />
        ))}
        <div className={`${seqSize} rounded-lg border-2 border-dashed border-muted-foreground flex items-center justify-center font-black`}>
          ?
        </div>
      </div>
      <div className="flex justify-center gap-3">
        {p.options.map((c: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(c === p.next)}
            className={`${optSize} rounded-xl shadow-lg ${hover} transition-all`}
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
    <div className="text-center">
      <div className="inline-block bg-card border-4 border-coral rounded-3xl px-8 py-6 mb-6 shadow-glow">
        <div className="text-xs uppercase text-muted-foreground tracking-widest mb-1 flex items-center justify-center gap-1">
          <Volume2 size={12} /> Som
        </div>
        <div className="text-5xl font-black text-coral">{p.som}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((o: any, i: number) => {
          const img = ilustracao(o.emoji, o.nome);
          return (
            <button
              key={i}
              onClick={() => onDone(o.nome === p.correctName)}
              className={`bg-card border-2 border-border rounded-2xl p-4 transition-all flex flex-col items-center gap-2 ${hover}`}
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
    () => require("@/data/neuro-treino/stroke-checkpoints").getCheckpoints(p.letra) as {
      x: number;
      y: number;
    }[],
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
    <div className="text-center space-y-3">
      <div className="text-sm text-muted-foreground font-bold">
        Contorne a letra <span className="text-coral">{p.letra}</span> seguindo a ordem correta
      </div>

      <div className="flex items-center justify-center gap-3 md:gap-5">
        <div className="flex flex-col gap-2">
          {CORES_ESQ.map((c) => <Bolinha key={c.hex} c={c} />)}
        </div>

        <div
          className="bg-white border-4 border-sky-300 rounded-3xl p-3 shadow-md relative"
          style={{ width: 320 }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            className="w-full touch-none select-none"
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

            {/* Letra-guia */}
            <text
              x={50}
              y={54}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={108}
              fontWeight={900}
              fontFamily='"Nunito","Quicksand","Comic Sans MS",system-ui,sans-serif'
              fill="#f1f5f9"
              stroke="#cbd5e1"
              strokeWidth={1}
              strokeDasharray="2 2"
            >
              {p.letra}
            </text>

            {/* Tinta */}
            <g clipPath={`url(#${clipId})`}>
              {strokes.map((s, i) => (
                <path
                  key={i}
                  d={s.d}
                  stroke={s.cor}
                  strokeWidth={18}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              ))}
            </g>

            {/* Checkpoints numerados (dicas ABA) */}
            {mostrarNumeros &&
              checkpoints.map((cp, i) => {
                const feito = i < checkpointIdx;
                const atual = i === checkpointIdx;
                return (
                  <g key={i}>
                    <circle
                      cx={cp.x}
                      cy={cp.y}
                      r={4}
                      fill={feito ? "#10b981" : atual ? "#f59e0b" : "#e2e8f0"}
                      stroke="#0f172a"
                      strokeWidth={0.5}
                    />
                    <text
                      x={cp.x}
                      y={cp.y + 1}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={4}
                      fontWeight={900}
                      fill="#0f172a"
                    >
                      {i + 1}
                    </text>
                  </g>
                );
              })}

            {/* Seta piscante no próximo ponto */}
            {mostrarSetaProxima && !completou && (
              <circle
                cx={proximoCP.x}
                cy={proximoCP.y}
                r={9}
                fill="none"
                stroke="#f59e0b"
                strokeWidth={1.5}
                strokeDasharray="2 1"
              >
                <animate attributeName="r" values="7;11;7" dur="1s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Guia física (mão) — nível 1 */}
            {mostrarMaoGuia && !completou && (
              <text x={proximoCP.x + 6} y={proximoCP.y - 6} fontSize={8}>
                👆
              </text>
            )}
          </svg>

          <button
            onClick={limpar}
            className="absolute top-2 right-2 bg-slate-100 hover:bg-slate-200 rounded-full w-8 h-8 text-sm"
            aria-label="Limpar"
          >
            🔄
          </button>

          <div className="flex items-center justify-between px-2 pt-1">
            <div className="font-black text-xl tracking-wide">
              <span style={{ color: cor }}>{p.letra}</span>
              <span className="text-slate-900">{p.palavra.slice(p.letra.length)}</span>
            </div>
            <div className="text-3xl leading-none">{p.emoji}</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {CORES_DIR.map((c) => <Bolinha key={c.hex} c={c} />)}
        </div>
      </div>

      <div className="text-xs text-muted-foreground">
        Cor: <span className="font-bold" style={{ color: cor }}>{nomeCor}</span> ·
        Progresso: <span className="font-bold text-emerald-600">{progresso}%</span> (
        {checkpointIdx}/{totalCheckpoints})
      </div>
      {foraDaLetra && (
        <div className="text-xs font-bold text-amber-600">Volte pra dentro da letra ✋</div>
      )}
      {erroOrdem && (
        <div className="text-xs font-bold text-rose-600">
          Ordem errada — comece do ponto 1 e vá seguindo
        </div>
      )}

      <div className="flex gap-2 justify-center">
        <button
          onClick={limpar}
          className="mt-2 bg-slate-200 text-slate-700 font-bold px-4 py-2 rounded-full"
        >
          Recomeçar
        </button>
        <button
          onClick={() => {
            if (acertouOrdem) {
              toast.success(`Letra ${p.letra} traçada na ordem certa! 🎨`);
              onDone(true);
            } else {
              toast(`Ainda faltam ${totalCheckpoints - checkpointIdx} pontos ou a ordem está errada`);
              onDone(false);
            }
          }}
          disabled={!completou && checkpointIdx === 0}
          className="mt-2 bg-success text-white font-black px-6 py-3 rounded-full shadow-md disabled:opacity-40"
        >
          Terminei! ✨
        </button>
      </div>
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
              <RenderEmoji e={emoji} className={imgSize} />
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
  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-20 h-20" : "w-14 h-14";
  const handleClick = (item: string) => {
    if (selecionado) return;
    setSelecionado(item);
    setTimeout(() => onDone(item === p.intruso), 700);
  };
  return (
    <div className="space-y-5">
      <div className="bg-gradient-to-br from-rose/15 to-rose/5 border-2 border-rose/25 rounded-2xl p-4 text-center">
        <div className="text-sm uppercase text-muted-foreground mb-1">Grupo</div>
        <div className="text-2xl font-black">{p.grupo}</div>
        <div className="text-sm text-muted-foreground mt-1">Qual NÃO pertence aqui?</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {p.itens.map((item: string, i: number) => {
          const emoji = item.trim().split(/\s+/)[0];
          const nome = item.replace(emoji, "").trim();
          const certo = item === p.intruso;
          const bg =
            selecionado === item
              ? certo
                ? "border-success bg-success/10"
                : errorBg
              : "border-border bg-card hover:border-rose/50";
          return (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className={`rounded-2xl border-2 p-4 flex flex-col items-center gap-2 transition-all ${bg}`}
            >
              <RenderEmoji e={emoji} label={nome} className={imgSize} />
              <span className="font-bold text-sm">{nome}</span>
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

  // Monta sequência RAN: 12 itens repetindo (2 linhas x 6)
  const bancoItens: { emoji: string; nome: string }[] = useMemo(() => {
    const base: { emoji: string; nome: string }[] = [
      { emoji: p.emoji, nome: p.nome },
      ...(p.opts as string[])
        .filter((n) => n !== p.nome)
        .slice(0, 3)
        .map((n) => ({ emoji: p.emoji, nome: n })),
    ];
    // Se payload tiver bank, prefere; senão usa opts
    return base;
  }, [p]);

  const sequencia: { emoji: string; nome: string }[] = useMemo(() => {
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
  }, [bancoItens]);

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
        {p.categoria} — toque{" "}
        {p.tipo === "imagem" ? (
          <span className="inline-flex items-center gap-1 align-middle">
            <RenderEmoji label={labelDe(proximo)} className="w-7 h-7 inline-block" />
            <span className="text-emerald-600 font-black">{labelDe(proximo)}</span>
          </span>
        ) : (
          <span className="text-emerald-600 text-xl">{labelDe(proximo)}</span>
        )}
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
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-sm font-bold text-muted-foreground">
          Desenhe por cima com o dedinho 👆
        </div>
        <div className="text-2xl font-black mt-1" style={{ color: p.cor }}>
          {p.nome}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-4 border-4 border-slate-200 flex flex-col items-center justify-center">
          <div className="text-xs font-black text-slate-500 mb-2">MODELO</div>
          {img ? (
            <img src={img} alt={p.nome} className="w-32 h-32 object-contain drop-shadow" />
          ) : (
            <div className="text-7xl">{p.emoji}</div>
          )}
        </div>

        <div
          className="relative bg-white rounded-3xl border-4 border-dashed p-2 touch-none select-none"
          style={{ borderColor: p.cor + "80" }}
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-black text-slate-400 z-10">
            SUA VEZ
          </div>
          {img ? (
            <img
              src={img}
              alt=""
              draggable={false}
              className="absolute inset-0 w-full h-full object-contain p-4 opacity-20 pointer-events-none"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20 pointer-events-none">
              {p.emoji}
            </div>
          )}
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            onPointerDown={start}
            onPointerMove={move}
            onPointerUp={end}
            onPointerLeave={end}
            className="relative w-full aspect-square touch-none cursor-crosshair"
          />
        </div>
      </div>

      <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full transition-all duration-200"
          style={{ width: `${progresso}%`, background: p.cor }}
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={limpar}
          disabled={feito}
          className="flex-1 py-3 rounded-2xl bg-slate-200 text-slate-700 font-black active:scale-95 disabled:opacity-50"
        >
          🔄 Limpar
        </button>
        <button
          onClick={() => {
            setFeito(true);
            onDone(true);
          }}
          disabled={feito || progresso < 30}
          className="flex-1 py-3 rounded-2xl text-white font-black active:scale-95 disabled:opacity-40"
          style={{ background: p.cor }}
        >
          Terminei! ✨
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
  const tempoBase = Math.max(5000, (p.flashMs ?? 2000) * (sens.lowStim ? 3.75 : 2.5));
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
          <div
            className="grid gap-2 mx-auto max-w-xs"
            style={{ gridTemplateColumns: `repeat(${p.cols}, 1fr)` }}
          >
            {p.grid.map((cor: string, i: number) => (
              <div
                key={i}
                className="w-16 h-16 rounded-xl border-2 border-white/20"
                style={{ backgroundColor: cor }}
              />
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
          <div
            className="grid gap-2 mx-auto max-w-xs"
            style={{ gridTemplateColumns: `repeat(${p.cols}, 1fr)` }}
          >
            {p.grid.map((_: any, i: number) => (
              <div
                key={i}
                className={`${sens.largerTargets ? "w-20 h-20" : "w-16 h-16"} rounded-xl border-2 border-dashed border-muted-foreground`}
                style={{ backgroundColor: selecionados[i] ?? "transparent" }}
              />
            ))}
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
  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-20 h-20" : "w-16 h-16";
  const handleClick = (nome: string) => {
    if (selecionado) return;
    setSelecionado(nome);
    setTimeout(() => onDone(nome === p.correta), 700);
  };
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-amber/25 to-amber/5 border-2 border-amber/30 rounded-3xl py-8 text-center">
        <div className="text-xs uppercase text-muted-foreground mb-2">Começa com</div>
        <div className="text-7xl font-black text-amber-700">{p.fonema}</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {p.imagens.map((img: { e: string; n: string }, i: number) => {
          const certa = img.n === p.correta;
          const bg =
            selecionado === img.n
              ? certa
                ? "border-success bg-success/10"
                : errorBg
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-border bg-card hover:border-amber/60";
          return (
            <button
              key={i}
              onClick={() => handleClick(img.n)}
              className={`rounded-2xl border-2 p-5 flex flex-col items-center gap-2 transition-all font-bold ${bg}`}
            >
              <RenderEmoji e={img.e} label={img.n} className={imgSize} />
              <span className="text-sm">{img.n}</span>
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
  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-40 h-40" : "w-32 h-32";
  const optPad = sens.largerTargets ? "py-6 text-xl" : "py-4 text-lg";
  const handleClick = (opt: string) => {
    if (selecionado) return;
    setSelecionado(opt);
    setTimeout(() => onDone(opt === p.correta), 700);
  };
  return (
    <div className="space-y-5 text-center">
      <div className="bg-gradient-to-br from-amber/15 to-amber/5 border-2 border-amber/25 rounded-3xl py-8 flex items-center justify-center">
        <RenderEmoji e={p.emoji} className={imgSize} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {p.opts.map((opt: string, i: number) => {
          const certa = opt === p.correta;
          const bg =
            selecionado === opt
              ? certa
                ? "border-success bg-success/10 text-success"
                : errorBg
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-border bg-card hover:border-amber/60";
          return (
            <button
              key={i}
              onClick={() => handleClick(opt)}
              className={`rounded-2xl border-2 ${optPad} font-black tracking-wider transition-all ${bg}`}
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
    if (erro) return;
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
    if (nova.length === p.silabas.length) setTimeout(() => onDone(true), 500);
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
      <div className="flex gap-3 flex-wrap justify-center">
        {p.embaralhadas.map((sil: string, i: number) => {
          const usada =
            sequencia.join("").includes(sil) &&
            sequencia.some((s) => s === sil && sequencia.indexOf(s) < sequencia.length);
          return (
            <button
              key={i}
              onClick={() => handleSilaba(sil)}
              className={`${btnPad} rounded-2xl border-2 font-black transition-all ${press}
                ${usada ? "border-muted bg-muted/20 text-muted-foreground" : "border-amber/50 bg-amber/10 text-amber-800 hover:border-amber hover:bg-amber/20"}`}
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
  const errorBg = sens.softColors ? "border-amber-400 bg-amber-100/40" : "border-destructive bg-destructive/10";
  const imgSize = sens.largerTargets ? "w-20 h-20" : "w-16 h-16";
  const btnPad = sens.largerTargets ? "py-6" : "py-4";
  const handleClick = (e: string) => {
    if (selecionado) return;
    setSelecionado(e);
    setTimeout(() => onDone(e === p.emoji_certo), 700);
  };
  return (
    <div className="space-y-5 text-center">
      <div className="bg-gradient-to-br from-amber/25 to-amber/5 border-2 border-amber/35 rounded-3xl py-8">
        <div className="text-xs uppercase text-muted-foreground mb-2">Leia e encontre</div>
        <div className="text-5xl font-black tracking-widest">{p.palavra}</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {p.opts.map((e: string, i: number) => {
          const certa = e === p.emoji_certo;
          const bg =
            selecionado === e
              ? certa
                ? "border-success bg-success/10"
                : errorBg
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-border bg-card hover:border-amber/60";
          return (
            <button
              key={i}
              onClick={() => handleClick(e)}
              className={`rounded-2xl border-2 ${btnPad} flex items-center justify-center transition-all ${bg}`}
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

