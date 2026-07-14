import type { LessonData } from "../ingles-1ano/types";
import u01 from "./u7-a01-digital-life/data";
import u02 from "./u7-a02-memories/data";
import u03 from "./u7-a03-health/data";
import u04 from "./u7-a04-culture/data";
import u05 from "./u7-a05-environment/data";
import u06 from "./u7-a06-science/data";
import u07 from "./u7-a07-global/data";

export const LESSONS_7ANO: LessonData[] = [u01, u02, u03, u04, u05, u06, u07];

export function getLesson7ano(slug: string): LessonData | undefined {
  return LESSONS_7ANO.find((l) => l.slug === slug);
}
