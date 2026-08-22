import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAppState } from '@/core/store';

const CHAVE_PROGRESSO = (childId: string, slug: string) => `eb.v4.progresso.${childId}.${slug}`;

/**
 * Progresso local/online sempre escopado por criança.
 * O localStorage é apenas cache de interface; a separação por child_id evita
 * que irmãos no mesmo dispositivo herdem aulas concluídas entre si.
 */
export function useProgressSync(cursoSlug: string) {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;
  const [concluidas, setConcluidas] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function loadProgress() {
      setLoading(true);
      if (!childId) {
        setConcluidas(new Set());
        setLoading(false);
        return;
      }
      const local = localStorage.getItem(CHAVE_PROGRESSO(childId, cursoSlug));
      const localIds = local ? new Set<string>(JSON.parse(local)) : new Set<string>();

      const { data, error } = await supabase
        .from('activity_results')
        .select('activity_id')
        .eq('child_id', childId)
        .eq('completion_data->>curso_slug', cursoSlug);

      if (cancelled) return;
      if (!error && data) {
        const remoteIds = data.map(d => d.activity_id).filter(Boolean) as string[];
        setConcluidas(new Set([...Array.from(localIds), ...remoteIds]));
      } else {
        setConcluidas(localIds);
      }
      setLoading(false);
    }
    void loadProgress();
    return () => { cancelled = true; };
  }, [cursoSlug, childId]);

  const marcarConcluida = async (aulaSlug: string) => {
    if (!childId) throw new Error('Selecione a criança antes de registrar o progresso.');
    const novas = new Set(concluidas);
    novas.add(aulaSlug);
    setConcluidas(novas);
    localStorage.setItem(CHAVE_PROGRESSO(childId, cursoSlug), JSON.stringify(Array.from(novas)));

    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      await supabase.from('activity_results').insert({
        child_id: childId,
        activity_id: aulaSlug,
        completion_data: { curso_slug: cursoSlug, completed: true },
        score: 100,
        time_spent_seconds: 0,
      } as any);
    }
  };

  return { concluidas, marcarConcluida, loading };
}
