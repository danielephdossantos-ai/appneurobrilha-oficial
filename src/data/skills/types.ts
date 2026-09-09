export type DomainStatus = "iniciado" | "em_progresso" | "dominado" | "revisao_necessaria";

export interface Skill {
  id: string;
  bnccCode: string;
  title: string;
  description: string;
  objectives: string[];
  examples: string[];
  neuroStrategies: string[];
  activityTypes: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  grade: string; // "Pré 1" to "9º ano"
  estimatedTime: number; // minutes
  idealCognitiveProfile: string[];
  prerequisites: string[];
}

export interface MasteryNode {
  skillId: string;
  status: DomainStatus;
  progress: number; // 0 to 1
  lastAttempt: Date;
}
