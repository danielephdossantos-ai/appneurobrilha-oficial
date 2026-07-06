import type { Aula } from "../types";
import quadroImg from "@/assets/neuro-treino/objetos/quadro.png";
import artistaImg from "@/assets/neuro-treino/objetos/artista.png";
import criancasGrupoImg from "@/assets/neuro-treino/objetos/criancas-grupo.png";
import meninoImg from "@/assets/neuro-treino/objetos/menino.png";
import meninaImg from "@/assets/neuro-treino/objetos/menina.png";
import museuImg from "@/assets/neuro-treino/objetos/museu.png";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";
import tristeImg from "@/assets/neuro-treino/emocoes/triste.png";
import surpresoImg from "@/assets/neuro-treino/emocoes/surpreso.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import paletaImg from "@/assets/neuro-treino/objetos/paleta.png";
import desenhoImg from "@/assets/neuro-treino/objetos/desenho.png";
import colagemImg from "@/assets/neuro-treino/objetos/colagem.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import arcoIrisImg from "@/assets/neuro-treino/objetos/arco-iris.png";
import esculturaImg from "@/assets/neuro-treino/objetos/escultura.png";

/**
 * EF15AR06 — Arte · 1º Ano (adaptado, código compartilhado 1º–5º)
 * Missão: "Conversando Sobre Arte".
 * Dialogar sobre a própria criação e a dos colegas para alcançar sentidos plurais.
 */
