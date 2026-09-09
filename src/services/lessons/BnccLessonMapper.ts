/**
 * BnccLessonMapper
 * ------------------------------------------------------------------
 * Recebe um codigo_bncc e devolve um LessonBlueprint:
 * apenas a ESTRUTURA pedagógica (etapa, ano, área, componente,
 * unidade temática, objeto de conhecimento, habilidade).
 *
 *  - NÃO gera texto de aula.
 *  - NÃO publica nada.
 *  - NÃO altera banco. Apenas SELECT.
 *
 * Consulta:
 *   - public.bncc_habilidades      (habilidade, ano, disciplina, objetivo)
 *   - public.bncc_anos             (etapa do ano)
 *   - public.bncc_componentes      (componente curricular + area_codigo)
 *   - public.bncc_areas            (área do conhecimento)
 *   - public.knowledge_objects     (unidade temática + objeto de conhecimento)
 *
 * O código BNCC segue o padrão oficial:
 *   EI / EF / EM  +  ANO(2d)  +  COMPONENTE(2 letras)  +  ORDEM(2d)
 *   ex.: EF01MA01  →  etapa=EF, ano=01, componente=MA, ordem=01
 *
 * Quando algum dado estrutural não estiver cadastrado, o campo
 * correspondente vem `null`. Nunca preenchemos com texto inventado.
 */

import { supabase } from "@/integrations/supabase/client";

export interface BnccBlueprintRef {
  codigo: string;
  nome: string | null;
}

export interface LessonBlueprint {
  codigo_bncc: string;
  etapa: BnccBlueprintRef | null;           // EI | EF | EM
  ano: BnccBlueprintRef | null;             // ex.: 1º Ano
  area: BnccBlueprintRef | null;            // área do conhecimento
  componente: BnccBlueprintRef | null;      // componente curricular (disciplina)
  unidade_tematica: string | null;
  objeto_conhecimento: string | null;
  habilidade: {
    codigo_bncc: string;
    titulo: string | null;
    objetivo: string | null;
    nivel: string | null;
    ordem: number | null;
  };
  // Pistas estruturais derivadas do próprio código BNCC.
  parsed: {
    etapa_codigo: string | null;
    ano_codigo: string | null;
    componente_codigo: string | null;
    ordem: number | null;
  };
}

const BNCC_PATTERN = /^(EI|EF|EM)(\d{2})([A-Z]{2,3})(\d{2})$/;

function parseCodigo(codigo: string) {
  const m = BNCC_PATTERN.exec(codigo.trim().toUpperCase());
  if (!m) {
    return {
      etapa_codigo: null,
      ano_codigo: null,
      componente_codigo: null,
      ordem: null,
    };
  }
  return {
    etapa_codigo: m[1],
    ano_codigo: m[2],
    componente_codigo: m[3],
    ordem: Number(m[4]),
  };
}

