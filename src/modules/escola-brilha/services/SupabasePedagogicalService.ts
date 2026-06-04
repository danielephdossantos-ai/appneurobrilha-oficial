import { supabase } from "@/integrations/supabase/client";

export interface BNCCSkill {
  id: string;
  codigo_bncc: string;
  ano: string | null;
  disciplina: string | null;
  titulo: string | null;
  objetivo: string | null;
  nivel: string | null;
}

export interface Explanation {
  id: string;
  codigo_bncc: string | null;
  texto_professor: string | null;
  audio: string | null;
  imagem: string | null;
  video: string | null;
}

export interface ActivityDB {
  id: string;
  codigo_bncc: string | null;
  tipo: string | null;
  nivel: string | null;
  pergunta: string | null;
  alternativa_a: string | null;
  alternativa_b: string | null;
  alternativa_c: string | null;
  alternativa_d: string | null;
  resposta: string | null;
  feedback: string | null;
  ordem: number | null;
  explicacao_ativa: string | null;
}

export interface StudentProgress {
  id: string;
  aluno_id: string | null;
  codigo_bncc: string | null;
  tentativas: number | null;
  acertos: number | null;
  erros: number | null;
  dominio: number | null;
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

  async getSkillsByGradeAndSubject(grade: string, subject: string): Promise<BNCCSkill[]> {
    const { data, error } = await supabase
      .from('bncc_habilidades')
      .select('*')
      .eq('ano', grade)
      .ilike('disciplina', `%${subject}%`);

    if (error) {
      console.error('Error fetching skills:', error);
      return [];
    }
    return data || [];
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
