import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Onde x Aonde
 * Fase: fase2 · BNCC: EF04LP04
 */
export const aulaAulaExtraOndeAonde: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  slug: "aula-extra-onde-aonde",
  titulo: "Onde x Aonde",
  iconeTrilha: "📍",
  bncc: ["EF04LP04"],
  duracaoMin: 12,
  cenasLousa: [
    {
      tituloLousa: "ONDE = lugar parado",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "ONDE = permanência (verbos estar, morar, ficar)",
          falaProfessor: "Onde você mora? Você está parado ali, morando."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Onde você mora? · A casa onde cresci. · Onde está meu livro?",
          falaProfessor: "Morar, crescer, estar: tudo parado. Onde."
        }
      ],
      modoSocorro: {
        titulo: "Teste do verbo",
        macete: "O verbo pede 'a'? (ir a, chegar a) → AONDE. O verbo não pede 'a'? → ONDE."
      },
    },
    {
      tituloLousa: "AONDE = movimento",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "AONDE = destino (verbos ir, chegar, levar)",
          falaProfessor: "Aonde você vai? Quem vai, vai A algum lugar. Por isso o A gruda."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Aonde você vai? · Aonde ele chegou com essa história?",
          falaProfessor: "Ir e chegar pedem o A: aonde."
        }
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: pergunte 'aonde você vai?' e 'onde você está?' durante o dia para naturalizar o uso.",
          falaProfessor: "Pais, o uso falado correto no dia a dia é o melhor professor."
        }
      ],
      desafioRelampago: {
        pergunta: "'___ você vai depois da escola?'",
        opcoes: ["Onde", "Aonde"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Parado ou em movimento",
    historia: "Uma letrinha A decide se você está parado ou indo para algum lugar.",
  },
  momento09_revisao: {
    pontos: ["Onde = lugar fixo (estar, morar)", "Aonde = movimento (ir, chegar)", "Teste: o verbo pede preposição 'a'?"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "'___ está meu caderno?'",
        opcoes: ["Aonde", "Onde"],
        correta: 1,
        feedbackAcerto: "Isso, está = parado.",
        feedbackErro: "Verbo estar não pede A: onde."
      },
      {
        pergunta: "'___ vamos amanhã?'",
        opcoes: ["Aonde", "Onde"],
        correta: 0,
        feedbackAcerto: "Certo: ir pede A.",
        feedbackErro: "Ir a algum lugar: aonde."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Perguntas do dia",
    materiais: ["Nada"],
    passos: ["Faça 3 perguntas com onde e 3 com aonde para a família"],
    registro: "Áudio das perguntas"
  },
  recompensa: { xp: 150, moedas: 80 }
};
