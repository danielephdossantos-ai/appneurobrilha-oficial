import type { AulaPortuguesV4 } from "../../types";
import lupa from "@/assets/neuro-treino/objetos/lupa.png";
import folha from "@/assets/neuro-treino/objetos/folha.png";
import cientista from "@/assets/neuro-treino/objetos/cientista-crianca.png";
import caderno from "@/assets/neuro-treino/objetos/caderno-cientifico.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import pedra from "@/assets/neuro-treino/objetos/pedra.png";
import pena from "@/assets/neuro-treino/objetos/pena.png";
import microscopio from "@/assets/neuro-treino/objetos/microscopio.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import sol from "@/assets/neuro-treino/objetos/sol.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import coruja from "@/assets/neuro-treino/objetos/coruja.png";

/**
 * Ciências · 2º Ano · Unidade 1 · Aula 02
 * "Observar com os 5 sentidos" — EF02CI01
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-observar-com-os-sentidos",
  titulo: "Observar com os 5 sentidos",
  iconeTrilha: "👀",
  bncc: ["EF02CI01"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A caixa misteriosa",
    historia:
      "Aurora colocou uma CAIXA em cima da mesa e disse: 'Brilha, dentro tem 3 coisas. Você vai descobrir o que são SEM abrir a caixa!'. Como um cientista consegue isso? Usando os 5 SENTIDOS: VER, OUVIR, CHEIRAR, TOCAR e PROVAR. Vamos treinar?",
    imagemUrl: cientista,
  },

  momento02_previsao: {
    instrucao:
      "Aurora deixou uma pista pra você. Leia o cartaz e adivinhe sobre o que vai ser a missão.",
    bloco: {
      titulo: "Missão dos 5 Sentidos",
      capaImagemUrl: lupa,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DOS SENTIDOS",
          "",
          "Descubra COMO o cientista",
          "usa o corpo pra investigar.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: lupa, nome: "Lupa (VER)" },
        { imagemUrl: flor, nome: "Flor (CHEIRAR)" },
        { imagemUrl: pena, nome: "Pena (TOCAR)" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre os 5 SENTIDOS que ajudam o cientista a observar.",
          imagemUrl: cientista,
        },
        { texto: "Sobre como jogar bola.", imagemUrl: bola },
        { texto: "Sobre como cozinhar banana.", imagemUrl: banana },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Cada pista é um SENTIDO: olho, nariz e mão. Vamos aprender todos!",
      feedbackErro:
        "Olhe as pistas: LUPA é pra VER, FLOR é pra CHEIRAR, PENA é pra TOCAR. São SENTIDOS.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras novas pra você virar um observador de verdade.",
    cards: [
      {
        palavra: "sentidos",
        explicacao:
          "São 5: VISÃO (olho), AUDIÇÃO (ouvido), OLFATO (nariz), TATO (pele) e PALADAR (língua). O cientista usa TODOS pra investigar.",
        exemplo:
          "Brilha usou os SENTIDOS pra descobrir o que tinha na caixa misteriosa.",
        imagemUrl: cientista,
      },
      {
        palavra: "detalhe",
        explicacao:
          "É uma parte PEQUENA que só quem olha com atenção percebe. Cientista sempre procura DETALHES.",
        exemplo:
          "Com a lupa, Brilha viu um DETALHE na folha: pequenos riscos verdes.",
        imagemUrl: lupa,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia com Aurora. As palavras em destaque são os SENTIDOS que a gente usa.",
    leitura: {
      titulo: "Os 5 sentidos do cientista",
      imagemUrl: lupa,
      legendaImagem: "A lupa ajuda a VISÃO a enxergar detalhes minúsculos.",
      destacar: ["ver", "ouvir", "cheirar", "tocar", "provar", "detalhes"],
      paragrafos: [
        "Um bom cientista usa o corpo INTEIRO pra observar. Ele pode VER com os olhos, OUVIR com os ouvidos e CHEIRAR com o nariz.",
        "Também pode TOCAR com as mãos pra saber se é liso ou áspero. E, se for uma comida segura, pode PROVAR com a língua.",
        "Cada sentido mostra DETALHES diferentes. Por isso o cientista nunca usa só UM sentido — usa TODOS os que puder.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão no texto. Volte lá se precisar.",
    perguntas: [
      {
        pergunta: "Quantos sentidos o cientista usa pra observar?",
        opcoes: ["Só um", "Dois", "Cinco"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! São 5 sentidos.",
        feedbackErro:
          "Volte no título: 'Os 5 sentidos do cientista'.",
        ondeEstaNoTexto: "Os 5 SENTIDOS do cientista.",
      },
      {
        pergunta: "Com o que a gente CHEIRA?",
        opcoes: ["Com o olho", "Com o NARIZ", "Com a mão"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! O nariz é o sentido do OLFATO.",
        feedbackErro:
          "Está no primeiro parágrafo: 'CHEIRAR com o nariz'.",
        ondeEstaNoTexto: "…CHEIRAR com o nariz.",
      },
      {
        pergunta: "O cientista pode PROVAR qualquer coisa?",
        opcoes: [
          "Sim, tudo!",
          "Só se for uma COMIDA SEGURA",
          "Não pode nunca",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Boa! Provar SÓ com comida segura. Nunca prove coisa desconhecida.",
        feedbackErro:
          "Olhe o 2º parágrafo: 'se for uma COMIDA SEGURA, pode PROVAR'.",
        ondeEstaNoTexto: "…se for uma comida segura, pode PROVAR com a língua.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos ver se você lembra da caixa misteriosa.",
    perguntas: [
      {
        pergunta: "O que Aurora colocou em cima da mesa?",
        opcoes: ["Um bolo", "Uma CAIXA misteriosa", "Uma bicicleta"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A CAIXA misteriosa.",
        feedbackErro:
          "Volte na história do começo: 'Aurora colocou uma CAIXA'.",
      },
      {
        pergunta: "Como Brilha pode descobrir o que tem na caixa?",
        opcoes: [
          "Abrindo com um martelo",
          "Usando os 5 SENTIDOS",
          "Jogando fora",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Certo! É pra investigar SEM abrir.",
        feedbackErro: "Volte na história: 'usando os 5 SENTIDOS'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Brilha investigou uma FLOR. Coloque em ordem: qual sentido ele usou 1º, 2º e 3º?",
    bloco: {
      instrucao: "1º olha → 2º cheira → 3º toca.",
      itens: [
        {
          id: "s1",
          texto: "1º VER a cor e o tamanho da flor.",
          imagemUrl: flor,
        },
        {
          id: "s2",
          texto: "2º CHEIRAR o perfume da flor.",
          imagemUrl: flor,
        },
        {
          id: "s3",
          texto: "3º TOCAR nas pétalas com o dedo.",
          imagemUrl: pena,
        },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto:
        "🎉 Boa! Cientista sempre COMEÇA olhando, depois cheira e por último toca com cuidado.",
      feedbackErro:
        "A ordem certa é: primeiro OLHAR, depois CHEIRAR e por último TOCAR.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda as 2 perguntas sobre a maçã do Brilha.",
    leitura: {
      titulo: "A maçã de Brilha",
      imagemUrl: maca,
      destacar: ["vermelha", "doce", "lisa"],
      paragrafos: [
        "Brilha pegou uma MAÇÃ e observou: 'Ela é VERMELHA e brilhante!'. Depois cheirou: 'Tem um cheiro DOCE.'.",
        "Passou o dedo por fora: 'A casca é LISA e fresquinha.'. Aurora sorriu: 'Você usou 3 sentidos, Brilha!'.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual a COR da maçã do Brilha?",
        opcoes: ["Azul", "VERMELHA", "Verde"],
        opcoesImagens: [pedra, maca, folha],
        correta: 1,
        feedbackAcerto: "🎉 Isso! VERMELHA.",
        feedbackErro: "Está no 1º parágrafo: 'Ela é …'.",
        ondeEstaNoTexto: "…Ela é VERMELHA e brilhante!",
      },
      {
        pergunta: "Como é o CHEIRO da maçã?",
        opcoes: ["Doce", "Azedo", "Sem cheiro"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! Cheiro DOCE.",
        feedbackErro: "Olhe: 'Tem um cheiro …'.",
        ondeEstaNoTexto: "…Tem um cheiro DOCE.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🎯 Qual sentido eu uso?",
    instrucao:
      "Aurora vai mostrar objetos. Marque os que a gente investiga usando principalmente a VISÃO (o olho).",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Qual sentido eu uso?",
      bloco: {
        instrucao:
          "Toque nos objetos que a gente conhece MELHOR usando os OLHOS (vendo cor, tamanho, forma).",
        pergunta: "Quais desses objetos a gente investiga com a VISÃO?",
        opcoes: [
          { id: "estrela", texto: "Estrela no céu", imagemUrl: estrela, correto: true },
          { id: "sol", texto: "Cor do sol", imagemUrl: sol, correto: true },
          { id: "flor", texto: "Cor da flor", imagemUrl: flor, correto: true },
          { id: "microscopio", texto: "Detalhes no microscópio", imagemUrl: microscopio, correto: true },
          { id: "coruja", texto: "Som da coruja (é audição!)", imagemUrl: coruja, correto: false },
          { id: "banana", texto: "Gosto da banana (é paladar!)", imagemUrl: banana, correto: false },
        ],
        feedbackAcerto:
          "🎉 Perfeito! Cor, forma e detalhes a gente pega com a VISÃO. Som é audição e gosto é paladar.",
        feedbackErro:
          "Cuidado: SOM a gente ouve, GOSTO a gente prova. Só marque o que se descobre OLHANDO.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "O cientista tem 5 SENTIDOS: visão, audição, olfato, tato e paladar.",
      "Visão = olho. Audição = ouvido. Olfato = nariz. Tato = mão. Paladar = língua.",
      "Cada sentido mostra DETALHES diferentes.",
      "Nunca PROVAR nada desconhecido — só comida SEGURA.",
      "A LUPA e o MICROSCÓPIO ajudam a VISÃO a ver mais detalhes.",
    ],
    miniDesafio: {
      pergunta: "Com qual sentido eu descubro se uma pedra é LISA ou ÁSPERA?",
      opcoes: ["Visão", "TATO (mão)", "Audição"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! LISO ou ÁSPERO a gente sente com o TATO.",
      feedbackErro:
        "Textura (liso/áspero) a gente sente TOCANDO. Isso é o TATO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Quantos sentidos a gente tem?",
        opcoes: ["3", "5", "10"],
        correta: 1,
        feedbackAcerto: "🎉 5 sentidos.",
        feedbackErro: "São 5: ver, ouvir, cheirar, tocar e provar.",
      },
      {
        pergunta: "Com o que eu OUÇO?",
        opcoes: ["Olho", "OUVIDO", "Nariz"],
        correta: 1,
        feedbackAcerto: "🎉 Ouvido = audição.",
        feedbackErro: "Ouvir é com o OUVIDO.",
      },
      {
        pergunta: "Qual objeto ajuda a VISÃO a ver coisas pequenas?",
        opcoes: ["Bola", "LUPA", "Banana"],
        opcoesImagens: [bola, lupa, banana],
        correta: 1,
        feedbackAcerto: "🎉 A LUPA aumenta o que a gente vê.",
        feedbackErro: "A LUPA é a amiga da visão.",
      },
      {
        pergunta: "Pra saber se uma coisa é LISA, eu uso o quê?",
        opcoes: ["Olho", "MÃO (tato)", "Nariz"],
        correta: 1,
        feedbackAcerto: "🎉 Tato = mão.",
        feedbackErro: "Textura a gente sente TOCANDO.",
      },
      {
        pergunta: "Aurora deu uma fruta desconhecida do chão. Posso PROVAR?",
        opcoes: [
          "Sim, todas as frutas são boas",
          "NÃO — só provo comida segura",
          "Só se estiver com fome",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Cientista de verdade só prova coisa SEGURA.",
        feedbackErro:
          "NUNCA prove algo desconhecido. Pode ser perigoso.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🎁 Caixa Misteriosa em casa",
    materiais: [
      "1 caixa ou saco não transparente",
      "3 objetos diferentes da casa (fruta, brinquedo, pedaço de tecido…)",
      "Papel e lápis pro Diário do Cientista",
    ],
    passos: [
      "Um adulto coloca 3 objetos DENTRO da caixa sem você ver.",
      "Sem OLHAR, coloque a mão e TOQUE em um objeto.",
      "Descreva pra família: é liso? áspero? mole? duro? frio?",
      "Chute o que é. Depois abra e VEJA se acertou.",
      "Repita com os outros 2 objetos e desenhe no papel.",
    ],
    registro:
      "Uma foto do seu desenho dos 3 objetos que estavam na caixa misteriosa.",
  },

  recompensa: {
    xp: 100,
    moedas: 50,
    medalha: "Observador dos Sentidos",
  },
};
