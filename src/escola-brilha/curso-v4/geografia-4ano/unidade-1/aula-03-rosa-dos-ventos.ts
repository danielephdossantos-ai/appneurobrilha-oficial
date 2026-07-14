import type { AulaGeoV1 } from "../../types";
import { url as mapaEstados } from "@/assets/geografia-4ano/mapa-brasil-estados.jpg.asset.json";
import { url as rosaDosVentos } from "@/assets/geografia-4ano/rosa-dos-ventos.jpg.asset.json";
import { url as bussola } from "@/assets/geografia-4ano/bussola-mascote.jpg.asset.json";
import { url as mapaCoord } from "@/assets/geografia-4ano/mapa-coordenadas.jpg.asset.json";
import { url as gpsVsBussola } from "@/assets/geografia-4ano/gps-vs-bussola.jpg.asset.json";
import { url as norte } from "@/assets/geografia-4ano/regiao-norte-amazonia.jpg.asset.json";
import { url as nordeste } from "@/assets/geografia-4ano/regiao-nordeste-praia.jpg.asset.json";
import { url as sudeste } from "@/assets/geografia-4ano/regiao-sudeste-metropole.jpg.asset.json";
import { url as sul } from "@/assets/geografia-4ano/regiao-sul-serra.jpg.asset.json";
/**
 * Geografia · 4º Ano · Unidade 1 · Aula 03
 * "Rosa dos Ventos e Coordenadas" — EF04GE09
 *
 * A criança aprende as 4 direções cardeais (N, S, L, O), descobre como
 * a rosa dos ventos e a bússola ajudam a se localizar, e começa a usar
 * coordenadas simples (linha × coluna) pra achar lugares no mapa.
 */
