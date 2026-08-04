import type { AulaExtraLousa } from "../types-extras";

export const aulaOracoes: AulaExtraLousa = {
  slug: "oracoes-coordenadas",
  isAulaExtra: true,
  fase: "fase3",
    difficulty: "desafio",
  titulo: "Orações: O Encaixe Perfeito",
  iconeTrilha: "🧩",
  cenasLousa: [
    {
      tituloLousa: "Orações Independentes",
      blocos: [
        {
          id: "o1-b1",
          tipo: "texto",
          conteudo: "Coordenadas são orações que têm sentido sozinhas.",
          cor: "branco",
          falaProfessor: "Imagine as orações como amigos que caminham juntos, mas cada um tem sua própria perna!",
        },
      ],
    },
  ],
};

export const aulaCoesao: AulaExtraLousa = {
  slug: "coesao-textual",
  isAulaExtra: true,
  fase: "fase3",
    difficulty: "desafio",
  titulo: "Coesão: A Cola do Texto",
  iconeTrilha: "🧴",
  cenasLousa: [
    {
      tituloLousa: "Evitando Repetições",
      blocos: [
        {
          id: "coe1-b1",
          tipo: "exemplo",
          conteudo: "O aluno estudou. O aluno passou. ❌\nO aluno estudou e, por isso, passou. ✅",
          cor: "verde",
          falaProfessor: "A coesão usa conectivos para que seu texto não pareça uma lista de compras!",
        },
      ],
    },
  ],
};

export const aulaRedacao: AulaExtraLousa = {
  slug: "estrutura-redacao",
  isAulaExtra: true,
  fase: "fase3",
    difficulty: "desafio",
  titulo: "Redação: A Estrutura Nota 1000",
  iconeTrilha: "📝",
  cenasLousa: [
    {
      tituloLousa: "Introdução, Desenvolvimento e Conclusão",
      blocos: [
        {
          id: "red1-b1",
          tipo: "formula",
          conteudo: "TESE + ARGUMENTOS + PROPOSTA",
          cor: "laranja",
          falaProfessor: "Todo grande texto precisa de um esqueleto forte. Comece com sua ideia, defenda-a e sugira uma solução.",
        },
      ],
    },
  ],
};

export const aulaPontuacaoAvancada: AulaExtraLousa = {
  slug: "pontuacao-estilo",
  isAulaExtra: true,
  fase: "fase3",
    difficulty: "desafio",
  titulo: "Pontuação: Além da Vírgula",
  iconeTrilha: "‽",
  cenasLousa: [
    {
      tituloLousa: "Dois-pontos e Travessão",
      blocos: [
        {
          id: "p1-b1",
          tipo: "texto",
          conteudo: "Use dois-pontos para explicar e travessão para dar ênfase.",
          cor: "branco",
          falaProfessor: "Pontuação não é pausa para respirar, é direção para quem lê!",
        },
      ],
    },
  ],
};

export const aulaVocabularioAcademico: AulaExtraLousa = {
  slug: "vocabulario-formal",
  isAulaExtra: true,
  fase: "fase3",
    difficulty: "desafio",
  titulo: "Vocabulário: Fale como um Mestre",
  iconeTrilha: "🎓",
  cenasLousa: [
    {
      tituloLousa: "Palavras que Enriquecem",
      blocos: [
        {
          id: "v1-b1",
          tipo: "exemplo",
          conteudo: "Fazer -> Desenvolver / Executar\nCoisa -> Aspecto / Fenômeno",
          cor: "azul",
          falaProfessor: "Troque palavras genéricas por termos precisos. Isso muda o nível do seu texto!",
        },
      ],
    },
  ],
};
