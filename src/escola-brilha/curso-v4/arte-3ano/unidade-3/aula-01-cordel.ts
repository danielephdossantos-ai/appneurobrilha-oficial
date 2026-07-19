import type { AulaArteV1 } from "../../types";
import __asset_mapaCordeis from "@/assets/arte-3ano/u3-mapa-cordeis.jpg.asset.json";
const mapaCordeis = __asset_mapaCordeis.url;
import __asset_mapaMatriz from "@/assets/arte-3ano/u3-mapa-matriz.jpg.asset.json";
const mapaMatriz = __asset_mapaMatriz.url;
import __asset_mapaXilogravura from "@/assets/arte-3ano/u3-mapa-xilogravura.jpg.asset.json";
const mapaXilogravura = __asset_mapaXilogravura.url;
import __asset_mapaGoiva from "@/assets/arte-3ano/u3-mapa-goiva.jpg.asset.json";
const mapaGoiva = __asset_mapaGoiva.url;
import __asset_vocabCordel from "@/assets/arte-3ano/u3-vocab-cordel.jpg.asset.json";
const vocabCordel = __asset_vocabCordel.url;
import __asset_vocabGravura from "@/assets/arte-3ano/u3-vocab-gravura.jpg.asset.json";
const vocabGravura = __asset_vocabGravura.url;
import __asset_vocabMatriz from "@/assets/arte-3ano/u3-vocab-matriz.jpg.asset.json";
const vocabMatriz = __asset_vocabMatriz.url;
import __asset_vocabPoesia from "@/assets/arte-3ano/u3-vocab-poesia.jpg.asset.json";
const vocabPoesia = __asset_vocabPoesia.url;
import __asset_passo1 from "@/assets/arte-3ano/u3-passo1-batata.jpg.asset.json";
const passo1 = __asset_passo1.url;
import __asset_passo2 from "@/assets/arte-3ano/u3-passo2-isopor.jpg.asset.json";
const passo2 = __asset_passo2.url;
import __asset_passo3 from "@/assets/arte-3ano/u3-passo3-tinta.jpg.asset.json";
const passo3 = __asset_passo3.url;
import __asset_passo4 from "@/assets/arte-3ano/u3-passo4-carimbo.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_cotidianoCarimbo from "@/assets/arte-3ano/u3-cotidiano-carimbo.jpg.asset.json";
const cotidianoCarimbo = __asset_cotidianoCarimbo.url;

