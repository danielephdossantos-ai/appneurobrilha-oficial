import type { AulaPortuguesV4 } from "../../types";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as cubo } from "@/assets/neuro-treino/objetos/cubo.png.asset.json";

/**
 * Aula 4 — Prefixos e sufixos
 * -------------------------------------------------------------
 * Unidade 2 · Oficina das Palavras (5º ano)
 * Foco: formação de palavras com prefixos (in-, des-, re-, pré-) e
 * sufixos (-mente, -inho, -eiro, -ção), e como cada peça muda o sentido.
 * BNCC: EF05LP08, EF05LP09
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-prefixos-e-sufixos",
  titulo: "Prefixos e sufixos",
  iconeTrilha: "🧩",
  bncc: ["EF05LP08", "EF05LP09"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "As peças que grudam na palavra",
    historia:
      "O robô montador da oficina apareceu carregando duas caixas de peças: uma de peças que vão ANTES da palavra e outra de peças que vão DEPOIS. — Isso aqui é a última ferramenta da Oficina das Palavras! Grude uma peça no começo (prefixo) ou uma no final (sufixo) e a palavra muda de sentido na hora. FELIZ vira INFELIZ, e RÁPIDO vira RAPIDAMENTE. Vamos montar?",
    imagemUrl: robo,
  },

  momento02_previsao: {
    instrucao: "Observe as duas caixas de peças antes de começar.",
    bloco: {
      titulo: "As Caixas de Peças do Robô",
      capaImagemUrl: bau,
      pistas: [
        { imagemUrl: robo, nome: "Um robô montador" },
        { imagemUrl: cubo, nome: "Um cubo de peças" },
      ],
      pergunta: "Sobre o que essa parte da oficina vai ensinar?",
      hipoteses: [
        { texto: "Como pedacinhos grudados no começo ou no fim de uma palavra mudam seu sentido.", imagemUrl: cubo },
        { texto: "Como programar um robô de verdade.", imagemUrl: robo },
        { texto: "Como empilhar caixas com segurança.", imagemUrl: bau },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender como prefixos e sufixos formam novas palavras.",
      feedbackErro: "Pense nas duas caixas: uma de peças do começo, outra do fim da palavra. É sobre isso que vamos falar.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as peças antes de montar.",
    cards: [
      {
        palavra: "prefixo",
        explicacao: "Pedacinho colocado ANTES da palavra base, mudando seu sentido. Ex.: DES-, IN-, RE-, PRÉ-.",
        exemplo: "FAZER vira DESFAZER quando ganha o prefixo DES-.",
        imagemUrl: robo,
      },
      {
        palavra: "sufixo",
        explicacao: "Pedacinho colocado DEPOIS da palavra base, mudando seu sentido ou sua classe gramatical. Ex.: -MENTE, -INHO, -EIRO, -ÇÃO.",
        exemplo: "RÁPIDO vira RAPIDAMENTE quando ganha o sufixo -MENTE.",
        imagemUrl: cubo,
      },
      {
        palavra: "radical",
        explicacao: "É a parte principal da palavra, que carrega o sentido básico, à qual prefixos e sufixos se grudam.",
        exemplo: "Em INFELIZ, o radical é FELIZ; em PADEIRO, o radical é PÃO/PAD.",
        imagemUrl: caixa,
      },
      {
        palavra: "palavra derivada",
        explicacao: "Palavra nova formada a partir de outra, com o acréscimo de prefixo e/ou sufixo.",
        exemplo: "EDUCAÇÃO é derivada de EDUCAR, com o sufixo -ÇÃO.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo a palavra mudar de sentido",
    instrucao: "Ouça o Brilha montando cada peça na palavra base.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "FELIZ + IN- = INFELIZ", explicacao: "Prefixo IN- dá ideia de NEGAÇÃO." },
          { texto: "FAZER + RE- = REFAZER", explicacao: "Prefixo RE- dá ideia de REPETIÇÃO." },
          { texto: "RÁPIDO + -MENTE = RAPIDAMENTE", explicacao: "Sufixo -MENTE transforma em advérbio de modo." },
          { texto: "PÃO + -EIRO = PADEIRO", explicacao: "Sufixo -EIRO indica profissão ou lugar relacionado." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha e o robô registraram as descobertas no diário da oficina.",
    leitura: {
      titulo: "O Diário das Peças que Grudam",
      imagemUrl: pergaminho,
      legendaImagem: "Página sobre prefixos e sufixos",
      destacar: ["prefixo", "sufixo", "radical", "sentido"],
      paragrafos: [
        "Muitas palavras nascem de outra palavra menor, chamada RADICAL, com o acréscimo de peças. Quando a peça vem ANTES do radical, chama-se PREFIXO. O prefixo IN- (ou IM-) dá ideia de negação: FELIZ vira INFELIZ, POSSÍVEL vira IMPOSSÍVEL.",
        "O prefixo DES- também indica negação ou o contrário de uma ação: FAZER vira DESFAZER, LIGAR vira DESLIGAR. Já o prefixo RE- indica repetição: FAZER vira REFAZER, ESCREVER vira REESCREVER. E o prefixo PRÉ- indica algo que vem antes: HISTÓRIA vira PRÉ-HISTÓRIA, ESCOLAR vira PRÉ-ESCOLAR.",
        "Quando a peça vem DEPOIS do radical, chama-se SUFIXO. O sufixo -MENTE transforma um adjetivo em advérbio de modo: RÁPIDO vira RAPIDAMENTE, FELIZ vira FELIZMENTE. O sufixo -INHO indica algo pequeno ou carinhoso: CASA vira CASINHA, GATO vira GATINHO.",
        "O sufixo -EIRO costuma indicar profissão ou lugar: PÃO vira PADEIRO, SAPATO vira SAPATEIRO. Já o sufixo -ÇÃO transforma um verbo em substantivo, indicando ação ou resultado: EDUCAR vira EDUCAÇÃO, CRIAR vira CRIAÇÃO.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar.",
    perguntas: [
      {
        pergunta: "O que o prefixo IN- (ou IM-) costuma indicar?",
        opcoes: ["Negação", "Repetição", "Tamanho pequeno", "Profissão"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! IN-/IM- dá ideia de negação, como em INFELIZ e IMPOSSÍVEL.",
        feedbackErro: "Releia: 'O prefixo IN- (ou IM-) dá ideia de negação'.",
        ondeEstaNoTexto: "O prefixo IN- (ou IM-) dá ideia de negação",
      },
      {
        pergunta: "Que classe de palavra o sufixo -MENTE costuma formar?",
        opcoes: ["Advérbio de modo", "Substantivo", "Verbo", "Pronome"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! -MENTE transforma adjetivo em advérbio de modo.",
        feedbackErro: "Releia: 'O sufixo -MENTE transforma um adjetivo em advérbio de modo'.",
        ondeEstaNoTexto: "O sufixo -MENTE transforma um adjetivo em advérbio de modo",
      },
      {
        pergunta: "O que o sufixo -ÇÃO costuma formar a partir de um verbo?",
        opcoes: ["Um substantivo de ação ou resultado", "Um advérbio", "Um prefixo", "Um radical novo"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! -ÇÃO transforma verbo em substantivo, como EDUCAR → EDUCAÇÃO.",
        feedbackErro: "Releia: 'o sufixo -ÇÃO transforma um verbo em substantivo, indicando ação ou resultado'.",
        ondeEstaNoTexto: "o sufixo -ÇÃO transforma um verbo em substantivo, indicando ação ou resultado",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem trouxe as peças e onde ficaram registradas as descobertas?",
    perguntas: [
      {
        pergunta: "Quem apareceu carregando as duas caixas de peças?",
        opcoes: ["O robô montador", "Uma coruja", "Um dragão", "Um mago"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Foi o robô montador quem trouxe as caixas.",
        feedbackErro: "Releia a motivação: quem apareceu com as caixas foi o robô montador.",
      },
      {
        pergunta: "Onde as descobertas sobre prefixos e sufixos foram anotadas?",
        opcoes: ["No diário da oficina", "Numa placa da rua", "Numa etiqueta de roupa", "Num bilhete jogado fora"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Ficou no diário das peças que grudam.",
        feedbackErro: "Releia o título: 'O Diário das Peças que Grudam'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para descobrir como uma palavra derivada foi formada.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Encontre o radical, a parte com o sentido principal.", imagemUrl: caixa },
        { id: "p2", texto: "Veja se há uma peça grudada ANTES do radical (prefixo).", imagemUrl: robo },
        { id: "p3", texto: "Veja se há uma peça grudada DEPOIS do radical (sufixo).", imagemUrl: cubo },
        { id: "p4", texto: "Pense em como cada peça muda o sentido da palavra original.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho certo para desmontar uma palavra derivada.",
      feedbackErro: "Pense: primeiro se acha o radical, depois se procura peça antes (prefixo) e depois (sufixo).",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do diário e responda.",
    leitura: {
      titulo: "Mais Peças na Oficina",
      imagemUrl: livro,
      destacar: ["DESLIGAR", "GATINHO", "SAPATEIRO"],
      paragrafos: [
        "Brilha encontrou DESLIGAR. O radical é LIGAR, e o prefixo DES- indica o contrário da ação de ligar.",
        "Depois encontrou GATINHO, formado por GATO mais o sufixo -INHO, que dá ideia de tamanho pequeno ou carinho. E encontrou SAPATEIRO, formado por SAPATO mais o sufixo -EIRO, que indica a profissão de quem faz ou conserta sapatos.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o radical de DESLIGAR e o que o prefixo DES- indica?",
        opcoes: [
          "O radical é LIGAR; DES- indica o contrário da ação",
          "O radical é DES; LIGAR indica o contrário",
          "Não há radical nessa palavra",
          "O radical é GAR; DES-LI indica repetição",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! DES- + LIGAR = o contrário de ligar.",
        feedbackErro: "Releia: 'O radical é LIGAR, e o prefixo DES- indica o contrário da ação de ligar.'",
        ondeEstaNoTexto: "O radical é LIGAR, e o prefixo DES- indica o contrário da ação de ligar.",
      },
      {
        pergunta: "O que o sufixo -EIRO indica em SAPATEIRO, segundo o texto?",
        opcoes: [
          "A profissão de quem faz ou conserta sapatos",
          "Que o sapato é pequeno",
          "Que a ação será repetida",
          "Que o sapato é antigo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! -EIRO indica profissão relacionada ao radical.",
        feedbackErro: "Releia: 'indica a profissão de quem faz ou conserta sapatos'.",
        ondeEstaNoTexto: "indica a profissão de quem faz ou conserta sapatos",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a palavra com a peça certa",
    instrucao: "Monte cada palavra derivada escolhendo o prefixo ou sufixo correto.",
    jogo: {
      tipo: "montarPalavra",
      titulo: "A Fábrica de Palavras do Robô",
      bloco: {
        instrucao: "Pense no sentido que a peça vai dar antes de montar.",
        palavras: [
          { id: "w1", palavraCerta: "INFELIZ", silabas: ["IN", "FE", "LIZ"], frase: "Ele ficou infeliz com a notícia." },
          { id: "w2", palavraCerta: "REFAZER", silabas: ["RE", "FA", "ZER"], frase: "Precisei refazer o desenho." },
          { id: "w3", palavraCerta: "FELIZMENTE", silabas: ["FE", "LIZ", "MEN", "TE"], frase: "Felizmente, tudo deu certo." },
          { id: "w4", palavraCerta: "PADEIRO", silabas: ["PA", "DEI", "RO"], frase: "O padeiro assou o pão cedo." },
          { id: "w5", palavraCerta: "EDUCAÇÃO", silabas: ["E", "DU", "CA", "ÇÃO"], frase: "A educação transforma vidas." },
        ],
        feedbackAcerto: "🎉 Você montou a palavra com a peça certa!",
        feedbackErro: "Pense no radical primeiro e depois na peça que muda o sentido, antes ou depois dele.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PREFIXO vem antes do radical (DES-, IN-, RE-, PRÉ-); SUFIXO vem depois (-MENTE, -INHO, -EIRO, -ÇÃO).",
      "Cada peça muda o sentido: negação, repetição, anterioridade, modo, tamanho, profissão ou ação.",
      "Radical é a base com o sentido principal da palavra.",
    ],
    miniDesafio: {
      pergunta: "Em REESCREVER, o prefixo RE- indica...",
      opcoes: [
        "Repetição da ação de escrever",
        "Negação da ação de escrever",
        "Tamanho pequeno",
        "Profissão de escritor",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! RE- indica repetição.",
      feedbackErro: "Releia a explicação: o prefixo RE- indica repetição.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O prefixo é a peça que fica...",
        opcoes: ["Antes do radical", "Depois do radical", "No meio do radical", "Sozinho, sem radical"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Prefixo vem antes do radical.",
        feedbackErro: "Lembre: prefixo = antes; sufixo = depois.",
      },
      {
        pergunta: "2/5 — Qual prefixo indica repetição de uma ação?",
        opcoes: ["RE-", "DES-", "PRÉ-", "IN-"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! RE- indica repetição, como em REFAZER.",
        feedbackErro: "RE- é o prefixo de repetição.",
      },
      {
        pergunta: "3/5 — Qual sufixo transforma um adjetivo em advérbio de modo?",
        opcoes: ["-MENTE", "-INHO", "-EIRO", "-ÇÃO"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! -MENTE forma advérbios de modo, como RAPIDAMENTE.",
        feedbackErro: "Lembre: -MENTE é o sufixo dos advérbios de modo.",
      },
      {
        pergunta: "4/5 — Qual sufixo costuma indicar profissão ou lugar?",
        opcoes: ["-EIRO", "-MENTE", "-INHO", "IN-"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! -EIRO indica profissão, como em PADEIRO e SAPATEIRO.",
        feedbackErro: "-EIRO é o sufixo de profissão/lugar.",
      },
      {
        pergunta: "5/5 — Em IMPOSSÍVEL, o prefixo IM- dá ideia de...",
        opcoes: ["Negação", "Repetição", "Tamanho pequeno", "Profissão"],
        correta: 0,
        feedbackAcerto: "🎉 Oficina concluída! IM-/IN- indicam negação.",
        feedbackErro: "IM- é uma variação de IN-, que indica negação.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às peças que grudam",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Com um adulto, escolham 3 palavras do dia a dia e acrescentem um prefixo (DES-, IN-, RE-, PRÉ-) a cada uma.",
      "2) Escolham outras 3 palavras e acrescentem um sufixo (-MENTE, -INHO, -EIRO, -ÇÃO).",
      "3) Conversem sobre como o sentido de cada palavra mudou.",
      "4) Escrevam a lista com a palavra original ao lado da palavra nova.",
    ],
    registro: "📝 Uma foto da lista de palavras com prefixos e sufixos, ou um áudio explicando as mudanças de sentido.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
