import type { Aula } from "../types";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";

/**
 * EF01LP04 — Aula 004 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 * BNCC: Distinguir as letras do alfabeto de outros sinais gráficos.
 *
 * Missão do Dia: "O Portal dos Símbolos Perdidos".
 * Padrão travado (Português): novo tipo `selecionarLetras` — cartões
 * misturados (letras/números/símbolos); ao tocar, TTS fala o cartão e
 * valida por categoria.
 */
const aula: Aula = {
  codigo: "EF01LP04",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Portal dos Símbolos Perdidos",

  narrativa: {
    titulo: "O Portal dos Símbolos Perdidos",
    contexto:
      "O Brilha encontrou um portal mágico que só abre quando as 26 letras do alfabeto ficam separadas dos outros símbolos.",
    problema:
      "O Vento Bagunceiro misturou tudo: letras, números, emojis e sinais de pontuação. Ninguém sabe mais o que é o quê.",
    convite:
      "Vamos ser detetives e descobrir quem é letra, quem é número e quem é símbolo?",
  },

  conhecimentosPrevios: [
    "Reconhecer algumas letras do alfabeto.",
    "Saber que existem números.",
    "Ler da esquerda para a direita (EF01LP01).",
  ],

  missao:
    "Diferenciar LETRAS de números e outros símbolos, sabendo que só as letras formam palavras.",

  objetivos: [
    "Reconhecer as letras do alfabeto.",
    "Diferenciar letras de números.",
    "Identificar sinais gráficos (símbolos).",
    "Compreender que só as letras formam palavras.",
  ],

  motivacao:
    "Cada símbolo tem uma função! As letras formam palavras, os números servem pra contar, e os símbolos organizam ou representam outras coisas.",

  explicacao:
    "Existem 3 tipos de sinais que a gente vê no dia a dia:\n\n🔤 LETRAS: A B C D E F G... São 26 no alfabeto português. Usadas pra escrever palavras (GATO, SOL, CASA).\n\n🔢 NÚMEROS: 1 2 3 4 5 6 7 8 9 0. Usados pra contar (2 gatos, 5 flores).\n\n🔣 SÍMBOLOS: ! ? . , @ % $ + −. Servem pra organizar frases (ponto, vírgula) ou representar outras coisas (@ em e-mail, % de porcentagem).\n\nSó as LETRAS formam palavras!",

  explicacoesNiveis: {
    nivel1: "Letras formam palavras. Números contam. Símbolos organizam.",
    nivel2:
      "O alfabeto tem 26 letras: de A até Z. Cada letra pode ser MAIÚSCULA (A) ou minúscula (a).",
    nivel3:
      "Números são 10 sinais: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 — servem pra contar.",
    nivel4:
      "Sinais como ! ? . , @ % têm outras funções: pontuar, marcar tom, indicar e-mail, porcentagem, etc.",
  },

  exemploResolvido: {
    enunciado: "Nesta lista, quais são letras: A · 7 · % · B · @ · M?",
    passos: [
      "Olhe cada símbolo com calma.",
      "Pergunte: 'Isso é do alfabeto?' Só passa quem é do alfabeto.",
      "A, B e M são letras. 7 é número. % e @ são símbolos.",
    ],
    resposta: "Letras: A, B, M. Número: 7. Símbolos: %, @.",
  },

  atividadeGuiada: {
    enunciado:
      "Toque em cada cartão pra ouvir. Só as LETRAS abrem o portal.",
    resposta: "As letras são A, B e M.",
    explicacao:
      "Letras fazem parte do alfabeto e formam palavras. Números contam e símbolos têm outras funções.",
    visual: {
      tipo: "escolherImagem",
      pergunta:
        "Qual figura tem o nome escrito com LETRAS (não com números)?",
      opcoes: [
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "gato",
    },
  },

  exercicios: [
    {
      enunciado: "🔤 A é letra, número ou símbolo?",
      resposta: "Letra — a primeira do alfabeto.",
      dica: "Fala baixinho o alfabeto: A, B, C... A é a primeira!",
    },
    {
      enunciado: "🔢 5 é letra, número ou símbolo?",
      resposta: "Número — serve pra contar.",
      dica: "Você usa quando conta: 1, 2, 3, 4, 5.",
    },
    {
      enunciado: "🔣 @ é letra, número ou símbolo?",
      resposta: "Símbolo — aparece em e-mails.",
      dica: "Não faz parte do alfabeto nem serve pra contar.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: 3 perguntas sobre letras, números e símbolos.",
    resposta:
      "Letra é do alfabeto. Número conta. Símbolo tem outras funções.",
    visual: {
      cena: [
        { personagem: "LETRA", itemImagemUrl: gatoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "NÚMERO", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "SÍMBOLO", itemImagemUrl: bolaImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        {
          pergunta: "Qual destes é uma LETRA?",
          opcoes: ["9", "K", "%"],
          correta: 1,
          explicacao: "K é do alfabeto — faz parte das 26 letras.",
        },
        {
          pergunta: "Qual destes é um NÚMERO?",
          opcoes: ["C", "3", "@"],
          correta: 1,
          explicacao: "3 é número — serve pra contar (1, 2, 3...).",
        },
        {
          pergunta: "Qual destes é um SÍMBOLO?",
          opcoes: ["!", "A", "2"],
          correta: 0,
          explicacao: "! é ponto de exclamação — símbolo que dá tom à frase.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🔤 Letras (A-Z): formam palavras.",
      "🔢 Números (0-9): servem pra contar.",
      "🔣 Símbolos (! ? . , @ %): organizam textos ou representam outras coisas.",
      "Letras podem ser MAIÚSCULAS (A) ou minúsculas (a) — continuam sendo letras.",
    ],
    dica: "Antes de decidir, pergunte: 'Isso é do alfabeto? Serve pra contar? Ou tem outra função?'",
  },

  quiz: [
    {
      pergunta: "Qual destes é uma LETRA?",
      opcoes: ["B", "8", "%"],
      correta: 0,
      explicacao: "B é a segunda letra do alfabeto.",
    },
    {
      pergunta: "Qual destes é um NÚMERO?",
      opcoes: ["C", "5", "@"],
      correta: 1,
      explicacao: "5 é número — vem depois do 4 e antes do 6.",
    },
    {
      pergunta: "Qual destes é um SÍMBOLO?",
      opcoes: ["!", "A", "2"],
      correta: 0,
      explicacao: "! é o ponto de exclamação, um símbolo de pontuação.",
    },
    {
      pergunta: "As palavras são escritas usando:",
      opcoes: ["Letras", "Apenas números", "Apenas símbolos"],
      correta: 0,
      explicacao:
        "Só as letras formam palavras. Números contam e símbolos têm outras funções.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião do Alfabeto! Missão em Família: procure letras pela casa (embalagens, revistas, placas). Faça 3 listas: letras, números e símbolos que encontrou.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O alfabeto da língua portuguesa tem 26 letras. Com elas dá pra escrever MILHARES de palavras diferentes — só mudando a ordem e a combinação!",
  },

  interativas: [
    {
      tipo: "selecionarLetras",
      titulo: "Fase 1 · Caça às Letras",
      instrucao:
        "Toque em cada cartão pra ouvir. Só toque nas LETRAS do alfabeto.",
      alvo: "letra",
      cartoes: [
        { simbolo: "A", tipo: "letra" },
        { simbolo: "7", tipo: "numero", fala: "sete" },
        { simbolo: "%", tipo: "simbolo", fala: "por cento" },
        { simbolo: "B", tipo: "letra" },
        { simbolo: "@", tipo: "simbolo", fala: "arroba" },
        { simbolo: "4", tipo: "numero", fala: "quatro" },
        { simbolo: "M", tipo: "letra" },
        { simbolo: "?", tipo: "simbolo", fala: "ponto de interrogação" },
        { simbolo: "Z", tipo: "letra" },
      ],
      acerto: "🎉 Excelente! Você achou todas as letras. Elas formam palavras!",
      erro: "Esse não é uma letra. Continue procurando as letras do alfabeto.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Arraste para o lugar certo",
      instrucao:
        "Toque no cartão e depois na caixa da categoria certa: Letras, Números ou Símbolos.",
      pares: [
        { item: "F", alvo: "🔤 Letras" },
        { item: "R", alvo: "🔤 Letras" },
        { item: "C", alvo: "🔤 Letras" },
        { item: "8", alvo: "🔢 Números" },
        { item: "2", alvo: "🔢 Números" },
        { item: "$", alvo: "🔣 Símbolos" },
        { item: "!", alvo: "🔣 Símbolos" },
        { item: "?", alvo: "🔣 Símbolos" },
      ],
      alvosVisuais: [
        { nome: "🔤 Letras", cor: "#F472B6", capacidade: 3 },
        { nome: "🔢 Números", cor: "#FBBF24", capacidade: 2 },
        { nome: "🔣 Símbolos", cor: "#60A5FA", capacidade: 3 },
      ],
    },
    {
      tipo: "selecionarLetras",
      titulo: "Fase 3 · O Trem do Alfabeto",
      instrucao:
        "Cada vagão só aceita LETRAS. Toque em cada cartão pra ouvir e coloque só as letras no trem.",
      alvo: "letra",
      cartoes: [
        { simbolo: "A", tipo: "letra" },
        { simbolo: "3", tipo: "numero", fala: "três" },
        { simbolo: "G", tipo: "letra" },
        { simbolo: "%", tipo: "simbolo", fala: "por cento" },
        { simbolo: "N", tipo: "letra" },
        { simbolo: "Y", tipo: "letra" },
        { simbolo: "5", tipo: "numero", fala: "cinco" },
      ],
      acerto: "🚂 Trem completo! Todas as letras a bordo.",
      erro: "Esse não é letra — o vagão não aceita.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 4 · Complete a palavra",
      instrucao:
        "Falta a letra do meio na palavra da figura: S _ L. Toque pra ouvir cada opção.",
      figura: { imagemUrl: solImg, rotulo: "☀️ S _ L" },
      pergunta: "Qual dessas é uma LETRA que completa a palavra?",
      opcoes: ["O", "4", "@"],
      correta: 0,
      acerto: "Perfeito! SOL — S · O · L. Só letras formam a palavra.",
      erro: "4 é número e @ é símbolo. Só a letra completa a palavra.",
    },
    {
      tipo: "selecionarLetras",
      titulo: "Fase 5 · Laboratório do Brilha",
      instrucao:
        "Última rodada: selecione somente as LETRAS entre todos os cartões.",
      alvo: "letra",
      cartoes: [
        { simbolo: "P", tipo: "letra" },
        { simbolo: "9", tipo: "numero", fala: "nove" },
        { simbolo: "B", tipo: "letra" },
        { simbolo: "?", tipo: "simbolo", fala: "ponto de interrogação" },
        { simbolo: "H", tipo: "letra" },
        { simbolo: "1", tipo: "numero", fala: "um" },
        { simbolo: "C", tipo: "letra" },
        { simbolo: "%", tipo: "simbolo", fala: "por cento" },
      ],
      acerto: "🏆 Portal aberto! Você é um Guardião do Alfabeto.",
      erro: "Esse não é letra. Continue procurando.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual destes é uma LETRA?",
        opcoes: ["A", "5", "?"],
        correta: 0,
        explicacao: "A é do alfabeto — a primeira letra.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🔤 A" },
      },
      {
        pergunta: "Qual destes é um NÚMERO?",
        opcoes: ["M", "7", "$"],
        correta: 1,
        explicacao: "7 é número — serve pra contar.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 7, rotulo: "🔢 7" },
      },
      {
        pergunta: "Qual destes é um SÍMBOLO?",
        opcoes: ["B", "3", "!"],
        correta: 2,
        explicacao: "! é ponto de exclamação — símbolo de pontuação.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "🔣 !" },
      },
    ],
    medio: [
      {
        pergunta: "Quantas letras tem o alfabeto português?",
        opcoes: ["10", "26", "100"],
        correta: 1,
        explicacao: "26 letras, de A até Z.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🔤 A-Z" },
      },
      {
        pergunta: "As letras servem pra...",
        opcoes: ["Contar", "Formar palavras", "Marcar tempo"],
        correta: 1,
        explicacao: "Letras formam palavras. Números contam.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🔤 GATO" },
      },
      {
        pergunta: "Qual destes NÃO forma palavra?",
        opcoes: ["A", "8", "M"],
        correta: 1,
        explicacao: "8 é número — não faz parte de palavras.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "🔢 8" },
      },
    ],
    dificil: [
      {
        pergunta: "A e a são a MESMA letra?",
        opcoes: ["Sim, uma é maiúscula e outra minúscula", "Não, são diferentes", "Só se estiverem juntas"],
        correta: 0,
        explicacao: "A (maiúscula) e a (minúscula) representam a mesma letra do alfabeto.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "A = a" },
      },
      {
        pergunta: "@ é usado principalmente em...",
        opcoes: ["E-mails", "Palavras", "Contas de matemática"],
        correta: 0,
        explicacao: "@ (arroba) é o símbolo que separa o nome do e-mail.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🔣 @" },
      },
      {
        pergunta: "Se eu escrever '2ATO' em vez de GATO, o que aconteceu?",
        opcoes: [
          "Troquei uma letra por um número",
          "Está certo",
          "Sobrou uma letra",
        ],
        correta: 0,
        explicacao:
          "G é letra, 2 é número. Só letras formam palavras — por isso '2ATO' não é uma palavra.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱 GATO" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP05",
    titulo: "Reconhecer o sistema de escrita alfabética como representação dos sons da fala",
  },
};

export default aula;
