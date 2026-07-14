import type { AulaGeoV1 } from "../../types";
import { url as imgLuzia } from "@/assets/historia-6ano/u2-luzia-cranio.jpg.asset.json";
import { url as imgCapivara } from "@/assets/historia-6ano/u2-pintura-rupestre-capivara.jpg.asset.json";
import { url as imgBering } from "@/assets/historia-6ano/u2-bering.jpg.asset.json";
import { url as imgPedra } from "@/assets/historia-6ano/u2-pedra-lascada.jpg.asset.json";
import { url as imgEvolucao } from "@/assets/historia-6ano/u2-infografico-evolucao.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-evolucao-humana",
  titulo: "Evolução Humana e Povoamento das Américas",
  iconeTrilha: "🦴",
  bncc: ["EF06HI03", "EF06HI04"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgLuzia,
    imagemDestaqueUrl: imgEvolucao,
    aurora:
      "Este crânio tem 11 mil anos e foi encontrado em Lagoa Santa, Minas Gerais. É LUZIA — o esqueleto humano mais antigo já achado nas Américas. Ela é evidência FÍSICA de que gente vive por aqui muito antes do que a escola tradicional contava.",
    falaFinal:
      "Nesta aula você desbloqueia o Fragmento 2 do Códice: O Fragmento do Crânio Ancestral.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Cientistas do mundo todo debatem: como o ser humano chegou às Américas? Duas hipóteses principais competem — uma travou como consenso por décadas, a outra ganhou força com novas evidências.",
    pergunta: "Por onde os humanos entraram nas Américas?",
    fotoUrl: imgBering,
    opcoes: [
      {
        id: "bering",
        titulo: "ESTREITO DE BERING",
        subtitulo: "cruzando gelo entre Ásia e Alasca, há ~15-30 mil anos",
        emoji: "🧊",
        cor: "from-cyan-800 to-slate-950",
      },
      {
        id: "sozinho",
        titulo: "SURGIRAM AQUI SOZINHOS",
        subtitulo: "evoluíram nas Américas do zero",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "bering",
    feedbackAcerto:
      "Correto. A hipótese mais aceita: migração pelo ESTREITO DE BERING durante a última glaciação. Novas descobertas sugerem também rotas costeiras marítimas.",
    feedbackErro:
      "Não. A espécie Homo sapiens surgiu na ÁFRICA. Nas Américas, a evidência genética e arqueológica mostra CHEGADA vinda da Ásia, principalmente pelo Estreito de Bering.",
    falaFinal:
      "Guarde: humanos evoluíram na ÁFRICA e MIGRARAM pra todos os continentes.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave da pré-história e do povoamento americano.",
    instrucao: "",
    cadernos: [
      {
        id: "hominideo",
        capa: "Hominídeo",
        emoji: "🦴",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgLuzia,
        conteudo:
          "HOMINÍDEO é o grupo de primatas que inclui os humanos modernos e seus ancestrais bípedes. Australopithecus, Homo habilis, Homo erectus, Homo neanderthalensis e Homo sapiens são todos hominídeos.",
        exemplo:
          "Exemplo: LUCY, achada na Etiópia em 1974, é um Australopithecus afarensis de 3,2 milhões de anos — já andava em duas pernas.",
      },
      {
        id: "paleolitico",
        capa: "Paleolítico",
        emoji: "🪨",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgPedra,
        conteudo:
          "PALEOLÍTICO é o período mais longo da pré-história (~2,5 milhões – 10 mil a.C.). Marcado por pedra LASCADA, caça, coleta e vida nômade em pequenos grupos.",
        exemplo:
          "Exemplo: as ferramentas de pedra lascada de Olduvai (África) e as pinturas rupestres da Serra da Capivara (Piauí) são do Paleolítico.",
      },
      {
        id: "neolitico",
        capa: "Neolítico",
        emoji: "🌾",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgPedra,
        conteudo:
          "NEOLÍTICO (~10 mil – 4 mil a.C.) é a REVOLUÇÃO AGRÍCOLA: humanos domesticaram plantas e animais, viraram sedentários, criaram aldeias, cerâmica e tecelagem.",
        exemplo:
          "Exemplo: a agricultura surgiu independentemente em vários lugares — Crescente Fértil (trigo), China (arroz), Mesoamérica (milho), Andes (batata).",
      },
      {
        id: "bering",
        capa: "Estreito de Bering",
        emoji: "🧊",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgBering,
        conteudo:
          "ESTREITO DE BERING é o canal entre Ásia (Sibéria) e América (Alasca). Na última glaciação, o nível do mar caiu tanto que virou uma PONTE DE TERRA — a Beríngia — permitindo migração humana.",
        exemplo:
          "Exemplo: rastros de pegadas humanas de 23 mil anos no Novo México e o sítio de Monte Verde no Chile (~14.500 anos) confirmam essa chegada antiga.",
      },
    ],
    falaFinal:
      "Hominídeo + Paleolítico + Neolítico + Bering. Base pra entender a origem da humanidade e a chegada às Américas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico oficial da evolução humana. Toque nas etapas pra ver o que cada espécie fez de novo.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgEvolucao,
    pontos: [
      {
        id: "aus",
        x: 20,
        y: 60,
        emoji: "🦧",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgLuzia,
        titulo: "1. AUSTRALOPITHECUS",
        texto:
          "Há ~4 milhões de anos, na África. Bípede (anda em duas pernas), cérebro pequeno. Lucy é o exemplar mais famoso.",
      },
      {
        id: "hab",
        x: 40,
        y: 55,
        emoji: "🪨",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgPedra,
        titulo: "2. HOMO HABILIS",
        texto:
          "Há ~2,3 milhões de anos. Primeiro a fabricar FERRAMENTAS de pedra lascada. Nome significa 'homem habilidoso'.",
      },
      {
        id: "ere",
        x: 60,
        y: 50,
        emoji: "🔥",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgPedra,
        titulo: "3. HOMO ERECTUS",
        texto:
          "Há ~1,8 milhão de anos. Dominou o FOGO, migrou da África pra Ásia e Europa. Primeiro grande viajante da história.",
      },
      {
        id: "sap",
        x: 80,
        y: 40,
        emoji: "🧠",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgCapivara,
        titulo: "4. HOMO SAPIENS",
        texto:
          "Há ~300 mil anos, na África. Nós. Cérebro grande, linguagem simbólica, arte, migração global. Chegou às Américas há ~15-30 mil anos.",
      },
    ],
    falaFinal:
      "Evolução NÃO é linha reta. Várias espécies humanas conviveram — sapiens é a única que sobrou.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de investigador.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Em qual continente surgiu a espécie Homo sapiens?",
        fotoUrl: imgEvolucao,
        cards: [
          { id: "a", emoji: "🌍", titulo: "África", cor: "from-teal-600 to-slate-900" },
          { id: "e", emoji: "🌎", titulo: "América", cor: "from-amber-600 to-slate-900" },
          { id: "eu", emoji: "🌐", titulo: "Europa", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto:
          "Correto. Homo sapiens surgiu na ÁFRICA há ~300 mil anos e depois migrou pro mundo todo.",
        feedbackErro:
          "É ÁFRICA. Fósseis mais antigos de sapiens estão em Jebel Irhoud (Marrocos) e Omo Kibish (Etiópia).",
      },
      {
        id: "q2",
        pergunta: "Quem é LUZIA?",
        fotoUrl: imgLuzia,
        cards: [
          {
            id: "b",
            emoji: "🦴",
            titulo: "Crânio humano de 11 mil anos, achado no Brasil",
            cor: "from-teal-600 to-slate-900",
          },
          {
            id: "r",
            emoji: "👑",
            titulo: "Rainha do Egito antigo",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "d",
            emoji: "🦖",
            titulo: "Um dinossauro brasileiro",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "b",
        feedbackAcerto:
          "Correto. Luzia é o esqueleto humano mais antigo das Américas, achado em Lagoa Santa (MG).",
        feedbackErro:
          "Luzia é o esqueleto de uma mulher de ~11 mil anos, achado em Minas Gerais.",
      },
      {
        id: "q3",
        pergunta: "Qual foi a grande MUDANÇA do período Neolítico?",
        fotoUrl: imgPedra,
        cards: [
          {
            id: "a",
            emoji: "🌾",
            titulo: "Agricultura e vida sedentária",
            cor: "from-teal-600 to-slate-900",
          },
          {
            id: "n",
            emoji: "🏰",
            titulo: "Invenção dos castelos",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "i",
            emoji: "💻",
            titulo: "Invenção da internet",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "a",
        feedbackAcerto:
          "Correto. REVOLUÇÃO AGRÍCOLA: plantar, criar animais, morar em aldeias. Mudou tudo.",
        feedbackErro:
          "Foi a AGRICULTURA. Os humanos deixaram de ser só nômades caçadores e viraram sedentários.",
      },
    ],
    falaFinal: "Radar afiado. Você já pensa em ESCALA de milênios.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre a rota de migração global do Homo sapiens.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgEvolucao,
    camadas: [
      {
        id: "africa",
        rotulo: "Origem: África",
        emoji: "🌍",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 0, y: 30, w: 40, h: 60 },
        descricao:
          "Todos os humanos vivos descendem de populações africanas de ~300 mil anos atrás. A genética confirma: somos TODOS parentes distantes.",
      },
      {
        id: "migracao",
        rotulo: "Migração global",
        emoji: "➡️",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 40, y: 20, w: 60, h: 70 },
        descricao:
          "Ondas migratórias: África → Oriente Médio → Ásia → Europa → Austrália → Américas. Cada onda deixou vestígios genéticos e culturais.",
      },
    ],
    falaFinal: "África é o berço. O resto do mundo é a rota.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo da evolução humana, da espécie mais antiga à mais recente.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Linha do tempo humana",
    paradas: [
      {
        id: "aus",
        emoji: "🦧",
        rotulo: "1. Australopithecus",
        fotoUrl: imgLuzia,
        descricao: "~4 milhões de anos — bípede primitivo, África.",
      },
      {
        id: "hab",
        emoji: "🪨",
        rotulo: "2. Homo habilis",
        fotoUrl: imgPedra,
        descricao: "~2,3 milhões — primeiras ferramentas de pedra.",
      },
      {
        id: "ere",
        emoji: "🔥",
        rotulo: "3. Homo erectus",
        fotoUrl: imgPedra,
        descricao: "~1,8 milhão — domínio do fogo, saiu da África.",
      },
      {
        id: "sap",
        emoji: "🧠",
        rotulo: "4. Homo sapiens",
        fotoUrl: imgCapivara,
        descricao: "~300 mil — linguagem, arte, migração global.",
      },
    ],
    ordemCerta: ["aus", "hab", "ere", "sap"],
    feedbackAcerto:
      "Perfeito. Bípede → ferramentas → fogo → linguagem simbólica. Evolução em degraus.",
    feedbackErro:
      "Essa não é a próxima. Pense na ordem dos milhões de anos.",
    falaFinal:
      "Cada degrau novo trouxe uma capacidade nova. Nós somos o último degrau — por enquanto.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Fragmento 2 do Códice. Toque nos termos técnicos pra ver a definição.",
    tituloLivro: "📜 Códice dos Impérios Perdidos",
    subtitulo: "Fragmento 2 — O Crânio Ancestral",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A EVOLUÇÃO HUMANA não é uma linha reta. Várias espécies HOMINÍDEAS conviveram por milhões de anos na África. Nossa espécie, HOMO SAPIENS, surgiu há cerca de 300 mil anos e é a única que restou.",
        chaves: ["Hominídeas", "Homo Sapiens"],
        definicoes: {
          Hominídeas:
            "Grupo de primatas bípedes que inclui todos os ancestrais e parentes evolutivos dos humanos.",
          "Homo Sapiens":
            "Nossa espécie. Nome significa 'homem sábio'. Cérebro grande, linguagem simbólica, arte.",
        },
        fotoUrl: imgLuzia,
      },
      {
        id: "p2",
        texto:
          "No período PALEOLÍTICO os humanos eram nômades, caçavam, coletavam frutos e fabricavam ferramentas de PEDRA LASCADA. Na Serra da Capivara (Piauí), pinturas rupestres registram cenas de caça e rituais de milhares de anos.",
        chaves: ["Paleolítico"],
        definicoes: {
          Paleolítico:
            "Período mais longo da pré-história (2,5 milhões – 10 mil a.C.). Pedra lascada, caça, coleta, nomadismo.",
        },
        fotoUrl: imgCapivara,
      },
      {
        id: "p3",
        texto:
          "No NEOLÍTICO houve a REVOLUÇÃO AGRÍCOLA: humanos aprenderam a plantar e criar animais. Passaram a viver em aldeias fixas, criaram cerâmica, tecelagem — e as primeiras desigualdades sociais.",
        chaves: ["Neolítico", "Revolução Agrícola"],
        definicoes: {
          Neolítico:
            "~10 mil – 4 mil a.C. Pedra polida, agricultura, sedentarismo, cerâmica.",
          "Revolução Agrícola":
            "Domesticação de plantas e animais. Marcou a passagem do nomadismo ao sedentarismo.",
        },
        fotoUrl: imgPedra,
      },
      {
        id: "p4",
        texto:
          "Nas Américas, o povoamento aconteceu principalmente pelo ESTREITO DE BERING, há 15 a 30 mil anos. LUZIA, achada em Minas Gerais, tem 11 mil anos e é a evidência mais antiga de humanos no Brasil.",
        chaves: ["Estreito de Bering"],
        definicoes: {
          "Estreito de Bering":
            "Canal entre Sibéria (Ásia) e Alasca (América). Durante a glaciação virou ponte de terra usada pelos primeiros americanos.",
        },
        fotoUrl: imgBering,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já defende, com evidência, por que somos AFRICANOS por origem — e por que os primeiros brasileiros chegaram há mais de 11 mil anos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de paleoantropólogo. Classifique cada vestígio em PALEOLÍTICO ou NEOLÍTICO.",
    instrucao: "⏱️ Toque no período correto",
    duracaoSegundos: 22,
    pecas: [
      { id: "pa", emoji: "🪨", rotulo: "Paleolítico" },
      { id: "ne", emoji: "🌾", rotulo: "Neolítico" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Pedra lascada de 50 mil anos", emoji: "🪨", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Ferramenta primitiva", emoji: "⚒️", cor: "from-teal-600 to-slate-900" },
        contexto: "Ferramenta cortante feita batendo pedra contra pedra.",
        pecaCertaId: "pa",
        feedbackAcerto: "Correto. Pedra LASCADA = Paleolítico.",
        feedbackErro: "Pedra lascada é a marca do PALEOLÍTICO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Vasos de cerâmica de aldeia", emoji: "🏺", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Utensílios domésticos", emoji: "🍶", cor: "from-amber-600 to-slate-900" },
        contexto: "Vasos usados para armazenar grãos colhidos.",
        pecaCertaId: "ne",
        feedbackAcerto: "Correto. Cerâmica e aldeias = NEOLÍTICO.",
        feedbackErro: "Cerâmica e armazenagem de grãos = NEOLÍTICO.",
      },
      {
        id: "r3",
        municipioA: { nome: "Pintura rupestre da Capivara", emoji: "🎨", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Arte em caverna", emoji: "🖼️", cor: "from-slate-600 to-slate-900" },
        contexto: "Cena de caça pintada nas paredes há ~12 mil anos.",
        pecaCertaId: "pa",
        feedbackAcerto: "Correto. Arte rupestre + caça = PALEOLÍTICO.",
        feedbackErro: "Arte rupestre em cavernas é PALEOLÍTICO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Campo de trigo cultivado", emoji: "🌾", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Agricultura", emoji: "🚜", cor: "from-cyan-600 to-slate-900" },
        contexto: "Grãos plantados em fileiras, colheita organizada.",
        pecaCertaId: "ne",
        feedbackAcerto: "Correto. Plantar = NEOLÍTICO.",
        feedbackErro: "Agricultura só começa no NEOLÍTICO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Grupo nômade caçando mamute", emoji: "🦣", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Caça de grandes animais", emoji: "🏹", cor: "from-teal-600 to-slate-900" },
        contexto: "Bando pequeno seguindo manada.",
        pecaCertaId: "pa",
        feedbackAcerto: "Correto. Nômades caçadores = PALEOLÍTICO.",
        feedbackErro: "Nomadismo + caça = PALEOLÍTICO.",
      },
      {
        id: "r6",
        municipioA: { nome: "Primeira aldeia com casas fixas", emoji: "🏘️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Sedentarismo", emoji: "🏡", cor: "from-amber-600 to-slate-900" },
        contexto: "Grupo humano fixado num só local com plantação por perto.",
        pecaCertaId: "ne",
        feedbackAcerto: "Correto. Vida fixa em aldeia = NEOLÍTICO.",
        feedbackErro: "Aldeia fixa = sedentarismo = NEOLÍTICO.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já separa Paleolítico de Neolítico como um arqueólogo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza do tempo humano: proporção entre PALEOLÍTICO (99% do tempo) e todo o resto (Neolítico + Idade dos Metais + História escrita).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgEvolucao,
    fatias: [
      {
        id: "pa",
        rotulo: "Paleolítico (~99%)",
        emoji: "🪨",
        percentual: 99,
        cor: "#b45309",
        descricao:
          "A maior parte da história humana foi de caça, coleta e nomadismo. Mais de 2 milhões de anos de pedra lascada.",
        exemplos: ["🪨 Pedra lascada", "🔥 Domínio do fogo", "🎨 Arte rupestre"],
      },
      {
        id: "res",
        rotulo: "Neolítico + História (~1%)",
        emoji: "🌾",
        percentual: 1,
        cor: "#0f766e",
        descricao:
          "Apenas os últimos ~12 mil anos incluem agricultura, cidades, escrita e civilizações. Uma fração minúscula do tempo humano.",
        exemplos: ["🌾 Agricultura", "🏛️ Cidades", "📜 Escrita"],
      },
    ],
    falaFinal:
      "Somos jovens como espécie civilizada. Velhos como caçadores.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Fragmento do Crânio Ancestral.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgLuzia,
    perguntas: [
      {
        id: "av1",
        pergunta: "Em qual continente surgiu a espécie Homo sapiens?",
        opcoes: [
          { id: "a", texto: "Europa.", correta: false },
          { id: "b", texto: "África.", correta: true },
          { id: "c", texto: "América.", correta: false },
        ],
        feedbackAcerto: "Correto. ÁFRICA, há ~300 mil anos.",
        feedbackErro: "ÁFRICA. Todos os humanos vivos descendem de populações africanas.",
      },
      {
        id: "av2",
        pergunta: "Qual foi a grande mudança do período NEOLÍTICO?",
        opcoes: [
          { id: "a", texto: "Invenção do computador.", correta: false },
          { id: "b", texto: "Revolução Agrícola e vida sedentária.", correta: true },
          { id: "c", texto: "Domínio do fogo.", correta: false },
        ],
        feedbackAcerto: "Correto. REVOLUÇÃO AGRÍCOLA — plantar, criar animais, morar em aldeias.",
        feedbackErro: "AGRICULTURA + sedentarismo. Fogo foi antes (Paleolítico).",
      },
      {
        id: "av3",
        pergunta: "Qual é a hipótese mais aceita sobre o povoamento das Américas?",
        opcoes: [
          { id: "a", texto: "Migração pelo Estreito de Bering na última glaciação.", correta: true },
          { id: "b", texto: "Humanos evoluíram sozinhos aqui, sem contato com outros continentes.", correta: false },
          { id: "c", texto: "Chegaram de avião.", correta: false },
        ],
        feedbackAcerto: "Correto. Estreito de BERING, há 15-30 mil anos, com possíveis rotas costeiras.",
        feedbackErro: "É o ESTREITO DE BERING. Homo sapiens surgiu na África, não nas Américas.",
      },
    ],
    selo: {
      nome: "Fragmento do Crânio Ancestral",
      subtitulo: "Fragmento 2 do Códice",
      emoji: "🦴",
      cor: "from-amber-500 to-slate-900",
      fotoUrl: imgLuzia,
    },
    falaFinal:
      "Fragmento 2 restaurado. Você agora sabe que somos africanos por origem — e que a história humana é muito mais longa do que imagina.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Fragmento do Crânio Ancestral" },
};
