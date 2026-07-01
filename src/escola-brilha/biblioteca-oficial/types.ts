/**
 * Biblioteca Oficial de Missões — Escola Brilha
 * ------------------------------------------------
 * Estrutura ÚNICA e OBRIGATÓRIA para toda habilidade BNCC.
 * Cada habilidade possui exatamente UMA MissaoOficial (sem duplicidades).
 *
 * Armazenamento: um arquivo por habilidade em
 *   src/escola-brilha/biblioteca-oficial/missoes/<CODIGO_BNCC>.ts
 * exportando `export default { ... } satisfies MissaoOficial`.
 *
 * O registry (./index.ts) garante:
 *   - carregamento automático (import.meta.glob)
 *   - rejeição de duplicidades (mesmo código BNCC em dois arquivos)
 *   - lookup por código e por disciplina/ano
 */

import type { QuizItem, Exercicio } from "../types";

export type NivelDificuldade = "facil" | "medio" | "dificil";

export type AtividadePratica = {
  enunciado: string;
  resposta: string;
  dica?: string;
  nivel?: NivelDificuldade;
};

export type ExemploResolvido = {
  enunciado: string;
  passos: string[];
  resposta: string;
  contextoCotidiano?: string;
};

export type AdaptacaoPedagogica = {
  /** Público-alvo da adaptação (ex: "TEA", "TDAH", "Dislexia", "Discalculia", "Baixa visão", "Geral"). */
  publico: string;
  /** Estratégias práticas aplicáveis durante a missão. */
  estrategias: string[];
  /** Recursos concretos (materiais, apoios visuais, tempo extra, etc.). */
  recursos?: string[];
};

export type MiniJogoSugerido = {
  nome: string;
  tipo: "arrastar" | "ordenar" | "ligar" | "colorir" | "montar" | "memoria" | "labirinto" | "quiz-rapido";
  descricao: string;
  /** Referência opcional a interativa já existente na Aula base. */
  refInterativa?: string;
};

/**
 * MissaoOficial — 14 campos obrigatórios por habilidade BNCC.
 */
export type EtapaEscolar = "Educação Infantil" | "Ensino Fundamental" | "Ensino Médio";

export type MissaoOficial = {
  /** Código BNCC — chave única. Ex: "EF01MA01". */
  codigo: string;
  /** Etapa: Educação Infantil, Ensino Fundamental ou Ensino Médio. */
  etapa: EtapaEscolar;
  /** Ano escolar (ex: "Bebês (0-1a6m)", "1º Ano", "6º Ano"). */
  ano: string;
  disciplina: string;
  /** Unidade Temática BNCC (ex: "Números", "Grandezas e Medidas"). */
  unidadeTematica: string;
  /** Objeto de Conhecimento BNCC (nó imediatamente acima da habilidade). */
  objetoConhecimento: string;

  /** 1. Missão principal (título temático + descrição curta). */
  missaoPrincipal: {
    titulo: string;
    descricao: string;
  };

  /** 2. Narrativa (história curta ≤ 2 min). */
  narrativa: {
    titulo: string;
    contexto: string;
    problema: string;
    convite: string;
  };

  /** 3. Explicação pedagógica (texto-base + níveis opcionais). */
  explicacao: {
    texto: string;
    niveis?: { nivel1?: string; nivel2?: string; nivel3?: string; nivel4?: string };
  };

  /** 4. Exemplos (mínimo 1 resolvido + cotidiano). */
  exemplos: ExemploResolvido[];

  /** 5. Atividades (guiadas + independentes). */
  atividades: AtividadePratica[];

  /** 6. Desafios (aplicação avançada). */
  desafios: AtividadePratica[];

  /** 7. Quiz de verificação. */
  quiz: QuizItem[];

  /** 8. Resumo (pontos-chave + dica). */
  resumo: {
    pontos: string[];
    dica: string;
  };

  /** 9. Revisão (retomada + perguntas de revisão espaçada). */
  revisao: {
    retomada: string;
    perguntasRevisao: Array<{ pergunta: string; resposta: string }>;
  };

  /** 10. Mini jogo sugerido. */
  miniJogo: MiniJogoSugerido;

  /** 11. Adaptações pedagógicas (inclusão). */
  adaptacoes: AdaptacaoPedagogica[];

  /** 12. Objetivos de aprendizagem. */
  objetivos: string[];

  /** 13. Competências desenvolvidas (BNCC gerais + específicas). */
  competencias: string[];

  /** 14. Metadados de manutenção (versionamento). */
  meta: {
    versao: string;         // ex: "1.0.0"
    atualizadoEm: string;   // ISO date
    autor?: string;         // "equipe" | nome
    revisadoPor?: string;
  };
};

/** Compat: exercícios antigos podem virar AtividadePratica direta. */
export type { QuizItem, Exercicio };
