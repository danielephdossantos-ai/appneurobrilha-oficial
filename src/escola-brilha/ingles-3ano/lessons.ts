import type { LessonData } from "../ingles-1ano/types";
import u3a01 from "./u3-a01-welcome/data";
import u3a02 from "./u3-a02-school/data";
import u3a03 from "./u3-a03-healthy/data";
import u3a04 from "./u3-a04-animals/data";
import u3a05 from "./u3-a05-city/data";
import u3a06 from "./u3-a06-travel/data";
import u3a07 from "./u3-a07-adventure/data";

export const LESSONS_3ANO: LessonData[] = [u3a01, u3a02, u3a03, u3a04, u3a05, u3a06, u3a07];

export function getLesson3ano(slug: string): LessonData | undefined {
  return LESSONS_3ANO.find((l) => l.slug === slug);
}
