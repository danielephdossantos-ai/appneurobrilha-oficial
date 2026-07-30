import type { AulaPortuguesV4 } from "../../types";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Aula 1 — O Portal da Biblioteca
 * -------------------------------------------------------------
 * Missão inaugural da Unidade 1 (A Biblioteca Encantada).
 * Brilha atravessa o portal da biblioteca esquecida, conhece
 * a Bibliotecária Aurora e desperta o primeiro pequeno livro.
 *
 * Foco pedagógico:
 *  - Familiarizar com a rotina de leitura (título, capa, texto).
 *  - Localizar informações explícitas: quem, onde, o quê.
 *  - Ler pequenas frases com atenção e responder com base no
 *    que ESTÁ ESCRITO (não no que a criança imagina).
 *
 * BNCC (marcadas conforme o pedido da unidade — a mecânica cobre
 * leitura inicial e vocabulário; ortografia/silabação será
 * aprofundada em aulas específicas mais adiante):
 *  EF02LP01 · EF02LP03 · EF02LP04
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-portal-biblioteca",
  titulo: "O Portal da Biblioteca",
  iconeTrilha: "📖",
  bncc: ["EF02LP01", "EF02LP03", "EF02LP04"],
  duracaoMin: 15,

  // ------------------------------------------------------------
  // 1 · MOTIVAÇÃO — a história abre a aula
  // ------------------------------------------------------------
  momento01_motivacao: {
    titulo: "Brilha encontra a Biblioteca Encantada",
    historia:
      "Brilha estava passeando quando ouviu um sussurro vindo de uma casa antiga. Era uma BIBLIOTECA cheia de livros ADORMECIDOS. Uma senhora simpática abriu a porta: — Eu sou Aurora, a Bibliotecária. Pra acordar os livros, alguém precisa LER as histórias deles. Você me ajuda?",
    imagemUrl: biblioteca,
  },

  // ------------------------------------------------------------
  // 2 · PREVISÃO — o primeiro livro tem capa e título
  // ------------------------------------------------------------
  momento02_previsao: {
    instrucao:
      "Aurora tira o primeiro livro da estante. Olhe a capa e o título — sobre o que essa história pode falar?",
    bloco: {
      titulo: "O Passarinho da Janela",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: passaro, nome: "Um passarinho" },
        { imagemUrl: arvore, nome: "Uma árvore" },
      ],
      pergunta: "Antes de ler: sobre o que essa história vai falar?",
      hipoteses: [
        {
          texto: "Um passarinho que aparece perto de uma janela.",
          imagemUrl: passaro,
        },
        {
          texto: "Um cachorro que aprendeu a nadar.",
          imagemUrl: livro,
        },
        {
          texto: "Uma menina que virou uma flor.",
          imagemUrl: livro,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Muito bem! Bom leitor usa TÍTULO e IMAGEM da capa pra imaginar a história.",
      feedbackErro:
        "Olha o título de novo: 'O Passarinho da Janela'. As pistas na capa são um passarinho e uma árvore — a história combina com a primeira opção.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  // ------------------------------------------------------------
  // 3 · VOCABULÁRIO — 2 palavras chave que aparecerão na leitura
  // ------------------------------------------------------------
  momento03_vocabulario: {
    instrucao: "Antes de entrar na história, conheça 2 palavras que vão aparecer nela.",
    cards: [
      {
        palavra: "janela",
        explicacao:
          "É a abertura na parede da casa por onde a gente vê a rua e entra o vento.",
        exemplo: "Da janela do quarto dá pra ver a árvore lá fora.",
        imagemUrl: livro,
      },
      {
        palavra: "poleiro",
        explicacao: "É o galho ou barzinho onde o passarinho gosta de pousar.",
        exemplo: "O canário voltou pro poleiro pra dormir.",
        imagemUrl: passaro,
      },
    ],
  },

  // ------------------------------------------------------------
  // 4 · LEITURA GUIADA — texto curto (nível 2º ano começo)
  // ------------------------------------------------------------
  momento04_leituraGuiada: {
    instrucao:
      "Aurora leu a primeira vez pra você. Agora leia junto — pode apertar 🔊 pra ouvir se quiser.",
    leitura: {
      titulo: "O Passarinho da Janela",
      imagemUrl: passaro,
      legendaImagem: "O passarinho de Aurora",
      destacar: ["janela", "poleiro", "Aurora"],
      paragrafos: [
        "Todo dia de manhã, um passarinho azul pousa na janela de Aurora.",
        "Ele fica no poleiro que ela colocou perto do vidro e canta uma música bem baixinho.",
        "Aurora abre a janela devagar, coloca um pouquinho de fruta e sorri. O passarinho é o amigo dela desde o inverno passado.",
      ],
    },
  },

  // ------------------------------------------------------------
  // 5 · COMPREENSÃO — o que ESTÁ escrito no texto
  // ------------------------------------------------------------
  momento05_compreensao: {
    instrucao:
      "Volte no texto se precisar. As respostas estão TODAS escritas nele.",
    perguntas: [
      {
        pergunta: "De que cor é o passarinho?",
        opcoes: ["Vermelho", "Azul", "Amarelo"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Está escrito 'passarinho AZUL'.",
        feedbackErro: "Procure no primeiro parágrafo — a cor está antes da palavra 'pousa'.",
        dica: "Volte no texto e procure a parte que fala de 'passarinho'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Procure no primeiro parágrafo — a cor está antes da palavra 'pousa'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "…um passarinho azul pousa na janela…",
      },
      {
        pergunta: "Em que hora do dia o passarinho aparece?",
        opcoes: ["De manhã", "À tarde", "De noite"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! 'Todo dia de MANHÃ'.",
        feedbackErro: "A primeira frase começa com 'Todo dia de …'. Olhe lá.",
        dica: "Volte no texto e procure a parte que fala de 'passarinho'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A primeira frase começa com 'Todo dia de …'. Olhe lá. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Todo dia de manhã, um passarinho azul pousa…",
      },
      {
        pergunta: "O que Aurora coloca pro passarinho comer?",
        opcoes: ["Pão", "Fruta", "Semente"],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! Está escrito 'pouquinho de FRUTA'.",
        feedbackErro: "A resposta está no último parágrafo, logo depois de 'coloca'.",
        dica: "Volte no texto e procure a parte que fala de 'passarinho'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A resposta está no último parágrafo, logo depois de 'coloca'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "…coloca um pouquinho de fruta e sorri.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 6 · PERSONAGENS & CENÁRIO — quem faz e onde acontece
  // ------------------------------------------------------------
  momento06_personagensCenario: {
    instrucao: "Personagens são quem FAZ as ações. Cenário é ONDE acontece.",
    perguntas: [
      {
        pergunta: "Quem são os personagens dessa história?",
        opcoes: [
          "Só o passarinho",
          "Aurora e o passarinho",
          "Aurora, o passarinho e Brilha",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! No texto aparecem AURORA e o PASSARINHO. Brilha está na história MAIOR, mas não nessa página.",
        feedbackErro:
          "Volte no texto: quem aparece agindo? Aurora abre a janela; o passarinho pousa. São dois personagens.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Onde acontece a história do passarinho?",
        opcoes: [
          "Na floresta",
          "Na janela da casa de Aurora",
          "Dentro de um livro fechado",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! O passarinho pousa na JANELA de Aurora — é onde a história acontece.",
        feedbackErro:
          "A palavra que aparece TRÊS vezes no texto é 'janela'. É onde acontece.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 7 · SEQUÊNCIA — reconstruir a ordem dos acontecimentos
  // ------------------------------------------------------------
  momento07_sequencia: {
    instrucao: "As páginas dessa história embaralharam. Coloque na ordem certa.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        {
          id: "p1",
          texto: "De manhã, o passarinho pousa na janela.",
          imagemUrl: passaro,
        },
        {
          id: "p2",
          texto: "Aurora abre a janela devagarinho.",
          imagemUrl: bibliotecaria,
        },
        {
          id: "p3",
          texto: "Aurora coloca uma frutinha e o passarinho come feliz.",
          imagemUrl: estrela,
        },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você contou a história do jeito certo.",
      feedbackErro:
        "Pense: o passarinho CHEGA primeiro. Depois Aurora ABRE a janela. Por último, ela COLOCA a fruta.",
    },
  },

  // ------------------------------------------------------------
  // 8 · LEITURA INDEPENDENTE — texto novo, criança lê sozinha
  // ------------------------------------------------------------
  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho. Depois responda as duas perguntas.",
    leitura: {
      titulo: "O nome do passarinho",
      imagemUrl: livros,
      destacar: ["Piu", "amigo"],
      paragrafos: [
        "Aurora deu um nome para o passarinho. Ele se chama Piu.",
        "Piu é o primeiro amigo da biblioteca. Todo livro que Aurora conta, Piu escuta do poleiro.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o nome do passarinho?",
        opcoes: ["Piu", "Aurora", "Brilha"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O nome é PIU.",
        feedbackErro: "Está na primeira frase: 'Ele se chama …'.",
        dica: "Volte no texto e procure a parte que fala de 'passarinho'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Está na primeira frase: 'Ele se chama …'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Ele se chama Piu.",
      },
      {
        pergunta: "Piu é o primeiro amigo de quem?",
        opcoes: ["Do cachorro", "Da biblioteca", "Da escola"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Da BIBLIOTECA.",
        feedbackErro: "Está na segunda frase: 'primeiro amigo da …'.",
        dica: "Volte no texto e procure a parte que fala de 'primeiro'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Está na segunda frase: 'primeiro amigo da …'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Piu é o primeiro amigo da biblioteca.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 9 · REVISÃO — o que aprendemos
  // ------------------------------------------------------------
  momento09_revisao: {
    pontos: [
      "Antes de ler, olhamos TÍTULO e IMAGEM da capa pra imaginar a história.",
      "Palavras novas: JANELA (abertura na parede) e POLEIRO (onde o passarinho pousa).",
      "As respostas estão ESCRITAS no texto — a gente volta pra procurar.",
      "Personagens = quem FAZ as coisas. Cenário = ONDE acontece.",
    ],
    miniDesafio: {
      pergunta: "Pra descobrir a resposta certa em um texto, o melhor é…",
      opcoes: [
        "Adivinhar do que a gente acha que é",
        "Voltar no texto e procurar onde está escrito",
        "Pular a pergunta",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Bom leitor VOLTA no texto pra procurar.",
      feedbackErro: "Adivinhar não é ler. Bom leitor sempre VOLTA no texto.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Adivinhar não é ler. Bom leitor sempre VOLTA no texto. Agora leia de novo e escolha com calma.",
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
          palavra: "LIVRO",
          silabas: ["LI", "VRO"],
          distratores: ["CA", "PA"],
          dica: "Bata palmas na palavra LIVRO: são 2 pedacinhos.",
        },
        {
          palavra: "CAPA",
          silabas: ["CA", "PA"],
          distratores: ["LI", "VRO"],
          dica: "Bata palmas na palavra CAPA: são 2 pedacinhos.",
        },
        {
          palavra: "PORTAL",
          silabas: ["POR", "TAL"],
          distratores: ["LI", "VRO"],
          dica: "Bata palmas na palavra PORTAL: são 2 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "O livro tem uma capa bonita.",
          palavras: ["O", "livro", "tem", "uma", "capa", "bonita."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Lista dos livros que eu quero ler",
        comando: "Escreva 4 livros ou histórias que você quer ler neste ano.",
        linhas: 4,
        checklist: [
          "Escrevi um livro em cada linha.",
          "Comecei cada nome com letra maiúscula.",
        ],
      },
    ],
  },

  // ------------------------------------------------------------
  // 10 · AVALIAÇÃO — 5 perguntas mistas registrando desempenho
  // ------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que a gente faz ANTES de começar a ler um livro novo?",
        opcoes: [
          "Fecha o livro e vai brincar",
          "Olha o título e a capa pra imaginar do que fala",
          "Lê só a última página",
          "Na janela da casa de Aurora",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Fecha o livro e vai brincar» não é a resposta. A certa é «Olha o título e a capa pra imaginar do que fala».",
          null,
          "«Lê só a última página» não é a resposta. A certa é «Olha o título e a capa pra imaginar do que fala».",
          "«Na janela da casa de Aurora» não é a resposta. A certa é «Olha o título e a capa pra imaginar do que fala».",
        ],
        feedbackAcerto: "🎉 TÍTULO + CAPA.",
        feedbackErro: "A gente olha TÍTULO e CAPA primeiro pra imaginar a história.",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: A gente olha TÍTULO e CAPA primeiro pra imaginar a história. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — De que cor era o passarinho da Aurora?",
        opcoes: ["Verde", "Azul", "Vermelho",
          "Pão",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Verde» não é a resposta. A certa é «Azul».",
          null,
          "«Vermelho» não é a resposta. A certa é «Azul».",
          "«Pão» não é a resposta. A certa é «Azul».",
        ],
        feedbackAcerto: "🎉 Azul!",
        feedbackErro: "O texto diz 'passarinho AZUL'.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: O texto diz 'passarinho AZUL'. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — O que quer dizer POLEIRO?",
        opcoes: [
          "Uma comida de passarinho",
          "O galho ou barzinho onde o passarinho pousa",
          "Um tipo de janela",
          "Voltar no texto e procurar onde está escrito",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Uma comida de passarinho» não é a resposta. A certa é «O galho ou barzinho onde o passarinho pousa».",
          null,
          "«Um tipo de janela» não é a resposta. A certa é «O galho ou barzinho onde o passarinho pousa».",
          "«Voltar no texto e procurar onde está escrito» não é a resposta. A certa é «O galho ou barzinho onde o passarinho pousa».",
        ],
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Poleiro é onde o passarinho POUSA.",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Poleiro é onde o passarinho POUSA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — Aurora é a…",
        opcoes: ["Professora", "Bibliotecária", "Cozinheira",
          "Um tipo de janela",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Professora» não é a resposta. A certa é «Bibliotecária».",
          null,
          "«Cozinheira» não é a resposta. A certa é «Bibliotecária».",
          "«Um tipo de janela» não é a resposta. A certa é «Bibliotecária».",
        ],
        feedbackAcerto: "🎉 Bibliotecária!",
        feedbackErro: "Aurora cuida dos LIVROS — ela é bibliotecária.",
        dica: "Pista: a resposta certa começa com a letra 'B'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Aurora cuida dos LIVROS — ela é bibliotecária. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Qual o nome do passarinho?",
        opcoes: ["Piu", "Brilha", "Aurora",
          "Semente",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Brilha» não é a resposta. A certa é «Piu».",
          "«Aurora» não é a resposta. A certa é «Piu».",
          "«Semente» não é a resposta. A certa é «Piu».",
        ],
        feedbackAcerto: "🎉 PIU! Livro despertado! 🌟",
        feedbackErro: "O texto do 'nome do passarinho' diz: 'Ele se chama PIU'.",
        dica: "Pista: a resposta certa começa com a letra 'B'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: O texto do 'nome do passarinho' diz: 'Ele se chama PIU'. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 11 · MISSÃO EM FAMÍLIA — leitura em casa
  // ------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "🏠 10 minutinhos de leitura",
    materiais: ["Um livro qualquer da casa (ou revista, gibi)"],
    passos: [
      "1) Escolham JUNTOS um livro que a criança curta.",
      "2) Antes de abrir: olhem CAPA e TÍTULO. A criança imagina do que fala.",
      "3) Leiam 10 minutinhos — pode ler junto, revezando frases.",
      "4) No fim, conversem: quem era o personagem? Onde acontecia? Qual foi a parte preferida?",
    ],
    registro:
      "🗣️ Um pequeno áudio ou frase escrita: 'A parte que eu mais gostei foi…'.",
  },

  // ------------------------------------------------------------
  // Recompensas parciais (a medalha grande vem só no final da unidade)
  // ------------------------------------------------------------
  recompensa: {
    xp: 100,
    moedas: 60,
  },
};
