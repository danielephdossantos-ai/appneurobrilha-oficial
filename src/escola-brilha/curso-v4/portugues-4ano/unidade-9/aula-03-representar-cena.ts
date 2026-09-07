import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Unidade 9 · Aula 3 — Luz, Câmera, Entonação!
 * -------------------------------------------------------------
 * Foco: representar/ler cenas dramáticas em voz alta seguindo as
 * rubricas do autor — entonação por emoção, volume, ritmo, pausas
 * nas vírgulas e nos pontos, gestos indicados no texto teatral.
 * BNCC: EF04LP25, EF35LP13, EF15LP18.
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-representar-cena",
  titulo: "Luz, Câmera, Entonação!",
  iconeTrilha: "🎤",
  bncc: ["EF04LP25", "EF35LP24", "EF35LP28", "EF15LP12"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "A mesma frase, sentidos diferentes",
    historia:
      "No palco da expedição, Brilha segurou o mesmo bilhete e leu de três jeitos: gritando de raiva, tremendo de medo e rindo de alegria. — Viu? A frase é igual, mas o jeito de falar muda tudo! Hoje vamos aprender a ler cenas de teatro seguindo as pistas que o autor deixa: as RUBRICAS. Prontos para o ensaio?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de subir ao palco.",
    bloco: {
      titulo: "Luz, Câmera, Entonação!",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: estrela, nome: "Um ator ensaiando" },
        { imagemUrl: pergaminho, nome: "Um texto com marcações entre parênteses" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como usar entonação, volume e pausas para representar uma cena de teatro.",
          imagemUrl: estrela,
        },
        { texto: "Como decorar o alfabeto na ordem certa.", imagemUrl: livro },
        { texto: "Como desenhar um cenário de floresta.", imagemUrl: arvore },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos descobrir como a voz muda o sentido de uma cena de teatro.",
      feedbackErro:
        "Pense no ator ensaiando: ele treina a VOZ para representar sentimentos. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: rubricas são as instruções entre parênteses que dizem COMO falar.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Todo ator de verdade conhece essas palavras antes de subir ao palco.",
    cards: [
      {
        palavra: "rubrica",
        explicacao: "Instrução do autor, escrita entre parênteses ou em itálico, que diz como o ator deve agir ou falar.",
        exemplo: "(gritando, com raiva) — Sai da minha frente!",
        imagemUrl: pergaminho,
      },
      {
        palavra: "entonação",
        explicacao: "É a melodia da voz: subir, descer, ficar tensa ou suave, conforme o sentimento da fala.",
        exemplo: "A mesma frase '— Ele chegou' soa diferente com medo ou com alegria.",
        imagemUrl: estrela,
      },
      {
        palavra: "ritmo e pausa",
        explicacao: "Ritmo é a velocidade da fala; pausa é o silêncio que marcamos nas vírgulas e nos pontos.",
        exemplo: "Vírgula pede uma pausa curtinha; ponto final pede uma pausa maior.",
        imagemUrl: bussola,
      },
      {
        palavra: "gesto de cena",
        explicacao: "Movimento do corpo indicado pelo autor, que ajuda a mostrar o sentimento do personagem.",
        exemplo: "(cruzando os braços) — Não vou fazer isso.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "A mesma frase, quatro jeitos de dizer",
    instrucao: "Veja como a entonação muda completamente o sentido de uma única frase.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "A entonação e as rubricas mudam o sentido da mesma frase",
        explicacao:
          "Uma frase de teatro sozinha, sem rubrica, pode ser lida de vários jeitos. É a RUBRICA — a instrução entre parênteses — que diz qual caminho seguir: (com raiva) pede voz forte e seca; (com medo) pede voz baixa e trêmula; (com alegria) pede voz alta e leve; (em dúvida) pede voz mais devagar, quase perguntando. Além da emoção, o VOLUME (alto/baixo), o RITMO (rápido/devagar) e as PAUSAS (nas vírgulas e nos pontos) completam a atuação.",
        exemplos: [
          { palavra: "(com raiva) — Ele levou meu brinquedo!", destaque: "(com raiva)", motivo: "Pede voz forte, seca e volume alto." },
          { palavra: "(com medo) — Tem alguém aí...", destaque: "(com medo)", motivo: "Pede voz baixa, trêmula e devagar." },
          { palavra: "(com alegria) — Ele voltou!", destaque: "(com alegria)", motivo: "Pede voz alta, leve e rápida." },
        ],
        desafios: [
          {
            molde: "com_medo_tem_alguem_ai",
            opcoes: ["voz baixa e trêmula", "voz alta e gritada", "voz cantada"],
            correta: 0,
            frase: "(com medo) — Tem alguém aí...",
            feedbackErro: "A rubrica pede MEDO: a voz deve ficar baixa e trêmula, não gritada.",
          },
          {
            molde: "com_raiva_ele_levou_meu_brinquedo",
            opcoes: ["voz doce e cantada", "voz forte e seca", "voz sussurrada"],
            correta: 1,
            frase: "(com raiva) — Ele levou meu brinquedo!",
            feedbackErro: "A rubrica pede RAIVA: a voz deve ser forte e seca.",
          },
          {
            molde: "em_duvida_sera_que_ele_vem",
            opcoes: ["voz devagar, quase perguntando", "voz muito rápida e alegre", "voz gritada de raiva"],
            correta: 0,
            frase: "(em dúvida) — Será que ele vem?",
            feedbackErro: "A rubrica pede DÚVIDA: a voz fica mais devagar, como quem pergunta a si mesmo.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou o roteiro de ensaio no diário de bordo.",
    leitura: {
      titulo: "O Diário do Ator em Treinamento",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário de bordo",
      destacar: ["rubrica", "entonação", "volume", "pausa"],
      paragrafos: [
        "Um texto de teatro é feito de falas e de RUBRICAS. As falas são o que o personagem diz. As rubricas, escritas entre parênteses, dizem COMO dizer: com raiva, com medo, com alegria, em dúvida.",
        "A ENTONAÇÃO é a melodia da voz. A mesma frase — 'Ele chegou' — pode soar como uma notícia triste, uma surpresa feliz ou um aviso assustador, dependendo de como a voz sobe ou desce.",
        "O VOLUME também muda o sentido: gritar mostra raiva ou urgência; falar baixinho mostra medo ou segredo. O RITMO pode ser rápido (empolgação) ou devagar (tristeza, dúvida).",
        "As PAUSAS marcam a respiração da cena: a vírgula pede uma pausa curta; o ponto final e as reticências pedem uma pausa maior, dando tempo para o público sentir a emoção.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "O que é uma rubrica no texto teatral?",
        opcoes: ["A instrução entre parênteses que diz como dizer a fala", "O nome do personagem", "O título da peça"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A rubrica diz COMO o ator deve falar ou agir.",
        feedbackErro: "Releia: 'As rubricas, escritas entre parênteses, dizem COMO dizer.'",
        ondeEstaNoTexto: "as rubricas, escritas entre parênteses, dizem COMO dizer",
        dica: "🧭 Pista de explorador: releia o primeiro parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A instrução entre parênteses que diz como dizer a fala”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que muda quando a entonação muda numa mesma frase?",
        opcoes: ["O sentido e o sentimento da fala", "O número de letras da frase", "O nome do personagem"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A entonação muda o sentido e o sentimento.",
        feedbackErro: "Releia: 'a mesma frase pode soar como uma notícia triste, uma surpresa feliz...'",
        ondeEstaNoTexto: "pode soar como uma notícia triste, uma surpresa feliz ou um aviso assustador",
        dica: "🧭 Pista de explorador: pense na frase 'Ele chegou' dita de jeitos diferentes.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O sentido e o sentimento da fala”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Quando devemos fazer a pausa maior na leitura de uma cena?",
        opcoes: ["No ponto final e nas reticências", "No meio de qualquer palavra", "Nunca devemos pausar"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Ponto final e reticências pedem pausa maior.",
        feedbackErro: "Releia: 'o ponto final e as reticências pedem uma pausa maior.'",
        ondeEstaNoTexto: "o ponto final e as reticências pedem uma pausa maior",
        dica: "🧭 Pista de explorador: releia o último parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “No ponto final e nas reticências”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz a descoberta e onde ela é registrada?",
    perguntas: [
      {
        pergunta: "Onde Brilha registrou o roteiro de ensaio?",
        opcoes: ["No diário de bordo da expedição", "Numa placa da estrada", "Num cartaz de cinema"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O roteiro foi registrado no diário de bordo.",
        feedbackErro: "Releia o título: 'O Diário do Ator em Treinamento'.",
        dica: "🧭 Pista de explorador: releia o título da leitura guiada.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “No diário de bordo da expedição”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Na motivação, de quantos jeitos diferentes Brilha leu o mesmo bilhete?",
        opcoes: ["De três jeitos: raiva, medo e alegria", "De um único jeito", "De cinco jeitos"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Ele leu com raiva, medo e alegria.",
        feedbackErro: "Volte à motivação: Brilha leu 'gritando de raiva, tremendo de medo e rindo de alegria'.",
        dica: "🧭 Pista de explorador: releia a história da motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “De três jeitos: raiva, medo e alegria”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos do ensaio de uma cena de teatro.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Ler a cena em silêncio para entender a história.", imagemUrl: livro },
        { id: "p2", texto: "Marcar as rubricas: como cada fala deve soar.", imagemUrl: pergaminho },
        { id: "p3", texto: "Ensaiar a cena em voz alta, treinando a entonação.", imagemUrl: bussola },
        { id: "p4", texto: "Apresentar a cena para o público, com voz e gestos.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para preparar uma cena de teatro.",
      feedbackErro: "Pense: primeiro se entende a história, depois se marcam as rubricas, depois se ensaia, e só então se apresenta.",
      dica: "🧭 Pista de explorador: nunca se apresenta uma cena sem antes ensaiar.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um trecho de cena e responda.",
    leitura: {
      titulo: "A Cena do Tesouro Perdido",
      imagemUrl: livro,
      destacar: ["assustada", "sussurrando", "gritando", "aliviado"],
      paragrafos: [
        "MARIA (assustada, sussurrando): — Escuta... tem alguém atrás daquela árvore.",
        "JOÃO (gritando, com coragem): — Quem está aí? Apareça agora!",
        "Um gato preto salta da moita. MARIA e JOÃO se olham e riem.",
        "JOÃO (aliviado, rindo): — Era só um gatinho! Quase morri de susto.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como a rubrica pede que Maria fale a primeira frase?",
        opcoes: ["Assustada, sussurrando", "Gritando com raiva", "Cantando alegre"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A rubrica diz 'assustada, sussurrando'.",
        feedbackErro: "Releia: 'MARIA (assustada, sussurrando)'.",
        ondeEstaNoTexto: "MARIA (assustada, sussurrando)",
        dica: "🧭 Pista de explorador: volte ao texto e releia a rubrica de Maria.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Assustada, sussurrando”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que causou o susto de Maria e João?",
        opcoes: ["Um gato preto que saltou da moita", "Um ladrão de verdade", "Um trovão forte"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Era 'só um gatinho', como diz João aliviado.",
        feedbackErro: "Releia: 'Um gato preto salta da moita.'",
        ondeEstaNoTexto: "Um gato preto salta da moita",
        dica: "🧭 Pista de explorador: releia o terceiro trecho da cena.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um gato preto que saltou da moita”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Ensaie a cena na ordem certa",
    instrucao: "Organize os passos do ensaio de uma cena de teatro, do começo até a apresentação.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "O Ensaio da Companhia de Teatro",
      bloco: {
        instrucao: "Pense: o que um ator faz primeiro, antes de subir ao palco?",
        itens: [
          { id: "s1", texto: "Ler a cena em silêncio, para entender tudo.", imagemUrl: livro },
          { id: "s2", texto: "Marcar as rubricas: raiva, medo, alegria, dúvida...", imagemUrl: pergaminho },
          { id: "s3", texto: "Ensaiar a cena em voz alta, treinando a entonação.", imagemUrl: bussola },
          { id: "s4", texto: "Apresentar a cena para o público.", imagemUrl: estrela },
        ],
        ordemCerta: ["s1", "s2", "s3", "s4"],
        feedbackAcerto: "🎉 Excelente! Essa é a ordem certa de um bom ensaio de teatro.",
        feedbackErro: "Lembre: primeiro se lê e entende, depois se marcam as rubricas, depois se ensaia, e só então se apresenta.",
        dica: "🧭 Pista de explorador: nunca se apresenta uma cena sem antes ensaiar em voz alta.",
      },
    },
  },

  momento_escrita: {
    titulo: "Diário de Bordo do Ator",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Complete e reescreva a cena com rubricas",
        comando:
          "Leia a cena que falta rubricas: PEDRO: — Não acredito que ganhamos o jogo! ANA: — Espera... você tem certeza? Escreva as rubricas que faltam entre parênteses (dizendo como cada um fala) e depois reescreva a cena completa, já com as marcações, pronta para ser ensaiada.",
        linhas: 6,
        modelo: [
          "PEDRO (com alegria, gritando): — Não acredito que ganhamos o jogo!",
          "ANA (em dúvida, devagar): — Espera... você tem certeza?",
          "PEDRO (rindo, aliviado): — Absoluta! Olha o placar!",
        ],
        checklist: [
          "Escrevi uma rubrica para cada fala, entre parênteses.",
          "Cada rubrica combina com o sentimento da frase.",
          "Usei pelo menos uma pausa marcada por vírgula ou reticências.",
          "Escrevi o nome do personagem em letra maiúscula antes da fala.",
          "Li a cena em voz alta seguindo as rubricas que escrevi.",
          "Consertei o que ficou estranho ao ler em voz alta.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: A Cena do Mapa Rasgado",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta, seguindo a entonação de cada personagem indicada pelas rubricas.",
    texto: [
      "BRILHA (assustado, sussurrando): — Olha só... o mapa está rasgado ao meio!",
      "LUA (com raiva): — Quem fez isso com o nosso mapa?!",
      "BRILHA (com calma, sorrindo): — Calma, dá para juntar os pedaços de novo.",
    ],
    metaSegundos: 25,
  },

  momento09_revisao: {
    pontos: [
      "Rubrica é a instrução entre parênteses que diz como o ator deve falar ou agir.",
      "A entonação muda o sentido de uma mesma frase: raiva, medo, alegria e dúvida soam diferente.",
      "Volume alto ou baixo e ritmo rápido ou devagar também mostram sentimentos.",
      "Pausas nas vírgulas são curtas; pausas nos pontos e reticências são mais longas.",
    ],
    miniDesafio: {
      pergunta: "(com medo) — Tem alguém aí... Como essa fala deve soar?",
      opcoes: ["Voz baixa e trêmula", "Voz alta e alegre", "Voz cantada e rápida"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! A rubrica pede medo: voz baixa e trêmula.",
      feedbackErro: "Releia a explicação: rubricas de medo pedem voz baixa e devagar.",
      dica: "🧭 Pista de explorador: medo combina com voz baixa, não com voz alegre.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “Voz baixa e trêmula”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma rubrica no texto teatral?",
        opcoes: ["A instrução que diz como o ator deve falar ou agir", "O nome da peça", "A lista de personagens", "O cenário desenhado"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Rubrica diz COMO representar a fala.",
        feedbackErro: "Lembre: rubrica é a instrução entre parênteses.",
        feedbackOpcoes: [
          null,
          "❌ O nome da peça é o título, não a rubrica.",
          "❌ A lista de personagens fica no início do texto, não é rubrica.",
          "❌ O cenário é o lugar da cena, não a instrução de fala.",
        ],
        dica: "🧭 Pista de explorador: rubrica fica entre parênteses.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “A instrução que diz como o ator deve falar ou agir”.",
      },
      {
        pergunta: "2/5 — (com raiva) — Ele levou meu brinquedo! Como essa fala deve soar?",
        opcoes: ["Voz forte e seca", "Voz baixa e trêmula", "Voz cantada e doce", "Sem nenhuma emoção"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Raiva pede voz forte e seca.",
        feedbackErro: "A rubrica diz 'com raiva': isso pede volume alto e voz firme.",
        feedbackOpcoes: [
          null,
          "❌ Voz baixa e trêmula combina com medo, não com raiva.",
          "❌ Voz cantada e doce combina com alegria calma, não com raiva.",
          "❌ Toda rubrica pede uma emoção — nunca é 'sem emoção'.",
        ],
        dica: "🧭 Pista de explorador: raiva é uma emoção forte, a voz também deve ser forte.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Voz forte e seca”.",
      },
      {
        pergunta: "3/5 — Onde devemos fazer uma pausa maior ao ler uma cena?",
        opcoes: ["No ponto final e nas reticências", "No meio das palavras", "Só no começo da fala", "Nunca fazemos pausa"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ponto final e reticências pedem pausa maior.",
        feedbackErro: "A pausa maior acontece no ponto final e nas reticências, não no meio da palavra.",
        feedbackOpcoes: [
          null,
          "❌ Pausar no meio da palavra atrapalha a compreensão.",
          "❌ A pausa acontece onde há pontuação, não só no começo.",
          "❌ Pausas são importantes para dar ritmo à cena.",
        ],
        dica: "🧭 Pista de explorador: pense na respiração ao ler em voz alta.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “No ponto final e nas reticências”.",
      },
      {
        pergunta: "4/5 — Qual é o volume e o ritmo esperados numa rubrica (com medo)?",
        opcoes: ["Volume baixo e ritmo devagar", "Volume alto e ritmo rápido", "Volume alto e ritmo devagar", "Volume baixo e ritmo muito rápido"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Medo combina com voz baixa e devagar, como um sussurro tenso.",
        feedbackErro: "Medo pede volume baixo (quase sussurrado) e ritmo devagar, não gritado nem apressado.",
        feedbackOpcoes: [
          null,
          "❌ Volume alto e rápido combina mais com alegria ou urgência, não medo.",
          "❌ Volume alto não combina com medo, que é mais contido.",
          "❌ Ritmo muito rápido soa mais como afobação do que medo.",
        ],
        dica: "🧭 Pista de explorador: imagine sussurrar devagar por medo de ser ouvido.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Volume baixo e ritmo devagar”.",
      },
      {
        pergunta: "5/5 — Antes de apresentar uma cena para o público, o que o ator deve ter feito?",
        opcoes: [
          "Lido a cena, marcado as rubricas e ensaiado em voz alta",
          "Decorado só o nome dos personagens",
          "Desenhado o cenário sozinho, sem ler o texto",
          "Nada — basta subir ao palco e improvisar tudo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! Um bom ator sempre lê, marca as rubricas e ensaia antes de apresentar.",
        feedbackErro: "Releia a sequência: ler em silêncio, marcar rubricas, ensaiar em voz alta e só então apresentar.",
        feedbackOpcoes: [
          null,
          "❌ Só decorar nomes não prepara a entonação da cena.",
          "❌ O cenário é importante, mas não substitui o ensaio da fala.",
          "❌ Improvisar sem ensaiar deixa a cena confusa para o público.",
        ],
        dica: "🧭 Pista de explorador: pense nos 4 passos do ensaio que você organizou no minijogo.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Lido a cena, marcado as rubricas e ensaiado em voz alta”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Teatro em casa",
    materiais: ["Papel e lápis", "Uma cena curta de um livro ou uma cena inventada pela família"],
    passos: [
      "1) Junto com um adulto, escolham (ou escrevam) uma cena curta com 4 falas.",
      "2) Marquem, entre parênteses, a rubrica de cada fala (com raiva, com medo, com alegria, em dúvida).",
      "3) Ensaiem a cena em voz alta, cada um representando um personagem.",
      "4) Apresentem a cena para o resto da família, seguindo as rubricas marcadas.",
    ],
    registro: "📝 Um vídeo ou áudio curto da apresentação da cena em família.",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
  },
};
