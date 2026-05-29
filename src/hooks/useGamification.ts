
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { RewardSystem, RewardState, MascotState } from '@/engines/reward-engine/reward-system';
import { OfflineEngine, ConflictEngine } from '@/engines/offline';
import { db } from '@/engines/offline/database';
import { useLiveQuery } from 'dexie-react-hooks';


export function useGamification(childId?: string) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<RewardState | null>(null);
  const [mascot, setMascot] = useState<MascotState | null>(null);

  // Carregar dados locais reativamente (Dexie)
  const localProfile = useLiveQuery(
    () => db.records.get(`gamification_${childId}`),
    [childId]
  );
  
  const localMascot = useLiveQuery(
    () => db.records.get(`mascot_${childId}`),
    [childId]
  );

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
          const resolvedProfile = ConflictEngine.resolve(localProfile?.data, profileData);
          setProfile({
            totalStars: resolvedProfile.total_stars ?? 0,
            totalCoins: resolvedProfile.coins ?? 0,
            energy: 100, 
            mascotLevel: resolvedProfile.level ?? 1,
            unlockedItems: []
          });
          
          // Sincronizar cache local
          await db.records.put({
            id: `gamification_${childId}`,
            type: 'gamification_profile',
            data: resolvedProfile,
            updatedAt: Date.now()
          });
        }

        if (mascotData) {
          const resolvedMascot = ConflictEngine.resolve(localMascot?.data, mascotData);
          setMascot({
            name: resolvedMascot.name,
            type: resolvedMascot.type,
            evolutionStage: resolvedMascot.evolution_stage ?? 1,
            currentEmotion: resolvedMascot.current_emotion as any,
            energyLevel: resolvedMascot.energy_level ?? 100,
            affinityPoints: resolvedMascot.affinity_points ?? 0
          });

          await db.records.put({
            id: `mascot_${childId}`,
            type: 'mascot_state',
            data: resolvedMascot,
            updatedAt: Date.now()
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
      const updateData = {
        child_id: childId,
        total_stars: newProfile.totalStars,
        coins: newProfile.totalCoins,
        xp: ((profile as any).xp || 0) + xp,
        updated_at: new Date().toISOString()
      };

      // Usar OfflineEngine para garantir persistência imediata
      await OfflineEngine.queueAction('gamification_profile_update', updateData);
      
      setProfile({ ...profile, ...newProfile });
    } catch (err) {
      console.error('Erro ao salvar recompensas:', err);
    }
  };

  const updateMascotEmotion = async (emotion: MascotState['currentEmotion']) => {
    if (!childId) return;

    try {
      const updateData = {
        child_id: childId,
        current_emotion: emotion,
        updated_at: new Date().toISOString()
      };

      await OfflineEngine.queueAction('mascot_state_update', updateData);
      
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
