import { createFileRoute } from "@tanstack/react-router";
import { EscolaBrilhaDashboard } from "../modules/escola-brilha/views/EscolaBrilhaDashboard";

export const Route = createFileRoute("/escola-brilha/")({
  component: () => <EscolaBrilhaDashboard />,
});
