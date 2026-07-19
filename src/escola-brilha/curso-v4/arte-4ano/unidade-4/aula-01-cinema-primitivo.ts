import type { AulaArteV1 } from "../../types";
import __asset_mapaTaumatropio from "@/assets/arte-4ano/u4-mapa-taumatropio.jpg.asset.json";
const mapaTaumatropio = __asset_mapaTaumatropio.url;
import __asset_mapaFenacistoscopio from "@/assets/arte-4ano/u4-mapa-fenacistoscopio.jpg.asset.json";
const mapaFenacistoscopio = __asset_mapaFenacistoscopio.url;
import __asset_mapaFlipbook from "@/assets/arte-4ano/u4-mapa-flipbook.jpg.asset.json";
const mapaFlipbook = __asset_mapaFlipbook.url;
import __asset_mapaOlho from "@/assets/arte-4ano/u4-mapa-olho.jpg.asset.json";
const mapaOlho = __asset_mapaOlho.url;
import __asset_vocabPersistencia from "@/assets/arte-4ano/u4-vocab-persistencia.jpg.asset.json";
const vocabPersistencia = __asset_vocabPersistencia.url;
import __asset_vocabTaumatropio from "@/assets/arte-4ano/u4-vocab-taumatropio.jpg.asset.json";
const vocabTaumatropio = __asset_vocabTaumatropio.url;
import __asset_vocabFrame from "@/assets/arte-4ano/u4-vocab-frame.jpg.asset.json";
const vocabFrame = __asset_vocabFrame.url;
import __asset_vocabFps from "@/assets/arte-4ano/u4-vocab-fps.jpg.asset.json";
const vocabFps = __asset_vocabFps.url;
import __asset_matBloco from "@/assets/arte-4ano/u4-mat-blocoNotas.jpg.asset.json";
const matBloco = __asset_matBloco.url;
import __asset_matCartao from "@/assets/arte-4ano/u4-mat-cartaoElastico.jpg.asset.json";
const matCartao = __asset_matCartao.url;
import __asset_matCamera from "@/assets/arte-4ano/u4-mat-cameraStop.jpg.asset.json";
const matCamera = __asset_matCamera.url;
import __asset_matTesoura from "@/assets/arte-4ano/u4-mat-lapisTesoura.jpg.asset.json";
const matTesoura = __asset_matTesoura.url;
import __asset_qFilme from "@/assets/arte-4ano/u4-q-filmeAntigo.jpg.asset.json";
const qFilme = __asset_qFilme.url;
import __asset_qTaumaGirando from "@/assets/arte-4ano/u4-q-taumatropioGirando.jpg.asset.json";
const qTaumaGirando = __asset_qTaumaGirando.url;
import __asset_qFlipbook from "@/assets/arte-4ano/u4-q-flipbook.jpg.asset.json";
const qFlipbook = __asset_qFlipbook.url;
import __asset_qCinema from "@/assets/arte-4ano/u4-q-cinema.jpg.asset.json";
const qCinema = __asset_qCinema.url;
import __asset_passo1 from "@/assets/arte-4ano/u4-passo1.jpg.asset.json";
const passo1 = __asset_passo1.url;
import __asset_passo2 from "@/assets/arte-4ano/u4-passo2.jpg.asset.json";
const passo2 = __asset_passo2.url;
import __asset_passo3 from "@/assets/arte-4ano/u4-passo3.jpg.asset.json";
const passo3 = __asset_passo3.url;
import __asset_passo4 from "@/assets/arte-4ano/u4-passo4.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_passo5 from "@/assets/arte-4ano/u4-passo5.jpg.asset.json";
const passo5 = __asset_passo5.url;

