import type { AulaPortuguesV4 } from "../../types";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 1 — Duas Sílabas, Uma Palavra
 * -------------------------------------------------------------
 * Abertura da Unidade 2 (A Fábrica de Sílabas).
 * A professora Aurora leva a turma pra dentro de uma fábrica
 * mágica que "junta pedacinhos de som" e forma palavras: BO+LA,
 * CA+SA, PA+TO.
 *
 * Foco pedagógico:
 *  - Perceber que palavras são formadas por pedacinhos de som (sílabas).
 *  - Juntar 2 sílabas para formar palavras conhecidas.
 *  - Ler e reconhecer palavras de 2 sílabas.
 *
 * BNCC: EF01LP05 (segmentar oralmente palavras em sílabas),
 *       EF01LP06 (identificar número de sílabas)
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-silabas-simples",
  titulo: "Duas Sílabas, Uma Palavra",
  iconeTrilha: "🧩",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,

  // ------------------------------------------------------------
  // 1 · MOTIVAÇÃO
  // ------------------------------------------------------------
  momento01_motivacao: {
    titulo: "A Fábrica de Sílabas",
    historia:
      "A professora Aurora levou a turma pra visitar uma fábrica diferente de todas. Lá dentro, um robozinho pega pedacinhos de som e ENCAIXA um no outro pra formar palavras. — Cada palavra tem pedacinhos chamados SÍLABAS! Bora aprender a juntar? — disse Aurora.",
    imagemUrl: robo,
  },

  // ------------------------------------------------------------
  // 2 · PREVISÃO
  // ------------------------------------------------------------
  momento02_previsao: {
    instrucao:
      "Olhe a capa: uma fábrica cheia de caixinhas com pedacinhos de palavras. Do que você acha que essa história vai falar?",
    bloco: {
      titulo: "A Fábrica que Junta Palavras",
      capaImagemUrl: caixa,
      pistas: [
        { imagemUrl: caixa, nome: "Caixinhas de sílabas" },
        { imagemUrl: robo, nome: "Robô montador" },
      ],
      pergunta: "Sobre o que essa história vai falar?",
      hipoteses: [
        { texto: "Um robô que junta pedacinhos de som pra formar palavras.", imagemUrl: robo },
        { texto: "Um passeio de barco no mar.", imagemUrl: caixa },
        { texto: "Uma receita de bolo de chocolate.", imagemUrl: caixa },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! A capa mostra caixinhas e um robô montador — a história é sobre juntar pedacinhos de palavras.",
      feedbackErro:
        "Olhe de novo: aparecem caixinhas de sílabas e um robô. A história fala de juntar pedacinhos de som.",
    },
  },

  // ------------------------------------------------------------
  // 3 · VOCABULÁRIO
  // ------------------------------------------------------------
  momento03_vocabulario: {
    instrucao: "Duas palavras novas antes de entrar na fábrica.",
    cards: [
      {
        palavra: "sílaba",
        explicacao: "É um pedacinho de som da palavra. A gente bate palma pra cada pedacinho.",
        exemplo: "BO-LA tem dois pedacinhos: BO e LA.",
        imagemUrl: bola,
      },
      {
        palavra: "juntar",
        explicacao: "É colocar uma coisa perto da outra pra formar algo novo.",
        exemplo: "Quando eu junto BO com LA, forma a palavra BOLA.",
        imagemUrl: robo,
      },
    ],
  },

  // ------------------------------------------------------------
  // ENSINO VISUAL — mostrar sílaba se juntando antes de cobrar
  // ------------------------------------------------------------
  momento_ensinoVisual: {
    titulo: "Veja o robô juntando sílabas",
    instrucao: "Aurora mostra como duas sílabas se encaixam e formam uma palavra.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "BO + LA = BOLA", explicacao: "Junte o pedacinho BO com o pedacinho LA." },
          { texto: "CA + SA = CASA", explicacao: "Junte o pedacinho CA com o pedacinho SA." },
          { texto: "PA + TO = PATO", explicacao: "Junte o pedacinho PA com o pedacinho TO." },
        ],
      },
    ],
  },

  // ------------------------------------------------------------
  // 4 · LEITURA GUIADA
  // ------------------------------------------------------------
  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos a história da fábrica. Aperte 🔊 se quiser ouvir.",
    leitura: {
      titulo: "A Fábrica que Junta Palavras",
      imagemUrl: robo,
      legendaImagem: "O robô monta palavras",
      destacar: ["sílaba", "BOLA", "CASA", "PATO"],
      paragrafos: [
        "Na fábrica, cada palavra nasce de pedacinhos chamados sílaba.",
        "O robô pega BO e LA e junta: forma BOLA. Pega CA e SA e junta: forma CASA.",
        "Depois pega PA e TO e junta: forma PATO. Aurora bate palma em cada pedacinho: BO-LA, CA-SA, PA-TO!",
      ],
    },
  },

  // ------------------------------------------------------------
  // 5 · COMPREENSÃO
  // ------------------------------------------------------------
  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Como se chama cada pedacinho de som de uma palavra?",
        opcoes: ["Sílaba", "Letra", "Livro"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O texto diz 'pedacinhos chamados sílaba'.",
        feedbackErro: "Olhe a primeira frase: '...pedacinhos chamados sílaba'.",
        ondeEstaNoTexto: "cada palavra nasce de pedacinhos chamados sílaba.",
      },
      {
        pergunta: "Quais pedacinhos o robô junta pra formar BOLA?",
        opcoes: ["PA e TO", "CA e SA", "BO e LA"],
        correta: 2,
        feedbackAcerto: "🎉 Boa! 'O robô pega BO e LA e junta: forma BOLA'.",
        feedbackErro: "Está no segundo parágrafo: 'pega BO e LA e junta'.",
        ondeEstaNoTexto: "O robô pega BO e LA e junta: forma BOLA.",
      },
      {
        pergunta: "O que forma quando junta PA + TO?",
        opcoes: ["CASA", "PATO", "BOLA"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'pega PA e TO e junta: forma PATO'.",
        feedbackErro: "Está no último parágrafo, procure 'PA e TO'.",
        ondeEstaNoTexto: "pega PA e TO e junta: forma PATO.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 6 · PERSONAGENS & CENÁRIO
  // ------------------------------------------------------------
  momento06_personagensCenario: {
    instrucao: "Quem faz as ações e onde a história acontece?",
    perguntas: [
      {
        pergunta: "Quem junta as sílabas na fábrica?",
        opcoes: ["O robô", "A turma", "O pato"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! É o ROBÔ quem pega e junta os pedacinhos.",
        feedbackErro: "Volte no texto: quem 'pega' e 'junta' os pedacinhos? É o robô.",
      },
      {
        pergunta: "Onde acontece essa história?",
        opcoes: ["Na fábrica de sílabas", "Na praia", "No parquinho"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Tudo acontece dentro da FÁBRICA.",
        feedbackErro: "O título já dá a pista: 'A Fábrica que Junta Palavras'.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 7 · SEQUÊNCIA
  // ------------------------------------------------------------
  momento07_sequencia: {
    instrucao: "As caixinhas embaralharam. Coloque a ordem certa de como o robô monta BOLA.",
    bloco: {
      instrucao: "Do primeiro pedacinho até a palavra pronta.",
      itens: [
        { id: "p1", texto: "O robô pega o pedacinho BO.", imagemUrl: caixa },
        { id: "p2", texto: "O robô pega o pedacinho LA.", imagemUrl: caixa },
        { id: "p3", texto: "Os pedacinhos se juntam e formam BOLA.", imagemUrl: bola },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Isso! Primeiro os pedacinhos separados, depois juntos formam a palavra.",
      feedbackErro: "Pense: primeiro vem BO, depois LA, só no final os dois se juntam.",
    },
  },

  // ------------------------------------------------------------
  // 8 · LEITURA INDEPENDENTE
  // ------------------------------------------------------------
  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A caixinha da CASA",
      imagemUrl: casa,
      destacar: ["CA", "SA", "CASA"],
      paragrafos: [
        "Aurora pegou duas caixinhas: uma com CA e outra com SA.",
        "Ela juntou as duas e leu bem devagar: CA-SA. A palavra formada foi CASA!",
      ],
    },
    perguntas: [
      {
        pergunta: "Quais pedacinhos Aurora pegou?",
        opcoes: ["BO e LA", "CA e SA", "PA e TO"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'duas caixinhas: uma com CA e outra com SA'.",
        feedbackErro: "Está na primeira frase: 'uma com CA e outra com SA'.",
        ondeEstaNoTexto: "duas caixinhas: uma com CA e outra com SA.",
      },
      {
        pergunta: "Qual palavra se formou ao juntar CA + SA?",
        opcoes: ["CASA", "BOLA", "PATO"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! 'A palavra formada foi CASA!'",
        feedbackErro: "Está na última frase: 'A palavra formada foi ...'.",
        ondeEstaNoTexto: "A palavra formada foi CASA!",
      },
    ],
  },

  // ------------------------------------------------------------
  // MINIJOGO — montar palavra com sílabas embaralhadas
  // ------------------------------------------------------------
  momento_minijogo: {
    titulo: "Monte as Palavras da Fábrica",
    instrucao: "Arraste as sílabas embaralhadas na ordem certa pra montar cada palavra.",
    jogo: {
      tipo: "montarPalavra",
      titulo: "A Linha de Montagem",
      bloco: {
        instrucao: "Toque nas sílabas na ordem certa pra formar a palavra.",
        palavras: [
          { id: "w1", palavraCerta: "BOLA", silabas: ["BO", "LA"], imagemUrl: bola, frase: "A BOLA é redonda." },
          { id: "w2", palavraCerta: "CASA", silabas: ["CA", "SA"], imagemUrl: casa, frase: "Eu moro em uma CASA." },
          { id: "w3", palavraCerta: "PATO", silabas: ["PA", "TO"], imagemUrl: pato, frase: "O PATO nada no lago." },
        ],
        feedbackAcerto: "🎉 Você é um verdadeiro montador de palavras!",
        feedbackErro: "Ouça as sílabas de novo e toque na ordem: primeiro pedacinho, depois o segundo.",
      },
    },
  },

  // ------------------------------------------------------------
  // 9 · REVISÃO
  // ------------------------------------------------------------
  // ------------------------------------------------------------
  // ESCRITA — traçado com o dedo + ditado com sílabas móveis
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Escreva as palavras da fábrica",
    instrucao: "O robô montou. Agora é você quem monta e escreve.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "B", exemplo: "B de BOLA", dicaTracado: "desce e faz duas barrigas" },
          { letra: "C", exemplo: "C de CASA", dicaTracado: "faz uma meia-lua aberta" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "BOLA", silabas: ["BO", "LA"], distratores: ["CA", "TO"], dica: "BO + LA." },
          { palavra: "CASA", silabas: ["CA", "SA"], distratores: ["PA", "LO"], dica: "CA + SA." },
          { palavra: "PATO", silabas: ["PA", "TO"], distratores: ["SA", "BE"], dica: "PA + TO." },
        ],
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Palavras são formadas por pedacinhos de som chamados SÍLABAS.",
      "BO + LA = BOLA, CA + SA = CASA, PA + TO = PATO.",
      "A gente bate palma pra sentir cada pedacinho.",
    ],
    miniDesafio: {
      pergunta: "Juntando os pedacinhos PA e TO, formamos a palavra…",
      opcoes: ["CASA", "PATO", "BOLA"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! PA + TO = PATO.",
      feedbackErro: "Lembre: PA junto com TO forma PATO.",
    },
  },

  // ------------------------------------------------------------
  // 10 · AVALIAÇÃO
  // ------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Como se chama cada pedacinho de som de uma palavra?",
        opcoes: ["Sílaba", "Letra", "Palavra", "Frase"],
        correta: 0,
        feedbackAcerto: "🎉 SÍLABA!",
        feedbackErro: "Letra é o desenho; o pedacinho de SOM que a gente fala numa palma é a SÍLABA.",
      },
      {
        pergunta: "2/5 — BO + LA forma qual palavra?",
        opcoes: ["LOBA", "BOLA", "BOLO", "BALA"],
        correta: 1,
        feedbackAcerto: "🎉 BOLA!",
        feedbackErro: "Na ordem certa: BO primeiro, LA depois = BOLA. Ao contrário daria LO-BA.",
      },
      {
        pergunta: "3/5 — CA + SA forma qual palavra?",
        opcoes: ["CASA", "SACA", "CAÇA", "CAMA"],
        correta: 0,
        feedbackAcerto: "🎉 CASA!",
        feedbackErro: "CA junto com SA forma CASA. Trocando a ordem daria SA-CA.",
      },
      {
        pergunta: "4/5 — PA + TO forma qual palavra?",
        opcoes: ["TOPA", "PATO", "PATA", "POTE"],
        correta: 1,
        feedbackAcerto: "🎉 PATO!",
        feedbackErro: "A segunda sílaba é TO, não TA: PA-TO.",
      },
      {
        pergunta: "5/5 — Quantas sílabas tem a palavra BOLA?",
        opcoes: ["Uma", "Duas", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! BO-LA tem DUAS sílabas. Você virou um montador de palavras! 🌟",
        feedbackErro: "Bata palma: BO (1) - LA (2). São duas sílabas — quatro é o número de LETRAS.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 11 · MISSÃO EM FAMÍLIA
  // ------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "🏠 Caça-sílabas em casa",
    materiais: ["Objetos da casa (ex.: bola, sofá, copo)"],
    passos: [
      "1) Escolham 3 objetos da casa juntos.",
      "2) Falem o nome de cada objeto bem devagar, batendo palma em cada pedacinho.",
      "3) Contem quantas palmas (sílabas) cada palavra tem.",
      "4) Descubram: qual palavra tem mais sílabas?",
    ],
    registro: "🗣️ Grave um áudio ou desenhe os 3 objetos com o número de palmas de cada um.",
  },

  momento_fluencia: {
    titulo: "Ler de novo, mais solto",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho no cronômetro e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "A MALA.",
      "O DADO.",
      "A BOTA.",
    ],
    metaSegundos: 18,
  },

  recompensa: {
    xp: 110,
    moedas: 65,
  },
};
