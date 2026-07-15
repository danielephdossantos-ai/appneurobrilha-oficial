import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Lock, ArrowLeft, Sparkles } from "lucide-react";
import { Shell } from "@/components/Layout";
import { ACADEMIES, LEVELS } from "@/english-academy/data/academies";
import { cn } from "@/utils/utils";

export const Route = createFileRoute("/english-academy/")({
  head: () => ({
    meta: [
      { title: "English Academy — 5 Níveis, 25 Academias" },
      {
        name: "description",
        content:
          "Do Starter ao Intermediate. 25 academias organizadas em 5 níveis: alfabeto, números, gramática, vocabulário, conversação, viagens, negócios e muito mais.",
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
          className="relative rounded-[2rem] overflow-hidden border-[3px] border-white/80 p-5 md:p-8 mb-6"
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
          <div className="relative z-10">
            <div className="text-white/60 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              Biblioteca Permanente
            </div>
            <h1 className="text-white text-3xl md:text-5xl font-black leading-tight">
              English <span className="text-[#FFC93C]">Academy</span>
            </h1>
            <p className="text-white/85 text-xs md:text-sm mt-2 max-w-2xl">
              5 níveis · 25 academias · aulas com história, áudio, jogo e missão final.
              Reforço permanente para qualquer aluno estudar no seu ritmo.
            </p>
          </div>
        </div>

        {LEVELS.map((lv, li) => {
          const academiesOfLevel = ACADEMIES.filter((a) => a.level === lv.id);
          return (
            <section key={lv.id} className="mb-8">
              <div className="flex items-center gap-3 mb-3 px-1">
                <div
                  className={cn(
                    "shrink-0 h-9 px-3 rounded-full flex items-center gap-2 bg-gradient-to-br border-2 border-white/70",
                    lv.gradient,
                  )}
                  style={{ boxShadow: `0 0 18px ${lv.glow}` }}
                >
                  <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  <span className="text-white text-[11px] font-black uppercase tracking-[0.25em]">
                    {lv.cefr}
                  </span>
                </div>
                <div>
                  <div className="text-white font-black text-base md:text-lg leading-none">
                    {lv.title}
                  </div>
                  <div className="text-white/60 text-[11px] font-bold uppercase tracking-wider">
                    {lv.subtitle}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {academiesOfLevel.map((a, i) => {
                  const isOpen = a.status === "aberta";
                  const card = (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * (li + i), type: "spring", stiffness: 220 }}
                      whileHover={isOpen ? { y: -3, scale: 1.02 } : {}}
                      whileTap={isOpen ? { scale: 0.97 } : {}}
                      className={cn(
                        "relative rounded-2xl overflow-hidden border-[3px] bg-gradient-to-br p-3 min-h-[132px] flex flex-col",
                        a.gradient,
                        isOpen ? "border-white/85 cursor-pointer" : "border-white/25 opacity-70 grayscale-[40%]",
                      )}
                      style={{
                        boxShadow: isOpen
                          ? `0 4px 0 rgba(0,0,0,0.25), 0 0 18px ${a.glow}`
                          : `0 3px 0 rgba(0,0,0,0.2)`,
                      }}
                    >
                      <div className="text-white font-black text-sm leading-tight">
                        {a.title}
                      </div>
                      <div className="text-white/80 text-[10px] font-black uppercase tracking-wider mt-0.5">
                        {a.subtitle}
                      </div>
                      <div className="mt-auto pt-2">
                        {isOpen ? (
                          <div className="inline-flex items-center gap-1 bg-white/95 text-[#7F1D1D] px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                            Começar
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
            </section>
          );
        })}
      </div>
    </Shell>
  );
}
