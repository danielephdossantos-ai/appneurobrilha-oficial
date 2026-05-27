import { supabase } from "@/integrations/supabase/client";
import { CognitiveProfile, LongitudinalScore, CognitiveMetrics } from "../types";
import { get, set } from 'idb-keyval';

export class CognitiveMemoryService {
  private static CACHE_KEY_PREFIX = "cognitive_cache_";

  private async getCache<T>(key: string): Promise<T | null> {
    const data = await get<T>(`${CognitiveMemoryService.CACHE_KEY_PREFIX}${key}`);
    return data ?? null;
  }

  private async setCache<T>(key: string, data: T): Promise<void> {
    await set(`${CognitiveMemoryService.CACHE_KEY_PREFIX}${key}`, data);
  }

  /**
   * Fetches the persistent cognitive profile for a child.
   */
  async getProfile(childId: string): Promise<CognitiveProfile | null> {
    try {
      if (typeof window !== 'undefined' && !navigator.onLine) {
        return await this.getCache<CognitiveProfile>(`profile_${childId}`);
      }

      const { data, error } = await supabase
        .from("cognitive_profile")
        .select("*")
        .eq("child_id", childId)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        await this.setCache(`profile_${childId}`, data);
      }

      return data as CognitiveProfile | null;
    } catch (error) {
      console.warn("Falling back to cache for profile:", error);
      return await this.getCache<CognitiveProfile>(`profile_${childId}`);
    }
  }

  /**
   * Updates the cognitive profile based on new activity data.
   */
  async updateProfile(childId: string, updates: Partial<CognitiveProfile>): Promise<void> {
    const profile = await this.getProfile(childId);
    const updatedProfile = { ...profile, ...updates, child_id: childId, updated_at: new Date().toISOString() };
    
    // Update local cache immediately
    await this.setCache(`profile_${childId}`, updatedProfile);

    if (typeof window !== 'undefined' && !navigator.onLine) {
      return;
    }

    const { error } = await supabase
      .from("cognitive_profile")
      .upsert(updatedProfile, { onConflict: 'child_id' });

    if (error) {
      console.error("Error updating cognitive profile:", error);
      throw error;
    }
  }

  /**
   * Records a new set of developmental scores for longitudinal tracking.
   */
  async recordLongitudinalScores(childId: string, metrics: CognitiveMetrics, date?: Date): Promise<void> {
    const scoreData = {
      child_id: childId,
      attention_score: metrics.attention,
      self_regulation_score: metrics.selfRegulation,
      autonomy_score: metrics.autonomy,
      language_score: metrics.language,
      memory_score: metrics.memory,
      coordination_score: metrics.coordination,
      reading_score: metrics.reading,
      math_score: metrics.math,
      recorded_at: (date || new Date()).toISOString()
    };

    // Store in local history cache
    const history = await this.getLongitudinalHistory(childId);
    await this.setCache(`history_${childId}`, [...history, scoreData]);

    if (typeof window !== 'undefined' && !navigator.onLine) {
      return;
    }

    const { error } = await supabase
      .from("longitudinal_scores")
      .insert(scoreData);

    if (error) {
      console.error("Error recording longitudinal scores:", error);
      throw error;
    }
  }

  /**
   * Fetches the historical evolution of scores.
   */
  async getLongitudinalHistory(childId: string): Promise<LongitudinalScore[]> {
    try {
      if (typeof window !== 'undefined' && !navigator.onLine) {
        const cached = await this.getCache<LongitudinalScore[]>(`history_${childId}`);
        return cached || [];
      }

      const { data, error } = await supabase
        .from("longitudinal_scores")
        .select("*")
        .eq("child_id", childId)
        .order("recorded_at", { ascending: true });

      if (error) throw error;

      if (data) {
        await this.setCache(`history_${childId}`, data);
      }

      return data as LongitudinalScore[];
    } catch (error) {
      console.warn("Falling back to cache for history:", error);
      const cached = await this.getCache<LongitudinalScore[]>(`history_${childId}`);
      return cached || [];
    }
  }
}

export const cognitiveMemoryService = new CognitiveMemoryService();
