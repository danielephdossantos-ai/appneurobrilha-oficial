import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useNavigationStore, useBackNavigation } from "@/lib/navigation-context";
import { completePlanItem, advancePlanFlow } from "@/lib/plan-flow";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Heart, Users, Shield, Zap, Smile, BookOpen } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { z } from "zod";
import { useAppState } from "@/core/store";
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
import { MoodTimeline } from "@/components/brilha-vida/MoodTimeline";

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

import { url as catSosImg } from "@/assets/brilha-vida/cat-sos.png.asset.json";
import { url as catModelosImg } from "@/assets/brilha-vida/cat-modelos.png.asset.json";
import { url as catTeaTdahImg } from "@/assets/brilha-vida/cat-tea-tdah.png.asset.json";

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
};

export const Route = createFileRoute("/brilha-vida")({
  validateSearch: z.object({ atividade: z.string().optional() }),
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
    nome: "Estratégias de Regulação",
    img: catSosImg,
    cor: "from-rose-300/30 to-rose-100/5",
    descricao: "Recursos simples para pausar, perceber o corpo e recuperar a calma",
    atividades: ["5-4-3-2-1 Sentidos", "Abraço da Borboleta", "Espaguete e Estátua", "Escuta do Corpo"],
  },
  {
    id: "modelos-clinicos",
    nome: "Vocabulário e Mapas de Emoção",
    img: catModelosImg,
    cor: "from-indigo-300/30 to-indigo-100/5",
    descricao: "Recursos visuais para ampliar o vocabulário emocional e reconhecer estados",
    atividades: ["Zonas de Regulação", "Medidor de Emoções"],
  },
  {
    id: "tea-tdah",
    nome: "Rotina, Transição e Apoio Visual",
    img: catTeaTdahImg,
    cor: "from-teal-300/30 to-teal-100/5",
    descricao: "Suportes visuais para organizar a rotina, antecipar transições e fazer escolhas",
    atividades: ["Primeiro… Depois", "Meu Dia em Cartões", "Relógio Vermelho", "Você Escolhe"],
  },
];

