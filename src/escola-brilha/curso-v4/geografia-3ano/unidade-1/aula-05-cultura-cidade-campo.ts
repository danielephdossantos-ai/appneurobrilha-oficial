import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula05 = criarAulaGeografia({
  slug: "aula-05-cultura-cidade-campo",
  titulo: "Culturas da Cidade e do Campo",
  icone: "🤝",
  bncc: "EF03GE01",
  tema: "aspectos culturais dos grupos da cidade e do campo",
  conceito:
    "Grupos sociais constroem modos de viver, trabalhar, celebrar, falar e cuidar dos lugares.",
  explicacao:
    "Cidade e campo têm diferenças e também trocas. Comparar culturas exige observar práticas reais sem dizer que um grupo é melhor que outro.",
  exemplo:
    "Uma festa, uma feira e uma receita podem nascer no campo e também fazer parte da vida urbana.",
  vocabulario: ["cultura", "grupo social", "cidade", "campo"],
  etapas: [
    "Observar a prática",
    "Identificar o grupo",
    "Comparar sem julgar",
    "Explicar a relação",
  ],
  missao: "Compare uma prática cultural da cidade e outra do campo.",
  questoes: [
    {
      pergunta: "O que é um aspecto cultural?",
      correta: "Um modo de viver compartilhado",
      opcoes: [
        "Um modo de viver compartilhado",
        "Somente um prédio",
        "Apenas o clima",
        "Uma fronteira",
      ],
    },
    {
      pergunta: "Como comparar dois grupos com respeito?",
      correta: "Apontando diferenças e semelhanças sem hierarquizar",
      opcoes: [
        "Apontando diferenças e semelhanças sem hierarquizar",
        "Escolhendo o superior",
        "Ignorando um grupo",
        "Inventando informações",
      ],
    },
    {
      pergunta: "Cidade e campo trocam cultura?",
      correta: "Sim, por pessoas, produtos e costumes",
      opcoes: [
        "Sim, por pessoas, produtos e costumes",
        "Nunca",
        "Só por estradas",
        "Apenas pela chuva",
      ],
    },
  ],
});
