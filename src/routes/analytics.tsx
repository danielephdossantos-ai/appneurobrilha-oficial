import { createFileRoute } from "@tanstack/react-router";
import { NeuroAnalyticsDashboard } from "@/modules/relatorios/components/NeuroAnalyticsDashboard";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";

export const Route = createFileRoute("/analytics")({
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? "child-123-abc";

  return (
    <Shell>
      <div className="min-h-screen bg-slate-50 -m-4 md:-m-8">
        <NeuroAnalyticsDashboard childId={childId} />
      </div>
    </Shell>
  );
}
