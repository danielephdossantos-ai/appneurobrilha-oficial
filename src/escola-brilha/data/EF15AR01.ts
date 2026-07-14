import type { Aula } from "../types";
import { url as quadroImg } from "@/assets/neuro-treino/objetos/quadro.png.asset.json";
import { url as esculturaImg } from "@/assets/neuro-treino/objetos/escultura.png.asset.json";
import { url as desenhoImg } from "@/assets/neuro-treino/objetos/desenho.png.asset.json";
import { url as colagemImg } from "@/assets/neuro-treino/objetos/colagem.png.asset.json";
import { url as artistaImg } from "@/assets/neuro-treino/objetos/artista.png.asset.json";
import { url as museuImg } from "@/assets/neuro-treino/objetos/museu.png.asset.json";
import { url as paletaImg } from "@/assets/neuro-treino/objetos/paleta.png.asset.json";
import { url as modelagemImg } from "@/assets/neuro-treino/objetos/modelagem.png.asset.json";
import { url as pincelImg } from "@/assets/neuro-treino/objetos/pincel.png.asset.json";
import { url as tintaImg } from "@/assets/neuro-treino/objetos/tinta.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as borboletaImg } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as bloqueImg } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as carroImg } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * EF15AR01 — Arte · 1º Ano (adaptado, código compartilhado 1º–5º)
 * Missão do Dia: "Detetive das Artes Visuais".
 * Identificar e apreciar formas distintas de artes visuais
 * (pintura, escultura, desenho, colagem, modelagem),
 * cultivando percepção, imaginário e repertório imagético.
 */
