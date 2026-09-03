import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula06 = criarAulaGeografia({
  slug: "aula-06-usos-da-agua",
  titulo: "Água: Usos e Importância",
  icone: "💧",
  bncc: "EF03GE09",
  tema: "usos dos recursos naturais, especialmente da água",
  conceito:
    "A água é usada na alimentação, higiene, agricultura, indústria, lazer e produção de energia.",
  explicacao:
    "A disponibilidade e a qualidade da água variam entre lugares. Investigar de onde ela vem e para onde vai ajuda a compreender sua importância.",
  exemplo: "A água captada de um rio pode ser tratada antes de chegar às casas.",
  vocabulario: ["recurso natural", "captação", "tratamento", "abastecimento"],
  etapas: ["Localizar a fonte", "Identificar o uso", "Observar o caminho", "Avaliar a importância"],
  missao: "Liste quatro usos da água e indique quais precisam de água potável.",
  questoes: [
    {
      pergunta: "Qual é um uso doméstico da água?",
      correta: "Beber e preparar alimentos",
      opcoes: [
        "Beber e preparar alimentos",
        "Criar plástico sem recursos",
        "Mover uma rua",
        "Produzir silêncio",
      ],
    },
    {
      pergunta: "Por que tratar a água?",
      correta: "Para torná-la adequada ao consumo",
      opcoes: [
        "Para torná-la adequada ao consumo",
        "Para mudar o relógio",
        "Para aumentar o lixo",
        "Para apagar mapas",
      ],
    },
    {
      pergunta: "A agricultura utiliza água?",
      correta: "Sim, inclusive na irrigação",
      opcoes: ["Sim, inclusive na irrigação", "Nunca", "Só em cidades", "Apenas em livros"],
    },
  ],
});
