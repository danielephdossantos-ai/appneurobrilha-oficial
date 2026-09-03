import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula07 = criarAulaConsolidacao({
  slug: "lp8-u3-a07-progressao-paragrafos",
  titulo: "Progressão entre parágrafos",
  icone: "🧩",
  bncc: ["EF08LP13", "EF89LP29"],
  tema: "organização de parágrafos",
  conceito: "progressão temática e ligação entre as partes do texto",
  explicacao: "Um texto progride quando cada parágrafo retoma o assunto anterior e acrescenta uma informação relevante. Expressões de retomada e conectivos ajudam o leitor a acompanhar essa sequência.",
  exemplo: "A escola iniciou uma campanha de leitura. Além disso, organizou rodas de conversa sobre os livros.",
  exemploAnalisado: "O segundo período mantém o tema da campanha e acrescenta outra ação por meio de “além disso”.",
  pergunta: "Qual expressão introduz uma informação adicional sem romper o assunto?",
  opcoes: ["Além disso", "Apesar disso", "Por esse motivo"],
  resposta: 0,
  revisao: [
    "Cada parágrafo deve contribuir para o desenvolvimento do tema.",
    "Retomadas mantêm o assunto reconhecível.",
    "Conectivos indicam como a nova informação se relaciona com a anterior.",
  ],
  missao: "Escreva dois parágrafos curtos sobre uma melhoria para a escola e conecte as ideias com uma retomada e um conectivo.",
});
