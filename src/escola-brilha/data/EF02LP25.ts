import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import balao_img from "@/assets/neuro-treino/objetos/balao.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import quadrinhos_img from "@/assets/neuro-treino/objetos/quadrinhos.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP25 — Verbetes Bem Feitos
 * BNCC: formatação de verbetes e entrevistas.
 */
const aula: Aula = {
  codigo: "EF02LP25",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Verbetes Bem Feitos",
  narrativa: {
    titulo: "Verbetes Bem Feitos",
    contexto: "Brilha entra na Enciclopédia Falante.",
    problema: "Os verbetes se misturaram — cada gênero tem seu formato!",
    convite: "Bora ver o formato certo?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Reproduzir a formatação de verbetes, entrevistas e relatos de experimentos.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Verbete", imagemUrl: album_img, silabas: ["VER", "BE", "TE"], frase: "Verbete: palavra + definição." },
      { palavra: "Título", imagemUrl: quadrinhos_img, silabas: ["TÍ", "TU", "LO"], frase: "Título GRANDE." },
      { palavra: "Definição", imagemUrl: coruja_img, silabas: ["DE", "FI", "NI", "ÇÃO"], frase: "Definição clara." },
      { palavra: "Pergunta", imagemUrl: balao_img, silabas: ["PER", "GUN", "TA"], frase: "Pergunta na entrevista." },
      { palavra: "Resposta", imagemUrl: balao_img, silabas: ["RES", "POS", "TA"], frase: "Resposta anotada." }
    ]
  },
  objetivos: ["Ver título do verbete.", "Ver definição curta.", "Ver pergunta+resposta na entrevista.", "Ver etapas no relato.", "Escolher o formato certo."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "📚 VERBETE = palavra + definição curta.\n🎤 ENTREVISTA = pergunta + resposta em blocos.\nCada texto tem seu jeito!",
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
    enunciado: "Toque na figura que combina com Verbete.",
    resposta: "Verbete.",
    explicacao: "Verbete é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Verbete",
      opcoes: [
        { nome: "album", imagemUrl: album_img },
        { nome: "quadrinhos", imagemUrl: quadrinhos_img },
        { nome: "coruja", imagemUrl: coruja_img }
      ],
      respostaCerta: "album"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Verbete?", resposta: "Verbete.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Título?", resposta: "Título.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Definição?", resposta: "Definição.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Verbete", itemImagemUrl: album_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Título", itemImagemUrl: quadrinhos_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Definição", itemImagemUrl: coruja_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Pergunta", itemImagemUrl: balao_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Resposta", itemImagemUrl: balao_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Verbete?", opcoes: ["Verbete", "Título", "Definição"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Título?", opcoes: ["Título", "Verbete", "Definição"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Definição?", opcoes: ["Definição", "Verbete", "Título"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Pergunta?", opcoes: ["Pergunta", "Verbete", "Título"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Verbetes Bem Feitos", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Verbetes Bem Feitos.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Verbete?", opcoes: ["Verbete","Título","Definição"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Título?", opcoes: ["Título","Verbete","Definição"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Definição?", opcoes: ["Definição","Verbete","Título"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Verbetes Bem Feitos", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Bibliotecário-Chefe! 🎁 Item: Enciclopédia Falante.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "A palavra 'verbete' vem do latim 'verbum' (palavra) — cada verbete começa por uma palavra!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Verbete",
      instrucao: "Toque pra ouvir. Qual figura combina com Verbete?",
      pergunta: "Palavra: Verbete",
      opcoes: [
        { nome: "Verbete", imagemUrl: album_img, rotulo: "Verbete" },
        { nome: "Título", imagemUrl: quadrinhos_img, rotulo: "Título" },
        { nome: "Definição", imagemUrl: coruja_img, rotulo: "Definição" }
      ],
      correta: 0,
      acerto: "✅ Verbete!",
      erro: "Ouça de novo e escolha Verbete."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Título",
      instrucao: "Toque pra ouvir. Qual figura combina com Título?",
      pergunta: "Palavra: Título",
      opcoes: [
        { nome: "Título", imagemUrl: quadrinhos_img, rotulo: "Título" },
        { nome: "Verbete", imagemUrl: album_img, rotulo: "Verbete" },
        { nome: "Definição", imagemUrl: coruja_img, rotulo: "Definição" }
      ],
      correta: 0,
      acerto: "✅ Título!",
      erro: "Ouça de novo e escolha Título."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Definição",
      instrucao: "Toque pra ouvir. Qual figura combina com Definição?",
      pergunta: "Palavra: Definição",
      opcoes: [
        { nome: "Definição", imagemUrl: coruja_img, rotulo: "Definição" },
        { nome: "Verbete", imagemUrl: album_img, rotulo: "Verbete" },
        { nome: "Título", imagemUrl: quadrinhos_img, rotulo: "Título" }
      ],
      correta: 0,
      acerto: "✅ Definição!",
      erro: "Ouça e escolha Definição."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Verbete", "Título", "Definição"],
      imagens: [
        { imagemUrl: album_img, quantidade: 1, rotulo: "Verbete" },
        { imagemUrl: quadrinhos_img, quantidade: 1, rotulo: "Título" },
        { imagemUrl: coruja_img, quantidade: 1, rotulo: "Definição" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Pergunta?",
      pergunta: "Palavra: Pergunta",
      opcoes: [
        { nome: "Pergunta", imagemUrl: balao_img, rotulo: "Pergunta" },
        { nome: "Verbete", imagemUrl: album_img, rotulo: "Verbete" },
        { nome: "Título", imagemUrl: quadrinhos_img, rotulo: "Título" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Pergunta."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Verbete","Título","Definição"], correta: 0, explicacao: "É Verbete.", visual: { tipo: "itens", imagemUrl: album_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Título","Verbete","Definição"], correta: 0, explicacao: "É Título.", visual: { tipo: "itens", imagemUrl: quadrinhos_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Definição","Verbete","Título"], correta: 0, explicacao: "É Definição.", visual: { tipo: "itens", imagemUrl: coruja_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Verbetes Bem Feitos", "Só matemática", "Só música"], correta: 0, explicacao: "Verbetes Bem Feitos." },
      { pergunta: "Título aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Definição tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Enciclopédia Falante",
    objetivo: "Ache 3: VERBETE, ENTREVISTA, RESPOSTA.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Verbete", imagemUrl: album_img, rotulo: "Verbete" },
      { nome: "Título", imagemUrl: quadrinhos_img, rotulo: "Título" },
      { nome: "Definição", imagemUrl: coruja_img, rotulo: "Definição" }
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
    titulo: "Verbete da Família",
    instrucao: "Escolham uma palavra e escrevam um verbete curto explicando.",
    permitirFoto: true,
    registros: [
      { label: "Palavra", tipo: "texto" },{ label: "Definição", tipo: "texto" },{ label: "Exemplo", tipo: "texto" },{ label: "Quem ajudou?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP26" }
};

export default aula;
