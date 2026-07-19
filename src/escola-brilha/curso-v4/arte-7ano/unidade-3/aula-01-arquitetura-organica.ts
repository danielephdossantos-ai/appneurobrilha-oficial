import type { AulaArteV1 } from "../../types";
import __asset_fallingwaterExt from "@/assets/arte-7ano/u3-fallingwater-exterior.jpg.asset.json";
const fallingwaterExt = __asset_fallingwaterExt.url;
import __asset_fallingwaterInt from "@/assets/arte-7ano/u3-fallingwater-interior.jpg.asset.json";
const fallingwaterInt = __asset_fallingwaterInt.url;
import __asset_casaBatllo from "@/assets/arte-7ano/u3-casa-batllo.jpg.asset.json";
const casaBatllo = __asset_casaBatllo.url;
import __asset_sagradaColunas from "@/assets/arte-7ano/u3-sagrada-familia-colunas.jpg.asset.json";
const sagradaColunas = __asset_sagradaColunas.url;
import __asset_milwaukeeMuseum from "@/assets/arte-7ano/u3-milwaukee-museum.jpg.asset.json";
const milwaukeeMuseum = __asset_milwaukeeMuseum.url;
import __asset_favoMel from "@/assets/arte-7ano/u3-favo-mel-fachada.jpg.asset.json";
const favoMel = __asset_favoMel.url;
import __asset_vitoriaRegia from "@/assets/arte-7ano/u3-vitoria-regia.jpg.asset.json";
const vitoriaRegia = __asset_vitoriaRegia.url;
import __asset_nautilus from "@/assets/arte-7ano/u3-nautilus-espiral.jpg.asset.json";
const nautilus = __asset_nautilus.url;
import __asset_sementeGeom from "@/assets/arte-7ano/u3-semente-geometrica.jpg.asset.json";
const sementeGeom = __asset_sementeGeom.url;
import __asset_boscoVerticale from "@/assets/arte-7ano/u3-bosco-verticale.jpg.asset.json";
const boscoVerticale = __asset_boscoVerticale.url;

