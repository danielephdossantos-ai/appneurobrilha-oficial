import type { LessonData } from "./types";
import u1a01 from "./u1-a01-hello/data";
import u1a02 from "./u1-a02-hello-friend/data";

export const LESSONS: LessonData[] = [u1a01, u1a02];

export function getLesson(slug: string): LessonData | undefined {
  return LESSONS.find((l) => l.slug === slug);
}
