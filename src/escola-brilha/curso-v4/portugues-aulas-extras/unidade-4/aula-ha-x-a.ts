import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Há x A: Tempo e Distância
 * Fase: fase2 · BNCC: EF04LP04, EF05LP01
 */
export const aulaAulaExtraHaXA: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  slug: "aula-extra-ha-x-a",
  titulo: "Há x A: Tempo e Distância",
  iconeTrilha: "⏳",
  bncc: ["EF04LP04", "EF05LP01"],
  duracaoMin: 12,
  cenasLousa: [
    {
      tituloLousa: "HÁ = passado / existência",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "HÁ = tempo que já passou ou existência (= faz / existe)",
          falaProfessor: "Há três anos = faz três anos. Já passou."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Estudo aqui há 3 anos. (= faz 3 anos) · Há vagas. (= existem vagas)",
          falaProfessor: "Faz três anos. Existem vagas. Nos dois casos: há."
        }
      ],
      modoSocorro: {
        titulo: "Teste do FAZ",
        macete: "Cabe 'faz'? → HÁ. Aponta para o futuro ou distância? → A."
      },
    },
    {
      tituloLousa: "A = futuro / distância",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "A = tempo futuro ou distância no espaço",
          falaProfessor: "Daqui a 2 dias (futuro). A 2 km daqui (distância)."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Daqui a 2 dias viajo. · A escola fica a 500 metros.",
          falaProfessor: "Futuro e distância usam A sem acento."
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: leia notícias e destaque cada 'há' e 'a' de tempo encontrado.",
          falaProfessor: "Pais, jornal e portais são ótimos porque usam essas formas o tempo todo."
        }
      ],
      desafioRelampago: {
        pergunta: "'Moro aqui ___ 5 anos.'",
        opcoes: ["a", "há"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Passado ou futuro?",
    historia: "'Há 3 anos' e 'daqui a 3 anos' apontam para lados opostos do tempo.",
  },
  momento09_revisao: {
    pontos: ["Há = passado (faz) ou existência", "A = futuro ou distância", "Nunca use 'há atrás' — é redundante"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "'Daqui ___ uma semana viajo.'",
        opcoes: ["há", "a"],
        correta: 1,
        feedbackAcerto: "Isso: futuro.",
        feedbackErro: "Futuro usa A sem acento."
      },
      {
        pergunta: "'___ muitos alunos na sala.'",
        opcoes: ["A", "Há"],
        correta: 1,
        feedbackAcerto: "Certo: existir.",
        feedbackErro: "Existência = há."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Linha do tempo",
    materiais: ["Papel"],
    passos: ["Escreva 2 fatos do passado com HÁ e 2 planos futuros com A"],
    registro: "Foto da linha do tempo"
  },
  recompensa: { xp: 150, moedas: 80 }
};
