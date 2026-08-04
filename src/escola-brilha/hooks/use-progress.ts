import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const CHAVE_PROGRESSO = (slug: string) => `eb.v4.progresso.${slug}`;

export function useProgressSync(cursoSlug: string) {
  const [concluidas, setConcluidas] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProgress() {
      const local = localStorage.getItem(CHAVE_PROGRESSO(cursoSlug));
      if (local) {
        setConcluidas(new Set(JSON.parse(local)));
      }

      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data, error } = await supabase
          .from('activity_results')
          .select('activity_id')
          .eq('completion_data->>curso_slug', cursoSlug);

        if (data && !error) {
          const ids = new Set(data.map(d => d.activity_id).filter(Boolean) as string[]);
          setConcluidas(prev => new Set([...Array.from(prev), ...Array.from(ids)]));
        }
      }
      setLoading(false);
    }
    loadProgress();
  }, [cursoSlug]);

  const marcarConcluida = async (aulaSlug: string) => {
    const novas = new Set(concluidas);
    novas.add(aulaSlug);
    setConcluidas(novas);

    localStorage.setItem(CHAVE_PROGRESSO(cursoSlug), JSON.stringify(Array.from(novas)));

    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      // Nota: activity_results usa child_id e activity_id. 
      // Em uma implementação real, precisaríamos do child_id. 
      // Por enquanto, marcamos como um log genérico se houver sessão.
      await supabase.from('activity_results').upsert({
        activity_id: aulaSlug,
        completion_data: { curso_slug: cursoSlug, completed: true },
        score: 100,
        time_spent_seconds: 0
      });
    }
  };

  return { concluidas, marcarConcluida, loading };
}
