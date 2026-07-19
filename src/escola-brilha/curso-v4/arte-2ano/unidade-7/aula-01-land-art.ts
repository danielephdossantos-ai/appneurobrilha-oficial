import type { AulaArteV1 } from "../../types";
import __asset_vocabLandArt from "@/assets/arte-2ano/u7-vocab-landart.jpg.asset.json";
const vocabLandArt = __asset_vocabLandArt.url;
import __asset_vocabEfemero from "@/assets/arte-2ano/u7-vocab-efemero.jpg.asset.json";
const vocabEfemero = __asset_vocabEfemero.url;
import __asset_vocabMandala from "@/assets/arte-2ano/u7-vocab-mandala.jpg.asset.json";
const vocabMandala = __asset_vocabMandala.url;
import __asset_vocabNatureza from "@/assets/arte-2ano/u7-vocab-natureza.jpg.asset.json";
const vocabNatureza = __asset_vocabNatureza.url;
import __asset_pigFolhas from "@/assets/arte-2ano/u7-pig-folhas.jpg.asset.json";
const pigFolhas = __asset_pigFolhas.url;
import __asset_pigPetalas from "@/assets/arte-2ano/u7-pig-petalas.jpg.asset.json";
const pigPetalas = __asset_pigPetalas.url;
import __asset_pigPedras from "@/assets/arte-2ano/u7-pig-pedras.jpg.asset.json";
const pigPedras = __asset_pigPedras.url;
import __asset_pigMusgo from "@/assets/arte-2ano/u7-pig-musgo.jpg.asset.json";
const pigMusgo = __asset_pigMusgo.url;
import __asset_animalTorre from "@/assets/arte-2ano/u7-animal-torre.jpg.asset.json";
const animalTorre = __asset_animalTorre.url;
import __asset_animalMandala from "@/assets/arte-2ano/u7-animal-mandala.jpg.asset.json";
const animalMandala = __asset_animalMandala.url;
import __asset_animalCaminho from "@/assets/arte-2ano/u7-animal-caminho.jpg.asset.json";
const animalCaminho = __asset_animalCaminho.url;
import __asset_u7passo1 from "@/assets/arte-2ano/u7-passo1-sair.jpg.asset.json";
const u7passo1 = __asset_u7passo1.url;
import __asset_u7passo2 from "@/assets/arte-2ano/u7-passo2-coletar.jpg.asset.json";
const u7passo2 = __asset_u7passo2.url;
import __asset_u7passo3 from "@/assets/arte-2ano/u7-passo3-circulo.jpg.asset.json";
const u7passo3 = __asset_u7passo3.url;
import __asset_u7passo4 from "@/assets/arte-2ano/u7-passo4-organizar.jpg.asset.json";
const u7passo4 = __asset_u7passo4.url;
import __asset_u7passo5 from "@/assets/arte-2ano/u7-passo5-foto.jpg.asset.json";
const u7passo5 = __asset_u7passo5.url;

