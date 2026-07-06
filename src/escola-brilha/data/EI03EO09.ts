import type { Aula } from "../types";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import coelhoImg from "@/assets/neuro-treino/objetos/coelho.png";
import macacoImg from "@/assets/hiperfocos/animais/macaco.png";
import tartarugaImg from "@/assets/hiperfocos/animais/tartaruga.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import pandaImg from "@/assets/neuro-treino/objetos/panda.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";

const aula: Aula = {
  codigo: "EI03EO09",
  ano: "Educação Infantil",
  disciplina: "O Eu, o Outro e o Nós",
  titulo: "Meu Lugar na Turma",

  narrativa: {
    titulo: "A Festa do Brilha",
    contexto:
      "O Brilha convidou a turma toda pra fazer uma festa. Cada bicho ia trazer uma coisa: bola, balão, bolo... mas ninguém sabia como começar!",
    problema:
      "Alguns queriam mandar em tudo, outros ficaram tímidos. Precisamos aprender a brincar EM GRUPO.",
    convite: "Bora achar seu lugar na turma da festa?",
  },

  conhecimentosPrevios: [
    "Brincar perto de outras crianças.",
    "Aceitar convite pra brincar.",
    "Esperar a vez na brincadeira.",
  ],

  missao:
    "Descobrir seu LUGAR no grupo — brincar junto, colaborar e participar de rodas.",

  objetivos: [
    "Escolher brincadeiras coletivas.",
    "Participar de uma roda com regras simples.",
    "Perceber que cada um tem um papel no grupo.",
    "Sentir alegria em fazer parte da turma.",
  ],

  motivacao:
    "Brincadeira em grupo é ainda mais gostosa: mais risadas, mais amigos, mais aventuras.",

  explicacao:
    "Brincar EM GRUPO tem alguns segredos:\n\n• PARTICIPAR — entrar na roda mesmo tímido.\n• COLABORAR — cada um ajuda em uma coisa.\n• RESPEITAR REGRAS — pra ninguém sair chateado.\n• COMEMORAR JUNTO — ganhar ou perder, tá tudo bem.\n\nNo grupo cada um tem um lugar — o SEU lugar é importante.",

  explicacoesNiveis: {
    nivel1: "Brincar junto é mais legal que sozinho.",
    nivel2: "Na roda, cada um tem uma tarefa: bola, bolo, balão.",
    nivel3: "Colaborar é ajudar sem mandar em todo mundo.",
    nivel4: "Na escola: você tem lugar na fila, na roda, na brincadeira.",
  },

  exemploResolvido: {
    enunciado:
      "Conte quantos amigos entraram na roda da festa.",
    passos: [
      "Toque em cada amigo da roda.",
      "Conte: 1, 2, 3, 4, 5, 6.",
      "6 amigos formaram a roda!",
    ],
    resposta: "6 amigos na roda.",
    interativo: {
      tipo: "contagem",
      imagemUrl: coracaoImg,
      quantidade: 6,
      nomeItem: "amigo",
      nomeItemPlural: "amigos",
      pergunta: "Quantos amigos entraram na roda da festa?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Toque em cada tarefa da festa e conte quantas cada amigo pode escolher.",
    resposta: "3 tarefas: trazer bola, balão ou bolo.",
    explicacao:
      "Cada amigo escolhe uma tarefa. Assim a festa fica completa!",
    visual: {
      tipo: "grupos",
      pergunta:
        "Quantas tarefas da festa temos? (bola, balão, bolo)",
      imagemUrl: bolaImg,
      itemSingular: "tarefa",
      itemPlural: "tarefas",
      quantidadeGrupos: 1,
      itensPorGrupo: 3,
      opcoes: [2, 3, 4],
      correta: 1,
    },
  },

  exercicios: [
    {
      enunciado: "🎉 Chegou na festa. O que fazer primeiro?",
      resposta: "Cumprimentar e entrar na roda.",
      dica: "Diga oi e brinque junto.",
    },
    {
      enunciado: "🎈 Um amigo tá tímido no cantinho. O que fazer?",
      resposta: "Chamar pra brincar junto.",
      dica: "Ninguém deve ficar sozinho na festa.",
    },
    {
      enunciado: "🏆 O amigo ganhou o jogo. O que fazer?",
      resposta: "Comemorar junto — 'parabéns!'.",
      dica: "Alegria do amigo é minha também.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: monte a roda da festa! Quantos amigos, quantas tarefas e como comemorar?",
    resposta:
      "6 amigos, 3 tarefas (bola/balão/bolo), comemorar todos juntos com abraço.",
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
          pergunta: "Quantos amigos na roda?",
          opcoes: ["5", "6", "7"],
          correta: 1,
          explicacao: "6 amigos formam a roda.",
        },
        {
          pergunta: "Como cada amigo ajuda?",
          opcoes: ["Escolhe uma tarefa", "Faz tudo sozinho", "Nada"],
          correta: 0,
          explicacao: "Cada um escolhe uma tarefa.",
        },
        {
          pergunta: "Como comemorar juntos?",
          opcoes: ["Todos abraçados", "Cada um sozinho", "Brigando"],
          correta: 0,
          explicacao: "Abraço coletivo — turma unida.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Brincar em grupo é mais gostoso.",
      "Cada um tem seu lugar na turma.",
      "Colaborar é ajudar sem mandar.",
      "Comemorar junto vale mais que ganhar sozinho.",
    ],
    dica: "Chame um coleguinha tímido pra brincar — você faz o dia dele.",
  },

  quiz: [
    {
      pergunta: "Amigo tímido no canto: o que fazer?",
      opcoes: ["Chamar pra brincar", "Ignorar"],
      correta: 0,
      explicacao: "Chamar sempre.",
    },
    {
      pergunta: "Cada um na roda...",
      opcoes: ["Tem um lugar", "Tem que mandar em todos"],
      correta: 0,
      explicacao: "Cada um tem seu lugar.",
    },
    {
      pergunta: "Amigo venceu jogo. Você...",
      opcoes: ["Comemora junto", "Fica bravo"],
      correta: 0,
      explicacao: "Comemora com ele.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
          { imagemUrl: estrelaImg, quantidade: 1, rotulo: "Estrela" },
        ],
      },
    },
    {
      pergunta: "6 amigos na festa. Todos participam?",
      opcoes: ["Sim, todos", "Só alguns"],
      correta: 0,
      explicacao: "Todos participam.",
      visual: {
        tipo: "itens",
        imagemUrl: coracaoImg,
        quantidade: 6,
        rotulo: "6 amigos",
      },
    },
  ],

  conclusao:
    "🏅 Conquista: Amigo da Turma! Você aprendeu que seu lugar no grupo é IMPORTANTE. Missão em Casa: convide alguém pra brincar hoje.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Crianças que brincam em grupo desenvolvem MAIS o cérebro — porque precisam pensar em si e nos outros ao mesmo tempo.",
  },

  interativas: [
    {
      tipo: "arrastar",
      titulo: "Fase 1 · Todos na roda",
      instrucao: "Arraste cada amigo pra entrar na roda da festa.",
      pares: [
        { item: "Brilha", alvo: "Roda", itemImagem: esquiloImg },
        { item: "Coelha", alvo: "Roda", itemImagem: coelhoImg },
        { item: "Macaco", alvo: "Roda", itemImagem: macacoImg },
        { item: "Tartaruga", alvo: "Roda", itemImagem: tartarugaImg },
        { item: "Coruja", alvo: "Roda", itemImagem: corujaImg },
        { item: "Panda", alvo: "Roda", itemImagem: pandaImg },
      ],
      alvosVisuais: [{ nome: "Roda", cor: "#F472B6", capacidade: 6, imagemUrl: coracaoImg }],
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Cada um com sua tarefa",
      instrucao: "Ligue cada amigo à sua tarefa da festa.",
      pares: [
        { a: "Brilha", b: "Bolo", aImagem: esquiloImg, aQuantidade: 1, bImagem: boloImg, bQuantidade: 1 },
        { a: "Coelha", b: "Balão", aImagem: coelhoImg, aQuantidade: 1, bImagem: balaoImg, bQuantidade: 1 },
        { a: "Macaco", b: "Bola", aImagem: macacoImg, aQuantidade: 1, bImagem: bolaImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Quantos amigos na roda?",
      instrucao: "Conte todos os amigos da roda.",
      grupos: [
        { imagemUrl: esquiloImg, quantidade: 1, rotulo: "Brilha" },
        { imagemUrl: coelhoImg, quantidade: 1, rotulo: "Coelha" },
        { imagemUrl: macacoImg, quantidade: 1, rotulo: "Macaco" },
        { imagemUrl: tartarugaImg, quantidade: 1, rotulo: "Tartaruga" },
        { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" },
        { imagemUrl: pandaImg, quantidade: 1, rotulo: "Panda" },
      ],
      pergunta: "Quantos amigos participam?",
      opcoes: ["5", "6", "7"],
      correta: 1,
      acerto: "Isso! 6 amigos brincando juntos.",
      erro: "Toque em cada amigo.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Brincar em grupo é...",
        opcoes: ["Chato", "Legal"],
        correta: 1,
        explicacao: "Muito legal.",
      },
      {
        pergunta: "Amigo tímido: chamar pra brincar?",
        opcoes: ["Sim", "Não"],
        correta: 0,
        explicacao: "Sempre.",
      },
    ],
    medio: [
      {
        pergunta: "Quantos amigos aqui?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "4 amigos.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: esquiloImg, quantidade: 1, rotulo: "Brilha" },
            { imagemUrl: coelhoImg, quantidade: 1, rotulo: "Coelha" },
            { imagemUrl: macacoImg, quantidade: 1, rotulo: "Macaco" },
            { imagemUrl: tartarugaImg, quantidade: 1, rotulo: "Tartaruga" },
          ],
        },
      },
      {
        pergunta: "Cada amigo na roda pode...",
        opcoes: ["Escolher uma tarefa", "Mandar em todos"],
        correta: 0,
        explicacao: "Escolher e colaborar.",
      },
    ],
    dificil: [
      {
        pergunta:
          "6 amigos + 1 novo. Quantos ficam?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        explicacao: "6 + 1 = 7.",
        visual: {
          tipo: "itens",
          imagemUrl: coracaoImg,
          quantidade: 7,
          rotulo: "Amigos da festa",
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO10",
    titulo: "Grande Festa da Floresta — integração final",
  },
};

export default aula;
