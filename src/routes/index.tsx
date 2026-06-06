import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { Plus, Sparkles, School, Brain, BookOpen, Gift, Trophy, Users, Star } from "lucide-react";
import KidLiveMascot from "@/components/ui/KidLiveMascot";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { EggHatchCinematic, shouldShowEggHatch } from "@/components/pip/EggHatchCinematic";
import { cn } from "@/utils/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroBrilha Kids — Cidade Mágica" },
      { name: "description", content: "Entre na cidade mágica do Pip e comece sua aventura de aprendizagem." },
    ],
  }),
  component: Index,
});

type Destino = {
  to: string;
  params?: any;
  title: string;
  subtitle: string;
  gradient: string;
  glow: string;
  icon: any;
  building: React.ReactNode;
};

function Index() {
  const { children: allChildren, activeChild, setActiveChild, isLoading, session } = useAppState();
  const navigate = useNavigate();
  const [showEggHatch, setShowEggHatch] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && session && allChildren.length === 0) {
      navigate({ to: "/anamnese/$childId", params: { childId: "nova" }, replace: true });
    }
  }, [isLoading, session, allChildren.length, navigate]);

  useEffect(() => {
    if (activeChild?.id && activeChild.anamnese_completa && shouldShowEggHatch(activeChild.id)) {
      setShowEggHatch(true);
    }
  }, [activeChild?.id, activeChild?.anamnese_completa]);

  const destinos: Destino[] = [
    {
      to: "/escola-brilha",
      title: "Escola Brilha",
      subtitle: "Aulas Mágicas",
      gradient: "from-[#4C9EFF] to-[#1E5FCC]",
      glow: "rgba(76,158,255,0.55)",
      icon: School,
      building: <MagicSchool />,
    },
    {
      to: "/neuro-treino",
      title: "Neuro Treino",
      subtitle: "Centro Cerebral",
      gradient: "from-[#9B6CFF] to-[#5A2DC9]",
      glow: "rgba(155,108,255,0.55)",
      icon: Brain,
      building: <BrainTower />,
    },
    {
      to: "/reforco-brilha",
      title: "Reforço Brilha",
      subtitle: "Professor Particular",
      gradient: "from-[#FF8A4C] to-[#D45A1A]",
      glow: "rgba(255,138,76,0.55)",
      icon: BookOpen,
      building: <StudyHouse />,
    },
    {
      to: "/loja-mascotes",
      title: "Loja do Pip",
      subtitle: "Shopping do Saber",
      gradient: "from-[#FFC93C] to-[#E89B00]",
      glow: "rgba(255,201,60,0.6)",
      icon: Gift,
      building: <Shop />,
    },
    {
      to: "/colecao-pip",
      title: "Conquistas",
      subtitle: "Galeria de Troféus",
      gradient: "from-[#3BD68B] to-[#0E9D5B]",
      glow: "rgba(59,214,139,0.55)",
      icon: Trophy,
      building: <TrophyHall />,
    },
    {
      to: "/painel-pais",
      title: "Área dos Pais",
      subtitle: "Acompanhamento",
      gradient: "from-[#FF6FA8] to-[#C73774]",
      glow: "rgba(255,111,168,0.55)",
      icon: Users,
      building: <FamilyHouse />,
    },
  ];

  return (
    <Shell>
      <AnimatePresence>
        {showEggHatch && activeChild?.id && (
          <EggHatchCinematic childId={activeChild.id} onClose={() => setShowEggHatch(false)} />
        )}
      </AnimatePresence>

      {/* CIDADE MÁGICA */}
      <div className="relative w-full min-h-[88vh] -mt-6 rounded-[3rem] overflow-hidden border-4 border-white shadow-glow"
        style={{
          background:
            "radial-gradient(circle at 50% 110%, #1a3a8c 0%, #0d1f55 45%, #050a2c 100%)",
        }}
      >
        {/* Estrelas */}
        <Stars />
        {/* Aurora */}
        <div className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 20% 10%, rgba(155,108,255,0.35), transparent 50%), radial-gradient(ellipse at 80% 15%, rgba(76,158,255,0.35), transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(255,201,60,0.25), transparent 60%)",
          }}
        />
        {/* Montanhas / horizonte */}
        <svg viewBox="0 0 1200 300" className="absolute bottom-0 left-0 w-full h-[28%] pointer-events-none" preserveAspectRatio="none">
          <path d="M0,300 L0,180 L150,90 L280,170 L420,80 L560,160 L700,70 L860,150 L1000,90 L1200,160 L1200,300 Z" fill="#0a1740" />
          <path d="M0,300 L0,230 L120,170 L260,220 L420,160 L580,210 L740,150 L900,200 L1060,160 L1200,210 L1200,300 Z" fill="#06102e" />
        </svg>

        {/* Header flutuante */}
        <div className="relative z-10 flex items-center justify-between p-6 md:p-10">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-4xl"
            >
              <Star className="text-white h-8 w-8" />
            </motion.div>
            <div>
              <div className="text-white/60 text-xs font-black uppercase tracking-[0.3em]">Bem-vindo à</div>
              <h1 className="text-white text-2xl md:text-4xl font-black leading-none">
                Cidade do <span className="text-[#FFC93C]">Pip</span>
              </h1>
            </div>
          </div>
          {activeChild && (
            <div className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border-2 border-white/20">
              <div className="h-10 w-10 rounded-full bg-white/20 grid place-items-center text-2xl">{activeChild.avatar}</div>
              <div>
                <div className="text-white font-black text-sm">{activeChild.nome}</div>
                <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{activeChild.serie}</div>
              </div>
            </div>
          )}
        </div>

        {/* PIP NO CENTRO */}
        <div className="relative z-20 flex flex-col items-center justify-center mt-0 mb-4 md:mb-12">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Halo */}
            <div className="absolute inset-0 -m-12 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,201,60,0.4), transparent 65%)",
                filter: "blur(20px)",
              }}
            />
            <div className="relative">
              <KidLiveMascot size="xl" emotion="happy" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 bg-white/95 backdrop-blur px-4 py-2 rounded-2xl shadow-xl border-2 border-[#FFC93C] max-w-[280px] md:max-w-md text-center"
          >
            <p className="text-[#0d1f55] font-black text-base md:text-lg leading-tight">
              {activeChild
                ? `Oi ${activeChild.nome}! Pra onde vamos hoje?`
                : "Escolha um aventureiro pra começar!"}
            </p>
          </motion.div>
        </div>

        {/* 6 DESTINOS — CIDADE */}
        <div className="relative z-10 px-4 md:px-10 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 max-w-6xl mx-auto">
            {destinos.map((d, i) => (
              <Link key={d.to} to={d.to} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onHoverStart={() => setHovered(d.to)}
                  onHoverEnd={() => setHovered(null)}
                  className={cn(
                    "relative rounded-[2rem] p-5 md:p-6 cursor-pointer overflow-hidden border-4 border-white/90",
                    "bg-gradient-to-br", d.gradient,
                  )}
                  style={{
                    boxShadow: `0 12px 0 rgba(0,0,0,0.25), 0 0 40px ${d.glow}`,
                  }}
                >
                  {/* sparkle */}
                  <d.icon className="absolute top-3 right-3 text-white/40 w-5 h-5" />
                  {/* construção */}
                  <div className="h-28 md:h-36 flex items-end justify-center mb-3">
                    <motion.div
                      animate={hovered === d.to ? { y: [-2, -6, -2] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-full max-w-[160px]"
                    >
                      {d.building}
                    </motion.div>
                  </div>

                  <div className="relative z-10 bg-white/95 rounded-2xl p-3 text-center">
                    <div className="text-xl md:text-2xl font-black text-[#0d1f55] leading-tight">
                      {d.title}
                    </div>
                    <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#0d1f55]/60 mt-0.5">
                      {d.subtitle}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ESCOLHA DA CRIANÇA */}
      <div className="mt-10">
        <h2 className="text-xl font-black mb-4 uppercase tracking-[0.25em] text-[#0d1f55]/70 flex items-center gap-3">
          <Sparkles className="text-[#FFC93C]" />
          Quem vai brilhar?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allChildren.map((c: any) => (
            <button
              key={c.id}
              onClick={() => setActiveChild(c.id)}
              className={cn(
                "text-left rounded-3xl p-4 border-4 transition-all active:scale-95",
                c.id === activeChild?.id
                  ? "bg-gradient-to-br from-[#4C9EFF] to-[#1E5FCC] border-[#FFC93C] text-white shadow-xl"
                  : "bg-white border-white hover:border-[#4C9EFF]/40 shadow-md",
              )}
              style={c.id === activeChild?.id ? { boxShadow: "0 8px 0 rgba(0,0,0,0.15), 0 0 30px rgba(76,158,255,0.5)" } : {}}
            >
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-white/30 grid place-items-center text-3xl">
                  {c.avatar}
                </div>
                <div className="min-w-0">
                  <div className="font-black truncate">{c.nome}</div>
                  <div className={cn("text-[10px] font-bold uppercase tracking-wider", c.id === activeChild?.id ? "text-white/80" : "text-[#0d1f55]/60")}>
                    {c.idade}a · {c.serie}
                  </div>
                </div>
              </div>
            </button>
          ))}
          <Link
            to="/anamnese/$childId"
            params={{ childId: "nova" }}
            className="rounded-3xl p-4 border-4 border-dashed border-[#4C9EFF]/40 bg-white/60 hover:bg-white hover:border-[#4C9EFF] transition-all flex items-center justify-center gap-2 min-h-[88px]"
          >
            <div className="w-9 h-9 rounded-full bg-[#4C9EFF] text-white grid place-items-center">
              <Plus strokeWidth={3} />
            </div>
            <span className="font-black text-[#0d1f55] uppercase tracking-widest text-xs">Nova Criança</span>
          </Link>
        </div>

        {activeChild && !activeChild.anamnese_completa && (
          <Link to="/anamnese/$childId" params={{ childId: activeChild.id }}>
            <div className="mt-6 rounded-3xl p-5 bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] border-4 border-white shadow-xl flex items-center gap-4 hover:scale-[1.01] transition-transform">
              <div className="text-4xl animate-bounce-gentle">⚠️</div>
              <div className="flex-1">
                <div className="font-black text-[#0d1f55] text-lg leading-tight">
                  Anamnese de {activeChild.nome} pendente
                </div>
                <div className="text-[11px] font-black uppercase tracking-widest text-[#0d1f55]/70">
                  Toque para começar
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </Shell>
  );
}

/* ---------- CONSTRUÇÕES SVG ---------- */


function MagicSchool() {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-2xl">
      <rect x="30" y="60" width="100" height="70" fill="#fff" stroke="#0d1f55" strokeWidth="3" rx="4" />
      <polygon points="80,15 20,60 140,60" fill="#4C9EFF" stroke="#0d1f55" strokeWidth="3" />
      <rect x="70" y="95" width="20" height="35" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2.5" />
      <circle cx="55" cy="85" r="8" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2" />
      <circle cx="105" cy="85" r="8" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2" />
      <path d="M75 35 L85 35 M80 30 L80 40" stroke="#FFC93C" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function BrainTower() {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-2xl">
      <rect x="50" y="50" width="60" height="80" fill="#fff" stroke="#0d1f55" strokeWidth="3" rx="6" />
      <ellipse cx="80" cy="40" rx="35" ry="25" fill="#FF6FA8" stroke="#0d1f55" strokeWidth="3" />
      <path d="M55 40 Q 65 25 80 30 Q 95 25 105 40" fill="none" stroke="#0d1f55" strokeWidth="2.5" />
      <path d="M60 45 Q 80 55 100 45" fill="none" stroke="#0d1f55" strokeWidth="2.5" />
      <rect x="68" y="95" width="24" height="35" fill="#9B6CFF" stroke="#0d1f55" strokeWidth="2.5" />
      <circle cx="62" cy="70" r="5" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2" />
      <circle cx="98" cy="70" r="5" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2" />
    </svg>
  );
}

function StudyHouse() {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-2xl">
      <polygon points="80,20 25,65 135,65" fill="#FF8A4C" stroke="#0d1f55" strokeWidth="3" />
      <rect x="35" y="65" width="90" height="60" fill="#fff" stroke="#0d1f55" strokeWidth="3" />
      <rect x="50" y="80" width="60" height="32" fill="#4C9EFF" stroke="#0d1f55" strokeWidth="2.5" rx="3" />
      <line x1="50" y1="96" x2="110" y2="96" stroke="#fff" strokeWidth="2" />
      <line x1="80" y1="80" x2="80" y2="112" stroke="#fff" strokeWidth="2" />
      <rect x="70" y="115" width="20" height="10" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2" />
    </svg>
  );
}

function Shop() {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-2xl">
      <rect x="25" y="45" width="110" height="80" fill="#fff" stroke="#0d1f55" strokeWidth="3" rx="4" />
      <path d="M25 45 Q 30 30 45 35 Q 55 28 70 35 Q 85 28 100 35 Q 115 28 130 35 Q 140 30 135 45 Z" fill="#FF6FA8" stroke="#0d1f55" strokeWidth="2.5" />
      <rect x="40" y="60" width="35" height="40" fill="#4C9EFF" stroke="#0d1f55" strokeWidth="2.5" rx="3" />
      <rect x="85" y="60" width="35" height="40" fill="#9B6CFF" stroke="#0d1f55" strokeWidth="2.5" rx="3" />
      <circle cx="80" cy="115" r="6" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2" />
    </svg>
  );
}

function TrophyHall() {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-2xl">
      <rect x="25" y="55" width="110" height="70" fill="#fff" stroke="#0d1f55" strokeWidth="3" />
      <polygon points="20,55 80,15 140,55" fill="#3BD68B" stroke="#0d1f55" strokeWidth="3" />
      <path d="M65 70 Q 65 95 80 100 Q 95 95 95 70 Z" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2.5" />
      <rect x="73" y="100" width="14" height="8" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2" />
      <rect x="65" y="108" width="30" height="6" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2" />
      <circle cx="55" cy="80" r="4" fill="#FFC93C" stroke="#0d1f55" strokeWidth="1.5" />
      <circle cx="105" cy="80" r="4" fill="#FFC93C" stroke="#0d1f55" strokeWidth="1.5" />
    </svg>
  );
}

function FamilyHouse() {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-2xl">
      <polygon points="80,18 25,60 135,60" fill="#FF6FA8" stroke="#0d1f55" strokeWidth="3" />
      <rect x="35" y="60" width="90" height="65" fill="#fff" stroke="#0d1f55" strokeWidth="3" />
      <rect x="68" y="85" width="24" height="40" fill="#4C9EFF" stroke="#0d1f55" strokeWidth="2.5" rx="3" />
      <rect x="45" y="72" width="14" height="14" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2" />
      <rect x="101" y="72" width="14" height="14" fill="#FFC93C" stroke="#0d1f55" strokeWidth="2" />
      <path d="M55 60 Q 80 40 105 60" fill="none" stroke="#FF8A4C" strokeWidth="2.5" strokeDasharray="3 3" />
      <text x="80" y="55" textAnchor="middle" fontSize="14" fill="#FFC93C">♥</text>
    </svg>
  );
}

function Stars() {
  const stars = Array.from({ length: 40 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 60,
    s: Math.random() * 2 + 1,
    d: Math.random() * 3,
    id: i,
  }));
  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((st) => (
        <motion.div
          key={st.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.s, height: st.s }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2 + st.d, repeat: Infinity, delay: st.d }}
        />
      ))}
    </div>
  );
}
