import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Ditongo e Hiato
 * Fase: fase1 · BNCC: EF03LP01
 */
export const aulaAulaExtraDitongoHiato: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  difficulty: "medio",
  slug: "aula-extra-ditongo-hiato",
  titulo: "Ditongo e Hiato",
  iconeTrilha: "🏠",
  bncc: ["EF03LP01"],
  duracaoMin: 12,
  cenasLousa: [
    {
      tituloLousa: "Ditongo: moram juntas",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Ditongo = 2 vogais na MESMA sílaba",
          falaProfessor: "PAI: pa-i? Não. É PAI, tudo numa palma só."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "PAI · CÉU · MÃE · CAI-xa · POU-co",
          falaProfessor: "Pai, céu, mãe, caixa, pouco."
        }
      ],
      modoSocorro: {
        titulo: "Teste da palma",
        macete: "Bata palma: as duas vogais caíram na mesma palma? Ditongo. Em palmas diferentes? Hiato."
      },
    },
    {
      tituloLousa: "Hiato: cada uma na sua casa",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "Hiato = 2 vogais em sílabas DIFERENTES",
          falaProfessor: "SAÍDA: sa-í-da. O A e o I se separaram."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "sa-Í-da · ju-Í-zo · sa-Ú-de · po-E-ta · ca-Ir",
          falaProfessor: "Saída, juízo, saúde, poeta, cair."
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: bata palmas devagar; se a criança separar as vogais, é hiato.",
          falaProfessor: "Pais, exagerar a fala em sílabas facilita muito a percepção."
        }
      ],
      desafioRelampago: {
        pergunta: "SAÚDE é ditongo ou hiato?",
        opcoes: ["Ditongo", "Hiato"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Vogais vizinhas",
    historia: "Algumas vogais moram na mesma casa (sílaba). Outras se mudam para casas diferentes.",
  },
  momento09_revisao: {
    pontos: ["Ditongo = duas vogais na mesma sílaba", "Hiato = vogais separadas em sílabas", "Tritongo = três vogais juntas (Uruguai)"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "PAI é:",
        opcoes: ["hiato", "ditongo"],
        correta: 1,
        feedbackAcerto: "Isso, tudo numa sílaba.",
        feedbackErro: "Pai é uma sílaba só: ditongo."
      },
      {
        pergunta: "JUÍZO é:",
        opcoes: ["hiato", "ditongo"],
        correta: 0,
        feedbackAcerto: "Certo: ju-í-zo.",
        feedbackErro: "As vogais se separam: hiato."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Palmas nas vogais",
    materiais: ["Papel"],
    passos: ["Escreva 3 ditongos e 3 hiatos batendo palmas"],
    registro: "Foto do papel"
  },
  recompensa: { xp: 120, moedas: 60 }
};
