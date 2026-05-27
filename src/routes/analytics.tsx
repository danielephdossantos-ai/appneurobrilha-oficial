import { createFileRoute } from "@tanstack/react-router";
import { NeuroAnalyticsDashboard } from "@/modules/analytics/components/NeuroAnalyticsDashboard";
import { Shell } from "@/components/Layout";

export const Route = createFileRoute("/analytics")({
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const mockChildId = "child-123-abc";

  return (
    <Shell>
      <div className="min-h-screen bg-slate-50 -m-4 md:-m-8">
        <NeuroAnalyticsDashboard childId={mockChildId} />
      </div>
    </Shell>
  );
}
