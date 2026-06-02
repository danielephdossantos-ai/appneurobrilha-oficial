import { createFileRoute, Link, useNavigate, Navigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { AlertCircle, ArrowLeft, ArrowDown, ArrowLeft as ArrowLeftIcon, ArrowRight, ArrowUp, ChevronRight, Hand, Mic, MicOff, RotateCcw, Sparkles, Volume2, VolumeX, Zap } from "lucide-react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { toast } from "sonner";
import { CATEGORIAS, VARIATIONS, MOTORZINHO_BANK, type CategoriaSlug, type MotorzinhoTag } from "@/data/neuro-treino/variations";
import { objetoImg, emojiImg, ilustracao, semEmoji } from "@/data/neuro-treino/objetos";
import { RenderEmoji } from "@/components/neuro-treino/RenderEmoji";
import { getElementoImg } from "@/data/hiperfocos-img";
import { useHiperfoco } from "@/context/HiperfocoContext";
import { useAppState } from "@/core/store";
import { applyHiperfoco, pickElemento, pipFraseAcerto, pipFraseIncentivo } from "@/data/hiperfocos";
import { usePipVoice } from "@/hooks/usePipVoice";
import { useSpeechMatcher } from "@/hooks/useSpeechMatcher";

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
  const instrucaoTematica = hiperfoco && meta ? applyHiperfoco(meta.instrucao, hiperfoco, seed) : "";
  const nomeCrianca = activeChild?.nome?.split(" ")[0] || "";

  const narracao = useMemo(() => {
    if (!variation || !instrucaoTematica) return "";
    const p: any = variation.payload ?? {};
    const extra =
      p.letra ? ` A letra é ${p.letra}.` :
      p.palavra ? ` A palavra é ${p.palavra}.` :
      p.alvo ? ` Procure ${p.alvo}.` :
      p.target ? ` Procure ${p.target}.` :
      "";
    const saud = nomeCrianca ? `${nomeCrianca}, ` : "";
    return `${saud}${instrucaoTematica}${extra}`;
  }, [variation, instrucaoTematica, nomeCrianca]);

  useEffect(() => {
    if (!voiceOn || !narracao) return;
    if (slug === "motorzinho-dos-sons") return;
    if (isLoading || error) return;
    const t = setTimeout(() => { speak(narracao); }, 250);
    return () => { clearTimeout(t); stop(); };
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
          <h2 className="text-xl font-bold text-muted-foreground">Preparando treino personalizado...</h2>
          <p className="text-sm text-muted-foreground mt-2">Aplicando hiperfoco: {hiperfoco.label}</p>
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
          <p className="text-muted-foreground mb-6">{error || "Atividade não encontrada no banco de dados."}</p>
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
        <Link to="/neuro-treino" className="flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-foreground">
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
        <span className="text-muted-foreground">Exercício {(index % vars.length) + 1} de {vars.length}</span>
        <span className="text-success">⭐ {acertos}</span>
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
        <MechanicRenderer slug={slug} variation={variation} onConcluir={onConcluir} key={variation.id} />
      </Card>

      <div className="mt-4 flex justify-end">
        <button onClick={() => setIndex((i)=>i+1)} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted font-bold hover:bg-muted/70">
          Pular <ChevronRight size={16} />
        </button>
      </div>
    </Shell>
  );
}



// ====================================================================
// Renderizador — escolhe a mecânica única conforme a categoria
// ====================================================================
function MechanicRenderer({ slug, variation, onConcluir }: { slug: CategoriaSlug; variation: any; onConcluir: (c:boolean)=>void }) {
  switch (slug) {
    case "sons-iniciais": return <SonsIniciais p={variation.payload} onDone={onConcluir} />;
    case "motorzinho-dos-sons": return <Motorzinho p={variation.payload} onDone={onConcluir} />;
    case "consciencia-fonologica": return <ConscienciaFonologica p={variation.payload} onDone={onConcluir} />;
    case "rimas": return <Rimas p={variation.payload} onDone={onConcluir} />;
    case "pedacinhos-da-palavra": return <Pedacinhos p={variation.payload} onDone={onConcluir} />;
    case "onde-esta": return <OndeEsta p={variation.payload} onDone={onConcluir} />;
    case "sequencia-e-padrao": return <SequenciaPadrao p={variation.payload} onDone={onConcluir} />;
    case "cade-o-par": return <CadeOPar p={variation.payload} onDone={onConcluir} />;
    case "foco-total": return <FocoTotal p={variation.payload} onDone={onConcluir} />;
    case "labirinto-do-som": return <LabirintoSom p={variation.payload} onDone={onConcluir} />;
    case "foco-sustentado": return <FocoSustentado p={variation.payload} onDone={onConcluir} />;
    case "rastreamento-sacadico": return <Sacadico p={variation.payload} onDone={onConcluir} />;
    case "mosaico-de-formas": return <Mosaico p={variation.payload} onDone={onConcluir} />;
    case "sequencia-de-cores": return <SequenciaCores p={variation.payload} onDone={onConcluir} />;
    case "simetria": return <Simetria p={variation.payload} onDone={onConcluir} />;
    case "decoracao-criativa": return <Decoracao p={variation.payload} onDone={onConcluir} />;
    case "onomatopeias-animadas": return <Onomatopeias p={variation.payload} onDone={onConcluir} />;
    case "ritmo-e-sopro": return <RitmoSopro p={variation.payload} onDone={onConcluir} />;
    case "paromatopeias-corpo": return <SonsCorpo p={variation.payload} onDone={onConcluir} />;
    case "tracado-letras": return <TracadoLetras p={variation.payload} onDone={onConcluir} />;
    case "caminho-dos-pontos": return <CaminhoPontos p={variation.payload} onDone={onConcluir} />;
    case "labirinto-precisao": return <LabirintoPrecisao p={variation.payload} onDone={onConcluir} />;
    case "triagem-categorias": return <TriagemCategorias p={variation.payload} onDone={onConcluir} />;
    case "expressao-emocao": return <ExpressaoEmocao p={variation.payload} onDone={onConcluir} />;
  }
}

// ============== 1. Sons Iniciais ==============
function SonsIniciais({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="text-7xl font-black text-primary mb-6">{p.letra}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((o:any, i:number) => {
          const img = objetoImg(o.nome);
          return (
            <button
              key={i}
              onClick={()=>onDone(o.nome === p.correctName)}
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
      <div className="text-2xl md:text-3xl font-black mb-6 text-foreground">
        {headers[p.tipo]}
      </div>
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

  const [phase, setPhase] = useState<"idle" | "demo" | "your-turn" | "listening" | "result">("idle");
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
    if (phase === "demo") return `Escuta a professora falando o som da letra ${item.letra_fonema}...`;
    if (phase === "your-turn") return `Agora é a sua vez, ${nome}! Aperta o microfone e fala: ${item.palavra_alvo}`;
    if (phase === "listening") return `Tô te ouvindo... fala alto: ${item.palavra_alvo}!`;
    if (lastMatched) return `Boa, ${nome}! Falou ${item.palavra_alvo} certinho!`;
    return `Quase! Vamos repetir o som "${item.letra_fonema}" e a palavra ${item.palavra_alvo}.`;
  })();

  return (
    <div className="text-center">
      {/* Balão do PIP */}
      <div className="flex items-start gap-3 mb-6 text-left">
        <div className="text-5xl shrink-0">{ilustracao(undefined, hiperfoco?.id === "minecraft" ? "CREEPER" : "LEÃO") ? <img src={ilustracao(undefined, hiperfoco?.id === "minecraft" ? "CREEPER" : "LEÃO")} className="w-16 h-16 object-contain" /> : "🦁"}</div>
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
          <div className={`text-sm font-bold px-3 py-1 rounded-full ${lastMatched ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}>
            Você disse: "{lastTranscript}"
          </div>
        )}
      </div>

      {/* Aviso se mic não suportado */}
      {!micSupported && phase === "your-turn" && (
        <div className="mb-4 text-xs text-muted-foreground bg-muted/50 rounded-lg p-2 max-w-md mx-auto flex items-center gap-2 justify-center">
          <AlertCircle size={14} /> Seu navegador não suporta reconhecimento de voz. Use Chrome, Edge ou Safari.
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
        <div className="text-sm font-bold text-primary animate-pulse flex items-center justify-center gap-2"><Volume2 size={16}/> Professora falando...</div>
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
        {objetoImg(p.palavra) && <img src={objetoImg(p.palavra)} className="w-20 h-20 object-contain drop-shadow-sm" />}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((o:string, i:number) => (
          <button key={i} onClick={()=>onDone(o === p.correta)} className="bg-card border-2 border-border rounded-xl py-6 px-4 font-black text-xl hover:border-coral hover:scale-105 transition-all flex flex-col items-center gap-2">
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
        {objetoImg(p.palavra) && <img src={objetoImg(p.palavra)} className="w-20 h-20 object-contain drop-shadow-sm" />}
      </div>
      <div className="flex justify-center gap-2 mb-6">
        {p.silabas.map((s:string, i:number) => (
          <div key={i} className={`px-4 py-2 rounded-xl font-bold ${i < claps ? "bg-success text-white" : "bg-muted"}`}>{s}</div>
        ))}
      </div>
      <button onClick={()=>setClaps(c=>c+1)} className="bg-coral text-white px-12 py-8 rounded-2xl shadow-lg active:scale-95 mb-4 flex items-center gap-3 mx-auto">
        <Hand size={40} />
        <span className="text-2xl font-black">BATER PALMA</span>
      </button>
      <div className="text-muted-foreground mb-4">Palmas: <b>{claps}</b></div>
      <div className="flex gap-2 justify-center">
        <button onClick={()=>setClaps(0)} className="bg-muted px-4 py-2 rounded-xl font-bold flex items-center gap-1"><RotateCcw size={14}/> Recomeçar</button>
        <button onClick={()=>onDone(claps === p.total)} className="bg-success text-white px-6 py-2 rounded-xl font-bold">Confirmar</button>
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
      <div className="grid gap-2 mx-auto" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, maxWidth: cols * 72 }}>
        {p.grid.map((e:string, i:number) => (
          <button key={i} onClick={()=>onDone(i === p.correctIndex)} className="aspect-square p-1.5 bg-card border-2 border-border rounded-lg hover:border-primary hover:scale-105 transition-all flex items-center justify-center">
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
        {p.seq.map((s:string, i:number) => (
          <div key={i} className="w-20 h-20 flex items-center justify-center bg-card rounded-2xl border shadow-sm">
            <RenderEmoji e={s} className="w-16 h-16" />
          </div>
        ))}
        <span className="text-primary text-6xl font-black">?</span>
      </div>
      <div className="flex justify-center gap-3">
        {p.opts.map((o:string, i:number) => (
          <button key={i} onClick={()=>onDone(o === p.next)} className="w-24 h-24 flex items-center justify-center bg-card border-2 border-border rounded-2xl hover:border-primary hover:scale-110 transition-all shadow-md">
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
    const dup = [...p.pares, ...p.pares].map((v,i)=>({v, i, id: Math.random()}));
    return dup.sort(()=>Math.random()-0.5);
  }, [p]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  useEffect(() => {
    if (matched.length === p.pares.length) setTimeout(()=>onDone(true), 400);
  }, [matched.length]);
  const handleClick = (idx:number) => {
    if (flipped.length === 2 || flipped.includes(idx) || matched.includes(cards[idx].v)) return;
    const next = [...flipped, idx];
    setFlipped(next);
    if (next.length === 2) {
      if (cards[next[0]].v === cards[next[1]].v) {
        setMatched(m=>[...m, cards[next[0]].v]);
        setTimeout(()=>setFlipped([]), 500);
      } else setTimeout(()=>setFlipped([]), 900);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
      {cards.map((c, i) => {
        const show = flipped.includes(i) || matched.includes(c.v);
        return (
          <button key={i} onClick={()=>handleClick(i)} className={`aspect-square rounded-xl border-2 transition-all flex items-center justify-center p-2 ${show ? "bg-card border-primary" : "bg-gradient-to-br from-primary/30 to-primary/10 border-border"}`}>
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
      <div className="font-black text-8xl mb-8 flex flex-col items-center gap-4" style={{ color: p.corExibida }}>
        <div className="bg-card border-4 border-white rounded-full p-6 shadow-xl w-32 h-32 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full shadow-inner" style={{ background: p.corExibida }} />
        </div>
        <span>{p.palavra}</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((c:any, i:number) => (
          <button key={i} onClick={()=>onDone(c.nome === p.corCerta)} className="rounded-xl py-8 font-black text-white shadow-lg hover:scale-105 transition-all flex items-center justify-center" style={{ background: c.hex }}>
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
      <div className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-1"><Volume2 size={14}/> Pista sonora</div>
      <div className="text-4xl font-black text-primary mb-6">"{atual.nome}"</div>
      <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
        <div />
        <button onClick={()=>handleDir("CIMA")} className={btnDir()}>
          <ArrowUp className="w-10 h-10 mx-auto" />
        </button>
        <div />
        <button onClick={()=>handleDir("ESQUERDA")} className={btnDir()}>
          <ArrowLeftIcon className="w-10 h-10 mx-auto" />
        </button>
        <div className="flex items-center justify-center bg-primary/10 rounded-full border-2 border-primary/30 w-16 h-16 mx-auto">
          <RotateCcw className="w-8 h-8 text-primary" />
        </div>
        <button onClick={()=>handleDir("DIREITA")} className={btnDir()}>
          <ArrowRight className="w-10 h-10 mx-auto" />
        </button>
        <div />
        <button onClick={()=>handleDir("BAIXO")} className={btnDir()}>
          <ArrowDown className="w-10 h-10 mx-auto" />
        </button>
        <div />
      </div>
      <div className="mt-4 text-sm text-muted-foreground">Passo {passo+1} de {p.caminho.length}</div>
    </div>
  );
  function handleDir(d:string) {
    if (d === atual.nome) {
      if (passo + 1 >= p.caminho.length) onDone(true);
      else { setPasso(passo+1); toast.success("Boa!"); }
    } else onDone(false);
  }
}
function btnDir() { return "p-4 bg-card border-2 border-border rounded-xl hover:border-primary text-primary"; }

// ============== 10. Foco Sustentado ==============
function FocoSustentado({ p, onDone }: any) {
  const [k, setK] = useState(0);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  useEffect(() => {
    if (k >= p.stream.length) { onDone(score > 0 && missed === 0); return; }
    const t = setTimeout(()=>setK(k+1), p.intervaloMs);
    return ()=>clearTimeout(t);
  }, [k]);
  const handleTap = () => {
    if (p.stream[k] === p.alvo) setScore(s=>s+1);
    else setMissed(m=>m+1);
    setK(k+1);
  };
  const atual = p.stream[k];
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-2">
        Alvo:
        <RenderEmoji e={p.alvo} className="w-12 h-12" />
      </div>
      <button onClick={handleTap} className="p-6 bg-card border-4 border-primary rounded-3xl my-6 mx-auto active:scale-95 w-48 h-48 flex items-center justify-center">
        <RenderEmoji e={atual} className="w-full h-full" />
      </button>
      <div className="text-sm text-muted-foreground">Acertos: <b className="text-success">{score}</b> · Enganos: <b className="text-destructive">{missed}</b></div>
      <div className="text-xs text-muted-foreground mt-1">{k}/{p.stream.length}</div>
    </div>
  );
}

// ============== 11. Rastreamento Sacádico ==============
function Sacadico({ p, onDone }: any) {
  const [fase, setFase] = useState<"mostrar"|"jogar"|"fim">("mostrar");
  const [showIdx, setShowIdx] = useState(0);
  const [piscando, setPiscando] = useState<number | null>(null);
  const [userSeq, setUserSeq] = useState<number[]>([]);
  useEffect(() => {
    if (fase !== "mostrar") return;
    if (showIdx >= p.sequencia.length) { setFase("jogar"); setPiscando(null); return; }
    setPiscando(p.sequencia[showIdx]);
    const t = setTimeout(()=>{ setPiscando(null); setTimeout(()=>setShowIdx(showIdx+1), 150); }, p.flashMs);
    return ()=>clearTimeout(t);
  }, [showIdx, fase]);
  const tap = (pos:number) => {
    if (fase !== "jogar") return;
    const next = [...userSeq, pos];
    setUserSeq(next);
    if (p.sequencia[next.length-1] !== pos) { onDone(false); return; }
    if (next.length === p.sequencia.length) onDone(true);
  };
  const posClass = (pos:number) => {
    const map = ["top-2 left-2","top-2 right-2","bottom-2 left-2","bottom-2 right-2"];
    return map[pos];
  };
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">{fase === "mostrar" ? "Observe a ordem…" : "Toque na mesma ordem"}</div>
      <div className="relative h-64 w-64 mx-auto bg-card border-2 border-border rounded-2xl">
        {[0,1,2,3].map(pos => (
          <button key={pos} onClick={()=>tap(pos)} className={`absolute ${posClass(pos)} w-16 h-16 rounded-full transition-all ${piscando === pos ? "bg-sun scale-125 shadow-glow" : "bg-muted"}`} />
        ))}
      </div>
    </div>
  );
}

// ============== 12. Mosaico de Formas ==============
function Mosaico({ p, onDone }: any) {
  const [selecionadas, setSelecionadas] = useState<string[]>([]);
  const toggle = (op:string) => setSelecionadas(s => s.includes(op) ? s.filter(x=>x!==op) : [...s, op]);
  const verificar = () => {
    const ok = p.pecas.every((x:string)=>selecionadas.includes(x)) && selecionadas.length === p.pecas.length;
    onDone(ok);
  };
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Monte:</div>
      <div className="text-3xl font-black mb-6 bg-card border-2 border-primary/20 rounded-2xl px-6 py-3 inline-block text-primary">{semEmoji(p.figura)}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {p.opcoes.map((op:string, i:number) => (
          <button key={i} onClick={()=>toggle(op)} className={`w-24 h-24 flex items-center justify-center rounded-2xl border-2 transition-all shadow-sm ${selecionadas.includes(op) ? "border-primary bg-primary/10 scale-110 shadow-glow" : "border-border bg-card"}`}>
            <RenderEmoji e={op} className="w-16 h-16" />
          </button>
        ))}
      </div>
      <button onClick={verificar} className="bg-success text-white px-8 py-3 rounded-xl font-black">Conferir</button>
    </div>
  );
}

// ============== 13. Sequência de Cores ==============
function SequenciaCores({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="flex justify-center gap-2 mb-6">
        {p.sequencia.map((c:string, i:number) => <div key={i} className="w-12 h-12 rounded-lg shadow" style={{ background: c }} />)}
        <div className="w-12 h-12 rounded-lg border-2 border-dashed border-muted-foreground flex items-center justify-center font-black">?</div>
      </div>
      <div className="flex justify-center gap-3">
        {p.options.map((c:string, i:number) => (
          <button key={i} onClick={()=>onDone(c === p.next)} className="w-16 h-16 rounded-xl shadow-lg hover:scale-110 transition-all" style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}

// ============== 14. Simetria ==============
function Simetria({ p, onDone }: any) {
  const [right, setRight] = useState<number[][]>(() => Array(p.rows).fill(0).map(()=>Array(p.halfCols).fill(0)));
  const toggle = (r:number, c:number) => setRight(rt => rt.map((row,i)=> i===r ? row.map((v,j)=> j===c ? (v?0:1) : v) : row));
  const conferir = () => {
    // mirror: right[r][c] deve corresponder a left[r][halfCols-1-c]
    const ok = p.left.every((row:number[], r:number) => row.every((v:number, c:number) => v === right[r][p.halfCols-1-c]));
    onDone(ok);
  };
  return (
    <div className="text-center">
      <div className="flex justify-center gap-1 mb-4">
        <div>
          {p.left.map((row:number[], r:number) => (
            <div key={r} className="flex gap-1">
              {row.map((v:number, c:number) => <div key={c} className={`w-10 h-10 rounded ${v ? "bg-primary" : "bg-muted"}`} />)}
            </div>
          ))}
        </div>
        <div className="w-px bg-foreground/30 mx-1" />
        <div>
          {right.map((row, r) => (
            <div key={r} className="flex gap-1">
              {row.map((v, c) => <button key={c} onClick={()=>toggle(r,c)} className={`w-10 h-10 rounded border ${v ? "bg-lilac" : "bg-card border-border"}`} />)}
            </div>
          ))}
        </div>
      </div>
      <button onClick={conferir} className="bg-success text-white px-8 py-3 rounded-xl font-black">Conferir simetria</button>
    </div>
  );
}

// ============== 15. Decoração Criativa ==============
function Decoracao({ p, onDone }: any) {
  const [placed, setPlaced] = useState<{e:string;x:number;y:number}[]>([]);
  const [dragging, setDragging] = useState<string | null>(null);
  const drop = (e: React.DragEvent) => {
    if (!dragging) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPlaced(p => [...p, { e: dragging, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setDragging(null);
  };
  return (
    <div className="text-center">
      <div className="text-2xl font-black mb-2">{semEmoji(p.cenario)}</div>
      <div onDragOver={(e)=>e.preventDefault()} onDrop={drop} className={`relative h-72 rounded-2xl bg-gradient-to-b ${p.fundo} border-2 border-dashed border-border mb-4 overflow-hidden`}>
        {placed.map((it, i) => (
          <div key={i} className="absolute" style={{ left: it.x - 32, top: it.y - 32 }}>
            <RenderEmoji e={it.e} className="w-16 h-16" />
          </div>
        ))}
        {placed.length === 0 && <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Arraste para cá</div>}
      </div>
      <div className="flex gap-2 justify-center mb-4 flex-wrap">
        {p.stickers.map((s:string, i:number) => (
          <div key={i} draggable onDragStart={()=>setDragging(s)} className="w-20 h-20 flex items-center justify-center bg-card border-2 border-border rounded-2xl cursor-grab active:cursor-grabbing hover:border-primary transition-all shadow-sm">
            <RenderEmoji e={s} className="w-14 h-14" />
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        <button onClick={()=>setPlaced([])} className="bg-muted px-4 py-2 rounded-xl font-bold flex items-center gap-1"><RotateCcw size={14}/> Limpar</button>
        <button onClick={()=>onDone(placed.length >= 3)} className="bg-success text-white px-6 py-2 rounded-xl font-black flex items-center gap-1"><Sparkles size={16}/> Finalizar arte</button>
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
        <div className="text-xs uppercase text-muted-foreground tracking-widest mb-1 flex items-center justify-center gap-1"><Volume2 size={12}/> Som</div>
        <div className="text-5xl font-black text-coral">{p.som}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((o:any, i:number) => {
          const img = ilustracao(o.emoji, o.nome);
          return (
            <button
              key={i}
              onClick={()=>onDone(o.nome === p.correctName)}
              className="bg-card border-2 border-border rounded-2xl p-4 hover:border-coral hover:scale-105 transition-all flex flex-col items-center gap-2"
            >
              {img ? (
                <img src={img} alt={o.nome} width={128} height={128} loading="lazy" className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-md" />
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

// ============== 17. Ritmo e Sopro Visual ==============
// Mecânica única: barra horizontal de comprimento variável; segurar = encher
function RitmoSopro({ p, onDone }: any) {
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    if (holding) {
      const start = Date.now();
      ref.current = window.setInterval(() => {
        const pct = Math.min(100, ((Date.now() - start) / (p.holdSeconds * 1000)) * 100);
        setProgress(pct);
        if (pct >= 100) { window.clearInterval(ref.current!); onDone(true); }
      }, 50);
    } else if (ref.current) window.clearInterval(ref.current);
    return () => { if (ref.current) window.clearInterval(ref.current); };
  }, [holding]);
  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center">
        <RenderEmoji e={p.veiculo} className="w-24 h-24" />
      </div>
      <div className="text-4xl font-black text-coral mb-6 px-4 py-2 bg-card border-2 border-coral/30 rounded-2xl inline-block">{p.silaba}</div>
      <div className="mx-auto h-8 bg-muted rounded-full overflow-hidden mb-2" style={{ width: `${p.tamanho}%`, maxWidth: "90%" }}>
        <div className="h-full bg-gradient-to-r from-sun to-coral transition-all" style={{ width: `${progress}%` }} />
      </div>
      <div className="text-xs text-muted-foreground mb-4">Tamanho do sopro: {p.tamanho}%</div>
      <button
        onMouseDown={()=>setHolding(true)} onMouseUp={()=>setHolding(false)} onMouseLeave={()=>setHolding(false)}
        onTouchStart={()=>setHolding(true)} onTouchEnd={()=>setHolding(false)}
        className="bg-coral text-white px-12 py-6 rounded-2xl font-black text-lg shadow-lg active:scale-95"
      >
        SOPRE AQUI
      </button>
    </div>
  );
}

// ============== 18. Sons do Corpo / Paromatopeias ==============
// Mecânica única: som textual → escolher ação (texto + emoji)
function SonsCorpo({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="text-xs uppercase text-muted-foreground tracking-widest mb-1 flex items-center justify-center gap-1"><Volume2 size={12}/> Ouça</div>
      <div className="text-5xl font-black text-coral mb-6">"{p.som}"</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.opts.map((o:string, i:number) => {
          const limpo = semEmoji(o);
          const parts = o.trim().split(/\s+/);
          const emoji = parts[0];
          return (
            <button key={i} onClick={()=>onDone(o === p.correta)} className="bg-card border-2 border-border rounded-xl py-5 px-3 font-bold text-lg hover:border-coral hover:scale-105 transition-all flex flex-col items-center gap-2">
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
  const tap = (i:number) => {
    if (i === step) {
      if (step + 1 >= p.passos.length) { toast.success("Letra completa!"); onDone(true); }
      else setStep(step+1);
    } else {
      toast("Ops, comece pela seta 1");
    }
  };
  return (
    <div className="text-center">
      <div className="text-[10rem] leading-none font-black text-success/20 select-none mb-4">{p.letra}</div>
      <div className="text-sm text-muted-foreground mb-3">Toque as setas em ordem:</div>
      <div className="flex justify-center gap-3 flex-wrap">
        {p.passos.map((seta:string, i:number) => {
          const done = i < step;
          const current = i === step;
          return (
            <button key={i} onClick={()=>tap(i)} className={`relative w-24 h-24 rounded-3xl border-4 transition-all flex items-center justify-center ${done ? "bg-success text-white border-success" : current ? "bg-card border-success animate-pulse shadow-glow" : "bg-muted border-border"}`}>
              <span className="absolute -top-2 -left-2 text-sm font-black bg-success text-white rounded-full w-7 h-7 flex items-center justify-center border-2 border-white shadow-sm z-10">{i+1}</span>
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
  const [linhas, setLinhas] = useState<{x1:number;y1:number;x2:number;y2:number}[]>([]);
  const tap = (i:number) => {
    if (i !== next) { toast("Próximo é o " + (next+1)); return; }
    if (i > 0) {
      const a = p.pontos[i-1], b = p.pontos[i];
      setLinhas(l => [...l, { x1:a.x, y1:a.y, x2:b.x, y2:b.y }]);
    }
    if (i + 1 >= p.pontos.length) { toast.success("Figura completa!"); onDone(true); }
    else setNext(i+1);
  };
  return (
    <div className="text-center">
      <div className="text-lg font-black mb-2">{semEmoji(p.figura)}</div>
      <svg viewBox="0 0 100 100" className="mx-auto bg-card border-2 border-border rounded-2xl" style={{ width: 280, height: 280 }}>
        {linhas.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="hsl(var(--success))" strokeWidth={1.2} />)}
        {p.pontos.map((pt:any, i:number) => (
          <g key={i} onClick={()=>tap(i)} style={{ cursor:"pointer" }}>
            <circle cx={pt.x} cy={pt.y} r={i === next ? 4 : 3} fill={i < next ? "hsl(var(--success))" : i === next ? "hsl(var(--coral))" : "hsl(var(--muted-foreground))"} />
            <text x={pt.x} y={pt.y - 5} fontSize={4.5} textAnchor="middle" fontWeight="900" fill="hsl(var(--foreground))">{i+1}</text>
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
  const dentroDeAlgum = (x:number, y:number) =>
    p.segmentos.some((s:any) => x >= s.x && x <= s.x + s.w && y >= s.y && y <= s.y + s.h);

  const move = (clientX:number, clientY:number) => {
    if (!dragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    if (dentroDeAlgum(x, y)) {
      setPos({ x, y });
      // chegou no fim (último segmento, canto inferior direito)
      const last = p.segmentos[p.segmentos.length - 1];
      if (x >= last.x + last.w - 6 && y >= last.y + last.h - 6) { onDone(true); }
    } else {
      setErros(e => e + 1);
      setDragging(false);
      toast("Saiu do caminho — recomece");
      setPos({ x: 12, y: 53 });
    }
  };
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Tema: {semEmoji(p.tema)} · Erros: {erros}</div>
      <div
        ref={containerRef}
        onMouseMove={(e)=>move(e.clientX, e.clientY)}
        onMouseUp={()=>setDragging(false)}
        onTouchMove={(e)=>{ const t = e.touches[0]; move(t.clientX, t.clientY); }}
        onTouchEnd={()=>setDragging(false)}
        className="relative mx-auto bg-muted/30 border-2 border-border rounded-2xl"
        style={{ width: 360, height: 280 }}
      >
        {p.segmentos.map((s:any, i:number) => (
          <div key={i} className="absolute bg-success/20 border border-success/40 rounded" style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.w}%`, height: `${s.h}%` }} />
        ))}
        <button
          onMouseDown={()=>setDragging(true)}
          onTouchStart={()=>setDragging(true)}
          className="absolute w-12 h-12 bg-coral rounded-full shadow-xl border-4 border-white cursor-grab active:cursor-grabbing flex items-center justify-center transition-transform hover:scale-110 z-20"
          style={{ left: `calc(${pos.x}% - 24px)`, top: `calc(${pos.y}% - 24px)` }}
          aria-label="Bolinha"
        >
          {ilustracao(undefined, "BOLA") ? <img src={ilustracao(undefined, "BOLA")} className="w-full h-full object-contain" /> : <div className="w-6 h-6 bg-white rounded-full" />}
        </button>
      </div>
      <div className="text-xs text-muted-foreground mt-2">Arraste a bolinha pelo corredor verde até o final</div>
    </div>
  );
}

