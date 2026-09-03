import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";

/**
 * Unidade 10 · Aula 2 — A Palavra Frequente Dentro da Frase
 * -------------------------------------------------------------
 * Fase 9. Segundo lote de palavras de alta frequência: COM, MUITO,
 * HOJE, AQUI, NÃO. Agora a criança não só reconhece a palavra
 * isolada — ela usa a palavra dentro de frases com sentido.
 *
 * BNCC: EF01LP02 · EF01LP04 · EF01LP12
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-a-teimosa-dentro-da-frase",
  titulo: "A Palavra Frequente Dentro da Frase",
  iconeTrilha: "🧲",
  bncc: ["EF01LP02", "EF01LP04", "EF01LP12"],
  duracaoMin: 14,

  momento01_motivacao: {
    titulo: "Brilha lê com atenção uma palavra frequente",
    historia:
      "Brilha encontrou a palavra MUITO. Aurora mostrou que a pronúncia pode soar como se houvesse um N, mas a escrita convencional é M-U-I-T-O. Ele leu dentro da frase, comparou fala e escrita e praticou novamente.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Olhe o título e as pistas. O que vamos fazer hoje?",
    bloco: {
      titulo: "A Palavra Frequente Dentro da Frase",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: livro, nome: "Uma frase escrita" },
        { imagemUrl: estrela, nome: "Uma palavra brilhando" },
      ],
      pergunta: "O que a aula vai pedir?",
      hipoteses: [
        { texto: "Encontrar e usar palavras frequentes nas frases.", imagemUrl: livro },
        { texto: "Desenhar um sapo grande.", imagemUrl: sapo },
        { texto: "Guardar brinquedos na caixa.", imagemUrl: caixa },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Hoje as palavras frequentes entram nas frases.",
      feedbackErro: "As pistas mostram uma frase e uma palavra destacada: vamos encontrá-la no contexto.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras pra entender a aula:",
    cards: [
      {
        palavra: "muito",
        explicacao: "Quer dizer bastante, uma quantidade grande.",
        exemplo: "Eu gosto MUITO de sorvete.",
        imagemUrl: estrela,
      },
      {
        palavra: "hoje",
        explicacao: "É o dia de agora, o dia em que a gente está vivendo.",
        exemplo: "HOJE eu vou ler um livro.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Pisca e some",
    instrucao:
      "Cada palavra frequente aparece por pouco tempo. Depois você escolhe qual era. Se errar, observe novamente com calma.",
    blocos: [
      {
        tipo: "palavraRelampago",
        segundos: 2,
        palavras: [
          { palavra: "com", frase: "Eu fui COM a vovó.", distratores: ["como", "cum"] },
          { palavra: "muito", frase: "Gosto MUITO de você.", distratores: ["muinto", "mutio"] },
          { palavra: "hoje", frase: "HOJE tem festa.", distratores: ["hojé", "oje"] },
          { palavra: "aqui", frase: "Venha AQUI!", distratores: ["aki", "aquí"] },
          { palavra: "não", frase: "NÃO é longe.", distratores: ["nao", "nã"] },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia comigo. Quando aparecer uma palavra frequente, aponte e leia em voz alta.",
    leitura: {
      titulo: "Hoje na Casa da Vovó",
      imagemUrl: caixa,
      legendaImagem: "HOJE eu fui COM a vovó",
      destacar: ["HOJE", "COM", "MUITO", "AQUI", "NÃO"],
      paragrafos: [
        "HOJE eu fui COM a vovó na feira.",
        "Ela comprou MUITO tomate. AQUI em casa NÃO tinha mais.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Com quem a criança foi à feira?",
        opcoes: ["Com a vovó", "Sozinha", "Com o cachorro"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'HOJE eu fui COM a vovó'.",
        feedbackErro: "Releia a primeira frase e procure a palavra COM.",
        ondeEstaNoTexto: "HOJE eu fui COM a vovó na feira.",
      },
      {
        pergunta: "O que a vovó comprou bastante?",
        opcoes: ["Tomate", "Sapato", "Livro"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! MUITO tomate.",
        feedbackErro: "Procure a palavra MUITO no texto e veja o que vem depois dela.",
        ondeEstaNoTexto: "Ela comprou MUITO tomate.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos pensar sobre o texto.",
    perguntas: [
      {
        pergunta: "Quem aparece nesse texto?",
        opcoes: ["A criança e a vovó", "Um sapo e um pato", "Dois meninos"],
        correta: 0,
        feedbackAcerto: "🎉 Certo!",
        feedbackErro: "Quem fala é a criança ('eu fui'), e ela foi com a vovó.",
      },
      {
        pergunta: "Quando a história aconteceu?",
        opcoes: ["Hoje", "No ano passado", "Amanhã"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A palavra HOJE diz o tempo.",
        feedbackErro: "A primeira palavra do texto diz o tempo: HOJE.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as partes na ordem do texto.",
    bloco: {
      instrucao: "Do começo ao fim.",
      itens: [
        { id: "p1", texto: "HOJE eu fui COM a vovó na feira.", imagemUrl: caixa },
        { id: "p2", texto: "Ela comprou MUITO tomate.", imagemUrl: bola },
        { id: "p3", texto: "AQUI em casa NÃO tinha mais.", imagemUrl: livro },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito!",
      feedbackErro: "Primeiro elas foram à feira, depois compraram, depois explicaram o motivo.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora é você sozinho. Vá com calma.",
    leitura: {
      titulo: "A Bola Sumiu",
      imagemUrl: bola,
      destacar: ["AQUI", "NÃO", "COM"],
      paragrafos: [
        "A bola NÃO está AQUI.",
        "Ela foi rolar COM o vento.",
      ],
    },
    perguntas: [
      {
        pergunta: "Onde a bola NÃO está?",
        opcoes: ["Aqui", "Na escola", "Na feira"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'NÃO está AQUI'.",
        feedbackErro: "Leia de novo a primeira frase inteirinha.",
        ondeEstaNoTexto: "A bola NÃO está AQUI.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Palavras frequentes de hoje: COM, MUITO, HOJE, AQUI, NÃO.",
      "Observamos letras, sons, acentos e a função de cada palavra na frase.",
      "Ler com precisão e compreender é mais importante do que correr.",
    ],
    miniDesafio: {
      pergunta: "'___ eu vou na feira.' Qual palavra frequente completa?",
      opcoes: ["HOJE", "MUITO", "AQUI"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! HOJE fala do tempo.",
      feedbackErro: "A frase pede o TEMPO: o dia de agora. Isso é HOJE.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — 'Eu fui ___ a vovó.' Qual completa?",
        opcoes: ["COM", "COMO", "CUM", "SEM"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "COMO e CUM não servem aqui. Ela foi junto da vovó: COM a vovó.",
      },
      {
        pergunta: "2/5 — Qual dessas está escrita do jeito certo?",
        opcoes: ["MUITO", "MUINTO", "MUTIO", "MUTO"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! MUITO, com U-I no meio.",
        feedbackErro: "A gente às vezes fala 'muinto', mas escreve MUITO, sem o N.",
      },
      {
        pergunta: "3/5 — 'A bola ___ está aqui.' Qual completa?",
        opcoes: ["NÃO", "HOJE", "COM", "MUITO"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A frase nega: NÃO está.",
        feedbackErro: "A frase quer dizer que a bola sumiu. A palavra que nega é NÃO.",
      },
      {
        pergunta: "4/5 — AQUI quer dizer o quê?",
        opcoes: ["Neste lugar", "Neste dia", "Bastante", "Junto"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! AQUI fala do LUGAR.",
        feedbackErro: "Dia é HOJE. Bastante é MUITO. Junto é COM. AQUI é o lugar.",
      },
      {
        pergunta: "5/5 — Como aprendemos palavras frequentes com escrita menos transparente, como NÃO?",
        opcoes: [
          "Observando letras, sons, acento e uso na frase",
          "Porque elas são proibidas",
          "Porque elas são muito grandes",
          "Porque elas não têm letras",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A prática liga a forma escrita à pronúncia e ao sentido.",
        feedbackErro: "Observe N, Ã e O, escute a pronúncia e veja como NÃO funciona dentro da frase.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Cinco Frases da Nossa Casa",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Escrevam juntos 5 frases sobre o dia de hoje.",
      "2) Cada frase deve usar uma destas palavras frequentes: COM, MUITO, HOJE, AQUI ou NÃO.",
      "3) A criança circula a palavra frequente em cada frase.",
      "4) Ela lê as 5 frases em voz alta para a família.",
    ],
    registro: "📸 Foto das 5 frases com as palavras frequentes circuladas.",
  },

  momento_fluencia: {
    titulo: "Ler de novo, mais solto",
    instrucao:
      "Faça três leituras: com apoio, sozinho no seu ritmo e mais uma vez com precisão e expressão. O tempo é apenas uma referência; confira também se você entendeu.",
    texto: ["HOJE EU FUI COM A VOVÓ.", "ELA COMPROU MUITO TOMATE.", "AQUI EM CASA NÃO TINHA MAIS."],
    metaSegundos: 22,
  },

  recompensa: {
    xp: 125,
    moedas: 75,
  },
};
