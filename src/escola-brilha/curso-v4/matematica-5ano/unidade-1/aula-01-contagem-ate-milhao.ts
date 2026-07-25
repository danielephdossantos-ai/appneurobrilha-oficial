import type { AulaV4 } from "../../types";

export const aula01_contagemAteMilhao: AulaV4 = {
  slug: "u1-01-contagem-ate-milhao",
  titulo: "Contando até 1.000.000",
  iconeTrilha: "🏛️",
  bncc: ["EF05MA01"],
  duracaoMin: 22,
  metodologias: ["cpa", "kamii", "skemp"],

  momento01_motivacao: {
    titulo: "Bem-vindo(a) ao IMPÉRIO!",
    historia:
      "{NOME}, dez reinos se juntaram e formaram um IMPÉRIO. Cada reino tem 100.000 moradores — o Império tem 1.000.000 (um milhão). Brilha precisa aprender a ler esse gigante sem perder um zero.",
  },
  momento02_exploracao: {
    instrucao: "Repare como os números pulam de 100.000 em 100.000.",
    cenas: [
      { tipo: "texto", texto: "100.000 · 200.000 · 300.000 · 400.000 · 500.000 · 600.000 · 700.000 · 800.000 · 900.000 · 1.000.000.", destaque: true },
      { tipo: "texto", texto: "10 saltos de 100 mil = 1 milhão. Aparecem 2 casas novas à esquerda: Dezena de Milhar (DM) e Centena de Milhar (CM)." },
      { tipo: "texto", texto: "Um número até 999.999 mora em 6 casas: CM · DM · UM · C · D · U.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que 425.318 é MENOR que 452.318 se usam os mesmos algarismos?",
    pista: "Olhe da esquerda pra direita — a primeira casa que muda decide.",
    revelacao: "O algarismo mais à esquerda vale mais. Em 452.318 tem 5 na DEZENA DE MILHAR (50.000); em 425.318 tem 2 (20.000).",
  },
  momento04_explicacao: {
    titulo: "Ler um número de 6 algarismos com a CONTA junto",
    etapas: [
      {
        texto: "Vamos ver 325.478 e confirmar somando as partes.",
        exemploReal: {
          contexto: "O Império registrou 325.478 pessoas no censo:",
          casasValor: { numero: 325478, mostrarDecomposicao: true, extenso: "trezentos e vinte e cinco mil, quatrocentos e setenta e oito" },
          destaque: "300.000 + 25.000 + 400 + 78 = 325.478.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [300000, 25000, 478],
            resultado: 325478,
            passos: [
              { coluna: "U", fala: "0 + 0 + 8 = 8.", digito: 8 },
              { coluna: "D", fala: "0 + 0 + 7 = 7.", digito: 7 },
              { coluna: "C", fala: "0 + 0 + 4 = 4.", digito: 4 },
              { coluna: "UM", fala: "0 + 5 + 0 = 5.", digito: 5 },
              { coluna: "DM", fala: "0 + 2 + 0 = 2.", digito: 2 },
              { coluna: "CM", fala: "3 + 0 + 0 = 3.", digito: 3 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Some as populações: capital 240.000 + interior 135.470.",
    resposta: "375.470",
    passos: ["U: 0+0=0.", "D: 0+7=7.", "C: 0+4=4.", "UM: 0+5=5.", "DM: 4+3=7.", "CM: 2+1=3."],
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 214.320 + 132.415.",
    dica: "Comece pelas unidades.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [214320, 132415],
      resultado: 346735,
      modo: "explicacao",
      passos: [
        { coluna: "U", fala: "0 + 5 = 5.", digito: 5 },
        { coluna: "D", fala: "2 + 1 = 3.", digito: 3 },
        { coluna: "C", fala: "3 + 4 = 7.", digito: 7 },
        { coluna: "UM", fala: "4 + 2 = 6.", digito: 6 },
        { coluna: "DM", fala: "1 + 3 = 4.", digito: 4 },
        { coluna: "CM", fala: "2 + 1 = 3.", digito: 3 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 315.240 + 234.135.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [315240, 234135],
      resultado: 549375,
      modo: "pratica",
      perguntaFinal: "Total?",
      opcoes: [549375, 549275, 559375],
      feedbackAcerto: "🎯 549.375!",
      feedbackErro: "Coluna por coluna: 549.375.",
      passos: [
        { coluna: "U", fala: "0 + 5 = 5.", digito: 5 },
        { coluna: "D", fala: "4 + 3 = 7.", digito: 7 },
        { coluna: "C", fala: "2 + 1 = 3.", digito: 3 },
        { coluna: "UM", fala: "5 + 4 = 9.", digito: 9 },
        { coluna: "DM", fala: "1 + 3 = 4.", digito: 4 },
        { coluna: "CM", fala: "3 + 2 = 5.", digito: 5 },
      ],
    },
  },
  momento08_aplicacao: {
    contexto: "O escriba imperial precisa escrever 'quatrocentos mil e sete' num pergaminho.",
    problema: "Como se escreve?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "400.007" }, { nome: "400.070" }, { nome: "40.007" }],
      respostaCerta: "400.007",
      feedbackAcerto: "🎯 400.007! Zeros seguram DM, UM, C e D.",
      feedbackErro: "6 casas: 4 (CM) · 0 (DM) · 0 (UM) · 0 (C) · 0 (D) · 7 (U) = 400.007.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Números até 999.999 têm 6 casas: CM · DM · UM · C · D · U.",
      "Cada casa vale 10× a de sua direita.",
      "1.000.000 = 10 × 100.000. Abre a 7ª casa.",
      "Todo M/C/D/U só faz sentido junto com a CONTA.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Em 528.176, quanto vale o algarismo 5?", opcoes: ["5.000", "50.000", "500.000"], correta: 2, feedbackAcerto: "🎉 5 na CM = 500.000.", feedbackErro: "É a casa mais à esquerda — CM." },
      { pergunta: "Como se escreve 'trezentos mil e cinquenta'?", opcoes: ["300.050", "300.500", "30.050"], correta: 0, feedbackAcerto: "🎉 300.050.", feedbackErro: "6 casas, DM e UM zerados: 300.050." },
      { pergunta: "215.340 + 132.220 = ?", opcoes: ["347.560", "348.560", "347.550"], correta: 0, feedbackAcerto: "🎉 347.560.", feedbackErro: "Coluna a coluna: 347.560." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caçada aos números de 6 algarismos",
    materiais: ["Caderno", "Lápis"],
    passos: ["Ache 3 números de 6 algarismos (população, código, valor de casa).", "Escreva por extenso.", "Some dois deles no papel."],
    registro: "📸 Foto do caderno.",
  },
  recompensa: { xp: 140, moedas: 75, medalha: "Aprendiz do Império" },
};
