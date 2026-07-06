import type { Aula } from "../types";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import carroImg from "@/assets/neuro-treino/objetos/carro.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import peixeImg from "@/assets/neuro-treino/objetos/peixe.png";
import patoImg from "@/assets/neuro-treino/objetos/pato.png";
import abelhaImg from "@/assets/neuro-treino/objetos/abelha.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";

/**
 * EF01LP05 — Aula 005 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 * BNCC: Reconhecer o sistema de escrita alfabética como representação
 * dos sons da fala.
 *
 * Missão do Dia: "A Ponte dos Sons Encantados".
 * Padrão travado (Português): tap-to-speak — toque na imagem, o professor
 * fala o nome; toque na letra, o professor fala o som.
 */
const aula: Aula = {
  codigo: "EF01LP05",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "A Ponte dos Sons Encantados",

  narrativa: {
    titulo: "A Ponte dos Sons Encantados",
    contexto:
      "O Brilha chegou a uma ponte mágica. Para atravessá-la, é preciso descobrir quais letras representam os sons das palavras.",
    problema:
      "Cada pedra da ponte está apagada. Só acende quando a criança descobre o primeiro som da palavra.",
    convite:
      "Vamos escutar cada palavra e descobrir com qual letra ela começa?",
  },

  conhecimentosPrevios: [
    "Reconhecer as letras do alfabeto (EF01LP04).",
    "Saber que as letras formam palavras.",
    "Escutar e repetir palavras curtas.",
  ],

  missao:
    "Descobrir que cada letra representa um som da fala e identificar o som inicial de palavras.",

  objetivos: [
    "Compreender que a escrita representa os sons da fala.",
    "Identificar os sons iniciais de palavras.",
    "Relacionar fonemas (sons) e grafemas (letras).",
    "Desenvolver a consciência fonêmica inicial.",
  ],

  motivacao:
    "Quando falamos, saem sons da nossa boca. Quando escrevemos, usamos letras pra registrar esses sons — é assim que a leitura nasce!",

  explicacao:
    "Toda palavra que falamos é feita de SONS.\n\nExemplo:\n🐶 CACHORRO — ouvimos: C · A · CH · O · RR · O\n\nCada som que a gente fala tem uma letra (ou um grupo de letras) que o representa no papel.\n\nQuando escrevemos, estamos desenhando os sons da nossa fala.\n\n🔊 Fala: 'BOLA' → ✍️ Escrita: B · O · L · A",

  explicacoesNiveis: {
    nivel1: "As letras servem pra escrever os sons que a gente fala.",
    nivel2:
      "Toda palavra tem um som INICIAL — o primeiro som que sai da boca. BOLA começa com o som /B/.",
    nivel3:
      "Cada letra do alfabeto tem um som próprio. Aprender esses sons ajuda a ler novas palavras.",
    nivel4:
      "Fonema = som que falamos. Grafema = letra que escrevemos. A escrita alfabética liga um ao outro.",
  },

  exemploResolvido: {
    enunciado: "Qual é o primeiro som da palavra BOLA?",
    passos: [
      "Fale a palavra bem devagar: B... O... L... A.",
      "Escute o primeiro som que sai da sua boca.",
      "Esse som é /B/ — a letra que escreve esse som é o B.",
    ],
    resposta: "A palavra BOLA começa com o som da letra B.",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir o nome. Depois, toque na letra que começa a palavra.",
    resposta: "BOLA começa com B.",
    explicacao:
      "Quando falamos 'bola', o primeiro som que sai é /B/. A letra que registra esse som é o B.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura tem o nome que começa com o som /B/?",
      opcoes: [
        { nome: "bola", imagemUrl: bolaImg },
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "sol", imagemUrl: solImg },
      ],
      respostaCerta: "bola",
    },
  },

  exercicios: [
    {
      enunciado: "🎧 Qual é o primeiro som de MAÇÃ?",
      resposta: "O som /M/ — a letra M.",
      dica: "Fale devagar: M... a... çã. O primeiro som é /M/.",
    },
    {
      enunciado: "🎧 Qual é o primeiro som de SAPO?",
      resposta: "O som /S/ — a letra S.",
      dica: "S... a... po. Começa com /S/, igual em SOL e SAPATO.",
    },
    {
      enunciado: "🎧 Qual é o primeiro som de PATO?",
      resposta: "O som /P/ — a letra P.",
      dica: "P... a... to. O primeiro som é /P/, com os lábios juntos.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: descubra a primeira letra de cada figura da ponte.",
    resposta:
      "Cada palavra começa com um som — e cada som tem uma letra pra representá-lo.",
    visual: {
      cena: [
        { personagem: "ABELHA", itemImagemUrl: abelhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "BANANA", itemImagemUrl: bananaImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "PEIXE", itemImagemUrl: peixeImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        {
          pergunta: "🐝 Qual é a primeira letra de ABELHA?",
          opcoes: ["A", "E", "B"],
          correta: 0,
          explicacao: "ABELHA começa com o som /A/ — letra A.",
        },
        {
          pergunta: "🍌 Qual é a primeira letra de BANANA?",
          opcoes: ["N", "B", "A"],
          correta: 1,
          explicacao: "BANANA começa com o som /B/ — letra B.",
        },
        {
          pergunta: "🐟 Qual é a primeira letra de PEIXE?",
          opcoes: ["P", "X", "E"],
          correta: 0,
          explicacao: "PEIXE começa com o som /P/ — letra P.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🗣️ Fala = sons que saem da nossa boca.",
      "✍️ Escrita = letras que representam esses sons.",
      "🔊 Toda palavra tem um som inicial (o primeiro som).",
      "🔤 Cada som tem uma letra (ou grupo de letras) que o representa.",
    ],
    dica: "Antes de escrever, fale a palavra bem devagar e escute cada som.",
  },

  quiz: [
    {
      pergunta: "As letras servem pra:",
      opcoes: [
        "Representar os sons da fala",
        "Apenas desenhar",
        "Apenas contar",
      ],
      correta: 0,
      explicacao:
        "As letras registram no papel os sons que a gente fala. Por isso a escrita alfabética existe.",
    },
    {
      pergunta: "Qual é a primeira letra da palavra GATO?",
      opcoes: ["T", "G", "O"],
      correta: 1,
      explicacao: "GATO começa com o som /G/ — letra G.",
    },
    {
      pergunta: "Na palavra BOLA, qual som aparece primeiro?",
      opcoes: ["/L/", "/A/", "/B/"],
      correta: 2,
      explicacao: "B... o... la. O primeiro som é /B/.",
    },
    {
      pergunta: "Relacionar sons e letras ajuda a:",
      opcoes: [
        "Ler e escrever melhor",
        "Contar dinheiro",
        "Medir objetos",
      ],
      correta: 0,
      explicacao:
        "Quando ligamos som e letra, conseguimos LER palavras novas e ESCREVER o que falamos.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião dos Sons! Missão em Família: escolha 5 objetos da casa, fale o nome bem devagar e descubra o primeiro som e a letra que o representa.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Quando aprendemos a relacionar sons e letras, nosso cérebro cria conexões novas — é essa mágica que faz a gente conseguir LER palavras que nunca viu antes.",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Escute o Som",
      instrucao:
        "Toque na figura pra ouvir. Qual palavra começa com o som /B/?",
      pergunta: "Qual figura começa com o som /B/?",
      opcoes: [
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "⚽ BOLA" },
        { nome: "MAÇÃ", imagemUrl: macaImg, rotulo: "🍎 MAÇÃ" },
        { nome: "PEIXE", imagemUrl: peixeImg, rotulo: "🐟 PEIXE" },
      ],
      correta: 0,
      acerto: "🎉 BOLA começa com o som /B/ — letra B!",
      erro: "Escute de novo: /B/... busque a figura que começa assim.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Ligue Som e Letra",
      instrucao:
        "Toque na figura pra ouvir o nome. Depois arraste a letra do som inicial até a caixa da figura.",
      pares: [
        { item: "M", alvo: "🍎 Maçã" },
        { item: "G", alvo: "🐱 Gato" },
        { item: "C", alvo: "🚗 Carro" },
      ],
      alvosVisuais: [
        { nome: "🍎 Maçã", cor: "#F87171", capacidade: 1 },
        { nome: "🐱 Gato", cor: "#FBBF24", capacidade: 1 },
        { nome: "🚗 Carro", cor: "#60A5FA", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Descubra a Letra que Falta",
      instrucao:
        "Falta a primeira letra: _ O L. Toque pra ouvir cada opção e escolha a certa.",
      figura: { imagemUrl: solImg, rotulo: "☀️ _ O L" },
      pergunta: "Qual letra completa a palavra SOL?",
      opcoes: ["S", "P", "T"],
      correta: 0,
      acerto: "🌟 SOL! O primeiro som é /S/ — letra S.",
      erro: "Escute de novo: S... o... l. O primeiro som é /S/.",
    },
    {
      tipo: "escolherImagem",
      titulo: "Fase 4 · O Eco da Floresta",
      instrucao:
        "O Brilha falou uma palavra que começa com o som /S/. Qual dessas figuras é ela?",
      pergunta: "Qual figura começa com o som /S/?",
      opcoes: [
        { nome: "sapo", imagemUrl: sapoImg },
        { nome: "peixe", imagemUrl: peixeImg },
        { nome: "pato", imagemUrl: patoImg },
      ],
      respostaCerta: "sapo",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 5 · Construa a Palavra",
      instrucao:
        "Falta a primeira letra da palavra da figura. Toque pra ouvir cada opção.",
      figura: { imagemUrl: abelhaImg, rotulo: "🐝 _ B E L H A" },
      pergunta: "Qual letra começa a palavra ABELHA?",
      opcoes: ["A", "E", "B"],
      correta: 0,
      acerto: "🐝 ABELHA! O primeiro som é /A/ — letra A.",
      erro: "Fale devagar: A... belha. O primeiro som é /A/.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "🐶 Qual é a primeira letra de CACHORRO?",
        opcoes: ["C", "R", "O"],
        correta: 0,
        explicacao: "CACHORRO começa com o som /C/ — letra C.",
        visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "🐶 CACHORRO" },
      },
      {
        pergunta: "🍌 Qual é a primeira letra de BANANA?",
        opcoes: ["N", "A", "B"],
        correta: 2,
        explicacao: "BANANA começa com o som /B/ — letra B.",
        visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "🍌 BANANA" },
      },
      {
        pergunta: "🐟 Qual é a primeira letra de PEIXE?",
        opcoes: ["P", "X", "E"],
        correta: 0,
        explicacao: "PEIXE começa com o som /P/ — letra P.",
        visual: { tipo: "itens", imagemUrl: peixeImg, quantidade: 1, rotulo: "🐟 PEIXE" },
      },
    ],
    medio: [
      {
        pergunta: "Qual palavra começa com o som /S/?",
        opcoes: ["GATO", "SAPO", "PATO"],
        correta: 1,
        explicacao: "SAPO começa com o som /S/ — letra S.",
        visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "🐸 SAPO" },
      },
      {
        pergunta: "Qual palavra começa com o som /M/?",
        opcoes: ["MAÇÃ", "CARRO", "PATO"],
        correta: 0,
        explicacao: "MAÇÃ começa com o som /M/ — letra M.",
        visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "🍎 MAÇÃ" },
      },
      {
        pergunta: "Qual palavra começa com o som /C/?",
        opcoes: ["ABELHA", "SAPO", "CARRO"],
        correta: 2,
        explicacao: "CARRO começa com o som /C/ — letra C.",
        visual: { tipo: "itens", imagemUrl: carroImg, quantidade: 1, rotulo: "🚗 CARRO" },
      },
    ],
    dificil: [
      {
        pergunta: "As letras servem pra representar...",
        opcoes: ["Sons da fala", "Números", "Cores"],
        correta: 0,
        explicacao:
          "As letras representam no papel os sons que a gente fala. Isso é a escrita alfabética.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "🔊 → ✍️" },
      },
      {
        pergunta: "Se eu falo /P/, /A/, /T/, /O/, que palavra é essa?",
        opcoes: ["PATO", "GATO", "MATO"],
        correta: 0,
        explicacao: "Juntando os sons /P/ + /A/ + /T/ + /O/ formamos PATO.",
        visual: { tipo: "itens", imagemUrl: patoImg, quantidade: 1, rotulo: "🦆 PATO" },
      },
      {
        pergunta: "Duas palavras começam com o mesmo som. Quais?",
        opcoes: ["SAPO e SOL", "GATO e PATO", "BOLA e MAÇÃ"],
        correta: 0,
        explicacao:
          "SAPO e SOL começam com o som /S/. Palavras que começam com o mesmo som têm a mesma letra inicial.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "🔊 /S/" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP06",
    titulo:
      "Segmentar oralmente palavras em sílabas",
  },
};

export default aula;
