import type { AulaArteV1 } from "../../types";
import __asset_mapaEstatua from "@/assets/arte-3ano/u5-mapa-estatua.jpg.asset.json";
const mapaEstatua = __asset_mapaEstatua.url;
import __asset_mapaArgila from "@/assets/arte-3ano/u5-mapa-argila.jpg.asset.json";
const mapaArgila = __asset_mapaArgila.url;
import __asset_mapaMarmore from "@/assets/arte-3ano/u5-mapa-marmore.jpg.asset.json";
const mapaMarmore = __asset_mapaMarmore.url;
import __asset_mapaMadeira from "@/assets/arte-3ano/u5-mapa-madeira.jpg.asset.json";
const mapaMadeira = __asset_mapaMadeira.url;
import __asset_vocabEscultura from "@/assets/arte-3ano/u5-vocab-escultura.jpg.asset.json";
const vocabEscultura = __asset_vocabEscultura.url;
import vocabBidimensional from "@/assets/arte-3ano/u5-vocab-bidimensional.jpg";
import vocabTridimensional from "@/assets/arte-3ano/u5-vocab-tridimensional.jpg";
import __asset_vocabVolume from "@/assets/arte-3ano/u5-vocab-volume.jpg.asset.json";
const vocabVolume = __asset_vocabVolume.url;
import __asset_nosPintura from "@/assets/arte-3ano/u5-nos-pintura.jpg.asset.json";
const nosPintura = __asset_nosPintura.url;
import __asset_nosVaso from "@/assets/arte-3ano/u5-nos-vaso.jpg.asset.json";
const nosVaso = __asset_nosVaso.url;
import __asset_nosGrafite from "@/assets/arte-3ano/u5-nos-grafite.jpg.asset.json";
const nosGrafite = __asset_nosGrafite.url;
import __asset_cotidianoBoneco from "@/assets/arte-3ano/u5-cotidiano-boneco.jpg.asset.json";
const cotidianoBoneco = __asset_cotidianoBoneco.url;

