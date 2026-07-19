import type { AulaArteV1 } from "../../types";
import __asset_mapaBisao from "@/assets/arte-6ano/u1-bisao-altamira.jpg.asset.json";
const mapaBisao = __asset_mapaBisao.url;
import __asset_mapaMaos from "@/assets/arte-6ano/u1-maos-negativo.jpg.asset.json";
const mapaMaos = __asset_mapaMaos.url;
import __asset_mapaCaverna from "@/assets/arte-6ano/u1-caverna-lascaux.jpg.asset.json";
const mapaCaverna = __asset_mapaCaverna.url;
import __asset_mapaPigmentos from "@/assets/arte-6ano/u1-pigmentos-naturais.jpg.asset.json";
const mapaPigmentos = __asset_mapaPigmentos.url;
import __asset_vocabVisual from "@/assets/arte-6ano/u1-vocab-visual.jpg.asset.json";
const vocabVisual = __asset_vocabVisual.url;
import __asset_vocabMaterial from "@/assets/arte-6ano/u1-vocab-material.jpg.asset.json";
const vocabMaterial = __asset_vocabMaterial.url;
import __asset_vocabPigmento from "@/assets/arte-6ano/u1-vocab-pigmento.jpg.asset.json";
const vocabPigmento = __asset_vocabPigmento.url;
import __asset_vocabAglutinante from "@/assets/arte-6ano/u1-vocab-aglutinante.jpg.asset.json";
const vocabAglutinante = __asset_vocabAglutinante.url;
import __asset_matCarvao from "@/assets/arte-6ano/u1-mat-carvao.jpg.asset.json";
const matCarvao = __asset_matCarvao.url;
import __asset_matOcre from "@/assets/arte-6ano/u1-mat-ocre.jpg.asset.json";
const matOcre = __asset_matOcre.url;
import __asset_matOsso from "@/assets/arte-6ano/u1-mat-osso.jpg.asset.json";
const matOsso = __asset_matOsso.url;
import __asset_matPedra from "@/assets/arte-6ano/u1-mat-pedra.jpg.asset.json";
const matPedra = __asset_matPedra.url;
import __asset_qOsso from "@/assets/arte-6ano/u1-q-osso.jpg.asset.json";
const qOsso = __asset_qOsso.url;
import __asset_qCarvao from "@/assets/arte-6ano/u1-q-carvao.jpg.asset.json";
const qCarvao = __asset_qCarvao.url;
import __asset_qBisao from "@/assets/arte-6ano/u1-q-bisao.jpg.asset.json";
const qBisao = __asset_qBisao.url;
import __asset_passo1 from "@/assets/arte-6ano/u1-passo1.jpg.asset.json";
const passo1 = __asset_passo1.url;
import __asset_passo2 from "@/assets/arte-6ano/u1-passo2.jpg.asset.json";
const passo2 = __asset_passo2.url;
import __asset_passo3 from "@/assets/arte-6ano/u1-passo3.jpg.asset.json";
const passo3 = __asset_passo3.url;
import __asset_passo4 from "@/assets/arte-6ano/u1-passo4.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_passo5 from "@/assets/arte-6ano/u1-passo5.jpg.asset.json";
const passo5 = __asset_passo5.url;

