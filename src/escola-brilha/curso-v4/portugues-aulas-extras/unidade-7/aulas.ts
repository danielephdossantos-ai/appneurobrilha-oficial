import type { AulaExtraLousa } from "../types-extras";

export const aulaOracoes: AulaExtraLousa = {
  slug: "oracoes-coordenadas",
  isAulaExtra: true,
  fase: "fase3",
  titulo: "Orações: O Encaixe Perfect",
  iconeTrilha: "🧩",
  cenasLousa: [
    {
      tituloLousa: "Coordenadas vs Subordinadas",
      blocos: [
        {
          id: "o1-b1",
          tipo: "texto",
          conteudo: "Coordenadas são independentes. Subordinadas dependem uma da outra.",
          cor: "branco",
          falaProfessor: "As frases são como peças de Lego. Algumas funcionam sozinhas, outras precisam de um encaixe.",
        },
      ],
    },
  ],
};

export const aulaCoesao: AulaExtraLousa = {
  slug: "coesao-textual",
  isAulaExtra: true,
  fase: "fase3",
  titulo: "Coesão: A Cola do Texto",
  iconeTrilha: "🧴",
  cenasLousa: [
    {
      tituloLousa: "Onde está o erro?",
      blocos: [
        {
          id: "coe1-b1",
          tipo: "exemplo",
          conteudo: "O menino caiu. O menino chorou. (Repetitivo) ❌\nO menino caiu e ele chorou. (Coeso) ✅",
          cor: "verde",
          falaProfessor: "Para não repetir palavras, usamos a coesão. É a cola que deixa o texto bonito de ler.",
        },
      ],
    },
  ],
};
