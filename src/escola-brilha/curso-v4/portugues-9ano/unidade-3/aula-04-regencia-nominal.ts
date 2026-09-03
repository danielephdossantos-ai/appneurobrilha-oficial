import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula04 = criarAulaConsolidacao({
  slug: "lp9-u3-a04-regencia-nominal",
  titulo: "Regência nominal",
  icone: "🔗",
  bncc: ["EF09LP07"],
  tema: "regência nominal",
  conceito: "relação entre um nome e o termo que completa seu sentido",
  explicacao: "Substantivos, adjetivos e advérbios também podem exigir complementos introduzidos por preposição. Essa relação é chamada de regência nominal. A escolha precisa da preposição contribui para a clareza e segue os usos consolidados da língua.",
  exemplo: "Os estudantes estavam atentos às orientações e confiantes no resultado.",
  exemploAnalisado: "O adjetivo “atentos” liga-se a “orientações” pela preposição “a”; “confiantes” liga-se a “resultado” pela preposição “em”.",
  pergunta: "Qual expressão completa corretamente: “A equipe estava consciente ___ responsabilidade.”?",
  opcoes: ["da", "pela", "na"],
  resposta: 0,
  revisao: [
    "A regência nominal envolve substantivos, adjetivos e advérbios.",
    "O complemento costuma ser introduzido por preposição.",
    "O uso adequado evita relações ambíguas entre as ideias.",
  ],
  missao: "Crie frases com os termos “favorável”, “necessidade” e “perto”, observando a preposição de cada complemento.",
});
