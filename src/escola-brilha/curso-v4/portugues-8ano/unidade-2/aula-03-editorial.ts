import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-editorial",
  titulo: "Editorial: A Voz da Publicação",
  icone: "📰",
  bncc: ["EF89LP03", "EF89LP14"],
  tema: "Vozes do Debate",
  conceito: "posição institucional e organização do editorial",
  explicacao: "O editorial expressa a posição de um jornal, revista ou outra publicação, e não apenas a opinião pessoal de um autor. Ele apresenta o tema, defende uma posição com argumentos e termina com uma conclusão ou proposta.",
  exemplo: "Este jornal considera essencial combater a desinformação por meio da educação midiática nas escolas.",
  exemploAnalisado: "A expressão 'este jornal considera' mostra que a posição pertence à publicação, característica central do editorial.",
  pergunta: "Quem assume a posição em um editorial?",
  opcoes: ["A publicação ou instituição", "Somente um personagem da notícia", "Qualquer leitor anônimo"],
  resposta: 0,
  revisao: ["Editorial apresenta uma posição institucional.", "Sua estrutura reúne tema, tese, argumentos e conclusão.", "O texto precisa separar opinião de informação verificável."],
  missao: "Escreva um pequeno editorial em nome do jornal da turma sobre o uso responsável da internet.",
});
