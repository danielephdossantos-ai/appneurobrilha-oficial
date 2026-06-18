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
import soproCarro from "@/assets/neuro-treino/sopro/carro.png";
import soproVela from "@/assets/neuro-treino/sopro/vela.png";
import soproBalao from "@/assets/neuro-treino/sopro/balao.png";
import soproMoinho from "@/assets/neuro-treino/sopro/moinho.png";
import soproBarco from "@/assets/neuro-treino/sopro/barco.png";
import soproBolha from "@/assets/neuro-treino/sopro/bolha.png";

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

  const meta = CATEGORIAS[slug];
  const vars = VARIATIONS[slug];

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
  }, [slug, meta, vars, hiperfoco?.label]);

  // ⚠️ TODOS os hooks devem ficar ANTES dos early returns
  const hasData = Boolean(meta && vars && vars.length > 0);
  const safeIndex = hasData ? index % vars!.length : 0;
  const variation = hasData ? vars![safeIndex] : null;
  const seed = variation ? `${slug}:${variation.id}` : slug;
  const elemento = hiperfoco ? pickElemento(hiperfoco, seed) : "";
  const instrucaoTematica =
    hiperfoco && meta ? applyHiperfoco(meta.instrucao, hiperfoco, seed) : "";
  const nomeCrianca = activeChild?.nome?.split(" ")[0] || "";

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

      {slug !== "motorzinho-dos-sons" && (
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
          key={variation.id}
        />
      </Card>

      <div className="mt-4 flex justify-end">
        <button
          onClick={() => setIndex((i) => i + 1)}
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
}: {
  slug: CategoriaSlug;
  variation: any;
  onConcluir: (c: boolean) => void;
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
    case "foco-total":
      return <FocoTotal p={variation.payload} onDone={onConcluir} />;
    case "labirinto-do-som":
      return <LabirintoSom p={variation.payload} onDone={onConcluir} />;
    case "foco-sustentado":
      return <FocoSustentado p={variation.payload} onDone={onConcluir} />;
    case "rastreamento-sacadico":
      return <Sacadico p={variation.payload} onDone={onConcluir} />;
    case "mosaico-de-formas":
      return <Mosaico p={variation.payload} onDone={onConcluir} />;
    case "sequencia-de-cores":
      return <SequenciaCores p={variation.payload} onDone={onConcluir} />;
    case "simetria":
      return <Simetria p={variation.payload} onDone={onConcluir} />;
    case "decoracao-criativa":
      return <Decoracao p={variation.payload} onDone={onConcluir} />;
    case "onomatopeias-animadas":
      return <Onomatopeias p={variation.payload} onDone={onConcluir} />;
    case "ritmo-e-sopro":
      return <RitmoSopro p={variation.payload} onDone={onConcluir} />;
    case "paromatopeias-corpo":
      return <SonsCorpo p={variation.payload} onDone={onConcluir} />;
    case "tracado-letras":
      return <TracadoLetras p={variation.payload} onDone={onConcluir} />;
    case "caminho-dos-pontos":
      return <CaminhoPontos p={variation.payload} onDone={onConcluir} />;
    case "labirinto-precisao":
      return <LabirintoPrecisao p={variation.payload} onDone={onConcluir} />;
    case "triagem-categorias":
      return <TriagemCategorias p={variation.payload} onDone={onConcluir} />;
    case "expressao-emocao":
      return <ExpressaoEmocao p={variation.payload} onDone={onConcluir} />;
    // FONO CLÍNICO
    case "discriminacao-auditiva":
      return <DiscriminacaoAuditiva p={variation.payload} onDone={onConcluir} />;
    case "articulacao-sons":
      return <ArticulacaoSons p={variation.payload} onDone={onConcluir} />;
    case "vocabulario-semantico":
      return <VocabularioSemantico p={variation.payload} onDone={onConcluir} />;
    case "nomeacao-rapida":
      return <NomeacaoRapida p={variation.payload} onDone={onConcluir} />;
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
              className="bg-card border-2 border-border rounded-2xl p-4 hover:border-primary hover:scale-105 transition-all flex flex-col items-center gap-2"
            >
              {img ? (
                <img
                  src={img}
                  alt={o.nome}
                  width={128}
                  height={128}
                  loading="lazy"
                  className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-md"
                />
              ) : (
                <RenderEmoji e={o.emoji} label={o.nome} className="w-24 h-24" />
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
              className="bg-card border-2 border-border rounded-2xl p-4 hover:border-primary hover:scale-105 transition-all flex flex-col items-center gap-2"
            >
              {img ? (
                <img
                  src={img}
                  alt={o.nome}
                  width={128}
                  height={128}
                  loading="lazy"
                  className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-md"
                />
              ) : (
                <div className="w-24 h-24 md:w-28 md:h-28 grid place-items-center rounded-xl bg-muted text-2xl font-black text-muted-foreground">
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

// ============== 2. Motorzinho dos Sons (Clínico Fono + Voz IA + Mic) ==============
function Motorzinho({ p, onDone }: any) {
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
      {/* Balão do PIP */}
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
            PIP – Professora {isSpeaking && <Volume2 size={12} className="animate-pulse" />}
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
            className="w-48 h-48 sm:w-56 sm:h-56 drop-shadow-2xl animate-fade-in"
          />
          {(phase === "your-turn" || phase === "listening") && (
            <div className="absolute -inset-3 rounded-full border-4 border-primary/40 animate-pulse pointer-events-none" />
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
          className="bg-gradient-to-br from-coral to-coral/80 text-white px-10 py-6 rounded-full font-black text-xl shadow-xl active:scale-95 border-4 border-white inline-flex items-center gap-3 disabled:opacity-60"
        >
          <Sparkles size={28} /> LIGAR MOTORZINHO
        </button>
      )}

      {phase === "demo" && (
        <div className="text-sm font-bold text-primary animate-pulse flex items-center justify-center gap-2">
          <Volume2 size={16} /> Professora falando...
        </div>
      )}

      {(phase === "your-turn" || phase === "result") && (
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={ouvirCrianca}
            disabled={isListening || isSpeaking || !micSupported}
            className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-8 py-5 rounded-full font-black text-lg shadow-xl active:scale-95 border-4 border-white inline-flex items-center gap-3 disabled:opacity-60"
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
        <div className="inline-flex items-center gap-3 bg-primary/10 border-2 border-primary text-primary px-6 py-4 rounded-full font-black animate-pulse">
          <MicOff size={22} /> Ouvindo... fala agora!
        </div>
      )}
    </div>
  );
}

// ============== 3. Rimas ==============
function Rimas({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Que palavra rima com</div>
      <div className="text-5xl font-black text-coral mb-6 flex items-center justify-center gap-4">
        {p.palavra}
        {objetoImg(p.palavra) && (
          <img src={objetoImg(p.palavra)} className="w-20 h-20 object-contain drop-shadow-sm" />
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((o: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(o === p.correta)}
            className="bg-card border-2 border-border rounded-xl py-6 px-4 font-black text-xl hover:border-coral hover:scale-105 transition-all flex flex-col items-center gap-2"
          >
            {objetoImg(o) && <img src={objetoImg(o)} className="w-16 h-16 object-contain" />}
            <span>{o}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============== 4. Pedacinhos da Palavra ==============
function Pedacinhos({ p, onDone }: any) {
  const [claps, setClaps] = useState(0);
  return (
    <div className="text-center">
      <div className="text-5xl font-black mb-4 flex items-center justify-center gap-4">
        {p.palavra}
        {objetoImg(p.palavra) && (
          <img src={objetoImg(p.palavra)} className="w-20 h-20 object-contain drop-shadow-sm" />
        )}
      </div>
      <div className="flex justify-center gap-2 mb-6">
        {p.silabas.map((s: string, i: number) => (
          <div
            key={i}
            className={`px-4 py-2 rounded-xl font-bold ${i < claps ? "bg-success text-white" : "bg-muted"}`}
          >
            {s}
          </div>
        ))}
      </div>
      <button
        onClick={() => setClaps((c) => c + 1)}
        className="bg-coral text-white px-12 py-8 rounded-2xl shadow-lg active:scale-95 mb-4 flex items-center gap-3 mx-auto"
      >
        <Hand size={40} />
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
  const cols = Math.ceil(Math.sqrt(p.grid.length));
  const alvoImg = emojiImg(p.alvo);
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Encontre:</div>
      <div className="mb-4 flex justify-center">
        <RenderEmoji e={p.alvo} className="w-20 h-20" />
      </div>
      <div
        className="grid gap-2 mx-auto"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, maxWidth: cols * 72 }}
      >
        {p.grid.map((e: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(i === p.correctIndex)}
            className="aspect-square p-1.5 bg-card border-2 border-border rounded-lg hover:border-primary hover:scale-105 transition-all flex items-center justify-center"
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
  return (
    <div className="text-center">
      <div className="flex justify-center gap-3 mb-6 items-center">
        {p.seq.map((s: string, i: number) => (
          <div
            key={i}
            className="w-20 h-20 flex items-center justify-center bg-card rounded-2xl border shadow-sm"
          >
            <RenderEmoji e={s} className="w-16 h-16" />
          </div>
        ))}
        <span className="text-primary text-6xl font-black">?</span>
      </div>
      <div className="flex justify-center gap-3">
        {p.opts.map((o: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(o === p.next)}
            className="w-24 h-24 flex items-center justify-center bg-card border-2 border-border rounded-2xl hover:border-primary hover:scale-110 transition-all shadow-md"
          >
            <RenderEmoji e={o} className="w-16 h-16" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ============== 7. Cadê o Par ==============
function CadeOPar({ p, onDone }: any) {
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
    <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
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
              <span className="text-3xl text-primary/70 font-black">?</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ============== 8. Foco Total (Stroop) ==============
function FocoTotal({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div
        className="font-black text-8xl mb-8 flex flex-col items-center gap-4"
        style={{ color: p.corExibida }}
      >
        <div className="bg-card border-4 border-white rounded-full p-6 shadow-xl w-32 h-32 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-full shadow-inner"
            style={{ background: p.corExibida }}
          />
        </div>
        <span>{p.palavra}</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((c: any, i: number) => (
          <button
            key={i}
            onClick={() => onDone(c.nome === p.corCerta)}
            className="rounded-xl py-8 font-black text-white shadow-lg hover:scale-105 transition-all flex items-center justify-center"
            style={{ background: c.hex }}
          >
            <div className="w-8 h-8 rounded-full bg-white/40 border-2 border-white shadow-inner" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ============== 9. Labirinto do Som ==============
function LabirintoSom({ p, onDone }: any) {
  const [passo, setPasso] = useState(0);
  const atual = p.caminho[passo];
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-1">
        <Volume2 size={14} /> Pista sonora
      </div>
      <div className="text-4xl font-black text-primary mb-6">"{atual.nome}"</div>
      <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
        <div />
        <button onClick={() => handleDir("CIMA")} className={btnDir()}>
          <ArrowUp className="w-10 h-10 mx-auto" />
        </button>
        <div />
        <button onClick={() => handleDir("ESQUERDA")} className={btnDir()}>
          <ArrowLeftIcon className="w-10 h-10 mx-auto" />
        </button>
        <div className="flex items-center justify-center bg-primary/10 rounded-full border-2 border-primary/30 w-16 h-16 mx-auto">
          <RotateCcw className="w-8 h-8 text-primary" />
        </div>
        <button onClick={() => handleDir("DIREITA")} className={btnDir()}>
          <ArrowRight className="w-10 h-10 mx-auto" />
        </button>
        <div />
        <button onClick={() => handleDir("BAIXO")} className={btnDir()}>
          <ArrowDown className="w-10 h-10 mx-auto" />
        </button>
        <div />
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        Passo {passo + 1} de {p.caminho.length}
      </div>
    </div>
  );
  function handleDir(d: string) {
    if (d === atual.nome) {
      if (passo + 1 >= p.caminho.length) onDone(true);
      else {
        setPasso(passo + 1);
        toast.success("Boa!");
      }
    } else onDone(false);
  }
}
function btnDir() {
  return "p-4 bg-card border-2 border-border rounded-xl hover:border-primary text-primary";
}

// ============== 10. Foco Sustentado ==============
function FocoSustentado({ p, onDone }: any) {
  const [k, setK] = useState(0);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  useEffect(() => {
    if (k >= p.stream.length) {
      onDone(score > 0 && missed === 0);
      return;
    }
    const t = setTimeout(() => setK(k + 1), p.intervaloMs);
    return () => clearTimeout(t);
  }, [k]);
  const handleTap = () => {
    if (p.stream[k] === p.alvo) setScore((s) => s + 1);
    else setMissed((m) => m + 1);
    setK(k + 1);
  };
  const atual = p.stream[k];
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-2">
        Alvo:
        <RenderEmoji e={p.alvo} className="w-12 h-12" />
      </div>
      <button
        onClick={handleTap}
        className="p-6 bg-card border-4 border-primary rounded-3xl my-6 mx-auto active:scale-95 w-48 h-48 flex items-center justify-center"
      >
        <RenderEmoji e={atual} className="w-full h-full" />
      </button>
      <div className="text-sm text-muted-foreground">
        Acertos: <b className="text-success">{score}</b> · Enganos:{" "}
        <b className="text-destructive">{missed}</b>
      </div>
      <div className="text-xs text-muted-foreground mt-1">
        {k}/{p.stream.length}
      </div>
    </div>
  );
}

// ============== 11. Rastreamento Sacádico ==============
function Sacadico({ p, onDone }: any) {
  const [fase, setFase] = useState<"mostrar" | "jogar" | "fim">("mostrar");
  const [showIdx, setShowIdx] = useState(0);
  const [piscando, setPiscando] = useState<number | null>(null);
  const [userSeq, setUserSeq] = useState<number[]>([]);
  useEffect(() => {
    if (fase !== "mostrar") return;
    if (showIdx >= p.sequencia.length) {
      setFase("jogar");
      setPiscando(null);
      return;
    }
    setPiscando(p.sequencia[showIdx]);
    const t = setTimeout(() => {
      setPiscando(null);
      setTimeout(() => setShowIdx(showIdx + 1), 150);
    }, p.flashMs);
    return () => clearTimeout(t);
  }, [showIdx, fase]);
  const tap = (pos: number) => {
    if (fase !== "jogar") return;
    const next = [...userSeq, pos];
    setUserSeq(next);
    if (p.sequencia[next.length - 1] !== pos) {
      onDone(false);
      return;
    }
    if (next.length === p.sequencia.length) onDone(true);
  };
  const posClass = (pos: number) => {
    const map = ["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"];
    return map[pos];
  };
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">
        {fase === "mostrar" ? "Observe a ordem…" : "Toque na mesma ordem"}
      </div>
      <div className="relative h-64 w-64 mx-auto bg-card border-2 border-border rounded-2xl">
        {[0, 1, 2, 3].map((pos) => (
          <button
            key={pos}
            onClick={() => tap(pos)}
            className={`absolute ${posClass(pos)} w-16 h-16 rounded-full transition-all ${piscando === pos ? "bg-sun scale-125 shadow-glow" : "bg-muted"}`}
          />
        ))}
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
  const pad = 10;
  const size = 72;
  const inner = size - pad * 2;

  const ringCls =
    state === "selected"
      ? "ring-4 ring-[#0d1f55] border-[#0d1f55] scale-110 shadow-xl"
      : state === "wrong"
        ? "ring-4 ring-red-500 border-red-400 animate-[wiggle_0.4s_ease]"
        : state === "placed"
          ? "opacity-30 cursor-default"
          : "border-white/70 hover:scale-105 active:scale-95";

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
  return (
    <div className="text-center">
      <div className="flex justify-center gap-2 mb-6">
        {p.sequencia.map((c: string, i: number) => (
          <div key={i} className="w-12 h-12 rounded-lg shadow" style={{ background: c }} />
        ))}
        <div className="w-12 h-12 rounded-lg border-2 border-dashed border-muted-foreground flex items-center justify-center font-black">
          ?
        </div>
      </div>
      <div className="flex justify-center gap-3">
        {p.options.map((c: string, i: number) => (
          <button
            key={i}
            onClick={() => onDone(c === p.next)}
            className="w-16 h-16 rounded-xl shadow-lg hover:scale-110 transition-all"
            style={{ background: c }}
          />
        ))}
      </div>
    </div>
  );
}

// ============== 14. Simetria ==============
function Simetria({ p, onDone }: any) {
  const [right, setRight] = useState<number[][]>(() =>
    Array(p.rows)
      .fill(0)
      .map(() => Array(p.halfCols).fill(0)),
  );
  const toggle = (r: number, c: number) =>
    setRight((rt) =>
      rt.map((row, i) => (i === r ? row.map((v, j) => (j === c ? (v ? 0 : 1) : v)) : row)),
    );
  const conferir = () => {
    // mirror: right[r][c] deve corresponder a left[r][halfCols-1-c]
    const ok = p.left.every((row: number[], r: number) =>
      row.every((v: number, c: number) => v === right[r][p.halfCols - 1 - c]),
    );
    onDone(ok);
  };
  return (
    <div className="text-center">
      <div className="flex justify-center gap-1 mb-4">
        <div>
          {p.left.map((row: number[], r: number) => (
            <div key={r} className="flex gap-1">
              {row.map((v: number, c: number) => (
                <div key={c} className={`w-10 h-10 rounded ${v ? "bg-primary" : "bg-muted"}`} />
              ))}
            </div>
          ))}
        </div>
        <div className="w-px bg-foreground/30 mx-1" />
        <div>
          {right.map((row, r) => (
            <div key={r} className="flex gap-1">
              {row.map((v, c) => (
                <button
                  key={c}
                  onClick={() => toggle(r, c)}
                  className={`w-10 h-10 rounded border ${v ? "bg-lilac" : "bg-card border-border"}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <button onClick={conferir} className="bg-success text-white px-8 py-3 rounded-xl font-black">
        Conferir simetria
      </button>
    </div>
  );
}

// ============== 15. Decoração Criativa ==============
function Decoracao({ p, onDone }: any) {
  const [placed, setPlaced] = useState<{ e: string; x: number; y: number }[]>([]);
  const [dragging, setDragging] = useState<string | null>(null);
  const drop = (e: React.DragEvent) => {
    if (!dragging) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPlaced((p) => [...p, { e: dragging, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setDragging(null);
  };
  return (
    <div className="text-center">
      <div className="text-2xl font-black mb-2">{semEmoji(p.cenario)}</div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={drop}
        className={`relative h-72 rounded-2xl bg-gradient-to-b ${p.fundo} border-2 border-dashed border-border mb-4 overflow-hidden`}
      >
        {placed.map((it, i) => (
          <div key={i} className="absolute" style={{ left: it.x - 32, top: it.y - 32 }}>
            <RenderEmoji e={it.e} className="w-16 h-16" />
          </div>
        ))}
        {placed.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            Arraste para cá
          </div>
        )}
      </div>
      <div className="flex gap-2 justify-center mb-4 flex-wrap">
        {p.stickers.map((s: string, i: number) => (
          <div
            key={i}
            draggable
            onDragStart={() => setDragging(s)}
            className="w-20 h-20 flex items-center justify-center bg-card border-2 border-border rounded-2xl cursor-grab active:cursor-grabbing hover:border-primary transition-all shadow-sm"
          >
            <RenderEmoji e={s} className="w-14 h-14" />
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setPlaced([])}
          className="bg-muted px-4 py-2 rounded-xl font-bold flex items-center gap-1"
        >
          <RotateCcw size={14} /> Limpar
        </button>
        <button
          onClick={() => onDone(placed.length >= 3)}
          className="bg-success text-white px-6 py-2 rounded-xl font-black flex items-center gap-1"
        >
          <Sparkles size={16} /> Finalizar arte
        </button>
      </div>
    </div>
  );
}

// ============== 16. Onomatopeias Animadas ==============
// Som textual + opções com ilustrações premium 2D (padrão Sons Iniciais)
function Onomatopeias({ p, onDone }: any) {
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
              className="bg-card border-2 border-border rounded-2xl p-4 hover:border-coral hover:scale-105 transition-all flex flex-col items-center gap-2"
            >
              {img ? (
                <img
                  src={img}
                  alt={o.nome}
                  width={128}
                  height={128}
                  loading="lazy"
                  className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-md"
                />
              ) : (
                <RenderEmoji e={o.emoji} label={o.nome} className="w-24 h-24" />
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
          className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-10 py-5 rounded-full font-black text-lg shadow-xl active:scale-95 border-4 border-white inline-flex items-center gap-3"
        >
          <Mic size={22} /> Ligar microfone
        </button>
      ) : (
        <div className="inline-flex items-center gap-3 bg-primary/10 border-2 border-primary text-primary px-6 py-3 rounded-full font-black animate-pulse">
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
              className="bg-card border-2 border-border rounded-xl py-5 px-3 font-bold text-lg hover:border-coral hover:scale-105 transition-all flex flex-col items-center gap-2"
            >
              <RenderEmoji e={emoji} label={limpo} className="w-16 h-16" />
              <span>{limpo}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============== 19. Traçado de Letras ==============
// Mecânica única: tocar setas direcionais na ordem correta (1→2→3)
function TracadoLetras({ p, onDone }: any) {
  const [step, setStep] = useState(0);
  const tap = (i: number) => {
    if (i === step) {
      if (step + 1 >= p.passos.length) {
        toast.success("Letra completa!");
        onDone(true);
      } else setStep(step + 1);
    } else {
      toast("Ops, comece pela seta 1");
    }
  };
  return (
    <div className="text-center">
      <div className="text-[10rem] leading-none font-black text-success/20 select-none mb-4">
        {p.letra}
      </div>
      <div className="text-sm text-muted-foreground mb-3">Toque as setas em ordem:</div>
      <div className="flex justify-center gap-3 flex-wrap">
        {p.passos.map((seta: string, i: number) => {
          const done = i < step;
          const current = i === step;
          return (
            <button
              key={i}
              onClick={() => tap(i)}
              className={`relative w-24 h-24 rounded-3xl border-4 transition-all flex items-center justify-center ${done ? "bg-success text-white border-success" : current ? "bg-card border-success animate-pulse shadow-glow" : "bg-muted border-border"}`}
            >
              <span className="absolute -top-2 -left-2 text-sm font-black bg-success text-white rounded-full w-7 h-7 flex items-center justify-center border-2 border-white shadow-sm z-10">
                {i + 1}
              </span>
              <RenderEmoji e={seta} className="w-12 h-12" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============== 20. Caminho dos Pontos ==============
// Mecânica única: SVG com pontos numerados; tocar em ordem desenha linhas
function CaminhoPontos({ p, onDone }: any) {
  const [next, setNext] = useState(0);
  const [linhas, setLinhas] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);
  const tap = (i: number) => {
    if (i !== next) {
      toast("Próximo é o " + (next + 1));
      return;
    }
    if (i > 0) {
      const a = p.pontos[i - 1],
        b = p.pontos[i];
      setLinhas((l) => [...l, { x1: a.x, y1: a.y, x2: b.x, y2: b.y }]);
    }
    if (i + 1 >= p.pontos.length) {
      toast.success("Figura completa!");
      onDone(true);
    } else setNext(i + 1);
  };
  return (
    <div className="text-center">
      <div className="text-lg font-black mb-2">{semEmoji(p.figura)}</div>
      <svg
        viewBox="0 0 100 100"
        className="mx-auto bg-card border-2 border-border rounded-2xl"
        style={{ width: 280, height: 280 }}
      >
        {linhas.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="hsl(var(--success))"
            strokeWidth={1.2}
          />
        ))}
        {p.pontos.map((pt: any, i: number) => (
          <g key={i} onClick={() => tap(i)} style={{ cursor: "pointer" }}>
            <circle
              cx={pt.x}
              cy={pt.y}
              r={i === next ? 4 : 3}
              fill={
                i < next
                  ? "hsl(var(--success))"
                  : i === next
                    ? "hsl(var(--coral))"
                    : "hsl(var(--muted-foreground))"
              }
            />
            <text
              x={pt.x}
              y={pt.y - 5}
              fontSize={4.5}
              textAnchor="middle"
              fontWeight="900"
              fill="hsl(var(--foreground))"
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ============== 21. Labirinto de Precisão ==============
// Mecânica única: arrastar bolinha; sair dos corredores reseta progresso
// Padrão visual Sons Iniciais premium
function LabirintoPrecisao({ p, onDone }: any) {
  const [pos, setPos] = useState({ x: 12, y: 53 });
  const [erros, setErros] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dentroDeAlgum = (x: number, y: number) =>
    p.segmentos.some((s: any) => x >= s.x && x <= s.x + s.w && y >= s.y && y <= s.y + s.h);

  const move = (clientX: number, clientY: number) => {
    if (!dragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    if (dentroDeAlgum(x, y)) {
      setPos({ x, y });
      // chegou no fim (último segmento, canto inferior direito)
      const last = p.segmentos[p.segmentos.length - 1];
      if (x >= last.x + last.w - 6 && y >= last.y + last.h - 6) {
        onDone(true);
      }
    } else {
      setErros((e) => e + 1);
      setDragging(false);
      toast("Saiu do caminho — recomece");
      setPos({ x: 12, y: 53 });
    }
  };
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">
        Tema: {semEmoji(p.tema)} · Erros: {erros}
      </div>
      <div
        ref={containerRef}
        onMouseMove={(e) => move(e.clientX, e.clientY)}
        onMouseUp={() => setDragging(false)}
        onTouchMove={(e) => {
          const t = e.touches[0];
          move(t.clientX, t.clientY);
        }}
        onTouchEnd={() => setDragging(false)}
        className="relative mx-auto bg-muted/30 border-2 border-border rounded-2xl"
        style={{ width: 360, height: 280 }}
      >
        {p.segmentos.map((s: any, i: number) => (
          <div
            key={i}
            className="absolute bg-success/20 border border-success/40 rounded"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.w}%`, height: `${s.h}%` }}
          />
        ))}
        <button
          onMouseDown={() => setDragging(true)}
          onTouchStart={() => setDragging(true)}
          className="absolute w-12 h-12 bg-coral rounded-full shadow-xl border-4 border-white cursor-grab active:cursor-grabbing flex items-center justify-center transition-transform hover:scale-110 z-20"
          style={{ left: `calc(${pos.x}% - 24px)`, top: `calc(${pos.y}% - 24px)` }}
          aria-label="Bolinha"
        >
          {ilustracao(undefined, "BOLA") ? (
            <img src={ilustracao(undefined, "BOLA")} className="w-full h-full object-contain" />
          ) : (
            <div className="w-6 h-6 bg-white rounded-full" />
          )}
        </button>
      </div>
      <div className="text-xs text-muted-foreground mt-2">
        Arraste a bolinha pelo corredor verde até o final
      </div>
    </div>
  );
}

// ============== 22. Triagem de Categorias ==============
// Mecânica única: arrastar itens para caixas; valida ao colocar todos
function TriagemCategorias({ p, onDone }: any) {
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
              className="p-2 bg-card border-2 border-border rounded-xl cursor-grab active:cursor-grabbing w-16 h-16 flex items-center justify-center"
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
              <RenderEmoji e={c.emoji} label={c.nome} className="w-10 h-10" />
              {c.nome}
            </div>
            <div className="flex flex-wrap gap-1 justify-center">
              {p.itens.map((it: any, i: number) => {
                if (assigned[i] !== c.nome) return null;
                return <RenderEmoji key={i} e={it.e} className="w-10 h-10" />;
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
              className="bg-card border-2 border-border rounded-2xl py-6 px-3 font-black text-lg hover:border-lilac hover:scale-105 transition-all flex flex-col items-center gap-2"
            >
              <RenderEmoji e={emoji} label={limpo} className="w-20 h-20" />
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
  const [escolhida, setEscolhida] = useState<string | null>(null);
  const handleClick = (palavra: string) => {
    if (escolhida) return;
    setEscolhida(palavra);
    setTimeout(() => onDone(palavra === p.correta), 700);
  };
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
                : "border-destructive bg-destructive/10"
              : "border-border bg-card hover:border-rose/60";
          return (
            <button
              key={i}
              onClick={() => handleClick(palavra)}
              className={`rounded-3xl border-2 p-5 flex flex-col items-center gap-3 transition-all font-black text-lg ${bg}`}
            >
              <RenderEmoji e={emoji} className="w-16 h-16" />
              <span>{palavra}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 25. ARTICULAÇÃO DE SONS — vê imagem + palavra, toca sílaba em destaque para praticar
function ArticulacaoSons({ p, onDone }: any) {
  const [silIdx, setSilIdx] = useState(0);
  const [done, setDone] = useState(false);
  const handleSilaba = () => {
    const next = silIdx + 1;
    if (next >= p.silabas.length) {
      setDone(true);
      setTimeout(() => onDone(true), 600);
    } else setSilIdx(next);
  };
  return (
    <div className="text-center space-y-5">
      <div className="flex justify-center">
        <RenderEmoji e={p.emoji} className="w-28 h-28" />
      </div>
      <div className="text-3xl font-black tracking-widest">
        {p.silabas.map((s: string, i: number) => (
          <span
            key={i}
            className={`px-1 rounded-lg transition-all ${i === silIdx && !done ? "bg-rose/30 text-rose-700 scale-110 inline-block" : i < silIdx ? "text-muted-foreground" : ""}`}
          >
            {s}
          </span>
        ))}
      </div>
      <div className="bg-card border-2 border-rose/20 rounded-2xl p-4">
        <div className="text-xs uppercase text-muted-foreground">Fonema em foco</div>
        <div className="text-4xl font-black text-rose-600">{p.fonema}</div>
      </div>
      <button
        onClick={handleSilaba}
        disabled={done}
        className="w-full py-5 rounded-3xl bg-rose-500 text-white font-black text-xl active:scale-95 transition-all shadow-lg disabled:opacity-50"
      >
        {done ? "Muito bem!" : `Falar: ${p.silabas[silIdx]}`}
      </button>
      <div className="text-sm text-muted-foreground">
        {silIdx + 1} / {p.silabas.length} sílabas
      </div>
    </div>
  );
}

// 26. VOCABULÁRIO SEMÂNTICO — qual item NÃO pertence ao grupo?
function VocabularioSemantico({ p, onDone }: any) {
  const [selecionado, setSelecionado] = useState<string | null>(null);
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
                : "border-destructive bg-destructive/10"
              : "border-border bg-card hover:border-rose/50";
          return (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className={`rounded-2xl border-2 p-4 flex flex-col items-center gap-2 transition-all ${bg}`}
            >
              <RenderEmoji e={emoji} label={nome} className="w-14 h-14" />
              <span className="font-bold text-sm">{nome}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 27. NOMEAÇÃO RÁPIDA — flash de figura, 4 opções, clicar rápido
function NomeacaoRapida({ p, onDone }: any) {
  const [fase, setFase] = useState<"flash" | "resposta" | "done">("flash");
  const [escolhido, setEscolhido] = useState<string | null>(null);
  useEffect(() => {
    const t = setTimeout(() => setFase("resposta"), p.flashMs);
    return () => clearTimeout(t);
  }, [p.flashMs]);
  const handleClick = (opt: string) => {
    if (fase !== "resposta" || escolhido) return;
    setEscolhido(opt);
    setFase("done");
    setTimeout(() => onDone(opt === p.nome), 600);
  };
  return (
    <div className="text-center space-y-5">
      <div
        className={`transition-all duration-300 rounded-3xl border-2 p-8 flex items-center justify-center ${fase === "flash" ? "border-amber/50 bg-amber/10" : "border-muted bg-muted/20"}`}
      >
        {fase === "flash" ? (
          <div className="animate-pulse">
            <RenderEmoji e={p.emoji} className="w-28 h-28" />
          </div>
        ) : (
          <div className="text-muted-foreground font-bold text-lg">Qual era?</div>
        )}
      </div>
      {fase !== "flash" && (
        <div className="grid grid-cols-2 gap-3">
          {p.opts.map((opt: string, i: number) => {
            const certa = opt === p.nome;
            const bg =
              escolhido === opt
                ? certa
                  ? "border-success bg-success/10 text-success"
                  : "border-destructive bg-destructive/10"
                : escolhido && certa
                  ? "border-success bg-success/10"
                  : "border-border bg-card hover:border-amber/60";
            return (
              <button
                key={i}
                onClick={() => handleClick(opt)}
                className={`rounded-2xl border-2 p-4 font-black text-lg transition-all ${bg}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}
      {fase === "flash" && (
        <div className="text-sm text-muted-foreground animate-pulse">Memorize a figura!</div>
      )}
    </div>
  );
}

// ── COORDENAÇÃO MOTORA ──────────────────────────────────────

// 28. TOQUE EM SEQUÊNCIA — pontos numerados, tocar em ordem
function ToqueSequencia({ p, onDone }: any) {
  const [proximo, setProximo] = useState(1);
  const [acertos, setAcertos] = useState<number[]>([]);
  const handlePonto = (id: number) => {
    if (id !== proximo) return;
    const novos = [...acertos, id];
    setAcertos(novos);
    if (novos.length === p.pontos.length) {
      setTimeout(() => onDone(true), 400);
    } else setProximo(id + 1);
  };
  return (
    <div className="space-y-4">
      <div className="text-center text-sm text-muted-foreground font-bold">
        Toque o número <span className="text-emerald-600 text-xl">{proximo}</span>
      </div>
      <div
        className="relative bg-gradient-to-br from-emerald/10 to-emerald/5 border-2 border-emerald/20 rounded-3xl"
        style={{ height: 280 }}
      >
        {p.pontos.map((pt: any) => (
          <button
            key={pt.id}
            onClick={() => handlePonto(pt.id)}
            style={{ left: `${pt.x}%`, top: `${pt.y}%`, transform: "translate(-50%,-50%)" }}
            className={`absolute w-12 h-12 rounded-full border-3 font-black text-lg flex items-center justify-center transition-all active:scale-90
              ${acertos.includes(pt.id) ? "bg-emerald-500 text-white border-emerald-600 scale-90" : pt.id === proximo ? "bg-white border-emerald-500 text-emerald-700 shadow-lg scale-110 animate-pulse" : "bg-card border-border text-muted-foreground"}`}
          >
            {pt.id}
          </button>
        ))}
      </div>
    </div>
  );
}

// 29. RITMO DE BATIDAS — exibe padrão, usuário reproduz tocando
function RitmoBatidas({ p, onDone }: any) {
  const [fase, setFase] = useState<"mostrar" | "reproduzir" | "done">("mostrar");
  const [ativo, setAtivo] = useState(-1);
  const [tentativas, setTentativas] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<"ok" | "erro" | null>(null);

  useEffect(() => {
    if (fase !== "mostrar") return;
    let delay = 0;
    p.padrao.forEach((_: any, i: number) => {
      const dur = p.durMs[i] ?? 200;
      setTimeout(() => setAtivo(i), delay + 500);
      setTimeout(() => setAtivo(-1), delay + 500 + dur);
      delay += dur + 400;
    });
    setTimeout(() => setFase("reproduzir"), delay + 1000);
    return () => setAtivo(-1);
  }, [fase]);

  const handleBatida = (tipo: string) => {
    if (fase !== "reproduzir") return;
    const novos = [...tentativas, tipo];
    setTentativas(novos);
    if (novos.length === p.padrao.length) {
      const correto = novos.every((v, i) => v === p.padrao[i]);
      setFeedback(correto ? "ok" : "erro");
      setTimeout(() => onDone(correto), 800);
    }
  };

  return (
    <div className="space-y-6 text-center">
      <div className="flex gap-2 justify-center">
        {p.padrao.map((s: string, i: number) => (
          <div
            key={i}
            className={`rounded-xl border-2 px-3 py-2 font-black transition-all ${ativo === i ? "bg-emerald-400 text-white border-emerald-500 scale-110" : "border-border bg-card"}`}
          >
            {s === "●" ? "curto" : "longo"}
          </div>
        ))}
      </div>
      {fase === "mostrar" && (
        <div className="text-muted-foreground text-sm animate-pulse">Preste atenção no padrão!</div>
      )}
      {fase === "reproduzir" && (
        <div className="space-y-3">
          <div className="text-sm font-bold text-emerald-700">
            Sua vez! ({tentativas.length}/{p.padrao.length})
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleBatida("●")}
              className="py-6 rounded-2xl bg-emerald-100 border-2 border-emerald-300 font-black text-emerald-700 active:scale-95 transition-all text-lg"
            >
              ● Curto
            </button>
            <button
              onClick={() => handleBatida("─")}
              className="py-6 rounded-2xl bg-emerald-50 border-2 border-emerald-200 font-black text-emerald-600 active:scale-95 transition-all text-lg"
            >
              ─ Longo
            </button>
          </div>
        </div>
      )}
      {feedback && (
        <div
          className={`text-2xl font-black ${feedback === "ok" ? "text-success" : "text-destructive"}`}
        >
          {feedback === "ok" ? "Perfeito!" : "Tente de novo!"}
        </div>
      )}
    </div>
  );
}

// 30. COPIAR FIGURA — grade modelo à esquerda, grade em branco à direita
function CopiarFigura({ p, onDone }: any) {
  const [copia, setCopia] = useState<number[][]>(() =>
    p.modelo.map((r: number[]) => r.map(() => 0)),
  );
  const [validado, setValidado] = useState(false);

  const toggle = (r: number, c: number) => {
    if (validado) return;
    setCopia((prev) =>
      prev.map((row, ri) => row.map((v, ci) => (ri === r && ci === c ? (v ? 0 : 1) : v))),
    );
  };
  const validar = () => {
    const correto = copia.every((row, r) => row.every((v, c) => v === p.modelo[r][c]));
    setValidado(true);
    setTimeout(() => onDone(correto), 700);
  };

  const CellGrid = ({
    data,
    onClick,
  }: {
    data: number[][];
    onClick?: (r: number, c: number) => void;
  }) => (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${p.cols}, 1fr)` }}>
      {data.map((row: number[], r: number) =>
        row.map((v: number, c: number) => (
          <button
            key={`${r}-${c}`}
            onClick={() => onClick?.(r, c)}
            className={`w-10 h-10 rounded-md border-2 transition-all ${v ? "bg-emerald-500 border-emerald-600" : "bg-card border-border hover:border-emerald/50"}`}
          />
        )),
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-xs font-bold text-muted-foreground mb-2">MODELO</div>
          <CellGrid data={p.modelo} />
        </div>
        <div className="text-center">
          <div className="text-xs font-bold text-muted-foreground mb-2">SUA CÓPIA</div>
          <CellGrid data={copia} onClick={toggle} />
        </div>
      </div>
      <button
        onClick={validar}
        disabled={validado}
        className="w-full py-4 rounded-2xl bg-emerald-500 text-white font-black text-lg active:scale-95 transition-all disabled:opacity-50"
      >
        Pronto!
      </button>
    </div>
  );
}

// 31. ALVO MÓVEL — círculo move pela tela, toca nele
function AlvoMovel({ p, onDone }: any) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [round, setRound] = useState(1);
  const [tocou, setTocou] = useState(false);
  const [perdeu, setPerdeu] = useState(false);
  const angRef = useRef(0);
  const animRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let t = 0;
    const move = () => {
      t += 0.02 * p.velocidade;
      angRef.current = t;
      setPos({ x: 50 + 35 * Math.cos(t), y: 50 + 30 * Math.sin(t * 1.3) });
      animRef.current = requestAnimationFrame(move);
    };
    animRef.current = requestAnimationFrame(move);
    const timeout = setTimeout(() => {
      cancelAnimationFrame(animRef.current!);
      if (!tocou) {
        setPerdeu(true);
        setTimeout(() => onDone(false), 600);
      }
    }, p.tempoMs);
    return () => {
      cancelAnimationFrame(animRef.current!);
      clearTimeout(timeout);
    };
  }, [round]);

  const handleToque = () => {
    if (tocou || perdeu) return;
    setTocou(true);
    cancelAnimationFrame(animRef.current!);
    if (round >= p.rounds) {
      setTimeout(() => onDone(true), 400);
    } else {
      setTimeout(() => {
        setTocou(false);
        setRound((r) => r + 1);
      }, 400);
    }
  };

  return (
    <div className="space-y-3 text-center">
      <div className="text-sm text-muted-foreground font-bold">
        Rodada {round} / {p.rounds}
      </div>
      <div
        className="relative bg-gradient-to-br from-emerald/10 to-emerald/5 border-2 border-emerald/20 rounded-3xl overflow-hidden"
        style={{ height: 280 }}
      >
        {!perdeu && (
          <button
            onClick={handleToque}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%,-50%)",
              backgroundColor: p.cor,
            }}
            className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <RenderEmoji e={p.emoji} className="w-10 h-10" />
          </button>
        )}
        {perdeu && (
          <div className="flex items-center justify-center h-full text-xl font-black text-muted-foreground">
            Tempo!
          </div>
        )}
      </div>
    </div>
  );
}

// ── ATENÇÃO & CONCENTRAÇÃO ────────────────────────────────────

// 32. ACHAR O DIFERENTE — grade com um item diferente
function AcharDiferente({ p, onDone }: any) {
  const [selecionado, setSelecionado] = useState<number | null>(null);
  const handleClick = (idx: number) => {
    if (selecionado !== null) return;
    setSelecionado(idx);
    setTimeout(() => onDone(idx === p.posAlvo), 600);
  };
  const cols = p.colunas ?? 3;
  return (
    <div className="space-y-4">
      <div className="text-center text-sm text-muted-foreground font-bold">
        Encontre o elemento diferente!
      </div>
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {p.grid.map((emoji: string, i: number) => {
          const certa = i === p.posAlvo;
          const bg =
            selecionado === i
              ? certa
                ? "bg-success/20 border-success scale-110"
                : "bg-destructive/20 border-destructive"
              : selecionado !== null && certa
                ? "bg-success/20 border-success"
                : "bg-card border-border hover:border-violet/50 hover:scale-105";
          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`rounded-xl border-2 p-1 flex items-center justify-center transition-all ${bg}`}
            >
              <RenderEmoji e={emoji} className="w-10 h-10" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 33. MEMÓRIA VISUAL — flash de grade colorida, depois reproduzir
function MemoriaVisual({ p, onDone }: any) {
  const [fase, setFase] = useState<"mostrar" | "reproduzir" | "done">("mostrar");
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<boolean | null>(null);

  useEffect(() => {
    if (fase !== "mostrar") return;
    const t = setTimeout(() => setFase("reproduzir"), p.flashMs);
    return () => clearTimeout(t);
  }, [fase, p.flashMs]);

  const handleCor = (cor: string, i: number) => {
    if (fase !== "reproduzir" || selecionados.length >= p.grid.length) return;
    const novos = [...selecionados, cor];
    setSelecionados(novos);
    if (novos.length === p.grid.length) {
      const correto = novos.every((c, idx) => c === p.grid[idx]);
      setFeedback(correto);
      setTimeout(() => onDone(correto), 700);
    }
  };

  const cores = [...new Set<string>(p.grid)];
  return (
    <div className="space-y-4 text-center">
      {fase === "mostrar" ? (
        <div>
          <div className="text-sm font-bold text-muted-foreground mb-3 animate-pulse">
            Memorize as cores!
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
                className="w-16 h-16 rounded-xl border-2 border-dashed border-muted-foreground"
                style={{ backgroundColor: selecionados[i] ?? "transparent" }}
              />
            ))}
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            {cores.map((cor, i) => (
              <button
                key={i}
                onClick={() => handleCor(cor, selecionados.length)}
                className="w-14 h-14 rounded-xl border-2 border-white/30 active:scale-90 transition-all shadow"
                style={{ backgroundColor: cor }}
              />
            ))}
          </div>
        </div>
      )}
      {feedback !== null && (
        <div className={`text-2xl font-black ${feedback ? "text-success" : "text-destructive"}`}>
          {feedback ? "Incrível!" : "Quase!"}
        </div>
      )}
    </div>
  );
}

// 34. REAÇÃO RÁPIDA — Go / No-Go
function ReacaoRapida({ p, onDone }: any) {
  const [idx, setIdx] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [mostrar, setMostrar] = useState(true);
  const [feedbackLocal, setFeedbackLocal] = useState<"ok" | "erro" | null>(null);

  useEffect(() => {
    setMostrar(true);
    setFeedbackLocal(null);
    const t = setTimeout(() => {
      if (idx < p.seq.length - 1) {
        setMostrar(false);
        setTimeout(() => setIdx((i) => i + 1), 300);
      } else {
        setTimeout(() => onDone(acertos >= Math.ceil(p.seq.length * 0.6)), 500);
      }
    }, p.intervaloMs);
    return () => clearTimeout(t);
  }, [idx]);

  const handleToque = () => {
    if (!mostrar) return;
    const item = p.seq[idx];
    if (item.tipo === "alvo") {
      setAcertos((a) => a + 1);
      setFeedbackLocal("ok");
    } else setFeedbackLocal("erro");
    setMostrar(false);
    setTimeout(() => {
      if (idx < p.seq.length - 1) setIdx((i) => i + 1);
      else onDone(acertos >= Math.ceil(p.seq.length * 0.6));
    }, 300);
  };

  const item = p.seq[idx] ?? p.seq[0];
  return (
    <div className="text-center space-y-5">
      <div className="text-xs text-muted-foreground font-bold">
        <span className="text-success">✓ Toque em {p.alvo}</span> <span className="mx-1">|</span>{" "}
        <span className="text-destructive">✕ Ignore {p.erro}</span>
      </div>
      <button
        onClick={handleToque}
        className={`w-full rounded-3xl border-2 py-8 flex items-center justify-center transition-all active:scale-95 ${feedbackLocal === "ok" ? "border-success bg-success/10" : feedbackLocal === "erro" ? "border-destructive bg-destructive/10" : "border-border bg-card hover:border-violet/50"}`}
      >
        {mostrar ? (
          <RenderEmoji e={item.emoji} className="w-24 h-24" />
        ) : (
          <span className="text-3xl font-black text-muted-foreground">···</span>
        )}
      </button>
      <div className="text-sm text-muted-foreground">
        {idx + 1} / {p.seq.length}
      </div>
    </div>
  );
}

// 35. SEGUIR INSTRUÇÃO — lê instrução, toca item correto
function SeguirInstrucao({ p, onDone }: any) {
  const [selecionado, setSelecionado] = useState<string | null>(null);
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
                : "border-destructive bg-destructive/10"
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-border bg-card hover:border-violet/50";
          return (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className={`rounded-2xl border-2 p-4 font-bold flex flex-col items-center gap-2 transition-all ${bg}`}
            >
              <RenderEmoji e={item} className="w-14 h-14" />
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
  const [selecionado, setSelecionado] = useState<string | null>(null);
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
                : "border-destructive bg-destructive/10"
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-border bg-card hover:border-amber/60";
          return (
            <button
              key={i}
              onClick={() => handleClick(img.n)}
              className={`rounded-2xl border-2 p-5 flex flex-col items-center gap-2 transition-all font-bold ${bg}`}
            >
              <RenderEmoji e={img.e} label={img.n} className="w-16 h-16" />
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
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const handleClick = (opt: string) => {
    if (selecionado) return;
    setSelecionado(opt);
    setTimeout(() => onDone(opt === p.correta), 700);
  };
  return (
    <div className="space-y-5 text-center">
      <div className="bg-gradient-to-br from-amber/15 to-amber/5 border-2 border-amber/25 rounded-3xl py-8 flex items-center justify-center">
        <RenderEmoji e={p.emoji} className="w-32 h-32" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {p.opts.map((opt: string, i: number) => {
          const certa = opt === p.correta;
          const bg =
            selecionado === opt
              ? certa
                ? "border-success bg-success/10 text-success"
                : "border-destructive bg-destructive/10"
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-border bg-card hover:border-amber/60";
          return (
            <button
              key={i}
              onClick={() => handleClick(opt)}
              className={`rounded-2xl border-2 py-4 font-black text-lg tracking-wider transition-all ${bg}`}
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
  const [sequencia, setSequencia] = useState<string[]>([]);
  const [erro, setErro] = useState(false);

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
          className={`text-4xl font-black tracking-widest transition-all ${erro ? "text-destructive animate-pulse" : sequencia.length === p.silabas.length ? "text-success" : "text-foreground"}`}
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
              className={`px-6 py-4 rounded-2xl border-2 font-black text-xl transition-all active:scale-95
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
  const [selecionado, setSelecionado] = useState<string | null>(null);
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
                : "border-destructive bg-destructive/10"
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-border bg-card hover:border-amber/60";
          return (
            <button
              key={i}
              onClick={() => handleClick(e)}
              className={`rounded-2xl border-2 py-4 flex items-center justify-center transition-all ${bg}`}
            >
              <RenderEmoji e={e} className="w-16 h-16" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 40. COMPLETAR LETRA — palavra com lacuna, escolher letra certa
function CompletarLetra({ p, onDone }: any) {
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const handleClick = (letra: string) => {
    if (selecionado) return;
    setSelecionado(letra);
    setTimeout(() => onDone(letra === p.letra), 700);
  };
  return (
    <div className="space-y-5 text-center">
      <div className="flex justify-center mb-2">
        <RenderEmoji e={p.emoji} className="w-24 h-24" />
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
                : "border-destructive bg-destructive/10"
              : selecionado && certa
                ? "border-success bg-success/10"
                : "border-border bg-card hover:border-amber/60";
          return (
            <button
              key={i}
              onClick={() => handleClick(letra)}
              className={`rounded-2xl border-2 py-5 text-3xl font-black transition-all ${bg}`}
            >
              {letra}
            </button>
          );
        })}
      </div>
    </div>
  );
}
