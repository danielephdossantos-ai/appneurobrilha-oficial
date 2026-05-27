export interface ActivityTemplate {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  difficulty: number;
  cognitiveLoad: number;
  sensoryProfile: SensoryProfile;
}

export type ActivityType = 
  | 'drag-and-drop'
  | 'multiple-choice'
  | 'association'
  | 'complete'
  | 'reading'
  | 'logical-sequence'
  | 'memory'
  | 'pairing'
  | 'visual-math'
  | 'interpretation';

export interface SensoryProfile {
  visualStimulus: 'low' | 'medium' | 'high';
  audioRequirement: boolean;
  motorComplexity: 'low' | 'medium' | 'high';
}
