/**
 * LessonReview — revisão completa de cada aula.
 *
 * Estrutura obrigatória (tudo armazenado no banco, nada gerado em runtime):
 *   - resumo_curto      : texto curto (1-2 frases)
 *   - resumo_completo   : texto longo, recapitulando a aula
 *   - mapa_mental       : árvore/objeto JSON com nós e ramos
 *   - palavras_chave    : lista de termos
 *   - erros_comuns      : lista de { erro, correcao }
 *   - dicas             : lista de strings ou { titulo, descricao }
 *
 * Fonte única: tabela public.lesson_reviews_full
 * Acesso: SOMENTE leitura. Cadastro feito por admin via banco.
 */

import { supabase } from "@/integrations/supabase/client";

export interface MapaMentalNo {
  titulo: string;
  filhos?: MapaMentalNo[];
}

export interface ErroComum {
  erro: string;
  correcao: string;
}

export interface DicaEstudo {
  titulo: string;
  descricao: string;
}

export interface LessonReview {
  id: string;
  lessonId: string | null;
  codigoBncc: string;
  resumoCurto: string;
  resumoCompleto: string;
  mapaMental: MapaMentalNo | Record<string, unknown>;
  palavrasChave: string[];
  errosComuns: ErroComum[];
  dicas: DicaEstudo[];
}

type Row = {
  id: string;
  lesson_id: string | null;
  codigo_bncc: string;
  resumo_curto: string | null;
  resumo_completo: string | null;
  mapa_mental: unknown;
  palavras_chave: string[] | null;
  erros_comuns: unknown;
  dicas: unknown;
};

function mapRow(r: Row): LessonReview {
  return {
    id: r.id,
    lessonId: r.lesson_id,
    codigoBncc: r.codigo_bncc,
    resumoCurto: r.resumo_curto ?? "",
    resumoCompleto: r.resumo_completo ?? "",
    mapaMental: (r.mapa_mental as Record<string, unknown>) ?? {},
    palavrasChave: r.palavras_chave ?? [],
    errosComuns: Array.isArray(r.erros_comuns) ? (r.erros_comuns as ErroComum[]) : [],
    dicas: Array.isArray(r.dicas) ? (r.dicas as DicaEstudo[]) : [],
  };
}

export const LessonReviewService = {
  /** Retorna a revisão completa de uma aula (ou null se não cadastrada). */
  async get(codigoBncc: string): Promise<LessonReview | null> {
    const { data, error } = await supabase
      .from("lesson_reviews_full" as never)
      .select(
        "id, lesson_id, codigo_bncc, resumo_curto, resumo_completo, mapa_mental, palavras_chave, erros_comuns, dicas",
      )
      .eq("codigo_bncc", codigoBncc)
      .maybeSingle();

    if (error || !data) return null;
    return mapRow(data as unknown as Row);
  },

  async getResumoCurto(codigoBncc: string): Promise<string | null> {
    const r = await this.get(codigoBncc);
    return r?.resumoCurto || null;
  },

  async getResumoCompleto(codigoBncc: string): Promise<string | null> {
    const r = await this.get(codigoBncc);
    return r?.resumoCompleto || null;
  },

  async getMapaMental(codigoBncc: string): Promise<MapaMentalNo | Record<string, unknown> | null> {
    const r = await this.get(codigoBncc);
    return r?.mapaMental ?? null;
  },

  async getPalavrasChave(codigoBncc: string): Promise<string[]> {
    const r = await this.get(codigoBncc);
    return r?.palavrasChave ?? [];
  },

  async getErrosComuns(codigoBncc: string): Promise<ErroComum[]> {
    const r = await this.get(codigoBncc);
    return r?.errosComuns ?? [];
  },

  async getDicas(codigoBncc: string): Promise<DicaEstudo[]> {
    const r = await this.get(codigoBncc);
    return r?.dicas ?? [];
  },
};
