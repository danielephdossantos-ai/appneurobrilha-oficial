import type { AulaArteV1 } from "../../types";
import __asset_mapaNewton from "@/assets/arte-4ano/u3-mapa-newton.jpg.asset.json";
const mapaNewton = __asset_mapaNewton.url;
import __asset_mapaSeurat from "@/assets/arte-4ano/u3-mapa-seurat.jpg.asset.json";
const mapaSeurat = __asset_mapaSeurat.url;
import __asset_mapaRgbPixels from "@/assets/arte-4ano/u3-mapa-rgb-pixels.jpg.asset.json";
const mapaRgbPixels = __asset_mapaRgbPixels.url;
import __asset_mapaPrismaEspectro from "@/assets/arte-4ano/u3-mapa-prisma-espectro.jpg.asset.json";
const mapaPrismaEspectro = __asset_mapaPrismaEspectro.url;
import __asset_vocabCmyk from "@/assets/arte-4ano/u3-vocab-cmyk.jpg.asset.json";
const vocabCmyk = __asset_vocabCmyk.url;
import __asset_vocabRgb from "@/assets/arte-4ano/u3-vocab-rgb.jpg.asset.json";
const vocabRgb = __asset_vocabRgb.url;
import __asset_vocabTerciarias from "@/assets/arte-4ano/u3-vocab-terciarias.jpg.asset.json";
const vocabTerciarias = __asset_vocabTerciarias.url;
import __asset_vocabEspectro from "@/assets/arte-4ano/u3-vocab-espectro.jpg.asset.json";
const vocabEspectro = __asset_vocabEspectro.url;
import __asset_matTinta from "@/assets/arte-4ano/u3-mat-tinta.jpg.asset.json";
const matTinta = __asset_matTinta.url;
import __asset_matTela from "@/assets/arte-4ano/u3-mat-tela.jpg.asset.json";
const matTela = __asset_matTela.url;
import __asset_matCanetinhas from "@/assets/arte-4ano/u3-mat-canetinhas.jpg.asset.json";
const matCanetinhas = __asset_matCanetinhas.url;
import __asset_matPrisma from "@/assets/arte-4ano/u3-mat-prisma.jpg.asset.json";
const matPrisma = __asset_matPrisma.url;
import __asset_qTvVerde from "@/assets/arte-4ano/u3-q-tv-verde.jpg.asset.json";
const qTvVerde = __asset_qTvVerde.url;
import __asset_qImpressora from "@/assets/arte-4ano/u3-q-impressora.jpg.asset.json";
const qImpressora = __asset_qImpressora.url;
import __asset_qMacaPontos from "@/assets/arte-4ano/u3-q-macapontos.jpg.asset.json";
const qMacaPontos = __asset_qMacaPontos.url;
import __asset_qArcoiris from "@/assets/arte-4ano/u3-q-arcoiris.jpg.asset.json";
const qArcoiris = __asset_qArcoiris.url;
import __asset_passo1 from "@/assets/arte-4ano/u3-passo1.jpg.asset.json";
const passo1 = __asset_passo1.url;
import __asset_passo2 from "@/assets/arte-4ano/u3-passo2.jpg.asset.json";
const passo2 = __asset_passo2.url;
import __asset_passo3 from "@/assets/arte-4ano/u3-passo3.jpg.asset.json";
const passo3 = __asset_passo3.url;
import __asset_passo4 from "@/assets/arte-4ano/u3-passo4.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_passo5 from "@/assets/arte-4ano/u3-passo5.jpg.asset.json";
const passo5 = __asset_passo5.url;

