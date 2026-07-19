import type { AulaArteV1 } from "../../types";
import __asset_castelo from "@/assets/arte-7ano/u6-castelo-perspectiva.jpg.asset.json";
const castelo = __asset_castelo.url;
import __asset_portal from "@/assets/arte-7ano/u6-portal-entrada.jpg.asset.json";
const portal = __asset_portal.url;
import __asset_terraTematica from "@/assets/arte-7ano/u6-terra-tematica.jpg.asset.json";
const terraTematica = __asset_terraTematica.url;
import __asset_playgroundModerno from "@/assets/arte-7ano/u6-playground-moderno.jpg.asset.json";
const playgroundModerno = __asset_playgroundModerno.url;
import __asset_luzesNoturnas from "@/assets/arte-7ano/u6-luzes-noturnas.jpg.asset.json";
const luzesNoturnas = __asset_luzesNoturnas.url;
import __asset_casteloForcado from "@/assets/arte-7ano/u6-castelo-forcado.jpg.asset.json";
const casteloForcado = __asset_casteloForcado.url;
import __asset_caminhoCurvo from "@/assets/arte-7ano/u6-caminho-curvo.jpg.asset.json";
const caminhoCurvo = __asset_caminhoCurvo.url;
import __asset_dragao from "@/assets/arte-7ano/u6-dragao-escultura.jpg.asset.json";
const dragao = __asset_dragao.url;
import __asset_neonScifi from "@/assets/arte-7ano/u6-neon-scifi.jpg.asset.json";
const neonScifi = __asset_neonScifi.url;
import __asset_ruaMedieval from "@/assets/arte-7ano/u6-rua-medieval.jpg.asset.json";
const ruaMedieval = __asset_ruaMedieval.url;
import __asset_playgroundAventura from "@/assets/arte-7ano/u6-playground-aventura.jpg.asset.json";
const playgroundAventura = __asset_playgroundAventura.url;
import __asset_palcoFestival from "@/assets/arte-7ano/u6-palco-festival.jpg.asset.json";
const palcoFestival = __asset_palcoFestival.url;
import __asset_instalacaoArte from "@/assets/arte-7ano/u6-instalacao-arte.jpg.asset.json";
const instalacaoArte = __asset_instalacaoArte.url;
import __asset_pavilhaoCogumelo from "@/assets/arte-7ano/u6-pavilhao-cogumelo.jpg.asset.json";
const pavilhaoCogumelo = __asset_pavilhaoCogumelo.url;
import __asset_catedralLuz from "@/assets/arte-7ano/u6-catedral-luz.jpg.asset.json";
const catedralLuz = __asset_catedralLuz.url;

