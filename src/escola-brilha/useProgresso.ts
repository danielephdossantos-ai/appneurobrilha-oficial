import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type Progresso = {
  bloco_atual: number;
  concluida: boolean;
  tempo_estudado_segundos: number;
  percentual: number;
  estrelas: number;
  nota: number;
  tentativas: number;
  erros: number;
  acertos: number;
  carregado: boolean;
};

export type ProgressoUpdate = Partial<
  Omit<Progresso, "carregado"> & { adicionar_tempo_segundos: number }
>;

const VAZIO: Progresso = {
  bloco_atual: 0,
  concluida: false,
  tempo_estudado_segundos: 0,
  percentual: 0,
  estrelas: 0,
  nota: 0,
  tentativas: 0,
  erros: 0,
  acertos: 0,
  carregado: false,
};

export function useProgresso(childId: string | undefined, codigo: string) {
  const [progresso, setProgresso] = useState<Progresso>(VAZIO);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!childId) {
      setLoading(false);
      return;
    }
    let alive = true;
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from("escola_progresso")
        .select(
          "bloco_atual, concluida, tempo_estudado_segundos, percentual, estrelas, nota, tentativas, erros, acertos",
        )
        .eq("child_id", childId)
        .eq("codigo_bncc", codigo)
        .maybeSingle();
      if (!alive) return;
      if (data) {
        setProgresso({
          bloco_atual: data.bloco_atual ?? 0,
          concluida: !!data.concluida,
          tempo_estudado_segundos: data.tempo_estudado_segundos ?? 0,
          percentual: data.percentual ?? 0,
          estrelas: data.estrelas ?? 0,
          nota: Number(data.nota ?? 0),
          tentativas: data.tentativas ?? 0,
          erros: data.erros ?? 0,
          acertos: data.acertos ?? 0,
          carregado: true,
        });
      } else {
        setProgresso({ ...VAZIO, carregado: true });
      }
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [childId, codigo]);

  const salvar = useCallback(
    async (patch: ProgressoUpdate) => {
      if (!childId) return;
      // Merge otimista + persistência.
      let novo: Progresso = progresso;
      setProgresso((atual) => {
        const tempoBase = atual.tempo_estudado_segundos;
        novo = {
          ...atual,
          ...patch,
          tempo_estudado_segundos:
            patch.tempo_estudado_segundos !== undefined
              ? patch.tempo_estudado_segundos
              : tempoBase + (patch.adicionar_tempo_segundos ?? 0),
          carregado: true,
        };
        return novo;
      });
      await supabase.from("escola_progresso").upsert(
        {
          child_id: childId,
          codigo_bncc: codigo,
          bloco_atual: novo.bloco_atual,
          concluida: novo.concluida,
          concluida_em: novo.concluida ? new Date().toISOString() : null,
          tempo_estudado_segundos: novo.tempo_estudado_segundos,
          percentual: novo.percentual,
          estrelas: novo.estrelas,
          nota: novo.nota,
          tentativas: novo.tentativas,
          erros: novo.erros,
          acertos: novo.acertos,
          ultima_visita_em: new Date().toISOString(),
        },
        { onConflict: "child_id,codigo_bncc" },
      );
    },
    [childId, codigo, progresso],
  );

  return { progresso, salvar, loading };
}
