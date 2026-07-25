import type { AulaV4 } from "../../types";

export const aula06_missaoFinal: AulaV4 = {
  slug: "u4-06-missao-final",
  titulo: "Missão Final — Repartidor Imperial",
  iconeTrilha: "🎖️",
  bncc: ["EF05MA07"],
  duracaoMin: 22,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Prova do Repartidor",
    historia: "{NOME}, 4 divisões em cadeia. Quem passa vira Repartidor Imperial.",
  },
  momento02_exploracao: {
    instrucao: "Um problema por vez.",
    cenas: [{ tipo: "texto", texto: "Use a chave. Estime → teste → ajuste.", destaque: true }],
  },
  momento03_descoberta: { perguntaGuia: "Segredo?", pista: "Confie na tabuada.", revelacao: "Se souber a tabuada, você sabe dividir." },
  momento04_explicacao: {
    titulo: "Regras",
    etapas: [{ texto: "Divisões podem ter resto. Cheque com divisor × quociente + resto = dividendo." }],
  },
  momento05_modelagem: {
    enunciado: "672 ÷ 8.",
    resposta: "84",
    passos: ["67 ÷ 8 = 8 (64).", "Sobra 3. Desce 2 → 32 ÷ 8 = 4.", "= 84."],
    contaPassoAPasso: {
      operacao: "div",
      operandos: [672, 8],
      resultado: 84,
      passos: [
        { fala: "67 ÷ 8. 8 × 8 = 64. Escrevo 8. 67 − 64 = 3." },
        { fala: "Desço o 2. Fica 32. 8 × 4 = 32. Escrevo 4. 32 − 32 = 0." },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Desafio 1: 585 ÷ 5.",
    dica: "Chave direta.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "117" }, { nome: "116" }, { nome: "118" }],
      respostaCerta: "117",
      feedbackAcerto: "🎯",
      feedbackErro: "117.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Desafio 2: 924 ÷ 22.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "42" }, { nome: "41" }, { nome: "43" }],
      respostaCerta: "42",
      feedbackAcerto: "🎯 22×42=924.",
      feedbackErro: "42.",
    },
  },
  momento08_aplicacao: {
    contexto: "Escola: 875 canetas em 25 mesas iguais.",
    problema: "Por mesa?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "35" }, { nome: "34" }, { nome: "36" }],
      respostaCerta: "35",
      feedbackAcerto: "🎯",
      feedbackErro: "875 ÷ 25 = 35.",
    },
  },
  momento09_revisao: { pontos: ["Repartidor Imperial!"] },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "324 ÷ 4 = ?", opcoes: ["81", "82", "80"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "81." },
      { pergunta: "560 ÷ 8 = ?", opcoes: ["70", "60", "80"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "70." },
      { pergunta: "999 ÷ 3 = ?", opcoes: ["333", "323", "343"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "333." },
      { pergunta: "875 ÷ 15 = ?", opcoes: ["q=58, r=5", "q=58, r=6", "q=59, r=0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "15×58+5=875." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma do Repartidor",
    materiais: ["Papel"],
    passos: ["Faça um diploma.", "Mostre 3 divisões suas."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 220, moedas: 115, medalha: "Repartidor Imperial" },
};