const aula: Aula = {
  codigo: "EF15AR01",
  ano: "1º Ano",
  disciplina: "Arte",
  titulo: "Detetive das Artes Visuais",

  narrativa: {
    titulo: "O Museu que Ninguém Conhecia",
    contexto:
      "Brilha estava passeando pela floresta quando encontrou um museu escondido cheio de coisas bonitas: quadros pendurados, esculturas brilhando e desenhos coloridos em toda parte.",
    problema:
      "A guardiã do museu, a artista Ana, disse: 'Preciso de um detetive das artes! Cada obra é feita de um jeito diferente e alguém precisa descobrir quais são.'",
    convite:
      "Bora com o Brilha virar DETETIVE DAS ARTES e descobrir os jeitos de fazer arte que existem no mundo?",
  },

  conhecimentosPrevios: [
    "Já ter desenhado alguma vez.",
    "Reconhecer cores básicas.",
    "Saber a diferença entre uma foto e um desenho.",
  ],

  missao:
    "Levar a criança a IDENTIFICAR e APRECIAR formas distintas de artes visuais (pintura, escultura, desenho, colagem, modelagem), ampliando a percepção e o repertório imagético.",

  objetivos: [
    "Reconhecer que existem vários JEITOS de fazer arte.",
    "Diferenciar pintura, escultura, desenho, colagem e modelagem.",
    "Identificar os materiais usados em cada tipo de arte.",
    "Perceber que o museu é onde as obras são cuidadas.",
    "Apreciar obras diferentes sem julgar como 'feio' ou 'bonito'.",
  ],

  motivacao:
    "Toda arte conta uma história! O artista escolhe as cores, os materiais e o jeito de fazer — e a gente descobre coisas novas olhando com calma.",

  explicacao:
    "🎨 PINTURA — feita com TINTA e PINCEL, num quadro ou parede.\n✏️ DESENHO — feito com LÁPIS ou GIZ, no papel.\n🗿 ESCULTURA — feita com PEDRA, MADEIRA ou METAL; ocupa espaço, dá pra andar em volta.\n✂️ COLAGEM — feita com PAPÉIS RECORTADOS e COLA.\n🧱 MODELAGEM — feita com MASSINHA ou ARGILA, dá pra apertar e moldar.\n\n🏛️ Muitas dessas obras ficam no MUSEU pra todo mundo apreciar.",

  explicacoesNiveis: {
    nivel1: "Arte pode ser feita de muitos jeitos: tinta, lápis, papel, pedra, massinha.",
    nivel2: "Pintura usa tinta. Desenho usa lápis. Escultura usa pedra. Colagem usa papel colado. Modelagem usa massinha.",
    nivel3: "Cada material dá uma sensação diferente na obra: tinta é molhada e brilhante, pedra é dura, massinha é macia.",
    nivel4: "No museu a gente aprende olhando obras diferentes — cada uma nasce de um jeito único de fazer arte.",
  },

  exemploResolvido: {
    enunciado: "A obra tem TINTA COLORIDA num quadro pendurado na parede. Que tipo de arte é essa?",
    passos: [
      "Tem TINTA → foi pintada.",
      "Está num QUADRO na parede → é uma tela.",
      "Tinta + quadro = PINTURA.",
    ],
    resposta: "🎨 PINTURA. ✅",
  },

  atividadeGuiada: {
    enunciado: "Toque na obra que é uma ESCULTURA.",
    resposta: "🗿 A escultura — feita de pedra ou material duro, ocupa espaço.",
    explicacao:
      "Escultura não é plana como um quadro; dá pra andar em volta e ver de vários lados.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual dessas obras é uma ESCULTURA?",
      opcoes: [
        { nome: "escultura", imagemUrl: esculturaImg },
        { nome: "quadro", imagemUrl: quadroImg },
        { nome: "desenho", imagemUrl: desenhoImg },
      ],
      respostaCerta: "escultura",
    },
  },

  exercicios: [
    {
      enunciado: "Com o que se faz uma PINTURA?",
      resposta: "🎨 Com TINTA e PINCEL.",
      dica: "Pense no que molha o pincel.",
    },
    {
      enunciado: "COLAGEM é feita com o quê?",
      resposta: "✂️ PAPÉIS RECORTADOS e COLA.",
      dica: "Recortar e colar.",
    },
    {
      enunciado: "Onde ficam muitas obras de arte pra visitar?",
      resposta: "🏛️ No MUSEU.",
      dica: "Um lugar bem grande com muitas salas.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: identifique cada tipo de arte!",
    resposta: "Cada obra tem um jeito próprio de ser feita.",
    visual: {
      perguntas: [
        {
          pergunta: "Tinta colorida num quadro é:",
          opcoes: ["🎨 PINTURA", "🗿 ESCULTURA", "✂️ COLAGEM"],
          correta: 0,
          explicacao: "Tinta + quadro = pintura.",
          visual: { tipo: "itens", imagemUrl: quadroImg, quantidade: 1, rotulo: "🖼️" },
        },
        {
          pergunta: "Feita de pedra dura, ocupa espaço:",
          opcoes: ["🗿 ESCULTURA", "✏️ DESENHO", "🎨 PINTURA"],
          correta: 0,
          explicacao: "Pedra e volume = escultura.",
          visual: { tipo: "itens", imagemUrl: esculturaImg, quantidade: 1, rotulo: "🗿" },
        },
        {
          pergunta: "Lápis riscando o papel é:",
          opcoes: ["✏️ DESENHO", "🧱 MODELAGEM", "🎨 PINTURA"],
          correta: 0,
          explicacao: "Lápis no papel = desenho.",
          visual: { tipo: "itens", imagemUrl: desenhoImg, quantidade: 1, rotulo: "✏️" },
        },
        {
          pergunta: "Papéis recortados e colados formam:",
          opcoes: ["✂️ COLAGEM", "🗿 ESCULTURA", "🎨 PINTURA"],
          correta: 0,
          explicacao: "Recortar + colar = colagem.",
          visual: { tipo: "itens", imagemUrl: colagemImg, quantidade: 1, rotulo: "✂️" },
        },
        {
          pergunta: "Massinha que se aperta e molda vira:",
          opcoes: ["🧱 MODELAGEM", "✏️ DESENHO", "🎨 PINTURA"],
          correta: 0,
          explicacao: "Massinha moldada = modelagem.",
          visual: { tipo: "itens", imagemUrl: modelagemImg, quantidade: 1, rotulo: "🧱" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🎨 PINTURA = tinta + pincel.",
      "✏️ DESENHO = lápis ou giz no papel.",
      "🗿 ESCULTURA = pedra, madeira, dá pra andar em volta.",
      "✂️ COLAGEM = papel recortado e colado.",
      "🧱 MODELAGEM = massinha ou argila.",
      "🏛️ MUSEU = casa das obras.",
    ],
    dica: "Olhe primeiro o MATERIAL da obra — ele conta que tipo de arte é.",
  },

  quiz: [
    {
      pergunta: "Com o que se faz uma PINTURA?",
      opcoes: ["Tinta e pincel", "Massinha", "Pedra"],
      correta: 0,
      explicacao: "Pintura é feita com tinta e pincel.",
      visual: { tipo: "itens", imagemUrl: paletaImg, quantidade: 1, rotulo: "🎨" },
    },
    {
      pergunta: "Uma ESCULTURA de pedra é uma obra:",
      opcoes: ["Que ocupa espaço, dá pra ver de vários lados", "Plana como uma folha", "Feita de tinta molhada"],
      correta: 0,
      explicacao: "Escultura tem volume.",
      visual: { tipo: "itens", imagemUrl: esculturaImg, quantidade: 1, rotulo: "🗿" },
    },
    {
      pergunta: "COLAGEM se faz com:",
      opcoes: ["Papéis recortados e cola", "Argila e água", "Só lápis"],
      correta: 0,
      explicacao: "Recortar e colar papéis = colagem.",
      visual: { tipo: "itens", imagemUrl: colagemImg, quantidade: 1, rotulo: "✂️" },
    },
    {
      pergunta: "Onde muitas obras ficam pra todo mundo apreciar?",
      opcoes: ["No museu", "Na cozinha", "No parque de bola"],
      correta: 0,
      explicacao: "Museu é a casa das obras.",
      visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🏛️" },
    },
    {
      pergunta: "Quem CRIA as obras de arte é:",
      opcoes: ["O artista", "O motorista", "O cozinheiro"],
      correta: 0,
      explicacao: "Artistas criam as obras.",
      visual: { tipo: "itens", imagemUrl: artistaImg, quantidade: 1, rotulo: "🧑‍🎨" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Detetive das Artes! 🎁 Item desbloqueado: 🎨 Paleta Mágica do Brilha. Missão em Família: façam juntos uma pequena obra escolhendo um dos tipos aprendidos hoje!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Alguns quadros muito antigos, feitos há mais de 500 anos, ainda estão em museus e milhares de pessoas viajam só pra ver!",
  },

  interativas: [
    // FASE 1 — Reconhecer uma pintura
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Qual É a Pintura?",
      instrucao: "Toque na obra que é uma PINTURA.",
      pergunta: "Qual é a PINTURA?",
      opcoes: [
        { nome: "PINTURA", imagemUrl: quadroImg, rotulo: "🎨 PINTURA" },
        { nome: "ESCULTURA", imagemUrl: esculturaImg, rotulo: "🗿 ESCULTURA" },
        { nome: "MODELAGEM", imagemUrl: modelagemImg, rotulo: "🧱 MODELAGEM" },
      ],
      correta: 0,
      acerto: "🎨 Isso! Tinta num quadro é pintura.",
      erro: "Procure a obra com tinta colorida num quadro.",
    },

    // FASE 2 — Reconhecer o desenho
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Qual É o Desenho?",
      instrucao: "Toque no DESENHO feito no papel.",
      pergunta: "Qual é o DESENHO?",
      opcoes: [
        { nome: "DESENHO", imagemUrl: desenhoImg, rotulo: "✏️ DESENHO" },
        { nome: "COLAGEM", imagemUrl: colagemImg, rotulo: "✂️ COLAGEM" },
        { nome: "ESCULTURA", imagemUrl: esculturaImg, rotulo: "🗿 ESCULTURA" },
      ],
      correta: 0,
      acerto: "✏️ Isso! Lápis no papel = desenho.",
      erro: "Pense em riscos de lápis no papel.",
    },

    // FASE 3 — Arrastar material pro tipo de arte
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Que Material É Esse?",
      instrucao: "Arraste cada material pro tipo de arte que ele faz.",
      pares: [
        { item: "🖌️ PINCEL", alvo: "PINTURA" },
        { item: "🎨 TINTA", alvo: "PINTURA" },
        { item: "✏️ LÁPIS", alvo: "DESENHO" },
        { item: "📄 PAPEL RECORTADO", alvo: "COLAGEM" },
        { item: "🧱 ARGILA", alvo: "MODELAGEM" },
        { item: "🗿 PEDRA", alvo: "ESCULTURA" },
      ],
      alvosVisuais: [
        { nome: "PINTURA", cor: "#F472B6", capacidade: 2 },
        { nome: "DESENHO", cor: "#FBBF24", capacidade: 1 },
        { nome: "COLAGEM", cor: "#34D399", capacidade: 1 },
        { nome: "MODELAGEM", cor: "#A78BFA", capacidade: 1 },
        { nome: "ESCULTURA", cor: "#94A3B8", capacidade: 1 },
      ],
    },

    // FASE 4 — Laboratório da Lupa: apreciar cada obra
    {
      tipo: "lupa",
      titulo: "Fase 4 · Museu do Brilha",
      instrucao: "Toque em cada obra e descubra como ela foi feita.",
      itens: [
        {
          nome: "Pintura",
          imagemUrl: quadroImg,
          rotulo: "🎨 PINTURA",
          descoberta:
            "Esta é uma PINTURA. O artista molhou o pincel na tinta e criou cores no quadro. É plana e fica pendurada na parede.",
        },
        {
          nome: "Escultura",
          imagemUrl: esculturaImg,
          rotulo: "🗿 ESCULTURA",
          descoberta:
            "Esta é uma ESCULTURA. Foi feita de pedra dura, tem volume — dá pra andar em volta e ver de vários lados.",
        },
        {
          nome: "Desenho",
          imagemUrl: desenhoImg,
          rotulo: "✏️ DESENHO",
          descoberta:
            "Este é um DESENHO. Foi criado com lápis colorido ou giz de cera no papel. É a arte mais fácil de fazer em casa!",
        },
        {
          nome: "Colagem",
          imagemUrl: colagemImg,
          rotulo: "✂️ COLAGEM",
          descoberta:
            "Esta é uma COLAGEM. Vários pedaços de papel colorido foram recortados e colados pra formar a imagem.",
        },
        {
          nome: "Modelagem",
          imagemUrl: modelagemImg,
          rotulo: "🧱 MODELAGEM",
          descoberta:
            "Esta é uma MODELAGEM. Feita com massinha ou argila mole, o artista aperta e molda com as mãos.",
        },
      ],
      acerto: "🔬 Descoberta feita! Você conhece 5 tipos de arte visual.",
    },

    // FASE 5 — Selecionar tudo que é obra de arte
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Detetive de Obras",
      instrucao: "Marque TUDO que é uma obra de arte visual.",
      criterio: "É uma obra de arte 🎨",
      opcoes: [
        { nome: "Quadro", imagemUrl: quadroImg, rotulo: "🎨 PINTURA", correto: true },
        { nome: "Escultura", imagemUrl: esculturaImg, rotulo: "🗿 ESCULTURA", correto: true },
        { nome: "Desenho", imagemUrl: desenhoImg, rotulo: "✏️ DESENHO", correto: true },
        { nome: "Colagem", imagemUrl: colagemImg, rotulo: "✂️ COLAGEM", correto: true },
        { nome: "Modelagem", imagemUrl: modelagemImg, rotulo: "🧱 MODELAGEM", correto: true },
        { nome: "Bola", imagemUrl: bolaImg, rotulo: "⚽ BOLA", correto: false },
        { nome: "Carro", imagemUrl: carroImg, rotulo: "🚗 CARRO", correto: false },
        { nome: "Livro", imagemUrl: livroImg, rotulo: "📖 LIVRO", correto: false },
      ],
      acerto: "🕵️ Detetive das artes! Você achou todas as obras.",
      erro: "Pense: isso foi CRIADO por um artista pra ser apreciado?",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "PINTURA se faz com:",
        opcoes: ["Tinta e pincel", "Pedra", "Massinha"],
        correta: 0,
        explicacao: "Tinta + pincel = pintura.",
        visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "🖌️" },
      },
      {
        pergunta: "DESENHO se faz com:",
        opcoes: ["Lápis no papel", "Pedra grande", "Tinta e balde"],
        correta: 0,
        explicacao: "Lápis no papel = desenho.",
        visual: { tipo: "itens", imagemUrl: desenhoImg, quantidade: 1, rotulo: "✏️" },
      },
      {
        pergunta: "Onde ficam obras pra visitar?",
        opcoes: ["Museu", "Padaria", "Piscina"],
        correta: 0,
        explicacao: "Museu = casa das obras.",
        visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🏛️" },
      },
    ],
    medio: [
      {
        pergunta: "Uma obra de pedra que ocupa espaço é:",
        opcoes: ["Escultura", "Pintura", "Colagem"],
        correta: 0,
        explicacao: "Pedra + volume = escultura.",
        visual: { tipo: "itens", imagemUrl: esculturaImg, quantidade: 1, rotulo: "🗿" },
      },
      {
        pergunta: "Recortar e colar papéis vira:",
        opcoes: ["Colagem", "Pintura", "Escultura"],
        correta: 0,
        explicacao: "Papel + cola = colagem.",
        visual: { tipo: "itens", imagemUrl: colagemImg, quantidade: 1, rotulo: "✂️" },
      },
      {
        pergunta: "Apertar massinha até virar formas é:",
        opcoes: ["Modelagem", "Desenho", "Pintura"],
        correta: 0,
        explicacao: "Massinha = modelagem.",
        visual: { tipo: "itens", imagemUrl: modelagemImg, quantidade: 1, rotulo: "🧱" },
      },
    ],
    dificil: [
      {
        pergunta: "Qual dessas obras a gente pode olhar de VÁRIOS LADOS?",
        opcoes: ["Escultura", "Pintura", "Desenho"],
        correta: 0,
        explicacao: "Escultura tem volume — dá pra andar em volta.",
        visual: { tipo: "itens", imagemUrl: esculturaImg, quantidade: 1, rotulo: "🗿" },
      },
      {
        pergunta: "Quem CRIA uma obra é:",
        opcoes: ["O artista", "O bombeiro", "O padeiro"],
        correta: 0,
        explicacao: "Artista cria arte.",
        visual: { tipo: "itens", imagemUrl: artistaImg, quantidade: 1, rotulo: "🧑‍🎨" },
      },
      {
        pergunta: "Por que a gente APRECIA uma obra?",
        opcoes: [
          "Pra olhar com calma e sentir o que ela transmite",
          "Pra comer",
          "Pra jogar bola",
        ],
        correta: 0,
        explicacao: "Apreciar é olhar com atenção e imaginar.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "❤️" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica de Arte",
    objetivo:
      "As obras passam na esteira. Toque na bandeja do tipo certo antes que caiam!",
    tempoSegundos: 90,
    minAcertos: 10,
    categorias: [
      { nome: "PINTURA", cor: "#F472B6", emoji: "🎨" },
      { nome: "ESCULTURA", cor: "#94A3B8", emoji: "🗿" },
      { nome: "DESENHO", cor: "#FBBF24", emoji: "✏️" },
      { nome: "COLAGEM", cor: "#34D399", emoji: "✂️" },
      { nome: "MODELAGEM", cor: "#A78BFA", emoji: "🧱" },
    ],
    objetos: [
      { nome: "Quadro colorido", imagemUrl: quadroImg, categoria: "PINTURA" },
      { nome: "Paleta", imagemUrl: paletaImg, categoria: "PINTURA" },
      { nome: "Pincel", imagemUrl: pincelImg, categoria: "PINTURA" },
      { nome: "Tinta", imagemUrl: tintaImg, categoria: "PINTURA" },
      { nome: "Escultura de pedra", imagemUrl: esculturaImg, categoria: "ESCULTURA" },
      { nome: "Bloco de pedra", imagemUrl: bloqueImg, categoria: "ESCULTURA" },
      { nome: "Desenho de casa", imagemUrl: desenhoImg, categoria: "DESENHO" },
      { nome: "Desenho de flor", imagemUrl: florImg, categoria: "DESENHO" },
      { nome: "Desenho de árvore", imagemUrl: arvoreImg, categoria: "DESENHO" },
      { nome: "Colagem", imagemUrl: colagemImg, categoria: "COLAGEM" },
      { nome: "Colagem de borboleta", imagemUrl: borboletaImg, categoria: "COLAGEM" },
      { nome: "Modelagem", imagemUrl: modelagemImg, categoria: "MODELAGEM" },
      { nome: "Coração de massinha", imagemUrl: coracaoImg, categoria: "MODELAGEM" },
    ],
    acerto: "🏭 Museu do Brilha completo! Cada obra no seu lugar.",
  },

  missaoFamilia: {
    titulo: "Nossa Mini-Galeria em Casa",
    instrucao:
      "Com um familiar, escolham UM tipo de arte estudado hoje (pintura, desenho, colagem ou modelagem) e criem juntos uma obra pequena. Depois expliquem qual material usaram e por que escolheram esse tipo.",
    permitirFoto: true,
    registros: [
      { label: "Qual tipo de arte escolhemos?", tipo: "texto" },
      { label: "Que materiais usamos?", tipo: "texto" },
      { label: "O que a obra representa?", tipo: "texto" },
    ],
  },

  proximaHabilidade: {
    codigo: "EF15AR02",
  },
};

export default aula;
