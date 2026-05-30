import { Trail, AreaType, Mission } from "../types/school";

export class TrailService {
  private static trails: Trail[] = [
    {
      id: 'trail-ling-1',
      area: 'linguagem',
      title: 'Aventura das Letras',
      progress: 0,
      missions: this.generateMockMissions('Letras'),
      phases: {
        inicio: ['m1'],
        desenvolvimento: ['m2', 'm3'],
        consolidacao: ['m4'],
        reforco: ['m5'],
        revisao: ['m6']
      }
    },
    {
      id: 'trail-math-1',
      area: 'matematica',
      title: 'Mundo dos Números',
      progress: 35,
      missions: this.generateMockMissions('Números'),
      phases: {
        inicio: ['m1'],
        desenvolvimento: ['m2', 'm3'],
        consolidacao: ['m4'],
        reforco: ['m5'],
        revisao: ['m6']
      }
    }
  ];

  private static generateMockMissions(prefix: string): Mission[] {
    return Array.from({ length: 6 }, (_, i) => ({
      id: `m${i + 1}`,
      title: `${prefix} Nível ${i + 1}`,
      description: `Explorando ${prefix.toLowerCase()} de forma divertida.`,
      status: i === 0 ? 'available' : 'locked',
      order: i,
      activities: [
        { id: `a${i}-1`, title: 'Desafio Inicial', type: 'drag-and-drop', bncc_codes: ['EI03EF01'], status: 'pending' },
        { id: `a${i}-2`, title: 'Prática Guiada', type: 'multiple-choice', bncc_codes: ['EI03EF01'], status: 'pending' }
      ]
    }));
  }

  static getTrailsByArea(area: AreaType): Trail[] {
    return this.trails.filter(t => t.area === area);
  }

  static getAllTrails(): Trail[] {
    return this.trails;
  }
}
