import type { Aula } from "../types";

import circuloImg from "@/assets/neuro-treino/objetos/circulo.png";
import quadradoImg from "@/assets/neuro-treino/objetos/quadrado.png";
import retanguloImg from "@/assets/neuro-treino/objetos/retangulo.png";
import trianguloImg from "@/assets/neuro-treino/objetos/triangulo.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import moedaImg from "@/assets/neuro-treino/objetos/moeda.png";
import pizzaImg from "@/assets/neuro-treino/objetos/pizza.png";
import celularImg from "@/assets/neuro-treino/objetos/celular.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import janelaImg from "@/assets/neuro-treino/objetos/janela.png";
import portaImg from "@/assets/neuro-treino/objetos/porta.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";

/**
 * EF01MA14 — Aula 014 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Identificar e nomear figuras geométricas planas
 * (círculo, quadrado, retângulo e triângulo) relacionando-as
 * com objetos do cotidiano.
 *
 * Missão: "A Vila das Formas Divertidas".
 * Padrão travado EF01MA02/MA11/MA12/MA13: crianças de 1º ano
 * NÃO leem — toda pergunta mostra a imagem real do objeto/forma.
 */
const aula: Aula = {
  codigo: "EF01MA14",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "A Vila das Formas Divertidas",

  narrativa: {
    titulo: "A Vila das Formas Divertidas",
    contexto:
      "O esquilo Brilha chegou a uma vila onde TODAS as construções são feitas com formas planas: círculo, quadrado, retângulo e triângulo.",
    problema:
      "As placas com o nome das formas desapareceram e ninguém sabe mais qual é qual!",
    convite:
      "Vamos ajudar os moradores a colocar cada forma no lugar certo?",
  },

  conhecimentosPrevios: [
    "Reconhecer objetos por imagem.",
    "Diferenciar redondo de com pontas.",
    "Nomear cores básicas.",
  ],

  missao:
    "Aprender as 4 figuras geométricas planas — CÍRCULO, QUADRADO, RETÂNGULO e TRIÂNGULO — e relacioná-las com objetos do dia a dia.",

  objetivos: [
    "Reconhecer círculo, quadrado, retângulo e triângulo.",
    "Identificar essas formas em objetos do cotidiano.",
    "Comparar características simples das figuras (lados, pontas).",
    "Ampliar a percepção visual.",
  ],

  motivacao:
    "As formas planas estão em TUDO ao seu redor: relógio (círculo), janela (quadrado), porta (retângulo), fatia de pizza (triângulo). Aprender geometria é enxergar o mundo com olhos de artista!",

  explicacao:
    "🔵 CÍRCULO — redondinho, sem lados, sem pontas. Exemplo: moeda, bola vista de frente.\n\n🟨 QUADRADO — 4 lados IGUAIS e 4 cantos retos. Exemplo: janela quadrada.\n\n🟩 RETÂNGULO — 4 lados, sendo 2 maiores e 2 menores. Exemplo: porta, celular, livro.\n\n🔺 TRIÂNGULO — 3 lados e 3 pontas. Exemplo: fatia de pizza.",

  explicacoesNiveis: {
    nivel1: "Redondo é CÍRCULO. Com pontas é diferente.",
    nivel2:
      "4 lados iguais é QUADRADO. 4 lados com 2 maiores é RETÂNGULO. 3 lados é TRIÂNGULO.",
    nivel3:
      "Um mesmo objeto pode ter várias formas dependendo de como você olha. A janela vista de frente é um quadrado; a porta é um retângulo.",
    nivel4:
      "Artistas, arquitetos e engenheiros combinam as 4 formas planas pra desenhar casas, quadros, brinquedos e até logotipos.",
  },

  exemploResolvido: {
    enunciado:
      "O Brilha achou uma MOEDA. Que forma plana ela tem?",
    passos: [
      "Olhe a moeda: ela é redondinha.",
      "NÃO tem cantos nem pontas.",
      "NÃO tem lados retos.",
      "Redondinha sem pontas → CÍRCULO.",
    ],
    resposta: "A moeda tem forma de CÍRCULO.",
  },

  atividadeGuiada: {
    enunciado:
      "Olhe a imagem: o Brilha achou uma MOEDA. Que forma plana ela tem?",
    resposta: "CÍRCULO.",
    explicacao:
      "A moeda é redondinha, sem lados nem pontas — essa é a forma do CÍRCULO.",
    visual: {
      tipo: "cena",
      pergunta: "A moeda tem forma de…",
      posicao: "aoLado",
      referenciaImg: circuloImg,
      referenciaLabel: "Círculo",
      sujeitoImg: moedaImg,
      sujeitoLabel: "Moeda",
      opcoes: ["Círculo", "Quadrado", "Triângulo"],
      correta: 0,
    },
  },

  exercicios: [
    { enunciado: "🪙 Moeda parece qual forma?", resposta: "Círculo", dica: "Redondinha, sem pontas." },
    { enunciado: "🚪 Porta parece qual forma?", resposta: "Retângulo", dica: "Alta e estreita." },
    { enunciado: "🍕 Fatia de pizza parece qual forma?", resposta: "Triângulo", dica: "3 pontas." },
    { enunciado: "🪟 Janela quadrada parece qual forma?", resposta: "Quadrado", dica: "4 lados iguais." },
    { enunciado: "📖 Livro parece qual forma?", resposta: "Retângulo", dica: "2 lados maiores e 2 menores." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: ajude os moradores a colocar cada objeto na forma correta!",
    resposta:
      "Bola = Círculo · Celular = Retângulo · Pizza = Triângulo · Janela = Quadrado.",
    visual: {
      cena: [
        { personagem: "Círculo 🔵", itemImagemUrl: circuloImg, quantidade: 1, cor: "#3B82F6" },
        { personagem: "Quadrado 🟨", itemImagemUrl: quadradoImg, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Retângulo 🟩", itemImagemUrl: retanguloImg, quantidade: 1, cor: "#10B981" },
        { personagem: "Triângulo 🔺", itemImagemUrl: trianguloImg, quantidade: 1, cor: "#EF4444" },
      ],
      perguntas: [
        {
          pergunta: "A BOLA vista de frente tem forma de…",
          opcoes: ["Círculo", "Quadrado", "Triângulo"],
          correta: 0,
          explicacao: "Redondinha, sem pontas = CÍRCULO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola", cor: "#3B82F6" },
            ],
          },
        },
        {
          pergunta: "O CELULAR tem forma de…",
          opcoes: ["Círculo", "Retângulo", "Triângulo"],
          correta: 1,
          explicacao: "4 lados, 2 maiores e 2 menores = RETÂNGULO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: celularImg, quantidade: 1, rotulo: "Celular", cor: "#10B981" },
            ],
          },
        },
        {
          pergunta: "A FATIA de pizza tem forma de…",
          opcoes: ["Quadrado", "Círculo", "Triângulo"],
          correta: 2,
          explicacao: "3 pontas e 3 lados = TRIÂNGULO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: pizzaImg, quantidade: 1, rotulo: "Pizza", cor: "#EF4444" },
            ],
          },
        },
        {
          pergunta: "A JANELA quadrada tem forma de…",
          opcoes: ["Quadrado", "Triângulo", "Círculo"],
          correta: 0,
          explicacao: "4 lados IGUAIS = QUADRADO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: janelaImg, quantidade: 1, rotulo: "Janela", cor: "#F59E0B" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🔵 CÍRCULO — redondo, sem lados nem pontas. Exemplo: moeda.",
      "🟨 QUADRADO — 4 lados IGUAIS. Exemplo: janela.",
      "🟩 RETÂNGULO — 4 lados, 2 maiores. Exemplo: porta, celular, livro.",
      "🔺 TRIÂNGULO — 3 lados, 3 pontas. Exemplo: fatia de pizza.",
    ],
    dica:
      "Antes de responder, conte os lados com o dedinho — 0 lados = círculo, 3 = triângulo, 4 iguais = quadrado, 4 diferentes = retângulo.",
  },

  quiz: [
    {
      pergunta: "Qual figura NÃO tem lados nem pontas?",
      opcoes: ["Círculo", "Triângulo", "Quadrado"],
      correta: 0,
      explicacao: "Redondinho, sem pontas = CÍRCULO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: circuloImg, quantidade: 1, rotulo: "Círculo", cor: "#3B82F6" },
        ],
      },
    },
    {
      pergunta: "Qual figura tem 3 lados?",
      opcoes: ["Quadrado", "Triângulo", "Círculo"],
      correta: 1,
      explicacao: "3 lados e 3 pontas = TRIÂNGULO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: trianguloImg, quantidade: 1, rotulo: "Triângulo", cor: "#EF4444" },
        ],
      },
    },
    {
      pergunta: "Qual objeto lembra um RETÂNGULO?",
      opcoes: ["Livro", "Moeda", "Fatia de pizza"],
      correta: 0,
      explicacao: "Livro tem 4 lados sendo 2 maiores = RETÂNGULO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: livroImg, quantidade: 1, rotulo: "Livro", cor: "#10B981" },
          { imagemUrl: moedaImg, quantidade: 1, rotulo: "Moeda", cor: "#F59E0B" },
          { imagemUrl: pizzaImg, quantidade: 1, rotulo: "Pizza", cor: "#EF4444" },
        ],
      },
    },
    {
      pergunta: "Qual figura tem 4 lados IGUAIS?",
      opcoes: ["Retângulo", "Círculo", "Quadrado"],
      correta: 2,
      explicacao: "4 lados iguais = QUADRADO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: quadradoImg, quantidade: 1, rotulo: "Quadrado", cor: "#F59E0B" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha conquistada: Explorador das Formas Planas! Você aprendeu círculo, quadrado, retângulo e triângulo. Missão em Família: caminhe pela casa e encontre 3 círculos, 3 retângulos, 2 quadrados e 2 triângulos!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Leonardo da Vinci — pintor e inventor famoso — estudava as formas planas para criar máquinas, quadros e projetos de construções. Até a Mona Lisa foi desenhada com ajuda de formas!",
  },

  interativas: [
    // ==== FASE 1 · Quem é quem? — LIGAR objeto ↔ forma ====
    {
      tipo: "ligar",
      titulo: "Fase 1 · Descubra a Forma",
      instrucao:
        "Ligue cada objeto à forma plana que ele tem.",
      pares: [
        { a: "Moeda", b: "Círculo", aImagem: moedaImg, aQuantidade: 1, bImagem: circuloImg, bQuantidade: 1 },
        { a: "Janela", b: "Quadrado", aImagem: janelaImg, aQuantidade: 1, bImagem: quadradoImg, bQuantidade: 1 },
        { a: "Celular", b: "Retângulo", aImagem: celularImg, aQuantidade: 1, bImagem: retanguloImg, bQuantidade: 1 },
        { a: "Pizza", b: "Triângulo", aImagem: pizzaImg, aQuantidade: 1, bImagem: trianguloImg, bQuantidade: 1 },
      ],
    },

    // ==== FASE 2 · Arraste para a Caixa Certa ====
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Arraste para o Lugar Certo",
      instrucao:
        "Cada objeto vai na caixa da sua forma. Coloque no lugar certo!",
      alvosVisuais: [
        { nome: "🔵 Caixa CÍRCULO", cor: "#3B82F6", capacidade: 1, imagemUrl: circuloImg },
        { nome: "🟨 Caixa QUADRADO", cor: "#F59E0B", capacidade: 1, imagemUrl: quadradoImg },
        { nome: "🟩 Caixa RETÂNGULO", cor: "#10B981", capacidade: 1, imagemUrl: retanguloImg },
        { nome: "🔺 Caixa TRIÂNGULO", cor: "#EF4444", capacidade: 1, imagemUrl: trianguloImg },
      ],
      pares: [
        { item: "Bola", alvo: "🔵 Caixa CÍRCULO", itemImagem: bolaImg },
        { item: "Janela", alvo: "🟨 Caixa QUADRADO", itemImagem: janelaImg },
        { item: "Celular", alvo: "🟩 Caixa RETÂNGULO", itemImagem: celularImg },
        { item: "Pizza", alvo: "🔺 Caixa TRIÂNGULO", itemImagem: pizzaImg },
      ],
    },

    // ==== FASE 3 · Caça às Formas — contagem por caixa ====
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Caça às Formas do Quarto",
      instrucao:
        "Encontre no quarto: 2 CÍRCULOS, 2 RETÂNGULOS, 1 QUADRADO e 1 TRIÂNGULO. Arraste cada objeto pra sua caixa!",
      alvosVisuais: [
        { nome: "🔵 CÍRCULOS", cor: "#3B82F6", capacidade: 2, imagemUrl: circuloImg },
        { nome: "🟩 RETÂNGULOS", cor: "#10B981", capacidade: 2, imagemUrl: retanguloImg },
        { nome: "🟨 QUADRADOS", cor: "#F59E0B", capacidade: 1, imagemUrl: quadradoImg },
        { nome: "🔺 TRIÂNGULOS", cor: "#EF4444", capacidade: 1, imagemUrl: trianguloImg },
      ],
      pares: [
        { item: "Moeda", alvo: "🔵 CÍRCULOS", itemImagem: moedaImg },
        { item: "Sol", alvo: "🔵 CÍRCULOS", itemImagem: solImg },
        { item: "Livro", alvo: "🟩 RETÂNGULOS", itemImagem: livroImg },
        { item: "Porta", alvo: "🟩 RETÂNGULOS", itemImagem: portaImg },
        { item: "Janela", alvo: "🟨 QUADRADOS", itemImagem: janelaImg },
        { item: "Pizza", alvo: "🔺 TRIÂNGULOS", itemImagem: pizzaImg },
      ],
    },

    // ==== FASE 4 · Complete a Casa — ORDENAR ====
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Complete a Casa",
      instrucao:
        "Monte a casa na ordem: primeiro a PORTA (retângulo), depois a JANELA (quadrado), o TELHADO (triângulo) e por último o SOL (círculo) no céu.",
      itens: [
        "Porta (retângulo)",
        "Janela (quadrado)",
        "Telhado (triângulo)",
        "Sol (círculo)",
      ],
      imagens: [
        { imagemUrl: portaImg, quantidade: 1, rotulo: "Porta = Retângulo", cor: "#10B981" },
        { imagemUrl: janelaImg, quantidade: 1, rotulo: "Janela = Quadrado", cor: "#F59E0B" },
        { imagemUrl: trianguloImg, quantidade: 1, rotulo: "Telhado = Triângulo", cor: "#EF4444" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "Sol = Círculo", cor: "#3B82F6" },
      ],
    },

    // ==== MINI JOGO · Construindo o Parque ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Construindo o Parque",
      instrucao:
        "Cada parte do parque tem uma forma. Coloque cada objeto na caixa certa!",
      alvosVisuais: [
        { nome: "🔵 Roda-gigante (CÍRCULO)", cor: "#3B82F6", capacidade: 2, imagemUrl: circuloImg },
        { nome: "🟨 Piso (QUADRADO)", cor: "#F59E0B", capacidade: 1, imagemUrl: quadradoImg },
        { nome: "🟩 Banco (RETÂNGULO)", cor: "#10B981", capacidade: 2, imagemUrl: retanguloImg },
        { nome: "🔺 Telhado (TRIÂNGULO)", cor: "#EF4444", capacidade: 1, imagemUrl: trianguloImg },
      ],
      pares: [
        { item: "Sol", alvo: "🔵 Roda-gigante (CÍRCULO)", itemImagem: solImg },
        { item: "Moeda", alvo: "🔵 Roda-gigante (CÍRCULO)", itemImagem: moedaImg },
        { item: "Janela", alvo: "🟨 Piso (QUADRADO)", itemImagem: janelaImg },
        { item: "Celular", alvo: "🟩 Banco (RETÂNGULO)", itemImagem: celularImg },
        { item: "Livro", alvo: "🟩 Banco (RETÂNGULO)", itemImagem: livroImg },
        { item: "Pizza", alvo: "🔺 Telhado (TRIÂNGULO)", itemImagem: pizzaImg },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual figura é REDONDA, sem lados?",
        opcoes: ["Quadrado", "Círculo", "Triângulo"],
        correta: 1,
        explicacao: "Redondinha, sem lados nem pontas = CÍRCULO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: circuloImg, quantidade: 1, rotulo: "Círculo", cor: "#3B82F6" },
          ],
        },
      },
      {
        pergunta: "Qual figura tem 3 lados e 3 pontas?",
        opcoes: ["Círculo", "Triângulo", "Retângulo"],
        correta: 1,
        explicacao: "3 lados = TRIÂNGULO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: trianguloImg, quantidade: 1, rotulo: "Triângulo", cor: "#EF4444" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Uma JANELA quadrada tem forma de…",
        opcoes: ["Quadrado", "Círculo", "Triângulo"],
        correta: 0,
        explicacao: "4 lados IGUAIS = QUADRADO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: janelaImg, quantidade: 1, rotulo: "Janela", cor: "#F59E0B" },
            { imagemUrl: quadradoImg, quantidade: 1, rotulo: "Quadrado", cor: "#F59E0B" },
          ],
        },
      },
      {
        pergunta: "Um LIVRO tem forma de…",
        opcoes: ["Círculo", "Retângulo", "Triângulo"],
        correta: 1,
        explicacao: "4 lados sendo 2 maiores = RETÂNGULO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: livroImg, quantidade: 1, rotulo: "Livro", cor: "#10B981" },
            { imagemUrl: retanguloImg, quantidade: 1, rotulo: "Retângulo", cor: "#10B981" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Qual desses NÃO é um retângulo?",
        opcoes: ["Porta", "Celular", "Moeda"],
        correta: 2,
        explicacao: "Moeda é redonda = CÍRCULO, não retângulo.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: portaImg, quantidade: 1, rotulo: "Porta", cor: "#10B981" },
            { imagemUrl: celularImg, quantidade: 1, rotulo: "Celular", cor: "#10B981" },
            { imagemUrl: moedaImg, quantidade: 1, rotulo: "Moeda", cor: "#F59E0B" },
          ],
        },
      },
      {
        pergunta: "Qual figura tem 4 lados IGUAIS?",
        opcoes: ["Retângulo", "Quadrado", "Triângulo"],
        correta: 1,
        explicacao:
          "Retângulo tem 2 lados maiores. QUADRADO tem os 4 iguais.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: retanguloImg, quantidade: 1, rotulo: "Retângulo", cor: "#10B981" },
            { imagemUrl: quadradoImg, quantidade: 1, rotulo: "Quadrado", cor: "#F59E0B" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA15" },
};

// Referências mantidas para evitar tree-shake warnings em builds futuros:
void presenteImg;

export default aula;
