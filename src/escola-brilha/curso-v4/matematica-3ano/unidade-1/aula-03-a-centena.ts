import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * Aula 3 — "A Centena Nasce"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: agrupar 10 dezenas → 1 CENTENA (troca 10 por 1 na próxima casa).
 * Consolida o mecanismo que sustentará adição/subtração com reagrupamento.
 * BNCC: EF03MA02.
 */
export const aula03_aCentena: AulaV4 = {
  slug: "03-a-centena",
  titulo: "A Centena Nasce",
  iconeTrilha: "🏢",
  bncc: ["EF03MA02"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "10 caixotes viram 1 prédio!",
    historia:
      "Brilha chegou no galpão da Prefeita e viu 10 caixotes de bananas empilhados. A Prefeita gritou: 'Empilha os 10 e me traz UM prédio!' Brilha se perguntou: 10 caixotes viram 1 prédio? Como assim?",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Toque em cada caixote empilhado (cada um tem 10 bananas):",
    cenas: [
      { tipo: "texto", texto: "📦 = 10 · 10 caixotes empilhados formam um PRÉDIO 🏢" },
    ],
    interacao: {
      tipo: "tapContar",
      imagemUrl: banana,
      quantidade: 10,
      itemPlural: "caixotes",
      pergunta: "Quantos caixotes até virar 1 prédio?",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Se cada caixote tem 10 bananas, quantas bananas tem 1 prédio?",
    pista: "10 caixotes × 10 bananas cada = ?",
    revelacao:
      "1 CENTENA = 100. É a troca mágica: 10 dezenas SOMEM e viram 1 centena. É por isso que a próxima casa da placa vale 10 vezes mais.",
  },

  momento04_explicacao: {
    titulo: "A Troca Mágica: 10 vira 1 (na casa da frente)",
    etapas: [
      {
        texto: "Comecei com 9 caixotes (9 dezenas = 90). Chegou mais 1 caixote → 10 caixotes.",
        exemplo: "9 dezenas + 1 dezena = 10 dezenas.",
      },
      {
        texto:
          "Não posso ter 10 dezenas soltas! Amarro os 10 e viram 1 PRÉDIO (centena).",
        exemplo: "10 dezenas → 1 centena. A casa das dezenas volta pro 0.",
        agrupamentos: [
          { imagemUrl: banana, tamanhoGrupo: 10, qtdGrupos: 10, rotulo: "10 📦 → 1 🏢" },
        ],
      },
      {
        texto: "A mesma regra vale em toda troca: 10 iguais viram 1 do próximo tamanho.",
        exemplo: "10 unidades → 1 dezena · 10 dezenas → 1 centena.",
      },
      {
        texto: "Por isso a placa CDU só tem dígitos de 0 a 9. O 10 SEMPRE vira 1 na próxima casa.",
        exemplo: "Nunca escreve 'D=10' — vira C=1.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha tem 12 caixotes de maçãs. Como fica a placa?",
    passos: [
      "12 caixotes = 12 dezenas.",
      "Amarro 10 → viram 1 PRÉDIO. Agora tenho 1 prédio + 2 caixotes.",
      "Placa: Centena = 1, Dezena = 2, Unidade = 0.",
      "Número: 120.",
      "🏢📦📦 = 120!",
    ],
    resposta: "120",
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [100, 10, 10],
      itemPlural: "maçãs",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Brilha tem 15 caixotes de bananas. Qual é a placa?",
    dica: "10 caixotes viram 1 prédio; sobram 5.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "🏢" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
      ],
      pergunta: "15 caixotes = ?",
      opcoes: ["105", "150", "115"],
      correta: 1,
      feedbackAcerto: "🎉 15 caixotes = 1 prédio + 5 caixotes = 100 + 50 = 150.",
      feedbackErro: "10 caixotes viram 1 prédio (100). Sobram 5 caixotes (50). 150.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! 23 caixotes de maçãs. Qual é o número?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "🏢×2" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦×3" },
      ],
      pergunta: "23 caixotes valem quanto?",
      opcoes: ["203", "230", "2.030"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 20 caixotes = 2 prédios (200). Sobram 3 (30). Total 230.",
      feedbackErro: "20 caixotes = 200. 3 caixotes = 30. 200 + 30 = 230.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita conferiu o depósito: 9 caixotes e chegou 1 novo. O ajudante escreveu '10 caixotes'. A Prefeita disse: 'Errado! Reescreve com PRÉDIO.'",
    problema: "Como o ajudante deve escrever?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "10 caixotes", imagemUrl: banana },
        { nome: "1 prédio, 0 caixotes", imagemUrl: brilha },
        { nome: "1 caixote, 0 prédios", imagemUrl: coruja },
      ],
      respostaCerta: "1 prédio, 0 caixotes",
      feedbackAcerto:
        "🎯 Isso! 10 caixotes SEMPRE viram 1 prédio. Aí a casa dos caixotes fica com 0.",
      feedbackErro:
        "A regra: 10 dezenas → 1 centena. Vira '1 prédio, 0 caixotes'. Placa: 100.",
    },
  },

  momento09_revisao: {
    pontos: [
      "10 UNIDADES viram 1 dezena.",
      "10 DEZENAS viram 1 CENTENA.",
      "Cada casa da placa só aceita 0 a 9. O 10 SEMPRE vira 1 na casa da frente.",
      "🎮 Vamos brincar de Empilhar Prédios!",
    ],
    miniDesafio: {
      tipo: "minijogoColheita",
      imagemUrl: banana,
      itemPlural: "bananas",
      alvoInicial: 90,
      chegaramMais: 10,
      duracaoSeg: 90,
      feedbackAcerto: "🎉 90 + 10 = 100! 10 caixotes viraram 1 PRÉDIO. 🏢",
      feedbackErro: "9 caixotes (90) + 1 caixote (10) = 10 caixotes → 1 prédio (100).",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "10 dezenas equivalem a:",
        opcoes: ["1 unidade", "1 centena", "10 centenas"],
        correta: 1,
        feedbackAcerto: "🎉 10 dezenas = 1 CENTENA = 100.",
        feedbackErro: "10 iguais viram 1 do próximo. 10 dezenas → 1 centena.",
      },
      {
        pergunta: "Se juntar 18 caixotes de 10 maçãs, quantas maçãs no total?",
        opcoes: ["108", "118", "180"],
        correta: 2,
        feedbackAcerto: "🎉 18 caixotes = 1 prédio + 8 caixotes = 100 + 80 = 180.",
        feedbackErro: "10 caixotes viram 1 prédio (100). Restam 8 caixotes (80). 180.",
      },
      {
        pergunta: "Quantos prédios cabem em 200?",
        opcoes: ["2", "20", "200"],
        correta: 0,
        feedbackAcerto: "Isso! 200 = 2 centenas = 2 prédios.",
        feedbackErro: "Cada prédio = 100. 200 ÷ 100 = 2 prédios.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "10 vira 1",
    materiais: ["Palitos de fósforo, macarrão ou canudos (uns 100)", "Elástico ou barbante"],
    passos: [
      "Faça montinhos de 10 palitos (cada um é uma DEZENA).",
      "Quando conseguir 10 montinhos, amarre todos juntos: essa é 1 CENTENA (prédio).",
      "Peça um número (ex.: 143). Monte: 1 prédio + 4 montinhos + 3 soltos.",
      "Faça 3 números diferentes.",
    ],
    registro: "📸 Foto do 1º prédio pronto.",
  },
  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
