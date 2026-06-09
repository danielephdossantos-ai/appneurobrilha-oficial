import { createFileRoute } from "@tanstack/react-router";
import { AnamneseWizard } from "@/modules/anamnese/components/AnamneseWizard";

export const Route = createFileRoute("/anamnese/$childId")({
  component: AnamneseRoute,
});

function AnamneseRoute() {
  const { childId } = Route.useParams();
  return (
    <div className="min-h-screen bg-background">
      <AnamneseWizard childId={childId} />
    </div>
  );
}
