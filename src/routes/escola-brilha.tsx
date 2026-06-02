import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { useState, useEffect, useRef, Component, ReactNode } from "react";
import { Play, BookOpen, Volume2, CheckCircle2, Lightbulb, Loader2, AlertCircle, Palette, HelpCircle, Coffee } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { toast } from "sonner";
import { PipPedagogicalGuidance } from "@/components/rewards/PipPedagogicalGuidance";
import { ActivityProceduralService } from "@/modules/escola-brilha/services/ActivityProceduralService";
import { useNeuroAdaptive } from "@/hooks/useNeuroAdaptive";
import { FloatingActivityControls } from "@/components/activities/FloatingActivityControls";

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
  { id: "portugues", nome: "Português", emoji: "📚", cor: "from-coral/30 to-coral/5", cenario: "📖✨", mascote: "🦊", mascoteNome: "Lulu" },
  { id: "matematica", nome: "Matemática", emoji: "🔢", cor: "from-sky/30 to-sky/5", cenario: "🧮✨", mascote: "🦉", mascoteNome: "Numo" },
  { id: "ciencias", nome: "Ciências", emoji: "🔬", cor: "from-success/20 to-success/5", cenario: "🧪🌱", mascote: "🐸", mascoteNome: "Bio" },
  { id: "historia", nome: "História", emoji: "🏛️", cor: "from-sun/30 to-sun/5", cenario: "🏺🗺️", mascote: "🦁", mascoteNome: "Rex" },
  { id: "geografia", nome: "Geografia", emoji: "🌍", cor: "from-lilac/30 to-lilac/5", cenario: "🗺️🧭", mascote: "🦜", mascoteNome: "Aro" },
  { id: "artes", nome: "Artes", emoji: "🎨", cor: "from-pink/30 to-pink/5", cenario: "🎨🌈", mascote: "🐙", mascoteNome: "Pinto" },
] as const;

// Educação Infantil — 4 grandes áreas BNCC adaptadas
const materiasInfantil = [
  { id: "portugues", nome: "Linguagem", emoji: "🗣️", cor: "from-coral/30 to-coral/5", descricao: "Vogais e primeiras palavras", cenario: "🅰️🎈", mascote: "🐰", mascoteNome: "Letrinha" },
  { id: "matematica", nome: "Números", emoji: "🔢", cor: "from-sky/30 to-sky/5", descricao: "Contar de 1 a 5", cenario: "🍎🍎", mascote: "🐥", mascoteNome: "Conti" },
  { id: "ciencias", nome: "Natureza", emoji: "🌳", cor: "from-success/20 to-success/5", descricao: "Bichinhos e o mundo", cenario: "🌳🦋", mascote: "🐢", mascoteNome: "Tato" },
  { id: "artes", nome: "Artes", emoji: "🎨", cor: "from-pink/30 to-pink/5", descricao: "Cores e formas", cenario: "🟦🔺🔵", mascote: "🦄", mascoteNome: "Pincel" },
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
  const [aula, setAula] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<string>(activeChild?.serie || "1º Ano");
  const [banco, setBanco] = useState<BancoState | null>(null);

  const grades = [
    "Educação Infantil",
    "1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano",
    "6º Ano", "7º Ano", "8º Ano", "9º Ano"
  ];

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

      // 2. A IA atua apenas como "Professor" ensinando o que o sistema gerou
      const { data, error } = await supabase.functions.invoke("neurobrilha-ai", {
        body: {
          mode: "escola",
          child: activeChild,
          subject: materiaId,
          topic: activity.title,
          systemQuestion,
          systemOptions,
          systemAnswer,
          instruction: activity.instruction
        }
      });

      if (error) throw error;
      
      console.log("AI Response:", data);

      const novaAula = {
        ...data,
        materia: materiaId,
        etapa: "ensino",
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
        <Card className="mb-4 bg-gradient-to-br from-sun/20 to-petal/15 border-sun/30">
          <div className="flex items-start gap-3">
            <div className="text-4xl">🌱</div>
            <div>
              <div className="font-extrabold text-lg">Pequeninos em descoberta!</div>
              <div className="text-sm text-muted-foreground">
                Nesta fase ensinamos com <b>figuras, cores e sons</b>. Sem textos longos, sem contas — só
                brincar aprendendo: vogais, contar até 5, cores, formas e bichinhos.
              </div>
            </div>
          </div>
        </Card>
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

      <h2 className="text-xl mb-4">{ei ? "Áreas de descoberta" : "Matérias"}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {materiasVisiveis.map((m: any) => (
          <button key={m.id} onClick={() => carregarAula(m.id)}
            className={`group relative rounded-3xl p-5 bg-gradient-to-br ${m.cor} border border-border shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all text-left overflow-hidden`}>
            <div className="absolute -right-2 -top-2 text-4xl opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all">
              {m.cenario}
            </div>
            <div className="text-5xl drop-shadow-sm group-hover:scale-110 transition-transform inline-block">{m.emoji}</div>
            <div className="font-extrabold text-lg mt-2">{m.nome}</div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
              <span className="text-base">{m.mascote}</span>
              <span><b>{m.mascoteNome}</b> te guia</span>
            </div>
            {ei && m.descricao && (
              <div className="text-xs text-muted-foreground mt-1">{m.descricao}</div>
            )}
            {!ei && (
              <div className="mt-2"><Pill tone="info">Nível {(activeChild.niveis as any)[m.id] ?? 2}</Pill></div>
            )}
            <div className="absolute bottom-2 right-3 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition">Entrar →</div>
          </button>
        ))}
      </div>
    </Shell>
  );
}


