import type { AulaV4 } from "../../types";

export const aula03_zeroNoQuociente: AulaV4 = {
  slug: "u4-03-zero-no-quociente",
  titulo: "Zero no quociente",
  iconeTrilha: "0️⃣",
  bncc: ["EF05MA07"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Quando o divisor não cabe",
    historia: "{NOME}, se o número descido é MENOR que o divisor, escrevemos ZERO no quociente e descemos o próximo. Simples assim.",
  },
  momento02_exploracao: {
    instrucao: "Regra do zero.",
    cenas: [{ tipo: "texto", texto: "Divisor não cabe → 0 no quociente e desce o próximo dígito.", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "612 ÷ 3?",
    pista: "6÷3=2. Desce 1: 1 < 3 → 0 no quociente. Desce 2 → 12÷3=4.",
    revelacao: "204.",
  },
  momento04_explicacao: {
    titulo: "Exemplo com zero",
    etapas: [
      { texto: "824 ÷ 4." },
      { texto: "8 ÷ 4 = 2." },
      { texto: "Desce 2. 2 < 4 → 0 no quociente." },
      { texto: "Desce 4 → 24 ÷ 4 = 6." },
      { texto: "Resultado: 206." },
    ],
  },
  momento05_modelagem: {
    enunciado: "918 ÷ 3.",
    resposta: "306",
    passos: ["9÷3=3.", "1<3 → 0.", "Desce 8 → 18÷3=6.", "= 306."],
    contaPassoAPasso: {
      operacao: "div",
      operandos: [918, 3],
      resultado: 306,
      passos: [
        { fala: "9 ÷ 3 = 3. Escrevo 3. 3 × 3 = 9. 9 − 9 = 0." },
        { fala: "Desço o 1. Fica 1. 1 < 3 → escrevo 0 no quociente. 0 × 3 = 0. 1 − 0 = 1." },
        { fala: "Desço o 8. Fica 18. 18 ÷ 3 = 6. 6 × 3 = 18. 18 − 18 = 0." },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 624 ÷ 6.",
    dica: "Depois do 1º passo, olhe se o próximo dígito cabe.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "104" }, { nome: "114" }, { nome: "94" }],
      respostaCerta: "104",
      feedbackAcerto: "🎯 6÷6=1 · 2<6→0 · 24÷6=4.",
      feedbackErro: "624 ÷ 6 = 104.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 515 ÷ 5.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "103" }, { nome: "113" }, { nome: "133" }],
      respostaCerta: "103",
      feedbackAcerto: "🎯",
      feedbackErro: "5÷5=1 · 1<5→0 · 15÷5=3 → 103.",
    },
  },
  momento08_aplicacao: {
    contexto: "630 páginas em 6 cadernos iguais.",
    problema: "Páginas por caderno?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "105" }, { nome: "115" }, { nome: "95" }],
      respostaCerta: "105",
      feedbackAcerto: "🎯 6÷6=1 · 3<6→0 · 30÷6=5.",
      feedbackErro: "630 ÷ 6 = 105.",
    },
  },
  momento09_revisao: {
    pontos: ["Não cabe? Escreva 0 e desça.", "Confira multiplicando de volta."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "412 ÷ 4 = ?", opcoes: ["103", "113", "13"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "103." },
      { pergunta: "819 ÷ 9 = ?", opcoes: ["91", "81", "101"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "91." },
      { pergunta: "728 ÷ 7 = ?", opcoes: ["104", "108", "114"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "104." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cuidado com o zero",
    materiais: ["Papel"],
    passos: ["Divida 4 números pela chave, cada um com zero no quociente."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 140, moedas: 75 },
};
