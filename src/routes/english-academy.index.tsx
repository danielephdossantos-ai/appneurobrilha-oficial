import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Lock, ArrowLeft, Sparkles } from "lucide-react";
import { Shell } from "@/components/Layout";
import { ACADEMIES } from "@/english-academy/data/academies";
import { cn } from "@/utils/utils";

export const Route = createFileRoute("/english-academy/")({
  head: () => ({
    meta: [
      { title: "English Academy — NeuroBrilha Kids" },
      {
        name: "description",
        content:
          "Biblioteca permanente de inglês: verbos, gramática, pronúncia, vocabulário, leitura e muito mais. Reforço para qualquer aluno.",
      },
    ],
  }),
  component: EnglishAcademyIndex,
});

function EnglishAcademyIndex() {
  return (
    <Shell>
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-white/80 text-sm font-black mb-3 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={3} /> Voltar
        </Link>

        {/* Hero */}
        <div
          className="relative rounded-[2rem] overflow-hidden border-[3px] border-white/80 p-5 md:p-8 mb-5"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, #7f1d1d 0%, #450a0a 55%, #1c0505 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 85% 20%, rgba(255,61,104,0.35), transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(59,130,246,0.25), transparent 55%)",
            }}
          />
          <div className="relative z-10 flex items-center gap-4">
            <div className="text-5xl md:text-7xl drop-shadow-lg">🇺🇸</div>
            <div className="flex-1">
              <div className="text-white/60 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                Biblioteca Permanente
              </div>
              <h1 className="text-white text-2xl md:text-4xl font-black leading-tight">
                English <span className="text-[#FFC93C]">Academy</span>
              </h1>
              <p className="text-white/85 text-xs md:text-sm mt-1.5 max-w-2xl">
                Reforço de inglês para qualquer aluno. Escolha uma academia e estude no seu ritmo — verbos, gramática, pronúncia, vocabulário e muito mais.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3 px-1">
          <Sparkles className="h-4 w-4 text-[#FFC93C]" />
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/70">
            14 Academias
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {ACADEMIES.map((a, i) => {
            const isOpen = a.status === "aberta";
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i, type: "spring", stiffness: 220 }}
                whileHover={isOpen ? { y: -4, scale: 1.03 } : {}}
                whileTap={isOpen ? { scale: 0.97 } : {}}
                className={cn(
                  "relative rounded-[1.6rem] overflow-hidden border-[3px] cursor-pointer bg-gradient-to-br p-4 min-h-[180px] flex flex-col",
                  a.gradient,
                  isOpen ? "border-white/85" : "border-white/30 opacity-70 grayscale-[40%]",
                )}
                style={{
                  boxShadow: isOpen
                    ? `0 6px 0 rgba(0,0,0,0.25), 0 0 22px ${a.glow}`
                    : `0 4px 0 rgba(0,0,0,0.2)`,
                }}
              >
                <div className="text-4xl md:text-5xl mb-2 drop-shadow-lg">{a.emoji}</div>
                <div className="text-white font-black text-sm md:text-base leading-tight">
                  {a.title}
                </div>
                <div className="text-white/80 text-[10px] md:text-xs font-black uppercase tracking-wider mt-0.5">
                  {a.subtitle}
                </div>
                <div className="mt-auto pt-2">
                  {isOpen ? (
                    <div className="inline-flex items-center gap-1 bg-white/95 text-[#7F1D1D] px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                      ✨ Começar
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1 bg-black/40 text-white/80 px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                      <Lock className="h-3 w-3" strokeWidth={3} /> Em breve
                    </div>
                  )}
                </div>
              </motion.div>
            );

            if (!isOpen) return <div key={a.slug}>{card}</div>;
            return (
              <Link key={a.slug} to="/english-academy/$academy" params={{ academy: a.slug }}>
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}