/**
 * Arte · 7º Ano · Unidade 6 · Aula 01 — "A Cidade Encantada — Cenografia, Espaço Lúdico e Parques Temáticos"
 * Metanarrativa: 🎡 Crônicas das Cidades Suspensas
 * Foco: cenografia urbana, escala forçada (forced perspective), imagineering, espaço lúdico.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-cenografia",
  titulo: "A Cidade Encantada — Cenografia, Espaço Lúdico e Parques Temáticos",
  iconeTrilha: "🎡",
  bncc: ["EF69AR04", "EF69AR05", "EF69AR31"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Cenógrafo Visual! O Códice abriu um portal pra dentro de um Distrito de Entretenimento Lúdico: castelos que parecem gigantes mas cabem num terreno pequeno, ruas cheias de curvas que escondem segredos, luzes que contam histórias. Sua missão é dominar a CENOGRAFIA URBANA e a ESCALA FORÇADA pra projetar espaços mágicos. Toca em cada pista.",
    titulo: "🎡 O Portal do Distrito Encantado",
    instrucao: "Toca em cada pista pra ativar o módulo cenográfico",
    itens: [
      { emoji: "🏰", rotulo: "Castelo de Escala Forçada", descricao: "De longe parece gigante, mas os andares de cima são MENORES que os de baixo — um truque óptico chamado escala forçada (forced perspective).", cor: "#a21caf", fotoUrl: casteloForcado },
      { emoji: "🚪", rotulo: "Portal de Entrada Temático", descricao: "A entrada de um parque é o primeiro ato da história: luzes, formas e cores já contam pra onde você vai. Isso é IMAGINEERING.", cor: "#7e22ce", fotoUrl: portal },
      { emoji: "🌀", rotulo: "Caminho Curvo Guiado", descricao: "Nenhuma rua de parque temático é reta: as curvas escondem o próximo cenário e criam SURPRESA — parte do ESPAÇO LÚDICO.", cor: "#c026d3", fotoUrl: caminhoCurvo },
      { emoji: "🎪", rotulo: "Terra Temática Imersiva", descricao: "Um espaço inteiro — chão, teto, som, cheiro — projetado pra você ACREDITAR que entrou em outro mundo. Cenografia total.", cor: "#db2777", fotoUrl: terraTematica },
    ],
    falaFinal: "Você vai aprender a projetar ilusões de escala e espaços que contam histórias com o corpo inteiro do visitante.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de cenógrafo antes de puxar a régua mágica!",
    perguntas: [
      {
        pergunta: "Um castelo de parque temático parece ENORME de longe, mas os andares de cima são construídos cada vez MENORES. Que técnica cria essa ilusão de altura?",
        fotoUrl: casteloForcado,
        alternativas: [
          { texto: "Escala Forçada (Forced Perspective) — reduzir o tamanho real pra enganar o olho à distância", correta: true },
          { texto: "Escala Real — tudo é construído no tamanho verdadeiro, sem truque nenhum", correta: false },
        ],
        feedbackAcerto: "Isso! A Escala Forçada usa a diminuição progressiva dos elementos pra parecer mais alto/distante do que realmente é.",
        feedbackErro: "Se fosse escala real, o castelo precisaria ser gigantesco de verdade — caro e difícil. O truque é a escala forçada.",
      },
      {
        pergunta: "Por que as ruas dentro de um parque temático quase nunca são retas?",
        fotoUrl: caminhoCurvo,
        alternativas: [
          { texto: "Curvas escondem o próximo cenário, criam expectativa e SURPRESA — parte do design de espaço lúdico", correta: true },
          { texto: "Curvas são só um erro de projeto que ninguém corrigiu", correta: false },
        ],
        feedbackAcerto: "Exato! É projeto intencional: cada curva é um 'corte de cena' que revela um novo cenário aos poucos.",
        feedbackErro: "Não é acaso — arquitetos de parques (imagineers) desenham curvas de propósito pra guiar a emoção do visitante.",
      },
      {
        pergunta: "O que caracteriza uma 'terra temática imersiva' dentro de um parque?",
        fotoUrl: terraTematica,
        alternativas: [
          { texto: "Todos os elementos — piso, som, luz, cheiro, figurino dos funcionários — seguem UM ÚNICO universo narrativo", correta: true },
          { texto: "Apenas a fachada dos prédios é decorada; o resto do espaço fica neutro", correta: false },
        ],
        feedbackAcerto: "Perfeito! Imersão total é quando NADA quebra a ilusão — todos os sentidos reforçam a mesma história.",
        feedbackErro: "Se só a fachada fosse temática, a ilusão quebraria rápido. Imersão exige coerência total do espaço.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do cenógrafo urbano. Toca em cada verbete!",
    cards: [
      { termo: "Escala Forçada (Forced Perspective)", definicao: "Técnica que reduz progressivamente o tamanho de elementos pra criar ILUSÃO de altura ou distância maior do que a real.", emoji: "🏰", cor: "#a21caf", fotoUrl: casteloForcado },
      { termo: "Imagineering", definicao: "Fusão de 'imaginação' + 'engenharia': o processo de projetar espaços temáticos que contam histórias usando arte, arquitetura e tecnologia.", emoji: "🚪", cor: "#7e22ce", fotoUrl: portal },
      { termo: "Espaço Lúdico", definicao: "Ambiente projetado pra estimular BRINCADEIRA, descoberta e imaginação — playgrounds, parques, cenários interativos.", emoji: "🎪", cor: "#c026d3", fotoUrl: playgroundModerno },
      { termo: "Cenografia Urbana", definicao: "Arte de transformar o espaço da cidade em CENÁRIO vivo, com narrativa, iluminação e ambientação planejadas.", emoji: "🌃", cor: "#db2777", fotoUrl: luzesNoturnas },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como um parque inteiro é desenhado pra MEXER com sua percepção de espaço.",
    paragrafos: [
      "Um parque temático não é só um monte de brinquedos: é uma OBRA DE CENOGRAFIA construída em escala real. Cada esquina, cada fachada e cada curva de caminho foi desenhada por um IMAGINEER — profissional que mistura imaginação de artista com precisão de engenheiro.",
      "A ferramenta mais famosa desse ofício é a ESCALA FORÇADA (forced perspective). Ela usa o mesmo princípio da perspectiva linear, mas em 3D: os andares de cima de um castelo são construídos PROGRESSIVAMENTE MENORES do que os de baixo. O olho humano, acostumado à diminuição escalar da distância, interpreta isso como um prédio MUITO mais alto do que realmente é.",
      "Além da escala, existe o desenho do PERCURSO. Repare que nenhuma rua de parque temático é reta: elas são cheias de CURVAS SUAVES. Isso não é acidente — é projeto. Cada curva esconde o próximo cenário, criando um efeito de 'revelação por partes', como um filme sendo mostrado cena a cena enquanto você caminha.",
      "O terceiro pilar é o ESPAÇO LÚDICO: ambientes pensados pra estimular a brincadeira e a exploração livre. Um playground bem projetado não tem só balanços — tem texturas, cores, alturas e desafios que convidam o corpo a se mover de formas diferentes. É arquitetura pensada pra CRIANÇA e pra IMAGINAÇÃO.",
      "Quando tudo isso se junta — escala forçada, percurso curvo e espaço lúdico — nasce a IMERSÃO TOTAL: um lugar onde chão, teto, luz, som e até o uniforme dos funcionários contam a MESMA história. É a cenografia urbana levada ao extremo: a cidade inteira vira palco, e você é o protagonista.",
    ],
    pigmentos: [
      { nome: "Escala Forçada", hex: "#a21caf", fonte: "Ilusão de altura", emoji: "🏰", fotoUrl: casteloForcado },
      { nome: "Imagineering", hex: "#7e22ce", fonte: "Imaginação + engenharia", emoji: "🚪", fotoUrl: portal },
      { nome: "Percurso Curvo", hex: "#c026d3", fonte: "Revelação por partes", emoji: "🌀", fotoUrl: caminhoCurvo },
      { nome: "Espaço Lúdico", hex: "#db2777", fonte: "Arquitetura da brincadeira", emoji: "🎪", fotoUrl: playgroundAventura },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do cenógrafo!",
    perguntas: [
      {
        pergunta: "Na Escala Forçada, o que acontece com os elementos conforme sobem em um castelo temático?",
        fotoUrl: casteloForcado,
        alternativas: [
          { texto: "Ficam PROGRESSIVAMENTE menores, enganando o olho pra parecer mais alto e distante", correta: true },
          { texto: "Ficam iguais em tamanho, só mudam de cor", correta: false },
        ],
        feedbackAcerto: "Correto! A diminuição progressiva é o coração da escala forçada.",
        feedbackErro: "Se tudo ficasse do mesmo tamanho, não haveria ilusão de altura — o segredo é a redução progressiva.",
      },
      {
        pergunta: "O que faz um 'imagineer' na criação de um parque temático?",
        fotoUrl: portal,
        alternativas: [
          { texto: "Une arte, arquitetura, narrativa e engenharia pra projetar espaços que contam histórias", correta: true },
          { texto: "Apenas escolhe as cores das paredes, sem se preocupar com história ou espaço", correta: false },
        ],
        feedbackAcerto: "Isso! Imagineering é projeto NARRATIVO e técnico ao mesmo tempo.",
        feedbackErro: "O trabalho vai muito além de cor de parede — envolve narrativa, escala e engenharia juntas.",
      },
      {
        pergunta: "Por que os caminhos de um parque temático usam curvas em vez de linhas retas?",
        fotoUrl: caminhoCurvo,
        alternativas: [
          { texto: "Pra esconder o próximo cenário e criar surpresa gradual durante o percurso", correta: true },
          { texto: "Porque é mais barato construir caminhos tortos", correta: false },
        ],
        feedbackAcerto: "Exato! É estratégia narrativa de revelação — cada curva é um novo capítulo visual.",
        feedbackErro: "Não é questão de custo — é projeto intencional de experiência do visitante.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada cenário pelo CONCEITO cenográfico que ele usa!",
    animais: [
      {
        nome: "Castelo com andares menores no topo", emoji: "🏰", fotoUrl: casteloForcado,
        corAlvo: { nome: "Escala Forçada", hex: "#a21caf" },
        opcoes: [
          { nome: "Escala Forçada", hex: "#a21caf" },
          { nome: "Espaço Lúdico", hex: "#db2777" },
          { nome: "Percurso Curvo", hex: "#c026d3" },
        ],
        falaAcerto: "Isso! Redução progressiva de tamanho = Escala Forçada.",
      },
      {
        nome: "Playground com formas e alturas variadas", emoji: "🛝", fotoUrl: playgroundAventura,
        corAlvo: { nome: "Espaço Lúdico", hex: "#db2777" },
        opcoes: [
          { nome: "Espaço Lúdico", hex: "#db2777" },
          { nome: "Imagineering", hex: "#7e22ce" },
          { nome: "Escala Forçada", hex: "#a21caf" },
        ],
        falaAcerto: "Correto! Um ambiente pensado pra estimular a brincadeira é Espaço Lúdico.",
      },
      {
        nome: "Rua sinuosa que esconde o próximo cenário", emoji: "🌀", fotoUrl: caminhoCurvo,
        corAlvo: { nome: "Percurso Curvo", hex: "#c026d3" },
        opcoes: [
          { nome: "Percurso Curvo", hex: "#c026d3" },
          { nome: "Cenografia Urbana", hex: "#db2777" },
          { nome: "Escala Forçada", hex: "#a21caf" },
        ],
        falaAcerto: "Perfeito! Curvas que revelam cenários aos poucos = Percurso Curvo (design de experiência).",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra projetar a fachada do SEU castelo de escala forçada.",
    passos: [
      { id: "p1", texto: "Escolho a altura REAL do terreno disponível e decido a altura ILUSÓRIA que quero criar", emoji: "📏", ordem: 1, fotoUrl: castelo },
      { id: "p2", texto: "Divido o castelo em andares e desenho o TÉRREO em tamanho normal, bem detalhado", emoji: "🏗️", ordem: 2, fotoUrl: casteloForcado },
      { id: "p3", texto: "Reduzo PROGRESSIVAMENTE cada andar seguinte (janelas, portas e tijolos menores) rumo ao topo", emoji: "📐", ordem: 3, fotoUrl: castelo },
      { id: "p4", texto: "Adiciono torres pontudas e bandeiras no topo — elas reforçam a sensação de altura", emoji: "🚩", ordem: 4, fotoUrl: dragao },
      { id: "p5", texto: "Ilumino a fachada à noite com luzes coloridas pra reforçar a magia do cenário", emoji: "✨", ordem: 5, fotoUrl: catedralLuz },
    ],
    falaAcerto: "Você acabou de projetar a fachada mágica do castelo do seu Distrito Encantado!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do cenógrafo visual. Toca nas palavras coloridas.",
    titulo: "Diário do Cenógrafo Visual",
    trechos: [
      { texto: "Sou cenógrafo visual. Meu castelo usa", palavraDestaque: "Escala Forçada", corDestaque: "#a21caf" },
      { texto: "pra parecer gigante sendo pequeno. Todo o projeto é fruto de", palavraDestaque: "Imagineering", corDestaque: "#7e22ce" },
      { texto: "— imaginação com engenharia. As ruas seguem um", palavraDestaque: "Percurso Curvo", corDestaque: "#c026d3" },
      { texto: "que esconde surpresas, e o parque inteiro é um", palavraDestaque: "Espaço Lúdico", corDestaque: "#db2777" },
      { texto: "pensado pra brincadeira. À noite, a", palavraDestaque: "Cenografia Urbana", corDestaque: "#db2777" },
      { texto: "ganha luz e cor. A cidade virou palco — e você, o protagonista." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🏰 O Projetista de Ilusões Cênicas! Toca em TODOS os elementos da fachada mágica antes do tempo acabar.",
    titulo: "🏰 O Projetista de Ilusões Cênicas",
    instrucao: "Alinhe todos os elementos de escala forçada antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🏰", rotulo: "Torre principal reduzida", cor: "#a21caf" },
      { emoji: "🪟", rotulo: "Janelas decrescentes", cor: "#7e22ce" },
      { emoji: "🚩", rotulo: "Bandeira do topo", cor: "#c026d3" },
      { emoji: "🌀", rotulo: "Caminho curvo de acesso", cor: "#db2777" },
      { emoji: "💡", rotulo: "Luz cênica noturna", cor: "#f59e0b" },
      { emoji: "🎪", rotulo: "Cenário imersivo de fundo", cor: "#78716c" },
    ],
    falaFinal: "Ilusão perfeita! A fachada do castelo enganou até os olhos mais atentos.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a página do Distrito de Entretenimento Lúdico. Toca em cada verbete!",
    titulo: "📓 Caderno do Cenógrafo Visual — O Distrito de Entretenimento Lúdico",
    itens: [
      { emoji: "🏰", rotulo: "Escala Forçada", descricao: "Redução progressiva do tamanho dos elementos pra criar ilusão de altura ou distância maior.", cor: "#a21caf", fotoUrl: casteloForcado },
      { emoji: "🚪", rotulo: "Imagineering", descricao: "Fusão de imaginação e engenharia — projeto narrativo de espaços temáticos.", cor: "#7e22ce", fotoUrl: portal },
      { emoji: "🌀", rotulo: "Percurso Curvo", descricao: "Caminhos sinuosos que escondem o próximo cenário e criam surpresa gradual.", cor: "#c026d3", fotoUrl: caminhoCurvo },
      { emoji: "🎪", rotulo: "Espaço Lúdico", descricao: "Ambiente projetado pra estimular brincadeira, descoberta e imaginação.", cor: "#db2777", fotoUrl: playgroundModerno },
      { emoji: "🌃", rotulo: "Cenografia Urbana", descricao: "Transformar o espaço da cidade em cenário vivo, com narrativa e iluminação planejadas.", cor: "#db2777", fotoUrl: luzesNoturnas },
      { emoji: "🐉", rotulo: "Ambientação Temática", descricao: "Elementos como esculturas e cenários que reforçam o universo narrativo de uma área.", cor: "#7c2d12", fotoUrl: dragao },
    ],
    falaFinal: "Distrito de Entretenimento Lúdico RESTAURADO — Setor Cenográfico ativo!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, cenógrafo visual!",
    quiz: {
      pergunta: "Um castelo de parque temático tem só 3 andares de altura real, mas de longe parece ter mais de 10. Que técnica cenográfica explica essa ilusão, e qual é o princípio visual por trás dela?",
      alternativas: [
        { texto: "Escala Forçada — os andares superiores são construídos progressivamente menores, imitando a diminuição escalar da distância", correta: true },
        { texto: "Escala Real — o castelo tem realmente 10 andares, só que muito finos", correta: false },
      ],
      feedback: "Excelente! A ESCALA FORÇADA (forced perspective) usa o mesmo princípio da diminuição escalar da perspectiva linear, só que aplicado em 3D e em construção real: cada andar seguinte é proporcionalmente menor que o de baixo, enganando o cérebro pra interpretar o prédio como muito mais alto e distante do que realmente é. É a mesma matemática visual da Unidade 1, agora usada como ferramenta de CENOGRAFIA e ENTRETENIMENTO.",
    },
    missaoFamilia:
      "🎬 Missão Diretores de Cinema na Sala: com um adulto, usem brinquedos, potes e objetos de casa pra montar uma cena de FORCED PERSPECTIVE — por exemplo, uma pessoa 'segurando' um brinquedo gigante ou parecendo do tamanho de uma xícara. Posicionem o objeto mais perto da câmera e a pessoa mais longe (ou vice-versa) até a ilusão funcionar na foto. Registrem o resultado no álbum de família.",
    recompensaTitulo: "🎡 Distrito de Entretenimento Lúdico restaurado — Setor Cenográfico da Cidade Suspensa.",
    recompensaItem: "🔮 Lente Anamórfica de Projeção Teatral",
  },

  recompensa: { xp: 120, moedas: 60, medalha: "Lente Anamórfica de Projeção Teatral" },
};
