// Índice compartilhado das aulas de Inglês por curso.
import type { LessonData } from "./ingles-1ano/types";
import { LESSONS as LESSONS_1ANO, getLesson as getLesson1 } from "./ingles-1ano/lessons";
import { LESSONS_2ANO, getLesson2ano } from "./ingles-2ano/lessons";
import { LESSONS_3ANO, getLesson3ano } from "./ingles-3ano/lessons";
import { LESSONS_4ANO, getLesson4ano } from "./ingles-4ano/lessons";
import { LESSONS_5ANO, getLesson5ano } from "./ingles-5ano/lessons";
import { LESSONS_6ANO, getLesson6ano } from "./ingles-6ano/lessons";
import { LESSONS_7ANO, getLesson7ano } from "./ingles-7ano/lessons";
import { LESSONS_8ANO, getLesson8ano } from "./ingles-8ano/lessons";
import { LESSONS_9ANO, getLesson9ano } from "./ingles-9ano/lessons";

export function getLessonsBySerie(serie: string): LessonData[] {
  if (serie === "2ano") return LESSONS_2ANO;
  if (serie === "3ano") return LESSONS_3ANO;
  if (serie === "4ano") return LESSONS_4ANO;
  if (serie === "5ano") return LESSONS_5ANO;
  if (serie === "6ano") return LESSONS_6ANO;
  if (serie === "7ano") return LESSONS_7ANO;
  if (serie === "8ano") return LESSONS_8ANO;
  if (serie === "9ano") return LESSONS_9ANO;
  return LESSONS_1ANO;
}

export function getLessonByCursoAula(curso: string, slug: string): LessonData | undefined {
  if (curso === "ingles-2ano") return getLesson2ano(slug);
  if (curso === "ingles-3ano") return getLesson3ano(slug);
  if (curso === "ingles-4ano") return getLesson4ano(slug);
  if (curso === "ingles-5ano") return getLesson5ano(slug);
  if (curso === "ingles-6ano") return getLesson6ano(slug);
  if (curso === "ingles-7ano") return getLesson7ano(slug);
  if (curso === "ingles-8ano") return getLesson8ano(slug);
  if (curso === "ingles-9ano") return getLesson9ano(slug);
  return getLesson1(slug);
}
