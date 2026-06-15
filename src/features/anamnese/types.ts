/**
 * Anamnese Feature - Questionário de histórico do aluno
 * 
 * Esta feature gerencia o questionário de anamnese, coleta de histórico
 * e armazenamento de dados iniciais do aluno.
 */

export interface AnamneseData {
  id: string;
  childId: string;
  medicalHistory?: string;
  developmentalHistory?: string;
  schoolHistory?: string;
  familyHistory?: string;
  neurodiversityTypes?: string[];
  observations?: string;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AnamneseSection {
  id: string;
  title: string;
  description: string;
  fields: AnamneseField[];
}

export interface AnamneseField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'checkbox' | 'date';
  required: boolean;
  options?: string[];
}
