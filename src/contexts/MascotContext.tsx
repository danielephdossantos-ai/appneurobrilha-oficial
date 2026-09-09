import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/database/supabase/client';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { useAppState } from '@/core/store';
import { getChildMascotProfile, ensureChildMascotProfile, type ChildMascotProfile, rewardChildJourney } from '@/lib/child-mascot';
import { toast } from 'sonner';
import { syncMascoteAssignmentsFromCloud } from '@/escola-brilha/mascote-assign';

export interface Mascot {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category: string;
  base_stats: any;
  skins?: Record<string,string>;
}
export interface UserMascot {
  id: string;
  mascot_id: string;
  is_active: boolean;
  level: number;
  affinity: number;
  experience: number;
  mascot: Mascot;
}
interface MascotContextType {
  activeMascot: UserMascot | null;
  userMascots: UserMascot[];
  childMascotProfile: ChildMascotProfile | null;
  isLoading: boolean;
  setActiveMascot: (mascotId: string) => Promise<void>;
  gainExperience: (amount: number) => Promise<void>;
  gainAffinity: (amount: number) => Promise<void>;
  refreshMascot: () => Promise<void>;
}
const MascotContext = createContext<MascotContextType | undefined>(undefined);

const MASCOT_IDS = {
  pip: '00000000-0000-0000-0000-000000000001',
  pipa: '00000000-0000-0000-0000-000000000002',
} as const;

export const MascotProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const { user } = useAuth();
  const { activeChild } = useAppState();
  const [activeMascot,setActiveMascotState] = useState<UserMascot|null>(null);
  const [userMascots,setUserMascots] = useState<UserMascot[]>([]);
  const [childMascotProfile,setChildMascotProfile] = useState<ChildMascotProfile|null>(null);
  const [isLoading,setIsLoading] = useState(true);

  const fetchMascots = async () => {
    if (!user || !activeChild?.id) {
      setActiveMascotState(null); setUserMascots([]); setChildMascotProfile(null); setIsLoading(false); return;
    }
    try {
      setIsLoading(true);
      let profile = await getChildMascotProfile(activeChild.id);
      if (!profile) {
        let starter: 'pip'|'pipa' = 'pip';
        let alreadyBorn = false;
        try {
          const saved = localStorage.getItem(`neurobrilha:starterMascot:${activeChild.id}`);
          if (saved === 'pipa') starter = 'pipa';
          alreadyBorn = localStorage.getItem(`neurobrilha:hasSeenEggHatch:${activeChild.id}`) === '1';
        } catch {}
        profile = await ensureChildMascotProfile(activeChild.id, starter) as any;
        if (profile && alreadyBorn) {
          await (supabase as any).from('child_mascot_profiles').update({ starter_mascot:starter, active_mascot:starter, stage:'bebe', equipped_skin:starter==='pipa'?'pipa-original':'original', born_at:new Date().toISOString() }).eq('child_id',activeChild.id);
          profile = await getChildMascotProfile(activeChild.id);
        }
      }
      if (!profile) return;
      setChildMascotProfile(profile);
      await syncMascoteAssignmentsFromCloud(activeChild.id).catch(()=>undefined);
      const { data: catalogs, error } = await (supabase as any).from('mascots').select('*').in('id',[MASCOT_IDS.pip,MASCOT_IDS.pipa]);
      if (error) throw error;
      const rows: UserMascot[] = (catalogs ?? []).map((m:any) => {
        const key = m.id === MASCOT_IDS.pipa ? 'pipa' : 'pip';
        return {
          id: `${activeChild.id}:${m.id}`,
          mascot_id: m.id,
          is_active: profile!.active_mascot === key,
          level: profile!.mascot_level,
          affinity: profile!.affinity,
          experience: profile!.mascot_xp,
          mascot: m,
        };
      });
      setUserMascots(rows);
      setActiveMascotState(rows.find(r=>r.is_active) ?? rows.find(r=>r.mascot_id===MASCOT_IDS.pip) ?? null);
    } catch (e) {
      console.error('Error fetching child mascot:',e);
    } finally { setIsLoading(false); }
  };

  useEffect(()=>{ fetchMascots(); },[user?.id, activeChild?.id]);

  useEffect(()=>{
    if (!activeMascot || !activeChild) return;
    const key = `neurobrilha:lastSeenUnlockLevel:${activeChild.id}`;
    const lastSeen = Number(localStorage.getItem(key) || '0');
    if (activeMascot.level <= lastSeen) return;
    (async()=>{
      const {data} = await (supabase as any).from('mascot_catalog_items').select('name,required_level').gt('required_level',lastSeen).lte('required_level',activeMascot.level);
      (data ?? []).forEach((item:any)=>toast.success(`🎉 Desbloqueado: ${item.name}`, {description:`Disponível a partir do nível ${item.required_level}.`}));
      localStorage.setItem(key,String(activeMascot.level));
    })();
  },[activeMascot?.level, activeChild?.id]);

  const setActiveMascot = async (mascotId:string) => {
    if (!activeChild?.id) return;
    const choice = mascotId === MASCOT_IDS.pipa ? 'pipa' : 'pip';
    const {error} = await (supabase as any).from('child_mascot_profiles').update({active_mascot:choice, updated_at:new Date().toISOString()}).eq('child_id',activeChild.id);
    if (error) { toast.error('Não foi possível trocar o mascote.'); return; }
    await fetchMascots();
    toast.success(`${choice === 'pipa' ? 'Pipa' : 'Pip'} agora acompanha ${activeChild.nome}!`);
  };
  const gainExperience = async (amount:number) => {
    if (!activeChild?.id) return;
    await rewardChildJourney(activeChild.id,0,Math.max(0,amount),0);
    await fetchMascots();
  };
  const gainAffinity = async (amount:number) => {
    if (!activeChild?.id) return;
    await rewardChildJourney(activeChild.id,0,0,amount);
    await fetchMascots();
  };

  return <MascotContext.Provider value={{activeMascot,userMascots,childMascotProfile,isLoading,setActiveMascot,gainExperience,gainAffinity,refreshMascot:fetchMascots}}>{children}</MascotContext.Provider>;
};
export const useMascot = () => {
  const c = useContext(MascotContext);
  if (!c) throw new Error('useMascot must be used within a MascotProvider');
  return c;
};
