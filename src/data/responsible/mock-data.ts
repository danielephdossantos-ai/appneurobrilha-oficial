
import { Emotion } from "@/engines/regulation-engine/emotional-engine";
import { SensoryMode } from "@/modules/sensorial/engine/sensory-engine";


export interface SkillProgressData {
  skillId: string;
  skillCode: string;
  name: string;
  mastery: number; // 0-100
  status: 'iniciado' | 'em-progresso' | 'dominado' | 'revisao-necessaria';
  lastActivity: string;
}

export interface EmotionalHistoryEntry {
  timestamp: string;
  emotion: Emotion;
  intensity: number;
}

export interface FocusSession {
  timestamp: string;
  durationMinutes: number;
  focusLevel: number; // 0-1
  sensoryMode: SensoryMode;
}

export interface PedagogicalAlert {
  id: string;
  type: 'success' | 'warning' | 'info' | 'critical';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface MockResponsibleData {
  studentName: string;
  grade: string;
  skills: SkillProgressData[];
  emotionalHistory: EmotionalHistoryEntry[];
  focusSessions: FocusSession[];
  alerts: PedagogicalAlert[];
  dailyRoutine: {
    time: string;
    activity: string;
    completed: boolean;
  }[];
  cognitiveStats: {
    label: string;
    value: number;
    fullMark: number;
  }[];
}

export const mockResponsibleData: MockResponsibleData = {
  studentName: "Criança Brilhante",
  grade: "Série Escolar",
  skills: [
    { skillId: "EF02MA01", skillCode: "EF02MA01", name: "Números e Operações", mastery: 85, status: 'dominado', lastActivity: "2024-05-20" },
    { skillId: "EF02LP04", skillCode: "EF02LP04", name: "Leitura e Interpretação", mastery: 45, status: 'em-progresso', lastActivity: "2024-05-21" },
    { skillId: "EF02CI03", skillCode: "EF02CI03", name: "Ciências da Natureza", mastery: 12, status: 'iniciado', lastActivity: "2024-05-19" },
    { skillId: "EF02MA05", skillCode: "EF02MA05", name: "Geometria Espacial", mastery: 30, status: 'revisao-necessaria', lastActivity: "2024-05-18" },
  ],
  emotionalHistory: [
    { timestamp: "2024-05-20T10:00:00Z", emotion: "focado", intensity: 0.9 },
    { timestamp: "2024-05-20T10:15:00Z", emotion: "focado", intensity: 0.8 },
    { timestamp: "2024-05-20T10:30:00Z", emotion: "cansado", intensity: 0.6 },
    { timestamp: "2024-05-20T10:45:00Z", emotion: "frustrado", intensity: 0.7 },
    { timestamp: "2024-05-21T09:00:00Z", emotion: "feliz", intensity: 0.8 },
    { timestamp: "2024-05-21T09:30:00Z", emotion: "focado", intensity: 0.95 },
  ],
  focusSessions: [
    { timestamp: "2024-05-15", durationMinutes: 45, focusLevel: 0.8, sensoryMode: "foco" },
    { timestamp: "2024-05-16", durationMinutes: 30, focusLevel: 0.6, sensoryMode: "calmante" },
    { timestamp: "2024-05-17", durationMinutes: 55, focusLevel: 0.9, sensoryMode: "hiperfoco" },
    { timestamp: "2024-05-18", durationMinutes: 20, focusLevel: 0.4, sensoryMode: "baixa-estimulacao" },
    { timestamp: "2024-05-19", durationMinutes: 40, focusLevel: 0.7, sensoryMode: "foco" },
    { timestamp: "2024-05-20", durationMinutes: 50, focusLevel: 0.85, sensoryMode: "recompensa-intensa" },
  ],
  alerts: [
    { id: "1", type: "warning", title: "Fadiga Detectada", message: "Lucas apresentou sinais de fadiga após 40 minutos de Matemática. Sugerimos pausas mais frequentes.", timestamp: "2024-05-20T10:40:00Z", read: false },
    { id: "2", type: "success", title: "Domínio de Habilidade", message: "Parabéns! Lucas atingiu domínio pleno em 'Números e Operações' (EF02MA01).", timestamp: "2024-05-20T11:00:00Z", read: true },
    { id: "3", type: "info", title: "Nova Sugestão", message: "Com base no desempenho em Português, recomendamos o jogo 'Aventura das Letras' para reforço.", timestamp: "2024-05-21T09:15:00Z", read: false },
  ],
  dailyRoutine: [
    { time: "08:30", activity: "Matemática Criativa", completed: true },
    { time: "09:15", activity: "Pausa Sensorial", completed: true },
    { time: "09:30", activity: "Leitura Guiada", completed: true },
    { time: "10:15", activity: "Desafio Lógico", completed: false },
    { time: "11:00", activity: "Socioemocional", completed: false },
  ],
  cognitiveStats: [
    { label: "Memória", value: 85, fullMark: 100 },
    { label: "Atenção", value: 70, fullMark: 100 },
    { label: "Linguagem", value: 45, fullMark: 100 },
    { label: "Lógica", value: 90, fullMark: 100 },
    { label: "Controle Inibitório", value: 60, fullMark: 100 },
    { label: "Flexibilidade", value: 75, fullMark: 100 },
  ]
};