/**
 * Arte · 7º Ano · Unidade 3 · Aula 01 — "Arquitetura Orgânica e Cidades Sustentáveis"
 * Metanarrativa: 🚀 Crônicas das Cidades Suspensas
 * Foco: Wright, Gaudí, biomorfismo, sustentabilidade espacial.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-arquitetura-organica",
  titulo: "Arquitetura Orgânica e Cidades Sustentáveis",
  iconeTrilha: "🌿",
  bncc: ["EF69AR04", "EF69AR05", "EF69AR31"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Arquiteto Biomórfico! Este setor da Cidade Suspensa tem prédios que parecem conchas gigantes e troncos de árvores — as janelas imitam ranhuras de folhas. Toca em cada estrutura pra desbloquear o módulo de arquitetura viva.",
    titulo: "🌿 O Setor que Respira",
    instrucao: "Toca em cada estrutura orgânica",
    itens: [
      { emoji: "🏞️", rotulo: "Casa da Cascata (Fallingwater, 1935)", descricao: "Frank Lloyd Wright projetou uma casa INTEIRA sobre uma cachoeira real. As pedras entram nas salas, a água canta no chão. Engenharia + topografia = arquitetura orgânica.", cor: "#0f766e", fotoUrl: fallingwaterExt },
      { emoji: "🐉", rotulo: "Casa Batlló (Gaudí)", descricao: "Antoni Gaudí curvou toda a fachada como se fosse o dorso de um dragão. Nada de linha reta — só curvas biomórficas.", cor: "#dc2626", fotoUrl: casaBatllo },
      { emoji: "🌳", rotulo: "Colunas-árvore (Sagrada Família)", descricao: "Gaudí desenhou colunas que se ramificam como galhos de floresta. A estrutura da igreja imita o crescimento das árvores.", cor: "#7c2d12", fotoUrl: sagradaColunas },
      { emoji: "🏢", rotulo: "Bosco Verticale (Milão)", descricao: "Torre residencial coberta por 900 árvores e 20 mil plantas. Um bosque VERTICAL que filtra ar e reduz calor urbano.", cor: "#059669", fotoUrl: boscoVerticale },
    ],
    falaFinal: "Você vai aprender a projetar cidades que respiram junto com a natureza.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de arquiteto biomórfico!",
    perguntas: [
      {
        pergunta: "Frank Lloyd Wright projetou a Fallingwater DIRETAMENTE sobre uma cachoeira real. O que ele quis provar com isso?",
        fotoUrl: fallingwaterInt,
        alternativas: [
          { texto: "Que a arquitetura pode se INTEGRAR à topografia natural — a casa e a paisagem viram uma coisa só", correta: true },
          { texto: "Que era mais barato construir na água do que em terreno plano", correta: false },
        ],
        feedbackAcerto: "Isso! Wright fundiu engenharia humana e geografia natural — nasceu ali a Arquitetura Orgânica.",
        feedbackErro: "Construir sobre cascata é bem mais caro. O objetivo era filosófico: integrar prédio + natureza.",
      },
      {
        pergunta: "Um projeto se inspira no favo de mel hexagonal das abelhas. Por que essa forma é tão eficiente?",
        fotoUrl: favoMel,
        alternativas: [
          { texto: "Máxima resistência mecânica usando a MENOR quantidade de material possível — matemática da natureza", correta: true },
          { texto: "Porque hexágonos são a única forma que abelhas conseguem enxergar", correta: false },
        ],
        feedbackAcerto: "Perfeito! O hexágono é o polígono mais eficiente pra encaixar sem sobras — biomimética pura.",
        feedbackErro: "Abelhas enxergam várias formas. O motivo é geométrico: hexágono maximiza espaço com mínimo material.",
      },
      {
        pergunta: "Qual é o principal objetivo de projetar um teto ecoeficiente inspirado nas asas das aves marinhas?",
        fotoUrl: boscoVerticale,
        alternativas: [
          { texto: "A curva desvia o vento forte e canaliza água da chuva pros reservatórios — economia real", correta: true },
          { texto: "Deixar a fachada só bonita, sem função prática nenhuma", correta: false },
        ],
        feedbackAcerto: "Correto! Biomimética une estética E função — natureza como manual de engenharia.",
        feedbackErro: "Ecoeficiente = economiza recursos. Só bonito não basta pra ser sustentável.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do arquiteto biomórfico.",
    cards: [
      { termo: "Arquitetura Orgânica", definicao: "Filosofia que promove a HARMONIA entre habitação humana e mundo natural — construções parecem extensões da natureza.", emoji: "🌿", cor: "#0f766e", fotoUrl: fallingwaterExt },
      { termo: "Biomorfismo", definicao: "Adotar formas, padrões e contornos que IMITAM organismos vivos (plantas, animais, esqueletos) no design.", emoji: "🐚", cor: "#dc2626", fotoUrl: nautilus },
      { termo: "Sustentabilidade Espacial", definicao: "Planejamento arquitetônico que prioriza recursos renováveis, captação de água, ventilação natural e áreas verdes integradas.", emoji: "♻️", cor: "#059669", fotoUrl: boscoVerticale },
      { termo: "Integração Topográfica", definicao: "Adaptar a construção AO terreno em vez de nivelar a paisagem — usa rochas, desníveis e vegetação como parte do prédio.", emoji: "⛰️", cor: "#7c2d12", fotoUrl: fallingwaterInt },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a natureza virou manual de engenharia urbana.",
    paragrafos: [
      "A geometria das cidades não precisa ser feita SÓ de caixas rígidas de concreto. Grandes arquitetos perceberam que podemos projetar moradias imitando as estruturas e fluxos da própria natureza — nasce a ARQUITETURA ORGÂNICA.",
      "Em 1935, Frank Lloyd Wright construiu a CASA DA CASCATA (Fallingwater) sobre uma cachoeira real na Pensilvânia. As rochas entram pelas paredes, a água corre por baixo das salas. A engenharia humana funde com a topografia natural — a casa e a paisagem viram uma coisa só.",
      "Antoni Gaudí levou o BIOMORFISMO ao extremo em Barcelona: a Casa Batlló tem fachada curva como dorso de dragão; a Sagrada Família tem colunas que se ramificam como galhos de árvores sustentando uma floresta de pedra. Nada de linhas retas — só curvas orgânicas.",
      "A regra matemática é a BIOMIMÉTICA: copiar o que a natureza levou milhões de anos pra otimizar. Um favo de mel hexagonal oferece a máxima resistência usando o mínimo de material. Uma asa de ave marinha desvia vento e canaliza água. Formas eficientes que salvam energia.",
      "Nas cidades contemporâneas, isso vira SUSTENTABILIDADE ESPACIAL: o Bosco Verticale de Milão tem 900 árvores plantadas em varandas — um bosque vertical que filtra o ar. Torres em favo de mel, tetos-asa, jardins verticais e painéis solares geométricos criam cidades que RESPIRAM em simbiose com o meio ambiente.",
    ],
    pigmentos: [
      { nome: "Fallingwater", hex: "#0f766e", fonte: "Wright + topografia real", emoji: "🏞️", fotoUrl: fallingwaterExt },
      { nome: "Casa Batlló", hex: "#dc2626", fonte: "Gaudí + curvas de dragão", emoji: "🐉", fotoUrl: casaBatllo },
      { nome: "Colunas-árvore", hex: "#7c2d12", fonte: "Sagrada Família", emoji: "🌳", fotoUrl: sagradaColunas },
      { nome: "Bosque Vertical", hex: "#059669", fonte: "Torres com 900 árvores", emoji: "🌲", fotoUrl: boscoVerticale },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do arquiteto biomórfico!",
    perguntas: [
      {
        pergunta: "O que a Casa da Cascata (Fallingwater) faz de tão revolucionário na história da arquitetura?",
        fotoUrl: fallingwaterInt,
        alternativas: [
          { texto: "Foi construída DIRETO sobre uma cachoeira real, integrando pedras e som da água à estrutura das salas", correta: true },
          { texto: "Foi a primeira casa com telhado de vidro totalmente transparente", correta: false },
        ],
        feedbackAcerto: "Correto! Wright fez a casa nascer do lugar — engenharia + topografia = organicismo puro.",
        feedbackErro: "Não era sobre teto de vidro — era sobre nascer da natureza. A cascata continua correndo debaixo dela.",
      },
      {
        pergunta: "Como Gaudí construiu as colunas gigantes da Sagrada Família?",
        fotoUrl: sagradaColunas,
        alternativas: [
          { texto: "Fez colunas que se RAMIFICAM como galhos de árvores, imitando uma floresta de pedra", correta: true },
          { texto: "Usou colunas totalmente retas e iguais como as templos gregos", correta: false },
        ],
        feedbackAcerto: "Isso! Colunas-árvore que se abrem em galhos: biomorfismo em escala catedral.",
        feedbackErro: "O jeito grego é o oposto: Gaudí quis quebrar essa rigidez com formas vivas.",
      },
      {
        pergunta: "O que é o Bosco Verticale de Milão?",
        fotoUrl: boscoVerticale,
        alternativas: [
          { texto: "Torre residencial coberta por CENTENAS de árvores plantadas nas varandas — um bosque vertical", correta: true },
          { texto: "Um parque no chão sem prédio nenhum, só grama e caminhos", correta: false },
        ],
        feedbackAcerto: "Perfeito! Prédio + floresta = filtragem de ar, sombra e biodiversidade em plena cidade.",
        feedbackErro: "Se fosse só parque no chão não seria 'verticale'. A ideia é SUBIR o bosque pra dentro do prédio.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada obra pelo PRINCÍPIO orgânico que ela usa!",
    animais: [
      {
        nome: "Fallingwater sobre a cascata", emoji: "🏞️", fotoUrl: fallingwaterExt,
        corAlvo: { nome: "Integração Topográfica", hex: "#0f766e" },
        opcoes: [
          { nome: "Integração Topográfica", hex: "#0f766e" },
          { nome: "Estrutura Hexagonal", hex: "#f59e0b" },
          { nome: "Biomorfismo Curvo", hex: "#dc2626" },
        ],
        falaAcerto: "Isso! Prédio nascendo da paisagem = integração topográfica.",
      },
      {
        nome: "Colunas ramificadas da Sagrada Família", emoji: "🌳", fotoUrl: sagradaColunas,
        corAlvo: { nome: "Biomorfismo (formas vivas)", hex: "#dc2626" },
        opcoes: [
          { nome: "Biomorfismo (formas vivas)", hex: "#dc2626" },
          { nome: "Integração Topográfica", hex: "#0f766e" },
          { nome: "Sustentabilidade Vegetal", hex: "#059669" },
        ],
        falaAcerto: "Correto! Colunas imitando árvores = biomorfismo direto.",
      },
      {
        nome: "Bosco Verticale coberto de árvores", emoji: "🌲", fotoUrl: boscoVerticale,
        corAlvo: { nome: "Sustentabilidade Vegetal", hex: "#059669" },
        opcoes: [
          { nome: "Sustentabilidade Vegetal", hex: "#059669" },
          { nome: "Estrutura Hexagonal", hex: "#f59e0b" },
          { nome: "Biomorfismo (formas vivas)", hex: "#dc2626" },
        ],
        falaAcerto: "Perfeito! 900 árvores plantadas em varandas = sustentabilidade espacial.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra projetar um edifício biomórfico!",
    passos: [
      { id: "p1", texto: "Escolho uma FORMA NATURAL de referência (vitória-régia, favo, nautilus, semente)", emoji: "🔍", ordem: 1, fotoUrl: vitoriaRegia },
      { id: "p2", texto: "Analiso a GEOMETRIA eficiente dessa forma (hexágono, espiral, camadas)", emoji: "📐", ordem: 2, fotoUrl: favoMel },
      { id: "p3", texto: "Adapto a estrutura pro terreno — INTEGRAÇÃO com relevo, sol e vento", emoji: "⛰️", ordem: 3, fotoUrl: fallingwaterExt },
      { id: "p4", texto: "Adiciono ecoeficiência: jardins verticais, painéis solares, captação de água", emoji: "🌿", ordem: 4, fotoUrl: boscoVerticale },
      { id: "p5", texto: "Curvo as fachadas com detalhes biomórficos — o prédio VIRA parte da paisagem", emoji: "🐚", ordem: 5, fotoUrl: casaBatllo },
    ],
    falaAcerto: "Você acabou de projetar o primeiro Eco-Distrito Flutuante da Cidade Suspensa!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Lê o diário do arquiteto biomórfico. Toca nas palavras coloridas.",
    titulo: "Diário do Arquiteto Biomórfico",
    trechos: [
      { texto: "Sou arquiteto biomórfico. Minhas obras seguem a filosofia da", palavraDestaque: "Arquitetura Orgânica", corDestaque: "#0f766e" },
      { texto: "e imitam formas vivas —", palavraDestaque: "biomorfismo", corDestaque: "#dc2626" },
      { texto: "puro. Wright integrou a casa à cachoeira; Gaudí curvou pedras como", palavraDestaque: "árvores", corDestaque: "#7c2d12" },
      { texto: "e usei favos de mel pra máxima eficiência estrutural. Hoje projeto torres com jardins verticais que garantem", palavraDestaque: "sustentabilidade", corDestaque: "#059669" },
      { texto: "espacial. A cidade precisa RESPIRAR." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🌿 Construtor Ecoeficiente! Toca em cada módulo antes do tempo acabar.",
    titulo: "🌿 O Construtor Ecoeficiente",
    instrucao: "Encaixe os módulos biomórficos na encosta da montanha!",
    tempoSeg: 35,
    itens: [
      { emoji: "🎋", rotulo: "Bambu estrutural", cor: "#059669" },
      { emoji: "🏗️", rotulo: "Concreto reciclado", cor: "#78716c" },
      { emoji: "⬡", rotulo: "Módulo hexagonal (favo)", cor: "#f59e0b" },
      { emoji: "🌳", rotulo: "Jardim vertical", cor: "#0f766e" },
      { emoji: "☀️", rotulo: "Painel solar geométrico", cor: "#eab308" },
      { emoji: "💧", rotulo: "Captação de chuva", cor: "#0891b2" },
    ],
    falaFinal: "Estrutura estável, ecoeficiente e integrada ao terreno. Eco-Distrito ATIVO!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a página do Eco-Distrito Flutuante!",
    titulo: "📓 Caderno do Arquiteto Biomórfico",
    itens: [
      { emoji: "🏞️", rotulo: "Fallingwater (Wright, 1935)", descricao: "Casa construída sobre cachoeira real — engenharia integrada à topografia natural.", cor: "#0f766e", fotoUrl: fallingwaterExt },
      { emoji: "🐉", rotulo: "Casa Batlló (Gaudí)", descricao: "Fachada curva como dorso de dragão — biomorfismo extremo em Barcelona.", cor: "#dc2626", fotoUrl: casaBatllo },
      { emoji: "🌳", rotulo: "Colunas-árvore (Sagrada Família)", descricao: "Colunas ramificadas como galhos — floresta de pedra dentro da igreja.", cor: "#7c2d12", fotoUrl: sagradaColunas },
      { emoji: "⬡", rotulo: "Estrutura em favo de mel", descricao: "Máxima resistência mecânica com mínimo de material — geometria eficiente da natureza.", cor: "#f59e0b", fotoUrl: favoMel },
      { emoji: "🐚", rotulo: "Espiral do nautilus", descricao: "Referência de biomimética para escadas, rampas e crescimento orgânico das estruturas.", cor: "#0891b2", fotoUrl: nautilus },
      { emoji: "🌲", rotulo: "Bosco Verticale (Milão)", descricao: "Torre com 900 árvores plantadas nas varandas — bosque vertical que filtra ar urbano.", cor: "#059669", fotoUrl: boscoVerticale },
    ],
    falaFinal: "Eco-Distrito Flutuante RESTAURADO — a Cidade Suspensa começa a respirar!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, arquiteto biomórfico!",
    quiz: {
      pergunta: "Qual é o OBJETIVO PRINCIPAL do Biomorfismo aplicado ao design das habitações e cidades contemporâneas?",
      alternativas: [
        { texto: "Copiar formas e estruturas EFICIENTES da natureza para criar construções mais harmônicas e integradas ao meio ambiente", correta: true },
        { texto: "Fazer com que todas as casas sejam pintadas obrigatoriamente de verde e marrom", correta: false },
      ],
      feedback: "Excelente! O biomorfismo une engenharia natural (Wright, Gaudí, favos de mel, nautilus) à criatividade artística para resolver problemas urbanos reais: economia de material, ventilação passiva, captação de água e integração com o relevo. A cor não é o ponto — o PRINCÍPIO ESTRUTURAL da natureza é o que importa.",
    },
    missaoFamilia:
      "🌿 Engenharia da Natureza: no quintal, parque ou praça, coletem em família formas naturais — uma pinha, uma folha seca, uma concha, um graveto trançado. Analisem a engenharia geométrica de cada uma. Depois desenhem juntos como seria uma estação de transporte público inspirada em uma dessas formas. Registrem foto + desenho no álbum.",
    recompensaTitulo: "🌿 Eco-Distrito Flutuante restaurado — a Cidade Suspensa aprendeu a respirar.",
    recompensaItem: "🧭 Compasso Áureo de Fibra de Carbono",
  },

  recompensa: { xp: 130, moedas: 65, medalha: "Compasso Áureo de Fibra de Carbono" },
};
