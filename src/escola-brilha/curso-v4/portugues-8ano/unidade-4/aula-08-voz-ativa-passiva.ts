import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula08 = criarAulaConsolidacao({
  slug: "lp8-u4-a08-voz-ativa-passiva",
  titulo: "Voz ativa e voz passiva",
  icone: "🎯",
  bncc: ["EF08LP08"],
  tema: "voz ativa e voz passiva",
  conceito: "formas de organizar a ação verbal e destacar participantes diferentes",
  explicacao: "Na voz ativa, o sujeito pratica a ação. Na voz passiva, o sujeito recebe a ação. A mudança de voz preserva o acontecimento principal, mas altera o elemento colocado em destaque.",
  exemplo: "A equipe apresentou o projeto. O projeto foi apresentado pela equipe.",
  exemploAnalisado: "Na primeira frase, “a equipe” recebe destaque como agente; na segunda, “o projeto” ocupa o foco como sujeito que recebe a ação.",
  pergunta: "Qual frase está na voz passiva?",
  opcoes: ["A exposição foi organizada pelos estudantes.", "Os estudantes organizaram a exposição.", "Os estudantes organizarão a exposição."],
  resposta: 0,
  revisao: [
    "Na voz ativa, o sujeito pratica a ação.",
    "Na voz passiva, o sujeito recebe a ação.",
    "A escolha da voz altera o foco da mensagem.",
  ],
  missao: "Escreva uma frase na voz ativa e transforme-a em voz passiva sem mudar o acontecimento principal.",
});
