import React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAulaBnccById } from "../modules/escola-brilha/hooks/useAulasBncc";
import { EarlyChildhoodPlayer } from "../modules/escola-brilha/views/EarlyChildhoodPlayer";
import { ActivityPlayer } from "../modules/escola-brilha/views/ActivityPlayer";
import { ActivityPlayerC } from "../modules/escola-brilha/views/ActivityPlayerC";
import { KidsLessonPlayer } from "../modules/escola-brilha/views/KidsLessonPlayer";
import { normalizeLessonC } from "../modules/escola-brilha/utils/normalizeLessonC";
import { getKidsLessons } from "../modules/escola-brilha/data/kids-lessons-1ano";
import type { KidsLesson } from "../modules/escola-brilha/types/kids-lesson";
import { NextLessonCTA } from "../modules/escola-brilha/components/NextLessonCTA";

const KIDS_GRADES = new Set(["1º Ano", "2º Ano", "3º Ano"]);

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
      <NextLessonCTA current={{ kind: "db", id: aulaId }} />
    </PlayerBoundary>
  );
}
