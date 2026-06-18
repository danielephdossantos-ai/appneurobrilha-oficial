import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Heart, Users, Shield, Zap, Smile, BookOpen, Loader2, X } from "lucide-react";
import { useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

import catEmocoesImg from "@/assets/brilha-vida/categoria-emocoes.png";
import catAmizadeImg from "@/assets/brilha-vida/categoria-amizade.png";
import catAutocontroleImg from "@/assets/brilha-vida/categoria-autocontrole.png";
import catRotinaImg from "@/assets/brilha-vida/categoria-rotina.png";
import atvTermometroImg from "@/assets/brilha-vida/termometro-emocoes.png";
import atvComoEstouImg from "@/assets/brilha-vida/como-estou.png";
import atvEmojiMagicoImg from "@/assets/brilha-vida/emoji-magico.png";
import atvHistoriasImg from "@/assets/brilha-vida/historias-sociais.png";
import atvDividindoImg from "@/assets/brilha-vida/dividindo-brinquedo.png";
import atvCuidandoImg from "@/assets/brilha-vida/cuidando-amigo.png";
import atvRespirarImg from "@/assets/brilha-vida/pausa-respirar.png";
import atvCantinhoImg from "@/assets/brilha-vida/cantinho-calma.png";
import atvSemaforoImg from "@/assets/brilha-vida/semaforo-sentir.png";
import atvMinhaVezImg from "@/assets/brilha-vida/minha-vez.png";
import atvRegrasImg from "@/assets/brilha-vida/regras-casa.png";
import atvConflitosImg from "@/assets/brilha-vida/resolucao-conflitos.png";

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
    atividades: ["Termômetro das Emoções", "Como estou agora?", "Emoji Mágico"],
  },
  {
    id: "social",
    nome: "Amizade e Empatia",
    img: catAmizadeImg,
    cor: "from-emerald/30 to-emerald/5",
    descricao: "Aprender a conviver e respeitar",
    atividades: ["Histórias Sociais", "Dividindo o Brinquedo", "Cuidando do Amigo"],
  },
  {
    id: "autocontrole",
    nome: "Autocontrole",
    img: catAutocontroleImg,
    cor: "from-sky/30 to-sky/5",
    descricao: "Estratégias para se acalmar",
    atividades: ["Pausa para Respirar", "Cantinho da Calma", "Semáforo do Sentir"],
  },
  {
    id: "rotina",
    nome: "Rotina e Convivência",
    img: catRotinaImg,
    cor: "from-lilac/30 to-lilac/5",
    descricao: "Regras e harmonia no dia a dia",
    atividades: ["Minha vez, sua vez", "Regras da Casa", "Resolução de Conflitos"],
  },
];

function BrilhaVida() {
  const { activeChild } = useAppState();
  const [activeActivity, setActiveActivity] = useState<any>(null);
  const [customActivity, setCustomActivity] = useState<null | "respirar" | "termometro" | "semaforo" | "cantinho" | "comoestou" | "emojimagico">(null);
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

  if (customActivity === "respirar") {
    return (
      <Shell>
        <PausaRespirar onClose={() => setCustomActivity(null)} />
      </Shell>
    );
  }

  if (customActivity === "termometro") {
    return (
      <Shell>
        <TermometroEmocoes onClose={() => setCustomActivity(null)} />
      </Shell>
    );
  }

  if (customActivity === "semaforo") {
    return (
      <Shell>
        <SemaforoSentir onClose={() => setCustomActivity(null)} />
      </Shell>
    );
  }

  if (customActivity === "cantinho") {
    return (
      <Shell>
        <CantinhoCalma onClose={() => setCustomActivity(null)} />
      </Shell>
    );
  }

  if (customActivity === "comoestou") {
    return (
      <Shell>
        <ComoEstouAgora onClose={() => setCustomActivity(null)} />
      </Shell>
    );
  }

  if (customActivity === "emojimagico") {
    return (
      <Shell>
        <EmojiMagico onClose={() => setCustomActivity(null)} />
      </Shell>
    );
  }






  if (activeActivity) {
    return (
      <Shell>
        <div className="relative">
          <button
            onClick={() => setActiveActivity(null)}
            className="absolute -top-12 right-0 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-50"
          >
            <X size={24} />
          </button>
          <ActivityContainer
            activity={{
              ...activeActivity,
              // Adaptar para o formato que o Container espera se necessário
              type:
                activeActivity.content.type === "emotion-match" ||
                activeActivity.content.type === "social-story"
                  ? "multiple-choice"
                  : "multiple-choice",
              instruction: activeActivity.content.question,
              title: activeActivity.content.title,
            }}
            onComplete={() => {
              setTimeout(() => setActiveActivity(null), 2000);
            }}
            emotion={{ current: "happy" }}
          />
        </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cat.atividades.map((atv) => (
                <button
                  key={atv}
                  onClick={() => startLevel(atv)}
                  className={`group relative overflow-hidden text-left p-5 rounded-[2rem] bg-gradient-to-br ${cat.cor} border-2 border-transparent hover:border-primary/20 transition-all hover:shadow-glow btn-tap`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {ATIVIDADE_IMG[atv] && (
                      <img
                        src={ATIVIDADE_IMG[atv]}
                        alt={atv}
                        loading="lazy"
                        width={72}
                        height={72}
                        className="w-18 h-18 object-contain drop-shadow-sm shrink-0"
                        style={{ width: 72, height: 72 }}
                      />
                    )}
                    <div className="font-extrabold text-slate-800 text-lg leading-tight">{atv}</div>
                  </div>
                  <div className="text-[10px] font-bold text-primary/60 uppercase tracking-widest flex items-center gap-1">
                    Atividade Brilha Vida <Zap className="h-3 w-3 fill-primary" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 italic">Começar agora</span>
                    <Smile className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <Smile className="h-6 w-6 text-sun" /> Momento Ursinho Calma
          </h3>
          <p className="text-slate-400 max-w-md">
            Precisa de uma pausa? O Ursinho Calma está aqui para ajudar com exercícios de respiração
            e regulação sensorial.
          </p>
          <button className="mt-6 px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-glow hover:scale-105 transition-transform">
            Pedir Ajuda
          </button>
        </div>
      </Card>
    </Shell>
  );
}
