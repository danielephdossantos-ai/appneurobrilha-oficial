import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula02 = criarAulaGeografia({
  slug: "aula-02-qualidade-ambiental",
  titulo: "Qualidade Ambiental Urbana",
  icone: "🌳",
  bncc: "EF05GE10",
  tema: "qualidade ambiental nas cidades",
  conceito:
    "Qualidade ambiental urbana envolve ar, água, áreas verdes, saneamento, ruído e manejo de resíduos.",
  explicacao:
    "Indicadores permitem comparar lugares e identificar problemas. Uma cidade saudável combina infraestrutura, prevenção e acesso justo.",
  exemplo: "Arborização reduz calor e melhora espaços de convivência.",
  vocabulario: ["qualidade ambiental", "saneamento", "arborização", "indicador"],
  etapas: ["Escolher o indicador", "Coletar evidências", "Comparar os lugares", "Propor melhoria"],
  missao: "Avalie um espaço urbano com quatro indicadores.",
  questoes: [
    {
      pergunta: "Qual melhora a qualidade urbana?",
      correta: "Saneamento e áreas verdes",
      opcoes: ["Saneamento e áreas verdes", "Esgoto no rio", "Queima de lixo", "Solo impermeável"],
    },
    {
      pergunta: "O que é indicador?",
      correta: "Uma medida para avaliar uma condição",
      opcoes: [
        "Uma medida para avaliar uma condição",
        "Um enfeite",
        "Uma opinião sem dado",
        "Uma fronteira",
      ],
    },
    {
      pergunta: "Por que comparar bairros?",
      correta: "Para reconhecer desigualdades e melhorias",
      opcoes: [
        "Para reconhecer desigualdades e melhorias",
        "Para escolher o mais bonito",
        "Para ignorar problemas",
        "Para apagar dados",
      ],
    },
  ],
});
