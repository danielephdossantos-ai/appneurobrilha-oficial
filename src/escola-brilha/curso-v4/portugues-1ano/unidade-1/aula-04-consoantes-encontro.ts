import type { AulaPortuguesV4 } from "../../types";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Aula 4 — Consoante encontra Vogal
 * -------------------------------------------------------------
 * Fecha a Unidade 1 (O Alfabeto Mágico). Depois de conhecer as letras,
 * o alfabeto e as vogais, a criança descobre a REGRA DE OURO da
 * alfabetização: consoante + vogal = SÍLABA, e sílaba já se lê.
 *
 * Foco pedagógico:
 *  - Compreender que a vogal dá voz à consoante (princípio alfabético).
 *  - Ler as primeiras sílabas simples (BA, CA, LA, PA, SA...).
 *  - Ler as primeiras palavras de duas sílabas (BOLA, CASA, PATO).
 *
 * BNCC: EF01LP02 · EF01LP04 · EF01LP05 · EF12LP01
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-consoantes-encontro",
  titulo: "Consoante encontra Vogal",
  iconeTrilha: "🔑",
  bncc: ["EF01LP02", "EF01LP04", "EF01LP05", "EF12LP01"],
  duracaoMin: 16,

  // ------------------------------------------------------------
  // 1 · MOTIVAÇÃO
  // ------------------------------------------------------------
  momento01_motivacao: {
    titulo: "A letra que não conseguia falar sozinha",
    historia:
      "A letra B estava tristinha num canto da biblioteca. — Eu tento falar e só sai 'b...b...b...'! Aurora sorriu: — É que você é CONSOANTE, B. Consoante precisa de uma VOGAL do lado pra ganhar voz. Chame o A! E então aconteceu: B + A = BA! A letra B deu um pulo de alegria.",
    imagemUrl: esquiloBrilha,
  },

  // ------------------------------------------------------------
  // 2 · PREVISÃO
  // ------------------------------------------------------------
  momento02_previsao: {
    instrucao: "Aurora escreveu um cartaz com o segredo do dia. Olhe e adivinhe.",
    bloco: {
      titulo: "O Segredo da Aurora",
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "🔑",
        linhas: ["B + A = BA", "C + A = CA", "P + A = PA"],
        estilo: "cartaz",
      },
      pergunta: "O que esse cartaz está ensinando?",
      hipoteses: [
        { texto: "Que consoante junto com vogal forma uma sílaba." },
        { texto: "Que as letras estão brigando." },
        { texto: "Que B, C e P são números." },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Uma consoante encontra uma vogal e nasce uma SÍLABA: BA, CA, PA.",
      feedbackErro:
        "Olhe o sinal + no cartaz: ele mostra duas letras se JUNTANDO pra formar um pedacinho que a gente lê.",
    },
  },

  // ------------------------------------------------------------
  // 3 · VOCABULÁRIO
  // ------------------------------------------------------------
  momento03_vocabulario: {
    instrucao: "Duas palavras importantes de hoje.",
    cards: [
      {
        palavra: "consoante",
        explicacao:
          "É toda letra do alfabeto que NÃO é vogal: B, C, D, F, G... Ela precisa de uma vogal do lado pra ganhar voz.",
        exemplo: "Em BOLA, o B é consoante e o O é vogal.",
        imagemUrl: bola,
      },
      {
        palavra: "sílaba",
        explicacao:
          "É o pedacinho da palavra que a gente fala de uma vez só, numa batida.",
        exemplo: "CASA tem duas sílabas: CA-SA. Bate palma: 2 palmas!",
        imagemUrl: casa,
      },
    ],
  },

  // ------------------------------------------------------------
  // ENSINO VISUAL — a criança VÊ a consoante encontrando a vogal
  // ------------------------------------------------------------
  momento_ensinoVisual: {
    titulo: "Veja acontecer: consoante + vogal",
    instrucao:
      "Olhe cada par. A letra grande é a consoante; a pequena mostra a mesma letra escrita à mão. Depois leia o exemplo em voz alta.",
    blocos: [
      {
        tipo: "licaoLousa",
        regra:
          "A consoante sozinha não forma sílaba. Ela precisa de uma vogal para poder falar: consoante + vogal = sílaba.",
        comoIdentificar:
          "Tente falar só o B. Sai só um barulinho. Agora junte com o A: BA. Agora sim virou pedacinho de palavra.",
        passos: [
          {
            frase: "B + A = BA  →  BA-NA-NA",
            destaque: ["BA"],
            analise:
              "O B encostou no A e nasceu a sílaba BA. Repetindo pedacinhos assim montamos a palavra BANANA.",
          },
          {
            frase: "M + E = ME  →  ME-SA",
            destaque: ["ME"],
            analise:
              "O M com o E faz ME. Junto com SA, forma MESA. Cada pedacinho tem uma vogal dentro.",
          },
          {
            frase: "P + I = PI  →  PI-PO-CA",
            destaque: ["PI", "PO"],
            analise:
              "PIPOCA tem três batidas: PI-PO-CA. Em todas elas há uma consoante encostada numa vogal.",
            nota: "Bata palmas em cada pedacinho: são 3 palmas.",
          },
        ],
        comparacao: {
          errado: "BNN é uma palavra.",
          certo: "BANANA é uma palavra.",
          porque: "Sem vogal a boca não consegue falar o pedacinho. Toda sílaba precisa de vogal.",
        },
        curiosidade:
          "Existem palavras feitas só de vogais, como UAU e AI — mas nenhuma palavra é feita só de consoantes.",
        resumo: [
          "Consoante sozinha não fala.",
          "Consoante + vogal = sílaba (BA, ME, PI).",
          "Toda sílaba tem pelo menos uma vogal.",
        ],
      },
      {
        tipo: "maiusculaMinuscula",
        pares: [
          { maiuscula: "B", minuscula: "b", exemplo: "B + A = BA (BOLA)" },
          { maiuscula: "C", minuscula: "c", exemplo: "C + A = CA (CASA)" },
          { maiuscula: "P", minuscula: "p", exemplo: "P + A = PA (PATO)" },
          { maiuscula: "L", minuscula: "l", exemplo: "L + U = LU (LUA)" },
          { maiuscula: "S", minuscula: "s", exemplo: "S + A = SA (SAPO)" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------
  // 4 · LEITURA GUIADA
  // ------------------------------------------------------------
  momento04_leituraGuiada: {
    instrucao: "Aurora lê primeiro. Depois leia junto, bem devagar, sílaba por sílaba.",
    leitura: {
      titulo: "A Chave das Sílabas",
      imagemUrl: livro,
      legendaImagem: "O livro das sílabas",
      destacar: ["vogal", "consoante", "sílaba", "BA", "CA", "PA"],
      paragrafos: [
        "A vogal dá voz para a consoante.",
        "B com A faz BA. C com A faz CA. P com A faz PA.",
        "Quando duas sílabas se juntam, nasce uma palavra: BO-LA, CA-SA, PA-TO.",
      ],
    },
  },

  // ------------------------------------------------------------
  // 5 · COMPREENSÃO
  // ------------------------------------------------------------
  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. Tudo está escrito lá.",
    perguntas: [
      {
        pergunta: "Quem dá voz para a consoante?",
        opcoes: ["A vogal", "O ponto final", "Outra consoante"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'A vogal dá voz para a consoante.'",
        feedbackErro: "Leia a primeira frase do texto de novo.",
        ondeEstaNoTexto: "A vogal dá voz para a consoante.",
      },
      {
        pergunta: "O que o C com o A formam?",
        opcoes: ["CA", "AC", "CO"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'C com A faz CA.'",
        feedbackErro: "Está no segundo parágrafo, logo depois de 'B com A faz BA'.",
        ondeEstaNoTexto: "C com A faz CA.",
      },
      {
        pergunta: "O que nasce quando duas sílabas se juntam?",
        opcoes: ["Uma palavra", "Um número", "Um desenho"],
        correta: 0,
        feedbackAcerto: "🎉 Muito bem! Duas sílabas juntas formam uma PALAVRA.",
        feedbackErro: "A resposta está no último parágrafo, logo depois de 'nasce uma...'.",
        ondeEstaNoTexto: "…nasce uma palavra: BO-LA, CA-SA, PA-TO.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 6 · PERSONAGENS & CENÁRIO
  // ------------------------------------------------------------
  momento06_personagensCenario: {
    instrucao: "Na história do começo da aula, as letras eram as personagens.",
    perguntas: [
      {
        pergunta: "Quem estava tristinha no começo da história?",
        opcoes: ["A letra B", "A letra A", "A Aurora"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A letra B não conseguia falar sozinha.",
        feedbackErro: "Lembre: a letra que só fazia 'b...b...b...' era o B.",
      },
      {
        pergunta: "Onde a história aconteceu?",
        opcoes: ["Na biblioteca", "Na praia", "No mercado"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! A letra B estava num canto da BIBLIOTECA.",
        feedbackErro: "É o lugar cheio de livros onde a Aurora trabalha.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 7 · SEQUÊNCIA
  // ------------------------------------------------------------
  momento07_sequencia: {
    instrucao: "Coloque os passos da mágica das letras na ordem certa.",
    bloco: {
      instrucao: "Do primeiro passo até a palavra pronta.",
      itens: [
        { id: "p1", texto: "A consoante B aparece sozinha", imagemUrl: livro },
        { id: "p2", texto: "A vogal O chega perto do B" },
        { id: "p3", texto: "B + O formam a sílaba BO" },
        { id: "p4", texto: "BO + LA formam a palavra BOLA", imagemUrl: bola },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Letra → sílaba → palavra. É assim que a leitura nasce.",
      feedbackErro:
        "Pense: primeiro vem a letra sozinha, depois ela encontra a vogal, aí forma a sílaba e só no fim a palavra.",
    },
  },

  // ------------------------------------------------------------
  // 8 · LEITURA INDEPENDENTE
  // ------------------------------------------------------------
  momento08_leituraIndependente: {
    instrucao: "Agora é você. Leia sozinho, batendo palma em cada sílaba.",
    leitura: {
      titulo: "O pato e o sapo",
      imagemUrl: pato,
      destacar: ["PA-TO", "SA-PO", "LA-GO"],
      paragrafos: [
        "O PA-TO nada no LA-GO.",
        "O SA-PO pula perto do PA-TO.",
        "Os dois são amigos.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantas sílabas tem a palavra PATO?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! PA-TO: duas palmas, duas sílabas.",
        feedbackErro: "Bata palma falando: PA (1) — TO (2). São duas.",
        ondeEstaNoTexto: "O PA-TO nada no LA-GO.",
      },
      {
        pergunta: "Onde o pato nada?",
        opcoes: ["No lago", "Na casa", "Na rua"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Está escrito: 'nada no LA-GO'.",
        feedbackErro: "Leia a primeira frase de novo, até o fim.",
        ondeEstaNoTexto: "O PA-TO nada no LA-GO.",
      },
    ],
  },

  // ------------------------------------------------------------
  // MINIJOGO — montar palavras com sílabas
  // ------------------------------------------------------------
  momento_minijogo: {
    titulo: "A Fábrica de Palavras",
    instrucao: "Junte as sílabas na ordem certa e forme a palavra.",
    jogo: {
      tipo: "montarPalavra",
      titulo: "Monte a palavra",
      bloco: {
        instrucao: "Toque nas sílabas na ordem certa.",
        palavras: [
          {
            id: "w1",
            palavraCerta: "BOLA",
            silabas: ["BO", "LA"],
            imagemUrl: bola,
            frase: "A BOLA rolou no chão.",
          },
          {
            id: "w2",
            palavraCerta: "CASA",
            silabas: ["CA", "SA"],
            imagemUrl: casa,
            frase: "A CASA tem uma janela azul.",
          },
          {
            id: "w3",
            palavraCerta: "GATO",
            silabas: ["GA", "TO"],
            imagemUrl: gato,
            frase: "O GATO dorme no sofá.",
          },
          {
            id: "w4",
            palavraCerta: "LUA",
            silabas: ["LU", "A"],
            imagemUrl: lua,
            frase: "A LUA apareceu no céu.",
          },
        ],
        feedbackAcerto: "🎉 Muito bem! Você juntou consoante com vogal e leu a palavra.",
        feedbackErro: "Fale a palavra devagar e escute qual pedacinho vem primeiro.",
      },
    },
  },

  // ------------------------------------------------------------
  // 9 · REVISÃO
  // ------------------------------------------------------------
  momento09_revisao: {
    pontos: [
      "Consoante é toda letra que não é vogal.",
      "A vogal dá voz para a consoante: B + A = BA.",
      "Sílaba é o pedacinho que a gente fala numa batida só.",
      "Duas sílabas juntas formam uma palavra: BO-LA.",
    ],
    miniDesafio: {
      pergunta: "S + A formam qual sílaba?",
      opcoes: ["AS", "SA", "SO"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! S com A faz SA, como em SA-PO.",
      feedbackErro: "A consoante vem na frente e a vogal atrás: S depois A = SA.",
    },
  },

  // ------------------------------------------------------------
  // 10 · AVALIAÇÃO
  // ------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual destas letras é uma CONSOANTE?",
        opcoes: ["A", "P", "U"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! P é consoante. A e U são vogais.",
        feedbackErro: "As vogais são A, E, I, O, U. Todas as outras são consoantes.",
      },
      {
        pergunta: "2/5 — C + A formam...",
        opcoes: ["CA", "AC", "CE"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! CA, como no começo de CASA.",
        feedbackErro: "A consoante vem primeiro: C depois A = CA.",
      },
      {
        pergunta: "3/5 — Quantas sílabas tem CASA?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! CA-SA: duas palmas.",
        feedbackErro: "Bata palma: CA (1) — SA (2).",
      },
      {
        pergunta: "4/5 — Quais sílabas formam a palavra PATO?",
        opcoes: ["PA + TO", "TO + PA", "PO + TA"],
        correta: 0,
        feedbackAcerto: "🎉 Muito bem! PA-TO, nessa ordem.",
        feedbackErro: "Fale devagar: primeiro PA, depois TO.",
      },
      {
        pergunta: "5/5 — Por que a consoante precisa da vogal?",
        opcoes: [
          "Porque a vogal dá voz a ela",
          "Porque a vogal é maior",
          "Porque a consoante é a última letra",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Perfeito! Sem vogal a consoante não fala. Você conquistou a Chave do Alfabeto! 🔑",
        feedbackErro:
          "Lembre da letra B tristinha: só depois que o A chegou ela conseguiu falar BA.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 11 · MISSÃO EM FAMÍLIA
  // ------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "🏠 A fábrica de sílabas de casa",
    materiais: ["Papel", "Lápis ou giz de cera", "Tesoura sem ponta (com um adulto)"],
    passos: [
      "1) Escreva em papéis separados as vogais A, E, I, O, U.",
      "2) Escreva em outros papéis as consoantes B, C, L, P, S.",
      "3) Junte uma consoante com uma vogal e LEIA em voz alta a sílaba que apareceu.",
      "4) Tente formar 3 palavras de verdade juntando duas sílabas (ex.: BO + LA).",
    ],
    registro: "📸 Uma foto das palavras que você montou com os papeizinhos.",
  },

  recompensa: {
    xp: 150,
    moedas: 90,
    medalha: "Chave do Alfabeto",
  },
};
