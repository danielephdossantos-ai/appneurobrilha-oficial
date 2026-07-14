// Índice compartilhado das aulas de Inglês por curso.
import type { LessonData } from "./ingles-1ano/types";
import { LESSONS as LESSONS_1ANO, getLesson as getLesson1 } from "./ingles-1ano/lessons";
import { LESSONS_2ANO, getLesson2ano } from "./ingles-2ano/lessons";

export function getLessonsBySerie(serie: string): LessonData[] {
  if (serie === "2ano") return LESSONS_2ANO;
  return LESSONS_1ANO;
}

export function getLessonByCursoAula(curso: string, slug: string): LessonData | undefined {
  if (curso === "ingles-2ano") return getLesson2ano(slug);
  return getLesson1(slug);
}
