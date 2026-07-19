import type { AulaArteV1 } from "../../types";
import __asset_mapaRavena from "@/assets/arte-5ano/u5-mapa-ravena.jpg.asset.json";
const mapaRavena = __asset_mapaRavena.url;
import __asset_mapaGaudi from "@/assets/arte-5ano/u5-mapa-gaudi.jpg.asset.json";
const mapaGaudi = __asset_mapaGaudi.url;
import __asset_mapaTesselas from "@/assets/arte-5ano/u5-mapa-tesselas.jpg.asset.json";
const mapaTesselas = __asset_mapaTesselas.url;
import __asset_mapaRomano from "@/assets/arte-5ano/u5-mapa-romano.jpg.asset.json";
const mapaRomano = __asset_mapaRomano.url;
import vocabTessela from "@/assets/arte-5ano/u5-vocab-tessela.jpg";
import __asset_vocabAndamento from "@/assets/arte-5ano/u5-vocab-andamento.jpg.asset.json";
const vocabAndamento = __asset_vocabAndamento.url;
import __asset_vocabMosaico from "@/assets/arte-5ano/u5-vocab-mosaico.jpg.asset.json";
const vocabMosaico = __asset_vocabMosaico.url;
import __asset_vocabRejunte from "@/assets/arte-5ano/u5-vocab-rejunte.jpg.asset.json";
const vocabRejunte = __asset_vocabRejunte.url;
import matRevista from "@/assets/arte-5ano/u5-mat-revista.jpg";
import matVidro from "@/assets/arte-5ano/u5-mat-vidro.jpg";
import __asset_matOuro from "@/assets/arte-5ano/u5-mat-ouro.jpg.asset.json";
const matOuro = __asset_matOuro.url;
import passo1 from "@/assets/arte-5ano/u5-passo1.jpg";
import passo2 from "@/assets/arte-5ano/u5-passo2.jpg";
import passo3 from "@/assets/arte-5ano/u5-passo3.jpg";
import __asset_passo4 from "@/assets/arte-5ano/u5-passo4.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_passo5 from "@/assets/arte-5ano/u5-passo5.jpg.asset.json";
const passo5 = __asset_passo5.url;

