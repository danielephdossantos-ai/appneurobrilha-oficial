/**
 * Motor de Domínio da Aprendizagem — Escola Brilha
 * =================================================
 *
 * Concluir uma missão NÃO significa dominar a habilidade.
 * Este motor decide, em tempo real, em qual dos 4 níveis oficiais a
 * criança está para cada habilidade BNCC:
 *
 *   NAO_INICIADA        — nenhuma evidência suficiente
 *   EM_DESENVOLVIMENTO  — está aprendendo, ainda com muitos erros
 *   QUASE_DOMINADA      — desempenho bom, mas ainda inconsistente
 *   DOMINADA            — desempenho estável em múltiplas sessões,
 *                         incluindo desafios e avaliações posteriores
 *
 * A pontuação é calculada por 6 sinais ponderados:
 *
 *   • acertos          (peso 25) — taxa de acerto vs. total de respostas
 *   • erros            (peso 15) — inverso da taxa de erro
 *   • revisões         (peso 10) — nº de revisões concluídas com sucesso
 *   • tempo            (peso 10) — proximidade do tempo médio esperado
 *   • desafios         (peso 20) — desempenho específico em desafios
 *   • avaliações       (peso 20) — desempenho em sessões POSTERIORES
 *                                   (retenção — não conta a sessão inicial)
 *
 * Todos ponderados em [0..1]. Score final em [0..100].
 *
 * Atualização contínua: cada `registrarInteracao(...)` recalcula e persiste
 * o novo nível em `escola_progresso.nivel_dominio` (via RPC ou update).
 * O motor NUNCA promove a "DOMINADA" apenas por concluir a missão — exige
 * evidência em avaliações posteriores.
 */

import { supabase } from "@/integrations/supabase/client";

// =====================================================================
// Tipos públicos
// =====================================================================

export type NivelDominioAprendizagem =
  | "nao_iniciada"
  | "em_desenvolvimento"
  | "quase_dominada"
  | "dominada";

export type RotuloNivel = "Não iniciada" | "Em desenvolvimento" | "Quase dominada" | "Dominada";

export type OrigemInteracao =
  | "missao"
  | "revisao"
  | "desafio"
  | "avaliacao"
  | "reforco";

export interface SinaisDominio {
  acertos: number;
  erros: number;
  totalRespostas: number;
  revisoesConcluidas: number;
  revisoesComSucesso: number;
  tempoMedioSegundos: number;
  tempoEsperadoSegundos: number;
  desafiosTentados: number;
  desafiosAcertados: number;
  sessoesPosteriores: number;         // sessões APÓS a conclusão inicial
  desempenhoSessoesPosteriores: number; // média 0..100
}

export interface DetalheDominio {
  nivel: NivelDominioAprendizagem;
  rotulo: RotuloNivel;
  score: number;                       // 0..100
  componentes: {
    acertos: number;                   // 0..1
    erros: number;                     // 0..1
    revisoes: number;                  // 0..1
    tempo: number;                     // 0..1
    desafios: number;                  // 0..1
    avaliacoesPosteriores: number;     // 0..1
  };
  evidencias: string[];
  proximoPasso: string;
}

export interface RegistroInteracao {
  origem: OrigemInteracao;
  acertos?: number;
  erros?: number;
  respostas?: number;
  desafiosTentados?: number;
  desafiosAcertados?: number;
  tempoSegundos?: number;
  desempenho?: number; // 0..100 — usado especialmente em "avaliacao"
  sucesso?: boolean;   // usado em revisões
}

// =====================================================================
// Pesos oficiais (somam 100)
// =====================================================================

const PESOS = {
  acertos: 25,
  erros: 15,
  revisoes: 10,
  tempo: 10,
  desafios: 20,
  avaliacoesPosteriores: 20,
} as const;

const LIMIARES = {
  emDesenvolvimento: 30, // >= 30
  quaseDominada: 60,     // >= 60
  dominada: 85,          // >= 85 + evidência em avaliação posterior
} as const;

const ROTULOS: Record<NivelDominioAprendizagem, RotuloNivel> = {
  nao_iniciada: "Não iniciada",
  em_desenvolvimento: "Em desenvolvimento",
  quase_dominada: "Quase dominada",
  dominada: "Dominada",
};

// =====================================================================
// Cálculo puro
// =====================================================================

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
const clamp100 = (n: number) => Math.max(0, Math.min(100, n));

function componentAcertos(s: SinaisDominio): number {
  if (s.totalRespostas <= 0) return 0;
  return clamp01(s.acertos / s.totalRespostas);
}

function componentErros(s: SinaisDominio): number {
  if (s.totalRespostas <= 0) return 0;
  const taxaErro = s.erros / s.totalRespostas;
  return clamp01(1 - taxaErro);
}

