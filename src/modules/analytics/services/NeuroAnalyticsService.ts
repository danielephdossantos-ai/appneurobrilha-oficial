import { NeuroAnalyticsEvent, EvolutionData, Insight } from "../types";

export class NeuroAnalyticsService {
  private static STORAGE_KEY = "neuro_analytics_events";

  static async logEvent(event: Omit<NeuroAnalyticsEvent, "id" | "created_at">): Promise<void> {
    const newEvent: NeuroAnalyticsEvent = {
      ...event,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
    };

    const events = this.getStoredEvents();
    events.push(newEvent);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));

    // Analisar padrões para insights imediatos
    this.detectPatterns(newEvent);
  }

  private static getStoredEvents(): NeuroAnalyticsEvent[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private static detectPatterns(event: NeuroAnalyticsEvent) {
    // Lógica simplificada de detecção de hiperfoco ou sobrecarga
    if (event.event_type === "hyperfocus_detected") {
      
    }
    if (event.event_type === "overload_detected") {
      
    }
  }

  static async getEvolutionData(childId: string): Promise<EvolutionData> {
    // Mock de dados para evolução baseada em eventos reais seria complexo aqui,
    // então retornaremos uma estrutura baseada no histórico.
    return {
      weekly: [
        { date: "Seg", value: 45 },
        { date: "Ter", value: 52 },
        { date: "Qua", value: 48 },
        { date: "Qui", value: 61 },
        { date: "Sex", value: 55 },
        { date: "Sab", value: 67 },
        { date: "Dom", value: 72 },
      ],
      monthly: Array.from({ length: 30 }, (_, i) => ({
        date: `${i + 1}`,
        value: 40 + Math.random() * 40,
      })),
      cognitiveRadar: {
        attention: 75,
        memory: 82,
        executive: 64,
        language: 90,
        math: 58,
        autonomy: 70,
      },
      emotionalMap: {
        frustration: 15,
        engagement: 80,
        calm: 65,
        joy: 85,
      },
      bnccProgress: [
        { competence: "O eu, o outro e o nós", progress: 85 },
        { competence: "Corpo, gestos e movimentos", progress: 70 },
        { competence: "Traços, sons, cores e formas", progress: 95 },
        { competence: "Escuta, fala e pensamento", progress: 60 },
        { competence: "Espaços, tempos, relações", progress: 75 },
      ],
      executiveFunctions: {
        inhibitoryControl: 68,
        workingMemory: 74,
        cognitiveFlexibility: 62,
      },
    };
  }

  static async generateInsights(childId: string): Promise<Insight[]> {
    return [
      {
        id: "1",
        type: "positive",
        category: "neuro",
        message: "Aumento de 20% no tempo de foco sustentado durante atividades de matemática.",
        created_at: new Date().toISOString(),
      },
      {
        id: "2",
        type: "warning",
        category: "behavior",
        message: "Sinais de fadiga detectados após 15 minutos de uso contínuo no período da tarde.",
        created_at: new Date().toISOString(),
      },
      {
        id: "3",
        type: "recommendation",
        category: "pedagogy",
        message: "Excelente progresso em fonemas. Sugerimos introduzir leitura de sílabas complexas.",
        created_at: new Date().toISOString(),
      },
    ];
  }
}
