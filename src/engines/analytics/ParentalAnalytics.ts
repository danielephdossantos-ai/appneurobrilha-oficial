import { NeuroAnalyticsEvent, Insight } from "../../modules/relatorios/types";

export class ParentalAnalytics {
  detectTrends(events: NeuroAnalyticsEvent[]) {
    return {
      regression: false,
      improvement: 15,
      main_bottleneck: "Coordenação motora fina (cliques precisos)",
      peak_performance_hour: "10:00 - 11:30",
    };
  }

  generateInsights(events: NeuroAnalyticsEvent[]): Insight[] {
    return [
      {
        id: crypto.randomUUID(),
        type: "recommendation",
        category: "behavior",
        severity: "low",
        message:
          "Seu filho(a) performa melhor pela manhã. Tente agendar atividades complexas antes do almoço.",
        created_at: new Date().toISOString(),
      },
    ];
  }
}
