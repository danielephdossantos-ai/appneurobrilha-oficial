import type { LessonData } from "../ingles-1ano/types";
import u2a01 from "./u2-a01-routine/data";
import u2a02 from "./u2-a02-house/data";
import u2a03 from "./u2-a03-food/data";
import u2a04 from "./u2-a04-clothes/data";
import u2a05 from "./u2-a05-community/data";
import u2a06 from "./u2-a06-hobbies/data";
import u2a07 from "./u2-a07-world/data";

export const LESSONS_2ANO: LessonData[] = [u2a01, u2a02, u2a03, u2a04, u2a05, u2a06, u2a07];

export function getLesson2ano(slug: string): LessonData | undefined {
  return LESSONS_2ANO.find((l) => l.slug === slug);
}
