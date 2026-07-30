import type { AulaPortuguesV4 } from "../../types";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as ioio } from "@/assets/neuro-treino/objetos/ioio.png.asset.json";
import { url as ovelha } from "@/assets/neuro-treino/objetos/ovelha.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";

/**
 * Aula 3 — As Cinco Irmãs Vogais
 * -------------------------------------------------------------
 * Terceira missão da Unidade 1. Aurora apresenta as 5 vogais como
 * irmãs muito especiais: A, E, I, O, U estão em quase toda palavra.
 *
 * Foco pedagógico:
 *  - Reconhecer as 5 vogais e seus sons.
 *  - Identificar palavras que começam com cada vogal.
 *
 * BNCC: EF01LP02 · EF12LP01
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-vogais",
  titulo: "As Cinco Irmãs Vogais",
  iconeTrilha: "🅰️",
  bncc: ["EF01LP02", "EF12LP01"],
  duracaoMin: 15,

  // ------------------------------------------------------------
  // 1 · MOTIVAÇÃO
  // ------------------------------------------------------------
  momento01_motivacao: {
    titulo: "As irmãs mais famosas do alfabeto",
    historia:
      "Aurora sussurra um segredo: — No alfabeto moram 5 irmãs muito especiais: A, E, I, O, U. Elas se chamam VOGAIS e aparecem em QUASE toda palavra que existe! Vamos conhecer cada uma delas?",
    imagemUrl: esquiloBrilha,
  },

  // ------------------------------------------------------------
  // 2 · PREVISÃO
  // ------------------------------------------------------------
  momento02_previsao: {
    instrucao: "Aurora mostra um cartaz com as 5 irmãs. Olhe bem antes de descobrir do que fala.",
    bloco: {
      titulo: "O Cartaz das Vogais",
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "🔤",
        linhas: ["A", "E", "I", "O", "U"],
        estilo: "cartaz",
      },
      pergunta: "O que você acha que esse cartaz mostra?",
      hipoteses: [
        { texto: "As 5 letras vogais." },
        { texto: "Os números de 1 a 5." },
        { texto: "Os dias da semana." },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! A, E, I, O, U são as 5 vogais do nosso alfabeto.",
      feedbackErro: "Olhe de novo: são LETRAS, não números nem dias da semana.",
    },
  },

  // ------------------------------------------------------------
  // 3 · VOCABULÁRIO
  // ------------------------------------------------------------
  momento03_vocabulario: {
    instrucao: "Uma palavra importante para a aula de hoje.",
    cards: [
      {
        palavra: "vogal",
        explicacao: "É cada uma das letras A, E, I, O, U. Elas aparecem em quase toda palavra.",
        exemplo: "ABELHA tem a vogal A. OVELHA tem a vogal O.",
        imagemUrl: abelha,
      },
    ],
  },

  // ------------------------------------------------------------
  // 4 · LEITURA GUIADA
  // ------------------------------------------------------------
  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos a história das 5 irmãs.",
    leitura: {
      titulo: "As Cinco Irmãs Vogais",
      imagemUrl: estrela,
      legendaImagem: "A, E, I, O, U",
      destacar: ["A", "E", "I", "O", "U", "vogais"],
      paragrafos: [
        "As vogais são cinco letras: A, E, I, O, U.",
        "A abelha começa com A. O ioiô começa com I. A ovelha começa com O.",
        "Toda palavra tem pelo menos uma vogal escondida nela.",
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
        pergunta: "Quantas vogais existem?",
        opcoes: ["3", "5", "10"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'As vogais são cinco letras.'",
        feedbackErro: "A primeira frase já responde: são cinco.",
        ondeEstaNoTexto: "As vogais são cinco letras: A, E, I, O, U.",
      },
      {
        pergunta: "Com que vogal começa a palavra OVELHA?",
        opcoes: ["A", "O", "U"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'A ovelha começa com O.'",
        feedbackErro: "Releia o segundo parágrafo — a ovelha aparece lá.",
        ondeEstaNoTexto: "A ovelha começa com O.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 6 · PERSONAGENS & CENÁRIO
  // ------------------------------------------------------------
  momento06_personagensCenario: {
    instrucao: "Nesta história, as próprias LETRAS são as personagens.",
    perguntas: [
      {
        pergunta: "Quem são as 'personagens' desta história?",
        opcoes: ["As cinco vogais", "Um cachorro e um gato", "Duas crianças"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! As vogais A, E, I, O, U são as protagonistas.",
        feedbackErro: "O texto fala o tempo todo sobre letras — quais?",
      },
      {
        pergunta: "O que toda palavra tem, segundo o texto?",
        opcoes: ["Uma vogal escondida", "Um desenho", "Um número"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Está na última frase do texto.",
        feedbackErro: "Releia a última frase: 'Toda palavra... tem pelo menos...'.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 7 · SEQUÊNCIA
  // ------------------------------------------------------------
  momento07_sequencia: {
    instrucao: "Coloque as vogais na ordem certinha.",
    bloco: {
      instrucao: "Do começo ao fim.",
      itens: [
        { id: "v1", texto: "A", imagemUrl: abelha },
        { id: "v2", texto: "E", imagemUrl: estrela },
        { id: "v3", texto: "I", imagemUrl: ioio },
        { id: "v4", texto: "O", imagemUrl: ovelha },
        { id: "v5", texto: "U", imagemUrl: ursinho },
      ],
      ordemCerta: ["v1", "v2", "v3", "v4", "v5"],
      feedbackAcerto: "🎉 Isso! A, E, I, O, U — nessa ordem, sempre juntinhas.",
      feedbackErro: "Cante devagar: A... E... I... O... U... e ponha na ordem certa.",
    },
  },

  // ------------------------------------------------------------
  // 8 · LEITURA INDEPENDENTE
  // ------------------------------------------------------------
  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho.",
    leitura: {
      titulo: "O ursinho e a vogal U",
      imagemUrl: ursinho,
      destacar: ["ursinho", "U"],
      paragrafos: [
        "O URSINHO da Bia começa com a letra U.",
        "URSINHO é uma palavra que começa com a última vogal: U.",
      ],
    },
    perguntas: [
      {
        pergunta: "Com que letra começa a palavra URSINHO?",
        opcoes: ["U", "O", "A"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! URSINHO começa com U.",
        feedbackErro: "Ouça o começo da palavra: UR-SI-NHO.",
        ondeEstaNoTexto: "URSINHO é uma palavra que começa com a última vogal: U.",
      },
    ],
  },

  // ------------------------------------------------------------
  // MINIJOGO — selecionar palavras que começam com vogal
  // ------------------------------------------------------------
  momento_minijogo: {
    titulo: "Caça-Vogais",
    instrucao: "Marque só as palavras que começam com uma vogal.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Quem começa com vogal?",
      bloco: {
        instrucao: "Toque nas imagens cujo nome começa com A, E, I, O ou U.",
        pergunta: "Quais destas palavras começam com vogal?",
        opcoes: [
          { id: "op1", texto: "ABELHA", imagemUrl: abelha, correto: true },
          { id: "op2", texto: "OVELHA", imagemUrl: ovelha, correto: true },
          { id: "op3", texto: "IOIÔ", imagemUrl: ioio, correto: true },
          { id: "op4", texto: "URSINHO", imagemUrl: ursinho, correto: true },
        ],
        feedbackAcerto: "🎉 Muito bem! Todas essas palavras começam mesmo com vogal.",
        feedbackErro: "Escute o som inicial de cada palavra: A, E, I, O ou U.",
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
    titulo: "As cinco vogais na minha mão",
    instrucao: "Trace cada vogal e depois escreva palavras que começam com vogal.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "A", exemplo: "A de ABELHA", dicaTracado: "dois riscos e uma pontinha no meio" },
          { letra: "E", exemplo: "E de ELEFANTE", dicaTracado: "desce e faz três riscos deitados" },
          { letra: "I", exemplo: "I de IOIÔ", dicaTracado: "um risco reto de cima para baixo" },
          { letra: "O", exemplo: "O de OVO", dicaTracado: "uma roda inteira" },
          { letra: "U", exemplo: "U de UVA", dicaTracado: "desce, faz a curva e sobe" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "UVA", silabas: ["U", "VA"], distratores: ["MI", "LO"], dica: "Começa com a vogal U." },
          { palavra: "OVO", silabas: ["O", "VO"], distratores: ["PA", "SE"], dica: "Começa com a vogal O." },
        ],
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "As 5 vogais são A, E, I, O, U.",
      "Toda palavra tem pelo menos uma vogal.",
      "Muitas palavras começam com vogal, como ABELHA e OVELHA.",
    ],
    miniDesafio: {
      pergunta: "Quantas vogais existem no nosso alfabeto?",
      opcoes: ["3", "5", "7"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! São 5: A, E, I, O, U.",
      feedbackErro: "Conte com os dedos: A, E, I, O, U. São cinco.",
    },
  },

  // ------------------------------------------------------------
  // 10 · AVALIAÇÃO
  // ------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quantas vogais existem?",
        opcoes: ["5", "4", "6", "10"],
        correta: 0,
        feedbackAcerto: "🎉 Isso, são 5!",
        feedbackErro: "Conte com a Aurora: A, E, I, O, U — cinco irmãs.",
      },
      {
        pergunta: "2/5 — Qual destas é uma vogal?",
        opcoes: ["B", "E", "T", "D"],
        correta: 1,
        feedbackAcerto: "🎉 Isso, E é vogal!",
        feedbackErro: "As vogais são A, E, I, O, U. B, T e D são consoantes.",
      },
      {
        pergunta: "3/5 — Com que letra começa ABELHA?",
        opcoes: ["A", "B", "E", "L"],
        correta: 0,
        feedbackAcerto: "🎉 Isso, começa com A!",
        feedbackErro: "Ouça bem devagar: A-BE-LHA. O B só aparece na segunda sílaba.",
      },
      {
        pergunta: "4/5 — Com que letra começa OVELHA?",
        opcoes: ["A", "O", "U", "V"],
        correta: 1,
        feedbackAcerto: "🎉 Isso, começa com O!",
        feedbackErro: "Ouça: O-VE-LHA. O V só aparece depois do O.",
      },
      {
        pergunta: "5/5 — Toda palavra tem...",
        opcoes: [
          "Pelo menos uma vogal",
          "Só consoantes",
          "Sempre a letra A",
          "Sempre cinco letras",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo! Toda palavra tem uma vogal escondida nela. Você conheceu as 5 irmãs! 🌟",
        feedbackErro: "Nem toda palavra tem A, mas toda palavra tem PELO MENOS UMA vogal.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 11 · MISSÃO EM FAMÍLIA
  // ------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "🏠 Caça-vogais em casa",
    materiais: ["Nenhum material especial"],
    passos: [
      "1) Escolha 5 objetos da casa.",
      "2) Diga o nome de cada objeto bem devagar, esticando o som.",
      "3) Descubra com qual vogal cada nome começa (A, E, I, O ou U).",
      "4) Conte para a família quantos objetos você achou de cada vogal.",
    ],
    registro: "🗣️ Grave um áudio falando os 5 objetos e as vogais deles.",
  },

  recompensa: {
    xp: 130,
    moedas: 80,
  },
};
