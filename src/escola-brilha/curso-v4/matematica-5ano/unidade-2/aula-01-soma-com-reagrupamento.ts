import type { AulaV4 } from "../../types";

export const aula01_somaComReagrupamento: AulaV4 = {
  slug: "u2-01-soma-com-reagrupamento",
  titulo: "Somar até 99.999 com reagrupamento",
  iconeTrilha: "➕",
  bncc: ["EF05MA07"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Contador imperial",
    historia: "{NOME}, dois censos precisam ser somados. Números grandes com 'vai 1' em cascata — nada assusta o contador imperial.",
  },
  momento02_exploracao: {
    instrucao: "Coluna por coluna, começando pelas UNIDADES.",
    cenas: [
      { tipo: "texto", texto: "Se a coluna passa de 9, sobe 1 pra próxima. É o 'vai 1'.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Onde entra o 'vai 1'?",
    pista: "Sempre à esquerda da coluna que estourou.",
    revelacao: "Some 8 + 5 = 13 → escreve 3, vai 1 pra dezena.",
  },
  momento04_explicacao: {
    titulo: "Uma soma completa passo a passo",
    etapas: [
      {
        texto: "Vamos somar 27.586 + 14.879 devagar.",
        exemploReal: {
          contexto: "Confira cada 'vai 1' aparecer no topo:",
          destaque: "27.586 + 14.879 = 42.465.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [27586, 14879],
            resultado: 42465,
            passos: [
              { coluna: "U", fala: "6 + 9 = 15. Escrevo 5, vai 1.", digito: 5, vaiUm: 1 },
              { coluna: "D", fala: "8 + 7 + 1 = 16. Escrevo 6, vai 1.", digito: 6, vaiUm: 1 },
              { coluna: "C", fala: "5 + 8 + 1 = 14. Escrevo 4, vai 1.", digito: 4, vaiUm: 1 },
              { coluna: "UM", fala: "7 + 4 + 1 = 12. Escrevo 2, vai 1.", digito: 2, vaiUm: 1 },
              { coluna: "DM", fala: "2 + 1 + 1 = 4.", digito: 4 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Some 35.487 + 26.859.",
    resposta: "62.346",
    passos: ["U: 7+9=16 (6, vai 1).", "D: 8+5+1=14 (4, vai 1).", "C: 4+8+1=13 (3, vai 1).", "UM: 5+6+1=12 (2, vai 1).", "DM: 3+2+1=6."],
    contaPassoAPasso: {
      operacao: "soma",
      operandos: [35487, 26859],
      resultado: 62346,
      passos: [
        { coluna: "U", fala: "7 + 9 = 16 · 6, vai 1.", digito: 6, vaiUm: 1 },
        { coluna: "D", fala: "8 + 5 + 1 = 14 · 4, vai 1.", digito: 4, vaiUm: 1 },
        { coluna: "C", fala: "4 + 8 + 1 = 13 · 3, vai 1.", digito: 3, vaiUm: 1 },
        { coluna: "UM", fala: "5 + 6 + 1 = 12 · 2, vai 1.", digito: 2, vaiUm: 1 },
        { coluna: "DM", fala: "3 + 2 + 1 = 6.", digito: 6 },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 48.267 + 15.938.",
    dica: "Cuidado com o 'vai 1' em cadeia.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [48267, 15938],
      resultado: 64205,
      modo: "explicacao",
      passos: [
        { coluna: "U", fala: "7 + 8 = 15 · 5, vai 1.", digito: 5, vaiUm: 1 },
        { coluna: "D", fala: "6 + 3 + 1 = 10 · 0, vai 1.", digito: 0, vaiUm: 1 },
        { coluna: "C", fala: "2 + 9 + 1 = 12 · 2, vai 1.", digito: 2, vaiUm: 1 },
        { coluna: "UM", fala: "8 + 5 + 1 = 14 · 4, vai 1.", digito: 4, vaiUm: 1 },
        { coluna: "DM", fala: "4 + 1 + 1 = 6.", digito: 6 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 36.542 + 27.318.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [36542, 27318],
      resultado: 63860,
      modo: "pratica",
      perguntaFinal: "Total?",
      opcoes: [63860, 63760, 63960],
      feedbackAcerto: "🎯 63.860.",
      feedbackErro: "Coluna a coluna: 63.860.",
      passos: [
        { coluna: "U", fala: "2 + 8 = 10 · 0, vai 1.", digito: 0, vaiUm: 1 },
        { coluna: "D", fala: "4 + 1 + 1 = 6.", digito: 6 },
        { coluna: "C", fala: "5 + 3 = 8.", digito: 8 },
        { coluna: "UM", fala: "6 + 7 = 13 · 3, vai 1.", digito: 3, vaiUm: 1 },
        { coluna: "DM", fala: "3 + 2 + 1 = 6.", digito: 6 },
      ],
    },
  },
  momento08_aplicacao: {
    contexto: "A biblioteca imperial tem 47.860 livros. Chegam 15.475 novos.",
    problema: "Total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "63.335" }, { nome: "62.335" }, { nome: "63.235" }],
      respostaCerta: "63.335",
      feedbackAcerto: "🎯 63.335 livros.",
      feedbackErro: "47.860 + 15.475 = 63.335.",
    },
  },
  momento09_revisao: {
    pontos: ["Comece pelas UNIDADES.", "Passou de 9 → vai 1 pra próxima.", "Vai 1 pode acontecer em cadeia."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "18.475 + 26.348 = ?", opcoes: ["44.823", "44.723", "45.823"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Coluna a coluna: 44.823." },
      { pergunta: "32.089 + 47.916 = ?", opcoes: ["80.005", "79.905", "80.105"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "80.005." },
      { pergunta: "56.478 + 12.523 = ?", opcoes: ["69.001", "68.001", "69.101"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "69.001." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Duas contas grandes",
    materiais: ["Caderno"],
    passos: ["Invente dois números de 5 algarismos.", "Some armado, marcando cada 'vai 1'."],
    registro: "📸 Foto do caderno.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
