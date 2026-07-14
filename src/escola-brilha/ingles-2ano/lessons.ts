import type { LessonData } from "../ingles-1ano/types";
import u2a01 from "./u2-a01-routine/data";

export const LESSONS_2ANO: LessonData[] = [u2a01];

export function getLesson2ano(slug: string): LessonData | undefined {
  return LESSONS_2ANO.find((l) => l.slug === slug);
}
