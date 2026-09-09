import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Vovó e Vovô dos Acentos
 * Fase: fase1 · BNCC: EF02LP06, EF03LP01
 */
export const aulaAulaExtraAcentosVovo: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  difficulty: "medio",
  slug: "aula-extra-acentos-vovo",
  titulo: "Vovó e Vovô dos Acentos",
  iconeTrilha: "👵",
  bncc: ["EF02LP06", "EF03LP01"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "Agudo abre, circunflexo fecha",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Acento agudo ´ = boca ABERTA (vovó, café, avó)",
          falaProfessor: "O acento agudo é o risquinho em pé. A boca abre bem: vovóóó."
        },
        {
          id: "b2",
          tipo: "formula",
          cor: "verde",
          conteudo: "Acento circunflexo ^ = boca FECHADA (vovô, avô, você)",
          falaProfessor: "O circunflexo é o chapeuzinho. A boca fecha: vovôôô."
        },
        {
          id: "b3",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "cafÉ (aberto) · vocÊ (fechado) · avÓ (aberto) · avÔ (fechado)",
          falaProfessor: "Café e você. Avó e avô. Sinta a boca mudando."
        },
        {
          id: "b4",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: ponha a mão na frente da boca ao falar 'ó' e 'ô' — muda o formato dos lábios.",
          falaProfessor: "Pais, o acento é som, não enfeite. Falar em voz alta é o melhor treino."
        }
      ],
      modoSocorro: {
        titulo: "Macete do chapéu",
        macete: "Chapéu ^ fecha a boca. Risquinho ´ abre a boca."
      },
    },
    {
      tituloLousa: "Sem acento, muda o sentido",
      blocos: [
        {
          id: "b1",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "sabia (pássaro? não!) · sabiá (o pássaro) · sábia (a mulher inteligente)",
          falaProfessor: "Três palavras iguais, três significados: o acento muda tudo."
        },
        {
          id: "b2",
          tipo: "texto",
          cor: "branco",
          conteudo: "O acento mostra onde a voz fica mais forte na palavra.",
          falaProfessor: "O acento é um holofote: ele aponta a sílaba mais forte."
        }
      ],
      desafioRelampago: {
        pergunta: "Qual é o pai do seu pai?",
        opcoes: ["vovó", "vovô"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Um acento muda a família",
    historia: "Vovó é mulher, vovô é homem. Quem decide isso? O acento!",
  },
  momento09_revisao: {
    pontos: ["´ agudo = som aberto", "^ circunflexo = som fechado", "O acento marca a sílaba forte", "Acento muda o significado (sabiá / sábia)"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Como se escreve a mãe da sua mãe?",
        opcoes: ["vovô", "vovó"],
        correta: 1,
        feedbackAcerto: "Isso! Som aberto pede acento agudo.",
        feedbackErro: "Vovó tem som aberto: acento agudo."
      },
      {
        pergunta: "Qual tem som fechado?",
        opcoes: ["cafÉ", "vocÊ"],
        correta: 1,
        feedbackAcerto: "Certo, você é fechado (^).",
        feedbackErro: "Você tem chapeuzinho: som fechado."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Álbum dos acentos",
    materiais: ["Foto da família", "Papel"],
    passos: ["Escreva vovó e vovô embaixo das fotos certas"],
    registro: "Foto do álbum"
  },
  recompensa: { xp: 120, moedas: 60 }
};
