import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Plural Rápido: O Garoto / Os Garotos
 * Fase: fase1 · BNCC: EF02LP08
 */
export const aulaAulaExtraPluralRapido: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-plural-rapido",
  titulo: "Plural Rápido: O Garoto / Os Garotos",
  iconeTrilha: "👥",
  bncc: ["EF02LP08"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "A regra do S no fim",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Singular + S = Plural",
          falaProfessor: "Terminou em vogal? Só acrescente S no final."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "o garoto → os garotos · a casa → as casas · o gato → os gatos",
          falaProfessor: "O garoto, os garotos. A casa, as casas."
        },
        {
          id: "b3",
          tipo: "texto",
          cor: "branco",
          conteudo: "O artigo muda também: o → os, a → as, um → uns.",
          falaProfessor: "Tudo muda junto: o vira os, a vira as."
        }
      ],
      modoSocorro: {
        titulo: "Macete",
        macete: "Se são muitos, tudo na frase ganha S: os meus amigos altos."
      },
    },
    {
      tituloLousa: "Terminações que pedem ES",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "Terminou em R, S ou Z → acrescente ES",
          falaProfessor: "Flor → flores. Mês → meses. Luz → luzes."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "flor → flores · mês → meses · luz → luzes · mar → mares",
          falaProfessor: "Flores, meses, luzes, mares."
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: mostre 1 objeto e depois 2 e peça a criança falar a frase completa no plural.",
          falaProfessor: "Pais, o plural é aprendido na fala antes da escrita. Fale junto!"
        }
      ],
      desafioRelampago: {
        pergunta: "Plural de 'flor':",
        opcoes: ["flors", "flores"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "De um para muitos",
    historia: "Quando aparece mais de um, quase tudo na frase muda junto.",
  },
  momento09_revisao: {
    pontos: ["Vogal no fim + S", "R, S, Z no fim + ES", "Artigo também muda: o/os, a/as"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Plural de 'luz':",
        opcoes: ["luzs", "luzes"],
        correta: 1,
        feedbackAcerto: "Boa! Terminou em Z, leva ES.",
        feedbackErro: "Terminou em Z: luzes."
      },
      {
        pergunta: "Plural de 'a menina':",
        opcoes: ["as meninas", "a meninas"],
        correta: 0,
        feedbackAcerto: "Certo, o artigo muda também.",
        feedbackErro: "O artigo vai junto: as meninas."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Um e muitos",
    materiais: ["Brinquedos"],
    passos: ["Separe 1 e depois vários brinquedos e fale a frase no plural"],
    registro: "Vídeo curto falando"
  },
  recompensa: { xp: 120, moedas: 60 }
};