// ============== 22. Triagem de Categorias ==============
// Mecânica única: arrastar itens para caixas; valida ao colocar todos
function TriagemCategorias({ p, onDone }: any) {
  const [assigned, setAssigned] = useState<Record<number, string>>({}); // itemIndex → caixaName
  const [dragging, setDragging] = useState<number | null>(null);
  const drop = (caixa:string) => {
    if (dragging === null) return;
    setAssigned(a => ({ ...a, [dragging]: caixa }));
    setDragging(null);
  };
  useEffect(() => {
    if (Object.keys(assigned).length === p.itens.length) {
      const acertou = p.itens.every((it:any, i:number) => assigned[i] === it.cat);
      onDone(acertou);
    }
  }, [assigned]);
  return (
    <div className="text-center">
      <div className="flex gap-3 justify-center mb-4 flex-wrap">
        {p.itens.map((it:any, i:number) => {
          if (assigned[i]) return null;
          return (
            <div key={i} draggable onDragStart={()=>setDragging(i)} className="p-2 bg-card border-2 border-border rounded-xl cursor-grab active:cursor-grabbing w-16 h-16 flex items-center justify-center">
              <RenderEmoji e={it.e} className="w-full h-full" />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {p.caixas.map((c:any) => (
          <div key={c.nome} onDragOver={(e)=>e.preventDefault()} onDrop={()=>drop(c.nome)} className="min-h-[140px] bg-lilac/10 border-2 border-dashed border-lilac rounded-2xl p-3">
            <div className="font-black mb-2 flex items-center justify-center gap-2">
              <RenderEmoji e={c.emoji} label={c.nome} className="w-10 h-10" />
              {c.nome}
            </div>
            <div className="flex flex-wrap gap-1 justify-center">
              {p.itens.map((it:any, i:number) => {
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
// Mecânica única: cena descritiva → escolher rosto que combina
function ExpressaoEmocao({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="bg-card border-2 border-border rounded-2xl p-6 mb-6">
        <div className="text-xs uppercase text-muted-foreground mb-2">Situação</div>
        <div className="text-xl font-bold">{semEmoji(p.cena)}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.opts.map((o:string, i:number) => {
          const limpo = semEmoji(o);
          const emoji = o.trim().split(/\s+/)[0];
          return (
            <button key={i} onClick={()=>onDone(o === p.correta)} className="bg-card border-2 border-border rounded-2xl py-6 px-3 font-black text-lg hover:border-lilac hover:scale-105 transition-all flex flex-col items-center gap-2">
              <RenderEmoji e={emoji} label={limpo} className="w-20 h-20" />
              <span>{limpo}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