/**
 * Arte · 5º Ano · Unidade 5 · Aula 01 — "A Arquitetura dos Mosaicos e a Fragmentação da Imagem"
 * Metanarrativa: 🧩 A Matriz da Percepção Visual
 * Fonte histórica: Mosaicos bizantinos de Ravena (séc. VI) e Antoni Gaudí
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-mosaicos",
  titulo: "A Arquitetura dos Mosaicos e a Fragmentação da Imagem",
  iconeTrilha: "🧩",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Arquiteto da Percepção! Brilha descobriu que uma imagem inteira pode nascer de MILHARES de pedacinhos quebrados. Isso é MOSAICO: a arte de fragmentar pra depois reconstruir. Toca em cada pista.",
    titulo: "🧩 A Matriz da Fragmentação",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "👑", rotulo: "Basílica de Ravena (séc. VI)", descricao: "Na Itália, o imperador Justiniano aparece em mosaico bizantino feito de milhares de tesselas de ouro e vidro que brilham com a luz das velas.", cor: "#1e40af", fotoUrl: mapaRavena },
      { emoji: "🦎", rotulo: "Antoni Gaudí e o Trencadís", descricao: "Na Espanha, Gaudí quebrava azulejos e ladrilhos de cerâmica pra colar em bancos ondulados no Parque Güell — mosaico moderno cheio de cor.", cor: "#0ea5e9", fotoUrl: mapaGaudi },
      { emoji: "✨", rotulo: "Tesselas de Ouro e Vidro", descricao: "Cada tessela é um cubinho pequeno de vidro, cerâmica ou pedra. Juntas, criam uma síntese visual — o olho junta os fragmentos à distância.", cor: "#7c2d12", fotoUrl: mapaTesselas },
      { emoji: "🏛️", rotulo: "Mosaico Romano de Piso", descricao: "Muito antes de Ravena e Gaudí, os romanos já cobriam pisos de casas ricas com mosaicos geométricos feitos de pedrinhas naturais.", cor: "#78350f", fotoUrl: mapaRomano },
    ],
    falaFinal: "Você vai construir imagem com fragmentos igual os mestres do mosaico!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de arquiteto dos fragmentos!",
    perguntas: [
      {
        pergunta: "Por que o mosaico de Ravena brilha tanto na luz das velas?",
        fotoUrl: mapaRavena,
        alternativas: [
          { texto: "Porque as tesselas têm folha de ouro e vidro que refletem a luz", correta: true },
          { texto: "Porque a parede foi pintada com tinta metálica", correta: false },
        ],
        feedbackAcerto: "Perfeito! O ouro e o vidro das tesselas fazem a imagem cintilar.",
        feedbackErro: "Não é tinta! São as TESSELAS de ouro e vidro que refletem a luz.",
      },
      {
        pergunta: "O que Gaudí fazia para criar o Trencadís no Parque Güell?",
        fotoUrl: mapaGaudi,
        alternativas: [
          { texto: "Quebrava azulejos e ladrilhos de cerâmica pra colar em bancos ondulados", correta: true },
          { texto: "Pintava os bancos com pincel fininho", correta: false },
        ],
        feedbackAcerto: "Isso! Trencadís é mosaico feito de cacos de cerâmica quebrada de propósito.",
        feedbackErro: "Não é pintura — Gaudí QUEBRAVA azulejos pra criar o mosaico Trencadís.",
      },
      {
        pergunta: "Uma única peça pequena de vidro, cerâmica ou pedra do mosaico se chama…",
        fotoUrl: vocabTessela,
        alternativas: [
          { texto: "Tessela", correta: true },
          { texto: "Pincelada", correta: false },
        ],
        feedbackAcerto: "Correto! Tessela é o nome do fragmento que forma o mosaico.",
        feedbackErro: "Pincelada é de pintura. O fragmento do mosaico é a TESSELA.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário da arquitetura dos fragmentos. Toca em cada card!",
    cards: [
      { termo: "Tessela", definicao: "Pequeno fragmento de vidro, cerâmica ou pedra usado pra montar um mosaico. É a unidade básica de tudo.", emoji: "🔲", cor: "#7c2d12", fotoUrl: vocabTessela },
      { termo: "Andamento", definicao: "As linhas-guia que orientam a direção das tesselas, criando fluxo e movimento na imagem final.", emoji: "🌀", cor: "#b45309", fotoUrl: vocabAndamento },
      { termo: "Mosaico", definicao: "Imagem inteira construída pela junção de muitas tesselas — a fragmentação vira síntese visual à distância.", emoji: "🧩", cor: "#1e40af", fotoUrl: vocabMosaico },
      { termo: "Rejunte", definicao: "Espaço entre as tesselas, preenchido com argamassa. Sem ele, as peças ficariam coladas sem respiro.", emoji: "◻️", cor: "#44403c", fotoUrl: vocabRejunte },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como pedacinhos quebrados viram obra-prima.",
    paragrafos: [
      "O MOSAICO é a arte de construir uma imagem inteira usando fragmentos pequenos chamados TESSELAS. É uma SÍNTESE ADITIVA VISUAL: o olho junta os pedacinhos à distância e enxerga uma figura completa.",
      "No século VI, na BASÍLICA DE SÃO VITAL, em Ravena (Itália), artistas bizantinos cobriram as paredes com o imperador Justiniano e sua corte — usando tesselas de ouro, vidro colorido e cerâmica que brilham com a luz das velas.",
      "Muito antes, os ROMANOS já usavam mosaico geométrico pra decorar pisos de casas ricas, com pedrinhas naturais organizadas em padrões repetidos.",
      "No século XX, o arquiteto espanhol ANTONI GAUDÍ reinventou a técnica: quebrava azulejos e ladrilhos de cerâmica de propósito pra colar em bancos ondulados no Parque Güell. Essa técnica se chama TRENCADÍS.",
      "Todo mosaico segue o ANDAMENTO: linhas-guia que orientam a direção das tesselas, criando um fluxo visual. Entre uma tessela e outra, fica o REJUNTE — o espaço que dá respiro à composição.",
    ],
    pigmentos: [
      { nome: "Papel de revista colorido", hex: "#facc15", fonte: "Vira tesselas de papel na prática", emoji: "📰", fotoUrl: matRevista },
      { nome: "Tesselas de vidro", hex: "#0ea5e9", fonte: "Cacos coloridos e brilhantes", emoji: "🔷", fotoUrl: matVidro },
      { nome: "Folha de ouro", hex: "#eab308", fonte: "Camada fina de ouro das tesselas bizantinas", emoji: "✨", fotoUrl: matOuro },
      { nome: "Argamassa de rejunte", hex: "#44403c", fonte: "Preenche o espaço entre as tesselas", emoji: "◻️", fotoUrl: vocabRejunte },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno do arquiteto dos fragmentos!",
    perguntas: [
      {
        pergunta: "O que é o ANDAMENTO num mosaico?",
        fotoUrl: vocabAndamento,
        alternativas: [
          { texto: "As linhas-guia que orientam a direção e o fluxo das tesselas", correta: true },
          { texto: "O nome da cola usada pra fixar as peças", correta: false },
        ],
        feedbackAcerto: "Perfeito! O andamento organiza o movimento visual do mosaico.",
        feedbackErro: "Cola não é isso. ANDAMENTO é a direção/fluxo das linhas de tesselas.",
      },
      {
        pergunta: "Qual técnica Gaudí usava nos bancos do Parque Güell?",
        fotoUrl: mapaGaudi,
        alternativas: [
          { texto: "Trencadís — mosaico de azulejos quebrados de propósito", correta: true },
          { texto: "Afresco — pintura direto na parede úmida", correta: false },
        ],
        feedbackAcerto: "Isso! O Trencadís transforma cacos quebrados em mosaico colorido.",
        feedbackErro: "Afresco é pintura em parede. Gaudí usava o TRENCADÍS, feito de cacos quebrados.",
      },
      {
        pergunta: "Por que os mosaicos de Ravena são feitos de tesselas de ouro e vidro?",
        fotoUrl: mapaRavena,
        alternativas: [
          { texto: "Pra refletir a luz das velas e brilhar dentro da basílica", correta: true },
          { texto: "Porque era o material mais barato disponível na época", correta: false },
        ],
        feedbackAcerto: "Correto! Ouro e vidro fazem o mosaico cintilar com a luz.",
        feedbackErro: "Não era o mais barato — era escolhido justamente pelo BRILHO refletido.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada mosaico usa um estilo de fragmentação. Combina certinho!",
    animais: [
      {
        nome: "Imperador Justiniano", emoji: "👑", fotoUrl: mapaRavena,
        corAlvo: { nome: "Mosaico Bizantino de Ravena", hex: "#1e40af" },
        opcoes: [
          { nome: "Mosaico Bizantino de Ravena", hex: "#1e40af" },
          { nome: "Trencadís de Gaudí", hex: "#0ea5e9" },
          { nome: "Pontilhismo de Seurat", hex: "#a855f7" },
        ],
        falaAcerto: "Isso! Tesselas de ouro e vidro brilhando na Basílica de São Vital.",
      },
      {
        nome: "Banco ondulado colorido", emoji: "🦎", fotoUrl: mapaGaudi,
        corAlvo: { nome: "Trencadís de Gaudí", hex: "#0ea5e9" },
        opcoes: [
          { nome: "Trencadís de Gaudí", hex: "#0ea5e9" },
          { nome: "Mosaico Bizantino de Ravena", hex: "#1e40af" },
          { nome: "Vitral gótico", hex: "#f59e0b" },
        ],
        falaAcerto: "Perfeito! Azulejos quebrados de propósito viram banco cheio de cor.",
      },
      {
        nome: "Piso de casa romana", emoji: "🏛️", fotoUrl: mapaRomano,
        corAlvo: { nome: "Mosaico Geométrico Romano", hex: "#78350f" },
        opcoes: [
          { nome: "Mosaico Geométrico Romano", hex: "#78350f" },
          { nome: "Anamorfose de perspectiva", hex: "#7c2d12" },
          { nome: "Trencadís de Gaudí", hex: "#0ea5e9" },
        ],
        falaAcerto: "Correto! Pedrinhas naturais organizadas em padrão geométrico repetido.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra construir seu PRÓPRIO mosaico de papel.",
    passos: [
      { id: "p1", texto: "CONTORNO o andamento: desenho as linhas-guia primeiro numa folha", emoji: "🌀", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "RECORTO tesselas irregulares de papel colorido de revista", emoji: "✂️", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "SEPARO as tesselas por cor em montinhos organizados", emoji: "🎨", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "COLO as tesselas seguindo a direção do andamento desenhado", emoji: "🖇️", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "DEIXO o rejunte: pequenos espaços entre cada tessela colada", emoji: "◻️", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Seu mosaico de papel segue a mesma lógica dos mestres bizantinos!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do arquiteto dos fragmentos. Toca nas palavras coloridas.",
    titulo: "Diário do Arquiteto dos Fragmentos",
    trechos: [
      { texto: "Sou um construtor de imagens quebradas. Cada peça é uma", palavraDestaque: "tessela", corDestaque: "#7c2d12" },
      { texto: "Eu sigo o", palavraDestaque: "andamento", corDestaque: "#b45309" },
      { texto: "pra dar fluxo e direção ao meu", palavraDestaque: "mosaico", corDestaque: "#1e40af" },
      { texto: "Entre uma peça e outra, deixo sempre o", palavraDestaque: "rejunte", corDestaque: "#44403c" },
      { texto: "Eu transformo cacos quebrados em obra-prima — igual Ravena e Gaudí!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 O Arquiteto de Tesselas! Toca em CADA caco antes do tempo acabar pra encaixar o mosaico.",
    titulo: "🎯 O Arquiteto de Tesselas",
    instrucao: "Toque em todos os cacos antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🔲", rotulo: "Tessela dourada bizantina", cor: "#eab308" },
      { emoji: "🔷", rotulo: "Tessela de vidro azul", cor: "#1e40af" },
      { emoji: "🌀", rotulo: "Linha de andamento traçada", cor: "#b45309" },
      { emoji: "✂️", rotulo: "Caco de cerâmica recortado", cor: "#dc2626" },
      { emoji: "◻️", rotulo: "Espaço de rejunte", cor: "#44403c" },
      { emoji: "🧩", rotulo: "Mosaico completo encaixado", cor: "#7c2d12" },
    ],
    falaFinal: "Mosaico encaixado! Você domina a arquitetura da fragmentação.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno dos mosaicos. Toca em cada verbete!",
    titulo: "📓 Caderno da Fragmentação",
    itens: [
      { emoji: "👑", rotulo: "Basílica de Ravena (séc. VI)", descricao: "Mosaico bizantino do imperador Justiniano com tesselas de ouro e vidro.", cor: "#1e40af", fotoUrl: mapaRavena },
      { emoji: "🔲", rotulo: "Tessela", descricao: "Pequeno fragmento de vidro, cerâmica ou pedra — a unidade básica do mosaico.", cor: "#7c2d12", fotoUrl: vocabTessela },
      { emoji: "🌀", rotulo: "Andamento", descricao: "Linhas-guia que orientam a direção e o fluxo das tesselas.", cor: "#b45309", fotoUrl: vocabAndamento },
      { emoji: "🧩", rotulo: "Mosaico", descricao: "Imagem completa formada pela junção de muitas tesselas.", cor: "#1e40af", fotoUrl: vocabMosaico },
      { emoji: "🦎", rotulo: "Trencadís de Gaudí", descricao: "Azulejos quebrados de propósito colados em bancos ondulados.", cor: "#0ea5e9", fotoUrl: mapaGaudi },
      { emoji: "🏛️", rotulo: "Mosaico Romano", descricao: "Pisos geométricos feitos de pedrinhas naturais na Roma Antiga.", cor: "#78350f", fotoUrl: mapaRomano },
    ],
    falaFinal: "Nova página do Atlas da Matriz da Percepção DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, arquiteto dos fragmentos!",
    quiz: {
      pergunta: "Como se chama cada pequeno fragmento de vidro, cerâmica ou pedra que forma um mosaico?",
      alternativas: [
        { texto: "Tessela", correta: true },
        { texto: "Pincelada", correta: false },
      ],
      feedback: "Perfeito! A TESSELA é a unidade básica de todo mosaico — dos bizantinos de Ravena até o Trencadís de Gaudí. Juntas, elas viram uma imagem inteira.",
    },
    missaoFamilia:
      "🥚 O Mosaico de Casca de Ovo: Com seus pais, pinte cascas de ovo lavadas com tinta colorida, quebre em pedacinhos e cole num papelão seguindo um andamento (linhas-guia) desenhado antes. Deixe o rejunte entre as cascas. Registrem no álbum!",
    recompensaTitulo: "📜 Nova página restaurada — O Painel Fragmentado dos Imperadores.",
    recompensaItem: "✨ Tessela de Vidro Bizantino com Folha de Ouro",
  },

  recompensa: { xp: 100, moedas: 50, medalha: "Tessela de Vidro Bizantino com Folha de Ouro" },
};
