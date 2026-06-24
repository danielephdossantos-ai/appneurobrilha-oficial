import { createFileRoute, useSearch } from "@tanstack/react-router";
import { LessonPlayer } from "../modules/escola-brilha/views/LessonPlayer";
import { NextLessonCTA } from "../modules/escola-brilha/components/NextLessonCTA";

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
  return (
    <>
      <LessonPlayer />
      <NextLessonCTA current={{ kind: "static", id: category }} />
    </>
  );
}
