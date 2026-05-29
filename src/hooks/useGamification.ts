
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
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
            totalStars: profileData.total_stars,
            totalCoins: profileData.coins,
            energy: 100, // Temporário até integrar energia real
            mascotLevel: profileData.level,
            unlockedItems: []
          });
        }

        if (mascotData) {
          setMascot({
            name: mascotData.name,
            type: mascotData.type,
            evolutionStage: mascotData.evolution_stage,
            currentEmotion: mascotData.current_emotion,
            energyLevel: mascotData.energy_level,
            affinityPoints: mascotData.affinity_points
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
      mascotLevel: profile.mascotLevel // Nível calculado via XP no backend ou local
    };

    try {
      const { error } = await supabase
        .from('gamification_profiles')
        .update({
          total_stars: newProfile.totalStars,
          coins: newProfile.totalCoins,
          xp: (profile as any).xp + xp, // Simplificação
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
