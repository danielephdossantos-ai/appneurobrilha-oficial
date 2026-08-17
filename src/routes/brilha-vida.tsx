import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useNavigationStore, useBackNavigation } from "@/lib/navigation-context";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Heart, Users, Shield, Zap, Smile, BookOpen, Loader2, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useAppState } from "@/core/store";
import { InfiniteActivityEngine } from "@/engines/infinite-activity-engine";
import { ActivityContainer } from "@/components/activities/ActivityContainer";
import { PausaRespirar } from "@/components/brilha-vida/PausaRespirar";
import { TermometroEmocoes } from "@/components/brilha-vida/TermometroEmocoes";
import { SemaforoSentir } from "@/components/brilha-vida/SemaforoSentir";
import { CantinhoCalma } from "@/components/brilha-vida/CantinhoCalma";
import { ComoEstouAgora } from "@/components/brilha-vida/ComoEstouAgora";
import { EmojiMagico } from "@/components/brilha-vida/EmojiMagico";
import { HistoriasSociais } from "@/components/brilha-vida/HistoriasSociais";
import { DividindoBrinquedo } from "@/components/brilha-vida/DividindoBrinquedo";
import { CuidandoAmigo } from "@/components/brilha-vida/CuidandoAmigo";
import { MinhaVezSuaVez } from "@/components/brilha-vida/MinhaVezSuaVez";
import { RegrasCasa } from "@/components/brilha-vida/RegrasCasa";
import { ResolucaoConflitos } from "@/components/brilha-vida/ResolucaoConflitos";
import { DiarioSentir } from "@/components/brilha-vida/DiarioSentir";
import { ElogioMagico } from "@/components/brilha-vida/ElogioMagico";
import { BolhaBemEstar } from "@/components/brilha-vida/BolhaBemEstar";
import { RodaDoDia } from "@/components/brilha-vida/RodaDoDia";
import { TerapeutaFlutuante } from "@/components/brilha-vida/TerapeutaFlutuante";
import { Grounding54321 } from "@/components/brilha-vida/Grounding54321";
import { ButterflyHug } from "@/components/brilha-vida/ButterflyHug";
import { EspagueteEstatua } from "@/components/brilha-vida/EspagueteEstatua";
import { InteroceptionScan } from "@/components/brilha-vida/InteroceptionScan";
import { ZonesRegulation } from "@/components/brilha-vida/ZonesRegulation";
import { MoodMeterRuler } from "@/components/brilha-vida/MoodMeterRuler";
import { FirstThenBoard } from "@/components/brilha-vida/FirstThenBoard";
import { CronogramaVisual } from "@/components/brilha-vida/CronogramaVisual";
import { TimerVisual } from "@/components/brilha-vida/TimerVisual";
import { CartaoEscolha } from "@/components/brilha-vida/CartaoEscolha";
import { KitCuidador } from "@/components/brilha-vida/KitCuidador";
import { DiarioABC } from "@/components/brilha-vida/DiarioABC";
import { GuiaCrise } from "@/components/brilha-vida/GuiaCrise";
import { BateriaCuidador } from "@/components/brilha-vida/BateriaCuidador";
import { MoodTimeline } from "@/components/brilha-vida/MoodTimeline";
import { motion, AnimatePresence } from "framer-motion";

