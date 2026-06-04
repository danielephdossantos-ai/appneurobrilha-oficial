import { supabase } from "@/integrations/supabase/client";

export interface BNCCSkill {
  id: string;
  codigo_bncc: string;
  ano: string | null;
  disciplina: string | null;
  titulo: string | null;
  objetivo: string | null;
  nivel: string | null;
  ordem: number | null;
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
      .ilike('disciplina', `%${subject}%`)
      .order('ordem', { ascending: true });


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

  async getNextSkill(currentSkillCode: string): Promise<BNCCSkill | null> {
    const currentSkill = await this.getSkillByCode(currentSkillCode);
    if (!currentSkill || currentSkill.ordem === null || !currentSkill.ano || !currentSkill.disciplina) return null;

    const { data, error } = await supabase
      .from('bncc_habilidades')
      .select('*')
      .eq('ano', currentSkill.ano)
      .eq('disciplina', currentSkill.disciplina)
      .gt('ordem', currentSkill.ordem)
      .order('ordem', { ascending: true })
      .limit(1)
      .maybeSingle();

    if (error) return null;
    return data;
  }

  async isSkillUnlocked(alunoId: string, skillCode: string): Promise<boolean> {
    const skill = await this.getSkillByCode(skillCode);
    if (!skill || !skill.ano || !skill.disciplina) return false;
    
    // First skill is always unlocked
    if (skill.ordem === 1) return true;

    // Check if the previous skill has 80% mastery
    const { data, error } = await supabase
      .from('bncc_habilidades')
      .select('codigo_bncc')
      .eq('ano', skill.ano)
      .eq('disciplina', skill.disciplina)
      .lt('ordem', skill.ordem)
      .order('ordem', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error || !data) return true; // If no previous skill found, unlock it

    const prevProgress = await this.getProgress(alunoId, data.codigo_bncc);
    return (prevProgress?.dominio || 0) >= 80;
  }
}
