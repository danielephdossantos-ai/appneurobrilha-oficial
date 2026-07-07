import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import calendario_img from "@/assets/neuro-treino/objetos/calendario.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import festa_img from "@/assets/neuro-treino/objetos/festa.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import papel_img from "@/assets/neuro-treino/objetos/papel.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import quadrinhos_img from "@/assets/neuro-treino/objetos/quadrinhos.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP18 — Cartaz & Folheto Divertido
 * BNCC: cartazes e folhetos para divulgar eventos.
 */
const aula: Aula = {
  codigo: "EF02LP18",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Cartaz & Folheto Divertido",
  narrativa: {
    titulo: "Cartaz & Folheto Divertido",
    contexto: "A escola vai fazer uma FESTA — Brilha foi convidada a produzir o cartaz.",
    problema: "Ninguém vai saber da festa se o cartaz for confuso!",
    convite: "Bora criar um cartaz que chama atenção?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Planejar e produzir cartazes e folhetos com imagem, título grande e informação clara.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Cartaz", imagemUrl: quadrinhos_img, silabas: ["CAR", "TAZ"], frase: "Cartaz da festa!" },
      { palavra: "Folheto", imagemUrl: papel_img, silabas: ["FO", "LHE", "TO"], frase: "Folheto pra distribuir." },
      { palavra: "Título", imagemUrl: album_img, silabas: ["TÍ", "TU", "LO"], frase: "Título GRANDE!" },
      { palavra: "Data", imagemUrl: calendario_img, silabas: ["DA", "TA"], frase: "Sábado, 10h." },
      { palavra: "Convite", imagemUrl: festa_img, silabas: ["CON", "VI", "TE"], frase: "Convite pra todos!" }
    ]
  },
  objetivos: ["Escolher título grande.", "Escrever data/hora.", "Colocar imagem.", "Escolher cores.", "Convidar de forma clara."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "📢 CARTAZ = grande, colado na parede.\n📄 FOLHETO = pequeno, distribuído.\nTítulo GRANDE, imagem chamativa, data/hora, local e uma frase-convite.",
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
    enunciado: "Toque na figura que combina com Cartaz.",
    resposta: "Cartaz.",
    explicacao: "Cartaz é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Cartaz",
      opcoes: [
        { nome: "quadrinhos", imagemUrl: quadrinhos_img },
        { nome: "papel", imagemUrl: papel_img },
        { nome: "album", imagemUrl: album_img }
      ],
      respostaCerta: "quadrinhos"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Cartaz?", resposta: "Cartaz.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Folheto?", resposta: "Folheto.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Título?", resposta: "Título.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Cartaz", itemImagemUrl: quadrinhos_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Folheto", itemImagemUrl: papel_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Título", itemImagemUrl: album_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Data", itemImagemUrl: calendario_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Convite", itemImagemUrl: festa_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Cartaz?", opcoes: ["Cartaz", "Folheto", "Título"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Folheto?", opcoes: ["Folheto", "Cartaz", "Título"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Título?", opcoes: ["Título", "Cartaz", "Folheto"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Data?", opcoes: ["Data", "Cartaz", "Folheto"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Cartaz & Folheto Divertido", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Cartaz & Folheto Divertido.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Cartaz?", opcoes: ["Cartaz","Folheto","Título"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Folheto?", opcoes: ["Folheto","Cartaz","Título"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Título?", opcoes: ["Título","Cartaz","Folheto"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Cartaz & Folheto Divertido", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Divulgador Oficial! 🎁 Item: Kit de Cartazes.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Cartazes usam CORES QUENTES (vermelho, amarelo) porque chamam mais atenção que cores frias!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Cartaz",
      instrucao: "Toque pra ouvir. Qual figura combina com Cartaz?",
      pergunta: "Palavra: Cartaz",
      opcoes: [
        { nome: "Cartaz", imagemUrl: quadrinhos_img, rotulo: "Cartaz" },
        { nome: "Folheto", imagemUrl: papel_img, rotulo: "Folheto" },
        { nome: "Título", imagemUrl: album_img, rotulo: "Título" }
      ],
      correta: 0,
      acerto: "✅ Cartaz!",
      erro: "Ouça de novo e escolha Cartaz."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Folheto",
      instrucao: "Toque pra ouvir. Qual figura combina com Folheto?",
      pergunta: "Palavra: Folheto",
      opcoes: [
        { nome: "Folheto", imagemUrl: papel_img, rotulo: "Folheto" },
        { nome: "Cartaz", imagemUrl: quadrinhos_img, rotulo: "Cartaz" },
        { nome: "Título", imagemUrl: album_img, rotulo: "Título" }
      ],
      correta: 0,
      acerto: "✅ Folheto!",
      erro: "Ouça de novo e escolha Folheto."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Título",
      instrucao: "Toque pra ouvir. Qual figura combina com Título?",
      pergunta: "Palavra: Título",
      opcoes: [
        { nome: "Título", imagemUrl: album_img, rotulo: "Título" },
        { nome: "Cartaz", imagemUrl: quadrinhos_img, rotulo: "Cartaz" },
        { nome: "Folheto", imagemUrl: papel_img, rotulo: "Folheto" }
      ],
      correta: 0,
      acerto: "✅ Título!",
      erro: "Ouça e escolha Título."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Cartaz", "Folheto", "Título"],
      imagens: [
        { imagemUrl: quadrinhos_img, quantidade: 1, rotulo: "Cartaz" },
        { imagemUrl: papel_img, quantidade: 1, rotulo: "Folheto" },
        { imagemUrl: album_img, quantidade: 1, rotulo: "Título" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Data?",
      pergunta: "Palavra: Data",
      opcoes: [
        { nome: "Data", imagemUrl: calendario_img, rotulo: "Data" },
        { nome: "Cartaz", imagemUrl: quadrinhos_img, rotulo: "Cartaz" },
        { nome: "Folheto", imagemUrl: papel_img, rotulo: "Folheto" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Data."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Cartaz","Folheto","Título"], correta: 0, explicacao: "É Cartaz.", visual: { tipo: "itens", imagemUrl: quadrinhos_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Folheto","Cartaz","Título"], correta: 0, explicacao: "É Folheto.", visual: { tipo: "itens", imagemUrl: papel_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Título","Cartaz","Folheto"], correta: 0, explicacao: "É Título.", visual: { tipo: "itens", imagemUrl: album_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Cartaz & Folheto Divertido", "Só matemática", "Só música"], correta: 0, explicacao: "Cartaz & Folheto Divertido." },
      { pergunta: "Folheto aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Título tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Cartaz Perfeito",
    objetivo: "Ache 3: CARTAZ, FOLHETO, CONVITE.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Cartaz", imagemUrl: quadrinhos_img, rotulo: "Cartaz" },
      { nome: "Folheto", imagemUrl: papel_img, rotulo: "Folheto" },
      { nome: "Título", imagemUrl: album_img, rotulo: "Título" }
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
    titulo: "Cartaz de Casa",
    instrucao: "Criem um cartaz sobre uma atividade em família (piquenique, cinema em casa…).",
    permitirFoto: true,
    registros: [
      { label: "Título", tipo: "texto" },{ label: "Data e hora", tipo: "texto" },{ label: "Convidados", tipo: "texto" },{ label: "Cor escolhida", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP19" }
};

export default aula;
