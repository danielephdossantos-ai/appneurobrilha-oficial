/**
 * Motor Pedagógico do Escola Brilha
 * ---------------------------------
 * Núcleo ÚNICO de aprendizagem do aplicativo.
 *
 * Toda lógica pedagógica DEVE passar por este módulo:
 *   - sequência das habilidades BNCC
 *   - carregamento das missões
 *   - adaptação por idade
 *   - adaptação por desempenho
 *   - revisão inteligente (espaçada)
 *   - progresso
 *   - recomendações
 *   - conquistas
 *
 * Nenhum componente / rota / player pode implementar regra pedagógica
 * própria. Sempre importar `MotorPedagogico` daqui.
 *
 * Este arquivo é uma FACHADA (facade) que compõe os módulos existentes.
 * Não duplica regras — centraliza o ponto de acesso.
 */

import type { Aula } from "../types";
import type { MissaoOficial } from "../biblioteca-oficial/types";

import { getAula, listAulas, hasAula } from "../registry";
import {
  getMissaoOficial,
  hasMissaoOficial,
  listMissoesOficiais,
  listMissoesPorAno,
  listMissoesPorDisciplina,
  totalMissoesOficiais,
} from "../biblioteca-oficial";
import { proximaHabilidade, invalidarCacheSequencia, type HabSeq } from "../bncc-sequencia";
import {
  proximaMissao,
  metaDaAula,
  metaDoCodigo,
  estimarTempo,
  dificuldadeDe,
  type Dificuldade,
  type MissaoMeta,
} from "../proxima-missao";
import { supabase } from "@/integrations/supabase/client";
import { resolverMissao, parseBNCC, MENSAGEM_MISSAO_EM_CONSTRUCAO } from "./resolver";
import {
  selecionarAtividades,
  selecionarAtividadesDetalhado,
  CATALOGO_ATIVIDADES,
  TODOS_TIPOS,
  type TipoAtividade,
  type AtividadeMeta,
  type SelecaoAtividades,
} from "../atividades";

// =====================================================================
// Tipos públicos do Motor
// =====================================================================

export type NivelDominio =
  | "nao_iniciada"
  | "em_aprendizagem"
  | "parcialmente_dominada"
  | "dominada";

export type PerfilCrianca = {
  childId: string;
  idade?: number;
  serie?: string;
  perfilNeuro?: string; // "TEA" | "TDAH" | "Tipico" | ...
};

export type Desempenho = {
  desempenho: number; // 0-100
  tempoSegundos?: number;
  erros?: number;
  acertos?: number;
};

export type AdaptacaoIdade = {
  usarImagens: boolean;
  leituraEmVozAlta: boolean;
  fonteMaior: boolean;
  quantidadeMaxItens: number;
};

export type AdaptacaoDesempenho = {
  nivelSugerido: "facil" | "medio" | "dificil";
  precisaReforco: boolean;
  precisaRevisao: boolean;
  aumentarDificuldade: boolean;
};

export type Recomendacao = {
  tipo: "proxima_missao" | "revisao" | "reforco";
  codigoBncc: string;
  motivo: string;
};

// =====================================================================
// 1. Sequência BNCC & Carregamento de Missões
// =====================================================================

const Missoes = {
  /** Carrega a MissaoOficial completa (biblioteca oficial). */
  carregar(codigo: string): MissaoOficial | undefined {
    return getMissaoOficial(codigo);
  },
  /** Aula base (registry data/). Fallback quando não existe missão oficial. */
  carregarAulaBase(codigo: string): Aula | undefined {
    return getAula(codigo);
  },
  existe(codigo: string): boolean {
    return hasMissaoOficial(codigo) || hasAula(codigo);
  },
  listar(): MissaoOficial[] {
    return listMissoesOficiais();
  },
  listarPorAno(ano: string): MissaoOficial[] {
    return listMissoesPorAno(ano);
  },
  listarPorDisciplina(disciplina: string): MissaoOficial[] {
    return listMissoesPorDisciplina(disciplina);
  },
  total(): number {
    return totalMissoesOficiais();
  },
  aulasBase(): Aula[] {
    return listAulas();
  },
};

const Sequencia = {
  /** Próxima habilidade BNCC oficial após `codigo`. */
  proxima(codigo: string): Promise<HabSeq | null> {
    return proximaHabilidade(codigo);
  },
  invalidarCache(): void {
    invalidarCacheSequencia();
  },
};

// =====================================================================
// 2. Adaptação por Idade
// =====================================================================

function normalizarSerie(s: string | undefined): string {
  return (s ?? "").toLowerCase().replace(/\s+/g, " ").trim();
}

const AdaptacaoPorIdade = {
  calcular(perfil: PerfilCrianca): AdaptacaoIdade {
    const idade = perfil.idade ?? 0;
    const serie = normalizarSerie(perfil.serie);
    const infantil =
      idade > 0 && idade <= 6 ||
      serie.includes("infantil") ||
      serie.startsWith("1º");

    if (infantil) {
      return {
        usarImagens: true,
        leituraEmVozAlta: true,
        fonteMaior: true,
        quantidadeMaxItens: 4,
      };
    }
    if (idade <= 9 || serie.startsWith("2º") || serie.startsWith("3º")) {
      return {
        usarImagens: true,
        leituraEmVozAlta: true,
        fonteMaior: false,
        quantidadeMaxItens: 6,
      };
    }
    return {
      usarImagens: false,
      leituraEmVozAlta: false,
      fonteMaior: false,
      quantidadeMaxItens: 10,
    };
  },
};

