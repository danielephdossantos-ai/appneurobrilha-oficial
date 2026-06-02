import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { useState, useEffect, useRef, Component, ReactNode, useMemo } from "react";
import { Play, BookOpen, Volume2, CheckCircle2, Lightbulb, Loader2, AlertCircle, Palette, HelpCircle, Coffee, ArrowRight, Star } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { toast } from "sonner";
import { PipPedagogicalGuidance } from "@/components/rewards/PipPedagogicalGuidance";
import { ActivityProceduralService } from "@/modules/escola-brilha/services/ActivityProceduralService";
import { useNeuroAdaptive } from "@/hooks/useNeuroAdaptive";
import { FloatingActivityControls } from "@/components/activities/FloatingActivityControls";
import { useMascot } from "@/contexts/MascotContext";
import { EIMiniGame } from "@/components/escola/EIMiniGame";
import { Tracing } from "@/components/escola/Tracing";
import imgPortugues from "@/assets/escola-brilha/portugues.png";
import imgMatematica from "@/assets/escola-brilha/matematica.png";
import imgCiencias from "@/assets/escola-brilha/ciencias.png";
import imgHistoria from "@/assets/escola-brilha/historia.png";
import imgGeografia from "@/assets/escola-brilha/geografia.png";
import imgArtes from "@/assets/escola-brilha/artes.png";
import imgLinguagemEI from "@/assets/escola-brilha/linguagem-ei.png";
import imgNumerosEI from "@/assets/escola-brilha/numeros-ei.png";
import imgNaturezaEI from "@/assets/escola-brilha/natureza-ei.png";
import imgArtesEI from "@/assets/escola-brilha/artes-ei.png";

// Error Boundary para capturar falhas na renderização da aula
class AulaErrorBoundary extends Component<{ children: ReactNode; onReset: () => void }, { hasError: boolean; error: Error | null }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("AulaErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Shell>
          <div className="flex flex-col items-center justify-center p-8 text-center bg-destructive/5 rounded-3xl border-2 border-dashed border-destructive/20">
            <AlertCircle className="h-16 w-16 text-destructive mb-4" />
            <h2 className="text-2xl font-bold text-destructive">Ops! Algo deu errado na aula.</h2>
            <p className="text-muted-foreground mt-2 mb-6">
              Ocorreu um erro técnico ao renderizar esta atividade.<br/>
              <b>Erro:</b> {this.state.error?.message}
            </p>
            <button 
              onClick={() => {
                this.setState({ hasError: false });
                this.props.onReset();
              }}
              className="bg-primary text-white px-6 py-2 rounded-xl font-bold shadow-glow"
            >
              Tentar novamente
            </button>
          </div>
        </Shell>
      );
    }
    return this.props.children;
  }
}


export const Route = createFileRoute("/escola-brilha")({
  component: Escola,
});

const materias = [
  { id: "portugues", nome: "Português", img: imgPortugues, cor: "from-coral/30 to-coral/5", mascote: "🐦", mascoteNome: "Professora Pipa" },
  { id: "matematica", nome: "Matemática", img: imgMatematica, cor: "from-sky/30 to-sky/5", mascote: "🐥", mascoteNome: "Professor Pip" },
  { id: "ciencias", nome: "Ciências", img: imgCiencias, cor: "from-success/20 to-success/5", mascote: "🐦", mascoteNome: "Professora Pipa" },
  { id: "historia", nome: "História", img: imgHistoria, cor: "from-sun/30 to-sun/5", mascote: "🐥", mascoteNome: "Professor Pip" },
  { id: "geografia", nome: "Geografia", img: imgGeografia, cor: "from-lilac/30 to-lilac/5", mascote: "🐦", mascoteNome: "Professora Pipa" },
  { id: "artes", nome: "Artes", img: imgArtes, cor: "from-pink/30 to-pink/5", mascote: "🐥", mascoteNome: "Professor Pip" },
] as const;

// Educação Infantil — 4 grandes áreas BNCC adaptadas
const materiasInfantil = [
  { id: "portugues", nome: "Linguagem", img: imgLinguagemEI, cor: "from-coral/30 to-coral/5", descricao: "Vogais e primeiras palavras", mascote: "🐦", mascoteNome: "Professora Pipa" },
  { id: "matematica", nome: "Números", img: imgNumerosEI, cor: "from-sky/30 to-sky/5", descricao: "Contar de 1 a 5", mascote: "🐥", mascoteNome: "Professor Pip" },
  { id: "ciencias", nome: "Natureza", img: imgNaturezaEI, cor: "from-success/20 to-success/5", descricao: "Bichinhos e o mundo", mascote: "🐦", mascoteNome: "Professora Pipa" },
  { id: "artes", nome: "Artes", img: imgArtesEI, cor: "from-pink/30 to-pink/5", descricao: "Cores e formas", mascote: "🐥", mascoteNome: "Professor Pip" },
] as const;

function isEI(grade: string) {
  const g = grade.toLowerCase();
  return g.includes('infantil') || g.includes('pré') || g.includes('pre');
}

// ===== Camada visual por faixa etária (apenas estética, não muda lógica) =====
type GradeTier = "ei" | "alfa" | "fund1" | "fund2" | "fund2plus";
function gradeTier(grade: string): GradeTier {
  if (isEI(grade)) return "ei";
  if (/^1º|^2º/.test(grade)) return "alfa";
  if (/^3º|^4º|^5º/.test(grade)) return "fund1";
  if (/^6º|^7º/.test(grade)) return "fund2";
  return "fund2plus"; // 8º, 9º
}

const tierTheme: Record<GradeTier, {
  bg: string; scene: string; sceneEmoji: string; vibe: string; titleScale: string;
}> = {
  ei:       { bg: "from-sky/25 via-petal/20 to-sun/15", scene: "Jardim Encantado",        sceneEmoji: "🌈🌳🦋", vibe: "Bem-vindo ao Jardim Brilha", titleScale: "text-3xl" },
  alfa:     { bg: "from-coral/20 via-sun/20 to-petal/15", scene: "Vila das Letras",       sceneEmoji: "🏘️📚✨", vibe: "Hoje vamos descobrir palavras",  titleScale: "text-2xl" },
  fund1:    { bg: "from-success/15 via-sky/20 to-lilac/15", scene: "Laboratório das Descobertas", sceneEmoji: "🔭🧪🗺️", vibe: "Vamos investigar juntos",   titleScale: "text-2xl" },
  fund2:    { bg: "from-sky/20 via-lilac/15 to-primary/10", scene: "Estação de Missões",  sceneEmoji: "🛰️🧭🎯", vibe: "Sua próxima missão começa agora", titleScale: "text-xl" },
  fund2plus:{ bg: "from-primary/15 via-lilac/10 to-sky/10", scene: "Centro de Estudos Brilha", sceneEmoji: "📊🧠📐", vibe: "Foco, estratégia e descoberta", titleScale: "text-xl" },
};

