import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type PreRequisitoPendente = {
  codigo_bncc: string;
  nivel_dominio: string;
  motivo: string;
};

/**
 * Verifica automaticamente se a criança domina os pré-requisitos
 * da missão. Enquanto houver códigos BNCC pendentes, a missão
 * principal fica bloqueada e o app oferece Missões de Recuperação.
 *
 * Nunca deixamos lacunas: se `pendentes.length > 0`, o Player
 * exibe a tela de Recuperação antes de liberar o conteúdo.
 */
export function usePreRequisitos(childId: string | undefined, codigoBncc: string) {
  const [pendentes, setPendentes] = useState<PreRequisitoPendente[]>([]);
  const [carregando, setCarregando] = useState<boolean>(!!childId);
  const [erro, setErro] = useState<string | null>(null);

  const verificar = useCallback(async () => {
    if (!childId || !codigoBncc) {
      setPendentes([]);
      setCarregando(false);
      return;
    }
    setCarregando(true);
    setErro(null);
    // RPC criada em migration: public.pre_requisitos_pendentes
    const { data, error } = await (supabase as any).rpc("pre_requisitos_pendentes", {
      p_child_id: childId,
      p_codigo_bncc: codigoBncc,
    });
    if (error) {
      setErro(error.message);
      setPendentes([]);
    } else {
      setPendentes((data ?? []) as PreRequisitoPendente[]);
    }
    setCarregando(false);
  }, [childId, codigoBncc]);

  useEffect(() => {
    void verificar();
  }, [verificar]);

  return { pendentes, carregando, erro, reverificar: verificar };
}

const CHAVE_RETORNO = "eb_retorno_missao";

export const RetornoMissao = {
  marcar(codigo: string) {
    try {
      sessionStorage.setItem(CHAVE_RETORNO, codigo);
    } catch {
      /* noop */
    }
  },
  ler(): string | null {
    try {
      return sessionStorage.getItem(CHAVE_RETORNO);
    } catch {
      return null;
    }
  },
  limpar() {
    try {
      sessionStorage.removeItem(CHAVE_RETORNO);
    } catch {
      /* noop */
    }
  },
};
