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

export interface BnccBibliotecaItem {
  id: string;
  codigo: string;
  ano: number;
  componente: string;
  unidade_tematica: string | null;
  objeto_conhecimento: string | null;
  habilidade: string | null;
  ordem: number | null;
  ativo: boolean | null;
}

export function isRemovedEscolaBrilhaSubject(subject: string | null | undefined): boolean {
  const normalized = (subject ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return normalized.includes("educacao fisica") || normalized === "ef";
}

const etapaAnoRange = (etapa: EtapaEscolar) => {
  if (etapa === "fundamental1") return { from: 1, to: 5 };
  if (etapa === "fundamental2") return { from: 6, to: 9 };
  return null;
};

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
      else setAulas(((data ?? []) as AulaBncc[]).filter((a) => !isRemovedEscolaBrilhaSubject(a.disciplina)));
      setLoading(false);
    })();
    return () => {
      cancel = true;
    };
  }, [etapa]);

  return { aulas, loading, error };
}

export function useBnccBibliotecaByEtapa(etapa: EtapaEscolar) {
  const [habilidades, setHabilidades] = useState<BnccBibliotecaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;
    const range = etapaAnoRange(etapa);

    if (!range) {
      setHabilidades([]);
      setLoading(false);
      return () => {
        cancel = true;
      };
    }

    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("bncc_biblioteca")
        .select("id,codigo,ano,componente,unidade_tematica,objeto_conhecimento,habilidade,ordem,ativo")
        .gte("ano", range.from)
        .lte("ano", range.to)
        .eq("ativo", true)
        .order("ano", { ascending: true })
        .order("componente", { ascending: true })
        .order("ordem", { ascending: true });

      if (cancel) return;
      if (error) {
        setError(error.message);
        setHabilidades([]);
      } else {
        setError(null);
        setHabilidades(((data ?? []) as BnccBibliotecaItem[]).filter((h) => !isRemovedEscolaBrilhaSubject(h.componente)));
      }
      setLoading(false);
    })();

    return () => {
      cancel = true;
    };
  }, [etapa]);

  return { habilidades, loading, error };
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
      else {
        const lesson = (data as AulaBncc) ?? null;
        setAula(lesson && !isRemovedEscolaBrilhaSubject(lesson.disciplina) ? lesson : null);
      }
      setLoading(false);
    })();
    return () => {
      cancel = true;
    };
  }, [id]);

  return { aula, loading, error };
}
