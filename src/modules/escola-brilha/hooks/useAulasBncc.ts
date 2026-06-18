import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type EtapaEscolar = "infantil" | "fundamental1" | "fundamental2";
export type TipoPlayer = "early" | "b" | "c" | "legacy";

export interface AulaBncc {
  id: string;
  codigo_bncc: string;
  etapa: EtapaEscolar;
  serie: string;
  disciplina: string;
  eixo: string | null;
  titulo: string;
  descricao: string | null;
  tipo_player: TipoPlayer;
  payload: any;
  xp: number;
  ordem: number;
  pre_requisitos: string[];
  ativo: boolean;
}

export function useAulasBnccByEtapa(etapa: EtapaEscolar) {
  const [aulas, setAulas] = useState<AulaBncc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("aulas_bncc")
        .select("*")
        .eq("etapa", etapa)
        .eq("ativo", true)
        .order("serie", { ascending: true })
        .order("ordem", { ascending: true });
      if (cancel) return;
      if (error) setError(error.message);
      else setAulas((data ?? []) as AulaBncc[]);
      setLoading(false);
    })();
    return () => {
      cancel = true;
    };
  }, [etapa]);

  return { aulas, loading, error };
}

export function useAulaBnccById(id: string | undefined) {
  const [aula, setAula] = useState<AulaBncc | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let cancel = false;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("aulas_bncc")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      if (cancel) return;
      if (error) setError(error.message);
      else setAula((data as AulaBncc) ?? null);
      setLoading(false);
    })();
    return () => {
      cancel = true;
    };
  }, [id]);

  return { aula, loading, error };
}
