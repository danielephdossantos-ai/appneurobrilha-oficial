import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { Plus, Sparkles } from "lucide-react";
import KidLiveMascot from "@/components/ui/KidLiveMascot";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { EggHatchCinematic, shouldShowEggHatch } from "@/components/pip/EggHatchCinematic";
import { cn } from "@/utils/utils";
import { LembretesDiarios } from "@/components/reforco-brilha/LembretesDiarios";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroBrilha Kids — Cidade Mágica" },
      {
        name: "description",
        content: "Entre na cidade mágica do Pip e comece sua aventura de aprendizagem.",
      },
    ],
  }),
  component: Index,
});

type Destino = {
  to: string;
  title: string;
  subtitle: string;
  gradient: string;
  glow: string;
  emoji: string;
  shine: string;
};

const DESTINOS_KIDS: Destino[] = [
  {
    to: "/neuro-treino",
    title: "Neuro Treino",
    subtitle: "Centro Cerebral",
    gradient: "from-[#A855F7] via-[#9B6CFF] to-[#5A2DC9]",
    glow: "rgba(155,108,255,0.7)",
    emoji: "🧠",
    shine: "rgba(255,255,255,0.12)",
  },
  {
    to: "/reforco-brilha",
    title: "Reforço Brilha",
    subtitle: "Professor Particular",
    gradient: "from-[#FF8C4B] via-[#FF6B2B] to-[#D44A0A]",
    glow: "rgba(255,107,43,0.7)",
    emoji: "✨",
    shine: "rgba(255,255,255,0.12)",
  },
  {
    to: "/missao-prova",
    title: "Missão Prova",
    subtitle: "Desafios Épicos",
    gradient: "from-[#F43F5E] via-[#E11D48] to-[#9F1239]",
    glow: "rgba(244,63,94,0.7)",
    emoji: "🎯",
    shine: "rgba(255,255,255,0.12)",
  },
  {
    to: "/missao-trabalho",
    title: "Missão Trabalho",
    subtitle: "Trabalho Escolar Brilha",
    gradient: "from-[#F59E0B] via-[#D97706] to-[#92400E]",
    glow: "rgba(245,158,11,0.7)",
    emoji: "📝",
    shine: "rgba(255,255,255,0.12)",
  },
  {
    to: "/brilha-vida",
    title: "Brilha Vida",
    subtitle: "Bem-Estar e Saúde",
    gradient: "from-[#22C55E] via-[#16A34A] to-[#15803D]",
    glow: "rgba(34,197,94,0.7)",
    emoji: "💚",
    shine: "rgba(255,255,255,0.15)",
  },
  {
    to: "/rotina",
    title: "Rotina",
    subtitle: "Organize o Dia",
    gradient: "from-[#14B8A6] via-[#0D9488] to-[#0F766E]",
    glow: "rgba(20,184,166,0.7)",
    emoji: "⏰",
    shine: "rgba(255,255,255,0.12)",
  },
  {
    to: "/loja-mascotes",
    title: "Loja do Pip",
    subtitle: "Shopping do Saber",
    gradient: "from-[#FFC93C] via-[#F59E0B] to-[#D97706]",
    glow: "rgba(255,201,60,0.7)",
    emoji: "🛍️",
    shine: "rgba(255,255,255,0.18)",
  },
  {
    to: "/colecao-pip",
    title: "Conquistas",
    subtitle: "Galeria de Troféus",
    gradient: "from-[#3BD68B] via-[#22C55E] to-[#0E9D5B]",
    glow: "rgba(59,214,139,0.7)",
    emoji: "🏆",
    shine: "rgba(255,255,255,0.15)",
  },
  {
    to: "/painel-pais",
    title: "Área dos Pais",
    subtitle: "Acompanhamento",
    gradient: "from-[#FF6FA8] via-[#EC4899] to-[#C73774]",
    glow: "rgba(255,111,168,0.7)",
    emoji: "👨‍👩‍👧",
    shine: "rgba(255,255,255,0.12)",
  },
];

