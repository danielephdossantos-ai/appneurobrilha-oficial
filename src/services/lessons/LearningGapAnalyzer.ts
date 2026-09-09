import { supabase } from "@/integrations/supabase/client";
import { ReinforcementRepository, type ReinforcementBundle } from "@/modules/reinforcement-repository";

export interface SkillGap {
  codigoBncc: string;
  nota: number;
  acertos: number;
  erros: number;
  taxaAcerto: number;
  severidade: "alta" | "media" | "baixa";
}

export interface GapAnalysis {
  gaps: SkillGap[];
  reforco: ReinforcementBundle[];
}

const NOTA_MINIMA = 60;
const TAXA_MINIMA = 0.6;

function severidade(taxa: number, nota: number): SkillGap["severidade"] {
  if (nota < 40 || taxa < 0.4) return "alta";
  if (nota < 55 || taxa < 0.55) return "media";
  return "baixa";
}

export const LearningGapAnalyzer = {
  async analyze(childId: string): Promise<GapAnalysis> {
    const { data, error } = await supabase
      .from("student_progress")
      .select("codigo_bncc, nota, acertos, erros, habilidades_pendentes")
      .eq("child_id", childId);
    if (error) throw error;

    const gaps: SkillGap[] = [];
    const codigos = new Set<string>();

    for (const row of data ?? []) {
      const codigo = (row as any).codigo_bncc as string | null;
      if (!codigo) continue;
      const acertos = (row as any).acertos ?? 0;
      const erros = (row as any).erros ?? 0;
      const nota = Number((row as any).nota ?? 0);
      const total = acertos + erros;
      const taxa = total > 0 ? acertos / total : 0;

      const baixoDesempenho = nota < NOTA_MINIMA || (total > 0 && taxa < TAXA_MINIMA);
      if (baixoDesempenho) {
        gaps.push({
          codigoBncc: codigo,
          nota,
          acertos,
          erros,
          taxaAcerto: taxa,
          severidade: severidade(taxa, nota),
        });
        codigos.add(codigo);
      }

      for (const pend of ((row as any).habilidades_pendentes ?? []) as string[]) {
        if (pend) codigos.add(pend);
      }
    }

    const reforco = codigos.size
      ? await ReinforcementRepository.getBundles(Array.from(codigos))
      : [];

    return { gaps, reforco };
  },
};
