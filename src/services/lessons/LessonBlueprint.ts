/**
 * LessonBlueprint (modelo oficial)
 * ------------------------------------------------------------------
 * Estrutura ÚNICA usada por todo o pipeline pedagógico.
 *
 * Regras:
 *   - Nenhum player deve acessar `bncc_*` diretamente.
 *   - Todo acesso à BNCC passa por LessonBlueprint.build(codigo).
 *   - Este objeto é APENAS ESTRUTURAL. Não contém texto da aula
 *     (introdução, explicação, exemplos, etc.). Esses pertencem a
 *     lesson_content / lesson_examples / ... e são montados em outra
 *     etapa do pipeline.
 *
 * Nenhuma alteração de banco. Apenas SELECT.
 */

import { supabase } from "@/integrations/supabase/client";
import {
  BnccLessonMapper,
  type LessonBlueprint as BnccStructure,
} from "./BnccLessonMapper";

export type LessonDifficulty = "facil" | "medio" | "dificil";

export interface BnccRef {
  codigo: string;
  nome: string | null;
}

export interface LessonBlueprint {
  codigo_bncc: string;
  ano: BnccRef | null;
  etapa: BnccRef | null;
  disciplina: BnccRef | null;            // componente curricular
  area: BnccRef | null;                  // área do conhecimento
  unidade_tematica: string | null;
  objeto_conhecimento: string | null;
  habilidade_bncc: {
    codigo: string;
    titulo: string | null;
    descricao: string | null;
  };
  competencias_relacionadas: string[];
  tempo_estimado_min: number;
  nivel_dificuldade: LessonDifficulty;
  pre_requisitos: string[];              // outros codigo_bncc
  habilidades_relacionadas: string[];    // outros codigo_bncc
  objetivos_esperados: string[];
}

const DEFAULT_TEMPO_MIN = 20;
const DEFAULT_DIFICULDADE: LessonDifficulty = "medio";

function normalizeDifficulty(v: unknown): LessonDifficulty {
  const s = String(v ?? "").toLowerCase();
  if (s.startsWith("fac") || s === "easy" || s === "1") return "facil";
  if (s.startsWith("dif") || s === "hard" || s === "3") return "dificil";
  return DEFAULT_DIFICULDADE;
}

function splitObjetivos(text: string | null | undefined): string[] {
  if (!text) return [];
  return text
    .split(/\r?\n|;|•|\u2022/g)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

async function fetchRelacionadas(codigo: string): Promise<{
  pre: string[];
  rel: string[];
  competencias: string[];
}> {
  const { data, error } = await supabase
    .from("bncc_relationships")
    .select("related_codigo_bncc, kind")
    .eq("codigo_bncc", codigo);
  if (error) {
    console.warn(`[LessonBlueprint] bncc_relationships ${codigo}:`, error.message);
    return { pre: [], rel: [], competencias: [] };
  }
  const pre: string[] = [];
  const rel: string[] = [];
  const competencias: string[] = [];
  for (const row of (data ?? []) as Array<{
    related_codigo_bncc: string | null;
    kind: string | null;
  }>) {
    const r = row.related_codigo_bncc;
    if (!r) continue;
    const k = (row.kind ?? "").toLowerCase();
    if (k.includes("pre") || k.includes("pré") || k === "prerequisite") pre.push(r);
    else if (k.includes("comp")) competencias.push(r);
    else rel.push(r);
  }
  return {
    pre: Array.from(new Set(pre)),
    rel: Array.from(new Set(rel)),
    competencias: Array.from(new Set(competencias)),
  };
}

export const LessonBlueprint = {
  /** Constrói o blueprint oficial para o codigo_bncc informado. */
  async build(codigoBncc: string): Promise<LessonBlueprint> {
    const codigo = codigoBncc.trim().toUpperCase();
    const structure: BnccStructure = await BnccLessonMapper.build(codigo);
    const rels = await fetchRelacionadas(codigo);

    return {
      codigo_bncc: codigo,
      ano: structure.ano,
      etapa: structure.etapa,
      disciplina: structure.componente,
      area: structure.area,
      unidade_tematica: structure.unidade_tematica,
      objeto_conhecimento: structure.objeto_conhecimento,
      habilidade_bncc: {
        codigo,
        titulo: structure.habilidade.titulo,
        descricao: structure.habilidade.objetivo,
      },
      competencias_relacionadas: rels.competencias,
      tempo_estimado_min: DEFAULT_TEMPO_MIN,
      nivel_dificuldade: normalizeDifficulty(structure.habilidade.nivel),
      pre_requisitos: rels.pre,
      habilidades_relacionadas: rels.rel,
      objetivos_esperados: splitObjetivos(structure.habilidade.objetivo),
    };
  },

  async buildMany(codigos: string[]): Promise<Array<LessonBlueprint | null>> {
    return Promise.all(
      codigos.map((c) =>
        LessonBlueprint.build(c).catch((e) => {
          console.warn(`[LessonBlueprint] ${c}: ${e?.message ?? e}`);
          return null;
        }),
      ),
    );
  },
};

export default LessonBlueprint;
