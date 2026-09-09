import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula09 = criarAulaConsolidacao({
  slug: "lp9-u5-a09-informacao-opiniao",
  titulo: "Informação, opinião e enquadramento",
  icone: "📰",
  bncc: ["EF09LP01", "EF89LP04"],
  tema: "informação e opinião no jornalismo",
  conceito: "distinção entre fatos verificáveis, avaliações e escolhas de enquadramento",
  explicacao: "Um fato pode ser conferido por evidências; uma opinião apresenta avaliação ou julgamento. Mesmo em textos informativos, título, seleção de fontes e ordem dos dados criam um enquadramento. A leitura crítica observa essas escolhas sem confundir toda informação com opinião.",
  exemplo: "A feira recebeu 300 visitantes, segundo o registro da escola. Para a comissão, o resultado foi excelente.",
  exemploAnalisado: "O número de visitantes é verificável no registro; “excelente” expressa a avaliação da comissão, cuja autoria foi identificada.",
  pergunta: "Qual trecho apresenta uma opinião?",
  opcoes: ["O resultado foi excelente.", "A feira recebeu 300 visitantes.", "O registro pertence à escola."],
  resposta: 0,
  revisao: [
    "Fatos podem ser verificados por evidências.",
    "Opiniões apresentam avaliações ou julgamentos.",
    "Títulos, fontes e recortes influenciam o enquadramento.",
  ],
  missao: "Escreva duas frases sobre um evento escolar: uma informação verificável e uma opinião claramente identificada.",
});
