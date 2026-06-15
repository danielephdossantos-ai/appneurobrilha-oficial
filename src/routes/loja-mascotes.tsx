import { createFileRoute } from "@tanstack/react-router";
import MascotStorePage from "@/pages/MascotStore";
import { Shell } from "@/components/Layout";

export const Route = createFileRoute("/loja-mascotes")({
  component: () => (
    <Shell>
      <MascotStorePage />
    </Shell>
  ),
});
