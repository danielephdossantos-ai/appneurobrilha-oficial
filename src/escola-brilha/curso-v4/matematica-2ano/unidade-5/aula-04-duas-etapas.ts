import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 5 · Aula 4 — "Problemas com Duas Etapas"
 * BNCC EF02MA06, EF02MA07.
 *
 * A criança resolve problemas com duas operações em sequência.
 * Ex.: 10 + 6 - 5 = 11.
 */
export const aula04_duasEtapas: AulaV4 = {
  slug: "u5-04-problemas-duas-etapas",
  titulo: "Problemas com Duas Etapas",
  iconeTrilha: "🏪",
  bncc: ["EF02MA06", "EF02MA07"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "Organizando toda a feira!",
    historia:
      "A banca de Dona Coelha teve um dia agitado. TINHA 10 maçãs. Recebeu MAIS 6. Depois VENDEU 5. Agora ela precisa saber quantas ficaram — mas o problema tem DUAS ETAPAS! Brilha topa o desafio.",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Sobraram 11 maçãs no final. Toque em cada MAÇÃ pra conferir:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 11,
      itemPlural: "maçãs",
      pergunta: "10 + 6 − 5 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Um problema pode ter mais de UMA operação?",
    pista:
      "Aqui aconteceu SOMA e depois SUBTRAÇÃO.",
    revelacao:
      "Isso! Alguns problemas têm DUAS ETAPAS. Resolve UMA de cada vez, na ordem em que a história acontece.",
  },

  momento04_explicacao: {
    titulo: "Duas etapas, uma resposta",
    etapas: [
      {
        texto: "1️⃣ Primeiro, o que ACONTECEU primeiro?",
        exemplo: "Tinha 10 + recebeu 6.",
        contaArmada: { a: 10, b: 6, resultado: 16, operacao: "soma" },
      },
      {
        texto: "2️⃣ Guardo o resultado (16) e vou pro PRÓXIMO passo.",
        exemplo: "Vendeu 5.",
        contaArmada: { a: 16, b: 5, resultado: 11, operacao: "subtracao" },
      },
      {
        texto: "3️⃣ Resposta final: 11 maçãs.",
        exemplo: "Confiro: começou com 10, ganhou 6 (16), vendeu 5 = 11. ✔",
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha resolve 10 + 6 − 5 pensando em voz alta:",
    passos: [
      "1ª etapa: 10 + 6 = 16.",
      "Guardo o 16 na cabeça.",
      "2ª etapa: 16 − 5 = 11.",
      "Escrevo a resposta final: 11 maçãs.",
      "Confiro: faz sentido, sobrou menos do que quando recebeu.",
    ],
    resposta: "10 + 6 − 5 = 11 maçãs",
    visualUrl: maca,
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [11],
      itemPlural: "maçãs",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — 'Havia 8 flores. Colheu mais 4. Deu 2 de presente.' Sobraram?",
    dica: "1) 8 + 4 = 12. 2) 12 − 2 = 10.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: flor, quantidade: 8, rotulo: "Tinha" },
        { imagemUrl: flor, quantidade: 4, rotulo: "Colheu" },
      ],
      pergunta: "8 + 4 − 2 = ?",
      opcoes: ["8", "10", "12"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 8+4=12, 12−2=10 flores.",
      feedbackErro: "Faça em 2 passos: 8+4=12, depois 12−2=10.",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — 'Havia 7 brinquedos. Ganhou 5. Perdeu 3.'",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bola, quantidade: 7, rotulo: "Tinha" },
        { imagemUrl: bola, quantidade: 5, rotulo: "Ganhou" },
      ],
      pergunta: "7 + 5 − 3 = ?",
      opcoes: ["8", "9", "10"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 7+5=12, 12−3=9 brinquedos.",
      feedbackErro: "1) 7+5=12. 2) 12−3=9.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — 'Na biblioteca havia 15 livros. Chegaram 4. Foram emprestados 6.'",
    problema:
      "Quantos livros restaram na estante?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: livro, quantidade: 15, rotulo: "Tinha" },
        { imagemUrl: livro, quantidade: 4, rotulo: "Chegaram" },
      ],
      pergunta: "15 + 4 − 6 = ?",
      opcoes: ["11", "13", "15"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 15+4=19, 19−6=13 livros.",
      feedbackErro: "1) 15+4=19. 2) 19−6=13.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Alguns problemas têm DUAS ETAPAS.",
      "Resolve UMA de cada vez, na ordem da história.",
      "Guarda o resultado da 1ª e usa na 2ª.",
      "🏪 Minijogo: Mercado Inteligente!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 6, rotulo: "Tinha" },
        { imagemUrl: maca, quantidade: 4, rotulo: "Chegaram" },
      ],
      pergunta: "'Tinha 6, chegaram 4, vendeu 2.' Sobraram?",
      opcoes: ["6", "8", "10"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 6+4=10, 10−2=8.",
      feedbackErro: "1) 6+4=10. 2) 10−2=8.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 10 + 6 − 5 = ?",
        opcoes: ["9", "11", "13"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 10+6=16, 16−5=11.",
        feedbackErro: "1) 10+6=16. 2) 16−5=11.",
      },
      {
        pergunta:
          "Pergunta 2 de 5 — 'Tinha 8 flores, colheu 4, deu 2.' Sobraram?",
        opcoes: ["8", "10", "12"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: flor, quantidade: 8, rotulo: "Tinha" },
          { imagemUrl: flor, quantidade: 4, rotulo: "Colheu" },
        ],
        feedbackAcerto: "🎉 Boa! 8+4=12, 12−2=10.",
        feedbackErro: "1) 8+4=12. 2) 12−2=10.",
      },
      {
        pergunta:
          "Pergunta 3 de 5 — 'Havia 7 brinquedos, ganhou 5, perdeu 3.' Total?",
        opcoes: ["7", "9", "12"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: bola, quantidade: 7, rotulo: "Tinha" },
          { imagemUrl: bola, quantidade: 5, rotulo: "Ganhou" },
        ],
        feedbackAcerto: "🎉 Isso! 7+5=12, 12−3=9.",
        feedbackErro: "Em 2 passos: 7+5=12, 12−3=9.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — '15 livros, chegaram 4, emprestaram 6.' Restaram?",
        opcoes: ["11", "13", "15"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: livro, quantidade: 15, rotulo: "Tinha" },
          { imagemUrl: livro, quantidade: 4, rotulo: "Chegaram" },
        ],
        feedbackAcerto: "🎉 Isso! 15+4=19, 19−6=13.",
        feedbackErro: "1) 15+4=19. 2) 19−6=13.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Num problema com duas etapas, o que fazemos?",
        opcoes: [
          "Fazemos tudo de uma vez",
          "Uma etapa por vez, na ORDEM da história",
          "Escolhemos só uma",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Uma etapa por vez, na ordem. 🏆",
        feedbackErro:
          "Uma de cada vez, na ordem em que a história acontece.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏪 Mercadinho de Duas Etapas",
    materiais: [
      "Objetos pra contar (feijões, biscoitos, tampinhas)",
      "Papel e lápis",
    ],
    passos: [
      "1) A família monta uma 'banca' com 10 objetos.",
      "2) Vai narrando duas coisas: 'Chegaram mais X. Depois vendeu Y.'",
      "3) A criança escreve as DUAS contas.",
      "4) Resolve na ordem e diz a resposta final.",
      "5) Repete 2 vezes com quantidades diferentes.",
    ],
    registro:
      "📸 Foto das duas etapas escritas com a resposta final.",
  },

  recompensa: {
    xp: 220,
    moedas: 110,
    medalha: "Organizador(a) da Feira",
  },
};
