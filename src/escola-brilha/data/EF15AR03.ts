import type { Aula } from "../types";
import mascaraIndigenaImg from "@/assets/neuro-treino/objetos/mascara-indigena.png";
import mascaraAfricanaImg from "@/assets/neuro-treino/objetos/mascara-africana.png";
import bonecaPanoImg from "@/assets/neuro-treino/objetos/boneca-pano.png";
import vasoCeramicaImg from "@/assets/neuro-treino/objetos/vaso-ceramica.png";
import tecidoColoridoImg from "@/assets/neuro-treino/objetos/tecido-colorido.png";
import quadroImg from "@/assets/neuro-treino/objetos/quadro.png";
import esculturaImg from "@/assets/neuro-treino/objetos/escultura.png";
import artistaImg from "@/assets/neuro-treino/objetos/artista.png";
import museuImg from "@/assets/neuro-treino/objetos/museu.png";
import paletaImg from "@/assets/neuro-treino/objetos/paleta.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";

/**
 * EF15AR03 — Arte · 1º Ano (adaptado, código compartilhado 1º–5º)
 * Missão: "Detetive das Artes do Brasil".
 * Reconhecer influência de matrizes estéticas e culturais (indígena, africana,
 * popular) nas artes visuais do Brasil.
 */
const aula: Aula = {
  codigo: "EF15AR03",
  ano: "1º Ano",
  disciplina: "Arte",
  titulo: "Detetive das Artes do Brasil",

  narrativa: {
    titulo: "As Artes Que Contam Nossa História",
    contexto:
      "Brilha entrou num salão especial do museu. Lá tinha máscaras coloridas, bonecas de pano, vasos de barro e tecidos lindos — todos feitos por povos diferentes do Brasil!",
    problema:
      "'Cada obra tem uma história de um povo', disse a artista Ana. 'Você consegue reconhecer as artes indígenas, africanas e populares?'",
    convite: "Bora com o Brilha viajar pelas artes do nosso Brasil?",
  },

  conhecimentosPrevios: [
    "Reconhecer formas e cores.",
    "Já ter visto brinquedos ou objetos feitos à mão.",
  ],

  missao:
    "Reconhecer diferentes matrizes culturais das artes visuais brasileiras: indígena, africana e popular.",

  objetivos: [
    "Reconhecer arte INDÍGENA (máscaras, pinturas corporais, cestos).",
    "Reconhecer arte AFRICANA (máscaras, tecidos, esculturas).",
    "Reconhecer arte POPULAR (bonecas de pano, vasos, carrancas).",
    "Perceber que cada povo cria arte do seu jeito.",
  ],

  motivacao:
    "Cada obra do Brasil conta a história de gente diferente — e todas são lindas do jeito delas!",

  explicacao:
    "🪶 ARTE INDÍGENA — feita pelos povos originários do Brasil. Máscaras, pinturas no corpo, cestos.\n🌍 ARTE AFRICANA — trazida pelos povos africanos. Máscaras, tecidos coloridos, esculturas.\n🎪 ARTE POPULAR — feita pelo povo brasileiro. Bonecas de pano, vasos, carrancas.",

  explicacoesNiveis: {
    nivel1: "Existem MUITOS jeitos de fazer arte, dependendo do povo.",
    nivel2: "Arte indígena, africana e popular são MATRIZES da arte brasileira.",
    nivel3: "Cada matriz usa materiais e desenhos próprios: penas, tecidos, barro.",
    nivel4: "As três se misturam e criam a arte que a gente vê no Brasil hoje.",
  },

  exemploResolvido: {
    enunciado: "Uma máscara com penas coloridas, feita por um povo da floresta. Que arte é?",
    passos: [
      "Tem penas → material da natureza.",
      "Feita por um povo da floresta → povo originário.",
      "Isso é arte INDÍGENA.",
    ],
    resposta: "🪶 ARTE INDÍGENA. ✅",
  },

  atividadeGuiada: {
    enunciado: "Toque na MÁSCARA INDÍGENA.",
    resposta: "🪶 Máscara indígena — arte dos povos originários.",
    explicacao: "Máscara com penas e cores da natureza é arte indígena.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é a MÁSCARA INDÍGENA?",
      opcoes: [
        { nome: "mascara-indigena", imagemUrl: mascaraIndigenaImg },
        { nome: "boneca-pano", imagemUrl: bonecaPanoImg },
        { nome: "vaso", imagemUrl: vasoCeramicaImg },
      ],
      respostaCerta: "mascara-indigena",
    },
  },

  exercicios: [
    {
      enunciado: "Qual arte é feita pelos povos originários do Brasil?",
      resposta: "🪶 Arte INDÍGENA.",
      dica: "Povos que vivem na floresta há muito tempo.",
    },
    {
      enunciado: "Máscaras africanas e tecidos coloridos são de qual matriz?",
      resposta: "🌍 Arte AFRICANA.",
      dica: "Veio da África, atravessou o mar.",
    },
    {
      enunciado: "Boneca de pano e vasos de barro são arte:",
      resposta: "🎪 POPULAR.",
      dica: "Feita pelo povo do dia a dia.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: reconheça cada matriz de arte!",
    resposta: "Cada matriz tem seu jeito.",
    visual: {
      perguntas: [
        {
          pergunta: "Máscara com penas dos povos originários é arte:",
          opcoes: ["🪶 INDÍGENA", "🌍 AFRICANA", "🎪 POPULAR"],
          correta: 0,
          explicacao: "Povos indígenas usam penas e cores da natureza.",
          visual: { tipo: "itens", imagemUrl: mascaraIndigenaImg, quantidade: 1, rotulo: "🪶" },
        },
        {
          pergunta: "Máscara africana com padrões tribais é arte:",
          opcoes: ["🌍 AFRICANA", "🪶 INDÍGENA", "🎪 POPULAR"],
          correta: 0,
          explicacao: "Vem da tradição dos povos africanos.",
          visual: { tipo: "itens", imagemUrl: mascaraAfricanaImg, quantidade: 1, rotulo: "🌍" },
        },
        {
          pergunta: "Boneca de pano feita à mão é arte:",
          opcoes: ["🎪 POPULAR", "🪶 INDÍGENA", "🌍 AFRICANA"],
          correta: 0,
          explicacao: "Boneca de pano é arte popular brasileira.",
          visual: { tipo: "itens", imagemUrl: bonecaPanoImg, quantidade: 1, rotulo: "🎪" },
        },
        {
          pergunta: "Vaso de barro colorido é arte:",
          opcoes: ["🎪 POPULAR", "🌍 AFRICANA", "🪶 INDÍGENA"],
          correta: 0,
          explicacao: "Vasos de barro são feitos por artesãos populares.",
          visual: { tipo: "itens", imagemUrl: vasoCeramicaImg, quantidade: 1, rotulo: "🏺" },
        },
        {
          pergunta: "Um tecido colorido com padrões africanos é arte:",
          opcoes: ["🌍 AFRICANA", "🎪 POPULAR", "🪶 INDÍGENA"],
          correta: 0,
          explicacao: "Tecidos coloridos vêm da tradição africana.",
          visual: { tipo: "itens", imagemUrl: tecidoColoridoImg, quantidade: 1, rotulo: "🌍" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🪶 INDÍGENA = povos originários (penas, pinturas, cestos).",
      "🌍 AFRICANA = máscaras, tecidos e esculturas.",
      "🎪 POPULAR = bonecas de pano, vasos, carrancas.",
      "🇧🇷 As três matrizes formam a arte do Brasil.",
    ],
    dica: "Olhe um objeto e pergunte: quem fez? de onde veio?",
  },

  quiz: [
    {
      pergunta: "Arte feita pelos povos originários é:",
      opcoes: ["Indígena", "Popular", "Africana"],
      correta: 0,
      explicacao: "Povos indígenas = arte indígena.",
      visual: { tipo: "itens", imagemUrl: mascaraIndigenaImg, quantidade: 1, rotulo: "🪶" },
    },
    {
      pergunta: "Máscara com padrões tribais africanos é arte:",
      opcoes: ["Africana", "Popular", "Indígena"],
      correta: 0,
      explicacao: "Máscara africana = matriz africana.",
      visual: { tipo: "itens", imagemUrl: mascaraAfricanaImg, quantidade: 1, rotulo: "🌍" },
    },
    {
      pergunta: "Boneca de pano é arte:",
      opcoes: ["Popular", "Indígena", "Africana"],
      correta: 0,
      explicacao: "Boneca de pano = arte popular.",
      visual: { tipo: "itens", imagemUrl: bonecaPanoImg, quantidade: 1, rotulo: "🎪" },
    },
    {
      pergunta: "Vaso de barro pintado é arte:",
      opcoes: ["Popular", "Africana", "Indígena"],
      correta: 0,
      explicacao: "Vasos = artesanato popular.",
      visual: { tipo: "itens", imagemUrl: vasoCeramicaImg, quantidade: 1, rotulo: "🏺" },
    },
    {
      pergunta: "Quantas matrizes formam a arte brasileira?",
      opcoes: ["Três (indígena, africana e popular)", "Só uma", "Nenhuma"],
      correta: 0,
      explicacao: "Indígena + Africana + Popular = 3 matrizes.",
      visual: { tipo: "itens", imagemUrl: paletaImg, quantidade: 1, rotulo: "🎨" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Detetive das Artes do Brasil! 🎁 Item desbloqueado: 🪶 Pena Colorida. Missão em Família: procurem em casa um objeto artesanal e descubram quem fez!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "A Boneca Abayomi é uma boneca africana feita de tiras de pano SEM tesoura e SEM cola — só com nós!",
  },

  interativas: [
    // FASE 1 — Reconhecer arte indígena
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · A Arte Indígena",
      instrucao: "Toque na MÁSCARA INDÍGENA — feita pelos povos da floresta.",
      pergunta: "Qual é a arte INDÍGENA?",
      opcoes: [
        { nome: "MASCARA-INDIGENA", imagemUrl: mascaraIndigenaImg, rotulo: "🪶 MÁSCARA INDÍGENA" },
        { nome: "BONECA-PANO", imagemUrl: bonecaPanoImg, rotulo: "🎪 BONECA" },
        { nome: "TECIDO", imagemUrl: tecidoColoridoImg, rotulo: "🌍 TECIDO" },
      ],
      correta: 0,
      acerto: "🪶 Isso! Máscara com penas é arte dos povos originários.",
      erro: "Procure a máscara com penas coloridas.",
    },

    // FASE 2 — Reconhecer arte africana
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · A Arte Africana",
      instrucao: "Toque na MÁSCARA AFRICANA — com padrões tribais.",
      pergunta: "Qual é a arte AFRICANA?",
      opcoes: [
        { nome: "MASCARA-AFRICANA", imagemUrl: mascaraAfricanaImg, rotulo: "🌍 MÁSCARA AFRICANA" },
        { nome: "VASO", imagemUrl: vasoCeramicaImg, rotulo: "🏺 VASO" },
        { nome: "MASCARA-INDIGENA", imagemUrl: mascaraIndigenaImg, rotulo: "🪶 INDÍGENA" },
      ],
      correta: 0,
      acerto: "🌍 Isso! Máscara com padrões tribais vem da tradição africana.",
      erro: "Procure a máscara com desenhos geométricos africanos.",
    },

    // FASE 3 — Arrastar: separar as três matrizes
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Cada Arte No Seu Povo",
      instrucao: "Arraste cada obra pra matriz certa.",
      pares: [
        { item: "🪶 MÁSCARA INDÍGENA", alvo: "INDÍGENA" },
        { item: "🎨 PINTURA CORPORAL", alvo: "INDÍGENA" },
        { item: "🌍 MÁSCARA AFRICANA", alvo: "AFRICANA" },
        { item: "🧵 TECIDO COLORIDO", alvo: "AFRICANA" },
        { item: "🎪 BONECA DE PANO", alvo: "POPULAR" },
        { item: "🏺 VASO DE BARRO", alvo: "POPULAR" },
      ],
      alvosVisuais: [
        { nome: "INDÍGENA", cor: "#F97316", capacidade: 2 },
        { nome: "AFRICANA", cor: "#7C3AED", capacidade: 2 },
        { nome: "POPULAR", cor: "#22C55E", capacidade: 2 },
      ],
    },

    // FASE 4 — Lupa: galeria das matrizes
    {
      tipo: "lupa",
      titulo: "Fase 4 · Galeria das Culturas",
      instrucao: "Toque em cada obra e descubra sua história.",
      itens: [
        {
          nome: "Máscara Indígena",
          imagemUrl: mascaraIndigenaImg,
          rotulo: "🪶 INDÍGENA",
          descoberta:
            "MÁSCARA INDÍGENA — feita pelos povos originários com penas, tintas naturais e cores da floresta. Usada em rituais e festas.",
        },
        {
          nome: "Máscara Africana",
          imagemUrl: mascaraAfricanaImg,
          rotulo: "🌍 AFRICANA",
          descoberta:
            "MÁSCARA AFRICANA — com padrões tribais e cores fortes. Cada desenho conta uma história ancestral.",
        },
        {
          nome: "Tecido Africano",
          imagemUrl: tecidoColoridoImg,
          rotulo: "🧵 TECIDO",
          descoberta:
            "TECIDO AFRICANO — cheio de padrões geométricos coloridos. Cada estampa tem um significado especial.",
        },
        {
          nome: "Boneca de Pano",
          imagemUrl: bonecaPanoImg,
          rotulo: "🎪 POPULAR",
          descoberta:
            "BONECA DE PANO — arte popular brasileira, feita à mão com tecido e amor. Cada uma é única!",
        },
        {
          nome: "Vaso de Barro",
          imagemUrl: vasoCeramicaImg,
          rotulo: "🏺 POPULAR",
          descoberta:
            "VASO DE BARRO — feito e pintado à mão por artesãos brasileiros. Tem cores vivas e desenhos de flores.",
        },
      ],
      acerto: "🔬 Descoberta feita! Você conhece as três matrizes.",
    },

    // FASE 5 — Selecionar tudo que é arte POPULAR
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Detetive da Arte Popular",
      instrucao: "Marque TUDO que é arte POPULAR brasileira.",
      criterio: "É arte POPULAR 🎪",
      opcoes: [
        { nome: "Boneca de pano", imagemUrl: bonecaPanoImg, rotulo: "🎪 BONECA", correto: true },
        { nome: "Vaso de barro", imagemUrl: vasoCeramicaImg, rotulo: "🏺 VASO", correto: true },
        { nome: "Máscara indígena", imagemUrl: mascaraIndigenaImg, rotulo: "🪶 INDÍGENA", correto: false },
        { nome: "Máscara africana", imagemUrl: mascaraAfricanaImg, rotulo: "🌍 AFRICANA", correto: false },
        { nome: "Tecido africano", imagemUrl: tecidoColoridoImg, rotulo: "🧵 TECIDO", correto: false },
      ],
      acerto: "🕵️ Detetive da arte popular! Você achou todas.",
      erro: "Arte popular = feita pelo povo do dia a dia (boneca de pano, vaso).",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Máscara com penas é arte:",
        opcoes: ["Indígena", "Africana", "Popular"],
        correta: 0,
        explicacao: "Penas = arte dos povos originários.",
        visual: { tipo: "itens", imagemUrl: mascaraIndigenaImg, quantidade: 1, rotulo: "🪶" },
      },
      {
        pergunta: "Boneca de pano é arte:",
        opcoes: ["Popular", "Indígena", "Africana"],
        correta: 0,
        explicacao: "Boneca de pano = popular.",
        visual: { tipo: "itens", imagemUrl: bonecaPanoImg, quantidade: 1, rotulo: "🎪" },
      },
      {
        pergunta: "Máscara africana é arte:",
        opcoes: ["Africana", "Indígena", "Popular"],
        correta: 0,
        explicacao: "Máscara africana = matriz africana.",
        visual: { tipo: "itens", imagemUrl: mascaraAfricanaImg, quantidade: 1, rotulo: "🌍" },
      },
    ],
    medio: [
      {
        pergunta: "Vaso de barro pintado é arte:",
        opcoes: ["Popular", "Africana", "Indígena"],
        correta: 0,
        explicacao: "Vasos pintados = arte popular.",
        visual: { tipo: "itens", imagemUrl: vasoCeramicaImg, quantidade: 1, rotulo: "🏺" },
      },
      {
        pergunta: "Tecido com padrões geométricos coloridos é arte:",
        opcoes: ["Africana", "Popular", "Indígena"],
        correta: 0,
        explicacao: "Tecidos coloridos = tradição africana.",
        visual: { tipo: "itens", imagemUrl: tecidoColoridoImg, quantidade: 1, rotulo: "🧵" },
      },
      {
        pergunta: "As três matrizes da arte brasileira são:",
        opcoes: ["Indígena, africana e popular", "Só popular", "Só europeia"],
        correta: 0,
        explicacao: "Indígena + Africana + Popular.",
        visual: { tipo: "itens", imagemUrl: paletaImg, quantidade: 1, rotulo: "🎨" },
      },
    ],
    dificil: [
      {
        pergunta: "Uma pintura no corpo com traços naturais é arte:",
        opcoes: ["Indígena", "Popular", "Africana"],
        correta: 0,
        explicacao: "Pintura corporal = indígena.",
        visual: { tipo: "itens", imagemUrl: mascaraIndigenaImg, quantidade: 1, rotulo: "🪶" },
      },
      {
        pergunta: "Uma escultura africana feita em madeira é arte:",
        opcoes: ["Africana", "Popular", "Indígena"],
        correta: 0,
        explicacao: "Esculturas em madeira = tradição africana.",
        visual: { tipo: "itens", imagemUrl: esculturaImg, quantidade: 1, rotulo: "🌍" },
      },
      {
        pergunta: "As matrizes culturais brasileiras se misturam para formar:",
        opcoes: ["A arte do Brasil de hoje", "Só uma cor", "Nada"],
        correta: 0,
        explicacao: "As três matrizes se somam.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "🇧🇷" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica das Matrizes",
    objetivo:
      "As obras passam na esteira. Toque na bandeja da matriz certa antes que caiam!",
    tempoSegundos: 90,
    minAcertos: 10,
    categorias: [
      { nome: "INDÍGENA", cor: "#F97316", emoji: "🪶" },
      { nome: "AFRICANA", cor: "#7C3AED", emoji: "🌍" },
      { nome: "POPULAR", cor: "#22C55E", emoji: "🎪" },
    ],
    objetos: [
      { nome: "Máscara indígena", imagemUrl: mascaraIndigenaImg, categoria: "INDÍGENA" },
      { nome: "Pintura corporal", imagemUrl: quadroImg, categoria: "INDÍGENA" },
      { nome: "Máscara indígena 2", imagemUrl: mascaraIndigenaImg, categoria: "INDÍGENA" },
      { nome: "Máscara africana", imagemUrl: mascaraAfricanaImg, categoria: "AFRICANA" },
      { nome: "Tecido africano", imagemUrl: tecidoColoridoImg, categoria: "AFRICANA" },
      { nome: "Escultura africana", imagemUrl: esculturaImg, categoria: "AFRICANA" },
      { nome: "Boneca de pano", imagemUrl: bonecaPanoImg, categoria: "POPULAR" },
      { nome: "Vaso de barro", imagemUrl: vasoCeramicaImg, categoria: "POPULAR" },
      { nome: "Boneca 2", imagemUrl: bonecaPanoImg, categoria: "POPULAR" },
      { nome: "Flor pintada", imagemUrl: florImg, categoria: "POPULAR" },
      { nome: "Artista popular", imagemUrl: artistaImg, categoria: "POPULAR" },
      { nome: "Museu", imagemUrl: museuImg, categoria: "POPULAR" },
    ],
    acerto: "🏭 Fábrica das matrizes completa!",
  },

  missaoFamilia: {
    titulo: "Caça às Artes em Casa",
    instrucao:
      "Procurem em casa um objeto artesanal (boneca, vaso, tecido, máscara, prato pintado). Perguntem: quem fez? de qual povo veio? Contem essa história pro Brilha na próxima aula.",
  },
};

export default aula;
