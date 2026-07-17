import type { AulaArte } from "../types";

const aula: AulaArte = {
  slug: "u1-a01-autorretrato",
  unidade: {
    numero: 1,
    titulo: "Unidade 1 — Quem Sou Eu?",
    subtitulo: "Descobrir a si mesmo através da arte.",
  },
  titulo: "Meu Primeiro Retrato de Artista",
  duracaoMin: "40 a 50 minutos",

  abertura: {
    falasBrilha: [
      "Que bom que você chegou! Hoje vou apresentar o meu ateliê... mas tem um problema!",
      "Está vendo esse cavalete? Ele está esperando um artista muito especial.",
      "Hoje esse artista é você.",
    ],
    botaoComecar: "🎨 Começar minha primeira obra",
  },

  espelho: {
    intro: "Vamos brincar de espelho?",
    expressoes: [
      { emoji: "😊", desafio: "Faça um sorriso.", falaBrilha: "Que sorriso lindo!" },
      { emoji: "😮", desafio: "Faça uma cara de surpresa.", falaBrilha: "Uau! Surpresa de verdade!" },
      { emoji: "😠", desafio: "Faça uma cara de bravo.", falaBrilha: "Bravinho, hein!" },
      { emoji: "😴", desafio: "Faça uma cara de sono.", falaBrilha: "Só de ver bate um bocejo…" },
    ],
    fechamento:
      "Percebeu como nosso rosto muda? É isso que os artistas observam!",
  },

  galeriaInterativa: {
    intro:
      "Antes de você pintar, quero te mostrar três artistas que também se pintaram. Toque em cada quadro.",
    obras: [
      {
        id: "tarsila",
        artista: "Tarsila do Amaral",
        pais: "Brasil",
        obra: "Autorretrato com vestido rosa",
        falaBrilha:
          "Ela adorava usar cores fortes. Qual cor você mais encontrou aqui?",
        cor: "petal",
      },
      {
        id: "vangogh",
        artista: "Vincent van Gogh",
        pais: "Holanda",
        obra: "Autorretrato com chapéu de palha",
        falaBrilha:
          "Ele pintou o próprio rosto muitas vezes. Será que ele queria registrar como estava se sentindo?",
        cor: "sun",
      },
      {
        id: "frida",
        artista: "Frida Kahlo",
        pais: "México",
        obra: "Autorretrato com colar de espinhos",
        falaBrilha:
          "Ela mostrava quem era sem esconder suas características.",
        cor: "coral",
      },
    ],
    convite: "🎨 Agora chegou a sua vez.",
  },

  aprender: {
    intro:
      "O canvas está aberto. Vou desenhando bem devagar e você faz parecido no seu ritmo.",
    passos: [
      { titulo: "Um círculo", fala: "Comece com um círculo. Consegue fazer um parecido?" },
      { titulo: "Os olhos", fala: "Agora vamos colocar os olhos, bem no meio do rosto." },
      { titulo: "O nariz", fala: "Uma curvinha ou duas bolinhas no meio do rosto." },
      { titulo: "A boca", fala: "Sorrindo? Séria? Do jeito que VOCÊ está hoje." },
      { titulo: "O cabelo", fala: "Do jeitinho que ele é: liso, cacheado, curto…" },
      { titulo: "Os detalhes", fala: "Sardas, óculos, brinco — o que faz você ser você." },
    ],
    fechamento: "Isso! Cada linha sua é única.",
  },

  obraLivre: {
    instrucao:
      "Agora o ateliê fica em silêncio. Desenhe do seu jeito, sem pressa.",
    comentariosBrilha: [
      "Gostei desse traço!",
      "Seu sorriso ficou lindo!",
      "Cada artista desenha de um jeito diferente.",
      "Tá ficando lindo — respira e continua.",
      "Não existe desenho perfeito. Existe desenho verdadeiro.",
    ],
    legendaSalvar: "Meu Primeiro Retrato de Artista 🎨",
  },

  cores: {
    pergunta: "Como você está hoje?",
    emocoes: [
      {
        nome: "Feliz",
        emoji: "😊",
        paleta: ["#FCD34D", "#FDBA74", "#F472B6", "#FBBF24", "#FB923C"],
        falaBrilha: "Que dia amarelo! Vamos pintar com cores quentes.",
      },
      {
        nome: "Calmo",
        emoji: "😌",
        paleta: ["#7DD3FC", "#86EFAC", "#C4B5FD", "#67E8F9", "#A5B4FC"],
        falaBrilha: "Dia de cores tranquilas — azuis, verdes, lilás.",
      },
      {
        nome: "Animado",
        emoji: "🤩",
        paleta: ["#F87171", "#FB923C", "#FCD34D", "#EC4899", "#A855F7"],
        falaBrilha: "Uau! Cores vibrantes pra combinar com você.",
      },
      {
        nome: "Cansado",
        emoji: "😴",
        paleta: ["#94A3B8", "#C4B5FD", "#A5B4FC", "#CBD5E1", "#DDD6FE"],
        falaBrilha: "Cores suaves pra descansar os olhos.",
      },
      {
        nome: "Carinhoso",
        emoji: "❤️",
        paleta: ["#F472B6", "#F87171", "#FCA5A5", "#FBCFE8", "#FDA4AF"],
        falaBrilha: "Rosinhas e vermelhos pra abraçar o desenho.",
      },
    ],
  },

  galeria: {
    intro: "Sua obra vai subir pra parede do ateliê.",
    exemploTitulo: "Meu Primeiro Retrato de Artista",
    parabens: "Sua primeira obra entrou oficialmente na Galeria Brilha!",
  },

  missaoFamilia: {
    convite: "Será que alguém da sua família aceita posar como modelo?",
    entregavel:
      "Desenhe essa pessoa no papel, tire uma foto e adicione ao seu Álbum de Recordações.",
  },

  atelieCresceu: {
    decoracao: {
      id: "planta-suculenta",
      nome: "planta suculenta",
      emoji: "🪴",
      posicao: { x: 12, y: 62 },
    },
    falaBrilha: "Olha só! Seu ateliê ficou mais bonito. A cada aula ele cresce mais.",
  },

  encerramento: {
    recompensa: "Pincel da Observação",
    icone: "🖌️",
    mensagem:
      "Hoje você aprendeu que desenhar não é copiar. É observar com carinho aquilo que torna cada pessoa única.",
  },
};

export default aula;
