import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * Aula 2 — "Valor Posicional (C · D · U)"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: cada dígito muda de VALOR conforme sua POSIÇÃO. O 2 em 234
 * vale 200; em 24 vale 20; em 2 vale 2.
 * BNCC: EF03MA02 (composição/decomposição por ordens).
 */
export const aula02_valorPosicional: AulaV4 = {
  slug: "02-valor-posicional",
  titulo: "O Endereço dos Números",
  iconeTrilha: "🏷️",
  bncc: ["EF03MA02"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Cada número tem um ENDEREÇO",
    historia:
      "Brilha viu uma placa esquisita: '234'. A Prefeita explicou: 'Cada dígito mora numa POSIÇÃO diferente da placa. Onde ele mora muda o valor dele!' O 2 pode valer 200, ou 20, ou 2 — depende do endereço.",
    imagemUrl: coruja,
  },

  momento02_exploracao: {
    instrucao:
      "Olhe estas duas placas. Tem o dígito 3 nas duas, mas ele vale coisas diferentes:",
    cenas: [
      { tipo: "texto", texto: "Placa A: 3   →   3 vale 3 (unidade)" },
      { tipo: "texto", texto: "Placa B: 300 →   3 vale 300 (centena)", destaque: true },
      { tipo: "texto", texto: "Mesmo dígito, valor diferente!" },
    ],
    interacao: {
      tipo: "tapContar",
      imagemUrl: banana,
      quantidade: 13,
      itemPlural: "bananas",
      pergunta: "Conte as bananas (o 1 e o 3 juntos formam 13):",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Como o mesmo dígito pode valer coisas diferentes?",
    pista: "Olha a POSIÇÃO dele. Existe o lugar das unidades, das dezenas e das centenas.",
    revelacao:
      "Da direita pra esquerda: UNIDADE · DEZENA · CENTENA. Cada casa vale 10 vezes MAIS que a de antes.",
  },

  momento04_explicacao: {
    titulo: "Placa CDU: 3 casas, 3 tamanhos",
    etapas: [
      {
        texto: "Casa da UNIDADE (à direita): morador solto. Cada um vale 1.",
        exemplo: "'4' na casa da unidade = 4.",
      },
      {
        texto: "Casa da DEZENA (meio): cada um vale 10.",
        exemplo: "'3' na casa da dezena = 30.",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 3, rotulo: "📦📦📦 = 30" },
        ],
      },
      {
        texto: "Casa da CENTENA (à esquerda): cada um vale 100.",
        exemplo: "'2' na casa da centena = 200.",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 10, rotulo: "🏢 = 100" },
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 10, rotulo: "🏢 = 100" },
        ],
      },
      {
        texto: "Pra decompor: some cada casa com seu valor.",
        exemplo: "234 = 200 + 30 + 4.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha vai decompor o número 456:",
    passos: [
      "Olho a casa das CENTENAS: dígito 4. Vale 4 × 100 = 400.",
      "Olho a casa das DEZENAS: dígito 5. Vale 5 × 10 = 50.",
      "Olho a casa das UNIDADES: dígito 6. Vale 6.",
      "Junto tudo: 400 + 50 + 6 = 456.",
      "Decompus! 🏷️",
    ],
    resposta: "456 = 400 + 50 + 6",
    colecaoVisual: {
      imagemUrl: banana,
      grupos: [100, 100, 100, 100, 10, 10, 10, 10, 10, 6],
      itemPlural: "bananas",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! Qual é a decomposição de 372?",
    dica: "3 na centena vale 300, 7 na dezena vale 70, 2 na unidade vale 2.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "🏢×3" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦×7" },
        { imagemUrl: maca, quantidade: 2, rotulo: "🍎×2" },
      ],
      pergunta: "372 = ?",
      opcoes: ["3 + 7 + 2", "30 + 70 + 2", "300 + 70 + 2"],
      correta: 2,
      feedbackAcerto: "🎉 Isso! 300 + 70 + 2 = 372.",
      feedbackErro: "Centena vale 100. 3 centenas = 300. Fica 300 + 70 + 2.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! Quanto vale o dígito 5 no número 158?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "🏢" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦×5" },
        { imagemUrl: banana, quantidade: 8, rotulo: "🍌" },
      ],
      pergunta: "Em 158, o 5 vale...",
      opcoes: ["5", "50", "500"],
      correta: 1,
      feedbackAcerto: "🎉 Boa! O 5 mora na casa da dezena → vale 50.",
      feedbackErro: "Da direita: 8 (unidade), 5 (DEZENA), 1 (centena). 5 na dezena = 50.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita pediu pra Brilha escrever o número que tem: 6 centenas, 0 dezenas e 3 unidades.",
    problema: "Que número é esse?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o número certo:",
      opcoes: [
        { nome: "63", imagemUrl: coruja },
        { nome: "603", imagemUrl: brilha },
        { nome: "630", imagemUrl: maca },
      ],
      respostaCerta: "603",
      feedbackAcerto:
        "🎯 Isso! 600 + 0 + 3 = 603. O zero mostra que a casa da dezena está VAZIA — mas continua lá.",
      feedbackErro:
        "6 centenas = 600. 0 dezena. 3 unidade. Fica 603 (o zero segura o lugar da dezena).",
    },
  },

  momento09_revisao: {
    pontos: [
      "Cada dígito tem uma CASA: unidade, dezena, centena.",
      "O VALOR do dígito depende da casa onde ele mora.",
      "234 = 200 + 30 + 4 (decomposição).",
      "O ZERO segura o lugar de uma casa vazia (ex.: 603).",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "🏢×4" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦×0" },
        { imagemUrl: maca, quantidade: 7, rotulo: "🍎" },
      ],
      pergunta: "4 centenas + 0 dezenas + 7 unidades = ?",
      opcoes: ["47", "407", "470"],
      correta: 1,
      feedbackAcerto: "🎉 Perfeito! 400 + 0 + 7 = 407.",
      feedbackErro: "0 dezenas mantém o lugar vazio: 400, dezena 0, 7 → 407.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em 528, quanto vale o 5?",
        opcoes: ["5", "50", "500"],
        correta: 2,
        feedbackAcerto: "🎉 500. O 5 está na casa da CENTENA.",
        feedbackErro: "Da esquerda: 5 é centena → vale 500.",
      },
      {
        pergunta: "Decomposição de 719?",
        opcoes: ["7 + 1 + 9", "70 + 10 + 9", "700 + 10 + 9"],
        correta: 2,
        feedbackAcerto: "Isso! 700 + 10 + 9 = 719.",
        feedbackErro: "7 centenas = 700, 1 dezena = 10, 9 unidades = 9. 700 + 10 + 9.",
      },
      {
        pergunta: "5 centenas + 4 unidades (sem dezenas) = ?",
        opcoes: ["54", "504", "540"],
        correta: 1,
        feedbackAcerto: "🎉 504. O zero segura a casa da dezena.",
        feedbackErro: "500 + 0 + 4 → 504. A dezena fica com 0.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça-Placas em Casa",
    materiais: ["Uma caixa de sapato", "Papel", "Caneta"],
    passos: [
      "Escreva na caixa: [___] [___] [___] (Centena · Dezena · Unidade).",
      "Peça um número de 3 dígitos pra alguém (ex.: 385).",
      "Escreva cada dígito em UM papelzinho e coloque na casa certa.",
      "Fale em voz alta: '3 vale 300, 8 vale 80, 5 vale 5. Total 385.'",
      "Faça 5 números diferentes.",
    ],
    registro: "📸 Foto da caixa com o último número montado.",
  },
};
