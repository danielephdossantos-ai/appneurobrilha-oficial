import type { AulaV4 } from "../../types";

export const aula06_problemasDivisao: AulaV4 = {
  slug: "u4-06-problemas-divisao",
  titulo: "Problemas de divisão",
  iconeTrilha: "🧩",
  bncc: ["EF04MA07", "EF04MA27"],
  duracaoMin: 22,
  metodologias: ["vergnaud", "rme"],

  momento01_motivacao: {
    titulo: "Repartir ou agrupar?",
    historia:
      "{NOME}, divisão aparece em duas situações: 1) REPARTIR igual entre pessoas ('quanto para cada?'); 2) AGRUPAR em pacotes ('quantos pacotes?').",
  },
  momento02_exploracao: {
    instrucao: "Duas caras da divisão.",
    cenas: [
      { tipo: "texto", texto: "24 balas ÷ 6 crianças = 4 balas para cada.", destaque: true },
      { tipo: "texto", texto: "24 balas em pacotes de 6 = 4 pacotes." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "As duas situações dão o mesmo resultado?",
    pista: "24 e 6 nas duas.",
    revelacao: "Sim, o cálculo é o mesmo. O que muda é o que representa: '4 pra cada' ou '4 pacotes'.",
  },
  momento04_explicacao: {
    titulo: "Ler o problema",
    etapas: [
      {
        texto: "Palavra-chave 'para cada' = repartir. 'Quantos pacotes de X' = agrupar.",
        exemploReal: {
          contexto: "156 páginas em 4 dias iguais.",
          destaque: "156 ÷ 4 = 39 páginas por dia.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "192 alunos em 8 turmas iguais. Quantos por turma?",
    passos: ["192 ÷ 8.", "19÷8=2(r 3), traz 2 → 32÷8=4.", "24 por turma."],
    resposta: "24",
  },
  momento06_praticaGuiada: {
    enunciado: "150 balas em pacotes de 5. Quantos pacotes?",
    dica: "Divida.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "30" }, { nome: "25" }, { nome: "35" }],
      respostaCerta: "30",
      feedbackAcerto: "🎯 30 pacotes.",
      feedbackErro: "150÷5=30.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Uma corda de 245 cm cortada em pedaços de 5 cm dá quantos pedaços?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "49" }, { nome: "45" }, { nome: "50" }],
      respostaCerta: "49",
      feedbackAcerto: "🎯 49 pedaços.",
      feedbackErro: "245÷5=49.",
    },
  },
  momento08_aplicacao: {
    contexto: "R$ 288 para dividir entre 6 amigos.",
    problema: "Quanto para cada?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 48" }, { nome: "R$ 46" }, { nome: "R$ 50" }],
      respostaCerta: "R$ 48",
      feedbackAcerto: "🎯 R$ 48.",
      feedbackErro: "288÷6=48.",
    },
  },
  momento09_revisao: {
    pontos: ["'Para cada' = repartir.", "'Quantos pacotes' = agrupar."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "72 lápis em 6 caixas: quantos por caixa?", opcoes: ["12", "10", "14"], correta: 0, feedbackAcerto: "🎉 12.", feedbackErro: "72÷6=12." },
      { pergunta: "R$ 180 para 5 crianças: quanto cada?", opcoes: ["R$ 36", "R$ 34", "R$ 38"], correta: 0, feedbackAcerto: "🎉 R$ 36.", feedbackErro: "180÷5=36." },
      { pergunta: "128 ovos em pacotes de 4: quantos pacotes?", opcoes: ["32", "30", "34"], correta: 0, feedbackAcerto: "🎉 32.", feedbackErro: "128÷4=32." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Repartir ou Agrupar",
    materiais: ["Papel"],
    passos: ["Invente 1 problema de repartir e 1 de agrupar.", "Resolva."],
    registro: "📸 Foto dos problemas.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
