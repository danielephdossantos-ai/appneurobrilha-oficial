import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula02 = criarAulaGeografia({
  slug: "aula-02-culturas-brasileiras",
  titulo: "Culturas que Formam o Brasil",
  icone: "🤝",
  bncc: "EF04GE01",
  tema: "contribuições culturais de diferentes grupos",
  conceito:
    "Povos indígenas, africanos, europeus, asiáticos e migrantes internos contribuíram para a cultura brasileira.",
  explicacao:
    "Línguas, alimentos, festas, músicas, técnicas e conhecimentos revelam encontros culturais. Valorizar contribuições exige evitar estereótipos.",
  exemplo:
    "Palavras indígenas, ritmos de origem africana e receitas trazidas por imigrantes fazem parte do cotidiano.",
  vocabulario: ["cultura", "contribuição", "diversidade", "patrimônio"],
  etapas: [
    "Identificar a prática",
    "Pesquisar a origem",
    "Reconhecer a contribuição",
    "Valorizar com respeito",
  ],
  missao: "Pesquise uma contribuição cultural presente em sua família ou comunidade.",
  questoes: [
    {
      pergunta: "O que forma a cultura brasileira?",
      correta: "Contribuições de muitos povos",
      opcoes: [
        "Contribuições de muitos povos",
        "Um único grupo",
        "Apenas o clima",
        "Somente fronteiras",
      ],
    },
    {
      pergunta: "Como valorizar uma cultura?",
      correta: "Conhecer e respeitar suas contribuições",
      opcoes: [
        "Conhecer e respeitar suas contribuições",
        "Criar estereótipos",
        "Dizer que é inferior",
        "Apagar sua história",
      ],
    },
    {
      pergunta: "Qual é um patrimônio cultural?",
      correta: "Uma prática transmitida entre gerações",
      opcoes: [
        "Uma prática transmitida entre gerações",
        "Qualquer lixo",
        "Uma previsão do tempo",
        "Uma linha imaginária",
      ],
    },
  ],
});