function BrilhaVida() {
  const { activeChild } = useAppState();
  const { atividade } = Route.useSearch();
  const navigate = useNavigate();
  const { handleBack, context } = useBackNavigation();
  const [customActivity, setCustomActivity] = useState<null | "respirar" | "termometro" | "semaforo" | "cantinho" | "comoestou" | "emojimagico" | "historias" | "dividindo" | "cuidando" | "minhavez" | "regras" | "conflitos" | "diario" | "elogio" | "bolha" | "roda" | "grounding" | "borboleta" | "espaguete" | "escutacorpo" | "zones" | "moodmeter" | "firstthen" | "cronograma" | "timer" | "escolha">(null);

  useEffect(() => {
    const permitidas = new Set([
      "respirar","termometro","semaforo","cantinho","comoestou","emojimagico","historias","dividindo","cuidando",
      "minhavez","regras","conflitos","diario","elogio","bolha","roda","grounding","borboleta","espaguete","escutacorpo",
      "zones","moodmeter","firstthen","cronograma","timer","escolha",
    ]);
    if (atividade && permitidas.has(atividade)) setCustomActivity(atividade as any);
  }, [atividade]);

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
    console.warn(`[BrilhaVida] Atividade sem componente auditado: ${tipo}`);
  };

  const finishAndBack = async () => {
    if (context?.isPlanFlow) {
      await completePlanItem(context).catch(() => false);
      const nextRoute = advancePlanFlow(context);
      if (nextRoute) { navigate({ to: nextRoute }); return; }
    }
    if (!handleBack(navigate)) {
      setCustomActivity(null);
    }
  };

  const CUSTOM_MAP: Record<string, { node: ReactNode; contexto: string }> = {
    respirar: { node: <PausaRespirar onClose={() => { void finishAndBack(); }} />, contexto: "Pausa para Respirar" },
    termometro: { node: <TermometroEmocoes onClose={() => { void finishAndBack(); }} />, contexto: "Termômetro das Emoções" },
    semaforo: { node: <SemaforoSentir onClose={() => { void finishAndBack(); }} />, contexto: "Semáforo do Sentir" },
    cantinho: { node: <CantinhoCalma onClose={() => { void finishAndBack(); }} />, contexto: "Cantinho da Calma" },
    comoestou: { node: <ComoEstouAgora onClose={() => { void finishAndBack(); }} />, contexto: "Como estou agora?" },
    emojimagico: { node: <EmojiMagico onClose={() => { void finishAndBack(); }} />, contexto: "Emoji Mágico" },
    historias: { node: <HistoriasSociais onClose={() => { void finishAndBack(); }} />, contexto: "Histórias Sociais" },
    dividindo: { node: <DividindoBrinquedo onClose={() => { void finishAndBack(); }} />, contexto: "Dividindo o Brinquedo" },
    cuidando: { node: <CuidandoAmigo onClose={() => { void finishAndBack(); }} />, contexto: "Cuidando do Amigo" },
    minhavez: { node: <MinhaVezSuaVez onClose={() => { void finishAndBack(); }} />, contexto: "Minha vez, sua vez" },
    regras: { node: <RegrasCasa onClose={() => { void finishAndBack(); }} />, contexto: "Regras da Casa" },
    conflitos: { node: <ResolucaoConflitos onClose={() => { void finishAndBack(); }} />, contexto: "Resolução de Conflitos" },
    diario: { node: <DiarioSentir onClose={() => { void finishAndBack(); }} />, contexto: "Diário do Sentir" },
    elogio: { node: <ElogioMagico onClose={() => { void finishAndBack(); }} />, contexto: "Elogio Mágico" },
    bolha: { node: <BolhaBemEstar onClose={() => { void finishAndBack(); }} />, contexto: "Bolha de Bem-Estar" },
    roda: { node: <RodaDoDia onClose={() => { void finishAndBack(); }} />, contexto: "Roda do Dia" },
    grounding: { node: <Grounding54321 onClose={() => { void finishAndBack(); }} />, contexto: "5-4-3-2-1 Sentidos" },
    borboleta: { node: <ButterflyHug onClose={() => { void finishAndBack(); }} />, contexto: "Abraço da Borboleta" },
    espaguete: { node: <EspagueteEstatua onClose={() => { void finishAndBack(); }} />, contexto: "Espaguete e Estátua" },
    escutacorpo: { node: <InteroceptionScan onClose={() => { void finishAndBack(); }} />, contexto: "Escuta do Corpo" },
    zones: { node: <ZonesRegulation onClose={() => { void finishAndBack(); }} />, contexto: "Zonas de Regulação" },
    moodmeter: { node: <MoodMeterRuler onClose={() => { void finishAndBack(); }} />, contexto: "Medidor de Emoções" },
    firstthen: { node: <FirstThenBoard onClose={() => { void finishAndBack(); }} />, contexto: "Primeiro… Depois" },
    cronograma: { node: <CronogramaVisual onClose={() => { void finishAndBack(); }} />, contexto: "Meu Dia em Cartões" },
    timer: { node: <TimerVisual onClose={() => { void finishAndBack(); }} />, contexto: "Relógio Vermelho" },
    escolha: { node: <CartaoEscolha onClose={() => { void finishAndBack(); }} />, contexto: "Você Escolhe" },
  };

  if (customActivity && CUSTOM_MAP[customActivity]) {
    const { node } = CUSTOM_MAP[customActivity];
    return (
      <Shell>
        {node}
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
              Recursos simples para praticar pausa, autocontrole e organização emocional.
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
                  <div className="text-xs font-black text-primary/70 uppercase tracking-wider flex items-center justify-center gap-1 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/10">
                    BRILHA VIDA <Zap className="h-2.5 w-2.5 fill-primary" />
                  </div>

                  {/* Base: Área de ação consistente */}
                  <div className="mt-auto w-full pt-2 border-t border-black/5 flex items-center justify-between px-1">
                    <span className="text-sm font-black text-primary uppercase tracking-tight">Começar</span>
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
          <p className="text-slate-300 max-w-md text-base leading-relaxed">
            Precisa de uma pausa? Escolha Pausa para Respirar, Cantinho da Calma ou Semáforo do Sentir. Se ainda estiver difícil, chame um adulto de confiança.
          </p>
        </div>
      </Card>

    </Shell>
  );
}