// =====================================================================
// 3. Adaptação por Desempenho
// =====================================================================

const AdaptacaoPorDesempenho = {
  calcular(d: Desempenho): AdaptacaoDesempenho {
    const p = Math.max(0, Math.min(100, d.desempenho ?? 0));
    if (p < 50) {
      return {
        nivelSugerido: "facil",
        precisaReforco: true,
        precisaRevisao: true,
        aumentarDificuldade: false,
      };
    }
    if (p < 85) {
      return {
        nivelSugerido: "medio",
        precisaReforco: false,
        precisaRevisao: false,
        aumentarDificuldade: false,
      };
    }
    return {
      nivelSugerido: "dificil",
      precisaReforco: false,
      precisaRevisao: false,
      aumentarDificuldade: true,
    };
  },
};

// =====================================================================
// 4. Revisão Inteligente (SM-2 via RPC do banco)
// =====================================================================

const Revisao = {
  /**
   * Registra conclusão + agenda próxima revisão (repetição espaçada).
   * Usa a RPC `registrar_conclusao_aula` (verificada nos DB functions).
   */
  async registrarConclusao(
    childId: string,
    codigoBncc: string,
    desempenho: number,
    tipo: "aula" | "revisao" | "reforco" = "aula",
  ): Promise<string | null> {
    const { data, error } = await supabase.rpc("registrar_conclusao_aula", {
      _child_id: childId,
      _codigo_bncc: codigoBncc,
      _desempenho: Math.max(0, Math.min(100, Math.round(desempenho))),
      _tipo: tipo,
    });
    if (error) {
      console.error("[MotorPedagogico] registrarConclusao:", error);
      return null;
    }
    return (data as string | null) ?? null;
  },

  async recomendar(childId: string): Promise<Recomendacao[]> {
    const { data, error } = await supabase.rpc("recomendar_revisoes", {
      _child_id: childId,
    });
    if (error) {
      console.error("[MotorPedagogico] recomendar_revisoes:", error);
      return [];
    }
    return (data ?? []).map((r: { codigo_bncc: string; motivo: string }) => ({
      tipo: "revisao" as const,
      codigoBncc: r.codigo_bncc,
      motivo: r.motivo ?? "revisao_programada",
    }));
  },
};

// =====================================================================
// 5. Progresso
// =====================================================================

const Progresso = {
  async carregar(childId: string, codigoBncc: string) {
    const { data } = await supabase
      .from("escola_progresso")
      .select(
        "bloco_atual, concluida, percentual, nivel_dominio, tentativas, acertos, erros, sessoes_dominadas_consecutivas",
      )
      .eq("child_id", childId)
      .eq("codigo_bncc", codigoBncc)
      .maybeSingle();
    return data ?? null;
  },

  async podeAvancar(childId: string, codigoBncc: string): Promise<boolean> {
    const { data, error } = await supabase.rpc("pode_avancar_habilidade", {
      _child_id: childId,
      _codigo_bncc: codigoBncc,
    });
    if (error) return false;
    return !!data;
  },

  async nivelDominio(childId: string, codigoBncc: string): Promise<NivelDominio> {
    const p = await Progresso.carregar(childId, codigoBncc);
    const n = (p?.nivel_dominio as NivelDominio | undefined) ?? "nao_iniciada";
    return n;
  },
};

// =====================================================================
// 6. Recomendações (próxima missão, revisões, reforço)
// =====================================================================

const Recomendacoes = {
  async proximaMissao(childId: string | undefined, serie?: string): Promise<MissaoMeta | null> {
    return proximaMissao(childId, serie);
  },

  /**
   * Roteiro completo: revisões pendentes primeiro, depois próxima missão.
   */
  async roteiro(perfil: PerfilCrianca): Promise<Recomendacao[]> {
    const out: Recomendacao[] = [];
    if (perfil.childId) {
      const revs = await Revisao.recomendar(perfil.childId);
      out.push(...revs);
    }
    const prox = await Recomendacoes.proximaMissao(perfil.childId, perfil.serie);
    if (prox) {
      out.push({
        tipo: "proxima_missao",
        codigoBncc: prox.aula.codigo,
        motivo: "sequencia_bncc",
      });
    }
    return out;
  },

  meta(codigo: string): MissaoMeta | null {
    return metaDoCodigo(codigo);
  },
};

// =====================================================================
// 7. Conquistas
// =====================================================================

const Conquistas = {
  async registrar(childId: string, codigo: string, tipo: string) {
    try {
      await supabase.from("child_achievements").insert({
        child_id: childId,
        achievement_id: `${tipo}:${codigo}`,
      });
    } catch (e) {
      console.warn("[MotorPedagogico] conquista não registrada:", e);
    }
  },
};

// =====================================================================
// FACHADA — ponto único de acesso pedagógico
// =====================================================================

export const MotorPedagogico = {
  missoes: Missoes,
  sequencia: Sequencia,
  adaptacaoIdade: AdaptacaoPorIdade,
  adaptacaoDesempenho: AdaptacaoPorDesempenho,
  revisao: Revisao,
  progresso: Progresso,
  recomendacoes: Recomendacoes,
  conquistas: Conquistas,

  /** Resolve tudo que uma missão precisa a partir do código BNCC. */
  resolver: resolverMissao,
  parseBNCC,
  MENSAGEM_MISSAO_EM_CONSTRUCAO,

  util: {
    metaDaAula,
    estimarTempo,
    dificuldadeDe,
  },
} as const;

export type MotorPedagogicoType = typeof MotorPedagogico;

export type { Aula, MissaoOficial, HabSeq, MissaoMeta, Dificuldade };
