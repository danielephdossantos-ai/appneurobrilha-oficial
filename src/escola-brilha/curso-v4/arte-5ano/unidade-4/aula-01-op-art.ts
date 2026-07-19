import type { AulaArteV1 } from "../../types";
import __asset_mapaBridget from "@/assets/arte-5ano/u4-mapa-bridget.jpg.asset.json";
const mapaBridget = __asset_mapaBridget.url;
import __asset_mapaVasarely from "@/assets/arte-5ano/u4-mapa-vasarely.jpg.asset.json";
const mapaVasarely = __asset_mapaVasarely.url;
import mapaEspiral from "@/assets/arte-5ano/u4-mapa-espiral.jpg";
import __asset_mapaCirculos from "@/assets/arte-5ano/u4-mapa-circulos.jpg.asset.json";
const mapaCirculos = __asset_mapaCirculos.url;
import vocabFadiga from "@/assets/arte-5ano/u4-vocab-fadiga.jpg";
import vocabContraste from "@/assets/arte-5ano/u4-vocab-contraste.jpg";
import __asset_vocabCompressao from "@/assets/arte-5ano/u4-vocab-compressao.jpg.asset.json";
const vocabCompressao = __asset_vocabCompressao.url;
import __asset_vocabMovimento from "@/assets/arte-5ano/u4-vocab-movimento.jpg.asset.json";
const vocabMovimento = __asset_vocabMovimento.url;
import matPapel from "@/assets/arte-5ano/u4-mat-papel.jpg";
import matRegua from "@/assets/arte-5ano/u4-mat-regua.jpg";
import matLapis from "@/assets/arte-5ano/u4-mat-lapis.jpg";
import __asset_matQuadriculado from "@/assets/arte-5ano/u4-mat-quadriculado.jpg.asset.json";
const matQuadriculado = __asset_matQuadriculado.url;
import __asset_qMao from "@/assets/arte-5ano/u4-q-mao.jpg.asset.json";
const qMao = __asset_qMao.url;
import qEspiral from "@/assets/arte-5ano/u4-q-espiral.jpg";
import __asset_qCirculos from "@/assets/arte-5ano/u4-q-circulos.jpg.asset.json";
const qCirculos = __asset_qCirculos.url;
import __asset_passo1 from "@/assets/arte-5ano/u4-passo1.jpg.asset.json";
const passo1 = __asset_passo1.url;
import __asset_passo2 from "@/assets/arte-5ano/u4-passo2.jpg.asset.json";
const passo2 = __asset_passo2.url;
import __asset_passo3 from "@/assets/arte-5ano/u4-passo3.jpg.asset.json";
const passo3 = __asset_passo3.url;
import __asset_passo4 from "@/assets/arte-5ano/u4-passo4.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_passo5 from "@/assets/arte-5ano/u4-passo5.jpg.asset.json";
const passo5 = __asset_passo5.url;

