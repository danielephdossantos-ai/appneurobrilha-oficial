import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import peixe from "@/assets/neuro-treino/objetos/peixe.png";
import estrela from "@/assets/neuro-treino/objetos/estrela.png";
import balao from "@/assets/neuro-treino/objetos/balao.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 3 · Aula 1 — "O que significa tirar?"
 * Reino das Subtrações · BNCC EF02MA05.
 *
 * Motivação (Dona Esquilo com nozes) → Explora (tap-contar após tirar) →
 * Descoberta (tirar = subtração) → Explicação (5-2=3 maçãs) →
 * Eu faço → Nós fazemos (peixes 6-3) → Você faz (estrelas 7-3) →
 * Aplicação (balões 8-3) → Revisão + Minijogo → Quiz.
 */
export const aula01_oQueETirar: AulaV4 = {
  slug: "u3-01-o-que-e-tirar",
  titulo: "O que significa tirar?",
  iconeTrilha: "🥜",
  bncc: ["EF02MA05"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Um pedido de Dona Esquilo!",
    historia:
      "Depois da Festa da Cidade das Adições, Brilha chegou ao REINO DAS SUBTRAÇÕES! Um vento forte espalhou as coisas. Dona Esquilo pede ajuda: 'Tenho 6 nozes na cesta. Vou entregar 2 pro meu amigo. Quantas vão ficar aqui pra mim?'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Dona Esquilo tinha 6 nozes e entregou 2. Toque em cada NOZ que ficou na cesta:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 4,
      itemPlural: "nozes",
      pergunta: "Quantas nozes ficaram na cesta?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Antes eram 6 nozes. Agora só 4. O que aconteceu?",
    pista:
      "Alguma coisa saiu da cesta.",
    revelacao:
      "Isso! TIRAMOS 2 nozes. Quando tiramos uma quantidade de outra, estamos fazendo uma SUBTRAÇÃO. Bem-vindo ao Reino das Subtrações!",
  },

  momento04_explicacao: {
    titulo: "Tirar = Subtração",
    etapas: [
      {
        texto:
          "Etapa 2 — Comecei com 5 maçãs. Tirei 2. Sobraram 3.",
        exemplo: "A palavra mágica é TIRAR.",
        frutasParaNumero: {
          imagemUrl: maca,
          itemPlural: "maçãs",
          grupos: [5],
        },
      },
      {
        texto:
          "Etapa 3 — Toda vez que TIRAMOS uma quantidade, fazemos uma SUBTRAÇÃO. Escrevemos com o sinal '−' e '='.",
        exemplo: "5 − 2 = 3. Lê-se: 'cinco menos dois é igual a três'.",
        contaArmada: {
          a: 5,
          b: 2,
          resultado: 3,
          operacao: "subtracao",
          itemPlural: "maçãs",
        },
      },
      {
        texto:
          "Etapa 4 — Não importa o objeto: nozes, peixes, estrelas... tirar é sempre a mesma ideia.",
        exemplo: "6 − 3 = 3 peixes.",
      },
    ],
  },

  // Eu faço — Brilha resolve 5-2 maçãs
  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha resolve 5 maçãs − 2 maçãs pensando em voz alta:",
    passos: [
      "Vejo 5 maçãs na mesa.",
      "Tiro 2 maçãs (elas somem).",
      "Conto o que ficou: 1, 2, 3.",
      "Escrevo: 5 − 2 = 3.",
      "Resposta: 3 maçãs!",
    ],
    resposta: "5 − 2 = 3",
    visualUrl: maca,
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [3],
      itemPlural: "maçãs",
    },
  },

  // Nós fazemos — peixes 6 - 3
  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — Juntos! Havia 6 peixes no aquário. O pescador tirou 3. Veja a animação e responda.",
    dica: "Comece no 6 e conte pra trás: cinco, quatro, três. Sobraram 3.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: peixe,
      itemPlural: "peixes",
      a: 6,
      b: 3,
      legenda: "6 − 3 = 3",
    },
  },

  // Você faz — estrelas 7 - 3
  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — Sozinho(a) agora! Brilha tinha 7 estrelas no céu. 3 se apagaram. Quantas restaram?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 4, rotulo: "Ficaram" },
      ],
      pergunta: "7 − 3 = ?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 7 − 3 = 4 estrelas.",
      feedbackErro: "Tire 3 do 7: seis, cinco, quatro. Fica 4.",
    },
  },

  // Aplicação — 8 balões, 3 estouraram
  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — Na festa havia 8 balões coloridos. 3 estouraram!",
    problema:
      "Quantos balões ficaram inteiros?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: balao,
      itemPlural: "balões",
      a: 8,
      b: 3,
      legenda: "8 − 3 = 5 balões",
    },
  },

  momento09_revisao: {
    pontos: [
      "Tirar uma quantidade = fazer uma SUBTRAÇÃO.",
      "Escrevemos com '−' e '='.",
      "Contamos SÓ o que sobrou.",
      "🥜 Minijogo: colha só o que sobrou!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 6, rotulo: "Tinha" },
      ],
      pergunta:
        "Havia 6 nozes. Dona Esquilo tirou 4. Quantas sobraram?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      feedbackAcerto: "🎉 Perfeito! 6 − 4 = 2 nozes.",
      feedbackErro: "Do 6, tire 4: cinco, quatro, três, dois. Sobraram 2.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 5 − 2 = ?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 5, rotulo: "Tinha" },
        ],
        tirar: 2,
        feedbackAcerto: "🎉 Isso! 5 − 2 = 3.",
        feedbackErro: "Tire 2 do 5: quatro, três. Fica 3.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 7 − 4 = ?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: peixe, quantidade: 7, rotulo: "Tinha" },
        ],
        tirar: 4,
        feedbackAcerto: "🎉 Boa! 7 − 4 = 3 peixes.",
        feedbackErro: "Do 7 tire 4: seis, cinco, quatro, três. Fica 3.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 9 − 3 = ?",
        opcoes: ["5", "6", "7"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: estrela, quantidade: 9, rotulo: "Tinha" },
        ],
        tirar: 3,
        feedbackAcerto: "🎉 Perfeito! 9 − 3 = 6.",
        feedbackErro: "Do 9 volte 3: oito, sete, seis. Fica 6.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — Havia 8 balões. 3 estouraram. Quantos sobraram?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: balao, quantidade: 8, rotulo: "Tinha" },
        ],
        tirar: 3,
        feedbackAcerto: "🎉 Isso! 8 − 3 = 5 balões.",
        feedbackErro: "'Estouraram' é TIRAR. 8 − 3 = 5.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Quando TIRAMOS uma quantidade, fazemos uma...",
        opcoes: ["adição", "subtração", "comparação"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Tirar = SUBTRAÇÃO. Você entrou no Reino! 🏆",
        feedbackErro: "Tirar = SUBTRAÇÃO (com sinal '−').",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🥜 Tampinhas que Somem",
    materiais: [
      "10 tampinhas (ou botões, feijões, brinquedinhos)",
      "1 potinho",
      "Papel e lápis",
    ],
    passos: [
      "1) O adulto separa 10 tampinhas no pote.",
      "2) A criança conta em voz alta: 1 a 10.",
      "3) O adulto TIRA 4 tampinhas e esconde.",
      "4) A criança conta quantas sobraram no pote.",
      "5) A criança escreve no papel: 10 − 4 = 6.",
    ],
    registro:
      "📸 Foto das 10 tampinhas antes, das 4 tiradas, e da conta escrita.",
  },

  recompensa: {
    xp: 150,
    moedas: 75,
    medalha: "Explorador(a) do Reino das Subtrações",
  },
};
