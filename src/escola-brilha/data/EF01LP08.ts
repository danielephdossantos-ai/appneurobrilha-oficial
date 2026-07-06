import type { Aula } from "../types";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import patoImg from "@/assets/neuro-treino/objetos/pato.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";
import borboletaImg from "@/assets/neuro-treino/objetos/borboleta.png";

/**
 * EF01LP08 — Aula 008 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 * Missão do Dia: "O Correio das Palavras Perdidas".
 * Padrão travado: tap-to-speak — toque na figura ou palavra pra ouvir.
 */
const aula: Aula = {
  codigo: "EF01LP08",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Correio das Palavras Perdidas",

  narrativa: {
    titulo: "O Correio das Palavras Perdidas",
    contexto:
      "O Carteiro Piu encontrou várias cartas espalhadas pela Floresta das Letras. Algumas palavras desapareceram e outras ficaram misturadas.",
    problema:
      "O Festival das Palavras vai começar e as mensagens estão bagunçadas!",
    convite:
      "Vamos ajudar o Brilha e o Piu a reconstruir as cartas antes do festival?",
  },

  conhecimentosPrevios: [
    "Reconhecer letras do alfabeto (EF01LP04).",
    "Relacionar sons e letras (EF01LP05, EF01LP07).",
    "Separar palavras em sílabas (EF01LP06).",
  ],

  missao:
    "Reconhecer palavras em diferentes situações — ligando figura, escrita e sentido.",

  objetivos: [
    "Reconhecer palavras em diferentes contextos.",
    "Relacionar imagem e palavra escrita.",
    "Completar palavras com a sílaba certa.",
    "Fortalecer a leitura inicial.",
  ],

  motivacao:
    "As palavras estão em todo lugar: nas placas, nos livros, nas embalagens e até nas cartas do Piu!",

  explicacao:
    "As palavras contam histórias. Quando aprendemos a reconhecê-las, conseguimos ler bilhetes, placas, livros e cartas.\n\n🍎 MAÇÃ\n🐶 CACHORRO\n🏠 CASA\n☀️ SOL\n\nCada figura tem uma palavra que a escreve. Toque na figura pra ouvir a palavra dela.",

  explicacoesNiveis: {
    nivel1: "Cada figura tem UMA palavra que a nomeia. Ex.: 🏠 → CASA.",
    nivel2:
      "Pra reconhecer uma palavra, olhe a primeira letra e escute o primeiro som. BOLA começa com B.",
    nivel3:
      "Palavras podem ser completadas por partes (sílabas). CA + SA = CASA. BO + LA = BOLA.",
    nivel4:
      "Palavras podem nomear seres (GATO), objetos (CADEIRA) ou lugares (CASA). Ler é reconhecer essas palavras.",
  },

  exemploResolvido: {
    enunciado: "Qual palavra combina com 🍎?",
    passos: [
      "Olhe a figura: é uma MAÇÃ.",
      "Procure a palavra que começa com M.",
      "MAÇÃ é a palavra certa.",
    ],
    resposta: "🍎 → MAÇÃ.",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir. Qual palavra corresponde à figura?",
    resposta: "🍎 é MAÇÃ.",
    explicacao:
      "A figura é uma maçã. A palavra que a nomeia é MAÇÃ, com M no começo.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura é MAÇÃ?",
      opcoes: [
        { nome: "maçã", imagemUrl: macaImg },
        { nome: "casa", imagemUrl: casaImg },
        { nome: "sapo", imagemUrl: sapoImg },
      ],
      respostaCerta: "maçã",
    },
  },

  exercicios: [
    {
      enunciado: "🏠 Qual palavra é essa figura?",
      resposta: "CASA.",
      dica: "Começa com C, tem duas sílabas: CA · SA.",
    },
    {
      enunciado: "Complete: CA__ (dica: 🏠).",
      resposta: "SA — CASA.",
      dica: "CA + SA = CASA.",
    },
    {
      enunciado: "🐱 Que palavra representa esse animal?",
      resposta: "GATO.",
      dica: "Começa com G, tem duas sílabas: GA · TO.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: leia cada carta e responda o que o Piu precisa entregar.",
    resposta:
      "Cada figura tem uma palavra que a nomeia. Ler é reconhecer essa palavra.",
    visual: {
      cena: [
        { personagem: "MAÇÃ", itemImagemUrl: macaImg, quantidade: 1, cor: "#F87171" },
        { personagem: "BOLA", itemImagemUrl: bolaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "GATO", itemImagemUrl: gatoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "FLOR", itemImagemUrl: florImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "CACHORRO", itemImagemUrl: cachorroImg, quantidade: 1, cor: "#A78BFA" },
      ],
      perguntas: [
        {
          pergunta: "Qual palavra corresponde à figura?",
          opcoes: ["CASA", "MAÇÃ", "SAPO"],
          correta: 1,
          explicacao: "A figura é uma 🍎 — a palavra certa é MAÇÃ.",
        },
        {
          pergunta: "Qual palavra começa igual a BOLA?",
          opcoes: ["BONECA", "CASA", "GATO"],
          correta: 0,
          explicacao: "BOLA e BONECA começam com o mesmo som /B/ — letra B.",
        },
        {
          pergunta: "Qual palavra representa um animal?",
          opcoes: ["GATO", "MESA", "JANELA"],
          correta: 0,
          explicacao: "GATO é um animal. MESA e JANELA são objetos.",
        },
        {
          pergunta: "Qual palavra representa uma flor?",
          opcoes: ["FLOR", "PATO", "SOL"],
          correta: 0,
          explicacao: "A figura é uma 🌸 — a palavra é FLOR.",
        },
        {
          pergunta: "Qual palavra é o melhor amigo do menino?",
          opcoes: ["CACHORRO", "BANANA", "CASA"],
          correta: 0,
          explicacao: "🐶 → CACHORRO.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🖼️ Cada figura tem uma PALAVRA que a nomeia.",
      "🔤 A primeira letra ajuda a reconhecer a palavra.",
      "🧩 Palavras podem ser montadas por sílabas (CA + SA = CASA).",
      "📬 Reconhecer palavras é o começo da leitura.",
    ],
    dica: "Olhe a figura, escute o som inicial e procure a palavra que começa com essa letra.",
  },

  quiz: [
    {
      pergunta: "Qual palavra corresponde à figura 🍎?",
      opcoes: ["CASA", "MAÇÃ", "SAPO"],
      correta: 1,
      explicacao: "🍎 é MAÇÃ.",
    },
    {
      pergunta: "Qual palavra começa igual a BOLA?",
      opcoes: ["BONECA", "CASA", "GATO"],
      correta: 0,
      explicacao: "BOLA e BONECA começam com B.",
    },
    {
      pergunta: "Qual palavra representa um animal?",
      opcoes: ["GATO", "MESA", "JANELA"],
      correta: 0,
      explicacao: "GATO é um animal.",
    },
    {
      pergunta: "Qual palavra representa um objeto?",
      opcoes: ["CADEIRA", "PASSARINHO", "BORBOLETA"],
      correta: 0,
      explicacao: "CADEIRA é um objeto; os outros são animais.",
    },
    {
      pergunta: "Você consegue reconhecer palavras olhando pra elas?",
      opcoes: ["Sim!", "Não sei", "Talvez"],
      correta: 0,
      explicacao: "🎉 Isso mesmo! Reconhecer palavras é o começo da leitura.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Carteiro das Palavras! Missão em Família: procurem juntos 5 palavras escritas na casa (porta, geladeira, sabonete, leite, TV).",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "As palavras estão em todos os lugares: nas embalagens, nos livros, nas placas e até nas roupas. Quem lê bem descobre mensagens em toda parte!",
  },

  interativas: [
    {
      tipo: "arrastar",
      titulo: "Fase 1 · Observe e Ligue",
      instrucao:
        "Toque em cada figura pra ouvir. Depois arraste a palavra até a figura certa.",
      pares: [
        { item: "CASA", alvo: "🏠 Casa" },
        { item: "BOLA", alvo: "⚽ Bola" },
        { item: "GATO", alvo: "🐱 Gato" },
        { item: "FLOR", alvo: "🌸 Flor" },
      ],
      alvosVisuais: [
        { nome: "🏠 Casa", cor: "#F97316", capacidade: 1, imagemUrl: casaImg },
        { nome: "⚽ Bola", cor: "#60A5FA", capacidade: 1, imagemUrl: bolaImg },
        { nome: "🐱 Gato", cor: "#FBBF24", capacidade: 1, imagemUrl: gatoImg },
        { nome: "🌸 Flor", cor: "#F472B6", capacidade: 1, imagemUrl: florImg },
      ],
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Descobrindo a Palavra",
      instrucao:
        "Toque na figura pra ouvir. Depois toque em cada palavra pra ouvir e escolha a certa.",
      figura: { imagemUrl: bananaImg, rotulo: "🍌 ?" },
      pergunta: "Qual palavra é essa figura?",
      opcoes: ["BANANA", "BONECA", "BOLA"],
      correta: 0,
      acerto: "🎉 Isso! A figura é uma BANANA.",
      erro: "Escute de novo: BA-NA-NA. Começa com B e termina em NA.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Complete a Palavra (CA__)",
      instrucao:
        "A palavra é 🏠 CASA. Falta a última sílaba. Toque pra ouvir cada opção.",
      figura: { imagemUrl: casaImg, rotulo: "🏠 CA _ _" },
      pergunta: "Qual sílaba completa CA__?",
      opcoes: ["SA", "BO", "MA"],
      correta: 0,
      acerto: "🏠 CA + SA = CASA!",
      erro: "Escute: CA... SA. A sílaba que falta é SA.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 4 · Complete a Palavra (BO__)",
      instrucao:
        "A palavra é ⚽ BOLA. Toque pra ouvir cada sílaba e escolha a certa.",
      figura: { imagemUrl: bolaImg, rotulo: "⚽ BO _ _" },
      pergunta: "Qual sílaba completa BO__?",
      opcoes: ["LA", "TO", "CA"],
      correta: 0,
      acerto: "⚽ BO + LA = BOLA!",
      erro: "Escute: BO... LA. A sílaba certa é LA.",
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Organizando as Cartas do Piu",
      instrucao:
        "O Piu vai entregar uma carta com a palavra PATO. Toque na figura certa.",
      pergunta: "Qual figura combina com a palavra PATO?",
      opcoes: [
        { nome: "PATO", imagemUrl: patoImg, rotulo: "🦆 PATO" },
        { nome: "SAPO", imagemUrl: sapoImg, rotulo: "🐸 SAPO" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
      ],
      correta: 0,
      acerto: "📬 Carta entregue! 🦆 PATO é a figura certa.",
      erro: "Escute: PA-TO. É o pato!",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual palavra é a figura?",
        opcoes: ["CASA", "SOL", "GATO"],
        correta: 0,
        explicacao: "🏠 → CASA.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠 ?" },
      },
      {
        pergunta: "Qual palavra é a figura?",
        opcoes: ["FLOR", "BOLA", "PATO"],
        correta: 0,
        explicacao: "🌸 → FLOR.",
        visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🌸 ?" },
      },
      {
        pergunta: "Qual palavra é a figura?",
        opcoes: ["SOL", "MAÇÃ", "CASA"],
        correta: 0,
        explicacao: "☀️ → SOL.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️ ?" },
      },
    ],
    medio: [
      {
        pergunta: "Complete: BA__NA (dica: 🍌).",
        opcoes: ["NA", "LA", "TO"],
        correta: 0,
        explicacao: "BA + NA + NA = BANANA.",
        visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "🍌 BA _ NA" },
      },
      {
        pergunta: "Qual palavra começa igual a PATO?",
        opcoes: ["PIU", "GATO", "CASA"],
        correta: 0,
        explicacao: "PATO e PIU começam com P.",
        visual: { tipo: "itens", imagemUrl: patoImg, quantidade: 1, rotulo: "🦆 PATO" },
      },
      {
        pergunta: "Qual palavra é a figura?",
        opcoes: ["CACHORRO", "GATO", "SAPO"],
        correta: 0,
        explicacao: "🐶 → CACHORRO.",
        visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "🐶 ?" },
      },
    ],
    dificil: [
      {
        pergunta: "Qual palavra representa um animal?",
        opcoes: ["GATO", "MESA", "JANELA"],
        correta: 0,
        explicacao: "GATO é animal; MESA e JANELA são objetos.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱 GATO" },
      },
      {
        pergunta: "Qual palavra representa um objeto?",
        opcoes: ["CADEIRA", "PASSARINHO", "BORBOLETA"],
        correta: 0,
        explicacao: "CADEIRA é objeto; os outros são animais.",
        visual: { tipo: "itens", imagemUrl: borboletaImg, quantidade: 1, rotulo: "🦋 BORBOLETA" },
      },
      {
        pergunta: "Que palavra tem TRÊS sílabas?",
        opcoes: ["BANANA", "SOL", "GATO"],
        correta: 0,
        explicacao: "BA · NA · NA — três sílabas.",
        visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "🍌 BANANA" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP09",
  },
};

export default aula;
