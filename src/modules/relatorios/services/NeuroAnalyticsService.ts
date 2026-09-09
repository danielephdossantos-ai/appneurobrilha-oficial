import { NeuroAnalyticsEvent, EvolutionData, Insight } from "../types";
import { AnalyticsEngine } from "../../../engines/analytics/AnalyticsEngine";

export class NeuroAnalyticsService {
  static async logEvent(
    event: Omit<NeuroAnalyticsEvent, "id" | "created_at" | "timestamp">,
  ): Promise<void> {
    return AnalyticsEngine.logEvent(event);
  }

  static async getEvolutionData(childId: string): Promise<EvolutionData> {
    return AnalyticsEngine.getFullAnalysis(childId);
  }

  static async generateInsights(childId: string): Promise<Insight[]> {
    return AnalyticsEngine.getInsights(childId);
  }
}
