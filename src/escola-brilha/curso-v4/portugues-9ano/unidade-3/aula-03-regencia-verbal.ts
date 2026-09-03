import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula03 = criarAulaConsolidacao({
  slug: "lp9-u3-a03-regencia-verbal",
  titulo: "Regência verbal no contexto",
  icone: "🧭",
  bncc: ["EF09LP07"],
  tema: "regência verbal",
  conceito: "relação estabelecida entre o verbo e seus complementos",
  explicacao: "A regência verbal mostra como um verbo se liga aos termos que completam seu sentido. Alguns verbos exigem preposição; outros se conectam diretamente ao complemento. Observar o significado do verbo no contexto ajuda a escolher a construção adequada.",
  exemplo: "A turma assistiu ao documentário e depois comentou as ideias principais.",
  exemploAnalisado: "No sentido de ver, “assistir” liga-se ao complemento com a preposição “a”: “assistiu ao documentário”. Já “comentar” aparece sem preposição.",
  pergunta: "Qual construção está adequada ao sentido de ver?",
  opcoes: ["Assistimos ao debate.", "Assistimos o debate.", "Assistimos no debate."],
  resposta: 0,
  revisao: [
    "A regência organiza a ligação entre verbo e complemento.",
    "A preposição exigida pode variar conforme o verbo e seu sentido.",
    "O contexto ajuda a identificar a construção adequada.",
  ],
  missao: "Escreva três frases com verbos diferentes e destaque as preposições exigidas pelos complementos.",
});
