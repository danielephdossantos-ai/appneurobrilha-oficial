import type { Aula } from "../types";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import bicicletaImg from "@/assets/neuro-treino/objetos/bicicleta-moderna.png";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";
import escolaImg from "@/assets/neuro-treino/objetos/escola.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import meninaImg from "@/assets/neuro-treino/objetos/menina.png";
import meninoImg from "@/assets/neuro-treino/objetos/menino.png";
import meninoAcordandoImg from "@/assets/neuro-treino/objetos/menino-acordando.png";
import parqueImg from "@/assets/neuro-treino/objetos/parque.png";
import carroImg from "@/assets/neuro-treino/objetos/carro.png";
import peixeImg from "@/assets/neuro-treino/objetos/peixe.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import escovarImg from "@/assets/neuro-treino/objetos/escovar-dentes.png";
import mochilaImg from "@/assets/neuro-treino/objetos/mochila.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";

/**
 * EF02LP01 — Aula 001 do 2º Ano
 * BNCC: Leitura autônoma de palavras e pequenos textos; ampliação do vocabulário.
 * Missão: "O Mistério das Palavras Perdidas".
 */
const aula: Aula = {
  codigo: "EF02LP01",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Mistério das Palavras Perdidas",

  narrativa: {
    titulo: "O Mistério das Palavras Perdidas",
    contexto:
      "Brilha encontra um LIVRO ENCANTADO na Biblioteca das Estrelas. Ao abri-lo, algumas PALAVRAS somem das páginas!",
    problema:
      "Sem essas palavras, as histórias ficam incompletas — ninguém consegue ler o que aconteceu.",
    convite:
      "Bora ajudar Brilha a RECUPERAR cada palavra e devolver vida às histórias?",
  },

  conhecimentosPrevios: [
    "Reconhecer o alfabeto e as sílabas.",
    "Ler palavras curtas com apoio de imagem.",
    "Perceber que letras juntas formam palavras.",
  ],

  missao:
    "Ler palavras e pequenos textos com AUTONOMIA, compreendendo o que leu e ampliando o vocabulário.",

  aprendendo: {
    titulo: "Aprendendo",
    instrucao:
      "Brilha apresenta palavras com ilustração e narração. Toque em cada cartão para ouvir a palavra, ver as sílabas e a frase de exemplo.",
    cards: [
      {
        palavra: "BOLA",
        imagemUrl: bolaImg,
        silabas: ["BO", "LA"],
        frase: "A bola rolou pelo campo.",
      },
      {
        palavra: "ÁRVORE",
        imagemUrl: arvoreImg,
        silabas: ["ÁR", "VO", "RE"],
        frase: "A árvore tem folhas verdes.",
      },
      {
        palavra: "BICICLETA",
        imagemUrl: bicicletaImg,
        silabas: ["BI", "CI", "CLE", "TA"],
        frase: "Eu ando de bicicleta no parque.",
      },
      {
        palavra: "CACHORRO",
        imagemUrl: cachorroImg,
        silabas: ["CA", "CHOR", "RO"],
        frase: "O cachorro correu pelo quintal.",
      },
      {
        palavra: "ESCOLA",
        imagemUrl: escolaImg,
        silabas: ["ES", "CO", "LA"],
        frase: "A escola é um lugar de aprender.",
      },
    ],
  },

  objetivos: [
    "Ler palavras com autonomia.",
    "Compreender palavras em diferentes contextos.",
    "Identificar informações em pequenos textos.",
    "Ampliar o vocabulário.",
    "Desenvolver fluência inicial de leitura.",
  ],

  motivacao:
    "Cada palavra que você lê é uma página que ganha vida — a leitura abre portas mágicas!",

  explicacao:
    "📖 Ler é DECIFRAR: juntar as letras, formar sílabas, formar palavras e entender o sentido.\n\n🐶 CA-CHOR-RO → CACHORRO.\n🌳 ÁR-VO-RE → ÁRVORE.\n🏫 ES-CO-LA → ESCOLA.\n\nQuando lemos com atenção, imaginamos a cena e entendemos a história!",

  explicacoesNiveis: {
    nivel1: "Ler é juntar letras e formar palavras.",
    nivel2: "Palavra vira frase; frases viram texto.",
    nivel3: "Compreender é entender o que a palavra ou frase quer dizer.",
    nivel4: "Ler devagar e com atenção ajuda a entender melhor.",
  },

  exemploResolvido: {
    enunciado: "Qual imagem combina com a palavra CACHORRO?",
    passos: [
      "Leia com calma: CA-CHOR-RO.",
      "Pense: o que é cachorro? Um animal de estimação, que late.",
      "Escolha a figura do animalzinho.",
    ],
    resposta: "🐶 O cachorro. ✅",
  },

  atividadeGuiada: {
    enunciado: "Toque pra ouvir. Qual figura combina com SOL?",
    resposta: "☀️ Sol.",
    explicacao: "SOL é a estrela que brilha no céu de dia.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: SOL",
      opcoes: [
        { nome: "sol", imagemUrl: solImg },
        { nome: "cachorro", imagemUrl: cachorroImg },
        { nome: "bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "sol",
    },
  },

  exercicios: [
    { enunciado: "CA _ A (com SA):", resposta: "CASA.", dica: "Onde a gente mora." },
    { enunciado: "'A menina brinca no ____' — parque, carro ou rio?", resposta: "PARQUE.", dica: "Lugar de brincar." },
    { enunciado: "Um texto é formado por:", resposta: "PALAVRAS e FRASES.", dica: "Juntas contam algo." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: recupere as palavras perdidas do livro encantado.",
    resposta: "Lendo com atenção, cada página volta a brilhar!",
    visual: {
      cena: [
        { personagem: "LIVRO", itemImagemUrl: livroImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "SOL", itemImagemUrl: solImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "CACHORRO", itemImagemUrl: cachorroImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "ÁRVORE", itemImagemUrl: arvoreImg, quantidade: 1, cor: "#34D399" },
        { personagem: "ESCOLA", itemImagemUrl: escolaImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        { pergunta: "As palavras formam:", opcoes: ["Frases e textos", "Apenas desenhos", "Apenas números"], correta: 0, explicacao: "Palavras formam frases e frases formam textos." },
        { pergunta: "Ler ajuda a:", opcoes: ["Aprender coisas novas", "Esquecer histórias", "Apenas brincar"], correta: 0, explicacao: "Leitura abre a mente." },
        { pergunta: "Um texto tem:", opcoes: ["Palavras e frases", "Só letras soltas", "Só figuras"], correta: 0, explicacao: "Palavras + frases = texto." },
        { pergunta: "Pra compreender preciso:", opcoes: ["Ler com atenção", "Correr lendo", "Ignorar palavras"], correta: 0, explicacao: "Atenção = compreensão." },
        { pergunta: "CA + SA =", opcoes: ["CASA", "COPO", "BOLA"], correta: 0, explicacao: "CA-SA = CASA." },
      ],
    },
  },

  revisao: {
    pontos: [
      "📖 Ler = juntar letras → palavras → frases → texto.",
      "🧠 Compreender = entender o que se leu.",
      "🔤 Vocabulário cresce quando lemos mais.",
      "🐌 Ler com calma ajuda a entender melhor.",
    ],
    dica: "Antes de responder, respire e leia a frase inteira duas vezes.",
  },

  quiz: [
    { pergunta: "As palavras formam:", opcoes: ["Frases e textos", "Apenas desenhos", "Apenas números"], correta: 0, explicacao: "Formam frases e textos." },
    { pergunta: "Ler ajuda a:", opcoes: ["Aprender coisas novas", "Esquecer histórias", "Apenas brincar"], correta: 0, explicacao: "Aprender coisas novas." },
    { pergunta: "Um texto é formado por:", opcoes: ["Palavras e frases", "Só letras soltas", "Só figuras"], correta: 0, explicacao: "Palavras e frases." },
    { pergunta: "Pra compreender um texto:", opcoes: ["Ler com atenção", "Ler muito rápido", "Ignorar as palavras"], correta: 0, explicacao: "Ler com atenção." },
    { pergunta: "Hoje aprendemos sobre:", opcoes: ["Leitura e compreensão", "Só matemática", "Só geografia"], correta: 0, explicacao: "Leitura e compreensão de palavras e textos." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião das Palavras! 🎁 Item desbloqueado: Livro Encantado da Biblioteca. Missão em Família: leia um pequeno texto com um familiar e registre no app.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Quanto mais lemos, mais palavras conhecemos — e mais fácil fica entender qualquer história ou aprender coisas novas!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Leia a Palavra — SOL",
      instrucao: "Toque pra ouvir. Qual figura combina com a palavra SOL?",
      pergunta: "Palavra: SOL",
      opcoes: [
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "CACHORRO", imagemUrl: cachorroImg, rotulo: "🐶 CACHORRO" },
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "⚽ BOLA" },
      ],
      correta: 0,
      acerto: "☀️ SOL! A estrela do dia.",
      erro: "Leia: S-O-L. É a figura brilhante no céu.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Complete a Palavra — CA _ A",
      instrucao: "Toque pra ouvir. Qual sílaba completa CA _ A pra virar CASA?",
      figura: { imagemUrl: casaImg, rotulo: "🏠" },
      pergunta: "Complete: CA __ A",
      opcoes: ["SA", "TO", "PA"],
      correta: 0,
      acerto: "🏠 CA-SA! Perfeito.",
      erro: "Escute: CA-SA. Sílaba que falta = SA.",
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Descubra a Frase",
      instrucao: "Toque pra ouvir. 'A menina brinca no ____.'",
      pergunta: "Escolha a figura que completa:",
      opcoes: [
        { nome: "PARQUE", imagemUrl: parqueImg, rotulo: "🌳 PARQUE" },
        { nome: "CARRO", imagemUrl: carroImg, rotulo: "🚗 CARRO" },
        { nome: "RIO", imagemUrl: peixeImg, rotulo: "🐟 RIO" },
      ],
      correta: 0,
      acerto: "🌳 A menina brinca no PARQUE!",
      erro: "Lugar de brincar com escorregador e balanço = PARQUE.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize a História",
      instrucao: "Coloque na ordem: o que o menino fez de manhã?",
      itens: [
        "O menino acordou",
        "Escovou os dentes",
        "Foi para a escola",
      ],
      imagens: [
        { imagemUrl: meninoAcordandoImg, quantidade: 1, rotulo: "1️⃣ Acordou" },
        { imagemUrl: escovarImg, quantidade: 1, rotulo: "2️⃣ Escovou" },
        { imagemUrl: mochilaImg, quantidade: 1, rotulo: "3️⃣ Escola" },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Biblioteca Encantada",
      instrucao:
        "Toque pra ouvir. 'A menina Lili leu um livro embaixo da árvore.' QUEM leu o livro?",
      pergunta: "Personagem:",
      opcoes: [
        { nome: "MENINA", imagemUrl: meninaImg, rotulo: "👧 LILI" },
        { nome: "CACHORRO", imagemUrl: cachorroImg, rotulo: "🐶 CACHORRO" },
        { nome: "MENINO", imagemUrl: meninoImg, rotulo: "👦 MENINO" },
      ],
      correta: 0,
      acerto: "👧 LILI leu o livro. Personagem = quem faz a ação.",
      erro: "Escute de novo: 'A menina LILI leu…'",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra é CACHORRO?", opcoes: ["CACHORRO", "CARRO", "CASA"], correta: 0, explicacao: "CA-CHOR-RO tem 3 sílabas." },
      { pergunta: "Qual palavra é ÁRVORE?", opcoes: ["ÁRVORE", "AVIÃO", "AMIGO"], correta: 0, explicacao: "ÁR-VO-RE tem tronco e folhas." },
      { pergunta: "Qual palavra é ESCOLA?", opcoes: ["ESCOLA", "ESTRELA", "ESCADA"], correta: 0, explicacao: "ES-CO-LA é o lugar de aprender." },
    ],
    medio: [
      { pergunta: "Quantas sílabas tem BI-CI-CLE-TA?", opcoes: ["4", "2", "6"], correta: 0, explicacao: "BI · CI · CLE · TA = 4 sílabas." },
      { pergunta: "'O cachorro corre no ____.' Complete:", opcoes: ["PARQUE", "LIVRO", "SOL"], correta: 0, explicacao: "Lugar aberto pra correr = PARQUE." },
      { pergunta: "Onde a gente lê histórias?", opcoes: ["No LIVRO", "No carro", "No prato"], correta: 0, explicacao: "Livro = casa das histórias." },
    ],
    dificil: [
      { pergunta: "Ler devagar ajuda a:", opcoes: ["Compreender melhor", "Esquecer", "Confundir"], correta: 0, explicacao: "Calma + atenção = compreensão." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio bastante", "Não leio", "Fecho o livro"], correta: 0, explicacao: "Mais leitura, mais palavras." },
      { pergunta: "Numa história, personagem é:", opcoes: ["Quem faz a ação", "Onde acontece", "Quando aconteceu"], correta: 0, explicacao: "Personagem = QUEM." },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caça às Palavras",
    objetivo:
      "Palavras voam pela tela! Encontre ESCOLA, ÁRVORE e CACHORRO em até 90s. Cada acerto recupera uma página do livro encantado.",
    tempoSegundos: 90,
    elementos: [
      { nome: "ESCOLA", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA" },
      { nome: "ÁRVORE", imagemUrl: arvoreImg, rotulo: "🌳 ÁRVORE" },
      { nome: "CACHORRO", imagemUrl: cachorroImg, rotulo: "🐶 CACHORRO" },
    ],
    distratores: [
      { nome: "Sol", imagemUrl: solImg, rotulo: "☀️" },
      { nome: "Bola", imagemUrl: bolaImg, rotulo: "⚽" },
      { nome: "Carro", imagemUrl: carroImg, rotulo: "🚗" },
      { nome: "Peixe", imagemUrl: peixeImg, rotulo: "🐟" },
      { nome: "Bicicleta", imagemUrl: bicicletaImg, rotulo: "🚲" },
      { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠" },
      { nome: "Estrela", imagemUrl: estrelaImg, rotulo: "⭐" },
      { nome: "Coruja", imagemUrl: corujaImg, rotulo: "🦉" },
    ],
    acerto: "📚 Livro encantado restaurado! Você é Guardião das Palavras!",
  },

  missaoFamilia: {
    titulo: "Leitura em Família",
    instrucao:
      "Leia um pequeno texto com um familiar (livro, revista ou uma parte favorita). Depois registrem juntos aqui embaixo.",
    permitirFoto: true,
    registros: [
      { label: "Qual foi o TÍTULO da história?", tipo: "texto" },
      { label: "QUEM leu com você?", tipo: "texto" },
      { label: "Qual foi sua parte FAVORITA?", tipo: "texto" },
      { label: "Você gostou da leitura?", tipo: "sim_nao" },
    ],
  },

  proximaHabilidade: { codigo: "EF02LP02" },
};

export default aula;
