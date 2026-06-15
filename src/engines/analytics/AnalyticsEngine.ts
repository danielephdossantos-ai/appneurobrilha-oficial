import { NeuroAnalyticsEvent, Insight, EvolutionData } from "../../modules/relatorios/types";
import { CognitiveAnalytics } from "./CognitiveAnalytics";
import { PedagogicalAnalytics } from "./PedagogicalAnalytics";
import { ParentalAnalytics } from "./ParentalAnalytics";
import { get, set } from "idb-keyval";

export class AnalyticsEngine {
  private static STORAGE_KEY = "neuro_analytics_events";
  private static cognitive = new CognitiveAnalytics();
  private static pedagogical = new PedagogicalAnalytics();
  private static parental = new ParentalAnalytics();

  static async logEvent(
    event: Omit<NeuroAnalyticsEvent, "id" | "created_at" | "timestamp">,
  ): Promise<void> {
    const newEvent: NeuroAnalyticsEvent = {
      ...event,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      created_at: new Date().toISOString(),
    };

    const events = await this.getStoredEvents();
    events.push(newEvent);

    // Limit local storage to last 1000 events for performance
    const prunedEvents = events.slice(-1000);
    await set(this.STORAGE_KEY, prunedEvents);

    // Immediate detection of critical patterns
    this.detectAnomalies(newEvent);
  }

  private static async getStoredEvents(): Promise<NeuroAnalyticsEvent[]> {
    const stored = await get<NeuroAnalyticsEvent[]>(this.STORAGE_KEY);
    return stored || [];
  }

  private static detectAnomalies(event: NeuroAnalyticsEvent) {
    if (event.event_type === "overload_detected" || event.event_type === "fatigue_detected") {
      // Trigger immediate parental notification or app pause
      console.warn("CRITICAL ANALYTICS EVENT:", event.event_type);
    }
  }

  static async getFullAnalysis(childId: string): Promise<EvolutionData> {
    const events = await this.getStoredEvents();
    const childEvents = events.filter((e) => e.child_id === childId);

    const cognitive = this.cognitive.analyze(childEvents);
    const pedagogical = this.pedagogical.analyze(childEvents);
    const trends = this.parental.detectTrends(childEvents);

    return {
      ...cognitive,
      ...pedagogical,
      trends,
    };
  }

  static async getInsights(childId: string): Promise<Insight[]> {
    const events = await this.getStoredEvents();
    const childEvents = events.filter((e) => e.child_id === childId);

    return [
      ...this.cognitive.generateInsights(childEvents),
      ...this.pedagogical.generateInsights(childEvents),
      ...this.parental.generateInsights(childEvents),
    ];
  }
}
