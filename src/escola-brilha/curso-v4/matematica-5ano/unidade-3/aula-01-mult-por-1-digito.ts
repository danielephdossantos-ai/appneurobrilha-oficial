import type { AulaV4 } from "../../types";

export const aula01_multPor1Digito: AulaV4 = {
  slug: "u3-01-mult-por-1-digito",
  titulo: "Multiplicar por 1 dígito (até 4 algarismos)",
  iconeTrilha: "✖️",
  bncc: ["EF05MA07"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Multiplicando em cascata",
    historia: "{NOME}, multiplicar por 1 dígito é a base pra tudo. Aqui a tabuada + 'vai 1' fazem a mágica.",
  },
  momento02_exploracao: {
    instrucao: "Da direita pra esquerda, tabuada em cada coluna.",
    cenas: [{ tipo: "texto", texto: "Cada coluna: multiplique o dígito de baixo pelo de cima. Some o 'vai 1' do passo anterior.", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "324 × 6 = ?",
    pista: "Tabuada do 6.",
    revelacao: "4×6=24 (4, vai 2). 2×6+2=14 (4, vai 1). 3×6+1=19. → 1.944.",
  },
  momento04_explicacao: {
    titulo: "Algoritmo por 1 dígito",
    etapas: [
      {
        texto: "Vamos ver 2.457 × 4.",
        exemploReal: {
          contexto: "Coluna por coluna, tabuada do 4:",
          destaque: "= 9.828.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [2457, 4],
            resultado: 9828,
            passos: [
              { coluna: "U", fala: "7 × 4 = 28 · 8, vai 2.", digito: 8, vaiUm: 2 },
              { coluna: "D", fala: "5 × 4 = 20 · +2 = 22 · 2, vai 2.", digito: 2, vaiUm: 2 },
              { coluna: "C", fala: "4 × 4 = 16 · +2 = 18 · 8, vai 1.", digito: 8, vaiUm: 1 },
              { coluna: "UM", fala: "2 × 4 = 8 · +1 = 9.", digito: 9 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "1.235 × 6.",
    resposta: "7.410",
    passos: ["5×6=30 (0, vai 3).", "3×6+3=21 (1, vai 2).", "2×6+2=14 (4, vai 1).", "1×6+1=7."],
    contaPassoAPasso: {
      operacao: "mult",
      operandos: [1235, 6],
      resultado: 7410,
      passos: [
        { coluna: "U", fala: "5 × 6 = 30 · 0, vai 3.", digito: 0, vaiUm: 3 },
        { coluna: "D", fala: "3 × 6 + 3 = 21 · 1, vai 2.", digito: 1, vaiUm: 2 },
        { coluna: "C", fala: "2 × 6 + 2 = 14 · 4, vai 1.", digito: 4, vaiUm: 1 },
        { coluna: "UM", fala: "1 × 6 + 1 = 7.", digito: 7 },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 3.478 × 5.",
    dica: "Tabuada do 5.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "mult",
      operandos: [3478, 5],
      resultado: 17390,
      modo: "explicacao",
      passos: [
        { coluna: "U", fala: "8 × 5 = 40 · 0, vai 4.", digito: 0, vaiUm: 4 },
        { coluna: "D", fala: "7 × 5 + 4 = 39 · 9, vai 3.", digito: 9, vaiUm: 3 },
        { coluna: "C", fala: "4 × 5 + 3 = 23 · 3, vai 2.", digito: 3, vaiUm: 2 },
        { coluna: "UM", fala: "3 × 5 + 2 = 17 · 7, vai 1.", digito: 7, vaiUm: 1 },
        { coluna: "DM", fala: "0 + 1 = 1.", digito: 1 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 2.145 × 7.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "15.015" }, { nome: "14.015" }, { nome: "15.115" }],
      respostaCerta: "15.015",
      feedbackAcerto: "🎯",
      feedbackErro: "2.145 × 7 = 15.015.",
    },
  },
  momento08_aplicacao: {
    contexto: "Cada caixa tem 128 laranjas. 8 caixas.",
    problema: "Total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1.024" }, { nome: "1.014" }, { nome: "1.124" }],
      respostaCerta: "1.024",
      feedbackAcerto: "🎯 1.024 laranjas.",
      feedbackErro: "128 × 8 = 1.024.",
    },
  },
  momento09_revisao: {
    pontos: ["Tabuada + vai 1.", "Da direita pra esquerda.", "Some o 'vai 1' antes de continuar."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "234 × 5 = ?", opcoes: ["1.170", "1.070", "1.180"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1.170." },
      { pergunta: "1.428 × 3 = ?", opcoes: ["4.284", "4.184", "4.384"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "4.284." },
      { pergunta: "876 × 9 = ?", opcoes: ["7.884", "7.784", "7.984"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "7.884." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caixas do mercado",
    materiais: ["Papel"],
    passos: ["Escolha um produto vendido em caixas.", "Multiplique unidades por número de caixas."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
