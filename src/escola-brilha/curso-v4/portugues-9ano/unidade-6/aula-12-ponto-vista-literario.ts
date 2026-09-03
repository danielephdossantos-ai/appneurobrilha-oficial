import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula12 = criarAulaConsolidacao({
  slug: "lp9-u6-a12-ponto-vista-literario",
  titulo: "Ponto de vista e crítica literária",
  icone: "👁️",
  bncc: ["EF89LP32", "EF89LP35"],
  tema: "ponto de vista literário",
  conceito: "escolha da voz narrativa e do ângulo usado para apresentar acontecimentos",
  explicacao: "A voz narrativa determina quais informações chegam ao leitor e como elas são percebidas. Um narrador-personagem apresenta uma experiência limitada ao próprio olhar; um narrador observador acompanha ações de fora. Alterar o ponto de vista pode revelar silêncios e questionar versões consideradas únicas.",
  exemplo: "Todos chamavam a sala de vazia. Para a zeladora, porém, cada cadeira guardava uma história da escola.",
  exemploAnalisado: "O contraste desloca o olhar comum sobre a sala e valoriza a perspectiva de uma personagem que percebe sentidos ignorados pelos demais.",
  pergunta: "Que efeito o ponto de vista da zeladora produz?",
  opcoes: ["Questiona a ideia de que a sala não tem significado", "Confirma que não existe história no local", "Elimina a presença das personagens"],
  resposta: 0,
  revisao: [
    "O narrador seleciona e organiza informações.",
    "Diferentes pontos de vista produzem interpretações diferentes.",
    "Dar voz a outra personagem pode questionar uma versão dominante.",
  ],
  missao: "Escreva o mesmo acontecimento em duas versões curtas, cada uma narrada por uma personagem diferente.",
});
