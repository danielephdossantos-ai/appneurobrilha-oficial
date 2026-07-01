/**
 * Contrato obrigatório de Missões do Escola Brilha.
 * Espelha exatamente a trava do banco (trigger validate_lesson_contract).
 *
 * ORDEM OFICIAL DA MISSÃO — 15 blocos, sem exceção:
 *   1. Abertura              → conteudo_json.abertura
 *   2. História Inicial      → conteudo_json.historia_inicial
 *   3. Objetivo da Missão    → conteudo_json.objetivo_missao
 *   4. Conhecimentos Prévios → conteudo_json.conhecimentos_previos (>=1)
 *   5. Descoberta            → conteudo_json.descoberta
 *   6. Explicação            → conteudo_json.explicacao (>=2 etapas)
 *   7. Demonstração          → conteudo_json.demonstracao
 *   8. Atividade Guiada      → conteudo_json.atividade_guiada
 *   9. Exercícios            → conteudo_json.exercicios (>=1)
 *  10. Desafio               → conteudo_json.desafio
 *  11. Mini Jogo             → conteudo_json.mini_jogo
 *  12. Revisão               → conteudo_json.revisao
 *  13. Quiz                  → conteudo_json.quiz (>=3)
 *  14. Medalha               → conteudo_json.medalha
 *  15. Próxima Missão        → conteudo_json.proxima_missao
 *
 * O código BNCC (codigo_bncc) continua interno: admin, relatórios e
 * roteamento. Nada disso aparece pra criança.
 */

export type QuizItem = {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
};

export type ExercicioItem = {
  enunciado: string;
  resposta: string;
  explicacao?: string;
};

export type MissaoBlocos = {
  // 1
  abertura: { titulo: string; texto: string };
  // 2
  historia_inicial: { titulo: string; narrativa: string };
  // 3
  objetivo_missao: { titulo: string; itens: string[] };
  // 4
  conhecimentos_previos: string[];
  // 5
  descoberta: { titulo: string; pergunta_guia: string; pista: string };
  // 6 — explicação principal + etapas
  explicacao: { titulo: string; etapas: string[] };
  // 7
  demonstracao: { enunciado: string; passos: string[]; resposta: string };
  // 8
  atividade_guiada: { enunciado: string; resposta: string; explicacao: string };
  // 9
  exercicios: ExercicioItem[];
  // 10
  desafio: { enunciado: string; resposta: string; explicacao?: string };
  // 11
  mini_jogo:
    | { tipo: "arrastar"; titulo: string; instrucao: string; pares: Array<{ item: string; alvo: string }> }
    | { tipo: "ordenar"; titulo: string; instrucao: string; itens: string[] }
    | { tipo: "ligar"; titulo: string; instrucao: string; pares: Array<{ a: string; b: string }> }
    | { tipo: "colorir"; titulo: string; instrucao: string; regioes: Array<{ nome: string; corCorreta: string }>; paleta: string[] }
    | { tipo: "montar"; titulo: string; instrucao: string; pecas: string[] };
  // 12
  revisao: { pontos: string[]; dica: string };
  // 13
  quiz: QuizItem[];
  // 14
  medalha: { nome: string; descricao: string; icone?: string };
  // 15
  proxima_missao: { codigo_bncc: string; titulo?: string; convite?: string };
};

export type LessonContract = {
  // Colunas planas obrigatórias
  codigo_bncc: string;
  ano: string;
  disciplina: string;
  titulo: string;

  // Estrutura oficial da missão
  conteudo_json: MissaoBlocos;
};

export type LessonValidationResult =
  | { ok: true }
  | { ok: false; faltando: string[] };

/**
 * Validador local — mesmas regras da trigger do banco.
 * Use antes de gravar pra dar feedback imediato ao autor da missão.
 */
