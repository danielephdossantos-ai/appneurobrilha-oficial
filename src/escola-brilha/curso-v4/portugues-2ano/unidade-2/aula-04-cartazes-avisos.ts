import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as lavarMaos } from "@/assets/neuro-treino/objetos/lavar-maos.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as patio } from "@/assets/neuro-treino/objetos/patio-escola.png.asset.json";

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
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
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
        dica: "Volte no texto e procure a parte que fala de 'cartaz'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A palavra GRANDE do cartaz é 'SILÊNCIO'. E depois diz pra falar como? Agora leia de novo e escolha com calma.",
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
        dica: "Volte no texto e procure a parte que fala de 'silêncio'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O cartaz explica: 'Pessoas …'. O que elas estão fazendo? Agora leia de novo e escolha com calma.",
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
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
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
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Como são as letras de um cartaz?",
        opcoes: ["Bem pequenas", "GRANDES", "Escondidas"],
        correta: 1,
        feedbackAcerto:
          "🎉 GRANDES! Pra ser lido de longe, sem precisar chegar perto.",
        feedbackErro:
          "Cartaz precisa ser LIDO DE LONGE. Letras GRANDES ajudam.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
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
        dica: "Volte no texto e procure a parte que fala de 'orienta'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O cartaz tem DOIS passos: 'Lave …' e 'Depois enxugue …'. Agora leia de novo e escolha com calma.",
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
        dica: "Volte no texto e procure a parte que fala de 'cartaz'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Ele ENSINA o passo a passo. Isso é ORIENTAR. Agora leia de novo e escolha com calma.",
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

    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: Cartaz do banheiro da escola",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "🧼 Lave as mãos com água e sabão.",
      "Depois enxugue com o papel.",
    ],
    metaSegundos: 15,
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
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Lave as mãos' ENSINA o que fazer. Isso é ORIENTAR. Agora leia de novo e escolha com calma.",
    },
  },


  // ------------------------------------------------------------
  // ESCRITA (Fase 3) — ditado de palavra e frase + produção real
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Oficina de Escrita",
    instrucao: "Agora é você quem escreve! Ouça, monte com as peças e depois escreva de verdade.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
        {
          palavra: "CARTAZ",
          silabas: ["CAR", "TAZ"],
          distratores: ["A", "VI"],
          dica: "Bata palmas na palavra CARTAZ: são 2 pedacinhos.",
        },
        {
          palavra: "AVISO",
          silabas: ["A", "VI", "SO"],
          distratores: ["CAR", "TAZ"],
          dica: "Bata palmas na palavra AVISO: são 3 pedacinhos.",
        },
        {
          palavra: "SILÊNCIO",
          silabas: ["SI", "LÊN", "CIO"],
          distratores: ["CAR", "TAZ"],
          dica: "Bata palmas na palavra SILÊNCIO: são 3 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "O cartaz avisa todo mundo.",
          palavras: ["O", "cartaz", "avisa", "todo", "mundo."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "cartaz",
        titulo: "Cartaz da biblioteca",
        comando: "Faça um cartaz de aviso para a biblioteca da escola.",
        campos: [
          { rotulo: "Título GRANDE", placeholder: "SILÊNCIO, POR FAVOR!", minLetras: 5 },
          { rotulo: "O aviso", placeholder: "Aqui a gente fala baixinho para todos lerem.", minLetras: 14 },
          { rotulo: "Onde e quando", placeholder: "Na biblioteca, todos os dias", minLetras: 6 },
        ],
        checklist: [
          "O título é curto e chama atenção.",
          "O aviso explica o que fazer.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Cartaz serve pra…",
        opcoes: [
          "Falar com UMA pessoa só",
          "Comunicar algo pra MUITAS pessoas",
          "Guardar histórias",
          "Não tem letras, só desenhos",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Falar com UMA pessoa só» não é a resposta. A certa é «Comunicar algo pra MUITAS pessoas».",
          null,
          "«Guardar histórias» não é a resposta. A certa é «Comunicar algo pra MUITAS pessoas».",
          "«Não tem letras, só desenhos» não é a resposta. A certa é «Comunicar algo pra MUITAS pessoas».",
        ],
        feedbackAcerto: "🎉 Muitas pessoas!",
        feedbackErro: "Cartaz é PÚBLICO — muita gente vê.",
        dica: "Pista: a resposta certa começa com a letra 'C'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Cartaz é PÚBLICO — muita gente vê. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Como são as letras de um cartaz?",
        opcoes: ["Bem pequenas", "GRANDES", "Não tem letras, só desenhos",
          "No pátio da escola",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Bem pequenas» não é a resposta. A certa é «GRANDES».",
          null,
          "«Não tem letras, só desenhos» não é a resposta. A certa é «GRANDES».",
          "«No pátio da escola» não é a resposta. A certa é «GRANDES».",
        ],
        feedbackAcerto: "🎉 GRANDES pra ler de longe.",
        feedbackErro: "Cartaz precisa ser LIDO DE LONGE. Letras GRANDES.",
        dica: "Pista: a resposta certa começa com a letra 'G'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Cartaz precisa ser LIDO DE LONGE. Letras GRANDES. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — 'Lave as mãos com sabão' é um cartaz que…",
        opcoes: ["Orienta", "Convida", "Faz lista",
          "Ninguém ler",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Convida» não é a resposta. A certa é «Orienta».",
          "«Faz lista» não é a resposta. A certa é «Orienta».",
          "«Ninguém ler» não é a resposta. A certa é «Orienta».",
        ],
        feedbackAcerto: "🎉 ORIENTA (ensina o que fazer).",
        feedbackErro: "Ensina o que fazer = ORIENTA.",
        dica: "Pista: a resposta certa começa com a letra 'C'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Ensina o que fazer = ORIENTA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — Onde combina o cartaz 'SILÊNCIO. Pessoas lendo'?",
        opcoes: ["No pátio da escola", "Na biblioteca", "No mercado",
          "GRANDES",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«No pátio da escola» não é a resposta. A certa é «Na biblioteca».",
          null,
          "«No mercado» não é a resposta. A certa é «Na biblioteca».",
          "«GRANDES» não é a resposta. A certa é «Na biblioteca».",
        ],
        feedbackAcerto: "🎉 Na BIBLIOTECA!",
        feedbackErro: "Onde as pessoas LEEM? Na biblioteca.",
        dica: "Pista: a resposta certa começa com a letra 'N'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Onde as pessoas LEEM? Na biblioteca. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Qual é a diferença entre BILHETE e CARTAZ?",
        opcoes: [
          "Bilhete é pra UMA pessoa; cartaz é pra MUITAS",
          "Bilhete é grande; cartaz é pequeno",
          "Não tem diferença",
          "Orientando o que fazer",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Bilhete é grande; cartaz é pequeno» não é a resposta. A certa é «Bilhete é pra UMA pessoa; cartaz é pra MUITAS».",
          "«Não tem diferença» não é a resposta. A certa é «Bilhete é pra UMA pessoa; cartaz é pra MUITAS».",
          "«Orientando o que fazer» não é a resposta. A certa é «Bilhete é pra UMA pessoa; cartaz é pra MUITAS».",
        ],
        feedbackAcerto: "🎉 Isso! É a principal diferença.",
        feedbackErro:
          "Bilhete = UMA pessoa (destinatário). Cartaz = MUITAS pessoas.",
        dica: "Pista: a resposta certa começa com a letra 'B'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Bilhete = UMA pessoa (destinatário). Cartaz = MUITAS pessoas. Agora leia de novo e escolha com calma.",
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
