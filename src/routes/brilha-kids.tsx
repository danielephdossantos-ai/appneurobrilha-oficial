import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { motion } from "framer-motion";
import { useAppState } from "@/core/store";
import { 
  Sparkles, 
  BookOpen, 
  Library, 
  Compass, 
  ArrowLeft,
  GraduationCap,
  Mic,
  Headphones,
  Hash,
  MessageSquare
} from "lucide-react";
import { cn } from "@/utils/utils";

export const Route = createFileRoute("/brilha-kids")({
  head: () => ({
    meta: [
      { title: "Brilha Kids — Primeira Infância | NeuroBrilha" },
      {
        name: "description",
        content: "Módulos unificados para alfabetização e educação infantil.",
      },
    ],
  }),
  component: BrilhaKidsHub,
});

const MODULOS = [
  {
    id: "ler-com-aurora",
    to: "/neuro-treino/ler-com-aurora",
    title: "Ler com Aurora",
    subtitle: "Categoria especial · Pré II + 1º Ano",
    description: "20 missões diárias · Consciência fonológica",
    gradient: "from-[#f59e0b] via-[#fbbf24] to-[#7c3aed]",
    glow: "rgba(245,158,11,0.5)",
    emoji: "🔤",
    icon: Sparkles,
  },
  {
    id: "biblioteca-alfa",
    to: "/biblioteca-alfa",
    title: "Biblioteca · Leitura graduada",
    subtitle: "Histórias por nível leitor",
    description: "Do reconhecimento de palavras à fluência",
    gradient: "from-[#F43F5E] via-[#FB7185] to-[#F59E0B]",
    glow: "rgba(244,63,94,0.5)",
    emoji: "📚",
    icon: Library,
  },
  {
    id: "biblioteca-encantada",
    to: "/escola-brilha/biblioteca-encantada",
    title: "Biblioteca Encantada · 60 aulas",
    subtitle: "Comunicação Funcional · PECS / TEACCH / Denver",
    description: "Do apontar ao contar histórias · rotina visual + trocas",
    gradient: "from-[#10B981] via-[#34D399] to-[#06B6D4]",
    glow: "rgba(16,185,129,0.5)",
    emoji: "🗣️",
    icon: MessageSquare,
  },
  {
    id: "alfabetizacao",
    to: "/alfabetizacao",
    title: "Alfabetização Brilha",
    subtitle: "Consciência fonológica",
    description: "Progressão por etapas · só imagens e voz (Sons, sílabas, palavras)",
    gradient: "from-[#EC4899] via-[#D946EF] to-[#6366F1]",
    glow: "rgba(236,72,153,0.5)",
    emoji: "🅰️",
    icon: GraduationCap,
  },
  {
    id: "dislexia",
    to: "/escola-brilha/dislexia",
    title: "Trilha da Leitura · Orton-Gillingham",
    subtitle: "Programa Clínico · Dislexia",
    description: "Multissensorial · 8 fases · começa pelo ouvido",
    gradient: "from-[#7C3AED] via-[#A855F7] to-[#F97316]",
    glow: "rgba(124,58,237,0.5)",
    emoji: "🎧",
    icon: Headphones,
  },
  {
    id: "contar-com-pip",
    to: "/escola-brilha/contar-com-pip",
    title: "Contar com Pip · Senso Numérico",
    subtitle: "Matemática Terapêutica · Discalculia",
    description: "Subitizing · Numicon · reta numérica · 8 fases",
    gradient: "from-[#0EA5E9] via-[#3B82F6] to-[#6366F1]",
    glow: "rgba(14,165,233,0.5)",
    emoji: "🔢",
    icon: Hash,
  },
  {
    id: "ei-portugues",
    to: "/escola-brilha/trilha/educacao-infantil/portugues",
    title: "Português · Educação Infantil",
    subtitle: "3 a 6 anos · A Biblioteca Encantada",
    description: "Abrir trilha · Diploma",
    gradient: "from-[#059669] via-[#10B981] to-[#06B6D4]",
    glow: "rgba(5,150,105,0.5)",
    emoji: "📚",
    icon: BookOpen,
  },
  {
    id: "ei-campos",
    to: "/escola-brilha/trilha/educacao-infantil/default",
    title: "Campos de Experiência · EI",
    subtitle: "3 a 6 anos · Aventura de Aprender com Pip",
    description: "Abrir trilha · Diploma",
    gradient: "from-[#7C3AED] via-[#8B5CF6] to-[#F472B6]",
    glow: "rgba(124,58,237,0.5)",
    emoji: "✨",
    icon: Compass,
  }
];

function BrilhaKidsHub() {
  const { activeChild } = useAppState();

  return (
    <Shell>
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        <div className="flex items-center gap-4">
           <Link 
            to="/" 
            className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-colors"
           >
             <ArrowLeft className="h-5 w-5" />
           </Link>
           <PageHeader 
             title="BRILHA KIDS" 
             subtitle="Primeiros passos na jornada do saber"
             emoji="✨"
           />
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20 p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="text-5xl md:text-6xl animate-bounce-slow select-none">🦄</div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black text-primary">Bem-vindo ao Brilha Kids!</h2>
              <p className="text-muted-foreground mt-2 font-medium">
                {activeChild 
                  ? `Oi ${activeChild.nome}! Escolha uma aventura especial para começar hoje.`
                  : "Explore os módulos pensados especialmente para o desenvolvimento inicial."}
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODULOS.map((m, i) => (
            <Link key={m.id} to={m.to as any}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative rounded-[1.8rem] p-4 border-[3px] border-white shadow-lg bg-gradient-to-br transition-all group overflow-hidden flex items-center gap-4",
                  m.gradient
                )}
                style={{ boxShadow: `0 8px 0 rgba(0,0,0,0.1), 0 0 20px ${m.glow}` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md grid place-items-center text-3xl shrink-0 shadow-inner group-hover:rotate-6 transition-transform">
                  {m.emoji}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/70 truncate">
                      {m.subtitle}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-white truncate">{m.title}</h3>
                  <p className="text-white/80 text-[10px] font-medium leading-tight line-clamp-2">
                    {m.description}
                  </p>
                </div>

                <div className="h-8 w-8 rounded-full bg-white/20 grid place-items-center text-white font-black group-hover:bg-white group-hover:text-primary transition-all shrink-0">
                  →
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            </Link>
          ))}
        </div>

        <p className="text-center text-[10px] text-muted-foreground font-black uppercase tracking-widest py-4">
          Aprendizagem Neuro-Divertida
        </p>
      </div>
    </Shell>
  );
}
