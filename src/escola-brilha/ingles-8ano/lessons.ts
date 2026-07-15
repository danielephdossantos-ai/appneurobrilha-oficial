import type { LessonData } from "../ingles-1ano/types";
import u01 from "./u8-a01-global-citizens/data";
import u02 from "./u8-a02-media/data";
import u03 from "./u8-a03-science-future/data";
import u04 from "./u8-a04-environment/data";
import u05 from "./u8-a05-literature/data";
import u06 from "./u8-a06-careers/data";
import u07 from "./u8-a07-international/data";

export const LESSONS_8ANO: LessonData[] = [u01, u02, u03, u04, u05, u06, u07];

export function getLesson8ano(slug: string): LessonData | undefined {
  return LESSONS_8ANO.find((l) => l.slug === slug);
}
