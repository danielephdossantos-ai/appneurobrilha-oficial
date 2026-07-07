import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import raposa from "@/assets/neuro-treino/objetos/raposa.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import ponte from "@/assets/neuro-treino/objetos/ponte.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import bau from "@/assets/neuro-treino/objetos/bau.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import coelho from "@/assets/neuro-treino/objetos/coelho.png";

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
        ondeEstaNoTexto: "…achou um mapa antigo debaixo da folha seca.",
      },
      {
        pergunta: "A trilha começa onde?",
        opcoes: ["Atrás da árvore grande", "Dentro do rio", "Em cima do telhado"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! 'Atrás da ÁRVORE grande'.",
        feedbackErro:
          "O mapa diz 'siga a trilha, ATRÁS da …'. Qual coisa é essa?",
        ondeEstaNoTexto: "…siga a trilha, atrás da árvore grande.",
      },
      {
        pergunta: "O que a raposinha atravessa depois da árvore?",
        opcoes: ["Um rio", "Uma ponte de madeira", "Uma escada"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Uma PONTE de madeira.",
        feedbackErro:
          "No terceiro parágrafo: 'depois da árvore, atravesse a …'. Onde?",
        ondeEstaNoTexto: "Depois da árvore, atravesse a ponte de madeira.",
      },
      {
        pergunta: "O que tinha dentro do baú?",
        opcoes: ["Uma moeda", "Uma estrela", "Um livro"],
        correta: 1,
        feedbackAcerto: "🎉 Uma ESTRELA!",
        feedbackErro:
          "O texto fala 'um baú com uma … dentro'. O que estava dentro?",
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
        ondeEstaNoTexto: "…tinha um bilhete pequeno.",
      },
      {
        pergunta: "Quem escreveu o bilhete?",
        opcoes: ["A raposa", "Aurora", "O coelho"],
        correta: 1,
        feedbackAcerto: "🎉 AURORA! O nome dela aparece depois do travessão.",
        feedbackErro:
          "No fim do bilhete tem um travessão e um nome. Esse é quem escreveu.",
        ondeEstaNoTexto: "'… — Aurora'.",
      },
    ],
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
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que a raposa achou debaixo da folha seca?",
        opcoes: ["Um baú", "Um mapa", "Uma estrela"],
        correta: 1,
        feedbackAcerto: "🎉 Um MAPA!",
        feedbackErro: "A primeira frase: '…achou um MAPA antigo debaixo da folha seca.'",
      },
      {
        pergunta: "2/5 — Qual foi o PRIMEIRO lugar do caminho?",
        opcoes: ["A ponte", "Atrás da árvore grande", "Embaixo da pedra"],
        correta: 1,
        feedbackAcerto: "🎉 Atrás da ÁRVORE.",
        feedbackErro:
          "Ordem: ÁRVORE → PONTE → PEDRA. Qual foi o primeiro?",
      },
      {
        pergunta: "3/5 — O que quer dizer 'depois da árvore'?",
        opcoes: [
          "Antes de chegar na árvore",
          "Passando pela árvore, chegando no próximo lugar",
          "Dentro da árvore",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro:
          "'DEPOIS de' = a gente passa pela primeira coisa e chega na próxima.",
      },
      {
        pergunta: "4/5 — O que tinha dentro do baú?",
        opcoes: ["Uma estrela", "Um livro", "Um coelho"],
        correta: 0,
        feedbackAcerto: "🎉 Uma ESTRELA (e um bilhete dentro dela).",
        feedbackErro:
          "O texto diz: 'um baú com uma ESTRELA dentro'.",
      },
      {
        pergunta: "5/5 — Quem escreveu o bilhete pra raposa?",
        opcoes: ["A raposa", "A lua", "Aurora"],
        correta: 2,
        feedbackAcerto: "🎉 AURORA! Livro despertado! 🗺️",
        feedbackErro:
          "No fim do bilhete: '— Aurora'. O nome depois do travessão é de quem escreveu.",
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
