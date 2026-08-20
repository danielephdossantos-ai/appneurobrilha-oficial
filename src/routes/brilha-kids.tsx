import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { motion } from "framer-motion";
import { useAppState } from "@/core/store";
import { 
  Sparkles, 
  BookOpen, 
  Ruler, 
  Library, 
  Compass, 
  ArrowLeft,
  GraduationCap
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
    id: "alfabetizacao",
    to: "/primeiros-anos",
    title: "Alfabetização",
    subtitle: "Contar com Pip & Aurora",
    description: "Trilha progressiva com foco em senso numérico e leitura fonêmica.",
    gradient: "from-[#A855F7] via-[#9B6CFF] to-[#5A2DC9]",
    glow: "rgba(155,108,255,0.7)",
    emoji: "🚀",
    icon: GraduationCap,
  },
  {
    id: "biblioteca",
    to: "/escola-brilha/biblioteca-encantada",
    title: "Português EI & Biblioteca",
    subtitle: "Linguagem e Imaginação",
    description: "60 aulas ilustradas com foco em vocabulário e compreensão oral.",
    gradient: "from-[#34D399] via-[#10B981] to-[#047857]",
    glow: "rgba(52,211,153,0.7)",
    emoji: "📖",
    icon: BookOpen,
  },
  {
    id: "bncc-ei",
    to: "/escola-brilha/portugues-ei",
    title: "Campos de Experiência",
    subtitle: "Base Nacional (EI)",
    description: "Missões pedagógicas alinhadas à BNCC para a educação infantil.",
    gradient: "from-[#38BDF8] via-[#0EA5E9] to-[#0369A1]",
    glow: "rgba(56,189,248,0.7)",
    emoji: "🧩",
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

        <div className="grid gap-6">
          {MODULOS.map((m, i) => (
            <Link key={m.id} to={m.to as any}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative rounded-[2rem] p-6 border-4 border-white shadow-xl bg-gradient-to-br transition-all group overflow-hidden",
                  m.gradient
                )}
                style={{ boxShadow: `0 10px 0 rgba(0,0,0,0.1), 0 0 30px ${m.glow}` }}
              >
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md grid place-items-center text-4xl shadow-inner group-hover:rotate-6 transition-transform">
                    {m.emoji}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <m.icon className="h-4 w-4 text-white/60" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                        {m.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{m.title}</h3>
                    <p className="text-white/80 text-sm mt-1 max-w-lg">
                      {m.description}
                    </p>
                  </div>

                  <div className="h-12 w-12 rounded-full bg-white/20 grid place-items-center text-white font-black group-hover:bg-white group-hover:text-primary transition-all shadow-lg">
                    ▸
                  </div>
                </div>

                {/* Efeito de brilho ao passar o mouse */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            </Link>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground font-medium py-4">
          Todos os módulos são adaptados automaticamente ao perfil da criança.
        </p>
      </div>
    </Shell>
  );
}
