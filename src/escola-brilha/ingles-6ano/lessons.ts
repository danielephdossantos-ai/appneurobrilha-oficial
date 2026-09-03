import type { LessonData } from "../ingles-1ano/types";
import u6a01 from "./u6-a01-academy/data";
import { BNCC_LESSONS_6ANO } from "./bncc-lessons";

export const LESSONS_6ANO: LessonData[] = [u6a01, ...BNCC_LESSONS_6ANO];

export function getLesson6ano(slug: string): LessonData | undefined {
  return LESSONS_6ANO.find((l) => l.slug === slug);
}
