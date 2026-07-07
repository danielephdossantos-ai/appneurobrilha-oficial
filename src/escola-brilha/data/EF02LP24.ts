import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import celular_img from "@/assets/neuro-treino/objetos/celular.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import radio_img from "@/assets/neuro-treino/objetos/radio-antigo.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";
import tambor_img from "@/assets/neuro-treino/objetos/tambor.png";
import tv_img from "@/assets/neuro-treino/objetos/tv-moderna.png";

/**
 * EF02LP24 — Rádio Brilha
 * BNCC: relatos em áudio e vídeo.
 */
const aula: Aula = {
  codigo: "EF02LP24",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Rádio Brilha",
  narrativa: {
    titulo: "Rádio Brilha",
    contexto: "Brilha inaugurou a Rádio Brilha!",
    problema: "Precisa gravar um relato — mas como falar direito no microfone?",
    convite: "Bora gravar um relato juntos?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Produzir relatos que possam ser repassados por áudio ou vídeo.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Rádio", imagemUrl: radio_img, silabas: ["RÁ", "DIO"], frase: "Ouço rádio." },
      { palavra: "Microfone", imagemUrl: tambor_img, silabas: ["MI", "CRO", "FO", "NE"], frase: "Falei no microfone." },
      { palavra: "Áudio", imagemUrl: celular_img, silabas: ["ÁU", "DIO"], frase: "Enviei um áudio." },
      { palavra: "Vídeo", imagemUrl: tv_img, silabas: ["VÍ", "DEO"], frase: "Gravei um vídeo." },
      { palavra: "Relato", imagemUrl: album_img, silabas: ["RE", "LA", "TO"], frase: "Meu relato pra rádio." }
    ]
  },
  objetivos: ["Planejar o que vai dizer.", "Falar devagar.", "Falar alto.", "Contar em ordem.", "Gravar ou apresentar."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🎙️ Pra gravar áudio/vídeo:\n1) Planeje o que vai dizer.\n2) Fale devagar e alto.\n3) Conte em ordem.",
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
    enunciado: "Toque na figura que combina com Rádio.",
    resposta: "Rádio.",
    explicacao: "Rádio é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Rádio",
      opcoes: [
        { nome: "radio", imagemUrl: radio_img },
        { nome: "tambor", imagemUrl: tambor_img },
        { nome: "celular", imagemUrl: celular_img }
      ],
      respostaCerta: "radio"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Rádio?", resposta: "Rádio.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Microfone?", resposta: "Microfone.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Áudio?", resposta: "Áudio.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Rádio", itemImagemUrl: radio_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Microfone", itemImagemUrl: tambor_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Áudio", itemImagemUrl: celular_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Vídeo", itemImagemUrl: tv_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Relato", itemImagemUrl: album_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Rádio?", opcoes: ["Rádio", "Microfone", "Áudio"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Microfone?", opcoes: ["Microfone", "Rádio", "Áudio"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Áudio?", opcoes: ["Áudio", "Rádio", "Microfone"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Vídeo?", opcoes: ["Vídeo", "Rádio", "Microfone"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Rádio Brilha", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Rádio Brilha.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Rádio?", opcoes: ["Rádio","Microfone","Áudio"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Microfone?", opcoes: ["Microfone","Rádio","Áudio"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Áudio?", opcoes: ["Áudio","Rádio","Microfone"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Rádio Brilha", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Locutor da Rádio Brilha! 🎁 Item: Microfone de Ouro.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "A primeira transmissão de rádio no Brasil foi em 1922 — bem mais nova que os livros!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Rádio",
      instrucao: "Toque pra ouvir. Qual figura combina com Rádio?",
      pergunta: "Palavra: Rádio",
      opcoes: [
        { nome: "Rádio", imagemUrl: radio_img, rotulo: "Rádio" },
        { nome: "Microfone", imagemUrl: tambor_img, rotulo: "Microfone" },
        { nome: "Áudio", imagemUrl: celular_img, rotulo: "Áudio" }
      ],
      correta: 0,
      acerto: "✅ Rádio!",
      erro: "Ouça de novo e escolha Rádio."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Microfone",
      instrucao: "Toque pra ouvir. Qual figura combina com Microfone?",
      pergunta: "Palavra: Microfone",
      opcoes: [
        { nome: "Microfone", imagemUrl: tambor_img, rotulo: "Microfone" },
        { nome: "Rádio", imagemUrl: radio_img, rotulo: "Rádio" },
        { nome: "Áudio", imagemUrl: celular_img, rotulo: "Áudio" }
      ],
      correta: 0,
      acerto: "✅ Microfone!",
      erro: "Ouça de novo e escolha Microfone."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Áudio",
      instrucao: "Toque pra ouvir. Qual figura combina com Áudio?",
      pergunta: "Palavra: Áudio",
      opcoes: [
        { nome: "Áudio", imagemUrl: celular_img, rotulo: "Áudio" },
        { nome: "Rádio", imagemUrl: radio_img, rotulo: "Rádio" },
        { nome: "Microfone", imagemUrl: tambor_img, rotulo: "Microfone" }
      ],
      correta: 0,
      acerto: "✅ Áudio!",
      erro: "Ouça e escolha Áudio."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Rádio", "Microfone", "Áudio"],
      imagens: [
        { imagemUrl: radio_img, quantidade: 1, rotulo: "Rádio" },
        { imagemUrl: tambor_img, quantidade: 1, rotulo: "Microfone" },
        { imagemUrl: celular_img, quantidade: 1, rotulo: "Áudio" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Vídeo?",
      pergunta: "Palavra: Vídeo",
      opcoes: [
        { nome: "Vídeo", imagemUrl: tv_img, rotulo: "Vídeo" },
        { nome: "Rádio", imagemUrl: radio_img, rotulo: "Rádio" },
        { nome: "Microfone", imagemUrl: tambor_img, rotulo: "Microfone" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Vídeo."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Rádio","Microfone","Áudio"], correta: 0, explicacao: "É Rádio.", visual: { tipo: "itens", imagemUrl: radio_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Microfone","Rádio","Áudio"], correta: 0, explicacao: "É Microfone.", visual: { tipo: "itens", imagemUrl: tambor_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Áudio","Rádio","Microfone"], correta: 0, explicacao: "É Áudio.", visual: { tipo: "itens", imagemUrl: celular_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Rádio Brilha", "Só matemática", "Só música"], correta: 0, explicacao: "Rádio Brilha." },
      { pergunta: "Microfone aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Áudio tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Rádio no Ar",
    objetivo: "Ache 3: RÁDIO, MICROFONE, ÁUDIO.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Rádio", imagemUrl: radio_img, rotulo: "Rádio" },
      { nome: "Microfone", imagemUrl: tambor_img, rotulo: "Microfone" },
      { nome: "Áudio", imagemUrl: celular_img, rotulo: "Áudio" }
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
    titulo: "Gravei um Relato",
    instrucao: "Gravem um áudio de 30s contando o dia. Ouçam juntos.",
    permitirFoto: true,
    registros: [
      { label: "Sobre o quê", tipo: "texto" },{ label: "Quem gravou", tipo: "texto" },{ label: "Duração", tipo: "texto" },{ label: "Ficou legal?", tipo: "sim_nao" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP25" }
};

export default aula;
