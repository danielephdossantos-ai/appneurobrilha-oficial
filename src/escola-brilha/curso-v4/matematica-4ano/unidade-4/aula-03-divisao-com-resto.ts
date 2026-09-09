import type { AulaV4 } from "../../types";

export const aula03_divisaoComResto: AulaV4 = {
  slug: "u4-03-divisao-com-resto",
  titulo: "Divisão com resto",
  iconeTrilha: "🍕",
  bncc: ["EF04MA07"],
  duracaoMin: 22,
  metodologias: ["cpa", "vergnaud"],

  momento01_motivacao: {
    titulo: "Quando sobra",
    historia:
      "{NOME}, nem toda divisão é exata. Se sobrar, esse pedaço se chama RESTO. O resto é SEMPRE menor que o divisor.",
  },
  momento02_exploracao: {
    instrucao: "Regras do resto.",
    cenas: [
      { tipo: "texto", texto: "Resto < divisor. Sempre.", destaque: true },
      { tipo: "texto", texto: "Se resto = 0, a divisão é EXATA." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que resto < divisor?",
    pista: "Se fosse maior, dava pra dividir mais.",
    revelacao: "Se resto ≥ divisor, você não terminou de dividir. Continue!",
  },
  momento04_explicacao: {
    titulo: "Divisão com resto",
    etapas: [
      {
        texto: "Divida 25 ÷ 4.",
        exemploReal: {
          contexto: "Tabuada do 4: 4, 8, 12, 16, 20, 24, 28. Escolho 24 (não passa de 25).",
          destaque: "25 ÷ 4 = 6, resto 1.",
        },
      },
      {
        texto: "Ou pela chave, com um número maior.",
        exemploReal: {
          contexto: "215 ÷ 4. 21÷4=5(r 1), traz o 5 → 15÷4=3(r 3).",
          destaque: "215 ÷ 4 = 53, resto 3.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Divida 47 ÷ 5.",
    passos: ["Tabuada do 5: 5, 10, ..., 45.", "45 = 5×9.", "47 − 45 = 2.", "47 ÷ 5 = 9, resto 2."],
    resposta: "9, resto 2",
  },
  momento06_praticaGuiada: {
    enunciado: "38 ÷ 6 = ?",
    dica: "Tabuada do 6: 6, 12, 18, 24, 30, 36. Não passa de 38: 36.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6, resto 2" }, { nome: "5, resto 8" }, { nome: "7, resto 4" }],
      respostaCerta: "6, resto 2",
      feedbackAcerto: "🎯 6 e sobra 2.",
      feedbackErro: "6×6=36; 38−36=2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "53 ÷ 7 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7, resto 4" }, { nome: "6, resto 11" }, { nome: "8, resto 3" }],
      respostaCerta: "7, resto 4",
      feedbackAcerto: "🎯 7 e sobra 4.",
      feedbackErro: "7×7=49; 53−49=4.",
    },
  },
  momento08_aplicacao: {
    contexto: "Temos 34 balas para dividir igualmente em 5 sacos.",
    problema: "Quantas balas em cada saco e quantas sobram?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6 em cada, sobram 4" }, { nome: "5 em cada, sobram 9" }, { nome: "7 em cada, sobra 1" }],
      respostaCerta: "6 em cada, sobram 4",
      feedbackAcerto: "🎯 6 e sobram 4.",
      feedbackErro: "5×6=30; 34−30=4.",
    },
  },
  momento09_revisao: {
    pontos: ["Resto < divisor.", "Resto = 0 → exata."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "29 ÷ 4 = ?", opcoes: ["7, resto 1", "6, resto 5", "8, resto 1"], correta: 0, feedbackAcerto: "🎉 7 e sobra 1.", feedbackErro: "4×7=28; 29−28=1." },
      { pergunta: "50 ÷ 6 = ?", opcoes: ["8, resto 2", "9, resto 4", "7, resto 8"], correta: 0, feedbackAcerto: "🎉 8 e sobra 2.", feedbackErro: "6×8=48; 50−48=2." },
      { pergunta: "72 ÷ 8 = ?", opcoes: ["9, resto 0", "8, resto 8", "10, resto 8"], correta: 0, feedbackAcerto: "🎉 9 exata.", feedbackErro: "8×9=72; resto 0." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Sobrou pra quem?",
    materiais: ["Balas ou grãos"],
    passos: ["Junte 25 objetos.", "Divida em 4, 5, 6 e 7 grupos iguais.", "Registre o resto de cada divisão."],
    registro: "📸 Foto dos grupos + tabela dos restos.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