/**
 * Arte · 2º Ano · Unidade 7 · Aula 01 — "Land Art: a natureza é meu ateliê"
 * (EF15AR04 / EF15AR05 / EF15AR07)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-land-art",
  titulo: "Land Art: a natureza é meu ateliê",
  iconeTrilha: "🍃",
  bncc: ["EF15AR04", "EF15AR07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Brilha, final da nossa jornada! E se a gente fizer arte SEM PAPEL nem tinta — só com o que a natureza dá? Toca em cada material do jardim!",
    titulo: "Materiais da Terra",
    instrucao: "Toca em cada elemento pra descobrir",
    itens: [
      { emoji: "🍂", rotulo: "Folhas secas", descricao: "Amarelas, laranjas, marrons. Formam MOSAICOS lindos no chão.", cor: "#f97316" },
      { emoji: "🌸", rotulo: "Pétalas de flores", descricao: "Coloridas e macias. Vira arco-íris circular no chão.", cor: "#f472b6" },
      { emoji: "🪨", rotulo: "Pedras do rio", descricao: "Podem ser empilhadas em TORRES ou fazer espirais.", cor: "#6b7280" },
      { emoji: "🌰", rotulo: "Sementes e frutos", descricao: "Contas naturais pra fazer mandalas e caminhos.", cor: "#78350f" },
    ],
    falaFinal: "LAND ART = ARTE DA TERRA. A natureza vira sua tela e seus pincéis!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes da grande obra, treina o olho de artista da natureza!",
    perguntas: [
      {
        pergunta: "Land Art usa material…",
        alternativas: [
          { texto: "Encontrado na natureza (folhas, pedras, gravetos)", correta: true },
          { texto: "Comprado em loja de material escolar", correta: false },
        ],
        feedbackAcerto: "Isso! O artista da Land Art usa SÓ o que a natureza oferece.",
        feedbackErro: "Land Art é sem loja — só natureza: folha, pedra, terra, água.",
      },
      {
        pergunta: "O que acontece com a obra depois de pronta?",
        alternativas: [
          { texto: "Fica pra sempre no museu", correta: false },
          { texto: "O vento e a chuva desmancham — é EFÊMERA", correta: true },
        ],
        feedbackAcerto: "Perfeito! Land Art é efêmera: dura poucos dias e vira parte da natureza.",
        feedbackErro: "Ao contrário! Land Art some com o vento — é isso que faz ela ser especial.",
      },
      {
        pergunta: "Uma MANDALA de flores no chão é…",
        alternativas: [
          { texto: "Desenho circular feito com pétalas", correta: true },
          { texto: "Uma comida indiana", correta: false },
        ],
        feedbackAcerto: "Sim! Mandala = círculo. No chão, vira uma flor gigante.",
        feedbackErro: "É desenho CIRCULAR — feito com pétalas, vira uma flor gigante no chão.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras do artista da natureza — toca em cada uma!",
    cards: [
      { termo: "Land Art", definicao: "Arte feita AO AR LIVRE, só com materiais da natureza.", emoji: "🌿", cor: "#16a34a", fotoUrl: vocabLandArt },
      { termo: "Efêmero", definicao: "Que dura pouco tempo, depois some. Como uma nuvem.", emoji: "☁️", cor: "#94a3b8", fotoUrl: vocabEfemero },
      { termo: "Mandala", definicao: "Desenho em forma de CÍRCULO, cheio de simetria e cor.", emoji: "🌸", cor: "#f472b6", fotoUrl: vocabMandala },
      { termo: "Natureza", definicao: "Todos os seres vivos e coisas que a Terra criou sem a mão do homem.", emoji: "🌍", cor: "#0ea5e9", fotoUrl: vocabNatureza },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar sobre um artista que fez arte SÓ na natureza a vida inteira: Andy Goldsworthy!",
    paragrafos: [
      "ANDY GOLDSWORTHY é um artista inglês que sai pra floresta com as mãos vazias.",
      "Ele coleta FOLHAS, GRAVETOS, PEDRAS e GELO, e monta esculturas circulares e coloridas — só ali, no chão da mata.",
      "Depois, ele TIRA UMA FOTO e vai embora. O vento, a chuva ou a maré desmancham a obra em poucas horas.",
      "Ele diz que a arte dele é PARTE DA NATUREZA — e que a natureza é a maior artista do mundo!",
    ],
    pigmentos: [
      { nome: "Amarelo das folhas", hex: "#eab308", fonte: "Outono no chão", emoji: "🍂", fotoUrl: pigFolhas },
      { nome: "Rosa das pétalas", hex: "#f472b6", fonte: "Mandala de flores", emoji: "🌸", fotoUrl: pigPetalas },
      { nome: "Cinza da pedra", hex: "#6b7280", fonte: "Espirais no rio", emoji: "🪨", fotoUrl: pigPedras },
      { nome: "Verde do musgo", hex: "#16a34a", fonte: "Tapete natural", emoji: "🌿", fotoUrl: pigMusgo },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Bora ver o que você guardou, artista da terra!",
    perguntas: [
      {
        pergunta: "Andy Goldsworthy é famoso por…",
        alternativas: [
          { texto: "Fazer arte só com materiais da natureza", correta: true },
          { texto: "Pintar quadros gigantes a óleo", correta: false },
        ],
        feedbackAcerto: "Isso! Ele é o mestre da Land Art no mundo.",
        feedbackErro: "Ele NÃO usa tinta. Ele usa FOLHAS, PEDRAS, GELO — só natureza.",
      },
      {
        pergunta: "Uma obra de Land Art é EFÊMERA porque…",
        alternativas: [
          { texto: "O vento e a chuva desmancham em pouco tempo", correta: true },
          { texto: "Custa muito caro pra guardar", correta: false },
        ],
        feedbackAcerto: "Sim! Ela some naturalmente — e isso faz parte da magia.",
        feedbackErro: "Não é por preço! É porque a natureza DESMANCHA em pouco tempo.",
      },
      {
        pergunta: "MANDALA é um desenho em forma de…",
        alternativas: [
          { texto: "Círculo com simetria", correta: true },
          { texto: "Estrela pontuda", correta: false },
        ],
        feedbackAcerto: "Certo! Mandala é sempre CIRCULAR.",
        feedbackErro: "Estrela é diferente. Mandala é CÍRCULO com simetria.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada obra da natureza tem um material principal. Escolhe qual combina!",
    animais: [
      {
        nome: "Torre no jardim", emoji: "🗿", fotoUrl: animalTorre,
        corAlvo: { nome: "Pedras empilhadas", hex: "#6b7280" },
        opcoes: [
          { nome: "Pétalas soltas", hex: "#f472b6" },
          { nome: "Pedras empilhadas", hex: "#6b7280" },
          { nome: "Sementes coladas", hex: "#78350f" },
        ],
        falaAcerto: "Torres de pedra! Precisa equilíbrio pra não cair.",
      },
      {
        nome: "Mandala colorida", emoji: "🌸", fotoUrl: animalMandala,
        corAlvo: { nome: "Pétalas soltas", hex: "#f472b6" },
        opcoes: [
          { nome: "Pedras empilhadas", hex: "#6b7280" },
          { nome: "Pétalas soltas", hex: "#f472b6" },
          { nome: "Gravetos secos", hex: "#78350f" },
        ],
        falaAcerto: "Pétalas coloridas viram uma flor gigante no chão!",
      },
      {
        nome: "Caminho na terra", emoji: "🛤️", fotoUrl: animalCaminho,
        corAlvo: { nome: "Sementes e grãos", hex: "#78350f" },
        opcoes: [
          { nome: "Água do rio", hex: "#0ea5e9" },
          { nome: "Sementes e grãos", hex: "#78350f" },
          { nome: "Nuvens no céu", hex: "#f3f4f6" },
        ],
        falaAcerto: "Sementes! Fazem um caminho pontilhado lindo.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Toca nos passos NA ORDEM CERTA pra fazer sua primeira MANDALA de folhas!",
    passos: [
      { id: "p1", texto: "SAIO no jardim ou na praça", emoji: "🚶", ordem: 1, fotoUrl: u7passo1 },
      { id: "p2", texto: "COLETO folhas, pétalas e pedrinhas", emoji: "🍂", ordem: 2, fotoUrl: u7passo2 },
      { id: "p3", texto: "Marco um CÍRCULO grande na terra", emoji: "⭕", ordem: 3, fotoUrl: u7passo3 },
      { id: "p4", texto: "Vou ORGANIZANDO por cor e tamanho", emoji: "🌈", ordem: 4, fotoUrl: u7passo4 },
      { id: "p5", texto: "Tiro uma FOTO e deixo a natureza levar", emoji: "📷", ordem: 5, fotoUrl: u7passo5 },
    ],
    falaAcerto: "Sua primeira mandala tá pronta! Amanhã ela vira parte da natureza de novo.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "VOCÊ lê o diário da artista da terra. Toca nas palavras coloridas!",
    titulo: "Diário da Artista da Terra",
    trechos: [
      { texto: "Fui pro jardim procurar folhas e", palavraDestaque: "pedrinhas", corDestaque: "#6b7280" },
      { texto: "Montei uma linda", palavraDestaque: "mandala", corDestaque: "#f472b6" },
      { texto: "Aprendi que Land Art é", palavraDestaque: "efêmera", corDestaque: "#94a3b8" },
      { texto: "A minha melhor tela é a", palavraDestaque: "natureza", corDestaque: "#16a34a" },
      { texto: "Tirei uma foto e a chuva levou o resto — mas eu guardo no coração!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Grande Coleta! Toque em CADA material da natureza antes do tempo acabar pra montar sua obra final!",
    titulo: "🌿 Coleta na Natureza",
    instrucao: "Toque em todos os materiais!",
    tempoSeg: 40,
    itens: [
      { emoji: "🍂", rotulo: "Folha seca", cor: "#f97316" },
      { emoji: "🌸", rotulo: "Pétala", cor: "#f472b6" },
      { emoji: "🪨", rotulo: "Pedra", cor: "#6b7280" },
      { emoji: "🌰", rotulo: "Semente", cor: "#78350f" },
      { emoji: "🐚", rotulo: "Concha", cor: "#eab308" },
      { emoji: "🪵", rotulo: "Graveto", cor: "#a855f7" },
    ],
    falaFinal: "Coleta completa! Seu ateliê natural está montado!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Última roda de revisão — de TODAS as unidades do Pincel Mágico! Toca em cada uma pra lembrar.",
    titulo: "🔁 Roda Final do Pincel Mágico",
    itens: [
      { emoji: "🎨", rotulo: "Cores (U1)", descricao: "Primárias + mistura = secundárias.", cor: "#dc2626" },
      { emoji: "📐", rotulo: "Formas (U2)", descricao: "Círculo, quadrado, triângulo, retângulo.", cor: "#a855f7" },
      { emoji: "🖐️", rotulo: "Texturas (U3)", descricao: "Áspero, liso, macio + frotagem.", cor: "#f97316" },
      { emoji: "🥁", rotulo: "Sons do corpo (U4)", descricao: "Palmas, pés, estalos = percussão.", cor: "#dc2626" },
      { emoji: "🎭", rotulo: "Sombras (U5)", descricao: "Luz + objeto = teatro milenar.", cor: "#1f2937" },
      { emoji: "🇧🇷", rotulo: "Arte popular (U6)", descricao: "Carranca, cerâmica, cordel, boi.", cor: "#16a34a" },
      { emoji: "🍃", rotulo: "Land Art (U7)", descricao: "Arte só com natureza — efêmera.", cor: "#0ea5e9" },
    ],
    falaFinal: "Você é agora um GRANDE ARTISTA do Pincel Mágico!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última missão do curso inteiro — mostre que virou mestre da arte!",
    quiz: {
      pergunta: "Land Art é uma arte que:",
      alternativas: [
        { texto: "Usa só materiais da natureza e é efêmera (dura pouco)", correta: true },
        { texto: "É pintada em telas dentro de museus climatizados", correta: false },
      ],
      feedback: "Isso! Land Art é feita ao ar livre, com folhas, pedras e galhos — e some com o tempo, porque vira parte da natureza de novo.",
    },
    missaoFamilia:
      "🌿 Ateliê ao Ar Livre: em família, saiam pro quintal, pracinha ou parque. COLETEM folhas, pétalas, pedrinhas e sementes. Montem juntos uma MANDALA gigante no chão. Tirem uma foto pra guardar — e deixem o vento cuidar do resto.",
    recompensaTitulo: "🌈 Página 7 (última!) — O Bosque Encantado do Pincel Mágico está COMPLETO!",
    recompensaItem: "🏆 Diploma de Mestre do Pincel Mágico",
  },

  recompensa: { xp: 80, moedas: 50, medalha: "Diploma do Pincel Mágico" },
};
