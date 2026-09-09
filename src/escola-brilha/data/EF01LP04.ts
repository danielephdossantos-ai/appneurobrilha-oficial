import type { Aula } from "../types";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as madeiraImg } from "@/assets/neuro-treino/objetos/madeira.png.asset.json";
import { url as mapaImg } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mochilaImg } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as menino2Img } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as moedaImg } from "@/assets/neuro-treino/objetos/moeda.png.asset.json";
import { url as minhocaImg } from "@/assets/neuro-treino/objetos/minhoca.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP04 — Aula 004 · Letra M · som /m/
 * Primeira consoante ensinada: nasal contínua, alta frequência, fácil de sentir na boca.
 * Base: Orton-Gillingham (multissensorial: ver M · falar /m/ · sentir vibração nos lábios).
 */
const aula: Aula = {
  codigo: "EF01LP04",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "A Letra M — o Som da Mamãe",

  narrativa: {
    titulo: "A Letra M — o Som da Mamãe",
    contexto:
      "O Brilha bateu na porta da letra M. Ela morava numa casa com duas montanhinhas: M. Toda vez que a boca fecha os lábios e o ar sai pelo nariz, aparece o som /m/.",
    problema:
      "A letra M está chamando as figuras dela: MÃE, MAÇÃ, MOCHILA, MAPA, MENINO. Todas começam com /m/.",
    convite: "Bora fechar os lábios e sentir o /m/ vibrar?",
  },

  conhecimentosPrevios: [
    "Reconhecer as 5 vogais.",
    "Isolar o primeiro som de uma palavra.",
    "Falar palavras devagar.",
  ],

  missao:
    "Associar a letra M ao som /m/ e reconhecer palavras que começam com esse som.",

  objetivos: [
    "Reconhecer o som /m/ no começo de palavras.",
    "Associar a letra M (maiúscula) ao som /m/.",
    "Distinguir M de outras consoantes.",
    "Sentir a vibração dos lábios ao produzir /m/.",
  ],

  motivacao:
    "MÃE é a primeira palavra que quase todo bebê fala no mundo — e ela começa com /m/. Aprender M é ganhar a primeira letra do coração.",

  explicacao:
    "A letra M faz o som /m/.\n\n👉 Como fazer: feche os lábios, junte, e deixe o ar sair pelo nariz. Sente a vibração?\n👉 Palavras com M: MÃE · MAÇÃ · MAPA · MOCHILA · MENINO · MENINA · MOEDA.\n\nO M gruda com vogais para formar sílabas:\nM + A = MA · M + E = ME · M + I = MI · M + O = MO · M + U = MU.\n\nA gente ainda não vai LER sílabas — só vai reconhecer o som /m/ no COMEÇO das palavras.",

  explicacaoAtiva: [
    {
      texto: "A letra M tem 2 montanhinhas. O som dela é /m/ — os lábios fecham.",
      exemplo: "Fale: /mmmm/... MÃE. Sente o zumbido nos lábios?",
      imagem: maeImg,
      imagemAlt: "Mãe — /m/",
      checagem: {
        pergunta: "Qual figura começa com /m/?",
        opcoes: ["Mãe", "Sol", "Gato"],
        correta: 0,
        explicacao: "MÃE — /m/.",
      },
    },
    {
      texto: "MAÇÃ, MAPA e MOCHILA também começam com /m/.",
      exemplo: "Fale: /m/AÇÃ, /m/APA, /m/OCHILA.",
      imagem: macaImg,
      imagemAlt: "Maçã — /m/",
      checagem: {
        pergunta: "Qual figura começa com /m/?",
        opcoes: ["Bola", "Maçã", "Sol"],
        correta: 1,
        explicacao: "MAÇÃ — /m/.",
      },
    },
    {
      texto: "Cuidado com pegadinhas: BOLA começa com /b/, não com /m/. Fale devagar.",
      exemplo: "MENINO (/m/) x BOLA (/b/) — sons diferentes.",
      imagem: menino2Img,
      imagemAlt: "Menino — /m/",
      checagem: {
        pergunta: "Qual dessas NÃO começa com /m/?",
        opcoes: ["Menina", "Mapa", "Bola"],
        correta: 2,
        explicacao: "BOLA começa com /b/. As outras com /m/.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "A letra M tem som /m/. Lábios fechados vibrando.",
    nivel2: "MÃE, MAÇÃ, MAPA, MOCHILA, MENINO — todas com /m/.",
    nivel3: "M + vogal = sílaba: MA, ME, MI, MO, MU.",
    nivel4: "M é uma consoante NASAL: o ar sai pelo nariz, não pela boca.",
  },

  exemploResolvido: {
    enunciado: "Qual figura começa com a letra M: MOCHILA, SOL ou GATO?",
    passos: [
      "Fale cada palavra devagar: /m/OCHILA, /s/OL, /g/ATO.",
      "O som /m/ está no começo de MOCHILA.",
      "M = /m/.",
    ],
    resposta: "MOCHILA — começa com a letra M (/m/).",
  },

  atividadeGuiada: {
    enunciado: "Toque na figura que começa com M (/m/).",
    resposta: "MAPA — começa com /m/.",
    explicacao: "Fale cada figura devagar antes de tocar.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura começa com /m/?",
      opcoes: [
        { nome: "mapa", imagemUrl: mapaImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "mapa",
    },
  },

  exercicios: [
    {
      enunciado: "🔊 Qual começa com /m/: MOEDA, SOL ou GATO?",
      resposta: "MOEDA — /m/.",
      dica: "Sinta os lábios fechando.",
    },
    {
      enunciado: "🎧 MENINA e MENINO começam iguais?",
      resposta: "Sim, os dois com /m/.",
      dica: "Aliteração de /m/.",
    },
    {
      enunciado: "🧭 A letra M tem quantas montanhinhas?",
      resposta: "Duas montanhinhas.",
      dica: "MM — M M.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: separar as figuras que começam com /m/ das que NÃO começam.",
    resposta: "Com /m/: mãe, maçã, mapa. Sem /m/: sol, gato, bola.",
    visual: {
      cena: [
        { personagem: "Time M", itemImagemUrl: maeImg, quantidade: 3, cor: "#F472B6" },
        { personagem: "Fora do M", itemImagemUrl: solImg, quantidade: 3, cor: "#60A5FA" },
      ],
      perguntas: [
        {
          pergunta: "Qual dessas começa com /m/?",
          opcoes: ["Maçã", "Sol", "Gato"],
          correta: 0,
          explicacao: "MAÇÃ — /m/.",
        },
        {
          pergunta: "Qual NÃO começa com /m/?",
          opcoes: ["Mapa", "Menina", "Bola"],
          correta: 2,
          explicacao: "BOLA — /b/.",
        },
        {
          pergunta: "Quantas montanhinhas tem a letra M?",
          opcoes: ["1", "2", "3"],
          correta: 1,
          explicacao: "M tem 2 montanhinhas.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "A letra M faz o som /m/.",
      "Para falar /m/ a gente fecha os lábios e vibra.",
      "Palavras com M: mãe, maçã, mapa, mochila, menino, menina, moeda.",
      "M + vogal = sílaba (MA, ME, MI, MO, MU).",
    ],
    dica: "Se os lábios fecham e vibram, é /m/.",
  },

  quiz: [
    {
      pergunta: "Qual figura começa com M?",
      opcoes: ["Mãe", "Sol", "Bola"],
      correta: 0,
      explicacao: "MÃE — /m/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
          { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        ],
      },
    },
    {
      pergunta: "Qual figura NÃO começa com M?",
      opcoes: ["Mapa", "Menina", "Gato"],
      correta: 2,
      explicacao: "GATO — /g/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: mapaImg, quantidade: 1, rotulo: "mapa" },
          { imagemUrl: meninaImg, quantidade: 1, rotulo: "menina" },
          { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
        ],
      },
    },
    {
      pergunta: "Qual é o som da letra M?",
      opcoes: ["/m/", "/s/", "/p/"],
      correta: 0,
      explicacao: "M = /m/.",
    },
    {
      pergunta: "Como a boca fica ao falar /m/?",
      opcoes: ["Aberta", "Lábios fechados vibrando", "Bico"],
      correta: 1,
      explicacao: "Os lábios fecham e vibram (nasal).",
    },
  ],

  conclusao:
    "🏅 Medalha: Detetive da Letra M! Missão em Casa: procurar 3 objetos em casa que comecem com M (mesa, macarrão, mamadeira, mochila, mel…).",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "MAMÃE é uma das primeiras palavras que bebês do mundo inteiro falam. O som /m/ é fácil porque é o primeiro que a boca aprende — juntando os lábios pra mamar.",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · M de Mãe",
      instrucao: "Toque na figura que começa com /m/.",
      grupos: [
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      ],
      pergunta: "Qual começa com /m/?",
      opcoes: ["Sol", "Mãe", "Gato"],
      correta: 1,
      acerto: "Isso! MÃE — /m/.",
      erro: "Lábios fechados: /m/ÃE.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Ligue à letra M",
      instrucao: "Ligue cada figura que começa com /m/ à letra M.",
      pares: [
        { a: "M", b: "Mapa", aImagem: estrelaImg, bImagem: mapaImg },
        { a: "M", b: "Maçã", aImagem: estrelaImg, bImagem: macaImg },
        { a: "M", b: "Mochila", aImagem: estrelaImg, bImagem: mochilaImg },
        { a: "M", b: "Moeda", aImagem: estrelaImg, bImagem: moedaImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Caça ao M",
      instrucao: "Só uma figura NÃO começa com M. Encontre a intrusa!",
      grupos: [
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        { imagemUrl: menino2Img, quantidade: 1, rotulo: "menino" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
      ],
      pergunta: "Qual NÃO começa com /m/?",
      opcoes: ["Mãe", "Menino", "Bola"],
      correta: 2,
      acerto: "Certo! BOLA começa com /b/.",
      erro: "Fale devagar: /b/OLA — não é /m/.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Família M",
      instrucao: "Coloque em ordem: Mãe → Menino → Moeda.",
      itens: ["mãe", "menino", "moeda"],
      imagens: [
        { imagemUrl: maeImg, quantidade: 1, rotulo: "1º · Mãe" },
        { imagemUrl: menino2Img, quantidade: 1, rotulo: "2º · Menino" },
        { imagemUrl: moedaImg, quantidade: 1, rotulo: "3º · Moeda" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Mais uma pegadinha",
      instrucao: "Qual começa com /m/?",
      grupos: [
        { imagemUrl: minhocaImg, quantidade: 1, rotulo: "minhoca" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
      ],
      pergunta: "Qual começa com /m/?",
      opcoes: ["Gato", "Minhoca", "Sol"],
      correta: 1,
      acerto: "MINHOCA — /m/!",
      erro: "Fale /m/INHOCA. Lábios fechando.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual começa com M?",
        opcoes: ["Mãe", "Sol", "Bola"],
        correta: 0,
        explicacao: "MÃE.",
        visual: { tipo: "itens", imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
      },
      {
        pergunta: "Qual começa com M?",
        opcoes: ["Bola", "Mapa", "Gato"],
        correta: 1,
        explicacao: "MAPA.",
        visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "mapa" },
      },
      {
        pergunta: "Qual começa com M?",
        opcoes: ["Sol", "Estrela", "Maçã"],
        correta: 2,
        explicacao: "MAÇÃ.",
        visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "maçã" },
      },
    ],
    medio: [
      {
        pergunta: "Qual dupla começa igual?",
        opcoes: ["Mãe-Menino", "Mãe-Sol", "Sol-Bola"],
        correta: 0,
        explicacao: "Mãe e Menino: aliteração de /m/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: maeImg, quantidade: 1, rotulo: "MÃE", cor: "#F472B6" },
            { imagemUrl: menino2Img, quantidade: 1, rotulo: "MENINO", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Qual figura NÃO começa com M?",
        opcoes: ["Moeda", "Mochila", "Gato"],
        correta: 2,
        explicacao: "GATO — /g/.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: moedaImg, quantidade: 1, rotulo: "moeda" },
            { imagemUrl: mochilaImg, quantidade: 1, rotulo: "mochila" },
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
          ],
        },
      },
      {
        pergunta: "M + A forma qual sílaba?",
        opcoes: ["MA", "AM", "MI"],
        correta: 0,
        explicacao: "M + A = MA.",
      },
    ],
    dificil: [
      {
        pergunta: "Qual grupo tem SÓ figuras com /m/?",
        opcoes: [
          "mãe · mapa · mochila",
          "mãe · sol · gato",
          "bola · sol · estrela",
        ],
        correta: 0,
        explicacao: "Todas começam com /m/.",
      },
      {
        pergunta: "MENINA e MADEIRA — o que compartilham?",
        opcoes: ["Rimam", "Começam com /m/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /m/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: meninaImg, quantidade: 1, rotulo: "MENINA", cor: "#FBBF24" },
            { imagemUrl: madeiraImg, quantidade: 1, rotulo: "MADEIRA", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta: "Por que /m/ é chamado de som NASAL?",
        opcoes: [
          "Porque o ar sai pelo nariz",
          "Porque é alto",
          "Porque é curto",
        ],
        correta: 0,
        explicacao: "Nos sons nasais o ar sai pelo nariz enquanto os lábios ficam fechados.",
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP05",
    titulo: "A letra S — som /s/ (sol, sapo, sopa)",
  },
};

export default aula;
