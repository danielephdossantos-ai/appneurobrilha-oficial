import { createFileRoute, useSearch } from "@tanstack/react-router";
import { LessonPlayer } from "../modules/escola-brilha/views/LessonPlayer";
import { NextLessonCTA } from "../modules/escola-brilha/components/NextLessonCTA";
import { findStaticById } from "../modules/escola-brilha/data/library";

export const Route = createFileRoute("/escola-brilha/aula")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      category: (search.category as string) || "portugues",
      type: (search.type as string) || "legacy",
    };
  },
  component: AulaPage,
});

function AulaPage() {
  const { category } = useSearch({ from: "/escola-brilha/aula" });
  const staticLesson = findStaticById(category);
  const hasInlineNext = staticLesson?.type === "activity" || staticLesson?.type === "activity-c";
  return (
    <>
      <LessonPlayer />
      {!hasInlineNext && <NextLessonCTA current={{ kind: "static", id: category }} />}
    </>
  );
}
