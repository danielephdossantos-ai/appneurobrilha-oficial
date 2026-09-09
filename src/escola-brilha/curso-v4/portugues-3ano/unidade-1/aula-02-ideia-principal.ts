import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as jornal } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";

/**
 * Aula 2 — Qual é a Ideia Principal?
 * -------------------------------------------------------------
 * O Clube recebe um "relatório confuso" e precisa separar o que é
 * a IDEIA PRINCIPAL (o assunto do texto) dos DETALHES (informações
 * que completam, mas não sustentam sozinhas o texto).
 *
 * Foco pedagógico: EF35LP04 (compreender ideia central e detalhes),
 * distinguindo "do que o texto trata" de "informações que aparecem
 * no meio do caminho".
 *
 * BNCC: EF35LP04, EF35LP03, EF03LP26
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-ideia-principal",
  titulo: "Qual é a Ideia Principal?",
  iconeTrilha: "🧭",
  bncc: ["EF35LP04", "EF35LP03", "EF03LP26"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "O Relatório Confuso",
    historia:
      "Um novo membro do clube trouxe um relatório cheio de detalhes espalhados, mas esqueceu de dizer do que ele TRATA. Aurora balançou a cabeça: — Todo bom detetive sabe separar a IDEIA PRINCIPAL — o assunto central — dos detalhes que só enfeitam a história. Vamos treinar esse olhar, Brilha?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Olhe o cartaz abaixo. Antes de ler tudo, tente adivinhar: qual é o ASSUNTO PRINCIPAL dele?",
    bloco: {
      titulo: "O Cartaz do Parque",
      capaImagemUrl: parque,
      pistas: [
        { imagemUrl: arvore, nome: "Árvores" },
        { imagemUrl: cachorro, nome: "Um cachorro" },
      ],
      recado: {
        rotulo: "Cartaz na entrada do parque",
        icone: "📢",
        linhas: [
          "MUTIRÃO DE LIMPEZA NESTE SÁBADO!",
          "Traga luvas e sacos de lixo.",
          "Haverá suco de laranja para os voluntários.",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é o assunto PRINCIPAL desse cartaz?",
      hipoteses: [
        { texto: "Um convite para um mutirão de limpeza no parque." },
        { texto: "Uma receita de suco de laranja." },
        { texto: "Uma propaganda de luvas." },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🧭 Isso mesmo! O título em letras grandes já entrega a ideia principal: o MUTIRÃO DE LIMPEZA. O suco e as luvas são só detalhes.",
      feedbackErro:
        "Repare no que está em letra GRANDE, no topo — 'MUTIRÃO DE LIMPEZA'. O suco e as luvas são detalhes que ajudam, mas não são o assunto central.",
      dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras-chave para virar detetive da ideia principal.",
    cards: [
      {
        palavra: "ideia principal",
        explicacao:
          "É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase.",
        exemplo: "Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'.",
        imagemUrl: abelha,
      },
      {
        palavra: "detalhe",
        explicacao:
          "É uma informação que completa a ideia principal, mas sozinha não conta a história toda.",
        exemplo: "Dizer que a abelha tem listras amarelas e pretas é um DETALHE, não a ideia principal do texto.",
        imagemUrl: girassol,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Assunto, ideia principal e detalhe",
    instrucao: "Compare as três frases: uma diz o ASSUNTO, uma diz a IDEIA PRINCIPAL e uma é só DETALHE.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "As abelhas.",
            explicacao: "Isso é só o ASSUNTO: de quem o texto fala. Ainda não diz nada sobre elas.",
          },
          {
            texto: "As abelhas ajudam as plantas a nascer.",
            explicacao: "Esta é a IDEIA PRINCIPAL: o assunto + o que o texto quer dizer sobre ele.",
          },
          {
            texto: "A abelha da história tinha listras bem amarelas.",
            explicacao: "Este é um DETALHE: enfeita o texto, mas se apagarmos, a ideia principal continua de pé.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o texto com atenção. No final, você vai precisar escolher UMA frase que resume tudo — a ideia principal.",
    leitura: {
      titulo: "As Abelhas e o Jardim",
      imagemUrl: abelha,
      legendaImagem: "Uma abelha visitando o girassol",
      destacar: ["polinizam", "flores", "sem elas"],
      paragrafos: [
        "As abelhas visitam flor após flor procurando néctar, o líquido doce que usam para fazer mel. Enquanto voam de flor em flor, elas carregam grãozinhos de pólen grudados nas patinhas.",
        "Esse pólen cai em outras flores e faz com que elas produzam frutas e sementes. Esse processo se chama polinização.",
        "Sem as abelhas, muitas plantas não conseguiriam produzir frutas — e frutas como maçã, morango e abóbora dependem justamente desse trabalho.",
        "Por isso, cientistas dizem: as abelhas são fundamentais para manter os jardins e as plantações vivas e cheias de frutos.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar para confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "O que as abelhas procuram nas flores?",
        opcoes: ["Água", "Néctar", "Folhas"],
        correta: 1,
        feedbackAcerto: "🧭 Isso! 'procurando néctar' está na primeira frase.",
        feedbackErro: "Releia a primeira frase: logo depois de 'procurando' está a resposta.",
        ondeEstaNoTexto: "As abelhas visitam flor após flor procurando néctar…",
        dica: "🔎 Pista: releia no texto o trecho “As abelhas visitam flor após flor procurando néctar…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “O que as abelhas procuram nas flores?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Como se chama o processo de o pólen passar de uma flor para outra?",
        opcoes: ["Germinação", "Polinização", "Fotossíntese"],
        correta: 1,
        feedbackAcerto: "🧭 Exato! O texto diz 'Esse processo se chama polinização'.",
        feedbackErro: "A resposta está na última frase do segundo parágrafo.",
        ondeEstaNoTexto: "Esse processo se chama polinização.",
        dica: "🔎 Pista: releia no texto o trecho “Esse processo se chama polinização.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “Como se chama o processo de o pólen passar de uma flor para outra?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Cite duas frutas mencionadas no texto que dependem da polinização.",
        opcoes: ["Banana e uva", "Maçã e morango", "Manga e melancia"],
        correta: 1,
        feedbackAcerto: "🧭 Boa! O texto cita 'maçã, morango e abóbora'.",
        feedbackErro: "Volte ao terceiro parágrafo — as frutas aparecem depois de 'como'.",
        ondeEstaNoTexto: "…frutas como maçã, morango e abóbora dependem…",
        dica: "🔎 Pista: releia no texto o trecho “…frutas como maçã, morango e abóbora dependem…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “Cite duas frutas mencionadas no texto que dependem da polinização.” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora o desafio central: separar a IDEIA PRINCIPAL dos DETALHES.",
    perguntas: [
      {
        pergunta: "Qual frase resume melhor a IDEIA PRINCIPAL do texto todo?",
        opcoes: [
          "As abelhas carregam pólen nas patinhas.",
          "As abelhas são fundamentais para a polinização e a produção de frutas.",
          "Existem flores de várias cores no jardim.",
        ],
        correta: 1,
        feedbackAcerto:
          "🧭 Isso! Essa frase resume TODO o texto — as outras são detalhes que só explicam ou reforçam essa ideia central.",
        feedbackErro:
          "Pense: qual frase, sozinha, já contaria do que o texto inteiro trata? As patinhas com pólen são só um detalhe do processo.",
        dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “Qual frase resume melhor a IDEIA PRINCIPAL do texto todo?” com essa ideia na cabeça.",
      },
      {
        pergunta: "'Carregam grãozinhos de pólen grudados nas patinhas' é a ideia principal ou um detalhe?",
        opcoes: ["É a ideia principal", "É um detalhe que explica como a polinização acontece"],
        correta: 1,
        feedbackAcerto:
          "🧭 Correto! É um detalhe — explica COMO o pólen viaja, mas sozinho não conta a importância das abelhas.",
        feedbackErro:
          "Essa frase só explica uma parte do processo. A ideia principal é maior: fala da IMPORTÂNCIA das abelhas para os jardins.",
        dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “'Carregam grãozinhos de pólen grudados nas patinhas' é a ideia princi…” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos do raciocínio para encontrar a ideia principal de um texto.",
    bloco: {
      instrucao: "Ordem certa do raciocínio do detetive.",
      itens: [
        { id: "p1", texto: "Ler o texto inteiro com atenção.", imagemUrl: lupa },
        { id: "p2", texto: "Perguntar: 'do que esse texto trata, no geral?'", imagemUrl: brilha },
        { id: "p3", texto: "Escolher a frase que resume tudo, deixando os detalhes de lado.", imagemUrl: jornal },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🧭 Isso! Esse é o caminho certo para caçar a ideia principal.",
      feedbackErro: "Primeiro se lê tudo, depois se pergunta o assunto geral, e só então se escolhe a frase-resumo.",
      dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo relatório para o clube! Leia sozinho e encontre a ideia principal.",
    leitura: {
      titulo: "O Cachorro que Virou Herói do Bairro",
      imagemUrl: cachorro,
      destacar: ["latiu sem parar", "avisou os vizinhos", "salvou a família"],
      paragrafos: [
        "Bolinha é um vira-lata caramelo que mora com a família Ferreira há três anos. Ele adora dormir no sofá da varanda.",
        "Uma noite, Bolinha sentiu cheiro de fumaça vindo da cozinha e latiu sem parar até acordar todo mundo.",
        "Graças ao alerta do cachorro, a família Ferreira saiu de casa a tempo e os bombeiros apagaram o pequeno incêndio antes que se espalhasse.",
        "Hoje, todo o bairro conhece Bolinha como o cachorro-herói que salvou a família Ferreira.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a ideia principal desse texto?",
        opcoes: [
          "Bolinha gosta de dormir na varanda.",
          "Bolinha salvou a família alertando sobre um incêndio.",
          "A família Ferreira mora há três anos na mesma casa.",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Isso! Toda a história gira em torno desse fato central.",
        feedbackErro: "Onde dormir é um detalhe. A ideia principal é o que o cachorro FEZ de mais importante na história.",
        dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “Qual é a ideia principal desse texto?” com essa ideia na cabeça.",
      },
      {
        pergunta: "'Ele adora dormir no sofá da varanda' é ideia principal ou detalhe?",
        opcoes: ["Ideia principal", "Detalhe"],
        correta: 1,
        feedbackAcerto: "🧭 Exato! É só uma informação extra sobre o Bolinha, não o assunto central do texto.",
        feedbackErro: "Pense: essa frase sozinha contaria a história do 'herói'? Não — por isso é um detalhe.",
        dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “'Ele adora dormir no sofá da varanda' é ideia principal ou detalhe?” com essa ideia na cabeça.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina de Escrita do Detetive",
    instrucao:
      "Três passos de escritor de verdade: primeiro o RASCUNHO, depois a REVISÃO com a lista de conferência e, por último, a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Um parágrafo com ideia principal",
        comando: "Escreva um parágrafo sobre um lugar de que você gosta. A PRIMEIRA frase deve dizer a ideia principal; as outras duas dão detalhes.",
        linhas: 4,
        modelo: [
          "O parque perto de casa é o meu lugar preferido.",
          "Lá tem um balanço alto e sombra de árvore.",
          "Toda tarde eu encontro meus amigos por lá.",
        ],
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Usei ponto final no fim de cada frase.",
          "Meu texto fala do tema pedido, do começo ao fim.",
          "Reli em voz alta e consertei o que estava estranho.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura cronometrada (Fase 4 · 3º ano · ~90 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura de detetive: As Abelhas e o Jardim",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "As abelhas visitam flor após flor procurando néctar, o líquido doce que usam para fazer mel.",
      "Enquanto voam de flor em flor, elas carregam grãozinhos de pólen grudados nas patinhas.",
      "Esse pólen cai em outras flores e faz com que elas produzam frutas e sementes.",
    ],
    metaSegundos: 30,
  },

  momento09_revisao: {
    pontos: [
      "A IDEIA PRINCIPAL é o assunto central — a frase que resume o texto inteiro.",
      "DETALHES completam, explicam ou enfeitam a ideia principal, mas sozinhos não contam tudo.",
      "Uma boa dica: pergunte 'do que esse texto trata, no geral?' — a resposta é a ideia principal.",
      "Em textos como cartazes, o título em letra grande costuma já dar a ideia principal.",
    ],
    miniDesafio: {
      pergunta: "Num texto que fala sobre 'como escovar os dentes corretamente' e cita também 'a cor da escova', qual é a ideia principal?",
      opcoes: [
        "A cor da escova",
        "Como escovar os dentes corretamente",
        "Nenhuma das duas"
      ],
      correta: 1,
      feedbackAcerto: "🧭 Isso! A cor é um detalhe; o 'como fazer' é a ideia principal.",
      feedbackErro: "A cor da escova é só um detalhe — o texto todo gira em torno de ENSINAR a escovar direito.",
      dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “Num texto que fala sobre 'como escovar os dentes corretamente' e cita…” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é a 'ideia principal' de um texto?",
        opcoes: [
          "Um detalhe engraçado",
          "Um detalhe pequeno que aparece só uma vez no texto",
          "O assunto central que resume o texto",
          "A última frase do texto sempre",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Um detalhe engraçado” não é a resposta. A ideia principal é o assunto que resume o texto — não é sempre a última frase.",
          "❌ “Um detalhe pequeno que aparece só uma vez no texto” não é a resposta. A ideia principal é o assunto que resume o texto — não é sempre a última frase.",
          null,
          "❌ “A última frase do texto sempre” não é a resposta. A ideia principal é o assunto que resume o texto — não é sempre a última frase.",
        ],
        feedbackAcerto: "🧭 Isso! É o assunto central.",
        feedbackErro: "A ideia principal é o assunto que resume o texto — não é sempre a última frase.",
        dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “1/5 — O que é a 'ideia principal' de um texto?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — Como diferenciamos ideia principal de detalhe?",
        opcoes: [
          "A ideia principal resume tudo; o detalhe só completa uma parte",
          "Detalhe é sempre maior que a ideia principal",
          "Não existe diferença",
          "Um detalhe pequeno que aparece só uma vez no texto",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Detalhe é sempre maior que a ideia principal” não é a resposta. A ideia principal é mais ampla e resume o texto; o detalhe é uma parte específica.",
          "❌ “Não existe diferença” não é a resposta. A ideia principal é mais ampla e resume o texto; o detalhe é uma parte específica.",
          "❌ “Um detalhe pequeno que aparece só uma vez no texto” não é a resposta. A ideia principal é mais ampla e resume o texto; o detalhe é uma parte específica.",
        ],
        feedbackAcerto: "🧭 Exato!",
        feedbackErro: "A ideia principal é mais ampla e resume o texto; o detalhe é uma parte específica.",
        dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “2/5 — Como diferenciamos ideia principal de detalhe?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — No texto das abelhas, qual é a ideia principal?",
        opcoes: [
          "Um detalhe pequeno que aparece só uma vez no texto",
          "As abelhas são fundamentais para a polinização e as frutas",
          "As abelhas voam de flor em flor",
          "O néctar é doce",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Um detalhe pequeno que aparece só uma vez no texto” não é a resposta. As outras frases são detalhes que explicam a importância das abelhas — a ideia central fala da IMPORTÂNCIA delas.",
          null,
          "❌ “As abelhas voam de flor em flor” não é a resposta. As outras frases são detalhes que explicam a importância das abelhas — a ideia central fala da IMPORTÂNCIA delas.",
          "❌ “O néctar é doce” não é a resposta. As outras frases são detalhes que explicam a importância das abelhas — a ideia central fala da IMPORTÂNCIA delas.",
        ],
        feedbackAcerto: "🧭 Isso mesmo!",
        feedbackErro: "As outras frases são detalhes que explicam a importância das abelhas — a ideia central fala da IMPORTÂNCIA delas.",
        dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “3/5 — No texto das abelhas, qual é a ideia principal?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — No texto do Bolinha, qual frase é um DETALHE (não a ideia principal)?",
        opcoes: [
          "Bolinha salvou a família Ferreira do incêndio",
          "Bolinha é um vira-lata caramelo",
          "Um detalhe pequeno que aparece só uma vez no texto",
          "O bairro todo conhece Bolinha como herói",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Bolinha salvou a família Ferreira do incêndio” não é a resposta. Ser 'vira-lata caramelo' é um detalhe sobre a aparência — não sobre o feito heroico.",
          null,
          "❌ “Um detalhe pequeno que aparece só uma vez no texto” não é a resposta. Ser 'vira-lata caramelo' é um detalhe sobre a aparência — não sobre o feito heroico.",
          "❌ “O bairro todo conhece Bolinha como herói” não é a resposta. Ser 'vira-lata caramelo' é um detalhe sobre a aparência — não sobre o feito heroico.",
        ],
        feedbackAcerto: "🧭 Correto! A cor e a raça são detalhes sobre o cachorro.",
        feedbackErro: "Ser 'vira-lata caramelo' é um detalhe sobre a aparência — não sobre o feito heroico.",
        dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “4/5 — No texto do Bolinha, qual frase é um DETALHE (não a ideia princ…” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Qual pergunta ajuda a encontrar a ideia principal de qualquer texto?",
        opcoes: [
          "'Quantas palavras tem o texto?'",
          "Um detalhe pequeno que aparece só uma vez no texto",
          "'Do que esse texto trata, no geral?'",
          "'Qual a cor da capa?'",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “'Quantas palavras tem o texto?'” não é a resposta. A pergunta certa é sempre: 'do que esse texto trata, no geral?'",
          "❌ “Um detalhe pequeno que aparece só uma vez no texto” não é a resposta. A pergunta certa é sempre: 'do que esse texto trata, no geral?'",
          null,
          "❌ “'Qual a cor da capa?'” não é a resposta. A pergunta certa é sempre: 'do que esse texto trata, no geral?'",
        ],
        feedbackAcerto: "🧭 Isso! Segunda pista do clube resolvida! 🌟",
        feedbackErro: "A pergunta certa é sempre: 'do que esse texto trata, no geral?'",
        dica: "🔎 Pista: lembre do que significa “ideia principal” — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: ideia principal — É o assunto mais importante do texto — aquilo que ele quer contar ou explicar em uma frase. Exemplo: Num texto sobre abelhas, a ideia principal pode ser 'as abelhas ajudam as flores a crescer'. Agora volte à pergunta “5/5 — Qual pergunta ajuda a encontrar a ideia principal de qualquer t…” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caçando a ideia principal em casa",
    materiais: ["Um jornal, revista, embalagem ou cartaz qualquer da casa"],
    passos: [
      "1) Escolham um texto curto de casa (rótulo, cartaz, bilhete, notícia curta).",
      "2) A criança lê e tenta dizer, em UMA frase, qual é a ideia principal.",
      "3) Depois, apontem juntos 2 detalhes do texto que NÃO são a ideia principal.",
      "4) Conversem: como vocês perceberam a diferença?",
    ],
    registro: "🗣️ Registre: 'A ideia principal era ___. Os detalhes eram ___ e ___.'",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