function AulaView({ aula, setAula, childNome, hiperfoco, tier, onCompleted }: { aula: any; setAula: (a: any) => void; childNome: string; hiperfoco: string; tier: GradeTier; onCompleted?: (activityId: string) => void }) {
  const theme = tierTheme[tier];
  const subjectList: any[] = aula.isEI ? (materiasInfantil as any) : (materias as any);
  const materiaMeta = subjectList.find((m: any) => m.id === aula.materia) || subjectList[0];
  const [acertou, setAcertou] = useState<null | boolean>(null);
  const [tentativa, setTentativa] = useState<string | null>(null);
  const completedRef = useRef<boolean>(false);
  const { registerPerformance, requestHelp, adjustment } = useNeuroAdaptive();
  const startRef = useRef<number>(Date.now());
  const scoredRef = useRef<boolean>(false);

  // Reinicia cronômetro quando entra na etapa de "opcoes"
  useEffect(() => {
    if (aula.etapa === "opcoes") {
      startRef.current = Date.now();
      scoredRef.current = false;
    }
  }, [aula.etapa]);

  const getPipStage = (): 'explanation' | 'encouragement' | 'celebration' | 'idle' => {
    if (acertou === true) return 'celebration';
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
  const stepIndex = aula.etapa === "ensino" ? 1 : aula.etapa === "demo" ? 2 : aula.etapa === "opcoes" ? 3 : 0;
  // 1 Tema (header) · 2 Explicação (ensino) · 3 Exemplo (demo) · 4 Atividade (opcoes) · 5 Feedback · 6 Reforço
  const visualStep = aula.etapa === "ensino" ? 2 : aula.etapa === "demo" ? 3 : aula.etapa === "opcoes" ? (acertou === null ? 4 : acertou ? 6 : 5) : 1;

  return (
    <Shell>
      {/* Cenário mágico de fundo por faixa etária */}
      <div className={`relative -mx-4 -mt-4 mb-6 px-6 py-6 rounded-3xl bg-gradient-to-br ${theme.bg} overflow-hidden`}>
        <div className="absolute -right-4 -top-2 text-7xl opacity-30 select-none animate-float-thinking">{theme.sceneEmoji}</div>
        <div className="relative flex items-center gap-4">
          <div className="text-5xl drop-shadow animate-float-thinking">{materiaMeta.mascote}</div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary/70">{theme.scene}</div>
            <div className={`font-extrabold ${theme.titleScale}`}>{materiaMeta.nome} · {aula.grade}</div>
            <div className="text-sm text-muted-foreground">
              <b>{materiaMeta.mascoteNome}</b> está com você nesta aventura — {theme.vibe.toLowerCase()}.
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



            {aula.etapa === "ensino" && (
              <div>
                <div
                  className="aspect-video rounded-2xl grid place-items-center mb-4 relative overflow-hidden"
                  style={{
                    background: aula.visualHex
                      ? `linear-gradient(135deg, ${aula.visualHex}55, ${aula.visualHex}11)`
                      : undefined,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky/40 to-petal/30 -z-10" />
                  <div className="text-[8rem] leading-none animate-pulse text-center">
                    {aula.visual
                      ? aula.visual
                      : hiperfoco === "dinossauros" ? "🦕"
                        : hiperfoco === "espaco" ? "🚀"
                        : hiperfoco === "animais" ? "🦁"
                        : "🌟"}
                  </div>
                </div>
                <p className={`leading-relaxed font-medium ${aula.isEI ? "text-2xl" : "text-xl"}`}>
                  {aula.ensino}
                </p>
                <div className="mt-6 flex gap-2 flex-wrap">
                  <button onClick={() => setAula({ ...aula, etapa: aula.isEI ? "opcoes" : "demo" })} className="btn-tap rounded-xl bg-primary text-primary-foreground px-8 py-3 font-bold text-lg">
                    {aula.isEI ? "Vamos brincar! 🎉" : "Continuar →"}
                  </button>
                </div>

              </div>
            )}

            {aula.etapa === "demo" && (
              <div>
                <h3 className="text-lg font-bold mb-4">Veja alguns exemplos:</h3>
                <div className="rounded-2xl bg-secondary p-8 mb-6 text-center text-3xl font-extrabold text-primary leading-loose">
                  {aula.demo}
                </div>
                <button onClick={() => setAula({ ...aula, etapa: "opcoes" })} className="btn-tap rounded-xl bg-primary text-primary-foreground px-8 py-3 font-bold text-lg">
                  Estou pronto para o desafio!
                </button>
              </div>
            )}

            {aula.etapa === "opcoes" && (
              <div>
                {aula.isEI && aula.visual && (
                  <div
                    className="rounded-2xl grid place-items-center mb-6 py-10"
                    style={{
                      background: aula.visualHex
                        ? `linear-gradient(135deg, ${aula.visualHex}55, ${aula.visualHex}11)`
                        : 'linear-gradient(135deg, hsl(var(--sky)/.3), hsl(var(--petal)/.2))',
                    }}
                  >
                    <div className="text-[7rem] leading-none">{aula.visual}</div>
                  </div>
                )}
                <p className={`mb-6 font-bold ${aula.isEI ? "text-2xl text-center" : "text-xl"}`}>{aula.pergunta || "O que você acha?"}</p>

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
                {(!aula.opcoes || aula.opcoes.length === 0) && (
                  <p className="text-muted-foreground italic">Nenhuma opção de resposta disponível.</p>
                )}

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => {
                      requestHelp(aula.activityId);
                      toast.info("Pip vai te ajudar! 💡");
                    }}
                    className="text-sm flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/70 font-bold"
                  >
                    <HelpCircle size={14} /> Preciso de ajuda
                  </button>
                </div>



                {acertou === true && (
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-success/20 to-success/5 border-2 border-success/30 text-success text-lg animate-bounce-short">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl drop-shadow">{materiaMeta.mascote}</div>
                      <CheckCircle2 className="h-8 w-8" />
                      <div className="flex-1">
                        <div className="font-extrabold">Mandou bem, {childNome}! ⭐</div>
                        <div className="text-base">{aula.reforco_positivo}</div>
                        <div className="text-xs text-success/70 mt-1"><b>{materiaMeta.mascoteNome}</b> está orgulhoso(a) de você.</div>
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
                    <div className="text-4xl">{materiaMeta.mascote}</div>
                    <Lightbulb className="h-7 w-7 text-sun shrink-0 mt-0.5 animate-pulse" />
                    <div className="flex-1">
                      <div className="font-extrabold text-sun-foreground text-lg">{pickAlmost()}</div>
                      <div className="text-base text-sun-foreground/90 mt-1"><b>Observe a dica:</b> {aula.dica}</div>
                      <button
                        onClick={() => { setAcertou(null); setTentativa(null); }}
                        className="mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm"
                      >
                        Tentar de novo 🌟
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
