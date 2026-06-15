export interface SkillMastery {
  id: string;
  child_id: string;
  skill_code: string;
  materia: string;
  mastery_level: number;
  total_attempts: number;
  success_rate: number;
  last_attempt_at: string | null;
}

export interface LearningTrail {
  id: string;
  name: string;
  description: string;
  materia: string;
  serie?: string;
  difficulty_level?: string;
  steps: any[];
}

export interface ReviewSchedule {
  id: string;
  child_id: string;
  activity_id?: string;
  skill_code?: string;
  next_review_at: string;
  interval_days: number;
  ease_factor: number;
  last_performance_score?: number;
}

export interface ProgressionStats {
  id: string;
  child_id: string;
  materia: string;
  evolution_percentage: number;
  activities_completed: number;
  current_streak: number;
  last_activity_at: string | null;
}
