import type { Aula } from "../types";
import pontoImg from "@/assets/neuro-treino/objetos/ponto.png";
import linhaImg from "@/assets/neuro-treino/objetos/linha.png";
import circuloImg from "@/assets/neuro-treino/objetos/circulo.png";
import quadradoImg from "@/assets/neuro-treino/objetos/quadrado.png";
import trianguloImg from "@/assets/neuro-treino/objetos/triangulo.png";
import arcoIrisImg from "@/assets/neuro-treino/objetos/arco-iris.png";
import paletaImg from "@/assets/neuro-treino/objetos/paleta.png";
import pincelImg from "@/assets/neuro-treino/objetos/pincel.png";
import tintaImg from "@/assets/neuro-treino/objetos/tinta.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import blocoImg from "@/assets/neuro-treino/objetos/bloco.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import carroImg from "@/assets/neuro-treino/objetos/carro.png";

/**
 * EF15AR02 — Arte · 1º Ano (adaptado, código compartilhado 1º–5º)
 * Missão do Dia: "Detetive dos Elementos Visuais".
 * Explorar e reconhecer elementos constitutivos das artes visuais:
 * PONTO, LINHA, FORMA e COR.
 */
const aula: Aula = {
  codigo: "EF15AR02",
  ano: "1º Ano",
  disciplina: "Arte",
  titulo: "Detetive dos Elementos Visuais",

  narrativa: {
    titulo: "O Segredo Dentro do Desenho",
    contexto:
      "Brilha voltou ao museu e a artista Ana mostrou uma coisa incrível: TODO desenho é feito de pedacinhos pequenos escondidos — pontos, linhas, formas e cores!",
    problema:
      "'Preciso de um detetive esperto pra encontrar esses pedacinhos em cada obra', disse Ana. 'Sem eles, nada existiria!'",
    convite:
      "Bora com o Brilha descobrir os SEGREDOS que se escondem em cada desenho?",
  },

  conhecimentosPrevios: [
    "Reconhecer cores básicas.",
    "Já ter feito riscos no papel.",
    "Reconhecer formas simples como círculo e quadrado.",
  ],

  missao:
    "Levar a criança a EXPLORAR e RECONHECER os elementos das artes visuais: ponto, linha, forma e cor.",

  objetivos: [
    "Reconhecer o PONTO como o menor elemento visual.",
    "Identificar diferentes tipos de LINHA (reta, curva, ondulada).",
    "Reconhecer FORMAS básicas: círculo, quadrado, triângulo.",
    "Identificar CORES primárias e o arco-íris.",
    "Perceber que toda obra é feita desses elementos juntos.",
  ],

  motivacao:
    "Quando você aprende os pedacinhos escondidos, começa a ver arte por todo lado — no chão, nas roupas, no céu!",

  explicacao:
    "🔴 PONTO — o menor pedacinho, uma marquinha pequena.\n➰ LINHA — vários pontos em fila; pode ser reta, curva ou ondulada.\n🔵 FORMA — quando a linha se fecha: círculo, quadrado, triângulo.\n🌈 COR — o que dá vida à obra; as principais são vermelho, azul e amarelo.",

  explicacoesNiveis: {
    nivel1: "Ponto é uma marquinha. Linha é vários pontos juntos.",
    nivel2: "Quando a linha se fecha, vira uma forma (círculo, quadrado, triângulo).",
    nivel3: "As cores mudam o que a gente sente na obra: quente ou fria, alegre ou calma.",
    nivel4: "Todo desenho tem pelo menos um desses elementos: ponto, linha, forma ou cor.",
  },

  exemploResolvido: {
    enunciado: "Um risco no papel que vai daqui até ali. Isso é o quê?",
    passos: [
      "Não é só uma marquinha → não é ponto.",
      "É uma marca comprida → é uma LINHA.",
      "Não fechou → não virou forma ainda.",
    ],
    resposta: "➰ LINHA. ✅",
  },

  atividadeGuiada: {
    enunciado: "Toque no CÍRCULO.",
    resposta: "🔵 O círculo — é uma forma redonda e fechada.",
    explicacao: "Círculo é uma linha curva que se encontra no começo.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual dessas figuras é um CÍRCULO?",
      opcoes: [
        { nome: "circulo", imagemUrl: circuloImg },
        { nome: "quadrado", imagemUrl: quadradoImg },
        { nome: "triangulo", imagemUrl: trianguloImg },
      ],
      respostaCerta: "circulo",
    },
  },

  exercicios: [
    {
      enunciado: "Qual é o MENOR elemento visual?",
      resposta: "🔴 O PONTO.",
      dica: "É uma marquinha bem pequena.",
    },
    {
      enunciado: "Uma FORMA de 3 pontas se chama:",
      resposta: "🔺 TRIÂNGULO.",
      dica: "Conte as pontas.",
    },
    {
      enunciado: "O que dá VIDA e ALEGRIA pra uma obra?",
      resposta: "🌈 A COR.",
      dica: "Vermelho, azul, amarelo…",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: encontre cada elemento visual!",
    resposta: "Cada obra é feita desses pedacinhos.",
    visual: {
      perguntas: [
        {
          pergunta: "Uma marquinha bem pequena é:",
          opcoes: ["🔴 PONTO", "➰ LINHA", "🔵 FORMA"],
          correta: 0,
          explicacao: "Ponto = menor elemento.",
          visual: { tipo: "itens", imagemUrl: pontoImg, quantidade: 1, rotulo: "🔴" },
        },
        {
          pergunta: "Um risco comprido no papel é:",
          opcoes: ["➰ LINHA", "🔴 PONTO", "🌈 COR"],
          correta: 0,
          explicacao: "Linha = vários pontos em fila.",
          visual: { tipo: "itens", imagemUrl: linhaImg, quantidade: 1, rotulo: "➰" },
        },
        {
          pergunta: "Uma figura redonda e fechada é:",
          opcoes: ["🔵 CÍRCULO", "🔺 TRIÂNGULO", "🟦 QUADRADO"],
          correta: 0,
          explicacao: "Círculo = redondo.",
          visual: { tipo: "itens", imagemUrl: circuloImg, quantidade: 1, rotulo: "🔵" },
        },
        {
          pergunta: "Uma forma com 3 pontas é:",
          opcoes: ["🔺 TRIÂNGULO", "🔵 CÍRCULO", "🟦 QUADRADO"],
          correta: 0,
          explicacao: "Triângulo = 3 lados.",
          visual: { tipo: "itens", imagemUrl: trianguloImg, quantidade: 1, rotulo: "🔺" },
        },
        {
          pergunta: "Vermelho, azul e amarelo são:",
          opcoes: ["🌈 CORES", "🔴 PONTOS", "🟦 FORMAS"],
          correta: 0,
          explicacao: "Cores primárias.",
          visual: { tipo: "itens", imagemUrl: arcoIrisImg, quantidade: 1, rotulo: "🌈" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🔴 PONTO = menor elemento visual.",
      "➰ LINHA = vários pontos em fila.",
      "🔵 FORMA = linha fechada (círculo, quadrado, triângulo).",
      "🌈 COR = dá vida à obra.",
      "🎨 Toda obra é feita desses elementos.",
    ],
    dica: "Olhe uma imagem qualquer e ache: tem ponto? tem linha? tem forma? tem cor?",
  },

  quiz: [
    {
      pergunta: "Qual é o menor elemento das artes visuais?",
      opcoes: ["Ponto", "Escultura", "Museu"],
      correta: 0,
      explicacao: "Ponto = a menor marquinha.",
      visual: { tipo: "itens", imagemUrl: pontoImg, quantidade: 1, rotulo: "🔴" },
    },
    {
      pergunta: "Uma LINHA é:",
      opcoes: ["Vários pontos em fila", "Uma pedra dura", "Uma cor forte"],
      correta: 0,
      explicacao: "Linha = pontos juntos.",
      visual: { tipo: "itens", imagemUrl: linhaImg, quantidade: 1, rotulo: "➰" },
    },
    {
      pergunta: "Um CÍRCULO é uma forma:",
      opcoes: ["Redonda e fechada", "Com 3 pontas", "Com 4 lados iguais"],
      correta: 0,
      explicacao: "Círculo = redondo.",
      visual: { tipo: "itens", imagemUrl: circuloImg, quantidade: 1, rotulo: "🔵" },
    },
    {
      pergunta: "As cores PRIMÁRIAS são:",
      opcoes: ["Vermelho, azul e amarelo", "Preto e cinza", "Só rosa"],
      correta: 0,
      explicacao: "Vermelho, azul e amarelo = primárias.",
      visual: { tipo: "itens", imagemUrl: paletaImg, quantidade: 1, rotulo: "🎨" },
    },
    {
      pergunta: "O QUADRADO tem quantos lados?",
      opcoes: ["4 lados iguais", "3 lados", "É redondo"],
      correta: 0,
      explicacao: "Quadrado tem 4 lados iguais.",
      visual: { tipo: "itens", imagemUrl: quadradoImg, quantidade: 1, rotulo: "🟦" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Detetive dos Elementos! 🎁 Item desbloqueado: 🌈 Arco-íris de Bolso. Missão em Família: procurem em casa objetos com cada forma (círculo, quadrado, triângulo)!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Um artista chamado Kandinsky pintava quadros só com pontos, linhas e formas coloridas — sem desenhar coisas reais!",
  },

  interativas: [
    // FASE 1 — Reconhecer o ponto
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Qual É o Ponto?",
      instrucao: "Toque no PONTO — o menor pedacinho.",
      pergunta: "Qual é o PONTO?",
      opcoes: [
        { nome: "PONTO", imagemUrl: pontoImg, rotulo: "🔴 PONTO" },
        { nome: "LINHA", imagemUrl: linhaImg, rotulo: "➰ LINHA" },
        { nome: "CIRCULO", imagemUrl: circuloImg, rotulo: "🔵 CÍRCULO" },
      ],
      correta: 0,
      acerto: "🔴 Isso! O ponto é a menor marquinha.",
      erro: "Procure a menor marquinha.",
    },

    // FASE 2 — Reconhecer a linha
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Qual É a Linha?",
      instrucao: "Toque na LINHA — um risco comprido.",
      pergunta: "Qual é a LINHA?",
      opcoes: [
        { nome: "LINHA", imagemUrl: linhaImg, rotulo: "➰ LINHA" },
        { nome: "QUADRADO", imagemUrl: quadradoImg, rotulo: "🟦 QUADRADO" },
        { nome: "PONTO", imagemUrl: pontoImg, rotulo: "🔴 PONTO" },
      ],
      correta: 0,
      acerto: "➰ Isso! A linha é comprida, feita de vários pontos.",
      erro: "Procure o risco comprido.",
    },

    // FASE 3 — Arrastar: separar formas x cores x elementos
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Cada Um No Seu Grupo",
      instrucao: "Arraste cada elemento pro grupo certo.",
      pares: [
        { item: "🔴 PONTO", alvo: "ELEMENTO" },
        { item: "➰ LINHA", alvo: "ELEMENTO" },
        { item: "🔵 CÍRCULO", alvo: "FORMA" },
        { item: "🟦 QUADRADO", alvo: "FORMA" },
        { item: "🔺 TRIÂNGULO", alvo: "FORMA" },
        { item: "🌈 ARCO-ÍRIS", alvo: "COR" },
        { item: "🎨 PALETA", alvo: "COR" },
      ],
      alvosVisuais: [
        { nome: "ELEMENTO", cor: "#F472B6", capacidade: 2 },
        { nome: "FORMA", cor: "#34D399", capacidade: 3 },
        { nome: "COR", cor: "#FBBF24", capacidade: 2 },
      ],
    },

    // FASE 4 — Lupa: laboratório dos elementos
    {
      tipo: "lupa",
      titulo: "Fase 4 · Laboratório dos Elementos",
      instrucao: "Toque em cada elemento e descubra o que ele é.",
      itens: [
        {
          nome: "Ponto",
          imagemUrl: pontoImg,
          rotulo: "🔴 PONTO",
          descoberta:
            "Este é o PONTO — o menor elemento visual. Uma marquinha pequenininha que dá início a tudo.",
        },
        {
          nome: "Linha",
          imagemUrl: linhaImg,
          rotulo: "➰ LINHA",
          descoberta:
            "Esta é a LINHA — vários pontos em fila. Pode ser reta, curva ou ondulada como esta.",
        },
        {
          nome: "Círculo",
          imagemUrl: circuloImg,
          rotulo: "🔵 CÍRCULO",
          descoberta:
            "Este é o CÍRCULO — uma linha curva que se encontra. Redondo e fechado, como o Sol!",
        },
        {
          nome: "Quadrado",
          imagemUrl: quadradoImg,
          rotulo: "🟦 QUADRADO",
          descoberta:
            "Este é o QUADRADO — tem 4 lados iguais e 4 cantinhos. Parece uma janela.",
        },
        {
          nome: "Triângulo",
          imagemUrl: trianguloImg,
          rotulo: "🔺 TRIÂNGULO",
          descoberta:
            "Este é o TRIÂNGULO — tem 3 lados e 3 pontas. Parece o telhado de uma casinha.",
        },
        {
          nome: "Arco-íris",
          imagemUrl: arcoIrisImg,
          rotulo: "🌈 CORES",
          descoberta:
            "Estas são as CORES — vermelho, laranja, amarelo, verde, azul, roxo. Elas dão vida a tudo!",
        },
      ],
      acerto: "🔬 Descoberta feita! Você conhece todos os elementos visuais.",
    },

    // FASE 5 — Selecionar tudo que é FORMA
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Detetive das Formas",
      instrucao: "Marque TUDO que é uma FORMA (linha fechada).",
      criterio: "É uma FORMA 🔵",
      opcoes: [
        { nome: "Círculo", imagemUrl: circuloImg, rotulo: "🔵 CÍRCULO", correto: true },
        { nome: "Quadrado", imagemUrl: quadradoImg, rotulo: "🟦 QUADRADO", correto: true },
        { nome: "Triângulo", imagemUrl: trianguloImg, rotulo: "🔺 TRIÂNGULO", correto: true },
        { nome: "Ponto", imagemUrl: pontoImg, rotulo: "🔴 PONTO", correto: false },
        { nome: "Linha", imagemUrl: linhaImg, rotulo: "➰ LINHA", correto: false },
        { nome: "Arco-íris", imagemUrl: arcoIrisImg, rotulo: "🌈 CORES", correto: false },
      ],
      acerto: "🕵️ Detetive das formas! Você achou todas.",
      erro: "Formas são linhas FECHADAS: círculo, quadrado, triângulo.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "PONTO é:",
        opcoes: ["Uma marquinha pequena", "Um risco comprido", "Uma cor forte"],
        correta: 0,
        explicacao: "Ponto = menor marca.",
        visual: { tipo: "itens", imagemUrl: pontoImg, quantidade: 1, rotulo: "🔴" },
      },
      {
        pergunta: "CÍRCULO é uma forma:",
        opcoes: ["Redonda", "De 3 pontas", "De 4 lados"],
        correta: 0,
        explicacao: "Círculo = redondo.",
        visual: { tipo: "itens", imagemUrl: circuloImg, quantidade: 1, rotulo: "🔵" },
      },
      {
        pergunta: "As COREs no arco-íris são:",
        opcoes: ["Muitas e coloridas", "Só preto", "Só branco"],
        correta: 0,
        explicacao: "Arco-íris tem várias cores.",
        visual: { tipo: "itens", imagemUrl: arcoIrisImg, quantidade: 1, rotulo: "🌈" },
      },
    ],
    medio: [
      {
        pergunta: "TRIÂNGULO tem quantos lados?",
        opcoes: ["3", "4", "Nenhum"],
        correta: 0,
        explicacao: "Triângulo = 3 lados.",
        visual: { tipo: "itens", imagemUrl: trianguloImg, quantidade: 1, rotulo: "🔺" },
      },
      {
        pergunta: "QUADRADO tem quantos lados iguais?",
        opcoes: ["4", "3", "1"],
        correta: 0,
        explicacao: "Quadrado = 4 lados iguais.",
        visual: { tipo: "itens", imagemUrl: quadradoImg, quantidade: 1, rotulo: "🟦" },
      },
      {
        pergunta: "LINHA é feita de:",
        opcoes: ["Vários pontos em fila", "Só cor", "Só forma"],
        correta: 0,
        explicacao: "Linha = pontos juntos.",
        visual: { tipo: "itens", imagemUrl: linhaImg, quantidade: 1, rotulo: "➰" },
      },
    ],
    dificil: [
      {
        pergunta: "Quando a LINHA se fecha, ela vira:",
        opcoes: ["Uma forma", "Um ponto", "Uma cor"],
        correta: 0,
        explicacao: "Linha fechada = forma.",
        visual: { tipo: "itens", imagemUrl: circuloImg, quantidade: 1, rotulo: "🔵" },
      },
      {
        pergunta: "Cores PRIMÁRIAS são:",
        opcoes: ["Vermelho, azul e amarelo", "Preto e branco", "Só cinza"],
        correta: 0,
        explicacao: "Vermelho, azul, amarelo.",
        visual: { tipo: "itens", imagemUrl: paletaImg, quantidade: 1, rotulo: "🎨" },
      },
      {
        pergunta: "Toda obra tem pelo menos:",
        opcoes: [
          "Ponto, linha, forma ou cor",
          "Só música",
          "Só palavras",
        ],
        correta: 0,
        explicacao: "Os 4 elementos visuais são a base.",
        visual: { tipo: "itens", imagemUrl: arcoIrisImg, quantidade: 1, rotulo: "🌈" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica dos Elementos",
    objetivo:
      "Os elementos passam na esteira. Toque na bandeja certa antes que caiam!",
    tempoSegundos: 90,
    minAcertos: 10,
    categorias: [
      { nome: "PONTO/LINHA", cor: "#F472B6", emoji: "🔴" },
      { nome: "FORMA", cor: "#34D399", emoji: "🔵" },
      { nome: "COR", cor: "#FBBF24", emoji: "🌈" },
    ],
    objetos: [
      { nome: "Ponto", imagemUrl: pontoImg, categoria: "PONTO/LINHA" },
      { nome: "Linha", imagemUrl: linhaImg, categoria: "PONTO/LINHA" },
      { nome: "Círculo", imagemUrl: circuloImg, categoria: "FORMA" },
      { nome: "Quadrado", imagemUrl: quadradoImg, categoria: "FORMA" },
      { nome: "Triângulo", imagemUrl: trianguloImg, categoria: "FORMA" },
      { nome: "Bola", imagemUrl: bolaImg, categoria: "FORMA" },
      { nome: "Bloco", imagemUrl: blocoImg, categoria: "FORMA" },
      { nome: "Coração", imagemUrl: coracaoImg, categoria: "FORMA" },
      { nome: "Estrela", imagemUrl: estrelaImg, categoria: "FORMA" },
      { nome: "Arco-íris", imagemUrl: arcoIrisImg, categoria: "COR" },
      { nome: "Paleta", imagemUrl: paletaImg, categoria: "COR" },
      { nome: "Tinta", imagemUrl: tintaImg, categoria: "COR" },
      { nome: "Pincel", imagemUrl: pincelImg, categoria: "COR" },
      { nome: "Flor colorida", imagemUrl: florImg, categoria: "COR" },
      { nome: "Sol", imagemUrl: solImg, categoria: "COR" },
    ],
    acerto: "🏭 Fábrica dos elementos completa!",
  },

  missaoFamilia: {
    titulo: "Caça aos Elementos em Casa",
    instrucao:
      "Com um familiar, procurem em casa: 1 objeto REDONDO (círculo), 1 QUADRADO, 1 com PONTOS ou LISTRAS e 1 bem COLORIDO. Tire foto ou desenhem o que encontraram!",
    permitirFoto: true,
    registros: [
      { label: "Que objeto REDONDO achamos?", tipo: "texto" },
      { label: "Que objeto QUADRADO achamos?", tipo: "texto" },
      { label: "Que objeto COLORIDO achamos?", tipo: "texto" },
    ],
  },

  proximaHabilidade: {
    codigo: "EF15AR03",
  },
};

// avoid unused import warnings
void livroImg;
void carroImg;

export default aula;
