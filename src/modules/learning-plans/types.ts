export type LearningPlanType = "literacy" | "school" | "support";
export type LearningPlanStatus = "draft" | "active" | "paused" | "completed" | "cancelled" | "needs_review";
export type LearningPlanItemRole =
  | "teach"
  | "guided_practice"
  | "practice"
  | "review"
  | "reinforcement"
  | "assessment"
  | "cognitive_training"
  | "support";

export type LearningPlanSource =
  | "escola_brilha"
  | "brilha_kids"
  | "aurora"
  | "contar_com_pip"
  | "biblioteca"
  | "neuro_treino"
  | "brilha_vida"
  | "ai_library";
