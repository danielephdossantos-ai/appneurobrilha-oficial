import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as quadro } from "@/assets/neuro-treino/objetos/quadro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";

/**
 * Aula 2 — Parágrafo: cada ideia no seu lugar
 * BNCC: EF03LP24, EF35LP07
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-paragrafo",
  titulo: "Parágrafo: cada ideia no seu lugar",
  iconeTrilha: "📐",
  bncc: ["EF03LP24", "EF35LP07"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "A gaveta bagunçada",
    historia:
      "Aurora mostrou ao clube uma gaveta com meias, lápis e chaves tudo misturado. — Difícil achar algo aqui, né? Um texto sem parágrafos é assim: tudo junto, difícil de entender. Cada parágrafo é como uma gavetinha separada, com só UMA ideia dentro. Vamos aprender a organizar?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe este pedaço de texto sem divisão nenhuma. O que você acha que vai acontecer quando organizarmos em parágrafos?",
    bloco: {
      titulo: "O Texto Sem Gavetas",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: lapis, nome: "Um lápis" },
        { imagemUrl: quadro, nome: "Um quadro de aula" },
      ],
      pergunta: "Separar um texto em parágrafos vai deixá-lo…",
      hipoteses: [
        { texto: "Mais confuso, porque quebra as frases." },
        { texto: "Mais fácil de ler, porque cada ideia fica no seu lugar." },
        { texto: "Do mesmo jeito, não muda nada." },
      ],
      respostaCerta: 1,
      feedbackAcerto: "📐 Isso! Parágrafos organizam as ideias e ajudam o leitor a acompanhar o texto sem se perder.",
      feedbackErro: "Pense na gaveta bagunçada: separar em partes sempre ajuda a ENCONTRAR e ENTENDER melhor.",
      dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras para organizar bem um texto.",
    cards: [
      {
        palavra: "parágrafo",
        explicacao: "É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha.",
        exemplo: "Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história.",
        imagemUrl: papel,
      },
      {
        palavra: "recuo",
        explicacao: "É o espaço em branco no começo da primeira linha de um parágrafo, avisando 'aqui começa uma ideia nova'.",
        exemplo: "Ao mudar de assunto, o escritor deixa um recuo e começa outro parágrafo.",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Quando mudar de parágrafo?",
    instrucao: "Veja as três situações mais comuns para começar um parágrafo novo.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Quando muda o TEMPO da história (antes → depois, de manhã → à noite).", explicacao: "Cada 'momento' pode virar um novo parágrafo." },
          { texto: "Quando muda o LUGAR onde a cena acontece.", explicacao: "Se a cena vai da sala para o quintal, é hora de novo parágrafo." },
          { texto: "Quando entra uma ideia ou ação NOVA e diferente da anterior.", explicacao: "Uma ideia por parágrafo deixa o texto mais claro." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia e repare como cada parágrafo cuida de UMA parte da história.",
    leitura: {
      titulo: "O Dia da Feira de Ciências",
      imagemUrl: menina,
      legendaImagem: "Laura organizando seu experimento",
      destacar: ["De manhã", "Na hora da apresentação", "No fim do dia"],
      paragrafos: [
        "De manhã, Laura chegou cedo à escola carregando sua mochila cheia de materiais para o experimento de vulcão.",
        "Na hora da apresentação, ela explicou como o bicarbonato e o vinagre reagiam, e todos os colegas se aproximaram para ver a espuma sair.",
        "No fim do dia, a professora entregou um certificado para Laura, que voltou para casa orgulhosa do trabalho.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      { pergunta: "O que Laura levou na mochila?", opcoes: ["Livros", "Materiais para o experimento", "Roupa de ginástica"], correta: 1, feedbackAcerto: "📐 Isso! 'materiais para o experimento de vulcão'.", feedbackErro: "A resposta está no primeiro parágrafo.", ondeEstaNoTexto: "…carregando sua mochila cheia de materiais para o experimento de vulcão.",
        dica: "🔎 Pista: releia no texto o trecho “…carregando sua mochila cheia de materiais para o experimento de vulcão.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “O que Laura levou na mochila?” com essa ideia na cabeça.",
      },
      { pergunta: "O que aconteceu quando ela misturou os ingredientes?", opcoes: ["Nada aconteceu", "Saiu espuma", "O vulcão quebrou"], correta: 1, feedbackAcerto: "📐 Isso! Saiu espuma da reação.", feedbackErro: "Está no segundo parágrafo, no final.", ondeEstaNoTexto: "…todos os colegas se aproximaram para ver a espuma sair.",
        dica: "🔎 Pista: releia no texto o trecho “…todos os colegas se aproximaram para ver a espuma sair.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “O que aconteceu quando ela misturou os ingredientes?” com essa ideia na cabeça.",
      },
      { pergunta: "O que Laura recebeu no fim do dia?", opcoes: ["Um certificado", "Um prêmio em dinheiro", "Uma medalha de ouro"], correta: 0, feedbackAcerto: "📐 Correto! Um certificado.", feedbackErro: "Está no último parágrafo.", ondeEstaNoTexto: "…a professora entregou um certificado para Laura…",
        dica: "🔎 Pista: releia no texto o trecho “…a professora entregou um certificado para Laura…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “O que Laura recebeu no fim do dia?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora observe como cada parágrafo trata de um MOMENTO diferente.",
    perguntas: [
      { pergunta: "Por que o texto tem 3 parágrafos e não só 1?", opcoes: ["Porque sim, sem motivo", "Porque cada parágrafo mostra um momento diferente do dia", "Porque cada parágrafo é sobre uma pessoa diferente"], correta: 1, feedbackAcerto: "📐 Isso! Manhã, apresentação e fim do dia — três momentos, três parágrafos.", feedbackErro: "Repare nas palavras 'De manhã', 'Na hora da apresentação' e 'No fim do dia' — cada uma abre um parágrafo novo.",
        dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “Por que o texto tem 3 parágrafos e não só 1?” com essa ideia na cabeça.",
      },
      { pergunta: "Se juntássemos os 3 parágrafos em um só, sem nenhuma pausa, o texto ficaria…", opcoes: ["Mais fácil de entender", "Mais difícil de acompanhar", "Exatamente igual"], correta: 1, feedbackAcerto: "📐 Exato! Sem divisão, as ideias se misturam e o leitor se perde.", feedbackErro: "Pense na gaveta bagunçada — tudo junto fica mais difícil de encontrar.",
        dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “Se juntássemos os 3 parágrafos em um só, sem nenhuma pausa, o texto f…” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os parágrafos na ordem certa da história.",
    bloco: {
      instrucao: "Do primeiro momento ao último.",
      itens: [
        { id: "p1", texto: "De manhã, Laura chega à escola com os materiais.", imagemUrl: mochila },
        { id: "p2", texto: "Na apresentação, o vulcão faz espuma e os colegas se encantam.", imagemUrl: quadro },
        { id: "p3", texto: "No fim do dia, Laura recebe o certificado.", imagemUrl: papel },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "📐 Perfeito! Cada parágrafo no seu lugar, seguindo o tempo da história.",
      feedbackErro: "Pense na ordem do dia: manhã → apresentação → fim do dia.",
      dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e observe os parágrafos.",
    leitura: {
      titulo: "A Mudança de Casa",
      imagemUrl: casa,
      destacar: ["Na semana passada", "No dia da mudança", "Depois de duas semanas"],
      paragrafos: [
        "Na semana passada, a família de Ana embalou todas as caixas para a mudança.",
        "No dia da mudança, o caminhão chegou cedo e todos ajudaram a carregar os móveis.",
        "Depois de duas semanas, Ana já tinha feito amigos novos na vizinhança e não sentia mais tanta saudade da casa antiga.",
      ],
    },
    perguntas: [
      { pergunta: "Quantos parágrafos tem o texto?", opcoes: ["Um", "Dois", "Três"], correta: 2, feedbackAcerto: "📐 Isso! São três momentos, três parágrafos.", feedbackErro: "Conte: 'Na semana passada', 'No dia da mudança' e 'Depois de duas semanas' — três marcadores de tempo.",
        dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “Quantos parágrafos tem o texto?” com essa ideia na cabeça.",
      },
      { pergunta: "O que muda de um parágrafo para o outro?", opcoes: ["O nome da personagem", "O momento no tempo", "Nada muda"], correta: 1, feedbackAcerto: "📐 Exato! Cada parágrafo mostra um momento diferente.", feedbackErro: "Repare nas expressões de tempo no começo de cada parágrafo.",
        dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “O que muda de um parágrafo para o outro?” com essa ideia na cabeça.",
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
        titulo: "Dois parágrafos, duas ideias",
        comando: "Escreva DOIS parágrafos sobre o mesmo assunto: no primeiro, conte o que aconteceu; no segundo, diga o que você achou. Não esqueça de pular linha.",
        linhas: 4,
        modelo: [
          "No recreio começou a chover forte.",
          "",
          "Eu gostei, porque brincamos dentro da sala.",
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

  momento09_revisao: {
    pontos: [
      "Parágrafo é um bloco de texto com UMA ideia principal.",
      "Mude de parágrafo quando mudar o TEMPO, o LUGAR ou entrar uma ideia nova.",
      "O recuo no início avisa o leitor: 'aqui começa uma nova parte'.",
      "Texto bem dividido em parágrafos é mais fácil de ler e entender.",
    ],
    miniDesafio: {
      pergunta: "Você está escrevendo sobre um passeio: 'fomos ao parque' e depois 'fomos ao sorveteria'. Isso deve ser…",
      opcoes: ["O mesmo parágrafo", "Dois parágrafos diferentes, um pra cada lugar", "Não precisa de parágrafo"],
      correta: 1,
      feedbackAcerto: "📐 Isso! Mudou o lugar, muda o parágrafo.",
      feedbackErro: "Lembre-se: quando muda o LUGAR da cena, é hora de um parágrafo novo.",
      dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “Você está escrevendo sobre um passeio: 'fomos ao parque' e depois 'fo…” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/5 — O que é um parágrafo?", opcoes: [
          "Uma letra maiúscula",
          "Um bloco de texto com uma ideia principal",
          "Começar cada frase nova em uma linha, sempre",
          "O título do texto",
        ], correta: 1,
        feedbackOpcoes: [
          "❌ “Uma letra maiúscula” não é a resposta. Parágrafo é um bloco de texto com UMA ideia central.",
          null,
          "❌ “Começar cada frase nova em uma linha, sempre” não é a resposta. Parágrafo é um bloco de texto com UMA ideia central.",
          "❌ “O título do texto” não é a resposta. Parágrafo é um bloco de texto com UMA ideia central.",
        ], feedbackAcerto: "📐 Isso!", feedbackErro: "Parágrafo é um bloco de texto com UMA ideia central.",
        dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “1/5 — O que é um parágrafo?” com essa ideia na cabeça.",
      },
      { pergunta: "2/5 — Quando devemos começar um novo parágrafo?", opcoes: [
          "A cada palavra nova",
          "Quando muda o tempo, o lugar ou a ideia",
          "Começar cada frase nova em uma linha, sempre",
          "Nunca",
        ], correta: 1,
        feedbackOpcoes: [
          "❌ “A cada palavra nova” não é a resposta. Mude de parágrafo quando algo importante mudar: tempo, lugar ou ideia.",
          null,
          "❌ “Começar cada frase nova em uma linha, sempre” não é a resposta. Mude de parágrafo quando algo importante mudar: tempo, lugar ou ideia.",
          "❌ “Nunca” não é a resposta. Mude de parágrafo quando algo importante mudar: tempo, lugar ou ideia.",
        ], feedbackAcerto: "📐 Correto!", feedbackErro: "Mude de parágrafo quando algo importante mudar: tempo, lugar ou ideia.",
        dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “2/5 — Quando devemos começar um novo parágrafo?” com essa ideia na cabeça.",
      },
      { pergunta: "3/5 — O que é o 'recuo' do parágrafo?", opcoes: [
          "Começar cada frase nova em uma linha, sempre",
          "Um desenho",
          "O espaço em branco no início da linha",
          "Uma cor diferente",
        ], correta: 2,
        feedbackOpcoes: [
          "❌ “Começar cada frase nova em uma linha, sempre” não é a resposta. Recuo é o espacinho deixado no começo da primeira linha do parágrafo.",
          "❌ “Um desenho” não é a resposta. Recuo é o espacinho deixado no começo da primeira linha do parágrafo.",
          null,
          "❌ “Uma cor diferente” não é a resposta. Recuo é o espacinho deixado no começo da primeira linha do parágrafo.",
        ], feedbackAcerto: "📐 Isso!", feedbackErro: "Recuo é o espacinho deixado no começo da primeira linha do parágrafo.",
        dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “3/5 — O que é o 'recuo' do parágrafo?” com essa ideia na cabeça.",
      },
      { pergunta: "4/5 — Um texto sem nenhuma divisão em parágrafos fica…", opcoes: [
          "Mais claro",
          "Começar cada frase nova em uma linha, sempre",
          "Mais difícil de entender",
          "Igualzinho",
        ], correta: 2,
        feedbackOpcoes: [
          "❌ “Mais claro” não é a resposta. Sem parágrafos, as ideias se misturam e o texto fica confuso.",
          "❌ “Começar cada frase nova em uma linha, sempre” não é a resposta. Sem parágrafos, as ideias se misturam e o texto fica confuso.",
          null,
          "❌ “Igualzinho” não é a resposta. Sem parágrafos, as ideias se misturam e o texto fica confuso.",
        ], feedbackAcerto: "📐 Exato!", feedbackErro: "Sem parágrafos, as ideias se misturam e o texto fica confuso.",
        dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “4/5 — Um texto sem nenhuma divisão em parágrafos fica…” com essa ideia na cabeça.",
      },
      { pergunta: "5/5 — No texto 'A Mudança de Casa', por que existem três parágrafos?", opcoes: [
          "Porque cada um mostra um momento diferente",
          "Porque sim",
          "Porque tem três personagens",
          "Começar cada frase nova em uma linha, sempre",
        ], correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Porque sim” não é a resposta. Cada parágrafo trata de um momento diferente: antes, durante e depois da mudança.",
          "❌ “Porque tem três personagens” não é a resposta. Cada parágrafo trata de um momento diferente: antes, durante e depois da mudança.",
          "❌ “Começar cada frase nova em uma linha, sempre” não é a resposta. Cada parágrafo trata de um momento diferente: antes, durante e depois da mudança.",
        ], feedbackAcerto: "📐 Isso mesmo! Você dominou os parágrafos. 🌟", feedbackErro: "Cada parágrafo trata de um momento diferente: antes, durante e depois da mudança.",
        dica: "🔎 Pista: lembre do que significa “parágrafo” — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: parágrafo — É um bloco de texto que trata de UMA ideia principal. Começa com um espacinho (recuo) na primeira linha. Exemplo: Um parágrafo pode falar só sobre 'o que aconteceu de manhã' na história. Agora volte à pergunta “5/5 — No texto 'A Mudança de Casa', por que existem três parágrafos?” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: organizando um texto em parágrafos",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Escolham um fato do dia (café da manhã, escola, brincadeira à noite).",
      "2) Escrevam 3 frases, uma pra cada momento do dia.",
      "3) Transformem cada frase num parágrafo pequeno, deixando o recuo no início.",
      "4) Leiam em voz alta e conversem: ficou mais fácil de entender?",
    ],
    registro: "🗣️ Fotografem ou registrem o texto com os 3 parágrafos organizados.",
  },

  recompensa: { xp: 120, moedas: 70 },
};
