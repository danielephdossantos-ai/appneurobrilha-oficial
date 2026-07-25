import type { AulaV4 } from "../../types";

export const aula02_divisaoComResto: AulaV4 = {
  slug: "u4-02-divisao-com-resto",
  titulo: "Divisão com resto",
  iconeTrilha: "🍰",
  bncc: ["EF05MA07"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Nem toda divisão é exata",
    historia: "{NOME}, às vezes sobra. Esse 'sobra' se chama RESTO. Ele SEMPRE é menor que o divisor.",
  },
  momento02_exploracao: {
    instrucao: "Regra do resto.",
    cenas: [
      { tipo: "texto", texto: "Resto < divisor. Se der maior ou igual, ainda cabe mais uma no quociente.", destaque: true },
      { tipo: "texto", texto: "Dividendo = divisor × quociente + resto." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "17 ÷ 5?",
    pista: "5 × 3 = 15. 17 − 15 = 2.",
    revelacao: "Quociente 3, resto 2. Verificando: 5×3+2=17. ✓",
  },
  momento04_explicacao: {
    titulo: "Divisão com resto na chave",
    etapas: [
      { texto: "745 ÷ 6." },
      { texto: "7 ÷ 6 = 1, resta 1." },
      { texto: "Desce 4 → 14 ÷ 6 = 2, resta 2." },
      { texto: "Desce 5 → 25 ÷ 6 = 4, resta 1." },
      { texto: "Quociente 124, resto 1. Verifica: 6×124+1=745. ✓" },
    ],
  },
  momento05_modelagem: {
    enunciado: "83 ÷ 4.",
    resposta: "q=20, r=3",
    passos: ["8 ÷ 4 = 2.", "Desce 3 → 3 ÷ 4 = 0, resta 3.", "Verifica: 4×20+3=83."],
    contaPassoAPasso: {
      operacao: "div",
      operandos: [83, 4],
      resultado: 20,
      passos: [
        { fala: "8 ÷ 4 = 2. Escrevo 2. 2 × 4 = 8. 8 − 8 = 0." },
        { fala: "Desço o 3. Fica 3. 3 < 4 → escrevo 0. 0 × 4 = 0. 3 − 0 = 3. Resto 3." },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 158 ÷ 7.",
    dica: "15 ÷ 7.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quociente e resto?",
      opcoes: [{ nome: "q=22, r=4" }, { nome: "q=22, r=3" }, { nome: "q=23, r=1" }],
      respostaCerta: "q=22, r=4",
      feedbackAcerto: "🎯 7×22+4=158.",
      feedbackErro: "158 ÷ 7 → q=22, r=4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 234 ÷ 8.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "q=29, r=2" }, { nome: "q=29, r=1" }, { nome: "q=30, r=0" }],
      respostaCerta: "q=29, r=2",
      feedbackAcerto: "🎯 8×29+2=234.",
      feedbackErro: "234 ÷ 8 → q=29, r=2.",
    },
  },
  momento08_aplicacao: {
    contexto: "50 balas repartidas entre 6 crianças.",
    problema: "Quantas cada uma e quantas sobram?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8 cada, sobram 2" }, { nome: "7 cada, sobram 8" }, { nome: "9 cada, sobra 0" }],
      respostaCerta: "8 cada, sobram 2",
      feedbackAcerto: "🎯 50 = 6×8+2.",
      feedbackErro: "50 ÷ 6 → q=8, r=2.",
    },
  },
  momento09_revisao: {
    pontos: ["Resto < divisor.", "Verifica com divisor × quociente + resto = dividendo."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "45 ÷ 6 = ?", opcoes: ["q=7, r=3", "q=7, r=2", "q=8, r=0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "6×7+3=45." },
      { pergunta: "129 ÷ 5 = ?", opcoes: ["q=25, r=4", "q=25, r=3", "q=26, r=0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "5×25+4=129." },
      { pergunta: "78 ÷ 9 = ?", opcoes: ["q=8, r=6", "q=8, r=5", "q=9, r=0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "9×8+6=78." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Repartir e ver o resto",
    materiais: ["Objetos pequenos"],
    passos: ["Junte um punhado de objetos.", "Divida entre alguns integrantes.", "Anote quantos ficam e o resto."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 140, moedas: 75 },
};
