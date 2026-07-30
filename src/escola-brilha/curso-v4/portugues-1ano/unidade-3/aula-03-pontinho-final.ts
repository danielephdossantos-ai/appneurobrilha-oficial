import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 3 — Ponto, Interrogação e Exclamação
 * -------------------------------------------------------------
 * A criança reconhece os 3 sinais de pontuação final mais usados
 * e o efeito de cada um: contar (.), perguntar (?) e exclamar (!).
 *
 * BNCC: EF01LP14, EF12LP04
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-pontinho-final",
  titulo: "Ponto, Interrogação e Exclamação",
  iconeTrilha: "❗",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O robô das três vozes",
    historia:
      "Brilha ganhou um robozinho engraçado. Quando a frase termina com PONTO, ele fala calmo. Quando termina com INTERROGAÇÃO (?), ele pergunta curioso. Quando termina com EXCLAMAÇÃO (!), ele grita animado! Vamos descobrir os três jeitinhos dele?",
    imagemUrl: robo,
  },

  momento02_previsao: {
    instrucao: "Olhe essas 3 frases. O que muda entre elas?",
    bloco: {
      titulo: "Três frases sobre o gato",
      capaImagemUrl: gato,
      recado: {
        rotulo: "Cartaz",
        icone: "🐱",
        linhas: ["O gato subiu no telhado.", "O gato subiu no telhado?", "O gato subiu no telhado!"],
        estilo: "papel",
      },
      pergunta: "O que você acha que muda entre as três frases?",
      hipoteses: [
        { texto: "O sinal final muda o jeito de falar a frase.", imagemUrl: gato },
        { texto: "Nada muda, são iguais.", imagemUrl: gato },
        { texto: "Muda o personagem da frase.", imagemUrl: robo },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! O sinal no final muda o jeito de ler: contar, perguntar ou se assustar/animar.",
      feedbackErro:
        "Repare no finalzinho de cada frase: ( . ) ( ? ) ( ! ). Cada sinal muda o jeito de ler a mesma frase.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três sinais importantes de hoje.",
    cards: [
      {
        palavra: "ponto final",
        explicacao: "Sinal ( . ) que fecha uma frase que apenas CONTA algo, com calma.",
        exemplo: "O sol é quente.",
        imagemUrl: estrela,
      },
      {
        palavra: "ponto de interrogação",
        explicacao: "Sinal ( ? ) que fecha uma PERGUNTA.",
        exemplo: "Você viu meu gato?",
        imagemUrl: gato,
      },
      {
        palavra: "ponto de exclamação",
        explicacao: "Sinal ( ! ) que mostra surpresa, alegria ou susto.",
        exemplo: "Que legal!",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Cada sinal muda o jeito de ler",
    instrucao: "Ouça o jeito diferente de ler cada frase, conforme o sinal final.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O menino brinca no parque.", explicacao: "Ponto final: fala calma, contando algo." },
          { texto: "O menino brinca no parque?", explicacao: "Interrogação: voz de pergunta, sobe no final." },
          { texto: "O menino brinca no parque!", explicacao: "Exclamação: voz animada ou de susto." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com atenção ao sinal do final de cada frase.",
    leitura: {
      titulo: "O robô curioso",
      imagemUrl: robo,
      legendaImagem: "O robô das três vozes",
      destacar: ["ponto", "pergunta", "exclamação"],
      paragrafos: [
        "O robô de Brilha adora perguntar coisas. Ele pergunta: Onde está a lua?",
        "Quando acha a resposta, ele fica muito feliz e grita: Achei!",
        "Depois, ele conta tudo com calma, terminando com ponto.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que o robô adora fazer?",
        opcoes: ["Dormir", "Perguntar coisas", "Correr"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ele 'adora perguntar coisas'.",
        feedbackErro: "Releia a primeira frase do texto.",
        ondeEstaNoTexto: "O robô de Brilha adora perguntar coisas.",
      },
      {
        pergunta: "O que ele grita quando acha a resposta?",
        opcoes: ["'Achei!'", "'Tchau!'", "'Onde está?'"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ele grita 'Achei!' com exclamação.",
        feedbackErro: "Está no segundo parágrafo: 'ele fica muito feliz e grita: Achei!'",
        ondeEstaNoTexto: "ele fica muito feliz e grita: Achei!",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Pensando sobre os sinais de pontuação.",
    perguntas: [
      {
        pergunta: "Qual sinal usamos para fazer uma pergunta?",
        opcoes: ["Ponto ( . )", "Interrogação ( ? )", "Exclamação ( ! )"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A INTERROGAÇÃO fecha perguntas.",
        feedbackErro: "O sinal ( ? ) é usado quando queremos perguntar algo.",
      },
      {
        pergunta: "Qual sinal mostra surpresa ou alegria?",
        opcoes: ["Ponto ( . )", "Interrogação ( ? )", "Exclamação ( ! )"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! A EXCLAMAÇÃO mostra emoção forte.",
        feedbackErro: "O sinal ( ! ) aparece quando há surpresa, alegria ou susto.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Essas frases do robô ficaram fora de ordem. Coloque na ordem da história.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "s1", texto: "Onde está a lua?", imagemUrl: robo },
        { id: "s2", texto: "Achei!", imagemUrl: estrela },
        { id: "s3", texto: "A lua está no céu.", imagemUrl: robo },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎉 Perfeito! Primeiro pergunta, depois comemora, depois conta com calma.",
      feedbackErro: "Pense: primeiro ele PERGUNTA, depois GRITA de alegria, depois CONTA calmamente.",
    },
  },

  momento_minijogo: {
    titulo: "Escolha o Sinal Certo",
    instrucao: "Selecione as frases que terminam com PONTO DE EXCLAMAÇÃO.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Caça aos sinais",
      bloco: {
        instrucao: "Toque somente nas frases que mostram exclamação ( ! ).",
        pergunta: "Quais frases terminam com exclamação?",
        opcoes: [
          { id: "o1", texto: "Que legal!", correto: true },
          { id: "o2", texto: "O sol é quente.", correto: false },
          { id: "o3", texto: "Cuidado!", correto: true },
          { id: "o4", texto: "Você viu meu gato?", correto: false },
        ],
        feedbackAcerto: "🎉 Isso! 'Que legal!' e 'Cuidado!' mostram emoção forte, por isso usam exclamação.",
        feedbackErro: "Procure o sinal ( ! ) no final — ele mostra surpresa, alegria ou aviso.",
      },
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A pergunta da Mia",
      imagemUrl: menina,
      destacar: ["Mia", "pergunta"],
      paragrafos: [
        "Mia perguntou: Cadê meu lápis?",
        "Ela procurou na mochila e gritou: Achei!",
      ],
    },
    perguntas: [
      {
        pergunta: "O que Mia perguntou?",
        opcoes: ["Cadê meu lápis?", "Cadê meu gato?", "Cadê minha bola?"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ela perguntou 'Cadê meu lápis?'.",
        feedbackErro: "Releia a primeira frase: 'Mia perguntou: Cadê meu lápis?'",
        ondeEstaNoTexto: "Mia perguntou: Cadê meu lápis?",
      },
      {
        pergunta: "O que Mia gritou ao encontrar o lápis?",
        opcoes: ["'Cadê?'", "'Achei!'", "'Tchau!'"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ela gritou 'Achei!' com exclamação.",
        feedbackErro: "Está na segunda frase: 'ela gritou: Achei!'",
        ondeEstaNoTexto: "ela gritou: Achei!",
      },
    ],
  },

  // ------------------------------------------------------------
  // ESCRITA — traçado com o dedo + ditado com sílabas móveis
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Escrever com ponto, ? e !",
    instrucao: "Cada frase pede um sinal no final. Escreva uma de cada.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "O", exemplo: "O de ONDE, começo da pergunta", dicaTracado: "uma roda inteira" },
          { letra: "A", exemplo: "A de ACHEI", dicaTracado: "dois riscos e uma pontinha no meio" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "LUA", silabas: ["LU", "A"], distratores: ["SO", "MI"], dica: "O robô procurou a ... no céu." },
          { palavra: "MALA", silabas: ["MA", "LA"], distratores: ["BO", "TE"], dica: "Mia procurou o lápis dentro da ..." },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Três frases, três sinais",
        comando: "Escreva 3 frases: a 1ª com ponto ( . ), a 2ª com interrogação ( ? ) e a 3ª com exclamação ( ! ).",
        linhas: 3,
        modelo: ["Eu tenho um gato.", "Cadê meu lápis?", "Achei!"],
        checklist: ["Comecei com letra maiúscula?", "A frase 2 termina com ? ", "A frase 3 termina com ! "],
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Ponto final ( . ) fecha frases que contam algo, com calma.",
      "Interrogação ( ? ) fecha perguntas.",
      "Exclamação ( ! ) mostra surpresa, alegria ou susto.",
      "O mesmo grupo de palavras pode mudar de sentido conforme o sinal final.",
    ],
    miniDesafio: {
      pergunta: "Qual sinal usamos quando queremos perguntar algo?",
      opcoes: ["Ponto ( . )", "Interrogação ( ? )", "Exclamação ( ! )"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! A interrogação fecha perguntas.",
      feedbackErro: "O sinal certo para perguntas é a interrogação ( ? ).",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual sinal fecha uma pergunta?",
        opcoes: ["Ponto final ( . )", "Interrogação ( ? )", "Exclamação ( ! )", "Vírgula ( , )"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Pergunta pede resposta e termina com interrogação ( ? ).",
      },
      {
        pergunta: "2/5 — Qual sinal mostra surpresa ou alegria?",
        opcoes: ["Ponto final ( . )", "Interrogação ( ? )", "Exclamação ( ! )", "Vírgula ( , )"],
        correta: 2,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Susto, alegria e grito usam a exclamação ( ! ).",
      },
      {
        pergunta: "3/5 — O que Mia perguntou?",
        opcoes: ["Cadê meu lápis?", "Cadê meu caderno?", "Cadê meu carro?", "Cadê minha flor?"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "No texto: 'Mia perguntou: Cadê meu lápis?'",
      },
      {
        pergunta: "4/5 — O robô grita 'Achei!' usando qual sinal?",
        opcoes: ["Ponto final ( . )", "Interrogação ( ? )", "Exclamação ( ! )", "Vírgula ( , )"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! Exclamação, pois mostra alegria.",
        feedbackErro: "Ele está animado e falando alto — isso pede exclamação ( ! ).",
      },
      {
        pergunta: "5/5 — Uma frase que só CONTA algo, com calma, termina com...",
        opcoes: ["Ponto final ( . )", "Interrogação ( ? )", "Exclamação ( ! )", "Vírgula ( , )"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ponto final.",
        feedbackErro: "Se não pergunta nem grita, é só contar: usa-se o ponto final ( . ).",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça aos sinais em casa",
    materiais: ["Um livro, gibi ou revista"],
    passos: [
      "1) Escolham um texto qualquer com a família.",
      "2) Procurem juntos: uma frase com ponto, uma com interrogação e uma com exclamação.",
      "3) Leiam cada uma com a voz certa: calma, de pergunta ou animada.",
      "4) A criança desenha o sinal favorito.",
    ],
    registro: "🎙️ Um áudio da criança lendo as 3 frases com a voz certa.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
