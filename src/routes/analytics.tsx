import { NeuroAnalyticsDashboard } from "@/modules/analytics/components/NeuroAnalyticsDashboard";

export default function AnalyticsPage() {
  // Em uma aplicação real, o childId viria do contexto de autenticação ou rota
  const mockChildId = "child-123-abc";

  return (
    <div className="min-h-screen bg-slate-50">
      <NeuroAnalyticsDashboard childId={mockChildId} />
    </div>
  );
}
