import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula05 = criarAulaConsolidacao({
  slug: "lp9-u3-a05-crase-clareza",
  titulo: "Crase e clareza textual",
  icone: "✍️",
  bncc: ["EF09LP07"],
  tema: "uso da crase",
  conceito: "fusão da preposição “a” com o artigo feminino “a” ou com formas equivalentes",
  explicacao: "A crase é indicada pelo acento grave quando a preposição “a”, exigida por um termo anterior, encontra o artigo feminino “a”. Para verificar, observamos a regência e se a palavra seguinte admite artigo. Não há crase apenas porque a palavra seguinte é feminina.",
  exemplo: "A comissão entregou o relatório à diretora.",
  exemploAnalisado: "O verbo “entregar” admite a preposição “a” para indicar o destinatário, e “diretora” admite o artigo “a”. A união produz “à diretora”.",
  pergunta: "Qual frase apresenta o uso adequado da crase?",
  opcoes: ["A turma se dirigiu à biblioteca.", "A turma começou à pesquisar.", "A turma entregou à cartazes."],
  resposta: 0,
  revisao: [
    "A crase depende da presença da preposição e do artigo feminino.",
    "Antes de verbo, normalmente não há artigo e não ocorre crase.",
    "Analisar a regência evita o uso do acento apenas por aparência.",
  ],
  missao: "Escreva duas frases com crase e uma sem crase; depois explique a presença ou ausência do artigo.",
});
