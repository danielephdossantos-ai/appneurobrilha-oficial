import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Separação Silábica: Bata Palmas
 * Fase: fase1 · BNCC: EF01LP04, EF02LP05
 */
export const aulaAulaExtraSilabas: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-silabas",
  titulo: "Separação Silábica: Bata Palmas",
  iconeTrilha: "👏",
  bncc: ["EF01LP04", "EF02LP05"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "Batendo palmas",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "1 palma = 1 sílaba (cada sílaba tem uma vogal que soa)",
          falaProfessor: "Bata palma junto: BO-LA, duas palmas. CA-VA-LO, três palmas."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "BO-LA (2) · CA-SA (2) · CA-VA-LO (3) · BOR-BO-LE-TA (4)",
          falaProfessor: "Bola, casa, cavalo, borboleta."
        }
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: batam palmas com o nome de todos da família.",
          falaProfessor: "Pais, consciência silábica é o principal preditor de leitura fluente."
        }
      ],
      modoSocorro: {
        titulo: "Macete",
        macete: "Toda sílaba precisa de uma vogal. Sem vogal, não tem palma!"
      },
    },
    {
      tituloLousa: "Pedaços que não se separam",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "verde",
          conteudo: "Dígrafos CH, LH, NH, QU, GU nunca se separam.",
          falaProfessor: "Bo-lhu? Não! É bo-LHA. O LH anda sempre juntinho."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "bo-LHA · ba-NHO · CHU-va · QUEI-jo",
          falaProfessor: "Bolha, banho, chuva, queijo."
        }
        {
          id: "b3",
          tipo: "texto",
          cor: "branco",
          conteudo: "RR e SS, sim, se separam: car-ro, pás-sa-ro.",
          falaProfessor: "Carro: car-ro. Pássaro: pás-sa-ro. Esses se separam!"
        }
      ],
      desafioRelampago: {
        pergunta: "Quantas sílabas tem BORBOLETA?",
        opcoes: ["3", "4", "5"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Cada palma é uma sílaba",
    historia: "Toda palavra tem pedacinhos. Cada palma é um pedaço!",
  },
  momento09_revisao: {
    pontos: ["1 sílaba = 1 vogal que soa", "CH, LH, NH, QU, GU não se separam", "RR e SS se separam"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Separe: CAVALO",
        opcoes: ["ca-val-o", "ca-va-lo"],
        correta: 1,
        feedbackAcerto: "Perfeito!",
        feedbackErro: "Cada sílaba tem uma vogal: ca-va-lo."
      },
      {
        pergunta: "Separe: BANHO",
        opcoes: ["ban-ho", "ba-nho"],
        correta: 1,
        feedbackAcerto: "Isso! NH não separa.",
        feedbackErro: "NH fica juntinho: ba-nho."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Palmas em família",
    materiais: ["Nada, só as mãos"],
    passos: ["Batam palmas com o nome de 5 pessoas ou objetos da casa"],
    registro: "Vídeo das palmas"
  },
  recompensa: { xp: 120, moedas: 60 }
};
