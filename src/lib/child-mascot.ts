import { supabase } from '@/database/supabase/client';

export type StarterMascot = 'pip' | 'pipa';
export type MascotStage = 'ovo' | 'nascendo' | 'bebe' | 'crianca';

export interface ChildMascotProfile {
  child_id: string;
  user_id: string;
  starter_mascot: StarterMascot;
  active_mascot: StarterMascot;
  stage: MascotStage;
  equipped_skin: string;
  mascot_level: number;
  mascot_xp: number;
  affinity: number;
  born_at: string | null;
}

export async function getChildMascotProfile(childId: string): Promise<ChildMascotProfile | null> {
  const { data, error } = await (supabase as any)
    .from('child_mascot_profiles')
    .select('*')
    .eq('child_id', childId)
    .maybeSingle();
  if (error) throw error;
  return data as ChildMascotProfile | null;
}

export async function ensureChildMascotProfile(childId: string, starter: StarterMascot = 'pip') {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) throw new Error('unauthenticated');
  const { error } = await (supabase as any)
    .from('child_mascot_profiles')
    .upsert({ child_id: childId, user_id: auth.user.id, starter_mascot: starter, active_mascot: starter }, { onConflict: 'child_id', ignoreDuplicates: true });
  if (error) throw error;
  return getChildMascotProfile(childId);
}

export async function chooseStarterMascot(childId: string, mascot: StarterMascot) {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) throw new Error('unauthenticated');
  const { error } = await (supabase as any)
    .from('child_mascot_profiles')
    .upsert({
      child_id: childId,
      user_id: auth.user.id,
      starter_mascot: mascot,
      active_mascot: mascot,
      stage: 'bebe',
      equipped_skin: mascot === 'pipa' ? 'pipa-original' : 'original',
      born_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }, { onConflict: 'child_id' });
  if (error) throw error;
}

export async function setChildMascotStage(childId: string, stage: MascotStage) {
  const { error } = await (supabase as any).from('child_mascot_profiles').update({ stage, updated_at: new Date().toISOString() }).eq('child_id', childId);
  if (error) throw error;
}

export async function equipChildSkin(childId: string, skinKey: string) {
  const { error } = await (supabase as any).from('child_mascot_profiles').update({ equipped_skin: skinKey, updated_at: new Date().toISOString() }).eq('child_id', childId);
  if (error) throw error;
}

export async function listChildUnlocks(childId: string, type?: 'skin' | 'teacher'): Promise<string[]> {
  let q = (supabase as any).from('child_mascot_unlocks').select('item_key').eq('child_id', childId);
  if (type) q = q.eq('item_type', type);
  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []).map((x: any) => x.item_key);
}

export async function purchaseMascotItem(childId: string, type: 'skin'|'teacher', key: string, cost: number) {
  const { data, error } = await supabase.rpc('purchase_child_mascot_item' as any, {
    p_child_id: childId,
    p_item_type: type,
    p_item_key: key,
    p_cost: cost,
  });
  if (error) throw error;
  return data as any;
}

export async function getChildMascotAssignments(childId: string) {
  const { data, error } = await (supabase as any).from('child_mascot_assignments').select('assignment_type,assignment_key,mascot_slug').eq('child_id', childId);
  if (error) throw error;
  const subjects: Record<string,string> = {};
  let mentor = 'default';
  for (const row of data ?? []) {
    if (row.assignment_type === 'mentor') mentor = row.mascot_slug;
    else subjects[row.assignment_key] = row.mascot_slug;
  }
  return { subjects, mentor };
}

export async function saveChildMascotAssignment(childId: string, type: 'subject'|'mentor', key: string, mascotSlug: string) {
  if (type === 'subject') {
    await (supabase as any).from('child_mascot_assignments').delete().eq('child_id', childId).eq('assignment_type','subject').eq('mascot_slug', mascotSlug).neq('assignment_key', key);
  }
  const { error } = await (supabase as any).from('child_mascot_assignments').upsert({ child_id: childId, assignment_type: type, assignment_key: key, mascot_slug: mascotSlug, updated_at: new Date().toISOString() }, { onConflict: 'child_id,assignment_type,assignment_key' });
  if (error) throw error;
}

export async function rewardChildJourney(childId: string, coins = 0, xp = 0, affinity = 0) {
  const { data, error } = await supabase.rpc('reward_child_journey' as any, { p_child_id: childId, p_coins: coins, p_mascot_xp: xp, p_affinity: affinity });
  if (error) throw error;
  return data;
}
