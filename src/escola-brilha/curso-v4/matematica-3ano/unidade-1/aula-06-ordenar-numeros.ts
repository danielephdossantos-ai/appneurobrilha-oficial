import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * Aula 6 — "Ordenar Números (crescente/decrescente)"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: colocar 3-5 números em ordem crescente e decrescente,
 * aplicando a comparação CDU aula após aula.
 * BNCC: EF03MA02, EF03MA03.
 */
export const aula06_ordenarNumeros: AulaV4 = {
  slug: "06-ordenar-numeros",
  titulo: "A Fila dos Números",
  iconeTrilha: "🚶‍♀️",
  bncc: ["EF03MA02", "EF03MA03"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Uma fila bagunçada!",
    historia:
      "Na escola da Cidade, 5 turmas trouxeram cestas com quantidades diferentes: 245, 132, 500, 480 e 199. A Prefeita gritou: 'Coloquem em ordem, do menor pro maior, senão fica bagunça!' Brilha topou o desafio.",
    imagemUrl: coruja,
  },

  momento02_exploracao: {
    instrucao: "Pense: qual desses três é o MENOR?",
    cenas: [
      { tipo: "texto", texto: "A: 120  ·  B: 230  ·  C: 90" },
      { tipo: "texto", texto: "Dica: quem tem MENOS centena vem primeiro.", destaque: true },
    ],
    interacao: {
      tipo: "tapContar",
      imagemUrl: banana,
      quantidade: 9,
      itemPlural: "bananas",
      pergunta: "C = 90 (menor). Toque as 9 (o dígito da dezena):",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Como colocar VÁRIOS números em ordem sem se perder?",
    pista: "Compara 2 a 2 e vai formando a fila.",
    revelacao:
      "TRUQUE: acha o MENOR e coloca na frente. Depois acha o menor dos que sobraram. Repete até acabar. É a 'fila do menor'!",
  },

  momento04_explicacao: {
    titulo: "Duas ordens: crescente ↑ e decrescente ↓",
    etapas: [
      {
        texto: "CRESCENTE = do menor pro maior (subindo escada 🪜⬆️).",
        exemplo: "12 < 34 < 56.",
      },
      {
        texto: "DECRESCENTE = do maior pro menor (descendo escada ⬇️).",
        exemplo: "56 > 34 > 12.",
      },
      {
        texto:
          "Pra ordenar 4 números: encontre o menor (ou maior) e vai eliminando.",
        exemplo:
          "132, 199, 245: menor é 132 (C=1, D=3). Depois 199. Depois 245. Fila: 132 < 199 < 245.",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 3, rotulo: "132 · C=1" },
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 9, rotulo: "199 · C=1" },
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 4, rotulo: "245 · C=2" },
        ],
      },
      {
        texto: "Use o sinal '<' pra escrever a fila crescente e '>' pra decrescente.",
        exemplo: "Crescente: A < B < C · Decrescente: C > B > A.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha ordena 245, 132, 500 em ORDEM CRESCENTE:",
    passos: [
      "Compara centenas: 132 tem C=1, 245 tem C=2, 500 tem C=5.",
      "Menor centena = 132 (vai primeiro).",
      "Depois vem 245 (C=2).",
      "Por último, 500 (C=5).",
      "Fila: 132 < 245 < 500. Pronto!",
    ],
    resposta: "132 < 245 < 500",
    visualUrl: brilha,
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! Ordene em CRESCENTE: 410, 104, 401.",
    dica: "104 tem C=1. Os outros dois têm C=4 — desempate na dezena.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "104" },
        { imagemUrl: banana, quantidade: 100, rotulo: "401" },
        { imagemUrl: banana, quantidade: 100, rotulo: "410" },
      ],
      pergunta: "Crescente:",
      opcoes: ["104 < 401 < 410", "104 < 410 < 401", "401 < 104 < 410"],
      correta: 0,
      feedbackAcerto:
        "🎉 Isso! 104 (menor C). Depois 401 (D=0) e 410 (D=1).",
      feedbackErro:
        "104 primeiro (C=1). Entre 401 e 410, D=0 < D=1 → 401 antes.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! Ordene em DECRESCENTE: 289, 298, 209.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "289" },
        { imagemUrl: maca, quantidade: 100, rotulo: "298" },
        { imagemUrl: maca, quantidade: 100, rotulo: "209" },
      ],
      pergunta: "Decrescente:",
      opcoes: [
        "298 > 289 > 209",
        "289 > 298 > 209",
        "209 > 289 > 298",
      ],
      correta: 0,
      feedbackAcerto:
        "🎉 Perfeito! 298 (D=9), 289 (D=8), 209 (D=0). Maior primeiro.",
      feedbackErro:
        "C todos = 2. Compara D: 9 > 8 > 0. Fica 298 > 289 > 209.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita entregou o pódio das barracas (do 1º ao 3º): 415, 380, 407.",
    problema: "Quem fica no 1º lugar (mais vendeu)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "1º lugar:",
      opcoes: [
        { nome: "415", imagemUrl: maca },
        { nome: "380", imagemUrl: banana },
        { nome: "407", imagemUrl: coruja },
      ],
      respostaCerta: "415",
      feedbackAcerto:
        "🎯 Isso! 415 é o maior (C=4=4=3? Não: 380 tem C=3). 415 > 407 > 380.",
      feedbackErro:
        "380 tem C=3 (menor). Entre 415 e 407, D: 1 > 0 → 415 vence.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Ordenar = colocar em fila pela comparação.",
      "CRESCENTE ↑ (menor primeiro) · DECRESCENTE ↓ (maior primeiro).",
      "Compare 2 a 2 usando a regra CDU.",
      "🎮 Fila-relâmpago!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "540" },
        { imagemUrl: banana, quantidade: 100, rotulo: "504" },
        { imagemUrl: banana, quantidade: 100, rotulo: "450" },
      ],
      pergunta: "Crescente: 540, 504, 450 →",
      opcoes: [
        "450 < 504 < 540",
        "450 < 540 < 504",
        "504 < 450 < 540",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Boa! 450 (C=4), 504 e 540 (C=5). D: 0 < 4 → 504 < 540.",
      feedbackErro: "450 tem C=4 (menor). 504 tem D=0, 540 tem D=4. 504 < 540.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Crescente de 210, 120, 201:",
        opcoes: ["120 < 201 < 210", "120 < 210 < 201", "201 < 120 < 210"],
        correta: 0,
        feedbackAcerto: "🎉 120 (C=1). 201 (D=0) < 210 (D=1).",
        feedbackErro: "120 tem C=1. Entre 201 e 210: D=0 < D=1.",
      },
      {
        pergunta: "Decrescente de 88, 808, 88 (repetido de propósito):",
        opcoes: ["808 > 88 = 88", "88 = 88 > 808", "88 > 808 > 88"],
        correta: 0,
        feedbackAcerto: "Isso! 808 é maior (C=8). Os dois 88 empatam.",
        feedbackErro: "808 tem 3 dígitos e C=8 → é o maior. Os dois 88 são iguais.",
      },
      {
        pergunta:
          "Qual está EM ORDEM CRESCENTE?",
        opcoes: [
          "600 < 660 < 606",
          "600 < 606 < 660",
          "660 < 606 < 600",
        ],
        correta: 1,
        feedbackAcerto: "🎉 600 < 606 < 660. Perfeito.",
        feedbackErro: "600 (D=0,U=0), 606 (D=0,U=6), 660 (D=6). Ordem: 600 < 606 < 660.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Fila dos Papeizinhos",
    materiais: ["10 papeizinhos", "Caneta"],
    passos: [
      "Escreva 5 números entre 100 e 999 em papeizinhos.",
      "Peça a alguém pra bagunçar e você organiza em ORDEM CRESCENTE.",
      "Depois faça DECRESCENTE.",
      "Repita com outros 5 números.",
    ],
    registro: "📸 Foto da fila crescente final.",
  },
  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
