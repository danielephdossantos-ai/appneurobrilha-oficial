import type { AulaPortuguesV4 } from "../../types";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as familiaGrande } from "@/assets/neuro-treino/objetos/familia-grande.png.asset.json";
import { url as sementinha } from "@/assets/neuro-treino/objetos/semente.png.asset.json";

/**
 * Aula 3 — Família de palavras
 * -------------------------------------------------------------
 * Unidade 2 · Oficina da Palavra
 * Foco: radical, prefixo e sufixo — como novas palavras nascem
 * de um mesmo "tronco" (feliz → infeliz, felizmente).
 * BNCC: EF04LP04
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-familia-de-palavras",
  titulo: "Família de palavras: radical, prefixo e sufixo",
  iconeTrilha: "🌳",
  bncc: ["EF04LP08"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "A árvore genealógica das palavras",
    historia:
      "No coração da floresta, a expedição encontrou uma árvore enorme com nomes gravados no tronco e nos galhos. — Olha só — disse Brilha —, FELIZ está no tronco, e nos galhos aparecem INFELIZ e FELIZMENTE! Elas são uma FAMÍLIA de palavras, todas nascidas do mesmo radical. Vamos descobrir como pedacinhos no começo e no fim mudam o sentido de uma palavra?",
    imagemUrl: arvore,
  },

  momento02_previsao: {
    instrucao: "Observe o tronco e os galhos antes de subir na árvore genealógica.",
    bloco: {
      titulo: "A Árvore Genealógica das Palavras",
      capaImagemUrl: arvore,
      pistas: [
        { imagemUrl: sementinha, nome: "Uma semente" },
        { imagemUrl: familiaGrande, nome: "Uma família" },
      ],
      pergunta: "Sobre o que essa parte da expedição vai tratar?",
      hipoteses: [
        {
          texto:
            "Como um pedaço comum (radical) gera várias palavras, com prefixos e sufixos diferentes.",
          imagemUrl: arvore,
        },
        { texto: "Como plantar uma árvore de verdade.", imagemUrl: sementinha },
        { texto: "Como organizar uma festa de família.", imagemUrl: familiaGrande },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos descobrir como radical, prefixo e sufixo formam famílias de palavras.",
      feedbackErro:
        "Pense na árvore com FELIZ no tronco e INFELIZ, FELIZMENTE nos galhos — é sobre isso que vamos aprender.",
      dica: "🧭 Pista de explorador: lembre o que significa “radical” — é o pedaço que carrega o SIGNIFICADO principal da palavra — o 'tronco' de onde nascem as outras. Fica igual (ou quase igual) em toda a família. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as três partes que formam uma família de palavras.",
    cards: [
      {
        palavra: "radical",
        explicacao:
          "É o pedaço que carrega o SIGNIFICADO principal da palavra — o 'tronco' de onde nascem as outras. Fica igual (ou quase igual) em toda a família.",
        exemplo: "Em FELIZ, INFELIZ e FELIZMENTE, o radical é FELIZ.",
        imagemUrl: arvore,
      },
      {
        palavra: "prefixo",
        explicacao:
          "É o pedaço colocado ANTES do radical, mudando ou reforçando o sentido da palavra.",
        exemplo: "Em INFELIZ, o prefixo IN- muda o sentido para 'o contrário de feliz'.",
        imagemUrl: mapa,
      },
      {
        palavra: "sufixo",
        explicacao:
          "É o pedaço colocado DEPOIS do radical, que também muda o sentido — muitas vezes muda até a classe da palavra.",
        exemplo: "Em FELIZMENTE, o sufixo -MENTE transforma o adjetivo em um advérbio de modo.",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo a família nascer do radical",
    instrucao: "Observe como o mesmo radical gera palavras diferentes.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "IN + FELIZ = INFELIZ",
            explicacao: "Prefixo IN- antes do radical FELIZ: sentido contrário.",
          },
          {
            texto: "FELIZ + MENTE = FELIZMENTE",
            explicacao: "Sufixo -MENTE depois do radical FELIZ: vira advérbio.",
          },
          {
            texto: "IN + FELIZ + MENTE = INFELIZMENTE",
            explicacao: "Prefixo e sufixo juntos, no mesmo radical.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha desenhou um mapa da árvore genealógica no diário. Leia com atenção.",
    leitura: {
      titulo: "O Mapa da Árvore Genealógica",
      imagemUrl: pergaminho,
      legendaImagem: "Diário de bordo da Oficina da Palavra",
      destacar: ["radical", "prefixo", "sufixo", "significado"],
      paragrafos: [
        "Toda família de palavras nasce de um RADICAL — o pedaço que carrega o significado principal e se repete em todas as palavras da família. Em FELIZ, INFELIZ e FELIZMENTE, o radical é sempre FELIZ.",
        "Quando um pedacinho é colocado ANTES do radical, ele se chama PREFIXO. O prefixo pode mudar bastante o sentido: em INFELIZ, o prefixo IN- inverte o significado, criando o oposto de feliz.",
        "Quando um pedacinho é colocado DEPOIS do radical, ele se chama SUFIXO. Em FELIZMENTE, o sufixo -MENTE transforma o adjetivo FELIZ num advérbio, que indica o MODO como algo acontece.",
        "Reconhecer o radical de uma palavra ajuda a entender palavras novas: se você sabe que PEDRA é o radical, entende PEDREIRO (quem trabalha com pedra) e PEDREGULHO (monte de pedras) sem precisar decorar cada uma.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no mapa se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "O que é o radical de uma palavra, segundo o texto?",
        opcoes: [
          "O pedaço que carrega o significado principal, repetido em toda a família",
          "A última letra da palavra",
          "Um sinal de pontuação",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! O radical carrega o significado principal e se repete na família.",
        feedbackErro:
          "Releia: 'RADICAL — o pedaço que carrega o significado principal e se repete em todas as palavras da família'.",
        ondeEstaNoTexto:
          "o pedaço que carrega o significado principal e se repete em todas as palavras da família",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “o pedaço que carrega o significado principal e se repete em todas as palavras da família”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O pedaço que carrega o significado principal, repetido em toda a família”. O radical carrega o significado principal e se repete na família. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Onde fica o PREFIXO em relação ao radical?",
        opcoes: ["Antes do radical", "Depois do radical", "No meio do radical"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! O prefixo vem antes do radical.",
        feedbackErro: "Releia: 'um pedacinho é colocado ANTES do radical, ele se chama PREFIXO'.",
        ondeEstaNoTexto: "um pedacinho é colocado ANTES do radical, ele se chama PREFIXO",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “um pedacinho é colocado ANTES do radical, ele se chama PREFIXO”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Antes do radical”. O prefixo vem antes do radical. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que o sufixo -MENTE faz com o adjetivo FELIZ, segundo o texto?",
        opcoes: [
          "Transforma o adjetivo num advérbio de modo",
          "Deixa a palavra no plural",
          "Inverte o sentido para o oposto",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! -MENTE transforma o adjetivo em advérbio de modo.",
        feedbackErro:
          "Releia: 'o sufixo -MENTE transforma o adjetivo FELIZ num advérbio, que indica o MODO'.",
        ondeEstaNoTexto: "o sufixo -MENTE transforma o adjetivo FELIZ num advérbio",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “o sufixo -MENTE transforma o adjetivo FELIZ num advérbio”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Transforma o adjetivo num advérbio de modo”. -MENTE transforma o adjetivo em advérbio de modo. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz a descoberta e onde ela acontece?",
    perguntas: [
      {
        pergunta: "Onde a expedição encontrou a árvore com os nomes gravados?",
        opcoes: ["No coração da floresta", "Na beira de um rio", "No topo de uma montanha"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A árvore estava no coração da floresta.",
        feedbackErro:
          "Releia a motivação: 'No coração da floresta, a expedição encontrou uma árvore enorme'.",
        dica: "🧭 Pista de explorador: lembre o que significa “radical” — é o pedaço que carrega o SIGNIFICADO principal da palavra — o 'tronco' de onde nascem as outras. Fica igual (ou quase igual) em toda a família. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “No coração da floresta”. A árvore estava no coração da floresta. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Quem registrou o mapa da árvore genealógica no diário?",
        opcoes: ["Brilha", "Aurora", "Um viajante desconhecido"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Foi Brilha quem desenhou o mapa no diário.",
        feedbackErro:
          "Releia a introdução: 'Brilha desenhou um mapa da árvore genealógica no diário'.",
        dica: "🧭 Pista de explorador: lembre o que significa “radical” — é o pedaço que carrega o SIGNIFICADO principal da palavra — o 'tronco' de onde nascem as outras. Fica igual (ou quase igual) em toda a família. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Brilha”. Foi Brilha quem desenhou o mapa no diário. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para montar uma nova palavra da família.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Identifique o radical, o significado principal.", imagemUrl: arvore },
        { id: "p2", texto: "Decida se vai acrescentar um prefixo antes dele.", imagemUrl: mapa },
        { id: "p3", texto: "Decida se vai acrescentar um sufixo depois dele.", imagemUrl: estrela },
        {
          id: "p4",
          texto: "Junte tudo e confira se o sentido novo faz sentido.",
          imagemUrl: lapis,
        },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto:
        "🎉 Perfeito! Você reconstruiu o processo de formar uma palavra nova a partir do radical.",
      feedbackErro:
        "Pense: primeiro se identifica o radical, depois se decide o prefixo, depois o sufixo, e por fim confere o sentido.",
      dica: "🧭 Pista de explorador: lembre o que significa “radical” — é o pedaço que carrega o SIGNIFICADO principal da palavra — o 'tronco' de onde nascem as outras. Fica igual (ou quase igual) em toda a família. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do diário e responda.",
    leitura: {
      titulo: "Mais uma Família na Floresta",
      imagemUrl: livro,
      destacar: ["PEDRA", "PEDREIRO", "PEDREGULHO", "DESPEDAÇAR"],
      paragrafos: [
        "Brilha encontrou outra família: PEDRA é o radical. PEDREIRO usa o sufixo -EIRO, que indica profissão: quem trabalha com pedra. PEDREGULHO usa o sufixo -EGULHO, indicando um amontoado de pedras.",
        "Já em DESPEDAÇAR, o radical PEDAÇO ganha o prefixo DES-, que dá ideia de separar, desfazer — despedaçar é 'quebrar em pedaços'.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que o sufixo -EIRO indica em PEDREIRO, segundo o texto?",
        opcoes: ["Profissão: quem trabalha com pedra", "Tamanho pequeno", "Cor da pedra"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! -EIRO indica a profissão de quem trabalha com pedra.",
        feedbackErro: "Releia: 'PEDREIRO usa o sufixo -EIRO, que indica profissão'.",
        ondeEstaNoTexto: "PEDREIRO usa o sufixo -EIRO, que indica profissão",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “PEDREIRO usa o sufixo -EIRO, que indica profissão”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Profissão: quem trabalha com pedra”. -EIRO indica a profissão de quem trabalha com pedra. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual é o radical de DESPEDAÇAR, segundo o texto?",
        opcoes: ["PEDAÇO", "DES", "AR"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! O radical é PEDAÇO, e DES- é o prefixo.",
        feedbackErro: "Releia: 'o radical PEDAÇO ganha o prefixo DES-'.",
        ondeEstaNoTexto: "o radical PEDAÇO ganha o prefixo DES-",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “o radical PEDAÇO ganha o prefixo DES-”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “PEDAÇO”. O radical é PEDAÇO, e DES- é o prefixo. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a família de palavras",
    instrucao: "Arraste cada palavra para o galho certo: RADICAL, tem PREFIXO ou tem SUFIXO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Os Galhos da Árvore Genealógica",
      bloco: {
        instrucao:
          "Pense em qual pedaço foi acrescentado — antes (prefixo) ou depois (sufixo) do radical.",
        itens: [
          { id: "i1", texto: "feliz", alvoId: "radical" },
          { id: "i2", texto: "infeliz", alvoId: "prefixo" },
          { id: "i3", texto: "felizmente", alvoId: "sufixo" },
          { id: "i4", texto: "pedra", alvoId: "radical" },
          { id: "i5", texto: "pedreiro", alvoId: "sufixo" },
          { id: "i6", texto: "desfazer", alvoId: "prefixo" },
          { id: "i7", texto: "flor", alvoId: "radical" },
          { id: "i8", texto: "florzinha", alvoId: "sufixo" },
        ],
        alvos: [
          {
            id: "radical",
            nome: "Radical puro",
            imagemUrl: arvore,
            descricao: "Palavra sem prefixo nem sufixo",
          },
          {
            id: "prefixo",
            nome: "Tem prefixo",
            imagemUrl: mapa,
            descricao: "Pedaço acrescentado ANTES do radical",
          },
          {
            id: "sufixo",
            nome: "Tem sufixo",
            imagemUrl: estrela,
            descricao: "Pedaço acrescentado DEPOIS do radical",
          },
        ],
        feedbackAcerto: "🎉 Excelente! Você organizou toda a árvore genealógica das palavras.",
        feedbackErro:
          "Pense: o pedaço extra veio ANTES do radical (prefixo) ou DEPOIS (sufixo)? Ou a palavra é só o radical puro?",
        dica: "🧭 Pista de explorador: lembre o que significa “radical” — é o pedaço que carrega o SIGNIFICADO principal da palavra — o 'tronco' de onde nascem as outras. Fica igual (ou quase igual) em toda a família. Use essa ideia para eliminar as alternativas que não combinam.",
      },
    },
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final (Fase 3 · 4º ano)
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Diário de Bordo do Explorador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Parágrafo da mesma família",
        comando:
          "Escolha um radical (por exemplo: terra, flor, pedra, livro) e escreva um parágrafo usando pelo menos 4 palavras da mesma família (terreno, aterrar, enterrado, terrestre).",
        linhas: 5,
        modelo: [
          "O terreno atrás da escola estava cheio de mato.",
          "A turma resolveu desenterrar as pedras e aterrar os buracos.",
          "Hoje, aquele pedaço de terra virou uma horta.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Não repeti a mesma palavra várias vezes: troquei por pronome ou sinônimo.",
          "Usei pelo menos um conectivo (porque, então, mas, além disso) ligando as ideias.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Usei pelo menos 4 palavras do mesmo radical.",
          "As palavras que escolhi realmente combinam com o sentido do texto.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (Fase 4 · 4º ano · ~110 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: A Árvore das Palavras",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem conta.",
    texto: [
      "Toda palavra nasce de uma raiz, e dessa raiz brotam galhos que carregam o mesmo sentido de origem.",
      "De flor vêm floreira, florido, florescer e floricultura; de pedra vêm pedreiro, pedregulho e empedrado.",
      "Quando você reconhece a raiz, descobre de uma vez a grafia e o significado de dezenas de palavras que ainda nem aprendeu.",
    ],
    metaSegundos: 30,
  },

  momento09_revisao: {
    pontos: [
      "RADICAL é o pedaço com o significado principal, que se repete na família de palavras.",
      "PREFIXO vem ANTES do radical e muda o sentido (in-, des-, re-...).",
      "SUFIXO vem DEPOIS do radical e muda o sentido ou a classe da palavra (-mente, -eiro, -inho...).",
    ],
    miniDesafio: {
      pergunta: "Em INFELIZMENTE, quais são o prefixo, o radical e o sufixo?",
      opcoes: [
        "Prefixo IN-, radical FELIZ, sufixo -MENTE",
        "Prefixo FELIZ-, radical IN, sufixo -MENTE",
        "Não há radical nessa palavra",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! IN- (prefixo) + FELIZ (radical) + -MENTE (sufixo).",
      feedbackErro:
        "Releia a explicação: o radical é FELIZ, IN- vem antes (prefixo) e -MENTE vem depois (sufixo).",
      dica: "🧭 Pista de explorador: lembre o que significa “radical” — é o pedaço que carrega o SIGNIFICADO principal da palavra — o 'tronco' de onde nascem as outras. Fica igual (ou quase igual) em toda a família. Use essa ideia para eliminar as alternativas que não combinam.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “Prefixo IN-, radical FELIZ, sufixo -MENTE”. IN- (prefixo) + FELIZ (radical) + -MENTE (sufixo). Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o radical de uma palavra?",
        opcoes: [
          "O pedaço com o significado principal",
          "Sempre a última letra",
          "Um tipo de pontuação",
          "A última letra da palavra",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Radical carrega o significado principal.",
        feedbackErro: "Lembre: radical é o pedaço com o significado principal da palavra.",
        feedbackOpcoes: [
          null,
          "❌ “Sempre a última letra” não é a resposta. Lembre: radical é o pedaço com o significado principal da palavra.",
          "❌ “Um tipo de pontuação” não é a resposta. Lembre: radical é o pedaço com o significado principal da palavra.",
          "❌ “A última letra da palavra” não é a resposta. Lembre: radical é o pedaço com o significado principal da palavra.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “radical” — é o pedaço que carrega o SIGNIFICADO principal da palavra — o 'tronco' de onde nascem as outras. Fica igual (ou quase igual) em toda a família. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O pedaço com o significado principal”. Radical carrega o significado principal. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — O prefixo fica em que posição em relação ao radical?",
        opcoes: ["Antes", "Depois", "No meio", "Um sinal de pontuação"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Prefixo vem antes do radical.",
        feedbackErro: "Lembre: prefixo vem ANTES do radical.",
        feedbackOpcoes: [
          null,
          "❌ “Depois” não é a resposta. Lembre: prefixo vem ANTES do radical.",
          "❌ “No meio” não é a resposta. Lembre: prefixo vem ANTES do radical.",
          "❌ “Um sinal de pontuação” não é a resposta. Lembre: prefixo vem ANTES do radical.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “radical” — é o pedaço que carrega o SIGNIFICADO principal da palavra — o 'tronco' de onde nascem as outras. Fica igual (ou quase igual) em toda a família. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Antes”. Prefixo vem antes do radical. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — O sufixo fica em que posição em relação ao radical?",
        opcoes: ["Antes", "Depois", "No meio", "Depois do radical"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Sufixo vem depois do radical.",
        feedbackErro: "Lembre: sufixo vem DEPOIS do radical.",
        feedbackOpcoes: [
          "❌ “Antes” não é a resposta. Lembre: sufixo vem DEPOIS do radical.",
          null,
          "❌ “No meio” não é a resposta. Lembre: sufixo vem DEPOIS do radical.",
          "❌ “Depois do radical” não é a resposta. Lembre: sufixo vem DEPOIS do radical.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “radical” — é o pedaço que carrega o SIGNIFICADO principal da palavra — o 'tronco' de onde nascem as outras. Fica igual (ou quase igual) em toda a família. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Depois”. Sufixo vem depois do radical. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — Em INFELIZ, qual é o prefixo?",
        opcoes: ["IN-", "-FELIZ", "-EZ", "No meio do radical"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! IN- é o prefixo que inverte o sentido de FELIZ.",
        feedbackErro: "Releia o exemplo: em INFELIZ, o prefixo é IN-.",
        feedbackOpcoes: [
          null,
          "❌ “FELIZ” não é a resposta. Releia o exemplo: em INFELIZ, o prefixo é IN-.",
          "❌ “EZ” não é a resposta. Releia o exemplo: em INFELIZ, o prefixo é IN-.",
          "❌ “No meio do radical” não é a resposta. Releia o exemplo: em INFELIZ, o prefixo é IN-.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “prefixo” — é o pedaço colocado ANTES do radical, mudando ou reforçando o sentido da palavra. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “IN-”. IN- é o prefixo que inverte o sentido de FELIZ. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — Qual palavra tem SUFIXO, transformando o adjetivo em advérbio?",
        opcoes: ["Felizmente", "Infeliz", "Feliz", "Deixa a palavra no plural"],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! -MENTE é o sufixo que cria o advérbio FELIZMENTE.",
        feedbackErro:
          "Pense: qual das três tem um pedaço acrescentado DEPOIS do radical? É FELIZMENTE.",
        feedbackOpcoes: [
          null,
          "❌ “Infeliz” não é a resposta. Pense: qual das três tem um pedaço acrescentado DEPOIS do radical? É FELIZMENTE.",
          "❌ “Feliz” não é a resposta. Pense: qual das três tem um pedaço acrescentado DEPOIS do radical? É FELIZMENTE.",
          "❌ “Deixa a palavra no plural” não é a resposta. Pense: qual das três tem um pedaço acrescentado DEPOIS do radical? É FELIZMENTE.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “sufixo” — é o pedaço colocado DEPOIS do radical, que também muda o sentido — muitas vezes muda até a classe da palavra. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Felizmente”. Expedição concluída! -MENTE é o sufixo que cria o advérbio FELIZMENTE. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às famílias de palavras",
    materiais: ["Papel e lápis", "Um livro, revista ou embalagem qualquer da casa"],
    passos: [
      "1) Junto com um adulto, escolham 3 radicais (ex.: PEDRA, FLOR, FELIZ).",
      "2) Para cada radical, criem pelo menos duas palavras novas: uma com prefixo e outra com sufixo.",
      "3) Registrem numa árvore desenhada: o radical no tronco, as novas palavras nos galhos.",
      "4) Expliquem em voz alta o que cada prefixo ou sufixo mudou no sentido.",
    ],
    registro:
      "📝 Uma foto do desenho da árvore de palavras, ou um áudio explicando as descobertas.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