function componentRevisoes(s: SinaisDominio): number {
  if (s.revisoesConcluidas <= 0) return 0;
  // 1 revisão com sucesso = 0.5; 3+ com sucesso = 1.0
  const sucesso = Math.min(3, s.revisoesComSucesso) / 3;
  return clamp01(sucesso);
}

function componentTempo(s: SinaisDominio): number {
  if (s.tempoMedioSegundos <= 0 || s.tempoEsperadoSegundos <= 0) return 0.5;
  const razao = s.tempoMedioSegundos / s.tempoEsperadoSegundos;
  // ideal ~ 1.0. Penaliza muito lento (>2x) e muito rápido (<0.3x = chute).
  if (razao < 0.3) return 0.4;
  if (razao <= 1.2) return 1;
  if (razao <= 1.8) return 0.75;
  if (razao <= 2.5) return 0.5;
  return 0.25;
}

function componentDesafios(s: SinaisDominio): number {
  if (s.desafiosTentados <= 0) return 0;
  return clamp01(s.desafiosAcertados / s.desafiosTentados);
}

function componentAvaliacoesPosteriores(s: SinaisDominio): number {
  if (s.sessoesPosteriores <= 0) return 0;
  const media = clamp01(s.desempenhoSessoesPosteriores / 100);
  // exigimos pelo menos 2 sessões posteriores para peso cheio (retenção real).
  const confianca = Math.min(1, s.sessoesPosteriores / 2);
  return clamp01(media * confianca);
}

export function calcularDominio(sinais: SinaisDominio): DetalheDominio {
  const c = {
    acertos: componentAcertos(sinais),
    erros: componentErros(sinais),
    revisoes: componentRevisoes(sinais),
    tempo: componentTempo(sinais),
    desafios: componentDesafios(sinais),
    avaliacoesPosteriores: componentAvaliacoesPosteriores(sinais),
  };

  const score = clamp100(
    c.acertos * PESOS.acertos +
      c.erros * PESOS.erros +
      c.revisoes * PESOS.revisoes +
      c.tempo * PESOS.tempo +
      c.desafios * PESOS.desafios +
      c.avaliacoesPosteriores * PESOS.avaliacoesPosteriores,
  );

  // Regra dura: "Dominada" exige evidência em avaliações posteriores.
  const temEvidenciaPosterior = sinais.sessoesPosteriores >= 2 && sinais.desempenhoSessoesPosteriores >= 70;

  let nivel: NivelDominioAprendizagem;
  if (sinais.totalRespostas === 0 && sinais.revisoesConcluidas === 0) {
    nivel = "nao_iniciada";
  } else if (score >= LIMIARES.dominada && temEvidenciaPosterior) {
    nivel = "dominada";
  } else if (score >= LIMIARES.quaseDominada) {
    nivel = "quase_dominada";
  } else if (score >= LIMIARES.emDesenvolvimento) {
    nivel = "em_desenvolvimento";
  } else {
    nivel = "em_desenvolvimento";
    if (sinais.totalRespostas <= 2) nivel = "nao_iniciada";
  }

  const evidencias: string[] = [];
  if (sinais.totalRespostas > 0)
    evidencias.push(`${sinais.acertos}/${sinais.totalRespostas} respostas corretas`);
  if (sinais.desafiosTentados > 0)
    evidencias.push(`${sinais.desafiosAcertados}/${sinais.desafiosTentados} desafios corretos`);
  if (sinais.revisoesConcluidas > 0)
    evidencias.push(`${sinais.revisoesComSucesso}/${sinais.revisoesConcluidas} revisões bem-sucedidas`);
  if (sinais.sessoesPosteriores > 0)
    evidencias.push(
      `${sinais.sessoesPosteriores} sessão(ões) posterior(es) com média ${Math.round(sinais.desempenhoSessoesPosteriores)}%`,
    );

  const proximoPasso =
    nivel === "dominada"
      ? "Manter revisões espaçadas para consolidar a memória de longo prazo."
      : nivel === "quase_dominada"
        ? "Fazer uma avaliação posterior e mais 1 desafio para confirmar o domínio."
        : nivel === "em_desenvolvimento"
          ? "Praticar mais atividades guiadas e revisar exemplos antes de novos desafios."
          : "Iniciar a missão para começar a coletar evidências.";

  return { nivel, rotulo: ROTULOS[nivel], score: Math.round(score), componentes: c, evidencias, proximoPasso };
}

// =====================================================================
// Leitura dos sinais no banco
// =====================================================================

type ProgressoRow = {
  acertos: number | null;
  erros: number | null;
  tentativas: number | null;
  revisoes_realizadas: number | null;
  tempo_medio_segundos: number | null;
  concluida: boolean | null;
  updated_at: string | null;
  historico_evolucao: Array<{
    em: string;
    desempenho: number;
    tempo_segundos: number;
    acertos: number;
    erros: number;
    nivel: string;
    tipo: string;
  }> | null;
};

