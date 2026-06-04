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

export interface Activity {
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

export interface LearningTrail {
  id: string;
  nome: string;
  descricao: string;
  ano: string;
  disciplina: string;
  habilidades_ordenadas: string[];
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

  async getActivitiesByCode(code: string): Promise<Activity[]> {
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

  async getTrails(grade: string, subject?: string): Promise<LearningTrail[]> {
    let query = supabase
      .from('trilhas_aprendizagem')
      .select('*')
      .eq('ano', grade)
      .eq('ativa', true);
    
    if (subject) {
      query = query.eq('disciplina', subject);
    }

    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching trails:', error);
      return [];
    }
    return (data || []).map(trail => ({
      ...trail,
      habilidades_ordenadas: Array.isArray(trail.habilidades_ordenadas) 
        ? trail.habilidades_ordenadas 
        : []
    }));
  }

  async getStudentProgress(studentId: string, bnccCode: string): Promise<StudentProgress | null> {
    const { data, error } = await supabase
      .from('progresso_aluno')
      .select('*')
      .eq('aluno_id', studentId)
      .eq('codigo_bncc', bnccCode)
      .maybeSingle();
    
    if (error) {
      console.error('Error fetching student progress:', error);
      return null;
    }
    return data;
  }

  async updateStudentProgress(progress: Partial<StudentProgress> & { aluno_id: string; codigo_bncc: string }) {
    const { data, error } = await supabase
      .from('progresso_aluno')
      .upsert({
        ...progress,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'aluno_id,codigo_bncc'
      })
      .select()
      .single();

    if (error) {
      console.error('Error updating student progress:', error);
      throw error;
    }
    return data;
  }
}
