import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as cristal } from "@/assets/neuro-treino/objetos/cristal-solo.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";

/**
 * Aula 2 — Linguagem figurada na literatura
 * -------------------------------------------------------------
 * Os Exploradores encontram um cristal que "brilha com palavras" e
 * descobrem quatro ferramentas da literatura para dizer mais do que
 * as palavras dizem sozinhas: metáfora, personificação, comparação
 * e hipérbole.
 *
 * BNCC: EF35LP27 (recursos linguísticos, efeitos de sentido), EF35LP28.
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-linguagem-figurada",
  titulo: "Linguagem figurada na literatura",
  iconeTrilha: "💎",
  bncc: ["EF35LP27", "EF35LP28"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O cristal que fala em enigmas",
    historia:
      "No fundo da gruta, os Exploradores acharam um cristal que guardava frases estranhas: 'O sol é uma moeda de ouro no céu', 'a coruja piscou um segredo', 'o dia foi mais longo que um ano'. — Nenhuma dessas frases quer dizer o que diz ao pé da letra! — percebeu Aurora. — É LINGUAGEM FIGURADA: um jeito de a literatura dizer mais, usando comparações e exageros que despertam a imaginação. Vamos decifrar o cristal?",
    imagemUrl: cristal,
  },

  momento02_previsao: {
    instrucao:
      "O cristal brilha mais forte perto de quatro símbolos: uma balança (comparar), um coração (dar vida), uma lupa (aumentar) e uma máscara (transformar). Antes de ler, imagine o que o cristal guarda.",
    bloco: {
      titulo: "O Cristal das Quatro Vozes",
      capaImagemUrl: cristal,
      pistas: [
        { imagemUrl: sol, nome: "Um sol comparado a uma moeda" },
        { imagemUrl: coruja, nome: "Uma coruja que 'pisca segredos'" },
      ],
      pergunta: "Sobre o que o cristal provavelmente vai ensinar?",
      hipoteses: [
        { texto: "Formas diferentes de dizer as coisas na literatura, sem ser ao pé da letra.", imagemUrl: cristal },
        { texto: "Uma lista de números para somar.", imagemUrl: papel },
        { texto: "Um mapa de estradas da cidade.", imagemUrl: mapa },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Isso! As frases do cristal não são literais — comparam o sol a uma moeda e dão a uma coruja a ação de 'piscar um segredo'. São pistas de linguagem figurada.",
      feedbackErro:
        "Releia as frases do cristal: elas não podem ser verdadeiras ao pé da letra. Isso é pista de um jeito diferente de usar as palavras — a linguagem figurada.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Quatro ferramentas que todo escritor de aventuras usa.",
    cards: [
      {
        palavra: "metáfora",
        explicacao: "É dizer que uma coisa É outra, sem usar 'como', para criar uma imagem forte.",
        exemplo: "'O sol é uma moeda de ouro no céu' — o sol não é moeda de verdade, mas a imagem mostra como ele brilha.",
        imagemUrl: sol,
      },
      {
        palavra: "personificação",
        explicacao: "É dar características de gente (sentir, pensar, falar) a coisas ou animais que normalmente não têm.",
        exemplo: "'A coruja piscou um segredo' — coruja não guarda segredo de verdade, mas isso dá vida à cena.",
        imagemUrl: coruja,
      },
      {
        palavra: "comparação",
        explicacao: "É aproximar duas coisas usando 'como', 'tal qual' ou palavra parecida, para destacar uma semelhança.",
        exemplo: "'A lua brilhava como uma lanterna no céu escuro.'",
        imagemUrl: lua,
      },
      {
        palavra: "hipérbole",
        explicacao: "É um EXAGERO proposital, usado para reforçar uma emoção ou ideia.",
        exemplo: "'O dia foi mais longo que um ano' — exagero para mostrar que o dia pareceu interminável.",
        imagemUrl: girassol,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o texto em voz alta e repare nas imagens que as palavras criam — nenhuma delas deve ser lida ao pé da letra.",
    leitura: {
      titulo: "A Trilha do Girassol",
      imagemUrl: girassol,
      legendaImagem: "O campo de girassóis ao entardecer",
      destacar: ["moeda de ouro", "dançavam como", "os girassóis viravam o rosto", "andamos um século"],
      paragrafos: [
        "O sol era uma moeda de ouro caindo devagar atrás da montanha. Os girassóis viravam o rosto para acompanhar seus últimos raios, como se quisessem se despedir dele todos os dias.",
        "As folhas dançavam como bailarinas ao vento, e nós, cansados da trilha, sentíamos que tínhamos andado um século até aquele campo — mas na verdade foram só duas horas.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar. As figuras de linguagem estão destacadas.",
    perguntas: [
      {
        pergunta: "O que a expressão 'o sol era uma moeda de ouro' representa?",
        opcoes: ["Uma metáfora para o brilho e a cor do sol", "Uma informação real sobre dinheiro", "Um erro de escrita"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! É uma metáfora: o sol NÃO é moeda, mas a imagem mostra seu brilho dourado.",
        feedbackErro: "Releia: o sol não é uma moeda de verdade. É uma METÁFORA para descrever seu brilho e cor.",
        ondeEstaNoTexto: "O sol era uma moeda de ouro caindo devagar atrás da montanha.",
      },
      {
        pergunta: "O que os girassóis 'fazem' no texto que só gente faria?",
        opcoes: ["Eles se despedem do sol virando o rosto", "Eles cantam uma música", "Eles fazem um lanche"],
        correta: 0,
        feedbackAcerto: "🔍 Boa! 'como se quisessem se despedir' — isso é personificação: dar sentimento de gente a uma planta.",
        feedbackErro: "Releia: os girassóis 'viram o rosto' e parecem se despedir — ação de gente dada a uma planta. É personificação.",
        ondeEstaNoTexto: "os girassóis viravam o rosto para acompanhar... como se quisessem se despedir dele",
      },
      {
        pergunta: "Qual frase do texto é uma hipérbole (exagero)?",
        opcoes: ["'sentíamos que tínhamos andado um século'", "'o sol era uma moeda de ouro'", "'as folhas dançavam como bailarinas'"],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Ninguém anda um século de verdade — é um exagero para mostrar o quanto a trilha pareceu longa.",
        feedbackErro: "Procure o exagero impossível de ser real: 'andar um século' é a hipérbole do texto.",
        ondeEstaNoTexto: "sentíamos que tínhamos andado um século até aquele campo",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos comparar as quatro figuras de linguagem entre si.",
    perguntas: [
      {
        pergunta: "Qual é a diferença entre metáfora e comparação?",
        opcoes: [
          "A comparação usa 'como'; a metáfora diz que uma coisa É a outra, sem 'como'",
          "Não existe diferença nenhuma",
          "A metáfora só pode ser usada em poemas",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! 'As folhas dançavam COMO bailarinas' é comparação; 'o sol É uma moeda' é metáfora — sem o 'como'.",
        feedbackErro: "Repare na palavra 'como': quando ela aparece, é comparação. Quando a frase afirma que uma coisa É a outra, é metáfora.",
      },
      {
        pergunta: "Por que um escritor usaria uma hipérbole em vez de dizer a verdade simples ('a trilha foi longa')?",
        opcoes: [
          "Para reforçar, com exagero, o quanto aquilo pareceu cansativo",
          "Porque ele esqueceu como escrever direito",
          "Porque hipérbole é sempre mentira e não serve para nada",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! O exagero da hipérbole reforça a EMOÇÃO — o cansaço parecia eterno, mesmo sem ser literalmente verdade.",
        feedbackErro: "A hipérbole não é erro nem mentira boba — ela reforça de propósito uma emoção ou ideia, com exagero.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para identificar uma figura de linguagem num texto.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Ler a frase e perceber que ela não pode ser verdadeira ao pé da letra.", imagemUrl: papel },
        { id: "p2", texto: "Verificar se tem a palavra 'como' (comparação) ou se afirma que uma coisa É outra (metáfora).", imagemUrl: lapis },
        { id: "p3", texto: "Checar se há exagero (hipérbole) ou ação humana dada a algo não humano (personificação).", imagemUrl: cristal },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Isso mesmo! Primeiro notamos o sentido figurado, depois procuramos as pistas de cada tipo.",
      feedbackErro: "Pense na ordem: primeiro notar que não é literal, depois procurar 'como'/'é', depois checar exagero ou humanização.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo texto para investigar sozinho.",
    leitura: {
      titulo: "A Tempestade no Rio Prateado",
      imagemUrl: lua,
      destacar: ["o rio era uma serpente", "o vento sussurrava", "brilhava como prata", "choveu o mar inteiro"],
      paragrafos: [
        "O rio era uma serpente prateada deslizando entre as pedras, e sua água brilhava como prata sob a lua cheia. O vento sussurrava segredos entre as folhas, avisando que a tempestade se aproximava.",
        "Quando a chuva chegou, parecia que tinha caído o mar inteiro sobre o acampamento — molhou tudo em minutos.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual figura de linguagem aparece em 'o rio era uma serpente prateada'?",
        opcoes: ["Metáfora", "Hipérbole", "Comparação"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! O rio É chamado de serpente, sem 'como' — é uma metáfora.",
        feedbackErro: "Repare: não tem a palavra 'como', a frase afirma que o rio É uma serpente. Isso é metáfora.",
        ondeEstaNoTexto: "O rio era uma serpente prateada deslizando entre as pedras",
      },
      {
        pergunta: "O que o vento 'faz' no texto que mostra personificação?",
        opcoes: ["Ele sussurra segredos", "Ele sopra forte", "Ele para de soprar"],
        correta: 0,
        feedbackAcerto: "🔍 Boa! 'sussurrava segredos' é ação de gente dada ao vento — personificação.",
        feedbackErro: "Procure a ação humana: sussurrar segredos é coisa de gente, não do vento de verdade.",
        ondeEstaNoTexto: "O vento sussurrava segredos entre as folhas",
      },
      {
        pergunta: "Qual frase é a hipérbole do texto?",
        opcoes: [
          "'parecia que tinha caído o mar inteiro sobre o acampamento'",
          "'a água brilhava como prata'",
          "'o rio era uma serpente prateada'",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Um mar inteiro nunca caberia numa chuva — é um exagero para mostrar que choveu muito forte.",
        feedbackErro: "Procure o exagero impossível: cair 'o mar inteiro' é a hipérbole que mostra a força da chuva.",
        ondeEstaNoTexto: "parecia que tinha caído o mar inteiro sobre o acampamento",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "METÁFORA diz que uma coisa É outra, sem 'como', para criar uma imagem forte.",
      "PERSONIFICAÇÃO dá ações ou sentimentos de gente a coisas, animais ou plantas.",
      "COMPARAÇÃO aproxima duas coisas usando 'como' para destacar uma semelhança.",
      "HIPÉRBOLE é um exagero proposital para reforçar uma emoção ou ideia.",
    ],
    miniDesafio: {
      pergunta: "'Chorei um rio de lágrimas' é um exemplo de...",
      opcoes: ["Comparação", "Hipérbole", "Personificação"],
      correta: 1,
      feedbackAcerto: "🔍 Isso! Ninguém chora um rio de verdade — é exagero para mostrar o tamanho da tristeza. Hipérbole!",
      feedbackErro: "Pense: é possível chorar um rio inteiro de lágrimas? Não — esse exagero é uma hipérbole.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é linguagem figurada?",
        opcoes: [
          "Um jeito de usar as palavras que não deve ser lido ao pé da letra",
          "Um erro de gramática",
          "Um texto sem sentido nenhum",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Linguagem figurada cria sentidos além do literal.",
        feedbackErro: "Linguagem figurada é quando as palavras dizem mais do que o sentido literal — não é erro, é recurso da literatura.",
      },
      {
        pergunta: "2/5 — 'O tempo voou' é um exemplo de...",
        opcoes: ["Metáfora", "Comparação com 'como'", "Uma frase literal"],
        correta: 0,
        feedbackAcerto: "🔍 Correto! Tempo não voa de verdade — é metáfora para dizer que passou rápido.",
        feedbackErro: "Tempo não tem asas — a frase compara (sem 'como') a passagem rápida do tempo a um voo. É metáfora.",
      },
      {
        pergunta: "3/5 — Qual frase é uma comparação?",
        opcoes: ["'Seus olhos brilhavam como estrelas.'", "'Seus olhos eram estrelas.'", "'Chorei rios de lágrimas.'"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! A palavra 'como' marca a comparação.",
        feedbackErro: "Procure a palavra 'como' — ela é a marca clássica da comparação.",
      },
      {
        pergunta: "4/5 — 'A árvore balançava os galhos, como se acenasse para nós' é um exemplo de...",
        opcoes: ["Personificação", "Hipérbole", "Nenhuma figura de linguagem"],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Acenar é gesto de gente — dar isso a uma árvore é personificação.",
        feedbackErro: "Acenar é uma ação humana. Dar essa ação a uma árvore é personificação.",
      },
      {
        pergunta: "5/5 — Por que a literatura usa figuras de linguagem?",
        opcoes: [
          "Para criar imagens fortes e emocionar o leitor",
          "Porque os escritores não sabem escrever direito",
          "Só para encher o texto de palavras difíceis",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! As figuras de linguagem tornam o texto mais vivo, visual e emocionante. Cristal decifrado! 🌟",
        feedbackErro: "As figuras de linguagem existem para criar imagens fortes e emoção — não são erro, são ferramenta de escrita.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caça-figuras de linguagem",
    materiais: ["Papel", "Lápis", "Um livro ou revista de casa"],
    passos: [
      "1) Escolham juntos um livro, revista ou letra de música da casa.",
      "2) Procurem uma frase que não seja literal — uma metáfora, comparação, personificação ou hipérbole.",
      "3) Copiem a frase encontrada e digam qual figura de linguagem é.",
      "4) Depois, criem juntos uma frase nova usando uma dessas figuras (ex.: uma metáfora sobre a família).",
    ],
    registro: "🗣️ Registrem por escrito a frase encontrada e a frase nova criada pela família.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
