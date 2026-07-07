import type { AulaV4 } from "../../types";
import cachorro from "@/assets/neuro-treino/objetos/cachorro.png";
import gato from "@/assets/neuro-treino/objetos/gato.png";
import coelho from "@/assets/neuro-treino/objetos/coelho.png";
import passaro from "@/assets/neuro-treino/objetos/passaro.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 7 · Aula 1 — "Coletando Informações"
 * Centro de Pesquisas · Estatística (2º ano).
 *
 * Coletar respostas e organizar em uma tabela simples.
 */
export const aula01_coletandoInformacoes: AulaV4 = {
  slug: "u7-01-coletando-informacoes",
  titulo: "Coletando Informações",
  iconeTrilha: "📋",
  bncc: ["EF02MA22"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A pesquisa do Centro",
    historia:
      "Brilha entrou no CENTRO DE PESQUISAS! A Coruja disse: 'Vamos descobrir qual é o ANIMAL preferido da turma. Pra isso a gente PERGUNTA e ANOTA cada resposta.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Brilha perguntou pra 10 crianças. Veja quantas escolheram cada animal:",
    cenas: [
      { tipo: "grupoItens", imagemUrl: cachorro, quantidade: 4, rotulo: "Cachorro" },
      { tipo: "grupoItens", imagemUrl: gato, quantidade: 3, rotulo: "Gato" },
      { tipo: "grupoItens", imagemUrl: coelho, quantidade: 2, rotulo: "Coelho" },
      { tipo: "grupoItens", imagemUrl: passaro, quantidade: 1, rotulo: "Pássaro" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como a gente ORGANIZA todas essas respostas?",
    pista: "Antes de fazer gráfico, colocamos tudo em uma TABELA.",
    revelacao:
      "Isso! A TABELA tem 2 colunas: uma pra CATEGORIA (o animal) e outra pra QUANTIDADE (quantos votos).",
  },

  momento04_explicacao: {
    titulo: "Como montar uma tabela",
    etapas: [
      { texto: "1️⃣ ESCOLHER o tema da pesquisa.", exemplo: "Ex.: animal preferido." },
      { texto: "2️⃣ PERGUNTAR e ANOTAR cada resposta." },
      { texto: "3️⃣ CONTAR quantas vezes cada resposta apareceu." },
      { texto: "4️⃣ Escrever na TABELA: categoria + quantidade.", exemplo: "🐶 Cachorro = 4 · 🐱 Gato = 3 · 🐰 Coelho = 2 · 🐦 Pássaro = 1." },
    ],
  },

  momento05_modelagem: {
    enunciado: "EU FAÇO — Brilha organiza a pesquisa dos animais:",
    passos: [
      "Perguntei pra 10 crianças.",
      "Contei: 🐶 4, 🐱 3, 🐰 2, 🐦 1.",
      "Somei: 4 + 3 + 2 + 1 = 10. Confere!",
      "Coloquei tudo na TABELA.",
    ],
    resposta: "Tabela pronta com os 10 votos.",
    visualUrl: cachorro,
    colecaoVisual: {
      imagemUrl: cachorro,
      grupos: [4],
      itemPlural: "votos no cachorro",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "NÓS FAZEMOS — Quantos votaram no GATO?",
    dica: "Conte os gatinhos da tabela.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [{ imagemUrl: gato, quantidade: 3, rotulo: "Gato" }],
      pergunta: "Quantos votos o gato recebeu?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 3 votos pro gato.",
      feedbackErro: "Conte: 1, 2, 3 gatinhos.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "VOCÊ FAZ — Quantos votaram no COELHO?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [{ imagemUrl: coelho, quantidade: 2, rotulo: "Coelho" }],
      pergunta: "Quantos votos o coelho recebeu?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      feedbackAcerto: "🎉 Boa! 2 votos.",
      feedbackErro: "Conte os coelhinhos: 1, 2.",
    },
  },

  momento08_aplicacao: {
    contexto: "APLICAÇÃO — Nova pesquisa: fruta preferida.",
    problema: "6 crianças escolheram maçã e 4 escolheram banana. Total?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 6, rotulo: "Maçã" },
        { imagemUrl: banana, quantidade: 4, rotulo: "Banana" },
      ],
      pergunta: "6 + 4 = ?",
      opcoes: ["9", "10", "11"],
      correta: 1,
      feedbackAcerto: "🎉 6 + 4 = 10 crianças pesquisadas.",
      feedbackErro: "Some as duas colunas: 6 + 4 = 10.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Pesquisa = perguntar e anotar.",
      "Tabela tem CATEGORIA e QUANTIDADE.",
      "Somando as quantidades achamos o TOTAL.",
      "📋 Minijogo: Organizador de Pesquisas!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: cachorro, quantidade: 4, rotulo: "Cachorro" },
        { imagemUrl: passaro, quantidade: 1, rotulo: "Pássaro" },
      ],
      pergunta: "Cachorro (4) + Pássaro (1) = ?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      feedbackAcerto: "🎉 4 + 1 = 5 votos ao todo.",
      feedbackErro: "4 + 1 = 5.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Antes do gráfico, a gente organiza em…",
        opcoes: ["Poesia", "Tabela", "Desenho livre"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Sempre começa pela TABELA.",
        feedbackErro: "Os dados vão pra uma TABELA primeiro.",
      },
      {
        pergunta: "Pergunta 2 de 5 — Uma tabela tem quais 2 colunas?",
        opcoes: ["Nome e idade", "Categoria e quantidade", "Cor e forma"],
        correta: 1,
        feedbackAcerto: "🎉 CATEGORIA + QUANTIDADE.",
        feedbackErro: "Categoria (o que) + quantidade (quantos).",
      },
      {
        pergunta: "Pergunta 3 de 5 — Cachorro teve 4 votos e gato teve 3. Total?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: cachorro, quantidade: 4, rotulo: "Cachorro" },
          { imagemUrl: gato, quantidade: 3, rotulo: "Gato" },
        ],
        feedbackAcerto: "🎉 4 + 3 = 7.",
        feedbackErro: "4 + 3 = 7 votos.",
      },
      {
        pergunta: "Pergunta 4 de 5 — Quantos votos teve o PÁSSARO?",
        opcoes: ["1", "2", "3"],
        correta: 0,
        visualGrupos: [{ imagemUrl: passaro, quantidade: 1, rotulo: "Pássaro" }],
        feedbackAcerto: "🎉 1 vote pro pássaro.",
        feedbackErro: "Só 1 pássaro na tabela.",
      },
      {
        pergunta: "Pergunta 5 de 5 — O total da pesquisa (4+3+2+1) é…",
        opcoes: ["9", "10", "11"],
        correta: 1,
        feedbackAcerto: "🎉 4+3+2+1 = 10 crianças pesquisadas. 🏆",
        feedbackErro: "4+3 = 7 · 7+2 = 9 · 9+1 = 10.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📋 Pesquisa em Casa",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) A criança escolhe o tema (fruta, cor ou brinquedo preferido).",
      "2) Pergunta pra 3 pessoas da família.",
      "3) Anota cada resposta.",
      "4) Monta a tabela: categoria + quantidade.",
      "5) Fala qual foi a resposta MAIS escolhida.",
    ],
    registro: "📸 Foto da tabela feita à mão.",
  },

  recompensa: {
    xp: 200,
    moedas: 100,
    medalha: "Pesquisador(a) Iniciante",
  },
};