/**
 * Arte · 6º Ano · Unidade 1 · Aula 01 — "A Arqueologia da Cor"
 * Metanarrativa: 🧩 O Códice dos Impérios Perdidos
 * Fonte histórica: Bisão de Altamira + registros materiais paleolíticos
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-arqueologia-cor",
  titulo: "A Arqueologia da Cor",
  iconeTrilha: "🧩",
  bncc: ["EF69AR01", "EF69AR31", "EF69AR32"],
  duracaoMin: 32,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Investigador do Tempo! Brilha achou um compartimento secreto na biblioteca — o CÓDICE DOS IMPÉRIOS PERDIDOS. Pra decifrar a primeira página, você vira arqueólogo visual. Toca em cada pista pra entender como a humanidade REGISTROU o mundo antes do alfabeto.",
    titulo: "🧩 O Códice dos Impérios Perdidos",
    instrucao: "Toca em cada pista pra abrir a investigação",
    itens: [
      { emoji: "🐂", rotulo: "Bisão de Altamira (Espanha)", descricao: "Pintura rupestre do Paleolítico Superior. O artista usou as ondulações naturais da rocha pra dar VOLUME 3D ao bisão quando a fogueira balançava.", cor: "#7c2d12", fotoUrl: mapaBisao },
      { emoji: "🖐️", rotulo: "Mãos em negativo", descricao: "O artista colocava a mão na rocha e soprava pigmento em pó por um canudo de osso. Ficava a silhueta. Era uma assinatura: 'EU ESTIVE AQUI'.", cor: "#dc2626", fotoUrl: mapaMaos },
      { emoji: "🕯️", rotulo: "Caverna iluminada por tochas", descricao: "Fundo escuro + luz trêmula das fogueiras. As pinturas pareciam se MOVER. Era o 'cinema' do Paleolítico.", cor: "#f59e0b", fotoUrl: mapaCaverna },
      { emoji: "🎨", rotulo: "Pigmentos naturais", descricao: "Sem tubo de tinta. Carvão = preto. Óxido de ferro = vermelho e marrom. Argila = amarelo. Puro laboratório químico da Pré-História.", cor: "#a16207", fotoUrl: mapaPigmentos },
    ],
    falaFinal: "Você vai aprender a LER as pistas que 30 mil anos de história deixaram nas rochas.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de arqueólogo antes de descer na caverna!",
    perguntas: [
      {
        pergunta: "Por que o bisão de Altamira parece SALTAR da rocha quando iluminado pela fogueira?",
        fotoUrl: qBisao,
        alternativas: [
          { texto: "O artista aproveitou os relevos naturais da parede — a rocha VIROU o corpo do animal", correta: true },
          { texto: "Porque a tinta usada tinha efeito 3D holográfico", correta: false },
        ],
        feedbackAcerto: "Perfeito! Engenharia visual pré-histórica: usar a topografia da rocha como parte do desenho.",
        feedbackErro: "Nada de holografia no Paleolítico 😄. O truque foi ANATÔMICO: casar o desenho com a forma da rocha.",
      },
      {
        pergunta: "O que era usado como PINCEL pra soprar pigmento em pó nas mãos em negativo?",
        fotoUrl: qOsso,
        alternativas: [
          { texto: "Um canudo feito de osso oco de animal", correta: true },
          { texto: "Uma pena de pombo molhada em tinta", correta: false },
        ],
        feedbackAcerto: "Correto! Osso oco = primeiro aerógrafo da humanidade.",
        feedbackErro: "Pena molhada é técnica MUITO posterior (medieval). Na Pré-História era osso oco pra SOPRAR o pó.",
      },
      {
        pergunta: "Como os primeiros humanos conseguiam a cor PRETA pra pintar?",
        fotoUrl: qCarvao,
        alternativas: [
          { texto: "Moendo carvão vegetal em pó fino e misturando com gordura ou saliva", correta: true },
          { texto: "Comprando tinta preta em cavernas mercantis", correta: false },
        ],
        feedbackAcerto: "Isso! Química pura da natureza — carvão + aglutinante = tinta preta durável.",
        feedbackErro: "Não existia comércio de tinta há 30 mil anos 😄. Cada cor era EXTRAÍDA da natureza.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do arqueólogo visual. Toca em cada verbete!",
    cards: [
      { termo: "Fonte Visual", definicao: "Imagens que sobreviveram: pinturas rupestres, gravuras, esculturas. Mostram O QUE aquelas pessoas viam e valorizavam.", emoji: "🎨", cor: "#7c2d12", fotoUrl: vocabVisual },
      { termo: "Fonte Material", definicao: "Objetos físicos reais achados na escavação: ferramentas, ossos, pedras, restos de fogueira. Revelam COMO a arte foi feita.", emoji: "🦴", cor: "#78350f", fotoUrl: vocabMaterial },
      { termo: "Pigmento Natural", definicao: "Elementos da natureza triturados em pó pra virar cor: carvão (preto), óxido de ferro (vermelho), argila (amarelo).", emoji: "🎨", cor: "#dc2626", fotoUrl: vocabPigmento },
      { termo: "Aglutinante", definicao: "Líquido misturado ao pigmento pra ele FIXAR na rocha: saliva, sangue, gordura animal. Sem aglutinante, o pó não gruda.", emoji: "🥣", cor: "#a16207", fotoUrl: vocabAglutinante },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como os arqueólogos DECIFRAM o que aconteceu há 30 mil anos.",
    paragrafos: [
      "Sem papel, caneta, alfabeto ou internet, como a humanidade guardou suas PRIMEIRAS memórias? A resposta está gravada nas rochas. Os artistas do Paleolítico usaram as paredes das cavernas como o 'computador analógico' pra registrar o mundo.",
      "Pra entender o passado, o arqueólogo divide os vestígios em FONTES. As FONTES VISUAIS são as imagens: pinturas rupestres, gravuras, esculturas. As FONTES MATERIAIS são os objetos físicos: pincéis de osso, pedras de moer pigmento, restos de carvão das fogueiras.",
      "A química da Pré-História era engenhosa. Do CARVÃO VEGETAL saía o preto. Do ÓXIDO DE FERRO (terra avermelhada) saía o vermelho e o marrom. Da argila queimada saía o amarelo. Tudo virava PÓ FINO, misturado com aglutinante (saliva, sangue ou gordura) pra fixar.",
      "Na caverna de ALTAMIRA (Espanha), o pintor não escolheu a parede ao acaso. Aproveitou as ondulações naturais da rocha pra dar VOLUME ao bisão. Quando a luz da fogueira dançava, o animal parecia SALTAR da pedra. Cinema no Paleolítico.",
      "E as MÃOS EM NEGATIVO? A pessoa colava a mão na parede e soprava pigmento pelo canudo de osso. Ficava a silhueta. É a primeira ASSINATURA da história: 'Eu estive aqui'. Um código de identidade gravado há mais de 30 mil anos.",
    ],
    pigmentos: [
      { nome: "Carvão vegetal", hex: "#1f2937", fonte: "Base preta da Pré-História", emoji: "⚫", fotoUrl: matCarvao },
      { nome: "Óxido de ferro (ocre)", hex: "#b91c1c", fonte: "Vermelho e marrom das rochas", emoji: "🔴", fotoUrl: matOcre },
      { nome: "Canudo de osso oco", hex: "#d6d3d1", fonte: "Aerógrafo pré-histórico pra soprar pó", emoji: "🦴", fotoUrl: matOsso },
      { nome: "Pedra de moer", hex: "#78716c", fonte: "Trituradora de pigmento em pó fino", emoji: "🪨", fotoUrl: matPedra },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno do arqueólogo!",
    perguntas: [
      {
        pergunta: "Se o arqueólogo encontra um OSSO FURADO usado pra soprar tinta, que tipo de fonte histórica ele achou?",
        fotoUrl: qOsso,
        alternativas: [
          { texto: "Uma Fonte Material — objeto físico usado na produção da arte", correta: true },
          { texto: "Uma Fonte Oral — porque a pessoa soprava por ele", correta: false },
        ],
        feedbackAcerto: "Excelente! Objetos, ferramentas e utensílios físicos são sempre FONTES MATERIAIS.",
        feedbackErro: "Fonte Oral é fala/tradição contada. O osso é um OBJETO — Fonte Material.",
      },
      {
        pergunta: "Se ele encontra a PRÓPRIA PINTURA do bisão na parede, que tipo de fonte é?",
        fotoUrl: qBisao,
        alternativas: [
          { texto: "Uma Fonte Visual — é a imagem em si", correta: true },
          { texto: "Uma Fonte Material — porque a rocha é material", correta: false },
        ],
        feedbackAcerto: "Perfeito! A IMAGEM em si é Fonte Visual, mesmo que esteja em suporte material.",
        feedbackErro: "Cuidado: o que classificamos é a natureza da FONTE. Se estamos analisando a IMAGEM, é Fonte Visual.",
      },
      {
        pergunta: "Por que o pigmento em pó precisa de AGLUTINANTE (saliva, sangue, gordura) pra virar tinta?",
        fotoUrl: vocabAglutinante,
        alternativas: [
          { texto: "Sem líquido pra ligar as partículas, o pó não gruda na rocha", correta: true },
          { texto: "Pra dar cheiro forte que espanta animais selvagens", correta: false },
        ],
        feedbackAcerto: "Fantástico! Aglutinante é o que TRANSFORMA pó em tinta que fixa no suporte.",
        feedbackErro: "Nada a ver com cheiro 😄. É QUÍMICA: o aglutinante gruda o pigmento na parede.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada vestígio é um tipo de fonte histórica. Classifica certinho!",
    animais: [
      {
        nome: "Osso oco de soprar pigmento", emoji: "🦴", fotoUrl: qOsso,
        corAlvo: { nome: "Fonte Material", hex: "#78350f" },
        opcoes: [
          { nome: "Fonte Material", hex: "#78350f" },
          { nome: "Fonte Visual", hex: "#dc2626" },
          { nome: "Fonte Oral", hex: "#0ea5e9" },
        ],
        falaAcerto: "Isso! Ferramenta física = Fonte Material.",
      },
      {
        nome: "Pintura do bisão na rocha", emoji: "🐂", fotoUrl: qBisao,
        corAlvo: { nome: "Fonte Visual", hex: "#dc2626" },
        opcoes: [
          { nome: "Fonte Visual", hex: "#dc2626" },
          { nome: "Fonte Escrita", hex: "#1e3a8a" },
          { nome: "Fonte Material", hex: "#78350f" },
        ],
        falaAcerto: "Perfeito! A IMAGEM em si é Fonte Visual.",
      },
      {
        nome: "Restos de carvão da fogueira", emoji: "🔥", fotoUrl: qCarvao,
        corAlvo: { nome: "Fonte Material", hex: "#1f2937" },
        opcoes: [
          { nome: "Fonte Material", hex: "#1f2937" },
          { nome: "Fonte Visual", hex: "#dc2626" },
          { nome: "Pigmento acabado", hex: "#f59e0b" },
        ],
        falaAcerto: "Correto! Vestígio físico da fogueira = Fonte Material.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra criar SEU registro rupestre em casa.",
    passos: [
      { id: "p1", texto: "AMASSO uma folha de papel várias vezes até virar textura de rocha", emoji: "📜", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "MOO um pedaço de carvão vegetal em pó fino sobre uma pedra", emoji: "⚫", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "MISTURO o pó com um pouquinho de água (ou borra de café) numa tigela", emoji: "🥣", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "DESENHO com o dedo ou galho um símbolo que represente MINHA vida hoje", emoji: "✏️", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "DEIXO secar e crio meu registro rupestre — Fonte Visual + Material!", emoji: "🎨", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Você acabou de criar uma FONTE HISTÓRICA — igual os artistas de 30 mil anos atrás!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do arqueólogo visual. Toca nas palavras coloridas.",
    titulo: "Diário do Investigador do Tempo",
    trechos: [
      { texto: "Sou um investigador do tempo. Analiso as", palavraDestaque: "fontes visuais", corDestaque: "#dc2626" },
      { texto: "e as", palavraDestaque: "fontes materiais", corDestaque: "#78350f" },
      { texto: "que sobreviveram nas cavernas. Sei que o preto vinha do", palavraDestaque: "carvão", corDestaque: "#1f2937" },
      { texto: "e o vermelho do", palavraDestaque: "óxido de ferro", corDestaque: "#b91c1c" },
      { texto: "Em Altamira, o bisão salta da rocha por causa da geometria natural — arte + arqueologia!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 Laboratório do Arqueólogo! Toca em TODOS os vestígios materiais antes do tempo acabar.",
    titulo: "🎯 Laboratório do Arqueólogo",
    instrucao: "Escave todos os elementos antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🦴", rotulo: "Osso oco (canudo aerógrafo)", cor: "#78350f" },
      { emoji: "⚫", rotulo: "Fragmento de carvão", cor: "#1f2937" },
      { emoji: "🪨", rotulo: "Pedra de moer pigmento", cor: "#78716c" },
      { emoji: "🔴", rotulo: "Ocre vermelho em pó", cor: "#b91c1c" },
      { emoji: "🥣", rotulo: "Tigela com aglutinante", cor: "#a16207" },
      { emoji: "🖐️", rotulo: "Mão em negativo na parede", cor: "#dc2626" },
    ],
    falaFinal: "Escavação concluída! Você classificou todas as Fontes Materiais do sítio arqueológico.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a primeira página do Códice. Toca em cada verbete!",
    titulo: "📓 Caderno do Códice dos Impérios",
    itens: [
      { emoji: "🐂", rotulo: "Bisão de Altamira", descricao: "Pintura rupestre que usa relevo natural da rocha pra criar volume 3D quando iluminada por fogueira.", cor: "#7c2d12", fotoUrl: mapaBisao },
      { emoji: "🖐️", rotulo: "Mãos em Negativo", descricao: "Pigmento soprado por osso oco em volta da mão — primeira assinatura da humanidade.", cor: "#dc2626", fotoUrl: mapaMaos },
      { emoji: "🎨", rotulo: "Fonte Visual", descricao: "Imagens que sobreviveram — pinturas, gravuras, esculturas. Revelam O QUE viam.", cor: "#7c2d12", fotoUrl: vocabVisual },
      { emoji: "🦴", rotulo: "Fonte Material", descricao: "Objetos físicos — ferramentas, ossos, carvão. Revelam COMO faziam.", cor: "#78350f", fotoUrl: vocabMaterial },
      { emoji: "⚫", rotulo: "Pigmento + Aglutinante", descricao: "Química da Pré-História: pó natural + saliva/gordura pra fixar na rocha.", cor: "#1f2937", fotoUrl: vocabAglutinante },
      { emoji: "🕯️", rotulo: "Luz Trêmula da Fogueira", descricao: "Iluminação instável que fazia as pinturas parecerem se mover — o cinema paleolítico.", cor: "#f59e0b", fotoUrl: mapaCaverna },
    ],
    falaFinal: "Primeira página do Códice dos Impérios Perdidos RESTAURADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, investigador do tempo!",
    quiz: {
      pergunta: "Se um arqueólogo encontra um pedaço de OSSO DE ANIMAL FURADO usado pra soprar tinta na Pré-História, que tipo de fonte histórica ele achou?",
      alternativas: [
        { texto: "Uma Fonte Material — objetos, ferramentas e utensílios físicos", correta: true },
        { texto: "Uma Fonte Oral — porque servia pra soprar pelo bico", correta: false },
      ],
      feedback: "Excelente! Objetos, ferramentas e utensílios físicos são sempre classificados como FONTES MATERIAIS. Fonte Oral é fala/tradição contada de geração em geração — coisa totalmente diferente.",
    },
    missaoFamilia:
      "📸 Meu Registro Rupestre: Com um adulto, amasse uma folha de papel até parecer textura de rocha. Use carvão de churrasco moído (ou lápis grafite 6B) e borra de café úmida pra desenhar um símbolo da SUA vida hoje (animal de estimação, família, ferramenta favorita). Registre no álbum — você acabou de criar uma Fonte Visual + Material da sua época!",
    recompensaTitulo: "📜 Página 1 restaurada — O Código Oculto dos Primeiros Humanos.",
    recompensaItem: "🪨 Fragmento de Carvão Fossilizado",
  },

  recompensa: { xp: 100, moedas: 50, medalha: "Fragmento de Carvão Fossilizado" },
};
