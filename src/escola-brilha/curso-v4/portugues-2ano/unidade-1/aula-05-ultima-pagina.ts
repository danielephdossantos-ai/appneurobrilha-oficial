import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as raposa } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";

/**
 * Aula 5 — A Última Página (encerramento da Unidade 1)
 * -------------------------------------------------------------
 * Missão final: todos os livros da ala foram despertados. Aurora
 * leva Brilha até a ÚLTIMA PRATELEIRA — o livro que junta tudo:
 * personagens, cenários, previsão e ordem. A criança RECONTA
 * a jornada da Biblioteca Encantada.
 *
 * Foco: revisão espiral das 4 aulas anteriores + criação de um
 * pequeno FINAL DE HISTÓRIA (escolhendo o desfecho).
 *
 * BNCC: EF02LP01 · EF02LP03 · EF02LP04 · EF02LP26
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-ultima-pagina",
  titulo: "A Última Página",
  iconeTrilha: "🏅",
  bncc: ["EF02LP01", "EF02LP03", "EF02LP04", "EF02LP26"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O livro que junta todos os livros",
    historia:
      "Quatro livros já brilham na estante! Aurora leva Brilha até a última prateleira e mostra um livro dourado. — Esse aqui é ESPECIAL. Ele guarda um pedacinho de cada história que a gente despertou. Vamos ler juntos e escolher o FINAL?",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "A capa do livro dourado tem Piu, o girassol, o coelho e a raposa. Sobre o que ele fala?",
    bloco: {
      titulo: "A Última Página",
      capaImagemUrl: livros,
      pistas: [
        { imagemUrl: passaro, nome: "Piu" },
        { imagemUrl: girassol, nome: "O girassol" },
        { imagemUrl: coelho, nome: "O coelho" },
        { imagemUrl: raposa, nome: "A raposa" },
      ],
      pergunta: "Sobre o que esse livro deve falar?",
      hipoteses: [
        {
          texto: "Junta os personagens de todas as histórias da biblioteca.",
          imagemUrl: livros,
        },
        {
          texto: "Uma história nova, sem nenhum personagem antigo.",
          imagemUrl: livro,
        },
        {
          texto: "Só de matemática, com números.",
          imagemUrl: estrela,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! A capa mostra TODOS os personagens antigos — o livro junta eles.",
      feedbackErro:
        "Olhe as pistas: aparece Piu, o girassol, o coelho e a raposa — os personagens das aulas antes.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras pra falar sobre histórias.",
    cards: [
      {
        palavra: "final",
        explicacao:
          "É o PEDAÇO que fecha a história. É como tudo termina.",
        exemplo: "O final da história foi feliz — todo mundo dormiu em paz.",
        imagemUrl: livro,
      },
      {
        palavra: "reunir",
        explicacao: "É juntar. Quando várias pessoas ou coisas se JUNTAM num lugar só.",
        exemplo: "A família se reuniu na sala pra jantar.",
        imagemUrl: biblioteca,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com atenção: essa história junta TODOS os amigos.",
    leitura: {
      titulo: "A Última Página",
      imagemUrl: biblioteca,
      legendaImagem: "A Biblioteca Encantada iluminada",
      destacar: ["reunir", "biblioteca", "brilhar", "amigos"],
      paragrafos: [
        "De noite, com a lua brilhando na janela, todos os amigos se reuniram na biblioteca de Aurora.",
        "Piu, o passarinho, veio do poleiro. O girassol trouxe uma pétala amarela. O coelho chegou com a lua no bolso. A raposa apareceu com o mapa dobradinho.",
        "Aurora acendeu uma vela. — Vocês despertaram por causa de UM leitor especial, ela disse, olhando pra criança.",
        "Todos os livros da estante começaram a brilhar juntos. A biblioteca ficou cheia de luz.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Em que hora do dia todos se reuniram?",
        opcoes: ["De manhã", "De tarde", "De noite"],
        correta: 2,
        feedbackAcerto: "🎉 De NOITE, com a lua brilhando.",
        feedbackErro: "A primeira frase começa com 'De …, com a lua brilhando…'.",
        dica: "Volte no texto e procure a parte que fala de 'reuniram'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A primeira frase começa com 'De …, com a lua brilhando…'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "De noite, com a lua brilhando na janela…",
      },
      {
        pergunta: "O que a raposa trouxe?",
        opcoes: ["Uma vela", "O mapa dobradinho", "Uma pétala amarela"],
        correta: 1,
        feedbackAcerto: "🎉 O MAPA! Lembra da aventura dela?",
        feedbackErro:
          "Cada personagem trouxe UMA coisa. Procure 'A raposa apareceu com …'.",
        dica: "Volte no texto e procure a parte que fala de 'raposa'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Cada personagem trouxe UMA coisa. Procure 'A raposa apareceu com …'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "A raposa apareceu com o mapa dobradinho.",
      },
      {
        pergunta: "O que aconteceu com os livros da estante no final?",
        opcoes: [
          "Fecharam todos juntos",
          "Começaram a brilhar juntos",
          "Voaram pela janela",
        ],
        correta: 1,
        feedbackAcerto: "🎉 BRILHARAM juntos!",
        feedbackErro:
          "Olhe o último parágrafo: 'os livros da estante começaram a …'.",
        dica: "Volte no texto e procure a parte que fala de 'aconteceu'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Olhe o último parágrafo: 'os livros da estante começaram a …'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Todos os livros da estante começaram a brilhar juntos.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "Cada amigo veio de uma HISTÓRIA diferente. Vamos lembrar quem é quem.",
    perguntas: [
      {
        pergunta: "De qual história veio o PASSARINHO PIU?",
        opcoes: [
          "Da história da lua",
          "Da história da janela de Aurora",
          "Da aventura do mapa",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! Piu apareceu na primeira aula, na JANELA de Aurora.",
        feedbackErro:
          "Piu é o passarinho AZUL que pousava no poleiro da janela.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "De qual história veio o GIRASSOL?",
        opcoes: [
          "Da semente curiosa que brotou",
          "Da conversa com a lua",
          "Do mapa da raposa",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Boa! A SEMENTE curiosa virou girassol.",
        feedbackErro:
          "Lembra da semente pequenina e curiosa? Ela cresceu e virou um GIRASSOL.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Onde acontece a reunião?",
        opcoes: [
          "Numa floresta",
          "Na biblioteca de Aurora",
          "Dentro de um livro fechado",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Na BIBLIOTECA! É onde a gente esteve o tempo todo.",
        feedbackErro:
          "A primeira frase termina com 'se reuniram na … de Aurora'.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque as histórias na ORDEM em que a gente leu na unidade.",
    bloco: {
      instrucao: "Da primeira aula até a última.",
      itens: [
        { id: "p1", texto: "Piu, o passarinho da janela.", imagemUrl: passaro },
        { id: "p2", texto: "A semente que virou girassol.", imagemUrl: girassol },
        { id: "p3", texto: "O coelho que conversou com a lua.", imagemUrl: lua },
        { id: "p4", texto: "A raposa que seguiu o mapa.", imagemUrl: raposa },
        { id: "p5", texto: "Todos os amigos reunidos na biblioteca.", imagemUrl: livros },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4", "p5"],
      feedbackAcerto: "🎉 Perfeito! Você lembra da unidade inteira.",
      feedbackErro:
        "1º Piu → 2º Semente → 3º Coelho e Lua → 4º Raposa e Mapa → 5º Todos juntos.",
    },
  },

  momento08_leituraIndependente: {
    instrucao:
      "Leia sozinho. Depois escolha COMO você quer que a história termine.",
    leitura: {
      titulo: "O último pedacinho",
      imagemUrl: estrela,
      destacar: ["escolha", "final"],
      paragrafos: [
        "Aurora entregou uma pena dourada pra criança e disse:",
        "— Cada bom leitor escolhe UM final pra história que amou. Qual você escolhe pra Biblioteca Encantada?",
      ],
    },
    perguntas: [
      {
        pergunta:
          "Escolha o final que VOCÊ acha mais bonito pra Biblioteca Encantada:",
        opcoes: [
          "Todos viram amigos pra sempre e leem juntos toda noite.",
          "A biblioteca continua acordando UM livro novo por semana.",
          "A criança vira ajudante oficial da Aurora e Brilha.",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Que final lindo! Você é oficialmente uma boa leitora / bom leitor.",
        feedbackErro:
          "Aqui não tem resposta errada — todas são bonitas! Escolha a primeira e continue.",
        dica: "Volte no texto e procure a parte que fala de 'biblioteca'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Aqui não tem resposta errada — todas são bonitas! Escolha a primeira e continue. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Quem entregou a pena dourada?",
        opcoes: ["Piu", "Aurora", "A raposa"],
        correta: 1,
        feedbackAcerto: "🎉 AURORA, a bibliotecária.",
        feedbackErro:
          "A primeira frase diz 'AURORA entregou uma pena dourada…'.",
        dica: "Volte no texto e procure a parte que fala de 'entregou'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A primeira frase diz 'AURORA entregou uma pena dourada…'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Aurora entregou uma pena dourada pra criança…",
      },
    ],
  },

    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: O último pedacinho",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "Aurora entregou uma pena dourada pra criança e disse:",
      "— Cada bom leitor escolhe UM final pra história que amou.",
      "Qual você escolhe pra Biblioteca Encantada?",
    ],
    metaSegundos: 25,
  },

momento09_revisao: {
    pontos: [
      "AULA 1: Piu, o passarinho da janela — a gente aprendeu a olhar TÍTULO e CAPA antes de ler.",
      "AULA 2: A semente curiosa — a gente aprendeu CARACTERÍSTICAS do personagem (curiosa, pequenina).",
      "AULA 3: O coelho e a lua — a gente aprendeu que o TRAVESSÃO (—) mostra QUEM fala.",
      "AULA 4: O mapa da raposa — a gente aprendeu palavras de LUGAR (atrás, depois, embaixo).",
      "AULA 5: Todos juntos — bom leitor VOLTA no texto pra ter certeza da resposta.",
    ],
    miniDesafio: {
      pergunta: "O que UM bom leitor faz sempre, em toda história?",
      opcoes: [
        "Adivinha a resposta rapidinho",
        "Olha o título, lê com calma e VOLTA no texto pra confirmar",
        "Só olha as figuras",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! Olhar, ler com calma e VOLTAR no texto — esse é o segredo.",
      feedbackErro:
        "Bom leitor NÃO adivinha. Ele lê com calma e volta no texto pra confirmar.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Bom leitor NÃO adivinha. Ele lê com calma e volta no texto pra confirmar. Agora leia de novo e escolha com calma.",
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
          palavra: "PÁGINA",
          silabas: ["PÁ", "GI", "NA"],
          distratores: ["FI", "NAL"],
          dica: "Bata palmas na palavra PÁGINA: são 3 pedacinhos.",
        },
        {
          palavra: "FINAL",
          silabas: ["FI", "NAL"],
          distratores: ["PÁ", "GI"],
          dica: "Bata palmas na palavra FINAL: são 2 pedacinhos.",
        },
        {
          palavra: "HISTÓRIA",
          silabas: ["HIS", "TÓ", "RIA"],
          distratores: ["PÁ", "GI"],
          dica: "Bata palmas na palavra HISTÓRIA: são 3 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "A história teve um final feliz.",
          palavras: ["A", "história", "teve", "um", "final", "feliz."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu final diferente",
        comando: "Escreva em 3 linhas um final DIFERENTE para a história que você leu.",
        linhas: 3,
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Coloquei PONTO no fim de cada frase.",
          "Li em voz alta e entendi tudo.",
          "Meu final combina com a história.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Piu é…",
        opcoes: ["Um coelho", "Um passarinho", "Uma raposa",
          "Da história da lua",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Um coelho» não é a resposta. A certa é «Um passarinho».",
          null,
          "«Uma raposa» não é a resposta. A certa é «Um passarinho».",
          "«Da história da lua» não é a resposta. A certa é «Um passarinho».",
        ],
        feedbackAcerto: "🎉 Passarinho!",
        feedbackErro: "Piu é o PASSARINHO azul da janela de Aurora.",
        dica: "Pista: a resposta certa começa com a letra 'U'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Piu é o PASSARINHO azul da janela de Aurora. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — A semente curiosa virou o quê?",
        opcoes: ["Um cacto", "Um girassol", "Uma árvore",
          "Um passarinho",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Um cacto» não é a resposta. A certa é «Um girassol».",
          null,
          "«Uma árvore» não é a resposta. A certa é «Um girassol».",
          "«Um passarinho» não é a resposta. A certa é «Um girassol».",
        ],
        feedbackAcerto: "🎉 GIRASSOL!",
        feedbackErro: "A semente pequenina e curiosa brotou e virou um GIRASSOL.",
        dica: "Pista: a resposta certa começa com a letra 'U'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: A semente pequenina e curiosa brotou e virou um GIRASSOL. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — O travessão (—) serve pra…",
        opcoes: [
          "Mostrar quem está FALANDO",
          "Marcar o fim do livro",
          "Contar quantas páginas tem",
          "Adivinha a resposta rapidinho",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Marcar o fim do livro» não é a resposta. A certa é «Mostrar quem está FALANDO».",
          "«Contar quantas páginas tem» não é a resposta. A certa é «Mostrar quem está FALANDO».",
          "«Adivinha a resposta rapidinho» não é a resposta. A certa é «Mostrar quem está FALANDO».",
        ],
        feedbackAcerto: "🎉 Isso!",
        feedbackErro:
          "O travessão aparece antes das FALAS dos personagens.",
        dica: "Pista: a resposta certa começa com a letra 'M'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: O travessão aparece antes das FALAS dos personagens. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — 'Atrás da árvore' é uma palavra de…",
        opcoes: ["Sentimento", "Lugar", "Cor",
          "Piu",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Sentimento» não é a resposta. A certa é «Lugar».",
          null,
          "«Cor» não é a resposta. A certa é «Lugar».",
          "«Piu» não é a resposta. A certa é «Lugar».",
        ],
        feedbackAcerto: "🎉 LUGAR!",
        feedbackErro: "'Atrás de' mostra POSIÇÃO — é um LUGAR.",
        dica: "Pista: a resposta certa começa com a letra 'S'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Atrás de' mostra POSIÇÃO — é um LUGAR. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Onde acontecem TODAS as histórias dessa unidade?",
        opcoes: [
          "Na escola",
          "Na Biblioteca Encantada de Aurora",
          "Numa floresta",
          "Contar quantas páginas tem",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Na escola» não é a resposta. A certa é «Na Biblioteca Encantada de Aurora».",
          null,
          "«Numa floresta» não é a resposta. A certa é «Na Biblioteca Encantada de Aurora».",
          "«Contar quantas páginas tem» não é a resposta. A certa é «Na Biblioteca Encantada de Aurora».",
        ],
        feedbackAcerto:
          "🎉 Na BIBLIOTECA ENCANTADA! Você virou Guardião da Primeira Página! 🏅",
        feedbackErro:
          "Todas as histórias saíram dos LIVROS da biblioteca de Aurora.",
        dica: "Pista: a resposta certa começa com a letra 'N'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Todas as histórias saíram dos LIVROS da biblioteca de Aurora. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏅 A nossa própria Biblioteca Encantada",
    materiais: [
      "Uma prateleira ou caixa da casa",
      "Todos os livros infantis que tiverem em casa (podem ser gibis também)",
      "1 papelzinho pra cada livro",
    ],
    passos: [
      "1) Escolham JUNTOS um cantinho da casa pra virar a 'Biblioteca da Família'.",
      "2) A criança arruma os livros na prateleira do jeito dela.",
      "3) Em cada papelzinho, ela escreve (ou desenha) o TÍTULO do livro e uma palavra que sente com ele: 'engraçado', 'medo', 'lindo'.",
      "4) Combinem um dia por semana só pra escolher UM livro e ler juntos.",
      "5) Falem: qual foi a história favorita da nossa unidade?",
    ],
    registro:
      "📸 Uma foto da Biblioteca da Família montada, com a criança do lado.",
  },

  recompensa: {
    xp: 500,
    moedas: 300,
    medalha: "Guardião da Primeira Página",
  },
};
