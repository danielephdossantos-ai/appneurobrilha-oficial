import type { AulaGeoV1 } from "../../types";
import { url as imgCidade } from "@/assets/historia-8ano/u2-cidade-industrial.jpg.asset.json";
import { url as imgCriancas } from "@/assets/historia-8ano/u2-criancas-fabrica.jpg.asset.json";
import { url as imgFabrica } from "@/assets/historia-8ano/u2-fabrica-manchester.jpg.asset.json";
import { url as imgTrem } from "@/assets/historia-8ano/u2-locomotiva-vapor.jpg.asset.json";
import { url as imgTear } from "@/assets/historia-8ano/u2-tear-mecanico.jpg.asset.json";

export const aula02: AulaGeoV1 = {
  slug: "aula-02-circulacao-industrial",
  titulo: "Trilhos do Mundo: Povos, Produtos e Culturas em Movimento",
  iconeTrilha: "🚂",
  bncc: [
    "EF08HI03"
  ],
  duracaoMin: 30,
  estilo: "teen",
  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgTrem,
    imagemDestaqueUrl: imgFabrica,
    aurora: "A máquina a vapor não ficou parada dentro da fábrica. Ela virou TREM e NAVIO — e passou a mover gente, mercadoria e ideia por todo o planeta numa velocidade nunca vista. A Revolução Industrial encolheu o mundo.",
    falaFinal: "Nesta aula você desbloqueia a Engrenagem: Trilhos do Mundo."
  },
  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Trens e navios a vapor ficaram muito mais rápidos e baratos. O que isso mudou na vida das pessoas comuns?",
    pergunta: "Qual foi o principal efeito do transporte a vapor sobre a circulação mundial?",
    fotoUrl: imgTrem,
    opcoes: [
      {
        id: "mig",
        titulo: "MAIS MIGRAÇÃO E COMÉRCIO",
        subtitulo: "povos, produtos e culturas circulam mais",
        emoji: "🌍",
        cor: "from-teal-800 to-slate-950"
      },
      {
        id: "iso",
        titulo: "MAIS ISOLAMENTO",
        subtitulo: "cada região ficou fechada em si mesma",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950"
      },
          { id: "c", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "mig",
    feedbackAcerto: "Correto. Trens e navios a vapor baratearam viagens e fretes: milhões de europeus migraram (inclusive para o Brasil) e produtos industrializados chegaram a todos os continentes.",
    feedbackErro: "Não. O efeito foi o oposto: transporte mais rápido e barato ligou o mundo, aumentando migrações, comércio e trocas culturais.",
    falaFinal: "Ideia-base: vapor + trilhos = mundo conectado (e desigual)."
  },
  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave da circulação industrial.",
    instrucao: "",
    cadernos: [
      {
        id: "ferro",
        capa: "Malha Ferroviária",
        emoji: "🚂",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgTrem,
        conteudo: "MALHA FERROVIÁRIA foi a rede de trilhos que se espalhou pela Europa, América e colônias a partir do século XIX, ligando fábricas, portos e plantações. Reduziu o tempo e o custo de transportar carga e gente.",
        exemplo: "Exemplo: no Brasil, ferrovias como a São Paulo Railway (1867) levavam café do interior paulista até o porto de Santos para exportação."
      },
      {
        id: "mig",
        capa: "Migração em Massa",
        emoji: "🚢",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgCidade,
        conteudo: "MIGRAÇÃO EM MASSA: entre 1850 e 1930, dezenas de milhões de europeus deixaram seus países fugindo da pobreza rural e buscando trabalho nas cidades industriais ou em colônias e ex-colônias como Brasil, EUA e Argentina.",
        exemplo: "Exemplo: imigrantes italianos, alemães e japoneses vieram trabalhar nas lavouras de café paulistas após o fim do tráfico de escravizados."
      },
      {
        id: "merc",
        capa: "Mercado Mundial",
        emoji: "🌐",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgFabrica,
        conteudo: "MERCADO MUNDIAL: com navios a vapor e telégrafo, produtos industrializados (tecidos, ferramentas) passaram a circular globalmente, enquanto matérias-primas (algodão, borracha, café) saíam das colônias para abastecer as fábricas europeias.",
        exemplo: "Exemplo: algodão cultivado no sul dos EUA e na Índia virava tecido nas fábricas de Manchester e voltava como roupa vendida no mundo todo."
      },
      {
        id: "cult",
        capa: "Trocas Culturais",
        emoji: "🎭",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgCriancas,
        conteudo: "TROCAS CULTURAIS: junto com pessoas e mercadorias, viajaram línguas, religiões, costumes alimentares e até doenças. Cidades industriais viraram mosaicos de culturas diferentes vivendo lado a lado, muitas vezes em condições desiguais.",
        exemplo: "Exemplo: bairros de imigrantes como o Bixiga (italianos) e a Liberdade (japoneses) em São Paulo nasceram dessa circulação mundial de pessoas."
      }
    ],
    falaFinal: "Malha Ferroviária + Migração + Mercado Mundial + Trocas Culturais. O planeta virou uma rede."
  },
  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Infográfico dos fluxos que o vapor colocou em movimento. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgTrem,
    pontos: [
      {
        id: "p1",
        x: 20,
        y: 30,
        emoji: "🚂",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgTrem,
        titulo: "TRILHOS",
        texto: "Ferrovias ligaram o interior produtor de matéria-prima aos portos exportadores, integrando regiões inteiras à economia industrial."
      },
      {
        id: "p2",
        x: 50,
        y: 55,
        emoji: "🚢",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgCidade,
        titulo: "NAVIOS A VAPOR",
        texto: "Cruzaram oceanos levando milhões de imigrantes europeus para as Américas e trazendo matérias-primas coloniais para a Europa."
      },
      {
        id: "p3",
        x: 78,
        y: 38,
        emoji: "🏭",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgFabrica,
        titulo: "FÁBRICAS",
        texto: "Consumiam matéria-prima do mundo todo e produziam mercadorias que voltavam a circular globalmente, criando uma cadeia mundial de produção."
      }
    ],
    falaFinal: "Trilhos, navios e fábricas: três engrenagens de uma só máquina mundial."
  },
  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre a circulação industrial.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que impulsionou a migração em massa de europeus para as Américas no século XIX?",
        fotoUrl: imgCidade,
        cards: [
          {
            id: "a",
            emoji: "💰",
            titulo: "Pobreza rural e busca por trabalho",
            cor: "from-teal-600 to-slate-900"
          },
          {
            id: "b",
            emoji: "🏰",
            titulo: "Ordem dos reis europeus",
            cor: "from-amber-600 to-slate-900"
          },
          {
            id: "c",
            emoji: "🎓",
            titulo: "Bolsas de estudo",
            cor: "from-slate-600 to-slate-900"
          },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. A pobreza no campo europeu e a demanda por mão de obra nas Américas geraram ondas de migração.",
        feedbackErro: "É a pobreza rural e a busca por trabalho — a industrialização expulsou camponeses do campo europeu."
      },
      {
        id: "q2",
        pergunta: "O que as ferrovias faziam nas regiões produtoras de matéria-prima (como o interior paulista)?",
        fotoUrl: imgTrem,
        cards: [
          {
            id: "a",
            emoji: "🚂",
            titulo: "Ligavam a produção aos portos exportadores",
            cor: "from-teal-600 to-slate-900"
          },
          {
            id: "b",
            emoji: "🚫",
            titulo: "Isolavam o interior do litoral",
            cor: "from-amber-600 to-slate-900"
          },
          {
            id: "c",
            emoji: "🏛️",
            titulo: "Serviam só para passeios",
            cor: "from-slate-600 to-slate-900"
          },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. As ferrovias escoavam café e outras matérias-primas até os portos para exportação.",
        feedbackErro: "As ferrovias ligavam o interior produtor aos portos exportadores, integrando a economia colonial ao mercado mundial."
      },
      {
        id: "q3",
        pergunta: "O que caracteriza o 'mercado mundial' criado pela industrialização?",
        fotoUrl: imgFabrica,
        cards: [
          {
            id: "a",
            emoji: "🌐",
            titulo: "Matéria-prima colonial vira produto industrial europeu e circula globalmente",
            cor: "from-teal-600 to-slate-900"
          },
          {
            id: "b",
            emoji: "🚫",
            titulo: "Cada país produz só para si mesmo",
            cor: "from-amber-600 to-slate-900"
          },
          {
            id: "c",
            emoji: "⛔",
            titulo: "Fim total do comércio internacional",
            cor: "from-slate-600 to-slate-900"
          },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Algodão, borracha e café saíam das colônias, viravam produto na Europa e voltavam a circular pelo mundo.",
        feedbackErro: "O mercado mundial integrou colônias fornecedoras de matéria-prima às fábricas europeias, criando uma cadeia produtiva global."
      }
    ],
    falaFinal: "Radar afiado. Você já entende como o vapor conectou o planeta."
  },
  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois filtros sobre a circulação industrial. Um mostra quem SAÍA da Europa; outro, o que SAÍA das colônias.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgCidade,
    camadas: [
      {
        id: "pessoas",
        rotulo: "Fluxo de pessoas",
        emoji: "🚢",
        cor: "from-amber-700 to-slate-900",
        rect: {
          x: 10,
          y: 10,
          w: 80,
          h: 40
        },
        descricao: "Milhões de europeus pobres migraram para as Américas, Austrália e colônias em busca de trabalho e terra, mudando a composição de populações inteiras."
      },
      {
        id: "produtos",
        rotulo: "Fluxo de produtos",
        emoji: "📦",
        cor: "from-cyan-700 to-slate-900",
        rect: {
          x: 5,
          y: 55,
          w: 90,
          h: 40
        },
        descricao: "Matérias-primas (algodão, café, borracha) saíam das colônias para as fábricas europeias, que devolviam produtos manufaturados ao mundo todo."
      }
    ],
    falaFinal: "Pessoas indo para um lado, mercadorias indo para outro. Um planeta em rede — e desigual."
  },
  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as etapas da circulação industrial mundial.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Como o mundo ficou conectado pelo vapor",
    paradas: [
      {
        id: "e1",
        emoji: "⚙️",
        rotulo: "1. Máquina a vapor melhora transporte",
        fotoUrl: imgTear,
        descricao: "James Watt aperfeiçoa a máquina a vapor, que passa a mover trens e navios."
      },
      {
        id: "e2",
        emoji: "🚂",
        rotulo: "2. Ferrovias ligam interior e porto",
        fotoUrl: imgTrem,
        descricao: "Trilhos conectam áreas produtoras de matéria-prima aos portos exportadores."
      },
      {
        id: "e3",
        emoji: "🚢",
        rotulo: "3. Navios cruzam oceanos",
        fotoUrl: imgCidade,
        descricao: "Viagens mais rápidas e baratas levam imigrantes e mercadorias entre continentes."
      },
      {
        id: "e4",
        emoji: "🌐",
        rotulo: "4. Nasce o mercado mundial",
        fotoUrl: imgFabrica,
        descricao: "Matéria-prima colonial vira produto industrial e circula pelo planeta todo."
      }
    ],
    ordemCerta: [
      "e1",
      "e2",
      "e3",
      "e4"
    ],
    feedbackAcerto: "Perfeito. Vapor → ferrovias → navios → mercado mundial. A engrenagem completa.",
    feedbackErro: "Essa não é a próxima etapa. Comece pela máquina a vapor e siga a cadeia de transporte.",
    falaFinal: "Quatro etapas. Um mundo cada vez mais ligado — e desigual."
  },
  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página das Engrenagens. Toque nos termos técnicos.",
    tituloLivro: "⚙️ As Engrenagens da Indústria",
    subtitulo: "Página — Trilhos do Mundo",
    paragrafos: [
      {
        id: "p1",
        texto: "A Revolução Industrial não ficou dentro das fábricas inglesas. A máquina a vapor virou locomotiva e navio, criando uma verdadeira MALHA FERROVIÁRIA que encurtou distâncias e baixou o custo de transportar carga e gente pelo mundo.",
        chaves: [
          "Malha Ferroviária"
        ],
        definicoes: {
          "Malha Ferroviária": "Rede de trilhos que ligou áreas produtoras de matéria-prima a portos exportadores no século XIX."
        },
        fotoUrl: imgTrem
      },
      {
        id: "p2",
        texto: "Entre 1850 e 1930, ocorreu uma MIGRAÇÃO EM MASSA: dezenas de milhões de europeus pobres deixaram seus países rumo às Américas, à Austrália e a colônias, atraídos pela promessa de trabalho e terra.",
        chaves: [
          "Migração em Massa"
        ],
        definicoes: {
          "Migração em Massa": "Deslocamento de milhões de pessoas, sobretudo europeias, para outros continentes em busca de trabalho no século XIX."
        },
        fotoUrl: imgCidade
      },
      {
        id: "p3",
        texto: "Ao mesmo tempo, nascia um MERCADO MUNDIAL: matérias-primas como algodão, café e borracha saíam das colônias, viravam produto nas fábricas europeias e voltavam a circular pelo planeta como mercadoria acabada.",
        chaves: [
          "Mercado Mundial"
        ],
        definicoes: {
          "Mercado Mundial": "Rede de trocas econômicas globais criada pela industrialização, ligando colônias fornecedoras de matéria-prima às fábricas europeias."
        },
        fotoUrl: imgFabrica
      },
      {
        id: "p4",
        texto: "Junto com pessoas e mercadorias, viajaram línguas, religiões e costumes: as TROCAS CULTURAIS transformaram cidades inteiras em mosaicos de imigrantes vivendo — muitas vezes em condições muito desiguais — lado a lado.",
        chaves: [
          "Trocas Culturais"
        ],
        definicoes: {
          "Trocas Culturais": "Circulação de costumes, línguas e crenças entre povos, intensificada pela migração industrial."
        },
        fotoUrl: imgCriancas
      }
    ],
    falaFinal: "Leitura concluída. Você já explica como o vapor conectou (e dividiu) o mundo."
  },
  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador. Associe cada fluxo ao seu efeito.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      {
        id: "ferro",
        emoji: "🚂",
        rotulo: "Ferrovia"
      },
      {
        id: "nav",
        emoji: "🚢",
        rotulo: "Navio a vapor"
      },
      {
        id: "merc",
        emoji: "🌐",
        rotulo: "Mercado Mundial"
      }
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "Liga interior a porto exportador",
          emoji: "🚂",
          cor: "from-teal-700 to-slate-900"
        },
        municipioB: {
          nome: "Escoa café e matéria-prima",
          emoji: "☕",
          cor: "from-teal-600 to-slate-900"
        },
        contexto: "Transporte terrestre da produção.",
        pecaCertaId: "ferro",
        feedbackAcerto: "Correto. Isso é a FERROVIA.",
        feedbackErro: "É a ferrovia, que ligava produção e porto."
      },
      {
        id: "r2",
        municipioA: {
          nome: "Leva milhões de imigrantes",
          emoji: "🚢",
          cor: "from-amber-700 to-slate-900"
        },
        municipioB: {
          nome: "Cruza o Atlântico",
          emoji: "🌊",
          cor: "from-amber-600 to-slate-900"
        },
        contexto: "Transporte transoceânico de pessoas.",
        pecaCertaId: "nav",
        feedbackAcerto: "Correto. Isso é o NAVIO A VAPOR.",
        feedbackErro: "É o navio a vapor, que baixou o custo das travessias."
      },
      {
        id: "r3",
        municipioA: {
          nome: "Matéria-prima colonial vira produto europeu",
          emoji: "🌐",
          cor: "from-cyan-700 to-slate-900"
        },
        municipioB: {
          nome: "Circula pelo mundo todo",
          emoji: "📦",
          cor: "from-cyan-600 to-slate-900"
        },
        contexto: "Cadeia econômica global.",
        pecaCertaId: "merc",
        feedbackAcerto: "Correto. Isso é o MERCADO MUNDIAL.",
        feedbackErro: "É o mercado mundial — a rede de trocas criada pela indústria."
      },
      {
        id: "r4",
        municipioA: {
          nome: "São Paulo Railway (1867)",
          emoji: "🚂",
          cor: "from-teal-700 to-slate-900"
        },
        municipioB: {
          nome: "Café até o porto de Santos",
          emoji: "☕",
          cor: "from-teal-600 to-slate-900"
        },
        contexto: "Exemplo brasileiro de ferrovia.",
        pecaCertaId: "ferro",
        feedbackAcerto: "Correto. Ferrovia paulista ligando café e porto.",
        feedbackErro: "É a ferrovia — exemplo real do Brasil imperial."
      },
      {
        id: "r5",
        municipioA: {
          nome: "Imigrantes italianos e japoneses",
          emoji: "🧳",
          cor: "from-amber-700 to-slate-900"
        },
        municipioB: {
          nome: "Chegam de navio ao Brasil",
          emoji: "🚢",
          cor: "from-amber-600 to-slate-900"
        },
        contexto: "Migração para o café paulista.",
        pecaCertaId: "nav",
        feedbackAcerto: "Correto. Chegaram de navio a vapor.",
        feedbackErro: "É o navio a vapor — meio de transporte dos imigrantes."
      },
      {
        id: "r6",
        municipioA: {
          nome: "Algodão indiano vira tecido inglês",
          emoji: "🧵",
          cor: "from-cyan-700 to-slate-900"
        },
        municipioB: {
          nome: "Volta a ser vendido no mundo",
          emoji: "🌍",
          cor: "from-cyan-600 to-slate-900"
        },
        contexto: "Cadeia produtiva global.",
        pecaCertaId: "merc",
        feedbackAcerto: "Correto. Exemplo clássico do mercado mundial.",
        feedbackErro: "É o mercado mundial — matéria-prima colonial, produto europeu."
      }
    ],
    falaFinal: "6 rodadas! Você já associa cada fluxo ao seu efeito global."
  },
  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da circulação industrial. Quem SAÍA da Europa e o que SAÍA das colônias.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgCidade,
    fatias: [
      {
        id: "pessoas",
        rotulo: "Emigrantes europeus (~60 milhões, 1850-1930)",
        emoji: "🚢",
        percentual: 50,
        cor: "#b45309",
        descricao: "Pobreza rural e falta de trabalho empurraram europeus para as Américas, Austrália e colônias.",
        exemplos: [
          "🇮🇹 Italianos",
          "🇩🇪 Alemães",
          "🇯🇵 Japoneses"
        ]
      },
      {
        id: "produtos",
        rotulo: "Matérias-primas coloniais",
        emoji: "📦",
        percentual: 50,
        cor: "#0f766e",
        descricao: "Algodão, café e borracha saíam das colônias para virar produto industrial na Europa e voltar a circular pelo mundo.",
        exemplos: [
          "🌱 Algodão",
          "☕ Café",
          "🌳 Borracha"
        ]
      }
    ],
    falaFinal: "Pessoas de um lado, matéria-prima do outro. Um único mundo — muito desigual."
  },
  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear a Engrenagem Trilhos do Mundo.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgTrem,
    perguntas: [
      {
        id: "av1",
        pergunta: "O que a Revolução Industrial provocou na circulação mundial de povos, produtos e culturas?",
        opcoes: [
          {
            id: "a",
            texto: "Isolou completamente os continentes.",
            correta: false
          },
          {
            id: "b",
            texto: "Intensificou migrações, comércio e trocas culturais globais.",
            correta: true
          },
          {
            id: "c",
            texto: "Acabou com todo tipo de viagem.",
            correta: false
          },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Trens e navios a vapor intensificaram a circulação mundial.",
        feedbackErro: "A Revolução Industrial INTENSIFICOU a circulação de povos, produtos e culturas pelo mundo."
      },
      {
        id: "av2",
        pergunta: "Por que milhões de europeus migraram para as Américas no século XIX?",
        opcoes: [
          {
            id: "a",
            texto: "Pobreza rural e busca por trabalho.",
            correta: true
          },
          {
            id: "b",
            texto: "Ordem direta dos reis.",
            correta: false
          },
          {
            id: "c",
            texto: "Curiosidade turística.",
            correta: false
          },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. A industrialização expulsou camponeses do campo europeu.",
        feedbackErro: "Foi a pobreza rural e a busca por trabalho e terra nas Américas."
      },
      {
        id: "av3",
        pergunta: "O que caracterizava o mercado mundial criado pela indústria?",
        opcoes: [
          {
            id: "a",
            texto: "Matéria-prima colonial virando produto europeu e circulando globalmente.",
            correta: true
          },
          {
            id: "b",
            texto: "Cada região produzindo só para si.",
            correta: false
          },
          {
            id: "c",
            texto: "Fim do comércio entre continentes.",
            correta: false
          },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Essa é a lógica do mercado mundial industrial.",
        feedbackErro: "O mercado mundial ligava colônias fornecedoras de matéria-prima às fábricas europeias."
      }
    ],
    selo: {
      nome: "Trilhos do Mundo",
      subtitulo: "Engrenagem da Circulação Industrial",
      emoji: "🚂",
      cor: "from-teal-500 to-slate-900",
      fotoUrl: imgTrem
    },
    falaFinal: "Engrenagem destravada. O mundo industrial virou uma rede — e você entende como."
  },
  recompensa: {
    xp: 500,
    moedas: 400,
    medalha: "Trilhos do Mundo"
  }
};
