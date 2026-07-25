import type { AulaV4 } from "../../types";

export const aula06_probabilidade: AulaV4 = {
  slug: "u7-06-probabilidade",
  titulo: "Probabilidade — chance de acontecer",
  iconeTrilha: "🎲",
  bncc: ["EF04MA26"],
  duracaoMin: 22,
  metodologias: ["rme", "vergnaud"],

  momento01_motivacao: {
    titulo: "Impossível, provável, certo",
    historia:
      "{NOME}, algumas coisas TÊM que acontecer (certo). Outras NUNCA acontecem (impossível). E outras PODEM acontecer, com mais ou menos chance.",
  },
  momento02_exploracao: {
    instrucao: "Escala.",
    cenas: [
      {
        tipo: "escalaProb",
        itens: [
          { evento: "Sol nascer amanhã", nivel: "certo" },
          { evento: "Sair 7 num dado de 6 faces", nivel: "impossivel" },
          { evento: "Chover em janeiro", nivel: "muito" },
          { evento: "Ganhar na loteria", nivel: "pouco" },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "No dado, qual a chance de sair 6?",
    pista: "São 6 faces.",
    revelacao: "1 em 6 casos favoráveis → chance pequena mas POSSÍVEL.",
  },
  momento04_explicacao: {
    titulo: "Escala de probabilidade",
    etapas: [
      {
        texto: "Impossível → Pouco provável → Provável → Muito provável → Certo.",
        exemploReal: {
          contexto: "Tirar carta vermelha de baralho.",
          destaque: "Metade → PROVÁVEL.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Sacola com 3 bolas azuis e 1 vermelha. Chance de tirar VERMELHA:",
    passos: ["4 bolas no total.", "1 vermelha.", "Chance = 1 em 4 → POUCO PROVÁVEL."],
    resposta: "Pouco provável",
  },
  momento06_praticaGuiada: {
    enunciado: "Moeda: chance de dar cara.",
    dica: "2 lados.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Provável (meio a meio)" }, { nome: "Certo" }, { nome: "Impossível" }],
      respostaCerta: "Provável (meio a meio)",
      feedbackAcerto: "🎯 1 em 2.",
      feedbackErro: "Metade → provável.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Dado normal: sair 8.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Impossível" }, { nome: "Pouco provável" }, { nome: "Certo" }],
      respostaCerta: "Impossível",
      feedbackAcerto: "🎯 Impossível.",
      feedbackErro: "Dado só vai até 6.",
    },
  },
  momento08_aplicacao: {
    contexto: "Sacola com 10 bolas: 9 vermelhas e 1 azul.",
    problema: "Chance de tirar VERMELHA:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Muito provável" }, { nome: "Pouco provável" }, { nome: "Impossível" }],
      respostaCerta: "Muito provável",
      feedbackAcerto: "🎯 9 em 10.",
      feedbackErro: "Quase tudo é vermelho.",
    },
  },
  momento09_revisao: {
    pontos: ["Impossível → 0.", "Certo → 1.", "Pouco/Provável/Muito → entre."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Sair 3 num dado:", opcoes: ["Pouco provável", "Impossível", "Certo"], correta: 0, feedbackAcerto: "🎉 Pouco provável.", feedbackErro: "1 em 6." },
      { pergunta: "Sair par ou ímpar no dado:", opcoes: ["Provável (meio a meio)", "Certo", "Impossível"], correta: 0, feedbackAcerto: "🎉 Meio a meio.", feedbackErro: "3 pares, 3 ímpares." },
      { pergunta: "Peixe voar sozinho:", opcoes: ["Impossível", "Pouco provável", "Certo"], correta: 0, feedbackAcerto: "🎉 Impossível.", feedbackErro: "Não voa naturalmente." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Sacola das Chances",
    materiais: ["Sacola", "Bolas/papéis coloridos"],
    passos: ["Coloque 4 bolas de 2 cores diferentes.", "Sorteie 10 vezes anotando a cor.", "Compare com o esperado."],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 220, moedas: 110 },
};
