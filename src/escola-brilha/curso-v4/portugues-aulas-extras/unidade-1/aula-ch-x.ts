import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Os Irmãos Laranjas CH e X
 * Fase: fase1 · BNCC: EF01LP07, EF02LP04
 */
export const aulaAulaExtraChX: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-ch-x",
  titulo: "Os Irmãos Laranjas CH e X",
  iconeTrilha: "🍊",
  bncc: ["EF01LP07", "EF02LP04"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "Dois jeitos de escrever o mesmo som",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "branco",
          conteudo: "CH e X podem ter o mesmo som: chá e xarope começam igual.",
          falaProfessor: "Diga comigo: chá... xarope. A boca faz o mesmo movimento, mas a letra muda."
        }
        {
          id: "b2",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Som /ch/ = pode ser CH ou X",
          falaProfessor: "Não existe regra mágica para tudo: a gente aprende olhando e lendo muito."
        }
        {
          id: "b3",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "CH: chave, chuva, chinelo, chocolate · X: xícara, xarope, peixe, caixa",
          falaProfessor: "Chave, chuva, chinelo. Xícara, xarope, peixe, caixa."
        }
        {
          id: "b4",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: monte duas caixinhas, uma do CH e outra do X, e vá guardando palavras novas.",
          falaProfessor: "Pais, memória visual funciona melhor que decoreba: escrever a palavra 3 vezes ajuda muito."
        }
      ],
      modoSocorro: {
        titulo: "Dica de ouro",
        macete: "Depois de EN e ME quase sempre é X: enxada, enxame, mexer, mexido."
      },
    },
    {
      tituloLousa: "Pistas que ajudam",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "Depois de ditongo (ai, ei, ou) escreve-se X",
          falaProfessor: "Caixa, peixe, frouxo: veio duas vogais juntas antes? É X."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "cAIxa · pEIxe · trOUxa",
          falaProfessor: "Ca-i-xa, pe-i-xe, tro-u-xa. Todas com X."
        }
        {
          id: "b3",
          tipo: "texto",
          cor: "branco",
          conteudo: "Exceções famosas: encher, enchente, recauchutar (com CH).",
          falaProfessor: "Toda regra tem exceção. Guarde: encher e enchente são com CH."
        }
      ],
      desafioRelampago: {
        pergunta: "Qual está certo?",
        opcoes: ["caicha", "caixa", "cacha"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "O som xis",
    historia: "CH e X são irmãos: falam igualzinho, mas se vestem diferente.",
  },
  momento09_revisao: {
    pontos: ["CH e X podem ter o mesmo som", "Depois de ditongo: X (peixe, caixa)", "Depois de EN/ME: X (enxada, mexer)", "Exceções: encher, enchente"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Como se escreve o lugar onde o peixe vive na feira?",
        opcoes: ["peicha", "peixe"],
        correta: 1,
        feedbackAcerto: "Boa! Depois de ditongo, X.",
        feedbackErro: "Depois de 'ei' usamos X: peixe."
      },
      {
        pergunta: "Qual palavra está com CH correto?",
        opcoes: ["xuva", "chuva"],
        correta: 1,
        feedbackAcerto: "Isso mesmo, chuva com CH.",
        feedbackErro: "Chuva é com CH. Guarde na caixinha do CH!"
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Caixinha CH / X",
    materiais: ["Papel", "Caneta"],
    passos: ["Escreva 5 palavras com CH e 5 com X", "Leia todas em voz alta"],
    registro: "Foto das duas listas"
  },
  recompensa: { xp: 120, moedas: 60 }
};
