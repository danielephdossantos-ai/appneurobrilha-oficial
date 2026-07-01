import type { MissaoOficial } from "../types";

/**
 * EF01MA01 — Missão Oficial
 * BNCC: Utilizar números naturais como indicador de quantidade ou de ordem
 * em diferentes situações cotidianas e reconhecer códigos de identificação.
 */
const missao: MissaoOficial = {
  codigo: "EF01MA01",
  etapa: "Ensino Fundamental",
  ano: "1º Ano",
  disciplina: "Matemática",
  unidadeTematica: "Números",
  objetoConhecimento: "Contagem de rotina, contagem ascendente e descendente e reconhecimento de números no contexto diário",

  missaoPrincipal: {
    titulo: "Os Três Superpoderes dos Números",
    descricao:
      "Descobrir que os números podem CONTAR quantidade, mostrar ORDEM ou ser um CÓDIGO de identificação.",
  },

  narrativa: {
    titulo: "O sumiço dos números da padaria",
    contexto:
      "É segunda de manhã na padaria do seu Zé. Ele usa números pra tudo: preço do pão, senha da fila e mesa de cada cliente.",
    problema:
      "Hoje os números SUMIRAM das plaquinhas! Ninguém sabe quantos pães levar, quem chegou primeiro ou qual o troco.",
    convite: "Bora ajudar o seu Zé a descobrir pra que servem os números e salvar a padaria?",
  },

  explicacao: {
    texto:
      "Os números aparecem no dia a dia de três jeitos: CONTAR quantidade (5 balas), MOSTRAR ordem (2º lugar) e SER CÓDIGO (número da casa). O mesmo número muda de sentido conforme o lugar em que aparece.",
    niveis: {
      nivel1: "Número serve pra três coisas: contar, ordem e código.",
      nivel2: "Na pizzaria: '2 pizzas' conta; '2º da fila' é ordem; 'telefone 2' é código.",
      nivel3: "Imagine três chapéus do número 3: contar 3 gatos, chegar em 3º lugar, morar no apto 3.",
      nivel4: "Em casa: hora do relógio = código; sua idade = contagem; página do livro = ordem.",
    },
  },

  exemplos: [
    {
      enunciado: "A camisa do Neymar tem o número 10. Contagem, ordem ou código?",
      passos: [
        "Existem 10 Neymares? Não.",
        "O Neymar chegou em 10º lugar? Não.",
        "Então o 10 só identifica a camisa dele.",
      ],
      resposta: "É CÓDIGO — o 10 identifica a camisa.",
      contextoCotidiano: "Números em uniformes de time.",
    },
    {
      enunciado: "Tem 8 lápis na caixa.",
      passos: ["Pergunte: dá pra contar 1, 2, 3… até 8 lápis?", "Sim, dá pra contar um a um."],
      resposta: "É CONTAGEM.",
      contextoCotidiano: "Material escolar em casa.",
    },
  ],

  atividades: [
    {
      enunciado: "Ana ficou em 2º lugar na corrida. O 2 é o quê?",
      resposta: "ORDEM — mostra a posição em que Ana chegou.",
      dica: "'º' pequenininho geralmente é ordem.",
      nivel: "facil",
    },
    {
      enunciado: "O telefone da avó é 3245-7890. Contagem, ordem ou código?",
      resposta: "CÓDIGO — serve pra ligar pra ela, não conta nem ordena.",
      nivel: "medio",
    },
    {
      enunciado: "João mora no 5º andar. O 5 é o quê?",
      resposta: "ORDEM — a posição do andar.",
      nivel: "facil",
    },
  ],

  desafios: [
    {
      enunciado:
        "Livro com 120 páginas, aberto na página 45, início do capítulo 3. Diga o que cada número faz.",
      resposta: "120 CONTA páginas; 45 é ORDEM (45ª página); 3 é ORDEM (3º capítulo).",
      nivel: "dificil",
    },
  ],

  quiz: [
    {
      pergunta: "Em 'Tem 8 lápis na caixa', o 8 está sendo usado para:",
      opcoes: ["Contar quantidade", "Mostrar ordem", "Ser código"],
      correta: 0,
      explicacao: "Ele diz QUANTOS lápis existem.",
    },
    {
      pergunta: "O número da camisa no futebol serve pra:",
      opcoes: ["Contar jogadores", "Ser código", "Mostrar lugar"],
      correta: 1,
      explicacao: "Só identifica o jogador — é código.",
    },
    {
      pergunta: "Quem chegou em 1º lugar. O 1 é:",
      opcoes: ["Quantidade", "Ordem", "Código"],
      correta: 1,
      explicacao: "Mostra a POSIÇÃO — isso é ordem.",
    },
    {
      pergunta: "Qual desses é CÓDIGO?",
      opcoes: ["3 maçãs", "2º andar", "Placa do carro"],
      correta: 2,
      explicacao: "A placa identifica o carro.",
    },
  ],

  resumo: {
    pontos: [
      "Números podem contar quantidade.",
      "Números podem mostrar ordem.",
      "Números podem ser código.",
      "O mesmo número muda de sentido conforme o lugar.",
    ],
    dica: "Ao ver um número, pergunte: ele CONTA, ORDENA ou IDENTIFICA?",
  },

  revisao: {
    retomada:
      "Relembrar os três superpoderes com exemplos do próprio dia da criança (idade, casa, fila da escola).",
    perguntasRevisao: [
      { pergunta: "Sua idade é contagem, ordem ou código?", resposta: "Contagem." },
      { pergunta: "O número da sua casa é o quê?", resposta: "Código." },
      { pergunta: "Chegar em 1º na corrida é o quê?", resposta: "Ordem." },
    ],
  },

  miniJogo: {
    nome: "Ligue os Superpoderes",
    tipo: "ligar",
    descricao: "Ligar situações do dia a dia ao superpoder do número (contar/ordem/código).",
    refInterativa: "ligar-superpoderes",
  },

  adaptacoes: [
    {
      publico: "TEA",
      estrategias: [
        "Usar cartões visuais fixos representando cada superpoder.",
        "Sequência previsível e sinalização visual entre blocos.",
      ],
      recursos: ["Cartões com pictogramas", "Cronograma visual da missão"],
    },
    {
      publico: "TDAH",
      estrategias: ["Blocos curtos com pausas ativas.", "Feedback imediato após cada resposta."],
      recursos: ["Timer visual", "Recompensas rápidas"],
    },
    {
      publico: "Discalculia",
      estrategias: ["Manipular objetos reais antes de simbolizar.", "Repetir com o mesmo modelo."],
      recursos: ["Material dourado ou tampinhas", "Fichas de contagem"],
    },
    {
      publico: "Geral",
      estrategias: ["Ler em voz alta.", "Permitir explicar com as próprias palavras."],
    },
  ],

  objetivos: [
    "Reconhecer números que contam quantidade.",
    "Reconhecer números que mostram ordem.",
    "Reconhecer números usados como código.",
    "Diferenciar os três usos em situações cotidianas.",
  ],

  competencias: [
    "BNCC Geral 2 — Pensamento científico, crítico e criativo.",
    "BNCC Geral 4 — Comunicação (leitura de números no cotidiano).",
    "Matemática — Números: significado e uso.",
    "Letramento matemático inicial.",
  ],

  meta: {
    versao: "1.0.0",
    atualizadoEm: "2026-07-01",
    autor: "equipe",
  },
};

export default missao;
