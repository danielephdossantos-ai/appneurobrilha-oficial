import type { AulaGeoV1 } from "../../types";
import { url as diversidade } from "@/assets/geografia-4ano/diversidade-povo-brasileiro.jpg.asset.json";
import { url as migracao } from "@/assets/geografia-4ano/migracao-interna-brasil.jpg.asset.json";
import { url as mapaEstados } from "@/assets/geografia-4ano/mapa-brasil-estados.jpg.asset.json";
import { url as norte } from "@/assets/geografia-4ano/regiao-norte-amazonia.jpg.asset.json";
import { url as nordeste } from "@/assets/geografia-4ano/regiao-nordeste-praia.jpg.asset.json";
import { url as sudeste } from "@/assets/geografia-4ano/regiao-sudeste-metropole.jpg.asset.json";
/**
 * Geografia · 4º Ano · Unidade 2 · Aula 01
 * "População Brasileira e Migrações" — EF04GE02
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-populacao-e-migracoes",
  titulo: "Nossa Gente: População e Migrações",
  iconeTrilha: "👨‍👩‍👧‍👦",
  bncc: ["EF04GE02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe as pessoas do Brasil. Diferentes, mas todas daqui.",
    mapaUrl: diversidade,
    imagemDestaqueUrl: diversidade,
    aurora:
      "Explorador, o Brasil é feito de MUITA gente diferente! Indígenas que já viviam aqui, africanos trazidos escravizados, portugueses, italianos, japoneses, sírios, bolivianos, haitianos... Cada um trouxe uma comida, uma música, um sotaque. Isso se chama DIVERSIDADE.",
    falaFinal:
      "Somos mais de 200 milhões de brasileiros. Vamos entender de onde viemos e por que a gente se muda.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: quando uma família sai do Nordeste e vai morar em São Paulo em busca de trabalho, isso se chama...",
    pergunta: "Como se chama mudar de estado dentro do Brasil?",
    opcoes: [
      {
        id: "migracao",
        titulo: "MIGRAÇÃO",
        subtitulo: "movimento de gente de um lugar pra outro",
        emoji: "🚚",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "turismo",
        titulo: "TURISMO",
        subtitulo: "viagem de férias",
        emoji: "🏖️",
        cor: "from-sky-400 to-blue-600",
      },
    ],
    respostaCerta: "migracao",
    feedbackAcerto:
      "Isso! MIGRAR é mudar de lugar pra viver e trabalhar — não é passeio, é vida nova.",
    feedbackErro:
      "Turismo é férias, volta pra casa. Mudar de vez pra outro lugar é MIGRAÇÃO.",
    falaFinal: "Milhões de brasileiros já migraram. Vamos entender por quê.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras que todo estudante da população brasileira precisa saber.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "populacao",
        capa: "1. População",
        emoji: "👥",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "POPULAÇÃO é o conjunto de pessoas que vivem num lugar. O Brasil tem mais de 200 milhões de habitantes.",
        exemplo: "Ex.: a população da sua cidade = todo mundo que mora lá.",
        fotoUrl: diversidade,
      },
      {
        id: "diversidade",
        capa: "2. Diversidade",
        emoji: "🌈",
        cor: "from-pink-500 to-rose-700",
        conteudo:
          "DIVERSIDADE é a mistura de povos, cores, religiões e culturas que formam o Brasil.",
        exemplo: "Ex.: indígenas, africanos, europeus, asiáticos e árabes construíram o nosso jeito.",
        fotoUrl: diversidade,
      },
      {
        id: "migracao",
        capa: "3. Migração",
        emoji: "🚚",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "MIGRAÇÃO é o movimento de sair de um lugar pra viver em outro. Pode ser dentro do país (interna) ou entre países (externa).",
        exemplo: "Ex.: nordestino que vai pra SP; venezuelano que vem pra Roraima.",
        fotoUrl: migracao,
      },
      {
        id: "imigrante",
        capa: "4. Imigrante × Emigrante",
        emoji: "✈️",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "IMIGRANTE é quem CHEGA num país novo. EMIGRANTE é quem SAI do próprio país.",
        exemplo: "Ex.: japonês que veio pro Brasil é imigrante aqui e emigrante lá no Japão.",
      },
    ],
    falaFinal: "População, diversidade, migração, imigrante. 4 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada região e ouça de onde vieram e pra onde foram as pessoas.",
    instrucao: "Toque em cada balão pra ouvir a história",
    mapaUrl: mapaEstados,
    pontos: [
      {
        id: "norte",
        x: 25,
        y: 30,
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        titulo: "NORTE — povos indígenas",
        texto:
          "Na região Norte vivem mais de 300 povos indígenas. Foram os primeiros habitantes do Brasil, muito antes dos portugueses chegarem.",
        fotoUrl: norte,
      },
      {
        id: "nordeste",
        x: 70,
        y: 35,
        emoji: "🌊",
        cor: "from-amber-400 to-yellow-600",
        titulo: "NORDESTE — herança africana",
        texto:
          "Salvador foi a primeira capital e recebeu milhões de africanos escravizados. Deles vieram o samba, o acarajé, a capoeira, o candomblé.",
        fotoUrl: nordeste,
      },
      {
        id: "sudeste",
        x: 55,
        y: 65,
        emoji: "🏙️",
        cor: "from-red-500 to-rose-700",
        titulo: "SUDESTE — imigrantes e migrantes",
        texto:
          "São Paulo e Rio receberam italianos, japoneses, sírios e libaneses. Também é pra onde muitos nordestinos migraram em busca de trabalho.",
        fotoUrl: sudeste,
      },
      {
        id: "sul",
        x: 45,
        y: 85,
        emoji: "🍇",
        cor: "from-sky-500 to-blue-700",
        titulo: "SUL — alemães, italianos, poloneses",
        texto:
          "No Sul, muitos europeus chegaram entre 1800 e 1900 pra trabalhar no campo. Por isso tem festa da uva, festa da cerveja, colônias inteiras.",
      },
    ],
    falaFinal: "Cada região tem sua história de gente que chegou e ficou.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas sobre a nossa gente.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem foram os PRIMEIROS habitantes do Brasil?",
        fotoUrl: norte,
        cards: [
          { id: "port", emoji: "⛵", titulo: "Portugueses", cor: "from-blue-500 to-indigo-700" },
          { id: "indi", emoji: "🏹", titulo: "Indígenas", cor: "from-emerald-500 to-green-700" },
          { id: "afr", emoji: "🥁", titulo: "Africanos", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "indi",
        feedbackAcerto: "Isso! Os POVOS INDÍGENAS já viviam aqui há milhares de anos.",
        feedbackErro: "Portugueses e africanos chegaram depois. Os primeiros foram os INDÍGENAS.",
      },
      {
        id: "q2",
        pergunta: "Sair do Nordeste pra trabalhar em SP é...",
        fotoUrl: migracao,
        cards: [
          { id: "tur", emoji: "🏖️", titulo: "Turismo", cor: "from-sky-500 to-blue-700" },
          { id: "mig", emoji: "🚚", titulo: "Migração interna", cor: "from-amber-500 to-orange-700" },
          { id: "im", emoji: "✈️", titulo: "Imigração", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "mig",
        feedbackAcerto: "Perfeito! Dentro do Brasil = MIGRAÇÃO INTERNA.",
        feedbackErro: "Imigração é entre países. Dentro do Brasil chama MIGRAÇÃO INTERNA.",
      },
      {
        id: "q3",
        pergunta: "Um japonês que veio morar no Brasil é aqui um...",
        fotoUrl: diversidade,
        cards: [
          { id: "em", emoji: "👋", titulo: "Emigrante", cor: "from-red-500 to-rose-700" },
          { id: "im", emoji: "🤝", titulo: "Imigrante", cor: "from-emerald-500 to-green-700" },
          { id: "tu", emoji: "🎒", titulo: "Turista", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "im",
        feedbackAcerto: "Boa! Quem CHEGA num país novo é IMIGRANTE.",
        feedbackErro: "Emigrante é quem SAI. Quem CHEGA é IMIGRANTE.",
      },
    ],
    falaFinal: "Radar afiado! Você já sabe distinguir migração de imigração.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Vamos ver os 5 estados MAIS POPULOSOS do Brasil. Toca em cada um e observa: são os que mais têm gente morando.",
    instrucao: "Acenda os 5 estados com mais habitantes",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "MG", "RJ", "BA", "PR"],
      pergunta: "Quais são os 5 estados MAIS POPULOSOS do Brasil?",
    },
    falaFinal:
      "SP lidera com mais de 46 milhões. Depois vêm MG, RJ, BA e PR. Muita gente, muitas cidades.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar a chegada dos povos ao Brasil na ordem certa.",
    instrucao: "Toque na ordem cronológica",
    pergunta: "Quem chegou primeiro? Coloque em ordem:",
    paradas: [
      {
        id: "indigenas",
        emoji: "🏹",
        rotulo: "1. Povos indígenas",
        descricao: "Já viviam aqui há mais de 10 mil anos, muito antes de qualquer navio chegar.",
      },
      {
        id: "portugueses",
        emoji: "⛵",
        rotulo: "2. Portugueses (1500)",
        descricao: "Pedro Álvares Cabral chegou em 1500 e começou a colonização.",
      },
      {
        id: "africanos",
        emoji: "⛓️",
        rotulo: "3. Africanos escravizados",
        descricao: "Trazidos à força a partir de 1550 pra trabalhar nos engenhos de açúcar.",
      },
      {
        id: "europeus",
        emoji: "🚢",
        rotulo: "4. Europeus e asiáticos (1800-1900)",
        descricao: "Italianos, alemães, japoneses e sírios vieram trabalhar no café e no campo.",
      },
      {
        id: "recentes",
        emoji: "✈️",
        rotulo: "5. Imigrantes recentes",
        descricao: "Bolivianos, haitianos, venezuelanos chegaram nos últimos anos.",
      },
    ],
    ordemCerta: ["indigenas", "portugueses", "africanos", "europeus", "recentes"],
    feedbackAcerto: "Linha do tempo perfeita! Você entendeu a formação do povo brasileiro.",
    feedbackErro: "Repensa a ordem: indígenas primeiro, depois vieram os outros.",
    falaFinal: "5 grandes ondas, 1 povo só.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "📔 Atlas do Explorador Brasileiro",
    subtitulo: "Página 5 — Nossa Gente",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O povo BRASILEIRO se formou pela mistura de INDÍGENAS, AFRICANOS e EUROPEUS. Depois chegaram asiáticos e outros povos.",
        chaves: ["brasileiro", "indígenas", "africanos", "europeus"],
      },
      {
        id: "p2",
        texto:
          "MIGRAÇÃO é sair de um lugar pra viver em outro. Interna = dentro do país. Externa = entre países.",
        chaves: ["migração", "interna", "externa"],
      },
      {
        id: "p3",
        texto:
          "IMIGRANTE é quem CHEGA. EMIGRANTE é quem SAI. Um mesmo passageiro é as duas coisas — depende de qual país você olha.",
        chaves: ["imigrante", "emigrante", "chega", "sai"],
      },
      {
        id: "p4",
        texto:
          "A maioria dos brasileiros vive no SUDESTE. É a região mais POPULOSA e industrializada.",
        chaves: ["sudeste", "populosa"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo IMIGRA-SAMBA! Cada rodada uma pista de origem. Acerte de qual povo veio.",
    instrucao: "⏱️ Qual povo trouxe isso?",
    duracaoSegundos: 12,
    pecas: [
      { id: "indigenas", emoji: "🏹", rotulo: "Indígenas" },
      { id: "africanos", emoji: "🥁", rotulo: "Africanos" },
      { id: "portugueses", emoji: "⛵", rotulo: "Portugueses" },
      { id: "italianos", emoji: "🍝", rotulo: "Italianos" },
      { id: "japoneses", emoji: "🍣", rotulo: "Japoneses" },
      { id: "alemaes", emoji: "🍺", rotulo: "Alemães" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Acarajé", emoji: "🍤", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Candomblé", emoji: "🥁", cor: "from-red-500 to-rose-700" },
        contexto: "Acarajé, samba e capoeira vieram de qual povo?",
        pecaCertaId: "africanos",
        feedbackAcerto: "Isso! Herança AFRICANA — comida, música e luta.",
        feedbackErro: "Acarajé e samba são heranças AFRICANAS.",
      },
      {
        id: "r2",
        municipioA: { nome: "Mandioca", emoji: "🌱", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Oca e arco", emoji: "🏹", cor: "from-lime-500 to-emerald-700" },
        contexto: "Mandioca, tapioca, açaí e caiçara vieram de...",
        pecaCertaId: "indigenas",
        feedbackAcerto: "Perfeito! Herança INDÍGENA — plantas e palavras.",
        feedbackErro: "Mandioca e açaí são INDÍGENAS.",
      },
      {
        id: "r3",
        municipioA: { nome: "Língua portuguesa", emoji: "📖", cor: "from-blue-500 to-indigo-700" },
        municipioB: { nome: "Bacalhau", emoji: "🐟", cor: "from-sky-500 to-blue-700" },
        contexto: "A língua que a gente fala veio de qual povo?",
        pecaCertaId: "portugueses",
        feedbackAcerto: "Boa! Português = herança dos PORTUGUESES.",
        feedbackErro: "A língua portuguesa é herança PORTUGUESA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Pizza e macarrão", emoji: "🍕", cor: "from-red-500 to-rose-700" },
        municipioB: { nome: "Festa da uva", emoji: "🍇", cor: "from-purple-500 to-fuchsia-700" },
        contexto: "Pizza e macarrão chegaram no Brasil com...",
        pecaCertaId: "italianos",
        feedbackAcerto: "Combo! ITALIANOS trouxeram massas e vinhos.",
        feedbackErro: "Pizza e macarrão = ITALIANOS.",
      },
      {
        id: "r5",
        municipioA: { nome: "Sushi", emoji: "🍣", cor: "from-red-500 to-rose-700" },
        municipioB: { nome: "Feira da Liberdade", emoji: "🏮", cor: "from-amber-500 to-orange-700" },
        contexto: "Sushi, tempurá e feira da Liberdade em SP vêm de...",
        pecaCertaId: "japoneses",
        feedbackAcerto: "Isso! JAPONESES — Brasil tem a maior colônia japonesa fora do Japão.",
        feedbackErro: "Sushi = JAPONESES. SP tem a maior colônia do mundo fora do Japão.",
      },
      {
        id: "r6",
        municipioA: { nome: "Oktoberfest", emoji: "🍺", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "Blumenau", emoji: "🏘️", cor: "from-emerald-500 to-green-700" },
        contexto: "Oktoberfest em Blumenau (SC) é herança de qual povo?",
        pecaCertaId: "alemaes",
        feedbackAcerto: "Perfeito! ALEMÃES colonizaram o Sul e trouxeram a festa da cerveja.",
        feedbackErro: "Oktoberfest = ALEMÃES no Sul do Brasil.",
      },
    ],
    falaFinal: "6 heranças identificadas! Você conhece o povo brasileiro.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da POPULAÇÃO brasileira: onde a maioria mora?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "urbana",
        rotulo: "Cidades (85%)",
        emoji: "🏙️",
        percentual: 85,
        cor: "#ef4444",
        descricao:
          "A maioria esmagadora dos brasileiros vive em CIDADES. Isso é fruto de décadas de migração do campo pra cidade.",
        exemplos: ["🏢 Prédios", "🚗 Trânsito", "🏫 Escolas urbanas"],
      },
      {
        id: "rural",
        rotulo: "Campo (15%)",
        emoji: "🌾",
        percentual: 15,
        cor: "#10b981",
        descricao:
          "Só 15% mora no CAMPO — mas é essa gente que produz boa parte da comida que a cidade consome.",
        exemplos: ["🚜 Fazendas", "🐄 Pecuária", "🌱 Agricultura"],
      },
    ],
    falaFinal: "Brasil é país URBANO. Mas o campo alimenta a cidade.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Historiador da Gente.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Quem já vivia no Brasil ANTES dos portugueses chegarem?",
        opcoes: [
          { id: "a", texto: "Ninguém — o Brasil era vazio", correta: false },
          { id: "b", texto: "Os povos indígenas", correta: true },
          { id: "c", texto: "Os africanos", correta: false },
        ],
        feedbackAcerto: "Isso! POVOS INDÍGENAS já viviam aqui há milhares de anos.",
        feedbackErro: "Africanos vieram depois, escravizados. Antes de 1500 já viviam aqui os INDÍGENAS.",
      },
      {
        id: "av2",
        pergunta: "Uma família que sai da Bahia pra morar em SP faz uma...",
        opcoes: [
          { id: "a", texto: "Viagem de turismo", correta: false },
          { id: "b", texto: "Migração interna", correta: true },
          { id: "c", texto: "Imigração", correta: false },
        ],
        feedbackAcerto: "Perfeito! Dentro do Brasil = MIGRAÇÃO INTERNA.",
        feedbackErro: "Imigração é ENTRE PAÍSES. Dentro do Brasil chama MIGRAÇÃO INTERNA.",
      },
      {
        id: "av3",
        pergunta: "Onde vive a MAIORIA dos brasileiros hoje?",
        opcoes: [
          { id: "a", texto: "No campo", correta: false },
          { id: "b", texto: "Nas cidades", correta: true },
          { id: "c", texto: "Nas florestas", correta: false },
        ],
        feedbackAcerto: "Isso! Mais de 85% da população mora em CIDADES.",
        feedbackErro: "Só 15% vive no campo. A maioria (85%) mora nas CIDADES.",
      },
    ],
    selo: {
      nome: "Historiador da Gente",
      subtitulo: "Insígnia da Unidade 2 completa",
      emoji: "👨‍👩‍👧‍👦",
      cor: "from-pink-500 to-rose-700",
    },
    falaFinal:
      "PARABÉNS, HISTORIADOR DA GENTE! Você entende de onde veio, quem chegou e onde a gente vive no Brasil.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Historiador da Gente" },
};
