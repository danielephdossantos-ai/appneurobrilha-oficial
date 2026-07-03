import type { Aula } from "../types";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import anaImg from "@/assets/pip-girl-mascot.png";
import pedroImg from "@/assets/pip-teen-carrinho.png";
import lucasImg from "@/assets/pip-teen-cyber.png";

/**
 * EF01MA01 — Aula 001 · Coleção 01 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Utilizar números naturais como indicador de quantidade ou de ordem
 * em diferentes situações cotidianas e reconhecer códigos de identificação.
 *
 * Missão do Dia: "Os Detetives dos Números" (esquilo Brilha).
 * Duração estimada: 15–20 min · Faixa: 6 anos · Nível: Fácil.
 */
const aula: Aula = {
  codigo: "EF01MA01",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "Os Detetives dos Números",

  narrativa: {
    titulo: "O esquilo Brilha e os números da floresta",
    contexto:
      "O esquilo Brilha acordou animado. Quando saiu da sua casinha, percebeu que os números estavam por toda parte. Na árvore havia 3 passarinhos. No lago nadavam 5 peixes. A casa do coelho tinha o número 18. O ônibus da floresta era o 207.",
    problema:
      "Brilha ficou curioso: 'Será que todos esses números servem para a mesma coisa?'",
    convite: "Vamos ajudá-lo a descobrir!",
  },

  conhecimentosPrevios: [
    "Reconhecer os números de 0 a 10 falados e escritos.",
    "Contar objetos apontando um a um.",
    "Saber dizer quem chegou em 1º, 2º e 3º lugar.",
  ],

  missao:
    "Descobrir que os números podem CONTAR, indicar POSIÇÃO ou IDENTIFICAR pessoas, lugares e objetos.",

  objetivos: [
    "Reconhecer números que contam quantidade.",
    "Reconhecer números que indicam posição (ordem).",
    "Reconhecer números usados como identificação.",
    "Classificar números do cotidiano nas três categorias.",
  ],

  motivacao:
    "Olha ao seu redor! Tem número no relógio, na casa, na camisa do time, no ônibus. Hoje você vai virar detetive e descobrir para que cada número serve.",

  explicacao:
    "Hoje você vai aprender que os números podem servir para três coisas:\n\n• CONTAR quantidade (5 peixes no lago).\n• Indicar POSIÇÃO / ordem (1º lugar, 2º lugar, 3º lugar).\n• IDENTIFICAR pessoas, lugares e objetos (Casa 18, Ônibus 207, Camisa 10).\n\nO mesmo número pode ter significados diferentes. O que importa é onde ele aparece e para que foi usado.",

  explicacoesNiveis: {
    nivel1: "Números podem: contar, indicar posição ou identificar.",
    nivel2:
      "5 peixes = contagem. 1º lugar = posição. Casa 18 = identificação.",
    nivel3:
      "Se dá pra contar 1, 2, 3… é quantidade. Se mostra quem chegou antes, é ordem. Se só dá nome ao objeto, é identificação.",
    nivel4:
      "Em casa: idade = contagem; página do livro = ordem; número do apartamento = identificação.",
  },

  exemploResolvido: {
    enunciado: "Na tela aparecem: 🍎🍎🍎🍎. Quantas maçãs existem?",
    passos: [
      "Aponte para cada maçã e conte: 1, 2, 3, 4.",
      "Pare quando não sobrar nenhuma maçã sem contar.",
    ],
    resposta: "4 maçãs — os números também servem para contar.",
  },

  atividadeGuiada: {
    enunciado:
      "Três crianças correndo: 🥇 Ana, 🥈 Pedro, 🥉 Lucas. Quem chegou em primeiro lugar?",
    resposta: "Ana.",
    explicacao:
      "Quando usamos 1º, 2º ou 3º estamos indicando ORDEM — a posição em que cada um chegou.",
  },

  exercicios: [
    {
      enunciado: "🏠 Casa 25. O número 25 está contando ou identificando?",
      resposta: "Identificando — só serve para dizer QUAL é aquela casa.",
      dica: "Existem 25 casas ali na tela? Se não, é identificação.",
    },
    {
      enunciado:
        "🚌 Ônibus 315. O número serve para contar passageiros ou identificar o ônibus?",
      resposta: "Identificar o ônibus.",
      dica: "Pergunte: existem 315 passageiros ali dentro? Se não, é identificação.",
    },
    {
      enunciado: "Na tela aparecem ⭐⭐⭐⭐⭐⭐. Quantas estrelas existem?",
      resposta: "6 estrelas.",
      dica: "Conte apontando uma por uma.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: arraste cada item para o lugar correto — Quantidade, Ordem ou Identificação. Itens: 8 bananas · Casa 72 · 2º lugar · Camisa 10 · 5 gatos · Senha 43.",
    resposta:
      "Quantidade: 8 bananas e 5 gatos. Ordem: 2º lugar. Identificação: Casa 72, Camisa 10 e Senha 43.",
  },

  revisao: {
    pontos: [
      "Alguns números contam quantidades.",
      "Outros mostram posição (1º, 2º, 3º…).",
      "Outros identificam pessoas, lugares e objetos.",
      "Os números aparecem em casas, relógios, placas, telefones, calendários e até nas camisas dos jogadores.",
    ],
    dica: "Ao ver um número, pergunte: ele CONTA, ORDENA ou IDENTIFICA?",
  },

  quiz: [
    {
      pergunta: "Existem 9 lápis. O número indica:",
      opcoes: ["Ordem", "Quantidade", "Identificação"],
      correta: 1,
      explicacao: "O 9 está dizendo QUANTOS lápis existem — é quantidade.",
    },
    {
      pergunta: "Casa número 81. O número indica:",
      opcoes: ["Identificação", "Quantidade"],
      correta: 0,
      explicacao: "O 81 apenas identifica qual é aquela casa.",
    },
    {
      pergunta: "Maria ficou em 2º lugar. O número indica:",
      opcoes: ["Ordem", "Quantidade"],
      correta: 0,
      explicacao: "2º mostra a POSIÇÃO em que Maria chegou.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Detetive dos Números! Agora, sempre que ver um número por aí, você já sabe perguntar: ele conta, ordena ou identifica? Missão em Casa: procure com a família 5 números diferentes e diga para que cada um serve.",

  midias: [
    {
      tipo: "animacao",
      emojis: ["🐿️", "🐦", "🐦", "🐦"],
      legenda: "O esquilo Brilha vê 3 passarinhos na árvore.",
    },
    {
      tipo: "animacao",
      emojis: ["🥇", "🥈", "🥉"],
      legenda: "Ana, Pedro e Lucas: 1º, 2º e 3º lugar.",
    },
    {
      tipo: "animacao",
      emojis: ["🏠", "🚌"],
      legenda: "Casa 25 e Ônibus 315: números que identificam.",
    },
  ],

  interativas: [
    {
      tipo: "arrastar",
      titulo: "Desafio Brilha: onde cada número mora?",
      instrucao: "Arraste cada item para a caixa correta.",
      pares: [
        { item: "8 bananas", alvo: "Quantidade" },
        { item: "5 gatos", alvo: "Quantidade" },
        { item: "2º lugar", alvo: "Ordem" },
        { item: "Casa 72", alvo: "Identificação" },
        { item: "Camisa 10", alvo: "Identificação" },
        { item: "Senha 43", alvo: "Identificação" },
      ],
    },
    {
      tipo: "ordenar",
      titulo: "Coloque o pódio na ordem certa",
      instrucao: "Arraste do 1º ao 3º lugar.",
      itens: ["1º", "2º", "3º"],
    },
    {
      tipo: "ligar",
      titulo: "Ligue o número ao superpoder",
      instrucao: "Toque em um item da esquerda e depois no par certo da direita.",
      pares: [
        { a: "5 peixes no lago", b: "Contar" },
        { a: "1º lugar na corrida", b: "Ordem" },
        { a: "Casa 18", b: "Identificação" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Na tela aparecem 🍎🍎🍎🍎. Quantas maçãs existem?",
        opcoes: ["2", "3", "4", "5"],
        correta: 2,
        explicacao: "Contando uma a uma: 1, 2, 3, 4 maçãs.",
      },
      {
        pergunta: "Quem chegou em 1º lugar (🥇)?",
        opcoes: ["Ana", "Pedro", "Lucas"],
        correta: 0,
        explicacao: "🥇 é a medalha de ouro — 1º lugar.",
      },
      {
        pergunta: "🏠 Casa 25. O número 25 está:",
        opcoes: ["Contando", "Identificando"],
        correta: 1,
        explicacao: "Só serve para dizer QUAL é aquela casa.",
      },
    ],
    medio: [
      {
        pergunta: "🚌 Ônibus 315. O número serve para:",
        opcoes: ["Contar passageiros", "Identificar o ônibus"],
        correta: 1,
        explicacao: "É o nome do ônibus — identificação.",
      },
      {
        pergunta: "Na tela aparecem ⭐⭐⭐⭐⭐⭐. Quantas estrelas existem?",
        opcoes: ["4", "5", "6", "7"],
        correta: 2,
        explicacao: "Contando uma a uma: 6 estrelas.",
      },
      {
        pergunta: "Camisa 10 do jogador. O número indica:",
        opcoes: ["Quantidade", "Identificação", "Ordem"],
        correta: 1,
        explicacao: "A camisa 10 identifica o jogador.",
      },
    ],
    dificil: [
      {
        pergunta: "8 bananas — o número indica:",
        opcoes: ["Quantidade", "Ordem", "Identificação"],
        correta: 0,
        explicacao: "O 8 diz QUANTAS bananas existem.",
      },
      {
        pergunta: "Senha 43 na padaria — o número indica:",
        opcoes: ["Quantidade", "Ordem", "Identificação"],
        correta: 2,
        explicacao: "A senha só identifica a sua vez.",
      },
      {
        pergunta: "Maria ficou em 2º lugar — o número indica:",
        opcoes: ["Quantidade", "Ordem", "Identificação"],
        correta: 1,
        explicacao: "2º mostra a POSIÇÃO em que Maria chegou.",
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA02",
    titulo: "Jeitos espertos de contar",
  },
};

export default aula;
