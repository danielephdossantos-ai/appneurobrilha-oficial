import { BNCC_SKILLS, BNCCSkill } from "@/engines/pedagogical-engine/bncc";

export interface StudentProgress {
  skillId: string;
  mastery: number; // 0 to 1
  attempts: number;
  lastAttempt: Date;
}

export interface JourneyBlock {
  id: string;
  type: "ativo" | "pausa";
  title: string;
  category: "neuro-treino" | "escola-brilha" | "pausa";
  dur: number;
  status: "done" | "now" | "next";
  activityId?: string;
}

export class PedagogyEngine {
  static calculateProgression(progress: StudentProgress[]): number {
    if (progress.length === 0) return 0;
    const totalMastery = progress.reduce((acc, p) => acc + p.mastery, 0);
    return totalMastery / BNCC_SKILLS.length;
  }

  static getRecommendedSkills(progress: StudentProgress[], studentLevel: number): BNCCSkill[] {
    const masteredIds = new Set(progress.filter((p) => p.mastery > 0.8).map((p) => p.skillId));
    return BNCC_SKILLS.filter((s) => s.level <= studentLevel && !masteredIds.has(s.id));
  }

  static generateDailyRoutine(
    day: number,
    childProfile: { tempo_atencao_min?: number | null } & Record<string, unknown>,
    activities: Array<{
      id?: string;
      name?: string;
      category?: string;
      subcategory?: string;
      [k: string]: unknown;
    }>
  ): JourneyBlock[] {
    // Deterministicamente escolhe atividades baseadas no dia para cobrir os 365 dias.
    // Usa multiplicador primo para evitar repetição óbvia quando N < 365.
    const seed = day;
    const neuroActivities = activities.filter((a) => a.category === "neuro-treino");
    const schoolActivities = activities.filter((a) => a.category === "escola-brilha");

    const getDeterministic = <T,>(arr: T[], offset: number): T | null => {
      if (arr.length === 0) return null;
      return arr[(seed * 31 + offset * 17) % arr.length];
    };

    const blocks: JourneyBlock[] = [];
    const attentionMin = childProfile.tempo_atencao_min || 10;

    // Bloco 1: Neuro-treino (Aquece as funções executivas)
    const neuro1 = getDeterministic(neuroActivities, 0);
    if (neuro1) {
      blocks.push({
        id: "b1",
        type: "ativo",
        category: "neuro-treino",
        title: neuro1.name,
        dur: attentionMin,
        status: "now",
        activityId: neuro1.id,
      });
    }

    // Bloco 2: Pausa Terapêutica
    blocks.push({
      id: "p1",
      type: "pausa",
      category: "pausa",
      title: "Pausa Ativa · Respiração",
      dur: 3,
      status: "next",
    });

    // Bloco 3: Escola Brilha (Conteúdo Acadêmico)
    const school1 = getDeterministic(schoolActivities, seed);
    if (school1) {
      blocks.push({
        id: "b2",
        type: "ativo",
        category: "escola-brilha",
        title: `Aula de ${school1.subcategory || "Escola"}`,
        dur: attentionMin,
        status: "next",
        activityId: school1.id,
      });
    }

    // Bloco 4: Pausa Ativa
    blocks.push({
      id: "p2",
      type: "pausa",
      category: "pausa",
      title: "Pausa Ativa · Alongamento",
      dur: 3,
      status: "next",
    });

    // Bloco 5: Neuro-treino (Finalização com regulação emocional)
    const neuroRegulacao = neuroActivities.filter((a) => a.subcategory === "Regulação Emocional");
    const neuro2 = getDeterministic(
      neuroRegulacao.length > 0 ? neuroRegulacao : neuroActivities,
      5,
    );
    if (neuro2) {
      blocks.push({
        id: "b3",
        type: "ativo",
        category: "neuro-treino",
        title: neuro2.name,
        dur: Math.floor(attentionMin / 2),
        status: "next",
        activityId: neuro2.id,
      });
    }

    return blocks;
  }
}
