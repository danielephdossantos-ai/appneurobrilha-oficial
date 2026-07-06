import type { Aula } from "../types";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import coelhoImg from "@/assets/neuro-treino/objetos/coelho.png";
import macacoImg from "@/assets/hiperfocos/animais/macaco.png";
import tartarugaImg from "@/assets/hiperfocos/animais/tartaruga.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import pandaImg from "@/assets/neuro-treino/objetos/panda.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";
import tristeImg from "@/assets/neuro-treino/emocoes/triste.png";
import bravoImg from "@/assets/neuro-treino/emocoes/bravo.png";
import medoImg from "@/assets/neuro-treino/emocoes/medo.png";
import surpresoImg from "@/assets/neuro-treino/emocoes/surpreso.png";

const aula: Aula = {
  codigo: "EI03EO10",
  ano: "Educação Infantil",
  disciplina: "O Eu, o Outro e o Nós",
  titulo: "Grande Festa da Floresta",

  narrativa: {
    titulo: "A Grande Festa Chegou",
    contexto:
      "Depois de tantas aventuras — descobrir quem é, conhecer a família, os amigos, as emoções, as regras — chegou o dia da GRANDE FESTA da Floresta!",
    problema:
      "Falta a última missão: mostrar tudo o que aprendeu pra festa acontecer perfeita.",
    convite: "Bora fazer a maior festa da floresta juntos?",
  },

  conhecimentosPrevios: [
    "Ter completado as missões 1 a 9 do lote EI-01.",
    "Reconhecer as 4 emoções básicas.",
    "Saber dividir, esperar a vez e cuidar dos amigos.",
  ],

  missao:
    "Juntar tudo o que aprendeu: emoções, cuidado, regras, amizade — e fazer uma festa incrível.",

  objetivos: [
    "Responder ao quiz das emoções.",
    "Jogar cooperativamente com a turma.",
    "Escolher as atitudes corretas em cada cena.",
    "Montar a festa final da floresta.",
  ],

  motivacao:
    "Você chegou até aqui — isso é MUITO! Agora é hora de comemorar tudo o que aprendeu com uma FESTA cheia de amigos.",

  explicacao:
    "Nesta missão final você vai:\n\n• RECONHECER emoções (feliz, triste, bravo, medo).\n• COLABORAR na festa (cada um ajuda).\n• RESPEITAR regras (pode / não pode).\n• CUIDAR dos amigos e dividir tudo.\n\nAo terminar, você recebe o TROFÉU Amigo da Floresta!",

  explicacoesNiveis: {
    nivel1: "Você já sabe tudo — bora colocar em prática!",
    nivel2: "Cada amigo faz uma coisa: bolo, balão, roda, abraço.",
    nivel3: "A festa é a soma de tudo o que aprendeu.",
    nivel4: "Em qualquer festa da vida real: cumprimente, divida, cuide.",
  },

  exemploResolvido: {
    enunciado:
      "Toque em todos os enfeites e conte a festa da floresta.",
    passos: [
      "Toque em: bolo, 2 balões, presente, estrela.",
      "Conte: 1, 2, 3, 4, 5.",
      "5 enfeites — festa completa!",
    ],
    resposta: "5 enfeites: bolo + 2 balões + presente + estrela.",
    interativo: {
      tipo: "contagem",
      imagemUrl: balaoImg,
      quantidade: 5,
      nomeItem: "enfeite",
      nomeItemPlural: "enfeites",
      pergunta: "Quantos enfeites tem na festa?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Toque no amigo que trouxe o BOLO pra festa (é o Brilha!).",
    resposta: "Brilha trouxe o bolo da festa.",
    explicacao:
      "Cada amigo ajuda em uma coisa. Sem colaboração, não tem festa.",
    visual: {
      tipo: "podio",
      pergunta:
        "Qual amigo trouxe o BOLO da festa?",
      participantes: [
        { nome: "Brilha", imagemUrl: esquiloImg, posicao: 1 },
        { nome: "Coelha", imagemUrl: coelhoImg, posicao: 2 },
        { nome: "Macaco", imagemUrl: macacoImg, posicao: 3 },
      ],
      respostaCerta: "Brilha",
    },
  },

  exercicios: [
    {
      enunciado: "🎂 Amigo trouxe bolo. Como agradecer?",
      resposta: "Falar 'obrigado' e dividir com todos.",
      dica: "Agradecer é regra do coração.",
    },
    {
      enunciado: "😢 Um amigo caiu na festa. O que fazer?",
      resposta: "Ajudar levantar e chamar adulto se precisar.",
      dica: "Cuidar sempre.",
    },
    {
      enunciado: "🎈 Chegou amigo novo tímido. E aí?",
      resposta: "Chamar pra dançar junto.",
      dica: "Ninguém sozinho na festa.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Final: monte a Grande Festa! Quantos amigos, quantos enfeites e qual atitude é mais importante?",
    resposta:
      "6 amigos + 5 enfeites + atitude mais importante = CUIDAR e DIVIDIR.",
    visual: {
      cena: [
        { personagem: "Brilha", itemImagemUrl: esquiloImg, quantidade: 1, cor: "#FB923C" },
        { personagem: "Coelha", itemImagemUrl: coelhoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Macaco", itemImagemUrl: macacoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Tartaruga", itemImagemUrl: tartarugaImg, quantidade: 1, cor: "#34D399" },
        { personagem: "Coruja", itemImagemUrl: corujaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Panda", itemImagemUrl: pandaImg, quantidade: 1, cor: "#A78BFA" },
      ],
      perguntas: [
        {
          pergunta: "Quantos amigos na festa?",
          opcoes: ["4", "5", "6"],
          correta: 2,
          explicacao: "6 amigos — todos juntos.",
        },
        {
          pergunta: "Qual atitude é mais importante numa festa?",
          opcoes: ["Cuidar e dividir", "Mandar em todos", "Comer tudo sozinho"],
          correta: 0,
          explicacao: "Cuidar e dividir fazem a festa dar certo.",
        },
        {
          pergunta: "Como você se sente ao final da missão?",
          opcoes: ["Feliz", "Bravo", "Com medo"],
          correta: 0,
          explicacao: "Feliz — você aprendeu MUITO!",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Emoções: feliz, triste, bravo, medo.",
      "Cuidar dos amigos = ver, perguntar, ajudar.",
      "Regras protegem todos.",
      "Grupo forte é grupo que colabora.",
    ],
    dica: "Cada dia é uma festa quando a gente cuida do outro.",
  },

  quiz: [
    {
      pergunta: "Qual carinha é FELIZ?",
      opcoes: ["Feliz", "Triste"],
      correta: 0,
      explicacao: "Sorriso grande.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
          { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
        ],
      },
    },
    {
      pergunta: "Amigo triste: o que fazer?",
      opcoes: ["Abraçar", "Rir"],
      correta: 0,
      explicacao: "Abraço.",
    },
    {
      pergunta: "Furar fila é...",
      opcoes: ["Pode", "Não pode"],
      correta: 1,
      explicacao: "Não pode.",
    },
    {
      pergunta: "Festa tem 6 amigos. Quantos corações são?",
      opcoes: ["5", "6", "7"],
      correta: 1,
      explicacao: "6 corações — 1 pra cada.",
      visual: {
        tipo: "itens",
        imagemUrl: coracaoImg,
        quantidade: 6,
        rotulo: "Corações da turma",
      },
    },
    {
      pergunta: "Como comemorar o fim da missão?",
      opcoes: ["Abraço coletivo", "Fim sem festa"],
      correta: 0,
      explicacao: "Abraço junto!",
    },
  ],

  conclusao:
    "🏆 Você conquistou o TROFÉU AMIGO DA FLORESTA! ⭐ +500 XP e 🪙 +500 moedas. Você completou o Lote EI-01 — 10 missões do Eu, do Outro e do Nós. Grande festa em casa: conte pra família tudo o que aprendeu!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Você aprendeu em 10 missões o que muitos adultos levam a vida INTEIRA pra entender: cuidar, dividir, respeitar. Parabéns, campeão!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Quiz das Emoções",
      instrucao: "Conte quantas emoções você aprendeu.",
      grupos: [
        { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
        { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
        { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
        { imagemUrl: medoImg, quantidade: 1, rotulo: "Medo" },
      ],
      pergunta: "Quantas emoções você aprendeu?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "Isso! 4 emoções básicas.",
      erro: "Conte uma por vez.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Cooperação — cada amigo com sua tarefa",
      instrucao: "Arraste cada item pro amigo certo.",
      pares: [
        { item: "Bolo", alvo: "Brilha", itemImagem: boloImg },
        { item: "Balão", alvo: "Coelha", itemImagem: balaoImg },
        { item: "Bola", alvo: "Macaco", itemImagem: bolaImg },
        { item: "Presente", alvo: "Tartaruga", itemImagem: presenteImg },
      ],
      alvosVisuais: [
        { nome: "Brilha", cor: "#FB923C", capacidade: 1, imagemUrl: esquiloImg },
        { nome: "Coelha", cor: "#F472B6", capacidade: 1, imagemUrl: coelhoImg },
        { nome: "Macaco", cor: "#FBBF24", capacidade: 1, imagemUrl: macacoImg },
        { nome: "Tartaruga", cor: "#34D399", capacidade: 1, imagemUrl: tartarugaImg },
      ],
    },
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Atitudes corretas",
      instrucao: "Arraste cada atitude pro lado certo.",
      pares: [
        { item: "Abraçar", alvo: "Certo", itemImagem: coracaoImg },
        { item: "Dividir bolo", alvo: "Certo", itemImagem: estrelaImg },
        { item: "Empurrar", alvo: "Errado", itemImagem: bravoImg },
        { item: "Roubar presente", alvo: "Errado", itemImagem: tristeImg },
      ],
      alvosVisuais: [
        { nome: "Certo", cor: "#34D399", capacidade: 2 },
        { nome: "Errado", cor: "#EF4444", capacidade: 2 },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Fase 4 · Monte a festa final",
      instrucao: "Ligue cada enfeite ao lugar da festa.",
      pares: [
        { a: "Bolo", b: "Mesa", aImagem: boloImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
        { a: "Balão", b: "Teto", aImagem: balaoImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Bola", b: "Chão", aImagem: bolaImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Toque em FELIZ.",
        opcoes: ["Feliz", "Bravo"],
        correta: 0,
        explicacao: "Sorriso.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
            { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
          ],
        },
      },
      {
        pergunta: "Dividir bolo é:",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        explicacao: "Dividir é o certo.",
      },
    ],
    medio: [
      {
        pergunta: "Quantos amigos na festa?",
        opcoes: ["4", "5", "6"],
        correta: 2,
        explicacao: "6 amigos.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: esquiloImg, quantidade: 1, rotulo: "Brilha" },
            { imagemUrl: coelhoImg, quantidade: 1, rotulo: "Coelha" },
            { imagemUrl: macacoImg, quantidade: 1, rotulo: "Macaco" },
            { imagemUrl: tartarugaImg, quantidade: 1, rotulo: "Tartaruga" },
            { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" },
            { imagemUrl: pandaImg, quantidade: 1, rotulo: "Panda" },
          ],
        },
      },
      {
        pergunta: "Qual emoção NÃO você aprendeu?",
        opcoes: ["Feliz", "Triste", "Aquático"],
        correta: 2,
        explicacao: "'Aquático' não é emoção.",
      },
    ],
    dificil: [
      {
        pergunta:
          "Festa com 6 amigos + 2 amigos novos. Quantos ao todo?",
        opcoes: ["6", "7", "8"],
        correta: 2,
        explicacao: "6 + 2 = 8.",
        visual: {
          tipo: "itens",
          imagemUrl: coracaoImg,
          quantidade: 8,
          rotulo: "Turma completa",
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03CG01",
    titulo: "Novo lote: Corpo, Gestos e Movimentos (em breve)",
  },
};

void surpresoImg;

export default aula;