function Index() {
  const { children: allChildren, activeChild, setActiveChild, isLoading, session } = useAppState();
  const navigate = useNavigate();
  const [showEggHatch, setShowEggHatch] = useState(false);

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

  return (
    <Shell>
      <AnimatePresence>
        {showEggHatch && activeChild?.id && (
          <EggHatchCinematic
            childId={activeChild.id}
            childName={activeChild.nome}
            onClose={() => setShowEggHatch(false)}
          />
        )}
      </AnimatePresence>

      {/* ═══════════════ MOBILE ═══════════════ */}
      <div className="md:hidden flex flex-col gap-3 -mt-2">
        {/* Hero compacto */}
        <div
          className="relative rounded-[2rem] overflow-hidden border-[3px] border-white/80 px-4 pt-3 pb-3"
          style={{
            background:
              "radial-gradient(ellipse at 30% 80%, #1a3a8c 0%, #0d1f55 55%, #050a2c 100%)",
          }}
        >
          <Stars />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 15% 20%, rgba(155,108,255,0.3) 0%, transparent 55%), radial-gradient(ellipse at 85% 25%, rgba(76,158,255,0.3) 0%, transparent 55%)",
            }}
          />
          <div className="relative z-10 flex items-center gap-3">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="shrink-0 relative"
            >
              <div
                className="absolute inset-0 -m-4 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255,201,60,0.55), transparent 70%)",
                  filter: "blur(10px)",
                }}
              />
              <KidLiveMascot size="sm" emotion="happy" className="relative" />
            </motion.div>

            <div className="flex-1 min-w-0">
              <div className="text-white/55 text-[9px] font-black uppercase tracking-[0.3em]">
                Bem-vindo à
              </div>
              <h1 className="text-white text-lg font-black leading-tight">
                Cidade do <span className="text-[#FFC93C]">Pip</span> ✨
              </h1>
              <div className="mt-1.5 inline-flex bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-xl border border-[#FFC93C]/70 shadow-sm">
                <p className="text-[#0d1f55] font-black text-[11px] leading-tight">
                  {activeChild
                    ? `Oi ${activeChild.nome}! Por onde vamos? 🚀`
                    : "Escolha um aventureiro! ✨"}
                </p>
              </div>
            </div>

            {activeChild && (
              <div className="shrink-0 h-11 w-11 rounded-2xl bg-white/15 border-2 border-white/35 grid place-items-center text-2xl shadow-inner">
                {activeChild.avatar}
              </div>
            )}
          </div>
        </div>

        {/* Seletor de criança — chips */}
        {allChildren.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap px-0.5">
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0d1f55]/50 mr-1">
              Quem?
            </span>
            {allChildren.map((c: any) => (
              <button
                key={c.id}
                onClick={() => setActiveChild(c.id)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-2.5 py-1 border-2 transition-all active:scale-95 text-xs font-black",
                  c.id === activeChild?.id
                    ? "bg-[#0d1f55] border-[#FFC93C] text-white shadow-md"
                    : "bg-white border-white/80 text-[#0d1f55] shadow-sm",
                )}
              >
                <span className="text-sm">{c.avatar}</span>
                <span>{c.nome}</span>
              </button>
            ))}
            <Link
              to="/anamnese/$childId"
              params={{ childId: "nova" }}
              className="flex items-center gap-1 rounded-full px-2.5 py-1 border-2 border-dashed border-[#4C9EFF]/50 bg-white/60 active:scale-95 transition-all text-xs font-black text-[#4C9EFF]"
            >
              <Plus className="h-3 w-3" strokeWidth={3} />
              Nova
            </Link>
          </div>
        )}

        {/* Alerta anamnese */}
        {activeChild && !activeChild.anamnese_completa && (
          <Link to="/anamnese/$childId" params={{ childId: activeChild.id }}>
            <div className="rounded-2xl p-3 bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] border-[3px] border-white shadow-lg flex items-center gap-2.5 active:scale-[0.98] transition-transform">
              <span className="text-2xl">⚠️</span>
              <div>
                <div className="font-black text-[#0d1f55] text-xs leading-tight">
                  Anamnese de {activeChild.nome} pendente
                </div>
                <div className="text-[9px] font-black uppercase tracking-widest text-[#0d1f55]/65">
                  Toque para começar
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Lembretes de provas e trabalhos — clicáveis */}
        {activeChild && <LembretesDiarios childId={activeChild.id} />}

        {/* Grade completa — todas as 12 categorias */}
        <div>
          <div className="flex items-center gap-2 mb-2 px-0.5">
            <Sparkles className="h-3.5 w-3.5 text-[#FFC93C]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0d1f55]/55">
              Explorar Cidade
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {DESTINOS_KIDS.map((d, i) => (
              <Link key={d.to} to={d.to}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.04 * i, type: "spring", stiffness: 240, damping: 18 }}
                  whileTap={{ scale: 0.93 }}
                  className={cn(
                    "relative rounded-[1.4rem] overflow-hidden border-[2.5px] border-white/85 cursor-pointer bg-gradient-to-br",
                    d.gradient,
                  )}
                  style={{ boxShadow: `0 5px 0 rgba(0,0,0,0.2), 0 0 18px ${d.glow}` }}
                >
                  {/* Brilho interno */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 40% 20%, ${d.shine}, transparent 65%)`,
                    }}
                  />

                  {/* Emoji grande */}
                  <div className="flex items-center justify-center pt-3 pb-1">
                    <span className="text-4xl drop-shadow-lg select-none" role="img">
                      {d.emoji}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="mx-1.5 mb-1.5 bg-white/92 backdrop-blur-sm rounded-xl px-1.5 py-1.5 text-center">
                    <div className="text-[10px] font-black text-[#0d1f55] leading-tight">
                      {d.title}
                    </div>
                    <div className="text-[7px] font-black uppercase tracking-wide text-[#0d1f55]/50 mt-0.5 leading-tight">
                      {d.subtitle}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ DESKTOP ═══════════════ */}
      <div className="hidden md:block">
        <div
          className="relative w-full min-h-[80vh] -mt-6 rounded-[3rem] overflow-hidden border-4 border-white shadow-glow"
          style={{
            background:
              "radial-gradient(circle at 50% 110%, #1a3a8c 0%, #0d1f55 45%, #050a2c 100%)",
          }}
        >
          <Stars />
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at 20% 10%, rgba(155,108,255,0.35), transparent 50%), radial-gradient(ellipse at 80% 15%, rgba(76,158,255,0.35), transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(255,201,60,0.25), transparent 60%)",
            }}
          />
          <svg
            viewBox="0 0 1200 200"
            className="absolute bottom-0 left-0 w-full h-[18%] pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 L0,120 L150,60 L280,110 L420,50 L560,100 L700,40 L860,90 L1000,55 L1200,100 L1200,200 Z"
              fill="#0a1740"
            />
            <path
              d="M0,200 L0,150 L120,110 L260,145 L420,100 L580,140 L740,95 L900,135 L1060,105 L1200,140 L1200,200 Z"
              fill="#06102e"
            />
          </svg>

          {/* Header desktop */}
          <div className="relative z-10 flex items-center justify-between p-8 pb-0">
            <div className="flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-3xl"
              >
                ⭐
              </motion.span>
              <div>
                <div className="text-white/55 text-xs font-black uppercase tracking-[0.3em]">
                  Bem-vindo à
                </div>
                <h1 className="text-white text-3xl md:text-4xl font-black leading-none">
                  Cidade do <span className="text-[#FFC93C]">Pip</span>
                </h1>
              </div>
            </div>
            {activeChild && (
              <div className="flex items-center gap-3 bg-white/12 backdrop-blur-md px-5 py-3 rounded-full border-2 border-white/20">
                <div className="h-10 w-10 rounded-full bg-white/20 grid place-items-center text-2xl">
                  {activeChild.avatar}
                </div>
                <div>
                  <div className="text-white font-black text-sm">{activeChild.nome}</div>
                  <div className="text-white/55 text-[10px] font-bold uppercase tracking-widest">
                    {activeChild.serie}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pip desktop */}
          <div className="relative z-20 flex flex-col items-center mt-2 mb-6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div
                className="absolute inset-0 -m-10 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255,201,60,0.4), transparent 65%)",
                  filter: "blur(18px)",
                }}
              />
              <KidLiveMascot size="xl" emotion="happy" className="relative" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-2 bg-white/95 backdrop-blur px-5 py-2.5 rounded-2xl shadow-xl border-2 border-[#FFC93C] max-w-md text-center"
            >
              <p className="text-[#0d1f55] font-black text-lg leading-tight">
                {activeChild
                  ? `Oi ${activeChild.nome}! Pra onde vamos hoje? 🚀`
                  : "Escolha um aventureiro pra começar! ✨"}
              </p>
            </motion.div>
          </div>

          {/* Grade 4×3 desktop — todas as 12 */}
          <div className="relative z-10 px-8 pb-10">
            <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">
              {DESTINOS_KIDS.map((d, i) => (
                <Link key={d.to} to={d.to} className="group">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, type: "spring", stiffness: 120 }}
                    whileHover={{ y: -6, scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className={cn(
                      "relative rounded-[1.8rem] overflow-hidden border-[3px] border-white/88 cursor-pointer bg-gradient-to-br",
                      d.gradient,
                    )}
                    style={{ boxShadow: `0 8px 0 rgba(0,0,0,0.22), 0 0 28px ${d.glow}` }}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 40% 20%, ${d.shine}, transparent 65%)`,
                      }}
                    />
                    <div className="flex flex-col items-center px-3 pt-5 pb-1">
                      <span className="text-5xl drop-shadow-xl select-none mb-2" role="img">
                        {d.emoji}
                      </span>
                    </div>
                    <div className="mx-2 mb-2 bg-white/93 rounded-2xl px-2 py-2.5 text-center">
                      <div className="text-sm font-black text-[#0d1f55] leading-tight">
                        {d.title}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-[#0d1f55]/55 mt-0.5">
                        {d.subtitle}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Seletor desktop */}
        <div className="mt-8">
          <h2 className="text-lg font-black mb-3 uppercase tracking-[0.25em] text-[#0d1f55]/60 flex items-center gap-2">
            <Sparkles className="text-[#FFC93C] h-5 w-5" /> Quem vai brilhar hoje?
          </h2>
          <div className="flex flex-wrap gap-3">
            {allChildren.map((c: any) => (
              <button
                key={c.id}
                onClick={() => setActiveChild(c.id)}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 border-4 transition-all hover:scale-[1.02] active:scale-95",
                  c.id === activeChild?.id
                    ? "bg-gradient-to-br from-[#4C9EFF] to-[#1E5FCC] border-[#FFC93C] text-white shadow-xl"
                    : "bg-white border-white hover:border-[#4C9EFF]/40 shadow-md",
                )}
                style={
                  c.id === activeChild?.id
                    ? { boxShadow: "0 6px 0 rgba(0,0,0,0.12), 0 0 24px rgba(76,158,255,0.45)" }
                    : {}
                }
              >
                <div className="h-12 w-12 rounded-2xl bg-white/25 grid place-items-center text-2xl">
                  {c.avatar}
                </div>
                <div className="text-left">
                  <div className="font-black">{c.nome}</div>
                  <div
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider",
                      c.id === activeChild?.id ? "text-white/70" : "text-[#0d1f55]/55",
                    )}
                  >
                    {c.idade}a · {c.serie}
                  </div>
                </div>
              </button>
            ))}
            <Link
              to="/anamnese/$childId"
              params={{ childId: "nova" }}
              className="flex items-center gap-2 rounded-2xl px-4 py-3 border-4 border-dashed border-[#4C9EFF]/40 bg-white/60 hover:bg-white hover:border-[#4C9EFF] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#4C9EFF] text-white grid place-items-center">
                <Plus strokeWidth={3} className="h-5 w-5" />
              </div>
              <span className="font-black text-[#0d1f55] uppercase tracking-wider text-xs">
                Nova Criança
              </span>
            </Link>
          </div>

          {activeChild && !activeChild.anamnese_completa && (
            <Link to="/anamnese/$childId" params={{ childId: activeChild.id }}>
              <div className="mt-5 rounded-3xl p-5 bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] border-4 border-white shadow-xl flex items-center gap-4 hover:scale-[1.01] transition-transform">
                <span className="text-4xl">⚠️</span>
                <div>
                  <div className="font-black text-[#0d1f55] text-lg leading-tight">
                    Anamnese de {activeChild.nome} pendente
                  </div>
                  <div className="text-[11px] font-black uppercase tracking-widest text-[#0d1f55]/65">
                    Toque para começar
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </Shell>
  );
}

function Stars() {
  const stars = Array.from({ length: 36 }, (_, i) => ({
    x: (i * 41 + 13) % 100,
    y: (i * 27 + 5) % 65,
    s: (i % 3) + 1,
    d: (i % 5) * 0.55,
    id: i,
  }));
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((st) => (
        <motion.div
          key={st.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.s, height: st.s }}
          animate={{ opacity: [0.15, 0.9, 0.15] }}
          transition={{ duration: 2.5 + st.d, repeat: Infinity, delay: st.d }}
        />
      ))}
    </div>
  );
}
