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
  bg: string; scene: string; sceneIcon: any; vibe: string; titleScale: string;
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
      let bncc_code: string | undefined;
      
      // 1. Priorizar conteúdo do Banco Pedagógico (Novas tabelas)
      const dbSkills = await pedService.getSkillsByGradeAndSubject(selectedGrade, materiaId);

      if (dbSkills && dbSkills.length > 0) {
        const skill = dbSkills[0];
        bncc_code = skill.codigo_bncc;
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
            skill_code: bncc_code,
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
          miniGameType,
          bncc_code // Passando o código BNCC para a IA buscar as técnicas
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
      {/* Header Compacto e Mobile-First */}
      <div className="flex flex-col gap-4 mb-6 md:mb-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary/10 grid place-items-center text-primary border-2 border-primary/20">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-black leading-tight">Escola Brilha</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase font-black tracking-wider">
                {ei ? "Educação Infantil" : `BNCC Adaptada · ${selectedGrade}`}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="bg-card border-2 border-border rounded-xl px-2 py-1.5 text-xs font-bold outline-none focus:border-primary transition-all shadow-sm"
            >
              {grades.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>

        {/* Mascote e Boas-vindas - Compacto */}
        <div className="flex items-center gap-3 md:gap-4 bg-gradient-to-r from-primary/5 to-transparent p-3 rounded-2xl border border-primary/10">
          <div className="relative shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-primary/20 shadow-sm flex items-center justify-center overflow-hidden">
              <img 
                src={ei ? imgPipa : imgPip} 
                alt="Mascote" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="font-black text-sm md:text-base text-primary">
              {ei ? `Oi, ${activeChild.nome}!` : `Pronto para brilhar, ${activeChild.nome}?`}
            </div>
            <p className="text-[11px] md:text-sm text-foreground/70 font-bold leading-snug">
              {ei 
                ? "Vamos brincar de aprender? Escolha um tema abaixo!" 
                : "Escolha uma matéria e vamos começar nossa missão!"}
            </p>
          </div>
          <button 
            onClick={() => carregarAula(startMateriaId)} 
            className="shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center shadow-glow animate-pulse"
          >
            <Play className="h-5 w-5 fill-current" />
          </button>
        </div>
      </div>

      {/* Grid de Matérias - Mais limpo e mobile-friendly */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {materiasVisiveis.map((m: any) => (
          <button 
            key={m.id} 
            onClick={() => carregarAula(m.id)}
            className={`group relative rounded-2xl p-4 bg-gradient-to-br ${m.cor} border border-border/40 shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all text-center overflow-hidden flex flex-col items-center`}
          >
            <div className="relative mb-2">
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={m.img}
                alt={m.nome}
                className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-sm group-hover:scale-110 transition-transform relative z-10"
              />
            </div>
            <div className="font-black text-sm md:text-base leading-tight">{m.nome}</div>
            <div className="text-[10px] text-muted-foreground mt-1 opacity-80">
              {ei ? (m.descricao || "Ver trilha") : `Nível ${(activeChild.niveis as any)[m.id] ?? 2}`}
            </div>
          </button>
        ))}
      </div>

      {/* Banco BNCC - Agora como seção secundária mais discreta */}
      {showBanco && banco && (
        <div className="mt-8 border-t border-border pt-8 pb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-black flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-sun" /> Banco de Atividades
              </h2>
              <p className="text-xs text-muted-foreground">Progresso do Lote {banco.lote}: {banco.done.length}/{BANCO_TAMANHO}</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-black text-primary">{Math.round((banco.done.length / BANCO_TAMANHO) * 100)}%</div>
            </div>
          </div>
          
          <div className="h-2 rounded-full bg-muted overflow-hidden mb-6">
            <div
              className="h-full bg-gradient-to-r from-primary to-success transition-all"
              style={{ width: `${(banco.done.length / BANCO_TAMANHO) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-1.5">
            {banco.items.map((item) => {
              const done = banco.done.includes(item.activity.id);
              const meta = materias.find((m) => m.id === item.materiaId) || materias[0];
              return (
                <button
                  key={item.activity.id}
                  onClick={() => carregarAula(item.materiaId, undefined, { activity: item.activity, ordem: item.ordem })}
                  disabled={done}
                  className={`relative aspect-square rounded-lg border flex items-center justify-center transition-all ${
                    done
                      ? "bg-success/10 border-success/20 text-success/50"
                      : `bg-white border-border hover:border-primary hover:shadow-sm`
                  }`}
                >
                  {done ? <CheckCircle2 className="h-4 w-4" /> : <span className="text-[10px] font-bold">{item.ordem}</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </Shell>
  );
}




// Lousa digital estilo "professor escrevendo no quadro" - destaca o item em foco.
function Chalkboard({ aula, mode, focus }: { aula: any; mode: 'explicacao' | 'demonstracao'; focus?: 'numA' | 'numB' | 'op' | 'result' | 'word' | 'letter' | 'visual' | string }) {
  const palavra: string | undefined = aula?.palavra_foco;
  const silabas: string[] | undefined = aula?.silabas;
  const frase: string | undefined = aula?.frase_apresentacao;
  const letra: string | undefined = aula?.letra || (palavra ? palavra[0] : undefined);
  const visual: string | undefined = aula?.visual;
  const numA = aula?.numero_a;
  const numB = aula?.numero_b;
  const op = aula?.operacao;
  const resultado = aula?.resultado;
  const isMath = typeof numA === 'number' && typeof numB === 'number';
  const hl = (active: boolean) => active ? 'text-yellow-300 scale-110 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]' : 'text-white';

  return (
    <div className="relative mx-auto w-full max-w-md rounded-[2.5rem] p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-[12px] border-[#5d3a1a] overflow-hidden" 
      style={{ 
        background: 'linear-gradient(180deg, #1a4231 0%, #123024 100%)',
        boxShadow: 'inset 0 0 100px rgba(0,0,0,0.3), 0 20px 40px rgba(0,0,0,0.4)'
      }}>
      {/* Textura de giz apagado */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-[#5d3a1a] text-white text-[12px] font-black tracking-widest uppercase shadow-md">
        Quadro do {aula?.materia?.toUpperCase() || 'Professor'}
      </div>

      <div className="relative z-10 text-white font-black uppercase text-center py-6 min-h-[220px] flex flex-col items-center justify-center" 
        style={{ 
          fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", system-ui, sans-serif', 
          textShadow: '2px 2px 0 rgba(0,0,0,0.3)' 
        }}>
        
        {isMath ? (
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4 text-7xl">
              <span className={`transition-all duration-500 ${hl(focus === 'numA')}`}>{numA}</span>
              <span className={`transition-all duration-500 ${hl(focus === 'op')}`}>{op}</span>
              <span className={`transition-all duration-500 ${hl(focus === 'numB')}`}>{numB}</span>
              {(mode === 'demonstracao' || focus === 'result') && resultado !== undefined && (
                <>
                  <span className="text-yellow-300">=</span>
                  <span className={`transition-all duration-500 ${hl(focus === 'result')}`}>{resultado}</span>
                </>
              )}
            </div>
            
            {/* Representação visual concreta (bolinhas/estrelas) */}
            <div className="flex items-center justify-center gap-6 mt-4 p-4 bg-black/10 rounded-2xl border-2 border-dashed border-white/10">
              <div className="flex flex-wrap gap-2 max-w-[120px] justify-center">
                {Array.from({ length: Math.min(numA, 10) }).map((_, i) => (
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.05 }}
                    key={`a${i}`} 
                    className={`w-5 h-5 rounded-full shadow-sm ${focus === 'numA' ? 'bg-yellow-300' : 'bg-white/80'}`} 
                  />
                ))}
              </div>
              <span className="text-3xl text-yellow-300 font-bold">{op}</span>
              <div className="flex flex-wrap gap-2 max-w-[120px] justify-center">
                {Array.from({ length: Math.min(numB, 10) }).map((_, i) => (
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.05 }}
                    key={`b${i}`} 
                    className={`w-5 h-5 rounded-full shadow-sm ${focus === 'numB' ? 'bg-yellow-300' : 'bg-white/80'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        ) : silabas && silabas.length > 0 ? (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-6xl">
              {silabas.map((s, i) => {
                const active = focus === `syl-${i}` || focus === 'word';
                return (
                  <div key={i} className="flex items-center">
                    <motion.span 
                      animate={{ scale: active ? 1.15 : 1, y: active ? -5 : 0 }}
                      className={`px-4 py-2 rounded-xl border-4 border-dashed transition-all duration-500 ${active ? 'text-yellow-300 bg-yellow-300/20 border-yellow-300' : 'bg-white/5 border-white/30 text-white'}`}>
                      {s}
                    </motion.span>
                    {i < silabas.length - 1 && <span className="text-yellow-300 mx-2">+</span>}
                  </div>
                );
              })}
            </div>
            {(mode === 'demonstracao' || focus === 'word') && palavra && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-yellow-300 text-5xl mt-4 bg-white/10 py-3 px-8 rounded-full border-2 border-yellow-300/30">
                = {palavra}
              </motion.div>
            )}
          </div>
        ) : visual ? (
          <div className="flex flex-col items-center gap-4">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className={`text-[9rem] leading-none transition-all duration-500 ${hl(focus === 'visual')}`}>
              {visual.startsWith('http') || visual.startsWith('/src') ? (
                <img src={visual} alt="visual" className="w-48 h-48 object-contain drop-shadow-2xl" />
              ) : (
                visual
              )}
            </motion.div>
            {palavra && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className={`text-5xl tracking-widest mt-2 ${hl(focus === 'word' || focus === 'visual')}`}>
                {palavra}
              </motion.div>
            )}
          </div>
        ) : letra ? (
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="text-[12rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            {letra}
          </motion.div>
        ) : (
          <div className="text-4xl normal-case leading-tight px-4 font-bold">
            {frase || aula?.topic || 'Vamos aprender juntos!'}
          </div>
        )}
      </div>
      
      {/* Prateleira de giz embaixo */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#8b5a2b] shadow-lg border-t-2 border-white/20" />
      <div className="absolute bottom-1 left-[40%] w-6 h-2 bg-white/80 rounded-sm rotate-12" />
      <div className="absolute bottom-1 right-[40%] w-5 h-2 bg-yellow-300/80 rounded-sm -rotate-6" />
    </div>
  );
}

// Aula passo-a-passo (4 a 6 telas) tipo professor explicando para criança que não lê.
// Narração TTS em cada tela + destaque visual sincronizado na lousa.
function buildTeachingScreens(aula: any): Array<{ titulo: string; fala: string; focus?: string; mode?: 'explicacao' | 'demonstracao' }> {
  const palavra: string | undefined = aula?.palavra_foco;
  const silabas: string[] | undefined = aula?.silabas;
  const letra: string | undefined = aula?.letra || (palavra ? (silabas ? undefined : palavra[0]) : undefined);
  const visual: string | undefined = aula?.visual;
  const numA = aula?.numero_a;
  const numB = aula?.numero_b;
  const op = aula?.operacao;
  const resultado = aula?.resultado;
  const isMath = typeof numA === 'number' && typeof numB === 'number';
  const bncc = aula?.bncc_code || aula?.skill_code || '';
  const opNome = op === '+' ? 'somar' : op === '-' ? 'tirar' : 'juntar';
  const opFala = op === '+' ? 'mais' : op === '-' ? 'menos' : op;

  // EDUCAÇÃO INFANTIL OU ALFABETIZAÇÃO: Foco em som, imagem e letra
  if (visual && (aula.isEI || aula.grade?.includes('1º'))) {
    return [
      { titulo: 'OLHA O QUE APARECEU!', fala: `Oi! Olha que legal o que eu trouxe hoje: uma figura de ${palavra || 'algo especial'}!`, focus: 'visual', mode: 'explicacao' },
      { titulo: 'VOCÊ SABE O NOME?', fala: `Essa figura é um ${palavra || 'objeto'}. Diz comigo: ${palavra || 'objeto'}!`, focus: 'visual' },
      { titulo: 'A LETRA DE HOJE', fala: `A palavra ${palavra} começa com a letra ${letra}. Olha ela ali no quadro!`, focus: 'visual' },
      { titulo: 'O SOM DA LETRA', fala: `A letra ${letra} faz um som muito especial. Repete comigo: ${letra}, ${letra}, ${letra}!`, focus: 'visual' },
      { titulo: 'VAMOS PROCURAR?', fala: `Agora eu quero ver se você consegue encontrar a letra ${letra} ou a figura de ${palavra}. Vamos brincar?`, mode: 'demonstracao' },
    ];
  }

  if (isMath) {
    return [
      { titulo: 'OLHA O PRIMEIRO NÚMERO', fala: `Olha que legal! O primeiro número é ${numA}. Conta comigo as bolinhas no quadro!`, focus: 'numA', mode: 'explicacao' },
      { titulo: 'AGORA O SEGUNDO', fala: `Muito bem! Agora o segundo número é ${numB}. Vamos contar essas outras bolinhas também!`, focus: 'numB' },
      { titulo: `VAMOS ${opNome.toUpperCase()}!`, fala: `Agora vamos ${opNome} os dois. ${numA} ${opFala} ${numB}. Junta tudo na sua cabecinha!`, focus: 'op' },
      { titulo: 'O RESULTADO!', fala: `Olha que legal! ${numA} ${opFala} ${numB} é igual a ${resultado}! Repete comigo: ${numA} ${opFala} ${numB} igual a ${resultado}.`, focus: 'result', mode: 'demonstracao' },
      { titulo: 'VAMOS PRATICAR?', fala: `Você aprendeu! Agora é sua vez de brilhar fazendo continhas iguais a essa.`, mode: 'demonstracao' },
    ];
  }

  if (silabas && silabas.length > 0 && palavra) {
    const screens: Array<{ titulo: string; fala: string; focus?: string; mode?: any }> = [
      { titulo: 'A PALAVRA DE HOJE', fala: `A nossa palavra de hoje é: ${palavra}. Diz comigo bem alto: ${palavra}!`, focus: 'word', mode: 'explicacao' },
      { titulo: 'VAMOS SEPARAR EM PEDACINHOS', fala: `Sabia que toda palavra tem pedacinhos? Eles se chamam sílabas. A palavra ${palavra} tem ${silabas.length} pedacinhos.`, focus: 'word' },
    ];
    silabas.slice(0, 3).forEach((s, i) => {
      screens.push({ titulo: `PEDACINHO ${i + 1}`, fala: `Este pedacinho aqui é ${s}. Diz comigo: ${s}!`, focus: `syl-${i}` });
    });
    screens.push({ titulo: 'JUNTANDO TUDO!', fala: `Quando juntamos os pedacinhos ${silabas.join(', ')}, formamos a palavra: ${palavra}! Vamos brincar?`, focus: 'word', mode: 'demonstracao' });
    return screens.slice(0, 6);
  }

  if (letra) {
    return [
      { titulo: 'A LETRA DE HOJE', fala: `Olha que letra bonita eu desenhei! Esta é a letra ${letra}. Diz comigo: ${letra}!`, focus: 'letter', mode: 'explicacao' },
      { titulo: 'O SOM DELA', fala: `A letra ${letra} tem um som muito legal. Faz comigo: ${letra}, ${letra}, ${letra}.`, focus: 'letter' },
      { titulo: 'PALAVRAS COM ESSA LETRA', fala: `Muitas palavras começam com a letra ${letra}! Você consegue pensar em uma?`, focus: 'letter' },
      { titulo: 'HORA DE BRINCAR!', fala: `Agora vamos ver se você consegue encontrar a letra ${letra} no meio de outras letras.`, mode: 'demonstracao' },
    ];
  }

  const intro = aula?.etapa1_explicação || aula?.etapa1_intro || aula?.instruction || 'Hoje vamos aprender uma coisa nova e muito divertida!';
  const concept = aula?.etapa2_demonstração || aula?.etapa2_conceito || 'Olha só como é fácil de fazer!';
  return [
    { titulo: aula?.topic || 'AULA DE HOJE', fala: intro, mode: 'explicacao' },
    { titulo: 'OBSERVE O QUADRO', fala: concept, focus: 'visual', mode: 'demonstracao' },
    { titulo: 'VOCÊ CONSEGUE!', fala: `Estamos aprendendo a habilidade ${bncc}. Vamos praticar um pouquinho?`, mode: 'demonstracao' },
    { titulo: 'VAMOS COMEÇAR?', fala: 'Toque no botão PRÓXIMO para começar a brincar e aprender de verdade!', mode: 'demonstracao' },
  ];
}

function TeachingSequence({ aula, mascotImg, mascotNome, onComplete }: { aula: any; mascotImg: string; mascotNome: string; onComplete: () => void }) {
  const screens = useMemo(() => buildTeachingScreens(aula), [aula]);
  const [idx, setIdx] = useState(0);
  const screen = screens[idx];
  const isLast = idx === screens.length - 1;

  const falar = (msg: string) => {
    if (!msg) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(msg);
    u.lang = 'pt-BR';
    u.rate = 0.85;
    u.pitch = 1.1;
    window.speechSynthesis.speak(u);
  };

  useEffect(() => {
    falar(screen?.fala);
    return () => window.speechSynthesis.cancel();
  }, [idx]);

  return (
    <motion.div 
      key={`teach-${idx}`} 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="flex flex-col items-center gap-4 w-full"
    >
      <div className="flex items-center justify-center gap-1 w-full max-w-[200px]">
        {screens.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all flex-1 ${i === idx ? 'bg-primary' : i < idx ? 'bg-success' : 'bg-muted'}`} 
          />
        ))}
      </div>
      
      <div className="w-full max-w-md">
        <Chalkboard aula={aula} mode={screen.mode || 'explicacao'} focus={screen.focus} />
      </div>

      <div className="flex items-start gap-3 bg-white/80 p-3 rounded-2xl border-2 border-primary/10 shadow-sm text-left w-full">
        <img 
          src={mascotImg} 
          alt={mascotNome} 
          className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover shrink-0" 
        />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-black uppercase text-primary tracking-widest mb-0.5">{mascotNome}</div>
          <p className="text-xs md:text-sm font-bold text-foreground leading-snug">{screen.fala}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 w-full">
        <button 
          onClick={() => falar(screen.fala)} 
          className="h-12 w-12 rounded-full bg-white text-primary border-2 border-primary/20 flex items-center justify-center shadow-sm active:scale-95 transition-transform"
          aria-label="Ouvir novamente"
        >
          <Volume2 className="h-5 w-5" />
        </button>
        
        <div className="flex-1 flex gap-2">
          {idx > 0 && (
            <button 
              onClick={() => setIdx(idx - 1)} 
              className="flex-1 h-12 rounded-xl bg-muted text-foreground font-black text-sm active:scale-95 transition-transform"
            >
              VOLTAR
            </button>
          )}
          <button
            onClick={() => { if (isLast) onComplete(); else setIdx(idx + 1); }}
            className="flex-[2] h-12 rounded-xl bg-primary text-white font-black shadow-glow border-2 border-white active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            {isLast ? 'COMEÇAR!' : 'PRÓXIMO'} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function AulaView({ aula, setAula, childId, childNome, onCompleted }: { aula: any; setAula: (a: any) => void; childId: string; childNome: string; onCompleted?: (activityId: string) => void }) {
  const [step, setStep] = useState(1);
  const [practiceCount, setPracticeCount] = useState(0);
  const [performance, setPerformance] = useState({ hits: 0, misses: 0, startTime: Date.now() });
  const [feedback, setFeedback] = useState<null | boolean>(null);
  
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
    { id: 3, label: "TREINO", icon: Target },
    { id: 4, label: "PRÁTICA", icon: PenTool },
    { id: 5, label: "DESAFIO", icon: Flag },
    { id: 6, label: "FIM", icon: Trophy },
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
    if (step === 3) playAudio(aula.etapa3_treino_guiado || "Vamos tentar juntos?");
    if (step === 4) playAudio(aula.etapa4_prática || "Agora é sua vez!");
    if (step === 5) playAudio(aula.etapa5_desafio || "Desafio final!");
  }, [step, aula]);

  return (
    <Shell>
      <div className="flex flex-col h-full w-full max-w-2xl mx-auto">
        <div className="flex items-center gap-1 mb-6 px-2">
          {steps.map((s) => (
            <div 
              key={s.id} 
              className={`h-1.5 rounded-full transition-all flex-1 ${step === s.id ? 'bg-primary' : s.id < step ? 'bg-success' : 'bg-muted'}`}
            />
          ))}
        </div>

        <div className="relative flex-1 flex flex-col items-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
                <TeachingSequence
                  aula={aula}
                  mascotImg={mascotImg}
                  mascotNome={mascotNome}
                  onComplete={() => setStep(3)}
                />
              </motion.div>
            )}

            {(step >= 3 && step <= 5) && (
              <motion.div key="activity" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full flex flex-col items-center">
                 <div className="text-center mb-6">
                    <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest">Atividade</span>
                    <h3 className="text-2xl font-black text-primary uppercase">{steps.find(s => s.id === step)?.label}</h3>
                 </div>
                 <div className="w-full mb-8">
                   <EIMiniGame aula={aulaForGame} onAnswer={handleAnswer} disabled={feedback !== null} />
                 </div>
                 
                 {/* Mascote de Apoio Flutuante Compacto */}
                 <div className="fixed bottom-24 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full p-2 border-2 border-primary/20 shadow-lg z-10">
                    <img src={mascotImg} alt={mascotNome} className="w-10 h-10 rounded-full object-cover" />
                    <div className="pr-2">
                      <div className="text-[8px] font-black text-primary leading-none">PIP</div>
                      <div className="text-[10px] font-bold">Você consegue!</div>
                    </div>
                 </div>
              </motion.div>
            )}

            {step === 6 && (
               <motion.div key="step6" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6 w-full max-w-sm">
                  <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto border-4 border-sun/20 shadow-xl">
                    <Trophy className="h-12 w-12 text-sun" />
                  </div>
                  <h2 className="text-3xl font-black text-primary uppercase">MUITO BEM!</h2>
                  
                  <div className="grid grid-cols-2 gap-3">
                     <div className="p-4 bg-success/5 rounded-2xl border-2 border-success/10">
                        <div className="text-2xl font-black text-success">{performance.hits}</div>
                        <div className="text-[10px] font-black uppercase text-muted-foreground">Acertos</div>
                     </div>
                     <div className="p-4 bg-destructive/5 rounded-2xl border-2 border-destructive/10">
                        <div className="text-2xl font-black text-destructive">{performance.misses}</div>
                        <div className="text-[10px] font-black uppercase text-muted-foreground">Erros</div>
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
                    className="btn-tap bg-success text-white px-8 py-4 rounded-xl text-xl font-black shadow-glow border-2 border-white w-full"
                  >
                    CONCLUIR AULA
                  </button>
               </motion.div>
            )}
          </AnimatePresence>

          {feedback === true && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-success/10 pointer-events-none flex items-center justify-center z-50">
              <CheckCircle2 className="h-32 w-32 text-success drop-shadow-glow" />
            </motion.div>
          )}
          {feedback === false && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-destructive/5 pointer-events-none flex items-center justify-center z-50">
              <X className="h-32 w-32 text-destructive drop-shadow-lg" />
            </motion.div>
          )}
        </div>

        {step < 6 && (
          <div className="mt-8 flex justify-between items-center px-2">
             <button onClick={() => setStep(Math.max(1, step - 1))} className="text-muted-foreground font-black text-[10px] uppercase tracking-widest">← Voltar</button>
             <div className="text-[8px] font-black text-muted-foreground/40 uppercase tracking-widest">
               {childNome} • {aula.grade}
             </div>
             {step > 1 ? (
               <button onClick={() => setStep(6)} className="text-primary/50 font-black text-[10px] uppercase tracking-widest">Sair</button>
             ) : <div className="w-10" />}
          </div>
        )}
      </div>
    </Shell>
  );
}



