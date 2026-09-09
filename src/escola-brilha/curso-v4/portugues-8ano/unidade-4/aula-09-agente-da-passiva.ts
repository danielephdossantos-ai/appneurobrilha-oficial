import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula09 = criarAulaConsolidacao({
  slug: "lp8-u4-a09-agente-da-passiva",
  titulo: "Agente da passiva",
  icone: "🕵️",
  bncc: ["EF08LP08"],
  tema: "agente da passiva",
  conceito: "termo que indica quem pratica a ação em uma oração na voz passiva",
  explicacao: "Na voz passiva analítica, o agente da passiva identifica quem realizou a ação. Ele costuma ser introduzido por “por”, “pelo” ou “pela”, mas pode ser omitido quando não é conhecido ou não é importante para o objetivo do texto.",
  exemplo: "O mural foi pintado pelos estudantes.",
  exemploAnalisado: "“Pelos estudantes” é o agente da passiva, pois informa quem praticou a ação de pintar.",
  pergunta: "Qual é o agente da passiva em: “As propostas foram avaliadas pela comissão.”?",
  opcoes: ["pela comissão", "as propostas", "foram avaliadas"],
  resposta: 0,
  revisao: [
    "O agente da passiva pratica a ação expressa pelo verbo.",
    "Ele aparece em construções na voz passiva.",
    "O agente pode ser omitido quando o autor deseja destacar o resultado.",
  ],
  missao: "Crie duas frases na voz passiva: uma com o agente expresso e outra com o agente omitido.",
});
