import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";

/**
 * Unidade 4 · Aula 5 — O Grande Caso da Biblioteca
 * Missão final: abrir o último livro trancado. Registrar o
 * "Diário do Detetive da Leitura".
 *
 * BNCC: EF02LP16 · EF02LP17 · EF02LP18 · EF02LP19 · EF02LP20
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-grande-caso",
  titulo: "O Grande Caso da Biblioteca",
  iconeTrilha: "🏅",
  bncc: [
    "EF02LP16",
    "EF02LP17",
    "EF02LP18",
    "EF02LP19",
    "EF02LP20",
  ],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "O último livro trancado",
    historia:
      "Aurora leva Brilha até uma estante com UM ÚLTIMO livro trancado por um cadeado brilhante. — Esse é O GRANDE CASO. Se você conseguir ler a história inteira e responder as pistas certas, a Biblioteca Encantada ficará COMPLETA. Bora, detetive?",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "Antes do grande caso: o que um DETETIVE DA LEITURA aprendeu na Unidade 4?",
    bloco: {
      titulo: "Meus superpoderes de detetive",
      recado: {
        icone: "🏅",
        rotulo: "O que aprendi",
        estilo: "cartaz",
        linhas: [
          "1. ACHAR pistas no texto",
          "2. Descobrir a IDEIA PRINCIPAL",
          "3. Investigar PERSONAGENS",
          "4. Ler nas ENTRELINHAS",
        ],
      },
      pergunta: "Qual desses superpoderes é fazer INFERÊNCIA?",
      hipoteses: [
        { texto: "Ler nas ENTRELINHAS — descobrir o que não está escrito direto.", imagemUrl: binoculo },
        { texto: "Contar quantas letras tem cada palavra.", imagemUrl: livro },
        { texto: "Colorir a capa do livro.", imagemUrl: coracao },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 INFERÊNCIA = ler nas ENTRELINHAS. Bora provar!",
      feedbackErro:
        "Inferência é DESCOBRIR o que o texto não disse direto — o superpoder das ENTRELINHAS.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras finais do detetive.",
    cards: [
      {
        palavra: "justificar",
        explicacao:
          "É MOSTRAR a PISTA do texto que provou a sua resposta.",
        exemplo:
          "Se você diz 'estava chovendo', justifica: 'porque a mochila estava molhada'.",
        imagemUrl: binoculo,
      },
      {
        palavra: "diário",
        explicacao:
          "É um caderno onde a gente REGISTRA o que descobriu, dia a dia.",
        exemplo:
          "No fim da aula você vai preencher o Diário do Detetive.",
        imagemUrl: livros,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "O grande caso. Leia com Brilha. Depois vem a investigação!",
    leitura: {
      titulo: "O mistério do bilhete perdido",
      imagemUrl: biblioteca,
      destacar: [
        "biblioteca",
        "bilhete",
        "capa de chuva",
        "Bruno",
        "silêncio",
        "chorou baixinho",
      ],
      paragrafos: [
        "Era uma manhã cinzenta na cidade.",
        "Bruno entrou na biblioteca em silêncio, com a capa de chuva molhada e as botas sujas.",
        "Ele procurou um lugar tranquilo e abriu um envelope pequeno.",
        "Era um BILHETE da avó, dizendo que ela ia se mudar pra outra cidade.",
        "Bruno leu o bilhete duas vezes e chorou baixinho no cantinho.",
        "A bibliotecária Aurora se aproximou devagar e sentou ao lado dele.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Investigue: PISTAS explícitas e implícitas.",
    perguntas: [
      {
        pergunta: "Onde a história aconteceu?",
        opcoes: ["Na escola", "Na BIBLIOTECA", "No parque"],
        correta: 1,
        feedbackAcerto: "🎉 Biblioteca — o texto disse direto.",
        feedbackErro: "O texto disse: 'Bruno entrou na BIBLIOTECA'.",
        dica: "Volte no texto e procure a parte que fala de 'aconteceu'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O texto disse: 'Bruno entrou na BIBLIOTECA'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Bruno entrou na biblioteca",
      },
      {
        pergunta: "Quem é o personagem principal?",
        opcoes: ["A avó", "BRUNO", "Aurora"],
        correta: 1,
        feedbackAcerto: "🎉 Bruno é o personagem principal.",
        feedbackErro:
          "A história é sobre o BRUNO. Aurora só aparece no final.",
        dica: "Volte no texto e procure a parte que fala de 'personagem'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A história é sobre o BRUNO. Aurora só aparece no final. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Bruno entrou na biblioteca em silêncio",
      },
      {
        pergunta: "Como estava o TEMPO lá fora? (Justifique com pista)",
        opcoes: [
          "Sol forte — não deu pra saber",
          "CHOVENDO — porque a capa dele estava molhada",
          "Nevando — porque estava cinza",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Chovendo! Capa de chuva MOLHADA + manhã cinzenta = chuva.",
        feedbackErro:
          "PISTA: 'capa de chuva MOLHADA' + 'manhã CINZENTA' = estava CHOVENDO.",
        dica: "Volte no texto e procure a parte que fala de 'justifique'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: PISTA: 'capa de chuva MOLHADA' + 'manhã CINZENTA' = estava CHOVENDO. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "capa de chuva molhada",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Investigue o sentimento e a ideia principal.",
    perguntas: [
      {
        pergunta: "Como Bruno estava se sentindo depois de ler o bilhete?",
        opcoes: ["Muito alegre", "TRISTE", "Bravo"],
        correta: 1,
        feedbackAcerto:
          "🎉 Triste! Chorar baixinho no cantinho é pista de tristeza.",
        feedbackErro:
          "Ele CHOROU baixinho no cantinho. Isso é pista de TRISTEZA.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
        ondeEstaNoTexto: "chorou baixinho no cantinho",
      },
      {
        pergunta: "Qual é a IDEIA PRINCIPAL do texto?",
        opcoes: [
          "Bruno recebeu um bilhete da avó dizendo que ela vai se mudar",
          "A cor da capa de chuva do Bruno",
          "As botas sujas do Bruno",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Ideia principal: o bilhete da avó falando da mudança.",
        feedbackErro:
          "Capa de chuva e botas são DETALHES. A ideia principal é o BILHETE da avó.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ORDEM os fatos do grande caso.",
    bloco: {
      instrucao: "Do começo (chegou) até o fim (Aurora sentou).",
      itens: [
        { id: "s1", texto: "Bruno entrou em silêncio na biblioteca.", imagemUrl: biblioteca },
        { id: "s2", texto: "Ele abriu um envelope pequeno.", imagemUrl: livro },
        { id: "s3", texto: "Leu o bilhete da avó duas vezes.", imagemUrl: brilha },
        { id: "s4", texto: "Chorou baixinho no cantinho.", imagemUrl: coracao },
        { id: "s5", texto: "Aurora se aproximou e sentou ao lado.", imagemUrl: bibliotecaria },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto: "🎉 Ordem perfeita — o grande caso está resolvido!",
      feedbackErro:
        "Primeiro ENTROU, depois ABRIU o envelope, depois LEU o bilhete, depois CHOROU, e enfim AURORA sentou ao lado.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Revise sozinho as inferências finais.",
    leitura: {
      titulo: "O silêncio de Bruno",
      imagemUrl: brilha,
      destacar: ["silêncio", "chorou baixinho", "cantinho"],
      paragrafos: [
        "Bruno entrou em SILÊNCIO.",
        "Depois de ler o bilhete, CHOROU BAIXINHO no CANTINHO.",
        "Aurora sentou perto sem falar nada.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que Aurora sentou perto sem falar nada?",
        opcoes: [
          "Porque estava com sono",
          "Pra ACOLHER o Bruno em silêncio",
          "Porque estava com fome",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Pra acolher! Às vezes um bom amigo só senta perto e escuta.",
        feedbackErro:
          "Bruno estava triste chorando no cantinho. Aurora sentou perto pra ACOLHER, sem invadir.",
        dica: "Volte no texto e procure a parte que fala de 'aurora'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Bruno estava triste chorando no cantinho. Aurora sentou perto pra ACOLHER, sem invadir. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Aurora se aproximou devagar e sentou ao lado dele",
      },
      {
        pergunta:
          "O texto diz que Bruno estava com SAUDADE da avó?",
        opcoes: [
          "Sim, com todas as letras",
          "Não disse direto, mas eu DESCOBRI",
          "Não tem nada disso no texto",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Inferência! A palavra 'saudade' não aparece, mas o bilhete da avó + o choro são pistas.",
        feedbackErro:
          "A palavra SAUDADE não aparece escrita — a gente DESCOBRE pelas pistas.",
        dica: "Volte no texto e procure a parte que fala de 'saudade'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A palavra SAUDADE não aparece escrita — a gente DESCOBRE pelas pistas. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "📓 Diário do Detetive da Leitura",
    instrucao:
      "Monte o Diário do Detetive: coloque em ORDEM os registros do grande caso.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "📓 Diário do Detetive",
      bloco: {
        instrucao: "Ordem certa do diário: do TÍTULO até a OPINIÃO final.",
        itens: [
          { id: "d1", texto: "📖 Título: O mistério do bilhete perdido.", imagemUrl: livro },
          { id: "d2", texto: "👤 Personagem principal: BRUNO.", imagemUrl: brilha },
          { id: "d3", texto: "📍 Onde aconteceu: na BIBLIOTECA.", imagemUrl: biblioteca },
          { id: "d4", texto: "⭐ Momento mais importante: ler o bilhete da avó.", imagemUrl: estrela },
          { id: "d5", texto: "💡 O que aprendi: pistas mostram sentimentos.", imagemUrl: binoculo },
          { id: "d6", texto: "🗣️ Minha opinião: a história me fez sentir carinho.", imagemUrl: coracao },
        ],
        ordemCerta: ["d1", "d2", "d3", "d4", "d5", "d6"],
        feedbackAcerto:
          "🎉 Diário completo! O último livro se abriu — a BIBLIOTECA ENCANTADA está inteira. Você é DETETIVE da Biblioteca! 🏅",
        feedbackErro:
          "Comece pelo TÍTULO, depois PERSONAGEM, depois ONDE, depois MOMENTO importante, depois O QUE APRENDI, e enfim MINHA OPINIÃO.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Localizar informação que está ESCRITA no texto.",
      "Fazer INFERÊNCIA nas entrelinhas usando pistas.",
      "Identificar a IDEIA PRINCIPAL (o coração).",
      "Compreender PERSONAGENS pelas ações e falas.",
      "JUSTIFICAR a resposta mostrando a pista.",
    ],
    miniDesafio: {
      pergunta: "Qual desses NÃO é superpoder de detetive da leitura?",
      opcoes: [
        "Achar pistas",
        "Fazer inferência",
        "Adivinhar sem ler",
      ],
      correta: 2,
      feedbackAcerto: "🎉 Detetive NUNCA adivinha sem pista.",
      feedbackErro: "Detetive de verdade usa PISTAS — não adivinha.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Detetive de verdade usa PISTAS — não adivinha. Agora leia de novo e escolha com calma.",
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
          palavra: "CASO",
          silabas: ["CA", "SO"],
          distratores: ["PRO", "VA"],
          dica: "Bata palmas na palavra CASO: são 2 pedacinhos.",
        },
        {
          palavra: "PROVA",
          silabas: ["PRO", "VA"],
          distratores: ["CA", "SO"],
          dica: "Bata palmas na palavra PROVA: são 2 pedacinhos.",
        },
        {
          palavra: "SOLUÇÃO",
          silabas: ["SO", "LU", "ÇÃO"],
          distratores: ["CA", "PRO"],
          dica: "Bata palmas na palavra SOLUÇÃO: são 3 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "Nós resolvemos o grande caso.",
          palavras: ["Nós", "resolvemos", "o", "grande", "caso."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "cartaz",
        titulo: "Cartaz: caso resolvido!",
        comando: "Faça o cartaz que anuncia a solução do grande caso da biblioteca.",
        campos: [
          { rotulo: "Título GRANDE", placeholder: "CASO RESOLVIDO!", minLetras: 5 },
          { rotulo: "A solução", placeholder: "Descobrimos que…", minLetras: 16 },
        ],
        checklist: [
          "Contei a solução e a prova.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — No 'Grande Caso', onde a história aconteceu?",
        opcoes: ["Escola", "BIBLIOTECA", "Parque",
          "BRUNO",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Escola» não é a resposta. A certa é «BIBLIOTECA».",
          null,
          "«Parque» não é a resposta. A certa é «BIBLIOTECA».",
          "«BRUNO» não é a resposta. A certa é «BIBLIOTECA».",
        ],
        feedbackAcerto: "🎉 Biblioteca!",
        feedbackErro: "O texto disse direto: BIBLIOTECA.",
        dica: "Pista: a resposta certa começa com a letra 'B'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: O texto disse direto: BIBLIOTECA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Qual era a IDEIA PRINCIPAL?",
        opcoes: [
          "As botas sujas",
          "O bilhete da avó dizendo que ia se MUDAR",
          "A cor do envelope",
          "Não disse direto, mas eu DESCOBRI",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«As botas sujas» não é a resposta. A certa é «O bilhete da avó dizendo que ia se MUDAR».",
          null,
          "«A cor do envelope» não é a resposta. A certa é «O bilhete da avó dizendo que ia se MUDAR».",
          "«Não disse direto, mas eu DESCOBRI» não é a resposta. A certa é «O bilhete da avó dizendo que ia se MUDAR».",
        ],
        feedbackAcerto: "🎉 O bilhete da mudança!",
        feedbackErro:
          "O coração da história é o BILHETE da avó falando da mudança.",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: O coração da história é o BILHETE da avó falando da mudança. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta:
          "3/5 — 'Chorou baixinho no cantinho.' O que descobrimos sobre o Bruno?",
        opcoes: [
          "Que ele estava TRISTE",
          "Que ele estava com fome",
          "Que ele estava rindo",
          "Achar pistas",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Que ele estava com fome» não é a resposta. A certa é «Que ele estava TRISTE».",
          "«Que ele estava rindo» não é a resposta. A certa é «Que ele estava TRISTE».",
          "«Achar pistas» não é a resposta. A certa é «Que ele estava TRISTE».",
        ],
        feedbackAcerto: "🎉 Triste!",
        feedbackErro: "Chorar baixinho no cantinho é pista de TRISTEZA.",
        dica: "Pista: a resposta certa começa com a letra 'Q'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Chorar baixinho no cantinho é pista de TRISTEZA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — INFERÊNCIA é…",
        opcoes: [
          "Descobrir nas ENTRELINHAS",
          "Ler bem alto",
          "Copiar o texto",
          "Porque estava com sono",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Ler bem alto» não é a resposta. A certa é «Descobrir nas ENTRELINHAS».",
          "«Copiar o texto» não é a resposta. A certa é «Descobrir nas ENTRELINHAS».",
          "«Porque estava com sono» não é a resposta. A certa é «Descobrir nas ENTRELINHAS».",
        ],
        feedbackAcerto: "🎉 Nas entrelinhas!",
        feedbackErro:
          "Inferência = descobrir o que o texto não disse direto (nas ENTRELINHAS).",
        dica: "Pista: a resposta certa começa com a letra 'D'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Inferência = descobrir o que o texto não disse direto (nas ENTRELINHAS). Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Ao responder, um bom detetive sempre…",
        opcoes: [
          "Adivinha",
          "JUSTIFICA com uma pista do texto",
          "Fecha o livro",
          "A cor do envelope",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Adivinha» não é a resposta. A certa é «JUSTIFICA com uma pista do texto».",
          null,
          "«Fecha o livro» não é a resposta. A certa é «JUSTIFICA com uma pista do texto».",
          "«A cor do envelope» não é a resposta. A certa é «JUSTIFICA com uma pista do texto».",
        ],
        feedbackAcerto: "🎉 Justifica com pista!",
        feedbackErro:
          "Sempre JUSTIFIQUE mostrando a PISTA do texto que provou sua resposta.",
        dica: "Pista: a resposta certa começa com a letra 'J'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Sempre JUSTIFIQUE mostrando a PISTA do texto que provou sua resposta. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 O detetive lê em família",
    materiais: ["Uma história curta (livro, revista ou site)"],
    passos: [
      "1) Escolham juntos uma história curta.",
      "2) Depois da leitura, respondam em conversa:",
      "   • Quem era o personagem principal?",
      "   • Qual era o problema?",
      "   • Como foi resolvido?",
      "   • O que essa história ensina?",
      "3) A criança registra tudo no Diário do Detetive.",
    ],
    registro:
      "📸 Foto do Diário do Detetive preenchido com título, personagem, lugar, momento importante, o que aprendeu e opinião.",
  },

  recompensa: {
    xp: 700,
    moedas: 450,
    medalha: "Detetive da Biblioteca Encantada",
  },
};

void mapa;
void bussola;
void chuva;
