// Índice compartilhado das aulas de Inglês por curso.
import type { LessonData } from "./ingles-1ano/types";
import { LESSONS as LESSONS_1ANO, getLesson as getLesson1 } from "./ingles-1ano/lessons";
import { LESSONS_2ANO, getLesson2ano } from "./ingles-2ano/lessons";
import { LESSONS_3ANO, getLesson3ano } from "./ingles-3ano/lessons";
import { LESSONS_4ANO, getLesson4ano } from "./ingles-4ano/lessons";
import { LESSONS_5ANO, getLesson5ano } from "./ingles-5ano/lessons";

export function getLessonsBySerie(serie: string): LessonData[] {
  if (serie === "2ano") return LESSONS_2ANO;
  if (serie === "3ano") return LESSONS_3ANO;
  if (serie === "4ano") return LESSONS_4ANO;
  if (serie === "5ano") return LESSONS_5ANO;
  return LESSONS_1ANO;
}

export function getLessonByCursoAula(curso: string, slug: string): LessonData | undefined {
  if (curso === "ingles-2ano") return getLesson2ano(slug);
  if (curso === "ingles-3ano") return getLesson3ano(slug);
  if (curso === "ingles-4ano") return getLesson4ano(slug);
  if (curso === "ingles-5ano") return getLesson5ano(slug);
  return getLesson1(slug);
}

