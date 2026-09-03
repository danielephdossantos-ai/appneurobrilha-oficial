import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula06 = criarAulaConsolidacao({
  slug: "lp9-u4-a06-coesao-referencial",
  titulo: "Coesão referencial avançada",
  icone: "🧵",
  bncc: ["EF09LP11", "EF89LP29"],
  tema: "coesão referencial",
  conceito: "retomada e antecipação de informações por diferentes recursos linguísticos",
  explicacao: "A coesão referencial conecta partes do texto por pronomes, sinônimos, expressões equivalentes, elipses e termos que resumem ideias. A escolha do recurso deve evitar tanto a repetição excessiva quanto referências vagas.",
  exemplo: "A turma apresentou duas propostas. Ambas foram analisadas pelo conselho.",
  exemploAnalisado: "“Ambas” retoma “duas propostas” com precisão e evita repetir a expressão completa.",
  pergunta: "Qual termo retoma corretamente “os projetos” em: “Os projetos chegaram ao conselho. ___ serão avaliados amanhã.”?",
  opcoes: ["Eles", "Ela", "Isso"],
  resposta: 0,
  revisao: [
    "Referentes claros mantêm a continuidade do texto.",
    "Pronomes, sinônimos e elipses podem evitar repetições.",
    "Uma retomada vaga pode criar ambiguidade.",
  ],
  missao: "Escreva um parágrafo com quatro frases e use três recursos diferentes para retomar o assunto principal.",
});
