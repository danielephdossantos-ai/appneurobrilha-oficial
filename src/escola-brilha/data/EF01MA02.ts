import type { Aula } from "../types";
import cenouraImg from "@/assets/neuro-treino/vegetais/cenoura.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import joaninhaImg from "@/assets/neuro-treino/objetos/joaninha.png";
import coelhoImg from "@/assets/neuro-treino/objetos/coelho.png";
import macacoImg from "@/assets/hiperfocos/animais/macaco.png";
import tartarugaImg from "@/assets/hiperfocos/animais/tartaruga.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import sementeImg from "@/assets/neuro-treino/objetos/semente.png";
import castanhaImg from "@/assets/neuro-treino/objetos/castanha.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";
import ninhoImg from "@/assets/neuro-treino/objetos/ninho.png";

/**
 * EF01MA02 — Aula 002 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Contar, de maneira exata ou aproximada, utilizando diferentes
 * estratégias, como o pareamento e outros agrupamentos.
 *
 * Missão do Dia: "A Floresta das Contagens" (esquilo Brilha).
 * Padrão: usa banco de mídias real — sem emojis nas atividades interativas.
 */
const aula: Aula = {
  codigo: "EF01MA02",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "A Floresta das Contagens",

  narrativa: {
    titulo: "A Floresta das Contagens",
    contexto:
      "O esquilo Brilha recebeu uma missão importante. Os animais da floresta estão organizando uma grande festa, mas ninguém sabe se há frutas suficientes para todos. A Dona Coelha colheu cenouras, o Macaco separou bananas e a Tartaruga juntou folhas — ninguém contou nada ainda!",
    problema:
      "Se contarem errado, vai faltar comida na festa. Será que dá pra contar rápido e sem errar?",
    convite: "Vamos ajudar os animais a contar de vários jeitos?",
  },

  conhecimentosPrevios: [
    "Contar oralmente até 10 sem se perder.",
    "Apontar cada objeto ao contar (um a um).",
    "Comparar dois grupos e dizer qual tem mais.",
  ],

  missao:
    "Descobrir que existem várias maneiras de contar: um a um, formando pares, agrupando e comparando coleções.",

  objetivos: [
    "Contar objetos um a um sem pular nenhum.",
    "Formar grupos iguais para contar mais rápido.",
    "Parear objetos (um pra um) para descobrir a quantidade.",
    "Comparar duas coleções e dizer qual tem mais ou menos.",
  ],

  motivacao:
    "Nem sempre a gente precisa contar de um em um. Quando tem muita coisa, dá pra fazer grupinhos e contar bem mais rápido. Bora aprender esses truques com os animais da floresta?",

  explicacao:
    "Hoje você vai aprender que existem VÁRIAS maneiras de contar:\n\n• UM A UM — aponte cada objeto e diga o número: 1, 2, 3, 4, 5.\n• EM PARES — junte de dois em dois: 2, 4, 6, 8.\n• EM GRUPOS — faça grupinhos iguais (de 3, de 5, de 10) e conte os grupos.\n• COMPARANDO — coloque duas coleções lado a lado e veja qual tem mais.\n\nCada situação pede uma estratégia diferente. Quando tem POUCA coisa, contar um a um é fácil. Quando tem MUITA, agrupar salva a vida.",

  explicacoesNiveis: {
    nivel1: "Podemos contar de vários jeitos: um a um, em pares ou em grupos.",
    nivel2:
      "3 grupos de 3 maçãs = 9 maçãs. Contar em grupos é mais rápido.",
    nivel3:
      "Se cada passarinho encontra um ninho, dá pra saber a quantidade sem errar.",
    nivel4:
      "Em casa você conta sapatos em pares, ovos em dúzia (grupos de 12) e figurinhas em grupos de 10.",
  },

  exemploResolvido: {
    enunciado: "A Dona Coelha colheu cenouras. Quantas ela colheu?",
    passos: [
      "Toque em cada cenoura da tela — uma por vez.",
      "Para cada toque, diga em voz alta: 1, 2, 3, 4, 5.",
      "Quando não sobrar nenhuma cenoura sem tocar, o último número é a resposta.",
    ],
    resposta: "5 cenouras — contar um a um funciona bem com poucas coisas.",
    interativo: {
      tipo: "contagem",
      imagemUrl: cenouraImg,
      quantidade: 5,
      nomeItem: "cenoura",
      nomeItemPlural: "cenouras",
      pergunta: "Quantas cenouras a Dona Coelha colheu?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "O Macaco separou as bananas em 3 grupos iguais, com 3 bananas em cada grupo. Quantas bananas ele tem ao todo?",
    resposta: "9 bananas — 3 grupos de 3 dão 9.",
    explicacao:
      "Quando fazemos grupos iguais, é só somar (ou pular de 3 em 3): 3, 6, 9. Contar em grupos é muito mais rápido do que contar uma por uma.",
  },

  exercicios: [
    {
      enunciado:
        "🥕 A Dona Coelha tem 5 cenouras. Qual é o melhor jeito de contar?",
      resposta: "Um a um — porque tem poucas cenouras.",
      dica: "Quando tem pouca coisa, apontar uma por vez é rápido.",
    },
    {
      enunciado:
        "🍎 O Macaco tem 9 maçãs organizadas em 3 grupos de 3. Qual estratégia é mais rápida?",
      resposta: "Contar em grupos: 3, 6, 9.",
      dica: "Cada grupo tem 3. Pule de 3 em 3.",
    },
    {
      enunciado:
        "🐦 O passarinho quer saber se cada filhote tem seu ninho. Como descobrir sem errar?",
      resposta:
        "Fazendo o PAREAMENTO — cada passarinho para cada ninho. Se sobrar ou faltar, a gente vê na hora.",
      dica: "Um passarinho pra cada ninho. Sobrou algum? Faltou algum?",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: o Papagaio tem 8 sementes, o Esquilo tem 5 castanhas e o Coelho tem 10 cenouras. Quem tem MAIS alimentos? Quem tem MENOS? Quem tem exatamente 8?",
    resposta:
      "MAIS: Coelho (10). MENOS: Esquilo (5). Exatamente 8: Papagaio.",
  },

  revisao: {
    pontos: [
      "Contar um a um funciona bem quando tem poucas coisas.",
      "Formar pares (um pra um) mostra se falta ou sobra.",
      "Agrupar em quantidades iguais ajuda a contar rápido.",
      "Comparar coleções mostra qual tem mais e qual tem menos.",
    ],
    dica: "Antes de contar, olha o tamanho do monte e escolhe a estratégia certa.",
  },

  quiz: [
    {
      pergunta: "Qual é a melhor maneira de contar MUITOS objetos iguais?",
      opcoes: ["Contar em grupos", "Fechar os olhos", "Escolher qualquer número"],
      correta: 0,
      explicacao: "Grupos iguais deixam a contagem muito mais rápida.",
    },
    {
      pergunta:
        "Se existem 7 gatos e 7 potinhos de comida, todos conseguem comer?",
      opcoes: ["Sim, cada gato recebe um potinho", "Não, vai faltar", "Não, vai sobrar"],
      correta: 0,
      explicacao:
        "Como as duas quantidades são iguais, o pareamento é perfeito.",
    },
    {
      pergunta:
        "Grupo A tem 5 bananas. Grupo B tem 3 bananas. Quem tem MAIS?",
      opcoes: ["Grupo A", "Grupo B", "Estão iguais"],
      correta: 0,
      explicacao: "5 é maior que 3 — o Grupo A tem mais.",
    },
    {
      pergunta:
        "Você tinha 3 estrelas e agora tem 5. Quantas estrelas foram acrescentadas?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      explicacao: "De 3 pra 5 são 2 estrelas a mais (3 + 2 = 5).",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Contador da Floresta! Agora você conhece vários jeitos de contar — um a um, em pares, em grupos ou comparando. Missão em Casa: conte cadeiras, copos, brinquedos, sapatos e almofadas. Depois diga qual grupo tem MAIS e qual tem MENOS.",

  // Sem `midias` estáticas — todas as cenas da Explicação são interativas.

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Contando um a um",
      instrucao:
        "A Dona Coelha colheu cenouras. Toque em cada cenoura e conte em voz alta.",
      grupos: [{ imagemUrl: cenouraImg, quantidade: 5 }],
      pergunta: "Quantas cenouras existem?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto:
        "Excelente! Contar um a um funciona bem quando temos poucos objetos.",
      erro: "Conte de novo apontando uma cenoura por vez.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Contando em grupos",
      instrucao:
        "O Macaco organizou as maçãs em 3 grupos iguais. Cada grupo tem 3 maçãs.",
      grupos: [
        { imagemUrl: macaImg, quantidade: 3, rotulo: "Grupo 1" },
        { imagemUrl: macaImg, quantidade: 3, rotulo: "Grupo 2" },
        { imagemUrl: macaImg, quantidade: 3, rotulo: "Grupo 3" },
      ],
      pergunta: "Quantas maçãs existem ao todo?",
      opcoes: ["6", "8", "9"],
      correta: 2,
      acerto:
        "Isso! Quando fazemos grupos iguais, contar fica muito mais fácil: 3, 6, 9.",
      erro: "Some os grupos: 3 + 3 + 3.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Ligando os pares",
      instrucao:
        "6 passarinhos e 6 ninhos. Ligue cada passarinho a um ninho.",
      pares: [
        { a: "Passarinho 1", b: "Ninho A", aImagem: passaroImg, aQuantidade: 1, bImagem: ninhoImg, bQuantidade: 1 },
        { a: "Passarinho 2", b: "Ninho B", aImagem: passaroImg, aQuantidade: 1, bImagem: ninhoImg, bQuantidade: 1 },
        { a: "Passarinho 3", b: "Ninho C", aImagem: passaroImg, aQuantidade: 1, bImagem: ninhoImg, bQuantidade: 1 },
        { a: "Passarinho 4", b: "Ninho D", aImagem: passaroImg, aQuantidade: 1, bImagem: ninhoImg, bQuantidade: 1 },
        { a: "Passarinho 5", b: "Ninho E", aImagem: passaroImg, aQuantidade: 1, bImagem: ninhoImg, bQuantidade: 1 },
        { a: "Passarinho 6", b: "Ninho F", aImagem: passaroImg, aQuantidade: 1, bImagem: ninhoImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Quem tem mais?",
      instrucao: "Compare os dois grupos de joaninhas.",
      grupos: [
        { imagemUrl: joaninhaImg, quantidade: 4, rotulo: "Grupo da Esquerda" },
        { imagemUrl: joaninhaImg, quantidade: 6, rotulo: "Grupo da Direita" },
      ],
      pergunta: "Qual grupo tem MAIS joaninhas?",
      opcoes: ["Esquerda", "Direita", "Iguais"],
      correta: 1,
      acerto: "Muito bem! O grupo da direita tem 6 — mais que 4.",
      erro: "Conte cada grupo e compare os números.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Complete a coleção",
      instrucao: "Antes você tinha 3 estrelas. Agora você tem 5.",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Antes" },
        { imagemUrl: estrelaImg, quantidade: 5, rotulo: "Depois" },
      ],
      pergunta: "Quantas estrelas foram acrescentadas?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      acerto: "Isso! 3 + 2 = 5. Foram acrescentadas 2 estrelas.",
      erro: "Conte quantas estrelas apareceram a mais do 'Antes' pro 'Depois'.",
    },
    {
      tipo: "ligar",
      titulo: "Conte e ligue: quantos alimentos cada animal tem?",
      instrucao:
        "Conte os alimentos de cada animal e ligue no número certo à direita.",
      pares: [
        { a: "Papagaio · sementes", b: "8", aImagem: sementeImg, aQuantidade: 8 },
        { a: "Esquilo · castanhas", b: "5", aImagem: castanhaImg, aQuantidade: 5 },
        { a: "Coelho · cenouras", b: "10", aImagem: cenouraImg, aQuantidade: 10 },
      ],
    },
    {
      tipo: "ordenar",
      titulo: "Do menor para o maior",
      instrucao: "Arraste as quantidades em ordem crescente.",
      itens: ["3 estrelas", "5 cenouras", "9 maçãs"],
    },
    {
      tipo: "arrastar",
      titulo: "Organizando a festa: 4 doces em cada prato",
      instrucao:
        "Arraste cada doce para o prato certo. Cada prato deve ter exatamente 4 doces.",
      pares: [
        { item: "Doce 1", alvo: "Prato Azul" },
        { item: "Doce 2", alvo: "Prato Azul" },
        { item: "Doce 3", alvo: "Prato Azul" },
        { item: "Doce 4", alvo: "Prato Azul" },
        { item: "Doce 5", alvo: "Prato Vermelho" },
        { item: "Doce 6", alvo: "Prato Vermelho" },
        { item: "Doce 7", alvo: "Prato Vermelho" },
        { item: "Doce 8", alvo: "Prato Vermelho" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta:
          "A Dona Coelha colheu cenouras. Contando uma a uma dá quantas?",
        opcoes: ["3", "4", "5"],
        correta: 2,
        explicacao: "Apontando uma a uma: 1, 2, 3, 4, 5 cenouras.",
      },
      {
        pergunta:
          "O Macaco tem 3 grupos com 3 maçãs cada. Contando em grupos (3, 6, 9), quantas maçãs ao todo?",
        opcoes: ["6", "8", "9"],
        correta: 2,
        explicacao: "3 + 3 + 3 = 9 maçãs.",
      },
      {
        pergunta:
          "Grupo A tem 4 joaninhas. Grupo B tem 6 joaninhas. Quem tem MAIS?",
        opcoes: ["Grupo A", "Grupo B", "Iguais"],
        correta: 1,
        explicacao: "6 é maior que 4 — o Grupo B tem mais joaninhas.",
      },
    ],
    medio: [
      {
        pergunta:
          "Tinha 3 estrelas. Agora tem 5. Quantas estrelas foram acrescentadas?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        explicacao: "3 + 2 = 5. Foram acrescentadas 2 estrelas.",
      },
      {
        pergunta:
          "6 passarinhos e 6 ninhos. Cada passarinho encontra um ninho?",
        opcoes: ["Sim, todos", "Não, sobra passarinho", "Não, sobra ninho"],
        correta: 0,
        explicacao: "Como as quantidades são iguais, o pareamento é perfeito.",
      },
      {
        pergunta:
          "Você quer contar 20 tampinhas rápido. Qual estratégia é melhor?",
        opcoes: [
          "Uma por uma",
          "Formando grupos iguais",
          "Fechar os olhos e chutar",
        ],
        correta: 1,
        explicacao:
          "Formando grupos (por exemplo, 4 grupos de 5) fica muito mais rápido.",
      },
    ],
    dificil: [
      {
        pergunta:
          "Papagaio tem 8 sementes, Esquilo tem 5 castanhas, Coelho tem 10 cenouras. Quem tem MAIS?",
        opcoes: ["Papagaio", "Esquilo", "Coelho"],
        correta: 2,
        explicacao: "10 é a maior quantidade — o Coelho tem mais.",
      },
      {
        pergunta: "E quem tem MENOS?",
        opcoes: ["Papagaio", "Esquilo", "Coelho"],
        correta: 1,
        explicacao: "5 é a menor quantidade — o Esquilo tem menos.",
      },
      {
        pergunta: "Quem tem EXATAMENTE 8?",
        opcoes: ["Papagaio", "Esquilo", "Coelho"],
        correta: 0,
        explicacao: "O Papagaio tem 8 sementes.",
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA03",
    titulo: "Comparar quantidades e descobrir qual é maior",
  },
};

// Imports mantidos para futura expansão de mídia visual (Coelha, Macaco,
// Tartaruga, Banana) sem quebrar o padrão do banco de mídias.
void coelhoImg;
void macacoImg;
void tartarugaImg;
void bananaImg;

export default aula;
