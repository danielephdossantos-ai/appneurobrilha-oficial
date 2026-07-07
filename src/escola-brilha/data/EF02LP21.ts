import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import binoculo_img from "@/assets/neuro-treino/objetos/binoculo.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import celular_img from "@/assets/neuro-treino/objetos/celular.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import desenho_img from "@/assets/neuro-treino/objetos/desenho.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";
import tablet_img from "@/assets/neuro-treino/objetos/tablet.png";
import tv_img from "@/assets/neuro-treino/objetos/tv-moderna.png";

/**
 * EF02LP21 — Explorando na Tela
 * BNCC: textos informativos em ambientes digitais.
 */
const aula: Aula = {
  codigo: "EF02LP21",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Explorando na Tela",
  narrativa: {
    titulo: "Explorando na Tela",
    contexto: "Brilha ganhou um tablet mágico!",
    problema: "Não sabe onde procurar informações confiáveis.",
    convite: "Bora explorar textos na tela com a ajuda do professor?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Explorar, com mediação, textos informativos em ambientes digitais.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Tela", imagemUrl: tv_img, silabas: ["TE", "LA"], frase: "Leio na tela." },
      { palavra: "Tablet", imagemUrl: tablet_img, silabas: ["TA", "BLET"], frase: "Meu tablet." },
      { palavra: "Site", imagemUrl: celular_img, silabas: ["SI", "TE"], frase: "Um site confiável." },
      { palavra: "Buscar", imagemUrl: binoculo_img, silabas: ["BUS", "CAR"], frase: "Busquei informação." },
      { palavra: "Legenda", imagemUrl: desenho_img, silabas: ["LE", "GEN", "DA"], frase: "Legenda da imagem." }
    ]
  },
  objetivos: ["Ligar o tablet.", "Abrir um site com o professor.", "Ler título e resumo.", "Identificar imagem+legenda.", "Voltar quando confuso."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🖥️ Textos digitais têm título, imagem+legenda, links e podem ter vídeo.\nSempre com PROFESSOR OU RESPONSÁVEL do lado.",
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
    enunciado: "Toque na figura que combina com Tela.",
    resposta: "Tela.",
    explicacao: "Tela é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Tela",
      opcoes: [
        { nome: "tv", imagemUrl: tv_img },
        { nome: "tablet", imagemUrl: tablet_img },
        { nome: "celular", imagemUrl: celular_img }
      ],
      respostaCerta: "tv"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Tela?", resposta: "Tela.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Tablet?", resposta: "Tablet.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Site?", resposta: "Site.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Tela", itemImagemUrl: tv_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Tablet", itemImagemUrl: tablet_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Site", itemImagemUrl: celular_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Buscar", itemImagemUrl: binoculo_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Legenda", itemImagemUrl: desenho_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Tela?", opcoes: ["Tela", "Tablet", "Site"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Tablet?", opcoes: ["Tablet", "Tela", "Site"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Site?", opcoes: ["Site", "Tela", "Tablet"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Buscar?", opcoes: ["Buscar", "Tela", "Tablet"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Explorando na Tela", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Explorando na Tela.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Tela?", opcoes: ["Tela","Tablet","Site"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Tablet?", opcoes: ["Tablet","Tela","Site"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Site?", opcoes: ["Site","Tela","Tablet"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Explorando na Tela", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Explorador Digital! 🎁 Item: Tablet Mágico.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "A internet tem MAIS páginas que os livros de todas as bibliotecas do mundo somadas!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Tela",
      instrucao: "Toque pra ouvir. Qual figura combina com Tela?",
      pergunta: "Palavra: Tela",
      opcoes: [
        { nome: "Tela", imagemUrl: tv_img, rotulo: "Tela" },
        { nome: "Tablet", imagemUrl: tablet_img, rotulo: "Tablet" },
        { nome: "Site", imagemUrl: celular_img, rotulo: "Site" }
      ],
      correta: 0,
      acerto: "✅ Tela!",
      erro: "Ouça de novo e escolha Tela."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Tablet",
      instrucao: "Toque pra ouvir. Qual figura combina com Tablet?",
      pergunta: "Palavra: Tablet",
      opcoes: [
        { nome: "Tablet", imagemUrl: tablet_img, rotulo: "Tablet" },
        { nome: "Tela", imagemUrl: tv_img, rotulo: "Tela" },
        { nome: "Site", imagemUrl: celular_img, rotulo: "Site" }
      ],
      correta: 0,
      acerto: "✅ Tablet!",
      erro: "Ouça de novo e escolha Tablet."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Site",
      instrucao: "Toque pra ouvir. Qual figura combina com Site?",
      pergunta: "Palavra: Site",
      opcoes: [
        { nome: "Site", imagemUrl: celular_img, rotulo: "Site" },
        { nome: "Tela", imagemUrl: tv_img, rotulo: "Tela" },
        { nome: "Tablet", imagemUrl: tablet_img, rotulo: "Tablet" }
      ],
      correta: 0,
      acerto: "✅ Site!",
      erro: "Ouça e escolha Site."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Tela", "Tablet", "Site"],
      imagens: [
        { imagemUrl: tv_img, quantidade: 1, rotulo: "Tela" },
        { imagemUrl: tablet_img, quantidade: 1, rotulo: "Tablet" },
        { imagemUrl: celular_img, quantidade: 1, rotulo: "Site" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Buscar?",
      pergunta: "Palavra: Buscar",
      opcoes: [
        { nome: "Buscar", imagemUrl: binoculo_img, rotulo: "Buscar" },
        { nome: "Tela", imagemUrl: tv_img, rotulo: "Tela" },
        { nome: "Tablet", imagemUrl: tablet_img, rotulo: "Tablet" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Buscar."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Tela","Tablet","Site"], correta: 0, explicacao: "É Tela.", visual: { tipo: "itens", imagemUrl: tv_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Tablet","Tela","Site"], correta: 0, explicacao: "É Tablet.", visual: { tipo: "itens", imagemUrl: tablet_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Site","Tela","Tablet"], correta: 0, explicacao: "É Site.", visual: { tipo: "itens", imagemUrl: celular_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Explorando na Tela", "Só matemática", "Só música"], correta: 0, explicacao: "Explorando na Tela." },
      { pergunta: "Tablet aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Site tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Explorando Sites",
    objetivo: "Ache 3: TABLET, SITE, LEGENDA.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Tela", imagemUrl: tv_img, rotulo: "Tela" },
      { nome: "Tablet", imagemUrl: tablet_img, rotulo: "Tablet" },
      { nome: "Site", imagemUrl: celular_img, rotulo: "Site" }
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
    titulo: "Pesquisa Segura",
    instrucao: "Pesquisem juntos algo interessante e anotem o que aprenderam.",
    permitirFoto: true,
    registros: [
      { label: "O que buscamos", tipo: "texto" },{ label: "Site visitado", tipo: "texto" },{ label: "Aprendemos que…", tipo: "texto" },{ label: "Ajudou?", tipo: "sim_nao" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP22" }
};

export default aula;
