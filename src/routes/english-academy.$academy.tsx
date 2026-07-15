import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Volume2 } from "lucide-react";
import { Shell } from "@/components/Layout";
import { ACADEMIES } from "@/english-academy/data/academies";
import { VERBS } from "@/english-academy/data/verbs";
import { speakEnglish } from "@/lib/native-tts-en";

export const Route = createFileRoute("/english-academy/$academy")({
  loader: ({ params }) => {
    const academy = ACADEMIES.find((a) => a.slug === params.academy);
    if (!academy || academy.status !== "aberta") throw notFound();
    return { academy };
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
        <div className="text-6xl mb-3">🔒</div>
        <h1 className="text-white text-2xl font-black mb-2">Academia indisponível</h1>
        <p className="text-white/70 mb-4">Esta academia ainda não foi aberta.</p>
        <Link to="/english-academy" className="text-[#FFC93C] font-black">← Voltar para a English Academy</Link>
      </div>
    </Shell>
  );
}

function AcademyPage() {
  const { academy } = Route.useLoaderData();

  // Currently only Verb Academy has content
  if (academy.slug !== "verbs") return <NotFound />;

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
          className="relative rounded-[2rem] overflow-hidden border-[3px] border-white/80 p-5 md:p-7 mb-5"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, #7f1d1d 0%, #450a0a 55%, #1c0505 100%)",
          }}
        >
          <div className="relative z-10 flex items-center gap-4">
            <div className="text-5xl md:text-6xl drop-shadow-lg">{academy.emoji}</div>
            <div className="flex-1">
              <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">
                Academia
              </div>
              <h1 className="text-white text-2xl md:text-3xl font-black leading-tight">
                {academy.title}
              </h1>
              <p className="text-white/85 text-xs md:text-sm mt-1.5">{academy.descricao}</p>
            </div>
          </div>
        </div>

        <div className="mb-3 px-1">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/70">
            {VERBS.length} verbos essenciais
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {VERBS.map((v, i) => (
            <motion.div
              key={v.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.03 * i }}
            >
              <div className="relative bg-gradient-to-br from-white/8 to-white/2 border-2 border-white/15 rounded-2xl p-4 hover:border-[#FFC93C]/60 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{v.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <div className="text-white font-black text-xl leading-none">{v.base}</div>
                      <div className="text-white/50 text-xs font-mono">{v.ipa}</div>
                    </div>
                    <div className="text-white/80 text-sm font-bold mt-0.5">{v.pt}</div>
                    <div className="text-white/50 text-[10px] uppercase tracking-wider font-black mt-1">
                      {v.tipo}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      speakEnglish(v.base);
                    }}
                    aria-label={`Ouvir ${v.base}`}
                    className="shrink-0 h-10 w-10 rounded-full bg-[#FFC93C] hover:bg-[#FFD966] text-[#0d1f55] grid place-items-center transition-transform active:scale-90"
                  >
                    <Volume2 className="h-5 w-5" strokeWidth={3} />
                  </button>
                </div>
                <Link
                  to="/english-academy/verbs/$verb"
                  params={{ verb: v.slug }}
                  className="mt-3 inline-flex items-center gap-1.5 bg-white/95 text-[#7F1D1D] px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-white"
                >
                  <Play className="h-3.5 w-3.5" strokeWidth={3} /> Estudar
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Shell>
  );
}
