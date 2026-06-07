
export interface SkillMastery {
  skill_bncc: string;
  score: number; // 0 to 100
  attempts: number;
  lastUpdate: number;
}

export class StudentProgressService {
  private static STORAGE_KEY = 'escola_brilha_progress';

  static getMastery(skill_bncc: string): SkillMastery {
    const all = this.getAllProgress();
    return all[skill_bncc] || { skill_bncc, score: 0, attempts: 0, lastUpdate: Date.now() };
  }

  static saveAttempt(skill_bncc: string, success: boolean) {
    const all = this.getAllProgress();
    const current = all[skill_bncc] || { skill_bncc, score: 0, attempts: 0, lastUpdate: Date.now() };
    
    current.attempts += 1;
    if (success) {
      current.score = Math.min(100, current.score + 10);
    } else {
      current.score = Math.max(0, current.score - 5);
    }
    current.lastUpdate = Date.now();
    
    all[skill_bncc] = current;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(all));
  }

  private static getAllProgress(): Record<string, SkillMastery> {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }
}
