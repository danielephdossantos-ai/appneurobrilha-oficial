import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Aula 5 — "Caixotes de 10: Agrupar pra Contar Mais Rápido"
 * Curso: Matemática 2º Ano · Unidade 1: A Feira dos Números
 *
 * Fecha a Unidade 1. Progressão travada (mesma da Aula 2/3/4):
 *   Aprendendo (Etapa 1: contar 1 a 1 é lento → Etapa 2: agrupar de
 *   10 em 10 → Etapa 3: ler 2 caixotes + 3 soltas = 23 → Etapa 4:
 *   dezena e unidade → Etapa 5: generalização com bananas) →
 *   3 Fases de prática (guiada 1 caixote+4, independente 3 caixotes+2,
 *   aplicação: qual é mais rápido) →
 *   Revisão + Quiz Final (5 perguntas) → Missão em Família.
 *
 * BNCC: EF02MA01 (ler e escrever até centenas),
 *       EF02MA03 (composição/decomposição em dezenas e unidades).
 */
export const aula05_agruparDe10: AulaV4 = {
  slug: "05-agrupar-de-10-caixotes",
  titulo: "Caixotes de 10: Agrupar pra Contar Mais Rápido",
  iconeTrilha: "📦",
  bncc: ["EF02MA01", "EF02MA03"],
  duracaoMin: 20,

  // ===== APRENDENDO (Etapas 1 → 5) ===================================

  momento01_motivacao: {
    titulo: "Tanta maçã! Como contar sem se perder?",
    historia:
      "Seu Coelho colheu 24 maçãs e pediu ajuda pra Brilha contar. Brilha começou uma por uma: 'um, dois, três...' e no meio se perdeu! Aí teve uma ideia genial: 'E se a gente juntar de 10 em 10 dentro de caixotes? Fica rapidinho!'",
    imagemUrl: brilha,
  },

  // Etapa 1 — Contar uma a uma é chato/lento (mostra 12 maçãs soltas)
  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Veja quantas maçãs Seu Coelho colocou na mesa. Toque em cada uma pra contar (vai ser demorado!):",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 12,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs tem na mesa?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Deu pra contar, mas foi devagar. Tem um jeito mais rápido de saber quanto tem quando é muita coisa?",
    pista:
      "Se a gente juntar sempre 10 maçãs num caixote, cada caixote 'vale 10'. Aí é só contar caixotes e as que sobram!",
    revelacao:
      "Isso! A gente AGRUPA de 10 em 10. Cada grupo de 10 é uma DEZENA. As que sobraram fora do caixote são as UNIDADES. Assim 12 vira '1 caixote + 2 soltas' = 12!",
  },

  // Etapas 2, 3, 4 e 5 — a explicação
  momento04_explicacao: {
    titulo: "Dezenas e unidades: o segredo dos caixotes",
    etapas: [
      // ---- Etapa 2 — Agrupar de 10 em 10 -----------------------
      {
        texto:
          "Etapa 2 — Vamos organizar essas 12 maçãs. Pegamos 10 e colocamos num caixote. Sobram 2 soltinhas.",
        exemplo:
          "1 caixote (que vale 10) + 2 maçãs soltas = 12 maçãs. Muito mais fácil de enxergar!",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 1, rotulo: "1 caixote de 10" },
          { imagemUrl: maca, tamanhoGrupo: 2, qtdGrupos: 1, rotulo: "2 soltas" },
        ],
      },
      // ---- Etapa 3 — 2 caixotes + 3 soltas = 23 ----------------
      {
        texto:
          "Etapa 3 — Agora Seu Coelho trouxe mais. Ficaram 2 caixotes de 10 e 3 maçãs soltas. Quanto dá?",
        exemplo:
          "2 caixotes = 20 (dez + dez). Mais 3 soltas = 23 maçãs no total. Contamos DEZENA + UNIDADE!",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 2, rotulo: "2 caixotes = 20" },
          { imagemUrl: maca, tamanhoGrupo: 3, qtdGrupos: 1, rotulo: "3 soltas" },
        ],
      },
      // ---- Etapa 4 — O nome dos lugares no número --------------
      {
        texto:
          "Etapa 4 — Todo número de 2 algarismos tem 2 lugares. O da direita é a UNIDADE (as soltas). O da esquerda é a DEZENA (os caixotes).",
        exemplo:
          "No número 23: o '2' quer dizer 2 dezenas (2 caixotes = 20). O '3' quer dizer 3 unidades (3 soltas). Junto: 20 + 3 = 23!",
      },
      // ---- Etapa 5 — Generalização com bananas -----------------
      {
        texto:
          "Etapa 5 — Funciona com qualquer fruta! Se a Dona Coruja tem 3 caixotes de bananas e 5 bananas soltas, ela tem 35 bananas.",
        exemplo:
          "Truque final: primeiro conte os CAIXOTES (cada um vale 10). Depois some as SOLTAS. Caixotes + soltas = número total.",
        agrupamentos: [
          { imagemUrl: banana, tamanhoGrupo: 10, qtdGrupos: 3, rotulo: "3 caixotes = 30" },
          { imagemUrl: banana, tamanhoGrupo: 5, qtdGrupos: 1, rotulo: "5 soltas" },
        ],
      },
    ],
  },

  // Brilha resolve 4 caixotes + 6 soltas = 46
  momento05_modelagem: {
    enunciado:
      "Brilha vai contar 4 caixotes de maçãs e 6 maçãs soltas pensando em voz alta:",
    passos: [
      "Primeiro olho os caixotes. São 4 caixotes.",
      "Cada caixote vale 10. Então: 10, 20, 30, 40. Os caixotes dão 40!",
      "Agora conto as soltas: 1, 2, 3, 4, 5, 6. São 6 soltas.",
      "Junto tudo: 40 (dos caixotes) + 6 (soltas) = 46 maçãs!",
      "No número 46: o '4' são as dezenas (caixotes) e o '6' são as unidades (soltas). Pronto!",
    ],
    resposta: "46 maçãs (4 dezenas + 6 unidades)",
    visualUrl: maca,
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [10, 10, 10, 10, 6],
      itemPlural: "maçãs",
    },
  },

  // ===== FATIA 2 — 3 FASES DE PRÁTICA =================================

  // Fase 1 — Guiada: 1 caixote + 4 soltas
  momento06_praticaGuiada: {
    enunciado:
      "Fase 1 — Vamos juntos! Seu Coelho arrumou 1 caixote de 10 maçãs e 4 maçãs soltas do lado. Quantas maçãs ele tem?",
    dica: "Um caixote sempre vale 10. Some com as soltas: 10 + 4 = quanto?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 1 caixote (10)" },
        { imagemUrl: maca, quantidade: 4, rotulo: "🍎 4 soltas" },
      ],
      pergunta: "Quantas maçãs no total?",
      opcoes: ["14", "10", "40"],
      correta: 0,
      feedbackAcerto:
        "🎉 Isso! 10 (do caixote) + 4 (soltas) = 14 maçãs. 1 dezena + 4 unidades = 14!",
      feedbackErro:
        "O caixote vale 10 e tem 4 soltas do lado. 10 + 4 = 14. Sempre: caixotes primeiro, soltas depois.",
    },
  },

  // Fase 2 — Independente: 3 caixotes + 2 soltas
  momento07_praticaIndependente: {
    enunciado:
      "Fase 2 — Agora é você! Dona Coruja tem 3 caixotes de bananas e 2 bananas soltas. Quantas bananas ela tem?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 10, rotulo: "📦 caixote 1" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦 caixote 2" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦 caixote 3" },
        { imagemUrl: banana, quantidade: 2, rotulo: "🍌 2 soltas" },
      ],
      pergunta: "Quantas bananas Dona Coruja tem?",
      opcoes: ["23", "32", "5"],
      correta: 1,
      feedbackAcerto:
        "🎉 Perfeito! 3 caixotes = 30 (10+10+10). Mais 2 soltas = 32 bananas. 3 dezenas + 2 unidades = 32!",
      feedbackErro:
        "Conte os caixotes: 10, 20, 30. Some as soltas: +2 = 32. O primeiro algarismo (3) são os caixotes, o segundo (2) são as soltas.",
    },
  },

  // Fase 3 — Aplicação: descobrir o número a partir da descrição
  momento08_aplicacao: {
    contexto:
      "Fase 3 — Problema da feira! Seu Coelho escreveu num papelzinho quantas maçãs ele vendeu hoje: '2 caixotes e 7 soltas'.",
    problema:
      "Qual é o número que Seu Coelho escreveu no papel?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 caixote 1" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 caixote 2" },
        { imagemUrl: maca, quantidade: 7, rotulo: "🍎 7 soltas" },
      ],
      pergunta: "Que número Seu Coelho vendeu?",
      opcoes: ["9", "72", "27"],
      correta: 2,
      feedbackAcerto:
        "🎉 Uau! 2 caixotes (20) + 7 soltas = 27. A DEZENA (caixotes) fica na frente: 2_. A UNIDADE (soltas) atrás: _7. Fica 27!",
      feedbackErro:
        "Truque: caixotes viram o PRIMEIRO algarismo, soltas viram o SEGUNDO. 2 caixotes + 7 soltas = 27 (não 72, porque só temos 2 caixotes).",
    },
  },

  momento09_revisao: {
    pontos: [
      "Revisão da aula: contar de 1 em 1 é lento quando é muita fruta.",
      "Agrupar de 10 em 10 (caixotes) deixa a contagem RÁPIDA.",
      "Cada caixote é uma DEZENA (vale 10). Cada solta é uma UNIDADE.",
      "No número: dezena na frente, unidade atrás. Ex.: 34 = 3 caixotes + 4 soltas.",
      "🎯 Agora um mini-desafio pra fechar a Unidade 1!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 caixote 1" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 caixote 2" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 caixote 3" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 caixote 4" },
        { imagemUrl: maca, quantidade: 1, rotulo: "🍎 1 solta" },
      ],
      pergunta: "Mini-desafio: 4 caixotes e 1 solta. Qual número é esse?",
      opcoes: ["14", "41", "5"],
      correta: 1,
      feedbackAcerto:
        "🎉 Boa! 4 caixotes = 40, mais 1 solta = 41. Dezena na frente, unidade atrás!",
      feedbackErro:
        "4 caixotes viram 4 dezenas (40). 1 solta é 1 unidade. Junto: 41.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      // 1 — muito fácil: 1 caixote + 5
      {
        pergunta:
          "Pergunta 1 de 5 — Seu Coelho tem 1 caixote de maçãs e 5 soltas. Quantas maçãs?",
        opcoes: ["6", "15", "51"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦 1 caixote" },
          { imagemUrl: maca, quantidade: 5, rotulo: "🍎 5 soltas" },
        ],
        feedbackAcerto:
          "🎉 Isso! 10 + 5 = 15. Uma dezena e cinco unidades formam 15.",
        feedbackErro:
          "O caixote vale 10, não 1. 10 + 5 = 15.",
      },
      // 2 — 2 caixotes + 6
      {
        pergunta:
          "Pergunta 2 de 5 — 2 caixotes de bananas e 6 bananas soltas. Quantas ao todo?",
        opcoes: ["26", "62", "8"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 6, rotulo: "🍌 soltas" },
        ],
        feedbackAcerto:
          "🎉 Perfeito! 20 + 6 = 26. Dois caixotes (2 dezenas) + 6 soltas.",
        feedbackErro:
          "Conte os caixotes: 10, 20. Mais 6 soltas: 26. Caixotes vêm primeiro no número.",
      },
      // 3 — do número pra dezenas/unidades: 38
      {
        pergunta:
          "Pergunta 3 de 5 — No número 38, quantos caixotes de 10 e quantas soltas?",
        opcoes: [
          "8 caixotes e 3 soltas",
          "3 caixotes e 8 soltas",
          "38 caixotes",
        ],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 8, rotulo: "🍎" },
        ],
        feedbackAcerto:
          "🎉 Boa! No 38, o '3' é a dezena (3 caixotes) e o '8' é a unidade (8 soltas).",
        feedbackErro:
          "Truque: o primeiro algarismo do 38 (o 3) são os caixotes. O segundo (o 8) são as soltas.",
      },
      // 4 — dezena redonda: 5 caixotes + 0
      {
        pergunta:
          "Pergunta 4 de 5 — Dona Coruja tem 5 caixotes cheinhos e NENHUMA solta. Qual número?",
        opcoes: ["5", "55", "50"],
        correta: 2,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        ],
        feedbackAcerto:
          "🎉 Isso! 5 caixotes = 50. Quando não tem nenhuma solta, o zero fica no lugar da unidade: 50.",
        feedbackErro:
          "5 caixotes valem 10+10+10+10+10 = 50. Sem soltas, colocamos 0 no fim: 50.",
      },
      // 5 — 4 caixotes + 3
      {
        pergunta:
          "Pergunta 5 de 5 — Seu Coelho vendeu 4 caixotes e 3 maçãs soltas. Qual número escrever?",
        opcoes: ["34", "43", "7"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 3, rotulo: "🍎" },
        ],
        feedbackAcerto:
          "🎉 Uau! 4 caixotes (40) + 3 soltas = 43. Você fechou a Unidade 1 com honra! 🏆",
        feedbackErro:
          "Caixotes na frente (4 dezenas = 40), soltas atrás (3 unidades). Fica 43, não 34.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📦 Caixote das Dezenas em Casa",
    materiais: [
      "Objetinhos pra contar (feijões, tampinhas, macarrão cru, blocos, botões — o que tiver aos montes)",
      "Potes, xícaras ou tigelas (cada um vai ser um 'caixote')",
      "Papel e lápis pra escrever o número final",
    ],
    passos: [
      "1) O adulto despeja um monte de objetos na mesa (entre 20 e 50).",
      "2) A criança conta 10 e coloca no primeiro pote. Depois mais 10 no segundo. Continua até sobrarem menos de 10.",
      "3) A criança diz em voz alta: 'Tenho X caixotes e Y soltos!' (ex.: '3 caixotes e 4 soltos').",
      "4) Junto com o adulto, escreve o número no papel: caixotes na frente, soltos atrás (ex.: 34).",
      "5) Repitam 3 vezes com quantidades diferentes. Bônus: peça pra criança 'ler' um número que o adulto escrever e montar com os potes (ex.: 27 = 2 caixotes + 7 soltos).",
    ],
    registro:
      "📸 Foto dos potes (caixotes) alinhados, as soltas do lado, e o número escrito no papel embaixo (ex.: '📦📦📦 + 🫘🫘🫘🫘 = 34').",
  },

  recompensa: {
    xp: 180,
    moedas: 90,
    medalha: "Mestre(a) dos Caixotes",
  },
};