export const BnccLessonMapper = {
  /**
   * Monta o LessonBlueprint para o código informado.
   * Lança erro se a habilidade não existir em bncc_habilidades.
   */
  async build(codigoBnccInput: string): Promise<LessonBlueprint> {
    const codigo_bncc = codigoBnccInput.trim().toUpperCase();
    if (!codigo_bncc) throw new Error("codigo_bncc é obrigatório");

    // 1) Habilidade (obrigatória)
    const { data: hab, error: habErr } = await supabase
      .from("bncc_habilidades")
      .select("codigo_bncc, ano, disciplina, titulo, objetivo, nivel, ordem")
      .eq("codigo_bncc", codigo_bncc)
      .maybeSingle();
    if (habErr) throw new Error(`bncc_habilidades: ${habErr.message}`);
    if (!hab) throw new Error(`Habilidade não encontrada: ${codigo_bncc}`);

    const parsed = parseCodigo(codigo_bncc);

    // 2) Lookups paralelos por código parseado.
    const [anoRes, compRes, koRes] = await Promise.all([
      parsed.etapa_codigo && parsed.ano_codigo
        ? supabase
            .from("bncc_anos")
            .select("codigo, nome, etapa")
            .eq("etapa", parsed.etapa_codigo)
            .eq("codigo", parsed.ano_codigo)
            .maybeSingle()
        : Promise.resolve({ data: null, error: null } as const),

      parsed.componente_codigo
        ? supabase
            .from("bncc_componentes")
            .select("codigo, nome, area_codigo")
            .eq("codigo", parsed.componente_codigo)
            .maybeSingle()
        : Promise.resolve({ data: null, error: null } as const),

      supabase
        .from("knowledge_objects")
        .select("unidade_tematica, objeto_conhecimento, ordem")
        .eq("codigo_bncc", codigo_bncc)
        .order("ordem", { ascending: true })
        .limit(1)
        .maybeSingle(),
    ]);

    // 3) Área (depende do componente).
    let area: BnccBlueprintRef | null = null;
    const componenteRow = (compRes.data ?? null) as
      | { codigo: string; nome: string | null; area_codigo: string | null }
      | null;
    if (componenteRow?.area_codigo) {
      const { data: areaRow } = await supabase
        .from("bncc_areas")
        .select("codigo, nome")
        .eq("codigo", componenteRow.area_codigo)
        .maybeSingle();
      if (areaRow) area = { codigo: areaRow.codigo, nome: areaRow.nome ?? null };
    }

    // 4) Etapa: usa o que está em bncc_anos.etapa, ou o parseado.
    const anoRow = (anoRes.data ?? null) as
      | { codigo: string; nome: string | null; etapa: string | null }
      | null;
    const etapaCodigo = anoRow?.etapa ?? parsed.etapa_codigo;
    const etapa: BnccBlueprintRef | null = etapaCodigo
      ? { codigo: etapaCodigo, nome: etapaName(etapaCodigo) }
      : null;

    const ano: BnccBlueprintRef | null = anoRow
      ? { codigo: anoRow.codigo, nome: anoRow.nome ?? hab.ano ?? null }
      : parsed.ano_codigo
        ? { codigo: parsed.ano_codigo, nome: hab.ano ?? null }
        : null;

    const componente: BnccBlueprintRef | null = componenteRow
      ? { codigo: componenteRow.codigo, nome: componenteRow.nome ?? hab.disciplina ?? null }
      : parsed.componente_codigo
        ? { codigo: parsed.componente_codigo, nome: hab.disciplina ?? null }
        : null;

    const ko = (koRes.data ?? null) as
      | { unidade_tematica: string | null; objeto_conhecimento: string | null }
      | null;

    return {
      codigo_bncc,
      etapa,
      ano,
      area,
      componente,
      unidade_tematica: ko?.unidade_tematica ?? null,
      objeto_conhecimento: ko?.objeto_conhecimento ?? null,
      habilidade: {
        codigo_bncc,
        titulo: hab.titulo ?? null,
        objetivo: hab.objetivo ?? null,
        nivel: hab.nivel ?? null,
        ordem: hab.ordem ?? null,
      },
      parsed,
    };
  },

  /** Atalho para vários códigos. Falhas individuais viram null. */
  async buildMany(codigos: string[]): Promise<Array<LessonBlueprint | null>> {
    return Promise.all(
      codigos.map((c) =>
        BnccLessonMapper.build(c).catch((e) => {
          console.warn(`[BnccLessonMapper] ${c}: ${e?.message ?? e}`);
          return null;
        }),
      ),
    );
  },
};

function etapaName(codigo: string): string | null {
  switch (codigo.toUpperCase()) {
    case "EI":
      return "Educação Infantil";
    case "EF":
      return "Ensino Fundamental";
    case "EM":
      return "Ensino Médio";
    default:
      return null;
  }
}

export default BnccLessonMapper;
