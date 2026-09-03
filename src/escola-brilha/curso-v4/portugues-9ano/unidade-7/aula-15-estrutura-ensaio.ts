import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula15 = criarAulaConsolidacao({
  slug: "lp9-u7-a15-estrutura-ensaio",
  titulo: "Tese e estrutura do ensaio",
  icone: "🧱",
  bncc: ["EF09LP03", "EF89LP10"],
  tema: "estrutura do ensaio argumentativo",
  conceito: "organização de introdução, tese, desenvolvimento e conclusão",
  explicacao: "O ensaio argumentativo examina uma questão e defende uma interpretação. A introdução apresenta o tema e a tese; o desenvolvimento organiza argumentos e evidências; a conclusão retoma o raciocínio e mostra suas consequências sem apenas repetir frases anteriores.",
  exemplo: "Projetos de leitura devem reservar espaço para escolhas dos estudantes, pois a participação na seleção amplia o compromisso com as atividades.",
  exemploAnalisado: "A primeira parte apresenta a tese; o trecho iniciado por “pois” antecipa a justificativa que deverá ser desenvolvida com exemplos ou dados.",
  pergunta: "Qual elemento apresenta a posição central defendida no ensaio?",
  opcoes: ["A tese", "O título isolado", "A pontuação final"],
  resposta: 0,
  revisao: [
    "A tese expressa a posição central do texto.",
    "Cada parágrafo de desenvolvimento precisa sustentar essa posição.",
    "A conclusão fecha o raciocínio e apresenta suas consequências.",
  ],
  missao: "Planeje um ensaio com tema, tese, dois argumentos e uma ideia para a conclusão.",
});
