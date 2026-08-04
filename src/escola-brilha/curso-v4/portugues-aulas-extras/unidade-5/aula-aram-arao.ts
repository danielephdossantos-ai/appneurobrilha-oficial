import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — ARAM x ARÃO: Ontem e Amanhã
 * Fase: fase2 · BNCC: EF05LP01, EF05LP06
 */
export const aulaAulaExtraAramArao: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  difficulty: "facil",
  slug: "aula-extra-aram-arao",
  titulo: "ARAM x ARÃO: Ontem e Amanhã",
  iconeTrilha: "⏰",
  bncc: ["EF05LP01", "EF05LP06"],
  duracaoMin: 13,
  cenasLousa: [
    {
      tituloLousa: "-ARAM = passado",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "-ARAM = pretérito perfeito (ONTEM). Força no A: falARAM.",
          falaProfessor: "Eles falaram ontem. A força está no A e termina com M."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Eles estudARAM ontem. · Os alunos chegARAM cedo.",
          falaProfessor: "Estudaram, chegaram: tudo já aconteceu."
        }
      ],
      modoSocorro: {
        titulo: "Teste do ONTEM/AMANHÃ",
        macete: "Encaixa 'ontem'? -ARAM. Encaixa 'amanhã'? -ARÃO."
      },
    },
    {
      tituloLousa: "-ARÃO = futuro",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "-ARÃO = futuro do presente (AMANHÃ). Força no ÃO, som nasal.",
          falaProfessor: "Eles falarão amanhã. A voz vai forte para o fim: falaRÃO."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Eles estudARÃO amanhã. · Os alunos chegARÃO cedo na segunda.",
          falaProfessor: "Estudarão, chegarão: ainda vai acontecer."
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: peça a criança para reescrever 3 frases do passado para o futuro.",
          falaProfessor: "Pais, transformar frases é mais eficaz do que apenas identificar."
        }
      ],
      desafioRelampago: {
        pergunta: "'Amanhã eles ___ a prova.'",
        opcoes: ["fizeram", "farão"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "A fábrica do tempo",
    historia: "Uma letra muda o verbo do passado para o futuro. E muita gente erra isso a vida toda.",
  },
  momento09_revisao: {
    pontos: ["-ARAM = ontem (passado)", "-ARÃO = amanhã (futuro)", "A força da voz muda de lugar", "Teste com ontem/amanhã"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "'Ontem eles ___ cedo.'",
        opcoes: ["chegarão", "chegaram"],
        correta: 1,
        feedbackAcerto: "Isso: passado.",
        feedbackErro: "Ontem pede -aram."
      },
      {
        pergunta: "'Semana que vem eles ___ o projeto.'",
        opcoes: ["entregaram", "entregarão"],
        correta: 1,
        feedbackAcerto: "Certo: futuro.",
        feedbackErro: "Futuro pede -arão."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Ontem e amanhã",
    materiais: ["Caderno"],
    passos: ["Escreva 3 frases no passado e reescreva no futuro"],
    registro: "Foto do caderno"
  },
  recompensa: { xp: 160, moedas: 90 }
};
