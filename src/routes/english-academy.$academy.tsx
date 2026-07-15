import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Lock } from "lucide-react";
import { Shell } from "@/components/Layout";
import { ACADEMIES, LEVELS } from "@/english-academy/data/academies";
import { NUMBERS_1_10_LESSON } from "@/english-academy/data/numbers";
import { cn } from "@/utils/utils";

type LessonEntry = {
  slug: string;
  title: string;
  descricao: string;
  status: "aberta" | "em-breve";
};

// Índice de aulas por academia. Só a Numbers Academy tem aula funcional.
const LESSONS_BY_ACADEMY: Record<string, LessonEntry[]> = {
  numbers: [
    { slug: NUMBERS_1_10_LESSON.slug, title: NUMBERS_1_10_LESSON.title, descricao: NUMBERS_1_10_LESSON.descricao, status: "aberta" },
    { slug: "11-20",     title: "Numbers 11–20",       descricao: "Onze a vinte, com pronúncia e jogos.",           status: "em-breve" },
    { slug: "21-100",    title: "Numbers 21–100",      descricao: "Contar em dezenas até cem.",                     status: "em-breve" },
    { slug: "ordinals",  title: "Ordinal Numbers",     descricao: "First, second, third… posições e datas.",        status: "em-breve" },
    { slug: "money",     title: "Money & Prices",      descricao: "Dólares, centavos, preços e troco.",             status: "em-breve" },
    { slug: "time",      title: "Telling the Time",    descricao: "Horas, minutos e agenda do dia.",                status: "em-breve" },
  ],
};

export const Route = createFileRoute("/english-academy/$academy")({
  loader: ({ params }) => {
    const academy = ACADEMIES.find((a) => a.slug === params.academy);
    if (!academy || academy.status !== "aberta") throw notFound();
    const level = LEVELS.find((l) => l.id === academy.level)!;
    const lessons = LESSONS_BY_ACADEMY[academy.slug] ?? [];
    return { academy, level, lessons };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.academy.title ?? "Academy"} — English Academy` },
      { name: "description", content: loaderData?.academy.descricao ?? "" },
    ],
  }),
  notFoundComponent: NotFound,
  errorComponent: NotFound,
  component: AcademyPage,
});

function NotFound() {
  return (
    <Shell>
      <div className="max-w-md mx-auto text-center py-12">
        <div className="text-white text-2xl font-black mb-2">Academia indisponível</div>
        <p className="text-white/70 mb-4">Esta academia ainda não foi aberta.</p>
        <Link to="/english-academy" className="text-[#FFC93C] font-black">← Voltar para a English Academy</Link>
      </div>
    </Shell>
  );
}

function AcademyPage() {
  const { academy, level, lessons } = Route.useLoaderData();

  return (
    <Shell>
      <div className="max-w-5xl mx-auto">
        <Link
          to="/english-academy"
          className="inline-flex items-center gap-1.5 text-white/80 text-sm font-black mb-3 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={3} /> English Academy
        </Link>

        <div
          className={cn(
            "relative rounded-[2rem] overflow-hidden border-[3px] border-white/80 p-5 md:p-7 mb-5 bg-gradient-to-br",
            academy.gradient,
          )}
          style={{ boxShadow: `0 0 32px ${academy.glow}` }}
        >
          <div className="relative z-10">
            <div className="text-white/70 text-[10px] font-black uppercase tracking-[0.3em]">
              {level.cefr} · {level.title}
            </div>
            <h1 className="text-white text-2xl md:text-3xl font-black leading-tight">
              {academy.title}
            </h1>
            <p className="text-white/85 text-xs md:text-sm mt-1.5">{academy.descricao}</p>
          </div>
        </div>

        <div className="mb-3 px-1">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/70">
            {lessons.length} aulas nesta academia
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {lessons.map((l, i) => {
            const isOpen = l.status === "aberta";
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * i }}
                className={cn(
                  "relative bg-gradient-to-br from-white/8 to-white/2 border-2 rounded-2xl p-4 transition-colors",
                  isOpen ? "border-white/25 hover:border-[#FFC93C]/70 cursor-pointer" : "border-white/10 opacity-70",
                )}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-black text-lg leading-tight">{l.title}</div>
                    <div className="text-white/70 text-xs mt-1">{l.descricao}</div>
                  </div>
                  {isOpen ? (
                    <div className="shrink-0 inline-flex items-center gap-1 bg-[#FFC93C] text-[#0d1f55] px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider">
                      <Play className="h-3.5 w-3.5" strokeWidth={3} /> Estudar
                    </div>
                  ) : (
                    <div className="shrink-0 inline-flex items-center gap-1 bg-black/40 text-white/80 px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider">
                      <Lock className="h-3.5 w-3.5" strokeWidth={3} /> Em breve
                    </div>
                  )}
                </div>
              </motion.div>
            );

            if (!isOpen || academy.slug !== "numbers") return <div key={l.slug}>{card}</div>;
            return (
              <Link
                key={l.slug}
                to="/english-academy/numbers/$lesson"
                params={{ lesson: l.slug }}
              >
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}
