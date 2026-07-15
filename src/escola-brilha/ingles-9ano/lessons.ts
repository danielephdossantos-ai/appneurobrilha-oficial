import type { LessonData } from "../ingles-1ano/types";
import u01 from "./u9-a01-my-future/data";
import u02 from "./u9-a02-digital-citizenship/data";
import u03 from "./u9-a03-global-challenges/data";
import u04 from "./u9-a04-science-innovation/data";
import u05 from "./u9-a05-literature/data";
import u06 from "./u9-a06-entrepreneurship/data";
import u07 from "./u9-a07-english-for-life/data";

export const LESSONS_9ANO: LessonData[] = [u01, u02, u03, u04, u05, u06, u07];

export function getLesson9ano(slug: string): LessonData | undefined {
  return LESSONS_9ANO.find((l) => l.slug === slug);
}
