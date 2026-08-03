import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Sílaba Tônica: a Dança do Som Forte
 * Fase: fase2 · BNCC: EF04LP05
 */
export const aulaAulaExtraSilabaTonica: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  slug: "aula-extra-silaba-tonica",
  titulo: "Sílaba Tônica: a Dança do Som Forte",
  iconeTrilha: "🎵",
  bncc: ["EF04LP05"],
  duracaoMin: 13,
  cenasLousa: [
    {
      tituloLousa: "Achando a sílaba forte",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "branco",
          conteudo: "Fale a palavra como se estivesse chamando alguém de longe. A sílaba que sai mais forte é a tônica.",
          falaProfessor: "Grite: CA-VA-LOOO. Qual saiu mais forte? VA. Essa é a tônica."
        }
        {
          id: "b2",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Oxítona = força na ÚLTIMA sílaba (café, urubu, papel)",
          falaProfessor: "Última sílaba forte: oxítona."
        }
        {
          id: "b3",
          tipo: "formula",
          cor: "verde",
          conteudo: "Paroxítona = força na PENÚLTIMA (casa, cavalo, fácil)",
          falaProfessor: "Penúltima: paroxítona. É a maioria das palavras do português."
        }
        {
          id: "b4",
          tipo: "formula",
          cor: "azul",
          conteudo: "Proparoxítona = força na ANTEPENÚLTIMA (médico, lâmpada, sábado)",
          falaProfessor: "Antepenúltima: proparoxítona. Todas levam acento!"
        }
      ],
      modoSocorro: {
        titulo: "Contagem de trás para frente",
        macete: "Conte as sílabas do fim para o começo: 1ª = oxítona, 2ª = paroxítona, 3ª = proparoxítona."
      },
    },
    {
      tituloLousa: "Treino na lousa",
      blocos: [
        {
          id: "b1",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "ca-FÉ → oxítona · CA-sa → paroxítona · MÉ-di-co → proparoxítona",
          falaProfessor: "Café, casa, médico. Sinta a força mudando de lugar."
        }
        {
          id: "b2",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: bata palma mais forte na sílaba tônica ao falar nomes da família.",
          falaProfessor: "Pais, marcar a tônica com o corpo (palma forte) fixa o conceito rapidamente."
        }
      ],
      desafioRelampago: {
        pergunta: "BORBOLETA é:",
        opcoes: ["oxítona", "paroxítona", "proparoxítona"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Onde a voz bate mais forte",
    historia: "Toda palavra tem uma sílaba que grita mais alto. Descobrir qual é abre a porta dos acentos.",
  },
  momento09_revisao: {
    pontos: ["Tônica = sílaba mais forte", "Oxítona = última", "Paroxítona = penúltima", "Proparoxítona = antepenúltima (sempre acentuada)"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "MÉDICO é:",
        opcoes: ["paroxítona", "proparoxítona"],
        correta: 1,
        feedbackAcerto: "Isso!",
        feedbackErro: "Força na antepenúltima: proparoxítona."
      },
      {
        pergunta: "URUBU é:",
        opcoes: ["oxítona", "paroxítona"],
        correta: 0,
        feedbackAcerto: "Certo, força no BU final.",
        feedbackErro: "A força está na última sílaba: oxítona."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Palma forte",
    materiais: ["Nada"],
    passos: ["Fale 5 nomes da família batendo palma forte na sílaba tônica"],
    registro: "Vídeo curto"
  },
  recompensa: { xp: 150, moedas: 80 }
};