export function validateLesson(l: Partial<LessonContract>): LessonValidationResult {
  const faltando: string[] = [];
  const s = (v: unknown) => typeof v === "string" && v.trim() !== "";
  const arr = (v: unknown, n = 1) => Array.isArray(v) && v.length >= n;
  const obj = (v: unknown) =>
    !!v && typeof v === "object" && !Array.isArray(v);

  if (!s(l.titulo)) faltando.push("titulo");
  if (!s(l.ano)) faltando.push("ano");
  if (!s(l.disciplina)) faltando.push("disciplina");

  const c = (l.conteudo_json ?? {}) as Partial<MissaoBlocos>;

  // 1. Abertura
  if (!obj(c.abertura) || !s(c.abertura?.titulo) || !s(c.abertura?.texto))
    faltando.push("1. abertura");
  // 2. História Inicial
  // 2. História Inicial — narrativa curta (≤ 2 min de leitura ≈ 1500 caracteres)
  //    Deve despertar curiosidade, criar contexto, apresentar um problema e
  //    convidar a criança a participar. Está diretamente ligada à BNCC da missão.
  if (!obj(c.historia_inicial) || !s(c.historia_inicial?.titulo) || !s(c.historia_inicial?.narrativa))
    faltando.push("2. historia_inicial");
  else if ((c.historia_inicial!.narrativa ?? "").length > 1500)
    faltando.push("2. historia_inicial (narrativa acima de 2 min de leitura — máx. 1500 caracteres)");
  // 3. Objetivo
  if (!obj(c.objetivo_missao) || !s(c.objetivo_missao?.titulo) || !arr(c.objetivo_missao?.itens))
    faltando.push("3. objetivo_missao (>=1 item)");
  // 4. Conhecimentos prévios
  if (!arr(c.conhecimentos_previos)) faltando.push("4. conhecimentos_previos (>=1)");
  // 5. Descoberta
  if (!obj(c.descoberta) || !s(c.descoberta?.titulo) || !s(c.descoberta?.pergunta_guia) || !s(c.descoberta?.pista))
    faltando.push("5. descoberta");
  // 6. Explicação (>=2 etapas)
  if (!obj(c.explicacao) || !s(c.explicacao?.titulo) || !arr(c.explicacao?.etapas, 2))
    faltando.push("6. explicacao (>=2 etapas)");
  // 7. Demonstração
  if (!obj(c.demonstracao) || !s(c.demonstracao?.enunciado) || !arr(c.demonstracao?.passos) || !s(c.demonstracao?.resposta))
    faltando.push("7. demonstracao");
  // 8. Atividade Guiada
  if (!obj(c.atividade_guiada) || !s(c.atividade_guiada?.enunciado) || !s(c.atividade_guiada?.resposta) || !s(c.atividade_guiada?.explicacao))
    faltando.push("8. atividade_guiada");
  // 9. Exercícios
  if (!arr(c.exercicios)) faltando.push("9. exercicios (>=1)");
  // 10. Desafio
  if (!obj(c.desafio) || !s((c.desafio as { enunciado?: string })?.enunciado) || !s((c.desafio as { resposta?: string })?.resposta))
    faltando.push("10. desafio");
  // 11. Mini Jogo
  if (!obj(c.mini_jogo) || !s((c.mini_jogo as { tipo?: string })?.tipo) || !s((c.mini_jogo as { titulo?: string })?.titulo))
    faltando.push("11. mini_jogo");
  // 12. Revisão
  if (!obj(c.revisao) || !arr(c.revisao?.pontos) || !s(c.revisao?.dica))
    faltando.push("12. revisao (pontos>=1 + dica)");
  // 13. Quiz
  if (!arr(c.quiz, 3)) faltando.push("13. quiz (>=3 perguntas)");
  // 14. Medalha
  if (!obj(c.medalha) || !s(c.medalha?.nome) || !s(c.medalha?.descricao))
    faltando.push("14. medalha");
  // 15. Próxima Missão
  if (!obj(c.proxima_missao) || !s(c.proxima_missao?.codigo_bncc))
    faltando.push("15. proxima_missao (codigo_bncc)");

  return faltando.length === 0 ? { ok: true } : { ok: false, faltando };
}