import { url as catEmocoesImg } from "@/assets/brilha-vida/categoria-emocoes.png.asset.json";
import { url as catAmizadeImg } from "@/assets/brilha-vida/categoria-amizade.png.asset.json";
import { url as catAutocontroleImg } from "@/assets/brilha-vida/categoria-autocontrole.png.asset.json";
import { url as catRotinaImg } from "@/assets/brilha-vida/categoria-rotina.png.asset.json";
import { url as atvTermometroImg } from "@/assets/brilha-vida/termometro-emocoes.png.asset.json";
import { url as atvComoEstouImg } from "@/assets/brilha-vida/como-estou.png.asset.json";
import { url as atvEmojiMagicoImg } from "@/assets/brilha-vida/emoji-magico.png.asset.json";
import { url as atvHistoriasImg } from "@/assets/brilha-vida/historias-sociais.png.asset.json";
import { url as atvDividindoImg } from "@/assets/brilha-vida/dividindo-brinquedo.png.asset.json";
import { url as atvCuidandoImg } from "@/assets/brilha-vida/cuidando-amigo.png.asset.json";
import { url as atvRespirarImg } from "@/assets/brilha-vida/pausa-respirar.png.asset.json";
import { url as atvCantinhoImg } from "@/assets/brilha-vida/cantinho-calma.png.asset.json";
import { url as atvSemaforoImg } from "@/assets/brilha-vida/semaforo-sentir.png.asset.json";
import { url as atvMinhaVezImg } from "@/assets/brilha-vida/minha-vez.png.asset.json";
import { url as atvRegrasImg } from "@/assets/brilha-vida/regras-casa.png.asset.json";
import { url as atvConflitosImg } from "@/assets/brilha-vida/resolucao-conflitos.png.asset.json";
import { url as atvDiarioImg } from "@/assets/brilha-vida/diario-sentir.png.asset.json";
import { url as atvElogioImg } from "@/assets/brilha-vida/elogio-magico.png.asset.json";
import { url as atvBolhaImg } from "@/assets/brilha-vida/bolha-bemestar.png.asset.json";
import { url as atvRodaImg } from "@/assets/brilha-vida/roda-do-dia.png.asset.json";

import { url as atvGroundingImg } from "@/assets/brilha-vida/grounding-54321.png.asset.json";
import { url as atvBorboletaImg } from "@/assets/brilha-vida/abraco-borboleta.png.asset.json";
import { url as atvEspagueteImg } from "@/assets/brilha-vida/espaguete-estatua.png.asset.json";
import { url as atvEscutaCorpoImg } from "@/assets/brilha-vida/escuta-corpo.png.asset.json";
import { url as atvZonasImg } from "@/assets/brilha-vida/zonas-regulacao.png.asset.json";
import { url as atvMedidorImg } from "@/assets/brilha-vida/medidor-emocoes.png.asset.json";
import { url as atvPrimeiroDepoisImg } from "@/assets/brilha-vida/primeiro-depois.png.asset.json";
import { url as atvCronogramaImg } from "@/assets/brilha-vida/cronograma-visual.png.asset.json";
import { url as atvTimerImg } from "@/assets/brilha-vida/relogio-vermelho.png.asset.json";
import { url as atvEscolhaImg } from "@/assets/brilha-vida/cartao-escolha.png.asset.json";
import { url as atvKitCuidadorImg } from "@/assets/brilha-vida/kit-cuidador.png.asset.json";
import { url as atvDiarioAbcImg } from "@/assets/brilha-vida/diario-abc.png.asset.json";
import { url as atvGuiaCriseImg } from "@/assets/brilha-vida/guia-crise.png.asset.json";
import { url as atvBateriaImg } from "@/assets/brilha-vida/bateria-cuidador.png.asset.json";

import { url as catSosImg } from "@/assets/brilha-vida/cat-sos.png.asset.json";
import { url as catModelosImg } from "@/assets/brilha-vida/cat-modelos.png.asset.json";
import { url as catTeaTdahImg } from "@/assets/brilha-vida/cat-tea-tdah.png.asset.json";
import { url as catCuidadorImg } from "@/assets/brilha-vida/cat-cuidador.png.asset.json";

const ATIVIDADE_IMG: Record<string, string> = {
  "Termômetro das Emoções": atvTermometroImg,
  "Como estou agora?": atvComoEstouImg,
  "Emoji Mágico": atvEmojiMagicoImg,
  "Histórias Sociais": atvHistoriasImg,
  "Dividindo o Brinquedo": atvDividindoImg,
  "Cuidando do Amigo": atvCuidandoImg,
  "Pausa para Respirar": atvRespirarImg,
  "Cantinho da Calma": atvCantinhoImg,
  "Semáforo do Sentir": atvSemaforoImg,
  "Minha vez, sua vez": atvMinhaVezImg,
  "Regras da Casa": atvRegrasImg,
  "Resolução de Conflitos": atvConflitosImg,
  "Diário do Sentir": atvDiarioImg,
  "Elogio Mágico": atvElogioImg,
  "Bolha de Bem-Estar": atvBolhaImg,
  "Roda do Dia": atvRodaImg,
  "5-4-3-2-1 Sentidos": atvGroundingImg,
  "Abraço da Borboleta": atvBorboletaImg,
  "Espaguete e Estátua": atvEspagueteImg,
  "Escuta do Corpo": atvEscutaCorpoImg,
  "Zonas de Regulação": atvZonasImg,
  "Medidor de Emoções": atvMedidorImg,
  "Primeiro… Depois": atvPrimeiroDepoisImg,
  "Meu Dia em Cartões": atvCronogramaImg,
  "Relógio Vermelho": atvTimerImg,
  "Você Escolhe": atvEscolhaImg,
  "Kit do Cuidador": atvKitCuidadorImg,
  "Diário ABC": atvDiarioAbcImg,
  "Guia de Crise": atvGuiaCriseImg,
  "Bateria do Cuidador": atvBateriaImg,
};