/**
 * Arte · 5º Ano · Unidade 4 · Aula 01 — "A Matriz dos Grafismos e os Padrões
 * Psicológicos da Op Art"
 * Metanarrativa: 🌀 A Matriz da Percepção Visual
 * Fonte histórica: Op Art (anos 1960) — Bridget Riley e Victor Vasarely
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-op-art",
  titulo: "A Matriz dos Grafismos e os Padrões Psicológicos da Op Art",
  iconeTrilha: "🌀",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Arquiteto da Percepção! Brilha achou uma pasta cheia de desenhos em preto, branco e vermelho que PARECEM se mexer sozinhos — mas estão paradinhos no papel! Isso é OP ART: arte que hackeia seu cérebro com linhas e círculos. Toca em cada pista.",
    titulo: "🌀 A Matriz dos Grafismos",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🌊", rotulo: "Bridget Riley e as ondas", descricao: "A artista britânica pintava linhas onduladas em preto e branco que fazem o olho enxergar movimento numa tela totalmente parada.", cor: "#000000", fotoUrl: mapaBridget },
      { emoji: "🔲", rotulo: "Victor Vasarely e a grade", descricao: "O húngaro-francês distorcia grades quadriculadas até parecerem esferas 3D inchando pra fora do papel.", cor: "#dc2626", fotoUrl: mapaVasarely },
      { emoji: "🌀", rotulo: "Espiral hipnótica", descricao: "Uma espiral em preto e vermelho parece girar sozinha — mas é só um desenho estático de linhas bem calculadas.", cor: "#f43f5e", fotoUrl: mapaEspiral },
      { emoji: "🎯", rotulo: "Círculos concêntricos", descricao: "Anéis que se alternam em preto e branco fazem a retina vibrar e parecer que pulsam.", cor: "#000000", fotoUrl: mapaCirculos },
    ],
    falaFinal: "Você vai descobrir como a Op Art usa matemática pra enganar seus olhos!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de arquiteto da percepção!",
    perguntas: [
      {
        pergunta: "Por que uma imagem PARADA de círculos concêntricos parece pulsar?",
        fotoUrl: mapaCirculos,
        alternativas: [
          { texto: "Porque o contraste preto/branco cansa a retina e cria fadiga visual", correta: true },
          { texto: "Porque o papel vibra fisicamente sozinho", correta: false },
        ],
        feedbackAcerto: "Isso! É a FADIGA RETINIANA — o olho cansa de tanto contraste e o cérebro interpreta como movimento.",
        feedbackErro: "O papel não se mexe 😄. É a sua RETINA que cansa com tanto contraste preto e branco.",
      },
      {
        pergunta: "Bridget Riley e Victor Vasarely pintavam nos anos…",
        fotoUrl: mapaBridget,
        alternativas: [
          { texto: "1960, no movimento chamado Op Art (arte óptica)", correta: true },
          { texto: "1500, no Renascimento italiano", correta: false },
        ],
        feedbackAcerto: "Perfeito! A Op Art nasceu nos anos 1960, usando ciência da percepção pra criar ilusões.",
        feedbackErro: "Isso é bem mais recente que o Renascimento! A Op Art é dos anos 1960.",
      },
      {
        pergunta: "A grade quadriculada de Vasarely parece inchar em 3D porque…",
        fotoUrl: mapaVasarely,
        alternativas: [
          { texto: "As linhas são curvadas e comprimidas em pontos calculados da grade", correta: true },
          { texto: "Ele usava tinta com relevo de verdade", correta: false },
        ],
        feedbackAcerto: "Correto! É COMPRESSÃO DE PADRÃO — linhas curvadas em pontos exatos enganam a percepção de profundidade.",
        feedbackErro: "A tinta é lisa, sem relevo. O truque é a curva calculada das linhas — compressão de padrão.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário da percepção óptica. Toca em cada card!",
    cards: [
      { termo: "Fadiga Retiniana", definicao: "Cansaço temporário das células da retina depois de fixar cores ou contrastes fortes por muito tempo.", emoji: "👁️", cor: "#000000", fotoUrl: vocabFadiga },
      { termo: "Contraste Simultâneo", definicao: "Quando duas cores ou tons colocados lado a lado mudam a forma como enxergamos cada um deles.", emoji: "⬛", cor: "#dc2626", fotoUrl: vocabContraste },
      { termo: "Compressão de Padrão", definicao: "Técnica de aproximar ou curvar linhas repetidas pra criar sensação de profundidade ou inchaço.", emoji: "📏", cor: "#f43f5e", fotoUrl: vocabCompressao },
      { termo: "Ilusão de Movimento", definicao: "Sensação de que uma imagem estática está se mexendo, causada por como o cérebro processa padrões repetidos.", emoji: "🎡", cor: "#000000", fotoUrl: vocabMovimento },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a Op Art virou um truque científico pros olhos.",
    paragrafos: [
      "Nos anos 1960 nasceu um movimento chamado OP ART (arte óptica). Os artistas não pintavam paisagens ou pessoas — eles pintavam PADRÕES matemáticos calculados pra confundir o cérebro.",
      "BRIDGET RILEY, artista britânica, criava ondas de linhas pretas e brancas. Quando olhamos, a retina cansa de tanto contraste — isso se chama FADIGA RETINIANA — e o cérebro interpreta esse cansaço como MOVIMENTO numa imagem completamente parada.",
      "VICTOR VASARELY, artista húngaro-francês, distorcia grades quadriculadas. Ele comprimia as linhas em certos pontos — COMPRESSÃO DE PADRÃO — fazendo a grade parecer uma esfera 3D inchando pra fora do papel plano.",
      "Outro truque é o CONTRASTE SIMULTÂNEO: quando cores ou tons ficam lado a lado, um interfere na percepção do outro. Um cinza no meio do preto parece mais claro que o mesmo cinza no meio do branco!",
      "Espirais e círculos concêntricos em preto e branco usam os dois truques juntos: contraste forte + padrão repetido = a ILUSÃO DE MOVIMENTO que faz a imagem parecer pulsar, girar ou vibrar sozinha.",
    ],
    pigmentos: [
      { nome: "Papel branco + caneta preta", hex: "#000000", fonte: "Base de todo desenho de Op Art", emoji: "✏️", fotoUrl: matPapel },
      { nome: "Régua e compasso", hex: "#facc15", fonte: "Traçam linhas e círculos precisos", emoji: "📐", fotoUrl: matRegua },
      { nome: "Lápis preto e vermelho", hex: "#dc2626", fonte: "Cores de altíssimo contraste da Op Art", emoji: "🖍️", fotoUrl: matLapis },
      { nome: "Papel quadriculado", hex: "#64748b", fonte: "Ajuda a repetir o padrão certinho", emoji: "🧮", fotoUrl: matQuadriculado },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno do arquiteto da percepção!",
    perguntas: [
      {
        pergunta: "Qual é o principal objetivo da Op Art?",
        fotoUrl: mapaEspiral,
        alternativas: [
          { texto: "Criar ilusões ópticas de movimento e profundidade usando só padrões e contraste", correta: true },
          { texto: "Retratar paisagens reais com muitos detalhes", correta: false },
        ],
        feedbackAcerto: "Exato! A Op Art usa ciência da percepção pra mexer com o cérebro, sem representar nada 'real'.",
        feedbackErro: "Op Art não retrata paisagens — ela usa padrões matemáticos pra criar ILUSÕES no seu cérebro.",
      },
      {
        pergunta: "O que causa a sensação de que círculos concêntricos parados estão pulsando?",
        fotoUrl: mapaCirculos,
        alternativas: [
          { texto: "A fadiga retiniana somada ao contraste simultâneo entre preto e branco", correta: true },
          { texto: "Uma luz piscando por trás do papel", correta: false },
        ],
        feedbackAcerto: "Perfeito! É tudo na sua RETINA e no seu CÉREBRO, não no papel.",
        feedbackErro: "Não tem luz nenhuma escondida — é a fadiga retiniana e o contraste que enganam seus olhos.",
      },
      {
        pergunta: "A técnica de curvar e comprimir linhas repetidas para simular profundidade se chama…",
        fotoUrl: vocabCompressao,
        alternativas: [
          { texto: "Compressão de padrão", correta: true },
          { texto: "Perspectiva atmosférica", correta: false },
        ],
        feedbackAcerto: "Isso! É a técnica de Vasarely pra fazer grades planas parecerem esferas.",
        feedbackErro: "Perspectiva atmosférica é sobre névoa e distância. Aqui é COMPRESSÃO DE PADRÃO — linhas curvadas.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada exemplo usa um truque óptico. Combina certinho!",
    animais: [
      {
        nome: "Ondas de Bridget Riley", emoji: "🌊", fotoUrl: mapaBridget,
        corAlvo: { nome: "Fadiga retiniana em ondas", hex: "#000000" },
        opcoes: [
          { nome: "Fadiga retiniana em ondas", hex: "#000000" },
          { nome: "Pontilhismo de Seurat", hex: "#a855f7" },
          { nome: "Anamorfose catóptrica", hex: "#64748b" },
        ],
        falaAcerto: "Isso! Linhas onduladas em preto e branco cansam a retina e criam movimento.",
      },
      {
        nome: "Grade esférica de Vasarely", emoji: "🔲", fotoUrl: mapaVasarely,
        corAlvo: { nome: "Compressão de padrão em grade", hex: "#dc2626" },
        opcoes: [
          { nome: "Compressão de padrão em grade", hex: "#dc2626" },
          { nome: "Chiaroscuro barroco", hex: "#1f2937" },
          { nome: "Colagem cubista", hex: "#0ea5e9" },
        ],
        falaAcerto: "Perfeito! Linhas curvadas e comprimidas fazem a grade parecer inchar em 3D.",
      },
      {
        nome: "Espiral hipnótica", emoji: "🌀", fotoUrl: mapaEspiral,
        corAlvo: { nome: "Ilusão de movimento por contraste", hex: "#f43f5e" },
        opcoes: [
          { nome: "Ilusão de movimento por contraste", hex: "#f43f5e" },
          { nome: "Linhas de fuga renascentistas", hex: "#78350f" },
          { nome: "Vitral gótico", hex: "#f59e0b" },
        ],
        falaAcerto: "Correto! Contraste forte + espiral repetida = parece girar sozinha.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra criar sua PRÓPRIA ilusão de Op Art com a mão!",
    passos: [
      { id: "p1", texto: "CONTORNO minha mão aberta no meio de uma folha branca", emoji: "✋", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "DIVIDO todo o fundo da folha em faixas horizontais paralelas", emoji: "📏", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "DENTRO do contorno da mão, curvo essas mesmas linhas em arcos", emoji: "〰️", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "PINTO as faixas alternando preto e vermelho vibrante, sem pular nenhuma", emoji: "🖍️", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "OLHO de longe: a mão parece SALTAR da folha em 3D!", emoji: "🎯", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Sua mão hackeou a percepção igualzinho aos mestres da Op Art!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do arquiteto da percepção. Toca nas palavras coloridas.",
    titulo: "Diário do Arquiteto da Percepção",
    trechos: [
      { texto: "Sou um hacker da retina. Uso a", palavraDestaque: "fadiga retiniana", corDestaque: "#000000" },
      { texto: "e o", palavraDestaque: "contraste simultâneo", corDestaque: "#dc2626" },
      { texto: "pra criar ilusões que", palavraDestaque: "parecem se mexer", corDestaque: "#f43f5e" },
      { texto: "Aprendi com Bridget Riley e Victor Vasarely, mestres da", palavraDestaque: "Op Art", corDestaque: "#000000" },
      { texto: "Eu curvo linhas retas até elas mentirem pros seus olhos!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 O Sincronizador Cinético! Toca em CADA componente do sistema óptico antes do tempo acabar.",
    titulo: "🎯 O Sincronizador Cinético",
    instrucao: "Toque em todos os elementos antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🌊", rotulo: "Onda de Bridget Riley", cor: "#000000" },
      { emoji: "🔲", rotulo: "Grade distorcida de Vasarely", cor: "#dc2626" },
      { emoji: "👁️", rotulo: "Fadiga retiniana ativada", cor: "#000000" },
      { emoji: "⬛", rotulo: "Contraste simultâneo preto/branco", cor: "#f43f5e" },
      { emoji: "📏", rotulo: "Compressão de padrão nas linhas", cor: "#64748b" },
      { emoji: "🌀", rotulo: "Espiral em movimento ilusório", cor: "#dc2626" },
    ],
    falaFinal: "Sistema sincronizado! Você dominou o código da percepção cinética.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da Op Art. Toca em cada verbete!",
    titulo: "📓 Caderno da Op Art",
    itens: [
      { emoji: "🌊", rotulo: "Bridget Riley", descricao: "Ondas pretas e brancas que criam movimento por fadiga retiniana.", cor: "#000000", fotoUrl: mapaBridget },
      { emoji: "🔲", rotulo: "Victor Vasarely", descricao: "Grades comprimidas que parecem esferas 3D inchando do papel.", cor: "#dc2626", fotoUrl: mapaVasarely },
      { emoji: "👁️", rotulo: "Fadiga Retiniana", descricao: "Cansaço da retina com contraste forte, interpretado como movimento.", cor: "#000000", fotoUrl: vocabFadiga },
      { emoji: "⬛", rotulo: "Contraste Simultâneo", descricao: "Cores lado a lado mudam a percepção uma da outra.", cor: "#f43f5e", fotoUrl: vocabContraste },
      { emoji: "📏", rotulo: "Compressão de Padrão", descricao: "Linhas curvadas e aproximadas simulam profundidade.", cor: "#64748b", fotoUrl: vocabCompressao },
      { emoji: "🌀", rotulo: "Espirais e Círculos", descricao: "Padrões repetidos em preto e branco que parecem girar ou pulsar.", cor: "#000000", fotoUrl: mapaCirculos },
    ],
    falaFinal: "Nova página do Atlas da Matriz da Percepção DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, arquiteto da percepção!",
    quiz: {
      pergunta: "Qual é o principal objetivo da Op Art (arte óptica)?",
      alternativas: [
        { texto: "Criar ilusões de movimento e profundidade em imagens estáticas usando contraste e padrões calculados", correta: true },
        { texto: "Pintar retratos realistas de pessoas famosas", correta: false },
      ],
      feedback: "Perfeito! A Op Art, criada por artistas como Bridget Riley e Victor Vasarely nos anos 1960, usa fadiga retiniana, contraste simultâneo e compressão de padrão pra fazer o cérebro enxergar movimento onde só existe tinta parada.",
    },
    missaoFamilia:
      "🎨 O Teste da Imagem Residual: Com seus pais, desenhem uma forma simples e pintem de uma cor vibrante (ex.: vermelho). Fixem o olhar nela por 30 segundos sem piscar, depois olhem rapidamente pra uma parede BRANCA. Uma forma fantasma vai aparecer na cor COMPLEMENTAR! Registrem no álbum o que cada um enxergou.",
    recompensaTitulo: "📜 Nova página restaurada — A Matriz das Linhas Vibrantes.",
    recompensaItem: "🌀 Lente de Varredura Estroboscópica",
  },

  recompensa: { xp: 100, moedas: 50, medalha: "Lente Estroboscópica" },
};
