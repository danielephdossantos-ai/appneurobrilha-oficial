import type { LessonData } from "../ingles-1ano/types";
import u4a01 from "./u4-a01-friends/data";
import u4a02 from "./u4-a02-school/data";
import u4a03 from "./u4-a03-healthy/data";
import u4a04 from "./u4-a04-nature/data";
import u4a05 from "./u4-a05-city/data";
import u4a06 from "./u4-a06-holidays/data";
import u4a07 from "./u4-a07-challenge/data";

export const LESSONS_4ANO: LessonData[] = [u4a01, u4a02, u4a03, u4a04, u4a05, u4a06, u4a07];

export function getLesson4ano(slug: string): LessonData | undefined {
  return LESSONS_4ANO.find((l) => l.slug === slug);
}
