export interface LessonStep {
  id: string;
  type: 'explanation' | 'interaction';
  mascot: 'pip' | 'pipa';
  speech: string;
  elements?: LessonElement[];
  interaction?: LessonInteraction;
  audioUrl?: string;
}

export interface LessonElement {
  id: string;
  type: 'image' | 'icon' | 'text';
  content: string;
  position: { x: number; y: number };
  animation: 'fade' | 'bounce' | 'slide';
  delay: number;
}

export interface LessonInteraction {
  type: 'choice' | 'drag' | 'click';
  options?: string[];
  correctAnswer?: string;
  hint?: string;
}

export interface Lesson {
  id: string;
  title: string;
  steps: LessonStep[];
}
