import type { AulaGeoV1 } from "../../types";
import { url as planeta } from "@/assets/geografia-6ano/planeta-conexoes.jpg.asset.json";
import { url as desmate } from "@/assets/geografia-6ano/desmatamento.jpg.asset.json";
import { url as energia } from "@/assets/geografia-6ano/energia-renovavel.jpg.asset.json";
import { url as aquecimento } from "@/assets/geografia-6ano/aquecimento-global.jpg.asset.json";
import { url as sustenta } from "@/assets/geografia-6ano/sustentabilidade.jpg.asset.json";
import { url as amaz } from "@/assets/geografia-6ano/bioma-amazonia.jpg.asset.json";
import { url as cinturaoFogo } from "@/assets/geografia-6ano/cinturao-fogo.jpg.asset.json";
/**
 * Geografia · 6º Ano (PILOTO v2) · Unidade 7 · Aula 01
 * "Síntese: O Planeta Integrado" — BNCC EF06GE01, EF06GE03, EF06GE12, EF06GE13
 * Padrão U1/U2.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-sintese-planeta",
  titulo: "Síntese: O Planeta Integrado",
  iconeTrilha: "🌐",
  bncc: ["EF06GE01", "EF06GE03", "EF06GE12", "EF06GE13"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: planeta,
    imagemDestaqueUrl: planeta,
    aurora:
      "Você viu tudo: a Terra GIRA (dia e noite), VIAJA em volta do Sol (ano), está INCLINADA (estações). A crosta é dividida em PLACAS que se movem. O RELEVO se formou em milhões de anos de erosão. O CLIMA depende da latitude e da altitude. Os BIOMAS nascem dessa combinação — clima + solo + relevo = vegetação e vida. Nada acontece isoladamente. Um vulcão no Chile pode escurecer o céu do Brasil. Desmatar a Amazônia altera chuva em SP. TUDO ESTÁ CONECTADO.",
    falaFinal: "Hora de juntar as peças. Um planeta, mil conexões.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Chuta antes: se a Amazônia inteira fosse desmatada, o que aconteceria com a chuva no Sudeste do Brasil?",
    pergunta: "O efeito seria:",
    opcoes: [
      { id: "diminui", titulo: "Chuva DIMINUIRIA muito", subtitulo: "os rios voadores acabariam", emoji: "🌧️", cor: "from-emerald-800 to-slate-950" },
      { id: "iguais", titulo: "Não mudaria nada", subtitulo: "Sudeste tem chuva própria", emoji: "☀️", cor: "from-amber-800 to-slate-950" },
    ],
    respostaCerta: "diminui",
    feedbackAcerto:
      "Exato! A Amazônia gera os RIOS VOADORES — massas de vapor d'água que viajam pela atmosfera e alimentam a chuva do Centro-Oeste e Sudeste. Sem Amazônia, chove muito menos em SP, Brasília e MG. Um bioma sustenta metade do país.",
    feedbackErro:
      "Muda MUITO. A Amazônia gera os RIOS VOADORES — vapor d'água que viaja pela atmosfera e vira chuva no Centro-Oeste e Sudeste. Sem Amazônia = seca gigante no resto do Brasil.",
    falaFinal: "Regra final: tudo conectado. A natureza é UM sistema, não pedaços separados.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras da sustentabilidade. Cada card traz explicação, exemplo real e curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "sist",
        capa: "1. Sistema Terra",
        emoji: "🌐",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "SISTEMA TERRA é a ideia de que atmosfera, oceanos, crosta, biomas e vida estão TODOS interligados. Mudar uma parte afeta todas as outras. Cientistas estudam a Terra como um único organismo.",
        exemplo:
          "Curiosidade: quando o vulcão Pinatubo explodiu nas Filipinas em 1991, jogou tanta cinza na atmosfera que a temperatura MÉDIA GLOBAL caiu 0,5°C por 2 anos. Um vulcão afetou o clima do planeta inteiro.",
        fotoUrl: planeta,
      },
      {
        id: "aq",
        capa: "2. Aquecimento global",
        emoji: "🌡️",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "AQUECIMENTO GLOBAL é o aumento da temperatura MÉDIA do planeta por causa do excesso de gases de EFEITO ESTUFA (CO₂, metano) liberados pela queima de combustíveis fósseis e desmatamento.",
        exemplo:
          "Curiosidade: desde 1880, a temperatura média da Terra subiu 1,1°C. Parece pouco, mas já é suficiente pra derreter geleiras, elevar o nível do mar 20 cm e aumentar furacões.",
        fotoUrl: aquecimento,
      },
      {
        id: "sust",
        capa: "3. Sustentabilidade",
        emoji: "♻️",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "SUSTENTABILIDADE é usar os recursos naturais SEM ESGOTAR pra próximas gerações. Envolve reduzir consumo, reciclar, usar energia limpa e proteger ecossistemas.",
        exemplo:
          "Curiosidade: o Brasil é o 5º maior produtor de ENERGIA SOLAR do mundo. Sol de sobra + tecnologia acessível = a matriz elétrica brasileira já é 88% renovável (média mundial: 30%).",
        fotoUrl: sustenta,
      },
      {
        id: "des",
        capa: "4. Desmatamento",
        emoji: "🪓",
        cor: "from-amber-800 to-orange-950",
        conteudo:
          "DESMATAMENTO é a maior ameaça aos biomas brasileiros. Cada árvore derrubada libera CO₂ armazenado, reduz biodiversidade e quebra ciclos hidrológicos que abastecem cidades distantes.",
        exemplo:
          "Curiosidade: em 2004, o desmatamento da Amazônia bateu 27.000 km² por ano — quase o tamanho de Alagoas. Em 2023, com fiscalização forte, caiu pra 9.000 km². Ainda é muito, mas prova que dá pra mudar.",
        fotoUrl: desmate,
      },
    ],
    falaFinal: "Sistema Terra, aquecimento, sustentabilidade, desmate. 4 palavras que definem o século XXI.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Cada card mostra uma CONEXÃO entre partes da natureza e como o ser humano interfere. Toque em cada um pra entender o encadeamento.",
    instrucao: "Toque nos 4 cards pra ouvir cada conexão",
    mapaUrl: planeta,
    pontos: [
      {
        id: "clima-vida",
        x: 25,
        y: 30,
        emoji: "🌡️",
        cor: "from-red-800 to-slate-950",
        titulo: "CLIMA muda a VIDA",
        texto:
          "Quando a temperatura sobe 2°C, o Cerrado perde 30% de suas espécies. Peixes mudam de rio, plantas florescem em época errada, animais migram cedo demais. O clima é a chave da vida.",
        fotoUrl: aquecimento,
      },
      {
        id: "amaz-chuva",
        x: 55,
        y: 55,
        emoji: "🌧️",
        cor: "from-sky-800 to-slate-950",
        titulo: "AMAZÔNIA fabrica CHUVA",
        texto:
          "Cada árvore da Amazônia lança 1.000 litros de vapor d'água na atmosfera por ano. Formam os RIOS VOADORES que viajam até o Sudeste. Sem floresta = sem chuva no resto do Brasil.",
        fotoUrl: amaz,
      },
      {
        id: "vulcao-clima",
        x: 70,
        y: 40,
        emoji: "🌋",
        cor: "from-amber-800 to-orange-950",
        titulo: "VULCÃO altera o clima",
        texto:
          "Uma erupção grande joga toneladas de cinza na estratosfera. A cinza BLOQUEIA parte da luz solar e ESFRIA o planeta por meses. Krakatoa (1883) fez pôr do sol vermelho em Londres durante 3 anos.",
        fotoUrl: cinturaoFogo,
      },
      {
        id: "energia",
        x: 45,
        y: 80,
        emoji: "♻️",
        cor: "from-emerald-800 to-slate-950",
        titulo: "ENERGIA LIMPA quebra o ciclo",
        texto:
          "Painéis solares e turbinas eólicas geram eletricidade SEM emitir CO₂. Se o mundo trocar carvão e petróleo por sol e vento, o aquecimento global desacelera. Brasil já tem 88% de matriz limpa.",
        fotoUrl: energia,
      },
    ],
    falaFinal:
      "4 conexões, 1 sistema só. Cada ação humana ecoa em outro canto do planeta.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de síntese planetária.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Se a Amazônia sumir, o que acontece com a chuva no Sudeste?",
        fotoUrl: amaz,
        cards: [
          { id: "dim", emoji: "🌵", titulo: "Diminui muito", cor: "from-emerald-800 to-slate-950" },
          { id: "aum", emoji: "🌧️", titulo: "Aumenta muito", cor: "from-sky-800 to-slate-950" },
          { id: "ig", emoji: "☀️", titulo: "Continua igual", cor: "from-amber-800 to-slate-950" },
        ],
        correta: "dim",
        feedbackAcerto: "Isso! Os rios voadores da Amazônia alimentam a chuva do Sudeste. Sem floresta = seca.",
        feedbackErro: "Diminui MUITO. Amazônia gera os rios voadores que abastecem Centro-Oeste e Sudeste com chuva.",
      },
      {
        id: "q2",
        pergunta: "Principal causa do AQUECIMENTO GLOBAL:",
        fotoUrl: aquecimento,
        cards: [
          { id: "gas", emoji: "🏭", titulo: "Excesso de gases de efeito estufa", cor: "from-emerald-800 to-slate-950" },
          { id: "sol", emoji: "☀️", titulo: "Sol está mais forte", cor: "from-amber-800 to-slate-950" },
          { id: "vul", emoji: "🌋", titulo: "Vulcões em erupção", cor: "from-red-800 to-slate-950" },
        ],
        correta: "gas",
        feedbackAcerto: "Isso! CO₂ e metano liberados por queima de combustíveis fósseis e desmatamento.",
        feedbackErro: "Sol não mudou. Vulcões até ESFRIAM. Causa = GASES de efeito estufa emitidos pela humanidade.",
      },
      {
        id: "q3",
        pergunta: "Ação SUSTENTÁVEL pra reduzir o aquecimento global:",
        fotoUrl: energia,
        cards: [
          { id: "reno", emoji: "♻️", titulo: "Usar energia renovável", cor: "from-emerald-800 to-slate-950" },
          { id: "carv", emoji: "🏭", titulo: "Queimar mais carvão", cor: "from-red-800 to-slate-950" },
          { id: "des", emoji: "🪓", titulo: "Desmatar mais florestas", cor: "from-amber-800 to-slate-950" },
        ],
        correta: "reno",
        feedbackAcerto: "Perfeito! Solar e eólica não emitem CO₂. Brasil já tem 88% de matriz renovável.",
        feedbackErro: "Carvão e desmate PIORAM. A solução é energia RENOVÁVEL (solar, eólica, hidrelétrica).",
      },
      {
        id: "q4",
        pergunta: "Um vulcão gigante em erupção causa no CLIMA global:",
        fotoUrl: cinturaoFogo,
        cards: [
          { id: "esf", emoji: "❄️", titulo: "Esfria o planeta por meses", cor: "from-emerald-800 to-slate-950" },
          { id: "aqu", emoji: "🔥", titulo: "Aquece rapidamente", cor: "from-red-800 to-slate-950" },
          { id: "nad", emoji: "🌫️", titulo: "Nenhum efeito climático", cor: "from-sky-800 to-slate-950" },
        ],
        correta: "esf",
        feedbackAcerto: "Isso! Cinza vulcânica bloqueia luz solar e resfria o planeta por meses ou anos.",
        feedbackErro: "Vulcão ESFRIA. A cinza jogada na estratosfera bloqueia parte da luz solar por meses.",
      },
    ],
    falaFinal: "4 acertos = você entende o planeta como um sistema.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Os RIOS VOADORES da Amazônia levam umidade pra vários estados do Sudeste e Centro-Oeste. Marque os principais estados que dependem dessa água pra chuva.",
    instrucao: "Acenda os 4 estados dependentes dos rios voadores",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "MG", "GO", "MT"],
      pergunta: "Quais estados recebem chuva dos rios voadores?",
    },
    falaFinal:
      "SP, MG, GO, MT. Metade das grandes cidades do país depende dessa água invisível vinda da Amazônia. Proteger floresta = proteger água.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma árvore derrubada na Amazônia vira menos chuva em SP? Organize as etapas dessa conexão.",
    instrucao: "Toque na ordem",
    pergunta: "Como o desmatamento seca o Sudeste?",
    paradas: [
      { id: "des", emoji: "🪓", rotulo: "1. Árvore derrubada",
        descricao: "Cada árvore lançava 1.000 L de vapor por ano na atmosfera.", fotoUrl: desmate },
      { id: "vap", emoji: "💨", rotulo: "2. Menos vapor no ar",
        descricao: "Sem floresta, o ar sobre a Amazônia fica mais seco." },
      { id: "rio", emoji: "🌊", rotulo: "3. Rios voadores fracos",
        descricao: "As massas de vapor que iam pro Sudeste ficam pequenas." },
      { id: "chu", emoji: "🌧️", rotulo: "4. Menos chuva no Sudeste",
        descricao: "SP, MG e Centro-Oeste recebem menos umidade da Amazônia." },
      { id: "sec", emoji: "🌵", rotulo: "5. Seca urbana",
        descricao: "Reservatórios como o Cantareira baixam. Racionamento de água.", fotoUrl: aquecimento },
    ],
    ordemCerta: ["des", "vap", "rio", "chu", "sec"],
    feedbackAcerto: "Perfeito! Desmate na Amazônia = torneira seca em SP. Tudo conectado.",
    feedbackErro: "Comece pelo desmate. Depois: menos vapor, rios voadores fracos, menos chuva, seca urbana.",
    falaFinal: "Um corte de motosserra a 3.000 km daqui vira racionamento na sua cidade.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição rápida.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 7 — Síntese Planetária",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A Terra funciona como um SISTEMA integrado. Movimentos do planeta, placas tectônicas, RELEVO, CLIMA e biomas se conectam. Mudar uma parte afeta todas as outras.",
        chaves: ["SISTEMA", "RELEVO", "CLIMA"],
        definicoes: {
          "SISTEMA":
            "Conjunto de partes interligadas que funcionam juntas. A Terra tem 5 sistemas: atmosfera, hidrosfera, litosfera, criosfera e biosfera.",
          "RELEVO":
            "Formas da superfície terrestre. Influencia diretamente o clima e onde as pessoas conseguem viver.",
          "CLIMA":
            "Padrão médio do tempo. Depende da latitude, altitude, distância do mar e vegetação.",
        },
        fotoUrl: planeta,
      },
      {
        id: "p2",
        texto:
          "O AQUECIMENTO GLOBAL é causado principalmente por GASES DE EFEITO ESTUFA (CO₂, metano) liberados pela queima de COMBUSTÍVEIS FÓSSEIS e pelo desmatamento.",
        chaves: ["AQUECIMENTO GLOBAL", "GASES DE EFEITO ESTUFA", "COMBUSTÍVEIS FÓSSEIS"],
        definicoes: {
          "AQUECIMENTO GLOBAL":
            "Aumento da temperatura média do planeta. Já subiu 1,1°C desde 1880 por ação humana.",
          "GASES DE EFEITO ESTUFA":
            "CO₂, metano, óxido nitroso. Prendem calor na atmosfera como um cobertor sobre a Terra.",
          "COMBUSTÍVEIS FÓSSEIS":
            "Petróleo, carvão e gás natural. Formados por matéria orgânica soterrada há milhões de anos. Queimar libera CO₂.",
        },
        fotoUrl: aquecimento,
      },
      {
        id: "p3",
        texto:
          "A SUSTENTABILIDADE propõe usar recursos naturais SEM ESGOTAR pra próximas gerações. Envolve ENERGIA RENOVÁVEL, reciclagem, redução do consumo e proteção dos biomas.",
        chaves: ["SUSTENTABILIDADE", "ENERGIA RENOVÁVEL"],
        definicoes: {
          "SUSTENTABILIDADE":
            "Modelo de vida que atende necessidades atuais sem comprometer o futuro. Conceito criado pela ONU em 1987.",
          "ENERGIA RENOVÁVEL":
            "Energia que se renova naturalmente: solar, eólica, hidrelétrica, biomassa. Brasil tem 88% da matriz elétrica renovável.",
        },
        fotoUrl: energia,
      },
      {
        id: "p4",
        texto:
          "PROTEGER OS BIOMAS brasileiros é urgente. A Amazônia perdeu 20% da área original; a Mata Atlântica, 88%. A DESTRUIÇÃO afeta clima, água, alimento e saúde de todos os brasileiros.",
        chaves: ["PROTEGER OS BIOMAS", "DESTRUIÇÃO"],
        definicoes: {
          "PROTEGER OS BIOMAS":
            "Ações de conservação: unidades de conservação, fiscalização, reflorestamento, mercado do carbono.",
          "DESTRUIÇÃO":
            "Perda irreversível de biodiversidade, alterações climáticas locais, comprometimento de nascentes de rios.",
        },
        fotoUrl: desmate,
      },
    ],
    falaFinal: "Leu, marcou, entendeu? Bora pro quiz final da JORNADA.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "sist", emoji: "", titulo: "Sistema Terra", cor: "from-slate-800 to-slate-900" },
      { id: "aq", emoji: "", titulo: "Aquecimento global", cor: "from-slate-800 to-slate-900" },
      { id: "sust", emoji: "", titulo: "Sustentabilidade", cor: "from-slate-800 to-slate-900" },
      { id: "reno", emoji: "", titulo: "Energia renovável", cor: "from-slate-800 to-slate-900" },
      { id: "des", emoji: "", titulo: "Desmatamento", cor: "from-slate-800 to-slate-900" },
      { id: "rios", emoji: "", titulo: "Rios voadores", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito correto.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Ideia de que atmosfera, oceanos, crosta, vida e clima estão TODOS interligados como um só organismo. Que conceito é esse?", cards, correta: "sist",
          feedbackAcerto: "Isso. Tudo interligado = SISTEMA TERRA.", feedbackErro: "É SISTEMA TERRA. Cientistas veem o planeta como um único organismo interconectado." },
        { id: "r2", pergunta: "Aumento da temperatura média do planeta causado por gases como CO₂ e metano. Que fenômeno é esse?", cards, correta: "aq",
          feedbackAcerto: "Isso. Aumento da temperatura global = AQUECIMENTO GLOBAL.", feedbackErro: "É AQUECIMENTO GLOBAL. Já subiu 1,1°C desde 1880." },
        { id: "r3", pergunta: "Modelo de uso dos recursos naturais que não compromete as futuras gerações. Qual conceito?", cards, correta: "sust",
          feedbackAcerto: "Isso. Cuidar do agora sem prejudicar o depois = SUSTENTABILIDADE.", feedbackErro: "É SUSTENTABILIDADE. Conceito criado pela ONU em 1987." },
        { id: "r4", pergunta: "Fonte de energia que se renova naturalmente e não emite CO₂ — como solar, eólica e hidrelétrica.", cards, correta: "reno",
          feedbackAcerto: "Isso. Renovável e limpa = ENERGIA RENOVÁVEL.", feedbackErro: "É ENERGIA RENOVÁVEL. Brasil já tem 88% da matriz elétrica assim." },
        { id: "r5", pergunta: "Destruição de vegetação nativa por corte ou queimada. Principal ameaça aos biomas brasileiros. Qual é?", cards, correta: "des",
          feedbackAcerto: "Isso. Destruição da vegetação = DESMATAMENTO.", feedbackErro: "É DESMATAMENTO. Mata Atlântica já perdeu 88% assim." },
        { id: "r6", pergunta: "Massas de vapor d'água que saem da Amazônia e alimentam a chuva do Centro-Oeste e Sudeste. Como se chamam?", cards, correta: "rios",
          feedbackAcerto: "Isso. Vapor amazônico no ar = RIOS VOADORES.", feedbackErro: "São os RIOS VOADORES. Sem eles, SP e Brasília secam." },
      ],
      falaFinal: "6 perguntas, 6 conceitos-chave. Explorador Planetário formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos GRANDES TEMAS da Geografia do 6º Ano. Sua jornada inteira em uma imagem.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "natural", rotulo: "Sistemas naturais (60%)", emoji: "🌍", percentual: 60, cor: "#059669",
        descricao: "Terra no espaço, tectônica, relevo, clima e biomas — a base física do planeta que estudamos nas 6 primeiras unidades.",
        exemplos: ["🌏 Rotação", "🌋 Placas", "🌳 Biomas"] },
      { id: "humano", rotulo: "Ação humana (40%)", emoji: "🌐", percentual: 40, cor: "#4b5563",
        descricao: "Aquecimento global, desmatamento, sustentabilidade, energia renovável. Como cuidamos (ou não) do sistema Terra.",
        exemplos: ["♻️ Sustentável", "🌡️ Aquecimento", "🪓 Desmate"] },
    ],
    falaFinal: "7 unidades, 1 planeta compreendido. Você agora enxerga a Terra como cientista.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas FINAIS pra ganhar a insígnia Explorador Planetário.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Se a Amazônia sumir, o que acontece no Sudeste?",
        opcoes: [
          { id: "a", texto: "Não muda nada — está longe", correta: false },
          { id: "b", texto: "Diminui a chuva por causa dos rios voadores", correta: true },
          { id: "c", texto: "Aumenta a chuva", correta: false },
        ],
        feedbackAcerto: "Isso! Rios voadores levam água da Amazônia pro Sudeste. Sem floresta = sem chuva.",
        feedbackErro: "Amazônia gera os RIOS VOADORES. Sem floresta, o vapor não viaja pro Sudeste — a chuva diminui." },
      { id: "av2", pergunta: "Principal causa do aquecimento global:",
        opcoes: [
          { id: "a", texto: "Vulcões em erupção", correta: false },
          { id: "b", texto: "Gases de efeito estufa emitidos pelo homem", correta: true },
          { id: "c", texto: "Sol está mais forte", correta: false },
        ],
        feedbackAcerto: "Isso! CO₂ e metano da atividade humana são a causa principal.",
        feedbackErro: "Vulcões até esfriam. Sol não mudou. Causa = GASES emitidos pela humanidade (CO₂, metano)." },
      { id: "av3", pergunta: "Solução SUSTENTÁVEL contra o aquecimento global:",
        opcoes: [
          { id: "a", texto: "Queimar mais carvão", correta: false },
          { id: "b", texto: "Trocar por energia renovável", correta: true },
          { id: "c", texto: "Desmatar mais florestas", correta: false },
        ],
        feedbackAcerto: "Isso! Solar, eólica, hidrelétrica: energia sem CO₂.",
        feedbackErro: "Carvão e desmate PIORAM. A solução é ENERGIA RENOVÁVEL (solar, eólica)." },
    ],
    selo: { nome: "Explorador Planetário", subtitulo: "Insígnia FINAL do 6º Ano", emoji: "🌐", cor: "from-slate-700 to-slate-950" },
    falaFinal: "INSÍGNIA FINAL CONQUISTADA. Você completou a jornada pelo planeta Terra. Parabéns, explorador!",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Explorador Planetário" },
};
