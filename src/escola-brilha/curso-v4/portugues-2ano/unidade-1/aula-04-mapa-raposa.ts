import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as raposa } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";

/**
 * Aula 4 — O Mapa da Raposa
 * -------------------------------------------------------------
 * Quarta missão da Unidade 1. Aurora abre um livro de AVENTURA:
 * uma raposinha segue um mapa até um baú escondido. A criança
 * aprende a reparar em LUGARES e em palavras que mostram
 * DIREÇÃO (perto, longe, embaixo, depois de, do lado…).
 *
 * BNCC: EF02LP01 · EF02LP03 · EF02LP04
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-mapa-raposa",
  titulo: "O Mapa da Raposa",
  iconeTrilha: "🗺️",
  bncc: ["EF02LP01", "EF02LP03", "EF02LP04"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Um livro-aventura",
    historia:
      "Já são TRÊS livros despertados! Aurora tira o quarto e ele treme na mão dela. — Cuidado, esse aqui é de AVENTURA. Tem mapa, tem tesouro. Pra achar o baú, você vai precisar ler DIREITINHO os lugares. Vamos?",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Olhe o título e as pistas. O que a raposa está procurando?",
    bloco: {
      titulo: "O Mapa da Raposa",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: raposa, nome: "Uma raposa" },
        { imagemUrl: mapa, nome: "Um mapa" },
        { imagemUrl: bau, nome: "Um baú" },
      ],
      pergunta: "Antes de ler: o que essa história vai contar?",
      hipoteses: [
        { texto: "Uma raposa que segue um mapa até achar um baú.", imagemUrl: bau },
        { texto: "Um coelho que conversa com a lua.", imagemUrl: coelho },
        { texto: "Uma semente que vira girassol.", imagemUrl: arvore },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Muito bem! Mapa + baú + raposa = história de aventura pra achar tesouro.",
      feedbackErro:
        "Título: 'O Mapa da Raposa'. Pistas: raposa, mapa e baú. Combina com a primeira opção.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao:
      "Nessa história, as palavras de LUGAR são superimportantes. Aprenda 3 delas.",
    cards: [
      {
        palavra: "atrás de",
        explicacao: "Uma coisa está ATRÁS DE outra quando está do outro lado dela.",
        exemplo: "O gato está atrás da árvore — ele se escondeu.",
        imagemUrl: arvore,
      },
      {
        palavra: "depois da",
        explicacao:
          "Quando a gente caminha, uma coisa vem DEPOIS da outra. Primeiro passa por uma, DEPOIS chega na outra.",
        exemplo: "A padaria fica depois da praça.",
        imagemUrl: ponte,
      },
      {
        palavra: "embaixo de",
        explicacao: "Uma coisa está EMBAIXO DE outra quando está por baixo dela.",
        exemplo: "O cachorro dorme embaixo da cama.",
        imagemUrl: bau,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia com atenção as palavras de LUGAR (atrás, depois, embaixo…). Elas mostram o caminho.",
    leitura: {
      titulo: "O Mapa da Raposa",
      imagemUrl: raposa,
      legendaImagem: "A raposinha com o mapa",
      destacar: ["atrás", "depois", "embaixo", "ponte", "árvore", "baú"],
      paragrafos: [
        "A raposinha achou um mapa antigo debaixo da folha seca.",
        "O mapa dizia: siga a trilha, atrás da árvore grande.",
        "Depois da árvore, atravesse a ponte de madeira.",
        "Do outro lado, embaixo da pedra brilhante, tem um baú com uma estrela dentro.",
        "A raposinha seguiu tudo direitinho e achou o baú!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Onde ficam as coisas no mapa? Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Onde a raposinha achou o mapa?",
        opcoes: ["Em cima de uma pedra", "Debaixo de uma folha seca", "Dentro de um livro"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! 'DEBAIXO da folha seca'.",
        feedbackErro: "A primeira frase termina com 'debaixo da …'. Olhe lá.",
        dica: "Volte no texto e procure a parte que fala de 'raposinha'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A primeira frase termina com 'debaixo da …'. Olhe lá. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "…achou um mapa antigo debaixo da folha seca.",
      },
      {
        pergunta: "A trilha começa onde?",
        opcoes: ["Atrás da árvore grande", "Dentro do rio", "Em cima do telhado"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! 'Atrás da ÁRVORE grande'.",
        feedbackErro:
          "O mapa diz 'siga a trilha, ATRÁS da …'. Qual coisa é essa?",
        dica: "Volte no texto e procure a parte que fala de 'trilha'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O mapa diz 'siga a trilha, ATRÁS da …'. Qual coisa é essa? Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "…siga a trilha, atrás da árvore grande.",
      },
      {
        pergunta: "O que a raposinha atravessa depois da árvore?",
        opcoes: ["Um rio", "Uma ponte de madeira", "Uma escada"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Uma PONTE de madeira.",
        feedbackErro:
          "No terceiro parágrafo: 'depois da árvore, atravesse a …'. Onde?",
        dica: "Volte no texto e procure a parte que fala de 'raposinha'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: No terceiro parágrafo: 'depois da árvore, atravesse a …'. Onde? Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Depois da árvore, atravesse a ponte de madeira.",
      },
      {
        pergunta: "O que tinha dentro do baú?",
        opcoes: ["Uma moeda", "Uma estrela", "Um livro"],
        correta: 1,
        feedbackAcerto: "🎉 Uma ESTRELA!",
        feedbackErro:
          "O texto fala 'um baú com uma … dentro'. O que estava dentro?",
        dica: "Volte no texto e procure a parte que fala de 'dentro'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O texto fala 'um baú com uma … dentro'. O que estava dentro? Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "…um baú com uma estrela dentro.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "Nessa história o CENÁRIO muda várias vezes. Vamos reparar nele.",
    perguntas: [
      {
        pergunta: "Quem é o personagem principal?",
        opcoes: ["A raposa", "O coelho", "A bibliotecária Aurora"],
        correta: 0,
        feedbackAcerto: "🎉 A RAPOSA — é ela quem age em todas as frases.",
        feedbackErro:
          "Quem AGE em toda a história? Quem acha o mapa e segue o caminho?",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Em qual ORDEM aparecem os lugares?",
        opcoes: [
          "Ponte → árvore → pedra",
          "Árvore → ponte → pedra",
          "Pedra → árvore → ponte",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! Primeiro ÁRVORE, depois PONTE, depois PEDRA (com o baú).",
        feedbackErro:
          "Volte no mapa: 'atrás da ÁRVORE' → 'atravesse a PONTE' → 'embaixo da PEDRA'. Essa é a ordem.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "'Embaixo da pedra brilhante' — o que essas palavras mostram?",
        opcoes: [
          "Uma cor",
          "UM LUGAR onde algo está escondido",
          "O nome de um personagem",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! 'Embaixo de' mostra um LUGAR. Bom leitor repara nessas palavras.",
        feedbackErro:
          "'Embaixo de' fala de POSIÇÃO — em cima, embaixo, atrás, dentro. É lugar.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as etapas da aventura em ordem.",
    bloco: {
      instrucao: "Do começo até achar o baú.",
      itens: [
        { id: "p1", texto: "A raposa acha o mapa debaixo da folha seca.", imagemUrl: mapa },
        { id: "p2", texto: "Ela passa atrás da árvore grande.", imagemUrl: arvore },
        { id: "p3", texto: "Ela atravessa a ponte de madeira.", imagemUrl: ponte },
        { id: "p4", texto: "Ela acha o baú com a estrela dentro.", imagemUrl: bau },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Aventura na ordem certa!",
      feedbackErro:
        "Mapa → árvore → ponte → baú. Segue o mapa que aparece no texto.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O que tinha na estrela",
      imagemUrl: estrela,
      destacar: ["estrela", "bilhete"],
      paragrafos: [
        "Dentro da estrela do baú tinha um bilhete pequeno.",
        "O bilhete dizia: 'Parabéns! Você seguiu o mapa até o fim. — Aurora'.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que tinha DENTRO da estrela?",
        opcoes: ["Um doce", "Um bilhete", "Uma moeda"],
        correta: 1,
        feedbackAcerto: "🎉 Um BILHETE.",
        feedbackErro:
          "A primeira frase diz 'tinha um … pequeno'. O que era?",
        dica: "Volte no texto e procure a parte que fala de 'estrela'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A primeira frase diz 'tinha um … pequeno'. O que era? Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "…tinha um bilhete pequeno.",
      },
      {
        pergunta: "Quem escreveu o bilhete?",
        opcoes: ["A raposa", "Aurora", "O coelho"],
        correta: 1,
        feedbackAcerto: "🎉 AURORA! O nome dela aparece depois do travessão.",
        feedbackErro:
          "No fim do bilhete tem um travessão e um nome. Esse é quem escreveu.",
        dica: "Volte no texto e procure a parte que fala de 'escreveu'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: No fim do bilhete tem um travessão e um nome. Esse é quem escreveu. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "'… — Aurora'.",
      },
    ],
  },

    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: O que tinha na estrela",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "Dentro da estrela do baú tinha um bilhete pequeno.",
      "O bilhete dizia: 'Parabéns!",
      "Você seguiu o mapa até o fim.",
    ],
    metaSegundos: 20,
  },

momento09_revisao: {
    pontos: [
      "Palavras de LUGAR (atrás, depois, embaixo, dentro, do lado) mostram ONDE as coisas estão.",
      "Bom leitor REPARA nessas palavras — elas ajudam a imaginar a cena.",
      "Numa aventura, o cenário MUDA várias vezes. A gente segue a ordem dos lugares.",
      "No fim de um bilhete, o nome depois do travessão mostra QUEM escreveu.",
    ],
    miniDesafio: {
      pergunta: "'Embaixo da pedra' é uma palavra que fala de…",
      opcoes: ["Um sentimento", "Um lugar", "Um som"],
      correta: 1,
      feedbackAcerto: "🎉 LUGAR — embaixo, em cima, atrás, dentro.",
      feedbackErro:
        "'Embaixo de' mostra POSIÇÃO — é um LUGAR onde algo está.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Embaixo de' mostra POSIÇÃO — é um LUGAR onde algo está. Agora leia de novo e escolha com calma.",
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
          palavra: "MAPA",
          silabas: ["MA", "PA"],
          distratores: ["RA", "PO"],
          dica: "Bata palmas na palavra MAPA: são 2 pedacinhos.",
        },
        {
          palavra: "RAPOSA",
          silabas: ["RA", "PO", "SA"],
          distratores: ["MA", "PA"],
          dica: "Bata palmas na palavra RAPOSA: são 3 pedacinhos.",
        },
        {
          palavra: "TRILHA",
          silabas: ["TRI", "LHA"],
          distratores: ["MA", "PA"],
          dica: "Bata palmas na palavra TRILHA: são 2 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "A raposa guardou o mapa.",
          palavras: ["A", "raposa", "guardou", "o", "mapa."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "legenda",
        titulo: "Legenda do mapa da raposa",
        comando: "Escreva a legenda do mapa: o que ele mostra e para onde leva.",
        campos: [
          { rotulo: "O que o mapa mostra", placeholder: "o caminho da floresta…", minLetras: 10 },
          { rotulo: "Para onde ele leva", placeholder: "leva até…", minLetras: 8 },
        ],
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Coloquei PONTO no fim de cada frase.",
          "Li em voz alta e entendi tudo.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que a raposa achou debaixo da folha seca?",
        opcoes: ["Um baú", "Um mapa", "Uma estrela",
          "O coelho",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Um baú» não é a resposta. A certa é «Um mapa».",
          null,
          "«Uma estrela» não é a resposta. A certa é «Um mapa».",
          "«O coelho» não é a resposta. A certa é «Um mapa».",
        ],
        feedbackAcerto: "🎉 Um MAPA!",
        feedbackErro: "A primeira frase: '…achou um MAPA antigo debaixo da folha seca.'",
        dica: "Pista: a resposta certa começa com a letra 'U'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: A primeira frase: '…achou um MAPA antigo debaixo da folha seca.' Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Qual foi o PRIMEIRO lugar do caminho?",
        opcoes: ["A ponte", "Atrás da árvore grande", "Embaixo da pedra",
          "Pedra → árvore → ponte",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«A ponte» não é a resposta. A certa é «Atrás da árvore grande».",
          null,
          "«Embaixo da pedra» não é a resposta. A certa é «Atrás da árvore grande».",
          "«Pedra → árvore → ponte» não é a resposta. A certa é «Atrás da árvore grande».",
        ],
        feedbackAcerto: "🎉 Atrás da ÁRVORE.",
        feedbackErro:
          "Ordem: ÁRVORE → PONTE → PEDRA. Qual foi o primeiro?",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Ordem: ÁRVORE → PONTE → PEDRA. Qual foi o primeiro? Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — O que quer dizer 'depois da árvore'?",
        opcoes: [
          "Antes de chegar na árvore",
          "Passando pela árvore, chegando no próximo lugar",
          "Dentro da árvore",
          "Dentro do rio",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Antes de chegar na árvore» não é a resposta. A certa é «Passando pela árvore, chegando no próximo lugar».",
          null,
          "«Dentro da árvore» não é a resposta. A certa é «Passando pela árvore, chegando no próximo lugar».",
          "«Dentro do rio» não é a resposta. A certa é «Passando pela árvore, chegando no próximo lugar».",
        ],
        feedbackAcerto: "🎉 Isso!",
        feedbackErro:
          "'DEPOIS de' = a gente passa pela primeira coisa e chega na próxima.",
        dica: "Pista: a resposta certa começa com a letra 'P'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: DEPOIS de' = a gente passa pela primeira coisa e chega na próxima. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — O que tinha dentro do baú?",
        opcoes: ["Uma estrela", "Um livro", "Um coelho",
          "Uma moeda",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Um livro» não é a resposta. A certa é «Uma estrela».",
          "«Um coelho» não é a resposta. A certa é «Uma estrela».",
          "«Uma moeda» não é a resposta. A certa é «Uma estrela».",
        ],
        feedbackAcerto: "🎉 Uma ESTRELA (e um bilhete dentro dela).",
        feedbackErro:
          "O texto diz: 'um baú com uma ESTRELA dentro'.",
        dica: "Pista: a resposta certa começa com a letra 'U'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: O texto diz: 'um baú com uma ESTRELA dentro'. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Quem escreveu o bilhete pra raposa?",
        opcoes: ["A raposa", "A lua", "Aurora",
          "Um livro",
        ],
        correta: 2,
        feedbackOpcoes: [
          "«A raposa» não é a resposta. A certa é «Aurora».",
          "«A lua» não é a resposta. A certa é «Aurora».",
          null,
          "«Um livro» não é a resposta. A certa é «Aurora».",
        ],
        feedbackAcerto: "🎉 AURORA! Livro despertado! 🗺️",
        feedbackErro:
          "No fim do bilhete: '— Aurora'. O nome depois do travessão é de quem escreveu.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: No fim do bilhete: '— Aurora'. O nome depois do travessão é de quem escreveu. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🗺️ O mapa do tesouro em casa",
    materiais: ["Papel", "Lápis ou caneta", "1 objetinho pra ser o 'tesouro' (bala, brinquedo, moeda)"],
    passos: [
      "1) Enquanto a criança não vê, o adulto esconde o 'tesouro' em algum lugar da casa.",
      "2) O adulto desenha ou escreve um MAPA usando palavras de LUGAR: 'atrás do sofá', 'embaixo da mesa', 'do lado da geladeira'.",
      "3) A criança lê o mapa em voz alta e tenta achar o tesouro seguindo cada dica.",
      "4) Depois inverte: a criança esconde e faz o mapa pro adulto ler.",
      "5) Conversem: quais palavras do mapa mais ajudaram a achar o tesouro?",
    ],
    registro: "📸 Uma foto do mapa que a criança desenhou.",
  },

  recompensa: { xp: 100, moedas: 60 },
};
