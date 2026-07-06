import type { Aula } from "../types";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import lataImg from "@/assets/neuro-treino/objetos/lata.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import blocoImg from "@/assets/neuro-treino/objetos/bloco.png";
import pincelImg from "@/assets/neuro-treino/objetos/pincel.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import moedaImg from "@/assets/neuro-treino/objetos/moeda.png";
import tamborImg from "@/assets/neuro-treino/objetos/tambor.png";
import chocalhoImg from "@/assets/neuro-treino/objetos/chocalho.png";
import dadoImg from "@/assets/neuro-treino/objetos/dado.png";
import tintaImg from "@/assets/neuro-treino/objetos/tinta.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import carroImg from "@/assets/neuro-treino/objetos/carro.png";
import bauImg from "@/assets/neuro-treino/objetos/bau.png";

/**
 * EF01CI02 — Ciências · 1º Ano
 * Missão do Dia: "Detetives dos Materiais".
 * Observar, comparar e identificar materiais do cotidiano
 * (madeira, papel, plástico, metal, tecido).
 */
const aula: Aula = {
  codigo: "EF01CI02",
  ano: "1º Ano",
  disciplina: "Ciências",
  titulo: "Detetives dos Materiais",

  narrativa: {
    titulo: "Detetives dos Materiais",
    contexto:
      "Brilha achou um baú misterioso na Floresta Encantada. Dentro dele tem objetos de vários materiais — mas as etiquetas sumiram!",
    problema:
      "Cada cadeado do baú só abre quando alguém descobre do que aquele objeto é feito.",
    convite:
      "Bora ser detetive dos materiais? Observar, tocar, comparar e investigar com o Brilha!",
  },

  conhecimentosPrevios: [
    "Reconhecer objetos do dia a dia.",
    "Saber comparar textura (macio/duro).",
    "Identificar cores e formas simples.",
  ],

  missao:
    "Levar a criança a observar, comparar e identificar materiais no cotidiano, reconhecendo suas características por meio da investigação.",

  objetivos: [
    "Identificar diferentes materiais presentes no cotidiano.",
    "Comparar textura, dureza e flexibilidade.",
    "Reconhecer que objetos podem ser feitos de materiais diferentes.",
    "Desenvolver a observação e a investigação científica.",
    "Registrar descobertas simples.",
  ],

  motivacao:
    "Um bom cientista observa, toca, compara e investiga — hoje você é detetive dos materiais!",

  explicacao:
    "🥄 METAL — resistente e duro. Ex.: colher, moeda, lata.\n📚 PAPEL — leve, dobra e rasga. Ex.: livro, caderno.\n🧴 PLÁSTICO — leve e flexível. Ex.: garrafa, bola.\n🪵 MADEIRA — dura e vem das árvores. Ex.: mesa, lápis.\n🧵 TECIDO — macio e dobrável. Ex.: camiseta, ursinho.\n\nObjetos diferentes podem ser feitos do MESMO material.\nUm mesmo objeto pode existir em versões com materiais DIFERENTES.",

  explicacoesNiveis: {
    nivel1:
      "Material é AQUILO DE QUE UMA COISA É FEITA (madeira, papel, plástico, metal, tecido).",
    nivel2:
      "Cada material tem características: duro/macio, pesado/leve, dobra/não dobra.",
    nivel3:
      "Um objeto pode ser feito de vários materiais (ex.: carro tem metal + plástico + tecido).",
    nivel4:
      "Cientistas descrevem os materiais pra escolher o melhor pra cada uso.",
  },

  exemploResolvido: {
    enunciado: "De que material é feito o LIVRO?",
    passos: [
      "Como é a superfície? Fina, dobra fácil, rasga.",
      "É pesado como metal? Não.",
      "Isso mostra que o material é PAPEL.",
    ],
    resposta: "📚 O livro é feito de PAPEL. ✅",
  },

  atividadeGuiada: {
    enunciado: "Toque no objeto de METAL.",
    resposta: "🥫 LATA — feita de metal.",
    explicacao:
      "A lata é dura, brilhante e resistente. Isso é característica do METAL.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é de metal?",
      opcoes: [
        { nome: "lata", imagemUrl: lataImg },
        { nome: "ursinho", imagemUrl: ursinhoImg },
        { nome: "livro", imagemUrl: livroImg },
      ],
      respostaCerta: "lata",
    },
  },

  exercicios: [
    {
      enunciado: "De que é feito o URSINHO?",
      resposta: "🧵 TECIDO.",
      dica: "É macio e dobra fácil.",
    },
    {
      enunciado: "De que é feito o LIVRO?",
      resposta: "📚 PAPEL.",
      dica: "Dobra, rasga e é leve.",
    },
    {
      enunciado: "De que é feita a BOLA?",
      resposta: "🧴 PLÁSTICO (ou borracha).",
      dica: "É leve e quica.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: mostre que já é detetive dos materiais!",
    resposta: "Cada material tem características que ajudam a identificar.",
    visual: {
      perguntas: [
        {
          pergunta: "Uma GARRAFA pode ser feita de:",
          opcoes: ["🧴 PLÁSTICO", "🧶 ALGODÃO", "🪨 PEDRA"],
          correta: 0,
          explicacao: "A maioria das garrafas é de plástico — leve e resistente.",
          visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "🧴" },
        },
        {
          pergunta: "Qual objeto normalmente é feito de PAPEL?",
          opcoes: ["📚 LIVRO", "🍳 PANELA", "🥃 COPO DE VIDRO"],
          correta: 0,
          explicacao: "Livros são feitos de folhas de papel.",
          visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📚" },
        },
        {
          pergunta: "Qual material é mais MACIO?",
          opcoes: ["🧵 TECIDO", "🔩 METAL", "🪨 PEDRA"],
          correta: 0,
          explicacao: "Tecido é macio; metal e pedra são duros.",
          visual: { tipo: "itens", imagemUrl: ursinhoImg, quantidade: 1, rotulo: "🧸" },
        },
        {
          pergunta: "O cientista compara os materiais pra:",
          opcoes: [
            "Descobrir suas características",
            "Decorar nomes",
            "Contar números",
          ],
          correta: 0,
          explicacao:
            "Comparar ajuda a entender o que cada material faz melhor.",
          visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "🔍" },
        },
        {
          pergunta: "Hoje você aprendeu a:",
          opcoes: [
            "Identificar materiais dos objetos",
            "Apenas desenhar",
            "Apenas escrever",
          ],
          correta: 0,
          explicacao:
            "Aprendeu a reconhecer materiais dos objetos do dia a dia.",
          visual: { tipo: "itens", imagemUrl: bauImg, quantidade: 1, rotulo: "🧰" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🪵 MADEIRA — dura, vem das árvores.",
      "📚 PAPEL — dobra e rasga.",
      "🧴 PLÁSTICO — leve e flexível.",
      "🔩 METAL — duro e resistente.",
      "🧵 TECIDO — macio e dobrável.",
    ],
    dica:
      "Antes de responder, pense: o objeto é duro ou macio? Dobra? É pesado ou leve?",
  },

  quiz: [
    {
      pergunta: "Uma garrafa pode ser feita de:",
      opcoes: ["🧴 PLÁSTICO", "🧶 ALGODÃO", "🪨 PEDRA"],
      correta: 0,
      explicacao: "A garrafa comum é de plástico.",
    },
    {
      pergunta: "Qual objeto normalmente é feito de papel?",
      opcoes: ["📚 LIVRO", "🍳 PANELA", "🥃 COPO DE VIDRO"],
      correta: 0,
      explicacao: "Livro é feito de folhas de papel.",
    },
    {
      pergunta: "Qual material é mais macio?",
      opcoes: ["🧵 TECIDO", "🔩 METAL", "🪨 PEDRA"],
      correta: 0,
      explicacao: "Tecido é macio.",
    },
    {
      pergunta: "O cientista compara os materiais pra:",
      opcoes: [
        "Descobrir suas características",
        "Decorar nomes",
        "Contar números",
      ],
      correta: 0,
      explicacao: "Comparar revela as características.",
    },
    {
      pergunta: "Hoje você aprendeu a:",
      opcoes: [
        "Identificar materiais dos objetos",
        "Apenas desenhar",
        "Apenas escrever",
      ],
      correta: 0,
      explicacao: "Aprendeu a identificar materiais.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Especialista em Materiais! 🎁 Item desbloqueado: 🧰 Caixa de Ferramentas do Cientista. Missão em Família: procurem em casa 2 objetos de cada material e registrem no Diário do Cientista.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Objetos diferentes podem ser feitos do MESMO material — e um mesmo objeto pode existir em versões feitas de materiais DIFERENTES!",
  },

  interativas: [
    // FASE 1 — Descubra o Material
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Descubra o Material",
      instrucao: "Toque no objeto feito do material pedido.",
      pergunta: "Qual objeto é feito de MADEIRA?",
      opcoes: [
        { nome: "BLOCO", imagemUrl: blocoImg, rotulo: "🪵 BLOCO" },
        { nome: "LIVRO", imagemUrl: livroImg, rotulo: "📚 LIVRO" },
        { nome: "URSINHO", imagemUrl: ursinhoImg, rotulo: "🧸 URSINHO" },
      ],
      correta: 0,
      acerto: "🪵 Boa! O bloco é de madeira — dura e vem das árvores.",
      erro: "Pense em algo duro que veio de árvore.",
    },

    // FASE 2 — Compare
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Compare",
      instrucao: "Olhe as duas figuras. Qual é MAIS MACIO?",
      pergunta: "Qual é MAIS MACIO?",
      opcoes: [
        { nome: "URSINHO", imagemUrl: ursinhoImg, rotulo: "🧸 URSINHO" },
        { nome: "LIVRO", imagemUrl: livroImg, rotulo: "📚 LIVRO" },
      ],
      correta: 0,
      acerto: "🧸 Isso! O ursinho é de tecido — bem macio pra abraçar.",
      erro: "Pense: qual você aperta e afunda?",
    },

    // FASE 3 — Classifique
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Classifique",
      instrucao: "Arraste cada objeto pro material certo.",
      pares: [
        { item: "🪵 BLOCO", alvo: "MADEIRA" },
        { item: "🖌️ PINCEL", alvo: "MADEIRA" },
        { item: "📚 LIVRO", alvo: "PAPEL" },
        { item: "🎁 PRESENTE", alvo: "PAPEL" },
        { item: "🎈 BALÃO", alvo: "PLÁSTICO" },
        { item: "🧸 URSINHO", alvo: "TECIDO" },
      ],
      alvosVisuais: [
        { nome: "MADEIRA", cor: "#A16207", capacidade: 2 },
        { nome: "PAPEL", cor: "#FBBF24", capacidade: 2 },
        { nome: "PLÁSTICO", cor: "#22D3EE", capacidade: 1 },
        { nome: "TECIDO", cor: "#F472B6", capacidade: 1 },
      ],
    },

    // FASE 4 — Laboratório dos Materiais (reaproveita a lupa)
    {
      tipo: "lupa",
      titulo: "Fase 4 · Laboratório dos Materiais",
      instrucao:
        "Toque em cada material pra descobrir textura, dureza e flexibilidade.",
      itens: [
        {
          nome: "Ursinho",
          imagemUrl: ursinhoImg,
          rotulo: "🧸 TECIDO",
          descoberta:
            "É macio, dobra fácil e absorve água. Tecido é feito de fios.",
        },
        {
          nome: "Lata",
          imagemUrl: lataImg,
          rotulo: "🥫 METAL",
          descoberta:
            "É dura, brilhante e resistente. Metal aguenta bem calor e batidas.",
        },
        {
          nome: "Livro",
          imagemUrl: livroImg,
          rotulo: "📚 PAPEL",
          descoberta:
            "É leve, dobra e rasga. O papel vem de árvores transformadas.",
        },
        {
          nome: "Bola",
          imagemUrl: bolaImg,
          rotulo: "⚽ PLÁSTICO",
          descoberta:
            "É leve, flexível e quica. O plástico pode ser moldado em vários formatos.",
        },
      ],
      acerto:
        "🔬 Laboratório completo! Você já reconhece a cara de cada material.",
    },

    // FASE 5 — Mochila do Cientista (novo tipo: selecionarMultiplos)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Mochila do Cientista",
      instrucao:
        "Brilha abriu a mochila. Guarde SÓ os objetos do material pedido.",
      criterio: "Encontre objetos de MADEIRA 🪵",
      opcoes: [
        { nome: "Bloco", imagemUrl: blocoImg, rotulo: "🪵 BLOCO", correto: true },
        { nome: "Pincel", imagemUrl: pincelImg, rotulo: "🖌️ PINCEL", correto: true },
        { nome: "Baú", imagemUrl: bauImg, rotulo: "🧰 BAÚ", correto: true },
        { nome: "Livro", imagemUrl: livroImg, rotulo: "📚 LIVRO", correto: false },
        { nome: "Lata", imagemUrl: lataImg, rotulo: "🥫 LATA", correto: false },
        { nome: "Ursinho", imagemUrl: ursinhoImg, rotulo: "🧸 URSINHO", correto: false },
      ],
      acerto:
        "🎒 Mochila cheia de MADEIRA! Detetive dos materiais aprovado.",
      erro: "Esse não é de madeira. Pense: é duro e veio das árvores?",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Do que é feito o URSINHO?",
        opcoes: ["🧵 TECIDO", "🔩 METAL", "📚 PAPEL"],
        correta: 0,
        explicacao: "Ursinho é macio — feito de tecido.",
        visual: { tipo: "itens", imagemUrl: ursinhoImg, quantidade: 1, rotulo: "🧸" },
      },
      {
        pergunta: "Do que é feito o LIVRO?",
        opcoes: ["📚 PAPEL", "🔩 METAL", "🧵 TECIDO"],
        correta: 0,
        explicacao: "Livro é feito de folhas de papel.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📚" },
      },
      {
        pergunta: "Do que é feita a BOLA?",
        opcoes: ["🧴 PLÁSTICO", "🪨 PEDRA", "📚 PAPEL"],
        correta: 0,
        explicacao: "Bola comum é de plástico ou borracha.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "⚽" },
      },
    ],
    medio: [
      {
        pergunta: "Qual é o material mais DURO?",
        opcoes: ["🔩 METAL", "🧵 TECIDO", "📚 PAPEL"],
        correta: 0,
        explicacao: "Metal é o mais resistente e duro.",
        visual: { tipo: "itens", imagemUrl: lataImg, quantidade: 1, rotulo: "🥫" },
      },
      {
        pergunta: "Qual objeto DOBRA fácil?",
        opcoes: ["📚 LIVRO (papel)", "🔩 LATA (metal)", "🪵 BLOCO (madeira)"],
        correta: 0,
        explicacao: "Papel dobra e rasga fácil.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📚" },
      },
      {
        pergunta: "Um MESMO objeto (ex.: copo) pode ser feito de:",
        opcoes: [
          "Vários materiais diferentes",
          "Só de metal",
          "Só de papel",
        ],
        correta: 0,
        explicacao: "Copo existe em vidro, plástico, papel, metal…",
        visual: { tipo: "itens", imagemUrl: dadoImg, quantidade: 1, rotulo: "🥃" },
      },
    ],
    dificil: [
      {
        pergunta: "Qual característica é do METAL?",
        opcoes: ["Duro e resistente", "Macio e dobra", "Rasga fácil"],
        correta: 0,
        explicacao: "Metal é duro e resistente.",
        visual: { tipo: "itens", imagemUrl: moedaImg, quantidade: 1, rotulo: "🪙" },
      },
      {
        pergunta: "Qual característica é do PAPEL?",
        opcoes: ["Leve, dobra e rasga", "Duro como pedra", "Não muda de forma"],
        correta: 0,
        explicacao: "Papel é leve, dobra e rasga.",
        visual: { tipo: "itens", imagemUrl: presenteImg, quantidade: 1, rotulo: "🎁" },
      },
      {
        pergunta: "O que o CIENTISTA faz depois de comparar?",
        opcoes: ["REGISTRA a descoberta", "Esquece", "Nada"],
        correta: 0,
        explicacao: "Registra pra guardar a descoberta.",
        visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "📓" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica dos Materiais",
    objetivo:
      "Os objetos passam na esteira. Toque no recipiente da categoria certa antes que o objeto saia da tela!",
    tempoSegundos: 90,
    minAcertos: 15,
    categorias: [
      { nome: "MADEIRA", cor: "#A16207", emoji: "🪵" },
      { nome: "METAL", cor: "#9CA3AF", emoji: "🔩" },
      { nome: "PLÁSTICO", cor: "#22D3EE", emoji: "🧴" },
      { nome: "PAPEL", cor: "#FBBF24", emoji: "📚" },
      { nome: "TECIDO", cor: "#F472B6", emoji: "🧵" },
    ],
    objetos: [
      { nome: "Bloco", imagemUrl: blocoImg, categoria: "MADEIRA" },
      { nome: "Pincel", imagemUrl: pincelImg, categoria: "MADEIRA" },
      { nome: "Casa", imagemUrl: casaImg, categoria: "MADEIRA" },
      { nome: "Baú", imagemUrl: bauImg, categoria: "MADEIRA" },
      { nome: "Lata", imagemUrl: lataImg, categoria: "METAL" },
      { nome: "Moeda", imagemUrl: moedaImg, categoria: "METAL" },
      { nome: "Tambor", imagemUrl: tamborImg, categoria: "METAL" },
      { nome: "Bola", imagemUrl: bolaImg, categoria: "PLÁSTICO" },
      { nome: "Dado", imagemUrl: dadoImg, categoria: "PLÁSTICO" },
      { nome: "Balão", imagemUrl: balaoImg, categoria: "PLÁSTICO" },
      { nome: "Tinta", imagemUrl: tintaImg, categoria: "PLÁSTICO" },
      { nome: "Carro", imagemUrl: carroImg, categoria: "PLÁSTICO" },
      { nome: "Chocalho", imagemUrl: chocalhoImg, categoria: "PLÁSTICO" },
      { nome: "Livro", imagemUrl: livroImg, categoria: "PAPEL" },
      { nome: "Presente", imagemUrl: presenteImg, categoria: "PAPEL" },
      { nome: "Ursinho", imagemUrl: ursinhoImg, categoria: "TECIDO" },
    ],
    acerto:
      "🏭 Fábrica em produção total! Você é Especialista em Materiais.",
  },

  missaoFamilia: {
    titulo: "Detetives em Casa",
    instrucao:
      "Com um familiar, encontrem 2 objetos de cada material (madeira, plástico, metal, papel e tecido). Depois registrem aqui embaixo. Podem tirar uma foto de um dos objetos!",
    permitirFoto: true,
    registros: [
      { label: "Nome do objeto", tipo: "texto" },
      { label: "De que material é feito?", tipo: "texto" },
      { label: "Onde foi encontrado?", tipo: "texto" },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01CI03",
  },
};

export default aula;
