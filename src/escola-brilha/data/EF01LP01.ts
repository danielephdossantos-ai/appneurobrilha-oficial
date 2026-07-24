import type { Aula } from "../types";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as cachorroImg } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as ratoImg } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as vacaImg } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as dadoImg } from "@/assets/neuro-treino/objetos/dado.png.asset.json";

/**
 * EF01LP01 — Aula 001 · Biblioteca Encantada com Letra
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 *
 * REFORMA ESTRUTURAL (Lote 1)
 * BNCC: EF01LP02 (consciência fonológica) + EF01LP01 (protocolos de leitura).
 *
 * Base científica:
 *  - National Reading Panel (NRP, 2000): consciência fonêmica é o
 *    preditor #1 de sucesso na alfabetização.
 *  - Heggerty (2020): som inicial é a habilidade de entrada em fonêmica.
 *  - Orton-Gillingham: multissensorial (ouvir + falar + ver imagem + tocar).
 *
 * Missão: "Que som começa a palavra?" — o Brilha vai ensinar a criança a
 * ESCUTAR o primeiro som de cada palavra antes de aprender qualquer letra.
 * É o alicerce de tudo o que vem depois na Biblioteca Encantada.
 */
const aula: Aula = {
  codigo: "EF01LP01",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "O Primeiro Som da Palavra",

  narrativa: {
    titulo: "O Primeiro Som da Palavra",
    contexto:
      "O Brilha ganhou um Rádio Mágico que só toca o COMEÇO das palavras. Quando ele apertou o botão, ouviu: /g/... /g/... /g/... e apareceu um GATO! Depois: /s/... /s/... /s/... e apareceu um SOL!",
    problema:
      "Agora o Rádio está tocando sons soltinhos e o Brilha precisa descobrir que palavra é. Cada palavra do mundo tem um PRIMEIRO SOM — e é ele que faz a mágica acontecer.",
    convite: "Bora treinar o ouvido do Brilha pra escutar o começo das palavras?",
  },

  conhecimentosPrevios: [
    "Falar o nome de figuras conhecidas (gato, sol, bola).",
    "Escutar com atenção sons curtos.",
    "Repetir uma palavra em voz alta.",
  ],

  missao:
    "Descobrir que toda palavra começa por um SOM — e treinar o ouvido pra escutar esse primeiro som antes de qualquer letra escrita.",

  objetivos: [
    "Isolar o primeiro som (fonema inicial) de palavras faladas.",
    "Perceber que palavras diferentes podem começar pelo MESMO som.",
    "Associar um som ouvido a uma figura correspondente.",
    "Preparar o ouvido para a fase de letras (alfabético) das próximas aulas.",
  ],

  motivacao:
    "Antes de ler com os olhos, a gente lê com o OUVIDO. Quem escuta bem o começo das palavras vira leitor rápido — e é isso que a gente vai treinar agora.",

  explicacao:
    "Toda palavra é feita de SONS grudadinhos.\n\nO PRIMEIRO SOM é aquele que sai da boca ANTES de todos os outros.\n\n👉 GATO começa com /g/ (a garganta encosta).\n👉 SOL começa com /s/ (a boca faz cobrinha).\n👉 BOLA começa com /b/ (os lábios batem).\n👉 PATO começa com /p/ (um sopro rapidinho).\n\nQuando duas palavras começam com o mesmo som, elas são AMIGAS DE SOM. Por exemplo: SOL e SAPO — as duas começam com /s/.\n\nPor enquanto a gente só ESCUTA. As letras vêm depois. Primeiro o ouvido, depois o olho.",

  explicacaoAtiva: [
    {
      texto:
        "Toda palavra começa com um SOM. Fecha o olho e escuta o Brilha falar: /g/... /g/... /g/... GATO. O /g/ é o primeiro som.",
      exemplo: "Fala BOLA bem devagar: /b/... OLA. O /b/ é o começo.",
      imagem: gatoImg,
      imagemAlt: "Gato — começa com /g/",
      checagem: {
        pergunta: "Qual figura começa com /g/... /g/... como GATO?",
        opcoes: ["Gato", "Sol", "Bola"],
        correta: 0,
        explicacao: "Isso! GATO começa com o mesmo som que /g/... /g/...",
      },
    },
    {
      texto:
        "Duas palavras podem ser AMIGAS DE SOM: quando começam iguais. Ex.: SOL e SAPO — as duas começam com /s/.",
      exemplo: "Fala em voz alta: /s/... SOL. /s/... SAPO. Percebe que é igual?",
      imagem: solImg,
      imagemAlt: "Sol — começa com /s/",
      checagem: {
        pergunta: "Qual palavra é AMIGA DE SOM de SOL (começa com /s/)?",
        opcoes: ["Bola", "Sapo", "Gato"],
        correta: 1,
        explicacao: "SAPO começa com /s/, igualzinho a SOL.",
      },
    },
    {
      texto:
        "O primeiro som fica ESCONDIDO no começo — a gente só precisa escutar com atenção antes de sair falando o resto da palavra.",
      exemplo: "PATO começa com /p/. Coloca a mão na boca e sente o sopro: /p/.",
      imagem: patoImg,
      imagemAlt: "Pato — começa com /p/",
      checagem: {
        pergunta: "Qual figura começa com /p/... /p/... como PATO?",
        opcoes: ["Sol", "Pato", "Gato"],
        correta: 1,
        explicacao: "PATO começa com /p/. Você escutou o sopro do começo!",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Toda palavra tem um PRIMEIRO SOM. GATO começa com /g/.",
    nivel2:
      "SOL e SAPO começam iguais — os dois com /s/. Elas são amigas de som.",
    nivel3:
      "É como uma corrida: o primeiro som chega na frente, os outros vêm atrás. /b/... OLA = BOLA.",
    nivel4:
      "Escutar o primeiro som é o TREINO SECRETO dos leitores. Faça isso com o nome das pessoas da casa: /m/... AMÃE, /p/... APAI.",
  },

  exemploResolvido: {
    enunciado:
      "O Rádio Mágico tocou: /g/... /g/... /g/... Qual figura o Rádio está chamando?",
    passos: [
      "Escute o som soltinho: /g/... /g/... /g/...",
      "Olhe as figuras: GATO, SOL, BOLA.",
      "Fale cada uma bem devagar: /g/ATO, /s/OL, /b/OLA.",
      "Só GATO começa igual a /g/... /g/...",
    ],
    resposta: "É o GATO — ele começa com /g/, mesmo som do Rádio.",
  },

  atividadeGuiada: {
    enunciado:
      "O Rádio tocou /s/... /s/... /s/... Toque na figura que começa com esse som.",
    resposta: "SOL — porque começa com /s/, igual ao som do Rádio.",
    explicacao:
      "Fale devagar cada figura antes de tocar: /s/OL — /g/ATO — /b/OLA. Só o SOL começa com /s/.",
    visual: {
      tipo: "escolherImagem",
      pergunta:
        "Toque na figura que começa com /s/... /s/... /s/... como o Rádio Mágico tocou.",
      opcoes: [
        { nome: "sol", imagemUrl: solImg },
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "bola", imagemUrl: bolaImg },
        { nome: "pato", imagemUrl: patoImg },
      ],
      respostaCerta: "sol",
    },
  },

  exercicios: [
    {
      enunciado:
        "🔊 O Rádio tocou /p/... /p/... /p/... Qual figura começa com esse som: PATO, SOL ou GATO?",
      resposta: "PATO — começa com /p/.",
      dica: "Fale cada uma devagar e escute o começo: /p/ATO, /s/OL, /g/ATO.",
    },
    {
      enunciado:
        "🎧 SAPO e SOL começam iguais? Sim ou não? Escute o começo de cada um.",
      resposta:
        "Sim! Os dois começam com /s/. São amigos de som.",
      dica: "Fale /s/APO e /s/OL. O começo é o mesmo som.",
    },
    {
      enunciado:
        "🐱 Qual palavra é AMIGA DE SOM do GATO (começa com /g/)?",
      resposta:
        "Também começa com /g/: gato, girafa, galo. Nesta aula: só o gato aparece.",
      dica: "Procure figuras que começam com /g/... /g/...",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: o Rádio Mágico vai tocar 3 sons diferentes. Toque na figura que começa com CADA som. Cuidado — algumas figuras são pegadinhas!",
    resposta:
      "1) /r/ → RATO · 2) /v/ → VACA · 3) /d/ → DADO. Sempre escute o primeiro som antes de escolher.",
    visual: {
      cena: [
        { personagem: "🔊 Toca /r/", itemImagemUrl: ratoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "🔊 Toca /v/", itemImagemUrl: vacaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "🔊 Toca /d/", itemImagemUrl: dadoImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "O Rádio tocou /r/... /r/... /r/... Qual figura é?",
          opcoes: ["Vaca", "Rato", "Dado"],
          correta: 1,
          explicacao: "RATO começa com /r/. As outras começam com /v/ e /d/.",
        },
        {
          pergunta: "O Rádio tocou /v/... /v/... /v/... Qual figura é?",
          opcoes: ["Vaca", "Rato", "Dado"],
          correta: 0,
          explicacao: "VACA começa com /v/ (o lábio de baixo encosta no dente).",
        },
        {
          pergunta: "O Rádio tocou /d/... /d/... /d/... Qual figura é?",
          opcoes: ["Vaca", "Rato", "Dado"],
          correta: 2,
          explicacao: "DADO começa com /d/. A língua bate atrás dos dentes.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Toda palavra começa com um SOM (o primeiro fonema).",
      "GATO começa com /g/, SOL com /s/, BOLA com /b/, PATO com /p/.",
      "Palavras que começam com o mesmo som são AMIGAS DE SOM (ex.: SOL e SAPO).",
      "Primeiro escutamos o som — as letras vêm nas próximas aulas.",
    ],
    dica: "Quando olhar uma figura, fale devagar e ESCUTE o começo antes de responder.",
  },

  quiz: [
    {
      pergunta: "Qual figura começa com o som /g/, como GATO?",
      opcoes: ["Gato", "Sol", "Bola"],
      correta: 0,
      explicacao: "GATO começa com /g/. Você treinou o ouvido!",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
          { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        ],
      },
    },
    {
      pergunta: "SOL e SAPO começam com o mesmo som?",
      opcoes: ["Sim, os dois com /s/", "Não, sons diferentes", "Só o SOL tem som"],
      correta: 0,
      explicacao: "Isso! /s/OL e /s/APO — as duas com /s/. São amigas de som.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: solImg, quantidade: 1, rotulo: "/s/OL", cor: "#FBBF24" },
          { imagemUrl: sapoImg, quantidade: 1, rotulo: "/s/APO", cor: "#34D399" },
        ],
      },
    },
    {
      pergunta: "Qual figura começa com /p/, como PATO?",
      opcoes: ["Casa", "Pato", "Rato"],
      correta: 1,
      explicacao: "PATO começa com /p/. Você sente o sopro na boca!",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: casaImg, quantidade: 1, rotulo: "casa" },
          { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
          { imagemUrl: ratoImg, quantidade: 1, rotulo: "rato" },
        ],
      },
    },
    {
      pergunta: "Por que a gente treina escutar o começo das palavras?",
      opcoes: [
        "Pra ficar melhor em ler e escrever depois",
        "Pra falar mais alto",
        "Pra decorar figuras",
      ],
      correta: 0,
      explicacao:
        "Consciência fonêmica é o alicerce da leitura — quem escuta bem, lê melhor (NRP, 2000).",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Ouvido de Leitor! Você treinou hoje a habilidade mais importante pra ler: escutar o primeiro som das palavras. Missão em Casa: brinque com um adulto de falar 3 palavras de casa (mãe, pai, cachorro, mesa, sofá) bem devagar e descobrir o primeiro som de cada uma.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Todo grande leitor começou aqui: escutando o começo das palavras. Cientistas do National Reading Panel descobriram que crianças que treinam ESCUTAR os sons antes de ver as letras aprendem a ler bem mais rápido e sem sofrer. É o segredo do ouvido de leitor!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · O Rádio Tocou /g/",
      instrucao:
        "O Rádio Mágico do Brilha começou tocando /g/... /g/... /g/... Qual figura ele está chamando?",
      grupos: [{ imagemUrl: gatoImg, quantidade: 1, rotulo: "figura misteriosa" }],
      pergunta: "Qual palavra começa com /g/?",
      opcoes: ["Sol", "Gato", "Bola"],
      correta: 1,
      acerto: "Isso! GATO começa com /g/, o mesmo som do Rádio.",
      erro: "Fale devagar: /g/ATO, /s/OL, /b/OLA. Só GATO começa com /g/.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Amigos de Som",
      instrucao:
        "Ligue cada figura ao SOM que ela começa. Fale devagar antes de ligar.",
      pares: [
        { a: "/g/", b: "Gato", aImagem: estrelaImg, bImagem: gatoImg },
        { a: "/s/", b: "Sol", aImagem: estrelaImg, bImagem: solImg },
        { a: "/b/", b: "Bola", aImagem: estrelaImg, bImagem: bolaImg },
        { a: "/p/", b: "Pato", aImagem: estrelaImg, bImagem: patoImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Pegadinha de /s/",
      instrucao:
        "O Rádio tocou /s/. CUIDADO: duas figuras podem parecer certas. Toque só na que REALMENTE começa com /s/.",
      grupos: [
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      ],
      pergunta: "Qual dessas começa com /s/? (Só uma opção nesta pergunta)",
      opcoes: ["Sol", "Gato", "Bola"],
      correta: 0,
      acerto: "Isso! SOL começa com /s/. SAPO também — os dois são amigos de som.",
      erro: "Fale devagar: /s/OL. É o som que vem primeiro.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · A Ordem dos Sons",
      instrucao:
        "O Rádio tocou 3 sons na ordem: /g/ → /s/ → /b/. Coloque as figuras na MESMA ordem.",
      itens: ["gato (/g/)", "sol (/s/)", "bola (/b/)"],
      imagens: [
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "1º · /g/" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "2º · /s/" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "3º · /b/" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Novos Sons",
      instrucao:
        "O Rádio tocou /v/... /v/... /v/... Qual figura é? Fale VACA, PATO e CASA bem devagar antes de escolher.",
      grupos: [
        { imagemUrl: vacaImg, quantidade: 1, rotulo: "vaca" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        { imagemUrl: casaImg, quantidade: 1, rotulo: "casa" },
      ],
      pergunta: "Qual começa com /v/?",
      opcoes: ["Pato", "Casa", "Vaca"],
      correta: 2,
      acerto: "Muito bem! VACA começa com /v/ — sinta o lábio de baixo tocando o dente.",
      erro: "Fale /v/ACA. O primeiro som é /v/.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual figura começa com /g/... /g/... como GATO?",
        opcoes: ["Sol", "Gato", "Bola"],
        correta: 1,
        explicacao: "GATO começa com /g/.",
        visual: {
          tipo: "itens",
          imagemUrl: gatoImg,
          quantidade: 1,
          rotulo: "gato",
        },
      },
      {
        pergunta: "Qual figura começa com /s/... /s/... como SOL?",
        opcoes: ["Sol", "Bola", "Pato"],
        correta: 0,
        explicacao: "SOL começa com /s/.",
        visual: {
          tipo: "itens",
          imagemUrl: solImg,
          quantidade: 1,
          rotulo: "sol",
        },
      },
      {
        pergunta: "Qual figura começa com /b/... /b/... como BOLA?",
        opcoes: ["Gato", "Bola", "Sol"],
        correta: 1,
        explicacao: "BOLA começa com /b/. Os lábios batem juntos.",
        visual: {
          tipo: "itens",
          imagemUrl: bolaImg,
          quantidade: 1,
          rotulo: "bola",
        },
      },
    ],
    medio: [
      {
        pergunta: "SOL e SAPO começam com o mesmo som?",
        opcoes: ["Sim, os dois com /s/", "Não", "Só o SAPO"],
        correta: 0,
        explicacao: "Os dois começam com /s/ — são amigos de som.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: solImg, quantidade: 1, rotulo: "/s/OL", cor: "#FBBF24" },
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "/s/APO", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta: "Qual palavra é AMIGA DE SOM do GATO (começa com /g/)?",
        opcoes: ["Pato", "Gato-galo (do mesmo som)", "Bola"],
        correta: 1,
        explicacao: "Palavras com /g/ inicial (galo, girafa) são amigas de som do gato.",
        visual: {
          tipo: "itens",
          imagemUrl: gatoImg,
          quantidade: 1,
          rotulo: "/g/ATO",
        },
      },
      {
        pergunta: "O Rádio tocou /p/. Qual figura é?",
        opcoes: ["Vaca", "Pato", "Rato"],
        correta: 1,
        explicacao: "PATO começa com /p/, um sopro rápido.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: vacaImg, quantidade: 1, rotulo: "vaca" },
            { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
            { imagemUrl: ratoImg, quantidade: 1, rotulo: "rato" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Qual dessas figuras NÃO começa com /s/?",
        opcoes: ["Sol", "Sapo", "Rato"],
        correta: 2,
        explicacao: "SOL e SAPO começam com /s/. RATO começa com /r/.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
            { imagemUrl: ratoImg, quantidade: 1, rotulo: "rato" },
          ],
        },
      },
      {
        pergunta:
          "O Rádio tocou 3 sons: /g/, /s/, /b/. Qual figura entra no MEIO da ordem?",
        opcoes: ["Gato", "Sol", "Bola"],
        correta: 1,
        explicacao: "A ordem é /g/ → /s/ → /b/. No meio fica /s/ = SOL.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "1º /g/", cor: "#FBBF24" },
            { imagemUrl: solImg, quantidade: 1, rotulo: "Meio /s/", cor: "#60A5FA" },
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "3º /b/", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta:
          "Por que a gente escuta o som ANTES de ver a letra?",
        opcoes: [
          "Porque letra é mais difícil",
          "Porque o ouvido é a porta da leitura",
          "Porque é mais rápido",
        ],
        correta: 1,
        explicacao:
          "A ciência da leitura mostra: quem escuta bem os sons vira leitor mais rápido. Primeiro o ouvido, depois o olho.",
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP02",
    titulo: "Aliteração e Rima — palavras que combinam de som",
  },
};

export default aula;
