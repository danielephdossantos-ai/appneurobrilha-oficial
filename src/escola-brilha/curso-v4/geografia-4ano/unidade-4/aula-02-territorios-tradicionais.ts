import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula02 = criarAulaGeografia({
  slug: "aula-02-territorios-tradicionais",
  titulo: "Territórios Indígenas e Quilombolas",
  icone: "🗺️",
  bncc: "EF04GE06",
  tema: "territórios indígenas e quilombolas",
  conceito: "Território é espaço de vida, história, trabalho, cultura e pertencimento.",
  explicacao:
    "Terras indígenas e territórios quilombolas têm localização, modos de uso e direitos próprios. Devem ser estudados com respeito, sem generalizar povos diferentes.",
  exemplo:
    "Um território pode reunir moradias, áreas de cultivo, rios e lugares de memória coletiva.",
  vocabulario: ["território", "povo indígena", "quilombola", "pertencimento"],
  etapas: ["Localizar no mapa", "Identificar o povo", "Conhecer o uso", "Respeitar os direitos"],
  missao: "Localize um território tradicional em fonte confiável e registre o povo relacionado.",
  questoes: [
    {
      pergunta: "O que é território?",
      correta: "Espaço de vida e pertencimento",
      opcoes: ["Espaço de vida e pertencimento", "Só uma linha", "Qualquer prédio", "Um produto"],
    },
    {
      pergunta: "Todos os povos indígenas são iguais?",
      correta: "Não, existem muitos povos e culturas",
      opcoes: [
        "Não, existem muitos povos e culturas",
        "Sim, são idênticos",
        "Só muda o nome",
        "Não possuem cultura",
      ],
    },
    {
      pergunta: "Como estudar esses territórios?",
      correta: "Com fontes confiáveis e respeito",
      opcoes: [
        "Com fontes confiáveis e respeito",
        "Com estereótipos",
        "Inventando dados",
        "Apagando diferenças",
      ],
    },
  ],
});
