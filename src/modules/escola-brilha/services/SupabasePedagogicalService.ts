import { supabase } from "@/integrations/supabase/client";

export interface BNCCSkill {
  id: string;
  codigo_bncc: string;
  ano: string;
  disciplina: string;
  titulo: string;
  objetivo: string;
  nivel: string;
}

export interface Explanation {
  id: string;
  codigo_bncc: string;
  texto_professor: string;
  audio?: string;
  imagem?: string;
  video?: string;
}

export interface ActivityDB {
  id: string;
  codigo_bncc: string;
  tipo: string;
  nivel: string;
  pergunta: string;
  alternativa_a: string;
  alternativa_b: string;
  alternativa_c: string;
  resposta: string;
  feedback: string;
}

export interface StudentProgress {
  id: string;
  aluno_id: string;
  codigo_bncc: string;
  tentativas: number;
  acertos: number;
  erros: number;
  dominio: number;
}

export class SupabasePedagogicalService {
  private static instance: SupabasePedagogicalService;

  private constructor() {}

  public static getInstance(): SupabasePedagogicalService {
    if (!SupabasePedagogicalService.instance) {
      SupabasePedagogicalService.instance = new SupabasePedagogicalService();
    }
    return SupabasePedagogicalService.instance;
  }

  async getSkillByCode(code: string): Promise<BNCCSkill | null> {
    const { data, error } = await supabase
      .from('bncc_habilidades')
      .select('*')
      .eq('codigo_bncc', code)
      .single();

    if (error) {
      console.error('Error fetching skill:', error);
      return null;
    }
    return data;
  }

  async getExplanationByCode(code: string): Promise<Explanation | null> {
    const { data, error } = await supabase
      .from('explicacoes')
      .select('*')
      .eq('codigo_bncc', code)
      .single();

    if (error) {
      console.error('Error fetching explanation:', error);
      return null;
    }
    return data;
  }

  async getActivitiesByCode(code: string): Promise<ActivityDB[]> {
    const { data, error } = await supabase
      .from('atividades')
      .select('*')
      .eq('codigo_bncc', code);

    if (error) {
      console.error('Error fetching activities:', error);
      return [];
    }
    return data || [];
  }

  async saveProgress(progress: Omit<StudentProgress, 'id'>): Promise<void> {
    const { error } = await supabase
      .from('progresso_aluno')
      .upsert(
        { 
          aluno_id: progress.aluno_id, 
          codigo_bncc: progress.codigo_bncc,
          tentativas: progress.tentativas,
          acertos: progress.acertos,
          erros: progress.erros,
          dominio: progress.dominio,
          updated_at: new Date().toISOString()
        },
        { onConflict: 'aluno_id,codigo_bncc' }
      );

    if (error) {
      console.error('Error saving progress:', error);
    }
  }

  async getProgress(alunoId: string, code: string): Promise<StudentProgress | null> {
    const { data, error } = await supabase
      .from('progresso_aluno')
      .select('*')
      .eq('aluno_id', alunoId)
      .eq('codigo_bncc', code)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 is not found
      console.error('Error fetching progress:', error);
      return null;
    }
    return data;
  }
}
