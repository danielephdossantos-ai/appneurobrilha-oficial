import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Aula 4 — Leio e Entendo a Frase
 * -------------------------------------------------------------
 * Fecha a Unidade 3. A criança lê uma frase e escolhe a imagem ou
 * ideia que combina com ela — consolidando leitura com compreensão.
 *
 * BNCC: EF01LP11, EF01LP13, EF12LP04
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-lendo-frases",
  titulo: "Leio e Entendo a Frase",
  iconeTrilha: "🧩",
  bncc: ["EF01LP11", "EF01LP13", "EF12LP04"],
  duracaoMin: 15,

  // ============================================================
  // MODO JOGO — áudio + imagem + toque. Fecha a unidade com leitura
  // eco de 4 linhas, um textinho curto e compreensão.
  // ============================================================
  momentosJogo: [
    {
      tipo: "boasVindas",
      mascoteUrl: esquiloBrilha,
      falaMascote:
        "Oi! Hoje é o nosso último jogo da unidade das frases. Você vai mostrar tudo o que aprendeu. Vamos lá!",
    },
    {
      tipo: "leituraEco",
      titulo: "Fala igualzinho a Aurora",
      imagemUrl: sol,
      imagensLinhas: [sol, cachorro, menina, gato],
      linhas: [
        "O sol brilha no céu.",
        "O cachorro late alto.",
        "A menina rega a flor.",
        "O gato dorme no sofá.",
      ],
      instrucaoAudio: "Aurora vai falar cada frase, uma de cada vez. Repete igualzinho depois dela.",
      elogio: "Uau! Você repetiu as quatro frases certinho!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Escuta: 'O sol brilha no céu.' Qual figura combina com essa frase?",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
      ],
      feedbackAcerto: "Isso! A frase fala do SOL, então a figura certa é o sol.",
      feedbackErro: "Escuta de novo: 'O sol brilha.' De quem a frase está falando?",
    },
    {
      tipo: "leituraTexto",
      titulo: "Um dia no jardim",
      imagemUrl: flor,
      frases: [
        "Duda vai ao jardim.",
        "Ela rega as flores.",
        "O gato dorme ao sol.",
      ],
      instrucaoAudio: "Aurora vai ler essa historinha bem pausada. Escuta com atenção.",
      elogio: "Você ouviu a historinha toda! Cada frase contou uma parte do dia da Duda.",
    },
    {
      tipo: "compreensaoLeitura",
      perguntaAudio: "Na historinha, o que a Duda faz com as flores?",
      opcoes: [
        { texto: "Ela rega as flores.", correta: true },
        { texto: "Ela corta as flores.", correta: false },
      ],
      feedbackAcerto: "Isso! Duda rega as flores com cuidado.",
      feedbackErro: "Escuta de novo a historinha: o que Duda faz com as flores?",
    },
    {
      tipo: "compreensaoLeitura",
      perguntaAudio: "E onde o gato dorme, na historinha?",
      opcoes: [
        { texto: "Perto das flores, ao sol.", correta: true },
        { texto: "Dentro da caixa.", correta: false },
      ],
      feedbackAcerto: "Isso! O gato dorme perto das flores, tomando sol.",
      feedbackErro: "Escuta de novo: onde o gato ficou dormindo?",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Frase e desenho",
      convite:
        "Peça a um adulto pra falar uma frase, como 'O gato dorme no sofá', e desenhe o que você entendeu dela.",
      dicaAdulto:
        "Fale a frase devagar duas vezes antes de a criança desenhar. O importante é ela entender a ideia, não escrever.",
    },
    {
      tipo: "celebracao",
      medalha: "Construtor de Frases",
      mascoteUrl: esquiloBrilha,
      falaFinal: "Parabéns! Você terminou a unidade das frases e já entende o que elas contam. Você é demais!",
    },
  ],

  momento01_motivacao: {
    titulo: "O jogo das frases certas",
    historia:
      "Brilha inventou um jogo novo: lê uma frase e escolhe a figurinha que combina com ela. 'O sol brilha no céu.' — qual figurinha combina? Vamos jogar juntos e mostrar que você já sabe ler e entender frases inteiras!",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Leia a frase e pense: qual imagem combina com ela?",
    bloco: {
      titulo: "Qual figurinha combina?",
      capaImagemUrl: sol,
      recado: {
        rotulo: "Frase",
        icone: "🔎",
        linhas: ["O sol brilha no céu."],
        estilo: "cartaz",
      },
      pergunta: "Qual figurinha combina com essa frase?",
      hipoteses: [
        { texto: "Um sol brilhando", imagemUrl: sol },
        { texto: "Uma lua no céu escuro", imagemUrl: lua },
        { texto: "Um cachorro correndo", imagemUrl: cachorro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! A frase fala do SOL brilhando — a figurinha certa é o sol.",
      feedbackErro:
        "Releia a frase: 'O sol brilha no céu.' A palavra principal é SOL, então a figurinha certa é o sol.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras de hoje.",
    cards: [
      {
        palavra: "entender",
        explicacao: "É saber o que a frase quer dizer, não só ler as letras.",
        exemplo: "Eu li a frase e entendi: o gato dorme.",
        imagemUrl: gato,
      },
      {
        palavra: "combinar",
        explicacao: "Quando duas coisas ficam juntas porque fazem sentido uma com a outra.",
        exemplo: "A imagem do sol combina com a frase sobre o dia.",
        imagemUrl: sol,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com atenção — depois vamos escolher as imagens certas.",
    leitura: {
      titulo: "Um dia no jardim",
      imagemUrl: flor,
      legendaImagem: "O jardim de Duda",
      destacar: ["jardim", "flor", "gato"],
      paragrafos: [
        "Duda vai ao jardim toda manhã. Ela rega as flores com cuidado.",
        "O gato de Duda dorme perto das flores, tomando sol.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que Duda faz com as flores?",
        opcoes: ["Ela corta", "Ela rega", "Ela pisa"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ela rega as flores com cuidado.",
        feedbackErro: "Releia: 'Ela rega as flores com cuidado.'",
        ondeEstaNoTexto: "Ela rega as flores com cuidado.",
      },
      {
        pergunta: "Onde o gato dorme?",
        opcoes: ["Dentro de casa", "Perto das flores", "Na rua"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Ele dorme perto das flores.",
        feedbackErro: "Está na última frase: 'dorme perto das flores'.",
        ondeEstaNoTexto: "O gato de Duda dorme perto das flores, tomando sol.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos pensar sobre entender frases.",
    perguntas: [
      {
        pergunta: "Ler e só reconhecer as letras é o mesmo que entender a frase?",
        opcoes: ["Sim, é a mesma coisa", "Não, entender é saber o que ela quer dizer", "Não importa"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Bom leitor não só lê as letras — ele entende a ideia da frase.",
        feedbackErro: "Ler letras é só o começo. O importante é entender o que a frase está dizendo.",
      },
      {
        pergunta: "Qual imagem combina com 'O gato dorme perto das flores'?",
        opcoes: ["Um gato dormindo perto de flores", "Um carro andando", "Um menino correndo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A imagem precisa combinar com o que a frase diz.",
        feedbackErro: "Releia a frase — ela fala de um GATO dormindo perto de FLORES.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Essas frases contam o dia de Duda. Coloque na ordem certa.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "d1", texto: "Duda vai ao jardim.", imagemUrl: menina },
        { id: "d2", texto: "Ela rega as flores.", imagemUrl: flor },
        { id: "d3", texto: "O gato dorme ao sol.", imagemUrl: gato },
      ],
      ordemCerta: ["d1", "d2", "d3"],
      feedbackAcerto: "🎉 Perfeito! Você entendeu certinho a ordem da história.",
      feedbackErro: "Pense: primeiro ela VAI ao jardim, depois REGA as flores, por último o gato DORME.",
    },
  },

  momento_minijogo: {
    titulo: "Frase e Figurinha",
    instrucao: "Leia cada frase e arraste até a imagem que combina com ela.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Encontre a imagem certa",
      bloco: {
        instrucao: "Arraste cada frase até a figurinha que combina.",
        itens: [
          { id: "i1", texto: "O sol brilha no céu.", alvoId: "a-sol" },
          { id: "i2", texto: "O cachorro late alto.", alvoId: "a-cachorro" },
          { id: "i3", texto: "A menina brinca no jardim.", alvoId: "a-menina" },
        ],
        alvos: [
          { id: "a-sol", nome: "Sol", imagemUrl: sol },
          { id: "a-cachorro", nome: "Cachorro", imagemUrl: cachorro },
          { id: "a-menina", nome: "Menina", imagemUrl: menina },
        ],
        feedbackAcerto: "🎉 Isso! Você leu a frase e encontrou a imagem que combina com ela!",
        feedbackErro: "Releia a frase com calma: a palavra principal mostra qual figurinha combina.",
      },
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O passeio de Théo",
      imagemUrl: menino,
      destacar: ["Théo", "lua"],
      paragrafos: [
        "À noite, Théo olha pela janela e vê a lua brilhando.",
        "Ele sorri e pensa: a lua é linda.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quando Théo olha pela janela?",
        opcoes: ["De manhã", "À tarde", "À noite"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! É de noite.",
        feedbackErro: "Releia a primeira frase: 'À noite, Théo olha pela janela...'",
        ondeEstaNoTexto: "À noite, Théo olha pela janela e vê a lua brilhando.",
      },
      {
        pergunta: "O que Théo pensa sobre a lua?",
        opcoes: ["Que ela é fria", "Que ela é linda", "Que ela é pequena"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ele pensa que 'a lua é linda'.",
        feedbackErro: "Está na última frase: 'a lua é linda'.",
        ondeEstaNoTexto: "Ele sorri e pensa: a lua é linda.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Entender uma frase é saber o que ela quer dizer, não só ler as letras.",
      "Cada frase combina com uma imagem ou ideia — a que faz sentido com ela.",
      "Voltar e reler ajuda a ter certeza da resposta certa.",
      "Você já sabe ler frases inteiras e mostrar que entendeu!",
    ],
    miniDesafio: {
      pergunta: "Qual imagem combina com 'O sol brilha no céu'?",
      opcoes: ["Um sol", "Uma lua", "Um cachorro"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! A frase fala do sol.",
      feedbackErro: "Releia a frase — a palavra principal é SOL.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é entender uma frase?",
        opcoes: [
          "Só reconhecer as letras",
          "Saber o que ela quer dizer",
          "Contar quantas palavras tem",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso mesmo!",
        feedbackErro: "Entender é saber o SENTIDO da frase, não só as letras.",
      },
      {
        pergunta: "2/5 — Qual imagem combina com 'O cachorro late alto'?",
        opcoes: ["Um cachorro", "Um gato dormindo", "Uma flor"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "A frase fala de um cachorro latindo.",
      },
      {
        pergunta: "3/5 — Quando Théo viu a lua?",
        opcoes: ["De manhã", "À noite", "De tarde"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! À noite.",
        feedbackErro: "No texto: 'À noite, Théo olha pela janela...'",
      },
      {
        pergunta: "4/5 — O que Duda faz com as flores?",
        opcoes: ["Ela rega", "Ela corta", "Ela joga fora"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ela rega as flores.",
        feedbackErro: "No texto: 'Ela rega as flores com cuidado.'",
      },
      {
        pergunta: "5/5 — Pra ter certeza da resposta certa, o que devemos fazer?",
        opcoes: ["Adivinhar", "Reler o texto", "Pular a pergunta"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Reler ajuda a confirmar a resposta.",
        feedbackErro: "O bom leitor sempre RELÊ o texto para ter certeza.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Frase e desenho",
    materiais: ["Papel e lápis de cor"],
    passos: [
      "1) Um adulto escreve 3 frases simples (ex.: 'O gato dorme no sofá.').",
      "2) A criança lê cada frase em voz alta.",
      "3) Para cada frase, a criança faz um desenho que combina com ela.",
      "4) Conversem: o desenho combina com o que a frase diz?",
    ],
    registro: "🖼️ Foto dos 3 desenhos junto com as frases.",
  },

  recompensa: {
    xp: 150,
    moedas: 90,
    medalha: "Construtor de Frases",
  },
};