/**
 * Arte · 4º Ano · Unidade 4 · Aula 01 — "O Cinema Primitivo"
 * Metanarrativa: 👁️ O Laboratório da Ilusão Visu-Espacial
 * Fontes históricas: Taumatrópio (John Ayrton Paris, 1825) + Fenacistoscópio
 * (EF15AR02 / EF15AR04 / EF15AR05)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-cinema-primitivo",
  titulo: "O Cinema Primitivo — Ilusão de Movimento",
  iconeTrilha: "🎬",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Engenheiro Visual! Já rabiscou bonequinhos no canto do caderno e folheou rápido? Aquilo é a semente do CINEMA — inventada no século XIX, muito antes de qualquer computador. Toca em cada pista pra entender.",
    titulo: "🎥 A Física do Cinema Nasce",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🎡", rotulo: "Taumatrópio (1825)", descricao: "Disquinho com desenho de um lado e outro do outro. Girado por barbantes, as duas imagens se fundem numa só.", cor: "#b45309", fotoUrl: mapaTaumatropio },
      { emoji: "⚙️", rotulo: "Fenacistoscópio", descricao: "Disco com dançarinos desenhados em volta. Girando frente ao espelho, os dançarinos ganham VIDA.", cor: "#78350f", fotoUrl: mapaFenacistoscopio },
      { emoji: "📓", rotulo: "Flipbook caseiro", descricao: "Bloquinho com um rabisco por página. Folheado rápido com o dedão, o boneco anda, pula e voa.", cor: "#0ea5e9", fotoUrl: mapaFlipbook },
      { emoji: "👁️", rotulo: "O olho humano", descricao: "A retina no fundo do olho GUARDA a imagem por 1/16 de segundo. É esse atraso que engana o cérebro.", cor: "#dc2626", fotoUrl: mapaOlho },
    ],
    falaFinal: "Você vai ser o primeiro cineasta da história — sem câmera, só papel!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de cineasta antes de rodar!",
    perguntas: [
      {
        pergunta: "O rolo de filme antigo é feito de milhares de…",
        fotoUrl: qFilme,
        alternativas: [
          { texto: "Fotos separadas (frames) exibidas bem rápido", correta: true },
          { texto: "Uma única imagem gigante em movimento", correta: false },
        ],
        feedbackAcerto: "Isso! Cada frame é uma foto parada — a velocidade cria a ilusão de movimento.",
        feedbackErro: "Não existe imagem que se mexe sozinha. O filme é feito de FRAMES parados exibidos rápido.",
      },
      {
        pergunta: "Quando o taumatrópio gira rápido, o pássaro APARECE dentro da gaiola porque…",
        fotoUrl: qTaumaGirando,
        alternativas: [
          { texto: "O olho junta as duas imagens (persistência retiniana)", correta: true },
          { texto: "O pássaro voou pra dentro de verdade", correta: false },
        ],
        feedbackAcerto: "Perfeito! A retina retém a 1ª imagem por 1/16 seg, o cérebro sobrepõe com a 2ª.",
        feedbackErro: "É desenho, não pássaro vivo 😄. O olho é que JUNTA as duas imagens.",
      },
      {
        pergunta: "Um flipbook funciona porque cada página tem um desenho…",
        fotoUrl: qFlipbook,
        alternativas: [
          { texto: "Um pouquinho diferente da anterior", correta: true },
          { texto: "Exatamente igual à anterior", correta: false },
        ],
        feedbackAcerto: "Isso! Pequenas mudanças entre páginas = ilusão de movimento fluido.",
        feedbackErro: "Se fossem iguais, ficaria parado. A mágica está nas PEQUENAS mudanças entre páginas.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do cinema primitivo. Toca em cada card!",
    cards: [
      { termo: "Persistência Retiniana", definicao: "O olho retém a imagem por cerca de 1/16 de segundo. Isso permite fundir imagens em sequência.", emoji: "👁️", cor: "#dc2626", fotoUrl: vocabPersistencia },
      { termo: "Taumatrópio", definicao: "Disco com desenhos dos dois lados, girado por barbantes. As imagens se fundem numa só.", emoji: "🎡", cor: "#b45309", fotoUrl: vocabTaumatropio },
      { termo: "Frame (Quadro)", definicao: "Cada imagem estática individual que compõe uma cena de animação ou filme.", emoji: "🎞️", cor: "#1f2937", fotoUrl: vocabFrame },
      { termo: "FPS (Frames por Segundo)", definicao: "Velocidade da animação. Cinema tradicional = 24 fps. Quanto mais fps, mais suave o movimento.", emoji: "⏱️", cor: "#a855f7", fotoUrl: vocabFps },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a ciência do olho inventou o cinema.",
    paragrafos: [
      "Nossos olhos têm um truque estranho: a retina no fundo do olho RETÉM cada imagem que vê por cerca de 1/16 de segundo. Isso se chama PERSISTÊNCIA RETINIANA.",
      "Em 1825, John Ayrton Paris inventou o TAUMATRÓPIO: um disquinho com uma gaiola de um lado e um passarinho do outro. Girando rápido nos barbantes, o cérebro sobrepõe as imagens — o passarinho aparece DENTRO da gaiola.",
      "Depois veio o FENACISTOSCÓPIO, o zootrópio, o flipbook. Todos usam o mesmo princípio: mostrar várias imagens ESTÁTICAS bem rápido pra criar a ilusão de movimento contínuo.",
      "Cada imagem parada é um FRAME. O cinema tradicional exibe 24 frames por segundo (24 fps). O desenho animado da TV, geralmente 12 fps. É essa VELOCIDADE que transforma papel em vida.",
    ],
    pigmentos: [
      { nome: "Bloquinho de post-it", hex: "#facc15", fonte: "Suporte perfeito pra flipbook", emoji: "📒", fotoUrl: matBloco },
      { nome: "Cartão + elástico", hex: "#c2410c", fonte: "Base do taumatrópio", emoji: "🎡", fotoUrl: matCartao },
      { nome: "Câmera de celular", hex: "#1f2937", fonte: "Grava stop-motion caseiro", emoji: "📱", fotoUrl: matCamera },
      { nome: "Lápis, tesoura, canetinha", hex: "#ec4899", fonte: "Ferramentas do cineasta manual", emoji: "✂️", fotoUrl: matTesoura },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno do cineasta!",
    perguntas: [
      {
        pergunta: "Qual é o nome do fenômeno do olho que retém a imagem por 1/16 seg e permite o cinema?",
        fotoUrl: vocabPersistencia,
        alternativas: [
          { texto: "Persistência Retiniana", correta: true },
          { texto: "Refração Luminosa", correta: false },
        ],
        feedbackAcerto: "Fantástico! Sem ela não haveria cinema nem desenho animado.",
        feedbackErro: "Refração é a luz mudando de direção. O truque do cinema é a PERSISTÊNCIA RETINIANA.",
      },
      {
        pergunta: "O cinema tradicional exibe quantos frames por segundo (fps)?",
        fotoUrl: vocabFps,
        alternativas: [
          { texto: "24 fps", correta: true },
          { texto: "2 fps", correta: false },
        ],
        feedbackAcerto: "Isso! 24 fps é o padrão que engana o olho e cria movimento fluido.",
        feedbackErro: "2 fps ficaria parecendo diapositivo. O cinema usa 24 FPS.",
      },
      {
        pergunta: "Uma sessão de cinema mostra na tela grande…",
        fotoUrl: qCinema,
        alternativas: [
          { texto: "Milhares de fotos paradas exibidas muito rápido", correta: true },
          { texto: "Personagens vivos filmados pequenininhos", correta: false },
        ],
        feedbackAcerto: "Correto! O cinema É frame em cima de frame — velocidade cria vida.",
        feedbackErro: "Não existe gente pequenininha na tela 😄. São FRAMES exibidos rápido.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada invenção usa um princípio óptico. Combina certinho!",
    animais: [
      {
        nome: "Taumatrópio girando", emoji: "🎡", fotoUrl: qTaumaGirando,
        corAlvo: { nome: "Sobreposição de 2 imagens", hex: "#b45309" },
        opcoes: [
          { nome: "Sobreposição de 2 imagens", hex: "#b45309" },
          { nome: "Ponto de fuga central", hex: "#dc2626" },
          { nome: "Mistura de pigmentos", hex: "#0ea5e9" },
        ],
        falaAcerto: "Taumatrópio funde 2 lados do disco em UMA imagem sobreposta.",
      },
      {
        nome: "Bloquinho folheado (flipbook)", emoji: "📓", fotoUrl: qFlipbook,
        corAlvo: { nome: "Sequência rápida de frames", hex: "#0ea5e9" },
        opcoes: [
          { nome: "Sequência rápida de frames", hex: "#0ea5e9" },
          { nome: "Cor-luz RGB", hex: "#dc2626" },
          { nome: "Chiaroscuro", hex: "#1f2937" },
        ],
        falaAcerto: "Flipbook = FRAMES em sequência rápida no dedão.",
      },
      {
        nome: "Tela de cinema", emoji: "🎬", fotoUrl: qCinema,
        corAlvo: { nome: "24 frames por segundo", hex: "#a855f7" },
        opcoes: [
          { nome: "24 frames por segundo", hex: "#a855f7" },
          { nome: "Linhas de fuga", hex: "#78350f" },
          { nome: "Vitral translúcido", hex: "#f59e0b" },
        ],
        falaAcerto: "Isso! Cinema tradicional roda a 24 FPS — velocidade que engana o olho.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra construir seu próprio TAUMATRÓPIO.",
    passos: [
      { id: "p1", texto: "RECORTO um círculo de papelão resistente", emoji: "✂️", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "DESENHO um vaso vazio de um lado do círculo", emoji: "🏺", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "VIRO o círculo e desenho flores COLORIDAS do outro lado (de ponta-cabeça pro alinhamento dar certo)", emoji: "🌸", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "FURO os dois lados e passo elásticos ou barbantes", emoji: "🔗", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "GIRO os barbantes pra enrolar e PUXO — flores brotam dentro do vaso!", emoji: "🌈", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Seu taumatrópio funciona igualzinho ao de 1825!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do cineasta. Toca nas palavras coloridas.",
    titulo: "Diário do Cineasta Primitivo",
    trechos: [
      { texto: "Meu olho retém imagens por 1/16 segundo — isso é", palavraDestaque: "persistência retiniana", corDestaque: "#dc2626" },
      { texto: "Cada imagem parada do filme se chama", palavraDestaque: "frame", corDestaque: "#1f2937" },
      { texto: "O cinema exibe 24 desses por segundo, ou seja, 24", palavraDestaque: "fps", corDestaque: "#a855f7" },
      { texto: "Em 1825 nasceu o disquinho girante chamado", palavraDestaque: "taumatrópio", corDestaque: "#b45309" },
      { texto: "Sou cineasta — invento vida com papel e velocidade!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎬 Estúdio de Stop-Motion! Toca em CADA elemento do estúdio antes do tempo acabar pra gravar tua animação.",
    titulo: "🎬 Estúdio de Stop-Motion",
    instrucao: "Toque em todos os componentes antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "📱", rotulo: "Câmera do celular", cor: "#1f2937" },
      { emoji: "🎞️", rotulo: "Frame 1 — boneco em pé", cor: "#0ea5e9" },
      { emoji: "🎞️", rotulo: "Frame 2 — braços meio", cor: "#22d3ee" },
      { emoji: "🎞️", rotulo: "Frame 3 — braços no ar", cor: "#f59e0b" },
      { emoji: "🎞️", rotulo: "Frame 4 — pulo!", cor: "#dc2626" },
      { emoji: "⏱️", rotulo: "Ajustar FPS (12 quadros/seg)", cor: "#a855f7" },
    ],
    falaFinal: "Ação e corta! Seu stop-motion ficou pronto.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno do cinema primitivo. Toca em cada verbete!",
    titulo: "📓 Caderno do Cinema Primitivo",
    itens: [
      { emoji: "👁️", rotulo: "Persistência Retiniana", descricao: "O olho retém a imagem por 1/16 seg — a base de tudo.", cor: "#dc2626", fotoUrl: vocabPersistencia },
      { emoji: "🎡", rotulo: "Taumatrópio (1825)", descricao: "Disco girado por barbantes que funde 2 imagens.", cor: "#b45309", fotoUrl: mapaTaumatropio },
      { emoji: "⚙️", rotulo: "Fenacistoscópio", descricao: "Disco com sequência de figuras girado frente a espelho.", cor: "#78350f", fotoUrl: mapaFenacistoscopio },
      { emoji: "📓", rotulo: "Flipbook", descricao: "Bloquinho com desenhos folheado rápido com o dedão.", cor: "#0ea5e9", fotoUrl: mapaFlipbook },
      { emoji: "🎞️", rotulo: "Frame", descricao: "Cada imagem estática que compõe a animação.", cor: "#1f2937", fotoUrl: vocabFrame },
      { emoji: "⏱️", rotulo: "FPS", descricao: "Frames por segundo. Cinema tradicional = 24 fps.", cor: "#a855f7", fotoUrl: vocabFps },
      { emoji: "🎬", rotulo: "Cinema hoje", descricao: "Mesma física de 1825 — só que digital.", cor: "#ec4899", fotoUrl: qCinema },
    ],
    falaFinal: "Quarta página do Atlas do Laboratório Óptico DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, cineasta primitivo!",
    quiz: {
      pergunta: "Qual é o nome do fenômeno do olho humano que retém a imagem por uma fração de segundo e possibilita a ilusão do cinema?",
      alternativas: [
        { texto: "Persistência Retiniana", correta: true },
        { texto: "Refração Luminosa", correta: false },
      ],
      feedback: "Fantástico! É graças à Persistência Retiniana que conseguimos assistir a filmes e desenhos animados até hoje. Sem esse pequeno atraso no olho, o cinema simplesmente não existiria.",
    },
    missaoFamilia:
      "📓 Desafio do Bloco Flipbook: peguem um bloquinho de post-it em casa. Começando pela ÚLTIMA página, desenhem uma bolinha caindo. Na página anterior, a bola um pouquinho mais em cima. Continuem até a primeira. Folheiem rápido em família — assistam à animação caseira de uma bola quicando!",
    recompensaTitulo: "📜 Página 4 restaurada — A Crônica dos Desenhos Vivos.",
    recompensaItem: "🎞️ Manivela de Bronze de Cinetoscópio",
  },

  recompensa: { xp: 90, moedas: 45, medalha: "Manivela de Cinetoscópio" },
};
