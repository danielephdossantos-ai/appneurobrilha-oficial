import type { AulaPortuguesV4 } from "../../types";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as pai } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as bicicletaModerna } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";

/**
 * Aula 3 — A Família do B
 * -------------------------------------------------------------
 * Apresenta a família silábica do B: BA BE BI BO BU. A turma
 * lê palavras que começam com cada sílaba da família.
 *
 * Foco pedagógico:
 *  - Reconhecer as sílabas BA BE BI BO BU.
 *  - Ler palavras formadas com a família silábica do B.
 *
 * BNCC: EF01LP07, EF01LP08
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-familia-silabica",
  titulo: "A Família do B",
  iconeTrilha: "🅱️",
  bncc: ["EF01LP07", "EF01LP08"],
  duracaoMin: 15,

  momentosJogo: [
    {
      tipo: "boasVindas",
      mascoteUrl: esquiloBrilha,
      falaMascote: "Oi! Hoje vamos conhecer três famílias de sílabas novas: L, M e P. Toca pra começar!",
    },
    {
      tipo: "familiaSilabica",
      consoante: "L",
      silabas: ["LA", "LE", "LI", "LO", "LU"],
      instrucaoAudio: "Toca em cada sílaba da família do L e escuta o som dela.",
      elogio: "Você conheceu a família toda do L!",
    },
    {
      tipo: "familiaSilabica",
      consoante: "M",
      silabas: ["MA", "ME", "MI", "MO", "MU"],
      instrucaoAudio: "Agora toca em cada sílaba da família do M.",
      elogio: "Muito bem! Você conheceu a família do M.",
    },
    {
      tipo: "familiaSilabica",
      consoante: "P",
      silabas: ["PA", "PE", "PI", "PO", "PU"],
      instrucaoAudio: "Agora toca em cada sílaba da família do P.",
      elogio: "Isso! Você conheceu a família do P.",
    },
    {
      tipo: "pareamentoLetraSom",
      instrucaoAudio: "Liga cada letra com a figura que começa com o som dela.",
      pares: [
        { letra: "L", nome: "leão", imagemUrl: leao },
        { letra: "M", nome: "mãe", imagemUrl: mae },
        { letra: "P", nome: "pai", imagemUrl: pai },
      ],
      elogio: "Perfeito! Cada letra tem o seu som.",
    },
    {
      tipo: "juntarSilabas",
      imagemUrl: leao,
      silabas: ["LE", "ÃO"],
      palavra: "LEÃO",
      instrucaoAudio: "Toca em LE, depois em ÃO.",
      elogio: "Isso! LE + ÃO faz LEÃO.",
    },
    {
      tipo: "juntarSilabas",
      imagemUrl: bolo,
      silabas: ["BO", "LO"],
      palavra: "BOLO",
      instrucaoAudio: "Toca em BO, depois em LO.",
      elogio: "Muito bem! BO + LO faz BOLO.",
    },
    {
      tipo: "juntarSilabas",
      imagemUrl: balao,
      silabas: ["BA", "LÃO"],
      palavra: "BALÃO",
      instrucaoAudio: "Toca em BA, depois em LÃO.",
      elogio: "Isso! BA + LÃO faz BALÃO.",
    },
    {
      tipo: "leituraSilabica",
      imagemUrl: bola,
      palavra: "BOLA",
      silabas: ["BO", "LA"],
      instrucaoAudio: "Vamos ouvir a palavra devagar e depois inteira.",
      elogio: "Você leu BOLA! BO-LA junto forma BOLA.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Caça-palavras das famílias L, M e P",
      convite: "Procurem juntos 3 objetos que comecem com L, M ou P.",
      dicaAdulto: "Fale o som da sílaba inicial, não a letra sozinha.",
    },
    {
      tipo: "celebracao",
      medalha: "Guardião das Famílias Silábicas",
      mascoteUrl: esquiloBrilha,
      falaFinal: "Você conheceu as famílias do L, do M e do P! Muito bem!",
    },
  ],

  momento01_motivacao: {
    titulo: "A Família que Mora na Letra B",
    historia:
      "Na fábrica, o robô abriu uma gaveta especial: era a FAMÍLIA DO B! BA, BE, BI, BO, BU moram juntinhas ali. — Cada uma dessas sílabas começa muitas palavras! Vamos conhecer a família toda? — disse Aurora.",
    imagemUrl: robo,
  },

  momento02_previsao: {
    instrucao: "Olhe a capa: a letra B grande com cinco sílabas ao redor. Do que essa história vai falar?",
    bloco: {
      titulo: "A Família que Mora na Letra B",
      capaImagemUrl: bola,
      pistas: [
        { imagemUrl: bola, nome: "Uma bola" },
        { imagemUrl: bolo, nome: "Um bolo" },
      ],
      pergunta: "Sobre o que essa história vai falar?",
      hipoteses: [
        { texto: "As sílabas BA BE BI BO BU e palavras que começam com elas.", imagemUrl: bola },
        { texto: "Uma viagem de avião.", imagemUrl: bolo },
        { texto: "Um jogo de futebol.", imagemUrl: bola },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! O título fala da 'família' que mora na letra B — são as sílabas BA BE BI BO BU.",
      feedbackErro: "Releia o título: 'A Família que Mora na Letra B'. É sobre as sílabas da letra B.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras novas antes de conhecer a família.",
    cards: [
      {
        palavra: "família silábica",
        explicacao: "É o grupo de sílabas que começam com a mesma letra, mudando só a vogal: BA BE BI BO BU.",
        exemplo: "A família do B tem cinco sílabas: BA BE BI BO BU.",
        imagemUrl: bola,
      },
      {
        palavra: "vogal",
        explicacao: "São as letras A E I O U — elas mudam o som de cada sílaba da família.",
        exemplo: "Em BA, BE, BI, BO, BU, as vogais são A, E, I, O, U.",
        imagemUrl: robo,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Conheça a Família do B",
    instrucao: "Observe cada sílaba da família e uma palavra que começa com ela.",
    blocos: [
      {
        tipo: "alfabetoCompleto",
        exemplos: {
          B: "BOLA",
        },
      },
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "BA de BAnana", explicacao: "BA + NANA = BANANA." },
          { texto: "BE de BEbê", explicacao: "BE + BÊ = BEBÊ." },
          { texto: "BI de BIcicleta", explicacao: "BI começa a palavra BICICLETA." },
          { texto: "BO de BOla e BOlo", explicacao: "BO começa BOLA e BOLO." },
          { texto: "BU de BUraco", explicacao: "BU começa a palavra BURACO." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos. Aperte 🔊 se quiser ouvir.",
    leitura: {
      titulo: "A Família que Mora na Letra B",
      imagemUrl: bola,
      legendaImagem: "BA BE BI BO BU",
      destacar: ["BA", "BE", "BI", "BO", "BU"],
      paragrafos: [
        "A família do B tem cinco sílabas: BA, BE, BI, BO, BU.",
        "BA começa BANANA. BE começa BEBÊ. BI começa BICICLETA.",
        "BO começa BOLA e BOLO. BU começa BURACO. Cinco irmãs, cinco sons diferentes!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Quantas sílabas tem a família do B?",
        opcoes: ["Três", "Cinco", "Dez"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'A família do B tem cinco sílabas'.",
        feedbackErro: "Está na primeira frase: 'tem cinco sílabas'.",
        ondeEstaNoTexto: "A família do B tem cinco sílabas: BA, BE, BI, BO, BU.",
      },
      {
        pergunta: "Qual sílaba começa a palavra BICICLETA?",
        opcoes: ["BA", "BI", "BU"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 'BI começa BICICLETA'.",
        feedbackErro: "Está no segundo parágrafo: 'BI começa BICICLETA'.",
        ondeEstaNoTexto: "BI começa BICICLETA.",
      },
      {
        pergunta: "Quais palavras começam com BO?",
        opcoes: ["BANANA e BEBÊ", "BOLA e BOLO", "BURACO e BICICLETA"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'BO começa BOLA e BOLO'.",
        feedbackErro: "Está no último parágrafo: 'BO começa BOLA e BOLO'.",
        ondeEstaNoTexto: "BO começa BOLA e BOLO.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem conta a história e onde estão as sílabas?",
    perguntas: [
      {
        pergunta: "Quem mostrou a gaveta da família do B?",
        opcoes: ["O robô", "A banana", "A bicicleta"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'o robô abriu uma gaveta especial'.",
        feedbackErro: "Volte na motivação: quem abriu a gaveta? O robô.",
      },
      {
        pergunta: "Onde moram as sílabas BA BE BI BO BU?",
        opcoes: ["Na família da letra B", "No parquinho", "No mar"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Elas moram juntinhas na FAMÍLIA DO B.",
        feedbackErro: "O título já responde: 'A Família que Mora na Letra B'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as sílabas na ordem certa da família do B (seguindo A E I O U).",
    bloco: {
      instrucao: "Ordem das vogais: A, E, I, O, U.",
      itens: [
        { id: "s1", texto: "BA", imagemUrl: banana },
        { id: "s2", texto: "BE" },
        { id: "s3", texto: "BI", imagemUrl: bicicletaModerna },
        { id: "s4", texto: "BO", imagemUrl: bola },
        { id: "s5", texto: "BU" },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto: "🎉 Isso! BA, BE, BI, BO, BU — na ordem das vogais A E I O U.",
      feedbackErro: "Lembre a ordem das vogais: A, E, I, O, U. Assim fica BA-BE-BI-BO-BU.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O Balão do Bebê",
      imagemUrl: balao,
      destacar: ["BU", "BE", "balão", "bebê"],
      paragrafos: [
        "O bebê ganhou um balão amarelo. O balão tem a sílaba BA no começo: BA-LÃO.",
        "O bebê também começa com uma sílaba da família: BE-BÊ. Os dois brincam juntos no jardim.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual sílaba começa a palavra BALÃO?",
        opcoes: ["BA", "BE", "BI"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'BA-LÃO' começa com BA.",
        feedbackErro: "Está na primeira frase: 'BA-LÃO'.",
        ondeEstaNoTexto: "O balão tem a sílaba BA no começo: BA-LÃO.",
      },
      {
        pergunta: "Qual sílaba começa a palavra BEBÊ?",
        opcoes: ["BU", "BO", "BE"],
        correta: 2,
        feedbackAcerto: "🎉 Boa! 'BE-BÊ' começa com BE.",
        feedbackErro: "Está na segunda frase: 'BE-BÊ'.",
        ondeEstaNoTexto: "O bebê também começa com uma sílaba da família: BE-BÊ.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte Palavras da Família do B",
    instrucao: "Junte as sílabas embaralhadas pra formar cada palavra da família do B.",
    jogo: {
      tipo: "montarPalavra",
      titulo: "A Gaveta da Família do B",
      bloco: {
        instrucao: "Toque nas sílabas na ordem certa pra formar a palavra.",
        palavras: [
          { id: "w1", palavraCerta: "BOLA", silabas: ["BO", "LA"], imagemUrl: bola, frase: "A BOLA quica alto." },
          { id: "w2", palavraCerta: "BOLO", silabas: ["BO", "LO"], imagemUrl: bolo, frase: "O BOLO está uma delícia." },
          { id: "w3", palavraCerta: "BALÃO", silabas: ["BA", "LÃO"], imagemUrl: balao, frase: "O BALÃO voou alto." },
        ],
        feedbackAcerto: "🎉 Você conhece bem a família do B!",
        feedbackErro: "Pense na sílaba que começa a palavra: sempre da família BA BE BI BO BU.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "A família do B tem cinco sílabas: BA, BE, BI, BO, BU.",
      "Cada sílaba muda pela vogal: A, E, I, O, U.",
      "BOLA e BOLO começam com BO. BANANA começa com BA.",
    ],
    miniDesafio: {
      pergunta: "Qual sílaba vem depois de BA na ordem da família do B?",
      opcoes: ["BO", "BE", "BU"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Depois de BA vem BE (seguindo A, E, I, O, U).",
      feedbackErro: "A ordem das vogais é A, E, I, O, U — depois de BA vem BE.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quantas sílabas tem a família do B?",
        opcoes: ["Cinco", "Três", "Dez"],
        correta: 0,
        feedbackAcerto: "🎉 CINCO: BA BE BI BO BU.",
        feedbackErro: "São CINCO sílabas: BA BE BI BO BU.",
      },
      {
        pergunta: "2/5 — Qual sílaba começa BOLA?",
        opcoes: ["BA", "BO", "BU"],
        correta: 1,
        feedbackAcerto: "🎉 BO!",
        feedbackErro: "BOLA começa com BO.",
      },
      {
        pergunta: "3/5 — Qual sílaba começa BANANA?",
        opcoes: ["BA", "BE", "BI"],
        correta: 0,
        feedbackAcerto: "🎉 BA!",
        feedbackErro: "BANANA começa com BA.",
      },
      {
        pergunta: "4/5 — Qual sílaba começa BICICLETA?",
        opcoes: ["BU", "BO", "BI"],
        correta: 2,
        feedbackAcerto: "🎉 BI!",
        feedbackErro: "BICICLETA começa com BI.",
      },
      {
        pergunta: "5/5 — Qual é a ordem certa da família do B?",
        opcoes: ["BU BO BI BE BA", "BA BE BI BO BU", "BE BA BO BI BU"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! BA BE BI BO BU, seguindo as vogais A E I O U. Família completa! 🌟",
        feedbackErro: "A ordem segue as vogais: A, E, I, O, U → BA BE BI BO BU.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça-palavras da família do B",
    materiais: ["Papel e lápis (ou giz de cera)"],
    passos: [
      "1) Andem pela casa procurando 3 objetos cujo nome comece com BA, BE, BI, BO ou BU.",
      "2) Digam a palavra bem devagar, destacando a sílaba inicial.",
      "3) Desenhem os 3 objetos encontrados.",
      "4) Escrevam (ou peçam ajuda pra escrever) a sílaba inicial de cada um.",
    ],
    registro: "🖍️ Desenho com os 3 objetos e a sílaba inicial de cada palavra.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
