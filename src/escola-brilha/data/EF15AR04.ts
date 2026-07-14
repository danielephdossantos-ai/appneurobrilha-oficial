import type { Aula } from "../types";
import { url as desenhoImg } from "@/assets/neuro-treino/objetos/desenho.png.asset.json";
import { url as colagemImg } from "@/assets/neuro-treino/objetos/colagem.png.asset.json";
import { url as esculturaImg } from "@/assets/neuro-treino/objetos/escultura.png.asset.json";
import { url as modelagemImg } from "@/assets/neuro-treino/objetos/modelagem.png.asset.json";
import { url as quadrinhosImg } from "@/assets/neuro-treino/objetos/quadrinhos.png.asset.json";
import { url as dobraduraImg } from "@/assets/neuro-treino/objetos/dobradura.png.asset.json";
import { url as pincelImg } from "@/assets/neuro-treino/objetos/pincel.png.asset.json";
import { url as tintaImg } from "@/assets/neuro-treino/objetos/tinta.png.asset.json";
import { url as paletaImg } from "@/assets/neuro-treino/objetos/paleta.png.asset.json";
import { url as quadroImg } from "@/assets/neuro-treino/objetos/quadro.png.asset.json";
import { url as artistaImg } from "@/assets/neuro-treino/objetos/artista.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";

/**
 * EF15AR04 — Arte · 1º Ano (adaptado, código compartilhado 1º–5º)
 * Missão: "Ateliê do Brilha".
 * Experimentar diferentes formas de expressão artística: desenho, pintura,
 * colagem, quadrinhos, dobradura, escultura, modelagem.
 */
