import type { Aula } from "../types";
import casaAntigaImg from "@/assets/neuro-treino/objetos/casa-antiga.png";
import casaModernaImg from "@/assets/neuro-treino/objetos/casa-moderna.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import predioImg from "@/assets/neuro-treino/objetos/predio.png";
import ocaImg from "@/assets/neuro-treino/objetos/oca.png";
import tijoloImg from "@/assets/neuro-treino/objetos/tijolo.png";
import madeiraImg from "@/assets/neuro-treino/objetos/madeira.png";
import pedraImg from "@/assets/neuro-treino/objetos/pedra.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import bonecaImg from "@/assets/neuro-treino/objetos/boneca-pano.png";
import ioioImg from "@/assets/neuro-treino/objetos/ioio.png";
import videogameImg from "@/assets/neuro-treino/objetos/videogame.png";
import tvImg from "@/assets/neuro-treino/objetos/tv-moderna.png";
import radioImg from "@/assets/neuro-treino/objetos/radio-antigo.png";
import telefoneAntigoImg from "@/assets/neuro-treino/objetos/telefone-antigo.png";
import celularImg from "@/assets/neuro-treino/objetos/celular.png";
import bicicletaAntigaImg from "@/assets/neuro-treino/objetos/bicicleta-antiga.png";
import bicicletaModernaImg from "@/assets/neuro-treino/objetos/bicicleta-moderna.png";
import cadeiraImg from "@/assets/neuro-treino/objetos/cadeira.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import familiaImg from "@/assets/neuro-treino/objetos/familia-grande.png";
import tecidoImg from "@/assets/neuro-treino/objetos/tecido-colorido.png";

/**
 * EF01GE06 — Geografia · 1º Ano
 * Missão: "Casinhas e Coisas"
 * Descrever e comparar tipos de moradia e objetos do cotidiano
 * considerando materiais e técnicas.
 */
