import type { AulaPortuguesV4 } from "../../types";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as tambor } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";

/**
 * Aula 3 — Falar em público
 * -------------------------------------------------------------
 * Unidade 6 · Vozes do Mundo (5º ano)
 * Foco: oralidade — planejar e realizar uma exposição oral,
 * cuidando de entonação, volume de voz e postura corporal.
 * BNCC: EF05LP19, EF05LP20
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-falar-em-publico",
  titulo: "Falar em público",
  iconeTrilha: "🎤",
  bncc: ["EF05LP19", "EF05LP20"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A Roda da Fala",
    historia:
      "Brilha se sentou numa roda com a turma, no centro de um pátio cheio de bandeirinhas. — Chegamos à Roda da Fala! Aqui a gente treina uma habilidade importante: FALAR EM PÚBLICO. Não é só decorar o que vai dizer — é também cuidar da voz, do olhar e da postura. Vamos aprender a apresentar nossas ideias com confiança?",
    imagemUrl: mural,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas da Roda da Fala antes de começar.",
    bloco: {
      titulo: "A Roda da Fala",
      capaImagemUrl: mural,
      pistas: [
        { imagemUrl: criancasGrupo, nome: "Uma turma reunida para ouvir" },
        { imagemUrl: tambor, nome: "Um tambor marcando o ritmo da fala" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como tocar tambor em uma festa.", imagemUrl: tambor },
        { texto: "Como planejar e apresentar uma fala para outras pessoas.", imagemUrl: professora },
        { texto: "Como desenhar uma roda no papel.", imagemUrl: papel },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender a planejar e apresentar bem uma fala.",
      feedbackErro: "Pense na turma reunida para ouvir: essa aula ensina a planejar e apresentar uma fala.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras da Roda da Fala.",
    cards: [
      {
        palavra: "exposição oral",
        explicacao: "Momento em que uma pessoa fala sobre um assunto para um grupo de ouvintes, de forma organizada.",
        exemplo: "Ana fez uma exposição oral sobre os animais da floresta amazônica.",
        imagemUrl: professora,
      },
      {
        palavra: "entonação",
        explicacao: "O jeito de variar o tom da voz ao falar, para dar emoção e destacar as partes mais importantes.",
        exemplo: "Ao contar uma parte assustadora da história, o narrador usa uma entonação mais baixa e misteriosa.",
        imagemUrl: tambor,
      },
      {
        palavra: "volume de voz",
        explicacao: "A intensidade do som da voz — se está alta o suficiente para todos ouvirem, sem gritar.",
        exemplo: "Ao falar para uma sala cheia, é preciso usar um volume de voz mais alto do que numa conversa comum.",
        imagemUrl: estrela,
      },
      {
        palavra: "postura",
        explicacao: "O jeito como o corpo fica enquanto a pessoa fala: em pé, olhando para a plateia, sem se esconder.",
        exemplo: "Uma boa postura é ficar de frente para o público, com os ombros relaxados e o olhar levantado.",
        imagemUrl: criancasGrupo,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Ouvindo as dicas de uma boa fala",
    instrucao: "Ouça o Brilha destacando cuidados importantes ao falar em público.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Respire fundo antes de começar a falar.", explicacao: "Isso ajuda a controlar o nervosismo e organizar as ideias." },
          { texto: "Fale devagar e com um volume que todos escutem.", explicacao: "O VOLUME DE VOZ correto garante que a mensagem chegue a todo mundo." },
          { texto: "Olhe para as pessoas, não apenas para o papel.", explicacao: "Olhar para a plateia mostra boa POSTURA e cria conexão com quem ouve." },
          { texto: "Varie o tom da voz nas partes mais importantes.", explicacao: "Essa variação é a ENTONAÇÃO, que destaca as ideias principais." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou na Roda da Fala como preparar uma boa exposição oral.",
    leitura: {
      titulo: "O Caderno da Roda da Fala",
      imagemUrl: livro,
      legendaImagem: "Página sobre falar em público",
      destacar: ["exposição oral", "entonação", "volume de voz", "postura"],
      paragrafos: [
        "Falar em público é uma habilidade que se aprende com prática. A EXPOSIÇÃO ORAL acontece quando alguém apresenta um assunto de forma organizada para um grupo de ouvintes — pode ser um trabalho escolar, uma notícia ou até um poema recitado.",
        "Para uma boa exposição oral, é preciso PLANEJAR a fala: escolher o que será dito, organizar as ideias em começo, meio e fim, e até treinar antes de apresentar. Um bom planejamento evita esquecimentos e deixa a pessoa mais confiante.",
        "Além do conteúdo, há três cuidados importantes: a ENTONAÇÃO (variar o tom da voz para dar emoção e destacar o que é mais importante), o VOLUME DE VOZ (falar alto o suficiente para todos ouvirem, sem gritar) e a POSTURA (ficar de frente para a plateia, com o corpo relaxado e o olhar levantado, em vez de ficar olhando só para o papel ou de costas).",
        "Imagine a fala de uma aluna chamada Sofia, que vai apresentar um trabalho sobre reciclagem: 'Bom dia, turma! Hoje eu vou falar sobre a importância de reciclar o lixo. (pausa, olhando para a turma) Vocês sabiam que uma garrafa de plástico pode levar mais de 400 anos para se decompor? (voz mais forte, destacando o número) Por isso, separar o lixo em casa é um gesto pequeno que faz uma grande diferença!' Perceba como Sofia planejou o começo (saudação), o meio (informação) e usou entonação para destacar o número importante.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no caderno se precisar.",
    perguntas: [
      {
        pergunta: "O que é uma exposição oral?",
        opcoes: [
          "Um texto escrito para ser lido em silêncio",
          "Uma apresentação organizada de um assunto para um grupo de ouvintes",
          "Um desenho sobre um tema",
          "Uma lista de tarefas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Exposição oral é apresentar um assunto organizado para ouvintes.",
        feedbackErro: "Releia: 'apresenta um assunto de forma organizada para um grupo de ouvintes'.",
        ondeEstaNoTexto: "acontece quando alguém apresenta um assunto de forma organizada para um grupo de ouvintes",
      },
      {
        pergunta: "O que é entonação, segundo o texto?",
        opcoes: [
          "A altura da pessoa que fala",
          "Variar o tom da voz para dar emoção e destacar o que é importante",
          "O tamanho do texto apresentado",
          "A cor da roupa usada na apresentação",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Entonação é variar o tom da voz.",
        feedbackErro: "Releia: 'variar o tom da voz para dar emoção e destacar o que é mais importante'.",
        ondeEstaNoTexto: "variar o tom da voz ao falar, para dar emoção e destacar as partes mais importantes",
      },
      {
        pergunta: "Na fala de Sofia, o que ela destacou usando uma voz mais forte?",
        opcoes: [
          "O nome da escola",
          "O número de anos que a garrafa leva para se decompor",
          "O nome da professora",
          "A cor do lixo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Ela destacou o número '400 anos' com voz mais forte.",
        feedbackErro: "Releia: '(voz mais forte, destacando o número) Por isso, separar o lixo...'",
        ondeEstaNoTexto: "voz mais forte, destacando o número",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Sobre a Roda da Fala e a aluna Sofia.",
    perguntas: [
      {
        pergunta: "Onde Brilha e a turma estão nesta aula?",
        opcoes: ["No Palco Encantado", "Na Roda da Fala", "Na Noite dos Versos", "Na Praça dos Anúncios"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Estamos na Roda da Fala.",
        feedbackErro: "Releia a motivação: 'Chegamos à Roda da Fala!'",
      },
      {
        pergunta: "Sobre qual assunto Sofia fez sua exposição oral?",
        opcoes: ["Animais da floresta", "Reciclagem do lixo", "Poesia brasileira", "História do teatro"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Sofia falou sobre a importância de reciclar o lixo.",
        feedbackErro: "Releia: 'eu vou falar sobre a importância de reciclar o lixo'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para se planejar uma boa exposição oral.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Escolher o assunto e pesquisar as informações principais.", imagemUrl: livro },
        { id: "p2", texto: "Organizar a fala em começo, meio e fim.", imagemUrl: papel },
        { id: "p3", texto: "Treinar a fala em voz alta, cuidando da entonação e do volume.", imagemUrl: tambor },
        { id: "p4", texto: "Apresentar para a plateia, olhando para as pessoas e com boa postura.", imagemUrl: criancasGrupo },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho certo para se preparar para falar em público.",
      feedbackErro: "Pense: primeiro se pesquisa, depois se organiza, depois se treina e por fim se apresenta.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outro trecho do caderno e responda.",
    leitura: {
      titulo: "Mais Descobertas na Roda da Fala",
      imagemUrl: estrela,
      destacar: ["nervosismo", "respiração"],
      paragrafos: [
        "É normal sentir NERVOSISMO antes de falar em público, mesmo para adultos experientes. Uma dica simples para controlar esse sentimento é a RESPIRAÇÃO: respirar fundo três vezes antes de começar ajuda a acalmar o coração e organizar os pensamentos.",
        "Outra dica é lembrar que a plateia está ali para aprender com você, não para julgar erros pequenos. Se esquecer uma palavra, é possível fazer uma pausa, respirar e continuar — isso também faz parte de aprender a falar em público.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que é normal sentir antes de falar em público?",
        opcoes: [
          "Sono",
          "Nervosismo",
          "Fome",
          "Frio",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! É normal sentir nervosismo antes de falar em público.",
        feedbackErro: "Releia: 'É normal sentir NERVOSISMO antes de falar em público'.",
        ondeEstaNoTexto: "É normal sentir NERVOSISMO antes de falar em público",
      },
      {
        pergunta: "Qual dica o texto dá para controlar o nervosismo?",
        opcoes: [
          "Falar o mais rápido possível",
          "Respirar fundo três vezes antes de começar",
          "Não olhar para ninguém",
          "Decorar cada palavra sem nenhuma pausa",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Respirar fundo ajuda a acalmar antes de falar.",
        feedbackErro: "Releia: 'respirar fundo três vezes antes de começar ajuda a acalmar o coração'.",
        ondeEstaNoTexto: "respirar fundo três vezes antes de começar ajuda a acalmar o coração e organizar os pensamentos",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a dica certa",
    instrucao: "Monte as palavras que completam boas dicas para falar em público.",
    jogo: {
      tipo: "montarPalavra",
      titulo: "O Baú das Dicas",
      bloco: {
        instrucao: "Monte cada palavra usando as sílabas embaralhadas.",
        palavras: [
          { id: "w1", palavraCerta: "POSTURA", silabas: ["POS", "TU", "RA"], imagemUrl: criancasGrupo, frase: "Manter uma boa POSTURA ajuda a passar confiança." },
          { id: "w2", palavraCerta: "VOLUME", silabas: ["VO", "LU", "ME"], imagemUrl: estrela, frase: "Fale com o VOLUME certo para todos ouvirem." },
          { id: "w3", palavraCerta: "PLATEIA", silabas: ["PLA", "TEI", "A"], imagemUrl: professora, frase: "Olhe para a PLATEIA enquanto você fala." },
        ],
        feedbackAcerto: "🎉 Muito bem! Você montou as palavras das boas dicas de fala.",
        feedbackErro: "Pense no som de cada sílaba e tente montar a palavra na ordem certa.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "A EXPOSIÇÃO ORAL é uma apresentação organizada de um assunto para ouvintes.",
      "ENTONAÇÃO é variar o tom da voz; VOLUME é falar alto o suficiente para todos ouvirem.",
      "Uma boa POSTURA é ficar de frente para a plateia, com o olhar levantado.",
    ],
    miniDesafio: {
      pergunta: "O que ajuda a controlar o nervosismo antes de falar em público?",
      opcoes: [
        "Falar o mais rápido possível",
        "Respirar fundo antes de começar",
        "Ficar de costas para a plateia",
        "Não planejar nada antes",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Respirar fundo ajuda a controlar o nervosismo.",
      feedbackErro: "Releia a explicação: respirar fundo acalma o coração antes de falar.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma exposição oral?",
        opcoes: [
          "Uma apresentação organizada de um assunto para ouvintes",
          "Um desenho sobre um tema",
          "Uma prova escrita",
          "Uma lista de compras",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Exposição oral é uma apresentação organizada.",
        feedbackErro: "Exposição oral é apresentar um assunto de forma organizada para ouvintes.",
      },
      {
        pergunta: "2/5 — O que é entonação?",
        opcoes: [
          "A altura da pessoa",
          "Variar o tom da voz para dar emoção e destaque",
          "O tamanho do texto",
          "A cor da roupa",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Entonação é variar o tom da voz.",
        feedbackErro: "Entonação é a variação do tom de voz para dar emoção e destaque.",
      },
      {
        pergunta: "3/5 — O que é o volume de voz correto ao falar em público?",
        opcoes: [
          "Falar bem baixinho",
          "Falar alto o suficiente para todos ouvirem, sem gritar",
          "Falar só sussurrando",
          "Não falar nada",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O volume deve permitir que todos ouçam, sem gritar.",
        feedbackErro: "O volume de voz correto é alto o suficiente para todos ouvirem, sem exagerar.",
      },
      {
        pergunta: "4/5 — O que é uma boa postura ao falar em público?",
        opcoes: [
          "Ficar de costas para a plateia",
          "Ficar de frente para a plateia, com o olhar levantado",
          "Ficar sentado no chão",
          "Ficar escondido atrás de alguém",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Boa postura é ficar de frente, olhando para a plateia.",
        feedbackErro: "Boa postura é ficar de frente para a plateia, com o olhar levantado.",
      },
      {
        pergunta: "5/5 — O que ajuda a controlar o nervosismo antes de falar?",
        opcoes: [
          "Respirar fundo antes de começar",
          "Falar o mais rápido possível",
          "Evitar treinar a fala",
          "Não planejar nada",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Roda da Fala conquistada! Respirar fundo ajuda a controlar o nervosismo.",
        feedbackErro: "Respirar fundo antes de começar ajuda a acalmar o coração.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Apresente uma fala para a família",
    materiais: ["Papel e lápis (opcional, para anotações)"],
    passos: [
      "1) Com um adulto, escolha um assunto que você goste (um animal, um livro, um jogo).",
      "2) PLANEJE sua fala com começo (apresentação do tema), meio (informações) e fim (conclusão).",
      "3) Treine em frente ao espelho, cuidando da entonação, do volume de voz e da postura.",
      "4) Apresente sua exposição oral para a família, de pé, olhando para as pessoas.",
    ],
    registro: "📝 Um vídeo ou áudio da criança fazendo a exposição oral para a família.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
