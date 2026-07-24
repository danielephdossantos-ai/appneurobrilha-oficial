import type { Aula } from "../types";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as papelImg } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as calendarioImg } from "@/assets/neuro-treino/objetos/calendario.png.asset.json";
import { url as princesaImg } from "@/assets/neuro-treino/objetos/princesa.png.asset.json";
import { url as lapisImg } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as bandeirolaImg } from "@/assets/neuro-treino/objetos/bandeirola.png.asset.json";

/**
 * EI03EF07 — Pré II · Levantar hipóteses sobre gêneros textuais
 * Pedagogia: reconhecimento de gênero pelo PORTADOR e pelo LAYOUT.
 * A criança aprende que existem tipos diferentes de texto (história,
 * receita, bilhete, cartaz, poema) — cada um com uma cara diferente
 * e uma FUNÇÃO SOCIAL específica (letramento — Magda Soares).
 */
const aula: Aula = {
  codigo: "EI03EF07",
  ano: "Educação Infantil",
  disciplina: "Português",
  titulo: "Que Texto é Esse?",

  narrativa: {
    titulo: "A caixa cheia de textos",
    contexto: "O Brilha achou uma caixa com vários papéis. Um era um LIVRO grosso. Outro era um BILHETE pequenininho. Outro era um CARTAZ colorido. E outro era uma RECEITA de bolo.",
    problema: "Todos tinham LETRAS, mas eram diferentes. Como saber pra que servia cada um?",
    convite: "Bora descobrir que cada texto tem uma cara e uma função?",
  },

  conhecimentosPrevios: ["Sabe que letras formam palavras.", "Já viu um livro e um bilhete.", "Reconhece imagens."],

  missao: "Descobrir que existem TIPOS de texto — cada um com uma cara e uma função na vida.",

  objetivos: [
    "Reconhecer 4 gêneros pela aparência: livro de história, receita, bilhete e cartaz.",
    "Adivinhar o TIPO do texto pelo layout, tamanho e imagens.",
    "Descobrir pra que cada um serve.",
  ],

  explicacao:
    "Nem todo texto é IGUAL.\n\n• LIVRO DE HISTÓRIA — grande, com capa e desenhos. Serve pra CONTAR histórias.\n• RECEITA — lista de ingredientes e passos. Serve pra ENSINAR a fazer comida.\n• BILHETE — papel pequeno, curtinho. Serve pra AVISAR alguma coisa (ex.: 'Mãe, saí').\n• CARTAZ — grande, colorido, com letras enormes. Serve pra CHAMAR ATENÇÃO (festa, aviso).\n\nA gente descobre o TIPO olhando o TAMANHO, as IMAGENS e a ORGANIZAÇÃO do papel.",

  explicacaoAtiva: [
    { texto: "LIVRO grosso, com capa. É de HISTÓRIA.", imagem: livroImg, imagemAlt: "Livro" },
    { texto: "RECEITA: lista + foto de bolo. Ensina a fazer.", imagem: boloImg, imagemAlt: "Bolo" },
    {
      texto: "CARTAZ: letras GRANDES e coloridas. Chama pra festa.",
      imagem: bandeirolaImg,
      imagemAlt: "Cartaz de festa",
      checagem: {
        pergunta: "Texto com desenho de bolo e lista de ingredientes é…?",
        opcoes: ["Receita", "Bilhete"],
        correta: 0,
        explicacao: "Receita mostra ingredientes.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Cada texto tem uma cara.",
    nivel2: "Livro conta história, receita ensina, bilhete avisa, cartaz chama.",
    nivel3: "Olhe o tamanho, o desenho e a organização pra adivinhar.",
    nivel4: "Todo dia a gente lê vários tipos de texto — placa de rua, WhatsApp, receita de bolo, livro.",
  },

  exemploResolvido: {
    enunciado: "Um papel tem: 'FESTA DA ESCOLA — SÁBADO ÀS 10H — VENHA!'. Que texto é esse?",
    passos: [
      "É curto?",
      "Tem letras grandes coloridas?",
      "Serve pra chamar gente pra evento?",
      "Sim, sim, sim → é CARTAZ.",
    ],
    resposta: "Cartaz de festa — porque chama a atenção pra um evento.",
    interativo: { tipo: "contagem", imagemUrl: bandeirolaImg, quantidade: 4, nomeItem: "cartaz", nomeItemPlural: "cartazes", pergunta: "Quantos cartazes de festa aparecem?" },
  },

  atividadeGuiada: {
    enunciado: "Qual texto ENSINA a fazer um bolo?",
    resposta: "A receita.",
    explicacao: "Receita lista ingredientes e modo de preparo.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é a RECEITA?",
      opcoes: [
        { nome: "Bolo (receita)", imagemUrl: boloImg },
        { nome: "Livro de história", imagemUrl: livroImg },
        { nome: "Bilhete", imagemUrl: papelImg },
      ],
      respostaCerta: "Bolo (receita)",
    },
  },

  exercicios: [
    { enunciado: "Serve pra ler história longa. É o…?", resposta: "Livro.", dica: "Grosso e com capa." },
    { enunciado: "Serve pra AVISAR rápido. É o…?", resposta: "Bilhete.", dica: "Papelzinho pequeno." },
    { enunciado: "Serve pra ENSINAR a cozinhar. É a…?", resposta: "Receita.", dica: "Tem ingredientes." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra o tipo de cada texto.",
    resposta: "Livro, receita, bilhete e cartaz.",
    visual: {
      cena: [
        { personagem: "Livro", itemImagemUrl: livroImg, quantidade: 1, cor: "#4C9EFF" },
        { personagem: "Receita", itemImagemUrl: boloImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Bilhete", itemImagemUrl: papelImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Grosso, com capa e história longa?", opcoes: ["Livro", "Bilhete"], correta: 0, explicacao: "Livro conta história." },
        { pergunta: "Lista de ingredientes?", opcoes: ["Receita", "Livro"], correta: 0, explicacao: "Receita ensina fazer." },
        { pergunta: "Papel pequeno, mensagem curta?", opcoes: ["Bilhete", "Cartaz"], correta: 0, explicacao: "Bilhete avisa rapidinho." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Existem tipos diferentes de texto.",
      "Livro = história longa.",
      "Receita = ensina.",
      "Bilhete = avisa. Cartaz = chama.",
    ],
    dica: "Em casa: procurem juntos 3 tipos diferentes de texto (um livro, um cartaz na rua, um bilhete na geladeira).",
  },

  quiz: [
    { pergunta: "Texto com muitas páginas e história é…?", opcoes: ["Livro", "Bilhete"], correta: 0, explicacao: "Livro tem história.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    { pergunta: "Papel curto pra avisar?", opcoes: ["Bilhete", "Livro"], correta: 0, explicacao: "Bilhete é rápido.", visual: { tipo: "itens", imagemUrl: papelImg, quantidade: 1, rotulo: "Papel" } },
    { pergunta: "Ingredientes + passos = ?", opcoes: ["Receita", "Cartaz"], correta: 0, explicacao: "Receita ensina.", visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "Bolo" } },
  ],

  conclusao: "🏅 Você virou DETETIVE DE TEXTO! Missão em Casa: encontre 1 receita e 1 bilhete lá em casa e mostre a diferença.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Todo dia a gente lê mais de 20 tipos de texto sem perceber — placa, cardápio, propaganda, mensagem, lista.",
    imagemUrl: calendarioImg,
  },

  interativas: [
    {
      tipo: "ligar",
      titulo: "Fase 1 · Cada texto, sua função",
      instrucao: "Ligue.",
      pares: [
        { a: "Livro", b: "Conta história", aImagem: livroImg, aQuantidade: 1 },
        { a: "Receita", b: "Ensina a cozinhar", aImagem: boloImg, aQuantidade: 1 },
        { a: "Bilhete", b: "Avisa rápido", aImagem: papelImg, aQuantidade: 1 },
        { a: "Cartaz", b: "Chama pra festa", aImagem: bandeirolaImg, aQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Adivinha o tipo",
      instrucao: "Escolha.",
      grupos: [{ imagemUrl: princesaImg, quantidade: 1, rotulo: "Uma princesa na capa, livro grosso" }],
      pergunta: "Que tipo de texto é esse?",
      opcoes: ["Livro de história", "Bilhete"],
      correta: 0,
      acerto: "Isso! Grosso + capa = livro.",
      erro: "Bilhete é curtinho. Isso é livro.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Livro tem história?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Sim.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    ],
    medio: [
      { pergunta: "Bilhete é grande ou pequeno?", opcoes: ["Pequeno", "Grosso"], correta: 0, explicacao: "Bilhete é curto.", visual: { tipo: "itens", imagemUrl: papelImg, quantidade: 1, rotulo: "Bilhete" } },
    ],
    dificil: [
      { pergunta: "Receita serve pra…", opcoes: ["Ensinar a fazer comida", "Contar história"], correta: 0, explicacao: "Ensina o passo a passo.", visual: { tipo: "itens", imagemUrl: lapisImg, quantidade: 1, rotulo: "Escrita" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03EF08", titulo: "Escolho Meu Livro" },
};

export default aula;
