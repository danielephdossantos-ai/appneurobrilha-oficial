import { supabase } from "@/database/supabase/client";
import {
  metodoDaEtapa,
  NRP_PILLAR_LABEL,
  type NrpPillar,
} from "@/modules/alfabetizacao/data/metodosCientificos";

/**
 * Agrega o progresso da criança nos 5 pilares do National Reading Panel (NRP, 2000):
 *   1. Consciência Fonológica
 *   2. Fônica (letra ↔ som)
 *   3. Fluência
 *   4. Vocabulário
 *   5. Compreensão
 *
 * Fonte: `child_skill_mastery`, filtrando por `skill_code LIKE 'alfa:%'`.
 * Cada skill_code corresponde a uma etapa da trilha Alfabetização Brilha
 * (ex.: `alfa:vogais`), que é mapeada para um pilar em `metodosCientificos.ts`.
 */

export interface PillarStat {
  pilar: NrpPillar;
  label: string;
  attempts: number;
  hits: number;
  /** 0–100. Precisão × confiança (ver `computeMasteryPercentage`). */
  mastery: number;
  /** Cor de exibição (tailwind). */
  cor: string;
}

const CORES: Record<NrpPillar, string> = {
  "consciencia-fonologica": "from-sky-400 to-blue-500",
  fonica: "from-emerald-400 to-teal-500",
  fluencia: "from-amber-400 to-orange-500",
  vocabulario: "from-fuchsia-400 to-pink-500",
  compreensao: "from-violet-400 to-indigo-500",
};

function pilarVazio(pilar: NrpPillar): PillarStat {
  return {
    pilar,
    label: NRP_PILLAR_LABEL[pilar],
    attempts: 0,
    hits: 0,
    mastery: 0,
    cor: CORES[pilar],
  };
}

function pilaresBase(): Record<NrpPillar, PillarStat> {
  return {
    "consciencia-fonologica": pilarVazio("consciencia-fonologica"),
    fonica: pilarVazio("fonica"),
    fluencia: pilarVazio("fluencia"),
    vocabulario: pilarVazio("vocabulario"),
    compreensao: pilarVazio("compreensao"),
  };
}

export async function getNrpPillarStats(childId: string): Promise<PillarStat[]> {
  const acc = pilaresBase();

  try {
    const { data, error } = await supabase
      .from("child_skill_mastery")
      .select("skill_code, hits_count, total_attempts")
      .eq("child_id", childId)
      .like("skill_code", "alfa:%");

    if (error) {
      console.warn("[nrpPillars] getNrpPillarStats", error);
      return Object.values(acc);
    }

    for (const row of data ?? []) {
      const etapaId = String(row.skill_code).replace(/^alfa:/, "");
      const m = metodoDaEtapa(etapaId);
      const p = acc[m.pilar];
      p.attempts += row.total_attempts ?? 0;
      p.hits += row.hits_count ?? 0;
    }
  } catch (e) {
    console.warn("[nrpPillars] getNrpPillarStats catch", e);
  }

  // Calcula mastery com confiança (mesma fórmula do neuroMetrics)
  for (const p of Object.values(acc)) {
    if (p.attempts <= 0) continue;
    const successRate = p.hits / p.attempts;
    const confidence = Math.min(1, p.attempts / 15);
    p.mastery = Math.round(successRate * confidence * 100);
  }

  return Object.values(acc);
}
