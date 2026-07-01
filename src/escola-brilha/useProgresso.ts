import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type Progresso = {
  bloco_atual: number;
  concluida: boolean;
};

export function useProgresso(childId: string | undefined, codigo: string) {
  const [progresso, setProgresso] = useState<Progresso>({ bloco_atual: 0, concluida: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!childId) return;
    let alive = true;
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from("escola_progresso")
        .select("bloco_atual, concluida")
        .eq("child_id", childId)
        .eq("codigo_bncc", codigo)
        .maybeSingle();
      if (!alive) return;
      if (data) setProgresso({ bloco_atual: data.bloco_atual, concluida: data.concluida });
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [childId, codigo]);

  const salvar = useCallback(
    async (bloco: number, concluida = false) => {
      if (!childId) return;
      setProgresso({ bloco_atual: bloco, concluida });
      await supabase
        .from("escola_progresso")
        .upsert(
          {
            child_id: childId,
            codigo_bncc: codigo,
            bloco_atual: bloco,
            concluida,
            concluida_em: concluida ? new Date().toISOString() : null,
          },
          { onConflict: "child_id,codigo_bncc" },
        );
    },
    [childId, codigo],
  );

  return { progresso, salvar, loading };
}
