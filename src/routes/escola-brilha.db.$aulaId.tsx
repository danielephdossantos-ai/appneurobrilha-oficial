import React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAulaBnccById } from "../modules/escola-brilha/hooks/useAulasBncc";
import type { AulaBncc } from "../modules/escola-brilha/hooks/useAulasBncc";
import { EarlyChildhoodPlayer } from "../modules/escola-brilha/views/EarlyChildhoodPlayer";
import { ActivityPlayer } from "../modules/escola-brilha/views/ActivityPlayer";
import { ActivityPlayerC } from "../modules/escola-brilha/views/ActivityPlayerC";
import { KidsLessonPlayer } from "../modules/escola-brilha/views/KidsLessonPlayer";
import { normalizeLessonC } from "../modules/escola-brilha/utils/normalizeLessonC";
import { getKidsLessons } from "../modules/escola-brilha/data/kids-lessons-1ano";
import { getActivityLesson3a5 } from "../modules/escola-brilha/data/activity-lessons-3ano-mat";
import { generateActivityLesson6a9 } from "../modules/escola-brilha/data/activity-lesson-generator-6a9";
import type { ActivityLesson } from "../modules/escola-brilha/types/activity-lesson";
import type { ActivityLessonC, BNCCArea } from "../modules/escola-brilha/types/activity-lesson-c";
import type { KidsLesson } from "../modules/escola-brilha/types/kids-lesson";
import { NextLessonCTA } from "../modules/escola-brilha/components/NextLessonCTA";

const KIDS_GRADES = new Set(["1º Ano", "2º Ano", "1º ao 2º Ano"]);
const AL_GRADES = new Set(["3º Ano", "4º Ano", "5º Ano"]);
const FUND2_GRADES = new Set(["6º Ano", "7º Ano", "8º Ano", "9º Ano", "6º ao 7º Ano", "8º ao 9º Ano", "6º ao 9º Ano"]);

const AREA_BY_DISCIPLINA: Record<string, { area: BNCCArea; area_label: string; color: ActivityLessonC["color"] }> = {
  "Língua Portuguesa": {
    area: "linguagens",
    area_label: "Linguagens",
    color: { from: "from-rose-500", to: "to-pink-600", accent: "pink" },
  },
  Português: {
    area: "linguagens",
    area_label: "Linguagens",
    color: { from: "from-rose-500", to: "to-pink-600", accent: "pink" },
  },
  Matemática: {
    area: "matematica",
    area_label: "Matemática",
    color: { from: "from-blue-500", to: "to-cyan-600", accent: "blue" },
  },
  Ciências: {
    area: "ciencias_natureza",
    area_label: "Ciências da Natureza",
    color: { from: "from-emerald-500", to: "to-teal-600", accent: "green" },
  },
  Geografia: {
    area: "ciencias_humanas",
    area_label: "Ciências Humanas",
    color: { from: "from-amber-600", to: "to-orange-600", accent: "amber" },
  },
  História: {
    area: "ciencias_humanas",
    area_label: "Ciências Humanas",
    color: { from: "from-amber-600", to: "to-orange-600", accent: "amber" },
  },
};

const LETTERS = ["A", "B", "C", "D"] as const;

function hasScreensPayload(payload: unknown) {
  return !!payload && typeof payload === "object" && "screens" in payload;
}

