import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula06 = criarAulaGeografia({
  slug: "aula-06-costumes-tradicoes",
  titulo: "Costumes e Tradições da Comunidade",
  icone: "🤝",
  bncc: ["EF02GE02"],
  tema: "costumes e tradições de diferentes populações",
  conceito:
    "Costumes são práticas do cotidiano; tradições são conhecimentos e celebrações transmitidos entre gerações. Diferentes grupos merecem respeito.",
  explicacao:
    "Comidas, festas, músicas, modos de falar e brincar podem ser parecidos ou diferentes. Comparar não é escolher uma cultura superior, mas compreender diversidade e convivência.",
  exemplo:
    "Duas famílias podem celebrar datas diferentes ou preparar o mesmo alimento de modos próprios.",
  vocabulario: ["costume", "tradição", "respeito"],
  etapas: [
    "Observar a prática",
    "Perguntar sua origem",
    "Comparar sem hierarquizar",
    "Demonstrar respeito",
  ],
  missao: "Compare duas tradições da comunidade com respeito.",
  questoes: [
    {
      pergunta: "Como tratar costumes diferentes?",
      opcoes: ["Com respeito", "Com deboche", "Como erro", "Proibindo"],
      correta: 0,
      explicacao: "Diversidade cultural deve ser valorizada.",
    },
    {
      pergunta: "O que pode ser uma tradição?",
      opcoes: [
        "Uma festa transmitida entre gerações",
        "Qualquer acidente",
        "Uma placa",
        "Um semáforo",
      ],
      correta: 0,
      explicacao: "Tradições são compartilhadas e transmitidas.",
    },
    {
      pergunta: "Comparar culturas significa o quê?",
      opcoes: [
        "Reconhecer semelhanças e diferenças",
        "Escolher a melhor",
        "Apagar diferenças",
        "Imitar sem entender",
      ],
      correta: 0,
      explicacao: "Comparar ajuda a compreender, não hierarquizar.",
    },
  ],
});
