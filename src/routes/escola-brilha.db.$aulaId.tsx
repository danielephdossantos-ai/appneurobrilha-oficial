import React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAulaBnccById } from "../modules/escola-brilha/hooks/useAulasBncc";
import { EarlyChildhoodPlayer } from "../modules/escola-brilha/views/EarlyChildhoodPlayer";
import { ActivityPlayer } from "../modules/escola-brilha/views/ActivityPlayer";
import { ActivityPlayerC } from "../modules/escola-brilha/views/ActivityPlayerC";
import { KidsLessonPlayer } from "../modules/escola-brilha/views/KidsLessonPlayer";
import { normalizeLessonC } from "../modules/escola-brilha/utils/normalizeLessonC";
import { getKidsLessons } from "../modules/escola-brilha/data/kids-lessons-1ano";
import { getActivityLesson3a5 } from "../modules/escola-brilha/data/activity-lessons-3ano-mat";
import type { KidsLesson } from "../modules/escola-brilha/types/kids-lesson";
import { NextLessonCTA } from "../modules/escola-brilha/components/NextLessonCTA";

const KIDS_GRADES = new Set(["1º Ano", "2º Ano", "1º ao 2º Ano"]);
const AL_GRADES = new Set(["3º Ano", "4º Ano", "5º Ano"]);

export const Route = createFileRoute("/escola-brilha/db/$aulaId")({
  component: AulaDbPage,
});

class PlayerBoundary extends React.Component<
  { onBack: () => void; children: React.ReactNode },
  { err: Error | null }
> {
  state = { err: null as Error | null };
  static getDerivedStateFromError(err: Error) {
    return { err };
  }
  componentDidCatch(err: Error) {
    console.error("[escola-brilha db] player crashed:", err);
  }
  render() {
    if (this.state.err) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-4 p-6 text-center">
          <p className="text-xl font-black">Esta aula está em manutenção</p>
          <p className="text-sm text-white/70 max-w-sm">
            O conteúdo desta aula precisa ser atualizado. Tente outra aula
            enquanto isso!
          </p>
          <button
            onClick={this.props.onBack}
            className="px-5 py-2 rounded-xl bg-white text-slate-900 font-bold"
          >
            Voltar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function AulaDbPage() {
  const { aulaId } = Route.useParams();
  const [levelIdx, setLevelIdx] = React.useState<number | null>(null);
  const navigate = useNavigate();
  const { aula, loading, error } = useAulaBnccById(aulaId);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p className="text-lg font-bold">Carregando aula…</p>
      </div>
    );
  }

  if (error || !aula) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-4 p-6">
        <p className="text-xl font-black">Aula não encontrada</p>
        {error && <p className="text-sm text-red-300">{error}</p>}
        <button
          onClick={() => navigate({ to: "/escola-brilha" })}
          className="px-5 py-2 rounded-xl bg-white text-slate-900 font-bold"
        >
          Voltar
        </button>
      </div>
    );
  }

  const back = () => navigate({ to: "/escola-brilha" });
  const hasKidsLesson = KIDS_GRADES.has(aula.serie) && getKidsLessons(aula.codigo_bncc).length > 0;

  const renderPlayer = () => {
    const ref = { kind: "db" as const, id: aulaId };

    // 1º–3º Ano: se houver conteúdo Kids para o código, usa o player visual.
    if (KIDS_GRADES.has(aula.serie)) {
      const kidsList = getKidsLessons(aula.codigo_bncc);
      if (kidsList.length > 1 && levelIdx === null) {
        return <LevelPicker lessons={kidsList} onPick={setLevelIdx} onBack={back} />;
      }
      if (kidsList.length > 0) {
        const chosen = kidsList[levelIdx ?? 0];
        return <KidsLessonPlayer lesson={chosen} currentRef={ref} />;
      }
    }

    // 3º–5º Ano: sempre passa pelo ActivityPlayer com conteúdo 3-5 ano.
    // Existe um gerador universal de fallback que garante padrão pedagógico
    // correto (nunca usar conteúdo padrão 6º–9º Ano nessas séries).
    if (AL_GRADES.has(aula.serie)) {
      const al = getActivityLesson3a5(aula.codigo_bncc, aula.titulo);
      if (al) {
        return <ActivityPlayer lesson={al} currentRef={ref} />;
      }
    }




    switch (aula.tipo_player) {
      case "early":
        return <EarlyChildhoodPlayer lesson={aula.payload} />;
      case "b":
        return <ActivityPlayer lesson={aula.payload} currentRef={ref} />;
      case "c":
        return <ActivityPlayerC lesson={normalizeLessonC(aula)} currentRef={ref} />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
            <p>Player "{aula.tipo_player}" ainda não disponível no banco.</p>
          </div>
        );
    }
  };

  return (
    <PlayerBoundary onBack={back}>
      {renderPlayer()}
      {!hasKidsLesson && <NextLessonCTA current={{ kind: "db", id: aulaId }} />}
    </PlayerBoundary>
  );
}

function LevelPicker({
  lessons,
  onPick,
  onBack,
}: {
  lessons: KidsLesson[];
  onPick: (idx: number) => void;
  onBack: () => void;
}) {
  const palette: Record<string, string> = {
    blue: "from-sky-500 to-indigo-600",
    green: "from-emerald-500 to-teal-600",
    violet: "from-violet-500 to-fuchsia-600",
    amber: "from-amber-500 to-orange-600",
    pink: "from-pink-500 to-rose-600",
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-indigo-50 text-slate-900 p-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="mb-4 px-4 py-2 rounded-xl bg-white shadow text-slate-800 hover:bg-slate-100 text-sm font-bold"
        >
          ← Voltar
        </button>
        <h1 className="text-3xl md:text-4xl font-black mb-2 text-slate-900">Escolha a aula</h1>
        <p className="text-slate-700 mb-6 font-semibold">
          Cada nível ensina um pedacinho. Faça na ordem para aprender melhor!
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {lessons.map((l, i) => (
            <button
              key={i}
              onClick={() => onPick(i)}
              className={`text-left p-5 rounded-2xl bg-white border-4 shadow-lg hover:scale-[1.02] transition-transform`}
              style={{ borderColor: ({ blue: "#0ea5e9", green: "#10b981", violet: "#8b5cf6", amber: "#f59e0b", pink: "#ec4899" } as Record<string, string>)[l.cor] ?? "#0ea5e9" }}
            >
              <div className="text-xs font-black uppercase text-slate-500">
                Aula {i + 1}
              </div>
              <div className="text-xl font-black mt-1 text-slate-900">{l.titulo}</div>
              <div className="text-sm mt-2 text-slate-700 font-bold">
                {l.scenes.length} telinhas • +{l.xp} XP
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
