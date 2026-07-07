import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 2 · Aula 4 — "Conta Horizontal e Conta Armada"
 * A Cidade das Adições · BNCC EF02MA05, EF02MA06.
 *
 * Foco: passar do desenho pra representação SIMBÓLICA.
 *   • Conta HORIZONTAL: 5 + 2 = 7
 *   • Conta ARMADA (vertical) empilhada:  5
 *                                        +2
 *                                        --
 *                                         7
 */
export const aula04_contaArmada: AulaV4 = {
  slug: "u2-04-conta-horizontal-armada",
  titulo: "Conta Horizontal e Conta Armada",
  iconeTrilha: "📝",
  bncc: ["EF02MA05", "EF02MA06"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Sem desenho, ficou mais rápido!",
    historia:
      "Brilha estava exausta de desenhar bolinhas pra cada soma. A Coruja veio ajudar: 'Você precisa mesmo desenhar sempre?' Brilha ficou pensando... 'Não né?' — respondeu. 'A gente pode escrever DIRETO com os números!' É hora de aprender dois jeitos: conta HORIZONTAL e conta ARMADA.",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Aqui temos 5 maçãs e 2 maçãs. Toque em cada uma e depois vamos escrever de dois jeitos:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 7,
      itemPlural: "maçãs",
      pergunta: "5 + 2 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Se a gente já sabe que 5 + 2 = 7, precisa desenhar sempre?",
    pista:
      "Não! Podemos escrever de dois jeitos: em pé (armada) ou deitado (horizontal).",
    revelacao:
      "Isso! CONTA HORIZONTAL: 5 + 2 = 7 (tudo numa linha). CONTA ARMADA: números empilhados, um embaixo do outro, com o resultado abaixo da linha.",
  },

  momento04_explicacao: {
    titulo: "Dois jeitos de escrever a mesma soma",
    etapas: [
      {
        texto:
          "Etapa 2 — CONTA HORIZONTAL. Números e sinais numa linha só: 5 + 2 = 7.",
        exemplo:
          "É a mais rápida pra escrever. Boa quando os números são pequenos.",
      },
      {
        texto:
          "Etapa 3 — CONTA ARMADA. Números um EMBAIXO do outro, o '+' na esquerda, uma LINHA horizontal e o resultado abaixo.",
        exemplo:
          "Cada algarismo tem seu lugar. Isso vai ser MUITO importante quando os números forem grandes.",
        contaArmada: {
          a: 5,
          b: 2,
          resultado: 7,
          itemPlural: "maçãs",
        },
      },
      {
        texto:
          "Etapa 4 — Vamos entender CADA LINHA da conta armada. Linha de cima: o primeiro número. Linha do meio: o '+' e o segundo número. Linha (traço): 'agora vem o resultado'. Linha de baixo: o resultado.",
        exemplo:
          "6 + 3: escrevemos o 6 em cima, o +3 embaixo, traço, e 9 no fim.",
        contaArmada: {
          a: 6,
          b: 3,
          resultado: 9,
          itemPlural: "bananas",
        },
      },
      {
        texto:
          "Etapa 5 — DUAS FORMAS, MESMO RESULTADO. Escolha a que quiser.",
        exemplo: "5 + 2 = 7 (horizontal) tem o mesmo valor que a conta armada.",
        frutasParaNumero: {
          imagemUrl: maca,
          itemPlural: "maçãs",
          grupos: [5, 2],
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha vai escrever 6 + 3 de DOIS jeitos:",
    passos: [
      "Primeiro, horizontal: escrevo tudo em linha → 6 + 3 = 9.",
      "Agora, armada: escrevo o 6 em cima.",
      "Embaixo, o '+' na esquerda e o 3.",
      "Desenho a linha horizontal (o traço).",
      "Somo: 6 + 3 = 9. Escrevo o 9 embaixo. Pronto!",
    ],
    resposta: "6 + 3 = 9",
    visualUrl: banana,
    colecaoVisual: {
      imagemUrl: banana,
      grupos: [6, 3],
      itemPlural: "bananas",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — Vamos armar juntos a conta: 4 + 4. Aperte 'Resolver' pra ver.",
    dica: "4 em cima, +4 embaixo, traço, e o resultado 8.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 4,
      b: 4,
      legenda: "4 + 4 = 8 (dobro do 4)",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — Resolva a conta armada: 7 + 2.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bola, quantidade: 7, rotulo: "7" },
        { imagemUrl: bola, quantidade: 2, rotulo: "+2" },
      ],
      pergunta: "7 + 2 = ?",
      opcoes: ["8", "9", "10"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 7 + 2 = 9.",
      feedbackErro: "Comece no 7: oito, nove. Fica 9.",
    },
  },

  // Aplicação — mercado 12 + 5
  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — No mercado, mamãe comprou 12 maçãs e depois lembrou de mais 5. Vamos ARMAR a conta.",
    problema:
      "12 + 5 na conta armada. Quantas maçãs mamãe comprou?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 2, rotulo: "🍎" },
        { imagemUrl: maca, quantidade: 5, rotulo: "🍎 +" },
      ],
      pergunta: "12 + 5 = ?",
      opcoes: ["15", "17", "22"],
      correta: 1,
      feedbackAcerto:
        "🎉 Uau! 12 + 5 = 17. Uni: 2+5=7. Dez: 1+0=1. Fica 17.",
      feedbackErro:
        "Some as unidades (2+5=7). A dezena continua 1. Fica 17.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Conta HORIZONTAL: 5 + 2 = 7 (uma linha só).",
      "Conta ARMADA: números empilhados, traço, resultado embaixo.",
      "Mesma soma, dois jeitos de escrever.",
      "🎯 Mini-desafio na conta armada!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 5, rotulo: "🍌" },
        { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
      ],
      pergunta: "Arme a conta: 5 + 4 = ?",
      opcoes: ["8", "9", "10"],
      correta: 1,
      feedbackAcerto: "🎉 Boa! 5 + 4 = 9.",
      feedbackErro: "Comece no 5 e conte +4: 6,7,8,9. Fica 9.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 5 + 2 = ?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 5, rotulo: "🍎" },
          { imagemUrl: maca, quantidade: 2, rotulo: "🍎" },
        ],
        feedbackAcerto: "🎉 Isso! 5 + 2 = 7.",
        feedbackErro: "Conte a partir do 5: seis, sete. Fica 7.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 6 + 3 = ?",
        opcoes: ["8", "9", "10"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 6, rotulo: "🍌" },
          { imagemUrl: banana, quantidade: 3, rotulo: "🍌" },
        ],
        feedbackAcerto: "🎉 Boa! 6 + 3 = 9.",
        feedbackErro: "6 + 3: sete, oito, nove. Fica 9.",
      },
      {
        pergunta:
          "Pergunta 3 de 5 — Na conta armada, onde vai o resultado?",
        opcoes: [
          "Em cima do primeiro número",
          "Embaixo da linha (traço)",
          "Do lado do '+'",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Perfeito! O traço separa: em cima os números, embaixo o resultado.",
        feedbackErro:
          "O traço divide: os números que somamos ficam em cima, o resultado embaixo.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — No parquinho havia 8 crianças e chegaram mais 2. Quantas?",
        opcoes: ["9", "10", "11"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: bola, quantidade: 8, rotulo: "⚽" },
          { imagemUrl: bola, quantidade: 2, rotulo: "⚽" },
        ],
        feedbackAcerto: "🎉 Isso! 8 + 2 = 10. Fechou uma dezena.",
        feedbackErro: "8 + 2 fecha 10. Nove, dez.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Ana ganhou 14 brinquedos e depois mais 3. Total?",
        opcoes: ["16", "17", "18"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: bola, quantidade: 10, rotulo: "📦" },
          { imagemUrl: bola, quantidade: 4, rotulo: "⚽" },
          { imagemUrl: bola, quantidade: 3, rotulo: "⚽ +" },
        ],
        feedbackAcerto:
          "🎉 Uau! 14 + 3 = 17. Uni: 4+3=7. Dez: 1. Fica 17. 🏆",
        feedbackErro:
          "Some só as unidades: 4+3=7. Dezena continua 1. Fica 17.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📝 Caderno de Contas em Casa",
    materiais: [
      "Papel quadriculado (se tiver) ou folha comum",
      "Lápis e régua",
    ],
    passos: [
      "1) O adulto propõe 3 somas simples (ex.: 5+4, 6+3, 12+5).",
      "2) A criança escreve CADA UMA de dois jeitos: horizontal e armada.",
      "3) Explica em voz alta cada linha da conta armada.",
      "4) Confere se os dois jeitos deram o MESMO resultado.",
      "5) Bônus: a criança inventa uma conta armada pro adulto resolver.",
    ],
    registro:
      "📸 Foto do papel com pelo menos 3 contas armadas certinhas.",
  },

  recompensa: {
    xp: 180,
    moedas: 90,
    medalha: "Escritor(a) de Contas",
  },
};