const aula: Aula = {
  codigo: "EF15AR06",
  ano: "1º Ano",
  disciplina: "Arte",
  titulo: "Conversando Sobre Arte",

  narrativa: {
    titulo: "Cada Um Vê de Um Jeito",
    contexto:
      "Brilha e os amigos estavam olhando pro mesmo quadro. A Maria disse: 'Vejo um sol feliz!' O João disse: 'Eu vejo uma flor triste!' Os dois olharam pra MESMA obra!",
    problema:
      "'Como pode?', pensou Brilha. 'Cada um vê e sente uma coisa diferente!' A Ana sorriu: 'Isso é o mais bonito da arte!'",
    convite: "Bora com o Brilha aprender a CONVERSAR sobre a arte que a gente vê?",
  },

  conhecimentosPrevios: [
    "Reconhecer emoções básicas (feliz, triste, surpreso).",
    "Já ter olhado desenhos ou pinturas.",
  ],

  missao:
    "Aprender a dialogar sobre a própria criação e a dos colegas, respeitando os diferentes olhares.",

  objetivos: [
    "Perguntar o que a gente VÊ numa obra.",
    "Perguntar o que a gente SENTE ao ver uma obra.",
    "Ouvir o que o COLEGA vê e sente.",
    "Perceber que cada pessoa enxerga um sentido diferente — e isso é bom!",
  ],

  motivacao:
    "Quando você OUVE o que o outro vê na arte, aprende um jeito NOVO de olhar o mundo!",

  explicacao:
    "👀 O QUE VEJO? — descrever as cores, formas e figuras.\n💗 O QUE SINTO? — feliz, triste, calmo, surpreso.\n👂 O QUE O COLEGA VÊ? — escutar o olhar dele.\n🌈 SENTIDOS PLURAIS — a mesma obra tem MUITOS sentidos.",

  explicacoesNiveis: {
    nivel1: "Cada pessoa vê e sente a arte de um jeito diferente.",
    nivel2: "Podemos perguntar: 'o que você vê?' e 'o que você sente?'",
    nivel3: "Ouvir o colega ajuda a descobrir sentidos novos na obra.",
    nivel4: "Não existe uma resposta certa: TODOS os olhares valem.",
  },

  exemploResolvido: {
    enunciado:
      "Você vê um sol vermelho no quadro. Sua amiga vê um vulcão. Quem está certo?",
    passos: [
      "Você vê sol → sentido 1.",
      "Amiga vê vulcão → sentido 2.",
      "A obra pode ter os DOIS sentidos ao mesmo tempo.",
    ],
    resposta: "🌈 Os DOIS estão certos! Sentidos plurais. ✅",
  },

  atividadeGuiada: {
    enunciado: "Olhe o quadro e diga: qual EMOÇÃO ele mais passa?",
    resposta: "😄 Feliz — cores fortes e sol!",
    explicacao: "Cores quentes (vermelho, amarelo) e figuras alegres passam alegria.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual emoção este quadro alegre e colorido passa?",
      opcoes: [
        { nome: "feliz", imagemUrl: felizImg },
        { nome: "triste", imagemUrl: tristeImg },
        { nome: "surpreso", imagemUrl: surpresoImg },
      ],
      respostaCerta: "feliz",
    },
  },

  exercicios: [
    {
      enunciado: "Ao ver uma obra, uma boa pergunta é:",
      resposta: "👀 'O que eu VEJO aqui?'",
      dica: "Começa observando.",
    },
    {
      enunciado: "Depois de VER, também é bom perguntar:",
      resposta: "💗 'O que eu SINTO?'",
      dica: "Emoção que a obra desperta.",
    },
    {
      enunciado: "Duas pessoas vendo a mesma obra podem sentir coisas diferentes?",
      resposta: "✅ SIM! Sentidos plurais.",
      dica: "Cada um tem seu olhar.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: dialogue sobre cada obra!",
    resposta: "Todo olhar vale.",
    visual: {
      perguntas: [
        {
          pergunta: "Uma obra com cores fortes e um sol grande passa que emoção?",
          opcoes: ["😄 ALEGRIA", "😢 TRISTEZA", "😴 SONO"],
          correta: 0,
          explicacao: "Cores quentes + sol = alegria.",
          visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
        },
        {
          pergunta: "Antes de julgar a obra do colega, o melhor é:",
          opcoes: ["👂 OUVIR o que ele vê", "🙅 Dizer que está errado", "🤐 Ficar calado"],
          correta: 0,
          explicacao: "Ouvir primeiro é respeito.",
          visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "👂" },
        },
        {
          pergunta: "Duas pessoas veem coisas diferentes na mesma obra. Isso é:",
          opcoes: ["🌈 NATURAL e bonito", "❌ ERRADO", "🚫 PROIBIDO"],
          correta: 0,
          explicacao: "Sentidos plurais são naturais.",
          visual: { tipo: "itens", imagemUrl: arcoIrisImg, quantidade: 1, rotulo: "🌈" },
        },
        {
          pergunta: "Qual pergunta AJUDA a conversar sobre arte?",
          opcoes: ["👀 'O que você vê?'", "🍕 'Quer pizza?'", "🚗 'Que carro é seu?'"],
          correta: 0,
          explicacao: "Perguntas sobre a obra guiam o diálogo.",
          visual: { tipo: "itens", imagemUrl: quadroImg, quantidade: 1, rotulo: "🖼️" },
        },
        {
          pergunta: "Um quadro com cores escuras e chuva pode passar:",
          opcoes: ["😢 TRISTEZA", "😄 ALEGRIA", "🤩 ANIMAÇÃO"],
          correta: 0,
          explicacao: "Cores frias/escuras = tristeza/calma.",
          visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "😢" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "👀 Pergunte: 'O que eu VEJO?'",
      "💗 Pergunte: 'O que eu SINTO?'",
      "👂 Pergunte: 'O que o COLEGA vê?'",
      "🌈 Todo olhar vale — sentidos plurais.",
      "🤝 Ouvir o colega abre a arte pra novos sentidos.",
    ],
    dica: "Diante de uma obra, PARE, olhe, sinta e depois converse.",
  },

  quiz: [
    {
      pergunta: "A primeira pergunta ao olhar uma obra é:",
      opcoes: ["O que eu vejo?", "Quanto custa?", "Quem ganha?"],
      correta: 0,
      explicacao: "Começa observando.",
      visual: { tipo: "itens", imagemUrl: quadroImg, quantidade: 1, rotulo: "👀" },
    },
    {
      pergunta: "Depois de VER, também vale perguntar:",
      opcoes: ["O que eu sinto?", "Que dia é hoje?", "Onde é o parque?"],
      correta: 0,
      explicacao: "Sentir é parte da arte.",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "💗" },
    },
    {
      pergunta: "Duas pessoas veem coisas diferentes na mesma obra:",
      opcoes: ["É natural — sentidos plurais", "É erro", "É proibido"],
      correta: 0,
      explicacao: "Cada olhar é um sentido.",
      visual: { tipo: "itens", imagemUrl: arcoIrisImg, quantidade: 1, rotulo: "🌈" },
    },
    {
      pergunta: "Ao ver a obra do colega, o melhor é:",
      opcoes: ["Ouvir o que ele quis dizer", "Rir da obra", "Rasgar"],
      correta: 0,
      explicacao: "Respeito e escuta.",
      visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "👫" },
    },
    {
      pergunta: "Uma obra com cores vivas e um sol passa mais:",
      opcoes: ["Alegria", "Tristeza", "Medo"],
      correta: 0,
      explicacao: "Cores vivas + sol = alegria.",
      visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "😄" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Detetive dos Sentidos! 🎁 Item desbloqueado: 💬 Balão de Fala. Missão em Família: cada pessoa olha o MESMO desenho e diz o que VÊ e o que SENTE — comparem os olhares!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Quando uma obra tem MUITOS sentidos diferentes, dizemos que ela é RICA! O quadro 'A Monalisa' tem sorriso que cada pessoa entende de um jeito.",
  },

  interativas: [
    // FASE 1 — Ler emoção de obra alegre
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · O Que Esta Obra Sente?",
      instrucao: "Olhe uma obra com sol e flores. Que emoção ela passa?",
      pergunta: "Qual emoção combina com sol + flores?",
      opcoes: [
        { nome: "FELIZ", imagemUrl: felizImg, rotulo: "😄 FELIZ" },
        { nome: "TRISTE", imagemUrl: tristeImg, rotulo: "😢 TRISTE" },
        { nome: "SURPRESO", imagemUrl: surpresoImg, rotulo: "😲 SURPRESO" },
      ],
      correta: 0,
      acerto: "😄 Isso! Cores vivas e sol passam alegria.",
      erro: "Sol e flores costumam passar alegria.",
    },

    // FASE 2 — Ler emoção de obra escura
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · E Esta Obra Aqui?",
      instrucao: "Olhe uma obra com cores escuras e chuva. Que emoção passa?",
      pergunta: "Qual emoção combina com cores escuras e chuva?",
      opcoes: [
        { nome: "TRISTE", imagemUrl: tristeImg, rotulo: "😢 TRISTE" },
        { nome: "FELIZ", imagemUrl: felizImg, rotulo: "😄 FELIZ" },
        { nome: "SURPRESO", imagemUrl: surpresoImg, rotulo: "😲 SURPRESO" },
      ],
      correta: 0,
      acerto: "😢 Isso! Cores escuras e chuva costumam passar tristeza.",
      erro: "Cores escuras e chuva passam tristeza ou calma.",
    },

    // FASE 3 — Arrastar: obras/cenas → emoção
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Que Emoção Cada Obra Passa?",
      instrucao: "Arraste cada obra pra emoção que ela mais desperta.",
      pares: [
        { item: "☀️ SOL BRILHANDO", alvo: "ALEGRIA" },
        { item: "🌈 ARCO-ÍRIS", alvo: "ALEGRIA" },
        { item: "🌸 FLOR COLORIDA", alvo: "ALEGRIA" },
        { item: "❤️ CORAÇÃO", alvo: "AMOR" },
        { item: "👫 AMIGOS JUNTOS", alvo: "AMOR" },
        { item: "🎨 CORES NOVAS", alvo: "SURPRESA" },
        { item: "🖼️ OBRA DIFERENTE", alvo: "SURPRESA" },
      ],
      alvosVisuais: [
        { nome: "ALEGRIA", cor: "#FBBF24", capacidade: 3 },
        { nome: "AMOR", cor: "#F472B6", capacidade: 2 },
        { nome: "SURPRESA", cor: "#7C3AED", capacidade: 2 },
      ],
    },

    // FASE 4 — Lupa: perguntas do diálogo
    {
      tipo: "lupa",
      titulo: "Fase 4 · Perguntas Do Diálogo",
      instrucao: "Toque em cada pergunta e descubra pra que serve.",
      itens: [
        {
          nome: "Ver",
          imagemUrl: quadroImg,
          rotulo: "👀 O QUE VEJO?",
          descoberta:
            "Começa OBSERVANDO: cores, formas, figuras. Descreva com calma tudo o que aparece na obra.",
        },
        {
          nome: "Sentir",
          imagemUrl: coracaoImg,
          rotulo: "💗 O QUE SINTO?",
          descoberta:
            "Depois SINTA: a obra te deixa feliz? triste? curioso? Todas as emoções valem!",
        },
        {
          nome: "Colega",
          imagemUrl: criancasGrupoImg,
          rotulo: "👂 O QUE O COLEGA VÊ?",
          descoberta:
            "Depois ESCUTE: o colega talvez veja uma coisa que você não viu. É sentido novo!",
        },
        {
          nome: "Artista",
          imagemUrl: artistaImg,
          rotulo: "🎨 O QUE A ARTISTA QUIS?",
          descoberta:
            "Pense: o que a ARTISTA quis contar? Mas lembre: sua interpretação também vale!",
        },
        {
          nome: "Sentidos plurais",
          imagemUrl: arcoIrisImg,
          rotulo: "🌈 SENTIDOS PLURAIS",
          descoberta:
            "SENTIDOS PLURAIS = a mesma obra tem MUITOS significados. Nenhum é errado!",
        },
        {
          nome: "Museu",
          imagemUrl: museuImg,
          rotulo: "🏛️ NO MUSEU",
          descoberta:
            "No MUSEU, cada visitante vê a obra do seu jeito. Por isso arte é pra todos!",
        },
      ],
      acerto: "🔬 Descoberta feita! Você sabe conversar sobre arte.",
    },

    // FASE 5 — Selecionar tudo que é BOM diálogo
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Detetive Do Diálogo",
      instrucao: "Marque TUDO que é uma atitude BOA ao ver a obra do colega.",
      criterio: "Boa atitude 🤝",
      opcoes: [
        { nome: "Ouvir com atenção", imagemUrl: criancasGrupoImg, rotulo: "👂 OUVIR", correto: true },
        { nome: "Perguntar o que quis dizer", imagemUrl: quadroImg, rotulo: "❓ PERGUNTAR", correto: true },
        { nome: "Elogiar a criação", imagemUrl: coracaoImg, rotulo: "❤️ ELOGIAR", correto: true },
        { nome: "Respeitar o olhar dele", imagemUrl: arcoIrisImg, rotulo: "🌈 RESPEITAR", correto: true },
        { nome: "Rir da obra", imagemUrl: tristeImg, rotulo: "🙅 RIR", correto: false },
        { nome: "Dizer que está errado", imagemUrl: surpresoImg, rotulo: "❌ CRITICAR", correto: false },
      ],
      acerto: "🕵️ Detetive do diálogo! Você sabe conversar direitinho.",
      erro: "Diálogo bom = ouvir, perguntar, elogiar e respeitar.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "A primeira pergunta diante de uma obra é:",
        opcoes: ["O que vejo?", "Que horas são?", "Onde é o banheiro?"],
        correta: 0,
        explicacao: "Começa observando.",
        visual: { tipo: "itens", imagemUrl: quadroImg, quantidade: 1, rotulo: "👀" },
      },
      {
        pergunta: "Sol e flores costumam passar:",
        opcoes: ["Alegria", "Tristeza", "Medo"],
        correta: 0,
        explicacao: "Cores vivas = alegria.",
        visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "😄" },
      },
      {
        pergunta: "Ao ver a obra do colega, é bom:",
        opcoes: ["Ouvir com atenção", "Rir", "Rasgar"],
        correta: 0,
        explicacao: "Escuta é respeito.",
        visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "👂" },
      },
    ],
    medio: [
      {
        pergunta: "Duas pessoas veem coisas diferentes na mesma obra:",
        opcoes: ["É natural", "É erro", "É proibido"],
        correta: 0,
        explicacao: "Sentidos plurais.",
        visual: { tipo: "itens", imagemUrl: arcoIrisImg, quantidade: 1, rotulo: "🌈" },
      },
      {
        pergunta: "Depois de VER, uma boa pergunta é:",
        opcoes: ["O que sinto?", "Quanto pesa?", "Onde mora?"],
        correta: 0,
        explicacao: "Sentir é parte da arte.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "💗" },
      },
      {
        pergunta: "Cores escuras e chuva costumam passar:",
        opcoes: ["Tristeza ou calma", "Alegria", "Surpresa"],
        correta: 0,
        explicacao: "Cores frias = calma/tristeza.",
        visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "😢" },
      },
    ],
    dificil: [
      {
        pergunta: "Sentidos plurais significa:",
        opcoes: ["Muitos significados numa obra", "Só um sentido", "Nenhum"],
        correta: 0,
        explicacao: "Plurais = muitos.",
        visual: { tipo: "itens", imagemUrl: arcoIrisImg, quantidade: 1, rotulo: "🌈" },
      },
      {
        pergunta: "Ao dialogar sobre arte, o mais importante é:",
        opcoes: ["Respeitar cada olhar", "Ter razão", "Ganhar"],
        correta: 0,
        explicacao: "Todos os olhares valem.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "❤️" },
      },
      {
        pergunta: "Se você discorda do olhar do colega, você:",
        opcoes: ["Explica seu olhar sem brigar", "Grita", "Sai da sala"],
        correta: 0,
        explicacao: "Diálogo = trocar sem brigar.",
        visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "👫" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica dos Diálogos",
    objetivo:
      "As atitudes passam na esteira. Toque em BOA ou RUIM antes que caiam!",
    tempoSegundos: 90,
    minAcertos: 10,
    categorias: [
      { nome: "BOA ATITUDE", cor: "#22C55E", emoji: "👍" },
      { nome: "RUIM", cor: "#EF4444", emoji: "🙅" },
    ],
    objetos: [
      { nome: "Ouvir", imagemUrl: criancasGrupoImg, categoria: "BOA ATITUDE" },
      { nome: "Perguntar", imagemUrl: quadroImg, categoria: "BOA ATITUDE" },
      { nome: "Elogiar", imagemUrl: coracaoImg, categoria: "BOA ATITUDE" },
      { nome: "Respeitar", imagemUrl: arcoIrisImg, categoria: "BOA ATITUDE" },
      { nome: "Ver com calma", imagemUrl: felizImg, categoria: "BOA ATITUDE" },
      { nome: "Menino atento", imagemUrl: meninoImg, categoria: "BOA ATITUDE" },
      { nome: "Menina atenta", imagemUrl: meninaImg, categoria: "BOA ATITUDE" },
      { nome: "Artista respeitada", imagemUrl: artistaImg, categoria: "BOA ATITUDE" },
      { nome: "Rir da obra", imagemUrl: tristeImg, categoria: "RUIM" },
      { nome: "Criticar", imagemUrl: surpresoImg, categoria: "RUIM" },
      { nome: "Rasgar", imagemUrl: desenhoImg, categoria: "RUIM" },
      { nome: "Não ouvir", imagemUrl: colagemImg, categoria: "RUIM" },
    ],
    acerto: "🏭 Fábrica dos diálogos completa!",
  },

  missaoFamilia: {
    titulo: "Olhando Junto",
    instrucao:
      "Escolham UMA imagem (foto, quadro, capa de livro). Cada pessoa da família diz: 'Eu vejo...' e 'Eu sinto...'. Comparem os olhares e vejam quantos SENTIDOS DIFERENTES apareceram!",
  },
};

export default aula;
