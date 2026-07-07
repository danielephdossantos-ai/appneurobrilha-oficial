import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import artista_img from "@/assets/neuro-treino/objetos/artista.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import camera_img from "@/assets/neuro-treino/objetos/camera-antiga.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import quadrinhos_img from "@/assets/neuro-treino/objetos/quadrinhos.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";
import tv_img from "@/assets/neuro-treino/objetos/tv-moderna.png";

/**
 * EF02LP19 — Repórter Mirim
 * BNCC: notícias curtas para público infantil.
 */
const aula: Aula = {
  codigo: "EF02LP19",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Repórter Mirim",
  narrativa: {
    titulo: "Repórter Mirim",
    contexto: "Brilha virou repórter do Jornal da Escola!",
    problema: "Precisa escrever uma notícia curta pra as outras crianças entenderem.",
    convite: "Bora aprender a fazer uma notícia?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Planejar e produzir notícias curtas para público infantil.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Notícia", imagemUrl: tv_img, silabas: ["NO", "TÍ", "CIA"], frase: "Notícia do dia!" },
      { palavra: "Repórter", imagemUrl: artista_img, silabas: ["RE", "PÓR", "TER"], frase: "Sou repórter." },
      { palavra: "Jornal", imagemUrl: album_img, silabas: ["JOR", "NAL"], frase: "Jornal da escola." },
      { palavra: "Título", imagemUrl: quadrinhos_img, silabas: ["TÍ", "TU", "LO"], frase: "Título GRANDE." },
      { palavra: "Foto", imagemUrl: camera_img, silabas: ["FO", "TO"], frase: "Uma foto ajuda." }
    ]
  },
  objetivos: ["Ver O QUE aconteceu.", "QUEM participou.", "QUANDO e ONDE.", "Contar em poucas frases.", "Título chamativo."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "📰 Toda notícia responde: O QUÊ · QUEM · QUANDO · ONDE.\nComeça com TÍTULO chamativo e usa frases curtas.",
  explicacoesNiveis: {
    nivel1: "Preste atenção nos detalhes da explicação.",
    nivel2: "Olhe os cards de Aprendendo — cada um mostra um exemplo.",
    nivel3: "Pense onde isso aparece no seu dia a dia.",
    nivel4: "Escritores e leitores usam isso o tempo todo!"
  },
  exemploResolvido: {
    enunciado: "Como aplicar o que aprendemos?",
    passos: [
      "Leia com calma o exemplo.",
      "Pense no que a Brilha faria.",
      "Escolha a alternativa que combina com a explicação."
    ],
    resposta: "Você usou o que aprendeu. ✅"
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que combina com Notícia.",
    resposta: "Notícia.",
    explicacao: "Notícia é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Notícia",
      opcoes: [
        { nome: "tv", imagemUrl: tv_img },
        { nome: "artista", imagemUrl: artista_img },
        { nome: "album", imagemUrl: album_img }
      ],
      respostaCerta: "tv"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Notícia?", resposta: "Notícia.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Repórter?", resposta: "Repórter.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Jornal?", resposta: "Jornal.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Notícia", itemImagemUrl: tv_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Repórter", itemImagemUrl: artista_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Jornal", itemImagemUrl: album_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Título", itemImagemUrl: quadrinhos_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Foto", itemImagemUrl: camera_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Notícia?", opcoes: ["Notícia", "Repórter", "Jornal"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Repórter?", opcoes: ["Repórter", "Notícia", "Jornal"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Jornal?", opcoes: ["Jornal", "Notícia", "Repórter"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Título?", opcoes: ["Título", "Notícia", "Repórter"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Repórter Mirim", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Repórter Mirim.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Notícia?", opcoes: ["Notícia","Repórter","Jornal"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Repórter?", opcoes: ["Repórter","Notícia","Jornal"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Jornal?", opcoes: ["Jornal","Notícia","Repórter"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Repórter Mirim", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Repórter Mirim! 🎁 Item: Microfone de Ouro.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Jornalistas usam a 'pirâmide invertida': começam pelo mais importante e depois detalham!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Notícia",
      instrucao: "Toque pra ouvir. Qual figura combina com Notícia?",
      pergunta: "Palavra: Notícia",
      opcoes: [
        { nome: "Notícia", imagemUrl: tv_img, rotulo: "Notícia" },
        { nome: "Repórter", imagemUrl: artista_img, rotulo: "Repórter" },
        { nome: "Jornal", imagemUrl: album_img, rotulo: "Jornal" }
      ],
      correta: 0,
      acerto: "✅ Notícia!",
      erro: "Ouça de novo e escolha Notícia."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Repórter",
      instrucao: "Toque pra ouvir. Qual figura combina com Repórter?",
      pergunta: "Palavra: Repórter",
      opcoes: [
        { nome: "Repórter", imagemUrl: artista_img, rotulo: "Repórter" },
        { nome: "Notícia", imagemUrl: tv_img, rotulo: "Notícia" },
        { nome: "Jornal", imagemUrl: album_img, rotulo: "Jornal" }
      ],
      correta: 0,
      acerto: "✅ Repórter!",
      erro: "Ouça de novo e escolha Repórter."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Jornal",
      instrucao: "Toque pra ouvir. Qual figura combina com Jornal?",
      pergunta: "Palavra: Jornal",
      opcoes: [
        { nome: "Jornal", imagemUrl: album_img, rotulo: "Jornal" },
        { nome: "Notícia", imagemUrl: tv_img, rotulo: "Notícia" },
        { nome: "Repórter", imagemUrl: artista_img, rotulo: "Repórter" }
      ],
      correta: 0,
      acerto: "✅ Jornal!",
      erro: "Ouça e escolha Jornal."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Notícia", "Repórter", "Jornal"],
      imagens: [
        { imagemUrl: tv_img, quantidade: 1, rotulo: "Notícia" },
        { imagemUrl: artista_img, quantidade: 1, rotulo: "Repórter" },
        { imagemUrl: album_img, quantidade: 1, rotulo: "Jornal" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Título?",
      pergunta: "Palavra: Título",
      opcoes: [
        { nome: "Título", imagemUrl: quadrinhos_img, rotulo: "Título" },
        { nome: "Notícia", imagemUrl: tv_img, rotulo: "Notícia" },
        { nome: "Repórter", imagemUrl: artista_img, rotulo: "Repórter" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Título."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Notícia","Repórter","Jornal"], correta: 0, explicacao: "É Notícia.", visual: { tipo: "itens", imagemUrl: tv_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Repórter","Notícia","Jornal"], correta: 0, explicacao: "É Repórter.", visual: { tipo: "itens", imagemUrl: artista_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Jornal","Notícia","Repórter"], correta: 0, explicacao: "É Jornal.", visual: { tipo: "itens", imagemUrl: album_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Repórter Mirim", "Só matemática", "Só música"], correta: 0, explicacao: "Repórter Mirim." },
      { pergunta: "Repórter aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Jornal tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Manchetes do Dia",
    objetivo: "Ache 3: NOTÍCIA, JORNAL, REPÓRTER.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Notícia", imagemUrl: tv_img, rotulo: "Notícia" },
      { nome: "Repórter", imagemUrl: artista_img, rotulo: "Repórter" },
      { nome: "Jornal", imagemUrl: album_img, rotulo: "Jornal" }
    ],
    distratores: [
      { nome: "Sol", imagemUrl: sol_img, rotulo: "☀️" },
      { nome: "Bola", imagemUrl: bola_img, rotulo: "⚽" },
      { nome: "Coruja", imagemUrl: coruja_img, rotulo: "🦉" },
      { nome: "Estrela", imagemUrl: estrela_img, rotulo: "⭐" }
    ],
    acerto: "🎯 Mestre da missão!"
  },
  missaoFamilia: {
    titulo: "Notícia da Família",
    instrucao: "Escrevam uma notícia de 3 frases sobre algo que aconteceu na família esta semana.",
    permitirFoto: true,
    registros: [
      { label: "Título", tipo: "texto" },{ label: "O quê + quando", tipo: "texto" },{ label: "Quem participou", tipo: "texto" },{ label: "Onde aconteceu", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP20" }
};

export default aula;
