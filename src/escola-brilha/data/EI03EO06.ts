import type { Aula } from "../types";
import princesaImg from "@/assets/neuro-treino/objetos/princesa.png";
import heroiImg from "@/assets/neuro-treino/objetos/heroi.png";
import roboImg from "@/assets/neuro-treino/objetos/robo.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import macacoImg from "@/assets/hiperfocos/animais/macaco.png";
import tartarugaImg from "@/assets/hiperfocos/animais/tartaruga.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import elefanteImg from "@/assets/hiperfocos/animais/elefante.png";
import leaoImg from "@/assets/hiperfocos/animais/leao.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";

const aula: Aula = {
  codigo: "EI03EO06",
  ano: "Educação Infantil",
  disciplina: "O Eu, o Outro e o Nós",
  titulo: "Respeitando Diferenças",

  narrativa: {
    titulo: "Todos Somos Importantes",
    contexto:
      "Na floresta tem elefante grande, formiguinha pequena, leão dourado, coruja de olhos grandes. Cada bicho é bem DIFERENTE do outro.",
    problema:
      "Chegou um leãozinho novo e alguns bichos acharam ele estranho. Precisamos mostrar que ser diferente é lindo!",
    convite: "Bora aprender que TODO mundo é importante do jeito que é?",
  },

  conhecimentosPrevios: [
    "Perceber diferenças de tamanho, cor e jeito.",
    "Chamar cada amigo pelo nome.",
    "Não rir das diferenças dos outros.",
  ],

  missao:
    "Descobrir que cada pessoa é única — e que ser diferente NÃO é problema. É riqueza!",

  objetivos: [
    "Reconhecer diferenças entre as pessoas (jeito, aparência, gostos).",
    "Valorizar cada colega pelo que ele é.",
    "Completar frases de respeito.",
    "Perceber que o mundo fica mais bonito com diferenças.",
  ],

  motivacao:
    "Imagine se todos fossem iguais — mesma cor, mesmo jeito. Que chato! É por sermos DIFERENTES que a floresta fica cheia de vida.",

  explicacao:
    "As diferenças aparecem em muitas coisas:\n\n• TAMANHO — grande, pequeno, alto, baixo.\n• COR — cabelo, pele, olhos.\n• JEITO — quieto, agitado, tímido, falador.\n• GOSTOS — brinquedos, comidas, cores.\n\nRespeitar é aceitar que o OUTRO pode ser diferente de mim — e tudo bem!",

  explicacoesNiveis: {
    nivel1: "Cada pessoa é diferente — e é bonito assim.",
    nivel2: "Elefante grande + formiga pequena = os dois importantes.",
    nivel3: "Se todos fossem iguais, seria muito chato.",
    nivel4: "Na escola cada colega tem um jeito — e todos merecem carinho.",
  },

  exemploResolvido: {
    enunciado:
      "Toque em cada bicho da floresta e conte quantos amigos DIFERENTES têm.",
    passos: [
      "Toque no elefante, no leão, na coruja, na tartaruga e no macaco.",
      "Conte: 1, 2, 3, 4, 5.",
      "5 bichos, 5 jeitos — todos amigos!",
    ],
    resposta: "5 amigos, todos DIFERENTES e todos importantes.",
    interativo: {
      tipo: "contagem",
      imagemUrl: coracaoImg,
      quantidade: 5,
      nomeItem: "amigo",
      nomeItemPlural: "amigos",
      pergunta: "Quantos amigos diferentes têm na floresta?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Toque em cada personagem e diga: são iguais ou diferentes?",
    resposta:
      "Diferentes — cada um com sua cor e jeito. E TODOS podem ser amigos.",
    explicacao:
      "Ser diferente NÃO impede a amizade. Elefante e formiga podem se dar bem!",
    visual: {
      tipo: "podio",
      pergunta:
        "Toque no melhor pódio: 'todos iguais é chato' vs 'todos diferentes é lindo'.",
      participantes: [
        { nome: "Todos diferentes", imagemUrl: felizImg, posicao: 1 },
        { nome: "Todos iguais", imagemUrl: coracaoImg, posicao: 3 },
        { nome: "Só alguns diferentes", imagemUrl: estrelaImg, posicao: 2 },
      ],
      respostaCerta: "Todos diferentes",
    },
  },

  exercicios: [
    {
      enunciado: "🐘 Elefante é grande. Formiga é pequena. Podem ser amigos?",
      resposta: "PODEM sim — diferença não impede amizade.",
      dica: "Amizade não tem tamanho.",
    },
    {
      enunciado: "👦 Um amigo tem cabelo diferente do seu. E daí?",
      resposta: "Cada um tem seu jeito — e todo mundo é bonito.",
      dica: "Diferente = especial.",
    },
    {
      enunciado: "🤝 Amigo novo chegou na escola. O que fazer?",
      resposta: "Chamar pra brincar — receber com carinho.",
      dica: "Novo amigo = coração feliz.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: complete as frases do respeito.",
    resposta:
      "Todos somos IMPORTANTES. Ser diferente é LINDO. Respeitar é ACEITAR o outro como ele é.",
    visual: {
      cena: [
        { personagem: "Princesa", itemImagemUrl: princesaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Herói", itemImagemUrl: heroiImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Robô", itemImagemUrl: roboImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "Ursinho", itemImagemUrl: ursinhoImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        {
          pergunta: "Ser diferente é...",
          opcoes: ["Ruim", "Lindo", "Igual"],
          correta: 1,
          explicacao: "Diferente é lindo — enriquece o mundo.",
        },
        {
          pergunta: "Todos somos...",
          opcoes: ["Iguais", "Importantes", "Copiados"],
          correta: 1,
          explicacao: "Cada pessoa é importante do seu jeito.",
        },
        {
          pergunta: "Respeitar é...",
          opcoes: ["Aceitar o outro", "Mudar o outro", "Ignorar"],
          correta: 0,
          explicacao: "Respeitar é ACEITAR como o outro é.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Cada pessoa é única.",
      "Diferenças enriquecem o mundo.",
      "Respeitar é aceitar o outro como ele é.",
      "Amizade não olha tamanho, cor ou jeito.",
    ],
    dica: "Hoje elogie algo diferente que você notou num amigo.",
  },

  quiz: [
    {
      pergunta: "Todos são iguais?",
      opcoes: ["Sim", "Não — cada um é único"],
      correta: 1,
      explicacao: "Ninguém é igual — cada um é único.",
    },
    {
      pergunta: "Elefante e formiga podem ser amigos?",
      opcoes: ["Podem", "Não podem"],
      correta: 0,
      explicacao: "Podem sim! Diferença não impede amizade.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: elefanteImg, quantidade: 1, rotulo: "Elefante" },
          { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Amizade" },
          { imagemUrl: esquiloImg, quantidade: 1, rotulo: "Esquilo" },
        ],
      },
    },
    {
      pergunta: "Ser diferente é...",
      opcoes: ["Feio", "Bonito"],
      correta: 1,
      explicacao: "Diferente é bonito.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
          { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Amor" },
        ],
      },
    },
    {
      pergunta: "Como receber um amigo novo?",
      opcoes: ["Com carinho", "Rindo dele", "Ignorando"],
      correta: 0,
      explicacao: "Com carinho — todo mundo merece bem-vindas.",
    },
  ],

  conclusao:
    "🏅 Conquista: Guardião do Respeito! Você aprendeu que as diferenças fazem a floresta linda. Missão em Casa: aponte uma coisa em cada pessoa da família que é DIFERENTE de você — e diga que é legal.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Existem mais de 7 bilhões de pessoas no mundo — e NENHUMA é igual a outra. Nem gêmeos idênticos!",
  },

  interativas: [
    {
      tipo: "arrastar",
      titulo: "Fase 1 · Quebra-cabeça das diferenças",
      instrucao: "Arraste cada personagem pra roda dos amigos — todos entram!",
      pares: [
        { item: "Princesa", alvo: "Roda dos Amigos", itemImagem: princesaImg },
        { item: "Herói", alvo: "Roda dos Amigos", itemImagem: heroiImg },
        { item: "Robô", alvo: "Roda dos Amigos", itemImagem: roboImg },
        { item: "Ursinho", alvo: "Roda dos Amigos", itemImagem: ursinhoImg },
      ],
      alvosVisuais: [{ nome: "Roda dos Amigos", cor: "#F472B6", capacidade: 4, imagemUrl: coracaoImg }],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Quantos amigos diferentes?",
      instrucao: "Conte os amigos DIFERENTES da roda.",
      grupos: [
        { imagemUrl: elefanteImg, quantidade: 1, rotulo: "Elefante" },
        { imagemUrl: leaoImg, quantidade: 1, rotulo: "Leão" },
        { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" },
        { imagemUrl: tartarugaImg, quantidade: 1, rotulo: "Tartaruga" },
        { imagemUrl: macacoImg, quantidade: 1, rotulo: "Macaco" },
      ],
      pergunta: "Quantos amigos diferentes têm na roda?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "Isso! 5 bichos, cada um único.",
      erro: "Conte um por vez.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Todo Mundo é Importante",
      instrucao: "Ligue cada frase do respeito ao coração.",
      pares: [
        { a: "Todos somos importantes", b: "Coração", aImagem: felizImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Ser diferente é lindo", b: "Estrela", aImagem: princesaImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
        { a: "Respeitar é aceitar", b: "Coração", aImagem: ursinhoImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Todos são iguais?",
        opcoes: ["Sim", "Não"],
        correta: 1,
        explicacao: "Não — cada um é único.",
      },
      {
        pergunta: "Rir de um amigo diferente é...",
        opcoes: ["Certo", "Errado"],
        correta: 1,
        explicacao: "Errado — respeitar é a atitude certa.",
      },
    ],
    medio: [
      {
        pergunta: "Quantos amigos diferentes tem aqui?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "4 amigos únicos.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: princesaImg, quantidade: 1, rotulo: "Princesa" },
            { imagemUrl: heroiImg, quantidade: 1, rotulo: "Herói" },
            { imagemUrl: roboImg, quantidade: 1, rotulo: "Robô" },
            { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Ursinho" },
          ],
        },
      },
      {
        pergunta: "Amigo novo chegou. O que fazer?",
        opcoes: ["Chamar pra brincar", "Ignorar"],
        correta: 0,
        explicacao: "Receber com carinho.",
      },
    ],
    dificil: [
      {
        pergunta:
          "Um amigo fala de um jeito diferente. Como agir?",
        opcoes: ["Respeitar e conversar", "Rir", "Imitar zombando"],
        correta: 0,
        explicacao: "Respeitar sempre.",
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO07",
    titulo: "Cuidar dos amigos com empatia",
  },
};

void esquiloImg;

export default aula;
