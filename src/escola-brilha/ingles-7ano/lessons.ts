import type { LessonData } from "../ingles-1ano/types";
import u01 from "./u7-a01-digital-life/data";
import u02 from "./u7-a02-memories/data";
import u03 from "./u7-a03-health/data";
import u04 from "./u7-a04-culture/data";
import u05 from "./u7-a05-environment/data";
import u06 from "./u7-a06-science/data";
import u07 from "./u7-a07-global/data";
import { BNCC_WORKSHOPS_7ANO } from "./bncc-workshops";

function pad<T>(items: T[], fallback: (index: number) => T): T[] {
  return items.length >= 4 ? items : [...items, ...Array.from({ length: 4 - items.length }, (_, i) => fallback(i))];
}

/** Mantém o conteúdo aprovado e completa somente grupos antigos com menos de quatro alternativas. */
function withFourOptions(lesson: LessonData): LessonData {
  return {
    ...lesson,
    meta: {
      ...lesson.meta,
      listeningOptions: pad(lesson.meta.listeningOptions, () => "A informação não foi mencionada"),
    },
    WRITING: lesson.WRITING.map((item) => ({
      ...item,
      options: pad(item.options, (i) => [`none`, `other`, `unknown`][i] ?? "not stated"),
    })),
    QUIZ: lesson.QUIZ.map((item) => ({
      ...item,
      options: pad(item.options, () => ({ text: "Nenhuma das informações apresentadas" })),
    })),
    HUNTER: lesson.HUNTER ? {
      ...lesson.HUNTER,
      rounds: lesson.HUNTER.rounds.map((round) => ({
        ...round,
        objects: pad(round.objects, (i) => ({ id: `extra-${i}`, label: "not stated", img: "" })),
      })),
    } : undefined,
  };
}

export const LESSONS_7ANO: LessonData[] = [u01, u02, u03, u04, u05, u06, u07, ...BNCC_WORKSHOPS_7ANO].map(withFourOptions);

export function getLesson7ano(slug: string): LessonData | undefined {
  return LESSONS_7ANO.find((l) => l.slug === slug);
}
