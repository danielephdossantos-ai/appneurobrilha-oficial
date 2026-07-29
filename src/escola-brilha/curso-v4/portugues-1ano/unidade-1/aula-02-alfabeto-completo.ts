import type { AulaPortuguesV4 } from "../../types";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as dado } from "@/assets/neuro-treino/objetos/dado.png.asset.json";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * Aula 2 — A Trilha do Alfabeto
 * -------------------------------------------------------------
 * Segunda missão da Unidade 1. Aurora leva a criança numa trilha
 * com as 26 letras, sempre em ORDEM: A, B, C, D... até Z.
 *
 * Foco pedagógico:
 *  - Reconhecer as letras do alfabeto e sua ordem convencional.
 *  - Associar letra a um som e a uma palavra-exemplo.
 *  - Perceber que a ordem alfabética ajuda a organizar (dicionário,
 *    lista de chamada).
 *
 * BNCC: EF01LP01 · EF12LP01
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-alfabeto-completo",
  titulo: "A Trilha do Alfabeto",
  iconeTrilha: "🔤",
  bncc: ["EF01LP01", "EF12LP01"],
  duracaoMin: 15,

  // ------------------------------------------------------------
  // 1 · MOTIVAÇÃO
  // ------------------------------------------------------------
  momento01_motivacao: {
    titulo: "A trilha secreta de Aurora",
    historia:
      "Aurora mostra um mapa enrolado: — Esta é a Trilha do Alfabeto! Ela tem 26 paradas, uma para cada letra, sempre na mesma ordem: A, B, C... até chegar no Z. Vamos caminhar por ela?",
    imagemUrl: esquiloBrilha,
  },

  // ------------------------------------------------------------
  // 2 · PREVISÃO
  // ------------------------------------------------------------
  momento02_previsao: {
    instrucao: "Aurora mostra o mapa da trilha. Olhe bem antes de descobrir do que ele fala.",
    bloco: {
      titulo: "O Mapa da Trilha do Alfabeto",
      capaImagemUrl: mapaPercurso,
      pergunta: "O que você acha que tem escrito nesse mapa?",
      hipoteses: [
        { texto: "As 26 letras do alfabeto, em ordem." },
        { texto: "Uma receita de bolo." },
        { texto: "Os nomes dos dias da semana." },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! É um mapa com as letras do alfabeto, sempre na mesma ordem.",
      feedbackErro: "O mapa é da 'Trilha do Alfabeto' — pense em letras, não em comida ou dias.",
    },
  },

  // ------------------------------------------------------------
  // 3 · VOCABULÁRIO
  // ------------------------------------------------------------
  momento03_vocabulario: {
    instrucao: "Duas palavras para entender a trilha de hoje.",
    cards: [
      {
        palavra: "alfabeto",
        explicacao: "É o conjunto de todas as letras que usamos para escrever.",
        exemplo: "O alfabeto tem 26 letras, de A até Z.",
        imagemUrl: mapaPercurso,
      },
      {
        palavra: "ordem",
        explicacao: "É quando as coisas ficam uma depois da outra, sem trocar de lugar.",
        exemplo: "No alfabeto, o B vem depois do A, sempre na mesma ordem.",
        imagemUrl: dado,
      },
    ],
  },

  // ------------------------------------------------------------
  // ENSINO VISUAL — alfabeto completo com exemplos
  // ------------------------------------------------------------
  momento_ensinoVisual: {
    titulo: "Conhecendo as letras",
    instrucao: "Cada letra tem um som e pode começar uma palavra. Veja alguns exemplos.",
    blocos: [
      {
        tipo: "alfabetoCompleto",
        exemplos: {
          A: "ABELHA",
          B: "BOLA",
          C: "CASA",
          D: "DADO",
          E: "ESTRELA",
          F: "FLOR",
          G: "GATO",
          M: "MAPA",
          S: "SAPO",
          Z: "ZEBRA",
        },
      },
    ],
  },

  // ------------------------------------------------------------
  // 4 · LEITURA GUIADA
  // ------------------------------------------------------------
  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos a história da trilha.",
    leitura: {
      titulo: "A Trilha das 26 Letras",
      imagemUrl: mapaPercurso,
      legendaImagem: "O mapa da trilha",
      destacar: ["alfabeto", "ordem", "Z"],
      paragrafos: [
        "O alfabeto tem 26 letras. Elas andam sempre na mesma ordem.",
        "A primeira parada é o A, de ABELHA. A última parada é o Z, de ZEBRA.",
        "Quando sabemos a ordem das letras, fica mais fácil achar palavras no dicionário.",
      ],
    },
  },

  // ------------------------------------------------------------
  // 5 · COMPREENSÃO
  // ------------------------------------------------------------
  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Quantas letras tem o alfabeto?",
        opcoes: ["10", "26", "5"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'O alfabeto tem 26 letras.'",
        feedbackErro: "A primeira frase do texto diz o número certo.",
        ondeEstaNoTexto: "O alfabeto tem 26 letras.",
      },
      {
        pergunta: "Qual é a última letra do alfabeto?",
        opcoes: ["A", "M", "Z"],
        correta: 2,
        feedbackAcerto: "🎉 Correto! 'A última parada é o Z.'",
        feedbackErro: "Procure a palavra 'última' no segundo parágrafo.",
        ondeEstaNoTexto: "A última parada é o Z, de ZEBRA.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 6 · PERSONAGENS & CENÁRIO
  // ------------------------------------------------------------
  momento06_personagensCenario: {
    instrucao: "Pense em quem guia a trilha e onde ela acontece.",
    perguntas: [
      {
        pergunta: "Quem mostrou o mapa da trilha do alfabeto?",
        opcoes: ["Aurora", "A zebra", "O Lucas"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Foi a Aurora quem mostrou o mapa.",
        feedbackErro: "Releia a motivação: quem mostrou o mapa enrolado?",
      },
      {
        pergunta: "Por que saber a ordem das letras ajuda?",
        opcoes: [
          "Para achar palavras no dicionário mais fácil",
          "Para pintar desenhos",
          "Para correr mais rápido",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Está no último parágrafo do texto.",
        feedbackErro: "Releia a última frase da leitura guiada.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 7 · SEQUÊNCIA
  // ------------------------------------------------------------
  momento07_sequencia: {
    instrucao: "Coloque estas letras na ordem certa do alfabeto.",
    bloco: {
      instrucao: "Do começo para o fim da trilha.",
      itens: [
        { id: "l1", texto: "A", imagemUrl: abelha },
        { id: "l2", texto: "B", imagemUrl: bola },
        { id: "l3", texto: "C", imagemUrl: casa },
        { id: "l4", texto: "D", imagemUrl: dado },
      ],
      ordemCerta: ["l1", "l2", "l3", "l4"],
      feedbackAcerto: "🎉 Isso! A, B, C, D — na ordem certa da trilha.",
      feedbackErro: "Lembre a ordem: A vem antes de B, B vem antes de C, C vem antes de D.",
    },
  },

  // ------------------------------------------------------------
  // 8 · LEITURA INDEPENDENTE
  // ------------------------------------------------------------
  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho.",
    leitura: {
      titulo: "A lista de chamada",
      imagemUrl: estrela,
      destacar: ["ordem", "chamada"],
      paragrafos: [
        "A professora usa a ordem do alfabeto para fazer a lista de chamada.",
        "Quem tem nome que começa com A é chamado antes de quem tem nome que começa com B.",
      ],
    },
    perguntas: [
      {
        pergunta: "Para que a professora usa a ordem do alfabeto?",
        opcoes: ["Para fazer a lista de chamada", "Para pintar a sala", "Para contar histórias"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Está na primeira frase.",
        feedbackErro: "Releia a primeira frase do texto.",
        ondeEstaNoTexto: "A professora usa a ordem do alfabeto para fazer a lista de chamada.",
      },
    ],
  },

  // ------------------------------------------------------------
  // MINIJOGO — arrastar letra até a palavra que começa com ela
  // ------------------------------------------------------------
  momento_minijogo: {
    titulo: "Letra e Palavra",
    instrucao: "Arraste cada letra até a palavra que começa com ela.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Encontre o par certo",
      bloco: {
        instrucao: "Arraste a letra até a imagem certa.",
        itens: [
          { id: "letraA", texto: "A", alvoId: "alvoAbelha" },
          { id: "letraB", texto: "B", alvoId: "alvoBola" },
          { id: "letraC", texto: "C", alvoId: "alvoCasa" },
          { id: "letraD", texto: "D", alvoId: "alvoDado" },
        ],
        alvos: [
          { id: "alvoAbelha", nome: "ABELHA", imagemUrl: abelha },
          { id: "alvoBola", nome: "BOLA", imagemUrl: bola },
          { id: "alvoCasa", nome: "CASA", imagemUrl: casa },
          { id: "alvoDado", nome: "DADO", imagemUrl: dado },
        ],
        feedbackAcerto: "🎉 Muito bem! Cada letra combina com a palavra que ela inicia.",
        feedbackErro: "Pense no SOM da letra: A de ABELHA, B de BOLA, C de CASA, D de DADO.",
      },
    },
  },

  // ------------------------------------------------------------
  // 9 · REVISÃO
  // ------------------------------------------------------------
  momento09_revisao: {
    pontos: [
      "O alfabeto tem 26 letras, sempre na mesma ORDEM.",
      "A trilha começa no A e termina no Z.",
      "Cada letra pode começar uma palavra, como A de ABELHA.",
    ],
    miniDesafio: {
      pergunta: "Qual letra vem logo depois do A na trilha?",
      opcoes: ["Z", "B", "C"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Depois do A vem o B.",
      feedbackErro: "Lembre a ordem: A, B, C... o B vem logo depois do A.",
    },
  },

  // ------------------------------------------------------------
  // 10 · AVALIAÇÃO
  // ------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quantas letras tem o alfabeto?",
        opcoes: ["26", "10", "50"],
        correta: 0,
        feedbackAcerto: "🎉 Isso, 26!",
        feedbackErro: "O alfabeto tem 26 letras.",
      },
      {
        pergunta: "2/5 — Qual é a primeira letra do alfabeto?",
        opcoes: ["Z", "A", "M"],
        correta: 1,
        feedbackAcerto: "🎉 Isso, é o A!",
        feedbackErro: "A trilha começa no A.",
      },
      {
        pergunta: "3/5 — Qual é a última letra do alfabeto?",
        opcoes: ["Z", "B", "A"],
        correta: 0,
        feedbackAcerto: "🎉 Correto, é o Z!",
        feedbackErro: "A trilha termina no Z.",
      },
      {
        pergunta: "4/5 — 'CASA' começa com qual letra?",
        opcoes: ["C", "A", "S"],
        correta: 0,
        feedbackAcerto: "🎉 Isso, é o C!",
        feedbackErro: "Ouça o começo da palavra: CA-SA, começa com C.",
      },
      {
        pergunta: "5/5 — Para que serve saber a ordem do alfabeto?",
        opcoes: [
          "Para organizar listas e achar palavras",
          "Para correr mais rápido",
          "Para desenhar melhor",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ajuda a organizar listas, como a lista de chamada. Trilha concluída! 🌟",
        feedbackErro: "Pense na lista de chamada da professora: ela usa a ordem do alfabeto.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 11 · MISSÃO EM FAMÍLIA
  // ------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "🏠 Cante o alfabeto",
    materiais: ["Nenhum material — só a voz!"],
    passos: [
      "1) Cante a música do alfabeto (A, B, C...) junto com um adulto.",
      "2) Peça para o adulto dizer uma letra e você fala uma palavra que começa com ela.",
      "3) Troquem: você diz a letra, o adulto diz a palavra.",
      "4) Repitam pelo menos 5 letras diferentes.",
    ],
    registro: "🎙️ Grave um áudio cantando o alfabeto ou desenhe 3 letras com suas palavras.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
