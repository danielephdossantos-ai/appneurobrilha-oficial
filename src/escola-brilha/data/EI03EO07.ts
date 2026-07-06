import type { Aula } from "../types";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";
import tristeImg from "@/assets/neuro-treino/emocoes/triste.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import coelhoImg from "@/assets/neuro-treino/objetos/coelho.png";
import macacoImg from "@/assets/hiperfocos/animais/macaco.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";

const aula: Aula = {
  codigo: "EI03EO07",
  ano: "Educação Infantil",
  disciplina: "O Eu, o Outro e o Nós",
  titulo: "Cuidando dos Amigos",

  narrativa: {
    titulo: "O Curativo do Macaco",
    contexto:
      "O Macaco caiu da árvore e machucou o joelho. Ele está sentado sozinho, TRISTE, chorando baixinho.",
    problema:
      "Ninguém ainda ajudou. Precisamos ensinar os amigos da floresta a cuidar de quem se machuca.",
    convite: "Bora ajudar o Macaco e aprender a cuidar dos amigos?",
  },

  conhecimentosPrevios: [
    "Perceber quando um amigo está triste.",
    "Chamar um adulto quando alguém se machuca.",
    "Sentir vontade de ajudar.",
  ],

  missao:
    "Aprender a demonstrar CUIDADO e EMPATIA: perceber o amigo, perguntar, ajudar e chamar ajuda se precisar.",

  objetivos: [
    "Reconhecer quando alguém precisa de ajuda.",
    "Escolher atitudes de cuidado (abraçar, ajudar, chamar adulto).",
    "Colocar curativo em um personagem machucado.",
    "Responder 'o que eu faria?' em cenas comuns.",
  ],

  motivacao:
    "Cuidar do outro é uma superpotência. Quando você ajuda um amigo, seu coração cresce — e o dele também.",

  explicacao:
    "Cuidar é um jeito de mostrar amor:\n\n• PERCEBER — olhar se o amigo está bem.\n• PERGUNTAR — 'você está bem?'.\n• AJUDAR — estender a mão, dar abraço, oferecer água.\n• CHAMAR ADULTO — se o machucado for grande ou for sério.\n\nEmpatia é sentir junto: se o amigo chora, meu coração também aperta.",

  explicacoesNiveis: {
    nivel1: "Cuidar é ajudar quem está triste ou machucado.",
    nivel2: "O Macaco caiu — abrace, chame adulto, ponha curativo.",
    nivel3: "Empatia é sentir o que o outro sente.",
    nivel4: "Na escola, se um colega chorar, chegue perto e pergunte se está bem.",
  },

  exemploResolvido: {
    enunciado:
      "Toque em cada atitude de cuidado. Quantas coisas dá pra fazer pelo Macaco?",
    passos: [
      "Toque em: abraçar, perguntar, curativo, chamar adulto.",
      "Conte: 1, 2, 3, 4.",
      "4 atitudes de carinho!",
    ],
    resposta: "4 atitudes de cuidado.",
    interativo: {
      tipo: "contagem",
      imagemUrl: coracaoImg,
      quantidade: 4,
      nomeItem: "atitude",
      nomeItemPlural: "atitudes",
      pergunta: "Quantas atitudes de cuidado dá pra ter pelo Macaco?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "O Macaco se machucou. Toque em quem está OFERECENDO ajuda de verdade.",
    resposta: "Quem ofereceu abraço e chamou adulto.",
    explicacao:
      "Ajudar de verdade é agir com carinho — não é só olhar de longe.",
    visual: {
      tipo: "podio",
      pergunta:
        "Qual atitude é a MELHOR pra ajudar o Macaco machucado?",
      participantes: [
        { nome: "Chamar adulto", imagemUrl: coracaoImg, posicao: 1 },
        { nome: "Ficar olhando", imagemUrl: tristeImg, posicao: 3 },
        { nome: "Chorar junto", imagemUrl: felizImg, posicao: 2 },
      ],
      respostaCerta: "Chamar adulto",
    },
  },

  exercicios: [
    {
      enunciado: "😢 Seu amigo está chorando. O que você faz?",
      resposta: "Chega perto e pergunta 'você está bem?'.",
      dica: "Perguntar é começar a cuidar.",
    },
    {
      enunciado: "🩹 Um amigo se cortou. E aí?",
      resposta: "Chama um adulto — só ele coloca curativo direito.",
      dica: "Adulto ajuda sempre.",
    },
    {
      enunciado: "🤗 Amigo está triste. Qual atitude?",
      resposta: "Um abraço apertado e escutar.",
      dica: "Abraço é remédio.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: 'O que eu faria?' — Escolha a atitude de cuidado em cada cena.",
    resposta:
      "Amigo caiu → ajudar levantar. Amigo triste → abraçar. Amigo machucado → chamar adulto.",
    visual: {
      cena: [
        { personagem: "Amigo caiu", itemImagemUrl: tristeImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Amigo com dor", itemImagemUrl: macacoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Amigo com medo", itemImagemUrl: coelhoImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Amigo caiu. O que fazer?",
          opcoes: ["Rir", "Ajudar a levantar", "Sair correndo"],
          correta: 1,
          explicacao: "Estender a mão.",
        },
        {
          pergunta: "Amigo está com dor. O que fazer?",
          opcoes: ["Ignorar", "Chamar adulto", "Empurrar mais"],
          correta: 1,
          explicacao: "Adulto ajuda no machucado.",
        },
        {
          pergunta: "Amigo com medo. O que fazer?",
          opcoes: ["Abraçar", "Rir", "Ir embora"],
          correta: 0,
          explicacao: "Abraço acalma quem está com medo.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Cuidar é agir com carinho pelo outro.",
      "Perguntar 'você está bem?' é o começo.",
      "Se for sério, chame um adulto.",
      "Empatia é sentir junto com o amigo.",
    ],
    dica: "Se ver alguém triste hoje, se aproxime e ofereça um abraço.",
  },

  quiz: [
    {
      pergunta: "Amigo caiu. Melhor atitude?",
      opcoes: ["Ajudar levantar", "Rir", "Ir embora"],
      correta: 0,
      explicacao: "Ajudar sempre.",
    },
    {
      pergunta: "Amigo machucado precisa de...",
      opcoes: ["Adulto", "Mais empurrão", "Ninguém"],
      correta: 0,
      explicacao: "Adulto ajuda no cuidado.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: macacoImg, quantidade: 1, rotulo: "Machucado" },
          { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Adulto ajuda" },
        ],
      },
    },
    {
      pergunta: "Amigo triste precisa de...",
      opcoes: ["Abraço", "Grito", "Nada"],
      correta: 0,
      explicacao: "Abraço aquece.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
          { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Abraço" },
        ],
      },
    },
    {
      pergunta: "Cuidar é...",
      opcoes: ["Amor", "Chatice"],
      correta: 0,
      explicacao: "Cuidar é amor em ação.",
    },
  ],

  conclusao:
    "🏅 Conquista: Coração de Cuidador! Você aprendeu a ver quando alguém precisa. Missão em Casa: pergunte pra alguém da família 'você está bem?' antes de dormir.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Quando você abraça alguém, o corpo solta uma 'poção' chamada ocitocina — que deixa os DOIS mais calmos e felizes.",
  },

  interativas: [
    {
      tipo: "arrastar",
      titulo: "Fase 1 · Curando o Macaco",
      instrucao: "Arraste cada cuidado pro Macaco machucado.",
      pares: [
        { item: "Curativo", alvo: "Macaco", itemImagem: estrelaImg },
        { item: "Abraço", alvo: "Macaco", itemImagem: coracaoImg },
        { item: "Presente", alvo: "Macaco", itemImagem: presenteImg },
        { item: "Bolo", alvo: "Macaco", itemImagem: boloImg },
      ],
      alvosVisuais: [{ nome: "Macaco", cor: "#FBBF24", capacidade: 4, imagemUrl: macacoImg }],
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · O que eu faria?",
      instrucao: "Ligue cada situação à melhor atitude.",
      pares: [
        { a: "Amigo caiu", b: "Ajudar", aImagem: tristeImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Amigo com dor", b: "Chamar adulto", aImagem: macacoImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
        { a: "Amigo triste", b: "Abraçar", aImagem: coelhoImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Quantos corações de cuidado?",
      instrucao: "Cada atitude gentil vira um coração.",
      grupos: [{ imagemUrl: coracaoImg, quantidade: 4, rotulo: "Atitudes de carinho" }],
      pergunta: "Quantos corações a gente somou?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "Isso! 4 atitudes = 4 corações.",
      erro: "Conte um por vez.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Amigo chorando: você...",
        opcoes: ["Abraça", "Ri"],
        correta: 0,
        explicacao: "Abraça — cuidado.",
      },
      {
        pergunta: "Amigo machucado: chama quem?",
        opcoes: ["Adulto", "Ninguém"],
        correta: 0,
        explicacao: "Chama um adulto.",
      },
    ],
    medio: [
      {
        pergunta:
          "Você viu 3 amigos precisando de ajuda. Quantos corações vai dar?",
        opcoes: ["1", "2", "3"],
        correta: 2,
        explicacao: "3 amigos, 3 corações.",
        visual: {
          tipo: "itens",
          imagemUrl: coracaoImg,
          quantidade: 3,
          rotulo: "Corações de cuidado",
        },
      },
      {
        pergunta: "Empatia é...",
        opcoes: ["Sentir junto", "Ignorar"],
        correta: 0,
        explicacao: "Sentir o que o outro sente.",
      },
    ],
    dificil: [
      {
        pergunta:
          "Amigo com sangue no joelho. O melhor a fazer?",
        opcoes: ["Chamar adulto e ficar perto", "Rir", "Sair correndo"],
        correta: 0,
        explicacao: "Chamar adulto e acalmar o amigo.",
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO08",
    titulo: "Compreender regras simples de convivência",
  },
};

void esquiloImg;
void ursinhoImg;

export default aula;
