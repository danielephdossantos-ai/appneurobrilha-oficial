import { supabase } from "@/database/supabase/client";
import { CATEGORIAS, type CategoriaSlug } from "@/data/neuro-treino/variations";
import { buscarAnamnese } from "./persist";
import type { PerfilScores, RiskMap } from "@/modules/anamnese/v2/types";
import { sanitizarLinguagem } from "@/lib/sanitizar-linguagem-clinica";

export interface NeuroMetrics {
  masteryScore: number;
  lastTrained: string | null;
  fatigueIndex: number; // 0 to 1
}

export interface RecommendedSession {
  slug: CategoriaSlug;
  nome: string;
  emoji: string;
  objetivo: string;
  prioridade: number;
  motivo: string;
}

/**
 * Orquestrador inteligente do Neuro-Treino.
 * Seleciona atividades baseadas em Anamnese, Desempenho e Histórico.
 * NUNCA exibe termos clínicos para o usuário.
 */
export async function orquestrarSessaoDiaria(childId: string): Promise<RecommendedSession[]> {
  const { risk } = await buscarAnamnese(childId);
  
  // 1. Obter domínio e histórico recente
  const { data: mastery } = await supabase
    .from("child_skill_mastery" as any)
    .select("skill_slug, mastery_score, last_activity_at")
    .eq("child_id", childId);

  const masteryMap = new Map<string, NeuroMetrics>();
  mastery?.forEach((m: any) => {
    masteryMap.set(m.skill_slug, {
      masteryScore: m.mastery_score,
      lastTrained: m.last_activity_at,
      fatigueIndex: 0 
    });
  });

  // 2. Priorizar categorias
  const candidatos = Object.entries(CATEGORIAS).map(([slug, meta]) => {
    let score = 0;
    let motivo = "Treino de desenvolvimento geral.";

    // Fator Anamnese (Prioridade Máxima)
    const riskLevel = risk ? (risk[meta.grupo as keyof RiskMap] as string) : null;
    
    if (riskLevel === "vermelho" || riskLevel === "laranja") {
      score += 100;
      motivo = `Prioridade em ${meta.nome}: área de maior necessidade atual.`;
    } else if (riskLevel === "amarelo") {
      score += 50;
      motivo = `Fortalecimento em ${meta.nome}: desenvolvimento importante.`;
    }

    // Fator Domínio (Mastery)
    const metrics = masteryMap.get(slug);
    if (metrics) {
      if (metrics.masteryScore < 50) score += 30; // Focar no que ainda não dominou
      
      if (metrics.lastTrained) {
        const dias = (Date.now() - new Date(metrics.lastTrained).getTime()) / 86400000;
        if (dias > 3) score += 20; // Reintroduzir se passou muito tempo
      }
    } else {
      score += 40; // Dar chance para novas categorias
    }

    return { 
      slug: slug as CategoriaSlug, 
      meta, 
      score, 
      motivo: sanitizarLinguagem(motivo)
    };
  });

  // 3. Selecionar Top 2 ou 3 sessões
  return candidatos
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(c => ({
      slug: c.slug,
      nome: c.meta.nome,
      emoji: c.meta.emoji,
      objetivo: sanitizarLinguagem(c.meta.objetivo),
      prioridade: c.score > 80 ? 1 : 2,
      motivo: c.motivo
    }));
}

