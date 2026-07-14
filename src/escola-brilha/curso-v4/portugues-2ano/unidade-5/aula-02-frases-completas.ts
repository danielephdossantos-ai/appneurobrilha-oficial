import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";

/**
 * Unidade 5 · Aula 2 — Construindo Frases Completas
 * BNCC: EF02LP22 · EF02LP23
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-frases-completas",
  titulo: "Construindo Frases Completas",
  iconeTrilha: "✍️",
  bncc: ["EF02LP22", "EF02LP23"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A frase que ficou pela metade",
    historia:
      "Brilha encontra uma folha caída no chão. Está escrito só: 'O cachorro...' — e para. Aurora ri: — Essa frase não terminou! Precisamos aprender a fazer FRASES COMPLETAS: alguém + alguma ação + com sentido inteiro.",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Leia a frase incompleta. O que está FALTANDO?",
    bloco: {
      titulo: "A frase pela metade",
      recado: {
        icone: "✍️",
        rotulo: "Folha encontrada",
        estilo: "papel",
        linhas: ["O cachorro..."],
      },
      pergunta: "O que essa frase precisa pra ficar COMPLETA?",
      hipoteses: [
        {
          texto: "Uma AÇÃO (o que o cachorro fez) e um lugar/tempo.",
          imagemUrl: cachorro,
        },
        { texto: "Só uma virgula qualquer no meio.", imagemUrl: lapis },
        { texto: "Apagar tudo e não escrever nada.", imagemUrl: brilha },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! 'O cachorro CORREU no parque' — sujeito + AÇÃO + lugar = frase completa.",
      feedbackErro:
        "'O cachorro...' não termina a ideia. Falta uma AÇÃO (o que ele fez) e um lugar/tempo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de escritor.",
    cards: [
      {
        palavra: "frase",
        explicacao:
          "É um grupo de palavras que passa uma IDEIA COMPLETA. Começa com maiúscula e termina com . ! ou ?",
        exemplo: "'O cachorro correu no parque.' é uma frase completa.",
        imagemUrl: lapis,
      },
      {
        palavra: "ação",
        explicacao:
          "É O QUE alguém FAZ. Correr, pular, comer, dormir são ações.",
        exemplo: "Na frase 'A Ana pulou', a ação é PULOU.",
        imagemUrl: brilha,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha mostra como completar uma frase.",
    leitura: {
      titulo: "Do pedacinho até a frase inteira",
      imagemUrl: cachorro,
      destacar: ["quem", "ação", "onde"],
      paragrafos: [
        "'O cachorro...' — quem: o cachorro. Falta a AÇÃO!",
        "Adicionando ação: 'O cachorro CORREU.'",
        "Ficou melhor, mas dá pra melhorar mais: onde ele correu?",
        "'O cachorro correu NO PARQUE.' ← agora a frase está COMPLETA.",
        "Uma boa frase tem QUEM + AÇÃO + (às vezes) ONDE ou QUANDO.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Descubra o que falta em cada frase.",
    perguntas: [
      {
        pergunta: "'A menina...' — o que falta pra ficar completa?",
        opcoes: ["Uma AÇÃO", "Um número", "Uma cor"],
        correta: 0,
        feedbackAcerto: "🎉 Ação! Ex.: 'A menina PULOU corda.'",
        feedbackErro:
          "Falta AÇÃO. 'A menina PULOU corda.' fica completa.",
      },
      {
        pergunta: "Qual é frase COMPLETA?",
        opcoes: [
          "O cachorro correu no parque.",
          "O cachorro...",
          "No parque.",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Tem QUEM + AÇÃO + ONDE. Completa!",
        feedbackErro:
          "'O cachorro correu no parque.' tem QUEM (cachorro) + AÇÃO (correu) + ONDE (parque).",
      },
      {
        pergunta: "Toda frase termina com…",
        opcoes: [
          "Nada mesmo",
          "Um sinal: . ! ou ?",
          "Uma vírgula",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Ponto, exclamação ou interrogação!",
        feedbackErro:
          "Toda frase termina com um sinal: PONTO . / EXCLAMAÇÃO ! / INTERROGAÇÃO ?",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Aponte a AÇÃO em cada frase.",
    perguntas: [
      {
        pergunta: "Na frase 'A Ana COMEU maçã', qual é a ação?",
        opcoes: ["Ana", "COMEU", "maçã"],
        correta: 1,
        feedbackAcerto: "🎉 COMEU é a ação!",
        feedbackErro: "O que a Ana FEZ? Ela COMEU. Essa é a ação.",
      },
      {
        pergunta: "Na frase 'O gato PULOU no muro', quem é o QUEM?",
        opcoes: ["Muro", "PULOU", "O gato"],
        correta: 2,
        feedbackAcerto: "🎉 O gato!",
        feedbackErro:
          "QUEM fez a ação de pular? O GATO — ele é o QUEM da frase.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as palavras na ORDEM pra formar uma frase completa.",
    bloco: {
      instrucao: "'brincou / A menina / no parque / .'",
      itens: [
        { id: "s1", texto: "A menina", imagemUrl: menina },
        { id: "s2", texto: "brincou", imagemUrl: brilha },
        { id: "s3", texto: "no parque", imagemUrl: parque },
        { id: "s4", texto: ".", imagemUrl: lapis },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 'A menina brincou no parque.' — frase completa!",
      feedbackErro:
        "QUEM (A menina) → AÇÃO (brincou) → ONDE (no parque) → PONTO (.).",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Você lê sozinho. Encontre a frase COMPLETA.",
    leitura: {
      titulo: "Três tentativas",
      imagemUrl: bola,
      destacar: ["completa"],
      paragrafos: [
        "1) 'A bola.'",
        "2) 'A bola rolou.'",
        "3) 'A bola rolou no jardim.'",
        "Qual é a MAIS completa e mais fácil de imaginar?",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a frase mais COMPLETA?",
        opcoes: [
          "'A bola.'",
          "'A bola rolou.'",
          "'A bola rolou no jardim.'",
        ],
        correta: 2,
        feedbackAcerto:
          "🎉 A terceira! Tem QUEM (a bola) + AÇÃO (rolou) + ONDE (no jardim).",
        feedbackErro:
          "A terceira tem QUEM + AÇÃO + ONDE — é a mais completa.",
      },
      {
        pergunta: "'A bola.' está completa?",
        opcoes: [
          "Não — falta uma AÇÃO",
          "Sim, está perfeita",
          "Só se tiver cor",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Falta ação!",
        feedbackErro: "'A bola.' só diz QUEM. Falta a AÇÃO (o que a bola fez).",
      },
    ],
  },

  momento_minijogo: {
    titulo: "✍️ Complete a Frase",
    instrucao:
      "Escolha os cartões certos pra formar UMA frase completa (QUEM + AÇÃO + ONDE).",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "✍️ Complete a Frase",
      bloco: {
        instrucao: "Cada peça vai no alvo certo. Depois lê tudo junto.",
        itens: [
          { id: "i1", texto: "O gato", alvoId: "quem", imagemUrl: gato },
          { id: "i2", texto: "pulou", alvoId: "acao", imagemUrl: brilha },
          { id: "i3", texto: "no muro", alvoId: "onde", imagemUrl: parque },
        ],
        alvos: [
          { id: "quem", nome: "👤 QUEM", descricao: "Quem faz a ação" },
          { id: "acao", nome: "⚡ AÇÃO", descricao: "O que faz" },
          { id: "onde", nome: "📍 ONDE", descricao: "Lugar da ação" },
        ],
        feedbackAcerto:
          "🎉 Frase completa: 'O gato pulou no muro.'",
        feedbackErro:
          "QUEM = O gato. AÇÃO = pulou (o que ele FEZ). ONDE = no muro (lugar).",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "FRASE = ideia COMPLETA com sujeito e ação.",
      "AÇÃO é o que alguém FAZ (correu, pulou, comeu).",
      "Frase começa com MAIÚSCULA e termina com . ! ou ?",
    ],
    miniDesafio: {
      pergunta: "Qual é uma frase COMPLETA?",
      opcoes: [
        "Uma bola vermelha",
        "O menino chutou a bola.",
        "Chutou.",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 'O menino chutou a bola.' tem QUEM + AÇÃO + o que — completa!",
      feedbackErro:
        "As outras não passam ideia inteira. 'O menino chutou a bola.' é a completa.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Na frase 'A Bia leu um livro', qual é a AÇÃO?",
        opcoes: ["Bia", "leu", "livro"],
        correta: 1,
        feedbackAcerto: "🎉 LEU!",
        feedbackErro: "O que a Bia FEZ? Ela LEU. A ação é LEU.",
      },
      {
        pergunta: "2/5 — Toda frase começa com…",
        opcoes: [
          "Letra minúscula",
          "Letra MAIÚSCULA",
          "Um número",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Maiúscula!",
        feedbackErro: "Toda frase começa com letra MAIÚSCULA.",
      },
      {
        pergunta: "3/5 — Qual é frase COMPLETA?",
        opcoes: [
          "no parque",
          "O cachorro correu no parque.",
          "O cachorro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 A segunda!",
        feedbackErro:
          "'O cachorro correu no parque.' tem QUEM + AÇÃO + ONDE.",
      },
      {
        pergunta: "4/5 — Toda frase termina com…",
        opcoes: [
          "Ponto . / Exclamação ! / Interrogação ?",
          "Vírgula sempre",
          "Uma letra qualquer",
        ],
        correta: 0,
        feedbackAcerto: "🎉 . ! ou ?",
        feedbackErro: "Toda frase termina com . / ! / ?",
      },
      {
        pergunta: "5/5 — 'A menina' — a frase está…",
        opcoes: ["Completa", "INCOMPLETA — falta AÇÃO", "Perfeita"],
        correta: 1,
        feedbackAcerto: "🎉 Falta a ação!",
        feedbackErro: "'A menina' só diz QUEM. Falta AÇÃO.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Frase completa em casa",
    materiais: ["Papel e lápis"],
    passos: [
      "1) A criança escolhe UMA cena da casa.",
      "2) Escreve UMA frase completa: QUEM + AÇÃO + ONDE.",
      "3) Lê pra família e checa: começa com MAIÚSCULA? termina com . ! ou ?",
    ],
    registro: "📸 Foto da frase escrita pela criança.",
  },

  recompensa: { xp: 150, moedas: 100 },
};

void gato;
