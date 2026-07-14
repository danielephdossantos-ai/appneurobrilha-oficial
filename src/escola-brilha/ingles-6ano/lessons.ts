import type { LessonData } from "../ingles-1ano/types";
import u6a01 from "./u6-a01-academy/data";

export const LESSONS_6ANO: LessonData[] = [u6a01];

export function getLesson6ano(slug: string): LessonData | undefined {
  return LESSONS_6ANO.find((l) => l.slug === slug);
}