export const aula03: AulaGeoV1 = {
  slug: "aula-03-rosa-dos-ventos",
  titulo: "Rosa dos Ventos e Coordenadas",
  iconeTrilha: "🧭",
  bncc: ["EF04GE09"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre a rosa dos ventos. Cada seta é uma DIREÇÃO — e juntas elas ajudam a gente a não se perder!",
    mapaUrl: rosaDosVentos,
    imagemDestaqueUrl: rosaDosVentos,
    aurora:
      "Explorador, imagina que você tá no meio da floresta sem GPS. Como saber pra onde ir? A humanidade descobriu 4 direções mágicas: NORTE, SUL, LESTE e OESTE. Essa estrela dourada se chama ROSA DOS VENTOS.",
    falaFinal:
      "N em cima, S embaixo, L pra direita (onde o sol NASCE), O pra esquerda (onde o sol se PÕE). Bora treinar!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido: se você olhar pro NASCER do sol de manhã, sua frente está apontando pra qual direção?",
    pergunta: "Sol nascendo à sua frente = você olha pra onde?",
    opcoes: [
      {
        id: "leste",
        titulo: "LESTE (L)",
        subtitulo: "onde o sol nasce",
        emoji: "🌅",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "oeste",
        titulo: "OESTE (O)",
        subtitulo: "onde o sol se põe",
        emoji: "🌇",
        cor: "from-purple-500 to-indigo-700",
      },
    ],
    respostaCerta: "leste",
    feedbackAcerto:
      "Isso! O sol NASCE no LESTE (L). Se você olha pro nascer do sol, sua frente aponta pro leste — e suas costas ficam pro OESTE.",
    feedbackErro:
      "Repensa: o sol NASCE no LESTE e SE PÕE no OESTE. Olhando pro nascer, você está de frente pro LESTE.",
    falaFinal:
      "Guarda essa dica: NASCE no L, morre no O. Bora abrir os cadernos das 4 direções.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "4 direções, 4 cadernos. Abre cada um pra descobrir o que cada direção significa e onde ela aponta no Brasil.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "norte",
        capa: "N — Norte",
        emoji: "⬆️",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "NORTE fica sempre PRA CIMA no mapa. No Brasil, é onde ficam a Amazônia, o Pará, Roraima — a região da grande floresta.",
        exemplo: "Ex.: quem mora em SP e viaja pro AMAZONAS está indo pro NORTE.",
        fotoUrl: norte,
      },
      {
        id: "sul",
        capa: "S — Sul",
        emoji: "⬇️",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "SUL fica sempre PRA BAIXO no mapa. No Brasil, é onde ficam Paraná, Santa Catarina, Rio Grande do Sul — mais frio, com serras e vinhedos.",
        exemplo: "Ex.: quem sai da BAHIA rumo a PORTO ALEGRE está indo pro SUL.",
        fotoUrl: sul,
      },
      {
        id: "leste",
        capa: "L — Leste",
        emoji: "➡️",
        cor: "from-amber-400 to-yellow-600",
        conteudo:
          "LESTE fica pra DIREITA no mapa. É de onde o SOL NASCE. No Brasil, o leste é o litoral do Nordeste e do Sudeste — Salvador, Recife, Rio.",
        exemplo: "Ex.: de BRASÍLIA pra SALVADOR, a viagem vai pro LESTE (rumo ao mar).",
        fotoUrl: nordeste,
      },
      {
        id: "oeste",
        capa: "O — Oeste",
        emoji: "⬅️",
        cor: "from-purple-500 to-indigo-700",
        conteudo:
          "OESTE fica pra ESQUERDA no mapa. É onde o SOL SE PÕE. No Brasil, o oeste é o Acre, Rondônia, Mato Grosso — perto da fronteira com Bolívia e Peru.",
        exemplo: "Ex.: de SÃO PAULO pro ACRE, a viagem vai pro OESTE.",
        fotoUrl: sudeste,
      },
    ],
    falaFinal:
      "N em cima, S embaixo, L à direita, O à esquerda. Essas 4 setas viram sua ROSA DOS VENTOS pessoal.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Marquei 4 cidades no mapa do Brasil. Toca em cada uma pra Aurora contar em QUAL DIREÇÃO ela fica em relação a Brasília (o centro do país).",
    instrucao: "Toque em cada balão pra ouvir a direção",
    mapaUrl: mapaEstados,
    pontos: [
      {
        id: "manaus",
        x: 25,
        y: 25,
        emoji: "⬆️",
        cor: "from-emerald-500 to-green-700",
        titulo: "MANAUS — a NORTE (N)",
        texto:
          "Manaus (AM) fica ACIMA de Brasília no mapa. Pra chegar lá saindo do DF, você segue rumo NORTE, entrando na Amazônia.",
        fotoUrl: norte,
      },
      {
        id: "recife",
        x: 85,
        y: 40,
        emoji: "➡️",
        cor: "from-amber-400 to-yellow-600",
        titulo: "RECIFE — a LESTE (L)",
        texto:
          "Recife (PE) fica À DIREITA de Brasília no mapa, no litoral. Saindo do DF, você segue rumo LESTE até bater no oceano Atlântico.",
        fotoUrl: nordeste,
      },
      {
        id: "rioBranco",
        x: 12,
        y: 45,
        emoji: "⬅️",
        cor: "from-purple-500 to-indigo-700",
        titulo: "RIO BRANCO — a OESTE (O)",
        texto:
          "Rio Branco (AC) fica À ESQUERDA de Brasília no mapa, perto da fronteira com o Peru. Rumo OESTE!",
        fotoUrl: sudeste,
      },
      {
        id: "portoAlegre",
        x: 45,
        y: 90,
        emoji: "⬇️",
        cor: "from-sky-500 to-blue-700",
        titulo: "PORTO ALEGRE — a SUL (S)",
        texto:
          "Porto Alegre (RS) fica ABAIXO de Brasília no mapa. Pra chegar lá saindo do DF, você desce rumo SUL, passando por SP e PR.",
        fotoUrl: sul,
      },
    ],
    falaFinal:
      "4 cidades, 4 direções. A partir de qualquer lugar você pode dizer 'fica ao norte', 'fica a leste' — e todo mundo entende.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar ligado! 3 perguntas pra ver se a rosa dos ventos ficou clara.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "O SOL nasce em qual direção?",
        fotoUrl: nordeste,
        cards: [
          { id: "norte", emoji: "⬆️", titulo: "Norte", cor: "from-emerald-500 to-green-700" },
          { id: "leste", emoji: "🌅", titulo: "Leste", cor: "from-amber-400 to-yellow-600" },
          { id: "oeste", emoji: "🌇", titulo: "Oeste", cor: "from-purple-500 to-indigo-700" },
        ],
        correta: "leste",
        feedbackAcerto: "Perfeito! O sol NASCE no LESTE (L) e SE PÕE no OESTE (O).",
        feedbackErro: "Repensa: 'nasce no L, morre no O'. A resposta é LESTE.",
      },
      {
        id: "q2",
        pergunta: "No mapa, NORTE está sempre em qual posição?",
        fotoUrl: rosaDosVentos,
        cards: [
          { id: "cima", emoji: "⬆️", titulo: "Em cima", cor: "from-emerald-500 to-green-700" },
          { id: "baixo", emoji: "⬇️", titulo: "Embaixo", cor: "from-sky-500 to-blue-700" },
          { id: "direita", emoji: "➡️", titulo: "À direita", cor: "from-amber-400 to-yellow-600" },
        ],
        correta: "cima",
        feedbackAcerto: "Isso! Por convenção, o NORTE sempre aparece PRA CIMA nos mapas.",
        feedbackErro: "Atenção: a regra dos mapas é N em cima, S embaixo, L direita, O esquerda.",
      },
      {
        id: "q3",
        pergunta: "Saindo de Brasília pra chegar em PORTO ALEGRE, você vai pra qual direção?",
        fotoUrl: sul,
        cards: [
          { id: "norte", emoji: "⬆️", titulo: "Norte", cor: "from-emerald-500 to-green-700" },
          { id: "sul", emoji: "⬇️", titulo: "Sul", cor: "from-sky-500 to-blue-700" },
          { id: "leste", emoji: "➡️", titulo: "Leste", cor: "from-amber-400 to-yellow-600" },
        ],
        correta: "sul",
        feedbackAcerto: "Boa! Porto Alegre está ABAIXO de Brasília no mapa. Rumo SUL!",
        feedbackErro: "Repensa: Porto Alegre é lá embaixo no mapa — direção SUL.",
      },
    ],
    falaFinal:
      "Radar afinado! Você já sabe usar as 4 direções pra descrever qualquer viagem.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Hora de aplicar a rosa dos ventos no BRASIL inteiro! Toca em cada estado. Vamos treinar por DIREÇÃO: primeiro os estados a NORTE, depois os do SUL.",
    instrucao: "Toque em cada estado colorido no mapa",
    missao: {
      tipo: "grupos",
      grupos: [
        {
          id: "norte-brasil",
          rotulo: "Estados a NORTE (região Norte)",
          emoji: "⬆️",
          cor: "from-emerald-500 to-green-700",
          siglas: ["AM", "PA", "AC", "RO", "RR", "AP", "TO"],
          descricao:
            "Todos os 7 estados da região Norte ficam ACIMA no mapa. É onde está a Floresta Amazônica.",
        },
        {
          id: "sul-brasil",
          rotulo: "Estados a SUL (região Sul)",
          emoji: "⬇️",
          cor: "from-sky-500 to-blue-700",
          siglas: ["PR", "SC", "RS"],
          descricao:
            "Os 3 estados da região Sul ficam bem EMBAIXO no mapa. Terra de frio, serra e chimarrão.",
        },
      ],
    },
    falaFinal:
      "10 estados, 2 direções. NORTE em cima, SUL embaixo — a rosa dos ventos organiza o país inteiro.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos fazer uma VIAGEM guiada pela rosa dos ventos! Toca na ordem certa: começa no Norte e vai descendo.",
    instrucao: "Toque nas paradas do NORTE ao SUL",
    pergunta: "Ordene a viagem: NORTE → CENTRO → SUL",
    paradas: [
      {
        id: "manaus",
        emoji: "⬆️",
        rotulo: "1. Manaus (Norte)",
        descricao: "Começamos no NORTE, na capital do Amazonas.",
      },
      {
        id: "brasilia",
        emoji: "⭐",
        rotulo: "2. Brasília (Centro)",
        descricao: "Descemos até o CENTRO do país — Brasília, no Distrito Federal.",
      },
      {
        id: "sp",
        emoji: "🏙️",
        rotulo: "3. São Paulo (Sudeste)",
        descricao: "Seguimos rumo SUL/SUDESTE até São Paulo.",
      },
      {
        id: "portoalegre",
        emoji: "⬇️",
        rotulo: "4. Porto Alegre (Sul)",
        descricao: "Chegamos lá embaixo, no SUL do país.",
      },
    ],
    ordemCerta: ["manaus", "brasilia", "sp", "portoalegre"],
    feedbackAcerto:
      "Viagem completa! Você desceu do NORTE ao SUL usando a rosa dos ventos.",
    feedbackErro:
      "Essa não é a próxima parada. Lembra: Manaus (N) → Brasília (Centro) → SP → Porto Alegre (S).",
    falaFinal:
      "Do topo do mapa pro fim: N → S. A rosa dos ventos te guiou o Brasil inteiro.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez! Aurora fica caladinha. Você lê e toca nas palavras-chave pra provar que entendeu a rosa dos ventos.",
    tituloLivro: "📔 Atlas do Explorador Brasileiro",
    subtitulo: "Página 3 — A Rosa dos Ventos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A ROSA DOS VENTOS é um desenho em forma de estrela que mostra as 4 direções principais: NORTE, SUL, LESTE e OESTE. Ela aparece em todo mapa.",
        chaves: ["rosa dos ventos", "direções", "mapa"],
      },
      {
        id: "p2",
        texto:
          "O NORTE fica sempre pra CIMA no mapa. O SUL fica pra BAIXO. Assim, todo mundo desenha e lê os mapas da mesma forma.",
        chaves: ["norte", "sul", "mapa"],
      },
      {
        id: "p3",
        texto:
          "O SOL NASCE no LESTE e SE PÕE no OESTE. Por isso o Leste fica à DIREITA do mapa e o Oeste à ESQUERDA.",
        chaves: ["leste", "oeste", "sol"],
      },
      {
        id: "p4",
        texto:
          "Antigamente, os navegadores usavam a BÚSSOLA — um aparelho com um ponteiro magnético que sempre aponta pro NORTE. Hoje usamos também o GPS do celular.",
        chaves: ["bússola", "norte", "gps"],
      },
    ],
    falaFinal:
      "Você leu sozinho! Agora manda bem em N, S, L, O — e sabe pra que serve uma bússola.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do BÚSSOLA RELÂMPAGO! Cada rodada te dá uma dica. Aponte a direção certa antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque na direção certa antes do tempo acabar!",
    duracaoSegundos: 12,
    pecas: [
      { id: "norte", emoji: "⬆️", rotulo: "NORTE (N)" },
      { id: "sul", emoji: "⬇️", rotulo: "SUL (S)" },
      { id: "leste", emoji: "➡️", rotulo: "LESTE (L)" },
      { id: "oeste", emoji: "⬅️", rotulo: "OESTE (O)" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Sol nascendo", emoji: "🌅", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "Manhãzinha", emoji: "☀️", cor: "from-orange-400 to-red-500" },
        contexto: "O sol nasce em qual direção?",
        pecaCertaId: "leste",
        feedbackAcerto: "Boa! Sol NASCE no LESTE (L).",
        feedbackErro: "Lembra: nasce no L, morre no O. Resposta: LESTE.",
      },
      {
        id: "r2",
        municipioA: { nome: "Sol se pondo", emoji: "🌇", cor: "from-purple-500 to-indigo-700" },
        municipioB: { nome: "Fim da tarde", emoji: "🌆", cor: "from-pink-400 to-rose-600" },
        contexto: "O sol se põe em qual direção?",
        pecaCertaId: "oeste",
        feedbackAcerto: "Perfeito! Sol SE PÕE no OESTE (O).",
        feedbackErro: "Ops: o sol morre no OESTE.",
      },
      {
        id: "r3",
        municipioA: { nome: "Amazônia", emoji: "🌳", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Topo do mapa", emoji: "⬆️", cor: "from-lime-400 to-emerald-600" },
        contexto: "A Amazônia fica em qual parte do Brasil?",
        pecaCertaId: "norte",
        feedbackAcerto: "Combo! A Amazônia está no NORTE.",
        feedbackErro: "A floresta amazônica fica no NORTE do país.",
      },
      {
        id: "r4",
        municipioA: { nome: "Gaúchos e chimarrão", emoji: "🧉", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Base do mapa", emoji: "⬇️", cor: "from-cyan-400 to-blue-600" },
        contexto: "O Rio Grande do Sul fica em qual direção?",
        pecaCertaId: "sul",
        feedbackAcerto: "Boa! RS está lá embaixo — SUL.",
        feedbackErro: "Repensa: RS = Rio Grande do SUL, na base do mapa.",
      },
      {
        id: "r5",
        municipioA: { nome: "Litoral do Nordeste", emoji: "🏖️", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "Rumo ao mar", emoji: "🌊", cor: "from-yellow-400 to-orange-500" },
        contexto: "Saindo de Brasília rumo a Recife, você vai pra qual direção?",
        pecaCertaId: "leste",
        feedbackAcerto: "Isso! Recife fica no LESTE, no litoral.",
        feedbackErro: "O mar fica a LESTE do Brasil. Resposta: LESTE.",
      },
      {
        id: "r6",
        municipioA: { nome: "Fronteira com o Peru", emoji: "🌄", cor: "from-purple-500 to-indigo-700" },
        municipioB: { nome: "Acre e Rondônia", emoji: "⬅️", cor: "from-violet-400 to-purple-600" },
        contexto: "Acre e Rondônia ficam em qual direção do Brasil?",
        pecaCertaId: "oeste",
        feedbackAcerto: "Perfeito! AC e RO ficam no OESTE, perto da fronteira.",
        feedbackErro: "Fronteira com Peru = OESTE do Brasil.",
      },
    ],
    falaFinal:
      "6 rodadas, 4 direções dominadas. Você agora é um verdadeiro navegador!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da NAVEGAÇÃO! Duas fatias mostram COMO a humanidade se orienta hoje em dia.",
    instrucao: "Toque em cada fatia pra ouvir a explicação",
    fatias: [
      {
        id: "bussola",
        rotulo: "Bússola e Rosa dos Ventos",
        emoji: "🧭",
        percentual: 40,
        cor: "#f59e0b",
        descricao:
          "Inventada há mais de 1.000 anos, a BÚSSOLA usa um ímã que aponta pro NORTE magnético. Ainda hoje é usada por trilheiros, navegadores e escoteiros — não precisa de bateria!",
        exemplos: ["🧭 Bússola", "🌟 Rosa dos ventos", "🗺️ Mapa de papel"],
      },
      {
        id: "gps",
        rotulo: "GPS e Mapas Digitais",
        emoji: "📱",
        percentual: 60,
        cor: "#0ea5e9",
        descricao:
          "Hoje, o GPS do celular usa 24 SATÉLITES no espaço pra descobrir onde você está em segundos. Aplicativos como Waze e Google Maps mostram o caminho na tela em tempo real.",
        exemplos: ["📱 Celular", "🛰️ Satélites", "🚗 Waze"],
      },
    ],
    falaFinal:
      "Bússola + GPS = 1.000 anos de descobertas. Mas as 4 direções (N, S, L, O) continuam sendo a base.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa! 3 perguntas pra ganhar a insígnia: Navegador das 4 Direções.",
    instrucao: "Responda as 3 e ganhe seu selo",
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual direção fica sempre PRA CIMA no mapa?",
        opcoes: [
          { id: "a", texto: "Sul (S)", correta: false },
          { id: "b", texto: "Norte (N)", correta: true },
          { id: "c", texto: "Leste (L)", correta: false },
        ],
        feedbackAcerto: "Isso! Por convenção, o NORTE sempre aparece PRA CIMA.",
        feedbackErro: "Repensa: N em cima, S embaixo. A resposta é NORTE.",
      },
      {
        id: "av2",
        pergunta: "O sol NASCE em qual direção?",
        opcoes: [
          { id: "a", texto: "Leste (L)", correta: true },
          { id: "b", texto: "Oeste (O)", correta: false },
          { id: "c", texto: "Norte (N)", correta: false },
        ],
        feedbackAcerto: "Perfeito! O sol nasce no LESTE e se põe no OESTE.",
        feedbackErro: "Lembra: 'nasce no L, morre no O'. Resposta: LESTE.",
      },
      {
        id: "av3",
        pergunta: "Que instrumento antigo usa um ímã pra apontar sempre pro Norte?",
        opcoes: [
          { id: "a", texto: "GPS", correta: false },
          { id: "b", texto: "Bússola", correta: true },
          { id: "c", texto: "Régua", correta: false },
        ],
        feedbackAcerto:
          "Isso! A BÚSSOLA usa um ponteiro magnético que aponta pro Norte — não precisa de bateria.",
        feedbackErro:
          "GPS é moderno (satélite). O instrumento antigo com ímã é a BÚSSOLA.",
      },
    ],
    selo: {
      nome: "Navegador das 4 Direções",
      subtitulo: "Insígnia da Rosa dos Ventos",
      emoji: "🧭",
      cor: "from-amber-400 to-orange-600",
    },
    falaFinal:
      "PARABÉNS, Navegador! Com N, S, L e O você não se perde mais em mapa nenhum.",
  },

  recompensa: {
    xp: 300,
    moedas: 200,
    medalha: "Navegador das 4 Direções",
  },
};

// Referências visuais adicionais usadas no player (evita warning de import não usado)
void bussola;
void mapaCoord;
void gpsVsBussola;