const aula: Aula = {
  codigo: "EF01GE06",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "Casinhas e Coisas",

  narrativa: {
    titulo: "A Feira das Casinhas",
    contexto:
      "Brilha visita a FEIRA DAS CASINHAS 🏠 e descobre que existem MUITOS tipos de moradia: oca, casa de tijolo, prédio…",
    problema:
      "A Coruja Sábia mostra também os OBJETOS de casa — antigos e novos — e pergunta: 'De QUE eles são feitos? MADEIRA? TIJOLO? PLÁSTICO?'",
    convite: "Vem descobrir como cada CASA e cada COISA é construída!",
  },

  conhecimentosPrevios: [
    "Reconhecer que existem diferentes tipos de casa.",
    "Perceber que objetos são feitos de materiais diferentes.",
  ],

  missao:
    "Identificar tipos de moradia e objetos do cotidiano, comparando materiais e técnicas usadas na produção.",

  objetivos: [
    "Reconhecer diferentes tipos de moradia.",
    "Comparar objetos antigos e modernos.",
    "Identificar materiais (madeira, tijolo, plástico, tecido).",
    "Perceber que objetos são feitos por pessoas.",
    "Valorizar a diversidade de moradias.",
  ],

  motivacao: "Cada casa e cada coisa tem uma HISTÓRIA de como foi feita 🛠️.",

  explicacao:
    "🏠 MORADIAS: oca (palha e madeira), casa (tijolo), prédio (concreto).\n🧸 OBJETOS: ursinho (tecido), cadeira (madeira), celular (plástico e metal).\nCada material tem um jeito de ser trabalhado.",

  explicacoesNiveis: {
    nivel1: "Casas e objetos podem ser feitos de MATERIAIS diferentes.",
    nivel2: "Existem casas de palha, madeira, tijolo e concreto.",
    nivel3: "Um mesmo objeto (ex.: telefone) mudou muito com o tempo.",
    nivel4: "As pessoas escolhem o material pensando no CLIMA e no USO.",
  },

  exemploResolvido: {
    enunciado: "De qual MATERIAL é a nossa casa de tijolo?",
    passos: [
      "Tijolo vem do BARRO cozido.",
      "É empilhado com CIMENTO.",
      "Fica FIRME e dura muitos anos.",
    ],
    resposta: "🧱 TIJOLO!",
  },

  atividadeGuiada: {
    enunciado: "Qual dessas MORADIAS é feita de PALHA e MADEIRA?",
    resposta: "🏕️ OCA!",
    explicacao:
      "A oca é uma moradia indígena feita de madeira e palha — muito fresquinha.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é a MORADIA de palha?",
      opcoes: [
        { nome: "oca", imagemUrl: ocaImg },
        { nome: "prédio", imagemUrl: predioImg },
        { nome: "casa moderna", imagemUrl: casaModernaImg },
      ],
      respostaCerta: "oca",
    },
  },

  exercicios: [
    { enunciado: "Do que é feita a CADEIRA de sala?", resposta: "🪵 MADEIRA.", dica: "Vem das árvores." },
    { enunciado: "Do que é feito o URSINHO?", resposta: "🧵 TECIDO com enchimento.", dica: "É macio." },
    { enunciado: "E o PRÉDIO, do que é feito?", resposta: "🏢 CONCRETO e tijolo.", dica: "Muitos andares!" },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra o material de cada peça!",
    resposta: "Cada objeto tem seu material principal.",
    visual: {
      perguntas: [
        {
          pergunta: "A OCA é feita principalmente de…",
          opcoes: ["Palha e madeira", "Concreto", "Vidro"],
          correta: 0,
          explicacao: "Materiais da natureza.",
          visual: { tipo: "itens", imagemUrl: ocaImg, quantidade: 1, rotulo: "🏕️" },
        },
        {
          pergunta: "Um PRÉDIO é feito de…",
          opcoes: ["Concreto e tijolo", "Papel", "Algodão"],
          correta: 0,
          explicacao: "Sustenta muitos andares.",
          visual: { tipo: "itens", imagemUrl: predioImg, quantidade: 1, rotulo: "🏢" },
        },
        {
          pergunta: "O URSINHO é feito de…",
          opcoes: ["Tecido macio", "Metal", "Vidro"],
          correta: 0,
          explicacao: "Feito pra abraçar.",
          visual: { tipo: "itens", imagemUrl: ursinhoImg, quantidade: 1, rotulo: "🧸" },
        },
        {
          pergunta: "A CADEIRA de madeira vem da…",
          opcoes: ["Árvore", "Pedra", "Nuvem"],
          correta: 0,
          explicacao: "Madeira vem das árvores.",
          visual: { tipo: "itens", imagemUrl: cadeiraImg, quantidade: 1, rotulo: "🪑" },
        },
        {
          pergunta: "O TELEFONE ANTIGO era…",
          opcoes: ["Grande, com fio", "Igual celular", "De pano"],
          correta: 0,
          explicacao: "Antigamente eram bem diferentes!",
          visual: { tipo: "itens", imagemUrl: telefoneAntigoImg, quantidade: 1, rotulo: "☎️" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🏕️ OCA — palha e madeira.",
      "🏠 CASA — tijolo e cimento.",
      "🏢 PRÉDIO — concreto e muitos andares.",
      "🧸 OBJETOS — cada um tem seu material.",
      "🛠️ Tudo é feito com técnica e cuidado.",
    ],
    dica: "Olhe uma coisa da sua casa e descubra de que material ela é feita.",
  },

  quiz: [
    {
      pergunta: "Qual dessas é uma MORADIA de palha?",
      opcoes: ["Oca", "Prédio", "Casa moderna"],
      correta: 0,
      explicacao: "A oca usa palha e madeira.",
      visual: { tipo: "itens", imagemUrl: ocaImg, quantidade: 1, rotulo: "🏕️" },
    },
    {
      pergunta: "Um PRÉDIO tem…",
      opcoes: ["Muitos andares", "Só um cômodo", "Roda"],
      correta: 0,
      explicacao: "Vários apartamentos empilhados.",
      visual: { tipo: "itens", imagemUrl: predioImg, quantidade: 1, rotulo: "🏢" },
    },
    {
      pergunta: "TIJOLO é feito de…",
      opcoes: ["Barro cozido", "Tecido", "Vidro"],
      correta: 0,
      explicacao: "Barro moldado e assado.",
      visual: { tipo: "itens", imagemUrl: tijoloImg, quantidade: 1, rotulo: "🧱" },
    },
    {
      pergunta: "Uma BONECA de pano é feita de…",
      opcoes: ["Tecido", "Metal", "Madeira dura"],
      correta: 0,
      explicacao: "Costurada em pano macio.",
      visual: { tipo: "itens", imagemUrl: bonecaImg, quantidade: 1, rotulo: "🪆" },
    },
    {
      pergunta: "Uma coisa importante sobre moradia:",
      opcoes: [
        "Existem VÁRIOS tipos e todos servem pra morar",
        "Só prédio serve",
        "Só oca serve",
      ],
      correta: 0,
      explicacao: "Cada lugar tem sua moradia.",
      visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Arquiteto do Brilha! 🏠 Item desbloqueado: Coleção das Casinhas do Mundo.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Em cada CANTO do Brasil as casas mudam: no Norte tem palafita 🏚️ (em cima da água), no Nordeste tem casa de taipa e no Sul tem casa de madeira 🪵.",
  },

  interativas: [
    // APRENDENDO — lupa: tipos de moradia
    {
      tipo: "lupa",
      titulo: "Tipos de Moradia",
      instrucao: "Toque em cada CASINHA 🏠 pra ouvir a explicação.",
      itens: [
        {
          nome: "Oca",
          imagemUrl: ocaImg,
          rotulo: "🏕️ OCA",
          descoberta: "Moradia indígena feita de MADEIRA e PALHA. É fresquinha.",
        },
        {
          nome: "Casa antiga",
          imagemUrl: casaAntigaImg,
          rotulo: "🏚️ CASA ANTIGA",
          descoberta: "Feita de tijolo e telhas de barro, com muitos anos de história.",
        },
        {
          nome: "Casa moderna",
          imagemUrl: casaModernaImg,
          rotulo: "🏡 CASA MODERNA",
          descoberta: "Usa CONCRETO, vidro e novas técnicas de construção.",
        },
        {
          nome: "Prédio",
          imagemUrl: predioImg,
          rotulo: "🏢 PRÉDIO",
          descoberta: "Tem MUITOS andares — muitas famílias morando no mesmo lugar.",
        },
        {
          nome: "Coruja Sábia",
          imagemUrl: corujaImg,
          rotulo: "🦉 CORUJA",
          descoberta: "Toda moradia protege, aquece e reúne a família.",
        },
      ],
    },

    // FASE 1 — escolherFigura: identificar oca
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Qual É A OCA?",
      instrucao: "Toque na MORADIA feita de PALHA e MADEIRA.",
      pergunta: "Onde está a OCA? 🏕️",
      opcoes: [
        { nome: "oca", imagemUrl: ocaImg, rotulo: "OCA" },
        { nome: "prédio", imagemUrl: predioImg, rotulo: "PRÉDIO" },
        { nome: "casa moderna", imagemUrl: casaModernaImg, rotulo: "CASA MODERNA" },
      ],
      correta: 0,
      acerto: "🎯 Isso! A OCA é feita de palha.",
      erro: "Essa não é de palha — procure a moradia indígena.",
    },

    // FASE 2 — ligar: material ↔ objeto
    {
      tipo: "ligar",
      titulo: "Fase 2 · De Que É Feito?",
      instrucao: "Ligue cada OBJETO ao MATERIAL principal dele.",
      pares: [
        { a: "🪑 Cadeira", b: "Madeira", aImagem: cadeiraImg },
        { a: "🧱 Casa", b: "Tijolo", aImagem: casaImg },
        { a: "🧸 Ursinho", b: "Tecido", aImagem: ursinhoImg },
        { a: "📱 Celular", b: "Plástico e metal", aImagem: celularImg },
      ],
    },

    // FASE 3 — arrastar: antigo x moderno
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Antigo Ou Moderno?",
      instrucao: "Arraste cada OBJETO pra caixinha ANTIGO 🕰️ ou MODERNO ✨.",
      pares: [
        { item: "Rádio", alvo: "Antigo", itemImagem: radioImg },
        { item: "Telefone", alvo: "Antigo", itemImagem: telefoneAntigoImg },
        { item: "Bicicleta antiga", alvo: "Antigo", itemImagem: bicicletaAntigaImg },
        { item: "TV moderna", alvo: "Moderno", itemImagem: tvImg },
        { item: "Videogame", alvo: "Moderno", itemImagem: videogameImg },
        { item: "Bicicleta nova", alvo: "Moderno", itemImagem: bicicletaModernaImg },
      ],
      alvosVisuais: [
        { nome: "Antigo", cor: "#A16207", capacidade: 3 },
        { nome: "Moderno", cor: "#3B82F6", capacidade: 3 },
      ],
    },

    // FASE 4 — selecionarMultiplos: objetos de madeira
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · Só De MADEIRA",
      instrucao: "Marque APENAS os objetos que são feitos principalmente de MADEIRA 🪵.",
      criterio: "Feitos de MADEIRA 🪵",
      opcoes: [
        { nome: "Cadeira", imagemUrl: cadeiraImg, rotulo: "🪑 CADEIRA", correto: true },
        { nome: "Ioiô", imagemUrl: ioioImg, rotulo: "🪀 IOIÔ", correto: true },
        { nome: "Madeira", imagemUrl: madeiraImg, rotulo: "🪵 MADEIRA", correto: true },
        { nome: "Celular", imagemUrl: celularImg, rotulo: "📱 CELULAR", correto: false },
        { nome: "Tijolo", imagemUrl: tijoloImg, rotulo: "🧱 TIJOLO", correto: false },
        { nome: "Ursinho", imagemUrl: ursinhoImg, rotulo: "🧸 URSINHO", correto: false },
      ],
      acerto: "🌳 Você separou direitinho o que vem das árvores!",
      erro: "Esse não é de madeira — olhe de novo.",
    },

    // FASE 5 — album: minha casa dos sonhos
    {
      tipo: "album",
      titulo: "Fase 5 · Minha Casa Dos Sonhos",
      instrucao: "Escolha como seria a SUA casa dos sonhos 🏡. Pode marcar mais de uma!",
      escolhas: [
        {
          label: "Minha casa seria…",
          modo: "imagem",
          opcoes: [
            { nome: "Casa moderna", imagemUrl: casaModernaImg, rotulo: "🏡 MODERNA" },
            { nome: "Oca", imagemUrl: ocaImg, rotulo: "🏕️ OCA" },
            { nome: "Casa antiga", imagemUrl: casaAntigaImg, rotulo: "🏚️ ANTIGA" },
            { nome: "Prédio", imagemUrl: predioImg, rotulo: "🏢 PRÉDIO" },
          ],
        },
        {
          label: "Nela eu quero ter…",
          modo: "imagem",
          opcoes: [
            { nome: "Ursinho", imagemUrl: ursinhoImg, rotulo: "🧸 URSINHO" },
            { nome: "Videogame", imagemUrl: videogameImg, rotulo: "🎮 VIDEOGAME" },
            { nome: "Livros", imagemUrl: cadeiraImg, rotulo: "🪑 CADEIRA CONFORTÁVEL" },
          ],
        },
        {
          label: "Quem mora com você…",
          modo: "imagem",
          opcoes: [
            { nome: "Família grande", imagemUrl: familiaImg, rotulo: "👨‍👩‍👧‍👦 FAMÍLIA" },
            { nome: "Coruja", imagemUrl: corujaImg, rotulo: "🦉 CORUJA" },
          ],
        },
      ],
      acerto: "🏡 Casa dos sonhos salva no Diário do Brilha!",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "A OCA é feita de…",
        opcoes: ["Palha", "Vidro", "Metal"],
        correta: 0,
        explicacao: "Palha e madeira.",
        visual: { tipo: "itens", imagemUrl: ocaImg, quantidade: 1, rotulo: "🏕️" },
      },
      {
        pergunta: "Cadeira é feita de…",
        opcoes: ["Madeira", "Tecido só", "Vidro"],
        correta: 0,
        explicacao: "Madeira das árvores.",
        visual: { tipo: "itens", imagemUrl: cadeiraImg, quantidade: 1, rotulo: "🪑" },
      },
      {
        pergunta: "Prédio tem…",
        opcoes: ["Muitos andares", "Uma folha só", "Rodas"],
        correta: 0,
        explicacao: "Vários pavimentos.",
        visual: { tipo: "itens", imagemUrl: predioImg, quantidade: 1, rotulo: "🏢" },
      },
    ],
    medio: [
      {
        pergunta: "Rádio antigo era…",
        opcoes: ["Grande e de madeira", "Fininho", "De pano"],
        correta: 0,
        explicacao: "Bem diferente do atual.",
        visual: { tipo: "itens", imagemUrl: radioImg, quantidade: 1, rotulo: "📻" },
      },
      {
        pergunta: "Boneca de pano é feita de…",
        opcoes: ["Tecido", "Concreto", "Vidro"],
        correta: 0,
        explicacao: "Pano costurado.",
        visual: { tipo: "itens", imagemUrl: bonecaImg, quantidade: 1, rotulo: "🪆" },
      },
      {
        pergunta: "Casa de tijolo usa…",
        opcoes: ["Barro cozido", "Palha só", "Papel"],
        correta: 0,
        explicacao: "Tijolo é barro cozido.",
        visual: { tipo: "itens", imagemUrl: tijoloImg, quantidade: 1, rotulo: "🧱" },
      },
    ],
    dificil: [
      {
        pergunta: "Objeto ANTIGO parecido com celular:",
        opcoes: ["Telefone com fio", "Videogame", "TV moderna"],
        correta: 0,
        explicacao: "Antes era com fio e disco.",
        visual: { tipo: "itens", imagemUrl: telefoneAntigoImg, quantidade: 1, rotulo: "☎️" },
      },
      {
        pergunta: "As MORADIAS mudam porque…",
        opcoes: [
          "Cada lugar tem clima e materiais diferentes",
          "Todo mundo mora igual",
          "Não muda nada",
        ],
        correta: 0,
        explicacao: "Clima e cultura influenciam.",
        visual: { tipo: "itens", imagemUrl: casaAntigaImg, quantidade: 1, rotulo: "🏚️" },
      },
      {
        pergunta: "Tecido serve pra fazer…",
        opcoes: ["Ursinho e boneca", "Prédio", "Estrada"],
        correta: 0,
        explicacao: "Roupas e brinquedos macios.",
        visual: { tipo: "itens", imagemUrl: tecidoImg, quantidade: 1, rotulo: "🧵" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica dos Materiais",
    objetivo:
      "Arraste cada peça pro material certo antes do tempo acabar ⏱️! Cada acerto solta um brilho na fábrica.",
    tempoSegundos: 90,
    categorias: [
      { nome: "Madeira", cor: "#A16207", emoji: "🪵" },
      { nome: "Tijolo", cor: "#EF4444", emoji: "🧱" },
      { nome: "Tecido", cor: "#EC4899", emoji: "🧵" },
    ],
    objetos: [
      { nome: "Cadeira", imagemUrl: cadeiraImg, categoria: "Madeira", rotulo: "🪑" },
      { nome: "Ioiô", imagemUrl: ioioImg, categoria: "Madeira", rotulo: "🪀" },
      { nome: "Madeira", imagemUrl: madeiraImg, categoria: "Madeira", rotulo: "🪵" },
      { nome: "Tijolo", imagemUrl: tijoloImg, categoria: "Tijolo", rotulo: "🧱" },
      { nome: "Casa", imagemUrl: casaImg, categoria: "Tijolo", rotulo: "🏠" },
      { nome: "Casa antiga", imagemUrl: casaAntigaImg, categoria: "Tijolo", rotulo: "🏚️" },
      { nome: "Ursinho", imagemUrl: ursinhoImg, categoria: "Tecido", rotulo: "🧸" },
      { nome: "Boneca", imagemUrl: bonecaImg, categoria: "Tecido", rotulo: "🪆" },
      { nome: "Tecido", imagemUrl: tecidoImg, categoria: "Tecido", rotulo: "🧵" },
    ],
    minAcertos: 8,
    acerto: "🏭 Fábrica em pleno funcionamento! Materiais separados!",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Descobrindo A Casa",
    instrucao:
      "Com um familiar, andem pela CASA e escolham 3 objetos. Observem juntos DE QUE material cada um é feito.",
    registros: [
      { label: "1º objeto e material", tipo: "texto" },
      { label: "2º objeto e material", tipo: "texto" },
      { label: "3º objeto e material", tipo: "texto" },
      { label: "O objeto mais ANTIGO que encontraram", tipo: "texto" },
    ],
    permitirFoto: true,
  },

  proximaHabilidade: { codigo: "EF01GE07" },
};

export default aula;
