import { z } from "zod";

export const AreaTypeSchema = z.enum([
  'linguagem',
  'matematica',
  'ciencias',
  'artes',
  'coordenacao_motora',
  'logica'
]);

export type AreaType = z.infer<typeof AreaTypeSchema>;

export const MissionStatusSchema = z.enum(['locked', 'available', 'in_progress', 'completed']);

export interface Activity {
  id: string;
  title: string;
  type: string;
  bncc_codes: string[];
  status: 'pending' | 'completed';
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  status: z.infer<typeof MissionStatusSchema>;
  activities: Activity[];
  order: number;
}

export interface Trail {
  id: string;
  area: AreaType;
  title: string;
  missions: Mission[];
  progress: number; // 0 to 100
  phases: {
    inicio: string[]; // mission ids
    desenvolvimento: string[];
    consolidacao: string[];
    reforco: string[];
    revisao: string[];
  };
}

export interface PedagogicalJourney {
  childId: string;
  currentTrails: Trail[];
  completedTrailsCount: number;
  bnccProgress: Record<string, number>; // code -> percentage
}
