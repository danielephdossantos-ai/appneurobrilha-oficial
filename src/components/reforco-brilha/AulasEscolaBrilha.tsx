// Lista todas as aulas do Escola Brilha (1º ao 9º Ano) dentro do Reforço Brilha.
// Clicar em "Começar aula" abre as telas de explicação do Escola Brilha
// (rota /escola-brilha/aula).

import { Link } from "@tanstack/react-router";
import { BookOpen, PlayCircle, GraduationCap } from "lucide-react";
import { STATIC_LESSONS, type StaticLesson } from "@/modules/escola-brilha/data/library";

const SERIES_FUND1 = ["1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano"];
const SERIES_FUND2 = ["6º Ano", "7º Ano", "8º Ano", "9º Ano"];
const ALL_SERIES = [...SERIES_FUND1, ...SERIES_FUND2];

function lessonsBySerie(): Record<string, StaticLesson[]> {
  const pool: StaticLesson[] = [
    ...STATIC_LESSONS.fundamental1,
    ...STATIC_LESSONS.fundamental2,
  ];
  const out: Record<string, StaticLesson[]> = {};
  for (const s of ALL_SERIES) out[s] = [];
  for (const l of pool) {
    if (out[l.serie]) out[l.serie].push(l);
  }
  return out;
}

const SERIE_STYLE: Record<string, { bg: string; border: string; text: string; chip: string }> = {
  "1º Ano": { bg: "from-rose-50 to-pink-50", border: "border-rose-200", text: "text-rose-700", chip: "bg-rose-100" },
  "2º Ano": { bg: "from-amber-50 to-orange-50", border: "border-amber-200", text: "text-amber-700", chip: "bg-amber-100" },
  "3º Ano": { bg: "from-emerald-50 to-teal-50", border: "border-emerald-200", text: "text-emerald-700", chip: "bg-emerald-100" },
  "4º Ano": { bg: "from-sky-50 to-blue-50", border: "border-sky-200", text: "text-sky-700", chip: "bg-sky-100" },
  "5º Ano": { bg: "from-violet-50 to-purple-50", border: "border-violet-200", text: "text-violet-700", chip: "bg-violet-100" },
  "6º Ano": { bg: "from-cyan-50 to-blue-50", border: "border-cyan-200", text: "text-cyan-700", chip: "bg-cyan-100" },
  "7º Ano": { bg: "from-fuchsia-50 to-pink-50", border: "border-fuchsia-200", text: "text-fuchsia-700", chip: "bg-fuchsia-100" },
  "8º Ano": { bg: "from-indigo-50 to-violet-50", border: "border-indigo-200", text: "text-indigo-700", chip: "bg-indigo-100" },
  "9º Ano": { bg: "from-yellow-50 to-amber-50", border: "border-yellow-200", text: "text-yellow-700", chip: "bg-yellow-100" },
};

export function AulasEscolaBrilha() {
  const grouped = lessonsBySerie();
  const totalAulas = Object.values(grouped).reduce((a, b) => a + b.length, 0);

  return (
    <section className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-start justify-between px-1">
        <div>
          <h3 className="text-sm font-black flex items-center gap-2 text-emerald-700 uppercase tracking-wider">
            <GraduationCap className="h-4 w-4" />
            Aulas do Escola Brilha · 1º ao 9º Ano
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {totalAulas} aulas com telas de explicação. Toque em "Começar aula" para abrir.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {ALL_SERIES.map((serie) => {
          const lessons = grouped[serie] ?? [];
          if (!lessons.length) return null;
          const st = SERIE_STYLE[serie];
          return (
            <div
              key={serie}
              className={`rounded-3xl border-2 ${st.border} bg-gradient-to-br ${st.bg} overflow-hidden`}
            >
              <div className={`px-4 py-3 flex items-center gap-2 border-b ${st.border}`}>
                <div className={`h-9 w-9 rounded-xl ${st.chip} grid place-items-center`}>
                  <BookOpen className={`h-4 w-4 ${st.text}`} />
                </div>
                <div>
                  <h4 className={`font-black text-sm ${st.text} uppercase tracking-wider`}>
                    {serie}
                  </h4>
                  <div className="text-[11px] text-muted-foreground">
                    {lessons.length} aula{lessons.length === 1 ? "" : "s"} disponíveis
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3">
                {lessons.map((l) => (
                  <Link
                    key={l.id}
                    to="/escola-brilha/aula"
                    search={{ category: l.id, type: l.type }}
                    className="group block bg-white/80 hover:bg-white border-2 border-white hover:border-primary/40 rounded-2xl p-3 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br ${l.gradient} grid place-items-center text-white shadow`}
                      >
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span
                            className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded ${l.badgeColor}`}
                          >
                            {l.badge}
                          </span>
                          {l.bncc && (
                            <span className="text-[9px] font-bold text-muted-foreground">
                              {l.bncc}
                            </span>
                          )}
                        </div>
                        <div className="font-black text-sm leading-tight text-foreground line-clamp-1">
                          {l.title}
                        </div>
                        <div className="text-[11px] text-muted-foreground line-clamp-1">
                          {l.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs group-hover:bg-primary/90 transition-colors">
                      <PlayCircle className="h-4 w-4" />
                      Começar aula
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
