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
  /**
   * Aprendizagem Ativa (opcional): fatia a explicação em pequenos pedaços,
   * cada um seguido de uma micro-interação (toque, checagem rápida ou
   * observação). Se ausente, o bloco Explicação fatia automaticamente o
   * texto de `explicacao` em parágrafos e insere um "toque para continuar"
   * entre eles — nunca mais um paredão de texto.
   */
  explicacaoAtiva?: Array<{
    texto: string;
    checagem?: {
      pergunta: string;
      opcoes: string[];
      correta: number;
      explicacao?: string;
    };
  }>;
  /**
   * Níveis de aprofundamento da explicação (opcional).
   * Todo nível deve ter um texto DIFERENTE — o player nunca repete a mesma
   * frase quando a criança pede "explicar de outro jeito".
   *
   *   nivel1 → explicação extremamente simples (frase-mãe, curtíssima)
   *   nivel2 → novo exemplo concreto do cotidiano
   *   nivel3 → outra forma de explicar (analogia, desenho falado, história)
   *   nivel4 → aplicação prática (onde isso aparece na vida real)
   *
   * Se ausente, o player usa o próprio `explicacao` como nível 1 e libera
   * apenas os níveis que tiverem texto distinto.
   */
  explicacoesNiveis?: {
    nivel1?: string;
    nivel2?: string;
    nivel3?: string;
    nivel4?: string;
  };
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

  // Opcional — diagnóstico rápido dos conhecimentos prévios (antes da aula).
  // Se ausente, o player pula direto pra Missão.
  conhecimentosPrevios?: string[];
  diagnostico?: QuizItem[];

  // Opcional — mantido pra compatibilidade, não é mais renderizado como bloco
  motivacao?: string;
  proximaHabilidade?: { codigo: string; titulo?: string };
};
