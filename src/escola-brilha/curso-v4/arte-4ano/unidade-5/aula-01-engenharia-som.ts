import type { AulaArteV1 } from "../../types";
import __asset_mapaRegua from "@/assets/arte-4ano/u5-mapa-regua.jpg.asset.json";
const mapaRegua = __asset_mapaRegua.url;
import __asset_mapaCopos from "@/assets/arte-4ano/u5-mapa-copos.jpg.asset.json";
const mapaCopos = __asset_mapaCopos.url;
import __asset_mapaRussolo from "@/assets/arte-4ano/u5-mapa-russolo.jpg.asset.json";
const mapaRussolo = __asset_mapaRussolo.url;
import __asset_mapaUakti from "@/assets/arte-4ano/u5-mapa-uakti.jpg.asset.json";
const mapaUakti = __asset_mapaUakti.url;
import vocabFrequencia from "@/assets/arte-4ano/u5-vocab-frequencia.jpg";
import vocabTimbre from "@/assets/arte-4ano/u5-vocab-timbre.jpg";
import __asset_vocabNaoConv from "@/assets/arte-4ano/u5-vocab-naoconv.jpg.asset.json";
const vocabNaoConv = __asset_vocabNaoConv.url;
import __asset_matCaixa from "@/assets/arte-4ano/u5-mat-caixaElastico.jpg.asset.json";
const matCaixa = __asset_matCaixa.url;
import __asset_matTubos from "@/assets/arte-4ano/u5-mat-tubos.jpg.asset.json";
const matTubos = __asset_matTubos.url;
import __asset_matChaves from "@/assets/arte-4ano/u5-mat-chaves.jpg.asset.json";
const matChaves = __asset_matChaves.url;
import __asset_qGraveAgudo from "@/assets/arte-4ano/u5-q-graveagudo.jpg.asset.json";
const qGraveAgudo = __asset_qGraveAgudo.url;
import __asset_qFlauta from "@/assets/arte-4ano/u5-q-flauta.jpg.asset.json";
const qFlauta = __asset_qFlauta.url;
import __asset_passo1 from "@/assets/arte-4ano/u5-passo1.jpg.asset.json";
const passo1 = __asset_passo1.url;
import __asset_passo2 from "@/assets/arte-4ano/u5-passo2.jpg.asset.json";
const passo2 = __asset_passo2.url;
import __asset_passo3 from "@/assets/arte-4ano/u5-passo3.jpg.asset.json";
const passo3 = __asset_passo3.url;
import __asset_passo4 from "@/assets/arte-4ano/u5-passo4.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_passo5 from "@/assets/arte-4ano/u5-passo5.jpg.asset.json";
const passo5 = __asset_passo5.url;

