import { Trail, AreaType, Mission, MissionStatusSchema } from "../types/school";
import { SupabasePedagogicalService } from "./SupabasePedagogicalService";
import { z } from "zod";

export class TrailService {
  private static pedagogicalService = SupabasePedagogicalService.getInstance();

  static async getTrailsByArea(area: AreaType, alunoId: string): Promise<Trail[]> {
    // In a real scenario, trails might be in a separate table, 
    // but for now we'll group skills by area into virtual trails.
    const subjectsMap: Record<string, string> = {
      'linguagem': 'Português',
      'matematica': 'Matemática',
      'ciencias': 'Ciências',
      'artes': 'Artes',
      'coordenacao_motora': 'Educação Física',
      'logica': 'Lógica'
    };

    const subject = subjectsMap[area];
    if (!subject) return [];

    // Fetch all skills for this subject
    // We assume 1st Year (Ensino Fundamental) for now as requested
    const skills = await this.pedagogicalService.getSkillsByGradeAndSubject('Educação Infantil', subject);
    const primarySkills = await this.pedagogicalService.getSkillsByGradeAndSubject('1º Ano', subject);
    const allSkills = [...skills, ...primarySkills];
    
    if (allSkills.length === 0) return [];

    const missions: Mission[] = await Promise.all(allSkills.map(async (skill) => {
      const progress = await this.pedagogicalService.getProgress(alunoId, skill.codigo_bncc);
      const isUnlocked = await this.pedagogicalService.isSkillUnlocked(alunoId, skill.codigo_bncc);
      
      let status: z.infer<typeof MissionStatusSchema> = 'locked';
      if (progress && (progress.dominio || 0) >= 80) {
        status = 'completed';
      } else if (isUnlocked) {
        status = 'available';
      }

      return {
        id: skill.codigo_bncc,
        title: skill.titulo || skill.codigo_bncc,
        description: skill.objetivo || '',
        status,
        order: skill.ordem || 0,
        activities: [] // Activities will be fetched when lesson starts
      };
    }));

    return [{
      id: `trail-${area}`,
      area: area,
      title: `Trilha de ${subject}`,
      missions: missions.sort((a, b) => a.order - b.order),
      progress: this.calculateTrailProgress(missions),
      phases: {
        inicio: missions.slice(0, 2).map(m => m.id),
        desenvolvimento: missions.slice(2, 4).map(m => m.id),
        consolidacao: missions.slice(4, 5).map(m => m.id),
        reforco: [],
        revisao: []
      }
    }];
  }

  static async getAllTrails(alunoId: string): Promise<Trail[]> {
    const areas: AreaType[] = ['linguagem', 'matematica', 'ciencias', 'artes', 'coordenacao_motora', 'logica'];
    const trails = await Promise.all(areas.map(area => this.getTrailsByArea(area, alunoId)));
    return trails.flat();
  }

  private static calculateTrailProgress(missions: Mission[]): number {
    if (missions.length === 0) return 0;
    const completed = missions.filter(m => m.status === 'completed').length;
    return Math.round((completed / missions.length) * 100);
  }
}
