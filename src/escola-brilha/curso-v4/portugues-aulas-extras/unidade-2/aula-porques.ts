import type { AulaExtraLousa } from "../types-extras";

export const aulaPorques: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  slug: "aula-extra-enigma-dos-porques",
  titulo: "O Enigma dos Porquês",
  iconeTrilha: "🔍",
  bncc: ["EF04LP01", "EF05LP01"],
  duracaoMin: 12,
  cenasLousa: [
    {
      tituloLousa: "Os 4 Agentes Secretos",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "branco",
          conteudo: "Existem 4 tipos de 'porquê'. Cada um tem um disfarce único para uma missão diferente.",
          falaProfessor: "Bem-vindos ao quartel-general da gramática! Hoje vamos desvendar o mistério dos porquês."
        },
        {
          id: "b2",
          tipo: "formula",
          cor: "laranja",
          conteudo: "POR QUE (Separado) = Pergunta!",
          falaProfessor: "Usamos o 'por que' separado no início ou no meio de perguntas. Pense nele como uma pergunta aberta."
        },
        {
          id: "b3",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Por que você está aqui?",
          falaProfessor: "Veja: começo de frase, dúvida no ar... Por que separado!"
        }
      ],
      modoSocorro: {
        titulo: "Dica de Mestre",
        macete: "Início de pergunta? Separado ele se agrupa!"
      }
    },
    {
      tituloLousa: "A Resposta e o Final",
      blocos: [
        {
          id: "b4",
          tipo: "formula",
          cor: "verde",
          conteudo: "PORQUE (Junto) = Resposta / Causa",
          falaProfessor: "Quando você vai explicar algo, eles se unem! O 'porque' junto é para respostas."
        },
        {
          id: "b5",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Estou aqui porque quero aprender.",
          falaProfessor: "Estou explicando o motivo, então uso o porque juntinho."
        }
      ],
      desafioRelampago: {
        pergunta: "Qual usar em: '____ você não avisou?'",
        opcoes: ["Por que", "Porque", "Porquê"],
        correta: 0
      }
    }
  ],
  momento01_motivacao: {
    titulo: "Operação Porquê",
    historia: "Um crime gramatical aconteceu! Alguém trocou todos os porquês da cidade. Vamos consertar?",
  },
  momento09_revisao: {
    pontos: ["Por que: Pergunta", "Porque: Resposta", "Por quê: Fim de frase", "O porquê: Motivo (substantivo)"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual 'porque' usamos para responder uma pergunta?",
        opcoes: ["Por que", "Porque"],
        correta: 1,
        feedbackAcerto: "Excelente! Na resposta eles se unem.",
        feedbackErro: "Lembre-se: na resposta eles ficam juntos!"
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Detetive de Texto",
    materiais: ["Revista ou Livro"],
    passos: ["Encontre um 'porque' em um texto e diga se é pergunta ou resposta."],
    registro: "Foto"
  },
  recompensa: { xp: 150, moedas: 80 }
};
