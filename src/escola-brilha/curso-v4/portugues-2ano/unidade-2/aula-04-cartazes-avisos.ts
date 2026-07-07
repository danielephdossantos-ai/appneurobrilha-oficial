import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import biblioteca from "@/assets/neuro-treino/objetos/biblioteca.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import lavarMaos from "@/assets/neuro-treino/objetos/lavar-maos.png";
import criancas from "@/assets/neuro-treino/objetos/criancas-grupo.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import patio from "@/assets/neuro-treino/objetos/patio-escola.png";

/**
 * Unidade 2 · Aula 4 — Cartazes e Avisos
 * -------------------------------------------------------------
 * Um cartaz apareceu na entrada da Sala dos Exploradores: "SILÊNCIO
 * — pessoas lendo". A criança aprende que cartazes e avisos servem
 * pra COMUNICAR ALGO A MUITAS PESSOAS de uma vez só.
 *
 * BNCC: EF02LP09 · EF02LP10 · EF02LP11 · EF02LP13
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-cartazes-avisos",
  titulo: "Cartazes e Avisos",
  iconeTrilha: "📢",
  bncc: ["EF02LP09", "EF02LP10", "EF02LP11", "EF02LP13"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Um cartaz apareceu na porta!",
    historia:
      "Brilha chega na sala e vê um CARTAZ grande na entrada. Só uma frase, letras GRANDES: 'SILÊNCIO. Pessoas lendo'. — Esse cartaz serve pra AVISAR todo mundo de uma vez, explica Aurora. Vamos aprender a ler cartazes?",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "Leia o cartaz que apareceu na porta. Depois pense: pra que serve um cartaz assim?",
    bloco: {
      titulo: "O cartaz da entrada",
      recado: {
        icone: "📢",
        rotulo: "Cartaz da entrada",
        estilo: "cartaz",
        linhas: ["Silêncio", "Pessoas lendo"],
      },
      pergunta: "Pra que serve esse cartaz?",
      hipoteses: [
        {
          texto: "Pra INFORMAR várias pessoas ao mesmo tempo.",
          imagemUrl: criancas,
        },
        {
          texto: "Pra deixar um recado pra UMA pessoa só.",
          imagemUrl: papel,
        },
        {
          texto: "Pra contar uma história longa.",
          imagemUrl: livro,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Cartaz é GRANDE e fica exposto pra VÁRIAS pessoas verem.",
      feedbackErro:
        "Bilhete é pra uma pessoa só. Cartaz é pra MUITA gente ver ao mesmo tempo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras que ajudam a entender cartazes.",
    cards: [
      {
        palavra: "avisar",
        explicacao:
          "É INFORMAR alguém sobre algo. Cartaz avisa. Aviso avisa. Placa avisa.",
        exemplo: "O cartaz da porta avisa: 'Silêncio, pessoas lendo'.",
        imagemUrl: papel,
      },
      {
        palavra: "orientar",
        explicacao:
          "É ENSINAR o que fazer. 'Lave as mãos', 'entre pela direita' — orienta.",
        exemplo: "O cartaz do banheiro orienta a lavar as mãos.",
        imagemUrl: lavarMaos,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o cartaz. Repare: LETRAS GRANDES e frase CURTA.",
    leitura: {
      titulo: "Cartaz da Sala de Leitura",
      imagemUrl: biblioteca,
      legendaImagem: "O cartaz da entrada",
      destacar: ["SILÊNCIO", "lendo"],
      paragrafos: [
        "📢 SILÊNCIO",
        "Pessoas lendo.",
        "Fale baixinho ao entrar.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "O cartaz é curto. Cada frase importa. Volte se precisar.",
    perguntas: [
      {
        pergunta: "O que esse cartaz PEDE que a gente faça?",
        opcoes: [
          "Correr e gritar",
          "Fazer silêncio e falar baixinho",
          "Cantar bem alto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! SILÊNCIO e falar BAIXINHO.",
        feedbackErro:
          "A palavra GRANDE do cartaz é 'SILÊNCIO'. E depois diz pra falar como?",
        ondeEstaNoTexto: "SILÊNCIO … Fale baixinho ao entrar.",
      },
      {
        pergunta: "POR QUE tem que ficar em silêncio?",
        opcoes: [
          "Porque tem pessoas LENDO",
          "Porque não tem ninguém em casa",
          "Porque está de noite",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Certo! 'Pessoas lendo'.",
        feedbackErro: "O cartaz explica: 'Pessoas …'. O que elas estão fazendo?",
        ondeEstaNoTexto: "Pessoas lendo.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Cartaz é diferente de bilhete. Vamos comparar.",
    perguntas: [
      {
        pergunta: "Cartaz é pra…",
        opcoes: [
          "UMA pessoa só ler",
          "MUITAS pessoas lerem ao mesmo tempo",
          "Ninguém ler",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Fica em lugar público, letras grandes, todo mundo vê.",
        feedbackErro:
          "Cartaz fica na PAREDE, em lugar que MUITA gente passa. É pra todo mundo ler.",
      },
      {
        pergunta: "Bilhete é pra…",
        opcoes: [
          "MUITA gente",
          "UMA pessoa específica",
          "Todo mundo da cidade",
        ],
        correta: 1,
        feedbackAcerto: "🎉 UMA pessoa (o destinatário).",
        feedbackErro:
          "Bilhete tem DESTINATÁRIO — é pra UMA pessoa. Cartaz é pra muitas.",
      },
      {
        pergunta: "Como são as letras de um cartaz?",
        opcoes: ["Bem pequenas", "GRANDES", "Escondidas"],
        correta: 1,
        feedbackAcerto:
          "🎉 GRANDES! Pra ser lido de longe, sem precisar chegar perto.",
        feedbackErro:
          "Cartaz precisa ser LIDO DE LONGE. Letras GRANDES ajudam.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque em ordem: como um cartaz chega até as pessoas.",
    bloco: {
      instrucao: "Do começo (planejar) até o fim (as pessoas leem).",
      itens: [
        {
          id: "p1",
          texto: "Aurora pensa NO QUE quer avisar.",
          imagemUrl: bibliotecaria,
        },
        {
          id: "p2",
          texto: "Ela escreve numa folha com LETRAS GRANDES.",
          imagemUrl: papel,
        },
        {
          id: "p3",
          texto: "Ela COLA o cartaz na entrada.",
          imagemUrl: biblioteca,
        },
        {
          id: "p4",
          texto: "As pessoas passam e LEEM o aviso.",
          imagemUrl: criancas,
        },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Certo! Pensar → escrever → colar → todos leem.",
      feedbackErro:
        "Primeiro PENSA o aviso, depois ESCREVE, depois COLA, e só então as pessoas LEEM.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia outro cartaz sozinho e responda.",
    leitura: {
      titulo: "Cartaz do banheiro da escola",
      imagemUrl: lavarMaos,
      destacar: ["Lave", "mãos", "banheiro"],
      paragrafos: [
        "🧼 Lave as mãos com água e sabão.",
        "Depois enxugue com o papel.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que esse cartaz ORIENTA fazer?",
        opcoes: [
          "Só molhar as mãos",
          "Lavar com água e sabão e depois enxugar",
          "Correr no banheiro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Lavar E depois enxugar.",
        feedbackErro:
          "O cartaz tem DOIS passos: 'Lave …' e 'Depois enxugue …'.",
      },
      {
        pergunta: "Esse tipo de cartaz é pra…",
        opcoes: [
          "Convidar pra festa",
          "Orientar (ensinar o que fazer)",
          "Contar uma história",
        ],
        correta: 1,
        feedbackAcerto: "🎉 ORIENTAR!",
        feedbackErro:
          "Ele ENSINA o passo a passo. Isso é ORIENTAR.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Pendure o Cartaz",
    instrucao:
      "Cada cartaz precisa ir no LUGAR certo da escola. Toque no cartaz e depois no lugar onde ele deve ficar.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "📌 Pendure o Cartaz",
      bloco: {
        instrucao: "Onde cada cartaz combina mais?",
        itens: [
          {
            id: "c1",
            texto: "'SILÊNCIO. Pessoas lendo.'",
            imagemUrl: papel,
            alvoId: "biblio",
          },
          {
            id: "c2",
            texto: "'Lave as mãos com água e sabão.'",
            imagemUrl: papel,
            alvoId: "banheiro",
          },
          {
            id: "c3",
            texto: "'Não corra no pátio.'",
            imagemUrl: papel,
            alvoId: "patio",
          },
          {
            id: "c4",
            texto: "'Bem-vindos! Turma do 2º ano aqui.'",
            imagemUrl: papel,
            alvoId: "sala",
          },
        ],
        alvos: [
          { id: "biblio", nome: "Biblioteca", imagemUrl: biblioteca },
          { id: "banheiro", nome: "Banheiro", imagemUrl: lavarMaos },
          { id: "patio", nome: "Pátio da escola", imagemUrl: patio },
          { id: "sala", nome: "Sala de aula", imagemUrl: escola },
        ],
        feedbackAcerto:
          "🎉 Todos no lugar certo! Você entendeu pra que serve cada aviso.",
        feedbackErro:
          "Pense: onde precisa de SILÊNCIO? Onde a gente LAVA a mão? Onde não pode CORRER? Onde a turma se ENCONTRA?",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "CARTAZES e AVISOS servem pra COMUNICAR ALGO A MUITAS PESSOAS.",
      "Letras GRANDES, frases CURTAS, ficam em lugar que todo mundo passa.",
      "Podem AVISAR ('Silêncio') ou ORIENTAR ('Lave as mãos').",
      "Diferente do BILHETE, cartaz não é pra UMA pessoa só — é pra TODOS que passam.",
    ],
    miniDesafio: {
      pergunta: "Um cartaz na porta do banheiro que diz 'Lave as mãos' está…",
      opcoes: [
        "Avisando uma festa",
        "Orientando o que fazer",
        "Escrevendo um bilhete pra alguém",
      ],
      correta: 1,
      feedbackAcerto: "🎉 ORIENTANDO — ensinando o que fazer.",
      feedbackErro:
        "'Lave as mãos' ENSINA o que fazer. Isso é ORIENTAR.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Cartaz serve pra…",
        opcoes: [
          "Falar com UMA pessoa só",
          "Comunicar algo pra MUITAS pessoas",
          "Guardar histórias",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Muitas pessoas!",
        feedbackErro: "Cartaz é PÚBLICO — muita gente vê.",
      },
      {
        pergunta: "2/5 — Como são as letras de um cartaz?",
        opcoes: ["Bem pequenas", "GRANDES", "Não tem letras, só desenhos"],
        correta: 1,
        feedbackAcerto: "🎉 GRANDES pra ler de longe.",
        feedbackErro: "Cartaz precisa ser LIDO DE LONGE. Letras GRANDES.",
      },
      {
        pergunta: "3/5 — 'Lave as mãos com sabão' é um cartaz que…",
        opcoes: ["Orienta", "Convida", "Faz lista"],
        correta: 0,
        feedbackAcerto: "🎉 ORIENTA (ensina o que fazer).",
        feedbackErro: "Ensina o que fazer = ORIENTA.",
      },
      {
        pergunta: "4/5 — Onde combina o cartaz 'SILÊNCIO. Pessoas lendo'?",
        opcoes: ["No pátio da escola", "Na biblioteca", "No mercado"],
        correta: 1,
        feedbackAcerto: "🎉 Na BIBLIOTECA!",
        feedbackErro: "Onde as pessoas LEEM? Na biblioteca.",
      },
      {
        pergunta: "5/5 — Qual é a diferença entre BILHETE e CARTAZ?",
        opcoes: [
          "Bilhete é pra UMA pessoa; cartaz é pra MUITAS",
          "Bilhete é grande; cartaz é pequeno",
          "Não tem diferença",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! É a principal diferença.",
        feedbackErro:
          "Bilhete = UMA pessoa (destinatário). Cartaz = MUITAS pessoas.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📢 Um cartaz pra nossa casa",
    materiais: ["1 folha grande (A4 ou maior)", "Canetinhas coloridas"],
    passos: [
      "1) Escolham UM aviso importante pra casa: 'Lave a louça', 'Silêncio, alguém dormindo', 'Feche a torneira'.",
      "2) A criança escreve com LETRAS GRANDES e colore.",
      "3) Colem em um lugar onde todo mundo passe.",
      "4) Observem: nos próximos dias, alguém prestou atenção no cartaz?",
    ],
    registro:
      "📸 Uma foto do cartaz colado no lugar dele em casa.",
  },

  recompensa: { xp: 110, moedas: 60 },
};

void escola;
