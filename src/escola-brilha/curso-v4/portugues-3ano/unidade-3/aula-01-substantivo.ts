import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";

/**
 * Aula 1 — Substantivo: o nome das coisas
 * -------------------------------------------------------------
 * Primeira missão da Unidade 3 (Frases Sob Suspeita).
 * O Clube dos Detetives aprende que todo relatório de investigação
 * começa nomeando o que foi visto: pessoas, lugares, objetos, animais.
 *
 * Foco pedagógico:
 *  - Reconhecer substantivo como a classe que NOMEIA seres/coisas.
 *  - Diferenciar substantivo comum (qualquer um) de próprio (nome
 *    específico, com maiúscula).
 *  - Perceber singular/plural e o gênero (masculino/feminino) do
 *    substantivo em uso real de frase.
 *
 * BNCC: EF03LP07 (classes de palavras em uso), EF03LP08 (concordância
 * nome/gênero/número), EF35LP12 (pontuação — retomada leve).
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-substantivo",
  titulo: "Substantivo: o nome das coisas",
  iconeTrilha: "🕵️",
  bncc: ["EF03LP07", "EF03LP08"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "O Clube dos Detetives abre um novo caso",
    historia:
      "Brilha vestiu o casaco de detetive e pegou seu binóculo. — Todo bom relatório de investigação começa NOMEANDO o que a gente viu: quem estava lá, em que lugar, com que objeto. Essas palavras que NOMEIAM pessoas, lugares, animais e coisas se chamam SUBSTANTIVOS. Vamos treinar o olhar de detetive?",
    imagemUrl: binoculo,
  },

  momento02_previsao: {
    instrucao:
      "Aurora, a chefe do Clube, deixou um bilhete de investigação na mesa. Leia e imagine do que ele vai tratar.",
    bloco: {
      titulo: "O Bilhete da Rua Sumida",
      capaImagemUrl: mapaPercurso,
      recado: {
        rotulo: "Bilhete do Clube",
        icone: "🔍",
        estilo: "papel",
        linhas: [
          "Caso de hoje:",
          "Um cachorro sumiu perto da escola.",
          "Detetives, anotem TUDO que virem!",
        ],
      },
      pistas: [
        { imagemUrl: cachorro, nome: "Um cachorro" },
        { imagemUrl: escola, nome: "Uma escola" },
      ],
      pergunta: "Sobre o que esse caso vai tratar?",
      hipoteses: [
        { texto: "Um cachorro que sumiu perto da escola.", imagemUrl: cachorro },
        { texto: "Uma receita de bolo de cenoura.", imagemUrl: mapaPercurso },
        { texto: "Uma corrida de bicicletas.", imagemUrl: cidade },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! O bilhete NOMEIA quem sumiu (cachorro) e ONDE (perto da escola) — essas palavras já são pistas de substantivos.",
      feedbackErro:
        "Releia o bilhete: ele fala de um CACHORRO que sumiu perto da ESCOLA. Essas duas palavras nomeiam quem e onde.",
      dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de investigar, conheça as palavras-chave do caso de hoje.",
    cards: [
      {
        palavra: "substantivo",
        explicacao:
          "É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando.",
        exemplo: "Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos.",
        imagemUrl: cachorro,
      },
      {
        palavra: "substantivo próprio",
        explicacao:
          "É o NOME PARTICULAR de alguém ou de um lugar. Sempre começa com letra MAIÚSCULA.",
        exemplo: "Rex é um substantivo próprio: é o nome de UM cachorro específico.",
        imagemUrl: menino,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Comum ou próprio? Singular ou plural?",
    instrucao: "Observe como a mesma ideia muda de forma.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "O cachorro late.",
            explicacao:
              "'Cachorro' é substantivo COMUM: serve pra qualquer cachorro do mundo.",
          },
          {
            texto: "Rex late.",
            explicacao:
              "'Rex' é substantivo PRÓPRIO: é o nome de UM cachorro só, por isso começa com maiúscula.",
          },
          {
            texto: "Os cachorros latem.",
            explicacao:
              "Agora é PLURAL — mais de um cachorro. Repare no 'S' no final da palavra.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o relatório que Brilha escreveu sobre o caso. Preste atenção nas palavras que nomeiam coisas.",
    leitura: {
      titulo: "Relatório do Detetive Brilha",
      imagemUrl: cachorro,
      legendaImagem: "Rex, o cachorro sumido",
      destacar: ["Rex", "praça", "menina", "coleira"],
      paragrafos: [
        "Hoje de manhã, o cachorro Rex sumiu perto da escola. Uma menina chamada Ana viu ele correndo em direção à praça.",
        "Na praça, encontramos uma coleira vermelha perto do banco. A coleira tinha o nome Rex escrito nela.",
        "Ana e Brilha seguiram as pegadas até um jardim, onde Rex estava escondido atrás de uma árvore, com medo do barulho de fogos.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no relatório se precisar. Toda resposta está escrita.",
    perguntas: [
      {
        pergunta: "Qual é o nome do cachorro sumido?",
        opcoes: ["Totó", "Rex", "Bolt"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Rex' é um substantivo PRÓPRIO — o nome desse cachorro.",
        feedbackErro: "O nome está escrito bem no início: 'o cachorro Rex sumiu…'.",
        ondeEstaNoTexto: "…o cachorro Rex sumiu perto da escola.",
        dica: "🔎 Pista: releia no texto o trecho “…o cachorro Rex sumiu perto da escola.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “Qual é o nome do cachorro sumido?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Onde a coleira foi encontrada?",
        opcoes: ["Na escola", "Na praça", "No jardim"],
        correta: 1,
        feedbackAcerto: "🎉 Isso mesmo! 'Praça' é o lugar — um substantivo comum.",
        feedbackErro: "Releia o segundo parágrafo: 'Na praça, encontramos uma coleira…'.",
        ondeEstaNoTexto: "Na praça, encontramos uma coleira vermelha perto do banco.",
        dica: "🔎 Pista: releia no texto o trecho “Na praça, encontramos uma coleira vermelha perto do banco.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “Onde a coleira foi encontrada?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Quem viu Rex correndo primeiro?",
        opcoes: ["A professora", "Ana", "Brilha"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Ana' é um substantivo próprio — o nome da menina.",
        feedbackErro: "No primeiro parágrafo diz: 'Uma menina chamada Ana viu ele correndo'.",
        ondeEstaNoTexto: "Uma menina chamada Ana viu ele correndo em direção à praça.",
        dica: "🔎 Pista: releia no texto o trecho “Uma menina chamada Ana viu ele correndo em direção à praça.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “Quem viu Rex correndo primeiro?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "No relatório, os substantivos nomeiam quem participa e onde tudo acontece.",
    perguntas: [
      {
        pergunta: "Quais substantivos próprios aparecem no relatório?",
        opcoes: ["cachorro e menina", "Rex e Ana", "coleira e praça"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! REX e ANA são nomes específicos — por isso são substantivos PRÓPRIOS, com maiúscula.",
        feedbackErro:
          "Substantivo próprio é o NOME de alguém específico. No texto, aparecem Rex (o cachorro) e Ana (a menina).",
        dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “Quais substantivos próprios aparecem no relatório?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Quais lugares aparecem na investigação?",
        opcoes: [
          "Escola, praça e jardim",
          "Casa e mercado",
          "Praia e floresta",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Certo! Escola, praça e jardim são substantivos comuns que nomeiam os lugares do caso.",
        feedbackErro:
          "Percorra o texto procurando lugares: a busca passa pela ESCOLA, pela PRAÇA e termina no JARDIM.",
        dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “Quais lugares aparecem na investigação?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As pistas do caso embaralharam. Coloque a investigação na ordem certa.",
    bloco: {
      instrucao: "Do início do sumiço até encontrar Rex.",
      itens: [
        { id: "p1", texto: "Rex sumiu perto da escola.", imagemUrl: escola },
        { id: "p2", texto: "Ana viu Rex correndo até a praça.", imagemUrl: menina },
        { id: "p3", texto: "Encontraram Rex escondido no jardim.", imagemUrl: cachorro },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Caso montado! Você seguiu a pista dos substantivos de lugar.",
      feedbackErro:
        "Pense na ordem dos LUGARES citados: primeiro a escola, depois a praça, por último o jardim.",
      dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso, leitura sozinho. Depois responda.",
    leitura: {
      titulo: "O Segundo Caso: a Mochila Trocada",
      imagemUrl: mapaPercurso,
      destacar: ["Pedro", "mochilas", "sala"],
      paragrafos: [
        "Na sala de aula, Pedro pegou a mochila errada sem perceber. As duas mochilas eram azuis e pareciam iguais.",
        "Dentro da mochila, havia um caderno e um lápis que não eram dele. Pedro percebeu e devolveu a mochila certinha para o dono.",
      ],
    },
    perguntas: [
      {
        pergunta: "Onde aconteceu a troca de mochilas?",
        opcoes: ["No parque", "Na sala de aula", "Na praça"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Sala de aula' é o substantivo de lugar do caso.",
        feedbackErro: "A primeira frase diz: 'Na sala de aula, Pedro pegou…'.",
        ondeEstaNoTexto: "Na sala de aula, Pedro pegou a mochila errada.",
        dica: "🔎 Pista: releia no texto o trecho “Na sala de aula, Pedro pegou a mochila errada.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “Onde aconteceu a troca de mochilas?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que havia dentro da mochila trocada?",
        opcoes: ["Um caderno e um lápis", "Uma bola e um livro", "Um lanche e uma garrafa"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! CADERNO e LÁPIS são substantivos comuns — nomeiam objetos.",
        feedbackErro: "Está no segundo parágrafo: 'havia um caderno e um lápis…'.",
        ondeEstaNoTexto: "Dentro da mochila, havia um caderno e um lápis que não eram dele.",
        dica: "🔎 Pista: releia no texto o trecho “Dentro da mochila, havia um caderno e um lápis que não eram dele.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “O que havia dentro da mochila trocada?” com essa ideia na cabeça.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Caça aos Substantivos",
    instrucao: "Arraste cada palavra para o alvo certo: substantivo COMUM ou substantivo PRÓPRIO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Comum ou Próprio?",
      bloco: {
        instrucao: "Leia cada palavra e decida: é o nome de qualquer um (comum) ou de alguém específico (próprio)?",
        itens: [
          { id: "i1", texto: "cachorro", alvoId: "comum" },
          { id: "i2", texto: "Rex", alvoId: "proprio" },
          { id: "i3", texto: "menina", alvoId: "comum" },
          { id: "i4", texto: "Ana", alvoId: "proprio" },
          { id: "i5", texto: "escola", alvoId: "comum" },
          { id: "i6", texto: "Brilha", alvoId: "proprio" },
        ],
        alvos: [
          { id: "comum", nome: "Substantivo Comum", descricao: "Nomeia qualquer um" },
          { id: "proprio", nome: "Substantivo Próprio", descricao: "Nome específico, maiúscula" },
        ],
        feedbackAcerto:
          "🎉 Ótimo trabalho, detetive! Você separou certo os nomes gerais dos nomes específicos.",
        feedbackErro:
          "Dica: se a palavra começa com maiúscula e é o nome de UM só, é PRÓPRIO. Se serve pra qualquer um, é COMUM.",
        dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
      },
    },
  },

  momento_escrita: {
    titulo: "Oficina de Escrita do Detetive",
    instrucao:
      "Três passos de escritor de verdade: primeiro o RASCUNHO, depois a REVISÃO com a lista de conferência e, por último, a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Parágrafo cheio de substantivos",
        comando: "Descreva a sua sala em um parágrafo. Depois, sublinhe (ou escreva no fim) três SUBSTANTIVOS que você usou.",
        linhas: 4,
        modelo: [
          "Na minha sala tem uma mesa grande.",
          "Em cima dela fica o caderno.",
          "A janela mostra a rua.",
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
    titulo: "Leitura de detetive: Relatório do Detetive Brilha",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "Hoje de manhã, o cachorro Rex sumiu perto da escola.",
      "Uma menina chamada Ana viu ele correndo em direção à praça.",
      "Na praça, encontramos uma coleira vermelha perto do banco.",
      "A coleira tinha o nome Rex escrito nela.",
      "Ana e Brilha seguiram as pegadas até um jardim, onde Rex estava escondido atrás de uma árvore, com medo do barulho de fogos.",
    ],
    metaSegundos: 41,
  },

  momento09_revisao: {
    pontos: [
      "SUBSTANTIVO é a palavra que nomeia pessoas, animais, lugares e objetos.",
      "Substantivo COMUM serve pra qualquer um (cachorro, escola, menina).",
      "Substantivo PRÓPRIO é o nome específico e sempre começa com MAIÚSCULA (Rex, Ana, Brilha).",
      "No PLURAL, o substantivo geralmente ganha um 'S' no final (cachorro → cachorros).",
    ],
    miniDesafio: {
      pergunta: "Qual das palavras é um substantivo PRÓPRIO?",
      opcoes: ["gato", "Marte", "cidade"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'Marte' é o nome específico de um planeta — por isso é maiúscula.",
      feedbackErro: "Substantivo próprio é NOME específico, com maiúscula. 'Gato' e 'cidade' servem pra qualquer um.",
      dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “Qual das palavras é um substantivo PRÓPRIO?” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um substantivo?",
        opcoes: [
          "Uma palavra que indica ação, como correr e pular",
          "Uma palavra que nomeia pessoas, lugares, animais ou coisas",
          "Uma palavra que só serve pra contar números",
          "Um sinal de pontuação",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Uma palavra que indica ação, como correr e pular” não é a resposta. Substantivo NOMEIA seres, lugares e coisas — é a base de toda frase.",
          null,
          "❌ “Uma palavra que só serve pra contar números” não é a resposta. Substantivo NOMEIA seres, lugares e coisas — é a base de toda frase.",
          "❌ “Um sinal de pontuação” não é a resposta. Substantivo NOMEIA seres, lugares e coisas — é a base de toda frase.",
        ],
        feedbackAcerto: "🎉 Isso! Substantivo é a palavra que NOMEIA.",
        feedbackErro: "Substantivo NOMEIA seres, lugares e coisas — é a base de toda frase.",
        dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “1/5 — O que é um substantivo?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — Qual é um substantivo PRÓPRIO?",
        opcoes: [
          "cidade",
          "São Paulo",
          "rua",
          "Uma palavra que indica ação, como correr e pular",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “cidade” não é a resposta. Próprio = nome específico com maiúscula. 'São Paulo' nomeia UMA cidade só.",
          null,
          "❌ “rua” não é a resposta. Próprio = nome específico com maiúscula. 'São Paulo' nomeia UMA cidade só.",
          "❌ “Uma palavra que indica ação, como correr e pular” não é a resposta. Próprio = nome específico com maiúscula. 'São Paulo' nomeia UMA cidade só.",
        ],
        feedbackAcerto: "🎉 São Paulo é o nome específico de uma cidade!",
        feedbackErro: "Próprio = nome específico com maiúscula. 'São Paulo' nomeia UMA cidade só.",
        dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “2/5 — Qual é um substantivo PRÓPRIO?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — Qual frase está no PLURAL?",
        opcoes: [
          "O gato dorme.",
          "Os gatos dormem.",
          "A gata dorme.",
          "É preciso decorar o texto inteiro de cor",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “O gato dorme.” não é a resposta. Plural é mais de um. Procure a palavra com 'S' no final: gatoS.",
          null,
          "❌ “A gata dorme.” não é a resposta. Plural é mais de um. Procure a palavra com 'S' no final: gatoS.",
          "❌ “É preciso decorar o texto inteiro de cor” não é a resposta. Plural é mais de um. Procure a palavra com 'S' no final: gatoS.",
        ],
        feedbackAcerto: "🎉 'Gatos' com S indica mais de um gato — plural!",
        feedbackErro: "Plural é mais de um. Procure a palavra com 'S' no final: gatoS.",
        dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “3/5 — Qual frase está no PLURAL?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — No relatório do Caso do Cachorro, qual é o substantivo comum?",
        opcoes: [
          "Rex",
          "Ana",
          "Uma palavra que indica ação, como correr e pular",
          "praça",
        ],
        correta: 3,
        feedbackOpcoes: [
          "❌ “Rex” não é a resposta. Rex e Ana são nomes específicos (próprios). 'Praça' serve pra qualquer praça — é comum.",
          "❌ “Ana” não é a resposta. Rex e Ana são nomes específicos (próprios). 'Praça' serve pra qualquer praça — é comum.",
          "❌ “Uma palavra que indica ação, como correr e pular” não é a resposta. Rex e Ana são nomes específicos (próprios). 'Praça' serve pra qualquer praça — é comum.",
          null,
        ],
        feedbackAcerto: "🎉 'Praça' é substantivo comum — nomeia um tipo de lugar, não um lugar específico com nome próprio.",
        feedbackErro: "Rex e Ana são nomes específicos (próprios). 'Praça' serve pra qualquer praça — é comum.",
        dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “4/5 — No relatório do Caso do Cachorro, qual é o substantivo comum?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Complete: substantivos nomeiam...",
        opcoes: [
          "Só pessoas",
          "Pessoas, animais, lugares, objetos e sentimentos",
          "Uma palavra que indica ação, como correr e pular",
          "Só ações",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Só pessoas” não é a resposta. Substantivo nomeia bem mais que pessoas: animais, lugares, objetos e até sentimentos (alegria, medo).",
          null,
          "❌ “Uma palavra que indica ação, como correr e pular” não é a resposta. Substantivo nomeia bem mais que pessoas: animais, lugares, objetos e até sentimentos (alegria, medo).",
          "❌ “Só ações” não é a resposta. Substantivo nomeia bem mais que pessoas: animais, lugares, objetos e até sentimentos (alegria, medo).",
        ],
        feedbackAcerto: "🎉 Isso! Substantivo é a classe de palavra mais ampla — nomeia quase tudo que existe.",
        feedbackErro: "Substantivo nomeia bem mais que pessoas: animais, lugares, objetos e até sentimentos (alegria, medo).",
        dica: "🔎 Pista: lembre do que significa “substantivo” — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: substantivo — É a palavra que dá NOME a pessoas, animais, lugares, objetos ou sentimentos. Sem substantivo, ninguém sabe do que estamos falando. Exemplo: Em 'O cachorro correu no parque', CACHORRO e PARQUE são substantivos. Agora volte à pergunta “5/5 — Complete: substantivos nomeiam...” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça aos Substantivos em Casa",
    materiais: ["Papel e lápis", "Um cômodo da casa"],
    passos: [
      "1) Escolha um cômodo (sala, cozinha, quarto).",
      "2) Anote 5 substantivos COMUNS que você vê ali (mesa, sofá, prato...).",
      "3) Anote 2 substantivos PRÓPRIOS de pessoas da família (nomes com maiúscula).",
      "4) Conte pra alguém: qual é comum e qual é próprio, e por quê.",
    ],
    registro: "📝 Uma lista escrita com os substantivos separados em duas colunas: Comum e Próprio.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
