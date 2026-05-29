
import { supabase } from "@/database/supabase/client";
import { SkillMastery, ReviewSchedule, ProgressionStats } from "@/engines/progression-engine/types";

export class ProgressionEngine {
  /**
   * Atualiza o domínio de uma habilidade após uma atividade
   */
  static async updateMastery(childId: string, skillCode: string, materia: string, success: boolean) {
    const { data: current } = await supabase
      .from('child_skill_mastery')
      .select('*')
      .eq('child_id', childId)
      .eq('skill_code', skillCode)
      .maybeSingle();

    const total_attempts = (current?.total_attempts || 0) + 1;
    const old_success_count = Math.round((current?.success_rate || 0) * (current?.total_attempts || 0) / 100);
    const new_success_count = success ? old_success_count + 1 : old_success_count;
    const success_rate = (new_success_count / total_attempts) * 100;
    
    // Nível de domínio baseado na taxa de sucesso recente e total
    // Simples: média ponderada (exemplo)
    const mastery_level = Math.min(100, success_rate);

    const { error } = await supabase
      .from('child_skill_mastery')
      .upsert({
        child_id: childId,
        skill_code: skillCode,
        materia,
        total_attempts,
        success_rate,
        mastery_level,
        last_attempt_at: new Date().toISOString()
      }, { onConflict: 'child_id,skill_code' });

    if (error) throw error;
    
    // Atualiza estatísticas gerais
    await this.updateGeneralStats(childId, materia);
    
    return { mastery_level, success_rate };
  }

  /**
   * Sistema de Repetição Espaçada (SM-2 Simplificado)
   * score: 1 (difícil) a 5 (fácil)
   */
  static async scheduleNextReview(childId: string, activityId: string, score: number) {
    const { data: current } = await supabase
      .from('spaced_repetition_schedule')
      .select('*')
      .eq('child_id', childId)
      .eq('activity_id', activityId)
      .maybeSingle();

    let interval = 1;
    let easeFactor = current?.ease_factor || 2.5;

    if (score >= 3) {
      if (current === null) {
        interval = 1;
      } else if (current.interval_days === 1) {
        interval = 6;
      } else {
        interval = Math.round(current.interval_days * easeFactor);
      }
      easeFactor = easeFactor + (0.1 - (5 - score) * (0.08 + (5 - score) * 0.02));
    } else {
      interval = 1;
      easeFactor = Math.max(1.3, easeFactor - 0.2);
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    const { error } = await supabase
      .from('spaced_repetition_schedule')
      .upsert({
        child_id: childId,
        activity_id: activityId,
        next_review_at: nextReview.toISOString(),
        interval_days: interval,
        ease_factor: easeFactor,
        last_performance_score: score
      }, { onConflict: 'child_id,activity_id' });

    if (error) throw error;
  }

  private static async updateGeneralStats(childId: string, materia: string) {
    // Busca todas as habilidades da matéria para calcular a média
    const { data: skills } = await supabase
      .from('child_skill_mastery')
      .select('mastery_level')
      .eq('child_id', childId)
      .eq('materia', materia);

    if (!skills || skills.length === 0) return;

    const evolution_percentage = skills.reduce((acc, s) => acc + Number(s.mastery_level), 0) / skills.length;

    const { data: current } = await supabase
      .from('child_progression_stats')
      .select('*')
      .eq('child_id', childId)
      .eq('materia', materia)
      .maybeSingle();

    const { error } = await supabase
      .from('child_progression_stats')
      .upsert({
        child_id: childId,
        materia,
        evolution_percentage,
        activities_completed: (current?.activities_completed || 0) + 1,
        last_activity_at: new Date().toISOString()
      }, { onConflict: 'child_id,materia' });

    if (error) throw error;
  }

  /**
   * Recuperação Automática: Verifica se a criança precisa de reforço
   */
  static async checkNeedForRecovery(childId: string, skillCode: string): Promise<boolean> {
    const { data } = await supabase
      .from('child_skill_mastery')
      .select('mastery_level')
      .eq('child_id', childId)
      .eq('skill_code', skillCode)
      .maybeSingle();

    // Se o domínio for menor que 50% após algumas tentativas, sugere recuperação
    return data ? data.mastery_level < 50 : false;
  }
}
