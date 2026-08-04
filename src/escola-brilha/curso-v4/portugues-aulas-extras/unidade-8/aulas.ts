import type { AulaExtraLousa } from "../types-extras";

export const aulaFiguras: AulaExtraLousa = {
  slug: "figuras-de-linguagem",
  isAulaExtra: true,
  fase: "fase3",
    difficulty: "desafio",
  titulo: "Figuras: A Arte de Falar",
  iconeTrilha: "🎨",
  cenasLousa: [
    {
      tituloLousa: "Metáfora e Metonímia",
      blocos: [
        {
          id: "f1-b1",
          tipo: "formula",
          conteudo: "Metáfora: 'Você é meu sol'\nMetonímia: 'Li Machado de Assis'",
          cor: "azul",
          falaProfessor: "As figuras de linguagem são os filtros do Instagram da língua portuguesa!",
        },
      ],
    },
  ],
};

export const aulaIronia: AulaExtraLousa = {
  slug: "ironia-e-sarcasmo",
  isAulaExtra: true,
  fase: "fase3",
    difficulty: "desafio",
  titulo: "Ironia: O Que Não Foi Dito",
  iconeTrilha: "😏",
  cenasLousa: [
    {
      tituloLousa: "Dizendo o Contrário",
      blocos: [
        {
          id: "i1-b1",
          tipo: "texto",
          conteudo: "Ironia é dizer o oposto do que se pensa para criticar ou brincar.",
          cor: "branco",
          falaProfessor: "A ironia exige um pacto entre quem fala e quem ouve. É a inteligência nas entrelinhas.",
        },
      ],
    },
  ],
};

export const aulaIntertextualidade: AulaExtraLousa = {
  slug: "intertextualidade",
  isAulaExtra: true,
  fase: "fase3",
    difficulty: "desafio",
  titulo: "Intertextualidade: Diálogo entre Textos",
  iconeTrilha: "🔗",
  cenasLousa: [
    {
      tituloLousa: "Citação e Paródia",
      blocos: [
        {
          id: "it1-b1",
          tipo: "texto",
          conteudo: "Um texto que conversa com outro, seja por homenagem ou piada.",
          cor: "verde",
          falaProfessor: "Nenhum texto nasce sozinho. Todos somos colagens do que já lemos!",
        },
      ],
    },
  ],
};

export const aulaAmbguidade: AulaExtraLousa = {
  slug: "ambiguidade-vicios",
  isAulaExtra: true,
  fase: "fase3",
    difficulty: "desafio",
  titulo: "Ambiguidade: Cuidado com o Duplo Sentido",
  iconeTrilha: "🌀",
  cenasLousa: [
    {
      tituloLousa: "O Perigo do Sentido Duplo",
      blocos: [
        {
          id: "a1-b1",
          tipo: "exemplo",
          conteudo: "Vi o vizinho no seu carro. (De quem era o carro?)",
          cor: "laranja",
          falaProfessor: "A ambiguidade pode causar confusões perigosas. Seja claro para não ser mal interpretado!",
        },
      ],
    },
  ],
};

export const aulaRetorica: AulaExtraLousa = {
  slug: "retorica-persuasao",
  isAulaExtra: true,
  fase: "fase3",
    difficulty: "desafio",
  titulo: "Retórica: O Poder de Convencer",
  iconeTrilha: "🗣️",
  cenasLousa: [
    {
      tituloLousa: "Ethos, Pathos e Logos",
      blocos: [
        {
          id: "r1-b1",
          tipo: "formula",
          conteudo: "AUTORIDADE + EMOÇÃO + LÓGICA",
          cor: "azul",
          falaProfessor: "Para convencer alguém, você precisa de dados, coração e credibilidade. Isso é retórica!",
        },
      ],
    },
  ],
};
