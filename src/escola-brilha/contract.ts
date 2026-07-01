/**
 * Contrato obrigatório de Missões do Escola Brilha.
 * Espelha exatamente a trava do banco (trigger validate_lesson_contract).
 *
 * ORDEM OFICIAL DA MISSÃO — 20 blocos, sem exceção:
 *   01. Introdução           → conteudo_json.introducao
 *   02. História             → conteudo_json.historia
 *   03. Objetivos            → conteudo_json.objetivos (>=1)
 *   04. Conhecimentos Prévios→ conteudo_json.conhecimentos_previos (>=1)
 *   05. Motivação            → conteudo_json.motivacao
 *   06. Descoberta           → conteudo_json.descoberta
 *   07. Explicação           → conteudo_json.explicacao (>=2 etapas)
 *   08. Demonstração         → conteudo_json.demonstracao
 *   09. Exemplo 1            → conteudo_json.exemplo_1
 *   10. Exemplo 2            → conteudo_json.exemplo_2
 *   11. Curiosidade          → conteudo_json.curiosidade
 *   12. Atividade Guiada     → conteudo_json.atividade_guiada
 *   13. Exercícios           → conteudo_json.exercicios (>=1)
 *   14. Desafio              → conteudo_json.desafio
 *   15. Revisão              → conteudo_json.revisao
 *   16. Resumo               → conteudo_json.resumo
 *   17. Quiz                 → conteudo_json.quiz (>=3)
 *   18. Feedback             → conteudo_json.feedback
 *   19. Conquista            → conteudo_json.conquista
 *   20. Próxima Missão       → conteudo_json.proxima_missao
 *
 * O código BNCC (codigo_bncc) permanece interno.
 * Nenhuma missão pode ser publicada incompleta.
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

export type ExemploResolvido = {
  titulo?: string;
  enunciado: string;
  passos: string[];
  resposta: string;
  contexto_cotidiano?: string;
};

export type MissaoBlocos = {
  // 01
  introducao: { titulo: string; texto: string };
  // 02
  historia: { titulo: string; narrativa: string };
  // 03
  objetivos: string[];
  // 04
  conhecimentos_previos: string[];
  // 05
  motivacao: { titulo: string; texto: string };
  // 06
  descoberta: { titulo: string; pergunta_guia: string; pista: string };
  // 07
  explicacao: { titulo: string; etapas: string[] };
  // 08
  demonstracao: { enunciado: string; passos: string[]; resposta: string };
  // 09
  exemplo_1: ExemploResolvido;
  // 10
  exemplo_2: ExemploResolvido;
  // 11
  curiosidade: { titulo: string; texto: string };
  // 12
  atividade_guiada: { enunciado: string; resposta: string; explicacao: string };
  // 13
  exercicios: ExercicioItem[];
  // 14
  desafio: { enunciado: string; resposta: string; explicacao?: string };
  // 15
  revisao: { pontos: string[]; dica: string };
  // 16
  resumo: { pontos: string[]; frase_final?: string };
  // 17
  quiz: QuizItem[];
  // 18
  feedback: { acerto: string; erro: string; parcial?: string };
  // 19
  conquista: { nome: string; descricao: string; icone?: string; xp?: number };
  // 20
  proxima_missao: { codigo_bncc: string; titulo?: string; convite?: string };
};

export type LessonContract = {
  codigo_bncc: string;
  ano: string;
  disciplina: string;
  titulo: string;
  conteudo_json: MissaoBlocos;
};

export type LessonValidationResult =
  | { ok: true }
  | { ok: false; faltando: string[] };

/**
 * Validador local — mesmas regras da trigger do banco.
 */