export const Route = createFileRoute("/brilha-vida")({
  component: BrilhaVida,
});

const categorias = [
  {
    id: "emocoes",
    nome: "Emoções",
    img: catEmocoesImg,
    cor: "from-sun/30 to-sun/5",
    descricao: "Reconhecer e nomear o que sentimos",
    atividades: ["Termômetro das Emoções", "Como estou agora?", "Emoji Mágico", "Diário do Sentir"],
  },
  {
    id: "social",
    nome: "Amizade e Empatia",
    img: catAmizadeImg,
    cor: "from-emerald/30 to-emerald/5",
    descricao: "Aprender a conviver e respeitar",
    atividades: ["Histórias Sociais", "Dividindo o Brinquedo", "Cuidando do Amigo", "Elogio Mágico"],
  },
  {
    id: "autocontrole",
    nome: "Autocontrole",
    img: catAutocontroleImg,
    cor: "from-sky/30 to-sky/5",
    descricao: "Estratégias para se acalmar",
    atividades: ["Pausa para Respirar", "Cantinho da Calma", "Semáforo do Sentir", "Bolha de Bem-Estar"],
  },
  {
    id: "rotina",
    nome: "Rotina e Convivência",
    img: catRotinaImg,
    cor: "from-lilac/30 to-lilac/5",
    descricao: "Regras e harmonia no dia a dia",
    atividades: ["Minha vez, sua vez", "Regras da Casa", "Resolução de Conflitos", "Roda do Dia"],
  },
  {
    id: "regulacao-aguda",
    nome: "Regulação Aguda (SOS calma)",
    img: catSosImg,
    cor: "from-rose-300/30 to-rose-100/5",
    descricao: "Kit clínico para crise, susto ou pico de ansiedade",
    atividades: ["5-4-3-2-1 Sentidos", "Abraço da Borboleta", "Espaguete e Estátua", "Escuta do Corpo"],
  },
  {
    id: "modelos-clinicos",
    nome: "Modelos Clínicos de Emoção",
    img: catModelosImg,
    cor: "from-indigo-300/30 to-indigo-100/5",
    descricao: "Zones of Regulation + Mood Meter (RULER/Yale) para vocabulário emocional expandido",
    atividades: ["Zonas de Regulação", "Medidor de Emoções"],
  },
  {
    id: "tea-tdah",
    nome: "Ferramentas TEA e TDAH",
    img: catTeaTdahImg,
    cor: "from-teal-300/30 to-teal-100/5",
    descricao: "Suportes visuais clínicos: Primeiro-Depois, Cronograma, Time Timer e Cartão de Escolha",
    atividades: ["Primeiro… Depois", "Meu Dia em Cartões", "Relógio Vermelho", "Você Escolhe"],
  },
  {
    id: "cuidador",
    nome: "Apoio ao Cuidador",
    img: catCuidadorImg,
    cor: "from-amber-300/30 to-amber-100/5",
    descricao: "Ferramentas clínicas pra você que cuida: só um adulto regulado corregula uma criança",
    atividades: ["Kit do Cuidador", "Diário ABC", "Guia de Crise", "Bateria do Cuidador"],
  },
];

