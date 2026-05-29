
import { 
  ActivityType, 
  DifficultyLevel, 
  GeneratedActivity, 
  ActivityTemplate, 
  ActivityPerformance,
  ActivityOption
} from "./types";
import { CONTENT_DATABASE, ContentItem } from "@/data/activities/content";
import { ACTIVITY_TEMPLATES } from "@/data/activities/templates";
import { AdaptiveAnalysis } from "@/engines/adaptive-engine/motor";

export class ActivityEngine {
  private static usedContentIds: Set<string> = new Set();

  static gerarAtividade(
    templateId?: string, 
    analysis?: AdaptiveAnalysis,
    preferredType?: ActivityType
  ): GeneratedActivity {
    // 1. Selecionar Template
    let template = ACTIVITY_TEMPLATES.find(t => t.id === templateId);
    if (!template) {
      const filtered = preferredType 
        ? ACTIVITY_TEMPLATES.filter(t => t.type === preferredType)
        : ACTIVITY_TEMPLATES;
      template = filtered[Math.floor(Math.random() * filtered.length)];
    }

    // 2. Adaptar Dificuldade
    const difficulty = this.adaptarDificuldade(template.baseDifficulty, analysis);

    // 3. Selecionar Variação (Content)
    const content = this.selecionarVariacao(template, difficulty);

    // 4. Gerar Recompensa
    const reward = this.aplicarReforco(difficulty, analysis);

    return {
      id: `act-${Math.random().toString(36).substr(2, 9)}`,
      type: template.type,
      title: template.title,
      instruction: template.instruction,
      difficulty,
      content,
      reward
    };
  }

  static adaptarDificuldade(base: DifficultyLevel, analysis?: AdaptiveAnalysis): DifficultyLevel {
    if (!analysis) return base;

    // Se a performance for muito alta, sobe a dificuldade
    if (analysis.performanceLevel > 0.8 && base === "easy") return "medium";
    if (analysis.performanceLevel > 0.8 && base === "medium") return "hard";
    
    // Se houver muita frustração ou fadiga, desce a dificuldade
    if (analysis.frustration > 0.6 || analysis.fatigue > 0.7) {
      if (base === "hard") return "medium";
      if (base === "medium") return "easy";
    }

    return base;
  }

  private static selecionarVariacao(template: ActivityTemplate, difficulty: DifficultyLevel): GeneratedActivity["content"] {
    // Lógica para evitar repetição e selecionar itens do banco
    const availableContent = CONTENT_DATABASE.filter(item => 
      template.contentPool.includes(item.id) || 
      (template.requiredSkills.some(s => item.tags.includes(s)) && !this.usedContentIds.has(item.id))
    );

    const selection = availableContent.length > 0 
      ? availableContent[Math.floor(Math.random() * availableContent.length)]
      : CONTENT_DATABASE[0];

    this.usedContentIds.add(selection.id);
    if (this.usedContentIds.size > 100) this.usedContentIds.clear(); // Reset simple memory

    // Gerar estrutura baseada no tipo
    switch (template.type) {
      case "multiple-choice":
        return {
          question: selection.value,
          options: this.gerarOpcoes(selection, difficulty)
        };
      case "drag-drop":
        return {
          question: selection.value,
          metadata: { target: selection.value }
        };
      default:
        return { question: selection.value };
    }
  }

  private static gerarOpcoes(correct: ContentItem, difficulty: DifficultyLevel): ActivityOption[] {
    const distractors = CONTENT_DATABASE
      .filter(item => item.id !== correct.id && item.category === correct.category)
      .slice(0, difficulty === "easy" ? 2 : 3);

    const options: ActivityOption[] = [
      { id: "correct", content: correct.value, type: (correct.type === "image" ? "image" : "text") as "image" | "text", isCorrect: true },
      ...distractors.map((d, i) => ({ 
        id: `dist-${i}`, 
        content: d.value, 
        type: (d.type === "image" ? "image" : "text") as "image" | "text", 
        isCorrect: false 
      }))
    ];

    return options.sort(() => Math.random() - 0.5);
  }

  static detectarFadiga(performance: ActivityPerformance): boolean {
    return performance.timeSpent > 300000 || performance.errors > 5;
  }

  static aplicarReforco(difficulty: DifficultyLevel, analysis?: AdaptiveAnalysis) {
    const multiplier = difficulty === "expert" ? 3 : difficulty === "hard" ? 2 : 1;
    const bonus = analysis?.performanceLevel ? Math.floor(analysis.performanceLevel * 5) : 0;

    return {
      stars: (3 + bonus) * multiplier,
      coins: (10 + bonus * 2) * multiplier,
      energy: 5
    };
  }
}
