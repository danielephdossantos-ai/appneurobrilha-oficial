import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";

/**
 * Aula 1 — O que é uma FRASE?
 * -------------------------------------------------------------
 * Abre a Unidade 3 (Palavras Viram Frases). A criança descobre que
 * juntar palavras soltas com sentido, começando com letra MAIÚSCULA
 * e terminando com PONTO, forma uma frase.
 *
 * BNCC: EF01LP11, EF01LP12
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-o-que-e-frase",
  titulo: "O que é uma FRASE?",
  iconeTrilha: "✏️",
  bncc: ["EF01LP11", "EF01LP12"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Brilha brinca de montar palavras",
    historia:
      "Brilha achou um monte de palavras soltas: GATO, O, DORME. Sozinhas elas não contam nada. Mas se a gente junta na ordem certa: 'O GATO DORME.' — agora tem sentido! Isso é uma FRASE. Vamos aprender juntos?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Olhe esse cartaz. O que você acha que ele quer dizer?",
    bloco: {
      titulo: "Um cartaz na porta da sala",
      capaImagemUrl: casa,
      recado: {
        rotulo: "Cartaz",
        icone: "📢",
        linhas: ["A sala está aberta."],
        estilo: "cartaz",
      },
      pergunta: "O que esse cartaz está dizendo?",
      hipoteses: [
        { texto: "Que a sala está aberta.", imagemUrl: casa },
        { texto: "Uma lista de brinquedos.", imagemUrl: bola },
        { texto: "O nome de um gato.", imagemUrl: gato },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! É uma FRASE completa: começa com letra maiúscula e termina com ponto, e conta uma ideia inteira.",
      feedbackErro:
        "Leia de novo: 'A sala está aberta.' Isso conta uma ideia sobre a sala — não é lista nem nome.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras importantes para hoje.",
    cards: [
      {
        palavra: "frase",
        explicacao:
          "É um grupo de palavras que, juntas, dizem uma ideia completa.",
        exemplo: "A BOLA é redonda.",
        imagemUrl: bola,
      },
      {
        palavra: "ponto final",
        explicacao: "É a bolinha ( . ) que fecha a frase, mostrando que ela terminou.",
        exemplo: "O GATO dorme.",
        imagemUrl: gato,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Toda frase tem começo e fim",
    instrucao:
      "Veja: a primeira letra é MAIÚSCULA (verde) e no final tem um PONTO (vermelho).",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Ana pulou a corda.", explicacao: "Começa com A maiúsculo e termina com ponto." },
          { texto: "O gato dorme no sofá.", explicacao: "Uma ideia completa sobre o gato." },
          { texto: "Meu lápis é amarelo.", explicacao: "Fala sobre o lápis, do começo ao fim." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia comigo essas frases pequenas. Pode ouvir no 🔊.",
    leitura: {
      titulo: "Frases do dia a dia",
      imagemUrl: menina,
      legendaImagem: "Ana e seu dia",
      destacar: ["Ana", "frase"],
      paragrafos: [
        "Ana acordou cedo. Ela escovou os dentes.",
        "Depois, Ana pegou o lápis e desenhou um gato.",
        "Cada uma dessas ideias é uma frase: começa com letra grande e termina com ponto.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que Ana fez primeiro, ao acordar?",
        opcoes: ["Desenhou um gato", "Escovou os dentes", "Pegou o lápis"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Ela escovou os dentes' vem logo depois de acordar.",
        feedbackErro: "Releia a primeira frase: 'Ana acordou cedo. Ela escovou os dentes.'",
        ondeEstaNoTexto: "Ana acordou cedo. Ela escovou os dentes.",
      },
      {
        pergunta: "O que Ana desenhou?",
        opcoes: ["Uma bola", "Uma casa", "Um gato"],
        correta: 2,
        feedbackAcerto: "🎉 Boa! Ela desenhou um GATO.",
        feedbackErro: "Está no segundo parágrafo: 'desenhou um gato'.",
        ondeEstaNoTexto: "Ana pegou o lápis e desenhou um gato.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos pensar sobre as frases que lemos.",
    perguntas: [
      {
        pergunta: "Toda frase precisa terminar com...",
        opcoes: ["Uma vírgula", "Um ponto", "Nada"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O PONTO final mostra que a frase acabou.",
        feedbackErro: "Olhe as frases do texto: todas terminam com uma bolinha, o PONTO.",
      },
      {
        pergunta: "Qual dessas é uma frase completa?",
        opcoes: ["gato dorme sofá", "O gato dorme no sofá.", "gato, sofá, dorme"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Ela tem letra maiúscula no início, ordem certa e ponto no final.",
        feedbackErro:
          "As outras são só palavras soltas ou fora de ordem. A frase certa tem sentido, maiúscula e ponto.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Essas 3 frases contam o dia de Ana. Coloque na ordem certa.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "f1", texto: "Ana acordou cedo.", imagemUrl: menina },
        { id: "f2", texto: "Ana escovou os dentes.", imagemUrl: lapis },
        { id: "f3", texto: "Ana desenhou um gato.", imagemUrl: gato },
      ],
      ordemCerta: ["f1", "f2", "f3"],
      feedbackAcerto: "🎉 Perfeito! Você seguiu a ordem certinha do dia de Ana.",
      feedbackErro: "Pense: primeiro ela ACORDA, depois ESCOVA os dentes, por último DESENHA.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O lápis de Pedro",
      imagemUrl: lapis,
      destacar: ["Pedro", "lápis"],
      paragrafos: [
        "Pedro tem um lápis azul. Ele gosta muito dele.",
        "Pedro escreve seu nome com cuidado.",
      ],
    },
    perguntas: [
      {
        pergunta: "De que cor é o lápis de Pedro?",
        opcoes: ["Vermelho", "Azul", "Verde"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O texto diz 'lápis azul'.",
        feedbackErro: "Está na primeira frase: 'Pedro tem um lápis azul.'",
        ondeEstaNoTexto: "Pedro tem um lápis azul.",
      },
      {
        pergunta: "O que Pedro escreve com cuidado?",
        opcoes: ["Um desenho", "Seu nome", "Uma lista"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ele escreve o NOME dele.",
        feedbackErro: "Releia a segunda frase: 'Pedro escreve seu nome com cuidado.'",
        ondeEstaNoTexto: "Pedro escreve seu nome com cuidado.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Uma FRASE é um grupo de palavras com sentido completo.",
      "Toda frase começa com letra MAIÚSCULA.",
      "Toda frase termina com PONTO.",
      "Palavras soltas e fora de ordem NÃO formam uma frase.",
    ],
    miniDesafio: {
      pergunta: "Qual desses é uma frase certa?",
      opcoes: ["bola menina a com brinca", "A menina brinca com a bola.", "menina bola brinca"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Maiúscula, ordem certa e ponto final.",
      feedbackErro: "As outras são palavras embaralhadas, sem sentido nem pontuação.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma frase?",
        opcoes: [
          "Palavras soltas, fora de ordem",
          "Um grupo de palavras com sentido completo",
          "Uma palavra sozinha",
          "Uma lista de letras",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso mesmo!",
        feedbackErro: "Frase é um grupo de palavras que, JUNTAS e em ordem, fazem sentido.",
      },
      {
        pergunta: "2/5 — Toda frase começa com...",
        opcoes: ["Letra minúscula", "Letra maiúscula", "Um número", "Um ponto"],
        correta: 1,
        feedbackAcerto: "🎉 Maiúscula!",
        feedbackErro: "A primeira letra da frase é sempre MAIÚSCULA. O ponto fica no fim.",
      },
      {
        pergunta: "3/5 — Toda frase termina com...",
        opcoes: ["Ponto final", "Vírgula", "Um espaço", "Letra maiúscula"],
        correta: 0,
        feedbackAcerto: "🎉 PONTO!",
        feedbackErro: "A maiúscula abre a frase; o PONTO FINAL é quem fecha.",
      },
      {
        pergunta: "4/5 — Qual é uma frase completa?",
        opcoes: ["gato o dorme", "O gato dorme.", "O gato dorme", "gato dorme."],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Tem maiúscula, ordem certa e ponto final.",
        feedbackErro: "Uma está sem ponto, outra sem maiúscula e outra fora de ordem. A completa tem as três coisas.",
      },
      {
        pergunta: "5/5 — Pedro escreve o quê com cuidado?",
        opcoes: ["Seu nome", "Um desenho", "Uma carta", "O nome do amigo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ele escreve o NOME dele.",
        feedbackErro: "Volte ao texto: 'Pedro escreve seu nome com cuidado.'",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça-frases em casa",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Escolham juntos 3 objetos da casa (ex.: mesa, sofá, janela).",
      "2) Para cada objeto, invente uma frase completa (ex.: 'A mesa é de madeira.').",
      "3) A criança escreve ou desenha as frases, lembrando maiúscula e ponto.",
      "4) Leiam as frases em voz alta juntos.",
    ],
    registro: "📝 Foto das 3 frases escritas ou desenhadas.",
  },

  recompensa: {
    xp: 110,
    moedas: 65,
  },
};
