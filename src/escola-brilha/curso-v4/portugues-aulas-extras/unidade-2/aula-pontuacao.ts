import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Pontuação Divertida
 * Fase: fase1 · BNCC: EF01LP12, EF02LP07
 */
export const aulaAulaExtraPontuacao: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-pontuacao",
  titulo: "Pontuação Divertida",
  iconeTrilha: "❓",
  bncc: ["EF01LP12", "EF02LP07"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "Os três sinais campeões",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: ". = PARE (fim da ideia)\n? = PERGUNTA\n! = SURPRESA / EMOÇÃO",
          falaProfessor: "Ponto final manda parar. Interrogação pergunta. Exclamação se espanta!"
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Vamos brincar. / Vamos brincar? / Vamos brincar!",
          falaProfessor: "A mesma frase com três sentidos diferentes. Ouviu a voz mudar?"
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: leia a mesma frase com os três sinais e peça a criança adivinhar qual é.",
          falaProfessor: "Pais, a entonação ensina pontuação melhor que qualquer regra escrita."
        }
      ],
      modoSocorro: {
        titulo: "Macete da voz",
        macete: "A voz sobe no ? e fica animada no !. No . a voz desce e para."
      },
    },
    {
      tituloLousa: "A vírgula respira",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "verde",
          conteudo: "A vírgula é uma paradinha curta, para respirar e separar coisas da lista.",
          falaProfessor: "A vírgula é um cochilo rápido, o ponto é dormir de verdade."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Comprei maçã, banana, uva e pera.",
          falaProfessor: "Na lista, vírgula entre os itens e 'e' antes do último."
        }
      ],
      desafioRelampago: {
        pergunta: "Qual sinal usar em: 'Que susto___'",
        opcoes: [".", "?", "!"],
        correta: 2
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Placas de trânsito da frase",
    historia: "Os sinais de pontuação são placas: mandam parar, perguntar ou se surpreender.",
  },
  momento09_revisao: {
    pontos: ["Ponto final = parar", "Interrogação = perguntar", "Exclamação = emoção", "Vírgula = pausa curta e listas"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Como termina 'Onde você mora'?",
        opcoes: [".", "?"],
        correta: 1,
        feedbackAcerto: "Isso! É pergunta.",
        feedbackErro: "Pergunta termina com ?"
      },
      {
        pergunta: "'Que legal___' pede qual sinal?",
        opcoes: ["!", "."],
        correta: 0,
        feedbackAcerto: "Certo, emoção!",
        feedbackErro: "Emoção pede exclamação."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Leitura com emoção",
    materiais: ["Livro de histórias"],
    passos: ["Leia uma página respeitando cada sinal de pontuação"],
    registro: "Vídeo da leitura"
  },
  recompensa: { xp: 120, moedas: 60 }
};
