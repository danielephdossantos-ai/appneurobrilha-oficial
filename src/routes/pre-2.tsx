
import { createFileRoute } from "@tanstack/react-router";
import { Pre2System } from "@/components/early-childhood/Pre2System";

export const Route = createFileRoute("/pre-2")({
  head: () => ({
    meta: [
      { title: "NeuroBrilha Kids — Pré 2" },
      { name: "description", content: "Preparação para alfabetização e matemática inicial com neuroaprendizagem." },
    ],
  }),
  component: Pre2System,
});
