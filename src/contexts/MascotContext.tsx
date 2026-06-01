import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/database/supabase/client';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { toast } from 'sonner';

export interface Mascot {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category: string;
  base_stats: any;
  skins?: Record<string, string>;
}

export interface UserMascot {
  id: string;
  mascot_id: string;
  is_active: boolean;
  level: number;
  affinity: number;
  experience: number;
  gender: 'menino' | 'menina' | 'neutro';
  evolution_stage: 'egg' | 'baby' | 'child' | 'teen' | 'adult';
  room_metadata: any;
  inventory: any[];
  stats: {
    hunger: number;
    energy: number;
    happiness: number;
  };
  mascot: Mascot;
}

interface MascotContextType {
  activeMascot: UserMascot | null;
  userMascots: UserMascot[];
  isLoading: boolean;
  setActiveMascot: (mascotId: string) => Promise<void>;
  gainExperience: (amount: number) => Promise<void>;
  gainAffinity: (amount: number) => Promise<void>;
  updateStats: (stats: Partial<UserMascot['stats']>) => Promise<void>;
  evolve: () => Promise<void>;
}

const MascotContext = createContext<MascotContextType | undefined>(undefined);

export const MascotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [activeMascot, setActiveMascotState] = useState<UserMascot | null>(null);
  const [userMascots, setUserMascots] = useState<UserMascot[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMascots = async () => {
    if (!user) return;

    try {
      setIsLoading(true);
      const { data, error } = await (supabase as any)
        .from('user_mascots')
        .select(`
          *,
          mascot:mascots (*)
        `)
        .eq('user_id', user.id);

      if (error) throw error;

      setUserMascots(data as any[]);
      const active = data?.find((m: any) => m.is_active);
      setActiveMascotState((active as any) || null);
    } catch (error) {
      console.error('Error fetching mascots:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMascots();
  }, [user]);

  const setActiveMascot = async (mascotId: string) => {
    if (!user) return;

    try {
      const { error: resetError } = await (supabase as any)
        .from('user_mascots')
        .update({ is_active: false })
        .eq('user_id', user.id);

      if (resetError) throw resetError;

      const { error: setActiveError } = await (supabase as any)
        .from('user_mascots')
        .update({ is_active: true })
        .eq('user_id', user.id)
        .eq('mascot_id', mascotId);

      if (setActiveError) throw setActiveError;

      await fetchMascots();
      toast.success("Mascote Alterado", {
        description: "Seu novo companheiro está pronto!",
      });
    } catch (error) {
      console.error('Error setting active mascot:', error);
    }
  };

  const gainExperience = async (amount: number) => {
    if (!activeMascot || !user) return;

    const newExp = activeMascot.experience + amount;
    const expToNextLevel = activeMascot.level * 100;
    let newLevel = activeMascot.level;
    let finalExp = newExp;

    if (finalExp >= expToNextLevel) {
      newLevel += 1;
      finalExp -= expToNextLevel;
      toast.success("Level Up!", {
        description: `${activeMascot.mascot.name} subiu para o nível ${newLevel}!`,
      });
      
      // Auto evolve check
      if (newLevel === 5 && activeMascot.evolution_stage === 'baby') evolve();
      if (newLevel === 15 && activeMascot.evolution_stage === 'child') evolve();
      if (newLevel === 30 && activeMascot.evolution_stage === 'teen') evolve();
    }

    try {
      const { error } = await (supabase as any)
        .from('user_mascots')
        .update({ 
          experience: finalExp,
          level: newLevel
        })
        .eq('id', activeMascot.id);

      if (error) throw error;
      await fetchMascots();
    } catch (error) {
      console.error('Error gaining experience:', error);
    }
  };

  const gainAffinity = async (amount: number) => {
    if (!activeMascot || !user) return;
    try {
      const { error } = await (supabase as any)
        .from('user_mascots')
        .update({ 
          affinity: Math.min(100, activeMascot.affinity + amount)
        })
        .eq('id', activeMascot.id);
      if (error) throw error;
      await fetchMascots();
    } catch (error) {
      console.error('Error gaining affinity:', error);
    }
  };

  const updateStats = async (newStats: Partial<UserMascot['stats']>) => {
    if (!activeMascot || !user) return;
    try {
      const updatedStats = { ...activeMascot.stats, ...newStats };
      const { error } = await (supabase as any)
        .from('user_mascots')
        .update({ stats: updatedStats })
        .eq('id', activeMascot.id);
      if (error) throw error;
      await fetchMascots();
    } catch (error) {
      console.error('Error updating stats:', error);
    }
  };

  const evolve = async () => {
    if (!activeMascot || !user) return;
    const stages: UserMascot['evolution_stage'][] = ['egg', 'baby', 'child', 'teen', 'adult'];
    const currentIndex = stages.indexOf(activeMascot.evolution_stage);
    if (currentIndex < stages.length - 1) {
      const nextStage = stages[currentIndex + 1];
      try {
        const { error } = await (supabase as any)
          .from('user_mascots')
          .update({ evolution_stage: nextStage })
          .eq('id', activeMascot.id);
        if (error) throw error;
        await fetchMascots();
        toast.success("Evolução!", {
          description: `${activeMascot.mascot.name} evoluiu para o estágio ${nextStage}!`,
        });
      } catch (error) {
        console.error('Error evolving mascot:', error);
      }
    }
  };

  return (
    <MascotContext.Provider value={{ 
      activeMascot, 
      userMascots, 
      isLoading, 
      setActiveMascot,
      gainExperience,
      gainAffinity,
      updateStats,
      evolve
    }}>
      {children}
    </MascotContext.Provider>
  );
};

export const useMascot = () => {
  const context = useContext(MascotContext);
  if (context === undefined) {
    throw new Error('useMascot must be used within a MascotProvider');
  }
  return context;
};
