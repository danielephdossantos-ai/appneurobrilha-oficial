import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";

/**
 * Unidade 10 · Aula 1 — Palavras que Piscam
 * -------------------------------------------------------------
 * Fase 9. Leitura de palavras de alta frequência: É, UM, UMA,
 * AS, OS. A criança relaciona escrita, pronúncia e sentido até
 * que o reconhecimento se torne automático com a prática.
 *
 * BNCC: EF01LP02 · EF01LP04 · EF01LP12
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-palavras-que-piscam",
  titulo: "Palavras que Piscam",
  iconeTrilha: "⚡",
  bncc: ["EF01LP02", "EF01LP04", "EF01LP12"],
  duracaoMin: 14,

  momento01_motivacao: {
    titulo: "Brilha descobre as palavras frequentes",
    historia:
      "Brilha encontrou palavras que aparecem muitas vezes nos textos: É, UM, UMA, AS e OS. Aurora explicou que elas também podem ser lidas observando letras, sons e sinais, como o acento de É. De tanto ler com atenção, o reconhecimento fica automático.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Olhe o título. O que será que vai piscar na tela hoje?",
    bloco: {
      titulo: "Palavras que Piscam",
      capaImagemUrl: estrela,
      pistas: [
        { imagemUrl: estrela, nome: "Uma luz que pisca" },
        { imagemUrl: livro, nome: "Palavras num livro" },
      ],
      pergunta: "Sobre o que vai ser a aula?",
      hipoteses: [
        { texto: "Palavras que a gente reconhece num relance.", imagemUrl: estrela },
        { texto: "Como desenhar uma estrela.", imagemUrl: bola },
        { texto: "Como cuidar de um sapo.", imagemUrl: sapo },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Hoje vamos observar e reconhecer palavras frequentes.",
      feedbackErro: "As pistas mostram uma luz e palavras: vamos observar palavras frequentes.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas ideias novas antes de começar:",
    cards: [
      {
        palavra: "palavra frequente",
        explicacao:
          "É uma palavra que aparece muitas vezes. Lemos observando letras, sons, acentos e o sentido da frase; com prática, reconhecemos com facilidade.",
        exemplo: "É, UM, UMA, AS e OS são palavras frequentes.",
        imagemUrl: livro,
      },
      {
        palavra: "num relance",
        explicacao: "É reconhecer com facilidade depois de observar e praticar a escrita e a pronúncia.",
        exemplo: "Você reconhece a sua casa num relance, sem olhar tijolo por tijolo.",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Ver de relance",
    instrucao:
      "A palavra vai piscar e sumir. Depois você escolhe qual era. Não tem pressa nem nota: é treino de olho.",
    blocos: [
      {
        tipo: "palavraRelampago",
        segundos: 2,
        palavras: [
          { palavra: "é", frase: "O sapo É verde.", distratores: ["e", "ê"] },
          { palavra: "um", frase: "Vi UM pato no lago.", distratores: ["un", "mu"] },
          { palavra: "uma", frase: "UMA bola pulou.", distratores: ["amu", "mua"] },
          { palavra: "as", frase: "AS flores abriram.", distratores: ["sa", "ás"] },
          { palavra: "os", frase: "OS patos nadam.", distratores: ["so", "ós"] },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos. Quando aparecer uma palavra frequente estudada, aponte o dedo nela.",
    leitura: {
      titulo: "O Lago do Pato",
      imagemUrl: pato,
      legendaImagem: "UM pato n' AS águas do lago",
      destacar: ["É", "UM", "AS", "OS"],
      paragrafos: [
        "O pato É bonito. Ele É UM pato do lago.",
        "AS patas dele remam. OS peixes olham.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Quantas vezes a palavrinha É aparece na primeira parte?",
        opcoes: ["Uma vez", "Duas vezes", "Nenhuma vez"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'O pato É bonito' e 'Ele É UM pato'.",
        feedbackErro: "Leia devagar a primeira parte e conte cada É que você vê.",
        ondeEstaNoTexto: "O pato É bonito. Ele É UM pato do lago.",
      },
      {
        pergunta: "Qual dessas é uma palavra frequente estudada no texto?",
        opcoes: ["PATO", "AS", "LAGO"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! AS aparece com frequência e foi praticada nesta aula.",
        feedbackErro: "AS é uma das palavras frequentes destacadas no texto.",
        ondeEstaNoTexto: "AS patas dele remam.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos pensar sobre o texto.",
    perguntas: [
      {
        pergunta: "Quem é o personagem do texto?",
        opcoes: ["O pato", "O peixe", "A flor"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O texto fala do pato.",
        feedbackErro: "O texto começa falando de quem? 'O pato É bonito'.",
      },
      {
        pergunta: "Onde a história acontece?",
        opcoes: ["Na escola", "No lago", "Na cozinha"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! No lago.",
        feedbackErro: "Procure a palavra que diz o lugar: 'um pato do LAGO'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As frases se misturaram. Coloque na ordem do texto.",
    bloco: {
      instrucao: "Do começo ao fim.",
      itens: [
        { id: "p1", texto: "O pato É bonito.", imagemUrl: pato },
        { id: "p2", texto: "AS patas dele remam.", imagemUrl: bola },
        { id: "p3", texto: "OS peixes olham.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Essa é a ordem do texto.",
      feedbackErro: "Primeiro o texto fala do pato, depois das patas, depois dos peixes.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho, no seu ritmo. As palavras frequentes já foram praticadas.",
    leitura: {
      titulo: "A Bola",
      imagemUrl: bola,
      destacar: ["É", "UMA", "OS"],
      paragrafos: [
        "A bola É UMA bola de meia.",
        "OS meninos correm com ela.",
      ],
    },
    perguntas: [
      {
        pergunta: "A bola é de quê?",
        opcoes: ["De meia", "De vidro", "De pedra"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'uma bola de meia'.",
        feedbackErro: "Releia a primeira frase até o final.",
        ondeEstaNoTexto: "A bola É UMA bola de meia.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Palavras frequentes também são lidas relacionando escrita, sons e sentido.",
      "As frequentes de hoje: É, UM, UMA, AS, OS.",
      "Com prática, o reconhecimento fica automático e libera atenção para compreender.",
    ],
    miniDesafio: {
      pergunta: "Qual destas é uma palavra frequente estudada hoje?",
      opcoes: ["UMA", "SAPO", "BOLA"],
      correta: 0,
      feedbackAcerto: "🎉 Isso!",
      feedbackErro: "UMA foi uma das palavras frequentes praticadas nesta aula.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma palavra frequente?",
        opcoes: [
          "Uma palavra que aparece muitas vezes e fica mais fácil com a prática",
          "Uma palavra muito comprida",
          "Uma palavra que ninguém usa",
          "Uma palavra escrita errado",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Palavra frequente é a que aparece muitas vezes nos textos.",
      },
      {
        pergunta: "2/5 — Qual destas NÃO foi uma palavra frequente estudada hoje?",
        opcoes: ["PATO", "É", "UM", "AS"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! PATO se monta: PA + TO.",
        feedbackErro: "As palavras frequentes estudadas foram É, UM, UMA, AS e OS. PATO não estava nesse grupo.",
      },
      {
        pergunta: "3/5 — 'O sapo ___ verde.' Qual palavra frequente completa?",
        opcoes: ["É", "E", "Ê", "AS"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'O sapo É verde.'",
        feedbackErro: "E (sem acento) serve pra juntar coisas: pão E leite. Aqui a frase pede É.",
      },
      {
        pergunta: "4/5 — 'Vi ___ pato no lago.' Qual completa?",
        opcoes: ["UM", "AS", "OS", "UMA"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Um pato só.",
        feedbackErro: "PATO é um só e é masculino: fica UM pato.",
      },
      {
        pergunta: "5/5 — Por que praticar palavras frequentes ajuda a ler?",
        opcoes: [
          "Porque elas aparecem em quase todas as frases",
          "Porque elas são as mais bonitas",
          "Porque elas são as maiores",
          "Porque elas nunca aparecem",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Reconhecer com facilidade o que aparece muito libera atenção para compreender.",
        feedbackErro: "Não é por tamanho nem beleza: é porque elas aparecem o tempo todo nos textos.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça às Palavras Frequentes",
    materiais: ["Um livrinho, uma revista ou uma embalagem", "Lápis"],
    passos: [
      "1) Escolham qualquer texto que tenha em casa.",
      "2) A criança procura as palavras É, UM, UMA, AS, OS.",
      "3) Cada uma encontrada vale um ponto. Contem juntos.",
      "4) Leiam em voz alta a frase inteira onde cada uma apareceu.",
    ],
    registro: "📸 Foto do texto com as palavras frequentes circuladas.",
  },

  momento_fluencia: {
    titulo: "Ler de novo, mais solto",
    instrucao:
      "Leia o mesmo texto três vezes: primeiro com apoio, depois sozinho no seu ritmo e novamente buscando precisão, expressão e compreensão. O tempo é apenas uma referência; entender o texto vem primeiro.",
    texto: ["O PATO É BONITO.", "AS PATAS REMAM.", "OS PEIXES OLHAM."],
    metaSegundos: 18,
  },

  recompensa: {
    xp: 120,
    moedas: 70,
    medalha: "⚡ Olho de Relance",
  },
};