function BrilhaVida() {
  const { activeChild } = useAppState();
  const navigate = useNavigate();
  const { handleBack } = useBackNavigation();
  const [activeActivity, setActiveActivity] = useState<any>(null);
  const [customActivity, setCustomActivity] = useState<null | "respirar" | "termometro" | "semaforo" | "cantinho" | "comoestou" | "emojimagico" | "historias" | "dividindo" | "cuidando" | "minhavez" | "regras" | "conflitos" | "diario" | "elogio" | "bolha" | "roda" | "grounding" | "borboleta" | "espaguete" | "escutacorpo" | "zones" | "moodmeter" | "firstthen" | "cronograma" | "timer" | "escolha" | "kitcuidador" | "diarioabc" | "guiacrise" | "bateriacuidador">(null);
  const [isLoading, setIsLoading] = useState(false);

  const startLevel = async (tipo: string) => {
    if (!activeChild) return;
    // Atividades com componente próprio (não passam pelo engine)
    if (tipo === "Pausa para Respirar") {
      setCustomActivity("respirar");
      return;
    }
    if (tipo === "Termômetro das Emoções") {
      setCustomActivity("termometro");
      return;
    }
    if (tipo === "Semáforo do Sentir") {
      setCustomActivity("semaforo");
      return;
    }
    if (tipo === "Cantinho da Calma") {
      setCustomActivity("cantinho");
      return;
    }
    if (tipo === "Como estou agora?") {
      setCustomActivity("comoestou");
      return;
    }
    if (tipo === "Emoji Mágico") {
      setCustomActivity("emojimagico");
      return;
    }
    if (tipo === "Histórias Sociais") {
      setCustomActivity("historias");
      return;
    }
    if (tipo === "Dividindo o Brinquedo") {
      setCustomActivity("dividindo");
      return;
    }
    if (tipo === "Cuidando do Amigo") {
      setCustomActivity("cuidando");
      return;
    }
    if (tipo === "Minha vez, sua vez") {
      setCustomActivity("minhavez");
      return;
    }
    if (tipo === "Regras da Casa") {
      setCustomActivity("regras");
      return;
    }
    if (tipo === "Resolução de Conflitos") {
      setCustomActivity("conflitos");
      return;
    }
    if (tipo === "Diário do Sentir") {
      setCustomActivity("diario");
      return;
    }
    if (tipo === "Elogio Mágico") {
      setCustomActivity("elogio");
      return;
    }
    if (tipo === "Bolha de Bem-Estar") {
      setCustomActivity("bolha");
      return;
    }
    if (tipo === "Roda do Dia") {
      setCustomActivity("roda");
      return;
    }
    if (tipo === "5-4-3-2-1 Sentidos") {
      setCustomActivity("grounding");
      return;
    }
    if (tipo === "Abraço da Borboleta") {
      setCustomActivity("borboleta");
      return;
    }
    if (tipo === "Espaguete e Estátua") {
      setCustomActivity("espaguete");
      return;
    }
    if (tipo === "Escuta do Corpo") {
      setCustomActivity("escutacorpo");
      return;
    }
    if (tipo === "Zonas de Regulação") {
      setCustomActivity("zones");
      return;
    }
    if (tipo === "Medidor de Emoções") {
      setCustomActivity("moodmeter");
      return;
    }
    if (tipo === "Primeiro… Depois") {
      setCustomActivity("firstthen");
      return;
    }
    if (tipo === "Meu Dia em Cartões") {
      setCustomActivity("cronograma");
      return;
    }
    if (tipo === "Relógio Vermelho") {
      setCustomActivity("timer");
      return;
    }
    if (tipo === "Você Escolhe") {
      setCustomActivity("escolha");
      return;
    }
    if (tipo === "Kit do Cuidador") {
      setCustomActivity("kitcuidador");
      return;
    }
    if (tipo === "Diário ABC") {
      setCustomActivity("diarioabc");
      return;
    }
    if (tipo === "Guia de Crise") {
      setCustomActivity("guiacrise");
      return;
    }
    if (tipo === "Bateria do Cuidador") {
      setCustomActivity("bateriacuidador");
      return;
    }
    setIsLoading(true);

    // Simular atraso para feedback visual lúdico
    setTimeout(() => {
      try {
        const gradeLevel = activeChild.serie ? parseInt(activeChild.serie) || 1 : 1;
        const activity = InfiniteActivityEngine.generate({
          childId: activeChild.id,
          age: activeChild.idade || 6,
          grade: gradeLevel,
          neuroProfile: activeChild.diagnostico || "Tipico",
          previousPerformance: 0.7,
          adjustments: (activeChild as any).adjustments || {
            visualComplexity: "medium",
            stimuliReduction: false,
            audioAdaptation: { volume: 0.8, pacing: "normal" },
            positiveReinforcementFrequency: 0.5,
          },
        });

        // Forçar tipo socioemocional se o motor sorteou algo genérico
        if (!["social-story", "emotion-match"].includes(activity.content.type)) {
          const isStory = Math.random() > 0.5;
          activity.content.type = isStory ? "social-story" : "emotion-match";
        }

        setActiveActivity(activity);
      } catch (error) {
        console.error("Erro ao gerar atividade Brilha Vida:", error);
      } finally {
        setIsLoading(false);
      }
    }, 800);
  };

  const CUSTOM_MAP: Record<string, { node: ReactNode; contexto: string }> = {
    respirar: { node: <PausaRespirar onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Pausa para Respirar" },
    termometro: { node: <TermometroEmocoes onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Termômetro das Emoções" },
    semaforo: { node: <SemaforoSentir onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Semáforo do Sentir" },
    cantinho: { node: <CantinhoCalma onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Cantinho da Calma" },
    comoestou: { node: <ComoEstouAgora onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Como estou agora?" },
    emojimagico: { node: <EmojiMagico onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Emoji Mágico" },
    historias: { node: <HistoriasSociais onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Histórias Sociais" },
    dividindo: { node: <DividindoBrinquedo onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Dividindo o Brinquedo" },
    cuidando: { node: <CuidandoAmigo onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Cuidando do Amigo" },
    minhavez: { node: <MinhaVezSuaVez onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Minha vez, sua vez" },
    regras: { node: <RegrasCasa onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Regras da Casa" },
    conflitos: { node: <ResolucaoConflitos onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Resolução de Conflitos" },
    diario: { node: <DiarioSentir onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Diário do Sentir" },
    elogio: { node: <ElogioMagico onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Elogio Mágico" },
    bolha: { node: <BolhaBemEstar onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Bolha de Bem-Estar" },
    roda: { node: <RodaDoDia onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Roda do Dia" },
    grounding: { node: <Grounding54321 onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "5-4-3-2-1 Sentidos" },
    borboleta: { node: <ButterflyHug onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Abraço da Borboleta" },
    espaguete: { node: <EspagueteEstatua onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Espaguete e Estátua" },
    escutacorpo: { node: <InteroceptionScan onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Escuta do Corpo" },
    zones: { node: <ZonesRegulation onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Zonas de Regulação" },
    moodmeter: { node: <MoodMeterRuler onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Medidor de Emoções" },
    firstthen: { node: <FirstThenBoard onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Primeiro… Depois" },
    cronograma: { node: <CronogramaVisual onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Meu Dia em Cartões" },
    timer: { node: <TimerVisual onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Relógio Vermelho" },
    escolha: { node: <CartaoEscolha onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Você Escolhe" },
    kitcuidador: { node: <KitCuidador onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Kit do Cuidador" },
    diarioabc: { node: <DiarioABC onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Diário ABC" },
    guiacrise: { node: <GuiaCrise onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Guia de Crise" },
    bateriacuidador: { node: <BateriaCuidador onClose={() => { if (!handleBack(navigate)) setCustomActivity(null); }} />, contexto: "Bateria do Cuidador" },
  };

  if (customActivity && CUSTOM_MAP[customActivity]) {
    const { node, contexto } = CUSTOM_MAP[customActivity];
    return (
      <Shell>
        {node}
        <TerapeutaFlutuante contexto={contexto} />
      </Shell>
    );
  }

  if (activeActivity) {
    return (
      <Shell>
        <div className="relative">
          <button
            onClick={() => { if (!handleBack(navigate)) setActiveActivity(null); }}
            className="absolute -top-12 right-0 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-50"
          >
            <X size={24} />
          </button>
          <ActivityContainer
            activity={{
              ...activeActivity,
              type:
                activeActivity.content.type === "emotion-match" ||
                activeActivity.content.type === "social-story"
                  ? "multiple-choice"
                  : "multiple-choice",
              instruction: activeActivity.content.question,
              title: activeActivity.content.title,
            }}
            onComplete={() => {
              setTimeout(() => { if (!handleBack(navigate)) setActiveActivity(null); }, 2000);
            }}
            emotion={{ current: "happy" }}
          />
        </div>
        <TerapeutaFlutuante contexto="atividade Brilha Vida" />
      </Shell>
    );
  }


  return (
    <Shell>
      <PageHeader
        emoji="🌱"
        title="Brilha Vida"
        subtitle="Educação socioemocional e regulação para brilhar na vida"
      />

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm"
          >
            <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
            <h2 className="text-2xl font-black text-primary animate-pulse">
              Preparando sua missão...
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-emerald/10 to-emerald/5 border-emerald/20 flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-emerald/20 text-emerald-600">
            <Heart className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Inteligência Emocional</h3>
            <p className="text-sm text-muted-foreground">
              Atividades que ajudam a entender sentimentos e desenvolver empatia.
            </p>
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-sky/10 to-sky/5 border-sky/20 flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-sky/20 text-sky-600">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Segurança e Regulação</h3>
            <p className="text-sm text-muted-foreground">
              Ferramentas de autocontrole fundamentais para crianças neurodivergentes.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <MoodTimeline childId={activeChild?.id} />
      </div>

      <div className="space-y-6">

        {categorias.map((cat) => (
          <section key={cat.id}>
            <div className="flex flex-col mb-4">
              <h2 className="text-xl font-black flex items-center gap-3">
                <img src={cat.img} alt={cat.nome} loading="lazy" width={64} height={64} className="w-16 h-16 object-contain drop-shadow-sm" />
                {cat.nome}
              </h2>
              <p className="text-sm text-muted-foreground font-medium">{cat.descricao}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {cat.atividades.map((atv) => (
                <button
                  key={atv}
                  onClick={() => {
                    useNavigationStore.getState().setContext({
                      originRoute: "/brilha-vida",
                      originModule: "brilha-vida",
                      timestamp: Date.now(),
                    });
                    startLevel(atv);
                  }}
                  className={`group relative overflow-hidden text-center p-4 sm:p-5 rounded-[2rem] bg-gradient-to-br ${cat.cor} border-2 border-transparent hover:border-primary/20 transition-all hover:shadow-glow btn-tap flex flex-col items-center gap-3 h-full min-h-[14rem] sm:min-h-[16rem]`}
                >
                  {/* Topo: Imagem centralizada e maior */}
                  {ATIVIDADE_IMG[atv] && (
                    <div className="flex items-center justify-center w-full pt-1">
                      <img
                        src={ATIVIDADE_IMG[atv]}
                        alt={atv}
                        loading="lazy"
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-sm mx-auto transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Meio: Título centralizado com altura fixa e quebra correta */}
                  <div className="flex flex-col items-center justify-center min-h-[3rem] w-full px-1">
                    <div className="font-extrabold text-slate-800 text-base sm:text-lg leading-tight break-words hyphens-auto text-center line-clamp-2">
                      {atv}
                    </div>
                  </div>

                  {/* Abaixo do título: Badge compacta e centralizada */}
                  <div className="text-[9px] font-black text-primary/60 uppercase tracking-wider flex items-center justify-center gap-1 bg-white/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-primary/10">
                    BRILHA VIDA <Zap className="h-2.5 w-2.5 fill-primary" />
                  </div>

                  {/* Base: Área de ação consistente */}
                  <div className="mt-auto w-full pt-2 border-t border-black/5 flex items-center justify-between px-1">
                    <span className="text-[10px] font-black text-primary uppercase tracking-tight">Começar</span>
                    <Smile className="h-5 w-5 text-primary opacity-30 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Card className="mt-12 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Smile className="h-32 w-32" />
        </div>
        <div className="relative z-10">
          <h3 className="text-xl font-black mb-2 flex items-center gap-2">
            <Smile className="h-6 w-6 text-sun" /> Momento Calma
          </h3>
          <p className="text-slate-400 max-w-md">
            Precisa de uma pausa? Nossa terapeuta amiga está aqui pra te ouvir e te ajudar com
            respiração e regulação. É só tocar no coraçãozinho.
          </p>
        </div>
      </Card>

      <TerapeutaFlutuante />
    </Shell>
  );
}
