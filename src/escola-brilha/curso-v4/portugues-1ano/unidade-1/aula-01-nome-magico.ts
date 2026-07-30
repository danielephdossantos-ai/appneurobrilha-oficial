import type { AulaPortuguesV4 } from "../../types";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * Aula 1 — O Nome Mágico
 * -------------------------------------------------------------
 * Abertura da Unidade 1 (O Alfabeto Mágico) do curso Português 1º
 * Ano — As Chaves da Leitura. Aurora, a Guardiã das Letras, mostra
 * que todo nome é feito de letrinhas mágicas, e a primeira delas
 * é muito especial: a letra inicial do nome da criança.
 *
 * Foco pedagógico:
 *  - Reconhecer que o nome próprio é escrito com letras (EF01LP01).
 *  - Identificar a letra inicial do próprio nome.
 *  - Diferenciar letra MAIÚSCULA (nome próprio, início de frase) de
 *    letra minúscula.
 *
 * BNCC: EF01LP01 · EF12LP01
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-nome-magico",
  titulo: "O Nome Mágico",
  iconeTrilha: "✨",
  bncc: ["EF01LP01", "EF12LP01"],
  duracaoMin: 15,

  // ------------------------------------------------------------
  // 1 · MOTIVAÇÃO
  // ------------------------------------------------------------
  momento01_motivacao: {
    titulo: "Aurora abre o Livro das Letras",
    historia:
      "Aurora é a Guardiã das Letras. Ela guarda um livro mágico cheio de letrinhas soltas. — Cada pessoa tem um NOME, e todo nome é feito de letras, como um colar de contas! Vamos descobrir juntos as letras do SEU nome?",
    imagemUrl: esquiloBrilha,
  },

  // ------------------------------------------------------------
  // 2 · PREVISÃO — cartaz com nomes da turma
  // ------------------------------------------------------------
  momento02_previsao: {
    instrucao:
      "Aurora pendurou um cartaz na sala com os nomes das crianças. Olhe bem antes de descobrir do que ele fala.",
    bloco: {
      titulo: "O Cartaz dos Nomes",
      recado: {
        rotulo: "Cartaz da sala",
        icone: "📝",
        linhas: ["ANA", "LUCAS", "BEA"],
        estilo: "cartaz",
      },
      pergunta: "O que você acha que esse cartaz mostra?",
      hipoteses: [
        { texto: "Os nomes das crianças da turma." },
        { texto: "Uma lista de comidas do lanche." },
        { texto: "Os números da sala de aula." },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! ANA, LUCAS e BEA são NOMES — cada um começa com letra MAIÚSCULA.",
      feedbackErro:
        "Olhe de novo: ANA, LUCAS, BEA — essas palavras são NOMES de pessoas, não comidas nem números.",
    },
  },

  // ------------------------------------------------------------
  // 3 · VOCABULÁRIO
  // ------------------------------------------------------------
  momento03_vocabulario: {
    instrucao: "Duas palavras importantes para a nossa aula de hoje.",
    cards: [
      {
        palavra: "letra",
        explicacao: "É cada sinalzinho que usamos para escrever, como A, B, C.",
        exemplo: "A palavra ANA tem três letras: A, N, A.",
        imagemUrl: quadroAlegre,
      },
      {
        palavra: "nome",
        explicacao: "É a palavra que usamos para chamar cada pessoa.",
        exemplo: "O nome dela é Bea. O nome dele é Lucas.",
        imagemUrl: menina,
      },
    ],
  },

  // ------------------------------------------------------------
  // ENSINO VISUAL — maiúscula x minúscula
  // ------------------------------------------------------------
  momento_ensinoVisual: {
    titulo: "Letra grande e letra pequena",
    instrucao:
      "Toda letra tem duas formas: MAIÚSCULA (grande) e minúscula (pequena). O nome sempre começa com letra maiúscula!",
    blocos: [
      {
        tipo: "maiusculaMinuscula",
        pares: [
          { maiuscula: "A", minuscula: "a", exemplo: "ANA / ana" },
          { maiuscula: "L", minuscula: "l", exemplo: "LUCAS / lucas" },
          { maiuscula: "B", minuscula: "b", exemplo: "BEA / bea" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------
  // 4 · LEITURA GUIADA
  // ------------------------------------------------------------
  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos a história da Ana e da letrinha dela.",
    leitura: {
      titulo: "A Letra da Ana",
      imagemUrl: menina,
      legendaImagem: "Ana escrevendo seu nome",
      destacar: ["ANA", "A"],
      paragrafos: [
        "Ana pegou o lápis e escreveu seu nome: ANA.",
        "A primeira letra do nome dela é o A. É uma letra maiúscula, bem grandona.",
        "Ana ficou feliz. Ela descobriu que o nome dela começa com A, igual a ABELHA.",
      ],
    },
  },

  // ------------------------------------------------------------
  // 5 · COMPREENSÃO
  // ------------------------------------------------------------
  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. A resposta está escrita.",
    perguntas: [
      {
        pergunta: "Qual é o nome da menina da história?",
        opcoes: ["Bea", "Ana", "Lua"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O texto começa com 'Ana pegou o lápis...'.",
        feedbackErro: "Releia a primeira frase: quem pegou o lápis?",
        ondeEstaNoTexto: "Ana pegou o lápis e escreveu seu nome: ANA.",
      },
      {
        pergunta: "Qual é a primeira letra do nome da Ana?",
        opcoes: ["N", "A", "B"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'A primeira letra do nome dela é o A.'",
        feedbackErro: "Está escrito no segundo parágrafo: 'A primeira letra... é o ___'.",
        ondeEstaNoTexto: "A primeira letra do nome dela é o A.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 6 · PERSONAGENS & CENÁRIO
  // ------------------------------------------------------------
  momento06_personagensCenario: {
    instrucao: "Personagem é quem faz a ação. Cenário é onde a ação acontece.",
    perguntas: [
      {
        pergunta: "Quem é o personagem principal dessa história?",
        opcoes: ["Aurora", "Ana", "Lucas"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! É a ANA quem escreve o nome dela.",
        feedbackErro: "Quem pega o lápis e escreve o nome? É ela quem faz a ação.",
      },
      {
        pergunta: "Com que letra é parecida a letra A, segundo o texto?",
        opcoes: ["Com a palavra ABELHA", "Com a palavra BOLA", "Com a palavra CASA"],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo! 'Igual a ABELHA' — está no final do texto.",
        feedbackErro: "Volte no final: 'o nome dela começa com A, igual a...'.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 7 · SEQUÊNCIA
  // ------------------------------------------------------------
  momento07_sequencia: {
    instrucao: "Coloque em ordem os passos de quando a Ana escreveu o nome dela.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Ana pegou o lápis.", imagemUrl: lapis },
        { id: "p2", texto: "Ana escreveu a primeira letra: A.", imagemUrl: quadroAlegre },
        { id: "p3", texto: "Ana terminou de escrever ANA e ficou feliz.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Primeiro pega o lápis, depois escreve, depois termina.",
      feedbackErro: "Pense: primeiro pega o lápis, DEPOIS escreve as letras, por ÚLTIMO termina.",
    },
  },

  // ------------------------------------------------------------
  // 8 · LEITURA INDEPENDENTE
  // ------------------------------------------------------------
  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho a história do Lucas.",
    leitura: {
      titulo: "A Letra do Lucas",
      imagemUrl: menino,
      destacar: ["LUCAS", "L"],
      paragrafos: [
        "Lucas também escreveu seu nome: LUCAS.",
        "A primeira letra do nome dele é o L, uma letra maiúscula.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a primeira letra do nome do Lucas?",
        opcoes: ["A", "L", "S"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! É a letra L.",
        feedbackErro: "Está escrito: 'A primeira letra do nome dele é o ___'.",
        ondeEstaNoTexto: "A primeira letra do nome dele é o L.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 9 · REVISÃO
  // ------------------------------------------------------------
  // ------------------------------------------------------------
  // ESCRITA — traçado com o dedo + ditado com sílabas móveis
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Escrevendo o meu nome",
    instrucao: "A palavra mais importante do mundo é o seu nome. Trace as letras e escreva.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "A", exemplo: "A de ANA", dicaTracado: "dois riscos que se encontram e uma pontinha no meio" },
          { letra: "L", exemplo: "L de LUCAS", dicaTracado: "desce reto e vira para o lado" },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Minha lista de nomes",
        comando: "Escreva o seu nome e o nome de 3 pessoas da sua casa.",
        linhas: 4,
        modelo: ["ANA", "MAMÃE", "PAPAI", "VOVÓ"],
        checklist: ["Escrevi meu nome com letra maiúscula?", "Escrevi todas as letras do nome?", "Deixei espaço entre um nome e outro?"],
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Todo nome é feito de LETRAS.",
      "O nome sempre começa com letra MAIÚSCULA.",
      "Cada pessoa tem uma letra inicial especial no seu nome.",
    ],
    miniDesafio: {
      pergunta: "O nome de uma pessoa sempre começa com...",
      opcoes: ["Letra minúscula", "Letra maiúscula", "Número"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Nome de pessoa começa com letra MAIÚSCULA.",
      feedbackErro: "Lembre da Ana e do Lucas: ANA e LUCAS começam com letra grandona (maiúscula).",
    },
  },

  // ------------------------------------------------------------
  // 10 · AVALIAÇÃO
  // ------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que forma o nosso nome?",
        opcoes: ["Números", "Letras", "Desenhos", "Cores"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Nomes são feitos de LETRAS.",
        feedbackErro: "Pense na Ana: A-N-A são letras, não números nem desenhos.",
      },
      {
        pergunta: "2/5 — Qual é a primeira letra do nome ANA?",
        opcoes: ["N", "A", "M", "O"],
        correta: 1,
        feedbackAcerto: "🎉 Correto, é o A!",
        feedbackErro: "Fale devagar: A-N-A. O primeiro som é o A. O N vem depois.",
      },
      {
        pergunta: "3/5 — Qual é a primeira letra do nome LUCAS?",
        opcoes: ["L", "U", "C", "S"],
        correta: 0,
        feedbackAcerto: "🎉 Isso, é o L!",
        feedbackErro: "LU-CAS: o primeiro som é o L. O U vem logo depois dele.",
      },
      {
        pergunta: "4/5 — Um nome de pessoa começa com letra...",
        opcoes: ["Minúscula (pequena)", "Maiúscula (grande)", "Um número", "Um ponto"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Maiúscula.",
        feedbackErro: "Nomes de pessoas começam com letra GRANDE (maiúscula): Ana, Lucas.",
      },
      {
        pergunta: "5/5 — A palavra ANA tem quantas letras?",
        opcoes: ["Duas", "Três", "Quatro", "Cinco"],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! A-N-A são três letras. Nome mágico desvendado! 🌟",
        feedbackErro: "Conte junto, uma letra por dedo: A - N - A. São três letras.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 11 · MISSÃO EM FAMÍLIA
  // ------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "🏠 Meu nome mágico",
    materiais: ["Papel", "Lápis de cor ou giz de cera"],
    passos: [
      "1) Peça a um adulto para escrever seu nome bem grande num papel.",
      "2) Pinte a primeira letra do seu nome de uma cor diferente das outras.",
      "3) Conte junto com a família quantas letras tem o seu nome.",
      "4) Procure pela casa 3 objetos que comecem com a mesma letra do seu nome.",
    ],
    registro: "📸 Uma foto do papel com o nome pintado, ou um desenho dos objetos encontrados.",
  },

  recompensa: {
    xp: 100,
    moedas: 60,
  },
};
