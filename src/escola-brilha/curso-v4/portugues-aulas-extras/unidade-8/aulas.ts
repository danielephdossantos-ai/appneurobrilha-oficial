import type { AulaExtraLousa } from "../types-extras";

export const aulaFiguras: AulaExtraLousa = {
  slug: "figuras-de-linguagem",
  isAulaExtra: true,
  fase: "fase3",
  titulo: "Figuras: A Arte de Falar",
  iconeTrilha: "🎨",
  descricao: "Metáforas, ironias e hipérboles: o tempero da comunicação.",
  cenasLousa: [
    {
      tituloLousa: "Metáfora vs Comparação",
      blocos: [
        {
          id: "f1-b1",
          tipo: "formula",
          conteudo: "Metáfora: É um leão. \nComparação: É COMO um leão.",
          cor: "azul",
          falaProfessor: "As figuras de linguagem dão cor ao que dizemos. A metáfora é direta, a comparação usa o 'como'.",
        },
      ],
    },
  ],
};
