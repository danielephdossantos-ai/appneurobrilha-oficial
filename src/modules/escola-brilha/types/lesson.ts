export type BNCC_Field = 
  | 'escuta_fala' // Escuta, Fala, Pensamento e Imaginação
  | 'espacos_tempos' // Espaços, Tempos, Quantidades, Relações e Transformações
  | 'corpo_gestos' // Corpo, Gestos e Movimentos
  | 'tracos_sons' // Traços, Sons, Cores e Formas
  | 'eu_outro_nos'; // O Eu, o Outro e o Nós

export type LessonPhase = 

  | 'explanation' 
  | 'demonstration' 
  | 'guided_training' 
  | 'practice' 
  | 'challenge' 
  | 'mastery' 
  | 'spaced_review';

export interface LessonStep {
  id: string;
  phase: LessonPhase;
  type: 'explanation' | 'interaction' | 'demonstration';
  mascot: 'pip' | 'pipa';
  speech: string;
  elements?: LessonElement[];
  interaction?: LessonInteraction;
  audioUrl?: string;
  showHelp?: boolean;
}

export interface LessonElement {
  id: string;
  type: 'image' | 'icon' | 'text' | 'shape';
  content: string;
  position: { x: number; y: number };
  animation: 'fade' | 'bounce' | 'slide' | 'pop';
  delay: number;
}

export interface LessonInteraction {
  type: 'choice' | 'drag' | 'click';
  options?: string[];
  correctAnswer?: string;
  hint?: string;
}

export interface LessonPerformance {
  hits: number;
  misses: number;
  startTime: number;
  endTime?: number;
  percentage: number;
}

export interface Lesson {
  id: string;
  title: string;
  bncc_field?: BNCC_Field;
  skill_bncc?: string;
  xp?: number;
  steps: LessonStep[];
}

