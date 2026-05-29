
import { supabase } from "@/database/supabase/client";
import { ProgressionStats, SkillMastery, ReviewSchedule } from "@/engines/progression-engine/types";

export class ProgressionService {
  static async getStats(childId: string, materia: string): Promise<ProgressionStats | null> {
    const { data, error } = await supabase
      .from('child_progression_stats')
      .select('*')
      .eq('child_id', childId)
      .eq('materia', materia)
      .maybeSingle();

    if (error) return null;
    return data;
  }

  static async getSkillMastery(childId: string, materia: string): Promise<SkillMastery[]> {
    const { data, error } = await supabase
      .from('child_skill_mastery')
      .select('*')
      .eq('child_id', childId)
      .eq('materia', materia);

    if (error) return [];
    return data || [];
  }

  static async getPendingReviews(childId: string): Promise<any[]> {
    const { data, error } = await supabase
      .from('spaced_repetition_schedule')
      .select(`
        *,
        activity:pedagogical_activities_base(*)
      `)
      .eq('child_id', childId)
      .lte('next_review_at', new Date().toISOString());

    if (error) return [];
    return data || [];
  }
}
