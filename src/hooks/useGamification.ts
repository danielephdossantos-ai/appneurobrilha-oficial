
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { RewardSystem, RewardState, MascotState } from '@/engines/reward-engine/reward-system';

export function useGamification(childId?: string) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<RewardState | null>(null);
  const [mascot, setMascot] = useState<MascotState | null>(null);

  useEffect(() => {
    if (!childId) return;

    const fetchGamificationData = async () => {
      try {
        setLoading(true);
        
        // 1. Carregar Perfil
        const { data: profileData, error: profileError } = await supabase
          .from('gamification_profiles')
          .select('*')
          .eq('child_id', childId)
          .single();

        if (profileError && profileError.code !== 'PGRST116') throw profileError;

        // 2. Carregar Mascote
        const { data: mascotData, error: mascotError } = await supabase
          .from('mascot_states')
          .select('*')
          .eq('child_id', childId)
          .single();

        if (mascotError && mascotError.code !== 'PGRST116') throw mascotError;

        if (profileData) {
          setProfile({
            totalStars: profileData.total_stars ?? 0,
            totalCoins: profileData.coins ?? 0,
            energy: 100, 
            mascotLevel: profileData.level ?? 1,
            unlockedItems: []
          });
        }

        if (mascotData) {
          setMascot({
            name: mascotData.name,
            type: mascotData.type,
            evolutionStage: mascotData.evolution_stage ?? 1,
            currentEmotion: mascotData.current_emotion as any,
            energyLevel: mascotData.energy_level ?? 100,
            affinityPoints: mascotData.affinity_points ?? 0
          });
        }
      } catch (err) {
        console.error('Erro ao carregar gamificação:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGamificationData();
  }, [childId]);

  const updateRewards = async (stars: number, coins: number, xp: number) => {
    if (!childId || !profile) return;

    const newProfile = {
      totalStars: profile.totalStars + stars,
      totalCoins: profile.totalCoins + coins,
      mascotLevel: profile.mascotLevel 
    };

    try {
      const { error } = await supabase
        .from('gamification_profiles')
        .update({
          total_stars: newProfile.totalStars,
          coins: newProfile.totalCoins,
          xp: ((profile as any).xp || 0) + xp,
          updated_at: new Date().toISOString()
        })
        .eq('child_id', childId);

      if (error) throw error;
      setProfile({ ...profile, ...newProfile });
    } catch (err) {
      console.error('Erro ao salvar recompensas:', err);
    }
  };

  const updateMascotEmotion = async (emotion: MascotState['currentEmotion']) => {
    if (!childId) return;

    try {
      const { error } = await supabase
        .from('mascot_states')
        .update({ current_emotion: emotion })
        .eq('child_id', childId);

      if (error) throw error;
      if (mascot) setMascot({ ...mascot, currentEmotion: emotion });
    } catch (err) {
      console.error('Erro ao atualizar emoção do mascote:', err);
    }
  };

  return {
    profile,
    mascot,
    loading,
    updateRewards,
    updateMascotEmotion
  };
}
