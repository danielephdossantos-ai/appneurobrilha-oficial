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

  // 1. Missão da aula — frase curta, tipo desafio, que abre a jornada
  missao: string;

  // 2. Objetivos — o que a criança vai saber ao final (2 a 4 itens)
  objetivos: string[];

  // 3. Motivação — por que isso importa? gancho emocional / curiosidade
  motivacao: string;

  // 4. Explicação — o conteúdo em si, em passos pequenos
  explicacao: string;

  // 5. Exemplo resolvido — mostra o raciocínio, passo a passo
  exemploResolvido: {
    enunciado: string;
    passos: string[];
    resposta: string;
  };

  // 6. Atividade guiada — a criança faz junto, com apoio
  atividadeGuiada: {
    enunciado: string;
    resposta: string;
    explicacao: string;
  };

  // 7. Exercícios — a criança pratica sozinha (2 a 4 itens)
  exercicios: Exercicio[];

  // 8. Desafio — um passo além do básico
  desafio: {
    enunciado: string;
    resposta: string;
  };

  // 9. Revisão — pontos-chave (3 a 5) + dica de fixação
  revisao: {
    pontos: string[];
    dica: string;
  };

  // 10. Quiz — 3 a 5 perguntas
  quiz: QuizItem[];

  // 11. Conclusão — mensagem de fechamento
  conclusao: string;

  // 12. Próxima habilidade — código BNCC da próxima aula sugerida (+ título opcional)
  proximaHabilidade?: {
    codigo: string;
    titulo?: string;
  };
};
