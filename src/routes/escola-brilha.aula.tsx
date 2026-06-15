import { createFileRoute } from "@tanstack/react-router";
import { LessonPlayer } from "../modules/escola-brilha/views/LessonPlayer";

export const Route = createFileRoute("/escola-brilha/aula")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      category: (search.category as string) || "portugues",
      type: (search.type as string) || "legacy",
    };
  },
  component: () => <LessonPlayer />,
});
