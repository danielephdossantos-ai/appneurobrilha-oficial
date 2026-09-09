import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula04 = criarAulaConsolidacao({
  slug: "aula-04-pontos-de-vista",
  titulo: "Comparando Pontos de Vista",
  icone: "⚖️",
  bncc: ["EF89LP04", "EF89LP06"],
  tema: "Vozes do Debate",
  conceito: "comparação de teses, argumentos e fontes",
  explicacao: "Dois textos podem tratar do mesmo tema e chegar a posições diferentes. Para compará-los, identifique a tese de cada um, verifique os argumentos usados e avalie se as fontes realmente sustentam as conclusões.",
  exemplo: "Texto A defende tarefas digitais pela praticidade. Texto B prefere tarefas no papel para reduzir distrações.",
  exemploAnalisado: "Os textos discutem o mesmo tema, mas usam critérios diferentes: praticidade em A e concentração em B.",
  pergunta: "O que deve ser comparado primeiro em dois textos de opinião?",
  opcoes: ["As teses defendidas", "O tamanho dos títulos", "A quantidade de parágrafos apenas"],
  resposta: 0,
  revisao: ["Textos sobre o mesmo tema podem defender teses diferentes.", "Compare razões e evidências, não apenas conclusões.", "Uma fonte confiável precisa ser identificável e pertinente ao assunto."],
  missao: "Escolha um tema simples, registre duas posições diferentes e escreva um argumento válido para cada lado.",
});
