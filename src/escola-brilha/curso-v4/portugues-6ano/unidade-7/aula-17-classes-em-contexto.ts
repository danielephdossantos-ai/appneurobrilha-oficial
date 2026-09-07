import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula17 = criarAulaConsolidacao({
  slug: "aula-17-classes-em-contexto",
  titulo: "Classes de Palavras em Contexto",
  icone: "🧩",
  bncc: ["EF06LP03"],
  tema: "O Mundo das Classes",
  conceito: "classes de palavras e suas funções",
  explicacao: "Substantivos nomeiam, adjetivos caracterizam, verbos indicam ações ou estados e pronomes retomam nomes. A classe de uma palavra deve ser reconhecida pelo trabalho que ela realiza na frase.",
  exemplo: "A pesquisadora curiosa registrou a descoberta e ela publicou o relatório.",
  exemploAnalisado: "Pesquisadora é substantivo; curiosa é adjetivo; registrou e publicou são verbos; ela é pronome e retoma pesquisadora.",
  pergunta: "Na frase, qual palavra retoma 'a pesquisadora'?",
  opcoes: ["ela", "curiosa", "relatório"],
  resposta: 0,
  revisao: ["A classe depende da função no contexto.", "Substantivo nomeia e adjetivo caracteriza.", "Pronome pode retomar um nome e evitar repetição."],
  missao: "Escreva três frases e destaque um substantivo, um verbo, um adjetivo e um pronome.",
});