const aula: Aula = {
  codigo: "EF15AR04",
  ano: "1º Ano",
  disciplina: "Arte",
  titulo: "Ateliê do Brilha",

  narrativa: {
    titulo: "Muitos Jeitos de Fazer Arte",
    contexto:
      "Brilha abriu a porta do ATELIÊ da artista Ana. Tinha lápis, tinta, papel, cola, argila, papéis coloridos… um monte de jeito diferente de criar!",
    problema:
      "'Cada ferramenta faz um tipo de arte diferente', disse Ana. 'Quer descobrir qual usar pra cada obra?'",
    convite: "Bora com o Brilha experimentar todas as formas de fazer arte?",
  },

  conhecimentosPrevios: [
    "Já ter desenhado ou pintado alguma vez.",
    "Já ter mexido em massinha ou papel.",
  ],

  missao:
    "Experimentar e reconhecer diferentes formas de expressão artística: desenho, pintura, colagem, quadrinhos, dobradura, escultura e modelagem.",

  objetivos: [
    "Reconhecer o DESENHO (feito com lápis, giz).",
    "Reconhecer a PINTURA (feita com tinta e pincel).",
    "Reconhecer a COLAGEM (feita com papéis colados).",
    "Reconhecer a DOBRADURA (feita dobrando papel).",
    "Reconhecer a ESCULTURA e a MODELAGEM (com argila, massinha).",
    "Perceber que cada técnica usa materiais diferentes.",
  ],

  motivacao:
    "Quando você conhece MUITOS jeitos de fazer arte, pode escolher o que combina com o que quer criar!",

  explicacao:
    "✏️ DESENHO — traços com lápis ou giz no papel.\n🎨 PINTURA — tinta e pincel dão cor.\n📄 COLAGEM — recortar e colar papéis coloridos.\n📔 QUADRINHOS — desenhos em sequência com balõezinhos.\n🕊️ DOBRADURA — dobrar papel até virar figura.\n🗿 ESCULTURA — moldar pedra ou madeira em 3D.\n🧱 MODELAGEM — moldar argila ou massinha com as mãos.",

  explicacoesNiveis: {
    nivel1: "Existem muitos jeitos de fazer arte, não só um.",
    nivel2: "Cada jeito usa um material: lápis, tinta, papel, argila…",
    nivel3: "Algumas artes são 2D (no papel) e outras são 3D (dá pra pegar).",
    nivel4: "Você pode misturar técnicas: pintar E colar na mesma obra.",
  },

  exemploResolvido: {
    enunciado: "Uma obra feita com massinha, moldada com as mãos. Qual técnica é?",
    passos: [
      "Massinha na mão → não é desenho nem pintura.",
      "Moldar com as mãos → é 3D.",
      "Isso é MODELAGEM.",
    ],
    resposta: "🧱 MODELAGEM. ✅",
  },

  atividadeGuiada: {
    enunciado: "Toque na COLAGEM.",
    resposta: "📄 Colagem — feita com papéis coloridos colados.",
    explicacao: "Colagem = recortar + colar pedaços de papel.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual dessas é uma COLAGEM?",
      opcoes: [
        { nome: "colagem", imagemUrl: colagemImg },
        { nome: "escultura", imagemUrl: esculturaImg },
        { nome: "desenho", imagemUrl: desenhoImg },
      ],
      respostaCerta: "colagem",
    },
  },

  exercicios: [
    {
      enunciado: "Com o que se faz DESENHO?",
      resposta: "✏️ Lápis ou giz no papel.",
      dica: "É a técnica dos traços.",
    },
    {
      enunciado: "Com o que se faz PINTURA?",
      resposta: "🎨 Tinta e pincel.",
      dica: "Precisa de cor líquida.",
    },
    {
      enunciado: "Uma obra 3D moldada com argila é:",
      resposta: "🧱 MODELAGEM.",
      dica: "As mãos moldam o material.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra a técnica de cada obra!",
    resposta: "Cada material faz um tipo de arte.",
    visual: {
      perguntas: [
        {
          pergunta: "Traços de lápis no papel é:",
          opcoes: ["✏️ DESENHO", "🎨 PINTURA", "🧱 MODELAGEM"],
          correta: 0,
          explicacao: "Lápis + papel = desenho.",
          visual: { tipo: "itens", imagemUrl: desenhoImg, quantidade: 1, rotulo: "✏️" },
        },
        {
          pergunta: "Tinta com pincel é:",
          opcoes: ["🎨 PINTURA", "✏️ DESENHO", "📄 COLAGEM"],
          correta: 0,
          explicacao: "Tinta + pincel = pintura.",
          visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "🎨" },
        },
        {
          pergunta: "Papéis coloridos colados é:",
          opcoes: ["📄 COLAGEM", "🕊️ DOBRADURA", "🧱 MODELAGEM"],
          correta: 0,
          explicacao: "Recortar + colar = colagem.",
          visual: { tipo: "itens", imagemUrl: colagemImg, quantidade: 1, rotulo: "📄" },
        },
        {
          pergunta: "Papel dobrado virando bichinho é:",
          opcoes: ["🕊️ DOBRADURA", "📄 COLAGEM", "🎨 PINTURA"],
          correta: 0,
          explicacao: "Dobrar papel = dobradura (origami).",
          visual: { tipo: "itens", imagemUrl: dobraduraImg, quantidade: 1, rotulo: "🕊️" },
        },
        {
          pergunta: "Massinha moldada com as mãos é:",
          opcoes: ["🧱 MODELAGEM", "🗿 ESCULTURA", "✏️ DESENHO"],
          correta: 0,
          explicacao: "Massinha + mãos = modelagem.",
          visual: { tipo: "itens", imagemUrl: modelagemImg, quantidade: 1, rotulo: "🧱" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "✏️ DESENHO = lápis no papel.",
      "🎨 PINTURA = tinta e pincel.",
      "📄 COLAGEM = papéis colados.",
      "🕊️ DOBRADURA = papel dobrado.",
      "🧱 MODELAGEM = argila/massinha moldada.",
      "🗿 ESCULTURA = pedra/madeira 3D.",
      "📔 QUADRINHOS = desenhos em sequência.",
    ],
    dica: "Olhe uma obra e pergunte: com QUE material foi feita?",
  },

  quiz: [
    {
      pergunta: "Traços de lápis no papel é:",
      opcoes: ["Desenho", "Escultura", "Colagem"],
      correta: 0,
      explicacao: "Lápis = desenho.",
      visual: { tipo: "itens", imagemUrl: desenhoImg, quantidade: 1, rotulo: "✏️" },
    },
    {
      pergunta: "Tinta com pincel é:",
      opcoes: ["Pintura", "Dobradura", "Modelagem"],
      correta: 0,
      explicacao: "Tinta = pintura.",
      visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "🎨" },
    },
    {
      pergunta: "Papel dobrado virando figura é:",
      opcoes: ["Dobradura", "Colagem", "Desenho"],
      correta: 0,
      explicacao: "Dobrar = dobradura.",
      visual: { tipo: "itens", imagemUrl: dobraduraImg, quantidade: 1, rotulo: "🕊️" },
    },
    {
      pergunta: "Massinha moldada é:",
      opcoes: ["Modelagem", "Pintura", "Quadrinhos"],
      correta: 0,
      explicacao: "Massinha = modelagem.",
      visual: { tipo: "itens", imagemUrl: modelagemImg, quantidade: 1, rotulo: "🧱" },
    },
    {
      pergunta: "Desenhos em sequência com balões é:",
      opcoes: ["Quadrinhos", "Colagem", "Escultura"],
      correta: 0,
      explicacao: "Sequência com balões = quadrinhos.",
      visual: { tipo: "itens", imagemUrl: quadrinhosImg, quantidade: 1, rotulo: "📔" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Artista do Ateliê! 🎁 Item desbloqueado: 🎨 Pincel Mágico. Missão em Família: escolham UMA técnica em casa (desenho, colagem, dobradura ou massinha) e criem uma obra juntos!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "A DOBRADURA de papel se chama ORIGAMI no Japão — e um origami de tsuru (garça) tem 30 dobras!",
  },

  interativas: [
    // FASE 1 — Reconhecer desenho
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Qual É o Desenho?",
      instrucao: "Toque no DESENHO — feito com lápis.",
      pergunta: "Qual é o DESENHO?",
      opcoes: [
        { nome: "DESENHO", imagemUrl: desenhoImg, rotulo: "✏️ DESENHO" },
        { nome: "ESCULTURA", imagemUrl: esculturaImg, rotulo: "🗿 ESCULTURA" },
        { nome: "MODELAGEM", imagemUrl: modelagemImg, rotulo: "🧱 MODELAGEM" },
      ],
      correta: 0,
      acerto: "✏️ Isso! Desenho é feito com traços de lápis.",
      erro: "Procure a obra feita com lápis.",
    },

    // FASE 2 — Reconhecer pintura (via pincel)
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Qual Faz Pintura?",
      instrucao: "Toque na ferramenta da PINTURA.",
      pergunta: "Com o que se faz PINTURA?",
      opcoes: [
        { nome: "PINCEL", imagemUrl: pincelImg, rotulo: "🎨 PINCEL" },
        { nome: "DOBRADURA", imagemUrl: dobraduraImg, rotulo: "🕊️ DOBRADURA" },
        { nome: "MODELAGEM", imagemUrl: modelagemImg, rotulo: "🧱 MODELAGEM" },
      ],
      correta: 0,
      acerto: "🎨 Isso! Pincel + tinta = pintura.",
      erro: "Procure o pincel.",
    },

    // FASE 3 — Arrastar: 2D vs 3D vs Papel
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Cada Técnica No Seu Grupo",
      instrucao: "Arraste cada obra pro grupo certo.",
      pares: [
        { item: "✏️ DESENHO", alvo: "NO PAPEL 2D" },
        { item: "🎨 PINTURA", alvo: "NO PAPEL 2D" },
        { item: "📔 QUADRINHOS", alvo: "NO PAPEL 2D" },
        { item: "📄 COLAGEM", alvo: "COM PAPEL" },
        { item: "🕊️ DOBRADURA", alvo: "COM PAPEL" },
        { item: "🗿 ESCULTURA", alvo: "3D COM MÃOS" },
        { item: "🧱 MODELAGEM", alvo: "3D COM MÃOS" },
      ],
      alvosVisuais: [
        { nome: "NO PAPEL 2D", cor: "#F472B6", capacidade: 3 },
        { nome: "COM PAPEL", cor: "#34D399", capacidade: 2 },
        { nome: "3D COM MÃOS", cor: "#FBBF24", capacidade: 2 },
      ],
    },

    // FASE 4 — Lupa: ateliê
    {
      tipo: "lupa",
      titulo: "Fase 4 · Dentro do Ateliê",
      instrucao: "Toque em cada obra e descubra a técnica.",
      itens: [
        {
          nome: "Desenho",
          imagemUrl: desenhoImg,
          rotulo: "✏️ DESENHO",
          descoberta:
            "DESENHO — feito com traços de lápis ou giz. É uma das técnicas mais antigas do mundo.",
        },
        {
          nome: "Pincel",
          imagemUrl: pincelImg,
          rotulo: "🎨 PINTURA",
          descoberta:
            "PINTURA — usa tinta e pincel. A tinta pode ser guache, aquarela ou tinta a óleo.",
        },
        {
          nome: "Colagem",
          imagemUrl: colagemImg,
          rotulo: "📄 COLAGEM",
          descoberta:
            "COLAGEM — recortar papéis coloridos e colar. Dá pra usar revistas, jornais e tecidos.",
        },
        {
          nome: "Dobradura",
          imagemUrl: dobraduraImg,
          rotulo: "🕊️ DOBRADURA",
          descoberta:
            "DOBRADURA — dobrar papel até virar uma figura. Também chamada de origami no Japão.",
        },
        {
          nome: "Escultura",
          imagemUrl: esculturaImg,
          rotulo: "🗿 ESCULTURA",
          descoberta:
            "ESCULTURA — obra 3D feita em pedra, madeira ou metal. Dá pra ver por todos os lados.",
        },
        {
          nome: "Modelagem",
          imagemUrl: modelagemImg,
          rotulo: "🧱 MODELAGEM",
          descoberta:
            "MODELAGEM — moldar argila ou massinha com as mãos. Depois pode ser pintada!",
        },
        {
          nome: "Quadrinhos",
          imagemUrl: quadrinhosImg,
          rotulo: "📔 QUADRINHOS",
          descoberta:
            "QUADRINHOS — desenhos em sequência que contam uma história, com balõezinhos de fala.",
        },
      ],
      acerto: "🔬 Descoberta feita! Você conhece todas as técnicas.",
    },

    // FASE 5 — Selecionar TUDO que é feito com PAPEL
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Detetive do Papel",
      instrucao: "Marque TUDO que é feito COM PAPEL.",
      criterio: "Usa PAPEL 📄",
      opcoes: [
        { nome: "Desenho", imagemUrl: desenhoImg, rotulo: "✏️ DESENHO", correto: true },
        { nome: "Colagem", imagemUrl: colagemImg, rotulo: "📄 COLAGEM", correto: true },
        { nome: "Dobradura", imagemUrl: dobraduraImg, rotulo: "🕊️ DOBRADURA", correto: true },
        { nome: "Quadrinhos", imagemUrl: quadrinhosImg, rotulo: "📔 QUADRINHOS", correto: true },
        { nome: "Escultura", imagemUrl: esculturaImg, rotulo: "🗿 ESCULTURA", correto: false },
        { nome: "Modelagem", imagemUrl: modelagemImg, rotulo: "🧱 MODELAGEM", correto: false },
      ],
      acerto: "🕵️ Detetive do papel! Você achou todas.",
      erro: "Papel: desenho, colagem, dobradura e quadrinhos.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Traços de lápis no papel é:",
        opcoes: ["Desenho", "Pintura", "Escultura"],
        correta: 0,
        explicacao: "Lápis = desenho.",
        visual: { tipo: "itens", imagemUrl: desenhoImg, quantidade: 1, rotulo: "✏️" },
      },
      {
        pergunta: "Papéis coloridos colados é:",
        opcoes: ["Colagem", "Pintura", "Modelagem"],
        correta: 0,
        explicacao: "Recortar + colar = colagem.",
        visual: { tipo: "itens", imagemUrl: colagemImg, quantidade: 1, rotulo: "📄" },
      },
      {
        pergunta: "Massinha moldada é:",
        opcoes: ["Modelagem", "Desenho", "Dobradura"],
        correta: 0,
        explicacao: "Massinha = modelagem.",
        visual: { tipo: "itens", imagemUrl: modelagemImg, quantidade: 1, rotulo: "🧱" },
      },
    ],
    medio: [
      {
        pergunta: "Tinta e pincel formam:",
        opcoes: ["Pintura", "Escultura", "Quadrinhos"],
        correta: 0,
        explicacao: "Tinta + pincel = pintura.",
        visual: { tipo: "itens", imagemUrl: tintaImg, quantidade: 1, rotulo: "🎨" },
      },
      {
        pergunta: "Papel dobrado que vira bichinho é:",
        opcoes: ["Dobradura", "Colagem", "Modelagem"],
        correta: 0,
        explicacao: "Dobrar = dobradura.",
        visual: { tipo: "itens", imagemUrl: dobraduraImg, quantidade: 1, rotulo: "🕊️" },
      },
      {
        pergunta: "Desenhos em sequência com balões é:",
        opcoes: ["Quadrinhos", "Escultura", "Pintura"],
        correta: 0,
        explicacao: "Sequência + balões = quadrinhos.",
        visual: { tipo: "itens", imagemUrl: quadrinhosImg, quantidade: 1, rotulo: "📔" },
      },
    ],
    dificil: [
      {
        pergunta: "Uma obra 3D em pedra ou madeira é:",
        opcoes: ["Escultura", "Pintura", "Colagem"],
        correta: 0,
        explicacao: "Pedra/madeira 3D = escultura.",
        visual: { tipo: "itens", imagemUrl: esculturaImg, quantidade: 1, rotulo: "🗿" },
      },
      {
        pergunta: "Qual dessas NÃO usa papel?",
        opcoes: ["Modelagem", "Colagem", "Dobradura"],
        correta: 0,
        explicacao: "Modelagem usa argila/massinha, não papel.",
        visual: { tipo: "itens", imagemUrl: modelagemImg, quantidade: 1, rotulo: "🧱" },
      },
      {
        pergunta: "Posso misturar 2 técnicas na mesma obra?",
        opcoes: ["Sim, é criatividade", "Não, é proibido", "Só um tipo por vez"],
        correta: 0,
        explicacao: "Misturar técnicas é ser criativo.",
        visual: { tipo: "itens", imagemUrl: paletaImg, quantidade: 1, rotulo: "🎨" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica do Ateliê",
    objetivo:
      "As obras passam na esteira. Toque na bandeja da técnica certa antes que caiam!",
    tempoSegundos: 90,
    minAcertos: 10,
    categorias: [
      { nome: "DESENHO/PINTURA", cor: "#F472B6", emoji: "✏️" },
      { nome: "PAPEL", cor: "#34D399", emoji: "📄" },
      { nome: "3D", cor: "#FBBF24", emoji: "🧱" },
    ],
    objetos: [
      { nome: "Desenho", imagemUrl: desenhoImg, categoria: "DESENHO/PINTURA" },
      { nome: "Pincel", imagemUrl: pincelImg, categoria: "DESENHO/PINTURA" },
      { nome: "Tinta", imagemUrl: tintaImg, categoria: "DESENHO/PINTURA" },
      { nome: "Paleta", imagemUrl: paletaImg, categoria: "DESENHO/PINTURA" },
      { nome: "Quadro pintado", imagemUrl: quadroImg, categoria: "DESENHO/PINTURA" },
      { nome: "Flor pintada", imagemUrl: florImg, categoria: "DESENHO/PINTURA" },
      { nome: "Colagem", imagemUrl: colagemImg, categoria: "PAPEL" },
      { nome: "Dobradura", imagemUrl: dobraduraImg, categoria: "PAPEL" },
      { nome: "Quadrinhos", imagemUrl: quadrinhosImg, categoria: "PAPEL" },
      { nome: "Escultura", imagemUrl: esculturaImg, categoria: "3D" },
      { nome: "Modelagem", imagemUrl: modelagemImg, categoria: "3D" },
      { nome: "Artista modelando", imagemUrl: artistaImg, categoria: "3D" },
    ],
    acerto: "🏭 Fábrica do ateliê completa!",
  },

  missaoFamilia: {
    titulo: "Ateliê em Casa",
    instrucao:
      "Escolham UMA técnica em casa (desenho, colagem, dobradura ou massinha) e criem uma obra juntos. Depois, mostrem pro Brilha e digam qual foi a técnica escolhida!",
  },
};

export default aula;