/**
 * Arte · 3º Ano · Unidade 3 · Aula 01 — "Xilogravura e Cordel"
 * (EF15AR01 / EF15AR04 / EF15AR26)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-cordel",
  titulo: "Xilogravura e Cordel: A Arte que Vira Poesia",
  iconeTrilha: "🪵",
  bncc: ["EF15AR01", "EF15AR04", "EF15AR26"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Explorador! Chegamos numa feira do Nordeste e tem um varal cheio de livrinhos pendurados por um cordão. Cada capa tem um desenho preto e branco impressionante. Toca em cada pista pra descobrir de onde vêm essas gravuras!",
    titulo: "🔍 A Feira do Cordel",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "📖", rotulo: "Livretos de Cordel (Nordeste)", descricao: "Pequenos livros de poesia pendurados num cordão — por isso o nome CORDEL.", cor: "#b45309", fotoUrl: mapaCordeis },
      { emoji: "🪵", rotulo: "Matriz de madeira", descricao: "O artista talha o desenho num pedaço de madeira: o que fica ALTO recebe a tinta.", cor: "#78350f", fotoUrl: mapaMatriz },
      { emoji: "⚫", rotulo: "Xilogravura estampada", descricao: "Aperta a madeira entintada no papel e nasce a GRAVURA — preta, cheia de linhas.", cor: "#1f2937", fotoUrl: mapaXilogravura },
      { emoji: "🔪", rotulo: "Goiva: a ferramenta do gravador", descricao: "Uma faquinha com ponta em U que escava a madeira — só quem tem prática usa.", cor: "#0f766e", fotoUrl: mapaGoiva },
    ],
    falaFinal: "O mesmo desenho pode ser copiado DEZENAS de vezes — uma matriz, muitas gravuras.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de talhar a madeira, treina o olho de gravador!",
    perguntas: [
      {
        pergunta: "Por que esses livrinhos se chamam 'de CORDEL'?",
        fotoUrl: mapaCordeis,
        alternativas: [
          { texto: "Porque ficam pendurados num cordão", correta: true },
          { texto: "Porque a capa é feita de corda", correta: false },
        ],
        feedbackAcerto: "Isso! Ficavam num cordão esticado na feira — daí vem o nome.",
        feedbackErro: "A capa é papel. Eles ficavam PENDURADOS num cordão — por isso 'cordel'.",
      },
      {
        pergunta: "Na xilogravura, o desenho é feito em quê primeiro?",
        fotoUrl: mapaMatriz,
        alternativas: [
          { texto: "Numa MATRIZ de madeira, esculpindo com goiva", correta: true },
          { texto: "Direto no papel, com lápis", correta: false },
        ],
        feedbackAcerto: "Certo! A matriz de madeira é o 'carimbo' que imprime a gravura.",
        feedbackErro: "No lápis é só rascunho. A gravura nasce da MADEIRA talhada.",
      },
      {
        pergunta: "Quando a matriz é apertada no papel entintada, o que fica marcado?",
        fotoUrl: mapaXilogravura,
        alternativas: [
          { texto: "As partes ALTAS da madeira (que receberam tinta)", correta: true },
          { texto: "As partes escavadas (fundas)", correta: false },
        ],
        feedbackAcerto: "Perfeito! O que está EM RELEVO marca; o escavado fica em branco.",
        feedbackErro: "Ao contrário: o alto pega tinta e imprime. O fundo fica branco.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras do gravador — toca em cada uma pra desbloquear seu diário.",
    cards: [
      { termo: "Cordel", definicao: "Livrinho de poesia popular do Nordeste, com capa em XILOGRAVURA.", emoji: "📖", cor: "#b45309", fotoUrl: vocabCordel },
      { termo: "Gravura", definicao: "Imagem impressa a partir de uma MATRIZ (madeira, metal, pedra).", emoji: "⚫", cor: "#1f2937", fotoUrl: vocabGravura },
      { termo: "Matriz", definicao: "A superfície de onde a gravura é IMPRESSA — funciona como carimbo.", emoji: "🪵", cor: "#78350f", fotoUrl: vocabMatriz },
      { termo: "Poesia popular", definicao: "Versos rimados que contam histórias do povo — heróis, cangaço, festas.", emoji: "🎤", cor: "#7c3aed", fotoUrl: vocabPoesia },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar como o mestre xilogravador do Nordeste trabalha. Presta atenção na técnica!",
    paragrafos: [
      "No Nordeste do Brasil, há mais de 100 anos, poetas cantavam versos nas feiras. Pra vender essas histórias, imprimiam livrinhos com capas de XILOGRAVURA.",
      "O artista pega uma tábua de madeira lisa e DESENHA a figura em cima. Depois, com a GOIVA, escava tudo que quer que fique BRANCO no final.",
      "Passa tinta preta com um rolinho por cima da matriz — só a parte ALTA pega a tinta. Aperta uma folha de papel em cima e… nasce a gravura!",
      "A mesma matriz imprime dezenas de gravuras. Por isso o cordel era BARATO — todo mundo podia comprar e ler as histórias do cangaço, da seca e do amor.",
    ],
    pigmentos: [
      { nome: "Tinta preta", hex: "#111827", fonte: "Tinta de impressão à base de óleo", emoji: "⚫", fotoUrl: mapaXilogravura },
      { nome: "Marrom da madeira", hex: "#78350f", fonte: "Cedro, cerejeira ou umburana", emoji: "🟤", fotoUrl: mapaMatriz },
      { nome: "Papel jornal bege", hex: "#f5deb3", fonte: "Papel barato reciclado das gráficas", emoji: "📄", fotoUrl: vocabCordel },
      { nome: "Cinza tipográfico", hex: "#4b5563", fonte: "Chumbo e antimônio das antigas letras", emoji: "🔡", fotoUrl: vocabGravura },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o que ficou no caderno de expedição!",
    perguntas: [
      {
        pergunta: "O que o xilogravador escava com a GOIVA na madeira?",
        fotoUrl: mapaGoiva,
        alternativas: [
          { texto: "As partes que vão ficar BRANCAS no papel", correta: true },
          { texto: "As partes que vão ficar PRETAS no papel", correta: false },
        ],
        feedbackAcerto: "Sim! Fundo = branco. O que sobra alto vira preto.",
        feedbackErro: "Ao contrário: o escavado fica em branco. Só o ALTO recebe tinta.",
      },
      {
        pergunta: "Por que o cordel era tão POPULAR nas feiras?",
        fotoUrl: vocabCordel,
        alternativas: [
          { texto: "Era barato — uma matriz imprimia muitos livrinhos", correta: true },
          { texto: "Era feito de ouro e vendido caro", correta: false },
        ],
        feedbackAcerto: "Certo! Custava pouco e chegava a todo mundo do Sertão.",
        feedbackErro: "Ouro não! O charme era o preço BAIXO graças à impressão em série.",
      },
      {
        pergunta: "A xilogravura é um tipo de…",
        fotoUrl: vocabGravura,
        alternativas: [
          { texto: "GRAVURA — impressão a partir de uma matriz", correta: true },
          { texto: "Escultura em 3D", correta: false },
        ],
        feedbackAcerto: "Perfeito! Xilo = madeira, gravura = imagem impressa.",
        feedbackErro: "Escultura tem volume. Xilogravura é IMPRESSÃO plana no papel.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada capa de cordel usa cores da região. Descobre a paleta certa pra cada tema!",
    animais: [
      {
        nome: "Capa do Cangaceiro (Lampião)", emoji: "🤠", fotoUrl: mapaXilogravura,
        corAlvo: { nome: "Preto sobre bege (xilogravura clássica)", hex: "#1f2937" },
        opcoes: [
          { nome: "Rosa e roxo pastel", hex: "#ec4899" },
          { nome: "Preto sobre bege (xilogravura clássica)", hex: "#1f2937" },
          { nome: "Verde-neon", hex: "#84cc16" },
        ],
        falaAcerto: "Isso! Preto sobre papel bege — o visual mais tradicional do cordel.",
      },
      {
        nome: "Poeta cordelista com viola", emoji: "🎸", fotoUrl: vocabPoesia,
        corAlvo: { nome: "Marrom da viola + preto do chapéu", hex: "#78350f" },
        opcoes: [
          { nome: "Azul-turquesa vibrante", hex: "#06b6d4" },
          { nome: "Marrom da viola + preto do chapéu", hex: "#78350f" },
          { nome: "Amarelo-limão brilhante", hex: "#facc15" },
        ],
        falaAcerto: "Certo! Marrom da madeira e preto do chapéu do sertanejo.",
      },
      {
        nome: "Carimbo escolar (gravura moderna)", emoji: "🔴", fotoUrl: cotidianoCarimbo,
        corAlvo: { nome: "Vermelho brilhante da tinta de carimbo", hex: "#dc2626" },
        opcoes: [
          { nome: "Cinza fosco", hex: "#6b7280" },
          { nome: "Vermelho brilhante da tinta de carimbo", hex: "#dc2626" },
          { nome: "Marrom fosco", hex: "#78350f" },
        ],
        falaAcerto: "Perfeito! Carimbo escolar é gravura moderna em miniatura.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 4 passos pra fazer TUA gravura em casa — com uma batata!",
    passos: [
      { id: "p1", texto: "CORTO uma batata ao meio e desenho uma estrela na parte lisa", emoji: "🥔", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "ESCAVO com um palito em volta da estrela, deixando ela em relevo", emoji: "✏️", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "PASSO tinta guache SÓ na estrela alta com um pincel", emoji: "🎨", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "CARIMBO no papel — a estrela aparece impressa!", emoji: "⭐", ordem: 4, fotoUrl: passo4 },
    ],
    falaAcerto: "Sua xilogravura DE BATATA está pronta! Mesma técnica dos mestres cordelistas.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do explorador. Toca nas palavras coloridas pra ouvir.",
    titulo: "Diário do Explorador — Feira de Caruaru",
    trechos: [
      { texto: "Na feira do Nordeste vi um varal com livrinhos de", palavraDestaque: "cordel", corDestaque: "#b45309" },
      { texto: "Cada capa era uma bela", palavraDestaque: "gravura", corDestaque: "#1f2937" },
      { texto: "Impressa a partir de uma", palavraDestaque: "matriz", corDestaque: "#78350f" },
      { texto: "Contava histórias em versos — pura", palavraDestaque: "poesia", corDestaque: "#7c3aed" },
      { texto: "Sou um Explorador do Tempo — a página 3 está sendo restaurada!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🪵 Oficina do Gravador! Toca em CADA ferramenta na ordem certa pra imprimir a xilogravura antes do tempo acabar.",
    titulo: "🪵 Oficina do Gravador",
    instrucao: "Toque em cada ferramenta e depois no papel!",
    tempoSeg: 40,
    itens: [
      { emoji: "🪵", rotulo: "Escolho a matriz de madeira", cor: "#78350f" },
      { emoji: "✏️", rotulo: "Desenho na madeira", cor: "#4b5563" },
      { emoji: "🔪", rotulo: "Escavo com a goiva", cor: "#0f766e" },
      { emoji: "🎨", rotulo: "Passo tinta preta com rolinho", cor: "#1f2937" },
      { emoji: "📄", rotulo: "Aperto o papel em cima", cor: "#f5deb3" },
      { emoji: "⭐", rotulo: "Levanto: a gravura está pronta!", cor: "#eab308" },
    ],
    falaFinal: "Gravura impressa! Agora dá pra fazer 50 iguaizinhas — o cordel está pronto pra viajar.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da expedição repassando cada achado. Toca em cada verbete!",
    titulo: "📓 Caderno da Expedição do Cordel",
    itens: [
      { emoji: "📖", rotulo: "Cordel", descricao: "Livrinho de poesia pendurado num cordão.", cor: "#b45309", fotoUrl: vocabCordel },
      { emoji: "⚫", rotulo: "Gravura", descricao: "Imagem impressa a partir de uma matriz.", cor: "#1f2937", fotoUrl: vocabGravura },
      { emoji: "🪵", rotulo: "Matriz", descricao: "Superfície talhada que funciona como carimbo.", cor: "#78350f", fotoUrl: vocabMatriz },
      { emoji: "🔪", rotulo: "Goiva", descricao: "Ferramenta em U pra escavar a madeira.", cor: "#0f766e", fotoUrl: mapaGoiva },
      { emoji: "🎤", rotulo: "Poesia popular", descricao: "Versos rimados que contam histórias do povo.", cor: "#7c3aed", fotoUrl: vocabPoesia },
      { emoji: "🔴", rotulo: "Carimbo", descricao: "Uma xilogravura em miniatura do dia a dia.", cor: "#dc2626", fotoUrl: cotidianoCarimbo },
      { emoji: "🤠", rotulo: "Lampião no cordel", descricao: "Herói popular do Sertão gravado em madeira.", cor: "#1f2937", fotoUrl: mapaXilogravura },
    ],
    falaFinal: "Página 3 do Atlas dos Exploradores DESBLOQUEADA — A Feira dos Poetas Impressos!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final da expedição, arqueólogo — mostra o que aprendeu!",
    quiz: {
      pergunta: "O que é XILOGRAVURA?",
      alternativas: [
        { texto: "Uma imagem impressa a partir de uma matriz de MADEIRA", correta: true },
        { texto: "Uma pintura feita direto no papel com pincel", correta: false },
      ],
      feedback: "Excelente! Xilo = madeira. É a técnica de gravar uma matriz de madeira e imprimir várias cópias — usada no cordel nordestino há mais de 100 anos.",
    },
    missaoFamilia:
      "🪵 Detetives do Carimbo: em família, procurem carimbos, selos ou embalagens com padrões repetidos em casa. Discutam: qual seria a MATRIZ de cada um? Podem também cortar uma batata e criar uma gravura simples juntos.",
    recompensaTitulo: "📜 Página 3 restaurada — A Feira dos Poetas Impressos.",
    recompensaItem: "🔪 Goiva do Gravador",
  },

  recompensa: { xp: 80, moedas: 40, medalha: "Goiva do Gravador" },
};
