export type JornadaSource = 
  | "curriculo_anual" 
  | "primeiros_anos" 
  | "neuro_treino" 
  | "plano_neuro"
  | "reforco" 
  | "aulas_continuas"
  | "brilha_vida";

export type JornadaStatus = "pending" | "completed" | "skipped" | "blocked";

export interface JornadaItem {
  id?: string;
  child_id: string;
  source: JornadaSource;
  source_id: string; // O identificador original (slug ou código BNCC)
  activity_type?: string;
  title: string;
  category?: string;
  skill_id?: string;
  bncc_code?: string;
  objective?: string;
  priority_score: number;
  priority_reason?: string;
  level?: number;
  duration?: number;
  scheduled_date?: string;
  week?: number;
  day?: number;
  sequence_order?: number;
  status: JornadaStatus;
  metadata?: Record<string, any>;
  created_at?: string;
  updated_at?: string;
}