function adaptActivityLessonToC(aula: AulaBncc, src: ActivityLesson): ActivityLessonC {
  const meta = AREA_BY_DISCIPLINA[aula.disciplina] ?? {
    area: "linguagens" as BNCCArea,
    area_label: aula.disciplina || src.subject || "Aula",
    color: { from: "from-violet-500", to: "to-purple-600", accent: "violet" },
  };
  const correct = src.screens.praticar.options.find((o) => o.isCorrect) ?? src.screens.praticar.options[0];
  const challengeOptions = src.screens.praticar.options.slice(0, 4).map((o, i) => ({
    letter: LETTERS[i],
    text: o.text,
    isCorrect: o.isCorrect,
  }));

  while (challengeOptions.length < 4) {
    challengeOptions.push({
      letter: LETTERS[challengeOptions.length],
      text: challengeOptions.length === 3 ? "Ainda não é essa" : "Precisa revisar o exemplo",
      isCorrect: false,
    });
  }

  return {
    id: src.id || aula.id,
    title: src.title || aula.titulo,
    mission_question: `Vamos entender ${src.title || aula.titulo} na prática?`,
    subject: aula.disciplina || src.subject,
    area: meta.area,
    area_label: meta.area_label,
    grade: aula.serie,
    grade_range: aula.serie,
    bncc_code: aula.codigo_bncc,
    bncc_description: aula.descricao || src.screens.explicacao.summary || src.title,
    xp: aula.xp ?? src.xp ?? 200,
    color: meta.color,
    screens: {
      missao: {
        intro: "Nesta missão você vai:",
        objectives: [
          src.screens.explicacao.highlight,
          "Ver um exemplo guiado",
          "Responder um desafio curto",
        ].filter(Boolean).slice(0, 3),
        context_emoji: src.screens.explicacao.visual_emoji || "✨",
        context_text: src.screens.explicacao.summary,
      },
      exploracao: {
        instruction: src.screens.exploracao.instruction,
        texto: src.screens.explicacao_curta.text,
        pontos_destaque: src.screens.exploracao.pairs.map((p) => ({ emoji: "•", text: `${p.left}: ${p.right}` })),
        mascot_tip: src.screens.explicacao_curta.tip || "Observe o exemplo antes de responder.",
      },
      pontos_chave: {
        intro: "O que precisa guardar:",
        points: src.screens.exploracao.pairs.slice(0, 4).map((p, i) => ({
          icon: String(i + 1),
          title: p.left,
          text: p.right,
        })),
      },
      exemplo_aplicado: {
        title: src.screens.exemplo_visual.title,
        scenario: src.screens.exemplo_visual.sentences[0]?.text || src.screens.explicacao.highlight,
        scenario_emoji: src.screens.exemplo_visual.sentences[0]?.emoji || "💡",
        analysis: src.screens.exemplo_visual.sentences.map((s) => s.text),
        conclusion: src.screens.exemplo_visual.conclusion,
      },
      desafio: {
        question: src.screens.praticar.question,
        options: challengeOptions,
        explanation: correct ? `A resposta certa é: ${correct.text}.` : "Revise o exemplo e tente novamente.",
      },
    },
  };
}

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
  const hasKidsLesson = KIDS_GRADES.has(aula.serie) && getKidsLessons(aula.codigo_bncc).length > 0;
  // Players premium (Fund2, 3-5 ano, Kids) já têm botão "Próxima atividade" inline.
  // Só mostramos o CTA flutuante para players legacy que não possuem.
  const hasInlineNext = hasKidsLesson || AL_GRADES.has(aula.serie) || FUND2_GRADES.has(aula.serie);

  const renderPlayer = () => {
    const ref = { kind: "db" as const, id: aulaId };

    // Regra de preservação visual: se a aula já tem player/payload criado no banco,
    // renderiza esse player original. IA/pedagogia não pode substituir layout, cores,
    // mascotes, posições ou telas que já foram desenhadas manualmente.
    switch (aula.tipo_player) {
      case "early":
        if (aula.payload) return <EarlyChildhoodPlayer lesson={aula.payload} />;
        break;
      case "b":
        if (aula.payload) return <ActivityPlayer lesson={aula.payload} currentRef={ref} />;
        break;
      case "c":
        if (aula.payload) return <ActivityPlayerC lesson={normalizeLessonC(aula)} currentRef={ref} />;
        break;
    }

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

    // 6º–9º Ano: player premium de 8 telas estilo Khan/Classroom (sem mascotes).
    if (FUND2_GRADES.has(aula.serie)) {
      if (fund2Lesson) {
        return (
          <Fund2Player
            lesson={fund2Lesson}
            currentRef={ref}
            capitulo={aula.codigo_bncc}
          />
        );
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
      {!hasInlineNext && <NextLessonCTA current={{ kind: "db", id: aulaId }} />}
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