export function validateLesson(l: Partial<LessonContract>): LessonValidationResult {
  const faltando: string[] = [];
  const s = (v: unknown) => typeof v === "string" && v.trim() !== "";
  const arr = (v: unknown, n = 1) => Array.isArray(v) && v.length >= n;
  const obj = (v: unknown) => !!v && typeof v === "object" && !Array.isArray(v);
  const exemplo = (v: unknown) =>
    obj(v) &&
    s((v as ExemploResolvido).enunciado) &&
    arr((v as ExemploResolvido).passos) &&
    s((v as ExemploResolvido).resposta);

  if (!s(l.titulo)) faltando.push("titulo");
  if (!s(l.ano)) faltando.push("ano");
  if (!s(l.disciplina)) faltando.push("disciplina");

  const c = (l.conteudo_json ?? {}) as Partial<MissaoBlocos>;

  if (!obj(c.introducao) || !s(c.introducao?.titulo) || !s(c.introducao?.texto))
    faltando.push("01. introducao");
  if (!obj(c.historia) || !s(c.historia?.titulo) || !s(c.historia?.narrativa))
    faltando.push("02. historia");
  else if ((c.historia!.narrativa ?? "").length > 1500)
    faltando.push("02. historia (narrativa acima de 2 min — máx. 1500 caracteres)");
  if (!arr(c.objetivos)) faltando.push("03. objetivos (>=1)");
  if (!arr(c.conhecimentos_previos)) faltando.push("04. conhecimentos_previos (>=1)");
  if (!obj(c.motivacao) || !s(c.motivacao?.titulo) || !s(c.motivacao?.texto))
    faltando.push("05. motivacao");
  if (!obj(c.descoberta) || !s(c.descoberta?.titulo) || !s(c.descoberta?.pergunta_guia) || !s(c.descoberta?.pista))
    faltando.push("06. descoberta");
  if (!obj(c.explicacao) || !s(c.explicacao?.titulo) || !arr(c.explicacao?.etapas, 2))
    faltando.push("07. explicacao (>=2 etapas)");
  if (!obj(c.demonstracao) || !s(c.demonstracao?.enunciado) || !arr(c.demonstracao?.passos) || !s(c.demonstracao?.resposta))
    faltando.push("08. demonstracao");
  if (!exemplo(c.exemplo_1)) faltando.push("09. exemplo_1");
  if (!exemplo(c.exemplo_2)) faltando.push("10. exemplo_2");
  if (!obj(c.curiosidade) || !s(c.curiosidade?.titulo) || !s(c.curiosidade?.texto))
    faltando.push("11. curiosidade");
  if (!obj(c.atividade_guiada) || !s(c.atividade_guiada?.enunciado) || !s(c.atividade_guiada?.resposta) || !s(c.atividade_guiada?.explicacao))
    faltando.push("12. atividade_guiada");
  if (!arr(c.exercicios)) faltando.push("13. exercicios (>=1)");
  if (!obj(c.desafio) || !s((c.desafio as { enunciado?: string })?.enunciado) || !s((c.desafio as { resposta?: string })?.resposta))
    faltando.push("14. desafio");
  if (!obj(c.revisao) || !arr(c.revisao?.pontos) || !s(c.revisao?.dica))
    faltando.push("15. revisao (pontos>=1 + dica)");
  if (!obj(c.resumo) || !arr(c.resumo?.pontos))
    faltando.push("16. resumo (pontos>=1)");
  if (!arr(c.quiz, 3)) faltando.push("17. quiz (>=3 perguntas)");
  if (!obj(c.feedback) || !s(c.feedback?.acerto) || !s(c.feedback?.erro))
    faltando.push("18. feedback (acerto + erro)");
  if (!obj(c.conquista) || !s(c.conquista?.nome) || !s(c.conquista?.descricao))
    faltando.push("19. conquista (nome + descricao)");
  if (!obj(c.proxima_missao) || !s(c.proxima_missao?.codigo_bncc))
    faltando.push("20. proxima_missao (codigo_bncc)");

  return faltando.length === 0 ? { ok: true } : { ok: false, faltando };
}
