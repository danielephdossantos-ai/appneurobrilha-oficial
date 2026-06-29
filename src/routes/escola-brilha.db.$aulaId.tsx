import React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAulaBnccById } from "../modules/escola-brilha/hooks/useAulasBncc";
import { Fund2Player } from "../modules/escola-brilha/views/Fund2Player";

import { useLessonV2 } from "../modules/escola-brilha/engine/pedagogical-library";
import { NextLessonCTA } from "../modules/escola-brilha/components/NextLessonCTA";

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
  const navigate = useNavigate();
  // useAulaBnccById é usado apenas para resolver o aulaId → codigo_bncc.
  // O conteúdo da aula NUNCA é lido daqui.
  const { aula, loading, error } = useAulaBnccById(aulaId);
  const fund2Lesson = useLessonV2(
    aula?.codigo_bncc ?? "",
    aula?.titulo ?? "",
    aula?.descricao ?? "",
  );

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

    // Fonte ÚNICA de conteúdo: LessonService → lesson_content (via useLessonV2).
    // Sem fallbacks para players legacy (aulas_bncc.payload, Kids, 3-5, Early, etc.).
    if (fund2Lesson) {
      return (
        <Fund2Player
          lesson={fund2Lesson}
          currentRef={ref}
          capitulo={aula.codigo_bncc}
        />
      );
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-4 p-6 text-center">
        <p className="text-2xl font-black">Aula ainda não cadastrada.</p>
        <p className="text-sm text-white/60 max-w-sm">
          {aula.codigo_bncc ? `Código: ${aula.codigo_bncc}` : null}
        </p>
        <button
          onClick={back}
          className="px-5 py-2 rounded-xl bg-white text-slate-900 font-bold"
        >
          Voltar
        </button>
      </div>
    );
  };

  return (
    <PlayerBoundary onBack={back}>
      {renderPlayer()}
      {!fund2Lesson && <NextLessonCTA current={{ kind: "db", id: aulaId }} />}
    </PlayerBoundary>
  );
}
