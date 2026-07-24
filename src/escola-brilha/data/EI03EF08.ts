import type { Aula } from "../types";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livrosImg } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as bibliotecaImg } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as princesaImg } from "@/assets/neuro-treino/objetos/princesa.png.asset.json";
import { url as dinossauroImg } from "@/assets/neuro-treino/objetos/dinossauro.png.asset.json";
import { url as coelhoImg } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as heroiImg } from "@/assets/neuro-treino/objetos/heroi.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";

/**
 * EI03EF08 — Pré II · Selecionar livros de gêneros conhecidos
 * Pedagogia: autonomia leitora. A criança escolhe por MEMÓRIA (livros que
 * já conhece), TEMA (o que ama), e ILUSTRAÇÃO. É comportamento leitor
 * (Lerner) — antes de ler letras, a criança navega o mundo dos livros.
 */
const aula: Aula = {
  codigo: "EI03EF08",
  ano: "Educação Infantil",
  disciplina: "Português",
  titulo: "Escolho Meu Livro",

  narrativa: {
    titulo: "A estante da biblioteca",
    contexto: "Na sala tinha uma ESTANTE cheia de livros. Uns o Brilha já conhecia — a vovó já tinha lido. Outros nunca tinha visto.",
    problema: "A tia da biblioteca disse: 'Você escolhe UM pra ler hoje.' Como o Brilha decide?",
    convite: "Bora aprender a escolher o livro certo — por tema, por memória e por ilustração?",
  },

  conhecimentosPrevios: ["Já folheou um livro.", "Reconhece capa e ilustração.", "Tem preferência por temas."],

  missao: "Aprender a escolher um livro sozinho — usando MEMÓRIA, GOSTO e OLHAR.",

  objetivos: [
    "Reconhecer um livro conhecido pela capa.",
    "Escolher pelo TEMA que gosta.",
    "Escolher pelas ilustrações antes de saber ler letras.",
  ],

  explicacao:
    "Pra escolher um livro sem saber ler letras, a gente usa 3 pistas:\n\n1. MEMÓRIA — 'já ouvi essa história, adorei, quero de novo!'.\n2. TEMA — 'ama dinossauro? escolhe o livro com dinossauro na capa'.\n3. ILUSTRAÇÃO — 'os desenhos são bonitos, chamam meu olhar'.\n\nEscolher o próprio livro é sinal de LEITOR — você já sabe o que gosta.",

  explicacaoAtiva: [
    { texto: "Livro que a gente já conhece = MEMÓRIA. A gente lembra da história.", imagem: livroImg, imagemAlt: "Livro conhecido" },
    { texto: "Ama princesas? Escolhe o livro com PRINCESA na capa.", imagem: princesaImg, imagemAlt: "Livro de princesa" },
    {
      texto: "Ama dinossauros? Escolhe o livro com DINOSSAURO na capa.",
      imagem: dinossauroImg,
      imagemAlt: "Livro de dinossauro",
      checagem: {
        pergunta: "Amo animais fofos. Escolho o livro de…?",
        opcoes: ["Coelho", "Dinossauro"],
        correta: 0,
        explicacao: "Coelho combina com animais fofos.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Escolho o livro que combina comigo.",
    nivel2: "Uso 3 pistas: memória, tema e ilustração.",
    nivel3: "Não precisa saber ler letras — o olho já lê a capa.",
    nivel4: "Escolher o próprio livro é o primeiro passo da leitura independente.",
  },

  exemploResolvido: {
    enunciado: "A criança AMA super-heróis. Qual livro ela escolhe?",
    passos: [
      "Olha as capas.",
      "Vê um com HERÓI de capa vermelha.",
      "Escolhe: combina com o que ela ama.",
    ],
    resposta: "O livro do super-herói — combinou o gosto com a capa.",
    interativo: { tipo: "contagem", imagemUrl: heroiImg, quantidade: 1, nomeItem: "herói", nomeItemPlural: "heróis", pergunta: "Quantos heróis tem na capa?" },
  },

  atividadeGuiada: {
    enunciado: "A criança AMA fazer bolo. Qual livro ela escolhe?",
    resposta: "O livro de receitas com bolo na capa.",
    explicacao: "Escolha pelo TEMA.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual livro combina com quem ama COZINHAR?",
      opcoes: [
        { nome: "Bolo (receitas)", imagemUrl: boloImg },
        { nome: "Dinossauro", imagemUrl: dinossauroImg },
        { nome: "Princesa", imagemUrl: princesaImg },
      ],
      respostaCerta: "Bolo (receitas)",
    },
  },

  exercicios: [
    { enunciado: "Já ouvi essa história e adorei. Escolho por…?", resposta: "Memória.", dica: "Lembra." },
    { enunciado: "Amo o tema princesa. Escolho por…?", resposta: "Tema.", dica: "Combina com meu gosto." },
    { enunciado: "Desenhos me chamam atenção. Escolho por…?", resposta: "Ilustração.", dica: "Olho pega primeiro." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 crianças, 3 gostos diferentes. Cada uma escolhe o livro certo.",
    resposta: "Cada gosto, uma capa.",
    visual: {
      cena: [
        { personagem: "Ama princesa", itemImagemUrl: princesaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Ama dinossauro", itemImagemUrl: dinossauroImg, quantidade: 1, cor: "#4ADE80" },
        { personagem: "Ama coelho", itemImagemUrl: coelhoImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        { pergunta: "Ama princesa. Livro?", opcoes: ["Princesa", "Dinossauro"], correta: 0, explicacao: "Capa combina com gosto." },
        { pergunta: "Ama dinossauro. Livro?", opcoes: ["Coelho", "Dinossauro"], correta: 1, explicacao: "Dinossauro na capa." },
        { pergunta: "Ama bicho fofo. Livro?", opcoes: ["Coelho", "Dinossauro"], correta: 0, explicacao: "Coelho é fofo." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Escolho pelo que amo.",
      "Uso memória, tema e ilustração.",
      "Não preciso ler letra pra saber do que é.",
      "Escolher sozinho é sinal de LEITOR.",
    ],
    dica: "Em casa: monte uma mini-estante com seus 5 livros favoritos.",
  },

  quiz: [
    { pergunta: "Escolho livro por memória?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Sim, quando já conheço.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro conhecido" } },
    { pergunta: "Amo dinossauro. Escolho:", opcoes: ["Livro de dinossauro", "Livro de princesa"], correta: 0, explicacao: "Tema combina.", visual: { tipo: "itens", imagemUrl: dinossauroImg, quantidade: 1, rotulo: "Dinossauro" } },
    { pergunta: "Sem saber ler letras, o que me ajuda?", opcoes: ["A ilustração da capa", "Nada"], correta: 0, explicacao: "Olho lê primeiro.", visual: { tipo: "itens", imagemUrl: bibliotecaImg, quantidade: 1, rotulo: "Biblioteca" } },
  ],

  conclusao: "🏅 Você virou LEITOR INDEPENDENTE! Missão em Casa: escolha 1 livro sozinho e explique por que escolheu esse.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Crianças que ESCOLHEM os próprios livros gostam MUITO mais de ler quando crescem — porque leem o que amam.",
    imagemUrl: livrosImg,
  },

  interativas: [
    {
      tipo: "ligar",
      titulo: "Fase 1 · Livro certo pra cada gosto",
      instrucao: "Ligue.",
      pares: [
        { a: "Ama princesa", b: "Livro de princesa", aImagem: princesaImg, aQuantidade: 1 },
        { a: "Ama dinossauro", b: "Livro de dinossauro", aImagem: dinossauroImg, aQuantidade: 1 },
        { a: "Ama cozinhar", b: "Livro de receita", aImagem: boloImg, aQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Já conhece esse?",
      instrucao: "Escolha.",
      grupos: [{ imagemUrl: livroImg, quantidade: 1, rotulo: "Livro conhecido" }],
      pergunta: "Vovó já leu esse pra mim. Escolho por…",
      opcoes: ["Memória", "Ilustração desconhecida"],
      correta: 0,
      acerto: "Memória — eu lembro e amo.",
      erro: "Se lembro, é memória.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Escolho livro pela capa?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Capa dá pista.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    ],
    medio: [
      { pergunta: "Amo o tema. Escolho por…", opcoes: ["Tema", "Peso do livro"], correta: 0, explicacao: "Tema é o gosto.", visual: { tipo: "itens", imagemUrl: heroiImg, quantidade: 1, rotulo: "Herói" } },
    ],
    dificil: [
      { pergunta: "Não sei ler letra ainda. Ainda escolho?", opcoes: ["Sim, pela imagem", "Não posso"], correta: 0, explicacao: "Imagem já é leitura.", visual: { tipo: "itens", imagemUrl: bibliotecaImg, quantidade: 1, rotulo: "Biblioteca" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03EF09", titulo: "Meu Nome" },
};

export default aula;
