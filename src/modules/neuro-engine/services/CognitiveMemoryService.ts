import { supabase } from "@/integrations/supabase/client";
import { CognitiveProfile, LongitudinalScore, CognitiveMetrics } from "../types";

export class CognitiveMemoryService {
  /**
   * Fetches the persistent cognitive profile for a child.
   */
  async getProfile(childId: string): Promise<CognitiveProfile | null> {
    const { data, error } = await supabase
      .from("cognitive_profile")
      .select("*")
      .eq("child_id", childId)
      .maybeSingle();

    if (error) {
      console.error("Error fetching cognitive profile:", error);
      throw error;
    }

    return data as CognitiveProfile | null;
  }

  /**
   * Updates the cognitive profile based on new activity data.
   */
  async updateProfile(childId: string, updates: Partial<CognitiveProfile>): Promise<void> {
    const { error } = await supabase
      .from("cognitive_profile")
      .upsert({
        child_id: childId,
        ...updates,
        updated_at: new Date().toISOString()
      }, { onConflict: 'child_id' });

    if (error) {
      console.error("Error updating cognitive profile:", error);
      throw error;
    }
  }

  /**
   * Records a new set of developmental scores for longitudinal tracking.
   */
  async recordLongitudinalScores(childId: string, metrics: CognitiveMetrics): Promise<void> {
    const { error } = await supabase
      .from("longitudinal_scores")
      .insert({
        child_id: childId,
        attention_score: metrics.attention,
        self_regulation_score: metrics.selfRegulation,
        autonomy_score: metrics.autonomy,
        language_score: metrics.language,
        memory_score: metrics.memory,
        coordination_score: metrics.coordination,
        reading_score: metrics.reading,
        math_score: metrics.math,
        recorded_at: new Date().toISOString()
      });

    if (error) {
      console.error("Error recording longitudinal scores:", error);
      throw error;
    }
  }

  /**
   * Fetches the historical evolution of scores.
   */
  async getLongitudinalHistory(childId: string): Promise<LongitudinalScore[]> {
    const { data, error } = await supabase
      .from("longitudinal_scores")
      .select("*")
      .eq("child_id", childId)
      .order("recorded_at", { ascending: true });

    if (error) {
      console.error("Error fetching longitudinal history:", error);
      throw error;
    }

    return data as LongitudinalScore[];
  }
}

export const cognitiveMemoryService = new CognitiveMemoryService();
