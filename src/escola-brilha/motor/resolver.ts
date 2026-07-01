/**
 * Resolver de Missão — Motor Pedagógico
 * -------------------------------------
 * Ao abrir uma missão pelo código BNCC, este módulo localiza AUTOMATICAMENTE:
 *   • habilidade BNCC (código normalizado)
 *   • disciplina        (parseada do código: MA, LP, CI, HI, GE, AR, EF, EN, ER)
 *   • ano               (parseado: 01..09, "EI" p/ Infantil, "EM" p/ Médio)
 *   • etapa             ("Educação Infantil" | "Ensino Fundamental" | "Ensino Médio")
 *   • missão correspondente (biblioteca oficial ou aula base)
 *   • progresso do aluno
 *   • adaptações necessárias (idade + desempenho)
 *
 * Se a missão não existir:
 *   - NÃO lança erro técnico.
 *   - Retorna `{ existe: false }` com a mensagem oficial de "em construção".
 *   - Registra em `missoes_pendentes` via RPC para produção futura.
 */

import { supabase } from "@/integrations/supabase/client";
import { getMissaoOficial, hasMissaoOficial } from "../biblioteca-oficial";
import { getAula, hasAula } from "../registry";
import type { MissaoOficial } from "../biblioteca-oficial/types";
import type { Aula } from "../types";

export const MENSAGEM_MISSAO_EM_CONSTRUCAO = "Esta missão ainda está em construção.";

export type Etapa = "Educação Infantil" | "Ensino Fundamental" | "Ensino Médio" | "Desconhecida";

export type DadosBNCC = {
  codigo: string;
  etapaSigla: "EI" | "EF" | "EM" | "??";
  etapa: Etapa;
  anoSigla: string;      // "01".."09" | "EI" | "EM"
  ano: string;           // "1º Ano" | "Educação Infantil" | ...
  disciplinaSigla: string;
  disciplina: string;
};

const DISCIPLINAS: Record<string, string> = {
  MA: "Matemática",
  LP: "Língua Portuguesa",
  CI: "Ciências",
  HI: "História",
  GE: "Geografia",
  AR: "Arte",
  EF: "Educação Física",
  EN: "Língua Inglesa",
  ER: "Ensino Religioso",
  EO: "Campos de Experiência",
};

/** Normaliza e parseia um código BNCC (ex: EF01MA01, EI02EO01, EM13MAT101). */
export function parseBNCC(codigo: string): DadosBNCC {
  const c = (codigo || "").toUpperCase().trim();
  const etapaSigla = (c.slice(0, 2) as DadosBNCC["etapaSigla"]) || "??";
  const anoSigla = c.slice(2, 4);
  const disciplinaSigla = c.slice(4, 6);

  const etapa: Etapa =
    etapaSigla === "EI" ? "Educação Infantil" :
    etapaSigla === "EF" ? "Ensino Fundamental" :
    etapaSigla === "EM" ? "Ensino Médio" :
    "Desconhecida";

  const anoNum = parseInt(anoSigla, 10);
  const ano =
    etapaSigla === "EI" ? "Educação Infantil" :
    etapaSigla === "EM" ? "Ensino Médio" :
    Number.isFinite(anoNum) && anoNum > 0 ? `${anoNum}º Ano` : anoSigla;

  return {
    codigo: c,
    etapaSigla,
    etapa,
    anoSigla,
    ano,
    disciplinaSigla,
    disciplina: DISCIPLINAS[disciplinaSigla] ?? disciplinaSigla,
  };
}

export type PerfilResolver = {
  childId?: string;
  idade?: number;
  serie?: string;
  perfilNeuro?: string;
};

export type MissaoResolvida = {
  existe: true;
  bncc: DadosBNCC;
  missaoOficial: MissaoOficial | null;
  aulaBase: Aula | null;
  progresso: {
    concluida: boolean;
    percentual: number;
    nivelDominio: string;
    tentativas: number;
  } | null;
  adaptacoes: {
    idade: import("./index").AdaptacaoIdade;
    desempenho: import("./index").AdaptacaoDesempenho;
  };
};

export type MissaoAusente = {
  existe: false;
  bncc: DadosBNCC;
  mensagem: string;
};

export type ResolverResult = MissaoResolvida | MissaoAusente;

/**
 * Registra silenciosamente a ausência de uma missão. Nunca lança.
 */
async function registrarAusencia(codigo: string, childId?: string): Promise<void> {
  try {
    await supabase.rpc("registrar_missao_pendente", {
      _codigo_bncc: codigo,
      _child_id: childId ?? null,
    });
  } catch (e) {
    // silencioso — a tela nunca deve exibir erro técnico.
    console.warn("[MotorPedagogico] não foi possível registrar missão pendente:", e);
  }
}

/**
 * Fachada de resolução — usada pelo Player Universal e por qualquer rota
 * que precise abrir uma missão a partir do código BNCC.
 */
export async function resolverMissao(
  codigo: string,
  perfil: PerfilResolver = {},
): Promise<ResolverResult> {
  const bncc = parseBNCC(codigo);

  const oficial = hasMissaoOficial(bncc.codigo) ? getMissaoOficial(bncc.codigo) ?? null : null;
  const base = hasAula(bncc.codigo) ? getAula(bncc.codigo) ?? null : null;

  if (!oficial && !base) {
    // Missão não existe — registra e devolve estado de "em construção".
    void registrarAusencia(bncc.codigo, perfil.childId);
    return {
      existe: false,
      bncc,
      mensagem: MENSAGEM_MISSAO_EM_CONSTRUCAO,
    };
  }

  // Adaptações — imports diretos evitam ciclo em tempo de execução.
  const { MotorPedagogico } = await import("./index");

  const idade = MotorPedagogico.adaptacaoIdade.calcular({
    childId: perfil.childId ?? "",
    idade: perfil.idade,
    serie: perfil.serie ?? bncc.ano,
    perfilNeuro: perfil.perfilNeuro,
  });

  // Progresso — precisamos do desempenho recente pra sugerir dificuldade.
  let progresso: MissaoResolvida["progresso"] = null;
  let desempenhoAtual = 0;
  if (perfil.childId) {
    const p = await MotorPedagogico.progresso.carregar(perfil.childId, bncc.codigo);
    if (p) {
      const acertos = (p as { acertos?: number }).acertos ?? 0;
      const erros = (p as { erros?: number }).erros ?? 0;
      const total = acertos + erros;
      desempenhoAtual = total > 0 ? Math.round((acertos / total) * 100) : (p.percentual ?? 0);
      progresso = {
        concluida: !!p.concluida,
        percentual: p.percentual ?? 0,
        nivelDominio: (p.nivel_dominio as string) ?? "nao_iniciada",
        tentativas: (p as { tentativas?: number }).tentativas ?? 0,
      };
    }
  }

  const desempenho = MotorPedagogico.adaptacaoDesempenho.calcular({
    desempenho: desempenhoAtual,
  });

  return {
    existe: true,
    bncc,
    missaoOficial: oficial,
    aulaBase: base,
    progresso,
    adaptacoes: { idade, desempenho },
  };
}
