import type { AulaV4 } from "../../types";

export const aula03_subtracaoSimples: AulaV4 = {
  slug: "u2-03-subtracao-simples",
  titulo: "Subtrair até 99.999 (sem trocar)",
  iconeTrilha: "➖",
  bncc: ["EF05MA07"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Tirar sem susto",
    historia: "{NOME}, quando o número de cima é ≥ ao de baixo em CADA coluna, é subtração direta.",
  },
  momento02_exploracao: {
    instrucao: "Confira cada coluna antes de começar.",
    cenas: [{ tipo: "texto", texto: "Se nenhuma coluna precisa trocar, é subtração direta.", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "Como saber se preciso trocar?",
    pista: "Compare topo e base em cada coluna.",
    revelacao: "Se topo ≥ base em TODAS, não troca.",
  },
  momento04_explicacao: {
    titulo: "Subtração direta",
    etapas: [
      {
        texto: "48.765 − 25.432.",
        exemploReal: {
          contexto: "Todas ok: 5≥2, 6≥3, 7≥4, 8≥5, 4≥2.",
          destaque: "= 23.333.",
          contaPassoAPasso: {
            operacao: "sub",
            operandos: [48765, 25432],
            resultado: 23333,
            passos: [
              { coluna: "U", fala: "5 − 2 = 3.", digito: 3 },
              { coluna: "D", fala: "6 − 3 = 3.", digito: 3 },
              { coluna: "C", fala: "7 − 4 = 3.", digito: 3 },
              { coluna: "UM", fala: "8 − 5 = 3.", digito: 3 },
              { coluna: "DM", fala: "4 − 2 = 2.", digito: 2 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "58.976 − 34.523.",
    resposta: "24.453",
    passos: ["U: 6−3=3.", "D: 7−2=5.", "C: 9−5=4.", "UM: 8−4=4.", "DM: 5−3=2."],
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 76.598 − 34.256.",
    dica: "Coluna a coluna.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "sub",
      operandos: [76598, 34256],
      resultado: 42342,
      modo: "explicacao",
      passos: [
        { coluna: "U", fala: "8 − 6 = 2.", digito: 2 },
        { coluna: "D", fala: "9 − 5 = 4.", digito: 4 },
        { coluna: "C", fala: "5 − 2 = 3.", digito: 3 },
        { coluna: "UM", fala: "6 − 4 = 2.", digito: 2 },
        { coluna: "DM", fala: "7 − 3 = 4.", digito: 4 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 87.654 − 42.321.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "sub",
      operandos: [87654, 42321],
      resultado: 45333,
      modo: "pratica",
      perguntaFinal: "Resultado?",
      opcoes: [45333, 45233, 45433],
      feedbackAcerto: "🎯",
      feedbackErro: "= 45.333.",
      passos: [
        { coluna: "U", fala: "4 − 1 = 3.", digito: 3 },
        { coluna: "D", fala: "5 − 2 = 3.", digito: 3 },
        { coluna: "C", fala: "6 − 3 = 3.", digito: 3 },
        { coluna: "UM", fala: "7 − 2 = 5.", digito: 5 },
        { coluna: "DM", fala: "8 − 4 = 4.", digito: 4 },
      ],
    },
  },
  momento08_aplicacao: {
    contexto: "Estoque: 65.879 sacas; foram vendidas 32.435.",
    problema: "Sobraram?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "33.444" }, { nome: "33.344" }, { nome: "33.544" }],
      respostaCerta: "33.444",
      feedbackAcerto: "🎯 33.444.",
      feedbackErro: "65.879 − 32.435 = 33.444.",
    },
  },
  momento09_revisao: {
    pontos: ["Sem troca quando topo ≥ base em todas as colunas.", "Da direita pra esquerda."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "48.976 − 25.532 = ?", opcoes: ["23.444", "23.344", "22.444"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "23.444." },
      { pergunta: "78.654 − 34.213 = ?", opcoes: ["44.441", "44.541", "44.341"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "44.441." },
      { pergunta: "96.578 − 43.124 = ?", opcoes: ["53.454", "53.354", "53.554"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "53.454." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Sem trocar",
    materiais: ["Papel"],
    passos: ["Invente uma subtração de 5 algarismos onde topo ≥ base em cada coluna.", "Resolva."],
    registro: "📸 Foto da conta.",
  },
  recompensa: { xp: 140, moedas: 75 },
};