async function carregarProgresso(childId: string, codigoBncc: string): Promise<ProgressoRow | null> {
  const { data } = await supabase
    .from("escola_progresso")
    .select(
      "acertos, erros, tentativas, revisoes_realizadas, tempo_medio_segundos, concluida, updated_at, historico_evolucao",
    )
    .eq("child_id", childId)
    .eq("codigo_bncc", codigoBncc)
    .maybeSingle();
  return (data as ProgressoRow | null) ?? null;
}

// Tempo esperado padrão por missão (segundos). Ajustável no futuro por dificuldade.
const TEMPO_ESPERADO_PADRAO_S = 15 * 60;

function extrairSinais(p: ProgressoRow | null, tempoEsperado = TEMPO_ESPERADO_PADRAO_S): SinaisDominio {
  const historico = p?.historico_evolucao ?? [];
  const desafios = historico.filter((h) => h.tipo === "desafio");
  const avaliacoesPosteriores = historico.filter(
    (h) => h.tipo === "avaliacao" || h.tipo === "revisao",
  );

  const desafiosTentados = desafios.reduce((s, d) => s + (d.acertos + d.erros), 0);
  const desafiosAcertados = desafios.reduce((s, d) => s + d.acertos, 0);

  const revisoes = historico.filter((h) => h.tipo === "revisao");
  const revisoesComSucesso = revisoes.filter((r) => (r.desempenho ?? 0) >= 70).length;

  const sessoesPosteriores = avaliacoesPosteriores.length;
  const desempenhoMedio =
    sessoesPosteriores > 0
      ? avaliacoesPosteriores.reduce((s, x) => s + (x.desempenho ?? 0), 0) / sessoesPosteriores
      : 0;

  return {
    acertos: p?.acertos ?? 0,
    erros: p?.erros ?? 0,
    totalRespostas: (p?.acertos ?? 0) + (p?.erros ?? 0),
    revisoesConcluidas: p?.revisoes_realizadas ?? revisoes.length,
    revisoesComSucesso,
    tempoMedioSegundos: p?.tempo_medio_segundos ?? 0,
    tempoEsperadoSegundos: tempoEsperado,
    desafiosTentados,
    desafiosAcertados,
    sessoesPosteriores,
    desempenhoSessoesPosteriores: desempenhoMedio,
  };
}

async function persistirNivel(
  childId: string,
  codigoBncc: string,
  nivel: NivelDominioAprendizagem,
): Promise<void> {
  // Mapeia para o enum atual do banco (compatibilidade retroativa).
  const nivelBanco =
    nivel === "quase_dominada" ? "parcialmente_dominada" :
    nivel === "em_desenvolvimento" ? "em_aprendizagem" :
    nivel; // "nao_iniciada" | "dominada"

  const { error } = await supabase
    .from("escola_progresso")
    .update({ nivel_dominio: nivelBanco })
    .eq("child_id", childId)
    .eq("codigo_bncc", codigoBncc);
  if (error) {
    console.warn("[DominioAprendizagem] falha ao persistir nível:", error.message);
  }
}

// =====================================================================
// API pública
// =====================================================================

export const DominioAprendizagem = {
  /** Calcula o domínio a partir de sinais fornecidos (uso puro/teste). */
  calcular: calcularDominio,

  /** Rótulos oficiais para exibição. */
  rotulo(n: NivelDominioAprendizagem): RotuloNivel {
    return ROTULOS[n];
  },

  /** Consulta o domínio atual da criança para uma habilidade BNCC. */
  async avaliar(childId: string, codigoBncc: string, tempoEsperadoSegundos?: number): Promise<DetalheDominio> {
    const p = await carregarProgresso(childId, codigoBncc);
    const sinais = extrairSinais(p, tempoEsperadoSegundos);
    return calcularDominio(sinais);
  },

  /**
   * Atualiza o domínio após uma interação (contínuo).
   * Deve ser chamado após CADA resposta significativa, revisão,
   * desafio ou avaliação posterior — nunca apenas ao concluir a missão.
   */
  async registrarInteracao(
    childId: string,
    codigoBncc: string,
    _interacao: RegistroInteracao,
  ): Promise<DetalheDominio> {
    // A interação já foi persistida via RPC do banco (registrar_conclusao_aula
    // ou similar); aqui apenas RE-CALCULAMOS o domínio a partir do estado
    // agregado e persistimos o nível atualizado.
    const detalhe = await DominioAprendizagem.avaliar(childId, codigoBncc);
    await persistirNivel(childId, codigoBncc, detalhe.nivel);
    return detalhe;
  },

  /**
   * Regra explícita: concluir uma missão NÃO garante domínio.
   * Útil para telas que precisam decidir se exibem "Dominou!" ou
   * "Continue praticando".
   */
  concluiuNaoImplicaDominio(detalhe: DetalheDominio): boolean {
    return detalhe.nivel !== "dominada";
  },
} as const;

export type DominioAprendizagemType = typeof DominioAprendizagem;