/**
 * Arte · 4º Ano · Unidade 5 · Aula 01 — "A Engenharia do Som"
 * Metanarrativa: 👁️ O Laboratório da Ilusão Visu-Espacial
 * Fontes: Manifesto Futurista "A Arte dos Ruídos" (Russolo, 1913) + Uakti/Hermeto Pascoal
 * (EF15AR13 / EF15AR14 / EF15AR15)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-engenharia-som",
  titulo: "A Engenharia do Som — Frequência, Timbre e Instrumentos Não-Convencionais",
  iconeTrilha: "🔊",
  bncc: ["EF15AR13", "EF15AR14", "EF15AR15"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Engenheira Acústica! Bate uma régua na mesa: som AGUDO. Bate numa caixa de papelão: som GROSSO. Som é FÍSICA — vibração viajando pelo ar. Toca em cada pista pra entender.",
    titulo: "🔊 O Laboratório de Sons",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "📏", rotulo: "Régua vibrando", descricao: "Ponta na beira da mesa, tapa em cima: vibra tão rápido que quase some. Som AGUDO, fino.", cor: "#0ea5e9", fotoUrl: mapaRegua },
      { emoji: "🥛", rotulo: "3 copos de vidro", descricao: "Cheio, meio e vazio. Batidos com lápis, cada um solta uma nota diferente — do grave ao agudo.", cor: "#f59e0b", fotoUrl: mapaCopos },
      { emoji: "🏭", rotulo: "Russolo (1913)", descricao: "O italiano Luigi Russolo construiu os Intonarumori — caixas que imitavam ruídos de máquina e viraram MÚSICA.", cor: "#78350f", fotoUrl: mapaRussolo },
      { emoji: "🎋", rotulo: "Uakti brasileiro", descricao: "Grupo mineiro que afina tubos de PVC e vira orquestra. Cano vira instrumento!", cor: "#22c55e", fotoUrl: mapaUakti },
    ],
    falaFinal: "Você vai transformar qualquer coisa em instrumento — igual os grandes!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o ouvido de engenheira antes de começar!",
    perguntas: [
      {
        pergunta: "Um som GRAVE (grosso, tipo trovão) vibra…",
        fotoUrl: qGraveAgudo,
        alternativas: [
          { texto: "Mais devagar que um som agudo", correta: true },
          { texto: "Mais rápido que um som agudo", correta: false },
        ],
        feedbackAcerto: "Isso! Vibração LENTA = grave. Vibração RÁPIDA = agudo.",
        feedbackErro: "Ao contrário: grave = vibra devagar; agudo = vibra rápido.",
      },
      {
        pergunta: "Ao bater 3 copos idênticos (cheio, meio, vazio), qual solta o som mais AGUDO?",
        fotoUrl: mapaCopos,
        alternativas: [
          { texto: "O copo VAZIO (vibra mais rápido)", correta: true },
          { texto: "O copo CHEIO de água", correta: false },
        ],
        feedbackAcerto: "Correto! Menos água = vibração mais rápida = som mais agudo.",
        feedbackErro: "O cheio vibra devagar (grave). O VAZIO vibra rápido (agudo).",
      },
      {
        pergunta: "Uma flauta e uma colher tocando a MESMA nota. Como o ouvido distingue?",
        fotoUrl: qFlauta,
        alternativas: [
          { texto: "Pelo TIMBRE — o formato da onda é diferente", correta: true },
          { texto: "Pela altura da nota — é a mesma", correta: false },
        ],
        feedbackAcerto: "Isso! Timbre é a assinatura da fonte sonora.",
        feedbackErro: "Se é a mesma nota, altura é igual. O que muda é o TIMBRE.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário da física do som. Toca em cada card!",
    cards: [
      { termo: "Altura (Frequência)", definicao: "Se o som é GRAVE (grosso, vibração lenta) ou AGUDO (fino, vibração rápida).", emoji: "📈", cor: "#0ea5e9", fotoUrl: vocabFrequencia },
      { termo: "Timbre", definicao: "O 'formato' da onda sonora. É o que diferencia uma flauta de uma colher tocando a mesma nota.", emoji: "🎨", cor: "#a855f7", fotoUrl: vocabTimbre },
      { termo: "Instrumento Não-Convencional", definicao: "Objeto que não foi feito pra ser instrumento, mas vira música (canos, chaves, panelas, copos).", emoji: "🎋", cor: "#22c55e", fotoUrl: vocabNaoConv },
      { termo: "Vibração", definicao: "Movimento rápido de ida-e-volta que empurra o ar e cria ondas sonoras.", emoji: "〰️", cor: "#f59e0b", fotoUrl: mapaRegua },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a física virou música contemporânea.",
    paragrafos: [
      "Som é VIBRAÇÃO. Quando algo vibra, empurra o ar em ondas. As ondas chegam no seu ouvido — o cérebro traduz em som.",
      "Vibração RÁPIDA = som AGUDO (fino, tipo apito). Vibração LENTA = som GRAVE (grosso, tipo trovão). Isso se chama ALTURA ou FREQUÊNCIA.",
      "Mesmo tocando a MESMA nota, uma flauta e uma colher soam diferente. Isso é TIMBRE — a 'cor' particular de cada fonte sonora. Cada instrumento tem uma assinatura.",
      "Em 1913, Luigi Russolo publicou 'A Arte dos Ruídos' e construiu os Intonarumori. No Brasil, o grupo Uakti afina tubos de PVC. Qualquer objeto pode virar instrumento — é só entender a física.",
    ],
    pigmentos: [
      { nome: "Caixa + elásticos", hex: "#c2410c", fonte: "Elástico grosso = grave. Fino = agudo.", emoji: "📦", fotoUrl: matCaixa },
      { nome: "Tubos de PVC", hex: "#e5e7eb", fonte: "Base do som Uakti — cano vira nota.", emoji: "🎋", fotoUrl: matTubos },
      { nome: "Chaveiro", hex: "#78350f", fonte: "Metal batendo em metal — timbre único.", emoji: "🔑", fotoUrl: matChaves },
      { nome: "Copos com água", hex: "#0ea5e9", fonte: "Escala musical líquida — muda a água, muda a nota.", emoji: "🥛", fotoUrl: mapaCopos },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno acústico!",
    perguntas: [
      {
        pergunta: "Qual propriedade do som diz se ele é GRAVE ou AGUDO?",
        fotoUrl: vocabFrequencia,
        alternativas: [
          { texto: "Altura (frequência)", correta: true },
          { texto: "Cor", correta: false },
        ],
        feedbackAcerto: "Isso! Altura = frequência = grave/agudo.",
        feedbackErro: "Som não tem cor 😄. É ALTURA (frequência) que define grave/agudo.",
      },
      {
        pergunta: "Como o ouvido diferencia uma flauta e uma colher tocando a MESMA nota?",
        fotoUrl: vocabTimbre,
        alternativas: [
          { texto: "Pelo TIMBRE", correta: true },
          { texto: "Pelo volume apenas", correta: false },
        ],
        feedbackAcerto: "Correto! Timbre = identidade da fonte sonora.",
        feedbackErro: "Volume é intensidade. A diferença é o TIMBRE.",
      },
      {
        pergunta: "Um cano de PVC virou instrumento no Uakti. Isso é um exemplo de…",
        fotoUrl: mapaUakti,
        alternativas: [
          { texto: "Instrumento não-convencional", correta: true },
          { texto: "Instrumento clássico da orquestra", correta: false },
        ],
        feedbackAcerto: "Fantástico! PVC não foi feito pra tocar, mas vira música.",
        feedbackErro: "Orquestra clássica usa violino, flauta, etc. PVC é NÃO-CONVENCIONAL.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada objeto vira som por uma razão. Combina certinho!",
    animais: [
      {
        nome: "Copo VAZIO batido", emoji: "🥛", fotoUrl: mapaCopos,
        corAlvo: { nome: "Som AGUDO — vibra rápido", hex: "#dc2626" },
        opcoes: [
          { nome: "Som AGUDO — vibra rápido", hex: "#dc2626" },
          { nome: "Som GRAVE — vibra devagar", hex: "#1e3a8a" },
          { nome: "Sem som", hex: "#78350f" },
        ],
        falaAcerto: "Vazio = pouca massa vibrando = frequência ALTA = agudo.",
      },
      {
        nome: "Caixa de papelão batida", emoji: "📦", fotoUrl: matCaixa,
        corAlvo: { nome: "Som GRAVE — vibra devagar", hex: "#1e3a8a" },
        opcoes: [
          { nome: "Som GRAVE — vibra devagar", hex: "#1e3a8a" },
          { nome: "Som AGUDO como apito", hex: "#dc2626" },
          { nome: "Som de flauta", hex: "#a855f7" },
        ],
        falaAcerto: "Caixa grande = muita massa = vibração lenta = som GRAVE.",
      },
      {
        nome: "Tubos afinados do Uakti", emoji: "🎋", fotoUrl: mapaUakti,
        corAlvo: { nome: "Instrumento não-convencional", hex: "#22c55e" },
        opcoes: [
          { nome: "Instrumento não-convencional", hex: "#22c55e" },
          { nome: "Ponto de fuga central", hex: "#78350f" },
          { nome: "Persistência retiniana", hex: "#dc2626" },
        ],
        falaAcerto: "PVC virou instrumento — é a arte dos ruídos brasileira.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra montar teu Intonarumori caseiro!",
    passos: [
      { id: "p1", texto: "SEPARO uma caixa de papelão vazia (leite, cereal, sapato)", emoji: "📦", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "CONFIRO se está sem tampa, virada de boca pra cima como violão", emoji: "🎸", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "ESTICO 1 elástico GROSSO em volta — vai dar som GRAVE", emoji: "➖", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "ESTICO 1 elástico FINO ao lado — vai dar som AGUDO", emoji: "〰️", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "DEDILHO os elásticos e escuto grave × agudo — meu Intonarumori funciona!", emoji: "🎶", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Você acabou de construir um instrumento futurista de 1913!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário da engenheira acústica. Toca nas palavras coloridas.",
    titulo: "Diário da Engenheira Acústica",
    trechos: [
      { texto: "Todo som nasce de uma", palavraDestaque: "vibração", corDestaque: "#f59e0b" },
      { texto: "Se vibra rápido, é AGUDO; se vibra devagar, é GRAVE — isso é a", palavraDestaque: "frequência", corDestaque: "#0ea5e9" },
      { texto: "Flauta e colher na mesma nota soam diferente por causa do", palavraDestaque: "timbre", corDestaque: "#a855f7" },
      { texto: "Cano de PVC virou música — é um instrumento", palavraDestaque: "não-convencional", corDestaque: "#22c55e" },
      { texto: "Sou engenheira acústica — qualquer coisa pode ser instrumento!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎛️ Sintetizador de Sucata! Toca em CADA tubo e objeto antes do tempo acabar pra afinar a orquestra.",
    titulo: "🎛️ Sintetizador de Sucata",
    instrucao: "Toque em todos os componentes antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🎋", rotulo: "Tubo LONGO (grave)", cor: "#1e3a8a" },
      { emoji: "🎋", rotulo: "Tubo MÉDIO", cor: "#0ea5e9" },
      { emoji: "🎋", rotulo: "Tubo CURTO (agudo)", cor: "#dc2626" },
      { emoji: "🥛", rotulo: "Copo cheio (grave)", cor: "#78350f" },
      { emoji: "🔑", rotulo: "Chaves (timbre metálico)", cor: "#a855f7" },
      { emoji: "📦", rotulo: "Caixa com elásticos", cor: "#f59e0b" },
    ],
    falaFinal: "Orquestra afinada! Sua música de sucata está pronta.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da física do som. Toca em cada verbete!",
    titulo: "📓 Caderno da Engenharia do Som",
    itens: [
      { emoji: "〰️", rotulo: "Vibração", descricao: "Todo som vem de algo vibrando.", cor: "#f59e0b", fotoUrl: mapaRegua },
      { emoji: "📈", rotulo: "Altura (Frequência)", descricao: "Rápido = agudo. Lento = grave.", cor: "#0ea5e9", fotoUrl: vocabFrequencia },
      { emoji: "🎨", rotulo: "Timbre", descricao: "Assinatura da fonte — flauta ≠ colher.", cor: "#a855f7", fotoUrl: vocabTimbre },
      { emoji: "🥛", rotulo: "Copos afinados", descricao: "Cheio = grave. Vazio = agudo.", cor: "#78350f", fotoUrl: mapaCopos },
      { emoji: "🏭", rotulo: "Russolo (1913)", descricao: "Intonarumori — ruído virou música.", cor: "#7c2d12", fotoUrl: mapaRussolo },
      { emoji: "🎋", rotulo: "Uakti / PVC", descricao: "Brasil: cano vira orquestra.", cor: "#22c55e", fotoUrl: mapaUakti },
      { emoji: "📦", rotulo: "Instrumento caseiro", descricao: "Caixa + elástico grosso/fino = grave/agudo.", cor: "#c2410c", fotoUrl: matCaixa },
    ],
    falaFinal: "Quinta página do Atlas do Laboratório Óptico DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, engenheira acústica!",
    quiz: {
      pergunta:
        "Qual propriedade do som nos permite diferenciar a voz da Professora Aurora do som das asas do Brilha, mesmo no mesmo volume?",
      alternativas: [
        { texto: "O Timbre", correta: true },
        { texto: "A Intensidade", correta: false },
      ],
      feedback:
        "Sensacional! O timbre é a assinatura digital — a 'cor' — de cada fonte sonora. É por isso que reconhecemos a voz de quem amamos sem precisar ver.",
    },
    missaoFamilia:
      "🍳 Orquestra da Cozinha: reúnam a família na cozinha. Escolham 3 objetos SEGUROS (bacia plástica, 2 colheres de madeira, ralador). Criem uma banda de percussão onde cada pessoa entra em momento diferente — música coletiva com ritmo!",
    recompensaTitulo: "📜 Página 5 restaurada — A Partitura dos Sons Invisíveis.",
    recompensaItem: "🔧 Diapasão de Aço Carbono",
  },

  recompensa: { xp: 90, moedas: 45, medalha: "Diapasão de Aço Carbono" },
};
