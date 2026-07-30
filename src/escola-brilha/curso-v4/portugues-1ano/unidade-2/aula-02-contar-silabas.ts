import type { AulaPortuguesV4 } from "../../types";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";

/**
 * Aula 2 — Bate-Palma nas Sílabas
 * -------------------------------------------------------------
 * Segmentação silábica: contar quantos pedacinhos (sílabas) tem
 * cada palavra, batendo palma. Palavras de 1, 2 e 3 sílabas.
 *
 * Foco pedagógico:
 *  - Segmentar oralmente palavras em sílabas, batendo palma.
 *  - Contar o número de sílabas de uma palavra.
 *
 * BNCC: EF01LP05, EF01LP06
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-contar-silabas",
  titulo: "Bate-Palma nas Sílabas",
  iconeTrilha: "👏",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O Jogo do Bate-Palma",
    historia:
      "Na fábrica, o robô inventou um jogo novo: bater palma pra cada pedacinho da palavra! — Quantas palmas tem SAPO? E BOLA? E BANANA? Vamos contar juntos! — disse Aurora, toda animada.",
    imagemUrl: professora,
  },

  momento02_previsao: {
    instrucao: "Olhe a capa: mãozinhas batendo palma perto de figuras. Do que essa história vai falar?",
    bloco: {
      titulo: "O Jogo do Bate-Palma",
      capaImagemUrl: sapo,
      pistas: [
        { imagemUrl: sapo, nome: "Um sapo" },
        { imagemUrl: banana, nome: "Uma banana" },
      ],
      pergunta: "Sobre o que essa história vai falar?",
      hipoteses: [
        { texto: "Um jogo de contar pedacinhos de palavras batendo palma.", imagemUrl: sapo },
        { texto: "Uma corrida de bicicleta.", imagemUrl: banana },
        { texto: "Uma festa de aniversário.", imagemUrl: bola },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! O título já conta: é um jogo de bater palma nos pedacinhos das palavras.",
      feedbackErro: "Releia o título: 'O Jogo do Bate-Palma'. A história é sobre contar pedacinhos batendo palma.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras novas antes do jogo.",
    cards: [
      {
        palavra: "contar",
        explicacao: "É descobrir quantos tem de alguma coisa.",
        exemplo: "Vamos contar quantas sílabas tem a palavra SAPO.",
        imagemUrl: sapo,
      },
      {
        palavra: "pedacinho",
        explicacao: "É outro jeito carinhoso de chamar a sílaba.",
        exemplo: "BA-NA-NA tem três pedacinhos.",
        imagemUrl: banana,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Veja Aurora contando as palmas",
    instrucao: "Cada palma é uma sílaba. Observe com atenção.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "PÉ = 1 palma (uma sílaba)", explicacao: "PÉ é uma palavra bem curtinha, só um pedacinho." },
          { texto: "SA-PO = 2 palmas (duas sílabas)", explicacao: "SA e PO são dois pedacinhos." },
          { texto: "BA-NA-NA = 3 palmas (três sílabas)", explicacao: "BA, NA e NA são três pedacinhos." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos. Aperte 🔊 se quiser ouvir.",
    leitura: {
      titulo: "O Jogo do Bate-Palma",
      imagemUrl: sapo,
      legendaImagem: "Bate-palma nas sílabas",
      destacar: ["palma", "sílabas", "SA-PO"],
      paragrafos: [
        "Aurora ensinou um jogo: bater palma em cada sílaba da palavra.",
        "Ela disse SAPO bem devagar: SA-PO. Bateu duas palmas — duas sílabas!",
        "Depois disse GATO: GA-TO. Também duas palmas. A turma adorou o jogo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que a gente faz em cada sílaba, nesse jogo?",
        opcoes: ["Bate palma", "Pula", "Grita"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'bater palma em cada sílaba'.",
        feedbackErro: "Está na primeira frase: 'bater palma em cada sílaba'.",
        ondeEstaNoTexto: "bater palma em cada sílaba da palavra.",
      },
      {
        pergunta: "Quantas palmas tem a palavra SAPO?",
        opcoes: ["Uma", "Duas", "Três"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 'Bateu duas palmas — duas sílabas!'",
        feedbackErro: "Está no segundo parágrafo: 'Bateu duas palmas'.",
        ondeEstaNoTexto: "Bateu duas palmas — duas sílabas!",
      },
      {
        pergunta: "Qual outra palavra do texto também tem duas sílabas?",
        opcoes: ["GATO", "BANANA", "ABELHA"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'GATO: GA-TO. Também duas palmas.'",
        feedbackErro: "Olhe o último parágrafo: fala de GATO com duas palmas.",
        ondeEstaNoTexto: "GATO: GA-TO. Também duas palmas.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem ensina e onde acontece o jogo?",
    perguntas: [
      {
        pergunta: "Quem ensinou o jogo do bate-palma?",
        opcoes: ["Aurora", "O sapo", "O gato"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Aurora ensinou um jogo'.",
        feedbackErro: "A primeira frase já responde: quem ENSINOU o jogo? Aurora.",
      },
      {
        pergunta: "Essa história acontece em qual lugar da turma?",
        opcoes: ["Na sala de aula, num jogo com a turma", "No mercado", "No hospital"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! A turma joga o bate-palma juntos.",
        feedbackErro: "O texto fala de 'a turma adorou o jogo' — é um jogo na sala, com a turma.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque na ordem certa como Aurora contou as sílabas de SAPO.",
    bloco: {
      instrucao: "Do começo ao fim.",
      itens: [
        { id: "p1", texto: "Aurora fala SAPO bem devagar: SA-PO.", imagemUrl: sapo },
        { id: "p2", texto: "Ela bate a primeira palma em SA.", imagemUrl: sapo },
        { id: "p3", texto: "Ela bate a segunda palma em PO e conta: duas sílabas!", imagemUrl: sapo },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Isso! Primeiro fala devagar, depois bate palma pedacinho por pedacinho.",
      feedbackErro: "Pense: primeiro fala a palavra devagar, depois bate palma em cada pedacinho, na ordem.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A Abelha e a Banana",
      imagemUrl: abelha,
      destacar: ["A-BE-LHA", "BA-NA-NA"],
      paragrafos: [
        "A palavra ABELHA tem três sílabas: A-BE-LHA.",
        "A palavra BANANA também tem três sílabas: BA-NA-NA. As duas têm o mesmo número de pedacinhos!",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantas sílabas tem a palavra ABELHA?",
        opcoes: ["Duas", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A-BE-LHA tem TRÊS sílabas.",
        feedbackErro: "Está na primeira frase: 'ABELHA tem três sílabas'.",
        ondeEstaNoTexto: "A palavra ABELHA tem três sílabas: A-BE-LHA.",
      },
      {
        pergunta: "ABELHA e BANANA têm o mesmo número de sílabas?",
        opcoes: ["Sim, as duas têm três", "Não, ABELHA tem mais", "Não, BANANA tem mais"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! O texto diz 'as duas têm o mesmo número de pedacinhos'.",
        feedbackErro: "Releia o final: 'As duas têm o mesmo número de pedacinhos!'",
        ondeEstaNoTexto: "As duas têm o mesmo número de pedacinhos!",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Quantas Palmas Tem Essa Palavra?",
    instrucao: "Escolha as palavras que têm o número de sílabas pedido.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Caça às Duas Sílabas",
      bloco: {
        instrucao: "Marque SOMENTE as palavras que têm DUAS sílabas.",
        pergunta: "Quais destas palavras têm duas sílabas (dois pedacinhos)?",
        opcoes: [
          { id: "o1", texto: "SAPO (SA-PO)", imagemUrl: sapo, correto: true },
          { id: "o2", texto: "GATO (GA-TO)", imagemUrl: gato, correto: true },
          { id: "o3", texto: "BANANA (BA-NA-NA)", imagemUrl: banana, correto: false },
          { id: "o4", texto: "ABELHA (A-BE-LHA)", imagemUrl: abelha, correto: false },
        ],
        feedbackAcerto: "🎉 Isso! SAPO e GATO têm duas sílabas cada.",
        feedbackErro: "Bata palma em cada palavra: BANANA e ABELHA têm TRÊS sílabas, não duas.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Cada sílaba de uma palavra ganha uma palma quando falamos devagar.",
      "SAPO e GATO têm duas sílabas.",
      "ABELHA e BANANA têm três sílabas.",
    ],
    miniDesafio: {
      pergunta: "Quantas sílabas (palmas) tem a palavra BANANA?",
      opcoes: ["Duas", "Três", "Quatro"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! BA-NA-NA tem TRÊS sílabas.",
      feedbackErro: "Fale devagar: BA (1) - NA (2) - NA (3). São três sílabas.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que fazemos em cada sílaba, no jogo do bate-palma?",
        opcoes: [
          "Batemos UMA palma",
          "Batemos DUAS palmas",
          "Batemos uma palma para cada letra",
          "Ficamos quietos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Uma palma para cada sílaba!",
        feedbackErro: "É uma palma por SÍLABA, não por letra: GA (1) - TO (2).",
      },
      {
        pergunta: "2/5 — Quantas sílabas tem SAPO?",
        opcoes: ["Uma", "Duas", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 DUAS: SA-PO.",
        feedbackErro: "SA-PO: duas palmas. Quatro é o número de letras, não de sílabas.",
      },
      {
        pergunta: "3/5 — Quantas sílabas tem GATO?",
        opcoes: ["Duas", "Três", "Uma", "Quatro"],
        correta: 0,
        feedbackAcerto: "🎉 DUAS: GA-TO.",
        feedbackErro: "GA-TO: são duas palmas, duas sílabas.",
      },
      {
        pergunta: "4/5 — Quantas sílabas tem ABELHA?",
        opcoes: ["Duas", "Três", "Quatro", "Cinco"],
        correta: 1,
        feedbackAcerto: "🎉 TRÊS: A-BE-LHA.",
        feedbackErro: "Cuidado: LHA é UMA sílaba só. A-BE-LHA = três palmas.",
      },
      {
        pergunta: "5/5 — Quantas sílabas tem BANANA?",
        opcoes: ["Duas", "Três", "Quatro", "Seis"],
        correta: 1,
        feedbackAcerto: "🎉 TRÊS: BA-NA-NA! Agora você é um mestre do bate-palma! 🌟",
        feedbackErro: "BA-NA-NA: três palmas. Seis é a quantidade de LETRAS.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Bate-palma em família",
    materiais: ["Nenhum material — só as mãos!"],
    passos: [
      "1) Escolham 5 nomes de pessoas da família.",
      "2) Falem cada nome bem devagar, batendo palma em cada sílaba.",
      "3) Anotem (ou desenhem bolinhas) quantas sílabas tem cada nome.",
      "4) Descubram: qual nome tem mais sílabas?",
    ],
    registro: "🗣️ Grave um vídeo curto batendo palma nos nomes da família.",
  },

  recompensa: {
    xp: 100,
    moedas: 60,
  },
};
