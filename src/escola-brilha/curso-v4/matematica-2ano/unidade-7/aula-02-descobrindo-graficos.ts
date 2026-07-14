import type { AulaV4 } from "../../types";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 7 · Aula 2 — "Descobrindo os Gráficos"
 * Centro de Pesquisas · Gráficos de colunas (2º ano).
 *
 * Ler um gráfico simples: cada coluna representa uma categoria.
 */
export const aula02_descobrindoGraficos: AulaV4 = {
  slug: "u7-02-descobrindo-os-graficos",
  titulo: "Descobrindo os Gráficos",
  iconeTrilha: "📊",
  bncc: ["EF02MA23"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Da tabela pro gráfico",
    historia:
      "Brilha já tinha a TABELA da pesquisa dos animais. A Coruja piscou: 'Agora vamos VER isso melhor — cada coluninha vai mostrar quantos votos cada animal recebeu.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Gráfico de colunas — quanto mais alta a coluna, mais votos:",
    cenas: [
      { tipo: "grupoItens", imagemUrl: cachorro, quantidade: 4, rotulo: "🐶 = 4" },
      { tipo: "grupoItens", imagemUrl: gato, quantidade: 3, rotulo: "🐱 = 3" },
      { tipo: "grupoItens", imagemUrl: coelho, quantidade: 2, rotulo: "🐰 = 2" },
      { tipo: "grupoItens", imagemUrl: passaro, quantidade: 1, rotulo: "🐦 = 1" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Só de olhar o gráfico, o que é fácil DESCOBRIR?",
    pista: "Compare as ALTURAS das colunas.",
    revelacao:
      "Isso! A COLUNA MAIS ALTA é o mais votado. A MENOR é o menos votado. O gráfico deixa a comparação RAPIDINHA.",
  },

  momento04_explicacao: {
    titulo: "Como ler um gráfico de colunas",
    etapas: [
      { texto: "Cada COLUNA = uma categoria (cada animal, cada fruta…)." },
      { texto: "A ALTURA da coluna = QUANTIDADE de votos." },
      { texto: "A coluna MAIS ALTA = mais escolhido." },
      { texto: "A coluna MAIS BAIXA = menos escolhido." },
    ],
  },

  momento05_modelagem: {
    enunciado: "EU FAÇO — Brilha lê o gráfico:",
    passos: [
      "Olho a coluna mais ALTA → cachorro (4 votos).",
      "Olho a mais BAIXA → pássaro (1 voto).",
      "Comparo cachorro (4) e gato (3) → cachorro tem 1 a mais.",
      "Somei tudo: 4 + 3 + 2 + 1 = 10 crianças.",
    ],
    resposta: "Cachorro venceu a pesquisa!",
    visualUrl: cachorro,
  },

  momento06_praticaGuiada: {
    enunciado: "NÓS FAZEMOS — Qual animal teve MAIS votos?",
    dica: "Olhe a coluna mais ALTA.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Coluna mais alta = mais votado.",
      opcoes: [
        { nome: "Cachorro (4)", imagemUrl: cachorro },
        { nome: "Gato (3)", imagemUrl: gato },
        { nome: "Pássaro (1)", imagemUrl: passaro },
      ],
      respostaCerta: "Cachorro (4)",
      feedbackAcerto: "🎉 Cachorro com 4 votos — a coluna mais alta.",
      feedbackErro: "A mais ALTA é o cachorro (4).",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "VOCÊ FAZ — Qual animal teve MENOS votos?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Coluna mais baixa = menos votado.",
      opcoes: [
        { nome: "Cachorro (4)", imagemUrl: cachorro },
        { nome: "Coelho (2)", imagemUrl: coelho },
        { nome: "Pássaro (1)", imagemUrl: passaro },
      ],
      respostaCerta: "Pássaro (1)",
      feedbackAcerto: "🎉 Pássaro com 1 voto — a coluna mais baixa.",
      feedbackErro: "A mais BAIXA é o pássaro (1).",
    },
  },

  momento08_aplicacao: {
    contexto: "APLICAÇÃO — Novo gráfico: fruta preferida.",
    problema: "Maçã = 6, Banana = 4. Quantas crianças ao todo?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 6, rotulo: "Maçã" },
        { imagemUrl: banana, quantidade: 4, rotulo: "Banana" },
      ],
      pergunta: "6 + 4 = ?",
      opcoes: ["9", "10", "11"],
      correta: 1,
      feedbackAcerto: "🎉 10 crianças pesquisadas.",
      feedbackErro: "Some as duas colunas: 6 + 4 = 10.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Coluna alta = MAIS.",
      "Coluna baixa = MENOS.",
      "Somando colunas achamos o TOTAL.",
      "📊 Minijogo: Monte o Gráfico.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Entre GATO (3) e COELHO (2), quem teve mais votos?",
      opcoes: [
        { nome: "Gato (3)", imagemUrl: gato },
        { nome: "Coelho (2)", imagemUrl: coelho },
      ],
      respostaCerta: "Gato (3)",
      feedbackAcerto: "🎉 3 > 2 — gato venceu.",
      feedbackErro: "3 é maior que 2 → gato.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — A coluna MAIS ALTA de um gráfico mostra…",
        opcoes: ["A menor quantidade", "A maior quantidade", "Nada"],
        correta: 1,
        feedbackAcerto: "🎉 Mais alta = mais quantidade.",
        feedbackErro: "Mais ALTA = MAIS.",
      },
      {
        pergunta: "Pergunta 2 de 5 — Cachorro=4, Gato=3, Coelho=2, Pássaro=1. Mais votado?",
        opcoes: ["Cachorro", "Gato", "Pássaro"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: cachorro, quantidade: 4, rotulo: "🐶" },
          { imagemUrl: gato, quantidade: 3, rotulo: "🐱" },
        ],
        feedbackAcerto: "🎉 Cachorro (4).",
        feedbackErro: "4 é a maior coluna → CACHORRO.",
      },
      {
        pergunta: "Pergunta 3 de 5 — Menos votado?",
        opcoes: ["Cachorro", "Coelho", "Pássaro"],
        correta: 2,
        visualGrupos: [
          { imagemUrl: coelho, quantidade: 2, rotulo: "🐰" },
          { imagemUrl: passaro, quantidade: 1, rotulo: "🐦" },
        ],
        feedbackAcerto: "🎉 Pássaro (1).",
        feedbackErro: "1 é a menor coluna → PÁSSARO.",
      },
      {
        pergunta: "Pergunta 4 de 5 — Cachorro (4) tem quantos a MAIS que Gato (3)?",
        opcoes: ["1", "2", "3"],
        correta: 0,
        feedbackAcerto: "🎉 4 − 3 = 1 a mais.",
        feedbackErro: "4 − 3 = 1.",
      },
      {
        pergunta: "Pergunta 5 de 5 — Maçã=6, Banana=4. Total?",
        opcoes: ["9", "10", "11"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 6, rotulo: "🍎" },
          { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
        ],
        feedbackAcerto: "🎉 6 + 4 = 10. 🏆",
        feedbackErro: "Soma as duas colunas: 6 + 4 = 10.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📊 Meu Primeiro Gráfico",
    materiais: ["Papel quadriculado", "Lápis de cor"],
    passos: [
      "1) Use a tabela da aula anterior.",
      "2) Desenhe uma coluna pra cada categoria.",
      "3) A altura = número de votos.",
      "4) Pinte cada coluna de uma cor.",
      "5) Conte pra família qual venceu e qual foi o menos escolhido.",
    ],
    registro: "📸 Foto do gráfico colorido.",
  },

  recompensa: {
    xp: 220,
    moedas: 110,
    medalha: "Leitor(a) de Gráficos",
  },
};
