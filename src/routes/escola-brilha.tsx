import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { useState, useEffect, useRef, Component, ReactNode, useMemo, ComponentType } from "react";
import { 
  Play, BookOpen, Volume2, CheckCircle2, Lightbulb, Loader2, AlertCircle, 
  Palette, HelpCircle, Coffee, ArrowRight, Star, GraduationCap, 
  Bird, Apple, Rainbow, Trees, Bug, Library, Telescope, 
  TestTube, Map, Satellite, Ruler, Brain, Target, Sparkles, Home,
  Car, Dog, Cat, Fish, Flower, Pencil, School, Heart, Sun, Moon, Circle, 
  Plane, Ship, PenTool, Scissors, Search, Plus, Hand, Eye, Users, Flag, Trophy, Sprout, MousePointer2 as Pointer,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/database/supabase/client";
import { toast } from "sonner";
import { PipPedagogicalGuidance } from "@/components/rewards/PipPedagogicalGuidance";
import { ActivityProceduralService } from "@/modules/escola-brilha/services/ActivityProceduralService";
import { SupabasePedagogicalService } from "@/modules/escola-brilha/services/SupabasePedagogicalService";
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
import imgPip from "@/assets/pip-mascot.png";
import imgPipa from "@/assets/pip-girl-professora.png";
import KidLiveMascot from "@/components/ui/KidLiveMascot";


import { RenderMascote, RenderVisual } from "@/components/ui/PremiumIcons";

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
  { id: "portugues", nome: "Português", img: imgPortugues, cor: "from-coral/30 to-coral/5", mascote: imgPipa, mascoteNome: "Professora Pipa" },
  { id: "matematica", nome: "Matemática", img: imgMatematica, cor: "from-sky/30 to-sky/5", mascote: imgPip, mascoteNome: "Professor Pip" },
  { id: "ciencias", nome: "Ciências", img: imgCiencias, cor: "from-success/20 to-success/5", mascote: imgPipa, mascoteNome: "Professora Pipa" },
  { id: "historia", nome: "História", img: imgHistoria, cor: "from-sun/30 to-sun/5", mascote: imgPip, mascoteNome: "Professor Pip" },
  { id: "geografia", nome: "Geografia", img: imgGeografia, cor: "from-lilac/30 to-lilac/5", mascote: imgPipa, mascoteNome: "Professora Pipa" },
  { id: "artes", nome: "Artes", img: imgArtes, cor: "from-pink/30 to-pink/5", mascote: imgPip, mascoteNome: "Professor Pip" },
] as const;

// Educação Infantil — 5 Trilhas (BNCC Campos de Experiência)
const materiasInfantil = [
  { id: "trilha-palavras", nome: "ESCUTA, FALA, PENSAMENTO E IMAGINAÇÃO", img: imgLinguagemEI, cor: "from-coral/30 to-coral/5", descricao: "Trilha das Palavras", mascote: imgPipa, mascoteNome: "Professora Pipa", code_pref: "EI03EF" },
  { id: "trilha-numeros", nome: "ESPAÇOS, TEMPOS, QUANTIDADES, RELAÇÕES E TRANSFORMAÇÕES", img: imgNumerosEI, cor: "from-sky/30 to-sky/5", descricao: "Trilha dos Números", mascote: imgPip, mascoteNome: "Professor Pip", code_pref: "EI03ET" },
  { id: "trilha-cores-formas", nome: "TRAÇOS, SONS, CORES E FORMAS", img: imgArtesEI, cor: "from-pink/30 to-pink/5", descricao: "Trilha das Cores e Formas", mascote: imgPip, mascoteNome: "Professor Pip", code_pref: "EI03TS" },
  { id: "trilha-movimentos", nome: "CORPO, GESTOS E MOVIMENTOS", img: imgNaturezaEI, cor: "from-success/20 to-success/5", descricao: "Trilha dos Movimentos", mascote: imgPipa, mascoteNome: "Professora Pipa", code_pref: "EI03CG" },
  { id: "trilha-emocoes", nome: "O EU, O OUTRO E O NÓS", img: imgArtesEI, cor: "from-indigo/30 to-indigo/5", descricao: "Trilha das Emoções", mascote: imgPipa, mascoteNome: "Professora Pipa", code_pref: "EI03EO" },
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
  bg: string; scene: string; sceneIcon: ComponentType<{ className?: string }>; vibe: string; titleScale: string;
}> = {
  ei:       { bg: "from-sky/25 via-petal/20 to-sun/15", scene: "Jardim Encantado",        sceneIcon: Rainbow, vibe: "Bem-vindo ao Jardim Brilha", titleScale: "text-3xl" },
  alfa:     { bg: "from-coral/20 via-sun/20 to-petal/15", scene: "Vila das Letras",       sceneIcon: Library, vibe: "Hoje vamos descobrir palavras",  titleScale: "text-2xl" },
  fund1:    { bg: "from-success/15 via-sky/20 to-lilac/15", scene: "Laboratório das Descobertas", sceneIcon: Telescope, vibe: "Vamos investigar juntos",   titleScale: "text-2xl" },
  fund2:    { bg: "from-sky/20 via-lilac/15 to-primary/10", scene: "Estação de Missões",  sceneIcon: Satellite, vibe: "Sua próxima missão começa agora", titleScale: "text-xl" },
  fund2plus:{ bg: "from-primary/15 via-lilac/10 to-sky/10", scene: "Centro de Estudos Brilha", sceneIcon: Brain, vibe: "Foco, estratégia e descoberta", titleScale: "text-xl" },
};

