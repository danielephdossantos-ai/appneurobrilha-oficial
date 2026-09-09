import type { LessonData } from "../ingles-1ano/types";
import u5a01 from "./u5-a01-dreams/data";
import u5a02 from "./u5-a02-world/data";
import u5a03 from "./u5-a03-science/data";
import u5a04 from "./u5-a04-stories/data";
import u5a05 from "./u5-a05-planet/data";
import u5a06 from "./u5-a06-city/data";
import u5a07 from "./u5-a07-mission/data";

export const LESSONS_5ANO: LessonData[] = [u5a01, u5a02, u5a03, u5a04, u5a05, u5a06, u5a07];

export function getLesson5ano(slug: string): LessonData | undefined {
  return LESSONS_5ANO.find((l) => l.slug === slug);
}