/**
 * Arte · 3º Ano · Unidade 5 · Aula 01 — "Escultura e Tridimensionalidade"
 * (EF15AR04 / EF15AR05 / EF15AR06)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-escultura",
  titulo: "Escultura: A Arte que Ganha VOLUME",
  iconeTrilha: "🗿",
  bncc: ["EF15AR04", "EF15AR05", "EF15AR06"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Explorador! Chegamos numa praça e no meio dela tem uma figura enorme, feita de pedra, que você pode andar em VOLTA e ver de todos os lados. Não é uma pintura — é uma ESCULTURA! Toca em cada pista pra descobrir seus segredos.",
    titulo: "🔍 A Praça das Esculturas",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🗿", rotulo: "Estátua na praça", descricao: "Figura com VOLUME — dá pra andar em volta e ver de todos os ângulos.", cor: "#4b5563", fotoUrl: mapaEstatua },
      { emoji: "🏺", rotulo: "Escultura em argila", descricao: "Argila mole que a mão vai moldando — depois é cozida no forno pra endurecer.", cor: "#b45309", fotoUrl: mapaArgila },
      { emoji: "🏛️", rotulo: "Escultura em mármore", descricao: "Pedra dura branca. O artista talha com martelo e cinzel — tira o que sobra.", cor: "#f5f5f4", fotoUrl: mapaMarmore },
      { emoji: "🪵", rotulo: "Escultura em madeira", descricao: "Talhada com formão. No Brasil, Aleijadinho fez profetas famosos assim.", cor: "#78350f", fotoUrl: mapaMadeira },
    ],
    falaFinal: "Escultura NUNCA é plana — sempre tem 3 dimensões: altura, largura E profundidade.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de esculpir, treina o olho de escultor!",
    perguntas: [
      {
        pergunta: "Qual dessas obras é uma ESCULTURA?",
        fotoUrl: mapaEstatua,
        alternativas: [
          { texto: "Uma estátua que dá pra andar em volta", correta: true },
          { texto: "Um desenho no caderno", correta: false },
        ],
        feedbackAcerto: "Isso! Escultura tem VOLUME — 3 dimensões.",
        feedbackErro: "Desenho é plano (2D). Escultura tem VOLUME (3D).",
      },
      {
        pergunta: "Uma folha de papel com um desenho é…",
        fotoUrl: vocabBidimensional,
        alternativas: [
          { texto: "BIDIMENSIONAL — só altura e largura", correta: true },
          { texto: "Tridimensional — tem volume", correta: false },
        ],
        feedbackAcerto: "Certo! 2D = plano. Só dá pra ver de um lado.",
        feedbackErro: "Papel é plano — só 2 dimensões (altura e largura). Nada de volume.",
      },
      {
        pergunta: "Uma bola de futebol é…",
        fotoUrl: vocabTridimensional,
        alternativas: [
          { texto: "TRIDIMENSIONAL — tem volume", correta: true },
          { texto: "Bidimensional — só plana", correta: false },
        ],
        feedbackAcerto: "Perfeito! Bola tem 3D: dá pra pegar e ver de todos os lados.",
        feedbackErro: "Bola tem VOLUME. É 3D — tridimensional.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras do escultor — toca em cada uma pra desbloquear seu diário.",
    cards: [
      { termo: "Escultura", definicao: "Obra de arte com VOLUME (3D) — feita em pedra, madeira, argila, metal…", emoji: "🗿", cor: "#4b5563", fotoUrl: vocabEscultura },
      { termo: "Bidimensional (2D)", definicao: "Só tem ALTURA e LARGURA — como o desenho no papel.", emoji: "📄", cor: "#0284c7", fotoUrl: vocabBidimensional },
      { termo: "Tridimensional (3D)", definicao: "Tem altura, largura E PROFUNDIDADE — dá pra andar em volta.", emoji: "🎲", cor: "#7c3aed", fotoUrl: vocabTridimensional },
      { termo: "Volume", definicao: "O ESPAÇO que a escultura ocupa no ar — a 'grossura' dela.", emoji: "📦", cor: "#b45309", fotoUrl: vocabVolume },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar como os escultores trabalham. Presta atenção nos materiais!",
    paragrafos: [
      "Uma ESCULTURA é diferente de uma pintura porque tem VOLUME. Você pode andar em volta, tocar, ver por trás. Ela existe no espaço, como você.",
      "O escultor pode ADICIONAR material (juntar argila, empilhar, colar) ou RETIRAR (quebrar pedra, entalhar madeira). São dois caminhos opostos.",
      "Os antigos gregos usavam MÁRMORE — pedra dura e branca. O artista batia com martelo e cinzel, tirando o que sobrava até revelar a figura escondida dentro.",
      "No Brasil, Aleijadinho esculpiu 12 profetas em pedra-sabão em Minas Gerais há 250 anos. Ainda hoje as pessoas viajam pra ver essas esculturas!",
    ],
    pigmentos: [
      { nome: "Branco do mármore", hex: "#f5f5f4", fonte: "Pedra polida das montanhas", emoji: "⚪", fotoUrl: mapaMarmore },
      { nome: "Marrom da madeira", hex: "#78350f", fonte: "Cedro, jacarandá, imbuia", emoji: "🟤", fotoUrl: mapaMadeira },
      { nome: "Terracota da argila", hex: "#b45309", fonte: "Argila cozida no forno", emoji: "🟠", fotoUrl: mapaArgila },
      { nome: "Cinza do bronze", hex: "#4b5563", fonte: "Metal derretido em molde", emoji: "⚙️", fotoUrl: mapaEstatua },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o que ficou no caderno de expedição!",
    perguntas: [
      {
        pergunta: "Quando o escultor QUEBRA pedaços de pedra até revelar a figura, ele está…",
        fotoUrl: mapaMarmore,
        alternativas: [
          { texto: "RETIRANDO material (técnica subtrativa)", correta: true },
          { texto: "Adicionando material", correta: false },
        ],
        feedbackAcerto: "Sim! Ele RETIRA o que sobra — a figura sai de dentro da pedra.",
        feedbackErro: "Ao contrário: com martelo, ele TIRA pedaços — não adiciona.",
      },
      {
        pergunta: "Quem esculpiu os 12 Profetas em Congonhas (MG)?",
        fotoUrl: mapaEstatua,
        alternativas: [
          { texto: "Aleijadinho — mestre brasileiro", correta: true },
          { texto: "Um escultor europeu", correta: false },
        ],
        feedbackAcerto: "Certo! Aleijadinho — orgulho da arte brasileira.",
        feedbackErro: "Foi um mestre BRASILEIRO chamado Aleijadinho, em Minas Gerais.",
      },
      {
        pergunta: "Uma escultura de argila fica firme e resistente depois de…",
        fotoUrl: mapaArgila,
        alternativas: [
          { texto: "Cozida no FORNO em alta temperatura", correta: true },
          { texto: "Colocada na geladeira", correta: false },
        ],
        feedbackAcerto: "Perfeito! O forno endurece a argila e transforma em cerâmica.",
        feedbackErro: "Geladeira não endurece. A argila precisa do FORNO pra virar cerâmica.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada material de escultura tem sua cor típica. Descobre a paleta certa pra cada um!",
    animais: [
      {
        nome: "Estátua de bronze de herói", emoji: "🗿", fotoUrl: mapaEstatua,
        corAlvo: { nome: "Cinza esverdeado do bronze envelhecido", hex: "#4b5563" },
        opcoes: [
          { nome: "Rosa-chiclete brilhante", hex: "#ec4899" },
          { nome: "Cinza esverdeado do bronze envelhecido", hex: "#4b5563" },
          { nome: "Amarelo-canário", hex: "#facc15" },
        ],
        falaAcerto: "Isso! Bronze fica cinza-esverdeado com o tempo.",
      },
      {
        nome: "Vaso de cerâmica marajoara", emoji: "🏺", fotoUrl: nosVaso,
        corAlvo: { nome: "Terracota alaranjado", hex: "#b45309" },
        opcoes: [
          { nome: "Azul-oceano", hex: "#0284c7" },
          { nome: "Terracota alaranjado", hex: "#b45309" },
          { nome: "Roxo-berinjela", hex: "#581c87" },
        ],
        falaAcerto: "Certo! Argila cozida ganha esse tom alaranjado característico.",
      },
      {
        nome: "Boneco de plástico de brinquedo", emoji: "🤖", fotoUrl: cotidianoBoneco,
        corAlvo: { nome: "Cores vibrantes misturadas", hex: "#3b82f6" },
        opcoes: [
          { nome: "Cinza fosco", hex: "#6b7280" },
          { nome: "Cores vibrantes misturadas", hex: "#3b82f6" },
          { nome: "Marrom-terra escuro", hex: "#451a03" },
        ],
        falaAcerto: "Perfeito! Brinquedo moderno = plástico colorido pra chamar atenção.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 4 passos pra fazer TUA escultura em casa — com massinha!",
    passos: [
      { id: "p1", texto: "PENSO no que quero fazer: um bicho, uma pessoa, um vaso…", emoji: "💭", ordem: 1, fotoUrl: vocabEscultura },
      { id: "p2", texto: "AMASSO a massinha até ficar bem mole nas mãos", emoji: "✋", ordem: 2, fotoUrl: mapaArgila },
      { id: "p3", texto: "MODELO puxando, apertando, juntando — pouco a pouco", emoji: "🤏", ordem: 3, fotoUrl: vocabVolume },
      { id: "p4", texto: "DEIXO secar e apresento minha escultura pra família!", emoji: "🎨", ordem: 4, fotoUrl: cotidianoBoneco },
    ],
    falaAcerto: "Sua escultura está PRONTA! Tem VOLUME, dá pra ver de todos os lados.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do explorador. Toca nas palavras coloridas pra ouvir.",
    titulo: "Diário do Explorador — Praça das Estátuas",
    trechos: [
      { texto: "Vi uma linda", palavraDestaque: "escultura", corDestaque: "#4b5563" },
      { texto: "Diferente do desenho, ela tinha", palavraDestaque: "volume", corDestaque: "#b45309" },
      { texto: "O papel é plano (2D) —", palavraDestaque: "bidimensional", corDestaque: "#0284c7" },
      { texto: "Mas a estátua tem 3 dimensões —", palavraDestaque: "tridimensional", corDestaque: "#7c3aed" },
      { texto: "Sou um Explorador do Tempo — a página 5 está sendo restaurada!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🗿 Ateliê do Escultor! Toca em CADA ferramenta e material na ordem certa pra terminar a escultura antes do tempo acabar.",
    titulo: "🗿 Ateliê do Escultor",
    instrucao: "Toque em cada item na ordem correta!",
    tempoSeg: 40,
    itens: [
      { emoji: "🪨", rotulo: "Escolho o bloco de pedra", cor: "#6b7280" },
      { emoji: "✏️", rotulo: "Marco onde vou esculpir", cor: "#1f2937" },
      { emoji: "🔨", rotulo: "Bato com martelo e cinzel", cor: "#78350f" },
      { emoji: "🧹", rotulo: "Limpo o pó de pedra", cor: "#e5e7eb" },
      { emoji: "✨", rotulo: "Polir com lixa fina", cor: "#facc15" },
      { emoji: "🗿", rotulo: "Escultura pronta na praça!", cor: "#4b5563" },
    ],
    falaFinal: "Sua escultura está pronta pra ficar séculos no meio da praça!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da expedição repassando cada achado. Toca em cada verbete!",
    titulo: "📓 Caderno da Expedição da Escultura",
    itens: [
      { emoji: "🗿", rotulo: "Escultura", descricao: "Obra de arte com volume — 3D.", cor: "#4b5563", fotoUrl: vocabEscultura },
      { emoji: "📄", rotulo: "Bidimensional", descricao: "Plano — altura e largura só.", cor: "#0284c7", fotoUrl: vocabBidimensional },
      { emoji: "🎲", rotulo: "Tridimensional", descricao: "Volume — altura, largura, profundidade.", cor: "#7c3aed", fotoUrl: vocabTridimensional },
      { emoji: "📦", rotulo: "Volume", descricao: "O espaço que a escultura ocupa.", cor: "#b45309", fotoUrl: vocabVolume },
      { emoji: "🏺", rotulo: "Argila", descricao: "Material mole que endurece no forno.", cor: "#b45309", fotoUrl: mapaArgila },
      { emoji: "🏛️", rotulo: "Mármore", descricao: "Pedra dura branca dos gregos.", cor: "#f5f5f4", fotoUrl: mapaMarmore },
      { emoji: "🪵", rotulo: "Madeira", descricao: "Talhada por Aleijadinho e outros mestres.", cor: "#78350f", fotoUrl: mapaMadeira },
    ],
    falaFinal: "Página 5 do Atlas dos Exploradores DESBLOQUEADA — O Ateliê dos Escultores!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final — mostra que reconhece uma escultura de longe!",
    quiz: {
      pergunta: "Qual é a diferença entre um DESENHO e uma ESCULTURA?",
      alternativas: [
        { texto: "O desenho é 2D (plano) e a escultura é 3D (tem volume)", correta: true },
        { texto: "Não tem diferença nenhuma", correta: false },
      ],
      feedback: "Excelente! O desenho fica na folha, plano. A escultura tem VOLUME — dá pra andar em volta e ver por todos os lados. É a arte que ocupa espaço no mundo!",
    },
    missaoFamilia:
      "🗿 Detetives do Volume: em família, encontrem 3 esculturas em casa (pode ser um vaso, um enfeite, uma estátua pequena). Girem cada uma e desenhem como ela é vista DE TRÁS. Comparem com a vista de frente!",
    recompensaTitulo: "📜 Página 5 restaurada — O Ateliê dos Escultores.",
    recompensaItem: "🔨 Martelo e Cinzel do Escultor",
  },

  recompensa: { xp: 80, moedas: 40, medalha: "Martelo e Cinzel" },
};
