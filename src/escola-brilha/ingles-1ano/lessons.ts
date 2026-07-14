import type { LessonData } from "./types";
import u1a01 from "./u1-a01-hello/data";
import u1a02 from "./u1-a02-hello-friend/data";
import u1a03 from "./u1-a03-colors/data";
import u1a04 from "./u1-a04-passport/data";
import u1a05 from "./u1-a05-school/data";
import u1a06 from "./u1-a06-body/data";

export const LESSONS: LessonData[] = [u1a01, u1a02, u1a03, u1a04, u1a05, u1a06];

export function getLesson(slug: string): LessonData | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

