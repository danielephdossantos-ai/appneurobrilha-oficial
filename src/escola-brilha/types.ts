/**
 * Escola Brilha — arquitetura simples focada em qualidade pedagógica.
 * Uma aula = um arquivo em src/escola-brilha/data/<CODIGO>.ts com este formato.
 *
 * NÃO há builders, validators, pipelines, versões, cache ou publicadores.
 * Se uma aula muda, muda o arquivo. Ponto.
 */

export type QuizItem = {
  pergunta: string;
  opcoes: string[];
  correta: number; // índice em opcoes
  explicacao: string;
};

/** Uma aula completa em 13 blocos pedagógicos fixos. */
export type Aula = {
  codigo: string;              // ex: "EF01MA01"
  ano: string;                 // ex: "1º Ano"
  disciplina: string;          // ex: "Matemática"
  titulo: string;              // título curto, amigável à criança

  // 1. Objetivo — o que a criança vai saber ao final, em uma frase
  objetivo: string;

  // 2. Introdução — texto de abertura, contextualiza e desperta curiosidade
  introducao: string;

  // 3. Explicação — o conteúdo em si, em passos pequenos
  explicacao: string;

  // 4. Exemplo — um exemplo direto do conteúdo
  exemplo: string;

  // 5. Exemplo do cotidiano — mesma ideia aplicada à vida da criança
  exemploCotidiano: string;

  // 6. Prática guiada — a criança faz junto, com apoio (mini-atividade + resposta explicada)
  praticaGuiada: {
    enunciado: string;
    resposta: string;
    explicacao: string;
  };

  // 7. Prática independente — a criança tenta sozinha
  praticaIndependente: {
    enunciado: string;
    resposta: string;
    dica?: string;
  };

  // 8. Curiosidade — um "você sabia?" relacionado
  curiosidade: string;

  // 9. Desafio — algo um passo além do básico
  desafio: {
    enunciado: string;
    resposta: string;
  };

  // 10. Resumo — 2 a 4 linhas do que aprendeu
  resumo: string;

  // 11. Revisão — 3 a 5 palavras-chave e uma dica de fixação
  revisao: {
    palavrasChave: string[];
    dica: string;
  };

  // 12. Quiz — 3 a 5 perguntas
  quiz: QuizItem[];

  // 13. Resultado — mensagem de fechamento (renderizado dinamicamente com a pontuação)
  fechamento: string;
};