// Frases de feedback positivas (substituem "Tente novamente")
const ALMOST_THERE = [
  "Você está quase lá!",
  "Olhe a dica e tente de novo 💡",
  "Boa tentativa! Vamos observar com calma.",
  "Está perto! Respira e tenta mais uma vez 🌿",
];
function pickAlmost() { return ALMOST_THERE[Math.floor(Math.random()*ALMOST_THERE.length)]; }


// ============== Banco BNCC (50 atividades por lote, infinito) ==============
const BANCO_TAMANHO = 50;
const DOMAIN_MAP: Record<string, string> = {
  matematica: "math",
  artes: "math",
  portugues: "linguistics",
  ciencias: "linguistics",
  historia: "linguistics",
  geografia: "linguistics",
};
const MATERIAS_BANCO = ["portugues", "matematica", "ciencias", "historia", "geografia", "artes"] as const;

type BancoItem = {
  activity: any;       // GeneratedActivity (pré-gerado)
  materiaId: string;   // qual matéria essa atividade representa
  ordem: number;       // 1..50
};
type BancoState = {
  lote: number;
  items: BancoItem[];
  done: string[];      // activity.id concluídos no lote atual
};

function bancoKey(childId: string, grade: string) {
  return `escola_banco:${childId}:${grade}`;
}

function isFundamental2a9(grade: string): boolean {
  return /^[2-9]º Ano/.test(grade);
}

function gerarLote(child: any, grade: string, lote: number): BancoItem[] {
  const service = ActivityProceduralService.getInstance();
  const items: BancoItem[] = [];
  for (let i = 0; i < BANCO_TAMANHO; i++) {
    const materiaId = MATERIAS_BANCO[i % MATERIAS_BANCO.length];
    const domain = DOMAIN_MAP[materiaId];
    try {
      const act = service.generateActivity({
        domain,
        difficulty: 0.5,
        grade,
        subject: materiaId,
        childProfile: {
          neurodivergence: child?.diagnostico ? [child.diagnostico] : [],
          interests: child?.hiperfoco ? [child.hiperfoco] : [],
          sensoryThreshold: 0.5,
          lastErrors: [],
        },
        previousActivityIds: items.map((x) => x.activity.id),
      });
      items.push({ activity: act, materiaId, ordem: i + 1 });
    } catch (e) {
      console.warn("[Banco] falha ao gerar item", i, e);
    }
  }
  console.log(`[Banco] Lote ${lote} gerado:`, items.length, "atividades para", grade);
  return items;
}


