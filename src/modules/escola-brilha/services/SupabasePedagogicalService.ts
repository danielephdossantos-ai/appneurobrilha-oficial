import { supabase } from "@/integrations/supabase/client";

export interface BNCCSkill {
  id: string;
  codigo_bncc: string;
  ano: string | null;
  disciplina: string | null;
  titulo: string | null;
  objetivo: string | null;
  nivel: string | null;
  ordem?: number | null;
}

export interface Explanation {
  id: string;
  codigo_bncc: string;
  texto_professor: string | null;
  audio?: string | null;
  imagem?: string | null;
  video?: string | null;
}

export interface Activity {
  id: string;
  codigo_bncc: string;
  tipo: string | null;
  nivel: string | null;
  pergunta: string | null;
  alternativa_a: string | null;
  alternativa_b: string | null;
  alternativa_c: string | null;
  alternativa_d?: string | null;
  resposta: string | null;
  feedback: string | null;
  ordem?: number | null;
  explicacao_ativa?: string | null;
}

export interface LearningTrail {
  id: string;
  nome: string;
  descricao: string | null;
  ano: string;
  disciplina: string;
  habilidades_ordenadas: string[];
}

export interface StudentProgress {
  id: string;
  aluno_id: string;
  codigo_bncc: string;
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

  async getSkillByCode(code: string): Promise<BNCCSkill | null> {
    const { data, error } = await supabase
      .from('bncc_habilidades')
      .select('*')
      .eq('codigo_bncc', code)
      .maybeSingle();
    
    if (error) {
      console.error('Error fetching skill:', error);
      return null;
    }
    return data as BNCCSkill | null;
  }

  async getSkillsByGradeAndSubject(grade: string, subject?: string): Promise<BNCCSkill[]> {
    let query = supabase
      .from('bncc_habilidades')
      .select('*')
      .eq('ano', grade)
      .order('ordem', { ascending: true });
    
    if (subject) {
      query = query.eq('disciplina', subject);
    }

    const { data, error } = await query;
    if (error) {
      console.error('Error fetching skills:', error);
      return [];
    }
    return (data || []) as BNCCSkill[];
  }

  async getExplanationByCode(code: string): Promise<Explanation | null> {
    const { data, error } = await supabase
      .from('explicacoes')
      .select('*')
      .eq('codigo_bncc', code)
      .maybeSingle();
    
    if (error) {
      console.error('Error fetching explanation:', error);
      return null;
    }
    return data as Explanation | null;
  }

  async getActivitiesByCode(code: string): Promise<Activity[]> {
    const { data, error } = await supabase
      .from('atividades')
      .select('*')
      .eq('codigo_bncc', code)
      .order('ordem', { ascending: true });
    
    if (error) {
      console.error('Error fetching activities:', error);
      return [];
    }
    return (data || []) as Activity[];
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
        ? (trail.habilidades_ordenadas as unknown as string[]) 
        : []
    })) as LearningTrail[];
  }

  async getProgress(studentId: string, bnccCode: string): Promise<StudentProgress | null> {
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
    return data as StudentProgress | null;
  }

  async isSkillUnlocked(studentId: string, bnccCode: string): Promise<boolean> {
    return true; 
  }

  async saveProgress(progress: Partial<StudentProgress> & { aluno_id: string; codigo_bncc: string }) {
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
