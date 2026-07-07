import type { AulaV4 } from "../../types";
import cachorro from "@/assets/neuro-treino/objetos/cachorro.png";
import gato from "@/assets/neuro-treino/objetos/gato.png";
import coelho from "@/assets/neuro-treino/objetos/coelho.png";
import passaro from "@/assets/neuro-treino/objetos/passaro.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 7 · Aula 3 — "Comparando Informações"
 * Centro de Pesquisas · Comparações em gráficos (2º ano).
 *
 * Detetive dos Dados: mais, menos, diferença.
 */
export const aula03_comparandoInformacoes: AulaV4 = {
  slug: "u7-03-comparando-informacoes",
  titulo: "Comparando Informações",
  iconeTrilha: "🔍",
  bncc: ["EF02MA23"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Detetive dos Dados",
    historia:
      "A Coruja pegou uma lupa: 'Agora você é DETETIVE DOS DADOS! Vamos comparar as pesquisas e descobrir a DIFERENÇA entre elas.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Pesquisa dos animais favoritos:",
    cenas: [
      { tipo: "grupoItens", imagemUrl: cachorro, quantidade: 6, rotulo: "Cachorro = 6" },
      { tipo: "grupoItens", imagemUrl: gato, quantidade: 4, rotulo: "Gato = 4" },
      { tipo: "grupoItens", imagemUrl: coelho, quantidade: 2, rotulo: "Coelho = 2" },
      { tipo: "grupoItens", imagemUrl: passaro, quantidade: 3, rotulo: "Pássaro = 3" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como saber QUANTOS a mais um teve que o outro?",
    pista: "Se cachorro teve 6 e gato teve 4, é só… SUBTRAIR.",
    revelacao:
      "Isso! Pra achar a DIFERENÇA entre duas colunas, faço uma SUBTRAÇÃO: maior − menor.",
  },

  momento04_explicacao: {
    titulo: "3 perguntas de detetive",
    etapas: [
      { texto: "1️⃣ Quem teve MAIS? → coluna mais alta.", exemplo: "Cachorro = 6." },
      { texto: "2️⃣ Quem teve MENOS? → coluna mais baixa.", exemplo: "Coelho = 2." },
      { texto: "3️⃣ Qual é a DIFERENÇA? → subtração maior − menor.", exemplo: "6 − 2 = 4.", contaArmada: { a: 6, b: 2, resultado: 4, operacao: "subtracao" } },
    ],
  },

  momento05_modelagem: {
    enunciado: "EU FAÇO — Brilha compara cachorro e gato:",
    passos: [
      "Cachorro = 6.",
      "Gato = 4.",
      "Diferença = 6 − 4 = 2.",
      "Cachorro teve 2 a MAIS que gato.",
    ],
    resposta: "Diferença = 2 votos.",
    visualUrl: cachorro,
  },

  momento06_praticaGuiada: {
    enunciado: "NÓS FAZEMOS — Cachorro (6) e coelho (2). Diferença?",
    dica: "Maior − menor. 6 − 2.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: cachorro, quantidade: 6, rotulo: "🐶 = 6" },
        { imagemUrl: coelho, quantidade: 2, rotulo: "🐰 = 2" },
      ],
      pergunta: "6 − 2 = ?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      feedbackAcerto: "🎉 6 − 2 = 4 votos de diferença.",
      feedbackErro: "6 − 2 = 4.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "VOCÊ FAZ — Gato (4) e pássaro (3). Diferença?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: gato, quantidade: 4, rotulo: "🐱 = 4" },
        { imagemUrl: passaro, quantidade: 3, rotulo: "🐦 = 3" },
      ],
      pergunta: "4 − 3 = ?",
      opcoes: ["1", "2", "3"],
      correta: 0,
      feedbackAcerto: "🎉 4 − 3 = 1 voto de diferença.",
      feedbackErro: "4 − 3 = 1.",
    },
  },

  momento08_aplicacao: {
    contexto: "APLICAÇÃO — Total da pesquisa dos animais.",
    problema: "Cachorro 6 + Gato 4 + Coelho 2 + Pássaro 3 = ?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: cachorro, quantidade: 6, rotulo: "🐶" },
        { imagemUrl: gato, quantidade: 4, rotulo: "🐱" },
        { imagemUrl: coelho, quantidade: 2, rotulo: "🐰" },
        { imagemUrl: passaro, quantidade: 3, rotulo: "🐦" },
      ],
      pergunta: "6 + 4 + 2 + 3 = ?",
      opcoes: ["14", "15", "16"],
      correta: 1,
      feedbackAcerto: "🎉 6+4=10 · 10+2=12 · 12+3=15.",
      feedbackErro: "6+4=10 · +2=12 · +3=15.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Quem tem MAIS = coluna mais alta.",
      "Quem tem MENOS = coluna mais baixa.",
      "Diferença = maior − menor.",
      "🔍 Minijogo: Detetive dos Dados.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Cachorro (6) e pássaro (3). Quem tem MAIS?",
      opcoes: [
        { nome: "Cachorro (6)", imagemUrl: cachorro },
        { nome: "Pássaro (3)", imagemUrl: passaro },
      ],
      respostaCerta: "Cachorro (6)",
      feedbackAcerto: "🎉 6 > 3 → cachorro.",
      feedbackErro: "6 é maior que 3.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Pra achar a DIFERENÇA faço…",
        opcoes: ["Soma", "Subtração", "Nada"],
        correta: 1,
        feedbackAcerto: "🎉 Diferença = SUBTRAÇÃO.",
        feedbackErro: "Diferença sempre é SUBTRAÇÃO.",
      },
      {
        pergunta: "Pergunta 2 de 5 — Cachorro=6, Gato=4. Diferença?",
        opcoes: ["1", "2", "10"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: cachorro, quantidade: 6, rotulo: "🐶" },
          { imagemUrl: gato, quantidade: 4, rotulo: "🐱" },
        ],
        feedbackAcerto: "🎉 6 − 4 = 2.",
        feedbackErro: "6 − 4 = 2.",
      },
      {
        pergunta: "Pergunta 3 de 5 — Gato=4, Coelho=2. Quantos a MAIS o gato tem?",
        opcoes: ["1", "2", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: gato, quantidade: 4, rotulo: "🐱" },
          { imagemUrl: coelho, quantidade: 2, rotulo: "🐰" },
        ],
        feedbackAcerto: "🎉 4 − 2 = 2 a mais.",
        feedbackErro: "4 − 2 = 2.",
      },
      {
        pergunta: "Pergunta 4 de 5 — Pássaro=3, Coelho=2. Diferença?",
        opcoes: ["1", "2", "5"],
        correta: 0,
        feedbackAcerto: "🎉 3 − 2 = 1.",
        feedbackErro: "3 − 2 = 1.",
      },
      {
        pergunta: "Pergunta 5 de 5 — Somando os 4 animais (6+4+2+3), total?",
        opcoes: ["14", "15", "16"],
        correta: 1,
        feedbackAcerto: "🎉 15 crianças pesquisadas. 🏆",
        feedbackErro: "6+4=10 · +2=12 · +3=15.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🔍 Detetive em Casa",
    materiais: ["Uma tabela feita nas aulas anteriores"],
    passos: [
      "1) Olhe a pesquisa que a criança fez.",
      "2) Ela responde: quem venceu? Quem teve menos?",
      "3) Ela calcula a DIFERENÇA entre o maior e o menor.",
      "4) Explica pra família o que descobriu.",
    ],
    registro: "🗣️ Áudio ou frase escrita: 'Descobri que…'.",
  },

  recompensa: {
    xp: 230,
    moedas: 120,
    medalha: "Detetive dos Dados",
  },
};