// Frases de feedback positivas (substituem "Tente novamente")
const ALMOST_THERE = [
  "Você está quase lá!",
  "Olhe a dica e tente de novo",
  "Boa tentativa! Vamos observar com calma.",
  "Está perto! Respira e tenta mais uma vez",
];
function pickAlmost() { return ALMOST_THERE[Math.floor(Math.random()*ALMOST_THERE.length)]; }



// ============== Banco BNCC (50 atividades por lote, infinito) ==============
const BANCO_TAMANHO = 50;
const DOMAIN_MAP: Record<string, string> = {
  // Ensino Fundamental
  portugues: "linguistics",
  matematica: "math",
  ciencias: "linguistics",
  historia: "linguistics",
  geografia: "linguistics",
  artes: "math",
  
  // Educação Infantil (Trilhas BNCC)
  "trilha-palavras": "linguistics",
  "trilha-numeros": "math",
  "trilha-cores-formas": "perception",
  "trilha-movimentos": "motor",
  "trilha-emocoes": "cognitive",
};

const MATERIAS_BANCO = ["portugues", "matematica", "ciencias", "historia", "geografia", "artes"] as const;

// Campos de Experiência da Educação Infantil (BNCC)
const CAMPOS_EI = [
  "ESCUTA, FALA, PENSAMENTO E IMAGINAÇÃO",
  "ESPAÇOS, TEMPOS, QUANTIDADES, RELAÇÕES E TRANSFORMAÇÕES",
  "CORPO, GESTOS E MOVIMENTOS",
  "TRAÇOS, SONS, CORES E FORMAS",
  "O EU, O OUTRO E O NÓS"
] as const;

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
  // v2: cache versionado — força regeneração após corrigir o sistema de séries
  return `escola_banco_v2:${childId}:${grade}`;
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
  // Toda aula deve seguir o fluxo pedagógico de professor (8 passos). Sem atalho.
  const guidedActive = true;

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
      toast.success(`Lote ${banco.lote} concluído! Liberando mais ${BANCO_TAMANHO} atividades`);
    } else {
      persistBanco({ ...banco, done: doneNext });
    }
  };


  const carregarAula = async (materiaId: string, topic?: string, preset?: { activity: any; ordem?: number }) => {
    if (!activeChild) return;
    setLoading(true);
    try {
      const isInfantil = isEI(selectedGrade);
      const pedService = SupabasePedagogicalService.getInstance();
      
      // 1. Priorizar conteúdo do Banco Pedagógico (Novas tabelas)
      const dbSkills = await pedService.getSkillsByGradeAndSubject(selectedGrade, materiaId);

      if (dbSkills && dbSkills.length > 0) {
        const skill = dbSkills[0];
        const explanation = await pedService.getExplanationByCode(skill.codigo_bncc);
        const dbActivities = await pedService.getActivitiesByCode(skill.codigo_bncc);
        
        if (explanation && dbActivities.length > 0) {
          const activity = dbActivities[0];
          const treino = dbActivities.find(a => a.nivel === 'treino') || activity;
          const pratica = dbActivities.filter(a => a.nivel === 'pratica');
          const desafio = dbActivities.find(a => a.nivel === 'desafio') || activity;

          setAula({
            materia: materiaId,
            grade: selectedGrade,
            skill_code: skill.codigo_bncc,
            topic: skill.titulo,
            objetivo: skill.objetivo,
            etapa1_explicação: explanation.texto_professor,
            etapa2_demonstração: "Observe com atenção o exemplo da professora!",
            etapa3_treino_guiado: treino.explicacao_ativa || "Vamos identificar os sentimentos?",
            etapa4_prática: pratica[0]?.explicacao_ativa || "Agora é sua vez de escolher!",
            etapa5_desafio: desafio.explicacao_ativa || "Desafio final: você consegue identificar todos?",
            etapa6_avaliação: "Excelente desempenho no reconhecimento!",
            etapa7_domínio: "Parabéns! Você dominou esta habilidade BNCC!",
            
            // Atividade principal (fallback)
            pergunta: activity.pergunta,
            opcoes: [activity.alternativa_a, activity.alternativa_b, activity.alternativa_c, activity.alternativa_d].filter(Boolean),
            resposta_correta: activity.resposta,
            feedback: activity.feedback,
            
            // Dados para as etapas específicas
            treino_activity: {
              pergunta: treino.pergunta,
              opcoes: [treino.alternativa_a, treino.alternativa_b, treino.alternativa_c, treino.alternativa_d].filter(Boolean),
              resposta_correta: treino.resposta,
            },
            pratica_activities: pratica.map(p => ({
              pergunta: p.pergunta,
              opcoes: [p.alternativa_a, p.alternativa_b, p.alternativa_c, p.alternativa_d].filter(Boolean),
              resposta_correta: p.resposta,
            })),
            desafio_activity: {
              pergunta: desafio.pergunta,
              opcoes: [desafio.alternativa_a, desafio.alternativa_b, desafio.alternativa_c, desafio.alternativa_d].filter(Boolean),
              resposta_correta: desafio.resposta,
            },

            visual: explanation.imagem || "book",
            isEI: isInfantil,
            guided: true,
            db_activity: activity,
            db_explanation: explanation
          });
          setLoading(false);
          return;
        }
      }

      // 2. Fallback para Motor Procedural se não houver no banco (Mantendo funcionamento enquanto o banco cresce)
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

      // Determinar o tipo de minijogo para a IA adaptar a narração
      let miniGameType = activity.content.miniGameType || "bubbles";
      
      // Mapear tipos de 1º Ano para miniGameType
      const is1stGrade = selectedGrade.includes("1º");
      if (is1stGrade) {
        if (activity.content.combination) miniGameType = "alfa-syllable";
        else if (activity.content.missingSyllable) miniGameType = "alfa-complete";
        else if (activity.content.text) miniGameType = "alfa-reading";
        else if (activity.content.group1) miniGameType = "alfa-sum";
        else if (activity.content.take) miniGameType = "alfa-sub";
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
        etapa: "ensino",
        grade: selectedGrade,
        activityId: activity.id,
        bancoOrdem: preset?.ordem,
        // Garantindo que os dados do Motor Infinito persistam para a terceira tela
        pergunta: systemQuestion,
        opcoes: systemOptions,
        resposta_correta: systemAnswer,
        // Conteúdo visual extra (emoji/cor) para Educação Infantil
        visual: activity.content.visual || activity.content.visual_key || data.visual_key,
        visualHex: activity.content.hex,
        isEI: isEI(selectedGrade),
        guided: guidedActive,
        miniGameType,
        // Dados específicos para 1º Ano
        numero_a: activity.content.group1?.n || activity.content.total?.n || data.numero_a,
        numero_b: activity.content.group2?.n || activity.content.take || data.numero_b,
        operacao: activity.content.group1 ? "+" : activity.content.total ? "-" : data.operacao,
        palavra_foco: activity.content.targetWord?.word || activity.content.palavra || data.palavra_foco,
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
          childId={activeChild.id}
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
  const startMateriaId = ei ? "trilha-palavras" : "matematica";

  return (
    <Shell>
      <PageHeader
        icon={GraduationCap}
        title="Escola Brilha"
        subtitle={ei
          ? `Educação Infantil · Atividades simples e visuais para os pequenos`
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
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-coral/30 to-sun/30 border-4 border-white shadow-xl flex items-center justify-center animate-float-thinking overflow-hidden">
              {activeMascot?.mascot?.image_url?.startsWith('http') ? (
                <img src={activeMascot.mascot.image_url} alt={activeMascot.mascot.name} className="w-full h-full object-cover" />
              ) : (
                <RenderMascote icon={activeMascot?.mascot?.image_url || Bird} className="w-16 h-16 text-primary" />
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
                OOOI, {activeChild.nome?.toUpperCase() || "AMIGUINHO"}!
              </p>
              <p className="text-sm md:text-base text-foreground/80 mt-1 font-bold">
                VAMOS BRINCAR DE APRENDER COM FIGURAS, CORES E SONS! ESCOLHE UMA MATÉRIA LÁ EMBAIXO!
              </p>
            </div>
          </div>
        </div>
      )}


      <Card className="mb-6 bg-gradient-to-br from-primary/10 to-success/5">
        <div className="flex items-center gap-4">
          <div className="text-5xl">
            <RenderVisual value={activeChild.avatar} className="h-12 w-12 text-primary" />
          </div>
          <div className="flex-1">
            <div className="font-extrabold text-lg">
              {ei ? `Vamos brincar de aprender, ${activeChild.nome}?` : "Pronto para brilhar?"}
            </div>
            <div className="text-sm text-muted-foreground">
              {ei
                ? "Escolha uma matéria lá embaixo"
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
            <div className="absolute right-3 top-2 opacity-40 animate-float-thinking select-none">
              <t.sceneIcon className="h-20 w-20" />
            </div>
            <div className="relative">
              <div className="text-[11px] font-bold uppercase tracking-widest text-primary/70">Cenário de hoje</div>
              <div className="text-2xl font-extrabold">{t.scene}</div>
              <div className="text-sm text-muted-foreground">{t.vibe} — escolha uma porta mágica abaixo</div>
            </div>
          </div>
        );
      })()}

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h2 className="text-xl">{ei ? "Áreas de descoberta" : "Matérias"}</h2>
        {isTeen && (
          <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-4 py-2 shadow-sm">
            <div className="text-2xl"><GraduationCap className="h-6 w-6 text-primary" /></div>
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




// Lousa digital estilo "professor escrevendo no quadro"
// Mostra o conteúdo REAL da aula (letras, sílabas, palavras, números) em vez de ícones genéricos.
function Chalkboard({ aula, mode }: { aula: any; mode: 'explicacao' | 'demonstracao' }) {
  const palavra: string | undefined = aula?.palavra_foco;
  const silabas: string[] | undefined = aula?.silabas;
  const frase: string | undefined = aula?.frase_apresentacao;
  const letra: string | undefined = aula?.letra || (palavra ? palavra[0] : undefined);
  const numA = aula?.numero_a;
  const numB = aula?.numero_b;
  const op = aula?.operacao;
  const resultado = aula?.resultado;
  const isMath = typeof numA === 'number' && typeof numB === 'number';

  return (
    <div className="relative mx-auto w-full max-w-md rounded-[2rem] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] border-[10px] border-[#6b3f1f]" style={{ background: 'linear-gradient(180deg, #1f4d3a 0%, #163b2c 100%)' }}>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#6b3f1f] text-white text-[10px] font-black tracking-widest uppercase">Lousa da Aula</div>
      <div className="text-white font-black uppercase text-center py-4" style={{ fontFamily: '"Comic Sans MS", "Marker Felt", system-ui, sans-serif', textShadow: '0 1px 0 rgba(255,255,255,0.15)' }}>
        {isMath ? (
          <div className="flex items-center justify-center gap-3 text-6xl">
            <span>{numA}</span>
            <span className="text-yellow-300">{op}</span>
            <span>{numB}</span>
            {mode === 'demonstracao' && resultado !== undefined && (
              <>
                <span className="text-yellow-300">=</span>
                <span className="text-yellow-300">{resultado}</span>
              </>
            )}
          </div>
        ) : silabas && silabas.length > 0 ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-2 text-5xl">
              {silabas.map((s, i) => (
                <React.Fragment key={i}>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border-2 border-dashed border-white/40">{s}</span>
                  {i < silabas.length - 1 && <span className="text-yellow-300">+</span>}
                </React.Fragment>
              ))}
            </div>
            {mode === 'demonstracao' && palavra && (
              <div className="text-yellow-300 text-4xl mt-2">= {palavra}</div>
            )}
          </div>
        ) : palavra ? (
          <div className="space-y-2">
            <div className="text-6xl tracking-wider">{palavra}</div>
            {frase && <div className="text-base font-bold text-white/80 normal-case mt-3">{frase}</div>}
          </div>
        ) : letra ? (
          <div className="text-8xl">{letra}</div>
        ) : frase ? (
          <div className="text-2xl normal-case leading-snug">{frase}</div>
        ) : (
          <div className="text-3xl">{aula?.topic || 'Vamos aprender!'}</div>
        )}
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-3 rounded-md bg-[#d9b382] shadow-md" />
    </div>
  );
}

function AulaView({ aula, setAula, childId, childNome, activeMascot, tier, onCompleted }: { aula: any; setAula: (a: any) => void; childId: string; childNome: string; hiperfoco: string; activeMascot: any; tier: GradeTier; onCompleted?: (activityId: string) => void }) {
  const [step, setStep] = useState(1);
  const [practiceCount, setPracticeCount] = useState(0);
  const [performance, setPerformance] = useState({ hits: 0, misses: 0, startTime: Date.now() });
  const [feedback, setFeedback] = useState<null | boolean>(null);
  const subjectList: any[] = aula.isEI ? (materiasInfantil as any) : (materias as any);
  const materiaMeta = subjectList.find((m: any) => m.id === aula.materia) || subjectList[0];
  
  const isPipaMateria = aula.isEI || aula.materia === 'portugues';
  const mascotImg = isPipaMateria ? imgPipa : imgPip;
  const mascotNome = isPipaMateria ? "Professora Pipa" : "Professor Pip";

  const currentActivity = useMemo(() => {
    if (step === 3) return aula.treino_activity || aula;
    if (step === 4) return (aula.pratica_activities && aula.pratica_activities[practiceCount]) || aula;
    if (step === 5) return aula.desafio_activity || aula;
    return aula;
  }, [step, practiceCount, aula]);

  const aulaForGame = useMemo(() => ({
    ...aula,
    pergunta: currentActivity.pergunta,
    opcoes: currentActivity.opcoes,
    resposta_correta: currentActivity.resposta_correta
  }), [aula, currentActivity]);

  const steps = [
    { id: 1, label: "EXPLICAÇÃO", icon: Lightbulb },
    { id: 2, label: "DEMONSTRAÇÃO", icon: Eye },
    { id: 3, label: "TREINO GUIADO", icon: Target },
    { id: 4, label: "PRÁTICA", icon: PenTool },
    { id: 5, label: "DESAFIO", icon: Flag },
    { id: 6, label: "AVALIAÇÃO", icon: Trophy },
    { id: 7, label: "DOMÍNIO", icon: Star },
  ];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setPerformance(p => ({ ...p, hits: p.hits + 1 }));
      setFeedback(true);
      setTimeout(() => {
        setFeedback(null);
        if (step === 3) {
          setStep(4);
          setPracticeCount(0);
        } else if (step === 4) {
          const maxPratica = (aula.pratica_activities?.length || 3) - 1;
          if (practiceCount < maxPratica) {
            setPracticeCount(prev => prev + 1);
          } else {
            setStep(5);
          }
        } else if (step === 5) {
          setStep(6);
        } else if (step === 6) {
          setStep(7);
        }
      }, 1500);
    } else {
      setPerformance(p => ({ ...p, misses: p.misses + 1 }));
      setFeedback(false);
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  useEffect(() => {
    const playAudio = (msg: string) => {
      if (!msg) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(msg);
      u.lang = 'pt-BR';
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    };

    if (step === 1) playAudio(aula.etapa1_explicação || "Vamos aprender algo novo!");
    if (step === 2) playAudio(aula.etapa2_demonstração || "Veja como é fácil!");
    if (step === 3) playAudio(aula.etapa3_treino_guiado || "Vamos tentar juntos?");
    if (step === 4) playAudio(aula.etapa4_prática || "Agora é sua vez!");
    if (step === 5) playAudio(aula.etapa5_desafio || "Desafio final!");
    if (step === 7) playAudio(aula.etapa7_domínio || "Parabéns, você conseguiu!");
  }, [step, aula]);

  return (
    <Shell>
      <div className="flex flex-col h-full w-full max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {steps.map((s) => (
            <div key={s.id} className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all shrink-0 ${step === s.id ? 'bg-primary text-white scale-105 shadow-glow' : s.id < step ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'}`}>
              <s.icon className="h-4 w-4" />
              <span className="text-xs font-black uppercase whitespace-nowrap">{s.label}</span>
            </div>
          ))}
        </div>

        <Card className="flex-1 flex flex-col items-center justify-center p-8 relative min-h-[500px] bg-gradient-to-b from-white to-primary/5">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-6 w-full max-w-lg">
                <h2 className="text-3xl font-black text-primary uppercase leading-tight">{aula.topic || materiaMeta.nome}</h2>
                <Chalkboard aula={aula} mode="explicacao" />
                <p className="text-lg font-bold text-foreground/80 p-4 bg-white/70 rounded-2xl border-2 border-primary/10">{aula.etapa1_explicação || aula.etapa1_intro || aula.instruction}</p>
                <button onClick={() => setStep(2)} className="btn-tap bg-primary text-white px-12 py-5 rounded-full text-2xl font-black border-4 border-white">CONTINUAR</button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-6 w-full max-w-lg">
                <h2 className="text-2xl font-black text-primary uppercase">VEJA NA LOUSA</h2>
                <Chalkboard aula={aula} mode="demonstracao" />
                <p className="text-lg font-bold">{aula.etapa2_demonstração || aula.etapa2_conceito || "Observe com atenção!"}</p>
                <button onClick={() => setStep(3)} className="btn-tap bg-primary text-white px-12 py-5 rounded-full font-black">ENTENDI!</button>
              </motion.div>
            )}

            {(step >= 3 && step <= 5) && (
              <motion.div key="activity" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full flex flex-col items-center justify-center">
                 <div className="text-center mb-4">
                    <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest">Passo {step} de 7 · {steps[step-1].label}</span>
                    <h3 className="text-3xl font-black text-primary uppercase">{steps[step-1].label}</h3>
                    <p className="text-sm font-bold text-muted-foreground">{step === 3 ? (aula.etapa3_treino_guiado || "Vamos fazer juntos!") : step === 4 ? (aula.etapa4_prática || "Agora é com você!") : (aula.etapa5_desafio || "O grande desafio!")}</p>
                 </div>
                 <div className="w-full max-w-2xl my-8">
                   <EIMiniGame aula={aulaForGame} onAnswer={handleAnswer} disabled={feedback !== null} />
                 </div>
                 <div className="absolute bottom-6 right-6 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-[2rem] p-3 border-2 border-primary/20 shadow-kid z-10 animate-in slide-in-from-right-4">
                    <div className="w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden bg-gradient-to-br from-primary/10 to-sun/10">
                      <img src={mascotImg} alt={mascotNome} className="w-full h-full object-cover" />
                    </div>
                 </div>
              </motion.div>
            )}

            {step === 6 && (
               <motion.div key="step6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-8 w-full max-w-md">
                  <h2 className="text-4xl font-black text-primary uppercase">AVALIAÇÃO</h2>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-6 bg-white rounded-3xl shadow-soft border-4 border-success/10">
                        <div className="text-4xl font-black text-success">{performance.hits}</div>
                        <div className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mt-1">Acertos</div>
                     </div>
                     <div className="p-6 bg-white rounded-3xl shadow-soft border-4 border-destructive/10">
                        <div className="text-4xl font-black text-destructive">{performance.misses}</div>
                        <div className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mt-1">Erros</div>
                     </div>
                  </div>
                  <p className="text-lg font-bold text-foreground/70">{aula.etapa6_avaliação || "Excelente desempenho!"}</p>
                  <button onClick={() => setStep(7)} className="btn-tap bg-success text-white px-12 py-5 rounded-full font-black shadow-glow border-4 border-white w-full">VER RESULTADO FINAL</button>
               </motion.div>
            )}

            {step === 7 && (
              <motion.div key="step7" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-8 w-full max-w-md">
                <div className="relative">
                  <div className="absolute inset-0 bg-sun/20 blur-3xl rounded-full" />
                  <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center mx-auto mb-4 border-8 border-sun/20 shadow-2xl relative">
                    <Trophy className="h-24 w-24 text-sun animate-bounce" />
                  </div>
                </div>
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">DOMÍNIO ATINGIDO!</h2>
                <p className="text-xl font-bold text-muted-foreground">{aula.etapa7_domínio || "Você dominou esta habilidade com maestria!"}</p>
                
                <div className="p-6 rounded-[2.5rem] bg-primary/5 border-4 border-white shadow-soft">
                   <div className="text-[10px] font-black uppercase text-primary mb-2 tracking-widest">Habilidade BNCC</div>
                   <div className="text-lg font-black text-foreground">{aula.bncc_code || aula.skill_code || "HABILIDADE EM DESENVOLVIMENTO"}</div>
                   <div className="mt-3 flex items-center justify-center gap-2">
                     <div className="h-3 w-40 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-success" style={{ width: '90%' }} />
                     </div>
                     <span className="text-xs font-black text-success uppercase">Domínio: 90%</span>
                   </div>
                </div>

                <button 
                  onClick={async () => {
                    const pedService = SupabasePedagogicalService.getInstance();
                    const total = performance.hits + performance.misses;
                    const mastery = total > 0 ? (performance.hits / total) * 100 : 0;
                    
                    if (aula.skill_code && childId) {
                      await pedService.saveProgress({
                        aluno_id: childId,
                        codigo_bncc: aula.skill_code,
                        tentativas: 1,
                        acertos: performance.hits,
                        erros: performance.misses,
                        dominio: mastery
                      });
                    }

                    if (aula.activityId) onCompleted?.(aula.activityId);
                    setAula(null);
                  }}
                  className="btn-tap bg-success text-white px-12 py-6 rounded-full text-2xl font-black shadow-glow mt-8 border-4 border-white w-full"
                >
                  CONCLUIR AULA
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {feedback === true && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-success/20 pointer-events-none flex items-center justify-center z-50">
              <CheckCircle2 className="h-48 w-48 text-success drop-shadow-glow" />
            </motion.div>
          )}
          {feedback === false && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-destructive/10 pointer-events-none flex items-center justify-center z-50">
              <X className="h-48 w-48 text-destructive drop-shadow-lg" />
            </motion.div>
          )}
        </Card>

        {step < 7 && (
          <div className="flex justify-between items-center px-4">
             <button onClick={() => setStep(Math.max(1, step - 1))} className="text-muted-foreground font-black text-xs uppercase tracking-widest hover:text-primary transition-colors">← Voltar</button>
             <div className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
               {childNome} • {aula.grade}
             </div>
             {step > 1 && step < 6 ? (
               <button onClick={() => setStep(Math.min(7, step + 1))} className="text-primary font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all">Pular passo →</button>
             ) : <div className="w-20" />}
          </div>
        )}
      </div>
    </Shell>
  );
}


