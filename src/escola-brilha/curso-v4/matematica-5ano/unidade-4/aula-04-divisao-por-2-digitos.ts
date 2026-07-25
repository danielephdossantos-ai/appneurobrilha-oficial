import type { AulaV4 } from "../../types";

export const aula04_divisaoPor2Digitos: AulaV4 = {
  slug: "u4-04-divisao-por-2-digitos",
  titulo: "Divisão por 2 dígitos",
  iconeTrilha: "➗",
  bncc: ["EF05MA07"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Estimando o quociente",
    historia: "{NOME}, dividir por 2 dígitos pede ESTIMATIVA: chute quantas vezes cabe, teste multiplicando, ajuste se precisar.",
  },
  momento02_exploracao: {
    instrucao: "Passo estimar → testar → ajustar.",
    cenas: [
      { tipo: "texto", texto: "Estime: use a 1ª casa do divisor.", destaque: true },
      { tipo: "texto", texto: "Multiplica. Se passar do dividendo parcial, diminui 1 no quociente." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "504 ÷ 12?",
    pista: "50 ÷ 12 ≈ 4. Teste: 12×4=48. Bom.",
    revelacao: "504 − 480 = 24. 24 ÷ 12 = 2. Quociente 42.",
  },
  momento04_explicacao: {
    titulo: "Divisão por 2 dígitos passo a passo",
    etapas: [
      { texto: "875 ÷ 25." },
      { texto: "1º Olhe 87. 87 ÷ 25? Estime 3: 25×3=75. Cabe. Escrevo 3." },
      { texto: "87 − 75 = 12. Desce 5 → 125." },
      { texto: "125 ÷ 25 = 5 (25×5=125). Escrevo 5. Resto 0." },
      { texto: "Resultado: 35." },
    ],
  },
  momento05_modelagem: {
    enunciado: "648 ÷ 18.",
    resposta: "36",
    passos: ["64 ÷ 18: estime 3 (18×3=54). Cabe.", "64−54=10. Desce 8 → 108.", "108 ÷ 18 = 6 (18×6=108).", "= 36."],
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 480 ÷ 15.",
    dica: "48 ÷ 15.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "32" }, { nome: "31" }, { nome: "33" }],
      respostaCerta: "32",
      feedbackAcerto: "🎯 15×32=480.",
      feedbackErro: "480 ÷ 15 = 32.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 936 ÷ 24.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "39" }, { nome: "38" }, { nome: "40" }],
      respostaCerta: "39",
      feedbackAcerto: "🎯 24×39=936.",
      feedbackErro: "39.",
    },
  },
  momento08_aplicacao: {
    contexto: "540 alunos em ônibus de 45 lugares.",
    problema: "Quantos ônibus?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "12" }, { nome: "11" }, { nome: "13" }],
      respostaCerta: "12",
      feedbackAcerto: "🎯 540 ÷ 45 = 12.",
      feedbackErro: "12.",
    },
  },
  momento09_revisao: {
    pontos: ["Estime pela 1ª casa.", "Teste multiplicando.", "Ajuste se passar do dividendo."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "672 ÷ 21 = ?", opcoes: ["32", "31", "33"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "32." },
      { pergunta: "396 ÷ 12 = ?", opcoes: ["33", "32", "34"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "33." },
      { pergunta: "1.008 ÷ 42 = ?", opcoes: ["24", "23", "25"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "24." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Compra em prestações",
    materiais: ["Encarte"],
    passos: ["Escolha um item.", "Divida o preço total pelo número de parcelas."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
