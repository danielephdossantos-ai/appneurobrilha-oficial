import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";

/**
 * Aula 2 — Palavras na Ordem Certa
 * -------------------------------------------------------------
 * A criança pratica organizar palavras embaralhadas para formar
 * uma frase com sentido, usando o minijogo ordenarSequencia.
 *
 * BNCC: EF01LP11, EF01LP13
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-ordem-das-palavras",
  titulo: "Palavras na Ordem Certa",
  iconeTrilha: "🔤",
  bncc: ["EF01LP11", "EF01LP13"],
  duracaoMin: 15,

  // ============================================================
  // MODO JOGO — áudio + imagem + toque.
  // ============================================================
  momentosJogo: [
    {
      tipo: "boasVindas",
      mascoteUrl: esquiloBrilha,
      falaMascote:
        "Oi de novo! Hoje a gente vai descobrir que a ORDEM das palavras é muito importante. Vamos jogar?",
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada figura pra ouvir o nome dela.",
      itens: [
        { nome: "cachorro", imagemUrl: cachorro },
        { nome: "bola", imagemUrl: bola },
        { nome: "menina", imagemUrl: menina },
      ],
    },
    {
      tipo: "leituraFrase",
      imagemUrl: cachorro,
      frase: "O cachorro brinca com a bola.",
      instrucaoAudio: "Escuta essa frase. Ela está na ordem certa e faz sentido.",
      elogio: "Isso! Quem faz vem primeiro, depois a ação, depois o quê.",
    },
    {
      tipo: "compreensaoLeitura",
      perguntaAudio: "Escuta as duas frases. Qual delas faz sentido: 'O cachorro brinca com a bola' ou 'Bola o cachorro com brinca'?",
      opcoes: [
        { texto: "O cachorro brinca com a bola.", correta: true },
        { texto: "Bola o cachorro com brinca.", correta: false },
      ],
      feedbackAcerto: "Isso! Quando as palavras estão na ordem certa, a frase faz sentido.",
      feedbackErro: "Escuta de novo: uma frase soa certinha, a outra soa embaralhada. Qual delas você entendeu?",
    },
    {
      tipo: "leituraFrase",
      imagemUrl: menina,
      frase: "A menina rega a flor.",
      instrucaoAudio: "Escuta essa outra frase, bem na ordem certa.",
      elogio: "Isso mesmo! Primeiro quem faz, depois a ação, depois o quê.",
    },
    {
      tipo: "compreensaoLeitura",
      perguntaAudio: "Qual dessas frases está na ordem certa e faz sentido?",
      opcoes: [
        { texto: "Flor a rega menina a.", correta: false },
        { texto: "A menina rega a flor.", correta: true },
      ],
      feedbackAcerto: "Isso! Essa frase segue a ordem certinha: quem faz, a ação, o quê.",
      feedbackErro: "Escuta de novo bem devagar. Uma das frases parece embaralhada.",
    },
    {
      tipo: "letrasMoveis",
      imagemUrl: carro,
      palavra: "CARRO",
      distratoras: ["B", "T", "S"],
      instrucaoAudio: "Arrasta as letras pra montar a palavra CARRO.",
      elogio: "Você montou CARRO! Cada letra no seu lugar certo.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Escuta: 'O carro anda na rua.' Qual figura combina?",
      opcoes: [
        { nome: "carro", imagemUrl: carro, correta: true },
        { nome: "flor", imagemUrl: flor, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "Isso! A frase fala do CARRO andando.",
      feedbackErro: "Escuta de novo: 'O carro anda.' De quem a frase fala?",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Arrume a frase em casa",
      convite:
        "Peça a um adulto para falar 3 palavras embaralhadas e você tenta arrumar na ordem certa, em voz alta.",
      dicaAdulto:
        "Use frases simples como 'bola a menino chuta o' → a criança deve dizer 'O menino chuta a bola'.",
    },
    {
      tipo: "celebracao",
      medalha: "Arrumadora de Palavras",
      mascoteUrl: esquiloBrilha,
      falaFinal: "Muito bem! Agora você sabe que a ordem das palavras muda tudo. Vamos continuar aprendendo!",
    },
  ],

  momento01_motivacao: {
    titulo: "O vento bagunçou as palavras",
    historia:
      "Um vento forte passou e embaralhou as palavras da frase de Brilha: 'BOLA CACHORRO O COM BRINCA'. Assim não dá pra entender nada! Vamos ajudar Brilha a arrumar as palavras na ordem certa?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Veja essas palavras soltas. O que você acha que elas querem dizer, na ordem certa?",
    bloco: {
      titulo: "Palavras embaralhadas",
      capaImagemUrl: cachorro,
      pistas: [
        { imagemUrl: cachorro, nome: "Um cachorro" },
        { imagemUrl: bola, nome: "Uma bola" },
      ],
      pergunta: "Juntando 'O', 'CACHORRO', 'BRINCA', 'COM', 'BOLA' na ordem certa, o que forma?",
      hipoteses: [
        { texto: "O cachorro brinca com a bola.", imagemUrl: cachorro },
        { texto: "A bola brinca com o carro.", imagemUrl: carro },
        { texto: "O cachorro dorme na flor.", imagemUrl: flor },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Juntando na ordem certa, as palavras fazem sentido: 'O cachorro brinca com a bola.'",
      feedbackErro:
        "Pense: quem brinca? O CACHORRO. Com o quê? Com a BOLA. A ordem certa é 'O cachorro brinca com a bola.'",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras de hoje.",
    cards: [
      {
        palavra: "ordem",
        explicacao: "É o jeito certo de colocar as palavras, uma depois da outra, pra fazer sentido.",
        exemplo: "Na ordem certa: 'O menino corre.'",
        imagemUrl: menino,
      },
      {
        palavra: "embaralhado",
        explicacao: "Quando as coisas estão fora do lugar, misturadas, sem ordem.",
        exemplo: "As palavras ficaram embaralhadas pelo vento.",
        imagemUrl: bola,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "A ordem muda o sentido!",
    instrucao: "Veja como cada frase precisa da ordem certa para fazer sentido.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O menino chuta a bola.", explicacao: "Quem faz vem primeiro, depois a ação, depois o quê." },
          { texto: "O cachorro late alto.", explicacao: "Sujeito + ação + como." },
          { texto: "A menina rega a flor.", explicacao: "Cada palavra no lugar certo forma sentido." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler essas frases já na ordem certa.",
    leitura: {
      titulo: "Um dia de brincadeiras",
      imagemUrl: menino,
      legendaImagem: "Léo e seu cachorro",
      destacar: ["Léo", "cachorro", "bola"],
      paragrafos: [
        "Léo pega a bola. O cachorro late de alegria.",
        "Léo joga a bola longe. O cachorro corre atrás dela.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que Léo pega no começo?",
        opcoes: ["Um carro", "A bola", "Uma flor"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Léo pega a bola.'",
        feedbackErro: "Releia a primeira frase: 'Léo pega a bola.'",
        ondeEstaNoTexto: "Léo pega a bola.",
      },
      {
        pergunta: "O que o cachorro faz quando Léo joga a bola?",
        opcoes: ["Dorme", "Corre atrás dela", "Late parado"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Ele corre atrás da bola.",
        feedbackErro: "Está na última frase: 'O cachorro corre atrás dela.'",
        ondeEstaNoTexto: "O cachorro corre atrás dela.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Pensando sobre a ordem das palavras.",
    perguntas: [
      {
        pergunta: "Por que a ordem das palavras é importante?",
        opcoes: [
          "Não é importante",
          "Porque muda o sentido da frase",
          "Só para ficar bonito",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Trocar a ordem pode mudar totalmente o sentido.",
        feedbackErro: "Pense em 'O cachorro morde o menino' e 'O menino morde o cachorro' — a ordem muda tudo!",
      },
      {
        pergunta: "Qual frase está na ORDEM certa?",
        opcoes: ["bola a chuta menino o", "O menino chuta a bola.", "chuta bola o menino a"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ela segue a ordem que faz sentido.",
        feedbackErro: "As outras estão embaralhadas. A ordem certa começa por quem faz a ação: 'O menino'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Estas palavras formam uma frase. Arraste na ordem certa!",
    bloco: {
      instrucao: "Monte a frase: 'A menina rega a flor.'",
      itens: [
        { id: "p1", texto: "A menina", imagemUrl: menino },
        { id: "p2", texto: "rega", imagemUrl: flor },
        { id: "p3", texto: "a flor.", imagemUrl: flor },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! 'A menina rega a flor.' faz todo sentido!",
      feedbackErro: "Pense: primeiro quem faz (a menina), depois a ação (rega), depois o quê (a flor).",
    },
  },

  momento_minijogo: {
    titulo: "Arrume a Frase",
    instrucao: "As palavras embaralharam de novo! Coloque cada uma na ordem certa.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "Ordem Certa",
      bloco: {
        instrucao: "Monte a frase: 'O cachorro late alto.'",
        itens: [
          { id: "c1", texto: "O cachorro", imagemUrl: cachorro },
          { id: "c2", texto: "late", imagemUrl: cachorro },
          { id: "c3", texto: "alto.", imagemUrl: bola },
        ],
        ordemCerta: ["c1", "c2", "c3"],
        feedbackAcerto: "🎉 Muito bem! 'O cachorro late alto.' está certinha!",
        feedbackErro: "Pense: quem faz a ação vem primeiro. Depois a ação. Depois como ela é feita.",
      },
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O carrinho de Rafa",
      imagemUrl: carro,
      destacar: ["Rafa", "carrinho"],
      paragrafos: [
        "Rafa empurra o carrinho pela rua.",
        "O carrinho vermelho corre bem rápido.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que Rafa empurra?",
        opcoes: ["Uma bola", "O carrinho", "Uma flor"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ele empurra o carrinho.",
        feedbackErro: "Releia: 'Rafa empurra o carrinho pela rua.'",
        ondeEstaNoTexto: "Rafa empurra o carrinho pela rua.",
      },
      {
        pergunta: "De que cor é o carrinho?",
        opcoes: ["Azul", "Verde", "Vermelho"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! O carrinho é vermelho.",
        feedbackErro: "Está na segunda frase: 'O carrinho vermelho corre bem rápido.'",
        ondeEstaNoTexto: "O carrinho vermelho corre bem rápido.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "As palavras precisam estar na ORDEM certa para formar sentido.",
      "Trocar a ordem pode mudar completamente o significado da frase.",
      "Geralmente: primeiro quem faz, depois a ação, depois o quê.",
      "Frases embaralhadas não têm sentido — precisamos arrumá-las.",
    ],
    miniDesafio: {
      pergunta: "Qual frase está na ordem certa?",
      opcoes: ["flor a menina rega", "A menina rega a flor.", "rega flor menina a"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! A ordem certa forma sentido completo.",
      feedbackErro: "Pense: quem faz vem primeiro — 'A menina'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Por que a ordem das palavras importa?",
        opcoes: ["Não importa", "Porque muda o sentido", "Só é mais bonito"],
        correta: 1,
        feedbackAcerto: "🎉 Isso mesmo!",
        feedbackErro: "A ordem muda o sentido da frase.",
      },
      {
        pergunta: "2/5 — Qual está na ordem certa?",
        opcoes: ["bola a menino o chuta", "O menino chuta a bola.", "chuta o a bola menino"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "A frase certa começa por quem faz a ação.",
      },
      {
        pergunta: "3/5 — O que Léo pegou na história?",
        opcoes: ["Um carrinho", "A bola", "Uma flor"],
        correta: 1,
        feedbackAcerto: "🎉 A bola!",
        feedbackErro: "No texto: 'Léo pega a bola.'",
      },
      {
        pergunta: "4/5 — De que cor era o carrinho de Rafa?",
        opcoes: ["Vermelho", "Azul", "Amarelo"],
        correta: 0,
        feedbackAcerto: "🎉 Vermelho!",
        feedbackErro: "No texto: 'O carrinho vermelho corre bem rápido.'",
      },
      {
        pergunta: "5/5 — Geralmente, o que vem primeiro numa frase?",
        opcoes: ["A ação", "Quem faz a ação", "O ponto final"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Primeiro vem quem faz.",
        feedbackErro: "Pense em 'O menino chuta a bola' — 'O menino' vem primeiro.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Frases embaralhadas em casa",
    materiais: ["Papelzinhos ou post-its", "Lápis"],
    passos: [
      "1) Escrevam juntos uma frase simples (ex.: 'O gato dorme no sofá.').",
      "2) Cortem em pedacinhos, uma palavra em cada papel.",
      "3) Embaralhem os papéis e peça para a criança montar a frase de novo.",
      "4) Repitam com frases diferentes.",
    ],
    registro: "📷 Foto da frase montada certinha.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