function Escola() {
  const { activeChild } = useAppState();
  const { activeMascot } = useMascot();
  const mascotPayload = activeMascot ? {
    name: activeMascot.mascot?.name,
    description: activeMascot.mascot?.description,
    category: activeMascot.mascot?.category,
    level: activeMascot.level,
    affinity: activeMascot.affinity,
  } : null;
  const [aula, setAula] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<string>(activeChild?.serie || "1º Ano");
  const [banco, setBanco] = useState<BancoState | null>(null);
  const [teenGuided, setTeenGuided] = useState<boolean>(() => {
    try { return localStorage.getItem("escola_teen_guided") === "1"; } catch { return false; }
  });

  const grades = [
    "Educação Infantil",
    "1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano",
    "6º Ano", "7º Ano", "8º Ano", "9º Ano"
  ];

  const isTeen = /^[6-9]º/.test(selectedGrade);
  // EI e 2º-5º sempre têm aula guiada de 5 telas. Teen escolhe.
  const guidedActive = !isTeen || teenGuided;

  const showBanco = !!activeChild && isFundamental2a9(selectedGrade);


  // Carrega ou cria o lote de 50 atividades para a série atual
  useEffect(() => {
    if (!activeChild || !isFundamental2a9(selectedGrade)) {
      setBanco(null);
      return;
    }
    const key = bancoKey(activeChild.id, selectedGrade);
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw) as BancoState;
        if (parsed?.items?.length === BANCO_TAMANHO) {
          setBanco(parsed);
          return;
        }
      }
    } catch (e) {
      console.warn("[Banco] localStorage parse falhou", e);
    }
    const novo: BancoState = { lote: 1, items: gerarLote(activeChild, selectedGrade, 1), done: [] };
    try { localStorage.setItem(key, JSON.stringify(novo)); } catch {}
    setBanco(novo);
  }, [activeChild?.id, selectedGrade]);

  const persistBanco = (next: BancoState) => {
    if (!activeChild) return;
    try { localStorage.setItem(bancoKey(activeChild.id, selectedGrade), JSON.stringify(next)); } catch {}
    setBanco(next);
  };

  const marcarConcluida = (activityId: string) => {
    if (!banco || !activeChild) return;
    if (banco.done.includes(activityId)) return;
    const doneNext = [...banco.done, activityId];
    if (doneNext.length >= BANCO_TAMANHO) {
      const proxLote = banco.lote + 1;
      const itensNovos = gerarLote(activeChild, selectedGrade, proxLote);
      persistBanco({ lote: proxLote, items: itensNovos, done: [] });
      toast.success(`Lote ${banco.lote} concluído! Liberando mais ${BANCO_TAMANHO} atividades ✨`);
    } else {
      persistBanco({ ...banco, done: doneNext });
    }
  };


  const carregarAula = async (materiaId: string, topic?: string, preset?: { activity: any; ordem?: number }) => {
    if (!activeChild) return;
    setLoading(true);
    try {
      // 1. O SISTEMA gera (ou reusa do banco) a atividade
      const service = ActivityProceduralService.getInstance();
      const domain = DOMAIN_MAP[materiaId] || "linguistics";
      const difficulty = isEI(selectedGrade) ? 0.15 : 0.5;

      const activity = preset?.activity ?? service.generateActivity({
        domain,
        difficulty,
        grade: selectedGrade,
        subject: materiaId,
        childProfile: {
          neurodivergence: [activeChild.diagnostico],
          interests: [activeChild.hiperfoco],
          sensoryThreshold: 0.5,
          lastErrors: []
        },
        previousActivityIds: []
      });



      console.log("Activity generated:", activity);

      // Pre-formatar os dados para a IA entender o que é pergunta, opções e resposta
      let systemQuestion = activity.instruction;
      let systemOptions = [];
      let systemAnswer = "";

      if (activity.content.options) {
        systemOptions = activity.content.options.map(String);
      }

      if (activity.content.answer) {
        systemAnswer = String(activity.content.answer);
      } else if (activity.content.targetCount !== undefined) {
        systemAnswer = String(activity.content.targetCount);
      } else if (activity.content.a !== undefined) {
        systemAnswer = String(activity.content.a);
      } else if (activity.content.firstLetter) {
        systemAnswer = String(activity.content.firstLetter);
      } else if (activity.content.missingSyllable) {
        systemAnswer = String(activity.content.missingSyllable);
      }

      if (activity.content.q) {
        systemQuestion = activity.content.q;
      } else if (activity.content.question) {
        systemQuestion = activity.content.question;
      }

      console.log("Formatted data for AI:", { systemQuestion, systemOptions, systemAnswer });

      // Determinar o tipo de minijogo para a IA adaptar a narração (apenas para EI)
      let miniGameType = "bubbles";
      if (isEI(selectedGrade)) {
        const opts = (systemOptions || []).map(String);
        const palavra = (activity.content.palavra || systemAnswer || "").toUpperCase();
        const isShapes = materiaId.includes("forma") || activity.title.toLowerCase().includes("forma") || 
                        ["TRIANGULO", "TRIÂNGULO", "CIRCULO", "CÍRCULO", "QUADRADO", "RETANGULO", "RETÂNGULO", "ESTRELA", "CORACAO", "CORAÇÃO", "LOSANGO", "OVAL", "HEXAGONO", "HEXÁGONO"].includes(systemAnswer.toUpperCase());
        
        const allSingleLetters = opts.length > 0 && opts.every((o: string) => o.trim().length === 1);
        if (isShapes) miniGameType = "shape";
        else if (allSingleLetters && palavra.length >= 2 && palavra.length === opts.length) miniGameType = "sum";
        else if (allSingleLetters && palavra.length >= 2) miniGameType = "word";
      }

      // 2. A IA atua apenas como "Professor" ensinando o que o sistema gerou
      const { data, error } = await supabase.functions.invoke("neurobrilha-ai", {
        body: {
          mode: "escola",
          child: activeChild,
          mascot: mascotPayload,
          subject: materiaId,
          topic: activity.title,
          systemQuestion,
          systemOptions,
          systemAnswer,
          instruction: activity.instruction,
          miniGameType // Enviando o tipo de jogo para a IA
        }
      });

      if (error) throw error;
      
      console.log("AI Response:", data);

      const novaAula = {
        ...data,
        materia: materiaId,
        etapa: guidedActive ? "ensino" : "opcoes",
        grade: selectedGrade,
        activityId: activity.id,
        bancoOrdem: preset?.ordem,
        // Garantindo que os dados do Motor Infinito persistam para a terceira tela
        pergunta: systemQuestion,
        opcoes: systemOptions,
        resposta_correta: systemAnswer,
        // Conteúdo visual extra (emoji/cor) para Educação Infantil
        visual: activity.content.visual,
        visualHex: activity.content.hex,
        isEI: isEI(selectedGrade),
        guided: guidedActive,
      };



      console.log("FINAL AULA STATE:", novaAula);
      setAula(novaAula);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao gerar a aula. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!activeChild) return <Shell><p>Selecione uma criança.</p></Shell>;

  if (loading) {
    return (
      <Shell>
        <div className="h-full flex flex-col items-center justify-center p-12 text-center">
          <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
          <h2 className="text-2xl font-bold">Preparando sua aula especial...</h2>
          <p className="text-muted-foreground">O {activeChild.hiperfoco === 'dinossauros' ? 'dinossauro' : 'amigo'} está organizando tudo!</p>
        </div>
      </Shell>
    );
  }

  if (aula) {
    return (
      <AulaErrorBoundary onReset={() => setAula(null)}>
        <AulaView 
          aula={aula} 
          setAula={setAula} 
          childNome={activeChild.nome} 
          hiperfoco={activeChild.hiperfoco}
          activeMascot={activeMascot}
          tier={gradeTier(aula.grade || selectedGrade)}
          onCompleted={(activityId) => marcarConcluida(activityId)}
        />
      </AulaErrorBoundary>
    );
  }

  const ei = isEI(selectedGrade);
  const materiasVisiveis = ei ? materiasInfantil : materias;
  const startMateriaId = ei ? "matematica" : "matematica";

  return (
    <Shell>
      <PageHeader
        emoji="🎓"
        title="Escola Brilha"
        subtitle={ei
          ? `Educação Infantil · Atividades simples e visuais para os pequenos 🌱`
          : `BNCC adaptada · Atualmente em: ${selectedGrade}`}
      />

      <div className="mb-8 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-2 min-w-max">
          {grades.map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${
                selectedGrade === grade
                  ? "bg-primary text-white shadow-glow scale-105"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {grade}
            </button>
          ))}
        </div>
      </div>

      {ei && (
        <div className="mb-4 flex items-end gap-3 md:gap-4">
          {/* Avatar do mascote apontando para o balão */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-coral/30 to-sun/30 border-4 border-white shadow-xl flex items-center justify-center text-6xl md:text-7xl animate-float-thinking overflow-hidden">
              {activeMascot?.mascot?.image_url?.startsWith('http') ? (
                <img src={activeMascot.mascot.image_url} alt={activeMascot.mascot.name} className="w-full h-full object-cover" />
              ) : (
                activeMascot?.mascot?.image_url || "🐦"
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-2 py-0.5 text-[10px] font-black text-primary border-2 border-coral shadow uppercase">
              {activeMascot?.mascot?.name || "Profª Pipa"}
            </div>
          </div>

          {/* Balão de fala estilo HQ */}
          <div className="relative flex-1">
            <div className="relative bg-white rounded-3xl border-[3px] border-foreground/80 px-5 py-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
              {/* Rabicho do balão apontando para o avatar (à esquerda) */}
              <div className="absolute -left-3 bottom-5 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[14px] border-r-foreground/80" />
              <div className="absolute -left-[9px] bottom-[22px] w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[11px] border-r-white" />

              <p className="font-extrabold text-lg md:text-xl text-primary leading-snug">
                OOOI, {activeChild.nome?.toUpperCase() || "AMIGUINHO"}! 🌱
              </p>
              <p className="text-sm md:text-base text-foreground/80 mt-1 font-bold">
                VAMOS BRINCAR DE APRENDER COM FIGURAS, CORES E SONS! ESCOLHE UMA CARINHA LÁ EMBAIXO! 👇
              </p>
            </div>
          </div>
        </div>
      )}


      <Card className="mb-6 bg-gradient-to-br from-primary/10 to-success/5">
        <div className="flex items-center gap-4">
          <div className="text-5xl">{activeChild.avatar}</div>
          <div className="flex-1">
            <div className="font-extrabold text-lg">
              {ei ? `Vamos brincar de aprender, ${activeChild.nome}?` : "Pronto para brilhar?"}
            </div>
            <div className="text-sm text-muted-foreground">
              {ei
                ? "Escolha uma carinha lá embaixo 👇"
                : `Escolha uma matéria do ${selectedGrade} e vamos começar!`}
            </div>
            <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-primary" style={{ width: "10%" }} />
            </div>
          </div>
          <button onClick={() => carregarAula(startMateriaId)} className="btn-tap rounded-xl bg-primary text-primary-foreground px-5 py-3 font-bold flex items-center gap-2">
            <Play className="h-4 w-4" /> Começar
          </button>
        </div>
      </Card>

      {(() => {
        const t = tierTheme[gradeTier(selectedGrade)];
        return (
          <div className={`relative rounded-3xl p-5 mb-6 bg-gradient-to-br ${t.bg} overflow-hidden`}>
            <div className="absolute right-3 top-2 text-5xl opacity-40 animate-float-thinking select-none">{t.sceneEmoji}</div>
            <div className="relative">
              <div className="text-[11px] font-bold uppercase tracking-widest text-primary/70">Cenário de hoje</div>
              <div className="text-2xl font-extrabold">{t.scene}</div>
              <div className="text-sm text-muted-foreground">{t.vibe} — escolha uma porta mágica abaixo ✨</div>
            </div>
          </div>
        );
      })()}

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h2 className="text-xl">{ei ? "Áreas de descoberta" : "Matérias"}</h2>
        {isTeen && (
          <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-4 py-2 shadow-sm">
            <div className="text-2xl">🎓</div>
            <div className="flex-1">
              <div className="text-sm font-bold leading-tight">Atividade guiada por {activeMascot?.mascot?.name || "Pip/Pipa"}</div>
              <div className="text-xs text-muted-foreground">Ative para receber explicação, exemplo e passo-a-passo antes do exercício.</div>
            </div>
            <button
              onClick={() => {
                const next = !teenGuided;
                setTeenGuided(next);
                try { localStorage.setItem("escola_teen_guided", next ? "1" : "0"); } catch {}
              }}
              className={`relative w-14 h-8 rounded-full transition-colors ${teenGuided ? "bg-primary" : "bg-muted"}`}
              aria-label="Alternar atividade guiada"
            >
              <span className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-all ${teenGuided ? "left-7" : "left-1"}`} />
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {materiasVisiveis.map((m: any) => (
          <button key={m.id} onClick={() => carregarAula(m.id)}
            className={`group relative rounded-3xl p-5 bg-gradient-to-br ${m.cor} border border-border shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all text-left overflow-hidden`}>
            <div className="flex justify-center">
              <img
                src={m.img}
                alt={m.nome}
                loading="lazy"
                width={512}
                height={512}
                className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-md group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="font-extrabold text-lg mt-3 text-center">{m.nome}</div>
            <div className="flex items-center justify-center gap-1.5 mt-1 text-xs text-muted-foreground">
              <b>{m.mascoteNome}</b> te guia
            </div>
            {ei && m.descricao && (
              <div className="text-xs text-muted-foreground mt-1 text-center">{m.descricao}</div>
            )}
            {!ei && (
              <div className="mt-2 flex justify-center"><Pill tone="info">Nível {(activeChild.niveis as any)[m.id] ?? 2}</Pill></div>
            )}
            <div className="absolute bottom-2 right-3 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition">Entrar →</div>
          </button>
        ))}
      </div>

      {showBanco && banco && (
        <section className="mt-10">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-primary/70">Banco BNCC · Infinito</div>
              <h2 className="text-xl font-extrabold">Atividades liberadas — Lote {banco.lote}</h2>
              <div className="text-sm text-muted-foreground">
                {banco.done.length} de {BANCO_TAMANHO} concluídas. Ao terminar todas, mais {BANCO_TAMANHO} são liberadas automaticamente.
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-primary">{Math.round((banco.done.length / BANCO_TAMANHO) * 100)}%</div>
            </div>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-primary to-success transition-all"
              style={{ width: `${(banco.done.length / BANCO_TAMANHO) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
            {banco.items.map((item) => {
              const done = banco.done.includes(item.activity.id);
              const meta = materias.find((m) => m.id === item.materiaId) || materias[0];
              return (
                <button
                  key={item.activity.id}
                  onClick={() => carregarAula(item.materiaId, undefined, { activity: item.activity, ordem: item.ordem })}
                  disabled={done}
                  title={`${item.ordem}. ${meta.nome} — ${item.activity.title || ""}`}
                  className={`relative aspect-square rounded-xl border-2 flex flex-col items-center justify-center text-center transition-all ${
                    done
                      ? "bg-success/15 border-success/40 text-success cursor-default"
                      : `bg-gradient-to-br ${meta.cor} border-border hover:border-primary hover:-translate-y-0.5 hover:shadow-glow`
                  }`}
                >
                  <img src={meta.img} alt={meta.nome} loading="lazy" width={512} height={512} className="w-10 h-10 object-contain" />
                  <div className="text-[10px] font-black mt-1 leading-none">{item.ordem}</div>
                  {done && (
                    <CheckCircle2 className="absolute -top-1.5 -right-1.5 h-5 w-5 text-success bg-card rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </section>
      )}
    </Shell>
  );
}



function AulaView({ aula, setAula, childNome, hiperfoco, activeMascot, tier, onCompleted }: { aula: any; setAula: (a: any) => void; childNome: string; hiperfoco: string; activeMascot: any; tier: GradeTier; onCompleted?: (activityId: string) => void }) {
  const theme = tierTheme[tier];
  const subjectList: any[] = aula.isEI ? (materiasInfantil as any) : (materias as any);
  const materiaMeta = subjectList.find((m: any) => m.id === aula.materia) || subjectList[0];
  const [acertou, setAcertou] = useState<null | boolean>(null);
  const [tentativa, setTentativa] = useState<string | null>(null);
  const [eiStep, setEiStep] = useState(1);
  const completedRef = useRef<boolean>(false);
  const { registerPerformance, requestHelp, adjustment } = useNeuroAdaptive();
  const startRef = useRef<number>(Date.now());
  const scoredRef = useRef<boolean>(false);
  const [reexplaining, setReexplaining] = useState(false);
  const [metodoIdx, setMetodoIdx] = useState(0);

  // Estados para Alfabetização (7 etapas)
  const isAlfaFlow = (tier === "ei" || tier === "alfa") && (aula.materia === "portugues" || aula.materia === "linguagem");
  const [alfaMontagem, setAlfaMontagem] = useState<string[]>([]);
  const [alfaIdentificado, setAlfaIdentificado] = useState<string | null>(null);
  
  const METODOS = [
    { id: "teacch", nome: "TEACCH", emoji: "🧩", desc: "Passo-a-passo visual estruturado" },
    { id: "multisensorial", nome: "Multissensorial", emoji: "🎨", desc: "Ver + ouvir + tocar + falar" },
    { id: "montessori", nome: "Montessori", emoji: "🌱", desc: "Exemplos concretos do dia a dia" },
  ] as const;

  const naoEntendi = async () => {
    if (reexplaining) return;
    setReexplaining(true);
    const metodo = METODOS[metodoIdx % METODOS.length];
    try {
      const { data, error } = await supabase.functions.invoke("neurobrilha-ai", {
        body: {
          mode: "escola",
          child: { nome: childNome, hiperfoco, serie: aula.grade },
          mascot: activeMascot ? {
            name: activeMascot.mascot?.name,
            description: activeMascot.mascot?.description,
            category: activeMascot.mascot?.category,
            level: activeMascot.level,
            affinity: activeMascot.affinity,
          } : null,
          subject: aula.materia,
          topic: aula.topic || aula.materia,
          systemQuestion: aula.pergunta,
          systemOptions: aula.opcoes,
          systemAnswer: aula.resposta_correta,
          miniGameType: aula.miniGameType,
          reexplainMethod: metodo.id,
        },
      });
      if (error) throw error;
      setAula({
        ...aula,
        etapa1_intro: data.etapa1_intro || aula.etapa1_intro,
        etapa2_conceito: data.etapa2_conceito || aula.etapa2_conceito,
        etapa3_exemplo: data.etapa3_exemplo || aula.etapa3_exemplo,
        etapa4_como_monta: data.etapa4_como_monta || aula.etapa4_como_monta,
        etapa5_instrucao: data.etapa5_instrucao || aula.etapa5_instrucao,
        dica: data.dica || aula.dica,
        ensino: data.etapa2_conceito || data.ensino || aula.ensino,
        demo: data.etapa3_exemplo || aula.demo,
        metodo_usado: data.metodo_usado || metodo.nome,
      });
      setMetodoIdx((i) => i + 1);
      toast.success(`${metodo.emoji} Reexplicando com método ${metodo.nome}!`);
    } catch (e) {
      console.error(e);
      toast.error("Não consegui reexplicar agora. Tente de novo.");
    } finally {
      setReexplaining(false);
    }
  };

  // Reinicia cronômetro quando entra na etapa de "opcoes" (ou passo 5 na EI)
  useEffect(() => {
    if (aula.etapa === "opcoes" || (aula.isEI && eiStep === 5)) {
      startRef.current = Date.now();
      scoredRef.current = false;
    }
  }, [aula.etapa, eiStep]);

  const getPipStage = (): 'explanation' | 'encouragement' | 'celebration' | 'idle' => {
    if (acertou === true) return 'celebration';
    if (aula.isEI) {
      if (eiStep < 5) return 'explanation';
      return 'encouragement';
    }
    if (aula.etapa === 'ensino') return 'explanation';
    if (aula.etapa === 'opcoes') return 'encouragement';
    return 'idle';
  };

  const titulos: Record<string, string> = {
    ensino: "📖 Aula",
    demo: "🎨 Demonstração",
    opcoes: "✨ Sua vez!",
  };

  // Stepper pedagógico (6 passos visuais; reflete a etapa atual do motor)
  const stepIndex = aula.isEI ? eiStep : (aula.etapa === "ensino" ? 1 : aula.etapa === "demo" ? 2 : aula.etapa === "opcoes" ? 3 : 0);
  // 1 Tema (header) · 2 Explicação (ensino) · 3 Exemplo (demo) · 4 Atividade (opcoes) · 5 Feedback · 6 Reforço
  const visualStep = aula.isEI ? eiStep : (aula.etapa === "ensino" ? 2 : aula.etapa === "demo" ? 3 : aula.etapa === "opcoes" ? (acertou === null ? 4 : acertou ? 6 : 5) : 1);


  return (
    <Shell>
      {/* Cenário mágico de fundo por faixa etária */}
      <div className={`relative -mx-4 -mt-4 mb-6 px-6 py-6 rounded-3xl bg-gradient-to-br ${theme.bg} overflow-hidden`}>
        <div className="absolute -right-4 -top-2 text-7xl opacity-30 select-none animate-float-thinking">{theme.sceneEmoji}</div>
        <div className="relative flex items-center gap-4">
          <div className="text-5xl drop-shadow animate-float-thinking">
            {activeMascot?.mascot?.image_url?.startsWith('http') ? (
              <img src={activeMascot.mascot.image_url} alt={activeMascot.mascot.name} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
            ) : (
              activeMascot?.mascot?.image_url || materiaMeta.mascote
            )}
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary/70">{theme.scene}</div>
            <div className={`font-extrabold ${theme.titleScale}`}>{materiaMeta.nome} · {aula.grade}</div>
            <div className="text-sm text-muted-foreground">
              <b>{activeMascot?.mascot?.name || materiaMeta.mascoteNome}</b> está com você nesta aventura — {theme.vibe.toLowerCase()}.
            </div>
          </div>
        </div>
      </div>

      {adjustment.suggestBreak && (
        <Card className="mb-4 bg-sun/15 border-sun/30 flex items-center gap-3">
          <Coffee className="h-6 w-6 text-sun" />
          <div className="flex-1">
            <div className="font-bold">Que tal uma pausinha, {childNome}?</div>
            <div className="text-sm text-muted-foreground">Detectei sinais de cansaço. Respira fundo 🌿</div>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">

          <Card className="mb-4">
            {/* Stepper pedagógico de 6 passos */}
            <div className="flex items-center gap-1.5 text-[11px] font-bold mb-4 overflow-x-auto pb-1">
              {[
                {n:1,l:"Tema",i:"🎯"},
                {n:2,l:"Explicação",i:"💡"},
                {n:3,l:"Exemplo",i:"👀"},
                {n:4,l:"Atividade",i:"✋"},
                {n:5,l:"Feedback",i:"💬"},
                {n:6,l:"Reforço",i:"⭐"},
              ].map(s => {
                const active = s.n === visualStep;
                const done = s.n < visualStep;
                return (
                  <span key={s.n} className={`shrink-0 px-2.5 py-1 rounded-full flex items-center gap-1 transition-all ${
                    active ? "bg-primary text-primary-foreground scale-110 shadow-glow" :
                    done ? "bg-success/20 text-success" : "bg-muted text-muted-foreground"
                  }`}>
                    <span>{s.i}</span>{s.l}
                  </span>
                );
              })}
            </div>



            {aula.guided ? (
              <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
                {eiStep < 5 ? (
                  <div className="w-full max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex flex-col items-center gap-6">
                      {/* Mascote central que se move e se ajusta */}
                      <div className={`relative transition-all duration-1000 transform ${
                        eiStep === 1 ? 'scale-125 translate-y-4' :
                        eiStep === 2 ? 'scale-110 -translate-x-12' :
                        eiStep === 3 ? 'scale-110 translate-x-12' :
                        'scale-100'
                      }`}>
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-coral/20 to-sun/20 flex items-center justify-center text-[120px] md:text-[140px] animate-float-thinking shadow-2xl border-8 border-white">
                          {activeMascot?.mascot?.image_url?.startsWith('http') ? (
                            <img src={activeMascot.mascot.image_url} alt={activeMascot.mascot.name} className="w-full h-full object-cover rounded-full" />
                          ) : (
                            activeMascot?.mascot?.image_url || materiaMeta.mascote
                          )}
                        </div>
                        {/* Balão de fala estilo HQ centralizado e dinâmico */}
                        <div className={`absolute transition-all duration-500 ${
                          eiStep === 2 ? '-right-16 -top-8' :
                          eiStep === 3 ? '-left-16 -top-8' :
                          '-top-24 left-1/2 -translate-x-1/2'
                        } w-72 md:w-80`}>
                          <div className="bg-white rounded-3xl border-[4px] border-foreground px-6 py-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] relative">
                             {/* Rabicho dinâmico */}
                             <div className={`absolute w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[18px] border-t-foreground ${
                               eiStep === 2 ? 'bottom-[-18px] left-10' :
                               eiStep === 3 ? 'bottom-[-18px] right-10' :
                               'bottom-[-18px] left-1/2 -translate-x-1/2'
                             }`} />
                             <div className={`absolute w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[14px] border-t-white ${
                               eiStep === 2 ? 'bottom-[-11px] left-[44px]' :
                               eiStep === 3 ? 'bottom-[-11px] right-[44px]' :
                               'bottom-[-11px] left-1/2 -translate-x-1/2'
                             }`} />
                             
                             <p className="font-black text-xl md:text-2xl text-primary leading-tight text-center uppercase">
                               {eiStep === 1 ? (aula.etapa1_intro || aula.ensino) :
                                eiStep === 2 ? (aula.etapa2_conceito || "Sabe o que é isso?") :
                                eiStep === 3 ? (aula.etapa3_exemplo || aula.etapa3_ensino || "Vamos ver um exemplo!") :
                                (aula.etapa4_como_monta || aula.etapa4_preparo || "Veja como resolver!")}
                             </p>
                          </div>
                        </div>
                      </div>

                      {/* Elementos visuais gigantes para ensino concretizado */}
                      {(eiStep === 2 || eiStep === 3) && (
                        <div className="flex gap-4 items-center justify-center animate-bounce-slow mt-8">
                           {eiStep === 2 ? (
                             <div className="text-[140px] md:text-[180px] drop-shadow-2xl">
                               {aula.visual || "⭐"}
                             </div>
                           ) : (
                             <div className="flex gap-4">
                               <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-white border-4 border-primary shadow-xl flex items-center justify-center text-6xl md:text-8xl font-black text-primary">
                                 {aula.resposta_correta?.toString().charAt(0) || "A"}
                               </div>
                               <div className="text-6xl self-center font-black text-sun">+</div>
                               <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-white border-4 border-success shadow-xl flex items-center justify-center text-6xl md:text-8xl font-black text-success">
                                 {aula.resposta_correta?.toString().charAt(1) || "B"}
                               </div>
                             </div>
                           )}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-center gap-4 mt-12">
                      {aula.metodo_usado && (
                        <div className="px-4 py-1.5 rounded-full bg-lilac/20 border border-lilac/40 text-xs font-black uppercase tracking-wider text-lilac-foreground">
                          ✨ Método {aula.metodo_usado}
                        </div>
                      )}
                      <button
                        onClick={() => setEiStep(eiStep + 1)}
                        className="btn-tap bg-gradient-to-br from-primary to-primary/80 text-white rounded-full px-12 py-5 text-2xl font-black shadow-[0_8px_0_rgba(0,0,0,0.2)] hover:-translate-y-1 active:translate-y-1 transition-all border-4 border-white flex items-center gap-3"
                      >
                        VAMOS LÁ! <Play className="h-8 w-8 fill-current" />
                      </button>
                      <button
                        onClick={naoEntendi}
                        disabled={reexplaining}
                        className="btn-tap bg-white border-[3px] border-sun text-sun-foreground rounded-full px-8 py-3 text-base md:text-lg font-black uppercase shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-1 transition-all flex items-center gap-2 disabled:opacity-60"
                      >
                        {reexplaining ? (
                          <><Loader2 className="h-5 w-5 animate-spin" /> Reexplicando...</>
                        ) : (
                          <>🤔 NÃO ENTENDI · Tente de outro jeito</>
                        )}
                      </button>
                      <div className="text-[11px] text-muted-foreground text-center max-w-xs">
                        Próximo método: <b>{METODOS[metodoIdx % METODOS.length].emoji} {METODOS[metodoIdx % METODOS.length].nome}</b> — {METODOS[metodoIdx % METODOS.length].desc}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                    {/* Cabeçalho do Jogo com Instrução do Mascote */}
                    <div className="flex items-end gap-4 mb-8">
                       <div className="w-24 h-24 shrink-0 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-coral/20 to-sun/20 flex items-center justify-center text-5xl overflow-hidden">
                          {activeMascot?.mascot?.image_url?.startsWith('http') ? (
                            <img src={activeMascot.mascot.image_url} alt={activeMascot.mascot.name} className="w-full h-full object-cover" />
                          ) : (
                            activeMascot?.mascot?.image_url || materiaMeta.mascote
                          )}
                       </div>
                       <div className="flex-1 bg-white rounded-2xl border-[3px] border-foreground px-4 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] relative mb-2">
                          <div className="absolute -left-3 bottom-4 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[12px] border-r-foreground" />
                          <div className="absolute -left-[8px] bottom-[17px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-white" />
                          <p className="font-bold text-primary uppercase text-sm md:text-base leading-tight">
                            {aula.etapa5_instrucao || aula.pergunta || "VAMOS JOGAR!"}
                          </p>
                       </div>
                    </div>

                    <EIMiniGame
                      aula={aula}
                      disabled={acertou === true}
                      onAnswer={(isCorrect, opt) => {
                        setTentativa(opt);
                        setAcertou(isCorrect);
                        if (!scoredRef.current) {
                          const elapsed = (Date.now() - startRef.current) / 1000;
                          registerPerformance(isCorrect, elapsed, aula.activityId);
                          scoredRef.current = true;
                        }
                        if (isCorrect && !completedRef.current && aula.activityId) {
                          completedRef.current = true;
                          onCompleted?.(aula.activityId);
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            ) : (
              <>
                {aula.etapa === "ensino" && (() => {
                  const g = (aula.grade || "").toString();
                  const panel: "kids" | "mid" | "teen" =
                    /infantil|pré|pre|^1º/i.test(g) ? "kids" :
                    /^[2-5]º/.test(g) ? "mid" : "teen";
                  const visualGlyph = aula.visual
                    ? aula.visual
                    : hiperfoco === "dinossauros" ? "🦕"
                      : hiperfoco === "espaco" ? "🚀"
                      : hiperfoco === "animais" ? "🦁"
                      : "🌟";

                  return (
                    <div>

                      {/* 2º AO 5º ANO — caderno pautado */}
                      {panel === "mid" && (
                        <div className="space-y-4">
                          <div className="flex justify-center">
                            <span className="inline-block px-6 py-2 rounded-full bg-coral text-white font-black uppercase tracking-widest text-sm shadow-md">
                              2º ao 5º Ano
                            </span>
                          </div>
                          <div
                            className="rounded-2xl border-2 border-amber-300 p-8 shadow-inner"
                            style={{
                              backgroundColor: '#fdf6e3',
                              backgroundImage:
                                'repeating-linear-gradient(to bottom, transparent 0, transparent 35px, rgba(59,130,246,0.25) 35px, rgba(59,130,246,0.25) 36px)',
                            }}
                          >
                            <div className="bg-white/80 rounded-xl border-2 border-primary/30 px-5 py-3 inline-block shadow-sm mb-6">
                              <p className="text-xl font-black text-primary">{aula.ensino}</p>
                            </div>
                            <div className="text-7xl text-center my-6">{visualGlyph}</div>
                            <div className="text-center text-2xl font-black text-slate-700">
                              <span className="text-coral">
                                {activeMascot?.mascot?.image_url?.startsWith('http') ? (
                                  <img src={activeMascot.mascot.image_url} alt={activeMascot.mascot.name} className="w-10 h-10 rounded-full inline-block object-cover border-2 border-white mr-2" />
                                ) : (
                                  <span className="mr-2">{activeMascot?.mascot?.image_url || materiaMeta.mascote}</span>
                                )}
                              </span> 
                              {activeMascot?.mascot?.name || materiaMeta.mascoteNome} está aqui pra te ajudar
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 6º AO 9º ANO — clean / quadro branco */}
                      {panel === "teen" && (
                        <div className="space-y-4">
                          <div className="flex justify-center">
                            <span className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm shadow-md">
                              6º ao 9º Ano
                            </span>
                          </div>
                          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <div className="border-b border-slate-200 pb-4 mb-6">
                              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Explicação</div>
                              <p className="text-xl font-semibold text-slate-800 leading-relaxed">{aula.ensino}</p>
                            </div>
                            <div className="flex items-center justify-center gap-4 py-4">
                              <div className="text-6xl">{visualGlyph}</div>
                              <div className="text-sm font-medium text-slate-500 max-w-xs">
                                Leia com atenção e siga para o próximo passo quando estiver pronto.
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-6 flex gap-2 flex-wrap items-center">
                        <button onClick={() => setAula({ ...aula, etapa: "demo" })} className="btn-tap rounded-xl bg-primary text-primary-foreground px-8 py-3 font-bold text-lg">
                          Continuar →
                        </button>
                        <button
                          onClick={naoEntendi}
                          disabled={reexplaining}
                          className="btn-tap rounded-xl bg-white border-2 border-sun text-sun-foreground px-5 py-3 font-bold text-sm flex items-center gap-2 disabled:opacity-60"
                        >
                          {reexplaining ? <><Loader2 className="h-4 w-4 animate-spin" /> Reexplicando...</> : <>🤔 Não entendi — outro método</>}
                        </button>
                        {aula.metodo_usado && (
                          <span className="text-xs font-bold text-muted-foreground">Método atual: <b>{aula.metodo_usado}</b></span>
                        )}
                      </div>
                    </div>
                  );
                })()}


                {aula.etapa === "demo" && (
                  <div>
                    <h3 className="text-lg font-bold mb-4">Veja alguns exemplos:</h3>
                    <div className="rounded-2xl bg-secondary p-8 mb-6 text-center text-3xl font-extrabold text-primary leading-loose">
                      {aula.demo}
                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                      <button onClick={() => setAula({ ...aula, etapa: "opcoes" })} className="btn-tap rounded-xl bg-primary text-primary-foreground px-8 py-3 font-bold text-lg">
                        Estou pronto para o desafio!
                      </button>
                      <button
                        onClick={naoEntendi}
                        disabled={reexplaining}
                        className="btn-tap rounded-xl bg-white border-2 border-sun text-sun-foreground px-5 py-3 font-bold text-sm flex items-center gap-2 disabled:opacity-60"
                      >
                        {reexplaining ? <><Loader2 className="h-4 w-4 animate-spin" /> Reexplicando...</> : <>🤔 Não entendi — tente outro jeito</>}
                      </button>
                    </div>
                  </div>
                )}

                {aula.etapa === "opcoes" && (
                  <div>
                    {!aula.isEI && <p className="mb-6 font-bold text-xl">{aula.pergunta || "O que você acha?"}</p>}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(aula.opcoes || []).map((opt: string, index: number) => (
                        <button
                          key={`${opt}-${index}`}
                          onClick={() => {
                            const correctAnswer = aula.resposta_correta || aula.answer;
                            const isCorrect = opt === correctAnswer;
                            setTentativa(opt);
                            setAcertou(isCorrect);
                            if (!scoredRef.current) {
                              const elapsed = (Date.now() - startRef.current) / 1000;
                              registerPerformance(isCorrect, elapsed, aula.activityId);
                              scoredRef.current = true;
                            }
                            if (isCorrect && !completedRef.current && aula.activityId) {
                              completedRef.current = true;
                              onCompleted?.(aula.activityId);
                            }
                          }}
                          disabled={acertou === true}
                          className={`btn-tap p-6 rounded-2xl text-xl font-extrabold border-2 transition-all text-left ${
                            tentativa === opt
                              ? (opt === (aula.resposta_correta || aula.answer) ? "border-success bg-success/10 text-success" : "border-destructive bg-destructive/5 text-destructive")
                              : "border-border bg-muted hover:border-primary"
                          }`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {(!aula.opcoes || aula.opcoes.length === 0) && (
                  <p className="text-muted-foreground italic">Nenhuma opção de resposta disponível.</p>
                )}

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => {
                      requestHelp(aula.activityId);
                      toast.info(`${materiaMeta.mascoteNome} vai te ajudar! 💡`);
                    }}
                    className="text-sm flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/70 font-bold"
                  >
                    <HelpCircle size={14} /> Preciso de ajuda
                  </button>
                </div>



                {acertou === true && (
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-success/20 to-success/5 border-2 border-success/30 text-success text-lg animate-bounce-short">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl drop-shadow">
                        {activeMascot?.mascot?.image_url?.startsWith('http') ? (
                          <img src={activeMascot.mascot.image_url} alt={activeMascot.mascot.name} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                        ) : (
                          activeMascot?.mascot?.image_url || materiaMeta.mascote
                        )}
                      </div>
                      <CheckCircle2 className="h-8 w-8" />
                      <div className="flex-1">
                        <div className="font-extrabold">Mandou bem, {childNome}! ⭐</div>
                        <div className="text-base">{aula.isEI ? (aula.reforco_positivo || "").toUpperCase() : aula.reforco_positivo}</div>
                        <div className="text-xs text-success/70 mt-1"><b>{activeMascot?.mascot?.name || materiaMeta.mascoteNome}</b> está orgulhoso(a) de você.</div>
                      </div>
                      {aula.bancoOrdem && (
                        <button
                          onClick={() => setAula(null)}
                          className="px-4 py-2 rounded-xl bg-success text-success-foreground font-bold text-sm shadow"
                        >
                          Próxima do banco →
                        </button>
                      )}
                    </div>
                  </div>
                )}
                
                {acertou === false && (
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-sun/25 to-petal/15 border-2 border-sun/30 flex items-start gap-3 animate-in fade-in">
                    <div className="text-4xl">
                      {activeMascot?.mascot?.image_url?.startsWith('http') ? (
                        <img src={activeMascot.mascot.image_url} alt={activeMascot.mascot.name} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                      ) : (
                        activeMascot?.mascot?.image_url || materiaMeta.mascote
                      )}
                    </div>
                    <Lightbulb className="h-7 w-7 text-sun shrink-0 mt-0.5 animate-pulse" />
                    <div className="flex-1">
                      <div className="font-extrabold text-sun-foreground text-lg">{pickAlmost()}</div>
                      <div className="text-base text-sun-foreground/90 mt-1"><b>Observe a dica:</b> {aula.isEI ? (aula.dica || "").toUpperCase() : aula.dica}</div>
                      <button
                        onClick={() => { setAcertou(null); setTentativa(null); }}
                        className="mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm"
                      >
                        Tentar de novo 🌟
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </Card>
          <button onClick={() => setAula(null)} className="text-sm text-muted-foreground hover:text-foreground">← Voltar para matérias</button>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <PipPedagogicalGuidance stage={getPipStage()} className="animate-in fade-in slide-in-from-right-4" />
          </div>
        </div>
      </div>
      <FloatingActivityControls
        onSkip={aula.etapa !== "opcoes" ? () => setAula({ ...aula, etapa: "opcoes" }) : undefined}
        onChange={() => setAula(null)}
        changeLabel="Trocar matéria"
      />
    </Shell>
  );
}
