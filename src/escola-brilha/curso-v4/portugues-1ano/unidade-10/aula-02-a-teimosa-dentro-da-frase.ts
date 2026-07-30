import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";

/**
 * Unidade 10 · Aula 2 — A Teimosa Dentro da Frase
 * -------------------------------------------------------------
 * Fase 9. Segundo lote de palavras de alta frequência: COM, MUITO,
 * HOJE, AQUI, NÃO. Agora a criança não só reconhece a palavra
 * isolada — ela usa a palavra dentro de frases com sentido.
 *
 * BNCC: EF01LP02 · EF01LP04 · EF01LP12
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-a-teimosa-dentro-da-frase",
  titulo: "A Teimosa Dentro da Frase",
  iconeTrilha: "🧲",
  bncc: ["EF01LP02", "EF01LP04", "EF01LP12"],
  duracaoMin: 14,

  momento01_motivacao: {
    titulo: "Brilha lê rápido e trava numa palavrinha",
    historia:
      "Brilha lia bem: 'O sapo pula...' — e então travou em MUITO. Ficou tentando MU-I-TO, MU-I-TO. — Para! — riu Aurora. — Essa também é teimosa. Guarde ela inteira na cabeça, como uma figurinha. Aí ela nunca mais te trava.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Olhe o título e as pistas. O que vamos fazer hoje?",
    bloco: {
      titulo: "A Teimosa Dentro da Frase",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: livro, nome: "Uma frase escrita" },
        { imagemUrl: estrela, nome: "Uma palavra brilhando" },
      ],
      pergunta: "O que a aula vai pedir?",
      hipoteses: [
        { texto: "Encontrar e usar palavras teimosas nas frases.", imagemUrl: livro },
        { texto: "Desenhar um sapo grande.", imagemUrl: sapo },
        { texto: "Guardar brinquedos na caixa.", imagemUrl: caixa },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Hoje as teimosas entram nas frases.",
      feedbackErro: "As pistas são uma frase e uma palavra brilhando: vamos achar a teimosa na frase.",
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
      "Cada teimosa aparece por pouquinho tempo e some. Depois você escolhe qual era. Se errar, tudo bem: olhe de novo com calma.",
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
    instrucao: "Leia comigo. Quando aparecer uma teimosa, aponte com o dedo e diga em voz alta.",
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
      "Teimosas de hoje: COM, MUITO, HOJE, AQUI, NÃO.",
      "Elas não se montam por sílaba — a gente guarda a palavra inteira.",
      "Reconhecer a teimosa rápido faz a frase inteira sair mais solta.",
    ],
    miniDesafio: {
      pergunta: "'___ eu vou na feira.' Qual teimosa completa?",
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
        pergunta: "5/5 — Por que a gente não junta os sons das teimosas?",
        opcoes: [
          "Porque juntando os sons não sai a palavra certa",
          "Porque elas são proibidas",
          "Porque elas são muito grandes",
          "Porque elas não têm letras",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Por isso a gente guarda a palavra inteira.",
        feedbackErro: "Tente juntar N-Ã-O som por som: não sai igual ao que a gente fala. Por isso guardamos inteira.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Cinco Frases da Nossa Casa",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Escrevam juntos 5 frases sobre o dia de hoje.",
      "2) Cada frase precisa ter uma teimosa: COM, MUITO, HOJE, AQUI ou NÃO.",
      "3) A criança circula a teimosa de cada frase.",
      "4) Ela lê as 5 frases em voz alta para a família.",
    ],
    registro: "📸 Foto das 5 frases com as teimosas circuladas.",
  },

  momento_fluencia: {
    titulo: "Ler de novo, mais solto",
    instrucao:
      "Mesmo texto, três leituras: comigo, sozinho e mais uma. Preste atenção em como fica mais fácil na terceira.",
    texto: ["HOJE EU FUI COM A VOVÓ.", "ELA COMPROU MUITO TOMATE.", "AQUI EM CASA NÃO TINHA MAIS."],
    metaSegundos: 22,
  },

  recompensa: {
    xp: 125,
    moedas: 75,
  },
};
