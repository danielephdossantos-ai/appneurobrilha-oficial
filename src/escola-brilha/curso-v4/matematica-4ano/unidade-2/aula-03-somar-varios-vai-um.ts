import type { AulaV4 } from "../../types";

export const aula03_somarVariosVaiUm: AulaV4 = {
  slug: "u2-03-somar-varios-vai-um",
  titulo: "Vários 'vai 1' na mesma conta",
  iconeTrilha: "🔺",
  bncc: ["EF04MA03", "EF04MA05"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Reagrupar 3 vezes",
    historia:
      "{NOME}, em contas grandes o 'vai 1' pode aparecer em U, em D e em C. Não tem problema: um por vez, sempre pra esquerda.",
  },
  momento02_exploracao: {
    instrucao: "Cada 'vai 1' entra na SOMA da coluna vizinha.",
    cenas: [
      { tipo: "texto", texto: "Ex.: 8+7=15 → escreve 5, vai 1. Na próxima: soma normal + 1.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O 'vai 1' pode se acumular?",
    pista: "Sim: cada coluna tem no máximo UM 'vai 1' entrando.",
    revelacao: "Uma coluna nunca gera 'vai 2'. O máximo que sobe é 1 — porque a soma de 3 algarismos ≤ 9+9+1 = 19.",
  },
  momento04_explicacao: {
    titulo: "Cadeia de reagrupamentos",
    etapas: [
      {
        texto: "Vamos somar 4.789 + 3.456.",
        exemploReal: {
          contexto: "Reagrupa em U, D e C. UM só recebe o 'vai 1' da centena.",
          destaque: "4.789 + 3.456 = 8.245.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [4789, 3456],
            resultado: 8245,
            passos: [
              { coluna: "U", fala: "9 + 6 = 15. Escrevo 5, vai 1.", digito: 5, vaiUm: 1 },
              { coluna: "D", fala: "8 + 5 + 1 = 14. Escrevo 4, vai 1.", digito: 4, vaiUm: 1 },
              { coluna: "C", fala: "7 + 4 + 1 = 12. Escrevo 2, vai 1.", digito: 2, vaiUm: 1 },
              { coluna: "UM", fala: "4 + 3 + 1 = 8.", digito: 8 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Some 5.678 + 2.789.",
    passos: [
      "U: 8+9=17 (7, vai 1).",
      "D: 7+8+1=16 (6, vai 1).",
      "C: 6+7+1=14 (4, vai 1).",
      "UM: 5+2+1=8.",
    ],
    resposta: "8.467",
    casasValor: { numero: 8467, mostrarDecomposicao: true, extenso: "oito mil, quatrocentos e sessenta e sete" },
  },
  momento06_praticaGuiada: {
    enunciado: "3.567 + 2.859 = ?",
    dica: "Vá coluna a coluna. Não esqueça o 'vai 1'.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [3567, 2859],
      resultado: 6426,
      modo: "pratica",
      perguntaFinal: "Total?",
      opcoes: [6426, 6326, 6526],
      feedbackAcerto: "🎯 6.426.",
      feedbackErro: "7+9=16, 6+5+1=12, 5+8+1=14, 3+2+1=6 → 6.426.",
      passos: [
        { coluna: "U", fala: "7 + 9 = 16. Escrevo 6, vai 1.", digito: 6, vaiUm: 1 },
        { coluna: "D", fala: "6 + 5 + 1 = 12. Escrevo 2, vai 1.", digito: 2, vaiUm: 1 },
        { coluna: "C", fala: "5 + 8 + 1 = 14. Escrevo 4, vai 1.", digito: 4, vaiUm: 1 },
        { coluna: "UM", fala: "3 + 2 + 1 = 6.", digito: 6 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "4.876 + 1.588 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6.464" }, { nome: "6.364" }, { nome: "6.564" }],
      respostaCerta: "6.464",
      feedbackAcerto: "🎯 6.464.",
      feedbackErro: "6+8=14, 7+8+1=16, 8+5+1=14, 4+1+1=6 → 6.464.",
    },
  },
  momento08_aplicacao: {
    contexto: "A biblioteca tinha 2.879 livros. Chegaram 1.756 novos.",
    problema: "Novo total:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.635" }, { nome: "4.535" }, { nome: "4.735" }],
      respostaCerta: "4.635",
      feedbackAcerto: "🎯 4.635 livros.",
      feedbackErro: "9+6=15, 7+5+1=13, 8+7+1=16, 2+1+1=4 → 4.635.",
    },
  },
  momento09_revisao: {
    pontos: ["Cada coluna: no máximo 1 'vai 1'.", "Some sempre incluindo o transporte."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2.789 + 1.876 = ?", opcoes: ["4.665", "4.565", "4.765"], correta: 0, feedbackAcerto: "🎉 4.665.", feedbackErro: "9+6=15, 8+7+1=16, 7+8+1=16, 2+1+1=4." },
      { pergunta: "3.456 + 2.987 = ?", opcoes: ["6.443", "6.343", "6.543"], correta: 0, feedbackAcerto: "🎉 6.443.", feedbackErro: "Coluna a coluna: 6.443." },
      { pergunta: "5.678 + 3.879 = ?", opcoes: ["9.557", "9.457", "9.657"], correta: 0, feedbackAcerto: "🎉 9.557.", feedbackErro: "8+9=17, 7+7+1=15, 6+8+1=15, 5+3+1=9 → 9.557." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cadeia dos 'vai 1'",
    materiais: ["Papel"],
    passos: ["Escreva 2 números de 4 algarismos com muitos 9.", "Some armado.", "Marque cada 'vai 1' com uma seta."],
    registro: "📸 Foto da soma marcada.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
