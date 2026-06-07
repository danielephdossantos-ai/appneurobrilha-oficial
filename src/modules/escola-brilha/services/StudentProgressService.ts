
export type MasteryStatus = 'Iniciante' | 'Aprendendo' | 'Praticando' | 'Dominando' | 'Especialista';

export interface SkillMastery {
  skill_bncc: string;
  score: number; // 0 to 100
  status: MasteryStatus;
  attempts: number;
  lastUpdate: number;
}

export class StudentProgressService {
  private static STORAGE_KEY = 'escola_brilha_progress';

  static getMastery(skill_bncc: string): SkillMastery {
    const all = this.getAllProgress();
    return all[skill_bncc] || { skill_bncc, score: 0, status: 'Iniciante', attempts: 0, lastUpdate: Date.now() };
  }

  static getStatus(score: number): MasteryStatus {
    if (score >= 95) return 'Especialista';
    if (score >= 80) return 'Dominando';
    if (score >= 65) return 'Praticando';
    if (score >= 40) return 'Aprendendo';
    return 'Iniciante';
  }

  static saveAttempt(skill_bncc: string, success: boolean, difficultyMultiplier: number = 1) {
    const all = this.getAllProgress();
    const current = all[skill_bncc] || { skill_bncc, score: 0, status: 'Iniciante', attempts: 0, lastUpdate: Date.now() };
    
    current.attempts += 1;
    
    const change = success ? (10 * difficultyMultiplier) : -5;
    current.score = Math.max(0, Math.min(100, current.score + change));
    current.status = this.getStatus(current.score);
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
