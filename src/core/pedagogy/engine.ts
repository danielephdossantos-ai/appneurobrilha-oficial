
import { BNCC_SKILLS, BNCCSkill } from "./bncc";

export interface StudentProgress {
  skillId: string;
  mastery: number; // 0 to 1
  attempts: number;
  lastAttempt: Date;
}

export class PedagogyEngine {
  static calculateProgression(progress: StudentProgress[]): number {
    if (progress.length === 0) return 0;
    const totalMastery = progress.reduce((acc, p) => acc + p.mastery, 0);
    return totalMastery / BNCC_SKILLS.length;
  }

  static getRecommendedSkills(progress: StudentProgress[], studentLevel: number): BNCCSkill[] {
    const masteredIds = new Set(progress.filter(p => p.mastery > 0.8).map(p => p.skillId));
    return BNCC_SKILLS.filter(s => s.level <= studentLevel && !masteredIds.has(s.id));
  }
}
