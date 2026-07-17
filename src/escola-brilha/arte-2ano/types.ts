/**
 * SPEB 1.0 · Arte · Contrato oficial
 * Toda aula de Arte deve seguir esta estrutura de 10 etapas + projeto +
 * avaliação + encerramento. É proibido reduzir a aula a jogos ou quizzes.
 */

export type AulaArte = {
  slug: string;
  unidade: { numero: number; titulo: string; subtitulo: string };
  titulo: string;
  duracaoMin: string; // "40 a 50 minutos"
  objetivos: string[];
  materiais: {
    ferramentasApp: string[];
    fisicos: string[];
  };

  // Etapa 1 — A História
  historia: {
    cenario: string; // "Brilha entra em um grande ateliê..."
    carta: string[]; // linhas da carta encontrada
    pergunta: string; // pergunta do Brilha
    botao: string; // texto do botão inicial
  };

  // Etapa 2 — Observando Como um Artista
  observacao: {
    convite: string;
    partesDoRosto: string[];
    faladoPeloBrilha: string;
  };

  // Etapa 3 — Conhecendo Obras
  obras: {
    intro: string;
    referencias: { artista: string; obra: string; sobre: string }[];
    perguntas: string[];
    faladoPeloBrilha: string;
  };

  // Etapa 4 — Aprendendo a Desenhar o Rosto
  passoAPasso: {
    intro: string;
    passos: { titulo: string; descricao: string }[];
  };

  // Etapa 5 — Meu Primeiro Autorretrato (canvas livre)
  producao: {
    instrucao: string;
    dicasDoBrilha: string[];
    legendaSalvar: string;
  };

  // Etapa 6 — Conversa de Artista
  conversa: {
    intro: string;
    perguntas: string[];
  };

  // Etapa 7 — Dando Vida ao Retrato (cores × emoções)
  cores: {
    explicacao: string;
    perguntaEmocao: string;
    emocoes: { nome: string; cor: string; hex: string }[];
  };

  // Etapa 8 — Missão em Casa
  missaoCasa: {
    convite: string;
    observarNaFamilia: string[];
    entregavel: string;
  };

  // Etapa 9 — Minha Pequena Galeria
  galeria: {
    intro: string;
    exemploTitulo: string;
  };

  // Etapa 10 — Curiosidade
  curiosidade: {
    fato: string;
    conexaoFuturo: string; // "No final do 2º ano você fará outro..."
  };

  // Projeto da aula
  projeto: {
    nome: string;
    descricao: string;
  };

  // Avaliação
  avaliacao: {
    intro: string;
    criterios: string[];
    obs: string; // "Não existe nota pela beleza do desenho."
  };

  // Encerramento
  encerramento: {
    medalhaNome: string;
    medalhaIcone: string;
    mensagem: string;
  };
};
