/**
 * Contrato obrigatório de aulas do Escola Brilha.
 * Espelha exatamente a trava do banco (trigger validate_lesson_contract).
 * Toda aula PRECISA ter todos os itens abaixo preenchidos e não vazios.
 */

export type QuizItem = {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
};

export type Exemplo = {
  titulo: string;
  enunciado: string;
  resolucao: string;
  resposta: string;
};

export type Atividade = {
  enunciado: string;
  resposta: string;
  explicacao: string;
};

export type Adaptacao = {
  estrategias: string[];
  ajustes: string[];
  orientacoes_familia: string;
};

/** Estrutura completa de uma aula (colunas planas + conteudo_json). */
export type LessonContract = {
  // Colunas planas obrigatórias
  codigo_bncc: string;
  ano: string;
  etapa: string;
  disciplina: string;
  titulo: string;
  objetivo: string;
  missao: string;
  introducao: string;
  explicacao: string;              // Explicação Principal
  contextualizacao: string;
  resumo: string;
  tempo_estimado: number;
  nivel: string;

  // conteudo_json — todos obrigatórios
  conteudo_json: {
    objetivos: string[];               // >=1
    conhecimentos_previos: string[];   // >=1
    materiais: string[];               // >=1
    explicacao_etapas: string[];       // >=2 — Explicação dividida em pequenas etapas
    exemplos: [Exemplo, Exemplo, Exemplo]; // exatamente 3 (do cotidiano)
    curiosidade: string;
    atividade_guiada: Atividade;
    atividade_pratica: Atividade;
    desafio: { enunciado: string; resposta: string; explicacao: string };
    quiz: QuizItem[];                  // >=3
    mapa_mental: {
      centro: string;
      ramos: { titulo: string; itens: string[] }[];
    };
    erros_comuns: { erro: string; correcao: string }[]; // >=1
    dicas: string[];                                    // >=1
    adaptacoes: {
      tdah: Adaptacao;
      tea: Adaptacao;
      dislexia: Adaptacao;
    };
    criterios_dominio: string[];       // >=1 — critérios de domínio da habilidade
    mensagem_final: string;            // Mensagem final de incentivo (obrigatória)
  };
};


export type LessonValidationResult =
  | { ok: true }
  | { ok: false; faltando: string[] };

/**
 * Validador local — mesmas regras da trigger do banco.
 * Use antes de gravar pra dar feedback imediato ao autor da aula.
 */
export function validateLesson(l: Partial<LessonContract>): LessonValidationResult {
  const faltando: string[] = [];
  const nonEmpty = (v: unknown) => typeof v === "string" && v.trim() !== "";
  const arr = (v: unknown, n = 1) => Array.isArray(v) && v.length >= n;
  const obj = (v: unknown) =>
    !!v && typeof v === "object" && !Array.isArray(v) && Object.keys(v as object).length > 0;

  if (!nonEmpty(l.titulo)) faltando.push("titulo");
  if (!nonEmpty(l.objetivo)) faltando.push("objetivo");
  if (!nonEmpty(l.missao)) faltando.push("missao");
  if (!nonEmpty(l.introducao)) faltando.push("introducao");
  if (!nonEmpty(l.explicacao)) faltando.push("explicacao");
  if (!nonEmpty(l.resumo)) faltando.push("resumo");

  const c = l.conteudo_json ?? ({} as LessonContract["conteudo_json"]);
  if (!arr(c.objetivos)) faltando.push("objetivos (>=1)");
  if (!arr(c.conhecimentos_previos)) faltando.push("conhecimentos_previos (>=1)");
  if (!arr(c.materiais)) faltando.push("materiais (>=1)");
  if (!arr(c.explicacao_etapas, 2)) faltando.push("explicacao_etapas (>=2)");
  if (!arr(c.exemplos, 3)) faltando.push("exemplos (3 obrigatórios)");

  if (!nonEmpty(c.curiosidade)) faltando.push("curiosidade");
  if (!obj(c.atividade_guiada)) faltando.push("atividade_guiada");
  if (!obj(c.atividade_pratica)) faltando.push("atividade_pratica");
  if (!obj(c.desafio)) faltando.push("desafio");
  if (!arr(c.quiz, 3)) faltando.push("quiz (>=3 perguntas)");
  if (!obj(c.mapa_mental)) faltando.push("mapa_mental");
  if (!arr(c.erros_comuns)) faltando.push("erros_comuns (>=1)");
  if (!arr(c.dicas)) faltando.push("dicas (>=1)");

  if (!c.adaptacoes || typeof c.adaptacoes !== "object") {
    faltando.push("adaptacoes.tdah", "adaptacoes.tea", "adaptacoes.dislexia");
  } else {
    if (!obj(c.adaptacoes.tdah)) faltando.push("adaptacoes.tdah");
    if (!obj(c.adaptacoes.tea)) faltando.push("adaptacoes.tea");
    if (!obj(c.adaptacoes.dislexia)) faltando.push("adaptacoes.dislexia");
  }

  if (!arr(c.criterios_dominio)) faltando.push("criterios_dominio (>=1)");
  if (!nonEmpty(c.mensagem_final)) faltando.push("mensagem_final");


  return faltando.length === 0 ? { ok: true } : { ok: false, faltando };
}
