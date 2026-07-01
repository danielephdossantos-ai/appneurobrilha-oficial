/**
 * Escola Brilha — modelo único de aula.
 * Toda habilidade BNCC segue exatamente esta estrutura (12 blocos).
 * Uma aula = um arquivo em src/escola-brilha/data/<CODIGO>.ts.
 */

export type QuizItem = {
  pergunta: string;
  opcoes: string[];
  correta: number; // índice em opcoes
  explicacao: string;
};

export type Exercicio = {
  enunciado: string;
  resposta: string;
  dica?: string;
};

/** Modelo único — 12 blocos fixos. Nenhuma aula pode fugir desse padrão. */
export type Aula = {
  codigo: string;              // ex: "EF01MA01"
  ano: string;                 // ex: "1º Ano"
  disciplina: string;          // ex: "Matemática"
  titulo: string;              // título curto, amigável à criança

  // 1. Missão
  missao: string;
  // 2. Objetivos
  objetivos: string[];
  // 3. Explicação
  explicacao: string;
  // 4. Exemplo
  exemploResolvido: { enunciado: string; passos: string[]; resposta: string };
  // 5. Prática Guiada
  atividadeGuiada: { enunciado: string; resposta: string; explicacao: string };
  // 6. Exercícios
  exercicios: Exercicio[];
  // 7. Desafio
  desafio: { enunciado: string; resposta: string };
  // 8. Quiz
  quiz: QuizItem[];
  // 9. Resumo (pontos-chave + dica)
  revisao: { pontos: string[]; dica: string };
  // 10. Conclusão
  conclusao: string;

  // Opcional — mantido pra compatibilidade, não é mais renderizado como bloco
  motivacao?: string;
  proximaHabilidade?: { codigo: string; titulo?: string };
};
