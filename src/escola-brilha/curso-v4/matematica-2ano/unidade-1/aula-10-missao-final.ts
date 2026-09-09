import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Aula 10 — "Missão Final da Feira"
 * Curso: Matemática 2º Ano · Unidade 1: A Feira dos Números
 *
 * Encerramento narrativo. 5 desafios em sequência, cada um resgatando
 * uma habilidade da unidade:
 *   1) contar frutas · 2) comparar cestas · 3) montar dezenas ·
 *   4) resolver 23 + 15 · 5) problema completo.
 * Conquista: 🏆 Guardião(ã) da Feira dos Números.
 * Desbloqueio: Unidade 2 — As Casas dos Números.
 *
 * BNCC: EF02MA01, EF02MA03, EF02MA04, EF02MA05, EF02MA06.
 */
export const aula10_missaoFinal: AulaV4 = {
  slug: "10-missao-final-da-feira",
  titulo: "Missão Final da Feira",
  iconeTrilha: "🎪",
  bncc: ["EF02MA01", "EF02MA03", "EF02MA04", "EF02MA05", "EF02MA06"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A Feira vai abrir!",
    historia:
      "A Feira dos Números vai abrir daqui a pouco e Brilha precisa organizar TUDO: contar as frutas, comparar as cestas, montar os caixotes, somar os totais e resolver um pedido especial da freguesa. Só quem passar por todos os desafios vira GUARDIÃO(Ã) DA FEIRA e destranca a próxima Unidade!",
    imagemUrl: brilha,
  },

  // Desafio 1 — CONTAR frutas (14 maçãs)
  momento02_exploracao: {
    instrucao:
      "Desafio 1 de 5 — CONTAR frutas. Brilha precisa saber quantas maçãs tem na barraca. Toque em cada uma:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 14,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs tem na barraca?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "A feira vai abrir. Você lembra de tudo que aprendeu nesta unidade?",
    pista:
      "Contar, comparar, montar dezenas, somar e resolver problemas.",
    revelacao:
      "Vamos passar por cada desafio e no final você vira GUARDIÃO(Ã) DA FEIRA! Pronto(a)?",
  },

  momento04_explicacao: {
    titulo: "Como funciona a missão",
    etapas: [
      {
        texto:
          "A missão tem 5 desafios em sequência. Cada um cobra UMA coisa que você já aprendeu.",
        exemplo:
          "1) Contar · 2) Comparar · 3) Montar dezenas · 4) Somar · 5) Problema completo.",
      },
      {
        texto:
          "Você não precisa acertar tudo de primeira. Se errar, Brilha explica e você tenta de novo.",
        exemplo: "O importante é ir até o fim!",
      },
      {
        texto:
          "No final: 🏆 medalha de Guardião(ã), XP em dobro e a Unidade 2 destrancada!",
        exemplo: "Unidade 2 é 'As Casas dos Números'.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha vai treinar antes de começar, resolvendo um exemplo de cada desafio:",
    passos: [
      "1) Contar: '1,2,3... 14 maçãs!'",
      "2) Comparar: '8 é maior que 5. 8 > 5.'",
      "3) Dezena: '3 caixotes + 2 soltas = 32.'",
      "4) Somar: '23 + 15 → uni 3+5=8, dez 2+1=3 → 38.'",
      "5) Problema: 'Tinha 10 e ganhou 5 → 15 bananas.'",
    ],
    resposta: "Pronto pra missão!",
    visualUrl: brilha,
  },

  // Desafio 2 — COMPARAR cestas
  momento06_praticaGuiada: {
    enunciado:
      "Desafio 2 de 5 — COMPARAR cestas. Seu Coelho tem 12 maçãs e Dona Coruja tem 15. Quem trouxe mais?",
    dica: "15 vem depois do 12 na fila dos números → 15 é maior.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "🐰 📦" },
        { imagemUrl: maca, quantidade: 2, rotulo: "🐰 🍎" },
        { imagemUrl: maca, quantidade: 10, rotulo: "🦉 📦" },
        { imagemUrl: maca, quantidade: 5, rotulo: "🦉 🍎" },
      ],
      pergunta: "Quem trouxe MAIS maçãs?",
      opcoes: ["Coelho (12)", "Coruja (15)", "Iguais"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 15 > 12. Dona Coruja trouxe mais.",
      feedbackErro: "15 é maior que 12 (vem depois). Coruja venceu.",
    },
  },

  // Desafio 3 — MONTAR dezenas
  momento07_praticaIndependente: {
    enunciado:
      "Desafio 3 de 5 — MONTAR DEZENAS. Brilha tem 4 caixotes de bananas e 2 soltas. Qual número?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 2, rotulo: "🍌" },
      ],
      pergunta: "4 caixotes + 2 soltas = ?",
      opcoes: ["24", "42", "6"],
      correta: 1,
      feedbackAcerto: "🎉 Perfeito! 4 caixotes = 40. Mais 2 soltas = 42.",
      feedbackErro: "Caixotes na frente (4), soltas atrás (2). Fica 42.",
    },
  },

  // Desafio 4 — RESOLVER 23 + 15
  momento08_aplicacao: {
    contexto:
      "Desafio 4 de 5 — SOMAR. A barraca da manhã vendeu 23 maçãs. A da tarde vendeu 15.",
    problema:
      "Quantas maçãs a feira vendeu no dia? (23 + 15)",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 manhã" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 manhã" },
        { imagemUrl: maca, quantidade: 3, rotulo: "🍎 manhã" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 tarde" },
        { imagemUrl: maca, quantidade: 5, rotulo: "🍎 tarde" },
      ],
      pergunta: "Total do dia (23 + 15)?",
      opcoes: ["28", "38", "48"],
      correta: 1,
      feedbackAcerto:
        "🎉 Uau! 23 + 15 = 38. Uni 3+5=8, dez 2+1=3.",
      feedbackErro:
        "Some soltas (3+5=8) e caixotes (2+1=3). Fica 38.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Você já contou, comparou, montou dezenas e somou. 4 de 5 desafios!",
      "🎯 ÚLTIMO DESAFIO: um problema completo, do jeito que a freguesa da feira faz.",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 2, rotulo: "🍌" },
        { imagemUrl: banana, quantidade: 5, rotulo: "🍌 +" },
      ],
      pergunta:
        "Desafio 5 — 'Dona Coruja tinha 12 bananas e comprou mais 5. Quantas tem agora?'",
      opcoes: ["7", "17", "22"],
      correta: 1,
      feedbackAcerto:
        "🎉 MISSÃO CUMPRIDA! 12 + 5 = 17. Você é GUARDIÃO(Ã) DA FEIRA! 🏆",
      feedbackErro:
        "Soltas: 2+5=7. Caixote continua 1. Fica 17 bananas.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      // Quiz final — o "ritual de encerramento" com 5 perguntas curtas
      {
        pergunta: "Ritual 1 de 5 — Quantas maçãs? (conte tocando)",
        opcoes: ["10", "11", "12"],
        correta: 1,
        visualGrupos: [{ imagemUrl: maca, quantidade: 11, rotulo: "🍎" }],
        feedbackAcerto: "🎉 Isso! 11 maçãs.",
        feedbackErro: "Conte com calma: 1,2,3,4,5,6,7,8,9,10,11. São 11.",
      },
      {
        pergunta: "Ritual 2 de 5 — 14 __ 9. Qual sinal?",
        opcoes: ["14 > 9", "14 < 9", "14 = 9"],
        correta: 0,
        feedbackAcerto: "🎉 Perfeito! 14 é maior. 14 > 9.",
        feedbackErro: "14 vem depois do 9. Boca aberta pro 14: 14 > 9.",
      },
      {
        pergunta:
          "Ritual 3 de 5 — Qual número tem 3 caixotes e 6 soltas?",
        opcoes: ["9", "36", "63"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 6, rotulo: "🍎" },
        ],
        feedbackAcerto: "🎉 Boa! 3 dezenas + 6 unidades = 36.",
        feedbackErro: "Caixotes = dezena (3), soltas = unidade (6). Fica 36.",
      },
      {
        pergunta: "Ritual 4 de 5 — 24 + 13 = ?",
        opcoes: ["27", "37", "47"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 3, rotulo: "🍌" },
        ],
        feedbackAcerto: "🎉 Isso! Uni 4+3=7, dez 2+1=3. Total 37.",
        feedbackErro: "Some soltas (4+3=7) e caixotes (2+1=3). Fica 37.",
      },
      {
        pergunta:
          "Ritual 5 de 5 — 'Seu Coelho tinha 20 maçãs e ganhou mais 15. Quantas tem?'",
        opcoes: ["25", "35", "45"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 5, rotulo: "🍎" },
        ],
        feedbackAcerto:
          "🎉 UAU! 20 + 15 = 35. Você fechou a Unidade 1 como GUARDIÃO(Ã) DA FEIRA! Unidade 2 destravada! 🏆🎪",
        feedbackErro:
          "Dezenas: 2+1=3. Unidades: 0+5=5. Total: 35.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🎪 A Feira dos Números em Casa",
    materiais: [
      "Frutas, brinquedos ou objetos pra contar",
      "Cartazes ou pedaços de papel (barraquinhas)",
      "Papel e lápis pra escrever preços/quantidades",
    ],
    passos: [
      "1) A família monta uma 'mini-feira' com 2-3 barraquinhas (cada barraca vende uma coisa).",
      "2) A criança conta a mercadoria de cada barraca em voz alta.",
      "3) O adulto 'compra' de uma barraca e depois de outra. A criança SOMA os totais.",
      "4) Comparam as barracas: qual vendeu mais? Escrevem no papel com >, < ou =.",
      "5) No final, a família dá uma medalha 'Guardião(ã) da Feira' pra criança — desenhada ou de papelão.",
    ],
    registro:
      "📸 Foto da criança com a medalha 'Guardião(ã) da Feira dos Números' na mão.",
  },

  recompensa: {
    xp: 300,
    moedas: 150,
    medalha: "Guardião(ã) da Feira dos Números",
  },
};
