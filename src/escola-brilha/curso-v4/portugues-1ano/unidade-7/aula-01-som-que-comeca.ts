import type { AulaPortuguesV4 } from "../../types";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * Unidade 7 · Aula 1 — O Som que Começa
 * -------------------------------------------------------------
 * CONSCIÊNCIA FONÊMICA — som inicial.
 * O estímulo é o SOM, não a escrita: a criança ouve a palavra e
 * isola o primeiro fonema (/s/ de SOL, /p/ de PATO).
 *
 * BNCC: EF01LP04 · EF01LP05 · EF01LP07
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-som-que-comeca",
  titulo: "O Som que Começa",
  iconeTrilha: "👂",
  bncc: ["EF01LP04", "EF01LP05", "EF01LP07"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Ouvido Mágico chegou!",
    historia:
      "Aurora trouxe uma amiga nova: a Coruja Ouvidão. Ela não enxerga muito bem, mas ESCUTA tudo! — Eu não preciso ver a palavra escrita. Eu escuto o som que ela faz no começo! Sol começa com sssss. Feche os olhos e escute comigo.",
    imagemUrl: coruja,
  },

  momento02_previsao: {
    instrucao: "A Coruja Ouvidão deixou um bilhete com uma pista sonora.",
    bloco: {
      titulo: "O Bilhete da Coruja",
      recado: {
        rotulo: "Pista sonora",
        icone: "👂",
        linhas: ["ssss...", "SOL", "SAPO"],
        estilo: "cartaz",
      },
      pergunta: "O que SOL e SAPO têm em comum?",
      hipoteses: [
        { texto: "Começam com o mesmo som: ssss." },
        { texto: "São a mesma palavra." },
        { texto: "Terminam com o mesmo som." },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Sol e Sapo começam com o som /s/ — ssssss.",
      feedbackErro: "Escute o comecinho: sssol… sssapo… é o mesmo barulhinho no começo!",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras da Coruja Ouvidão.",
    cards: [
      {
        palavra: "som",
        explicacao: "É o barulhinho que a gente ESCUTA. Não dá pra ver, só ouvir.",
        exemplo: "O som do sino é: tim-tim!",
        imagemUrl: coruja,
      },
      {
        palavra: "som inicial",
        explicacao: "É o primeiro barulhinho que a boca faz quando fala a palavra.",
        exemplo: "O som inicial de BOLA é /b/.",
        imagemUrl: bola,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Escute o primeiro som de cada palavra",
    instrucao:
      "Toque em cada figura. Você vai ouvir a palavra inteira e depois só o primeiro somzinho dela. Repita com a boca junto com a Coruja!",
    blocos: [
      {
        tipo: "somInicial",
        itens: [
          { palavra: "SOL", fonema: "s", imagemUrl: sol },
          { palavra: "SAPO", fonema: "s", imagemUrl: sapo },
          { palavra: "BOLA", fonema: "b", imagemUrl: bola },
          { palavra: "PATO", fonema: "p", imagemUrl: pato },
          { palavra: "GATO", fonema: "g", imagemUrl: gato },
          { palavra: "MAÇÃ", fonema: "m", imagemUrl: maca },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos a história da Coruja Ouvidão.",
    leitura: {
      titulo: "A Coruja que Escutava Tudo",
      imagemUrl: coruja,
      legendaImagem: "A Coruja Ouvidão de olhos fechados",
      destacar: ["SOM", "SOL", "SAPO"],
      paragrafos: [
        "A Coruja Ouvidão fechou os olhos e escutou o SOL: sssol.",
        "Depois escutou o SAPO: sssapo.",
        "— Que engraçado! Os dois começam com o mesmo SOM: ssss — disse ela.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que a Coruja Ouvidão faz de olhos fechados?",
        opcoes: ["Escuta os sons", "Desenha as letras", "Conta números"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ela ESCUTA.",
        feedbackErro: "Está no começo: ela fechou os olhos e ES-CU-TOU.",
        ondeEstaNoTexto: "A Coruja Ouvidão fechou os olhos e escutou o SOL.",
      },
      {
        pergunta: "Qual som SOL e SAPO têm no começo?",
        opcoes: ["/p/", "/s/", "/m/"],
        correta: 1,
        feedbackAcerto: "🎉 Correto: ssss.",
        feedbackErro: "Fale bem devagar: sss-ol, sss-apo.",
        ondeEstaNoTexto: "Os dois começam com o mesmo SOM: ssss.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Personagem é quem faz a ação.",
    perguntas: [
      {
        pergunta: "Quem é a personagem da história?",
        opcoes: ["A Coruja Ouvidão", "O sapo", "A Ana"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! É a Coruja Ouvidão.",
        feedbackErro: "Quem fechou os olhos e escutou?",
      },
      {
        pergunta: "Qual dessas palavras NÃO começa com /s/?",
        opcoes: ["SAPO", "SOL", "PATO"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! PATO começa com /p/.",
        feedbackErro: "Fale devagar: p-ato. É o som /p/, não /s/.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem o que a Coruja fez.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "A Coruja fechou os olhos.", imagemUrl: coruja },
        { id: "p2", texto: "Ela escutou SOL e SAPO.", imagemUrl: sol },
        { id: "p3", texto: "Ela descobriu o som /s/ no começo.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito!",
      feedbackErro: "Primeiro fecha os olhos, depois escuta, por último descobre.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho.",
    leitura: {
      titulo: "O Som da Mila",
      imagemUrl: menina,
      destacar: ["MILA", "M"],
      paragrafos: [
        "Mila falou seu nome bem devagar: mmm-ila.",
        "O primeiro som do nome dela é /m/, igual ao de MAÇÃ.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o primeiro som do nome MILA?",
        opcoes: ["/l/", "/m/", "/a/"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! /m/ de mmmila.",
        feedbackErro: "Está escrito: 'O primeiro som do nome dela é ___'.",
        ondeEstaNoTexto: "O primeiro som do nome dela é /m/.",
      },
    ],
  },

  // ------------------------------------------------------------
  // ESCRITA — traçado com o dedo + ditado com sílabas móveis
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Agora escreva o som que você ouviu",
    instrucao: "A Coruja escutou o som. Agora sua mão desenha a letra desse som.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "S", exemplo: "S de SOL, som /ssss/", dicaTracado: "desce fazendo uma cobrinha" },
          { letra: "M", exemplo: "M de MALA, som /mmm/", dicaTracado: "desce, sobe, desce, sobe" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "SAPO", silabas: ["SA", "PO"], distratores: ["LO", "TE"], dica: "Começa com o som /s/." },
          { palavra: "MALA", silabas: ["MA", "LA"], distratores: ["BO", "TI"], dica: "Começa com o som /m/." },
        ],
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "SOM é o que a gente escuta, não o que a gente vê.",
      "Toda palavra tem um SOM INICIAL — o primeiro barulhinho.",
      "Palavras diferentes podem começar com o mesmo som (SOL e SAPO).",
    ],
    miniDesafio: {
      pergunta: "Qual palavra começa com o som /b/?",
      opcoes: ["GATO", "BOLA", "SAPO"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! B-B-BOLA.",
      feedbackErro: "Fale devagar: b-ola. O som /b/ está no começo de BOLA.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual é o som inicial de SOL?",
        opcoes: ["/l/", "/s/", "/o/", "/p/"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! sss-ol.",
        feedbackErro: "O primeiro som é o do comecinho: sss.",
        dica: "Fale a palavra bem devagar e pare no primeiro barulhinho: s-s-s...",
        reensino:
          "SOL começa com /s/. O som /s/ é aquele barulhinho de cobrinha: ssssss. Escute: sss-ol.",
      },
      {
        pergunta: "2/5 — Qual palavra começa com o MESMO som de SAPO?",
        opcoes: ["SOL", "PATO", "GATO", "MAÇÃ"],
        correta: 0,
        feedbackAcerto: "🎉 SAPO e SOL começam com /s/.",
        feedbackErro: "Escute: sss-apo… qual outra começa com sss?",
        dica: "Diga cada opção bem devagar e escute só o começo.",
        reensino: "SAPO = /s/. SOL = /s/. São iguais no começo. PATO é /p/, GATO é /g/.",
      },
      {
        pergunta: "3/5 — Qual é o som inicial de PATO?",
        opcoes: ["/t/", "/a/", "/p/", "/o/"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! /p/.",
        feedbackErro: "O comecinho de PATO é o som /p/.",
        dica: "Junte os lábios e solte o ar: p!",
        reensino: "PATO começa com /p/ — o mesmo som de PÉ, PIPA e PORTA.",
      },
      {
        pergunta: "4/5 — Qual palavra NÃO começa com /m/?",
        opcoes: ["MAÇÃ", "MILA", "MÃO", "GATO"],
        correta: 3,
        feedbackAcerto: "🎉 Isso! GATO começa com /g/.",
        feedbackErro: "Três dessas começam com mmm. Qual é a diferente?",
        dica: "Fale: mmmaçã, mmmila, mmmão, gato. Qual não tem mmm?",
        reensino: "O som /m/ é feito com a boca fechada: mmmm. GATO começa com /g/, não com /m/.",
      },
      {
        pergunta: "5/5 — O som inicial é o som que fica...",
        opcoes: ["No fim da palavra", "No começo da palavra", "No meio", "Fora da palavra"],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! Ouvido mágico ligado! 🌟",
        feedbackErro: "INICIAL vem de INÍCIO — é o começo.",
        dica: "INICIAL parece com a palavra INÍCIO.",
        reensino: "Som INICIAL = o primeiro som, lá no COMEÇO da palavra.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça ao som",
    materiais: ["Sua casa", "Um adulto para brincar junto"],
    passos: [
      "1) Escolha um som: /s/, /b/ ou /m/.",
      "2) Ande pela casa procurando 3 objetos que COMECEM com esse som.",
      "3) Fale cada objeto bem devagar, esticando o primeiro som: sss-abonete!",
      "4) Peça para o adulto escolher outro som e brinque de novo.",
    ],
    registro: "📸 Uma foto dos objetos encontrados juntos na mesa.",
  },

  momento_fluencia: {
    titulo: "Ler ouvindo o som do começo",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho no cronômetro e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "SAPO SOL SUCO",
      "MALA MEL MIL",
    ],
    metaSegundos: 18,
  },

  recompensa: { xp: 110, moedas: 65 },
};
