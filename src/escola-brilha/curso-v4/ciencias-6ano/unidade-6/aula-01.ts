import type { AulaGeoV1 } from "../../types";
import { url as terraImg } from "@/assets/ciencias-6ano/u6-a1/terra-espaco.jpg.asset.json";
import { url as solarImg } from "@/assets/ciencias-6ano/u6-a1/sistema-solar.jpg.asset.json";
import { url as camadasImg } from "@/assets/ciencias-6ano/u6-a1/camadas-terra.jpg.asset.json";
import { url as vulcaoImg } from "@/assets/ciencias-6ano/u6-a1/vulcao.jpg.asset.json";
import vulcaoVideo from "@/assets/ciencias-6ano/u6-a1/vulcao-erupcao.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 6 · Aula 01
 * "Observatório Planetário" — Estrutura e movimentos da Terra (EF06CI11).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-observatorio-planetario",
  titulo: "Observatório Planetário",
  iconeTrilha: "🌍",
  recompensa: { xp: 120, moedas: 45, medalha: "Astrônomo Júnior" },
  bncc: ["EF06CI11"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Observatório oficial. Analise a Terra vista do espaço.",
    mapaUrl: terraImg,
    imagemDestaqueUrl: camadasImg,
    aurora:
      "Programa 6. Sua bancada é o SISTEMA SOLAR. Vamos investigar a estrutura interna da Terra, seus movimentos e como isso explica dia, noite, estações e vulcões.",
    falaFinal: "A Terra parece calma vista do espaço — mas por dentro é dinâmica. Placas se movem, magma flui, tudo em equilíbrio.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Situação: se você pudesse cavar um túnel do Brasil até o outro lado da Terra...",
    pergunta: "Qual sua HIPÓTESE — o que você encontraria no CENTRO do planeta?",
    fotoUrl: camadasImg,
    opcoes: [
      { id: "metal", titulo: "Núcleo metálico QUENTÍSSIMO", subtitulo: "ferro e níquel derretidos", emoji: "🔥", cor: "from-red-500 to-orange-700", fotoUrl: camadasImg },
      { id: "vazio", titulo: "Espaço vazio", subtitulo: "buraco no meio", emoji: "⚫", cor: "from-slate-500 to-slate-800", fotoUrl: terraImg },
      { id: "agua", titulo: "Oceano subterrâneo", subtitulo: "água por todo lado", emoji: "💧", cor: "from-sky-500 to-blue-700", fotoUrl: terraImg },
    ],
    respostaCerta: "metal",
    feedbackAcerto:
      "Correto. Núcleo interno = ferro e níquel a ~5000°C (mais quente que a superfície do Sol). Ondas sísmicas revelaram isso.",
    feedbackErro:
      "Não é vazio nem água. Núcleo é METÁLICO (ferro + níquel), extremamente quente e denso. Comprovado por sismologia.",
    falaFinal: "Nunca cavamos até lá — mas ondas sísmicas fornecem evidência. Ciência funciona também SEM ver diretamente.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos de geologia planetária. Um vem com vídeo real de erupção vulcânica.",
    instrucao: "Vocabulário planetário",
    cadernos: [
      { id: "crosta", capa: "CROSTA", emoji: "🪨", cor: "from-amber-500 to-orange-700", conteudo: "Camada mais externa e fina da Terra. Onde vivemos. Feita de rochas — continental (mais espessa) e oceânica.", exemplo: "Ex.: 5 a 70 km de espessura.", fotoUrl: camadasImg },
      { id: "manto", capa: "MANTO", emoji: "🌋", cor: "from-red-500 to-rose-700", conteudo: "Camada intermediária, muito grossa. Rochas em estado semi-fluido (astenosfera). Origem do MAGMA que alimenta vulcões — veja o vídeo.", exemplo: "Ex.: ~2900 km de espessura.", videoUrl: vulcaoVideo.url },
      { id: "nucleo", capa: "NÚCLEO", emoji: "🔥", cor: "from-yellow-500 to-orange-700", conteudo: "Camada mais interna. Ferro e níquel a ~5000°C. Núcleo externo LÍQUIDO gera o campo magnético terrestre.", exemplo: "Ex.: raio de ~3500 km.", fotoUrl: camadasImg },
      { id: "rotacao", capa: "ROTAÇÃO", emoji: "🔄", cor: "from-sky-500 to-cyan-700", conteudo: "Movimento da Terra em torno do PRÓPRIO EIXO. Dura 24h e causa o DIA e a NOITE.", exemplo: "Ex.: velocidade ~1670 km/h no Equador.", fotoUrl: terraImg },
      { id: "translacao", capa: "TRANSLAÇÃO", emoji: "🌌", cor: "from-indigo-500 to-purple-700", conteudo: "Movimento da Terra em torno do SOL. Dura 365,25 dias e causa as ESTAÇÕES do ano (com a inclinação do eixo).", exemplo: "Ex.: velocidade média ~107.000 km/h.", fotoUrl: solarImg },
    ],
    falaFinal: "Crosta, manto, núcleo, rotação, translação. Cinco palavras pra entender geologia e astronomia básicas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "O sistema solar em escala. Toque em cada corpo celeste.",
    instrucao: "Toque nos planetas",
    mapaUrl: solarImg,
    pontos: [
      { id: "sol", x: 50, y: 55, emoji: "☀️", cor: "from-yellow-500 to-orange-700", titulo: "Sol", texto: "Estrela central. Contém 99,8% da massa do sistema. Fonte de toda energia dos planetas.", fotoUrl: solarImg },
      { id: "mercurio", x: 12, y: 60, emoji: "🌑", cor: "from-slate-500 to-slate-700", titulo: "Mercúrio", texto: "Planeta rochoso mais próximo do Sol. Sem atmosfera significativa — temperaturas extremas.", fotoUrl: solarImg },
      { id: "terra", x: 82, y: 55, emoji: "🌍", cor: "from-emerald-500 to-teal-700", titulo: "Terra", texto: "Terceiro planeta. Único com vida conhecida. Atmosfera + água líquida + campo magnético protetor.", fotoUrl: terraImg },
      { id: "jupiter", x: 25, y: 40, emoji: "🪐", cor: "from-amber-500 to-orange-700", titulo: "Júpiter", texto: "Maior planeta — gasoso gigante. Com mais 90 luas conhecidas. Protege a Terra de asteroides.", fotoUrl: solarImg },
    ],
    falaFinal: "8 planetas orbitando 1 estrela. Nossa vizinhança cósmica em um sistema entre bilhões.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de geologia e astronomia.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que causa o DIA e a NOITE na Terra?", fotoUrl: terraImg,
        cards: [
          { id: "a", emoji: "🔄", titulo: "Rotação da Terra em torno do próprio eixo (24h)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌌", titulo: "Translação da Terra ao redor do Sol", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌙", titulo: "A Lua bloqueando o Sol", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. Rotação = 24h = ciclo dia-noite.",
        feedbackErro: "Translação leva UM ANO (estações). Rotação leva 24h e causa dia/noite." },
      { id: "q2", pergunta: "Qual camada da Terra alimenta os vulcões?", fotoUrl: vulcaoImg,
        cards: [
          { id: "a", emoji: "🌋", titulo: "Manto (magma sobe até a superfície)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🪨", titulo: "Crosta (rocha sólida fria)", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔥", titulo: "Núcleo (muito profundo)", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Magma nasce no MANTO e sobe por fraturas na crosta.",
        feedbackErro: "Crosta é sólida. Núcleo é muito profundo. Magma vem do MANTO." },
      { id: "q3", pergunta: "Por que existem estações do ano?", fotoUrl: solarImg,
        cards: [
          { id: "a", emoji: "📐", titulo: "Pela INCLINAÇÃO do eixo da Terra durante a translação", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "☀️", titulo: "Porque a Terra se afasta e aproxima do Sol", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌡️", titulo: "Porque a temperatura do Sol muda", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Eixo inclinado a 23,5° faz cada hemisfério receber mais/menos luz em cada época.",
        feedbackErro: "Distância varia POUCO. O que muda é a INCLINAÇÃO — determina quanto sol cada hemisfério recebe." },
    ],
    falaFinal: "Rotação, translação, inclinação. Três movimentos explicam quase tudo do nosso calendário.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "A Terra tem duas grandes divisões: SUPERFÍCIE (crosta + atmosfera onde vivemos) e INTERIOR (manto + núcleo).",
    instrucao: "Toque nos interruptores",
    mapaUrl: camadasImg,
    camadas: [
      { id: "sup", rotulo: "Superfície", emoji: "🌍", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 30 }, descricao: "Crosta + atmosfera + hidrosfera. Onde a vida existe e é sustentada. Camada FINA em relação ao raio.", fotoUrl: terraImg },
      { id: "int", rotulo: "Interior", emoji: "🔥", cor: "from-red-500 to-orange-700", rect: { x: 2, y: 32, w: 96, h: 66 }, descricao: "Manto + núcleo. Zonas quentes e dinâmicas — geram vulcões, terremotos e o campo magnético.", fotoUrl: camadasImg },
    ],
    falaFinal: "Vivemos numa fina casca sobre um planeta INTERNAMENTE ATIVO. Todo dia tectônica trabalha.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Da superfície ao centro: ordene as camadas da Terra.",
    instrucao: "Toque na ORDEM (fora → dentro)",
    pergunta: "Qual a sequência das camadas da Terra?",
    paradas: [
      { id: "atm", emoji: "🌫️", rotulo: "1. Atmosfera", descricao: "Camada gasosa envolvendo o planeta.", fotoUrl: terraImg },
      { id: "crosta", emoji: "🪨", rotulo: "2. Crosta", descricao: "Camada rochosa sólida onde vivemos.", fotoUrl: camadasImg },
      { id: "manto", emoji: "🌋", rotulo: "3. Manto", descricao: "Rochas semi-fluidas em alta temperatura.", fotoUrl: camadasImg },
      { id: "nucleo_ext", emoji: "💧", rotulo: "4. Núcleo externo", descricao: "Metal LÍQUIDO — gera o campo magnético.", fotoUrl: camadasImg },
      { id: "nucleo_int", emoji: "🔥", rotulo: "5. Núcleo interno", descricao: "Metal SÓLIDO a ~5000°C sob pressão extrema.", fotoUrl: camadasImg },
    ],
    ordemCerta: ["atm", "crosta", "manto", "nucleo_ext", "nucleo_int"],
    feedbackAcerto: "Exato. Sequência oficial da geofísica — de fora para dentro.",
    feedbackErro: "De FORA pra DENTRO: atmosfera → crosta → manto → núcleo externo → núcleo interno.",
    falaFinal: "Cinco camadas com propriedades DIFERENTES. Cada uma cumpre função na dinâmica planetária.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Programa 6.",
    tituloLivro: "📓 Relatório · Observação 09",
    subtitulo: "Evidência da esfericidade da Terra por gnômon",
    paragrafos: [
      { id: "p1", texto: "MÉTODO: replicamos o experimento de ERATÓSTENES (240 a.C.). Fincamos duas varas verticais (gnômons) em cidades distantes 800 km e medimos as sombras ao meio-dia solar do mesmo dia. Uma vara não teve sombra, a outra sim, com ângulo de 7,2°.", chaves: ["gnômon", "Eratóstenes"], definicoes: { gnômon: "Vara vertical usada para medir sombras solares.", Eratóstenes: "Sábio grego que calculou a circunferência da Terra em 240 a.C." }, fotoUrl: terraImg },
      { id: "p2", texto: "RACIOCÍNIO: se a Terra fosse PLANA, ambas as varas teriam sombras iguais no mesmo horário. A DIFERENÇA de sombra só faz sentido se a superfície for CURVA. Isso é evidência direta da esfericidade — sem satélite, sem foto.", chaves: ["esfericidade", "curva"], definicoes: { esfericidade: "Formato aproximadamente esférico da Terra.", curva: "Superfície não plana." }, fotoUrl: camadasImg },
      { id: "p3", texto: "CONCLUSÃO: com regra de três (7,2° corresponde a 800 km), calculamos a circunferência = 40.000 km. Valor moderno confirmado por satélite: 40.075 km. Eratóstenes acertou HÁ 2000 ANOS — sem tecnologia moderna.", chaves: ["circunferência"], definicoes: { circunferência: "Comprimento total ao redor de um círculo ou esfera." }, fotoUrl: solarImg },
    ],
    falaFinal: "Ciência não precisa de satélite pra descobrir a forma da Terra. Precisa de MÉTODO e RACIOCÍNIO.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Identifique a CAMADA ou MOVIMENTO.",
    instrucao: "⏱️ Escolha a resposta correta",
    duracaoSegundos: 25,
    pecas: [
      { id: "crosta", emoji: "🪨", rotulo: "Crosta" },
      { id: "manto", emoji: "🌋", rotulo: "Manto" },
      { id: "nucleo", emoji: "🔥", rotulo: "Núcleo" },
      { id: "rotacao", emoji: "🔄", rotulo: "Rotação" },
      { id: "translacao", emoji: "🌌", rotulo: "Translação" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cidades e continentes", emoji: "🏙️", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Camada rochosa fina", emoji: "🪨", cor: "from-emerald-500 to-teal-700" }, contexto: "A camada MAIS EXTERNA onde vivemos, com continentes e oceanos.", pecaCertaId: "crosta", fotoUrl: camadasImg, feedbackAcerto: "CROSTA — camada externa, superfície habitável.", feedbackErro: "Onde vivemos = CROSTA." },
      { id: "r2", municipioA: { nome: "Origem do magma", emoji: "🌋", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Rocha semi-fluida", emoji: "🔥", cor: "from-orange-500 to-amber-700" }, contexto: "Camada intermediária onde o MAGMA se forma antes de alimentar vulcões.", pecaCertaId: "manto", fotoUrl: vulcaoImg, feedbackAcerto: "MANTO — origem do magma.", feedbackErro: "Magma nasce no MANTO — nem crosta, nem núcleo." },
      { id: "r3", municipioA: { nome: "1 ano completo", emoji: "🌌", cor: "from-indigo-500 to-purple-700" }, municipioB: { nome: "Ao redor do Sol", emoji: "☀️", cor: "from-yellow-500 to-orange-700" }, contexto: "Movimento que a Terra faz em torno do Sol, durando 365 dias.", pecaCertaId: "translacao", fotoUrl: solarImg, feedbackAcerto: "TRANSLAÇÃO — 365 dias em torno do Sol.", feedbackErro: "Ao redor do Sol + 1 ano = TRANSLAÇÃO. Rotação é 24h no próprio eixo." },
    ],
    falaFinal: "Você já domina o vocabulário básico de geologia e astronomia.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "A dinâmica planetária tem duas escalas: MICRO (interna — tectônica, vulcanismo) e MACRO (externa — rotação, translação, órbita solar).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: terraImg,
    fatias: [
      { id: "micro", rotulo: "Interna", emoji: "🌋", percentual: 50, cor: "#ef4444", descricao: "Movimento das placas tectônicas, magma no manto, terremotos, vulcões. Ativa o tempo todo por dentro.", exemplos: ["Terremotos", "Vulcões", "Deriva continental"], fotoUrl: vulcaoImg },
      { id: "macro", rotulo: "Externa", emoji: "🌌", percentual: 50, cor: "#6366f1", descricao: "Rotação (dia/noite), translação (estações), inclinação do eixo. Dinâmica astronômica.", exemplos: ["Dia e noite", "Estações", "Movimento aparente do Sol"], fotoUrl: solarImg },
    ],
    falaFinal: "Terra dinâmica por dentro E por fora. Duas escalas, um planeta.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão do Programa 6. 3 perguntas e sua Certificação de Astrônomo Júnior é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: terraImg,
    perguntas: [
      { id: "q1", pergunta: "Qual a ordem correta das camadas da Terra (fora → dentro)?", fotoUrl: camadasImg,
        opcoes: [
          { id: "a", texto: "Crosta → manto → núcleo externo → núcleo interno", correta: true },
          { id: "b", texto: "Núcleo → crosta → manto → atmosfera" },
        ],
        feedbackAcerto: "Correto. Sequência oficial da geofísica.",
        feedbackErro: "Da SUPERFÍCIE ao CENTRO: crosta → manto → núcleo externo → núcleo interno." },
      { id: "q2", pergunta: "Como Eratóstenes provou a esfericidade da Terra em 240 a.C.?", fotoUrl: terraImg,
        opcoes: [
          { id: "a", texto: "Medindo sombras de varas em cidades distantes ao mesmo tempo", correta: true },
          { id: "b", texto: "Enviando um satélite para o espaço" },
        ],
        feedbackAcerto: "Sim. Método brilhante e simples — só precisou de varas, sombras e matemática.",
        feedbackErro: "Sem satélite. Só varas + sombras + raciocínio geométrico." },
      { id: "q3", pergunta: "Por que os vulcões existem?", fotoUrl: vulcaoImg,
        opcoes: [
          { id: "a", texto: "O magma do manto sobe pela crosta em zonas de fraqueza", correta: true },
          { id: "b", texto: "Meteoritos criam buracos que expõem lava" },
        ],
        feedbackAcerto: "Exato. Magma vem do MANTO e sobe onde a crosta tem fraturas.",
        feedbackErro: "Não são meteoritos. Vulcões são a saída natural do MAGMA do manto." },
    ],
    selo: { nome: "Certificação de Astrônomo Júnior", subtitulo: "Academia Científica · Programa 6 concluído", emoji: "🌍", cor: "from-indigo-500 to-purple-700" },
    falaFinal: "Programa 6 concluído. Você entende a estrutura e movimentos da Terra.",
  },
};