/**
 * Arte · 4º Ano · Unidade 3 · Aula 01 — "A Engenharia das Cores"
 * Metanarrativa: 👁️ O Laboratório da Ilusão Visu-Espacial
 * Fontes históricas: Isaac Newton (prisma, 1666) + Georges Seurat (Pontilhismo)
 * (EF15AR02 / EF15AR04 / EF15AR05)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-engenharia-cores",
  titulo: "A Engenharia das Cores — Prismas, Pigmentos e Círculo Avançado",
  iconeTrilha: "🌈",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Engenheiro Visual! Azul + amarelo = verde na tinta, mas na TV o verde é feito de pontinhos vermelhos e azuis acesos. Como assim?! Existem 2 tipos de cor no universo. Toca em cada pista pra entender.",
    titulo: "🔬 As Duas Naturezas da Cor",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🔺", rotulo: "Prisma de Newton (1666)", descricao: "Isaac Newton passou luz branca do sol por um cristal triangular e viu o arco-íris completo aparecer. Dentro da luz mora TODA cor.", cor: "#a855f7", fotoUrl: mapaNewton },
      { emoji: "🎨", rotulo: "Pontilhismo de Seurat", descricao: "O pintor Georges Seurat cobria telas gigantes só com pontinhos puros. De longe, o olho misturava tudo — mistura óptica.", cor: "#dc2626", fotoUrl: mapaSeurat },
      { emoji: "📺", rotulo: "Pixels RGB acesos", descricao: "A tela do celular é feita de barrinhas vermelhas, verdes e azuis acesas. Juntas formam qualquer cor — inclusive branco puro.", cor: "#0ea5e9", fotoUrl: mapaRgbPixels },
      { emoji: "🌈", rotulo: "Espectro completo", descricao: "A luz branca esconde 7 cores. O prisma só REVELA o que já estava lá dentro.", cor: "#f59e0b", fotoUrl: mapaPrismaEspectro },
    ],
    falaFinal: "Você vai destrinchar as cores como um designer de tecnologia!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho antes de entrar no laboratório de cores!",
    perguntas: [
      {
        pergunta: "Essa TV está mostrando verde. Bem de perto, a cor verde é formada por…",
        fotoUrl: qTvVerde,
        alternativas: [
          { texto: "Pontinhos vermelhos, verdes e azuis acesos juntos", correta: true },
          { texto: "Tinta verde real dentro da tela", correta: false },
        ],
        feedbackAcerto: "Isso! Cor-luz (RGB) — a TV mistura pontinhos de 3 cores acesas pra formar todas as outras.",
        feedbackErro: "TV não tem tinta! O verde é feito de PONTINHOS de vermelho, verde e azul acesos.",
      },
      {
        pergunta: "A impressora colorida usa 4 tintas: ciano, magenta, amarelo e…",
        fotoUrl: qImpressora,
        alternativas: [
          { texto: "Preto (sistema CMYK)", correta: true },
          { texto: "Roxo dourado", correta: false },
        ],
        feedbackAcerto: "Correto! O sistema CMYK é o padrão de qualquer impressora do mundo.",
        feedbackErro: "Nenhuma impressora tem 'roxo dourado'. O 4º cartucho é sempre o PRETO — CMYK.",
      },
      {
        pergunta: "Um arco-íris aparece no céu porque a luz do sol…",
        fotoUrl: qArcoiris,
        alternativas: [
          { texto: "Atravessa gotas de chuva que funcionam como pequenos prismas", correta: true },
          { texto: "Fica cansada e vira colorida", correta: false },
        ],
        feedbackAcerto: "Perfeito! Cada gota de água é um mini-prisma que abre a luz nas 7 cores.",
        feedbackErro: "Luz não fica cansada. As gotas de chuva funcionam como PRISMAS naturais.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário da engenharia das cores. Toca em cada card!",
    cards: [
      { termo: "Cor-Pigmento (CMYK)", definicao: "Cor das tintas físicas. Primárias: Ciano, Magenta, Amarelo. Todas misturadas = preto.", emoji: "🎨", cor: "#0ea5e9", fotoUrl: vocabCmyk },
      { termo: "Cor-Luz (RGB)", definicao: "Cor das telas e lanternas. Primárias: Vermelho, Verde, Azul. Todas misturadas = branco puro.", emoji: "💡", cor: "#dc2626", fotoUrl: vocabRgb },
      { termo: "Cores Terciárias", definicao: "Mistura de uma primária + uma secundária vizinha no círculo (vermelho-alaranjado, azul-arroxeado...).", emoji: "🌸", cor: "#a855f7", fotoUrl: vocabTerciarias },
      { termo: "Espectro Visível", definicao: "As 7 cores que aparecem quando a luz branca é aberta por um prisma — o arco-íris.", emoji: "🌈", cor: "#f59e0b", fotoUrl: vocabEspectro },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a cor NASCE — de dois jeitos completamente diferentes.",
    paragrafos: [
      "Existem DUAS naturezas de cor no universo. A COR-PIGMENTO é opaca: vem das tintas, dos lápis, dos cartuchos da impressora. Suas primárias são Ciano, Magenta e Amarelo (CMYK). Misturar todas dá PRETO.",
      "A COR-LUZ é emissiva: vem das telas, lâmpadas e lanternas. Suas primárias são Vermelho, Verde e Azul (RGB). Misturar todas dá BRANCO puro — o oposto do pigmento!",
      "Quando misturamos uma cor primária com uma secundária vizinha (por exemplo, vermelho + laranja), criamos as CORES TERCIÁRIAS: vermelho-alaranjado, amarelo-esverdeado, azul-arroxeado.",
      "O pintor Seurat descobriu que se você coloca pontinhos puros bem juntos, seu olho MISTURA de longe. Isso se chama mistura óptica — a mesma técnica que a TV usa até hoje.",
    ],
    pigmentos: [
      { nome: "Tintas CMYK", hex: "#06b6d4", fonte: "Cor-pigmento — impressoras", emoji: "🖨️", fotoUrl: matTinta },
      { nome: "Tela RGB", hex: "#dc2626", fonte: "Cor-luz — celulares e TVs", emoji: "📱", fotoUrl: matTela },
      { nome: "Canetinhas coloridas", hex: "#f59e0b", fonte: "Pigmentos pra pontilhismo", emoji: "🖍️", fotoUrl: matCanetinhas },
      { nome: "Prisma de cristal", hex: "#a855f7", fonte: "Abre a luz branca em arco-íris", emoji: "🔺", fotoUrl: matPrisma },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno de designer!",
    perguntas: [
      {
        pergunta: "Que nome damos à mistura de uma cor primária com uma cor secundária vizinha?",
        fotoUrl: vocabTerciarias,
        alternativas: [
          { texto: "Cor Terciária", correta: true },
          { texto: "Cor Neutra", correta: false },
        ],
        feedbackAcerto: "Correto! As terciárias enriquecem a paleta com nuances sutis.",
        feedbackErro: "Neutra é branco, preto e cinza. A mistura primária+secundária é TERCIÁRIA.",
      },
      {
        pergunta: "As cores primárias da COR-LUZ (RGB) que aparecem na tela do celular são…",
        fotoUrl: vocabRgb,
        alternativas: [
          { texto: "Vermelho, Verde e Azul", correta: true },
          { texto: "Amarelo, Rosa e Marrom", correta: false },
        ],
        feedbackAcerto: "Isso! RGB = Red, Green, Blue. As 3 cores-luz que formam qualquer imagem digital.",
        feedbackErro: "Amarelo, rosa e marrom não são primárias de luz. As primárias RGB são VERMELHO, VERDE e AZUL.",
      },
      {
        pergunta: "No Pontilhismo de Seurat, o olho mistura os pontinhos quando o observador…",
        fotoUrl: qMacaPontos,
        alternativas: [
          { texto: "Afasta o desenho e olha de longe", correta: true },
          { texto: "Cheira o desenho bem de perto", correta: false },
        ],
        feedbackAcerto: "Perfeito! De longe, os pontinhos se fundem em cores contínuas — mistura óptica.",
        feedbackErro: "Cheirar não muda cor 😄. O truque é AFASTAR — de longe o olho mistura os pontos.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada objeto usa um tipo de cor. Combina cada um com o sistema correto!",
    animais: [
      {
        nome: "Cartuchos de impressora", emoji: "🖨️", fotoUrl: matTinta,
        corAlvo: { nome: "Cor-Pigmento CMYK", hex: "#0ea5e9" },
        opcoes: [
          { nome: "Cor-Pigmento CMYK", hex: "#0ea5e9" },
          { nome: "Cor-Luz RGB", hex: "#dc2626" },
          { nome: "Espectro Newton", hex: "#a855f7" },
        ],
        falaAcerto: "Impressora = TINTA. Cor-Pigmento CMYK.",
      },
      {
        nome: "Tela de celular acesa", emoji: "📱", fotoUrl: mapaRgbPixels,
        corAlvo: { nome: "Cor-Luz RGB", hex: "#dc2626" },
        opcoes: [
          { nome: "Cor-Pigmento CMYK", hex: "#0ea5e9" },
          { nome: "Cor-Luz RGB", hex: "#dc2626" },
          { nome: "Cores neutras", hex: "#94a3b8" },
        ],
        falaAcerto: "Celular = LUZ ACESA. Cor-Luz RGB.",
      },
      {
        nome: "Arco-íris após a chuva", emoji: "🌈", fotoUrl: qArcoiris,
        corAlvo: { nome: "Espectro visível (Newton)", hex: "#f59e0b" },
        opcoes: [
          { nome: "Espectro visível (Newton)", hex: "#f59e0b" },
          { nome: "Sombra opaca", hex: "#1f2937" },
          { nome: "Ponto de fuga", hex: "#dc2626" },
        ],
        falaAcerto: "Isso! O arco-íris é o ESPECTRO VISÍVEL da luz branca aberto por prismas de água.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra criar sua MAÇÃ pontilhista à la Seurat.",
    passos: [
      { id: "p1", texto: "DESENHO o contorno de uma maçã simples com lápis", emoji: "✏️", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "PREENCHO a maçã com pontinhos vermelhos usando canetinha", emoji: "🔴", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "ADICIONO pontinhos amarelos misturados nas áreas mais claras", emoji: "🟡", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "COLOCO pontinhos azuis nas sombras (com amarelo perto forma verde óptico)", emoji: "🔵", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "AFASTO o papel — os pontos se fundem magicamente em uma maçã 3D", emoji: "👁️", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Sua maçã pontilhista funciona igualzinho a uma tela de TV!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do designer. Toca nas palavras coloridas.",
    titulo: "Diário do Designer de Cores",
    trechos: [
      { texto: "As cores das tintas físicas se chamam", palavraDestaque: "cor-pigmento", corDestaque: "#0ea5e9" },
      { texto: "As cores da tela do celular se chamam", palavraDestaque: "cor-luz", corDestaque: "#dc2626" },
      { texto: "A mistura de primária + secundária vira", palavraDestaque: "terciária", corDestaque: "#a855f7" },
      { texto: "Newton usou um prisma pra abrir o", palavraDestaque: "espectro", corDestaque: "#f59e0b" },
      { texto: "Sou designer — controlo tinta E luz!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎨 O Misturador Óptico de Pixels! Toca em CADA feixe RGB antes do tempo acabar pra projetar as cores solicitadas.",
    titulo: "🎨 O Misturador Óptico de Pixels",
    instrucao: "Toque em todos os feixes de luz antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🔴", rotulo: "Feixe Vermelho (R)", cor: "#dc2626" },
      { emoji: "🟢", rotulo: "Feixe Verde (G)", cor: "#16a34a" },
      { emoji: "🔵", rotulo: "Feixe Azul (B)", cor: "#2563eb" },
      { emoji: "🟡", rotulo: "R+G = Amarelo", cor: "#facc15" },
      { emoji: "🟣", rotulo: "R+B = Magenta", cor: "#ec4899" },
      { emoji: "⚪", rotulo: "R+G+B = Branco puro", cor: "#f8fafc" },
    ],
    falaFinal: "Console RGB calibrado! As cores acenderam perfeitas.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno de cores. Toca em cada verbete!",
    titulo: "📓 Caderno da Engenharia das Cores",
    itens: [
      { emoji: "🎨", rotulo: "Cor-Pigmento (CMYK)", descricao: "Ciano, Magenta, Amarelo — tintas. Misturadas = preto.", cor: "#0ea5e9", fotoUrl: vocabCmyk },
      { emoji: "💡", rotulo: "Cor-Luz (RGB)", descricao: "Vermelho, Verde, Azul — telas. Misturadas = branco.", cor: "#dc2626", fotoUrl: vocabRgb },
      { emoji: "🌸", rotulo: "Cores Terciárias", descricao: "Primária + secundária vizinha (vermelho-alaranjado etc.).", cor: "#a855f7", fotoUrl: vocabTerciarias },
      { emoji: "🌈", rotulo: "Espectro Visível", descricao: "As 7 cores dentro da luz branca.", cor: "#f59e0b", fotoUrl: vocabEspectro },
      { emoji: "🔺", rotulo: "Prisma de Newton", descricao: "Cristal triangular que revela o arco-íris dentro da luz.", cor: "#7c3aed", fotoUrl: mapaNewton },
      { emoji: "🖌️", rotulo: "Pontilhismo (Seurat)", descricao: "Pontinhos puros que o olho mistura de longe — mistura óptica.", cor: "#ec4899", fotoUrl: mapaSeurat },
      { emoji: "📺", rotulo: "Pixels RGB", descricao: "Sua TV faz o mesmo que Seurat — mas com luz acesa.", cor: "#16a34a", fotoUrl: mapaRgbPixels },
    ],
    falaFinal: "Terceira página do Atlas do Laboratório Óptico DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, designer de cores!",
    quiz: {
      pergunta: "Que nome damos à mistura de uma cor primária com uma cor secundária vizinha no círculo cromático?",
      alternativas: [
        { texto: "Cor Terciária", correta: true },
        { texto: "Cor Neutra", correta: false },
      ],
      feedback: "Correto! As cores terciárias enriquecem a paleta com nuances sutis — vermelho-alaranjado, azul-arroxeado, amarelo-esverdeado... Cada uma abre uma família de tons.",
    },
    missaoFamilia:
      "🔍 Caça ao Pixel Escondido: coloquem uma gotinha de água na tela de um celular antigo OU usem uma lente de aumento potente numa tela branca acesa. Vejam a mágica em família: a tela branca é feita de milhares de barrinhas VERMELHAS, VERDES e AZUIS acesas juntas!",
    recompensaTitulo: "📜 Página 3 restaurada — O Círculo das Cores Infinitas.",
    recompensaItem: "🔮 Prisma de Cristal de Newton",
  },

  recompensa: { xp: 90, moedas: 45, medalha: "Prisma de Cristal de Newton" },
};
